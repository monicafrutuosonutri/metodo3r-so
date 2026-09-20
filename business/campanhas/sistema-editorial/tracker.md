# TRACKER — Sistema Editorial

> Execução viva do projeto. Todos os agentes leem e atualizam este arquivo.
> Estrutura da frente: [README](README.md)
> **Regras estratégicas (ler antes de trabalhar):** [contexto/regras-estrategicas.md](contexto/regras-estrategicas.md)
> Cockpit: [cockpit](../../cockpit.md)

**Início:** 05/09/2026
**Deadline:** sem deadline fixo
**Dono geral:** Monica Frutuoso
**Status:** Ativo. Fase 1 concluída em 05/09. Condição 2 do encerramento cumprida em 07/09 (Reel piloto rodou ponta a ponta e gerou o preset MÔNICA NATURAL). **Condição 1 cumprida em 13/09: os 3 conteúdos da M2S04 nasceram dentro do sistema e foram aprovados pela Monica.** As duas condições de encerramento estão cumpridas; falta a Monica decidir pelo fechamento da frente

---

## OBJETIVO

Construir o sistema editorial que produz conteúdo com base em pesquisa e aprendizado real de desempenho — substituindo a produção artesanal semana a semana.

**Meta operacional:** a Monica permanece principalmente no que exige julgamento, credencial
ou presença — **direção estratégica, escolha, aprovação, expertise profissional e gravação**.
Todo o resto é progressivamente delegado ao sistema (as 13 etapas em
[contexto/regras-estrategicas.md](contexto/regras-estrategicas.md)).

**Princípio de construção:** reduzir trabalho manual e aumentar capacidade **antes** de aumentar volume.

**Princípio de arquitetura:** usar primeiro os squads, agents, workers e skills já disponíveis
no Pack Arcane e no Auroq. Criar componente novo **apenas quando houver lacuna comprovada**
(Constitution Art. VI — REUSE > ADAPT > CREATE).

**Fonte de verdade do negócio:** produto comercial **Confiança Blindada**, preço **R$ 67,00**.
Método 3R é estrutura interna, nunca nome comercial. Expert: Mônica Frutuoso, nutricionista
comportamental, CRN-3 46207, 11 anos de atuação.

**Posicionamento guarda-chuva:** Reconstrução de confiança e autonomia depois do emagrecimento: sair da dependência exclusiva de referências externas e desenvolver leitura interna de fome, saciedade, impulso e necessidades do corpo.

**Os 5 pilares editoriais** — O Espelho, O Estado de Alerta, O Caminho, O Depois e A Perspectiva
— são **lentes** para explorar múltiplos territórios e ângulos, não cinco assuntos repetitivos.
O sistema não pode reduzir o posicionamento a nenhuma delas.

Linguagem legada (não usar): "Blindagem Anti-Reganho", "Maldição da Vigilância", "Mulher 3R",
R$ 19,90. Glossário e pilares em [contexto/regras-estrategicas.md](contexto/regras-estrategicas.md).

> **Onde a documentação desta frente mora:** dentro de `business/campanhas/sistema-editorial/`.
> Nada novo desta frente entra em `validacao-metodo-3r/` — aquele path é endereço técnico
> legado do projeto de validação, mantido só por compatibilidade de links.

---

## OS 12 COMPONENTES

| # | Componente | Cobertura provável hoje | Lacuna a investigar |
|---|-----------|------------------------|---------------------|
| 1 | Pesquisa contínua | Nenhum agente dedicado | Provável lacuna real |
| 2 | Banco de ângulos da persona | `squad-posicionamento-arcane` (parcial) | Persistência e crescimento contínuo |
| 3 | Pesquisa de formatos de alta retenção e padrões de viralidade | Nenhum agente dedicado | Provável lacuna real |
| 4 | Criação de séries de conteúdo | `squad-conteudo-arcane` (parcial) | Lógica de série vs. post avulso |
| 5 | Combinação dor · situação · pensamento · comportamento · custo · desejo · objeção · mecanismo | `squad-conteudo-arcane` + `squad-posicionamento-arcane` | Falta a matriz combinatória explícita |
| 6 | Roteiros | `squad-conteudo-arcane` | Funcionando |
| 7 | Carrosséis | `squad-carrossel-arcane` | Funcionando |
| 8 | Revisão CFN | `docs/knowledge/regras-cfn.md` | Régua existe. Falta gate automático no fluxo |
| 9 | Revisão Meta (quando houver mídia paga) | `squad-anuncios-arcane`, `trafego-arcane` | A avaliar |
| 10 | Edição automatizada | `squad-edicao-arcane` | Validado em testes. Falta comprovar em Reel publicado |
| 11 | Captura de métricas | Nenhum agente dedicado | **Lacuna crítica** — bloqueia o componente 12 |
| 12 | Aprendizado contínuo com desempenho real | Não existe | Depende de 11 |

> ⚠️ **Esta tabela era a hipótese de 05/09 e já foi verificada.** O diagnóstico real está em
> [`contexto/cobertura-squads.md`](contexto/cobertura-squads.md) — leia ele, não esta tabela.
>
> **O que o diagnóstico mudou:** são **10** squads Arcane instalados, não 9. Os componentes 1, 2,
> 3 e 4 **têm** recurso existente (Iris, Aria, Núcleo, EDI do low-ticket) — o que falta neles é
> persistência e cadência, não capacidade. O componente 5 (séries) é lacuna fina, não parcial.
> Os componentes 11 (captura de métricas) e 8 (gate CFN) se confirmaram como as lacunas reais.
> **Nenhuma lacuna comprovada autoriza criar squad novo.**

---

## FASES

| # | Fase | Status | Início | Fim |
|---|------|--------|--------|-----|
| 0 | Registro da direção | Done | 05/09/2026 | 05/09/2026 |
| 1 | Diagnóstico de cobertura — o que os squads existentes já resolvem | **Done** | 05/09/2026 | 05/09/2026 |
| 2 | Desenho do fluxo ponta a ponta | Não iniciado | — | — |
| 3 | Construção das lacunas reais | Não iniciado | — | — |
| 4 | Rodagem — próximos roteiros nascem dentro do sistema | Não iniciado | — | — |

**Fase atual:** 2 — Desenho do fluxo ponta a ponta (não iniciada). Fase 1 fechada em 05/09 — ver `contexto/cobertura-squads.md`

---

## SEMANA EM PRODUÇÃO — M3S01

Primeira semana do Mês 3. Semana sem terça de apresentação, três conteúdos.
**Pautas aprovadas pela Mônica em 20/09/2026**, depois da revisão com o GPT.

| Dia | Pauta | Formato | Classificação | Pilar |
|---|---|---|---|---|
| **Segunda 28/09** | C1, a mulher que ficou para trás | Reel | `[OPORTUNIDADE EDITORIAL]` | 1 com fecho 5 |
| **Quarta 30/09** | A fome voltou e o medo chegou junto | Carrossel | `[VALIDADO QUALITATIVAMENTE]` | 3 |
| **Quinta 01/10** | C4, prazer virou suspeito | Reel | `[REPERTÓRIO PROFISSIONAL]` | 5 |

**Restrições de composição atendidas:** no máximo uma oportunidade, pelo menos um validado
qualitativamente, no máximo um repertório ou hipótese.

**Condições que vieram com a aprovação, e valem na teoria e no roteiro:**

- **Segunda.** A fala pública de Thais Carla (F5/Folha, dita no Rock in Rio em 13/09, publicada
  em 14/09) entra como porta de entrada para reflexão sobre identidade e cultura do antes e
  depois. **Não afirmar** que rejeição da identidade anterior é padrão validado da persona.
  Nenhuma especulação sobre método de emagrecimento, saúde, medicação ou vida privada
- **Quarta.** Base validada: fome reaparecendo, medo do que isso pode significar para o futuro,
  medo de que aquilo que ficou mais fácil comece a mudar de novo. **O objeto não é ensinar fome
  e saciedade:** é mostrar como uma experiência presente ganha significado de futuro e gera
  medo. A cena "meia hora depois do almoço" e o pensamento "começou" **estão proibidos**, são
  construção do agente e viraram a hipótese H-06. Cena e linguagem literal só entram com
  registro correspondente no banco de ruminações
- **Quinta.** Educação e perspectiva da Nutrição Comportamental. **Proibidas** as formulações
  que simulem validação de persona: "isso acontece muito com você", "eu vejo isso em toda
  mulher" e equivalentes
- **Toda a semana.** Vale a regra doutrinária de `persona-angulos/contexto-mestre-persona.md`
  §7, inclusive a regra central: autonomia comportamental não é independência de medicamento

**Bloqueio de sequência, decidido em 20/09:** a pauta de quarta está aprovada, mas **teoria e
roteiro dela só são finalizados depois que o banco de ruminações receber material real
suficiente.** A Mônica tem pesquisa de persona feita em Reddit, YouTube e outras fontes numa
frente paralela, e esse material entra no banco antes da roteirização. Segunda e quinta não
dependem disso: a segunda trabalha sobre fala pública verificada e a quinta é repertório
profissional.

**Guardado, não entra nesta semana:** N2 "saudade de quando o esforço aparecia" (hipótese
H-03), C2 GLP-1 no SUS (atualidade e GLP-1 já usados na M2S04), C3 "a casa aprendeu junto"
(hipótese H-02), C5 "o espaço que sobrou" (hipótese H-05), C6 dinheiro e horizonte (território
validado, Reel financeiro recente).

---

## TAREFAS (fase atual)

| Tarefa | Dono | Status | Depende de | Notas |
|--------|------|--------|------------|-------|
| Criar estrutura de pastas da frente | Sistema | **Done — 05/09** | — | 8 áreas com README de função. Regras estratégicas registradas em `contexto/` |
| Ler o inventário funcional do Pack Arcane | Sistema | **Done — 05/09** | — | `INVENTARIO-PACK-COMPLETO.md` válido. `INVENTARIO-SQUADS.md` seção 3 obsoleta (diz que o squad de edição não existe) |
| Mapear cobertura real dos squads contra os 12 componentes | Sistema | **Done — 05/09** | Inventário | Diagnóstico em `contexto/cobertura-squads.md`. São 10 squads Arcane, não 9 |
| Identificar lacunas reais (o que nenhum squad cobre) | Sistema | **Done — 05/09** | Mapeamento | Reais: gate CFN (8) e captura de métricas (11). Fina: lógica de série (5). O resto é persistência/cadência/ativação |
| Decidir: adaptar squad existente ou criar novo | Monica | Não iniciado | Lacunas | Recomendação do diagnóstico: **não criar squad**. Decisão é da Monica |
| Rodar 1 Reel piloto ponta a ponta no Squad de Edição | Monica + Sistema | **Done — 07/09** | Vídeo bruto novo | Piloto "É pra mim?" rodou ponta a ponta, 6 quality gates + CFN 10/10. **Pipeline técnico validado; direção criativa do Pack reprovada pela Monica.** V2 natural aprovada. Condição 2 do critério de encerramento **cumprida** |
| Definir preset de edição próprio da Monica | Monica + Sistema | **Done — 07/09** | Piloto | **MÔNICA NATURAL** — 1.0x, zero zoom, zero trilha, cortes naturais, legenda elegante. Documento em `docs/producao-conteudo/monica/edicao/preset-monica-natural.md` + rule em `custom-do-aluno.md`. Zero arquivo do Pack Arcane alterado |
| Regravar o Reel "É pra mim?" com microfone para publicação real | Monica | Não iniciado | Preset aprovado | Próxima sessão. Editar com o preset MÔNICA NATURAL como default. O piloto de 07/09 foi teste de fluxo, não peça de publicação |
| Decidir sobre "Blindagem Antirreganho" no dicionário do whisper | Monica | **Done — 05/09** | — | Monica decidiu remover. Termo saiu de `squad-edicao-arcane/data/nomes-proprios.yaml` |
| Registrar fontes de repertório profissional | Sistema | **Done — 05/09** | — | Método Sophie e Meal Prep (Martha Guterres) em `contexto/fontes-repertorio.md`, com a regra "repertório ≠ conteúdo" e o veto de posicionamento |
| Calibrar o Squad de Conteúdo para a nova direção editorial | Sistema | **Done — 06/09** | Diagnóstico | Rule de preflight + `contexto/briefing-editorial.md` + `perfil-tom-de-voz.md`. Zero arquivo do Pack Arcane tocado |
| Produzir os 3 conteúdos da semana dentro do sistema calibrado | Monica + Sistema | **Done, 13/09. M2S04 V3 aprovada** | Calibração | Três peças em `docs/producao-conteudo/monica/posts/m2s04-*/`. **Não aprovadas, não commitadas.** Aguardando revisão estratégica da Monica no GPT. Condição 1 do critério de encerramento da frente |
| Revisão estratégica da M2S04 no GPT | Monica | **Done, 13/09** | V1 entregue | Três ângulos aprovados sem troca de pauta. Correções de linguagem, de prescrição e uma correção conceitual aplicadas na V2 |
| Aprovação final da M2S04 | Monica | **Done, 13/09** | V2 entregue | **APROVADA.** Ajustes finais de fala aplicados na V3, gate CFN final rodado, commit e push feitos |
| Gravar os dois Reels da M2S04 | Monica | Não iniciado | M2S04 aprovada | Segunda no carro, quinta em casa. Preset MÔNICA NATURAL na edição |
| Persistir a auditoria de persona no repositório | Sistema | **Done — 20/09** | Auditoria Monica + GPT | Três arquivos em `persona-angulos/`: contexto mestre, banco de ruminações e hipóteses editoriais. Banco nasce vazio, porque nenhuma fala capturada foi transferida |
| Selecionar as pautas da M3S01 | Monica + Sistema | **Done — 20/09** | Preflight e pesquisa | Seis candidatos propostos, reavaliados pela auditoria, três aprovados. Diagnóstico de saturação: o problema era arquitetura narrativa, não tema |
| Abastecer o banco de ruminações | Monica | **Não iniciado, bloqueante** | — | Enquanto estiver vazio, nenhum roteiro usa aspas de audiência nem cena apresentada como observação de campo. Afeta direto o carrossel de quarta |
| Teoria e roteiro das três peças da M3S01 | Sistema | Não iniciado | Aprovação da estrutura | Aguardando aval da Mônica sobre os arquivos criados em 20/09 |

---

## BLOCKERS

| Blocker | Desde | Impacta | Ação necessária |
|---------|-------|---------|-----------------|
| Sem captura de métricas | 05/09/2026 | Componente 12 (aprendizado com desempenho real) fica impossível | Resolver dentro do projeto Validação Confiança Blindada |

---

## CRITÉRIO DE ENCERRAMENTO DESTA FRENTE

Esta frente fecha quando as duas condições forem verdadeiras:

1. Os próximos roteiros estiverem sendo produzidos **dentro** do novo sistema;
2. ~~Pelo menos **um Reel** tiver passado pelo fluxo completo de edição.~~ **Cumprida em 07/09** — piloto "É pra mim?" rodou ponta a ponta e produziu o preset MÔNICA NATURAL.

Ao fechar: salvar contexto, fazer commit e abrir a frente **Distribuição Multicanal**
(hoje na fila do cockpit — **não executar ainda**).

---

## LOG

- 20/09 — @squad-conteudo-arcane + @iris-pesquisador: **Auditoria de persona persistida no repositório e M3S01 selecionada. Nada commitado, roteiros não escritos.** **Diagnóstico de saturação, medido e não opinado:** contei os recursos retóricos na copy pública das últimas nove peças. "Repara" ou "presta atenção" como instrução aparece em 6 de 9. Fecho em distinção binária ("são duas coisas diferentes", "duas perguntas diferentes", "dois tipos de informação diferentes") aparece em 4 de 9 e **nas três peças da M2S04**, ou seja, a semana inteira terminou no mesmo movimento retórico. "De fora parece" em 3 de 9, "a resposta vem de fora" em 3 de 9, "quase ninguém" como abertura em 4 de 9, e o beat da autoculpa em 15 arquivos do acervo. **O esgotamento era de arquitetura narrativa, não de tema:** em 29 conteúdos a protagonista é sempre passiva e introspectiva, nunca houve outra pessoa com agência na cena, consequência para terceiros, passagem de tempo, nem uma peça em que ela esteja melhorando. **Pesquisa da semana, motor de Oportunidade:** duas fontes verificadas por leitura da página, não por resumo de busca. O anúncio do Ministério da Saúde sobre GLP-1 no SUS (Bloomberg Línea, 18/09, atualizada 19/09; anúncio de Padilha em 17/09 em Montes Claros, sem data de incorporação e sem orçamento atualizado) e a fala pública de Thais Carla ao F5 no Rock in Rio (13/09, publicada 14/09). **Registro crítico de conformidade:** a matéria não afirma o método de emagrecimento dela, e a peça de segunda também não afirma. Descartadas com motivo: a proibição da Anvisa à caneta T36 (ângulo de alerta de golpe, fora da lane), a pesquisa Nestlé de 320 entrevistados (sem metodologia divulgada, reprovada pela regra crítica da seção 14.2) e os preços de caneta (imprensa comercial). O levantamento da Vogue Business sobre magreza nas passarelas foi corrigido de atualidade para evergreen cultural, porque é de novembro de 2025. **Motor de Evidência:** o estudo de competência percebida em usuários de GLP-1 teve ficha completa recuperada (McElroy JA e cols., Obesity 2026, 34(9):1759-1771, doi 10.1002/oby.70275, 141 adultos, transversal) e ficou como **repertório interno, nunca manchete**, porque os próprios autores escrevem que o desenho não permite saber se a competência percebida contribui para o resultado ou decorre dele, e porque o estudo não teve poder para análise por sexo, o que elimina qualquer frase sobre "mulheres". O artigo de interocepção e autoestima (Discover Psychology 2026) foi **reprovado**: amostra de 102 pacientes pós-COVID holandeses, hipótese principal falhou (p = 0,13), e os 47% citados vêm de modelo stepwise sem validação. **Correção estrutural trazida pela auditoria da Mônica, e é a mais importante do mês:** anti-repetição não pode ser o único filtro. Antes de perguntar se a pauta é nova, pergunta-se qual é a base para afirmar que aquela experiência pertence à persona. **Território validado não significa mecanismo validado**, e criatividade do agente não é evidência. Quatro classificações passam a ser obrigatórias em toda proposta: VALIDADO QUALITATIVAMENTE, EMERGENTE, OPORTUNIDADE EDITORIAL e REPERTÓRIO PROFISSIONAL. **Nova regra doutrinária:** medo sobre o futuro do peso, da fome, do food noise ou da medicação **pode ser nomeado** como experiência psicológica, mas o conteúdo não confirma que o evento temido vai acontecer, não promete que comportamento alimentar impede, não apresenta autonomia como garantia de manutenção de peso e não sugere que autonomia permite parar medicamento. Regra central registrada: **autonomia comportamental não é independência de medicamento**, e as duas coisas convivem. **Persistência:** três arquivos novos em `persona-angulos/`, que estava vazia desde 05/09. O `banco-ruminacoes.md` **nasce com zero registros de propósito**, porque a auditoria entregou a lista de territórios e não o material bruto; enquanto estiver vazio, nenhum roteiro pode usar aspas atribuídas à audiência. Seis candidatos foram propostos e três aprovados; quatro mecanismos criados pelo agente foram rebaixados a hipótese em `hipoteses-editoriais.md`, incluindo a cena "meia hora depois do almoço", que estava dentro de um território validado mas era invenção. Nenhum arquivo do Pack Arcane tocado.
- 13/09 — @squad-conteudo-arcane: **M2S04 V3 APROVADA pela Monica, commitada e entregue.** Ajustes finais de fala aplicados, sem troca de pauta, sem pesquisa nova e sem mudança de estrutura da semana. **Segunda:** roteiro enxugado para fala natural a 1.0x, saiu a redundancia "a analise funciona, ela funciona muito bem", a afirmacao de que ela ja tem informacao passou a aparecer uma vez so em vez de tres, e a enumeracao do cardapio deixou de usar linguagem dietetica ("mais leve", "frito", "muito molho", "porcao maior") e virou neutra: ingrediente, preparo, tamanho, o que parece mais adequado. **Quarta:** tres ajustes pontuais nas laminas 5, 6 e 7, incluindo a correcao de concordancia "ele" para "ela" em referencia a organizacao. **Quinta:** hook em formulacao neutra, "selo avisando que aquele produto serve pra quem usa medicacao" virou "selo voltado para quem usa medicacao para emagrecer", porque "serve pra" lia como indicacao de uso de produto; e o fecho absoluto "ninguem esta se reorganizando em volta da sua confianca" virou "nenhuma embalagem constroi essa confianca por voce", que e a afirmacao que a peca de fato sustenta. **Achado operacional importante, registrado para as proximas semanas:** o ritmo de fala real da Monica foi medido pela primeira vez, contra o piloto "E pra mim?" na V2 natural aprovada por ela, 229 palavras faladas em 82,96 segundos de video a 1.0x, o que da **165,6 palavras por minuto**. Com esse numero, a segunda estima **cerca de 92 segundos** (253 palavras) e a quinta **cerca de 110 segundos** (305 palavras). **As duas ficam acima da faixa de 45 a 90 segundos pedida na direcao da semana**, a segunda por pouco e a quinta por cerca de 20 segundos. Nao foram cortadas porque a aprovacao foi sobre este texto e o corte nao estava no escopo dos ajustes finais; cada roteiro registra onde ha folga, se a Monica quiser encurtar na gravacao. Daqui pra frente a estimativa de duracao usa 165,6 ppm e nao mais chute. Gate CFN 10/10 nas tres pecas, zero travessao verificado por varredura. Nenhum arquivo do Pack Arcane tocado.
- 13/09 — @squad-conteudo-arcane: **M2S04 V2, correções da revisão estratégica aplicadas. Ainda NÃO aprovada e NÃO commitada.** Os três ângulos foram aprovados na revisão da Monica com o GPT, sem troca de pauta, sem pesquisa nova e sem conteúdo novo. Aplicadas apenas as correções pedidas. **Segunda:** saíram as afirmações hiperbólicas sobre o que as outras pessoas da mesa sabem, e saiu a abstração do silêncio; a dificuldade ficou concreta e nomeada, ela consegue analisar as opções do cardápio e não consegue responder o que quer comer naquele momento. Tese e cena preservadas. **Quarta:** lâminas 5, 6 e 7 reescritas; removida a sequência prescritiva de componentes que empurrava a peça para tutorial de meal prep; a mensagem passou a ser que organização adianta trabalho sem decidir antecipadamente a refeição inteira, ancorada em "organização é apoio, não é contrato". **Quinta, correção conceitual:** removida a frase "saciedade não é uma característica do alimento", que está tecnicamente errada, e removida a generalização "boa parte desses produtos não está vendendo comida, está vendendo saciedade", que as fontes não sustentam. No lugar entrou a distinção correta entre informação de rótulo e percepção corporal, com a ordem obrigatória de reconhecer primeiro que alimentos podem ter características que favorecem saciedade. "O mercado inteiro" virou "parte da indústria". **Duas correções factuais adicionais encontradas na revisão contra as fontes:** "tem embalagem no supermercado hoje" sugeria prateleira brasileira, e as fontes documentam os lançamentos com selo nos Estados Unidos e a discussão da indústria no Brasil; e "o dobro de proteína" virou "até o dobro", que é o que a fonte diz. Revisão factual completa, afirmação por afirmação, registrada na seção 6 do roteiro de quinta. **Texto na tela reduzido ao preset MÔNICA NATURAL:** um único overlay de abertura por Reel, sem overlay de meio nem de fecho. Consequência registrada: o disclaimer de GLP-1 perdeu o reforço visual e passou a viver só na fala e na legenda, o que torna o bloco falado inegociável na edição. Gate CFN 10/10 rodado de novo nas três peças. Nenhum arquivo do Pack Arcane tocado.
- 13/09 — @squad-conteudo-arcane: **M2S04 selecionada, teorizada e roteirizada. V1, NÃO aprovada e NÃO commitada.** Preflight completo rodado antes de propor tema (briefing, regras estratégicas, fontes de repertório, tracker, régua CFN, perfil de tom de voz, e os 29 conteúdos já produzidos). Semana sem terça de apresentação, três peças. **Diagnóstico de cobertura:** o Mês 2 estava concentrado em interocepção, custo mental da vigilância e terceiros olhando; a M2S03 fechou três territórios (comentários sobre o corpo, sono, exercício). Nenhum território de vida real fora de casa tinha sido aberto. **Três territórios virgens abertos:** restaurante, organização da rotina sem rigidez, e ambiente alimentar. **Fio da semana:** de onde vem a resposta. Segunda **a mesa inteira já pediu** (Reel, Pilar 1, excesso de conhecimento nutricional sem confiança interna), quarta **organizar não é decidir** (Carrossel, Pilar 3, organização como redução de atrito e não como controle), quinta **o selo na embalagem** (Reel, Pilar 5, marcado **[OPORTUNIDADE]**). Nenhuma das três tem vigilância, contagem, balança ou cálculo como conflito central, que era a monocultura a corrigir. **Motores de descoberta rodados:** a [OPORTUNIDADE] de ambiente alimentar que estava registrada desde 06/09 sem fonte primária teve as fontes recuperadas e datadas (Bloomberg Línea 06/05, cobertura do Fi South America de agosto em São Paulo, Meio & Mensagem 28/08 com levantamento Winnin) e virou a quinta. Uma [EVIDÊNCIA] sobre a separação entre notar e confiar no sinal interno foi encontrada e **não usada**, por não ter sido recuperada até o nível de ficha exigido; fica guardada como candidata forte. Achados e limites em `pesquisa/dor-e-mercado/2026-09-13-achados.md`. **Bloqueio respeitado:** a fonte brasileira apresenta manutenção de massa muscular como motivo da reformulação, e esse território está vetado desde 06/09; não entrou na pauta em nenhuma forma. Nenhum número entrou nas peças públicas, mesma regra do carrossel do sono. Gate CFN 10/10 rodado peça a peça, com auditoria extra de posicionamento no carrossel (risco de deslizar para meal prep) e de oportunidade na quinta. **Novo fluxo de trabalho registrado:** Claude produz a V1, a Monica leva para revisão estratégica no GPT, e só depois das correções aprovadas o Claude faz a versão final, commita e entrega. Por isso nada foi commitado nesta etapa. Nenhum arquivo do Pack Arcane tocado.
- 07/09 — @squad-edicao-arcane: **Piloto de edição concluído e preset próprio da Monica definido.** O Reel "É pra mim?" (1min42s, vertical nativo) rodou ponta a ponta: ambiente 25/25, corte por fala (19% removido, 38 jumpcuts), transcrição whisper medium revisada com o dicionário, e os 6 quality gates do squad mais o gate CFN 10/10 aprovados. **A edição técnica funcionou; a direção criativa default do Pack foi reprovada pela Monica.** Reprovados na V1: aceleração 1.2x, zoom automático (21 seções, enquadramento inquieto e rosto próximo demais) e trilha automática. Aprovados: os cortes como estão — **não endurecer o cutter** — e a legenda. V2 gerada a partir do `_speechcut` já aprovado, sem recomeçar do bruto: **1.0x, zero zoom, zero trilha**, provados por medição (duração idêntica ao intermediário, PSNR 50,5 dB contra ele, `mean_volume` igual ao da voz pura). **V2 aprovada pela Monica como direção de edição.** Disso nasceu o preset **MÔNICA NATURAL** — a edição deve parecer conversa boa e bem cuidada, não vídeo acelerado por algoritmo; zoom passa a ser exceção (1 a 3 momentos, razão editorial clara, sutil, nunca para fabricar dramaticidade) e música só entra quando ela pedir. Persistido em duas peças, **nenhuma dentro do Pack Arcane**: documento em `docs/producao-conteudo/monica/edicao/preset-monica-natural.md` e rule em `.claude/rules/custom-do-aluno.md`. Também nasceu o estilo de legenda `monica-elegante-escuro` (o marrom do `monica-elegante` some sobre roupa escura), com cópia de segurança em L4 porque o original mora dentro do Pack. **Próximo passo: a Monica regrava o mesmo Reel com microfone, para publicação real, e a edição usa o preset como default.**
- 06/09 — @squad-conteudo-arcane: **Correção definitiva de escopo, decisão da Mônica.** **Composição corporal, massa muscular e perda de massa magra saem dos territórios editoriais orgânicos.** Retirados da tabela do briefing seção 4, com veto explícito registrado logo abaixo dela: não se propõe nem se desenvolve ângulo nesses assuntos mesmo diante de evidência boa ou oportunidade forte, e só voltam se ela pedir. O dado de perda de massa magra que apareceu nas matérias sobre GLP-1 foi rebaixado em `pesquisa/dor-e-mercado/2026-09-06-achados.md` para nota de pesquisa **fora de escopo editorial e bloqueada para geração de pauta**. Também aprovados como permanentes os dois motores: **Evidência** (ciência para deixar a comunicação mais concreta, verificável e interessante, nunca mais acadêmica, complicada ou sensacionalista; um achado pode gerar conteúdo próprio ou apenas sustentar internamente uma peça evergreen) e **Oportunidade** (trend só entra com conexão natural e forte, nunca por estar em alta).
- 06/09 — @squad-conteudo-arcane: **M2S03 selecionada e teorizada.** Preflight rodado (briefing, CFN, fontes de repertório, base vigente) e consulta aos 28 conteúdos já produzidos antes de propor tema. Cinco ângulos propostos, todos em território virgem; três aprovados pela Monica: segunda **o elogio que virou contrato** (Reel, Pilar 1), quarta **a noite mal dormida que virou culpa às quatro da tarde** (Carrossel, Pilar 3, marcado **[EVIDÊNCIA]**), quinta **quando o exercício virou pagamento** (Reel, Pilar 5). Teorias em `docs/producao-conteudo/monica/posts/m2s03-*/teoria.md`. **Ainda falta roteirizar (Rico).** Ângulo de investimento financeiro no tratamento adiado para a M2S04 por causa do vídeo da consulta na terça; ângulo de viagem guardado como candidato. **Correção de 06/09, mesma data:** o ângulo de composição corporal que eu havia proposto e guardado foi **descartado por decisão da Mônica**, junto com massa muscular e perda de massa magra, que saíram dos territórios editoriais do projeto (briefing seção 4). Não é candidato de nenhuma semana e não volta sem pedido explícito dela.
- 06/09 — @squad-conteudo-arcane: **Direção editorial ampliada por decisão da Monica.** Três regras novas no `contexto/briefing-editorial.md`: (13) **slot de apresentação nas terças do Mês 2** (app, "é pra mim?", consulta; M2S04 sem terça) com a regra de planejar os outros três conteúdos em conjunto para a semana não parecer sequência de venda, incluindo o veto a território de oferta na segunda; (14) **dois motores de descoberta** — Oportunidade/Hype e Evidência/Artigos — com ficha obrigatória de fonte e a regra crítica de que nenhum número, porcentagem, risco, prevalência ou resultado entra sem estar explicitamente sustentado pela fonte, e sem converter associação em causalidade, estudo isolado em verdade universal, mecanismo hipotético em fato ou evidência em promessa; (15) **ordem da seleção semanal** em três consultas (conteúdos recentes, territórios e banco, oportunidade e evidência) com sinalização `[OPORTUNIDADE]` e `[EVIDÊNCIA]`. Fluxo espelhado em `pesquisa/README.md`. Donos: **Iris** na descoberta editorial, **Vera** quando for circulação de mercado. **Nenhum squad novo criado, Pack não editado.** Primeira rodada dos motores registrada em `pesquisa/dor-e-mercado/2026-09-06-achados.md`.
- 06/09 — @companion: **Squad de Conteúdo calibrado para a nova direção editorial.** Três peças, nenhuma dentro do Pack Arcane: (1) rule de preflight em `.claude/rules/custom-do-aluno.md` — único lugar de config que sobrevive a update do Auroq — obrigando todo agente que produz conteúdo público a ler briefing editorial, régua CFN e fontes de repertório antes de propor tema, e a rodar o checklist CFN como gate bloqueante antes de entregar; (2) `contexto/briefing-editorial.md` com posicionamento guarda-chuva, os 5 pilares como lentes, ~26 territórios como **repertório de possibilidades e não grade rígida**, os 6 critérios de seleção semanal, anti-repetição que não proíbe tema importante (um território volta com novo contexto, conflito, mecanismo, situação, insight ou ponto de vista), régua de voz, GLP-1 e os dois vetos; (3) `docs/producao-conteudo/monica/perfil-tom-de-voz.md`, preenchendo o slot que o Rico já procurava e estava vazio. **Correção de fonte:** o pool vigente é `base-editorial.md`; a task do Pack aponta para `base-inicial.md`, que é legado de junho e contém linguagem proibida — a rule redireciona sem editar o Pack. **CFN é gate de segurança, não gerador de copy:** primeiro comunicação forte e específica, depois validação, e correção só do necessário para não deixar o texto genérico.
- 05/09 — @companion: **Decisões da Monica registradas.** (1) "Blindagem Antirreganho" removido do dicionário do whisper em `squad-edicao-arcane/data/nomes-proprios.yaml` — linguagem legada não deve mais ser induzida na transcrição. (2) Duas fontes de repertório profissional registradas em `contexto/fontes-repertorio.md`: **Formação Método Sophie de Terapia Nutricional** (base da abordagem comportamental — alimenta O Caminho e A Perspectiva) e **Meal Prep Express, Martha Guterres** (repertório complementar de organização e praticidade — alimenta stories e bastidores, com **veto explícito** de deslizar o posicionamento para meal prep, dieta ou planejamento rígido; a conexão é organização como redução de atrito e fadiga de decisão). Regra preservada em ambas: **curso/formação é fonte de repertório, não fonte de conteúdo** — não copiar material do curso, não transformar aula em post automaticamente, não assumir conteúdo proprietário não fornecido pela Monica.
- 05/09 — @companion: **Fase 1 concluída — diagnóstico de cobertura feito.** Varredura por leitura direta de `squad.yaml`, `agents/*.md`, `tasks/*.md`, workflows e scripts dos squads instalados. Resultado em `contexto/cobertura-squads.md`. Achados: são 10 squads Arcane (não 9); `INVENTARIO-SQUADS.md` seção 3 está obsoleta; lacunas reais são gate CFN e captura de métricas, ambas resolvíveis sem criar agente; ambiente do Squad de Edição verificado verde (`doctor.py` 25/25, 0 avisos); termo legado "Blindagem Antirreganho" encontrado no dicionário do whisper. Convenção de mídia registrada em `midia/README.md` (documenta o que já se praticava, sem mudar o fluxo). **Nenhum squad novo recomendado.**
- 05/09 — @companion: estrutura de pastas criada (contexto, pesquisa, persona-angulos, series, roteiros, producao, metricas, aprendizados), cada uma com README de função. Regras estratégicas registradas em `contexto/regras-estrategicas.md`: meta operacional da Monica, 13 etapas que o sistema assume progressivamente, princípio de reuso antes de criação, capacidade antes de volume. Frente futura Distribuição Multicanal registrada em `business/campanhas/distribuicao-multicanal/` — não construir.
- 05/09 — @companion: projeto criado na reconciliação de 05/09. Direção estratégica registrada com os 12 componentes, meta operacional (Monica em direção, escolha, aprovação e gravação) e princípio de reuso de squads. Hipótese de cobertura montada a partir dos agentes instalados. Nada construído ainda — Fase 1 é diagnóstico.

---

## RETRO (preencher ao concluir)

1. **Deu o resultado esperado?**
2. **O que funcionou?**
3. **O que faria diferente?**
