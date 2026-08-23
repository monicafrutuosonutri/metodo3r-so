'use strict';

/**
 * Auroq OS — Conexao 1Password CLI
 *
 * Fluxo seguro: o aluno copia o token de Service Account (ops_...) e roda
 * `npx auroq-os conectar-1password`. O token e lido direto da area de
 * transferencia, validado online e gravado de forma persistente — nunca e
 * digitado, impresso ou passado por argumento de linha de comando.
 *
 * @module auroq-os/onepassword
 */

const os = require('os');
const path = require('path');
const fs = require('fs-extra');
const { execSync, execFileSync } = require('child_process');

const PURPLE = '\x1b[38;2;120;80;200m';
const GOLD = '\x1b[38;2;245;158;11m';
const CYAN = '\x1b[38;2;34;211;238m';
const GREEN = '\x1b[38;2;52;211;153m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

function log(msg) { console.log(`  ${msg}`); }
function step(msg) { console.log(`\n  ${CYAN}▸${RESET} ${msg}`); }
function ok(msg) { console.log(`  ${GREEN}✓${RESET} ${msg}`); }
function warn(msg) { console.log(`  ${GOLD}!${RESET} ${msg}`); }
function err(msg) { console.log(`  ${PURPLE}✗${RESET} ${msg}`); }

const TOKEN_VAR = 'OP_SERVICE_ACCOUNT_TOKEN';

// ─── Helpers puros (testaveis) ───────────────────────────

function isValidToken(value) {
  return typeof value === 'string' && /^ops_[A-Za-z0-9_=+/.-]{20,}$/.test(value);
}

/**
 * Remove qualquer linha antiga do token e devolve o conteudo novo do arquivo
 * de ambiente com a linha export atualizada no final.
 */
const ENV_COMMENT = '# 1Password CLI - Service Account (gravado pelo Auroq OS)';

const TOKEN_LINE_RE = /^\s*(export\s+)?OP_SERVICE_ACCOUNT_TOKEN=/;

function upsertEnvFileContent(existing, token) {
  // Remove apenas linhas que DEFINEM a variavel (nao comentarios do usuario
  // que so mencionam o nome) + o marcador de bloco do Auroq.
  const kept = String(existing || '')
    .split('\n')
    .filter((line) => !TOKEN_LINE_RE.test(line) && line.trim() !== ENV_COMMENT);
  while (kept.length > 0 && kept[kept.length - 1].trim() === '') kept.pop();
  kept.push('');
  kept.push(ENV_COMMENT);
  kept.push(`export ${TOKEN_VAR}='${token}'`);
  kept.push('');
  return kept.join('\n');
}

// ─── Deteccao e instalacao do op ─────────────────────────

function hasCommand(cmd) {
  try {
    const probe = process.platform === 'win32' ? `where ${cmd}` : `command -v ${cmd}`;
    execSync(probe, { stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function opVersion() {
  try {
    return execSync('op --version', { stdio: 'pipe', encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
}

function installOp() {
  if (process.platform === 'darwin') {
    if (!hasCommand('brew')) {
      err('Homebrew nao encontrado. Instale em https://brew.sh e rode este comando de novo.');
      return false;
    }
    log(`${DIM}Instalando via Homebrew (pode levar um minuto)...${RESET}`);
    try {
      execSync('brew install --cask 1password-cli', { stdio: 'pipe', maxBuffer: 64 * 1024 * 1024 });
      return true;
    } catch {
      err('Instalacao via Homebrew falhou. Tente manualmente: brew install --cask 1password-cli');
      return false;
    }
  }

  if (process.platform === 'win32') {
    if (!hasCommand('winget')) {
      err('winget nao encontrado. Instale o 1Password CLI manualmente:');
      err('https://developer.1password.com/docs/cli/get-started/');
      return false;
    }
    log(`${DIM}Instalando via winget (pode levar um minuto)...${RESET}`);
    try {
      execSync('winget install --id AgileBits.1Password.CLI --accept-source-agreements --accept-package-agreements', { stdio: 'pipe', maxBuffer: 64 * 1024 * 1024 });
      return true;
    } catch {
      err('Instalacao via winget falhou. Tente manualmente: winget install AgileBits.1Password.CLI');
      return false;
    }
  }

  err('Instalacao automatica disponivel apenas no macOS e Windows.');
  err('Instale o 1Password CLI manualmente: https://developer.1password.com/docs/cli/get-started/');
  return false;
}

// ─── Clipboard (sem dependencia externa) ─────────────────

function readClipboard() {
  const opts = { stdio: 'pipe', encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 };
  try {
    if (process.platform === 'darwin') {
      return execSync('pbpaste', opts);
    }
    if (process.platform === 'win32') {
      return execSync('powershell -NoProfile -Command "Get-Clipboard -Raw"', opts);
    }
    // Linux: tenta xclip, depois xsel
    if (hasCommand('xclip')) {
      return execSync('xclip -selection clipboard -o', opts);
    }
    if (hasCommand('xsel')) {
      return execSync('xsel --clipboard --output', opts);
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Validacao online e persistencia ─────────────────────

function testToken(token) {
  try {
    const out = execFileSync('op', ['whoami'], {
      stdio: 'pipe',
      encoding: 'utf8',
      env: { ...process.env, [TOKEN_VAR]: token },
    });
    return out.trim();
  } catch {
    return null;
  }
}

function persistToken(token) {
  if (process.platform === 'win32') {
    // Variavel de ambiente do usuario — token passa por env var, nunca por argv
    const psEnv = { stdio: 'pipe', env: { ...process.env, AUROQ_OP_TOKEN: token } };
    try {
      execSync(
        `powershell -NoProfile -Command "[Environment]::SetEnvironmentVariable('${TOKEN_VAR}', $env:AUROQ_OP_TOKEN, 'User')"`,
        psEnv
      );
    } catch {
      // Maquinas corporativas com Constrained Language Mode bloqueiam chamadas
      // .NET — fallback via registro (Set-ItemProperty e cmdlet, permitido)
      execSync(
        `powershell -NoProfile -Command "Set-ItemProperty -Path 'HKCU:\\Environment' -Name '${TOKEN_VAR}' -Value $env:AUROQ_OP_TOKEN"`,
        psEnv
      );
      warn('Gravado via registro (modo restrito detectado). Se o terminal novo nao enxergar, reinicie o computador uma vez.');
    }
    return 'variavel de ambiente do usuario (Windows)';
  }

  // macOS: sempre ~/.zshenv (zsh e o shell padrao do sistema).
  // Linux: ~/.bashrc se o shell for bash, senao ~/.zshenv.
  const shell = process.env.SHELL || '';
  const envFile = (process.platform !== 'darwin' && shell.includes('bash'))
    ? path.join(os.homedir(), '.bashrc')
    : path.join(os.homedir(), '.zshenv');

  const existing = fs.existsSync(envFile) ? fs.readFileSync(envFile, 'utf8') : '';
  fs.writeFileSync(envFile, upsertEnvFileContent(existing, token), { mode: 0o600 });
  return envFile.replace(os.homedir(), '~');
}

// ─── Comando principal ───────────────────────────────────

async function connect() {
  console.log(`\n${PURPLE}${BOLD}  Conectar 1Password — Auroq OS${RESET}`);

  // 1. Garantir que o op existe
  step('Verificando 1Password CLI...');
  let version = opVersion();
  if (!version) {
    warn('1Password CLI (op) nao encontrado — instalando...');
    if (!installOp()) process.exit(1);
    version = opVersion();
    if (!version) {
      err('op instalado mas nao encontrado no PATH. Feche e abra o terminal, e rode de novo.');
      process.exit(1);
    }
  }
  ok(`1Password CLI v${version}`);

  // 2. Ler o token da area de transferencia
  step('Lendo token da area de transferencia...');
  const raw = readClipboard();
  if (raw === null) {
    err('Nao consegui ler a area de transferencia neste sistema.');
    process.exit(1);
  }
  const token = raw.replace(/\s/g, '');

  if (!isValidToken(token)) {
    err('A area de transferencia nao contem um token valido (deve comecar com ops_).');
    log('');
    log(`${BOLD}Como resolver:${RESET}`);
    log(`  1. Abra o 1Password e copie o seu token de Service Account (${CYAN}Ctrl/Cmd + C${RESET})`);
    log(`  2. ${BOLD}Sem copiar mais nada${RESET}, rode este comando de novo`);
    process.exit(1);
  }
  ok('Token encontrado (formato valido)');

  // 3. Validar online ANTES de gravar
  step('Testando conexao com o 1Password...');
  const whoami = testToken(token);
  if (!whoami) {
    err('O token foi lido mas a conexao falhou. Possiveis causas:');
    log('  - Token revogado ou expirado — gere um novo no painel do 1Password');
    log('  - Sem internet no momento — confira a conexao e rode de novo');
    process.exit(1);
  }
  ok('Conexao validada');
  console.log(whoami.split('\n').map((l) => `    ${DIM}${l}${RESET}`).join('\n'));

  // 4. Gravar persistente
  step('Salvando conexao...');
  const where = persistToken(token);
  ok(`Token salvo em ${where}`);

  // 5. Resultado
  const restartHint = process.platform === 'win32'
    ? `${DIM}  Importante: feche TODAS as janelas do terminal (se usa VS Code ou${RESET}
${DIM}  Windows Terminal, feche o programa inteiro) e abra de novo para${RESET}
${DIM}  que eles enxerguem a conexao nova.${RESET}`
    : `${DIM}  Importante: feche e abra de novo o terminal (e o Claude/Codex) para${RESET}
${DIM}  que eles enxerguem a conexao nova.${RESET}`;

  console.log(`
${GREEN}${BOLD}  ✅ 1Password conectado com sucesso.${RESET}

${DIM}  A conexao e permanente — voce nao precisa repetir este processo.${RESET}
${restartHint}
`);
}

module.exports = {
  connect,
  // exportados para testes
  isValidToken,
  upsertEnvFileContent,
};
