# Meta Marketing API — Reference

Endpoints chave do Meta Marketing API usados pelo squad.

## Autenticacao

```
Access Token: ver .env do projeto (META_ACCESS_TOKEN)
Scopes: ads_management, ads_read, business_management, pages_manage_posts, pages_read_engagement
```

## Setup do App Meta (PRE-REQUISITO)

O token vem de um Meta App registrado em developers.facebook.com.
**Se o app estiver em "modo de desenvolvimento", a API so funciona para LEITURA e criacao de campanhas/ad sets.
Criar ANUNCIOS (ads) e CRIATIVOS (adcreatives) EXIGE app em modo LIVE/PUBLICO.**

### Checklist antes de operar via API

1. Acessar https://developers.facebook.com/apps/{APP_ID}/settings/basic/
2. Verificar se o app esta em modo **Publico/Live** (toggle no topo da pagina)
3. Se estiver em **Desenvolvimento**, mudar para **Publico**:
   - Adicionar Privacy Policy URL (obrigatorio): ex. `https://seusite.com/politica-de-privacidade`
   - Pode ser necessario completar App Review para permissoes avancadas
4. Permissoes minimas necessarias: `ads_management`, `pages_manage_posts`, `pages_read_engagement`

### Por que isso importa

- Campanhas e Ad Sets: funcionam em dev mode (nao criam Page posts)
- Ads e AdCreatives com `object_story_spec`: BLOQUEADOS em dev mode (criam dark posts na Page)
- Erro exato: "O post do criativo dos anuncios foi criado por um app que esta em modo de desenvolvimento"

### App (template — preencha com seu app)

| Campo | Valor (exemplo / placeholder) |
|-------|-------------------------------|
| App Name | `<Nome do seu App Meta>` |
| App ID | `<SEU_APP_ID>` (15 a 16 dígitos) |
| Dashboard | `https://developers.facebook.com/apps/<SEU_APP_ID>/settings/basic/` |
| Status necessario | **LIVE/PUBLICO** |

> Pra descobrir seu App ID: Meta for Developers → My Apps → seu app → Settings → Basic.

## Ad Accounts (template — preencha com suas contas)

Liste aqui as contas que você usa. Estrutura sugerida:

| ID (formato `act_NNN`) | Nome interno | Função | Status |
|------------------------|--------------|--------|--------|
| `act_<SEU_ACCT_ESCALA>` | `<Nome da conta de Escala>` | Conta Escala (via principal Andromeda) | Ativa |
| `act_<SEU_ACCT_TESTE>` | `<Nome da conta de Teste>` | Conta Teste (laboratório) | Ativa |
| `act_<OUTRA_CONTA>` | `<Outra conta — ex: Imersão, Internacional>` | Função adicional | Ativa |

Pra listar suas contas via API:
```bash
curl -s "https://graph.facebook.com/${META_API_VERSION}/me/adaccounts?fields=id,name,account_status,currency&access_token=${META_TOKEN}"
```

## Campaigns

### Criar campanha
```
POST /act_{ad_account_id}/campaigns
  name: "ANDRO_{PRODUTO}"
  objective: "OUTCOME_SALES"
  special_ad_categories: []
  buying_type: "AUCTION"
  status: "PAUSED"
```

### Ler campanha
```
GET /{campaign_id}
  fields: name,status,objective,daily_budget,lifetime_budget
```

### Atualizar status
```
PATCH /{campaign_id}
  status: "ACTIVE" | "PAUSED" | "ARCHIVED"
```

## Ad Sets (Conjuntos)

### Criar conjunto
```
POST /act_{ad_account_id}/adsets
  campaign_id: {campaign_id}
  name: "{TEMP}_{TIPO}"
  optimization_goal: "OFFSITE_CONVERSIONS"
  billing_event: "IMPRESSIONS"
  daily_budget: {value_in_cents}
  regional_regulated_categories: ["BRAZIL_REGULATION", "VOLUNTARY_VERIFICATION"]
  regional_regulation_identities: {
    "universal_beneficiary": "{BENEFICIARY_ID_VERIFICADO}",
    "universal_payer": "{PAYER_ID_VERIFICADO}"
  }
  targeting: {targeting_spec}
  status: "PAUSED"
```

`regional_regulation_identities` é o contrato atual para selecionar anunciante e pagador verificados. Os campos `dsa_beneficiary`/`dsa_payor` são texto legado e não resolvem `3858634`. Default comprovado da BM nova Euriler/NDF:

```json
{
  "regional_regulated_categories": ["BRAZIL_REGULATION", "VOLUNTARY_VERIFICATION"],
  "regional_regulation_identities": {
    "universal_beneficiary": "1674529833798927",
    "universal_payer": "1674529833798927"
  }
}
```

### Preflight e readback de compliance

```bash
# Fonte real dos IDs: registry + adset válido da mesma operação
GET /{adset_id}?fields=regional_regulated_categories,regional_regulation_identities

# Depois do preview aprovado: validar sem criar
POST /act_{id}/adsets
  execution_options: ["validate_only"]
  ...payload final completo...

# Depois de criar/copiar: bloquear ativação se houver divergência
GET /{novo_adset_id}?fields=effective_status,issues_info,regional_regulated_categories,regional_regulation_identities
```

Evidência 23/08/2026, Graph API v26.0: `dsa_*` sozinho e categorias sem identidade falharam com `3858634`; `regional_regulation_identities` passou em `validate_only`.

### Targeting — Advantage+ sem sugestoes (ADV_Puro)
```json
{
  "geo_locations": {"countries": ["BR"]},
  "age_min": 18,
  "age_max": 65,
  "publisher_platforms": ["facebook", "instagram"],
  "targeting_automation": {"advantage_audience": 1}
}
```

### Targeting — Advantage+ com sugestoes (ADV_Int-*)
```json
{
  "geo_locations": {"countries": ["BR"]},
  "targeting_automation": {"advantage_audience": 1},
  "flexible_spec": [{"interests": [{"id": "...", "name": "Marketing digital"}]}]
}
```

### Targeting — Audiencia personalizada (QUENTE)
```json
{
  "custom_audiences": [{"id": "{engagement_audience_id}"}, {"id": "{website_visitor_id}"}],
  "excluded_custom_audiences": [{"id": "{purchaser_180d_id}"}]
}
```

### Atualizar orcamento (escala vertical)
```
PATCH /{adset_id}
  daily_budget: {new_value_in_cents}
```

### Pausar conjunto
```
PATCH /{adset_id}
  status: "PAUSED"
```

## Ad Creatives

### Criar criativo
```
POST /act_{ad_account_id}/adcreatives
  name: "{FORMATO}_{ANGULO}_{H}"
  object_story_spec: {
    "page_id": "{page_id}",
    "video_data": {
      "video_id": "{video_id}",
      "title": "{titulo}",
      "message": "{copy}",
      "call_to_action": {"type": "SHOP_NOW", "value": {"link": "{url_com_utms}"}}
    }
  }
```

### Criar anuncio
```
POST /act_{ad_account_id}/ads
  name: "{FORMATO}_{ANGULO}_{H}"
  adset_id: {adset_id}
  creative: {"creative_id": "{creative_id}"}
  status: "ACTIVE"
  tracking_specs: [{"action.type": ["offsite_conversion"], "fb_pixel": ["{pixel_id}"]}]
```

## Insights (Metricas)

### Metricas diarias por conjunto
```
GET /act_{ad_account_id}/insights
  fields: spend,impressions,clicks,ctr,cpc,cpm,actions,cost_per_action_type,frequency,reach
  date_preset: today
  level: adset
  filtering: [{"field":"campaign.id","operator":"IN","value":["{campaign_id}"]}]
```

### Metricas semanais (trend)
```
GET /act_{ad_account_id}/insights
  fields: spend,cost_per_action_type,ctr,cpc,cpm,frequency
  time_range: {"since":"YYYY-MM-DD","until":"YYYY-MM-DD"}
  time_increment: 1
  level: campaign
```

### Verificar delivery
```
GET /{adset_id}/delivery_estimate
GET /{ad_id}?fields=effective_status,ad_review_feedback
```

## Custom Audiences

### Criar audiencia de compradores (exclusao)
```
POST /act_{ad_account_id}/customaudiences
  name: "Compradores 180d"
  subtype: "CUSTOM"
  customer_file_source: "USER_PROVIDED_ONLY"
  retention_days: 180
```

### Criar audiencia de engajamento
```
POST /act_{ad_account_id}/customaudiences
  name: "Engajadores 365d"
  subtype: "ENGAGEMENT"
  rule: {"retention_seconds": 31536000, "inclusions": {"operator": "or", "rules": [...]}}
```

## Limites e Boas Praticas

- Rate limit: 200 calls/hora por ad account (standard)
- Batch requests: ate 50 operacoes por batch
- daily_budget em centavos (R$100 = 10000)
- Status inicial sempre PAUSED — ativar so apos revisao
- Esperar 24-48h apos ativar antes de otimizar (aprendizado)

## Aprendizados Operacionais (campo de batalha)

### Upload de videos
- Videos **< 100MB**: upload direto via `POST /{ad_account_id}/advideos` com `-F source=@arquivo`
- Videos **> 100MB**: OBRIGATORIO usar chunked upload (start/transfer/finish) com chunks de 1MB
- Upload direto de arquivos grandes falha com "HTTP error before end of send"

### Thumbnail de video
- Ao criar ad com video, **sempre incluir `image_url`** no `video_data`
- Sem thumbnail o Meta rejeita: "Seu anuncio precisa de uma miniatura de video"
- Pegar via `GET /{video_id}?fields=thumbnails` e usar `thumbnails.data[0].uri`

### Criacao de ads via API (encoding)
- O campo `creative` aceita JSON-encoded string (nao objeto aninhado)
- **NUNCA usar subprocess+curl** pra passar JSON complexo — aspas e caracteres especiais sao manglados pelo shell
- **SEMPRE usar urllib.request** (Python) com `urllib.parse.urlencode` — encoding limpo, zero problema
- Script de referencia funcional: `/tmp/create_all_ads.py`

### Scheduling (start_time)
- `start_time` e definido no **ad set**, nao na campanha ou ad
- Se o start_time ja passou, o ad set fica ativo imediatamente e ads criados comecam a entregar na hora
- Formato: ISO 8601 com timezone, ex: `2026-03-09T00:03:00-0300`

### Rate limit
- 95 requests falhados em sequencia = rate limit imediato ("conta de anuncios tem quantidade excessiva de chamadas")
- Recuperacao: esperar ~5 min
- Dica: adicionar `time.sleep(0.3)` entre requests pra nao estourar

### Campanhas ABO via API
- Requer `is_adset_budget_sharing_enabled=true` no POST de criacao
- Requer `bid_strategy=LOWEST_COST_WITHOUT_CAP` junto (senao erro de "estrategia de lance")

### Page ID e Instagram ID

Cada aluno tem seus próprios. Estrutura no `data/.env` ou 1Password:

```
META_PAGE=<SEU_PAGE_ID>
META_IG=<SEU_IG_BUSINESS_ID>
```

Pra descobrir o IG ID a partir do Page ID:
```bash
curl -s "https://graph.facebook.com/${META_API_VERSION}/${META_PAGE}?fields=instagram_business_account&access_token=${META_TOKEN}"
```

Ambos são obrigatórios no `object_story_spec` pra veicular em FB + IG.

### Setup de conta de anúncio nova via API (validado 05/08/2026 — Conta Escala Andromeda)

Sequência pra deixar uma conta recém-criada operável, tudo via System User token da BM dona:

**1. Compartilhar o pixel da BM com a conta nova** (sem isso, adset não otimiza PURCHASE):
```bash
# write
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/${PIXEL_ID}/shared_accounts" \
  -d "business=${BM_ID}" -d "account_id=${ACCT_SEM_PREFIXO}" -d "access_token=${META_TOKEN}"
# verificar dos DOIS lados:
#   GET /${PIXEL_ID}/shared_accounts?business=${BM_ID}   ← lista as contas
#   GET /act_${ID}/adspixels?fields=id,name              ← conta enxerga o pixel
```

**2. Compartilhar públicos (custom audiences) de outra conta:**
```bash
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/${AUDIENCE_ID}/adaccounts" \
  --data-urlencode 'adaccounts=["<ACCT_DESTINO_SEM_PREFIXO>"]' -d "access_token=${META_TOKEN}"
# resposta: {"success":true,...}; verificar: GET /act_${DESTINO}/customaudiences?fields=id,name,account_id
# (account_id no retorno = dono original; público aparece como compartilhado)
```

**3. Meio de pagamento** — só via Gerenciador (humano). Checar via API:
```bash
curl -s "https://graph.facebook.com/${META_API_VERSION}/act_${ID}?fields=funding_source_details,is_prepay_account&access_token=${META_TOKEN}"
# funding_source_details ausente = SEM cartão anexado → nada roda
```

**4. Limite de gasto diário da Meta (adtrust): NÃO é legível via API.**
- O campo `adtrust_dsl` foi REMOVIDO (v21 responde `(#100) nonexisting field`). Conferir no Gerenciador.
- **Comportamento observado (05/08/2026):** conta nova nasce com ~R$200/dia; ao anexar um cartão que JÁ TEM
  histórico de billing limpo na mesma BM (mesmo VISA da Conta Teste, ~R$259k pagos), o limite saltou pra
  **~R$11k/dia na hora** — a conta herda a confiança do instrumento de pagamento. Lição de setup: em conta
  nova de escala, anexar o cartão veterano (não um cartão virgem) pra não nascer estrangulado.

**⚠️ Armadilha de shell:** o cwd reseta entre comandos — `source data/load-meta-creds.sh` com path relativo
falha SILENCIOSO e o curl vai sem token. Erros enganosos resultantes: POST → `GraphMethodException subcode 33`
("does not exist / missing permissions"), GET → `(#200) Provide valid app ID`. Antes de diagnosticar permissão,
conferir `echo ${#META_TOKEN}` (204 = ok, 0 = source falhou). Sempre `cd` absoluto no MESMO comando do source.

---

## Advantage+ Creative via API (validado 07/08/2026 — Conta Escala)

**A armadilha:** omitir `degrees_of_freedom_spec` ao criar o adcreative **NÃO** significa "default da Meta ligado". A Meta grava as **82 features em `OPT_OUT`** — Advantage+ Creative 100% desligado, e a pontuação de oportunidade cai. Para ligar, é obrigatório enviar o campo explicitamente.

**Causa raiz que trava o payload:** `standard_enhancements` foi **DESCONTINUADO**. Qualquer payload que o inclua falha com:
> "O recurso de inclusão do campo de aprimoramentos padrão no criativo foi descontinuado. Defina recursos individuais."

Isso vale mesmo para o trio que criativos antigos ainda exibem (`standard_enhancements` + `text_optimizations` + `video_auto_crop`) — eles são legado e não podem ser recriados assim.

**Receita que funciona** (65 features aceitas em conta de tráfego direto para site):

```python
EXCLUIR = {'standard_enhancements', 'standard_enhancements_catalog', 'catalog_feed_tag',
           'customize_product_recommendation', 'dha_optimization', 'product_browsing',
           'product_extensions', 'product_metadata_automation', 'product_tags',
           'wa_mm_image_filtering', 'wa_mm_text_truncation_length', 'local_store_extension',
           'app_highlights', 'dynamic_partner_content', 'hide_price', 'image_background_gen',
           'carousel_to_video', 'multi_creative_post_carousel'}
dof = {'creative_features_spec': {f: {'enroll_status': 'OPT_IN'} for f in FEATURES if f not in EXCLUIR}}
```

Resultado efetivo: **55-57 OPT_IN por anúncio** — a Meta desativa sozinha as ~17 que não se aplicam ao formato (features de imagem em criativo de vídeo, e vice-versa). Isso é esperado, não é erro.

⚠️ **Creative é imutável.** `POST /{creative_id}` com `degrees_of_freedom_spec` falha (subcode `1815573`, "especifique nome, status ou rótulos"). Para corrigir um lote já subido: criar creatives novos e trocar em cada anúncio com `POST /{ad_id}` + `creative={"creative_id": novo}` — o anúncio continua ACTIVE e não perde o ID.

✅ **A pontuação de oportunidade CHEGA pela API** (retestado 17/08/2026 em v23.0 — a nota anterior dizia que não, estava desatualizada):

- Score da conta: `GET /act_{id}?fields=opportunity_score` → `{"opportunity_score": 89}` (Escala em 17/08; Teste 75).
- Recomendações com detalhe: `GET /act_{id}/recommendations` → lista com `type`, `recommendation_stage`, `object_ids` afetados, `lift_estimate` e `opportunity_score_lift` (quantos pontos a recomendação vale). Score + soma dos lifts ≈ 100.
- Aplicar a recomendação continua sendo mudança estrutural normal (não existe "aceitar" via API) — avaliar caso a caso; recomendação da Meta não é ordem.

## Estrear conta de anúncio nova — 3 travas em sequência (07/08/2026)

Ordem em que aparecem ao subir a primeira campanha numa conta recém-criada da mesma BM:

1. **System User sem escrita** → `code 200 / subcode 2490585`. Ter validado *leitura* não garante escrita. Fix: `POST /act_{id}/assigned_users` com `user={su_id}`, `business={bm_id}`, `tasks=["MANAGE","ADVERTISE","ANALYZE","DRAFT"]`.
2. **Instagram não vinculado** → o adcreative é criado normalmente, mas o **anúncio** falha com `subcode 1487790` ("objeto promovido inválido"). Fix: `POST /{ig_user_id}/authorized_adaccounts` com `account_id={id}` — **sem** o prefixo `act_` (com prefixo retorna erro genérico de parâmetro). Creatives criados ANTES do vínculo continuam quebrados: recriar.
3. **`image_hash` não é cross-account** → mesma assinatura (`1487790`), e só nos estáticos. A Meta *aceita criar* o creative com hash de outra conta, mas o anúncio quebra. Fix: `GET /act_{origem}/adimages?hashes=[...]` → baixar a `url` → re-upload multipart em `/act_{destino}/adimages`. **`video_id` É reutilizável** entre contas da mesma BM (só remover `image_hash` do `video_data`, senão dá `ObjectStorySpecRedundant` subcode 1443051).

> Diagnóstico rápido: se só os estáticos falham e os vídeos passam, é a trava 3. Se falha tudo, é a 2.
