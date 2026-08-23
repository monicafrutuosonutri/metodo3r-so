# Auroq OS — Sistema Operacional de IA para Experts

Transforma Claude Code, Codex CLI ou Grok Build num centro de comando inteligente para operar seu negocio digital.

**Pensar. Fazer. Lembrar.** Tudo com IA.

## Instalacao

### Pre-requisitos
- Mac com Apple Silicon (recomendado)
- Node.js 22+
- Git
- Claude Code, Codex CLI ou Grok Build (um deles basta)

### Setup

```bash
# 1. Crie uma pasta pro seu negocio
mkdir meu-negocio && cd meu-negocio

# 2. Instale o Auroq OS (gate: email + senha da Mentoria Arcane)
npx auroq-os init

# 3A. Abra o Claude Code
claude

# 4A. Ative o Companion
/auroq-companion

# OU 3B. Abra o Codex CLI
codex

# 4B. Ative o Companion
$companion

# OU 3C. Abra o Grok Build (no diretorio do negocio)
grok

# 4C. Ative o Companion (Grok le .claude/commands nativo — mesmo fluxo do Claude)
/auroq-companion
```

> **Grok:** nao precisa de `sync:codex`. Ele descobre `.claude/commands/`,
> `.claude/rules/` e `AGENTS.md` sozinho. Use Claude/Grok com slash commands;
> use Codex com `$nome` apos o sync de skills.

> **Acesso exclusivo para alunos da Mentoria Arcane.** O `init` pede o mesmo email + senha
> que voce usa em [mentoria-arcane.vercel.app](https://mentoria-arcane.vercel.app).
> A sessao fica salva em `~/.arcane/credentials.json` e renova automaticamente.

### Comandos de sessao

| Comando | O que faz |
|---------|-----------|
| `auroq-os init` | Instala o Auroq OS do zero — primeira maquina (exige login na primeira vez) |
| `auroq-os clone` | Continua o SEU negocio em outra maquina (ou na maquina de um colaborador) — baixa tudo do GitHub, ja instalado |
| `auroq-os fix-gitignore` | Garante as protecoes de segredo no .gitignore (vault, .env, midia) e destraqueia segredos versionados |
| `auroq-os login` | Forca novo login (substitui credencial atual) |
| `auroq-os logout` | Encerra sessao local (remove `~/.arcane/credentials.json`) |
| `auroq-os whoami` | Mostra usuario autenticado e status de acesso |
| `auroq-os sync-codex` | Regenera e verifica as skills locais do Codex |
| `auroq-os conectar-1password` | Conecta o 1Password CLI — le o token de Service Account direto do Ctrl+C (nunca digitado nem exposto), instala o `op` se faltar, valida online e salva permanente (Mac/Windows) |

Dentro do projeto instalado, os mesmos checks ficam disponiveis como
`npm run auroq:sync:codex`, `npm run auroq:sync:codex:check` e
`npm run auroq:validate`. O instalador adiciona esses scripts sem sobrescrever
os comandos existentes do seu negocio.

### Segunda maquina (ou colaborador)

O Auroq nao mora no computador — mora no GitHub. Pra trabalhar em outra maquina,
**nao instale de novo**: clone o que ja existe.

```bash
# na maquina nova (Claude Code instalado e logado)
npx auroq-os clone          # lista seus repos do GitHub e baixa o negocio inteiro
cd meu-negocio
claude
/AuroqOS:agents:ops
*conectar-1password         # reconectar o cofre (uma vez so nesta maquina)
```

Ritual diario em toda maquina: **abriu o `claude` → o sistema puxa sozinho o que mudou · terminou → diga "salva e entrega"** (qualquer agente executa o ritual do Ops; `*sync`/`*commit`/`*push` seguem como atalhos).
Colaborador usa conta propria de tudo (GitHub via convite, assinatura Claude propria,
cofre 1Password com escopo) — nunca a senha do dono. **Colaborador nao precisa ser
aluno**: o acesso dele e o convite do GitHub (o `clone` nao pede login); quem atualiza
o sistema e o dono, e o colaborador recebe as atualizacoes automaticamente ao abrir o `claude`.

## Estrutura

```
business/           → Sua empresa (campanhas, processos, agentes)
docs/knowledge/     → Biblioteca ETL (sua mente, seu negocio, conhecimento)
agents/             → Seu exercito (companion, workers, minds, squads)
.claude/            → Ponte Claude Code + Grok (agentes, rules, hooks, commands)
.agents/skills/      → Ponte Codex local (skills geradas por projeto)
.auroq-core/        → Framework (nao modificar)
```

## Agentes Core

| Agente | Comando | O que faz |
|--------|---------|-----------|
| Companion | `/auroq-companion` ou `$companion` | Parceiro cognitivo. Situa, lembra, pensa junto |
| Ops | `/AuroqOS:agents:ops` ou `$ops` | Git, deploy, ambiente, install |
| Organizer | `/auroq-organizer` ou `$organizer` | Organizacao, guarda documentos, limpeza, backup |

### Meta Squads (criadores de agentes)

| Squad | Comando | O que faz |
|-------|---------|-----------|
| Squad Forge | `/auroq-squad-forge` | Cria squads multi-agente a partir dos seus processos |
| Mind Forge | `/auroq-mind-forge` | Fabrica mentes sinteticas e consultores |
| Worker Forge | `/auroq-worker-forge` | Cria workers especializados |
| Clone Forge | `/auroq-clone-forge` | Clona mentes reais em agentes digitais |
| ETLmaker | `/auroq-etlmaker` | Extrai conhecimento de fontes brutas e estrutura em KBs |

## Primeiro uso

1. Ative o Companion (`/auroq-companion` no Claude/Grok ou `$companion` no Codex)
2. Preencha os templates em `docs/knowledge/expert-mind/` (quem voce e)
3. Preencha `docs/knowledge/expert-business/` (o que voce faz)
4. Pronto — o sistema ja te conhece

## Filosofia

- **Repertorio + IA = Resultado**
- Expert manda e julga. IA executa
- Tudo documentado. Nada se perde
- Evolucao incremental. Nunca do zero
- Pain-first. Resolve a dor de agora

---

*Auroq OS v2.2.3 — by Euriler Jube / Arka*
