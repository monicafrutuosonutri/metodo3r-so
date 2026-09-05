# Cobertura de Squads — Diagnóstico dos 12 Componentes

**Levantado em:** 05/09/2026
**Método:** leitura direta de `squad.yaml`, `agents/*.md`, `tasks/*.md` (frontmatter `Entrada:`/`Saida:`),
`workflows/*.md`, scripts e arquivos de config. Nada aqui vem do nome do squad nem da descrição de marketing.
**Fontes secundárias:** `INVENTARIO-PACK-COMPLETO.md` (23/08) e `INVENTARIO-SQUADS.md` (23/08).
**Status:** substitui a tabela de hipótese do `tracker.md`.

---

## Correções de fato apuradas nesta varredura

| Afirmação anterior | Realidade verificada em 05/09 |
|---|---|
| "Pack Arcane (9 squads)" (contexto-dinamico, cockpit, tracker) | São **10** squads Arcane instalados: anuncios, carrossel, conteudo, edicao, heygen, iavideos, low-ticket, lpago, posicionamento, trafego. Total geral em `agents/`: 26 diretórios |
| `INVENTARIO-SQUADS.md` (23/08): *"`squad-edicao-arcane` não existe neste sistema"* | **Desatualizado.** O squad foi instalado depois e hoje roda: `doctor.py` retornou **25/25 OK, 0 avisos** em 05/09. O `INVENTARIO-PACK-COMPLETO.md` (mesma data) já traz a leitura correta |

O `INVENTARIO-PACK-COMPLETO.md` continua válido e é a melhor fonte funcional do pack. O
`INVENTARIO-SQUADS.md` tem a seção 3 (sobre edição) obsoleta.

---

## Princípio aplicado

REUSE > ADAPT > CREATE (Constitution Art. VI + `regras-estrategicas.md` §3).
Só se recomenda criar algo diante de lacuna comprovada pela leitura do que o agente faz de verdade.

**Resultado geral: nenhum squad novo se justifica hoje.** As lacunas reais não são de
capacidade de raciocínio — são de **persistência** (o output morre em relatório episódico),
**cadência** (roda uma vez, não continuamente) e **captura de dado** (ninguém coleta métrica).
Isso se resolve com arquivos, rules e processo, não com agentes novos.

---

## 1. Pesquisa contínua

| Campo | Leitura |
|---|---|
| **Recurso existente** | `iris-pesquisador` (`/squad-conteudo-arcane`) — tasks `pesquisar-temas.md`, `sugerir-tema-do-momento.md`, `pesquisa-externa.md`, `ensinar-pesquisa-manual.md`. Secundário: `vera-pesquisa` (`/squad-anuncios-arcane`) |
| **Capacidade real** | Iris entrega pool de **15-30 temas** categorizados nas 16 categorias do Método Audience, gravados em `base-inicial.md`. Sage faz pesquisa externa densa + engenharia reversa de virais por post. Vera roda pipeline de inteligência competitiva real (competitor-research → scrape-ads → ad-brief) |
| **Como é acionado** | `/squad-conteudo-arcane` → workflow `setup-inicial` (Iris) ou `produzir-post` (Sage). `/squad-anuncios-arcane` → Vera |
| **Limitações** | Iris é pesquisa **de setup, pontual** — roda uma vez e sobrescreve `base-inicial.md`. Sem cadência, sem versionamento, sem acúmulo. Vera pesquisa **anúncios pagos** (Meta Ad Library), não conteúdo orgânico, e exige Airtable PAT + Apify token + 2 MCPs que **não estão configurados** |
| **Precisa integrar com** | Cadência (Companion no weekly review) + destino em `sistema-editorial/pesquisa/` com fonte e data obrigatórias (`regras-estrategicas.md` §6) |
| **Lacuna real** | **PARCIAL.** O motor de pesquisa existe e é bom. Falta o "contínua": ritmo, acúmulo e persistência. É processo + convenção de arquivo, **não squad novo** |

## 2. Banco de linguagem da audiência

| Campo | Leitura |
|---|---|
| **Recurso existente** | `aria-analista` (`/squad-conteudo-arcane`) — task `analisar-comentarios.md` (`Entrada: "Dump de comentarios (copy-paste) de 1 ou N posts"` / `Saida: "Analise qualitativa + insights pra proximos posts"`) e `ler-apify.md` |
| **Capacidade real** | Lê comentários e devolve leitura qualitativa com insights aplicáveis ao próximo post |
| **Como é acionado** | `/squad-conteudo-arcane` → Aria, workflow `analisar-performance` |
| **Limitações** | A Mônica cola os comentários **à mão**. O output cai em `analises/{data}/relatorio.md` — episódico, não cumulativo. Não extrai *verbatim* nem monta léxico da persona; extrai insight, que é outra coisa |
| **Precisa integrar com** | Arquivo-banco persistente em `persona-angulos/` com regra de append (nunca sobrescrever) |
| **Lacuna real** | **PARCIAL.** Extração existe, persistência não. É estrutura de arquivo + regra. Já está no Inbox do cockpit como ideia da Mônica (05/09) |

## 3. Persona e banco de ângulos

| Campo | Leitura |
|---|---|
| **Recurso existente** | `nucleo-strategist` (`/squad-posicionamento-arcane`); `lt-copywriter` (`/squad-low-ticket-arcane`, task `edi-completo.md`); `sage-teorico` (`/squad-conteudo-arcane`, task `amarracao-lentes.md`) |
| **Capacidade real** | Núcleo de Influência com **11 pontos + crenças centrais + 3-4 apresentações magnéticas**, validado em loop até o aceite. O **EDI** do low-ticket é o que mais se aproxima de matriz de ângulos: ruminações pontuadas **Score 0-5** por dor + mecanismo único. Sage produz **leque de 5-7 hooks** por post |
| **Como é acionado** | `/squad-posicionamento-arcane`; `/squad-low-ticket-arcane` → lt-copywriter; `/squad-conteudo-arcane` → Sage |
| **Limitações** | Nenhum mantém **banco**. Núcleo roda 1x e para. Os hooks do Sage morrem dentro do `teoria.md` de cada post — não são reaproveitados. O EDI é orientado a página de vendas e anúncio, não a conteúdo orgânico. **Nenhum squad cruza dor × situação × pensamento × comportamento × custo × desejo × objeção × mecanismo numa matriz explícita** |
| **Precisa integrar com** | `base-editorial.md` + os 5 pilares + `regras-cfn.md` como input; destino `persona-angulos/` |
| **Lacuna real** | **PARCIAL, tendendo a real na parte de banco.** O trabalho intelectual está coberto por três agentes diferentes; o que não existe é o artefato cumulativo que os junta. Artefato + processo, não agente |

## 4. Pesquisa de formatos de alta retenção e viralidade

| Campo | Leitura |
|---|---|
| **Recurso existente** | `iris-pesquisador` task `pesquisar-formatos.md` (biblioteca embarcada + garimpo IG/TikTok/YT); `sage-teorico` (engenharia reversa de virais); `operador-higgsfield` (`/squad-iavideos-arcane`) com **Virality Predictor**; `teo-criativo` (`/squad-anuncios-arcane`) modo Freestyle sobre vencedores de 30+ dias |
| **Capacidade real** | Iris seleciona **1-3 formatos** para focar. Sage desmonta virais de referência. Virality Predictor pontua peça gerada antes de publicar |
| **Como é acionado** | `/squad-conteudo-arcane` (Iris/Sage — dependência zero); `/squad-iavideos-arcane`; `/squad-anuncios-arcane` |
| **Limitações** | O garimpo do Iris é **assistido**: sem API, depende de busca web e do que a Mônica trouxer. Virality Predictor exige **Higgsfield pago**. Teo exige Airtable + Apify. Nenhum deles mantém biblioteca de formatos com **desempenho medido no perfil da Mônica** — todos olham para fora |
| **Precisa integrar com** | Componente 11 (métricas). Sem dado próprio, formato só se avalia por benchmark alheio |
| **Lacuna real** | **PARCIAL.** Pesquisa externa coberta. Falta a biblioteca própria, que só nasce depois de haver métrica |

## 5. Criação de séries

| Campo | Leitura |
|---|---|
| **Recurso existente** | `/squad-conteudo-arcane` workflow `produzir-batch.md`. Material já produzido: `calendario-4-semanas.md`, `calendario-editorial.md`, `rotina-semanal.md` |
| **Capacidade real** | Produz **N posts numa mesma rodada**, reaproveitando pesquisa e tom |
| **Como é acionado** | `/squad-conteudo-arcane` → workflow `produzir-batch` |
| **Limitações** | Batch é **lote paralelo**, não arco. Nenhuma task modela dependência entre peças (parte 1 prepara parte 2), continuidade, gancho de próxima ou ordem obrigatória de publicação. O calendário existente organiza **datas**, não **narrativa** |
| **Precisa integrar com** | Banco de ângulos (comp. 3) como fonte dos arcos; `series/` como destino |
| **Lacuna real** | **REAL, mas fina.** É um documento de série + um workflow em cima do squad-conteudo existente. **Não justifica squad novo** |

## 6. Roteiro / copy

| Campo | Leitura |
|---|---|
| **Recurso existente** | `rico-roteirista` + `sage-teorico` + task `capturar-tom.md` → `perfil-tom-de-voz.md` (1x, reuso eterno). Workflow `produzir-post` |
| **Capacidade real** | **Funciona e está comprovado**: 20 conteúdos escritos entre 21/07 e 28/08. Estrutura hook + intro + conteúdo notável + CTA + posicionamento, com loop iterativo até aprovação. `dependencies.required: []` — o único squad do pack com dependência zero |
| **Como é acionado** | `/squad-conteudo-arcane` → `produzir-post` |
| **Limitações** | Duas de **configuração**, não de capacidade: (a) o `output_layout` do squad grava em `docs/producao-conteudo/{expert-slug}/`, mas esta frente decidiu que roteiro novo mora em `sistema-editorial/roteiros/` — divergência a resolver antes da Fase 4; (b) **o Rico não conhece `regras-cfn.md` nem o glossário vigente** — nada no squad injeta a régua nem bloqueia linguagem legada |
| **Precisa integrar com** | Componente 8 (gate CFN) e a fonte de verdade do negócio |
| **Lacuna real** | **Nenhuma de capacidade.** Lacuna de configuração — resolvida por rule + ajuste de path |

## 7. Carrossel / visual

| Campo | Leitura |
|---|---|
| **Recurso existente** | `mack-produtor` task `gerar-laminas-carrossel.md` (texto + sugestão visual + prompt por slide) → `/squad-carrossel-arcane` v1.2.0, 4 agents |
| **Capacidade real** | Renderiza **PNG 1080x1350 de verdade** (Chromium headless via `tools/build-carousel.mjs`). Duas camadas: arte em HTML+CSS sem custo de API, e imagem gerada por IA opcional |
| **Como é acionado** | `/squad-conteudo-arcane` → Mack (lâminas) → `/squad-carrossel-arcane` → identity-designer (setup 1x) → producer |
| **Limitações** | Exige **Chromium/Chrome**. Imagem por IA é paga (gpt-image-2 US$ 0,04-0,20/imagem; Gemini tem free tier). Output vai pra `~/Downloads/`, fora do repo. Convenção crítica: `card{N}` = bloco {N} da copy. **`~/.carrossel-arcane/` não existe na máquina — o setup do identity-designer nunca foi feito**, então hoje não há template salvo |
| **Precisa integrar com** | Setup inicial (1x) do identity-designer antes do primeiro carrossel |
| **Lacuna real** | **Nenhuma de capacidade — lacuna de ativação.** O squad nunca rodou aqui. Nota de trabalho: na direção de carrossel, orientar **hierarquia da informação**, não paleta/tipografia/layout |

## 8. Revisão CFN

| Campo | Leitura |
|---|---|
| **Recurso existente** | `docs/knowledge/regras-cfn.md` — 104 linhas, documento **normativo**: identificação correta, nome do inimigo ("o estado de alerta"), proibições absolutas (nunca prometer emagrecimento; termos banidos; sem antes e depois; sem travessão), regra da palavra "blindagem", tratamento de GLP-1 |
| **Capacidade real** | A régua está escrita e é boa. **Nenhum agente a aplica automaticamente** |
| **Como é acionado** | Hoje: leitura humana, ad-hoc. Nenhum squad carrega o arquivo |
| **Limitações** | Não existe gate. Um roteiro pode sair do Rico com termo banido e ninguém barra. O `mack-produtor`, o `lt-copywriter` e o `teo-criativo` também produzem copy sem passar pela régua |
| **Precisa integrar com** | Todo agente que produza texto público |
| **Lacuna real** | **REAL — e é a mais barata de fechar.** Resolve-se com **uma rule** em `.claude/rules/` (ou em `custom-do-aluno.md`, que sobrevive a updates) obrigando qualquer agente que entregue copy a validar contra `regras-cfn.md` antes de entregar. Custo: 1 arquivo. **Não é squad** |

## 9. Revisão Meta

| Campo | Leitura |
|---|---|
| **Recurso existente** | `/trafegoArcane` v2.6.0 (5 agents) — compliance regulatório BR com `regional_regulation_identities`, `validate_only` antes de criar, bloqueio de ativação até o readback confirmar. Secundários: `creative-prep-operator`, `lt-traffic-ops`, `/squad-anuncios-arcane` |
| **Capacidade real** | Forte e específica — mas para **mídia paga**: estrutura de campanha, compliance, upload de criativo, kill rules |
| **Como é acionado** | `/trafegoArcane` |
| **Limitações** | Exige System User token com **6 escopos**, Graph API **v26.0**, e **anunciante e pagador verificados na Meta** — verificação manual, com documento, do lado da Meta, e o maior lead time do pack. O tráfego pago da Mônica hoje é operado por **equipe externa**, não por este sistema |
| **Precisa integrar com** | Nada nesta frente |
| **Lacuna real** | **Nenhuma — componente fora de escopo do Sistema Editorial hoje.** Volta quando houver mídia paga operada aqui. Observação útil: as proibições da régua CFN (promessa de emagrecimento, antes e depois de corpo, vergonha corporal) são exatamente o que mais reprova anúncio de saúde na Meta — **fechar o componente 8 já protege boa parte do 9** |

## 10. Produção e edição de vídeo

| Campo | Leitura |
|---|---|
| **Recurso existente** | `/squad-edicao-arcane` v1.1.1 — **7 agents, 6 quality gates**. Gravação orientada por `mack-produtor` (`direcao-reels.md`). Alternativas sem gravar: heygen (pago) e iavideos (pago) |
| **Capacidade real** | Entra `.mp4`/`.mov` bruto talking-head, sai `_final.mp4` **1080x1920, h264 profile Main, yuv420p, AAC 192k, faststart**. Esteira: corte por fala (Silero VAD) → 1.2x mantendo pitch → transcrição whisper medium → revisão de português pelo Opus → zoom dinâmico no rosto (OpenCV) → legenda queimada → trilha com ducking. **Custo R$ 0 e 100% offline** depois de instalado |
| **Como é acionado** | `/squad-edicao-arcane`, ou fala livre: *"edita esse vídeo: `<path>`"* |
| **Limitações** | Fora de escopo por design: color grade, master de áudio broadcast, b-roll, multicâmera. Veto se o bruto tiver menos de 30s. Estilo `monica-elegante` calibrado para **fundo claro** — em ambiente escuro o marrom `#2E241C` some. Divergência de convenção: o workflow documenta saída em `videos-editados/{basename}/`, mas a prática validada usou `midia/saida/` flat |
| **Estado do ambiente (verificado em 05/09)** | `doctor.py`: **25/25 OK, 0 avisos**. ffmpeg 9.0.1 full (Gyan/winget) com `drawtext` e `sidechaincompress`, whisper-cli, modelo `ggml-medium.bin` (1,4 GB) íntegro, venv com torch/silero-vad/cv2/scipy/numpy/pyyaml, 3 fontes, 7 scripts, trilha default |
| **Lacuna real** | **Nenhuma técnica.** A lacuna é de **prova**: validado em teste01/teste02, nunca em Reel publicado. É exatamente o que o Objetivo B desta sessão resolve |

## 11. Captura de métricas

| Campo | Leitura |
|---|---|
| **Recurso existente** | `aria-analista` (tasks `analisar-post.md`, `analisar-batch.md`, `ler-apify.md`); `analista-dados` (`/squadLPagoArcane`); `lt-diagnostician`; `trafego-arcane` (só mídia paga) |
| **Capacidade real** | A Aria **interpreta** métrica muito bem: 3 métricas-chave do Método Audience, leitura qualitativa, decisão de escalar formato vs. assunto |
| **Como é acionado** | `/squad-conteudo-arcane` → workflow `analisar-performance` |
| **Limitações** | A entrada declarada é *"print, verbalizado ou JSON do Apify"* — ou seja, **a coleta é humana**. Nenhum agente instalado lê o Instagram Insights. O único caminho automatizado é **Apify** (`apify/instagram-scraper`), que cobra por créditos, tem free tier, exige token e MCP — **não configurado hoje** |
| **Precisa integrar com** | O projeto Validação Confiança Blindada, onde este blocker já está registrado |
| **Lacuna real** | **REAL e CRÍTICA — confirmada, não mais hipótese.** Bloqueia o componente 12. **Mas a solução mais curta não é squad novo:** é (a) um arquivo de captura manual com cadência semanal em `metricas/`, e (b) opcionalmente Apify via MCP depois. Criar agente antes de existir o hábito de coletar seria criar um agente sem input |

## 12. Aprendizado e retroalimentação

| Campo | Leitura |
|---|---|
| **Recurso existente** | `aria-analista` task `analisar-batch.md` (`Entrada: "N posts (>=3 ideal) com metricas"` / `Saida: "relatorio.md com comparativo + padroes identificados + recomendacoes"`) |
| **Capacidade real** | O motor analítico **existe**: compara N posts, identifica padrões, separa efeito de formato do efeito de assunto, sugere reaproveitamento |
| **Como é acionado** | `/squad-conteudo-arcane` → `analisar-batch` |
| **Limitações** | Duas: (a) **falta o dado** — depende inteiramente do componente 11; (b) a Aria *"NÃO dispara ação — expert decide"*, e os relatórios ficam em `analises/{data}/`, episódicos, sem consolidar num documento de aprendizado que alimente a próxima rodada de pesquisa |
| **Precisa integrar com** | Componente 11 (dado) e componente 1 (o aprendizado tem que voltar para a pesquisa — é isso que fecha o ciclo) |
| **Lacuna real** | **Dependente do 11.** A pasta `aprendizados/` já existe vazia esperando. Nenhum agente novo se justifica: falta o insumo e o hábito de consolidar |

---

## Mapa resumido

| # | Componente | Recurso principal | Veredito |
|---|---|---|---|
| 1 | Pesquisa contínua | iris-pesquisador · vera-pesquisa | Parcial — falta cadência e persistência |
| 2 | Banco de linguagem | aria-analista (analisar-comentarios) | Parcial — falta banco cumulativo |
| 3 | Persona e ângulos | nucleo-strategist · lt-copywriter (EDI) · sage-teorico | Parcial — falta matriz persistente |
| 4 | Formatos de retenção | iris-pesquisador · sage-teorico · Virality Predictor | Parcial — falta biblioteca própria (depende de 11) |
| 5 | Séries | squad-conteudo (produzir-batch) | Lacuna fina — batch ≠ arco |
| 6 | Roteiro / copy | rico-roteirista · sage-teorico | **Coberto** — ajustar path e injetar CFN |
| 7 | Carrossel / visual | mack-produtor → squad-carrossel-arcane | **Coberto** — nunca ativado (setup 1x pendente) |
| 8 | Revisão CFN | regras-cfn.md (sem executor) | **Lacuna real** — resolve com 1 rule |
| 9 | Revisão Meta | trafego-arcane v2.6.0 | Coberto — fora de escopo hoje |
| 10 | Produção e edição de vídeo | squad-edicao-arcane (doctor 25/25) | **Coberto** — falta prova em Reel publicado |
| 11 | Captura de métricas | ninguém captura | **Lacuna crítica** — resolve com processo, não agente |
| 12 | Aprendizado | aria-analista (analisar-batch) | Bloqueado pelo 11 |

## As lacunas reais, em ordem de custo

| Lacuna | O que fecha | Custo | Cria agente? |
|---|---|---|---|
| Gate CFN (comp. 8) | 1 rule em `.claude/rules/` obrigando validação contra `regras-cfn.md` | Muito baixo | Não |
| Captura de métricas (comp. 11) | Arquivo de captura + cadência semanal no weekly review; Apify depois, se valer | Baixo | Não |
| Persistência de ângulos e linguagem (comp. 2 e 3) | 2 arquivos-banco com regra de append em `persona-angulos/` | Baixo | Não |
| Cadência de pesquisa (comp. 1) | SOP + gatilho no weekly review + destino em `pesquisa/` | Baixo | Não |
| Lógica de série (comp. 5) | Documento de série em `series/` + workflow sobre o produzir-batch | Médio | Não — adapta o squad-conteudo |
| Divergência de path do squad-conteudo (comp. 6) | Decidir onde o roteiro novo grava antes da Fase 4 | Baixo | Não |
| Setup do carrossel (comp. 7) | Rodar o identity-designer uma vez | Baixo | Não |
| Prova do fluxo de edição (comp. 10) | 1 Reel piloto ponta a ponta | Baixo | Não |

**Nenhuma lacuna comprovada nesta varredura autoriza criar squad novo.**

## Achados que exigem ação fora deste diagnóstico

1. ~~`agents/squad-edicao-arcane/data/nomes-proprios.yaml` contém `"Blindagem Antirreganho"`~~
   **RESOLVIDO em 05/09** por decisão da Mônica: o termo foi **removido** do dicionário. Era
   linguagem legada e proibida pela régua CFN, e alimentava o `--prompt` do whisper — que tentaria
   encaixá-la na fala de **qualquer** vídeo editado, com risco de aparecer em legenda queimada.
   (`Ozempic`/`Mounjaro` ficam no dicionário de propósito — o whisper precisa acertar o que ela
   fala; a troca por termo genérico é decisão editorial de revisão, antes de publicar.)
2. **`INVENTARIO-SQUADS.md` seção 3 está obsoleta** (afirma que o squad de edição não existe).
   Não corrigir agora — entra na auditoria geral do repositório, que está decidida mas suspensa.
3. **Contagem de squads** ("9") desatualizada em `contexto-dinamico.md`, `cockpit.md` e no
   histórico do tracker. São 10 squads Arcane.
