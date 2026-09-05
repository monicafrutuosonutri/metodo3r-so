# TRACKER — Sistema Editorial

> Execução viva do projeto. Todos os agentes leem e atualizam este arquivo.
> Playbook: —
> Cockpit: [cockpit](../../cockpit.md)

**Início:** 05/09/2026
**Deadline:** sem deadline fixo
**Dono geral:** Monica Frutuoso
**Status:** Ativo — Fase 0 (desenho, ainda não construir)

---

## OBJETIVO

Construir o sistema editorial que produz conteúdo com base em pesquisa e aprendizado real de desempenho — substituindo a produção artesanal semana a semana.

**Meta operacional:** a Monica permanece principalmente no que exige expertise humana —
**direção estratégica, escolha, aprovação e gravação**. Todo o resto é progressivamente
delegado ao sistema.

**Princípio de construção:** reduzir trabalho manual e aumentar capacidade **antes** de aumentar volume.

**Princípio de arquitetura:** usar os squads existentes primeiro. Criar worker ou squad novo
**apenas quando houver lacuna real comprovada** (Constitution Art. VI — REUSE > ADAPT > CREATE).

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

> Esta tabela é **hipótese de cobertura**, não diagnóstico. A Fase 1 existe para verificá-la
> lendo o que cada squad realmente faz — não o que o nome sugere.

---

## FASES

| # | Fase | Status | Início | Fim |
|---|------|--------|--------|-----|
| 0 | Registro da direção | Done | 05/09/2026 | 05/09/2026 |
| 1 | Diagnóstico de cobertura — o que os squads existentes já resolvem | Não iniciado | — | — |
| 2 | Desenho do fluxo ponta a ponta | Não iniciado | — | — |
| 3 | Construção das lacunas reais | Não iniciado | — | — |
| 4 | Rodagem — próximos roteiros nascem dentro do sistema | Não iniciado | — | — |

**Fase atual:** 1 — Diagnóstico de cobertura (não iniciada)

---

## TAREFAS (fase atual)

| Tarefa | Dono | Status | Depende de | Notas |
|--------|------|--------|------------|-------|
| Ler o inventário funcional do Pack Arcane | Sistema | Não iniciado | — | Já existe, commitado em 26/08 |
| Mapear cobertura real dos 9 squads contra os 12 componentes | Sistema | Não iniciado | Inventário | Confirmar ou derrubar a tabela acima |
| Identificar lacunas reais (o que nenhum squad cobre) | Sistema | Não iniciado | Mapeamento | |
| Decidir: adaptar squad existente ou criar novo | Monica | Não iniciado | Lacunas | Decisão da Monica, não do sistema |

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

- 05/09 — @companion: projeto criado na reconciliação de 05/09. Direção estratégica registrada com os 12 componentes, meta operacional (Monica em direção, escolha, aprovação e gravação) e princípio de reuso de squads. Hipótese de cobertura montada a partir dos agentes instalados. Nada construído ainda — Fase 1 é diagnóstico.

---

## RETRO (preencher ao concluir)

1. **Deu o resultado esperado?**
2. **O que funcionou?**
3. **O que faria diferente?**
