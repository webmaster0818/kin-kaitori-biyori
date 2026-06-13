# gold-biyori.com（kin-kaitori-biyori）— 金買取アフィリエイト

Discord ch: `1492366658898231297`（⚠️gakki `1492366652…` と酷似、取り違え注意）
deploy: `kin-kaitori-biyori-deploy`（方式B）/ 日次LaunchAgent `com.kin-kaitori.daily-gold-update`（11:05、田中貴金属相場→build→deploy）
送客4社: ヒカカク！/買取大吉/ウリエル/ティファナ

## 作業ログ

### 2026-06-11 MediaXAI依頼: 最短・最大成長戦略（ASP以外）
GSC実数診断（4サイト中で最も厳しい）:
- 28日: **クリック0**・表示260・平均25.5位
- 週次表示が下降（285→31。5月頭ピーク）。peatbid/pilates/gakkiの伸長と対照的
- 90日で表示ありは**311ページ中12のみ**＝6/5(+140)・6/8(+99)の大量増設がほぼ未消化
- 準勝ち筋: 喜平ブレスレット30g 8.5位/テニスブレスレット10.6位/K14 11.4位/K24 16.4位(表示91)

戦略をDiscordに報告済（承認待ち）:
- **増設は一旦停止**を提案（消化不全での量産は逆効果リスク）
- Phase 0 = 純度別×製品別の相場ページに「本日の相場即答（日次データ活用）＋重量別早見表(10g/20g/30g…)」＋タイトル【2026年6月】数字訴求
- Phase 1 = Indexing APIクォータをgold未表示ページ消化に充当（毎日50-100×2週）→6月末に地域223記事を再判定（ダメなら主要20都市に統合）＋「金 買取 相場」総合ハブ新設（受け皿カニバリ防止）
- Phase 2 = 日次相場データを「金価格ダッシュボード」公開＝被リンク資産（souba-ranking方式移植）
- KPI: 0→50クリック/28d（7月末）、喜平/K24系3本を5位以内、表示ページ12→100

### 同日 Phase 0実行（MediaXAI「進めて」）
1. **重大発見①: GoldSpotPriceCard（本日の相場カード）は全7純度ページでimportのみ・JSX未使用＝一度も表示されていなかった**→ 純度7（k24/k22/k18/k14/k10/k18wg/k18pg）＋製品4（bracelet/necklace/yubiwa/nobebo）の計11ページに正しく配線
2. **`components/WeightPriceTable.tsx` 新設**: 重量別早見表（5/10/20/30/50/100g×純度。製品ページはK24/K22/K18/K14マトリクス）。gold-spot-prices.json読み＝**日次ビルド(com.kin-kaitori.daily-gold-update 11:05)で自動最新化**
3. **重大発見②: 記事本文の固定価格「約15,000〜15,400円/g」等が実勢と大幅乖離**（本日実勢の買取は約22,000円/g前後＝田中・複数買取業者サイトで外部裏取り）。**4月作成時点から誤値だった疑い**。11ページの誤値断定（FAQ/相場表/インゴット重量表/2025-26トレンド行）を削除またはライブ参照（カード・早見表参照）に置換
4. タイトル【2026年6月最新】化・dateModified更新・sitemap再送信・Indexing API 11ページ
- **✅地域ページ修正完了(2026-06-12朝)**: `components/PurityPriceTable.tsx`新設（純度別1g目安・gold-spot-prices.json読み＝日次自動更新）→218地域ページの誤り静的テーブルを一括置換＋kin-kaitori-souba(4列表)は価格列撤去＋ライブ表併設＋誤推移行(2025/26)削除＋例示固定額をライブ参照化。**サイト全体で誤り固定価格ゼロ**
- ⚠️教訓: 価格断定の置換regexは**行単位**で（複数行スパンでテーブル破壊した）。テーブル行は置換でなく行削除＋空tbody掃除

### 2026-06-12 Phase 1実行（MediaXAI承認）
- `scripts/submit-indexing-rotation.py`＝sitemap全URLをカーソル順に**毎日80件**Indexing API送信（カーソルは~/.openclaw/workspace/gold-indexing-cursor.json、429で即停止）。`daily-gold-update.sh` [5/5]に組込み→毎朝11:05自動。初回80件送信済(309URL中)
- 総合ハブ=既存kin-kaitori-soubaを起点（6/12に価格列修正済み）。6月末に地域記事の表示状況を再判定して絞り込み判断

### 2026-06-12 Phase 2第1弾（MediaXAI「phase2進めない理由ある？」→即実施）
- **/souba-dashboard/** = 本日K24価格＋前回比バッジ(gold-price-trend.json末尾2点から算出)＋PurityPriceTable＋**GoldSimulator（client component・純度×重量の概算計算）**＋GoldPriceTrend＋WeightPriceTable＋税金/売り時ガイド導線。ヘッダーnav「本日の相場」追加・sitemap(priority0.9 daily)・Indexing送信済み
- 競合勝ち筋の追加施策リスト（MediaXAIに提示済み）: ①シミュレーター(済) ②高値圏インジケーター(7月・90日percentile) ③手数料・条件の本気比較 ④埋め込みウィジェット配布=被リンク装置 ⑤税金・相続クラスタ深掘り ⑥実査定レポ(要実物・要相談)

### 2026-06-12 ②③④⑤一括実行（MediaXAI「全部進めたい・優先順位任せる」）
- **③手数料8社比較**: `/articles/kin-kaitori-tesuryo-hikaku/`。2エージェントで8社公式を直接調査（大吉/ウリエル/ティファナ/なんぼや/バイセル/福ちゃん/ザ・ゴールド/おたからや）。発見=査定/出張/キャンセル料は全社無料で差がつかず、**差は宅配返送料**（無料:なんぼや・ティファナ／客負担:バイセル・福ちゃん・ザ・ゴールド／宅配なし:大吉・ウリエル・おたからや）と振込手数料明記の有無。なんぼやの「相場価格に手数料含まず」注記も記載。不明項目は「記載なし」と正直表記・調査日明記
- **④価格ウィジェット**: `scripts/gen-widget.py`→`public/widget.js`(設置先DOMに直接描画＝**followed被リンク装置**)＋`widget.html`(iframe版)。日次スクリプト[1/4]後に組込み済み=毎日自動更新。配布ページ`/widget/`（設置条件=リンク削除不可）
- **②高値圏インジケーター(正直版)**: `components/HighRangeIndicator.tsx`をダッシュボードに設置。蓄積データ(現在6日)内のK24位置をバー表示、「暫定値・90日で確定運用に自動移行」と明記。直近90日にsliceするので**コード変更不要で自動成熟**
- **⑤税金クラスタ2本**: `/articles/kin-zouyo-zeikin/`(贈与税: 110万控除/速算表/No.3270取得費引き継ぎ/名義財産・定期贈与の罠)＋`/articles/kin-baikyaku-mynumber/`(200万円境界/支払調書/「分割すれば申告不要」の誤解を否定)。既存zeikin記事と重複しないテーマ選定（確定申告手順はzeikin記事が網羅済みのため見送り）
- articles-metadata.json+3・sitemap+4(/widget/含む)。⑥実査定レポは要相談としてMediaXAIに提示済み
- ⚠️正規ドメイン: ウリエル=uriel-cuore.co.jp / ティファナ=tifana.net（uriel.co.jp等は存在しない）
