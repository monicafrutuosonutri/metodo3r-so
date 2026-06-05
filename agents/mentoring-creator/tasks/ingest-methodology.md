---
task: "Ingest Methodology"
responsavel: "@mentoring-creator"
responsavel_type: "agent"
atomic_layer: "task"
Entrada: "PRD aprovado (QG-MC-002)"
Saida: "Metodologia mapeada, PRD enriquecido com secao 5"
Checklist:
  - "Fontes coletadas do usuario"
  - "Todos os docs lidos e mapeados"
  - "Playback apresentado ao usuario"
  - "PRD enriquecido com metodologia"
  - "Usuario validou: 'e isso mesmo'"
execution_type: "interactive"
gate: "QG-MC-003"
---

# Task: Ingestao da Metodologia — Fase 2

**Task ID:** mentoring-creator/ingest-methodology
**Version:** 2.0.0
**Status:** Production Ready
**Created:** 2026-04-08
**Category:** Pre-Production
**Execution Type:** Interactive

---

## Executive Summary

Ler docs locais do expert com sua metodologia existente, mapear fases/conceitos/frameworks, entender a espinha dorsal e validar com o usuario. O output enriquece a secao 5 do PRD. Sem metodologia mapeada, a estrutura do programa fica no achismo.

**Gate:** QG-MC-003 — Metodologia Mapeada

## Steps

### Step 1: Coletar Fontes

Perguntar:
- "Onde esta sua metodologia documentada? Me aponta os arquivos."
- "Tem algum doc principal ou sao varios?"
- "Algum conteudo que nao esta escrito mas e importante eu saber?"

### Step 2: Ler e Mapear

Ler TODOS os docs indicados. Mapear:
- Fases/steps do metodo
- Conceitos-chave
- Frameworks proprietarios
- Sequencia logica
- Ferramentas/assessments mencionados
- Linguagem e termos do expert

### Step 3: Playback

Apresentar de volta pro usuario em formato narrativo:

```
=== SUA METODOLOGIA ===

Entendi que seu metodo tem {N} fases:

1. {Fase 1}: {o que faz, por que existe}
2. {Fase 2}: {o que faz, por que existe}
...

Conceitos-chave: {lista}
Frameworks: {lista}
Sequencia: {explicacao da logica}

Isso bate? O que ta errado? O que falta?
```

### Step 4: Debate e Ajuste

Loop ate usuario validar:
- Corrigir o que entendeu errado
- Adicionar o que falta
- Re-apresentar se correcoes forem significativas

### Step 5: Enriquecer PRD

Adicionar secao 5 (Metodologia) no PRD com:
- Nome da metodologia
- Fases/steps do metodo
- Como se aplica ao programa
- Docs fonte

## Quality Gate QG-MC-003

Protocolo de 5 passos:

1. **APRESENTAR** o mapa completo da metodologia pro usuario
2. **PERGUNTAR** "Isso bate com o que voce ensina? O que ta errado? O que falta?"
3. **DEBATE** — ajustar ate satisfeito (sem limite de rounds)
4. **APROVACAO** — usuario diz "e isso mesmo" ou "fechou"
5. **HANDOFF** — passar pra Fase 3 (structure-program) com PRD enriquecido

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Pular apresentacao do mapa | VETO — playback e obrigatorio, usuario precisa validar |
| Copiar docs sem processar | VETO — ler, interpretar, mapear, nao copiar |
| Usuario nao confirmou | VETO — nao avancar sem "e isso mesmo" |
| Docs nao fornecidos | Pedir pro usuario indicar. Se nao tem docs, extrair da cabeca via co-desenvolvimento |

---

## Error Handling

| Cenario | Acao |
|---------|------|
| Sem docs (usuario nao tem documentado) | Pedir pro usuario explicar oralmente. Extrair via perguntas estruturadas. Documentar como se fosse doc |
| Docs extensos (muitos arquivos) | Processar em batches. Mapear cada um. Consolidar no final |
| Metodologia fragmentada (espalhada em varios docs) | Consolidar numa visao unica. Apresentar pro usuario validar |
| Multiplas metodologias (usuario tem mais de uma) | Perguntar qual se aplica a este programa. Usuario escolhe. Registrar no PRD |
| Metodologia do usuario contradiz benchmark | Sinalizar. Debater. O expert decide. Registrar justificativa |

---

**Task Status:** Ready for Production
