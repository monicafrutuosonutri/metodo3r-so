---
task: "Package Product"
responsavel: "@product-packager"
responsavel_type: "agent"
atomic_layer: "task"
Entrada: "Branding aprovado (QG-MC-007)"
Saida: "Produto empacotado: proposta de valor, matriz beneficios, preco, cartao de identidade"
Checklist:
  - "Proposta de valor completa (3 perguntas)"
  - "Matriz de beneficios pra todos os entregaveis"
  - "Preco definido com justificativa"
  - "Definicoes comerciais fechadas"
  - "Cartao de identidade consolidado"
  - "Usuario aprovou produto final"
execution_type: "interactive"
gate: "QG-MC-008"
---

# Task: Empacotamento do Produto — Fase 7

**Task ID:** mentoring-creator/package-product
**Version:** 2.0.0
**Status:** Production Ready
**Created:** 2026-04-08
**Category:** Post-Production
**Execution Type:** Interactive

---

## Executive Summary

Transformar o programa desenhado em produto estruturado pronto pra vender. Proposta de valor, matriz de beneficios, precificacao, definicoes comerciais e cartao de identidade. Aqui o programa vira produto — com preco, beneficios claros e argumento de venda.

**Gate:** QG-MC-008 — Produto Empacotado

## Steps

### Step 1: Proposta de Valor

Responder 3 perguntas com o usuario:
- Por que vale a pena?
- Por que vai funcionar?
- Por que esse e nao outro?

Gerar formato enxuto da proposta de valor.

### Step 2: Matriz de Beneficios

Exercicio "E dai?" pra cada entregavel e caracteristica relevante do programa.

Resultado: tabela completa caracteristica → beneficio.

### Step 3: Precificacao

Analisar 5 fatores (tipo, mercado, resultado, publico, posicionamento).
Usar benchmark da Fase 1 como regua.
Alertar se detectar armadilha emocional.
Debater ate definir preco com justificativa.

### Step 4: Definicoes Comerciais

Fechar:
- Modelo de entrega
- Formato
- Condicoes de pagamento
- Agenda/timeline de entrega

Considerar Produto 360 pra diferenciacao.

### Step 5: Cartao de Identidade

Consolidar tudo no documento final (template no agent product-packager.md).

### Step 6: Apresentar e Aprovar

Mostrar cartao de identidade completo. Debate ate aprovacao.

## Quality Gate QG-MC-008

Protocolo de 5 passos:

1. **APRESENTAR** cartao de identidade completo do produto
2. **PERGUNTAR** "Esse produto ta pronto pra vender? O preco faz sentido? Mudaria algo?"
3. **DEBATE** — ajustar ate satisfeito (sem limite de rounds)
4. **APROVACAO** — usuario diz "fechou"
5. **HANDOFF** — passar pra Fase 8 (review-finalize) com produto empacotado

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Value prop nao responde 3 perguntas | VETO — "por que vale?", "por que funciona?", "por que esse?" precisam de resposta |
| Preco sem justificativa baseada em benchmark | VETO — preco no achismo nao passa |
| Cartao de identidade incompleto | VETO — todas as secoes preenchidas |
| Usuario nao aprovou | VETO — nao avancar sem "fechou" |

---

## Error Handling

| Cenario | Acao |
|---------|------|
| Preco alto demais pro mercado | Justificar com value prop. Se nao justifica, ajustar. Debater com usuario |
| Expert quer cobrar barato | Confrontar com value prop e benchmark. Mostrar o que o mercado cobra. Decisao e do usuario |
| Beneficios genericos ("voce vai ter resultados") | Especificar: qual resultado, em quanto tempo, como mede |
| Modelo de pagamento indefinido | Apresentar opcoes (a vista, parcelado, recorrente). Pros/cons de cada. Usuario decide |
| Cartao de identidade contradiz branding | Sinalizar. Alinhar com branding aprovado na Fase 6 |

---

**Task Status:** Ready for Production
