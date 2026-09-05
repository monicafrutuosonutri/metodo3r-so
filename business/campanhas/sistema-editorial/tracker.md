# TRACKER — Sistema Editorial

> Execução viva do projeto. Todos os agentes leem e atualizam este arquivo.
> Estrutura da frente: [README](README.md)
> **Regras estratégicas (ler antes de trabalhar):** [contexto/regras-estrategicas.md](contexto/regras-estrategicas.md)
> Cockpit: [cockpit](../../cockpit.md)

**Início:** 05/09/2026
**Deadline:** sem deadline fixo
**Dono geral:** Monica Frutuoso
**Status:** Ativo — Fase 1 (diagnóstico de cobertura). Nada construído ainda

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
| Criar estrutura de pastas da frente | Sistema | **Done — 05/09** | — | 8 áreas com README de função. Regras estratégicas registradas em `contexto/` |
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

- 05/09 — @companion: estrutura de pastas criada (contexto, pesquisa, persona-angulos, series, roteiros, producao, metricas, aprendizados), cada uma com README de função. Regras estratégicas registradas em `contexto/regras-estrategicas.md`: meta operacional da Monica, 13 etapas que o sistema assume progressivamente, princípio de reuso antes de criação, capacidade antes de volume. Frente futura Distribuição Multicanal registrada em `business/campanhas/distribuicao-multicanal/` — não construir.
- 05/09 — @companion: projeto criado na reconciliação de 05/09. Direção estratégica registrada com os 12 componentes, meta operacional (Monica em direção, escolha, aprovação e gravação) e princípio de reuso de squads. Hipótese de cobertura montada a partir dos agentes instalados. Nada construído ainda — Fase 1 é diagnóstico.

---

## RETRO (preencher ao concluir)

1. **Deu o resultado esperado?**
2. **O que funcionou?**
3. **O que faria diferente?**
