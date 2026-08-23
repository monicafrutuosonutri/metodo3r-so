# Inventário de Squads e Agentes — Auroq OS + Pack Arcane

**Gerado em:** 23/08/2026
**Escopo varrido:** `C:\Users\monic\Documents\metodo3r-os` (agents/, .claude/commands/, .auroq-core/) e `C:\Users\monic\.arcane`
**Método:** leitura direta de `squad.yaml`, `config.yaml`, `agents/*.md`, `tasks/*.md` (frontmatter `Entrada:`/`Saida:`) e `.claude/commands/*.md`

---

## Aviso preliminar — sobre o "Pack Arcane" em `~/.arcane`

A pasta `C:\Users\monic\.arcane` **não contém nenhum agente ou squad**. Ela tem um único arquivo:

- `credentials.json` — token de sessão da plataforma Arcane (campos: `access_token`, `refresh_token`, `expires_at`, `user.id`, `user.email`, `last_validated_at`, `last_status`)

Ou seja: `~/.arcane` é o **diretório de autenticação do CLI da Arcane**, não um repositório de agentes. Todos os squads Arcane já estão **instalados dentro do projeto**, em `agents/`. Não há nada a importar de lá.

---

## 1. Todos os squads e agentes instalados

Todos vivem em `agents/` e são ativados por slash command definido em `.claude/commands/`.

### 1.1 Core do Auroq OS

| Agente | Comando | Tipo | Nº de agentes | Função |
|---|---|---|---|---|
| Companion | `/auroq-companion` | Companion | 1 | Cérebro do sistema: situa, lembra, gerencia projetos/memória, roteia |
| Ops | `/AuroqOS:agents:ops` | Worker | 1 | Commit inteligente, push, bootstrap, install, MCP |
| Organizer | `/auroq-organizer` | Worker | 1 | Diagnóstico de organização, arrumação, limpeza, backup |

### 1.2 Meta squads (fábricas de agentes)

| Squad | Comando | Nº de agentes | Agentes | Função |
|---|---|---|---|---|
| Squad Forge | `/auroq-squad-forge` | 3 | forge-chief, process-archaeologist, forge-smith | Extrai processo do expert e monta squad multi-agente |
| Mind Forge | `/auroq-mind-forge` | 3 | forge-chief, knowledge-miner, mind-smith | Transforma KB existente em mente sintética / consultor |
| Worker Forge | `/auroq-worker-forge` | 4 | worker-chief, role-designer, knowledge-curator, worker-smith | Cria workers especializados (funcionários digitais) |
| Clone Forge | `/auroq-clone-forge` | 3 | clone-forge-chief, innerlens, cognitive-motor | Clona mentes reais (Voice DNA + Thinking DNA + POC) |
| ETLmaker | `/auroq-etlmaker` | 6 | etl-chief, extractor, analyst, architect, composer, auditor | Transforma fontes brutas em Knowledge Bases |

### 1.3 Squads Arcane (operação do negócio)

| Squad | Comando | Nº de agentes | Domínio |
|---|---|---|---|
| Conteúdo Arcane | `/squad-conteudo-arcane` | 6 | Conteúdo orgânico Instagram (Reels + Carrossel) |
| Posicionamento Arcane | `/squad-posicionamento-arcane` | 3 | Núcleo de influência + vitrine do Instagram |
| Tráfego Arcane | `/trafegoArcane` | 5 | Meta Ads via Marketing API (Método Andrômeda) |
| Low Ticket Arcane | `/squad-low-ticket-arcane` | 7 | Perpétuo low ticket (Método Maxxima) |
| Lançamento Pago Arcane | `/squadLPagoArcane` | 5 | Lançamento pago end-to-end |

### 1.4 Squads de produto e infra

| Squad | Comando | Nº de agentes | Domínio |
|---|---|---|---|
| Course Creator | `/courseCreator` | 4 | Criação de curso (10 fases, da ideia ao empacotado) |
| Mentoring Creator | `/mentoring-creator` | 4 | Criação de programa de mentoria (10 fases) |
| Gestor de Infra Arcane | `/gestor-infra` | 1 (worker) | Infra técnica: Hotmart, Kiwify, N8N, Supabase, WhatsApp, Stripe |
| Euriler Mentor Clone | `/euriler` | 1 (clone) | Clone digital do Euriler Jube — consultor Marketing + IA + Propósito |

> **Divergência encontrada:** `agents/mentoring-creator/squad.yaml` declara `activation: "/mentoringCreator"`, mas o comando realmente instalado é `.claude/commands/mentoring-creator.md` → **use `/mentoring-creator`**. O yaml está desatualizado.

**Total: 16 agentes/squads instalados, somando 51 agentes individuais.**

---

## 2. Squads relevantes a conteúdo de Instagram

### 2.1 `/squad-conteudo-arcane` — Conteúdo Arcane (v1.0.1) — **6 agentes**

Base metodológica: Método Audience (Elias Maman) + Formato Criativo (Hannah Franklin) + princípios autorais do Euriler. KB 100% embarcada.

| # | Agente | Papel | Input esperado | Output entregue |
|---|---|---|---|---|
| 1 | **vox-chief** (orquestrador) | Recepciona, descobre o estágio (zerado / com base / com posts) e roteia | Ativação via `/squad-conteudo-arcane` | Expert roteado pro agente/workflow certo |
| 2 | **iris-pesquisador** | Pesquisa dupla: formatos (biblioteca + garimpo IG/TikTok/YT) e temas (16 categorias Audience) | Nicho do expert; formatos já testados (opcional); `base-inicial.md` para escolher tema | 1-3 formatos + pool de 15-30 temas em `base-inicial.md`; 1 tema cravado com slug e categoria |
| 3 | **sage-teorico** | Cria a teoria do post em 3 passos: pesquisa interna → pesquisa externa + engenharia reversa de virais → amarração com 6 lentes | `context.yaml` do post (tema cravado + virais de referência + formato + moral) | `teoria.md` — tese central, linha de raciocínio, provas, moral, leque de 5-7 hooks, fontes |
| 4 | **rico-roteirista** | Captura tom de voz e escreve o roteiro (hook + intro + conteúdo + CTA + posicionamento); itera até aprovação | `teoria.md` + `perfil-tom-de-voz.md` + formato escolhido | `perfil-tom-de-voz.md` (1x, reuso eterno) e `roteiro.md` aprovado pelo expert |
| 5 | **mack-produtor** | Orienta a produção. **Não produz** — instrui | `roteiro.md` aprovado (carrossel ou reels) | Carrossel: `laminas-carrossel.md` (texto + sugestão visual + prompt GPT por slide). Reels: `direcao-reels.md` (setup, direção de gravação, roteiro de edição) |
| 6 | **aria-analista** | Diagnóstico pós-publicação: 3 métricas-chave Audience, leitura qualitativa de comentários, escala formato vs. assunto | Métricas do post (print, verbalizado ou JSON do Apify) + dump de comentários | `analises/{data}/relatorio.md` — diagnóstico por métrica + insights + recomendações. **Não dispara ação** |

**Workflows:** `setup-inicial`, `produzir-post`, `produzir-batch`, `analisar-performance`
**Quality gates bloqueantes:** base inicial completa → tema cravado → teoria pronta → roteiro aprovado
**Fora de escopo (declarado no yaml):** postar/agendar e design final do carrossel

**Pasta de saída:** `docs/producao-conteudo/{expert-slug}/`

---

### 2.2 `/squad-posicionamento-arcane` — Posicionamento Arcane (v1.0.0) — **3 agentes**

| # | Agente | Papel | Input esperado | Output entregue |
|---|---|---|---|---|
| 1 | **posicionamento-chief** | Onboarding, diagnóstico de estado, roteamento, handoffs, compilação final | Materiais da Fase 1 da Mentoria (propósito, posicionamento, metodologia, primeiro produto) | Estado mapeado + rota definida; ao final, schema consolidado + lista de pendências acionáveis |
| 2 | **nucleo-strategist** | Constrói o Núcleo de Influência pelo método audience completo | Materiais Fase 1 coletados | Núcleo v1 com 11 pontos + crenças centrais + 3-4 apresentações magnéticas, validado em loop até o "check, perfeito" do aluno |
| 3 | **vitrine-strategist** | Monta os 9 itens da vitrine do Instagram | Núcleo completo + ativos do aluno (produto, depoimentos, lead magnet, redes) | Display name, bio (com contagem de caracteres), link bio ordenado, 3 destaques fixos (Sobre/Produto/Depoimentos), 3 pinned posts (Sobre/Tese/Oferta) — **copy pronta + capas-conceito, zero design** |

**Gargalo declarado:** `loop-feedback-nucleo` — "núcleo médio = vitrine médio"
**Dependência:** Fase 1 da Mentoria fechada (ou aceite explícito do tradeoff). Sem produto/depoimentos/funil, os itens correspondentes viram placeholders com instrução acionável.

---

### 2.3 `/trafegoArcane` — Tráfego Arcane (v2.1.1) — **5 agentes**

Opera 2 contas de anúncio (teste + escala) via Meta Marketing API. Leitura autônoma, **escrita sempre com aprovação humana**.

| # | Agente | Papel | Input esperado | Output entregue |
|---|---|---|---|---|
| 1 | **andromeda-chief** (orquestrador) | Onboarding one-time e roteamento; exceções administrativas | Contexto do produto, Estrela Guia, orçamento, página | BM configurado, 2 contas, pixel + eventos ativos |
| 2 | **setup-operator** | Guia o usuário leigo do zero à infra completa; interpreta prints de tela | "Quero configurar Meta Ads do zero" + screenshots do usuário | Infra completa verificada: BM, páginas, pixel, eventos, CAPI, públicos, conexão de API |
| 3 | **scale-operator** | Opera a conta escala (dinheiro real): estrutura Advantage+, sobe criativos, otimiza, escala vencedores | Conta configurada + Custom Audiences + criativos disponíveis | Campanha Andrômeda criada **PAUSED** pra revisão humana; campanhas otimizadas e métricas coletadas |
| 4 | **test-operator** | Opera a conta teste (laboratório): 10 tipos de teste, isolamento de 1 variável, reservatório de campeões | Conta teste configurada + hipótese de teste definida | Campanha teste **PAUSED** com 1 variável isolada; criativos classificados campeão/descartado |
| 5 | **traffic-strategist** (Tier 0, advisory) | **Não opera — pensa.** Métricas macro, tendências, briefing de criativos C1/C2/C3, 38 Regras Cardinais | Métricas acumuladas (mínimo 7 dias) ou dúvida estratégica | Análise estratégica + briefing de criativos + recomendações |

**Quality gate transversal (QG-TA-003):** toda escrita no Meta API exige aprovação humana explícita.

---

### 2.4 `/squad-low-ticket-arcane` — Low Ticket Arcane (v1.7.0) — **7 agentes**

Relevante ao Instagram pela parte de **criativos e anúncios**.

| # | Agente | Papel | Input esperado | Output entregue |
|---|---|---|---|---|
| 1 | **lt-chief** | Orquestra, faz onboarding e diagnóstico inicial Funil 3X | Ativação / estado do aluno | Roteamento + playback de "onde estou" |
| 2 | **lt-strategist** | Produto, oferta, Funil 3X projetivo, lateralidade, Planilha do Norte | Ideia de oferta; lista de ofertas com tráfego/ROI | Oferta estruturada; simulação de empilhamento; próxima oferta lateral |
| 3 | **lt-page-master** | Página de vendas de 14 blocos com Copy Dinâmica + neurodesign | Headline 3 partes + 4+3 entregáveis + 6 ruminações Score 4-5 | Página de 14 blocos redigida |
| 4 | **lt-creative-director** | **Criativos** — PRSA, Hulk/Lego (modular 10x5x3), 18+ formatos, Teste Bifásico | Copy PRSA validada / campeão da Fase 1 | Lote de criativos modulares + plano de teste bifásico (F1 variedade, F2 variações) |
| 5 | **lt-copywriter** | Copy fina — EDI, Score 0-5, headline 3 partes, costura, Food Porn | Persona, nicho, dor latente; ruminações + mecanismo único | EDI completo; headline 3 partes costurada; copy PRSA escrita |
| 6 | **lt-traffic-ops** | Setup BM/pixel + ABO Testadora 1-1-1 + 8 estruturas de escala + kill rules | Página pronta + criativos prontos; top 15 criativos validados | Setup de tráfego; Fase 3D; kit de escala testado |
| 7 | **lt-diagnostician** | Diagnóstico clínico — 26 problemas catalogados, 10 anti-padrões, 13 fix patterns | Métricas reais (Funil 3X + Connect Rate) ou "estou em problema" | Diagnóstico + ação priorizada |

**Quality gates bloqueantes:** oferta validada → Funil 3X dentro (CVP <4%, finalização <23%, CPA <45% do preço) → ROI 2+ em 30 dias → mínimo 4 criativos validados → Verba do ROI descoberta.

---

### 2.5 `/squadLPagoArcane` — Lançamento Pago Arcane (v1.1.5) — **5 agentes**

Relevante pela parte de **anúncios** e mensagens.

| # | Agente | Papel | Input esperado | Output entregue |
|---|---|---|---|---|
| 1 | **estrategista-chief** | Orquestra as 5 fases; constrói o Documento Mestre; diagnostica o lançamento | Proposta, público, orçamento, cronograma, metas | Documento Mestre validado; diagnóstico em 4 seções; retrospectiva pós-evento |
| 2 | **copy-pagina** | Página de vendas do evento | Documento Mestre aprovado | Briefing de 12 seções + **copy redigida** (texto final, não esqueleto), mobile-first |
| 3 | **anuncios** | Roteiros de anúncio pro lançamento | Documento Mestre + público + proposta | 3-6 roteiros de anúncio validados |
| 4 | **copywriter-mensagens** | Sequência de antecipação, mensagens do evento, recuperação de ingresso, downsell | Cronograma de disparos + variáveis declaradas | Sequências e copies prontas por canal |
| 5 | **analista-dados** | Leitura de métricas e cruzamento com o plano | Métricas do ciclo + benchmarks | Semáforo + narrativo + ação priorizada 1-3 |

---

## 3. `squad-edicao-arcane` — **não existe neste sistema**

**Resposta direta: não há nenhum squad chamado `squad-edicao-arcane` instalado.** Varredura por `squad-edicao`, `edicao-arcane` e `squad_edicao` em todo o repositório (excluindo `.git` e `node_modules`) retornou **zero ocorrências**. Ele não está em `agents/`, não tem slash command em `.claude/commands/`, e não está em `~/.arcane`.

### O que existe de mais próximo, e o que ele faz

O único componente do sistema que trata de edição de vídeo é o **`mack-produtor`** do `/squad-conteudo-arcane`, via task `orientar-reels.md`. Ele **apenas gera instruções de edição em texto** — não abre, não lê e não processa nenhum arquivo de vídeo, e não invoca ffmpeg nem qualquer outra ferramenta.

**Prova 1 —** `agents/squad-conteudo-arcane/agents/mack-produtor.md`, seção "O QUE EU NÃO FAÇO" (linhas 34-38):

```
O QUE EU NÃO FAÇO:
   • Não escrevo o roteiro — Rico faz
   • Não gero a imagem final do carrossel — voce faz no GPT/Canva
   • Não gravo nem edito teu reels — voce executa
   • Não analiso desempenho depois — Aria faz
```

**Prova 2 —** `agents/squad-conteudo-arcane/tasks/orientar-reels.md`, frontmatter (linhas 1-8):

```yaml
task: "Orientar Reels"
responsavel: "@mack-produtor"
Entrada: "roteiro.md aprovado (formato = reels)"
Saida: "direcao-reels.md com setup ideal + direção de gravacao + edicao"
```

A saída é um **arquivo markdown**, não um arquivo de vídeo.

**Prova 3 —** mesma task, "Step 6: Orientação de Edição (CapCut)". O conteúdo do step é um bloco markdown que o agente **imprime pro expert executar manualmente no celular**:

```
EDICAO (no CapCut — gratuito, mobile)

PASSO A PASSO:
1. Abre CapCut, importa video(s) gravados
2. Se gravou em sessoes → junta na ordem do roteiro
3. CORTE: remove pausas longas, mantem ritmo
4. TEXTOS ON-SCREEN (essencial)
5. LEGENDA AUTOMATICA
6. TRILHA SONORA
7. EXPORTAR EM 1080p (qualidade alta)
```

E o próprio propósito declarado do agente confirma: *"Orientador de execução. (...) **Não produz no lugar do expert** — entrega instruções claras e práticas pra ele executar rápido."*

### Onde o ffmpeg realmente aparece

`ffmpeg` aparece em **exatamente um lugar** no sistema, e não tem relação com edição criativa: `agents/trafego-arcane/knowledge/sop-upload-criativos-api.md`. É um SOP de **normalização técnica antes do upload pra Meta API** — re-encode pra corrigir muxing/metadata que a Meta rejeita silenciosamente:

```bash
ffmpeg -y -i input.mp4 \
  -c:v libx264 -profile:v high -level 4.1 -preset fast -crf 22 \
  -vf "scale='min(1080,iw)':'min(1920,ih)':force_original_aspect_ratio=decrease" \
  -c:a aac -b:a 192k -ac 2 -ar 44100 \
  -movflags +faststart -pix_fmt yuv420p \
  output.mp4
```

Ou seja: o sistema **toca em arquivo de vídeo de verdade em um único ponto** — o `scale-operator`/`test-operator` do Tráfego Arcane, e só pra preparar o arquivo pro upload de anúncio. Nenhum agente edita vídeo criativamente.

**Conclusão para operação:** o corte, legenda, texto on-screen e trilha continuam sendo trabalho manual seu no CapCut. O sistema entrega o roteiro e a direção; a execução é humana.

---

## 4. O que o ETLmaker e o Clone Forge precisam receber de você

### 4.1 ETLmaker (`/auroq-etlmaker`) — v3.0.0

**Ele pede três coisas no start:**

1. **Modo de operação** (ele pode inferir da sua fala, mas sempre confirma):
   - **Full Pipeline** — KB do zero: ingestão → mapeamento territorial → composição blocada → integração → validação em 3 camadas
   - **Quick Extract** — só mapear territorialmente, sem compor volumes ("pega esse PDF e me diz o que tem")
   - **Merge** — adicionar fonte nova a uma KB existente
2. **Nome e domínio da KB** — ex: "Método 3R", "Interocepção Clínica", "Copy Avançada". Vira o slug de `kbs/{slug}/`
3. **As fontes** — caminhos de arquivo ou conteúdo colado

**Formatos que ele aceita:** PDF, Markdown, .txt, HTML, YAML, transcrições, texto colado, URLs.

**Requisito mínimo por fonte (quality gate QG-ETL-000, bloqueante):**

| Critério | Threshold |
|---|---|
| Tamanho | ≥ 100 palavras |
| Encoding | UTF-8 (ele normaliza) |
| Estrutura | headers/seções/parágrafos preservados |
| Metadados | ID, formato, título, autor, contagem de palavras, seções |

**Como te dar o melhor resultado:**
- Traga a fonte **completa**, não resumida — o pipeline é feito pra produzir documentação *mais rica que o original*; resumir na entrada mata isso
- Se for transcrição de aula/consulta, traga bruta, sem editar
- Diga o **domínio** com clareza, porque isso guia o mapeamento territorial e a arquitetura dos volumes
- Se já tem KB e quer só somar, use **Merge** — ele re-mapeia e recompõe só os volumes afetados, em vez de refazer tudo

**O que ele produz:** `kbs/{slug}/` com `PLANO-ETL.md` (artefato persistente que sobrevive à sessão), volumes compostos, e validação em 3 camadas (spot-check + auditoria exaustiva + 6 passes estatísticos).

---

### 4.2 Clone Forge (`/auroq-clone-forge`) — v2.0.0

Pipeline de clonagem cognitiva em 3 dimensões: **Voice DNA** (vocabulário, sintaxe, registro, ritmo, frases-assinatura), **Thinking DNA** (drivers psicológicos + psicometria) e **POC** (ontologia de conhecimento em 4 camadas / 6 módulos).

**O que ele precisa receber — thresholds do quality gate QG-001 (bloqueante):**

| Métrica | Mínimo exigido |
|---|---|
| Total de fontes | **≥ 10** |
| Fontes Tier 1 ou superior | **≥ 5** (Tier 0 desejável: 1) |
| Tipos únicos de fonte | **≥ 3** (vídeo, PDF, texto, YouTube, redes sociais...) |
| Horas de conteúdo | **≥ 5** (palavras ÷ 150 wpm para áudio, ÷ 250 wpm para texto) |
| Cobertura de categorias | comportamental, metodológica, storytelling, opinião, técnica |

**O que conta como fonte "ouro" (peso alto):**

| Tipo | Peso | Por quê |
|---|---|---|
| Respostas em comentários | 1.00 | Pensamento real, sem script |
| Entrevistas longas (podcast 2h+) | 0.95 | Pergunta difícil força pensamento real |
| Análise de cases reais | 0.90 | Mostra o processo de decisão, não a teoria |
| Stories respondendo perguntas | 0.90 | Espontâneo, sem edição |
| Livros escritos pela pessoa | 0.85 | Frameworks próprios, estruturado |

**O que evitar (fonte "bronze") e o risco de cada uma:**

| Tipo | Risco declarado |
|---|---|
| Conteúdo antigo/desatualizado | Clone replica versão obsoleta da mente |
| Material genérico | Clone fica indistinguível de chatbot |
| Palestras repetitivas/decoradas | Clone repete frases mas não pensa |
| Conteúdo de terceiros sobre a pessoa | Clone replica a interpretação, não o original |

**Regra do próprio squad:** *"Menos material ouro > muito material bronze"* — mantra: *"Se entrar cocô, sai cocô do outro lado."*

**Curadoria em 5 dimensões (o chief pontua cada fonte de 1 a 5):** autenticidade (peso 0.30), profundidade (0.25), cobertura temática (0.20), espontaneidade (0.15), recenticidade (0.10).

**Se você não tiver volume suficiente:** o squad tem os modos **UC3 — Entrevista Profunda** (extrai conhecimento tácito via questionário interativo) e **UC4 — Gap Analysis** (questionário cirúrgico pra tapar lacunas específicas do perfil). Dá pra começar com menos material e completar por entrevista.

**Como te dar o melhor resultado:**
- Priorize gravações suas **falando espontaneamente** (consulta gravada com consentimento, live, caixinha de perguntas, podcast) sobre textos editados
- Cubra as 5 categorias — se só entrar conteúdo metodológico, o clone não sabe se posicionar nem contar história
- Concentre em material dos **últimos 6-12 meses** (recenticidade nota 5)
- Diversifique o tipo, não só o volume: 10 posts de Instagram = 1 tipo, e falha no gate de diversidade

---

## 5. Dependências de API paga ou chave externa

### 5.1 Bloqueante — o squad não funciona sem

| Squad | Dependência | Detalhe |
|---|---|---|
| **Tráfego Arcane** (`/trafegoArcane`) | **Meta Marketing API** — declarada em `dependencies.required` | Exige: conta Business Manager, App Meta tipo Business com Marketing API, **System User Token** (long-lived) com escopos `ads_management`, `ads_read`, `business_management`, `pages_manage_ads`, `pages_read_engagement`; conta de anúncio atribuída ao System User; Instagram Business vinculado a uma Página |

**Variáveis exigidas** (`agents/trafego-arcane/data/meta-api-credentials.md`): `META_TOKEN` (secreto), `META_APP_ID`, `META_ACCT_MAIN`, `META_ACCT_ESCALA` e `META_ACCT_TESTE` (opcionais), `META_IG`.
**Três formas de fornecer:** variáveis de ambiente, `data/.env` (não commitar) ou 1Password CLI com item "Meta API".
**Custo:** a API em si é gratuita; o custo é a **verba de anúncio** que ela movimenta. O squad exige aprovação humana em toda operação de escrita (QG-TA-003), o que protege contra gasto acidental.

### 5.2 Opcional — melhora o resultado, mas dá pra operar sem

| Squad | Dependência | Natureza |
|---|---|---|
| Tráfego Arcane | **Supabase** (`knowledge/supabase-data-access.md`) | Fonte de verdade de vendas (dados vindos do Hotmart) para CPA real. Plano gratuito atende |
| Tráfego Arcane | **UTMify** | Tracking de vendas por UTM — listado como opcional no yaml |
| Conteúdo Arcane | **Apify** (`knowledge/analise/processar-apify.md`) | Scraping de Instagram/TikTok/YouTube pra alimentar a Aria em análise de batch. **Cobra por créditos** — o próprio doc alerta "cuidado com créditos Apify" e recomenda `resultsLimit: 10-50`. Atores: `apify/instagram-scraper`, `apify/instagram-post-scraper`, `apify/tiktok-scraper`, `apify/youtube-scraper`. **Alternativa gratuita:** a Aria aceita métricas por print do Insights ou verbalizadas |
| Conteúdo Arcane | ChatGPT/GPT + Canva | O Mack gera prompts de imagem pro carrossel; a geração é feita por você fora do sistema |
| Lançamento Pago Arcane | Calculadora Arcane; Templates Meta API aprovados (Meta/ManyChat) | Ambos em `dependencies.optional` |
| Gestor de Infra | Hotmart, Kiwify, N8N, Supabase, WhatsApp Cloud API, Z-API, ActiveCampaign, Stripe, Grupify | Ele **opera** essas plataformas, não as instala. Cada uma exige credencial própria, registrada em `data/gestor-infra-vault.md` (hoje **vazio**) |

**Squads sem nenhuma dependência externa** (`dependencies.required: []`, KB 100% embarcada): Conteúdo Arcane (o Apify é opcional), Posicionamento Arcane, Low Ticket Arcane, Lançamento Pago Arcane, ETLmaker, Clone Forge, Squad/Mind/Worker Forge, Course Creator, Mentoring Creator, Companion, Organizer.

### 5.3 ⚠ Alerta de segurança

`agents/trafego-arcane/knowledge/supabase-data-access.md` contém uma **`SUPABASE_ANON_KEY` e a URL do projeto Supabase em texto claro, versionadas no git**. É uma chave anon (escopo limitado pelas políticas RLS do banco), não a service key — mas mesmo assim ela está no histórico do repositório. Se este repo for compartilhado com alunos ou tornado público, essa chave vaza junto.

**Recomendação:** mover para `.env` (o `.env.example` já prevê o campo `SUPABASE_ANON_KEY`) e substituir no arquivo por um placeholder. O próprio `meta-api-credentials.md` estabelece a regra correta: *"NUNCA commitar `data/.env` ou qualquer arquivo com token em texto claro no git"* — o `supabase-data-access.md` não segue essa regra.

O arquivo também expõe o `CAMPAIGN_REF` e o `LAUNCH_SLUG` do ciclo ativo, que precisam ser atualizados a cada shift de campanha.

---

## Resumo executivo

- **16 squads/agentes instalados, 51 agentes individuais.** Nada a importar de `~/.arcane` — lá só existe o token de sessão do CLI.
- **Para conteúdo de Instagram** o caminho principal é: `/squad-posicionamento-arcane` (arruma a vitrine) → `/squad-conteudo-arcane` (produz post a post) → `/trafegoArcane` ou `/squad-low-ticket-arcane` (se for impulsionar).
- **`squad-edicao-arcane` não existe.** Nenhum agente processa vídeo criativamente; o `mack-produtor` só gera instruções de CapCut em texto. `ffmpeg` aparece uma única vez, e é re-encode técnico pré-upload no Meta Ads.
- **Única dependência bloqueante de chave externa:** Meta Marketing API, e só pro Tráfego Arcane.
- **Uma pendência de segurança:** chave Supabase em texto claro versionada.
