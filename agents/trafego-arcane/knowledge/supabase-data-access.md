# Acesso a Dados Reais — Supabase API

INSTRUCAO CRITICA: Sempre que precisar de metricas reais da campanha (vendas, leads, spend, CPA, criativos, etc.), consulte o Supabase usando os comandos abaixo. NAO dependa apenas do Gerenciador Meta — os dados do Supabase sao mais confiaveis para contagem de vendas porque vem do Hotmart (fonte de verdade).

---

## Credenciais

**NUNCA escreva credencial neste arquivo nem em qualquer arquivo do squad.** As chaves vivem
em variaveis de ambiente na sua maquina — o pacote nao carrega chave de ninguem.

Crie um `.env` na raiz do seu projeto (o `.env` ja e ignorado pelo git e excluido do pack):

```
SUPABASE_URL=https://SEU-PROJETO.supabase.co
SUPABASE_ANON_KEY=<sua chave anon do painel Supabase>
CAMPAIGN_REF=<ref da sua campanha>
LAUNCH_SLUG=<slug do ciclo ativo — atualizar a cada shift>
```

Carregue antes de rodar os comandos:

```bash
set -a && source .env && set +a
```

Onde achar: painel do Supabase → Project Settings → API Keys. Se voce guarda segredos no
1Password, prefira `export SUPABASE_ANON_KEY=$(op read "op://<vault>/<item>/<campo>")` —
assim a chave nunca encosta no disco em texto claro.

Todos os comandos abaixo usam `$SUPABASE_URL` e `$SUPABASE_ANON_KEY`.

## Dashboard Visual

Se voce montou o painel do Launch Command Center, o endereco dele e o do seu proprio deploy.

---

## Como Puxar Dados

### 1. Dashboard Completo (total / ontem / hoje)

```bash
curl -s -X POST "$SUPABASE_URL/rest/v1/rpc/get_launch_dashboard" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"p_campaign_ref": "'"$CAMPAIGN_REF"'"}' | python3 -m json.tool
```

**Retorna (por periodo: total, yesterday, today):**
- `sales` — vendas do produto principal (exclui OBs)
- `revenue` — receita total (principal + OBs)
- `spend` — gasto em ads (Meta)
- `leads` — leads unicos
- `cost_per_sale` — CPA real (spend / sales)
- `avg_ticket` — ticket medio
- `page_conversion` — vendas / LPV (%)
- `checkout_conversion` — vendas / leads (%)
- `landing_page_views` — visualizacoes de pagina
- `link_clicks` — cliques no link
- `connect_rate` — LPV / link_clicks (%)
- `cpm`, `ctr` — metricas de ads
- `ob_total_pct`, `ob_apostila_pct`, `ob_gravacao_pct` — conversao de order bumps
- `roi` — revenue / spend
- `bump1_count`, `bump2_count` — quantidade de OBs vendidos

### 2. Scoreboard de Criativos

```bash
curl -s -X POST "$SUPABASE_URL/rest/v1/rpc/get_creative_scoreboard" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" \
  -H 'Content-Type: application/json' \
  -d '{"p_campaign_ref": "'"$CAMPAIGN_REF"'"}' | python3 -m json.tool
```

**Retorna (1 linha por criativo, ordenado por vendas desc):**
- `ad_name` — nome do criativo (normalizado, sem sufixo de conjunto _C1/_C2/_C3)
- `sales` — vendas atribuidas a esse criativo
- `revenue` — receita atribuida
- `spend` — gasto total nesse criativo (todos os conjuntos somados)
- `cost_per_sale` — CPA do criativo
- `rpm` — receita por 1000 page views (metrica principal de qualidade)
- `hook_rate` — % de views de 3s / impressoes (so pra video)
- `ctr` — click-through rate
- `connect_rate` — LPV / link_clicks
- `page_conversion` — vendas / LPV
- `lpv` — landing page views
- `cpc` — custo por clique
- `impressions`, `clicks`, `link_clicks`, `reach`, `video_views`

### 3. Vendas por Dia

```bash
curl -s "$SUPABASE_URL/rest/v1/v_campaign_sales?campaign_ref=eq.$CAMPAIGN_REF&order=sale_date.asc" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" | python3 -m json.tool
```

### 4. Leads por Dia

```bash
curl -s "$SUPABASE_URL/rest/v1/v_campaign_leads?campaign_ref=eq.$CAMPAIGN_REF&order=lead_date.asc" \
  -H "apikey: $SUPABASE_ANON_KEY" \
  -H "Authorization: Bearer $SUPABASE_ANON_KEY" | python3 -m json.tool
```

---

## Quando Usar Cada Fonte

| Preciso de... | Fonte | Comando |
|---------------|-------|---------|
| Visao geral rapida (CPA, vendas, ROI) | Dashboard RPC | get_launch_dashboard |
| Qual criativo ta vendendo mais | Creative Scoreboard | get_creative_scoreboard |
| Tendencia diaria de vendas | v_campaign_sales | GET view |
| Tendencia diaria de leads | v_campaign_leads | GET view |
| Decisao de pausar/escalar criativo | Creative Scoreboard | RPM + CPA + hook_rate |
| Diagnostico CPA alto | Dashboard RPC | Cruzar CTR, CPM, connect_rate, page_conversion |

## Diferenca Supabase vs Gerenciador Meta

| Dado | Supabase | Gerenciador Meta |
|------|----------|-----------------|
| Vendas | Hotmart (webhook) — FONTE DE VERDADE | Pixel/CAPI — delay 24-48h, atribuicao diferente |
| Leads | Hotmart (webhook) | Pixel — pode divergir 10-15% |
| Spend | Meta API (sync a cada 15min) | Tempo real |
| CPA | Calculado: spend / vendas_hotmart | Calculado: spend / purchases_pixel |
| Criativos | Agregado por nome base (ignora conjunto) | Por anuncio individual |

**REGRA:** Para decisoes de escala/pausa, SEMPRE priorizar CPA do Supabase (vendas reais) sobre CPA do gerenciador (eventos de pixel).

## Sync Automatico

Os dados do Meta Ads sao sincronizados a cada 15 minutos pela Edge Function `sync-meta-ads`. Os dados de vendas/leads chegam em tempo real via webhook do Hotmart.
