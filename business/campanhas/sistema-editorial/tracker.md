# TRACKER — Sistema Editorial

> Execução viva do projeto. Todos os agentes leem e atualizam este arquivo.
> Estrutura da frente: [README](README.md)
> **Regras estratégicas (ler antes de trabalhar):** [contexto/regras-estrategicas.md](contexto/regras-estrategicas.md)
> Cockpit: [cockpit](../../cockpit.md)

**Início:** 05/09/2026
**Deadline:** sem deadline fixo
**Dono geral:** Monica Frutuoso
**Status:** Ativo — Fase 1 concluída em 05/09. Diagnóstico feito, nada construído ainda

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

## TAREFAS (fase atual)

| Tarefa | Dono | Status | Depende de | Notas |
|--------|------|--------|------------|-------|
| Criar estrutura de pastas da frente | Sistema | **Done — 05/09** | — | 8 áreas com README de função. Regras estratégicas registradas em `contexto/` |
| Ler o inventário funcional do Pack Arcane | Sistema | **Done — 05/09** | — | `INVENTARIO-PACK-COMPLETO.md` válido. `INVENTARIO-SQUADS.md` seção 3 obsoleta (diz que o squad de edição não existe) |
| Mapear cobertura real dos squads contra os 12 componentes | Sistema | **Done — 05/09** | Inventário | Diagnóstico em `contexto/cobertura-squads.md`. São 10 squads Arcane, não 9 |
| Identificar lacunas reais (o que nenhum squad cobre) | Sistema | **Done — 05/09** | Mapeamento | Reais: gate CFN (8) e captura de métricas (11). Fina: lógica de série (5). O resto é persistência/cadência/ativação |
| Decidir: adaptar squad existente ou criar novo | Monica | Não iniciado | Lacunas | Recomendação do diagnóstico: **não criar squad**. Decisão é da Monica |
| Rodar 1 Reel piloto ponta a ponta no Squad de Edição | Monica + Sistema | Não iniciado | Vídeo bruto novo | Ambiente verde (`doctor.py` 25/25 em 05/09). Convenção registrada em `midia/README.md`. Condição 2 do critério de encerramento da frente |
| Decidir sobre "Blindagem Antirreganho" no dicionário do whisper | Monica | **Done — 05/09** | — | Monica decidiu remover. Termo saiu de `squad-edicao-arcane/data/nomes-proprios.yaml` |
| Registrar fontes de repertório profissional | Sistema | **Done — 05/09** | — | Método Sophie e Meal Prep (Martha Guterres) em `contexto/fontes-repertorio.md`, com a regra "repertório ≠ conteúdo" e o veto de posicionamento |
| Calibrar o Squad de Conteúdo para a nova direção editorial | Sistema | **Done — 06/09** | Diagnóstico | Rule de preflight + `contexto/briefing-editorial.md` + `perfil-tom-de-voz.md`. Zero arquivo do Pack Arcane tocado |
| Produzir os 3 conteúdos da semana dentro do sistema calibrado | Monica + Sistema | Não iniciado | Calibração | `/squad-conteudo-arcane` → caminho 3 (batelada). Condição 1 do critério de encerramento da frente |

---

## BLOCKERS

| Blocker | Desde | Impacta | Ação necessária |
|---------|-------|---------|-----------------|
| Sem captura de métricas | 05/09/2026 | Componente 12 (aprendizado com desempenho real) fica impossível | Resolver dentro do projeto Validação Confiança Blindada |

---

## CRITÉRIO DE ENCERRAMENTO DESTA FRENTE

Esta frente fecha quando as duas condições forem verdadeiras:

1. Os próximos roteiros estiverem sendo produzidos **dentro** do novo sistema;
2. Pelo menos **um Reel** tiver passado pelo fluxo completo de edição.

Ao fechar: salvar contexto, fazer commit e abrir a frente **Distribuição Multicanal**
(hoje na fila do cockpit — **não executar ainda**).

---

## LOG

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
