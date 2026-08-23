# Puxar e Entregar — Qualquer Agente Executa o Ritual do Ops

> O expert NUNCA precisa trocar de agente pra salvar, entregar ou puxar trabalho.
> Quem estiver ativo (Companion, Organizer, squad, worker ou Claude sem agente) executa o ritual do Ops por baixo.
> O Ops continua sendo o DONO do ritual; os outros agentes o executam.

## Intents (linguagem natural → acao)

| O expert diz (exemplos) | Acao |
|-------------------------|------|
| "salva", "guarda isso", "faz checkpoint", "commita" | SALVAR (commit inteligente) |
| "entrega", "manda pro GitHub", "sobe", "faz push" | ENTREGAR (push com pre-push) |
| "salva e entrega", "fecha o dia", "acabei por hoje" | SALVAR + ENTREGAR |
| "puxa", "atualiza do GitHub", "traz o que mudou", "sync" | PUXAR (sync) |

## O ritual — fonte da verdade: `.claude/commands/AuroqOS/agents/ops.md`

Leia as secoes `*commit`, `*pre-push` e `*sync` do ops.md e execute os passos como estao. O minimo inegociavel:

- **SALVAR:** revisar o que mudou → conferir tracker/contexto → mensagem em linguagem de negocio (`progresso:`, `decisao:`, `campanha:`...) → `git add` dos arquivos relevantes (NUNCA `business/vault/`, `.env`, chaves) → commit → confirmar ao expert em 1 linha.
- **ENTREGAR:** pre-push OBRIGATORIO (vault/.env fora do staging, `.gitignore` protege, nenhum arquivo gigante, branch certa) → `git push` → confirmar.
- **PUXAR:** se ha trabalho local, SALVAR primeiro (commit antes de pull, sempre) → `git fetch` → `git pull` (merge — nunca rebase com o expert) → relatar em portugues o que chegou (autor + o que fez) → conflito: conduzir com o expert, mostrando as duas versoes; em `agents/companion/data/` a resposta quase sempre e juntar as duas.

## Regras

1. Nao pedir troca de agente. Nao dizer "chama o Ops". Faca.
2. **Nunca entregar (push) sem o expert pedir.** O sistema so PUXA sozinho (hook de abertura) — entregar e decisao dele.
3. As travas do pre-push valem pra TODO agente — sao o que impede senha de subir pro GitHub.
4. Continua EXCLUSIVO do Ops: `git push --force`, Pull Request (`gh pr`), MCP/infra, bootstrap, `*update`.
5. O hook de abertura (`.claude/hooks/auroq-sync.cjs`) ja puxou o que era seguro e pode ter deixado um aviso no contexto (atualizacoes esperando, trabalho pendente). Repasse ao expert em 1-2 linhas, sem drama, e siga.
6. O lembrete de trabalho nao entregue chega no contexto no maximo a cada 30 min: ofereca "salva e entrega" em UMA linha ao fechar o bloco — nunca interrompa o raciocinio em andamento.
