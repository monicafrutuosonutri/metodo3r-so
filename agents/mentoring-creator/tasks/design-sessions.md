---
task: "Design Sessions"
responsavel: "@mentoring-creator"
responsavel_type: "agent"
atomic_layer: "task"
Entrada: "Estrutura do programa aprovada (QG-MC-004)"
Saida: "Mapa completo de sessoes com objetivo, formato, framework, exercicios"
Checklist:
  - "Todas as sessoes listadas a partir da estrutura"
  - "Cada sessao com objetivo + formato + framework"
  - "Coerencia verificada (sequencia, carga, conexoes)"
  - "Usuario aprovou sessoes"
execution_type: "interactive"
gate: "QG-MC-005"
---

# Task: Design de Sessoes — Fase 4

**Task ID:** mentoring-creator/design-sessions
**Version:** 2.0.0
**Status:** Production Ready
**Created:** 2026-04-08
**Category:** Production
**Execution Type:** Interactive

---

## Executive Summary

Loop detalhado por sessao do programa. Cada sessao sai com objetivo, formato, framework, exercicio, entregavel e conexao com a sessao anterior/proxima. Esta e a fase mais densa — co-desenvolvimento profundo de cada sessao.

**Gate:** QG-MC-005 — Sessoes Desenhadas

## Steps

### Step 1: Listar Sessoes

A partir da estrutura aprovada (Fase 3), listar todas as sessoes do programa em ordem.

### Step 2: Loop por Sessao

Pra cada sessao, definir:

```
SESSAO {N}: {Nome}
- Fase do programa: {em qual fase esta}
- Objetivo: {o que o mentorado sai sabendo/tendo}
- Formato: {1:1 | hot seat | teaching+Q&A | workshop | implementation | accountability}
- Duracao: {tempo}
- Framework/ferramenta: {qual usar nessa sessao}
- Exercicio pratico: {o que o mentorado faz}
- Entregavel: {o que o mentorado leva dessa sessao}
- Conexao anterior: {como conecta com a sessao passada}
- Conexao proxima: {como prepara a proxima}
```

### Step 3: Estrutura de Referencia por Tipo

**Sessao 1:1 (60-90 min):**
1. Check-in (5-10 min)
2. Review de acoes (10-15 min)
3. Tema central (30-40 min)
4. Plano de acao (10-15 min)
5. Fechamento (5 min)

**Hot seat (20-30 min por membro):**
1. Membro apresenta desafio (3-5 min)
2. Grupo pergunta (5 min)
3. Grupo sugere (10-15 min)
4. Define proximo passo (2 min)

**Teaching + Q&A (60-90 min):**
1. Framework/conteudo (20-30 min)
2. Aplicacao pratica (15-20 min)
3. Q&A (15-20 min)

**Workshop/Implementation (4-8h):**
1. Contexto e objetivo do dia
2. Blocos de trabalho focado
3. Sai com deliverable pronto

### Step 4: Validar Coerencia

- Todas as sessoes cobrem a metodologia?
- Sequencia faz sentido?
- Carga ta equilibrada (nenhuma sessao sobrecarregada)?
- Conexoes entre sessoes estao claras?

### Step 5: Apresentar e Aprovar

Mostrar mapa completo de sessoes. Debate ate aprovacao.

## Quality Gate QG-MC-005

Protocolo de 5 passos:

1. **APRESENTAR** mapa completo de sessoes em formato legivel
2. **PERGUNTAR** "Essa sequencia faz sentido? Alguma sessao ta pesada demais? Falta algo?"
3. **DEBATE** — ajustar ate satisfeito (sem limite de rounds)
4. **APROVACAO** — usuario diz "fechou"
5. **HANDOFF** — passar pra Fase 5 (design-deliverables) com sessoes aprovadas

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Sessao sem objetivo claro | VETO — cada sessao precisa de objetivo definido |
| Sessao >2h sem justificativa | VETO — sessao longa demais, dividir ou justificar |
| Mix de teoria/pratica ausente | VETO — mentoria nao e aula expositiva |
| Usuario nao aprovou | VETO — nao avancar sem "fechou" |

---

## Error Handling

| Cenario | Acao |
|---------|------|
| Sessao muito densa | Dividir em 2 sessoes. Apresentar alternativa. Usuario decide |
| Expert quer aula expositiva pura | Desafiar — mentoria ≠ aula. Sugerir formato interativo. Debater |
| Entregavel vago ("o mentorado leva conhecimento") | Especificar: o que exatamente? Em que formato? Como mede? |
| Sessao duplica conteudo de outra | Consolidar. Apresentar pro usuario. Eliminar redundancia |
| Conexao entre sessoes nao esta clara | Explicitar: o que a sessao anterior prepara e o que a proxima precisa |

---

**Task Status:** Ready for Production
