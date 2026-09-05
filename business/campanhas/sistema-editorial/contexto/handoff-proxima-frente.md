# Handoff — Próxima Frente: Sistema Editorial

**Criado em:** 05/09/2026
**Para:** o agente que abrir a próxima sessão desta frente

---

## Estado atual

A frente está **aberta e vazia**. Nada foi construído: nem pesquisa, nem banco de ângulos,
nem séries, nem roteiros, nem squad novo.

O que existe é a estrutura e a direção. A sessão de 05/09 fez reconciliação de estado
(o sistema estava 71 dias defasado), higienização factual e organização — e parou aí,
de propósito.

**Contexto herdado:** 20 conteúdos escritos entre 21/07 e 28/08 com produção confirmada por
commit, mas **status de publicação NÃO CONFIRMADO em todos**. Não há métrica capturada.
O projeto de Validação está bloqueado por ausência de dado, não por falta de trabalho.

---

## Fonte de verdade do negócio

| Dado | Vigente |
|------|---------|
| Produto comercial | **Confiança Blindada** |
| Preço | **R$ 67,00** |
| Método 3R | Estrutura/metodologia **interna**, só quando necessário — nunca nome comercial |
| Expert | Mônica Frutuoso — nutricionista comportamental, CRN-3 46207, 11 anos de atuação |
| Posicionamento guarda-chuva | Reconstrução de confiança e autonomia depois do emagrecimento: sair da dependência exclusiva de referências externas e desenvolver leitura interna de fome, saciedade, impulso e necessidades do corpo |

**Linguagem legada — nunca usar como vigente:** "Blindagem Anti-Reganho", "Maldição da
Vigilância", "Mulher 3R", preço R$ 19,90. Aparecem em conteúdo produzido e documentos
datados como registro histórico; não autorizam reuso.

### Os 5 pilares editoriais

São **lentes** para explorar múltiplos territórios e ângulos — não cinco assuntos fixos que
se repetem.

| # | Pilar | Lente |
|---|-------|-------|
| 1 | **O Espelho** | Identificação: situações concretas, pensamentos e dores que fazem a mulher se reconhecer |
| 2 | **O Estado de Alerta** | Vigilância, medo, controle, antecipação e esforço mental em torno da comida |
| 3 | **O Caminho** | Educação prática: comportamento alimentar, fome, saciedade, impulso, interocepção, autonomia e ferramentas aplicáveis |
| 4 | **O Depois** | Como pode ser uma vida com mais confiança, presença, flexibilidade e autonomia, em situações concretas — sem prometer resultado |
| 5 | **A Perspectiva** | A leitura profissional da Mônica: conceitos, tendências, comportamento, GLP-1 quando pertinente, cultura alimentar e temas que ampliem autoridade |

**"Estado de Alerta" é o pilar 2** — a lente da vigilância. É o termo vigente para nomear
*esse* fenômeno em conteúdo (substituindo "Maldição da Vigilância"). **Não é** o tema
guarda-chuva nem o único problema tratado pela comunicação.

Base editorial completa: `docs/producao-conteudo/monica/base-editorial.md`.

Régua de conteúdo obrigatória: `docs/knowledge/regras-cfn.md`

---

## Estrutura de pastas

Raiz oficial de toda documentação nova desta frente: `business/campanhas/sistema-editorial/`

```
sistema-editorial/
├── README.md          # mapa da frente
├── tracker.md         # estado de execução
├── contexto/          # decisões, direção, diagnóstico (você está aqui)
├── pesquisa/          # dor e mercado; formatos de retenção e viralidade
├── persona-angulos/   # banco de ângulos + banco de linguagem da audiência
├── series/            # arcos de conteúdo, não posts avulsos
├── roteiros/          # roteiros e carrosséis nascidos no sistema
├── producao/          # gravação, edição, apoio visual, registro com evidência
├── metricas/          # desempenho real por conteúdo
└── aprendizados/      # o que o dado ensinou — fecha o ciclo
```

Nada novo desta frente entra em `validacao-metodo-3r/` (endereço técnico legado) nem em
`ecossistema-metodo-3r/` (congelado/legado). Conteúdo do ciclo anterior permanece em
`docs/producao-conteudo/monica/`.

---

## Decisões vigentes

1. Raiz oficial da frente é `business/campanhas/sistema-editorial/`.
2. Paths técnicos com `metodo-3r` permanecem — preservam links e histórico, não representam
   o estado do negócio.
3. `ecossistema-metodo-3r/` fica congelado/legado. **Não fundir agora.**
4. Publicação exige evidência: roteiro pronto e commit não são prova de que foi ao ar.
   Sem evidência, o status é NÃO CONFIRMADO — e isso é status válido.
5. Cadência de 3 posts/semana é **meta editorial**, não capacidade comprovada.
   Capacidade antes de volume.
6. Sequência inegociável: **confirmar o que existe → instrumentar → só então produzir mais.**
7. Auditoria geral do repositório (arquivar/consolidar/remover legado) está decidida mas
   **não executar** — só depois do Sistema Editorial funcionando e da Distribuição Multicanal
   operando em Instagram, TikTok e YouTube.

Detalhamento em [`regras-estrategicas.md`](regras-estrategicas.md).

---

## Objetivo da próxima frente

Construir o sistema editorial que produz conteúdo com base em **pesquisa** e em **aprendizado
de desempenho real**, no lugar da produção artesanal semana a semana.

São 12 componentes, de pesquisa contínua a aprendizado com performance — a lista está no
`tracker.md`. O componente 11 (captura de métricas) sustenta o 12 (aprendizado) e hoje é a
lacuna crítica: sem ele, o sistema produz mais e continua cego.

---

## Primeiro passo

**Mapear os 9 squads instalados contra os componentes do Sistema Editorial.**

O inventário funcional do Pack Arcane já existe (commitado em 26/08) — comece por ele.
A tabela de cobertura no `tracker.md` é **hipótese**, não diagnóstico: existe para ser
confirmada ou derrubada lendo o que cada squad realmente faz.

Não criar nada antes desse mapeamento.

---

## Regra de arquitetura

**Usar primeiro os componentes existentes.** Squads, agents, workers e skills já disponíveis
no Pack Arcane e no Auroq vêm antes de qualquer criação.

Só criar componente novo diante de **lacuna comprovada** — alguém leu o que o agente existente
faz de verdade, não o que o nome sugere, e demonstrou que a etapa não é coberta. Suposição de
lacuna não autoriza criar agente.

---

## Meta operacional

Reduzir o trabalho manual da Mônica.

Ela permanece em: **direção estratégica, escolha, aprovação, expertise profissional e
gravação** — o que exige julgamento, credencial ou presença.

O sistema assume progressivamente: pesquisa, organização de insights, banco de ângulos,
pesquisa de formatos, geração de séries, roteiro, adaptação em carrossel, apoio visual,
revisão, edição, captura de métricas, aprendizado de performance e reaproveitamento.

"Progressivamente" é literal: cada etapa migra quando o sistema prova que dá conta dela —
e o teste é a Mônica aprovar o output sem ter que refazer.

---

## Não começar ainda

Pesquisa de conteúdo, banco de ângulos, criação de séries, roteiros, novos squads,
distribuição multicanal.
