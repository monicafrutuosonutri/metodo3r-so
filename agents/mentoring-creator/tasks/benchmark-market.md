---
task: "Benchmark Market + PRD"
responsavel: "@mentoring-creator"
responsavel_type: "agent"
atomic_layer: "task"
Entrada: "Programa definido (QG-MC-001 aprovado)"
Saida: "PRD v1 do produto — documento fonte de verdade pra todo o pipeline"
Checklist:
  - "Conhecimento do usuario sobre o mercado coletado"
  - "Mercado BR pesquisado (concorrentes, precos, formatos)"
  - "Mercado gringo pesquisado"
  - "Debate realizado ate consenso"
  - "PRD gerado e aprovado pelo usuario"
execution_type: "interactive"
gate: "QG-MC-002"
---

# Task: Benchmark de Mercado + PRD — Fase 1

**Task ID:** mentoring-creator/benchmark-market
**Version:** 2.0.0
**Status:** Production Ready
**Created:** 2026-04-08
**Category:** Pre-Production
**Execution Type:** Interactive

---

## Executive Summary

Pesquisa de mercado (BR + gringo) sobre o nicho do programa de mentoria + geracao do PRD (Product Requirement Document) que sera a fonte de verdade pra todo o pipeline. O PRD centraliza tudo: quem e o produto, pra quem, contra quem, com que parametros, em qual modalidade.

**Gate:** QG-MC-002 — PRD Aprovado

**Dependencia:** WebSearch (necessario pra pesquisa de mercado)

---

## Steps

### Step 1: Coletar Conhecimento do Usuario

Perguntar:

```
Antes de pesquisar o mercado, me conta o que voce ja sabe:

1. Quem sao seus concorrentes diretos? (nomes, precos, formatos)
2. Tem algum programa gringo que voce admira nesse tema?
3. O que existe no mercado que voce acha bom? E ruim?
4. Qual lacuna voce ve que o seu programa pode preencher?
5. Ja tem ideia de preco?

Se nao sabe alguma dessas, tranquilo — vou pesquisar.
```

### Step 2: Pesquisa de Mercado BR

Usando WebSearch, pesquisar:
- Quem oferece mentoria/consultoria no nicho do usuario?
- Precos praticados
- Formatos de entrega (individual, grupo, hibrido, consultoria)
- Plataformas usadas
- Promessas e posicionamento dos concorrentes
- Pontos fortes e fracos visiveis

Registrar tudo em formato estruturado.

### Step 3: Pesquisa de Mercado Gringo

Usando WebSearch, pesquisar:
- Programas no mesmo tema no mercado internacional (EN principalmente)
- Precos praticados (converter pra R$ como referencia)
- Formatos e tendencias
- Players de referencia

### Step 4: Debate ate Consenso

Apresentar achados pro usuario:

```
=== BENCHMARKING — {tema do programa} ===

MERCADO BR:
1. {Concorrente 1} — R${preco}, {formato}, {promessa}
2. {Concorrente 2} — ...

MERCADO GRINGO:
1. {Referencia 1} — US${preco}, {formato}, {promessa}
2. ...

GAPS IDENTIFICADOS:
- {gap 1}
- {gap 2}

POSICIONAMENTO SUGERIDO:
{onde este programa pode se encaixar}

Isso bate com o que voce ve? O que ajustaria?
```

Debater ate chegar em consenso sobre:
- Quem sao os concorrentes reais
- Onde tem gap de mercado
- Como o programa vai se posicionar

Se modalidade ainda nao foi decidida na Fase 0, recomendar com justificativa.

### Step 5: Gerar PRD

Compilar tudo num documento PRD:

```markdown
# PRD — {Nome do Programa}

## 1. Visao Geral
- Nome: {nome do programa, pode ser provisorio}
- Modo: Individual | Grupo | Consultoria
- Publico-alvo: {quem, nivel, dor principal}
- Transformacao: {ponto A} → {ponto B} (especifica e mensuravel)

## 2. Contexto de Mercado
- Concorrentes mapeados: {quem, preco, formato, entrega}
- Gaps de mercado identificados
- Posicionamento escolhido: {onde este produto se encaixa}
- Diferenciais planejados vs mercado

## 3. Parametros do Programa
- Duracao total estimada
- Frequencia de sessoes
- Formato de entrega: {online, presencial, hibrido}
- Faixa de preco definida (ou range)
- Tamanho de turma (se grupo)
- Nivel de entrega (DWY/DFY)

## 4. Entregaveis Comprometidos
(checklist que o review final vai verificar)
- [ ] (lista definida no debate)

## 5. Metodologia
(preenchido na Fase 2 — ingestao de docs locais)
- [A ser completado]

## 6. Criterios de Qualidade
- O que define "programa pronto"
- Criterios especificos do formato escolhido

## 7. Restricoes e Decisoes
- O que NAO faz parte do programa
- Decisoes tomadas durante o benchmarking (com justificativa)
- Limites de escopo
```

Salvar PRD no diretorio do projeto (path definido pelo Chief).

### Step 6: Quality Gate QG-MC-002

Protocolo de 5 passos:

1. **APRESENTAR** o PRD completo pro usuario
2. **PERGUNTAR** "Isso bate com sua visao? O que ajustaria?"
3. **DEBATE** — ajustar ate satisfeito (sem limite de rounds)
4. **APROVACAO** — usuario diz "fechou" ou "aprovado"
5. **HANDOFF** — passar pra Fase 2 (ingest-methodology) com PRD aprovado

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Pular pesquisa de mercado | VETO — benchmark sem pesquisa = achismo |
| PRD sem contexto de mercado (min 3 concorrentes) | VETO — voltar pra pesquisa |
| Usuario nao aprovou explicitamente | VETO — nao avancar sem "fechou" |
| WebSearch indisponivel | Informar usuario, coletar conhecimento dele, PRD com disclaimer |

---

## Error Handling

| Cenario | Acao |
|---------|------|
| WebSearch indisponivel | Informar usuario. Coletar TODO conhecimento dele. PRD com disclaimer "benchmark pendente" |
| Mercado nichado, poucos concorrentes | Normal. Documentar o que encontrou. Buscar adjacentes |
| Usuario ja tem benchmarking proprio | Validar, complementar com pesquisa, integrar no PRD |
| Usuario discorda do posicionamento | Debater. Decisao final e do usuario. Registrar justificativa |
| Multiplos formatos possiveis | Apresentar pros/cons de cada. Usuario decide. PRD registra decisao |

---

**Task Status:** Ready for Production
