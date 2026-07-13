# LP Confiança Blindada · Spec de Montagem (14 blocos)

> **Para:** quem for codar a página (equipe externa)
> **Copy-fonte:** `copy-14-blocos.md` (v3, aprovada sob CFN). O texto vem de lá, sem alterar.
> **Autor da spec:** Cole (lt-page-master · Squad Low Ticket Arcane)
> **Data:** 12/07/2026
> **Escopo:** estrutura, hierarquia da informação, escaneabilidade e comportamento mobile.
> **Fora de escopo (decisão da Mônica):** paleta de cores, tipografia e layout estético. Isso segue a identidade visual da marca. Aqui só se define *onde* quebrar contraste e *o que* vira lista/comparação, não *qual* cor ou fonte.

---

## PRINCÍPIOS GERAIS (valem pra página toda)

1. **Mobile-first.** A maioria entra pelo celular. Tudo é pensado em 1 coluna primeiro; desktop é a adaptação.
2. **Escaneável.** A mulher entende a página só pelos títulos, sem ler os parágrafos. Título é protagonista de cada bloco.
3. **Fronteira entre blocos.** Todo bloco tem uma borda visual clara (quebra de contraste de fundo, ou faixa, ou caixa). O olho tem que saber onde um bloco termina e outro começa. Nunca tudo no mesmo fundo do topo ao rodapé.
4. **Ritmo dor/alívio por contraste.** Bloco de dor (03) em fundo mais fechado/escuro; bloco de alívio e benefício (04, 05) em fundo mais aberto/claro. É contraste relativo, não cor específica.
5. **Frases curtas.** Nada de parágrafo longo, exceto o bloco 10 (Conversa Séria), que é o único com texto corrido.
6. **Um só destino de clique: o checkout.** Sem WhatsApp flutuante, sem links pra Instagram/YouTube, sem menu de fuga. O único botão da página é o de compra.
7. **CTA só a partir do Bloco 09.** Nada de botão antes disso.
8. **Assets reais, não ícones genéricos.** Onde entra produto, entra mockup real (capa do PDF, telas do app). Ícone decorativo não vende e não informa.

---

## MAPA DE CONTRASTE (visão rápida da alternância)

| Bloco | Zona | Fundo (relativo) |
|-------|------|------------------|
| 01 Hero | abertura | base/neutro |
| 03 Dor | dor | fechado/escuro (o "fundo do poço") |
| 04 Transição | ponte | abre, clareia (alívio) |
| 05 Benefícios | céu | claro (contraste direto com 03) |
| 06 Entregáveis | prova de entrega | quebra vs 05 |
| 07 Pra quem serve | filtro | neutro |
| 08 Ancoragem | pré-preço | destaque suave, cola no 09 |
| 09 Preço + CTA | decisão | contraste FORTE (bloco "acende") |
| 10 Conversa séria | peso | sóbrio |
| 11 Autoridade | confiança | quebra vs 10 |
| 12 CTA 2 | decisão | espelha o 09 |
| 13 FAQ | objeções | neutro |
| 14 Rodapé | legal | fechado/sóbrio |

(Bloco 02 removido.)

---

# SPEC POR BLOCO

## BLOCO 01 · HERO (Vender Sozinho)
- **Função:** a mulher entende a página só por aqui. Sem botão.
- **Composição:** título-pergunta grande no topo, subtítulo menor logo abaixo, depois os 3 sintomas em lista, e a frase de fecho ("O Confiança Blindada existe pra te tirar disso") destacada.
- **Hierarquia (ponto quente):** o título-pergunta. Nada compete com ele acima da dobra.
- **Os 3 sintomas:** viram lista com marcador (não parágrafo).
- **Mobile:** título ocupa a primeira dobra sozinho; o resto vem no scroll.
- **Assets:** imagem que representa o estado da persona (vigilância/alerta no cotidiano), vertical, sem foto de "antes e depois" de corpo. Sem foto da Mônica aqui.
- **CTA:** nenhum.

## BLOCO 02 · DEPOIMENTOS
- **REMOVIDO.** Não montar. Deixar o espaço previsto no fluxo pra reativar depois (entre hero e dor) quando houver relato real de compradora.

## BLOCO 03 · DOR LATENTE (6 ruminações)
- **Função:** identificação. "É isso que passa na minha cabeça."
- **Fundo:** quebra de contraste forte vs bloco anterior. É o bloco mais fechado da página.
- **Layout:** 6 cards, um por ruminação, empilhados. Cada frase como balão/citação.
- **Hierarquia:** a frase é a protagonista. Sem ícone competindo com o texto.
- **Ritmo:** espaço/respiro entre os cards. Nada de rajada colada.
- **Mobile:** 1 coluna, cards na vertical.
- **CTA:** nenhum.

## BLOCO 04 · TRANSIÇÃO (Dor → Solução)
- **Função:** a virada. Alivia e aponta a saída.
- **Fundo:** clareia em relação ao 03 (sai do escuro pro alívio).
- **Composição:** frase-tese em destaque grande ("Não é você. Não faltou disciplina, faltou repertório."), texto de ponte curto, e DUAS caixas de destaque:
  - Caixa 1 (âncora da página): "A blindagem aqui é da sua confiança. Não é promessa de que você nunca mais vai engordar." Tem que sobressair visualmente.
  - Caixa 2 (disclaimer): o texto do GLP-1, menor, logo abaixo, mas legível.
- **Hierarquia:** frase-tese primeiro, caixa da blindagem segundo.
- **Mobile:** caixas em largura cheia, empilhadas.
- **CTA:** nenhum.

## BLOCO 05 · BENEFÍCIOS (Agora você vai)
- **Função:** o "céu". Espelho das 6 ruminações, mesma ordem.
- **Fundo:** claro. Contraste direto com o 03 (dor escura → benefício claro).
- **Layout:** 6 itens, título de cada em destaque + complemento em linha fina. Idealmente na MESMA ordem e contagem do bloco 03, pra o olho ligar dor↔alívio sem precisar de foto de corpo.
- **Hierarquia:** os títulos em negrito conduzem; a leitura funciona só por eles.
- **Disclaimer:** a linha "Decisão sobre medicação é sempre com o seu médico" aparece discreta ao fim do bloco.
- **Mobile:** 1 coluna. No desktop pode ir a 2 colunas, mantendo a ordem de leitura.
- **CTA:** nenhum.

## BLOCO 06 · TUDO QUE VOCÊ RECEBE
- **Função:** materializar a entrega.
- **Fundo:** quebra vs 05.
- **Layout:** Guia Prático em destaque no topo; as 4 ferramentas em grid de 4 cards abaixo. Cada card = mockup + título + 1 linha.
- **Assets:** mockup real da capa do PDF + 4 telas reais do app (uma por ferramenta). Não usar ícone genérico.
- **Espaço de bônus:** deixar a seção prevista e comentada no código, pronta pra receber extras depois. Não renderizar nada de bônus agora, e nunca usar a palavra "bônus" visível nem valor riscado.
- **Mobile:** cards em 1 coluna (ou 2 se legível).
- **CTA:** nenhum.

## BLOCO 07 · PRA QUEM SERVE
- **Função:** auto-seleção.
- **Fundo:** neutro.
- **Layout:** lista de qualificação com marcador. O "Não serve" numa caixa separada, contraste diferente, pra filtrar quem não é o público.
- **Hierarquia:** título + os itens escaneáveis.
- **Mobile:** 1 coluna; caixa "Não serve" logo após a lista.
- **CTA:** nenhum.

## BLOCO 08 · ANCORAGEM
- **Função:** somar valor antes do preço aparecer.
- **Fundo:** destaque suave; este bloco cola diretamente no 09.
- **Layout:**
  - Parte 1 (espinha): checklist visual com os 5 itens juntos (Guia + 4 ferramentas), pra valor acumular no olho.
  - Parte 2 (âncora): caixa de destaque com a frase da consulta ("Por menos do que você pagaria por uma única consulta.").
- **Proibido reintroduzir:** De/Por, preço riscado, tabela de valores, número inventado, âncora contra o que ela gastou em dieta.
- **Mobile:** checklist em 1 coluna, caixa da âncora logo abaixo, emendando no preço.
- **CTA:** nenhum (o preço vem no 09).

## BLOCO 09 · PREÇO + 1º CTA
- **Função:** a oferta. Primeiro botão da página.
- **Fundo:** contraste FORTE. Este bloco tem que "acender" na página.
- **Layout:** preço grande e limpo (R$ 67 à vista), 2 bullets de segurança abaixo (acesso imediato / 7 dias de garantia), botão grande.
- **Botão:** largura cheia no mobile, alto contraste, sem animação. Texto exato: **QUERO RECONSTRUIR MINHA CONFIANÇA**. (A cor do botão segue a identidade da marca; só garantir contraste alto com o fundo.)
- **Proibido reintroduzir:** De/Por, contador regressivo, "últimas vagas", qualquer escassez.
- **Mobile:** preço + botão dentro de uma dobra, sem precisar rolar pra achar o botão.

## BLOCO 10 · CONVERSA SÉRIA
- **Função:** cartada final. Firmeza, sem pressão. Único bloco com texto mais corrido.
- **Fundo:** sóbrio.
- **Layout:** comparação lado a lado (2 colunas: "Continuar como está" x "Começar a reconstruir"), depois o texto de fecho curto e a frase final ("A escolha é sua. E ela começa aqui.").
- **Mobile:** a tabela de 2 colunas empilha, mas mantendo o par visível (linha a linha: item da esquerda seguido do item da direita).
- **Proibido reintroduzir:** "corre", "acaba hoje", escassez.
- **CTA:** nenhum aqui (o próximo botão é o Bloco 12).

## BLOCO 11 · AUTORIDADE
- **Função:** por que confiar. Terceira pessoa, observadora profissional.
- **Fundo:** quebra vs 10.
- **Layout:** foto profissional da Mônica (humana, não "antes e depois") + texto em blocos curtos ao lado/abaixo.
- **Hierarquia:** título + a constatação clínica. Nada de "massagem de ego".
- **Mobile:** foto no topo, texto abaixo.
- **CTA:** nenhum.

## BLOCO 12 · 2º CTA
- **Função:** repetir a oferta pra quem chegou decidida.
- **Fundo:** espelha o 09 (mesmo tratamento de destaque).
- **Layout:** título curto ("Pronta pra começar?"), preço + 2 bullets, botão.
- **Botão:** MESMO texto do 1º (QUERO RECONSTRUIR MINHA CONFIANÇA). Não variar.
- **Mobile:** igual ao 09.

## BLOCO 13 · FAQ (Perguntas dos desconfiados)
- **Função:** derrubar objeções.
- **Fundo:** neutro.
- **Layout:** accordion (pergunta clicável, resposta abre). 6 perguntas, na ordem da copy.
- **Mobile:** accordion é essencial aqui pra não virar parede de texto.
- **CTA:** nenhum.

## BLOCO 14 · RODAPÉ
- **Função:** fechamento legal + confiança institucional.
- **Fundo:** fechado/sóbrio, texto menor.
- **Conteúdo (visível, não escondido):** identificação + CRN-3 46207, disclaimers completos (não é tratamento médico / não promete resultado / medicação sempre com o médico), e o e-mail contato@monicafrutuoso.com.br.
- **Sem CNPJ** (não existe). Não inventar, não deixar placeholder.
- **Sem Gmail** e sem disclaimer que prometa resultado.

---

## ASSETS NECESSÁRIOS (consolidado pra produção)

| # | Asset | Bloco | Observação |
|---|-------|-------|------------|
| 1 | Imagem do estado da persona (vigilância/alerta) | 01 | Vertical. Sem corpo/antes-depois. |
| 2 | Mockup da capa do Guia Prático (PDF) | 06, 08 | Real. |
| 3 | 4 telas reais do app (Escala de Fome, Diário Comportamental, Fluxograma de Gatilhos, Timer da Pausa) | 06, 08 | Uma por ferramenta. |
| 4 | Foto profissional da Mônica | 11 | Humana, não "antes e depois". |
| 5 | Link de checkout (Eduzz) | 09, 12 | Destino dos dois botões. |

---

## CHECKLIST DO DEV · O QUE NÃO REINTRODUZIR (trava CFN)

- [ ] Sem botão antes do Bloco 09
- [ ] Sem De/Por, preço riscado ou valor inventado (Bloco 08)
- [ ] Sem contador, "últimas vagas" ou qualquer escassez (Blocos 09, 12)
- [ ] Sem WhatsApp flutuante e sem links de fuga (página toda)
- [ ] Sem depoimento/prova social (Bloco 02 fica removido)
- [ ] Sem CNPJ; usar CRN-3 46207 (Bloco 14)
- [ ] Sem foto de corpo / antes e depois em nenhum bloco
- [ ] Manter a frase da blindagem em destaque (Bloco 04)
- [ ] Manter o disclaimer GLP-1 nos blocos 04, 05, 13 e 14
- [ ] Texto dos dois botões idêntico: QUERO RECONSTRUIR MINHA CONFIANÇA

---

## QA VISUAL FINAL (antes de publicar)

Passar bloco a bloco:
- [ ] Dá pra entender a página só pelos títulos?
- [ ] Todo bloco tem fronteira visual clara com o vizinho?
- [ ] Dor (03) mais fechada, alívio/benefício (04/05) mais aberto?
- [ ] Nenhum elemento competindo com o ponto quente de cada bloco?
- [ ] Botão de compra é o único destino de clique?
- [ ] Tudo legível e clicável no mobile (1 coluna, botão na dobra)?
- [ ] Mockups reais no lugar de ícones?

**Depois de no ar:** medir tempo de carregamento (alvo abaixo de 3s no mobile) e Connect Rate. Se Connect Rate vier baixo (gente clica no anúncio mas não chega na página), o problema costuma ser hospedagem, não copy.

---

*Spec Cole · Squad Low Ticket Arcane · pareia com `copy-14-blocos.md` v3. Estrutura e hierarquia definidas; paleta, tipografia e layout ficam com a identidade visual da Mônica.*
