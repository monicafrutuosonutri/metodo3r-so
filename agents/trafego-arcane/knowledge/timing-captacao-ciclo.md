# Timing de Captação no Ciclo — Quando Gastar Importa Mais que Quanto

> **Fonte:** evidência própria da operação NDF (Euriler), estudo de 2026-07-29.
> **NÃO faz parte das 38 Regras Cardinais** (Método Andrômeda / Barbara Bruna). É conhecimento
> do squad, derivado de dado real, e complementa o método sem contradizê-lo.

---

## O princípio

Em lançamento com **evento ao vivo com data marcada** (workshop, masterclass, live de vendas), o
ingresso comprado **longe do evento vale muito menos** que o comprado perto. A pessoa comparece
menos, assiste menos tempo e compra menos o produto de back-end.

Consequência operacional: **o calendário do gasto é uma variável de decisão, tão importante quanto
o valor do gasto.** Mover o mesmo dinheiro para mais perto do evento aumenta o retorno sem custar
um centavo a mais.

---

## A evidência (NDF, 3 ciclos, 2.736 ingressos, 192 contratos de mentoria)

### Conversão em mentoria por antecedência da compra do ingresso

| Antecedência | Ingressos | Mentorias | Conversão |
|---|---|---|---|
| 1-7 dias | 798 | 38 | **4,76%** |
| 8-21 dias | 1.033 | 39 | 3,78% |
| 22+ dias | 905 | 18 | **1,99%** |

**Ponto de quebra = 23 dias.** Até 23 dias: 4,18%. Depois: 1,68%. Razão **2,48x** (z=3,21, p=0,0013).
Testei todos os cortes de 7 a 27 dias; 23 é o mais forte.

### Comparecimento por antecedência (ciclo 25-26/07)

| Antecedência | % presente D1 | Índice | Assistiu 2h+ |
|---|---|---|---|
| 1-7 dias | 42,2% | 1,00 | 32,3% |
| 8-14 dias | 39,0% | 0,92 | 29,6% |
| 15-21 dias | 34,2% | 0,81 | 26,1% |
| 22-28 dias | 30,3% | 0,72 | 20,4% |
| 29-35 dias | 22,8% | **0,54** | 14,7% |

Escada perfeita, sem inversão. No corte de 23 dias: 38,4% vs 25,5%, razão 1,50x (z=+4,90, p=0,000001).

### A série dos ciclos (com os fechamentos oficiais)

| Ciclo | Ritmo | Ingressos | Ingr. com 22+ dias | CPA Meta | Mentorias | ROAS ciclo |
|---|---|---|---|---|---|---|
| 23-24/05 | R$2.587/dia | 821 | **3,4%** | R$85,08 | 32 | **5,72x** |
| 20-21/06 | R$3.250/dia | 575 | 43,3% | R$158,24 | 28 | 3,90x |
| 25-26/07 | R$5.342/dia | **1.389** | 46,9% | **R$134,61** | **57** | 3,61x |

### ⚠️ CORREÇÃO (31/07) — o que este documento NÃO diz

A 1ª leitura (29/07) usou só maio→junho e concluiu que "gastar mais destruiu a economia". **O
fechamento do ciclo 25-26/07, gerado depois, desmente essa generalização:**

| Julho vs Junho | |
|---|---|
| Mídia | +105% |
| Ingressos | **+141,6%** |
| Mentorias | **+103,6%** (28 → 57) |
| CPA Meta | **R$158 → R$134** (melhorou) |
| ROAS | −1,4% |
| Conversão ingresso → mentoria | 4,87% → 4,10% (−15,7% relativa) |

**Julho dobrou o gasto, dobrou o resultado e o CPA melhorou.** Junho foi o outlier ruim, não uma lei
de que volume piora eficiência. A queda de 15,7% na conversão é consistente com o efeito da
antecedência (julho teve 46,9% de antecipados contra 43,3% em junho) — mas foi mais que compensada
pelo volume.

> **CONCENTRAR continua certo. CORTAR VOLUME não.** O ganho está em **mover** o dinheiro no
> calendário, não em gastar menos. Não usar este documento para justificar budget baixo dentro
> da janela dos 23 dias.

---

## Robustez (o que já foi controlado)

O efeito **sobrevive** a todos estes controles:

- **Canal:** existe só no tráfego pago (2,28x, p=0,0019). **No canal Bia (recovery/convite) DESAPARECE**
  (0,86x, p=0,78) — onde alguém mantém contato ativo, a distância deixa de importar. Pista mais forte
  do mecanismo, e a base da contramedida (ver abaixo).
- **Ângulo de criativo:** o mix perto/longe é praticamente idêntico; o efeito se mantém dentro de cada
  ângulo (Stouffer z=+3,03). Não é artefato de rodar criativo pior no começo do ciclo.
- **Ciclo:** regressão logística com efeito fixo de ciclo — os coeficientes de ciclo saem
  não-significativos. A diferença entre maio/junho/julho é explicada pela antecedência.
- **Dia da semana:** 26,5% vs 25,2% de fim de semana. Não explica.
- **Régua de match:** a versão mais rigorosa (cobertura 13,8%) dá efeito MAIOR (1,83x) que a frouxa.

Regressão logística (n=2.689): cada dia de antecedência tem OR 0,960 (z=−3,29, p=0,001).
**Cada +7 dias derruba a chance de mentoria em 24,9%.**

---

## O que NÃO foi provado (não afirmar como certo)

1. **Causalidade.** Não sabemos se a distância esfria a pessoa ou se quem compra cedo já é diferente
   (autosseleção). A evidência do canal Bia favorece a leitura causal, mas é inferência.
2. **O comparecimento não é o mecanismo principal.** Decomposição: só **~11%** da queda de conversão
   passa pelo comparecimento; **~86%** é propensão da pessoa. Quem compra cedo converte 3,86% contra
   6,98% **mesmo assistindo o workshop inteiro**. Não vender a ideia de que "é só fazer a pessoa aparecer".
   (Esses 11% são **piso** — o grupo "ausente" está contaminado por falha de match, o que subestima
   a mediação.)
3. **Escalar concentrado pode não render igual.** Dobrar o volume numa janela curta pressiona o leilão:
   CPA sobe e a qualidade na margem cai. As projeções de ganho assumem CPA constante — leitura otimista.

---

## Como aplicar (protocolo)

### Ao planejar o budget de um ciclo

1. **Contar os dias até o cutoff** (no NDF: sexta véspera, 20h BRT).
2. **Mais de 23 dias pro evento → modo mínimo.** Budget de manutenção: mantém os campeões vivos
   (preserva aprendizado do algoritmo) e roda os testes da janela. Não é hora de volume.
3. **Dentro de 23 dias → escalar.** É aqui que o dinheiro compra ingresso que comparece e converte.
   Escala vertical normal (RC-04, 20-50%/dia).
4. **Nunca justificar volume alto no início do ciclo com "aquecer o algoritmo".** O dado diz que o
   ingresso gerado ali converte 2,5x menos.

### Se já existe um estoque de compradores antecipados

O canal Bia é a evidência de que **contato ativo neutraliza o efeito.** Para quem já comprou com
muita antecedência, cadência de aquecimento até o evento é a contramedida — não é budget de tráfego
que resolve isso.

### Ao ler resultado de ciclo

Comparar CPA/conversão **fase contra fase** (mesma distância do evento), nunca janela pós-evento
contra semana do evento. A semana do evento é sempre a melhor; comparar contra ela infla qualquer
queda e produz diagnóstico falso. *(Erro cometido na 1ª análise de 29/07 e corrigido no mesmo dia.)*

---

## Limitações do dado de comparecimento

- Os CSVs de participação do Meet vêm com **e-mail mascarado** (`abcd****@***.com`). Match reconstruído
  por (4 primeiros caracteres + comprimento do local-part + TLD), desambiguado por nome.
  **Cobertura: ~33% dos compradores.** As taxas absolutas são **piso**; as razões entre faixas é que valem.
- **Nome não é chave confiável:** nos matches confiáveis por e-mail, o nome do Meet concorda com o
  cadastro em apenas **54,5%** dos casos (apelido, nome de empresa, só primeiro nome). Usar nome
  cegamente gerou 167 falsos positivos que tiveram de ser rejeitados.
- `eventos_participados` (Supabase) está **vazia**; `bia_conversations` **parou de logar em julho**;
  `cloud_api_dispatches_log` só registra `accepted` (sem read/reply); `activity_events` é da plataforma
  de alunos. **Não existe proxy de comparecimento no banco.**
- **PEDIDO PRO PRÓXIMO CICLO:** exportar a presença com **e-mail em claro**. Leva o match de 33% pra
  ~95% e permite medir comparecimento com precisão todo ciclo.

### Achado colateral (operacional, não de tráfego)

Dos 1.071 participantes do dia 1 do ciclo 25-26/07, **~414 não são compradores do ciclo** — 72 leads
confirmados (existem no banco, não compraram) e 180 que não existem no banco. **O link do workshop
estava acessível pra quem não pagou ingresso.**

---

