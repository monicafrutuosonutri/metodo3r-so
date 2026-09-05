# Log de Decisões

> Decisões importantes registradas com racional e contexto. Append-only.

---

## [05/09/2026] — Nome comercial corrigido: Confiança Blindada

**Contexto:** Reconciliação de 05/09. A base de conhecimento do sistema tratava "Método 3R – Blindagem Anti-Reganho" como nome de produto, herdado do onboarding de 07/06.
**Decisão:** O produto comercial chama-se **Confiança Blindada**. "Método 3R" é a **estrutura interna** da metodologia e não deve aparecer como nome comercial em conteúdo, LP, anúncio, legenda ou material de venda.
**Racional:** A LP aprovada em 12/07/2026 já usa Confiança Blindada como nome de produto (URL confianca.monicafrutuoso.com.br). O sistema estava desatualizado em relação à realidade comercial.
**Impacto:** Todo agente que gerar conteúdo, copy ou material comercial usa Confiança Blindada. Método 3R só em documentação interna de metodologia. Paths de pasta legados (`validacao-metodo-3r/`, `ecossistema-metodo-3r/`) mantidos para não quebrar links.

---

## [05/09/2026] — Preço de R$ 19,90 descontinuado como referência

**Contexto:** O sistema carregava R$ 19,90 como preço atual desde 07/06.
**Decisão:** R$ 19,90 não é mais referência de preço. Preço vigente: **NÃO CONFIRMADO** até validação da Monica.
**Racional:** A LP v3 (12/07/2026) documenta R$ 67. Não há confirmação de qual valor está em vigor hoje. Registrar um preço errado é pior do que registrar a ausência de dado.
**Impacto:** Nenhum agente cita preço em conteúdo ou material até a Monica confirmar. Pendência aberta no tracker de Validação.

---

## [05/09/2026] — Publicação exige evidência: roteiro pronto não é post publicado

**Contexto:** O sistema perdeu sincronia entre planejamento e realidade. 20 conteúdos foram escritos e commitados entre 21/07 e 28/08, mas não existe registro de quais foram ao ar.
**Decisão:** Separar formalmente **produção editorial** (confirmável por commit) de **status de publicação** (só confirmável por evidência: print, link do post, data informada pela Monica ou registro de métrica). Tudo sem evidência fica marcado como NÃO CONFIRMADO.
**Racional:** Inferir publicação a partir de roteiro pronto ou commit foi exatamente o que produziu a dessincronia. Um sistema que preenche lacuna com suposição orienta errado e contamina toda decisão seguinte.
**Impacto:** Regra permanente para todos os agentes. Nenhum agente marca conteúdo como publicado sem evidência. "Não confirmado" passa a ser status válido no cockpit e nos trackers.

---

## [05/09/2026] — Captura de métricas e banco de linguagem viram parte do sistema

**Contexto:** A Fase 1 do projeto de Validação existe para diagnosticar o que funciona. Após 3 meses, não há uma única métrica capturada nem registro sistemático de resposta qualitativa.
**Decisão:** Captura de métricas e banco de linguagem da audiência deixam de ser tarefa avulsa e passam a ser componentes permanentes do sistema.
- **Métricas prioritárias:** visualizações, alcance, tempo médio/retenção, salvamentos, compartilhamentos, comentários, seguidores ganhos pelo conteúdo.
- **Banco de linguagem:** comentários, DMs, caixinhas, perguntas e respostas reais — as palavras da persona.
**Racional:** Sem dado de desempenho, a fase de diagnóstico não fecha e a de ajustes não pode começar. Sem as palavras reais da audiência, o conteúdo se alimenta da suposição da própria criadora.
**Impacto:** Método de captura (manual, export do Instagram ou automatizado) ainda a definir — é decisão pendente. Vira pré-requisito do componente de aprendizado contínuo do Sistema Editorial.

---

## [05/09/2026] — Próxima grande frente: Sistema Editorial

**Contexto:** A produção de conteúdo vinha sendo artesanal, semana a semana, dependente da Monica em quase todas as etapas.
**Decisão:** Abrir o projeto **Sistema Editorial** com 12 componentes: pesquisa contínua, banco de ângulos da persona, pesquisa de formatos de alta retenção e viralidade, séries de conteúdo, matriz combinatória (dor, situação concreta, pensamento, comportamento, custo, desejo, objeção, mecanismo), roteiros, carrosséis, revisão CFN, revisão Meta, edição automatizada, captura de métricas e aprendizado contínuo com desempenho real.
**Racional:** Aumentar volume sem reduzir trabalho manual quebra a operação — a cadência de 3 posts/semana já se mostrou não sustentável. A capacidade precisa vir antes do volume.
**Impacto:**
- **Meta operacional:** Monica permanece em direção estratégica, escolha, aprovação e gravação. O resto é progressivamente delegado ao sistema.
- **Princípio de arquitetura:** usar os squads existentes primeiro; criar worker ou squad novo apenas diante de lacuna real comprovada.
- Fase 1 é diagnóstico de cobertura, não construção.

---

## [05/09/2026] — Cadência de 3 posts/semana é meta, não capacidade comprovada

**Contexto:** A decisão de 26/06 estabeleceu 3 posts/semana como cadência oficial. Na prática, houve semana recente em que a grade não foi cumprida integralmente.
**Decisão:** A grade (segunda Reel, quarta carrossel, quinta Reel, mais terça quando houver conteúdo de apresentação/produto/consulta) permanece como **meta editorial**, não como cadência operacional comprovadamente sustentável.
**Racional:** Tratar meta como capacidade real gera planejamento que não se cumpre e sensação de fracasso recorrente. A arquitetura nova precisa aumentar capacidade antes de aumentar volume.
**Impacto:** Nenhum aumento de volume até o Sistema Editorial reduzir o trabalho manual. Revisão da cadência quando houver 4+ semanas de execução consolidada.

---

## [05/09/2026] — Weekly review volta a ser semanal

**Contexto:** Última weekly review em 22/06. A seguinte aconteceu em 05/09 — 75 dias depois. Esse intervalo é a causa direta da dessincronia entre sistema e realidade.
**Decisão:** Weekly review semanal, sem pular. Próxima em 12/09/2026.
**Racional:** O custo de 20 minutos por semana é infinitamente menor que o custo de reconstruir 3 meses de estado a partir de log de commit — e de operar meses inteiros sem saber o que está funcionando.
**Impacto:** O Companion escala a review no boot de cada sessão. Acima de 14 dias, para tudo e força a review antes de qualquer trabalho novo.

---

## [26/06/2026] — Cadência oficial de conteúdo ajustada para 3 posts semanais

**Contexto:** Semana 1 de conteúdo orgânico executada parcialmente — Reel 2 não foi gravado. Cadência de 4 posts/semana ficou acima da capacidade real de execução.
**Decisão:** Cadência oficial: 2 Reels + 1 carrossel = 3 conteúdos por semana. Vigência imediata a partir da Semana 2.
**Racional:** Consistência sustentável supera cadência alta e irregular. No orgânico no início, manter ritmo é mais importante do que volume. Cadência pode ser revisada para cima quando execução estiver consolidada por 4+ semanas.
**Impacto:** Base editorial e tracker atualizados. Semanas futuras planejadas neste formato.

---

## [26/06/2026] — Carrossel "vida-sem-medo-regredir" enviado para reserva

**Contexto:** Carrossel da Semana 1 não foi publicado. Semana 2 já tem 3 conteúdos definidos na nova cadência.
**Decisão:** Não incluir na Semana 2. Manter como conteúdo reserva — entra em semana de menor capacidade ou quando o Pilar A Mulher 3R precisar de reforço aspiracional.
**Racional:** Forçar o carrossel na Semana 2 iria contra a cadência recém-ajustada. O conteúdo tem teoria e guia prontos — pode entrar a qualquer momento sem trabalho extra.
**Impacto:** Banco de reserva disponível. Pilar A Mulher 3R ausente na Semana 2 — entra em semana futura.

---

## [22/06/2026] — P2 congelado e foco da semana definido

**Contexto:** Weekly review — P2 parado há 15 dias, Semana 1 de conteúdo pendente de execução.
**Decisão:** Congelar P2 (Estruturação do Ecossistema) formalmente por 7 dias. Foco da semana: executar Semana 1 de conteúdo orgânico (gravar, diagramar, publicar).
**Racional:** Prioridade real é publicar e testar o conteúdo orgânico antes de qualquer outra coisa. P2 não tem urgência e pode aguardar sem prejuízo.
**Impacto:** Cockpit fica com 1 ativo. P2 retorna à discussão em 29/06/2026 (ou após Semana 1 publicada).

---

## [22/06/2026] — Distinção entre Track A e Track B na validação

**Contexto:** Weekly review — confusão entre tráfego pago existente e conteúdo orgânico novo.
**Decisão:** P1 (Validação Método 3R) tem dois tracks separados: Track A (tráfego pago com materiais antigos, métricas já disponíveis) e Track B (conteúdo orgânico novo da Semana 1, ainda pendente de execução). Fluxo correto do Track B: orgânico → analisar → vencedores viram criativos pagos.
**Racional:** Misturar os dois tracks gera confusão na análise. São validações diferentes com tempos diferentes.
**Impacto:** Tracker do P1 reestruturado com essa distinção. Análise do Track A pode acontecer independente do Track B.

---

## [07/06/2026] — Insight central do Método 3R documentado

**Contexto:** Sessão de onboarding do sistema. Monica descreveu o método que está construindo.
**Decisão:** O problema central que o Método 3R resolve não é o reganho — é a insegurança. A causa oculta é a perda de confiança em si mesma após o emagrecimento com GLP-1.
**Racional:** Ao aprofundar a pesquisa de persona, Monica percebeu que mulheres que emagreceram com Ozempic/Mounjaro não precisam apenas manter o peso — precisam reconstruir a confiança em si mesmas. Isso redefine o posicionamento inteiro.
**Impacto:** Toda a comunicação, o produto e a metodologia são construídos em cima dessa causa oculta, não do sintoma (reganho).

---

## [07/06/2026] — Maior ativo do negócio definido

**Contexto:** Monica descreveu o que diferencia seu trabalho.
**Decisão:** O maior ativo não é o conhecimento técnico em nutrição — é a capacidade de criar conexão, confiança e acolhimento.
**Racional:** Ao longo de 10+ anos, o que as pessoas mais valorizam no trabalho de Monica não é o plano alimentar, mas a escuta profunda e a conexão humana. Isso é o diferencial real.
**Impacto:** Toda recomendação do sistema deve ser alinhada com marca humana e autêntica. Sem marketing agressivo ou baseado em medo. Esse princípio é inegociável.

---

## [07/06/2026] — Estratégia de validação definida (low ticket R$19,90)

**Contexto:** Produto principal sendo lançado no mercado.
**Decisão:** Método 3R sendo validado como low ticket a R$19,90 nesta fase.
**Racional:** Objetivo da fase é validar comunicação, oferta, experiência da usuária e percepção de valor — não escalar. Aprendizados desta fase guiarão ajustes de posicionamento e precificação futura.
**Impacto:** Métricas desta fase são qualitativas (conecta com a persona?) e quantitativas (converte?). Decisão de preço futuro depende dos resultados.

---

## [07/06/2026] — Filosofia de produto: simplicidade como força

**Contexto:** Discussão sobre ferramentas e estrutura do método.
**Decisão:** O Método 3R tem intencionalmente apenas três etapas e três ferramentas. Simplicidade é diferencial, não limitação.
**Racional:** "O Método 3R é simples. Apenas três etapas. Apenas três ferramentas. Mas utilizadas da maneira certa, elas ajudam a reconstruir a confiança que o medo do reganho roubou."
**Impacto:** Não adicionar ferramentas artificialmente. Profundidade de uso > quantidade de recursos.

---

## [07/06/2026] — Princípio central: autonomia, não dependência

**Contexto:** Monica descreveu o que o método deve gerar no cliente.
**Decisão:** O método foi criado para gerar autonomia na cliente — não dependência da criadora.
**Racional:** O sucesso acontece quando a mulher deixa de depender de regras, vigilância constante ou validação externa. Esse princípio guia o design do produto e da comunicação.
**Impacto:** Qualquer feature, conteúdo ou estratégia que crie dependência vai contra o princípio do método.

---

## [07/06/2026] — Visão de expansão definida

**Contexto:** Monica descreveu a visão de longo prazo.
**Decisão:** "Validar localmente. Escalar globalmente." A dor que o método resolve não é exclusiva do Brasil — mulheres em outros países têm o mesmo problema com GLP-1.
**Racional:** O mercado de GLP-1 é global. A transformação proposta (confiança alimentar pós-emagrecimento) é universalmente relevante.
**Impacto:** Ao estruturar metodologia e materiais, manter adaptabilidade para outros idiomas e mercados no horizonte.

---

## [07/06/2026] — Dois projetos ativos definidos

**Contexto:** Estruturação do cockpit.
**Decisão:** Dois projetos ativos — (1) Validação do Método 3R e (2) Estruturação do Ecossistema.
**Racional:** A validação é urgente (aprende e itera). A estruturação do ecossistema garante que o crescimento futuro aconteça sobre base sólida. Os dois correm em paralelo por design.
**Impacto:** Cockpit configurado com trackers individuais. Próximo review: 14/06/2026.
