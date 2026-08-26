# Inventário Funcional — Pack Arcane

> Levantado em 23/08/2026 lendo os arquivos de definição em `agents/`.
> Cada afirmação abaixo está ancorada em trecho citado do arquivo.
> **Nada aqui é inferido pela descrição de marketing do squad.**

---

## 0. Resposta à pergunta de prioridade máxima

### O `squad-edicao-arcane` processa vídeo de verdade — NÃO gera instruções pra CapCut.

Ele invoca **ffmpeg, ffprobe, whisper.cpp, Silero VAD (torch) e OpenCV** via `subprocess` do Python. Provas diretas no código:

**`scripts/_common.py`** — resolvedor de binários:
```
73: def ffmpeg():
74:     return find_bin("ffmpeg")
77: def ffprobe():
78:     return find_bin("ffprobe")
81: def whisper_cli():
82:     return find_bin("whisper-cli")
```

**`scripts/video-speech-cut.py`** — corte por fala:
```
9:  import sys, subprocess, os, argparse, torch
11: from silero_vad import load_silero_vad, get_speech_timestamps
16: FFMPEG = _common.ffmpeg()
40: subprocess.run([FFMPEG,"-y","-i",video,"-ar","16000","-ac","1","-f","wav",wav],
43: model = load_silero_vad()
70: subprocess.run([FFMPEG,"-y","-i",video,"-filter_complex_script",ff,
```

**`scripts/video-transcribe.py`** — transcrição:
```
18: FFMPEG = _common.ffmpeg()
19: WHISPER = _common.whisper_cli()
38: subprocess.run([FFMPEG, "-y", "-i", video, "-ar", "16000", "-ac", "1", "-f", "wav", wav],
42: subprocess.run([WHISPER, "-m", MODEL, "-l", "pt", "-ml", "32", "-sow",
```

**`scripts/video-captions.py`** — queima a legenda no pixel:
```
25:  FFMPEG = _common.ffmpeg()
117:     f"drawtext={_common.drawtext_font_opt(s)}",
197: subprocess.run([FFMPEG,"-y","-i",video,"-filter_complex_script",ff,
```

**`scripts/video-produce-zoom.py`** — zoom com detecção de rosto:
```
16:  import sys, subprocess, os, json, cv2, statistics, argparse
52:  cap = cv2.VideoCapture(video)
56:  casc = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
104: subprocess.run([FFMPEG,"-y","-i",video,"-filter_complex_script",ff,
```

**`install.py`** instala essas dependências na máquina:
```
19: import os, sys, subprocess, shutil, urllib.request, zipfile, tempfile
29: MODEL_URL = "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin"
106: def ensure_ffmpeg():
116:     subprocess.run(["brew", "install", "ffmpeg"])
122:     subprocess.run(["winget", "install", "--id", "Gyan.FFmpeg", "-e",
```

**Única menção a CapCut em todo o squad** é um comentário de *estética* de legenda, não de execução — `data/estilos/organico.yaml:3`:
```
# Vibe CapCut auto-caption / casual.
```

**Conclusão:** entra `.mov/.mp4` bruto, sai `{video}_final.mp4` renderizado. O CapCut não entra no fluxo em momento nenhum.

---

## 1. squad-edicao-arcane

| Campo | Valor |
|---|---|
| Nome | Edição Arcane |
| Comando | `/squad-edicao-arcane` |
| Versão | **1.1.1** (`squad.yaml → version: "1.1.1"`) |
| Agentes | **7 arquivos** em `agents/` (chief, installer, cutter, scribe, zoomer, finisher, stylist) |

⚠️ **Divergência no próprio manifesto:** o `description` do `squad.yaml` diz *"Squad de 5 agentes (1 chief + 4 specialists)"*, mas o bloco `tiers:` lista 7 e o README diz *"Arquitetura (7 agents, 6 quality gates)"*. Vale o número real: **7**.

### Papel de cada agente (citando `squad.yaml`)

| Agente | Papel |
|---|---|
| **chief** (Vector) | *"Recepcao — saudacao, explica em 3 linhas o que o squad faz, identifica intencao (instalar / editar / diagnosticar), roteia. **Nao executa skills**"* |
| **installer** (Forge) | *"Engineer. Setup inicial (1a vez) + check antes de cada rodada"* — roda `install.py` e `scripts/doctor.py` |
| **cutter** (Tesoura) | *"Roda o corte por fala. Aplica threshold=0.6, min_silence=80ms, pad=30ms (defaults validados)"* — `video-speech-cut.py` |
| **scribe** (Letra) | *"Unico agent 'pensante' do squad — usa main thread (Opus) pra ler o transcript bruto do whisper e corrigir erros de portugues"* (`agents/scribe.md:13`) |
| **zoomer** (Lente) | *"Zoom dinamico no rosto. Classificacao retorica feita pelo proprio Claude (nao heuristica)... zoom 1.0/1.18/1.43"* |
| **finisher** (Finalizador) | *"Acelera 1.2x -> queima legenda no estilo ativo. Forca 8-bit yuv420p profile Main + faststart + AAC 192k"* |
| **stylist** (Curador) | *"Curador do estilo de legenda... Unico agent que toma decisao estetica"* — **fora da esteira**, sob demanda |

### INPUT
`workflows/pipeline-edicao.md` → `Entrada: "Video bruto talking-head"`. Na prática: **o caminho do arquivo de vídeo**. O `chief.md:36` registra o gatilho: *"edita esse video" / video bruto entregue*.

Configuração prévia obrigatória — `README.md`: *"Antes de editar o primeiro vídeo, edite `data/nomes-proprios.yaml` com **seus nomes próprios**"*.

### OUTPUT — **ARQUIVO DE MÍDIA PROCESSADO**
`squad.yaml → output_layout`:
```
expert_workspace: "videos-editados/"
  - "{video-name}_speechcut.mp4"           # corte intermediario (limpado depois)
  - "{video-name}_speed.mp4"               # acelerado 1.2x (limpado depois)
  - "{video-name}_transcript_raw.txt"      # transcricao bruta (limpado)
  - "{video-name}_transcript_revisado.txt" # transcricao corrigida (mantido)
  - "{video-name}_final.mp4"               # ENTREGA FINAL
```
Tempo estimado no workflow: *"7-20 min (video de 1-5min, depende da maquina)"*.

### Dependências — **pesadas, locais, mas GRATUITAS (zero API paga)**
`squad.yaml → dependencies.required`:
```
- ffmpeg com drawtext + sidechaincompress (Mac: brew | Windows: winget Gyan.FFmpeg full)
- whisper-cli + modelo ggml-medium.bin (1,5GB)
- Python 3.10+ — venv usa 3.12/3.13 (torch nao tem wheel pra 3.14)
- venv local com: silero-vad, torch, torchaudio, scipy, numpy, fonttools, pyyaml, opencv-python-headless
- Fontes Bebas Neue / Montserrat / Poppins (embarcadas em data/fontes/)
```
Nenhuma chave de API. Roda 100% offline depois de instalado.

⚠️ **Você está no Windows.** O squad foi portado (`BRIEF-port-windows-v1.1.md`), mas o brief registra o que quebrava: *"path com `C:\...` quebra o filtergraph do ffmpeg (o `:` do drive e as `\`)"* e *"`drawtext=font='Bebas Neue'` resolve por **nome** → depende de fontconfig, que o ffmpeg de Windows normalmente **não** traz compilado"*. A v1.1.0 resolve via `fontfile=` e short-path 8.3. Rode `python scripts/doctor.py` antes de confiar.

### Encadeamento
**Consome:** vídeo que você gravou (opcionalmente seguindo a `direcao-reels.md` do squad-conteudo).
**Alimenta:** `trafego-arcane → prep-creatives`, cuja entrada é *"Pasta com criativos crus (videos/imagens ja produzidos)"*.

---

## 2. squad-carrossel-arcane

| Campo | Valor |
|---|---|
| Nome | Carrossel Arcane |
| Comando | `/squad-carrossel-arcane` |
| Versão | **1.2.0** |
| Agentes | **4** (1 chief + 3 specialists) |

### Papel de cada agente (`squad.yaml → agents`)

| Agente | Papel |
|---|---|
| **carrossel-chief** | *"Roteia pra Identity Designer (setup) ou Producer (producao)"* |
| **identity-designer** | *"Cria templates visuais do aluno em loop iterativo"* — a moldura HTML+CSS, *"sem custo de API"* |
| **image-director** | *"Cria as imagens de conteudo de alto nivel de cada card (encena a tese); templates de estilo reutilizaveis; entrega card{N}-FINAL.png pro Producer"* |
| **producer** | *"Monta carrossel/post usando templates salvos"* |

O `description` explica as duas camadas: *"(1) ARTE EM CSS, a moldura do post feita em HTML+CSS dentro do Claude Code, sem custo de API... (2) IMAGEM GERADA POR IA (GPT Image 2 / Nano Banana Pro), a ilustracao que encena a tese do card"*.

### INPUT
`tasks/produce-carousel.md` → `Entrada: "Aluno tem templates salvos e quer produzir carrossel"`. Ou seja: **a copy pronta** + template escolhido + pasta de imagens.

Convenção crítica citada na task: *"**`card{N}` na pasta de imagens = bloco {N} da copy.** A copy é separada em blocos por linhas com `-` isolado (ou linha vazia dupla)"*. E: *"**Não existe** → slide text-only (não inventar imagem)"*.

### OUTPUT — **ARQUIVO DE MÍDIA (PNG renderizado)**
`squad.yaml → output`:
```
output_dir: "~/Downloads/{nome-do-carrossel}/"   # card{N}-FINAL.png (Image Director) + slide-NN.png (Producer)
```
PNGs 1080x1350 renderizados de verdade — `tools/build-carousel.mjs`:
```
27:  import { execFileSync } from 'child_process';
160: if (!CHROME) { console.error('ERRO: Chromium não encontrado ...'); process.exit(1); }
178: execFileSync(CHROME, [
181:   `--screenshot=${path.join(outDir, `slide-${nn}.png`)}`,
```

### Dependências — **Chromium obrigatório; API de imagem OPCIONAL e PAGA**
```
required:
  - "Chromium ou Chrome (pra renderizar HTML → PNG)"
  - "Python 3.x (pra manipulacao de imagens via PIL)"
optional:
  - "Chave de API de geracao de imagem (OpenAI gpt-image, Google Gemini, ou Nano Banana) — so se for usar placeholders AI"
```
Custos em `data/api-providers.yaml`:
- OpenAI gpt-image-2: `cost_per_image_usd: "0.04-0.20"` — *"Default — melhor qualidade pra colagens"*
- Google Gemini: `"free-tier (com limite mensal)"` — *"Bom pra alunos sem orcamento pra OpenAI"*
- Nano Banana (Higgsfield): `"variavel (plano Higgsfield)"`

Chave vai em `~/.carrossel-arcane/config/api.yaml`.

### Encadeamento
**Consome:** a copy — que o `squad-conteudo-arcane` entrega como `laminas-carrossel.md`. Encadeamento explícito (o Carrossel *"nao escreve a copy"*).
**Alimenta:** publicação direta no Instagram (ou o `trafego-arcane` como criativo estático).

---

## 3. squad-anuncios-arcane

| Campo | Valor |
|---|---|
| Nome | Anúncios Arcane |
| Comando | `/squad-anuncios-arcane` |
| Versão | **1.0.0** |
| Agentes | **4** |

### Papel de cada agente (`squad.yaml → agents`)

| Agente | Papel |
|---|---|
| **argus-chief** | *"Recepcao — descobre o estagio (zerado / configurado / com dados), apresenta o time, encaminha pro agente certo, e faz a leitura estrategica do brief. **Nao executa o pipeline nem configura nem escreve anuncios**"* |
| **nina-setup** | *"Guia o expert na configuracao das ferramentas: conta Airtable + PAT com scopes + base, conta Apify + token, MCPs via claude mcp add, instalacao das 3 skills do pipeline"* |
| **vera-pesquisa** | *"Analista de inteligencia (executa o pipeline) — roda as 3 skills (competitor-research, scrape-ads, ad-brief) na ordem... faz a cola entre as fases (table IDs + niche tiers no CLAUDE.md)"* |
| **teo-criativo** | *"Le o brief... gera um lote de 20+ anuncios sugeridos (angulo + formato + nivel de consciencia + hook + roteiro completo), cada um ancorado em dado... **Entrega roteiro e direcao — nao produz o video**"* |

Teo opera em 2 modos: *"Freestyle (clonagem/engenharia reversa dos vencedores — o dado vence) ou Seguro (pelos frameworks da KB — o metodo vence)"*.

Tese do squad: *"longevidade = lucratividade (anuncio rodando 30+ dias e um vencedor validado)"*.

### INPUT
Seu nicho. O pipeline sozinho *"acha 10+ concorrentes e monta banco no Airtable"* e *"scrapeia todos os anuncios ativos deles no Meta Ad Library"*.

### OUTPUT — **TEXTO (markdown) + registros no Airtable**
```
output_layout:
  airtable: "Base do expert — tabelas Competitors e Ad Research"
  brief:    "research/briefs/ad-brief-{YYYY-MM-DD}.md"
  anuncios: "research/anuncios/anuncios-sugeridos-{YYYY-MM-DD}.md"
  config:   "CLAUDE.md do projeto — secao Ad Research Config"
```
Nenhuma mídia produzida.

### Dependências — **2 contas externas + 2 MCPs**
```
required:
  - "Conta Airtable (free tier) — cada expert cria a sua"
  - "Conta Apify (free tier) — cada expert cria a sua"
optional:
  - "whisper.cpp + ffmpeg — pra transcricao de video dos anuncios (pipeline funciona sem)"
```
Do `knowledge/guia-setup-ferramentas.md`:
- Airtable: *"Token: `airtable.com/create/tokens` → criar PAT com os **4 scopes**"*
- Apify: *"Token: Settings → Integrations → API tokens → copiar (começa com `apify_api_`)"*, *"Free tier serve (crédito mensal cobre o uso)"*
- MCPs: `claude mcp add airtable ...` / `claude mcp add apify ...`, com a trava: *"**Sempre `-s local`.** Isso grava o token numa config local da máquina, fora do Git — não vaza em repositório."*
- *"O Apify acessa só dados **públicos** do Facebook. Não usa nem pede a conta de Facebook do expert."*

### Encadeamento
**Consome:** nada de outro squad — é a ponta inicial de estratégia.
**Alimenta:** os roteiros de `anuncios-sugeridos-*.md` viram input do `squad-iavideos-arcane`, do `squad-heygen-arcane` ou do `squad-edicao-arcane` (você grava).

---

## 4. squad-conteudo-arcane

| Campo | Valor |
|---|---|
| Nome | Conteúdo Arcane |
| Comando | `/squad-conteudo-arcane` |
| Versão | **1.0.1** |
| Agentes | **6** (1 chief + 5 specialists) |

Base declarada: *"Metodo Audience (Elias Maman) + Formato Criativo (Hannah Franklin) + Filosofia/Funil (Euriler)"*.

### Papel de cada agente (`squad.yaml → agents`)

| Agente | Papel |
|---|---|
| **vox-chief** | *"Orquestrador — recepciona expert, descobre estagio (zerado / com base / com posts), roteia pro caminho/agente certo"* |
| **iris-pesquisador** | *"Pesquisador duplo — (1) formatos (biblioteca embarcada + garimpo IG/TikTok/YT) (2) temas (16 categorias + virais no nicho + detecta tema quente)"* |
| **sage-teorico** | *"Criador de teoria — 3 sub-passos (pesquisa interna do expert -> pesquisa externa densa + engenharia reversa de virais -> amarracao com 6 lentes de comunicacao). Entrega tese + leque de hooks"* |
| **rico-roteirista** | *"Roteirista — captura tom de voz do expert + escreve roteiro (hook + intro + conteudo notavel + CTA + posicionamento) + loop iterativo ate aprovacao"* |
| **mack-produtor** | *"Pra carrossel: gera laminas (texto + ideia imagem GPT) + orienta Canva. Pra reels: orienta setup ideal (iPhone Pro 13+, modo cinema, mic Hollyland/Boya, contra luz). **Nao produz — orienta expert a executar**"* |
| **aria-analista** | *"Diagnostica posts (3 metricas-chave Audience...) + le comentarios qualitativamente + gera relatorio com insights + sugestoes de escala (formato vs assunto) + reaproveitamento. **NAO dispara acao — expert decide**"* |

### INPUT
Seu nicho + tema. Para a Aria (análise pós-publicação), UC4: *"expert traz numeros (print, verbalizado, Apify JSON) + comentarios"* — **você coleta e cola**.

### OUTPUT — **100% TEXTO**
```
output_layout:
  expert_workspace: "docs/producao-conteudo/{expert-slug}/"
    - "base-inicial.md"
    - "perfil-tom-de-voz.md"
    - "posts/{slug-post}/teoria.md"
    - "posts/{slug-post}/roteiro.md"
    - "posts/{slug-post}/laminas-carrossel.md"   # se carrossel
    - "posts/{slug-post}/direcao-reels.md"       # se reels
    - "analises/{YYYY-MM-DD}/relatorio.md"
```

### Dependências — **NENHUMA**
```
dependencies:
  required: []
  optional: []
```
O único squad do pack com dependência zero. Roda hoje, sem instalar nada.

### Encadeamento — **é o motor central do seu fluxo**
**Consome:** nada obrigatório.
**Alimenta:**
- `laminas-carrossel.md` → **squad-carrossel-arcane** (que é justamente quem *"nao escreve a copy"*)
- `direcao-reels.md` → você grava → **squad-edicao-arcane**
- `roteiro.md` → **squad-heygen-arcane** / **squad-iavideos-arcane**

---

## 5. squad-posicionamento-arcane

| Campo | Valor |
|---|---|
| Nome | Squad Posicionamento Arcane |
| Comando | `/squad-posicionamento-arcane` |
| Versão | **1.0.0** |
| Agentes | **3** |

### Papel de cada agente (`squad.yaml`)

| Agente | Papel |
|---|---|
| **posicionamento-chief** | *"Orquestrador. Onboarding, diagnostico, roteamento, handoffs, compilacao final"* |
| **nucleo-strategist** | *"Especialista em Nucleo de Influencia (metodo audience completo)"* |
| **vitrine-strategist** | *"Especialista em vitrine Instagram (display name, bio, link, destaques, pinned posts + copy)"* |

### INPUT
`dependencies.required`: *"Aluno completou Fase 1 da Mentoria Arcane (proposito + posicionamento + metodologia + primeiro produto) — **OU aceitou seguir sem**"*.

### OUTPUT — **TEXTO (copy) — explicitamente sem design**
`description`: *"...ate o schema da vitrine: display name, bio, link bio, 3 destaques fixos (Sobre/Produto/Depoimentos) e 3 posts fixados (Sobre/Tese/Oferta). Entrega copy pronta + capas-conceito. **Zero design.**"*

4 quality gates (QG-PD-001 a QG-PD-004), fechando em `tasks/compile-final-output.md`.

### Dependências — **nenhuma técnica.** Só pré-requisitos de conteúdo:
```
optional:
  - "Aluno tem produto lancado (sem isso: Pinned 3 e Destaque Produto viram placeholders)"
  - "Aluno tem depoimentos coletados (sem isso: Destaque 3 vira placeholder)"
  - "Aluno tem funil/LP/lead magnet (sem isso: Link bio vira placeholder)"
```

### Encadeamento
Roda **uma vez**, antes do fluxo de produção. As "capas-conceito" dos destaques podem ir pro **squad-carrossel-arcane** virar PNG. Os 3 pinned posts (Sobre/Tese/Oferta) viram pauta pro **squad-conteudo-arcane**.

---

## 6. trafego-arcane

| Campo | Valor |
|---|---|
| Nome | Tráfego Arcane |
| Comando | `/trafegoArcane` |
| Versão | **2.6.0** (era 2.1.1 no commit `ba862f9`) |
| Agentes | **5** |

### Papel de cada agente (`README.md`)

| Agente | Tier | Papel |
|---|---|---|
| **andromeda-chief** | Orchestrator | *"Onboarding, roteamento, admin"* |
| **traffic-strategist** | Tier 0 (Advisor) | *"Analise macro, briefing criativos, consultoria"* |
| **scale-operator** | Tier 1 | *"Opera conta escala via Meta API"* |
| **test-operator** | Tier 1 | *"Opera conta teste via Meta API"* |
| **creative-prep-operator** | Tier 1 | *"Prepara lote de criativos pro upload (nomenclatura + transcricao + titulos/legendas)"* |

Modelo de execução (README): *"**Leitura:** Autonoma (GET insights, metricas, diagnostico) / **Escrita:** Aprovacao humana (POST/PATCH campanhas, conjuntos, criativos, orcamento)"*.

### INPUT
Credenciais Meta + pasta de criativos. `tasks/prep-creatives.md`: `Entrada: "Pasta com criativos crus (videos/imagens ja produzidos) + tipo de lote (teste ou escala) + produto"`.

### OUTPUT — **campanhas reais no Meta + manifesto em TEXTO**
`prep-creatives.md`: `Saida: "Pasta {LOTE}/ pronta: criativos renomeados no padrao Andromeda, transcricoes, e manifesto criativos-{LOTE}.md com 3 titulos + 1 legenda (sem data) por criativo. Pronta pro scale/test-operator subir."`

⚠️ Essa task **também usa ffmpeg + whisper** — checklist: *"Videos transcritos (ffmpeg + whisper.cpp)"*. Mesma stack do squad-edicao — instalar uma serve às duas.

O que a task **não** faz (dito nela): *"gravar/editar/gerar criativo (e da equipe de criacao) e subir no Meta (e do scale/test-operator). Ela prepara e empacota."*

### Dependências — **token Meta com 6 escopos + Graph API v26.0**

---

### ⚠️ MUDANÇAS v2.1.1 → v2.6.0 em token e escopos da Meta

Comparação direta entre `git show ba862f9:agents/trafego-arcane/data/meta-api-credentials.md` (v2.1.1) e o arquivo atual (v2.6.0).

**1. Escopos do System User Token — de 5 para 6 permissões**

| v2.1.1 (linha 18) | v2.6.0 (linha 18) |
|---|---|
| *"**Permissões mínimas a marcar:** `ads_management`, `ads_read`, `business_management`, `pages_manage_ads`, `pages_read_engagement`"* | *"**Permissões a marcar:** `ads_management`, `ads_read`, `business_management`, `pages_manage_ads`, `pages_manage_posts`, `pages_read_engagement`"* |

**Adicionado: `pages_manage_posts`.** A v2.6.0 documenta a incerteza em vez de escondê-la: *"(Marcar `pages_manage_ads` **e** `pages_manage_posts` — divergência antiga entre os docs; as duas não atrapalham, confirmar qual é exigida pra dark post na próxima criação real. Mesma lista da KB Step 9f.)"*

Note também que a v2.1.1 dizia *"permissões **mínimas**"*; a v2.6.0 tirou o "mínimas".

**2. Versão da Graph API — v21.0 → v26.0**

| v2.1.1 | v2.6.0 |
|---|---|
| `**Última validação:** 2026-05-05 (Graph API v21.0)` | `**Última validação:** 2026-08-23 (Graph API v26.0)` |
| `META_API_VERSION` = `v21.0` | `META_API_VERSION` = `v26.0` |

**Se você já tem um `.env` da v2.1.1, ele está com `v21.0` e precisa ser trocado à mão pra `v26.0`.**

**3. `META_APP_ID` foi rebaixado a opcional**

A v2.6.0 acrescenta: *"`META_APP_ID` | texto **(opcional)** | ... **Não é usado em operação** (as chamadas usam token + IDs de conta) — só referência pra abrir o app no painel. Não precisa coletar no setup; se quiser registrar, sai de `GET /debug_token`."* Na v2.1.1 era um campo normal da lista.

**4. Novo bloco de compliance regulatório brasileiro (a mudança de maior peso operacional)**

O README v2.6.0 abre com: *"criação de campanha atualizada para Graph API v26.0. O squad agora identifica anunciante e pagador por IDs verificados (`regional_regulation_identities`), inclui as categorias regulatórias brasileiras, executa `validate_only` antes de criar e bloqueia ativação até o readback confirmar o compliance."*

`knowledge/andromeda-rules.md:44`: *"Desde 23/08/2026, o contrato correto e `regional_regulation_identities`; `dsa_beneficiary`/`dsa_payor` sao texto legado e **nao resolvem 'anunciante ausente'**."*

Cada adset agora precisa de (`knowledge/meta-api-reference.md`):
```json
"regional_regulated_categories": ["BRAZIL_REGULATION", "VOLUNTARY_VERIFICATION"],
"regional_regulation_identities": {
  "universal_beneficiary": "{beneficiary_id}",
  "universal_payer": "{payer_id}"
}
```
`andromeda-rules.md:55`: *"`dsa_*`, default textual da conta e categorias sem identidade **nao** substituem `regional_regulation_identities`."*

**Isso significa: você precisa de anunciante e pagador VERIFICADOS na Meta.** Verificação de identidade é processo manual, com documento, do lado da Meta — o squad não faz por você.

**5. Regra nova e explícita: NÃO usar MCP Meta**

`knowledge/sop-campanha-api.md:13-17`: *"**O Tráfego Arcane opera SEMPRE via System User token + Graph Marketing API direta (curl/script). NUNCA via MCP Meta — mesmo que um MCP Meta esteja conectado na sessão.**... Ele autentica com a conta logada (OAuth), que **não é** o System User certo de cada BM — pode nem enxergar uma conta que só responde ao System User dela. Operar pelo MCP = risco de mexer na conta errada ou sem permissão."*

**O que NÃO mudou:** o token continua sendo System User long-lived (*"não expira"*), continuam sendo os mesmos 9 campos `META_*`, e as 3 opções de armazenamento (env vars / `data/.env` gitignored / gerenciador de senhas) seguem idênticas. As regras de segurança também: *"**NUNCA commitar** `data/.env`"*, *"**NUNCA passar** token por argumento de comando (fica em histórico shell)"*.

### Encadeamento
**Consome:** criativos prontos do **squad-edicao-arcane**, **squad-iavideos-arcane**, **squad-heygen-arcane** ou **squad-carrossel-arcane**. É o ponto final da esteira.
**Alimenta:** os dados de performance voltam pra `aria-analista` (conteúdo) e pro `squad-anuncios-arcane`.

---

## 7. slide-forge

| Campo | Valor |
|---|---|
| Nome | Slide Forge v2 |
| Comando | `/slideForge` (`slash_prefix: "slideForgeV2"`, com alias legado `slideForge`) |
| Versão | **2.0.0** (`last_rebuilt: "2026-05-08"`) |
| Agentes | **2** — o menor do pack |

### Papel de cada agente

| Agente | Papel |
|---|---|
| **slide-forge-chief** | Orchestrator — Fases 0-6: `define-event`, `map-sources`, `capture-dump`, `define-skeleton`, `develop-block-theory`, `validate-full-theory`, `produce-block-slides` |
| **visual-briefer** | *"Captura direção visual (vibe + refs + design system), monta style prefix, escreve briefing cinemático slide a slide pro Manus (Ponte 6→7 + Fase 7)"* |

### INPUT
`description`: *"Pipeline em 7 fases que transforma **despejo bruto + fontes existentes** em conteúdo de apresentação completo"*. Optional deps: *"Material de referência do usuário (Obsidian, KB, palestras, transcrições, etc — **usuário aponta paths**)"*.

### OUTPUT — **TEXTO. Não gera slide nenhum.**
README, seção Outputs: *"3 arquivos por evento"*, sendo o principal *"**Briefing Manus** (workspace path + cópia em local fácil acesso) | Briefing visual cinemático **pra colar no Manus + Nano Banana Pro produzir**"*.

`tasks/save-and-deliver.md` pede dois caminhos: *"1. **Workspace do evento** (onde fica o trabalho organizado) 2. **Local de fácil acesso** pra você pegar e **mandar pro Manus** rapidamente (Downloads, área de trabalho, drive, ou outro)"*.

### Dependências — **ferramenta externa paga, operada por VOCÊ**
```
required:
  - "Manus + Nano Banana Pro (modelo de geração de imagens — externo ao squad, mas o briefing é desenhado pra ele)"
optional:
  - "Doc de design system do usuário (se houver)"
```

### Encadeamento
Fluxo separado (workshop/palestra/aula), não se conecta ao pipeline de Reels/carrossel. **Termina num copiar-e-colar manual pro Manus.**

---

## 8. squad-heygen-arcane

| Campo | Valor |
|---|---|
| Nome | HeyGen Arcane |
| Comando | `/squad-heygen-arcane` |
| Versão | **1.0.0** |
| Agentes | **4** |

### Papel de cada agente (`agents/*.md`, seção Propósito)

| Agente | Papel |
|---|---|
| **heygen-chief** | Orquestrador do pingue-pongue: *"o usuário precisa **gravar um áudio** no meio do processo. Não é 'manda produzir e espera'... Alguém precisa segurar esse ritmo, garantir que o script foi aprovado antes da gravação, que o áudio chegou antes da produção"* |
| **estrategista-copy-ads** | *"Escrever pra ser lido é uma coisa; escrever pra ser falado naturalmente, com hook nos primeiros segundos e ritmo de fala, é outra. Esse é o domínio dele"* |
| **diretor-look** | *"Diretor de casting... o usuário costuma ter **mais de um look**... Cada look conversa com uma energia diferente"* |
| **operador-heygen-mcp** | *"Subir o áudio pra uma URL pública, montar a chamada `create_video_from_avatar` com os parâmetros certos (avatarId, audioUrl, engine avatar_v, aspect ratio, resolução), fazer o polling até o vídeo completar, e baixar o resultado"* |

### INPUT — **inclui um áudio que VOCÊ grava**
`tasks/orientar-gravacao.md` é rotulada *"O Gargalo do Pipeline"*: *"A gravação é a única coisa que o squad não faz sozinho. O Chief prepara o usuário: entrega o script limpo, instrui como gravar, recebe o áudio e confirma o mapeamento. **Sem áudio, o operador não tem o que produzir.**"*

Motivo técnico (`description`): *"Voz real via upload de audio (audioUrl bypassa TTS); gesto vem da entonacao automaticamente."*

### OUTPUT — **ARQUIVO DE MÍDIA (MP4 baixado)**
`tasks/entregar.md`: `Saida: "Vídeos baixados em ~/Downloads/, abertos no player, confirmados"`, *"Para cada `video_url`, baixar via `curl -sSL` em `~/Downloads/` com nome descritivo"*.

⚠️ Step 2 dessa task: *"Rodar `open` nos arquivos baixados pra exibir no player padrão **do Mac**"* — `open` não existe no Windows. Falha cosmética no fim; o MP4 já vai estar baixado.

### Dependências — **plano PAGO obrigatório**
```
required:
  - "Claude Code com MCP HeyGen autenticado na conta do usuario"
  - "Avatar V treinado na UI HeyGen (Clone a Real Person)"
  - "Plano HeyGen pago (Creator+) — Avatar V requer credits premium"
optional:
  - "Voice clone na conta HeyGen (sem, usa default voice do avatar)"
  - "catbox.moe ou outro hosting de audio com URL publica"
```
`target_user` já assume tudo pronto: *"Criador que **ja tem** Avatar V treinado no HeyGen e MCP HeyGen autenticado no Claude Code"*. Treinar o Avatar V é trabalho manual seu, na UI do HeyGen.

### Encadeamento
**Consome:** roteiro do `squad-conteudo-arcane` ou de `anuncios-sugeridos-*.md` do `squad-anuncios-arcane`.
**Alimenta:** `trafego-arcane → prep-creatives`.

---

## 9. squad-iavideos-arcane

| Campo | Valor |
|---|---|
| Nome | IA Videos Arcane |
| Comando | `/squad-iavideos-arcane` |
| Versão | **1.0.0** |
| Agentes | **4** |

### Papel de cada agente (`agents/*.md`, seção Propósito)

| Agente | Papel |
|---|---|
| **iavideos-chief** | *"Traduzir o trabalho dos agentes técnicos numa conversa clara com quem decide, apresentar peças de forma que o usuário consiga avaliar rápido, e conduzir o feedback loop sem deixar o processo se perder"* |
| **estrategista-criativo** | *"Saber qual formato encaixa em qual mensagem, qual hook prende nos 3 primeiros segundos, como montar a anatomia hook-corpo-CTA"* |
| **diretor-persona** | *"Casting é estratégia, não detalhe técnico... a persona precisa parecer com o público-alvo, porque é nela que o espectador se reconhece"* |
| **operador-higgsfield** | *"Saber qual modelo do Higgsfield usar para cada tipo de peça, qual modo do Marketing Studio encaixa em cada formato, como passar avatares e produtos, como rodar o **Virality Predictor**, e o que fazer quando a rede cai no meio de uma geração"* |

### INPUT
`description`: *"Recebe roteiros ou ideias, propoe formatos e angulos, produz lotes de teste"*. UC2: *"Ideia Crua — So uma ideia — o squad roteiriza antes de produzir"*. **É o único caminho do pack que não exige você gravar nada.**

### OUTPUT — **ARQUIVO DE MÍDIA (vídeo gerado pelo Higgsfield)**
Tasks: `produzir-pecas` → `avaliar-viralidade` → `apresentar-pecas` → `feedback-loop` → `escalar-variacoes` → `entregar-pacote`. Quality gates: QG-IAV-01 (conceito validado), QG-IAV-02 (peças pontuadas), QG-IAV-03 (peças aprovadas).

### Dependências — **CLI externo + conta Higgsfield**
```
required:
  - "Higgsfield CLI instalado e autenticado"
  - "Skills higgsfield-* disponiveis no ambiente"
optional:
  - "Biblioteca de avatares custom previamente criada"
```

### Encadeamento
**Consome:** roteiros do `squad-conteudo-arcane` ou `anuncios-sugeridos-*.md` do `squad-anuncios-arcane`.
**Alimenta:** `trafego-arcane → prep-creatives`.
**Compartilha provider** com o `squad-carrossel-arcane` (Nano Banana via Higgsfield) — uma conta serve às duas.

---

## Mapa de encadeamento do pack

```
   squad-posicionamento-arcane  (roda 1x, no começo)
              │  copy da vitrine + capas-conceito
              ▼
   squad-anuncios-arcane ──────► ad-brief + anuncios-sugeridos.md
   (inteligência competitiva)              │
                                           │ roteiros
   squad-conteudo-arcane ──────────────────┤
   (motor central, dep. ZERO)              │
     ├─ laminas-carrossel.md ──► squad-carrossel-arcane ──► slide-NN.png
     ├─ direcao-reels.md ──► [VOCÊ GRAVA] ──► squad-edicao-arcane ──► final.mp4
     └─ roteiro.md ─────────────┬─► squad-heygen-arcane ──► MP4  (você grava ÁUDIO)
                                └─► squad-iavideos-arcane ──► MP4 (Higgsfield, sem gravar)
                                                │
                          todos os criativos ───┤
                                                ▼
                                   trafego-arcane (prep-creatives → Meta API)

   slide-forge  ──► briefing.md ──► [VOCÊ COLA NO MANUS]   (fluxo separado)
```

---

## Tabela-resumo

| Squad | Ver. | Agentes | Output | Tipo | Dependência crítica |
|---|---|---|---|---|---|
| squad-conteudo-arcane | 1.0.1 | 6 | roteiro/teoria/lâminas `.md` | TEXTO | **nenhuma** |
| squad-posicionamento-arcane | 1.0.0 | 3 | copy da vitrine | TEXTO | nenhuma |
| squad-anuncios-arcane | 1.0.0 | 4 | brief + 20 anúncios `.md` | TEXTO | Airtable + Apify (free) |
| slide-forge | 2.0.0 | 2 | briefing pro Manus | TEXTO | Manus + Nano Banana (pago) |
| squad-carrossel-arcane | 1.2.0 | 4 | `slide-NN.png` 1080x1350 | **MÍDIA** | Chromium; API imagem opcional |
| squad-edicao-arcane | 1.1.1 | 7 | `{video}_final.mp4` | **MÍDIA** | ffmpeg+whisper+torch local (grátis) |
| squad-heygen-arcane | 1.0.0 | 4 | MP4 em `~/Downloads/` | **MÍDIA** | HeyGen Creator+ **pago** |
| squad-iavideos-arcane | 1.0.0 | 4 | vídeos Higgsfield | **MÍDIA** | Higgsfield CLI **pago** |
| trafego-arcane | 2.6.0 | 5 | campanhas Meta + manifesto | MISTO | System User token, 6 escopos, v26.0 |

---

## O que te obriga a trabalho manual

Ordenado por quanto trava o fluxo.

### 1. Gravar (o gargalo real, e não tem contorno)
- **squad-edicao-arcane**: precisa do seu vídeo bruto talking-head. O squad edita — não filma.
- **squad-heygen-arcane**: `orientar-gravacao.md` é literalmente rotulada *"O Gargalo do Pipeline"* — *"A gravação é a única coisa que o squad não faz sozinho... Sem áudio, o operador não tem o que produzir."*
- **squad-conteudo-arcane / mack-produtor**: *"Nao produz — orienta expert a executar."*
- Único caminho que dispensa gravação: **squad-iavideos-arcane** (Higgsfield gera do zero).

### 2. Verificação de identidade na Meta (bloqueia campanha, não só atrasa)
A v2.6.0 exige `regional_regulation_identities` com `universal_beneficiary` e `universal_payer` — **IDs de anunciante e pagador verificados**. `andromeda-rules.md:55`: *"`dsa_*`, default textual da conta e categorias sem identidade **nao** substituem `regional_regulation_identities`."* O squad *"bloqueia ativação até o readback confirmar o compliance"*. Verificar identidade é processo manual na Meta, com documento. **Comece por isso — é o de maior lead time.**

### 3. Setup de credenciais (uma vez, mas denso)
- **trafego-arcane**: BM + App Meta + System User + **6 escopos** (agora com `pages_manage_posts`) + conta de anúncio + página + pixel + IG Business. Se veio da v2.1.1: trocar `META_API_VERSION` de `v21.0` pra **`v26.0`** à mão.
- **squad-anuncios-arcane**: conta Airtable (PAT com 4 scopes) + Apify + 2 MCPs com `-s local`.
- **squad-edicao-arcane**: `install.py` baixa **1,5GB** de modelo whisper + venv com torch. Depois, editar `data/nomes-proprios.yaml` com os seus nomes — sem isso a legenda sai com português errado.
- **squad-heygen-arcane**: treinar o Avatar V na UI do HeyGen (o `target_user` já pressupõe pronto).

### 4. Copiar-e-colar entre etapas (o pack não é uma esteira automática)
- **slide-forge → Manus**: o briefing termina em `.md` que **você cola** no Manus. `save-and-deliver` até pede um *"local de fácil acesso pra você pegar e mandar pro Manus rapidamente"* — o squad assume o passo manual.
- **conteudo → carrossel**: o Carrossel *"nao escreve a copy"*. Você leva `laminas-carrossel.md` pra lá, e nomeia as imagens seguindo a convenção crítica `card{N}` = bloco {N}.
- **edicao/heygen/iavideos → trafego**: `prep-creatives` espera *"Pasta com criativos crus"*. Você junta os MP4s numa pasta.
- **aria-analista**: precisa que **você colete** os números — *"print, verbalizado, Apify JSON"*.

### 5. Aprovações humanas embutidas por design
Não é falha — é a arquitetura. `trafego-arcane`: *"**Escrita:** Aprovacao humana (POST/PATCH campanhas, conjuntos, criativos, orcamento)"*. Quality gates bloqueantes que exigem sua palavra: QG-SEA-003, QG-SEA-004, QG-PREP-001, QG-IAV-01, QG-HGN-01.

### 6. Atritos específicos de Windows
- **squad-edicao-arcane**: `BRIEF-port-windows-v1.1.md` documenta que *"path com `C:\...` quebra o filtergraph do ffmpeg"* e que o ffmpeg de Windows *"normalmente **não** traz [fontconfig] compilado"*. A v1.1.0 resolve, mas **rode `python scripts/doctor.py` antes** de confiar. Use o build **full** do gyan.dev — o "essentials" não tem `drawtext` (`installer.md:62`).
- **squad-heygen-arcane**: `entregar.md` roda `open` no *"player padrão do Mac"*. Não existe no Windows — quebra cosmética depois do download.

### 7. Custo recorrente
| Item | Custo citado no arquivo |
|---|---|
| HeyGen Creator+ | *"Plano HeyGen pago (Creator+) — Avatar V requer credits premium"* |
| Higgsfield | *"variavel (plano Higgsfield)"* |
| OpenAI gpt-image-2 | `cost_per_image_usd: "0.04-0.20"` |
| Gemini (alternativa) | *"free-tier (com limite mensal)"* — *"Bom pra alunos sem orcamento pra OpenAI"* |
| Airtable / Apify | free tier — *"crédito mensal cobre o uso"* |
| Manus + Nano Banana Pro | pago, não quantificado |
| **squad-edicao-arcane** | **R$0** — tudo local |

---

## Sugestão de ordem de ativação

1. **squad-conteudo-arcane** — dependência zero, roda agora, e é quem alimenta quase todo o resto.
2. **squad-posicionamento-arcane** — também sem dependência, arruma a vitrine antes do tráfego chegar.
3. **squad-edicao-arcane** — instalação chata (1,5GB) mas custo recorrente zero; destrava o caminho "eu gravo → sai Reels pronto".
4. **Verificação de identidade na Meta** — comece em paralelo, é o de maior lead time.
5. **squad-carrossel-arcane** — comece com Gemini free tier em vez de OpenAI.
6. **trafego-arcane** — quando a verificação da Meta sair.
7. **anuncios / heygen / iavideos** — dependem de contas pagas ou setup mais longo; entram quando o básico estiver girando.
