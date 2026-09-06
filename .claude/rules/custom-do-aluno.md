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
