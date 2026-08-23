# SOP — Subir Campanha Nova por DUPLICAÇÃO (método anti-`3858634`)

**Versão:** 1.1.0
**Data:** 2026-08-23
**Fonte:** Missão NDF — 2 lotes de teste (TESTE_NDF_L01/L02) na sua conta de anuncios.
**Companion:** `sop-campanha-api.md` (endpoints REST), `sop-upload-criativos-api.md` (upload de mídia), `nomenclatura-protocol.md` (UTMs).

> **Por que este SOP existe:** duplicar um conjunto que já entrega preserva configurações opacas e é um fallback útil quando a criação do zero ainda falha. Desde 23/08/2026, porém, o fix primário do `3858634` é conhecido: enviar `regional_regulation_identities` com os IDs verificados de anunciante e pagador. `dsa_*` era o campo errado para essa seleção.

---

## Este método é FALLBACK, não o padrão

> ⚠️ **Importante:** o método primário é criar do zero com identidade regulatória explícita, rodar `validate_only` e só então criar PAUSED. Só caia para duplicação se esse payload correto ainda travar ou se a operação precisar preservar configuração não reproduzível.

### Árvore de decisão — subir lote novo

```
1. Criar a CAMPANHA (nunca trava)  →  POST /campaigns  (+ is_adset_budget_sharing_enabled em ABO)
       │
2. PROBE sem persistência  →  POST /adsets + execution_options=["validate_only"]
       │                      + regional_regulation_identities + categorias BR
       │
       ├─ ✅ PASSOU  →  conta liberada. Seguir o MÉTODO NORMAL (do zero) pros 6 conjuntos.
       │                 → sop-campanha-api.md (Nível 2). Ignorar o resto deste SOP.
       │
       └─ ❌ 3858634 mesmo com IDs verificados  →  FALLBACK por duplicação:
               │
               ├─ TEM campanha-referência que ENTREGA na conta?
               │      → SIM: /copies dos 6 conjuntos dela (passos 3-8 abaixo).
               │
               └─ NÃO tem nada pra duplicar?  →  ver "Sem campanha pra duplicar" abaixo.
```

> Rode o `validate_only` com o payload final **depois do preview aprovado e antes do POST real**. Ele não cria objeto. Se falhar, nenhuma campanha fica pela metade.

### Sem campanha pra duplicar (conta nova / primeira campanha)

Se a conta trava no `3858634` **com IDs regulatórios corretos** e não há conjunto válido para clonar, saídas em ordem:

1. **Concluir a verificação da empresa/portfólio** e confirmar que ela aparece como identidade selecionável.
2. **Criar o 1º conjunto pela UI**, selecionando anunciante e pagador verificados. Depois fazer readback de `regional_regulation_identities`; só então ele pode virar semente.
3. Não criar campanha com identidade de outra empresa apenas para passar na validação.

> Distinção vs `duplicate-campaign.md`: aquela task reconstrói via `POST /adsets` (cria do zero) — se a conta estiver travada, ela também bate no 3858634 e cai pra cá. **Construir lote por duplicação NÃO viola a RC-04** (escala vertical): os criativos são NOVOS; só a *config estrutural* é clonada.

---

## O que dispara vs o que passa (revalidado 2026-08-23)

| Operação | Resultado |
|----------|-----------|
| `POST /act_{id}/campaigns` (criar campanha) | ✅ **passa** — campanha NÃO é bloqueada pelo anunciante |
| `POST /adsets` com `dsa_*` ou só categorias | ❌ **3858634** — não seleciona identidade verificada |
| `POST /adsets` com `regional_regulation_identities` correto | ✅ passou em `validate_only` na Graph API v26.0 |
| `POST /{adset_id}/copies` (duplicar conjunto que entrega) | ✅ **passa** — herda compliance da fonte |
| `POST /{copied_adset_id}` (renomear + ajustar budget) | ✅ **passa** — editar nome/budget não re-dispara |
| Editar **targeting** do conjunto (add/trocar interesse/público) | ⚠️ **pode re-disparar 3858634** — por isso copie a FONTE CERTA por tipo e não edite targeting |
| `POST /act_{id}/ads` (pendurar anúncio na cópia) | ✅ **passa** |

**Conclusão:** criar do zero é seguro quando o payload leva os IDs verificados. Ao usar fallback, **duplicar somente uma fonte cuja identidade regulatória bate com o preview**.

---

## Pré-requisitos

1. **Campanha-referência** na mesma conta com a estrutura Andromeda padrão **entregando** e com `regional_regulation_identities` exatamente igual ao preview.
2. Criativos já preparados e subidos (ver `sop-upload-criativos-api.md`) → `creative_id` de cada anúncio.
3. Credenciais via `data/load-meta-creds.sh` (System User token, NUNCA MCP).

---

## Pipeline

```
1. Mapear IDs + identidade regulatória dos 6 conjuntos-fonte
   ↓
2. Criar a CAMPANHA nova (PAUSED)  — com is_adset_budget_sharing_enabled
   ↓
3. Para cada um dos 6 conjuntos: /copies da fonte → copied_adset_id
   ↓
4. Renomear + setar daily_budget em cada cópia
   ↓
5. Pendurar os N criativos (mesmos N em todos os 6 conjuntos) como ads ACTIVE
   ↓
6. VERIFICAR (budget, geo, pixel, IDs regulatórios, categorias BR, contagem de ads)
   ↓
7. ATIVAR (PATCH status=ACTIVE nos adsets, depois na campanha)
   ↓
8. Registrar no histórico (QG-LOG-001)
```

---

## Passo a passo (endpoints validados)

### 1. IDs dos conjuntos-fonte

```bash
curl -s -G "https://graph.facebook.com/${META_API_VERSION}/{REF_CAMPAIGN_ID}/adsets" \
  --data-urlencode "access_token=$META_TOKEN" \
  -d "fields=name,id,regional_regulated_categories,regional_regulation_identities&limit=10"
# Guardar mapa { "ADV_Puro": "<id>", "ADV_Int-mkt-digital": "<id>", ... }
```

**STOP** se qualquer fonte estiver sem `universal_beneficiary`/`universal_payer` ou com IDs diferentes do preview. Duplicação não autoriza herdar anunciante errado.

### 2. Criar a campanha (PAUSED)

```bash
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/act_{ACCT}/campaigns" \
  -d "access_token=$META_TOKEN" \
  -d "name=TESTE_NDF_L0X" \
  -d "objective=OUTCOME_SALES" \
  --data-urlencode "special_ad_categories=[]" \
  -d "bid_strategy=LOWEST_COST_WITHOUT_CAP" \
  -d "is_adset_budget_sharing_enabled=true" \
  -d "status=PAUSED"
```

> **`is_adset_budget_sharing_enabled` é OBRIGATÓRIO em ABO** (orçamento no conjunto). Sem ele: `error_subcode 4834011`. `true` = partilha de 20% ligada (padrão Andromeda).

### 3. Duplicar cada conjunto-fonte para a campanha nova

```bash
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/{SRC_ADSET_ID}/copies" \
  -d "access_token=$META_TOKEN" \
  -d "campaign_id={NEW_CAMPAIGN_ID}" \
  -d "deep_copy=false" \
  -d "status_option=PAUSED"
# Resposta: { "copied_adset_id": "<novo_id>" }
```

- **`deep_copy=false`** → copia o conjunto **SEM** os anúncios antigos (conjunto vazio, pronto pra receber os novos). Use sempre — `deep_copy=true` arrastaria os ads da fonte.
- A cópia **preserva o targeting da fonte** (interesses do tipo certo, públicos quentes do QUENTE etc.). **Não edite targeting** depois.
- **A fonte NÃO é alterada** — copiar é criar objeto novo no destino.

### 4. Renomear + budget na cópia

```bash
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/{COPIED_ADSET_ID}" \
  -d "access_token=$META_TOKEN" \
  -d "name=ADV_Puro" \
  -d "daily_budget=10000"   # centavos → R$100
```

### 5. Pendurar os anúncios (mesmos N em todos os 6 conjuntos)

```bash
curl -s -X POST "https://graph.facebook.com/${META_API_VERSION}/act_{ACCT}/ads" \
  -d "access_token=$META_TOKEN" \
  -d "name={ad_name}" \
  -d "adset_id={COPIED_ADSET_ID}" \
  --data-urlencode 'creative={"creative_id":"{CREATIVE_ID}"}' \
  -d "status=ACTIVE"
```

- O `creative_id` é reaproveitado (criativo é nível conta) — o mesmo creative entra nos 6 conjuntos.
- `sleep 0.4s` entre calls. N criativos × 6 conjuntos × 2 campanhas pode passar de 90 chamadas → ver rate limit.

### 6. Verificação obrigatória (antes de ativar)

Para cada conjunto, conferir: `daily_budget` correto, `geo` = BR, `promoted_object` (pixel/PURCHASE), `effective_status` **sem** `WITH_ISSUES`, e **contagem de ads == N**. Total = N × 6 × nº de campanhas.

### 7. Ativar

```bash
# adsets primeiro, depois a campanha
curl -s -X POST ".../{adset_id}" -d "access_token=$META_TOKEN" -d "status=ACTIVE"
curl -s -X POST ".../{campaign_id}" -d "access_token=$META_TOKEN" -d "status=ACTIVE"
```

> Ads já nascem `ACTIVE` (passo 5); ativar = ligar conjuntos + campanha. Status transitório `IN_PROCESS` é normal (Meta processando) e resolve sozinho.

### 8. Registrar no histórico

```bash
bash data/log-action.sh --agent {operador} --account {alias} \
  --action "Subiu lote {LOTE} por duplicacao" \
  --summary "campanhas {ids}, 6 conj/cada via /copies, {N} ads/conj, R\$X/conj" \
  --result "ATIVO, verificado" --ref {produto}
```

---

## Armadilhas

| Armadilha | Fix |
|-----------|-----|
| Criar do zero sem `regional_regulation_identities` | Dispara 3858634. Use IDs verificados + `validate_only`; `/copies` só se ainda falhar. |
| `deep_copy=true` | Arrasta os ads da fonte. Use `false`. |
| Editar targeting da cópia pra "ajustar" | Pode re-disparar 3858634. Copie a fonte CERTA por tipo. |
| Esquecer `is_adset_budget_sharing_enabled` em ABO | `4834011`. Sempre incluir (`true`). |
| Duplicar ad sem querer (retry sem checar) | Gera ad repetido no conjunto. Conferir contagem == N e deletar extras. |
| Rate limit (code 17) | Medição real (05/08/2026, lotes L03/L04): **~250 writes seguidos passaram** (2 campanhas + 12 copies + 27 creatives + 162 ads + ativações, pacing 0,35-0,5s) e o 17 só bateu nas LEITURAS logo depois. A janela levou **~45 min** pra reabrir (retries de 180s×6 não bastaram). Regra prática: EXECUTE tudo em sequência, e deixe a VERIFICAÇÃO pra 30-60 min depois (agendada), não em retry curto. |

---

## Checklist final

- [ ] Campanha criada com `is_adset_budget_sharing_enabled`
- [ ] 6 conjuntos via `/copies` (`deep_copy=false`), targeting da fonte preservado
- [ ] Budget e nome ajustados em cada cópia
- [ ] N criativos × 6 conjuntos pendurados (contagem confere)
- [ ] `regional_regulation_identities` confere com o preview em todos os conjuntos
- [ ] Categorias incluem `BRAZIL_REGULATION` + `VOLUNTARY_VERIFICATION`
- [ ] Sem `WITH_ISSUES`
- [ ] Campanha-fonte intacta (provar: mesmo ID/status/budget de antes)
- [ ] Verificação peça por peça rodada antes de ativar
- [ ] Ativado (adsets → campanha) e registrado no histórico

---

*Fallback de duplicação validado em 2026-06-29; contrato de identidade regulatória e criação do zero revalidado contra Graph Marketing API v26.0 em 23/08/2026.*
