---
task: "Review and Finalize"
responsavel: "@mentoring-chief"
responsavel_type: "hybrid"
atomic_layer: "task"
Entrada: "Todos os artefatos das fases anteriores + PRD"
Saida: "Review Report aprovado, programa validado contra PRD"
Checklist:
  - "Review autonomo executado contra PRD"
  - "Gaps identificados e resolvidos"
  - "Usuario aprovou resultado final"
execution_type: "interactive"
gate: "QG-MC-009"
---

# Task: Review and Finalize — Fase 8: Validacao Final Contra PRD

**Task ID:** mentoring-creator/review-finalize
**Version:** 2.0.0
**Status:** Production Ready
**Created:** 2026-04-08
**Category:** Review
**Execution Type:** Interactive

---

## Executive Summary

Fase 8 do pipeline. Review em 2 estagios: primeiro o squad faz um review AUTONOMO contra o PRD (checklist automatico de tudo que foi prometido vs entregue), depois apresenta o report pro usuario e debate ajustes finais. O programa so e considerado completo quando o usuario confirma que o output bate com o que o PRD prometeu.

**Gate:** QG-MC-009 — Review Final Aprovado

---

## Steps

### ESTAGIO 1: Review Autonomo Contra PRD

O Chief faz uma varredura completa, verificando se cada compromisso do PRD foi entregue.

#### Step 1: Carregar PRD e Artefatos

Ler o PRD gerado na Fase 1 (benchmark-market) e todos os artefatos produzidos nas fases subsequentes:
- PRD (Fase 1, enriquecido na Fase 2)
- Mapa metodologico (Fase 2)
- Estrutura do programa (Fase 3)
- Design de sessoes (Fase 4)
- Design de entregaveis (Fase 5)
- Identidade verbal e naming (Fase 6)
- Proposta de valor e precificacao (Fase 7)

#### Step 2: Checklist Contra PRD

Para CADA secao do PRD, verificar:

**Secao 1 — Visao Geral:**
- [ ] Nome final consistente com naming aprovado
- [ ] Publico-alvo mantido (nao desviou durante o pipeline)
- [ ] Transformacao A->B especifica e mensuravel
- [ ] Modalidade escolhida bate com o que foi desenhado

**Secao 2 — Contexto de Mercado:**
- [ ] Posicionamento refletido no branding
- [ ] Diferenciais planejados implementados na estrutura
- [ ] Preco coerente com benchmark

**Secao 3 — Parametros:**
- [ ] Duracao total consistente com sessoes desenhadas
- [ ] Frequencia de encontros definida
- [ ] Formato (online/presencial/hibrido) respeitado
- [ ] Tamanho de turma definido (se grupo)

**Secao 4 — Entregaveis:**
- [ ] Cada entregavel prometido no PRD existe no design
- [ ] Templates/materiais de apoio definidos
- [ ] Onboarding desenhado
- [ ] Offboarding desenhado
- [ ] Assessments definidos
- [ ] Comunidade/suporte definido

**Secao 5 — Metodologia:**
- [ ] Metodologia do expert refletida nas sessoes
- [ ] Frameworks incorporados na estrutura
- [ ] Sequencia logica preservada

**Secao 6 — Criterios de Qualidade:**
- [ ] Todos os QGs anteriores passaram
- [ ] Nenhum QG foi "waived" sem justificativa

**Secao 7 — Restricoes:**
- [ ] Nenhuma restricao violada
- [ ] Scope creep identificado e documentado

**Cross-checks:**
- [ ] Branding consistente em todos os artefatos
- [ ] Pricing justificado pelo benchmark + value prop
- [ ] Jornada do mentorado faz sentido do inicio ao fim
- [ ] Cartao de identidade completo
- [ ] Proposta de valor responde as 3 perguntas

#### Step 3: Gerar Review Report

```
=== REVIEW FINAL — {Nome do Programa} ===

CHECKS: {X} de {Y} aprovados

APROVADOS:
- {checks que passaram}

GAPS ENCONTRADOS:
- {gap}: {descricao} — PRD Secao {N}

INCONSISTENCIAS:
- {inconsistencia}: {descricao}

RECOMENDACOES:
- {acao sugerida}
```

---

### ESTAGIO 2: Review Humano

#### Step 4: Apresentar Report ao Usuario

Mostrar o review report completo em formato legivel.

Se ZERO gaps e ZERO inconsistencias:
```
Review autonomo passou 100%. Tudo que o PRD prometeu foi entregue.
Quer revisar algo manualmente antes de dar o aval final?
```

Se tem gaps ou inconsistencias:
```
Encontrei {N} gaps e {M} inconsistencias. Vamos debater cada um?
```

Para cada gap:
- Explicar o que o PRD prometia vs o que foi entregue
- Propor opcoes: Resolver (voltar pra fase X) / Aceitar (justificar) / Ajustar PRD

#### Step 5: Debate e Ajustes

Loop de debate sem limite de rounds. Cada gap e resolvido explicitamente:
- **Resolver:** voltar pra fase correspondente, corrigir, retornar
- **Aceitar:** registrar justificativa ("aceitavel porque...")
- **Ajustar PRD:** se o gap revela que o PRD estava errado, atualizar PRD

#### Step 6: Revisao Macro da Jornada

Apresentar a jornada completa do mentorado (onboarding -> sessoes -> offboarding) como narrativa. Perguntar: "Essa e a experiencia que voce quer entregar?"

Verificar:
- Jornada A->B e clara?
- Sessoes conectam?
- Mentorado sempre sabe onde esta?

#### Step 7: Quality Gate QG-MC-009

Protocolo de 5 passos:

1. **APRESENTAR** review report final (apos ajustes)
2. **PERGUNTAR** "Satisfeito com o programa? Posso passar pro checklist?"
3. **DEBATE** — ultimos ajustes se necessario
4. **APROVACAO** — usuario diz "fechou"
5. **HANDOFF** — passar pra Fase 9 (generate-checklist)

---

## Veto Conditions

| Condicao | Acao |
|----------|------|
| Pular review autonomo | VETO — checklist contra PRD e obrigatorio |
| Gap critico nao resolvido | VETO — nao avancar com gap aberto |
| Usuario nao deu "fechou" explicito | VETO — aprovacao explicita obrigatoria |
| PRD nao encontrado | Avisar, fazer review sem PRD (degraded mode), registrar |
| Fase anterior incompleta | VETO — nao iniciar revisao com fase pendente |

---

## Error Handling

| Cenario | Acao |
|---------|------|
| Muitos gaps encontrados (>5) | Priorizar por severidade. Resolver criticos primeiro |
| Usuario quer mudar escopo nessa fase | Registrar como scope change. Avaliar impacto. Se grande, recomendar novo ciclo |
| Fase anterior precisa de retrabalho | Voltar pra fase especifica. Apos correcao, re-executar review |
| PRD desatualizado (mudancas nao registradas) | Atualizar PRD primeiro, depois re-executar review |
| Usuario satisfeito mas review encontrou gaps | Apresentar gaps claramente. Decisao e do usuario mas registrar |
| Usuario quer adicionar algo ja aprovado | Normal. Marcar como re-work, ajustar, re-aprovar |

---

**Task Status:** Ready for Production
