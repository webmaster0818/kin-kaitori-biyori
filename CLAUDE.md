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

### 2026-06-19〜21 戦略再策定(フルフュージョン)→P0押し込み→P1ツール
- **2026-06-19 フルフュージョン再策定**: `fusion --full`で3モデル完全一致→最優先=P0(商品/純度/グラム勝ち筋の押し込み)。**P0オンページ(日次相場×純度×重量表・FAQ・GoldSimulator)は既存で構築済みと判明→真のギャップ=勝ち筋ページの孤立**。6勝ち筋＋全24商品/純度ページにGoldSimulator埋込＋勝ち筋クラスタ相互リンク＋souba-dashboard導線を注入(内部リンク集中)。Indexing 24。
- **2026-06-21 P1=グラム計算機ツール独立ページ新設（MediaXAI「p1いこう」）**: `app/kin-kaitori-keisanki/page.tsx`=`/kin-kaitori-keisanki/`。GoldSimulator(client)埋込＋**純度×グラム別買取目安早見表**(K24/K22/K18/K14×1/5/10/20/30/50/100g、gold-spot-prices.jsonから算出＝日次自動更新)＋本日1g単価カード＋製品別送客(kin-bracelet[喜平/テニス]/necklace/yubiwa/k24/k18/ingot)＋計算式＋FAQ可視＋「引用歓迎」(widget配布導線)＝被リンク資産。schema=BreadcrumbList/FAQPage/WebApplication。グラム系クエリ(喜平30g買取価格8.5位等)の受け皿。
  - ⚠️**重要発見: `amber`/`amber-dark`はトークン未定義**（globals.cssは accent/accent-dark/navy/cream/foreground/warm-gray/warm-border のみ）。GoldSimulver等の`bg-amber/10`は**色が出ていない死にクラス**。新ページはaccent系に統一した。GoldSimulator自体のamberは既存挙動維持で未変更（24ページの見た目を変えないため）。
  - **全ページnav「グラム計算機」追加**(navLinks配列・PC/モバイル両方)＝内部リンク強化(低権威の主レバー)。sitemap手動+1(static public/sitemap.xml・315 loc)。ビルドEXIT0・方式Bデプロイ(deploy repoはローカルmaster→`push origin HEAD:main`)・**本番curl(title/早見表506,040円/nav)確認・Indexing API 1/1**。
  - 効果は1-2週GSC。次候補=P2(地域223本のnoindex可逆/要判断)・P3被リンク営業。

### 2026-06-12 ②③④⑤一括実行（MediaXAI「全部進めたい・優先順位任せる」）
- **③手数料8社比較**: `/articles/kin-kaitori-tesuryo-hikaku/`。2エージェントで8社公式を直接調査（大吉/ウリエル/ティファナ/なんぼや/バイセル/福ちゃん/ザ・ゴールド/おたからや）。発見=査定/出張/キャンセル料は全社無料で差がつかず、**差は宅配返送料**（無料:なんぼや・ティファナ／客負担:バイセル・福ちゃん・ザ・ゴールド／宅配なし:大吉・ウリエル・おたからや）と振込手数料明記の有無。なんぼやの「相場価格に手数料含まず」注記も記載。不明項目は「記載なし」と正直表記・調査日明記
- **④価格ウィジェット**: `scripts/gen-widget.py`→`public/widget.js`(設置先DOMに直接描画＝**followed被リンク装置**)＋`widget.html`(iframe版)。日次スクリプト[1/4]後に組込み済み=毎日自動更新。配布ページ`/widget/`（設置条件=リンク削除不可）
- **②高値圏インジケーター(正直版)**: `components/HighRangeIndicator.tsx`をダッシュボードに設置。蓄積データ(現在6日)内のK24位置をバー表示、「暫定値・90日で確定運用に自動移行」と明記。直近90日にsliceするので**コード変更不要で自動成熟**
- **⑤税金クラスタ2本**: `/articles/kin-zouyo-zeikin/`(贈与税: 110万控除/速算表/No.3270取得費引き継ぎ/名義財産・定期贈与の罠)＋`/articles/kin-baikyaku-mynumber/`(200万円境界/支払調書/「分割すれば申告不要」の誤解を否定)。既存zeikin記事と重複しないテーマ選定（確定申告手順はzeikin記事が網羅済みのため見送り）
- articles-metadata.json+3・sitemap+4(/widget/含む)。⑥実査定レポは要相談としてMediaXAIに提示済み
- ⚠️正規ドメイン: ウリエル=uriel-cuore.co.jp / ティファナ=tifana.net（uriel.co.jp等は存在しない）

### 2026-07-02 ⑤刈り込み・統合の実測＋設計（MediaXAI「進めてください」）
- **URL Inspection実測**: sitemap96URL中90日表示ゼロ=73。サンプル15検査→**「Discovered - currently not indexed」11/15(73%)**・unknown2・indexed2(ingot-100g/souba-dashboard)。主因=ドメイン権威のしきい値（フュージョン診断どおり）。**未インデックス統合=失う順位なし=最安全**
- **統合設計(Discord報告済・明日実装)**: A=品位(k10/k18/k18pg/k18wg→品位別ガイド1本+301) / B=金貨(maple/eagle/kangaroo/tenno→金貨ガイド1本+301) / C=ingot-500g→kinka-ingotへ(**ingot-100gはindexedなので触らない**) / D=手続き系(未成年/本人確認/持ち物/予約→手続き完全ガイド1本)。96→約80URL。ブランドジュエリー12本→1本は第2弾提案
- **副次発見: /kin-kaitori-hakusho/(白書)自体が未インデックス**→トップ・全記事から内部リンク補強を統合とセットで
- 測定=インデックス済みページ数の増加(先行指標)。実装手順: 統合記事作成→301(_redirects)→sitemap更新→Indexing→本番確認

### 2026-07-03 戦略再策定（MediaXAI「戦略を見直したい。集客最短、最大化できる道を」）
GSC28d(6/4-7/1)=クリック1・表示617(前期546)・pos40.6。**直近1週で日次表示30→80に加速**（6月施策の評価が動き始め）。90d表示ありは39ページ。
- **診断**: ボトルネック=インデックス率(96URL中73表示ゼロ・73%検出-未登録)。ただし**低競合地域はインデックスされれば上位に入る実証**=半田8.0/守口8.0/豊川7.0/小田原9.0/松阪10.0位、唯一のクリック=松戸(地域)。地域ページはsitemap除外済みだがnoindexなし・ページ存続(だから表示継続)
- **4本柱をDiscord報告（承認待ち）**: P0=①統合301実装(7/2設計済) ②kin-bracelet(142imp/19.7位)一点集中→トップ10 ③白書/dashboard内部リンク補強 / P1=「今日の相場」即答ファースト構造（純度ページ・日次更新を順位に変換。k22=108imp/47位が筆頭）/ P2=**地域の選別再生**（フュージョン7/1の全刈り方針を実データで修正: 実績8都市に実在店舗データ注入→sitemap再掲載、pilatesブルーオーシャン移植。残200本は段階noindex/統合）/ P3=widget/白書の被リンク営業
- KPI: 7月末15c/8月末50c/10月末150c

### 2026-07-03 P0実行（MediaXAI「はい、進めてください」）✅完了・本番反映済み
- **①統合301**: 13ページ→3ガイド（kinseido-kaitori-guide=k10/k18/k18pg/k18wg / kinka-kaitori-guide=maple/eagle/kangaroo/tenno / kin-kaitori-tetsuzuki-guide=miseinen/honnin/mochimono/yoyaku、ingot-500g→kinka-ingot）。`public/_redirects`新設26行(スラッシュ有無×13)・sitemap 96→86・metadata 305→295。旧slug参照の内部リンク約70ファイル置換。**k14/k22/k24/ingot-100g/vienna/kinka-ingotは温存**。本番301動作確認済み
- **②kin-bracelet意図充足**: 喜平重量帯別計算/テニス=金+ダイヤ別評価/切れた・片方・刻印なし/ブランド二重評価/FAQ8問。title=「〜喜平・テニス・切れた品も今日の価格で計算【2026年7月】」。関連8ページからアンカー強化。⚠️**FAQ/schemaに6月修正漏れの固定価格誤値が残存していた**（約114,000円等）→計算式参照に置換（固定価格の残存は今後もgrepで監査）
- **③データ資産の内部リンク**: `components/RelatedArticles.tsx`に全記事共通「相場データ・ツール」枠(白書/souba-dashboard/keisanki・items空でも描画)＋トップに「データで見る金買取」セクション。白書の被リンクほぼゼロ→300本超
- ビルド(NODE_OPTIONS 8192・__next*.txt削除)→方式Bデプロイ・両push・Indexing 5/5・sitemap再送信。効果=インデックス済みページ数(先行指標)を1-2週監視。次候補=P1(純度ページ即答ファースト)・P2(地域選別再生)

### 2026-07-04 P1実行（MediaXAI「p1進めよう」）✅本番反映済み
- **即答ファースト化**（k22/k14/k24/kinseido-guide）: 新`components/TodayPriceAnswer.tsx`(h1直下・1g実数大表示+日付+前日比+算出注記+早見表/計算機導線。日付はgold-spot-prices.jsonのdateが正・new Date()不使用)
- **title/desc/ArticleSchemaに本日実数+日付をJSON連動で機械挿入**（例:「K22（22金）の買取相場 今日1g20,630円【7月3日更新】…」）＝毎朝11:05日次ビルドで自動更新＝QDFクエリ(「14金 相場 1g 今日」等)への毎日鮮度回答
- **前日比は厳密突合成立時のみ表示**(trend末尾=spot一致・ちょうど1日前・欠測時非表示=近似捏造なし)
- 🚨**K14/K24のFAQ/比較表に6月監査漏れの誤固定価格が多数残存**(実勢6割の古い値)→全て計算値参照に置換。**固定価格残存は毎回grep監査すること**(3回目の検出)
- build EXIT0・数値突合全OK・対象外ページ不変確認・方式B両push・本番確認(今日1g20,630円)・Indexing 4/4。効果=相場系クエリ(k22 108imp/47位筆頭)の順位1-2週測定。次=P2(地域選別再生・実績8都市に実在店舗データ)

### 2026-07-04 P2実行（MediaXAI「p2進めて」）✅本番反映済み
- **地域の選別再生 第1弾**: GSCで7-25位実績の8都市(松戸/小田原/半田/守口/豊川/松阪/新座/尼崎)に**実在店舗38件を注入**して薄いテンプレから脱却
- **`components/LocalStores.tsx`新設**: 店名/住所/営業時間/定休日/アクセス/電話+公式店舗ページへの出典リンク+**LocalBusiness/ItemList構造化データ**。定義済トークン(accent/navy/warm-*)使用(⚠️amber系は死にクラスなので不使用)
- **`data/local-stores.ts`新設**: 8都市の実在店舗を**並列調査エージェント8体**で各社公式店舗ページから収集→sourceUrl付きで収録。**架空ゼロ・実在しないチェーンは水増しせず除外**(ティファナは多くの地方に実店舗なし/なんぼや・ザゴールド該当なし都市除外/守口エコリングは公式403で不採用)。買取大吉(送客先)を各都市優先
- 各ページ: 実在店舗セクション挿入(inject_stores.py) + **robots noindex解除(index:true)** + sitemap再掲載(86→93URL,7都市追加/松阪lastmod更新)
- build EXIT0(NODE_OPTIONS 8192)・方式B両push・8都市本番HTTP200/実店舗描画/noindex解除/LocalBusiness確認・**Indexing API 8/8成功**。効果=8都市のインデックス/表示/順位を1-2週GSC測定。次=測定後に第2弾拡張

### 2026-07-05 P2第2弾（MediaXAI「第二弾進めよう」）✅本番反映済み
地域選別再生の第2弾。GSCで表示・順位実績のある次の8都市に実在店舗を注入。
- **対象8都市(42店)**: 名古屋(96imp)/上田(14.9位)/四日市(11位)/加古川(pos3・1click)/市川/府中/平塚/吉祥寺。全て並列調査8体で各社公式店舗ページから収集
- **honest除外**: 大阪府松原市の"上田3丁目店"・大分県宇佐市の"おたからや四日市店"・広島県府中市 を同名別地域として正しく除外。なんぼや本八幡=閉店除外。住所未確認のおたからや吉祥寺本店除外。ティファナ/ザゴールド等 該当なし都市は除外
- 各ページ: LocalStores注入+noindex解除(index:true)+sitemap再掲載(93→100URL)。build EXIT0・方式B両push・8都市本番200/実店舗/LocalBusiness確認・Indexing 8/8。効果1-2週GSC測定。次=第1弾の効果測定 or 第3弾(itabashi/utsunomiya等さらに薄い都市)
