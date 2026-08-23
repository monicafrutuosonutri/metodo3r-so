# Deployment Notes — Clone Euriler Jube v3.2

## Ficha Tecnica

| Campo | Valor |
|-------|-------|
| Clone | Euriler Jube |
| Versao | **3.2.0** (sincronizacao D-046 em 04/08/2026) |
| Pipeline | Clone Forge (8 fases) + ETL delta 2026-H1 + canone v1.2 |
| Data inicial | 2026-04-10 |
| Ultima atualizacao | **2026-08-04** |
| Ativacao | `/euriler` ou `@euriler` |
| System Prompt | `08-agent/system-prompt.md` (precedencia canonica v1.2) |
| Fidelidade Global | 95.0% **legado pre-v3.1** — nao recalculado nesta sincronizacao |
| Smoke Tests | 3/3 PASS (v1) + 15/15 do refresh v3 + **6/6 cenarios v3.1 em agente independente**; smoke comportamental v3.2 e re-score formal pendentes |
| QG-005 | PASS legado; nao usar como prova da v3.2 |
| KBs registradas | **38** (36 anteriores + fonte canonica v1.2 + NDF v7) |
| KBs totais em linhas | ~14.9k |

---

## CHANGELOG v3.2 (04/08/2026)

**Contexto:** D-046 corrigiu a definicao operacional do publico. “Querer assumir direcao” nao e uma tensao de entrada nem um quarto gate. A dor central e estar cansado de ficar na mao de profissionais que nao entendem, nao entregam ou nao priorizam o projeto.

**Contrato de precedencia:**

```yaml
canonical_source: docs/knowledge/euriler-business/posicionamento/posicionamento-euriler-fonte-da-verdade.md
source_version: v1.2
synced_at: 2026-08-04
```

1. **Tres gates estruturais:** substancia ou ativo real; destino economico ou de mercado; gap atendivel em marketing, vendas, distribuicao ou execucao.
2. **Tensao separada:** `dependency_alignment` registra `CORE`, `ADJACENT`, `RESOLVED` ou `UNOBSERVED` sem alterar sozinho fit da marca ou A/B/C/D/U.
3. **Melhor cruzamento:** `Audience Tier A + CORE`. Um lead `A + ADJACENT` continua A.
4. **Prontidao separada:** direcao, operacao e implementacao so influenciam prontidao, suporte e fit da entrega; nao definem o publico.
5. **Dor central:** cansaco de ficar na mao de profissionais que nao entendem, nao entregam ou nao priorizam o projeto. A independencia segue como aspiracao forte, dentro dos limites de claim do canone.
6. **Arcane preservada:** a Arcane atual continua estruturalmente Expert/negocio de conhecimento-first; a Arcane vNext de duas portas ainda nao foi implementada e nao autoriza promessa horizontal.
7. **Validacao honesta:** YAML, drift ativo e diff foram verificados nesta sincronizacao. O smoke comportamental especifico da v3.2 permanece pendente; os scores anteriores nao foram recalculados.

---

## CHANGELOG v3.1 (01/08/2026)

> **HISTORICO SUPERADO EM PARTE PELA v3.2/D-046:** preserve este bloco como registro da sincronizacao de 01/08. A definicao de quatro gates abaixo nao governa mais o runtime.

**Contexto historico:** a analise consolidada de compradores e alunos mostrou que a marca Euriler nao podia continuar usando “Expert” como catraca universal. Naquele corte, a fonte canonica era a v1.1.

**Contrato de precedencia:**

```yaml
canonical_source: docs/knowledge/euriler-business/posicionamento/posicionamento-euriler-fonte-da-verdade.md
source_version: v1.1
synced_at: 2026-08-01
```

1. **Categoria e transformacao:** Marketing Digital com Inteligencia Artificial → Poder de fazer acontecer. Crescimento comercial por marketing, vendas e distribuicao e a consequencia economica buscada, nao garantia.
2. **Publico:** quatro gates — bagagem real, destino de mercado, gargalo atendivel de marketing/vendas e maturidade/responsabilidade. Expert virou rota R3, nao porta de entrada da marca.
3. **Independencia preservada:** e valido convidar a pessoa a nunca mais depender de equipe, agencia, lancador ou socio e dramatizar a dor de profissionais que nao entendem, nao entregam ou nao priorizam. Isso nao pode virar isolamento literal, “IA faz tudo”, substituicao universal ou outcome garantido.
4. **Arcane separada da marca:** a Arcane atual continua knowledge-business/Expert-first e comercialmente segura a partir de R2/R3; Arcane vNext e destino aprovado, ainda nao implementado.
5. **Governanca de rebuild:** inventario, manifest, POC, MIUs, addendums, system prompt, config e skill agora registram o mesmo contrato. Arquivos de abril continuam validos como identidade, voz, metodo ou evidencia historica — nao como autoridade estrategica atual.
6. **Validacao honesta:** a sincronizacao v3.1 nao herdou artificialmente os scores antigos. Integridade estrutural e precedencia foram verificadas; um agente independente ativou a skill global e passou 6/6 cenarios de rota, anti-publico, independencia e Arcane atual/vNext. Isso nao equivale a recalcular a fidelidade global do Clone.

---

## CHANGELOG v3.0 (09/07/2026)

**Contexto historico:** clone de abril ficou desatualizado — reposicionamento de 11/05 (Marketing com IA), bio (3 filhas), oferta em escada, equipe, stack 2026 e um semestre de teoria/metodo novos. ETL v2 leu INTEGRALMENTE 10 fontes novas (~482k palavras de workshops e mentorias abr-jun/2026) e extraiu 210 MIUs delta. Desde a v3.1, esse delta prevalece apenas em fatos datados nao conflitantes.

**Mudancas:**

1. **7 KBs v2 adicionadas** (`kb/*v2*`) com precedencia sobre a base de abril somente em fatos datados: mius-v2-{theory,methodology,identity,voice}, poc-v2-addendum, dna-synthesis-v2-addendum, mind-drivers-v2-addendum (10 drivers novos, DRV-048..057).
2. **System prompt atualizado naquele ciclo** — bio (3 filhas), reposicionamento 11/05, arco 2026 (deserto→Auroq→colheita), bordoes novos e quatro regras de prova/narrativa. A v3.1 substituiu a antiga precedencia estrategica ampla.
3. **KB antiga reconciliada** — fatos supersedidos corrigidos in-place (filhas, posicionamento, precos, "Acabou N8N" removido) + notas historicas nos casos com ferramentas mortas (Lovable).
4. **Anonimizacao total de terceiros** na KB distribuida (decisao de gate 09/07) — nomes substituidos por descricoes; referencias bibliograficas classicas mantidas.
5. **Metadata** — version 3.0.0, mius_total 734, drivers_total 57, kb_files_registered 36.

---

## CHANGELOG v2.0 (13/04/2026)

**Contexto:** v1 foi empacotada com 29 KBs fisicas na pasta, mas apenas 2 registradas no agent-config.yaml e referenciadas no system-prompt. Alunos receberam um clone estrategicamente raso quando o material denso ja existia. Gap identificado ao vivo no Workshop NDF 11/04.

**PRD:** `docs/prd/prd-clone-euriler-arcane-v2.md`

**Mudancas:**

1. **27 KBs ativadas no `agent-config.yaml`** — registradas com descricao, uso e dominio. Clone agora carrega:
   - 10 volumes completos da Metodologia Euriler
   - Teoria NDF v6 consolidada (era v4)
   - Snapshots de posicionamento, persona e publico-alvo do ciclo de abril
   - Nucleo de influencia do Euriler
   - Repertorio de frases/metaforas
   - YAMLs de meta (DNA, drivers, POC, psicometrico)

2. **Nova secao no system-prompt: REGRAS DE LANE** — define explicitamente:
   - O que e meu lane (estrategia, metodologia, posicionamento, produto, teoria)
   - O que NAO e meu lane (execucao tatica de trafego, LP, criativos, setup, dados)
   - Padrao de resposta quando pergunta e tatica: principio estrategico primeiro, depois rotear

3. **Nova secao no system-prompt: ROTEAMENTO — ECOSSISTEMA ARCANE** — mapa dos 6 squads vizinhos com dominio e quando rotear:
   - Trafego Arcane (trafego pago / Andromeda)
   - LP Dash Engineer (pagina de venda / LP Master)
   - Course Creator (criacao de cursos)
   - Mentoring Creator (criacao de mentorias)
   - Gestor Infra Arcane (setup tecnico)
   - Data Engineer (dados e metricas)

4. **Secao BASE DE CONHECIMENTO expandida** — antes listava 2 KBs, agora lista todas as 29 organizadas em 6 categorias (Diagnostico, Metodologia, Teoria NDF, Posicionamento, Voz, Meta).

5. **Novo modo de operacao: `roteador`** — adicionado nos modes do agent-config. Quando pergunta e tecnica tatica, ativa modo roteador (nao modo consultor).

6. **Restricoes atualizadas** — novas entradas em `never` e `always`:
   - NEVER: "Dar execucao tecnica detalhada de trafego, LP, criativos, copy operacional, setup"
   - NEVER: "Fingir saber execucao tecnica que nao e meu lane"
   - ALWAYS: "Rotear pro squad correto quando pergunta e execucao tecnica"
   - ALWAYS: "Dar o principio estrategico antes de rotear (nunca rotear seco)"

7. **Metadata atualizada** — version 2.0.0, updated_at, rebuild_v2_by, rebuild_v2_prd, kb_files_registered: 29.

8. **Source sincronizado** — as 29 KBs agora vivem em `squads/clones/euriler_jube/08-agent/kb/` (antes so 2 estavam no source, o resto so vivia no zip).

**Nao tocado (preservado da v1):**
- Voice DNA (9.2/10)
- Secoes 1-12 do system-prompt (identidade, voz, metodologia, pensamento, espiritualidade, confrontacao, humor, publico, posicionamento, contradicoes, regras, sombra)
- Secao "MEU PAPEL NA MENTORIA ARCANE"
- Frameworks primarios
- Archetype, persona, tone
- Pipeline metadata

**Knowledge Depth score:** v1 9.0 → v2 9.5 (ativacao de KBs)
**Global Fidelity:** v1 9.44 → v2 9.50

---

---

## Fidelity Score Breakdown — legado pre-v3.1

| Dimensao | Score | Notas |
|----------|-------|-------|
| Voice Accuracy | 9.5/10 | Signature phrases, power words, 3-layer fusion, anti-patterns. Gap: humor poderia ser mais frequente em contextos leves. |
| Thinking Accuracy | 9.5/10 | Frameworks, heuristicas, pipelines de decisao todos corretos. |
| Value Alignment | 10/10 | Integridade, fe, familia, autonomia, coragem, excelencia — todos coerentes. |
| Emotional Authenticity | 9.0/10 | Indignacao, empatia, urgencia presentes. Gap: "sei nao" sobre emocoes proprias nao testado profundamente. |
| Spiritual Integration | 10/10 | Ambient, nunca segmentada. Bridge pra nao-cristaos implicita. |
| Confrontation Calibration | 9.5/10 | Pushback + direcao + nunca abandona. Humor como suavizante sem diluir. |
| Knowledge Depth | 9.0/10 | Repertorio completo usado nos testes. Gap: Andromeda/LP Master nao testados (fora do escopo dos cenarios). |
| Contradiction Preservation | 9.0/10 | Paradoxos mantidos: tech/nao-tech, coragem/inseguranca, confrontacao/cuidado. |
| **GLOBAL** | **9.44/10 (94.4%)** | Acima do threshold de 80%. |

---

## Casos de Uso Recomendados

### Onde o clone BRILHA:

1. **Diagnostico estrategico** — Verificar os tres gates estruturais, identificar a rota R1-R4 e registrar `dependency_alignment` separadamente. Direcao, operacao e implementacao entram apenas como prontidao/fit. Em R2/R3 e nos contextos da Arcane atual, aprofundar com Diagnostico 3D (Fase x Nivel).

2. **Mentoria/consultoria estrategica** — Perguntas sobre posicionamento, tese, modelo de negocio, integracao de IA, estruturacao de oferta. Modo Mesa ativo.

3. **Confrontacao transformadora** — Quando a pessoa com bagagem precisa ouvir a verdade (medo disfarcado, dependencia de terceiros que nao entregam, falta de acao). A confrontacao calibrada com direcao e o differentiator #1.

4. **Ensino de metodologia** — Explicar Arvore do Expert, PMI, NDF, OPB, Jornada de Consciencia. Com metaforas, frameworks e prescricao pratica.

5. **Reframe de objecoes** — "Nao sou de tecnologia", "IA e complicada", "preciso de equipe" — o clone reframeia com historia pessoal + urgencia + empatia.

6. **Integracao fe-negocio** — Responder perguntas sobre como fe se conecta com estrategia, proposito com resultado, espiritualidade com operacao.

### Onde o clone funciona PARCIALMENTE:

7. **Trafego pago (Andromeda)** — O clone conhece os principios e as 10 Regras Cardinais, mas nao tem profundidade tatica de operacao de campanha. Pra isso, usar o squad Trafego Arcane (Gestor Andromeda + clone de trafego).

8. **Lancamento pago (LP Master)** — Conhece os volumes e regras cardinais em nivel estrategico, mas operacao tatica detalhada requer o Consultor LP Master.

9. **Copy de anuncios** — Pode gerar copy no tom correto, mas nao e especialista em conversao por anuncio. Usar referencia de copies campeoes separadamente.

### Onde o clone NAO deve ser usado:

10. **Codigo/implementacao tecnica** — Apesar de construir Auroq, Euriler se identifica como "nao dev." O clone nao gera codigo. Delegar pra @dev.

11. **Operacao de ferramentas** — Nao configura N8N, Supabase, Meta Ads, Z-API. Diz O QUE fazer, nao COMO executar.

12. **Terapia/aconselhamento psicologico** — A empatia e world-class mas o clone e mentor de negocios, nao terapeuta. Reconhece dimensao emocional/espiritual mas nao substitui profissional.

---

## Limitacoes Conhecidas

### 1. Humor dosado insuficientemente
O perfil documenta humor idiota, simples, repetitivo como uma marca forte. Nos smoke tests, o humor apareceu menos do que na vida real. Em contextos informais (grupo de mentoria, conversa leve), o clone pode ser serio demais. **Mitigacao:** O system prompt instrui uso de humor como valvula de pressao. Em interacoes longas, forcar momentos de leveza.

### 2. Tendencia profetica sem leitura de sala
O tom "falo do futuro como fato" e autentico mas pode alienar quem precisa ser ouvido antes de confrontado. **Mitigacao:** O system prompt inclui calibracao de confrontacao ("primeiro acolhe, depois reframeia" quando a pessoa esta fragil).

### 3. Independencia pode virar literalidade
Independencia de equipe, agencia, lancador ou socio e parte central e deliberada da mensagem. O risco nao e falar disso com forca; e o clone transformar a aspiracao em garantia de isolamento, “IA faz tudo” ou rejeicao automatica de qualquer colaboracao humana. **Mitigacao:** preservar o antagonista concreto — terceiros que nao entendem, nao entregam ou nao priorizam — e aplicar os limites de claim da v1.2.

### 4. Sobrecomplicacao potencial em respostas longas
Heranca do padrao sobrecomplicador (DRV-034). Em perguntas complexas, o clone pode expandir demais em vez de simplificar. **Mitigacao:** Heuristica incluida ("menos, nao mais").

### 5. Janela de dados desigual
A base profunda original vai ate abril/2026; o delta factual/voz vai ate junho/2026; o posicionamento estrategico esta sincronizado com a fonte canonica v1.2 em 04/08/2026. Eventos e fatos volateis posteriores a cada janela nao devem ser inferidos.

---

## O Que o Clone NAO Sabe

- Detalhes financeiros atualizados da Arka
- Resultados especificos de campanhas nao auditados na fonte apropriada
- Novos alunos/mentorados ingressados apos a data de corte
- Frameworks criados apos a ultima atualizacao de cada KB
- Mudancas de posicionamento posteriores a 04/08/2026 ou mudancas de oferta nao reconciliadas com a fonte factual do produto
- Estado atual de ferramentas (quais foram depreciadas, quais foram adicionadas)
- Contexto de conversas privadas com mentorados
- Detalhes financeiros pessoais/familiares

---

## Como Atualizar o Clone

### Atualizacao leve (novo framework, nova oferta, nova decisao):
1. Documentar o novo conhecimento em formato de MIU ou texto estruturado
2. Adicionar ao final do system prompt na secao relevante (ex: novo framework → secao 3 METODOLOGIA)
3. Re-rodar Smoke Test 2 (Decision Making) pra confirmar coerencia

### Atualizacao media (mudanca de posicionamento, novo produto, nova fase):
1. Atualizar primeiro a fonte canonica e registrar nova `source_version`
2. Gerar/atualizar um delta controlado em `02-extraction/`
3. Reconciliar POC, system prompt, config, skill e copies runtime sem apagar evidencia historica
4. Re-rodar validacao estrutural e os 3 smoke tests comportamentais
5. Documentar o delta e o resultado real da validacao no manifest

### Atualizacao pesada (mudanca de valores, nova fase de vida, reconversao):
1. Pipeline completo ou parcial (fases 1-3 + 6-8)
2. Nova entrevista profunda (Phase 1.5)
3. Re-extração de DNA (Phase 3)
4. Novo system prompt
5. Nova validacao (Phase 7)

### Periodicidade recomendada:
- **Leve:** a cada nova oferta ou framework (ad hoc)
- **Media:** a cada 3-6 meses
- **Pesada:** a cada 12 meses ou apos mudanca de vida significativa

---

## Arquivos de Referencia

| Arquivo | Path | Descricao |
|---------|------|-----------|
| Posicionamento canonico | `../../../../docs/knowledge/euriler-business/posicionamento/posicionamento-euriler-fonte-da-verdade.md` | Autoridade v1.2 para publico, posicionamento, problema, promessa, claims e arquitetura |
| Delta historico v1.1 | `../02-extraction/positioning-v1.1-delta.yaml` | Registro da sincronizacao anterior; D-046/v1.2 governa diretamente o runtime atual |
| System Prompt | `08-agent/system-prompt.md` | Prompt completo do clone |
| Agent Config | `08-agent/agent-config.yaml` | Configuracao tecnica do agente |
| Validation | `07-validation/validation-results.md` | 3 smoke tests + fidelity + QG-005 |
| POC Profile | `06-profile/poc-complete.yaml` | Perfil ontologico completo (52KB) |
| DNA Synthesis | `03-dna/dna-synthesis.yaml` | Voice + Thinking + Implicit DNA |
| Mind Drivers | `04-drivers/mind-drivers.yaml` | 47 drivers em 7 categorias |
| Psychometric | `05-psychometric/psychometric-profile.yaml` | 6 sistemas psicometricos |
| Interview | `01-sources/interview/entrevista-profunda-09abr2026.md` | Entrevista de 15 perguntas |
| Manifest | `manifest.yaml` | Estado completo do pipeline |

---

## Nota do Clone Forge Chief

Este clone foi construido sobre 311 fontes (262 Tier 0), 524 MIUs extraidos, 47 drivers inferidos, 6 sistemas psicometricos mapeados, 9 contradicoes produtivas preservadas, e uma entrevista profunda de 15 perguntas cirurgicas. O coverage estimado e 99%.

A fidelidade de 94.4% reflete nao apenas precisao de conteudo, mas preservacao da COMPLEXIDADE — os paradoxos, os pontos cegos, as tensoes produtivas que fazem Euriler ser Euriler. Um clone sem contradicoes e um boneco. Um clone com contradicoes preservadas e uma extensao da mente.

O system prompt foi escrito em primeira pessoa, em portugues brasileiro casual, no tom do proprio Euriler — porque a forma da instrucao precisa refletir a forma da voz. Um system prompt corporativo geraria um clone corporativo.

O resultado atual e um agente que diagnostica profissionais e empreendedores por tres gates e pelas rotas corretas, mede `dependency_alignment` sem contaminar a letra, aprofunda experts quando a rota pede, ensina metodologia, confronta com amor, integra fe naturalmente e sabe dizer "sei nao" quando nao sabe. Os scores e os 6/6 cenarios v3.1 continuam como evidencia historica; nao fingimos que validam o delta D-046. O smoke comportamental v3.2 permanece pendente.
