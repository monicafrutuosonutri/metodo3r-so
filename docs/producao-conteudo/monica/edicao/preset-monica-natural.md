# Preset MÔNICA NATURAL — direção de edição de vídeo

> Registrado em 07/09/2026, a partir do feedback da Mônica sobre a V1 do piloto
> `2026-09-07-piloto-e-pra-mim`.
>
> Este documento é a **fonte da verdade** da direção de edição. Ele vive em `docs/`
> (runtime do expert), fora do Pack Arcane, justamente para sobreviver a qualquer
> atualização do squad de edição.
>
> A regra executável que faz os agentes obedecerem está em
> `.claude/rules/custom-do-aluno.md`, seção "Preset de edição — MÔNICA NATURAL".

## Princípio

**A edição deve parecer uma conversa boa e bem cuidada, não um vídeo acelerado por
algoritmo.**

Prioridade absoluta, nesta ordem: clareza, presença, confiança, acolhimento.

O que a edição existe para fazer é tirar o atrito do caminho, não performar energia.
Ritmo humano. Se uma escolha de edição só se justifica por "prende mais atenção",
ela não passa.

## Defaults

| Dimensão | Default | Observação |
|---|---|---|
| Velocidade da fala | **1.0x** | Nunca acelerar automaticamente |
| Cortes | naturais | Micro-respiros preservados |
| Zoom | **nenhum** | Sem classificação automática, sem punch-in |
| Trilha sonora | **OFF** | Voz original é o áudio principal |
| Legenda | elegante | `monica-elegante` (fundo claro) / `monica-elegante-escuro` (fundo escuro) |
| Efeitos decorativos | nenhum | |
| B-roll automático | nenhum | |
| Tela dividida | nenhuma | |
| Elementos de reação | nenhum | |

## 1. Cortes — aprovados como estão

Os cortes da V1 foram aprovados e o comportamento atual do cutter é o correto.

- **Não** deixar o cutter mais agressivo
- **Não** aumentar o número de jumpcuts
- Preservar respirações naturais e pequenas pausas que fazem parte da fala humana
- Remover **somente**: silêncio morto, erros, recomeços e pausas claramente excessivas

Parâmetros validados: `threshold=0.6`, `min_silence=80ms`, `pad=30ms`.

Nota sobre o quality gate: o QG-SEA-002 do Pack espera redução de 30-70% e alerta
abaixo disso. Na fala da Mônica a redução fica perto de 19% porque ela fala com pouca
pausa morta. **Esse alerta é esperado e não deve motivar corte mais agressivo.**

## 2. Velocidade — 1.0x sempre

A aceleração 1.2x está **reprovada** para todo conteúdo da Mônica.

- Voz e vídeo em 1.0x
- Nunca acelerar automaticamente
- Preservar cadência natural, intenção, respiração e acolhimento

Consequência prática no pipeline: o step de speed-up é **pulado**. Como não há
reescala, os timestamps do transcript batem 1:1 com o vídeo, e as flags `--speed`
dos scripts de legenda e zoom **não devem ser passadas** (o default 1.0 é o correto).

## 3. Zoom — exceção, nunca regra

O zoom automático da V1 está **reprovado**. Foram 21 seções, com variação excessiva de
enquadramento: a edição ficou inquieta e o rosto foi aproximado demais em vários momentos.

**Baseline (padrão):** zero zoom. Enquadramento original estático durante todo o vídeo.
Não executar a classificação automática normal/emphasis/critical.

**Quando o zoom for autorizado**, em trabalhos futuros:

- No máximo **1 a 3 momentos** em um Reel inteiro
- Somente quando houver **razão editorial clara**
- Intensidade **muito sutil**
- Nunca transformar a câmera em movimento constante
- Nunca usar zoom para fabricar dramaticidade

Regra de bolso: se o zoom precisa ser explicado, ele não deveria estar ali.

## 4. Trilha sonora — OFF por padrão

A trilha automática está **reprovada**.

- **Não** adicionar música automaticamente
- Voz original é o áudio principal
- Música só entra quando a Mônica pedir **explicitamente**

Não resolver com volume mais baixo: o default é **ausência de trilha**, não trilha discreta.

## 5. Legenda

Mantida como está. Não mexer em fonte, estilo ou legibilidade sem pedido explícito.

| Cenário | Estilo |
|---|---|
| Roupa/fundo **claro** | `monica-elegante` (Constantia Bold marrom `#2E241C`) |
| Roupa/fundo **escuro** | `monica-elegante-escuro` (Constantia Bold off-white `#F5EFE6`) |

Como escolher: antes de queimar, extrair frames e olhar a faixa entre 75% e 93% da
altura (onde a legenda cai, `y_pos: 0.80`). Fundo claro ali → estilo normal. Fundo
escuro → variante escura.

O `monica-elegante-escuro.yaml` nasceu no piloto de 07/09 porque a Mônica gravou de
moletom verde escuro e o marrom sumiria. Há uma **cópia de segurança do arquivo nesta
mesma pasta** (`monica-elegante-escuro.yaml`), porque o original vive dentro do Pack
Arcane e pode ser perdido num update.

## Pipeline resultante

Com este preset, o pipeline do squad fica:

```
bruto
  → @cutter      (speech-cut, defaults atuais)
  → @scribe      (transcrever + revisar com o dicionário; SEM speed-up)
  → [@zoomer PULADO]
  → @finisher    (legenda com --style correto, SEM --speed; SEM add-music)
  → final
```

Steps do workflow do Pack que **não rodam** neste preset: 3c (speed-up), 4 (zoom
inteiro) e 5b (trilha).

## Como gerar uma versão natural a partir de um vídeo já cortado

Se o `_speechcut.mp4` já existe e foi aprovado, não precisa recomeçar do bruto:

```bash
agents/squad-edicao-arcane/.venv/Scripts/python.exe \
  agents/squad-edicao-arcane/scripts/video-captions.py \
  midia/saida/<nome>_speechcut.mp4 \
  midia/saida/<nome>_transcript_revisado.txt \
  midia/saida/<nome>_v2-natural.mp4 \
  --style monica-elegante-escuro
```

Sem `--speed`. O resultado já é o arquivo final: voz original, enquadramento estático,
sem trilha.

## Como verificar que um arquivo respeita o preset

| Afirmação | Como provar |
|---|---|
| 1.0x | duração do final == duração do `_speechcut` |
| Zero zoom | PSNR do final contra o `_speechcut` acima de ~45 dB (com zoom cai para 15-25 dB) |
| Zero trilha | `mean_volume` do final == `mean_volume` do `_speechcut` (diferença só de re-encode) |
| Legenda legível | extrair frames na faixa `y_pos` e olhar |

## Histórico

- **07/09/2026** — Preset criado. V1 do piloto `e-pra-mim` (1.2x, 21 seções de zoom,
  trilha default) reprovada na direção criativa; edição técnica aprovada. V2 gerada em
  `midia/saida/2026-09-07-piloto-e-pra-mim_v2-natural.mp4` a partir do `_speechcut` da V1.
