import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { isValidToken, upsertEnvFileContent } = require('../lib/onepassword.js');

test('isValidToken aceita token de service account real', () => {
  assert.equal(isValidToken('ops_' + 'a'.repeat(800)), true);
  assert.equal(isValidToken('ops_eyJzaWduSW5BZGRyZXNzIjoibXkuMXBhc3N3b3JkLmNvbSJ9'), true);
});

test('isValidToken rejeita lixo do clipboard', () => {
  assert.equal(isValidToken(''), false);
  assert.equal(isValidToken('pbpaste > ~/.op-token'), false);
  assert.equal(isValidToken('ops_'), false); // prefixo sem corpo
  assert.equal(isValidToken('ops_curto'), false); // corpo curto demais
  assert.equal(isValidToken('token ops_abc'), false); // nao comeca com ops_
  assert.equal(isValidToken(null), false);
  assert.equal(isValidToken(undefined), false);
});

test('upsertEnvFileContent adiciona o export em arquivo vazio', () => {
  const out = upsertEnvFileContent('', 'ops_' + 'x'.repeat(40));
  assert.match(out, /export OP_SERVICE_ACCOUNT_TOKEN='ops_x+'/);
  assert.match(out, /gravado pelo Auroq OS/);
});

test('upsertEnvFileContent remove definicao antiga mas preserva comentarios do usuario', () => {
  const existing = [
    'export PATH="$HOME/bin:$PATH"',
    '# comentario do usuario sobre OP_SERVICE_ACCOUNT_TOKEN — nao apagar',
    "export OP_SERVICE_ACCOUNT_TOKEN='ops_velho1234567890123456789'",
    "  OP_SERVICE_ACCOUNT_TOKEN='ops_sem_export_indentado_123'",
    'alias ll="ls -la"',
  ].join('\n');
  const out = upsertEnvFileContent(existing, 'ops_' + 'n'.repeat(40));
  assert.equal(out.includes('ops_velho'), false);
  assert.equal(out.includes('ops_sem_export'), false);
  // comentario do usuario que so MENCIONA a var fica intacto
  assert.equal(out.includes('# comentario do usuario sobre OP_SERVICE_ACCOUNT_TOKEN'), true);
  assert.equal(out.includes('export PATH="$HOME/bin:$PATH"'), true);
  assert.equal(out.includes('alias ll="ls -la"'), true);
  // exatamente UMA linha de export do token
  const exports = out.split('\n').filter((l) => l.startsWith('export OP_SERVICE_ACCOUNT_TOKEN'));
  assert.equal(exports.length, 1);
});

test('upsertEnvFileContent e idempotente', () => {
  const token = 'ops_' + 'i'.repeat(40);
  const once = upsertEnvFileContent('export FOO=bar', token);
  const twice = upsertEnvFileContent(once, token);
  assert.equal(once, twice);
});
