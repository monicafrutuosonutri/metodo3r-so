# Suas Customizações — Sobrevivem a Updates

> Este arquivo é SEU. O update do Auroq OS (e do Pack Arcane) **nunca** sobrescreve ele.
> Tudo que você quer que valha pra sempre — regras de comportamento, preferências,
> overrides — escreve AQUI, não no CLAUDE.md nem nas outras rules.

## Por que aqui e não no CLAUDE.md?

O `CLAUDE.md` e as outras rules (`agent-authority.md`, `natural-language-first.md`, etc.)
são **framework** — toda atualização do Auroq atualiza elas pra trazer melhorias. Se você
editar uma delas direto, sua mudança é perdida no próximo update.

Este arquivo (`custom-do-aluno.md`) e o `settings.local.json` são os únicos lugares de
config que o update **preserva**. Coloque suas regras aqui.

## Como escrever uma regra

Linguagem natural, direto. O Auroq carrega este arquivo automaticamente junto com as
outras rules. Exemplos:

- "Quando eu pedir pra rodar algo, executa direto sem ficar pedindo confirmação a cada passo."
- "Nunca commita sem eu mandar."
- "Responde sempre em português, casual."

## Suas regras

---

# Preflight Editorial — obrigatório antes de produzir conteúdo público

> Registrado em 06/09/2026. Vale para **todo agente**: Squad de Conteúdo Arcane (Iris, Sage,
> Rico, Mack), Squad de Carrossel, Squad de Anúncios, Low Ticket, e qualquer agente ou skill
> que produza texto que a audiência vai ver.
>
> Esta rule existe para calibrar os squads **sem editar o Pack Arcane**. Nenhum arquivo em
> `agents/` deve ser modificado para aplicar o que está aqui.

## Quando esta regra se aplica

Sempre que o trabalho for produzir conteúdo público da Mônica Frutuoso: roteiro de Reels,
carrossel, legenda, copy de página, roteiro de anúncio, story, e-mail.

Não se aplica a documentação interna, tracker, análise ou conversa de trabalho.

## ANTES de propor tema ou escrever qualquer linha

Ler, nesta ordem:

1. `business/campanhas/sistema-editorial/contexto/briefing-editorial.md` — **a direção editorial vigente**
2. `docs/knowledge/regras-cfn.md` — a régua de conformidade
3. `business/campanhas/sistema-editorial/contexto/fontes-repertorio.md` — o que é repertório e o que não é

E consultar os **conteúdos recentes** antes da escolha dos temas, nunca depois:
`docs/producao-conteudo/monica/posts/` e `business/campanhas/sistema-editorial/roteiros/`.

### Correção de fonte (importante)

O pool de temas vigente é **`docs/producao-conteudo/monica/base-editorial.md`**.

A task `escolher-tema-post.md` do Pack aponta para `base-inicial.md`, que é a base **legada de
junho/2026** e contém linguagem proibida ("Maldição da Vigilância", "Mulher 3R", "Blindagem
Anti-Reganho"). **Ler `base-editorial.md` no lugar dela.** Não editar o Pack, não reescrever a
base legada: ela é registro histórico.

## As regras que valem em toda geração

1. **Posicionamento guarda-chuva:** reconstrução de confiança e autonomia depois do
   emagrecimento. O posicionamento **não se limita ao Estado de Alerta** nem a qualquer pilar
   isolado.
2. **Os cinco pilares são lentes**, não assuntos que se revezam: O Espelho, O Estado de Alerta,
   O Caminho, O Depois, A Perspectiva.
3. **Não reduzir a comunicação** a contar calorias, balança, checar, calcular, medo de comer e
   vigilância. Esses temas seguem válidos, mas são parte do repertório, não o repertório.
4. **Territórios são repertório de possibilidades, não grade.** Nada de rotação mecânica de
   assunto só para variar. A escolha semanal pondera os seis critérios do briefing: força do
   ângulo, especificidade da dor, novidade frente ao recente, coerência com o posicionamento,
   potencial de identificação e retenção, e equilíbrio entre os pilares.
5. **Voz:** concreto, direto, segunda pessoa quando fizer sentido, compreensível na primeira
   escuta, sem metáfora a decifrar, acolhedor sem ficar morno, batendo numa dor específica.
   Operacional em `docs/producao-conteudo/monica/perfil-tom-de-voz.md`.
6. **Anti-repetição:** não repetir situação, hook, conflito nem conclusão, mesmo com tema
   diferente. Isso **não proíbe tema importante**: um território volta legitimamente quando
   traz novo contexto, conflito, mecanismo, situação, insight ou ponto de vista. O que se evita
   é contar a mesma história com outras palavras.
7. **GLP-1:** disclaimer médico dentro do conteúdo, natural e contextual, próximo da menção.
   Não transformar a peça inteira em aviso. Nunca sugerir iniciar, reduzir, trocar, pausar ou
   parar medicação.
8. **Repertório não é conteúdo.** Formação e curso alimentam raciocínio e vocabulário. Não
   copiar material do curso, não transformar aula em post automaticamente, não assumir conteúdo
   proprietário que a Mônica não forneceu. Na dúvida, perguntar.
9. **Veto de posicionamento:** não deslizar para dieta, meal prep, cardápio ou planejamento
   rígido. Organização e meal prep entram como apoio à autonomia, à rotina e à redução de
   atrito, nunca como controle.

## DEPOIS de escrever, ANTES de entregar: gate CFN

`docs/knowledge/regras-cfn.md` é **gate de segurança, não gerador de copy.**

A ordem é inegociável:

1. **Primeiro** produzir comunicação forte, específica e dentro do posicionamento
2. **Depois** rodar os 10 itens do checklist CFN
3. Se reprovar, **corrigir apenas o necessário**

Escrever já defensivo produz texto morno. Corrigir demais transforma conteúdo bom em conteúdo
genérico. A correção é cirúrgica: troca o que viola, preserva a força do resto.

**Nenhum roteiro é considerado pronto sem passar pelo checklist. Isso bloqueia a entrega.**

## O que continua sendo decisão da Mônica

Os quality gates do Pack permanecem dela: ela crava o tema (QG-SCA-002) e ela aprova o roteiro
(QG-SCA-004). O preflight organiza a proposta; não decide no lugar dela.

---

# Preset de edição — MÔNICA NATURAL

> Registrado em 07/09/2026, a partir do feedback da Mônica sobre a V1 do piloto
> `2026-09-07-piloto-e-pra-mim`. Vale para o Squad de Edição Arcane e para qualquer
> agente ou skill que edite vídeo da Mônica.
>
> Esta rule existe para calibrar a edição **sem editar o Pack Arcane**. Nenhum arquivo
> em `agents/squad-edicao-arcane/` deve ser modificado para aplicar o que está aqui.
>
> **Documento completo:** `docs/producao-conteudo/monica/edicao/preset-monica-natural.md`

## Princípio

A edição deve parecer **uma conversa boa e bem cuidada**, não um vídeo acelerado por
algoritmo. Prioridade: clareza, presença, confiança, acolhimento. Ritmo humano.

## Defaults inegociáveis

Ao editar vídeo da Mônica, estes são os defaults. Só mudam com pedido **explícito** dela.

| Dimensão | Default |
|---|---|
| Velocidade | **1.0x** — nunca acelerar automaticamente |
| Zoom | **nenhum** — sem classificação automática, sem punch-in |
| Trilha | **OFF** — voz original é o áudio principal |
| Cortes | naturais, micro-respiros preservados |
| Legenda | `monica-elegante` (fundo claro) / `monica-elegante-escuro` (fundo escuro) |
| Efeitos, b-roll, tela dividida, elementos de reação | nenhum |

## O que isso muda no pipeline do Pack

O workflow `pipeline-edicao.md` do Pack traz 1.2x, zoom e trilha como default. **Aqui
esses três estão desligados.** Os steps 3c (speed-up), 4 (zoom) e 5b (add-music) **não
rodam** para conteúdo da Mônica.

Como não há aceleração, os timestamps do transcript batem 1:1 com o vídeo: **não passar
a flag `--speed`** para `video-captions.py` (o default 1.0 é o correto).

## Cortes — não endurecer

Os cortes atuais foram aprovados. Não deixar o cutter mais agressivo, não aumentar
jumpcuts. Remover somente silêncio morto, erros, recomeços e pausas claramente excessivas.

O QG-SEA-002 alerta quando a redução fica abaixo de 30%. Na fala da Mônica isso é
**esperado** (ela fala com pouca pausa morta) e **não** deve motivar corte mais agressivo.

## Zoom — exceção, nunca regra

Baseline é zero zoom, enquadramento estático. Quando for autorizado: no máximo 1 a 3
momentos no Reel inteiro, com razão editorial clara, intensidade muito sutil. Nunca
câmera em movimento constante. **Nunca zoom para fabricar dramaticidade.**

## Trilha — ausência, não volume baixo

Não adicionar música automaticamente. Música só entra quando a Mônica pedir. Se ela
reprovar a trilha, a correção é **remover**, não abaixar o volume.

## Antes de queimar legenda: checar o fundo

Extrair frames e olhar a faixa entre 75% e 93% da altura (onde a legenda cai). Fundo
claro → `monica-elegante`. Fundo escuro → `monica-elegante-escuro`. O estilo marrom
some sobre roupa escura.

## O que continua sendo decisão da Mônica

A direção criativa é dela. Este preset é a baseline segura, não um teto: qualquer
desvio (zoom, trilha, velocidade) precisa de pedido explícito dela, caso a caso.
