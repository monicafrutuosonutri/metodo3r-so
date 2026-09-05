# midia/ — mídia pesada do sistema

Esta pasta fica **fora do controle de versão** para vídeo, áudio e imagem
(`.gitignore` bloqueia `*.mp4`, `*.mov`, `*.mp3`, `*.wav`, `*.png`, `*.jpg`).
Só este README e os arquivos de texto do pipeline (`.txt`, `.json`) são versionados.

Esta é a convenção **já praticada** nos testes de 26/08 (`teste01`, `teste02`),
registrada aqui pela primeira vez. Nada mudou no funcionamento.

---

## Estrutura

| Pasta | O que vai |
|-------|-----------|
| `entrada/` | **Vídeo bruto**, direto da câmera ou celular. É aqui que a Mônica coloca o arquivo |
| `saida/` | Tudo que o Squad de Edição produz — intermediários, transcrições e o `_final.mp4` |

## Convenção de nome do arquivo bruto

```
AAAA-MM-DD-{slug-curto}.mp4
```

Exemplo: `2026-09-06-piloto-01.mp4`

Regras:

- **Sem acento, sem espaço, sem maiúscula.** No Windows, path com acento ou espaço
  já quebrou o filtergraph do ffmpeg (documentado em
  `agents/squad-edicao-arcane/BRIEF-port-windows-v1.1.md`). A v1.1.0 contorna com
  short-path, mas evitar é mais barato que depender do contorno.
- **Data primeiro** — a pasta se ordena sozinha por gravação.
- **Slug curto**, 2-3 palavras, que lembre o assunto.
- `.mp4` ou `.mov` — os dois funcionam. O pipeline força `yuv420p` na saída, então
  vídeo HEVC 10-bit de iPhone entra sem problema.

O nome do arquivo bruto vira o **prefixo de todos os artefatos** da edição. Um bruto
chamado `2026-09-06-piloto-01.mp4` produz `2026-09-06-piloto-01_final.mp4`, e assim
por diante. Por isso o nome importa: é o que amarra bruto e entrega.

## O que o Squad de Edição gera em `saida/`

| Arquivo | O que é | Manter? |
|---------|---------|---------|
| `{nome}_speechcut.mp4` | corte por fala (Silero VAD) | temporário |
| `{nome}_transcript_raw.txt` | transcrição bruta do whisper | temporário |
| `{nome}_transcript_revisado.txt` | transcrição com português corrigido | **manter** |
| `{nome}_speed.mp4` | acelerado 1.2x | temporário |
| `{nome}_sections.json` | classificação retórica que guia o zoom | **manter** |
| `{nome}_zoomed.mp4` | com zoom dinâmico no rosto | temporário |
| `{nome}_captioned.mp4` | com legenda queimada | temporário |
| `{nome}_final.mp4` | **entrega** — 1080x1920, pronto pra Reels | **manter** |

Os temporários podem ser apagados depois da aprovação. O bruto em `entrada/` fica —
é o único que não dá pra refazer.

## Como rodar

Dentro do Claude Code, na raiz do projeto:

```
/squad-edicao-arcane
```

e passar o caminho do arquivo. Ou direto, em linguagem natural:

> edita esse vídeo: `midia/entrada/2026-09-06-piloto-01.mp4`

Referência do pipeline: `agents/squad-edicao-arcane/workflows/pipeline-edicao.md`.
