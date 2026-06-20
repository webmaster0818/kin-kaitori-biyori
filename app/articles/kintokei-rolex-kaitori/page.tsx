import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金時計買取", item: "https://gold-biyori.com/articles/kintokei-rolex-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】金時計（ロレックス含む）買取相場｜18金無垢・ツートーン・ブランド別徹底解説",
    description: "金時計の買取は金相場とブランドプレミアムの両軸。ロレックス、オメガ、パテック等の18金無垢時計の買取相場、ツートーンの計算方法、高く売るコツを完全解説。",
    datePublished: "2026-05-18",
    dateModified: "2026-05-18",
    author: {
      "@type": "Organization",
      name: "金買取びより編集部",
    },
    publisher: {
      "@type": "Organization",
      name: "金買取びより",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

function FaqSchema() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u58ca\u308c\u305f\u30ed\u30ec\u30c3\u30af\u30b9\u306e\u91d1\u6642\u8a08\u3067\u3082\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3067\u3059\u3002\u52d5\u304b\u306a\u304f\u3066\u3082\u30b1\u30fc\u30b9\u30fb\u30d6\u30ec\u30b9\u306e\u91d1\u90e8\u5206\u306e\u7d20\u6750\u4fa1\u5024+\u30d6\u30e9\u30f3\u30c9\u30d7\u30ec\u30df\u30a2\u30e0\u304c\u3042\u308b\u305f\u3081\u3001\u7121\u57a2\u306e\u5834\u5408\u6570\u5341\u4e07\u5186\u4ee5\u4e0a\u306e\u8cb7\u53d6\u4f8b\u3082\u3002\"}}, {\"@type\": \"Question\", \"name\": \"18\u91d1\u6642\u8a08\u3068\u30b9\u30c6\u30f3\u30ec\u30b9\u6642\u8a08\u306e\u898b\u5206\u3051\u65b9\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30b1\u30fc\u30b9\u306e\u88cf\u84cb\u3084\u30e9\u30b0\u90e8\u5206\u306e\u523b\u5370\u3092\u78ba\u8a8d\u3002\u300cK18\u300d\u300c750\u300d\u300c18KT\u300d\u304c\u3042\u308c\u307018\u91d1\u3002\u91cd\u91cf\u3082\u5224\u5225\u306e\u76ee\u5b89\uff08\u91d1\u306f\u91cd\u304f\u3001\u30b9\u30c6\u30f3\u30ec\u30b9\u306f\u8efd\u3044\uff09\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30ed\u30ec\u30c3\u30af\u30b9\u306e\u30b3\u30f3\u30d3\u30e2\u30c7\u30eb\u306e\u91d1\u91cd\u91cf\u306f\u3069\u3046\u6e2c\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u696d\u8005\u3067\u5c02\u7528\u6e2c\u5b9a\u3002\u4e00\u822c\u7684\u306b\u30c7\u30a4\u30c8\u30b8\u30e3\u30b9\u30c8\u30fb\u30b3\u30f3\u30d3\u306f\u91d1\u90e8\u520620\u301c35g\u7a0b\u5ea6\u3002\u6b63\u78ba\u306a\u5024\u306f\u5c02\u9580\u696d\u8005\u3067\u67fb\u5b9a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30d6\u30e9\u30f3\u30c9\u4fdd\u8a3c\u66f8\u306a\u3057\u3067\u3082\u91d1\u6642\u8a08\u306f\u58f2\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u58f2\u308c\u307e\u3059\u304c\u3001\u3042\u308b\u5834\u5408\u3068\u6bd4\u3079\u306610\u301c15%\u5b89\u304f\u306a\u308b\u50be\u5411\u3002\u672c\u7269\u78ba\u8a8d\u306e\u8a3c\u660e\u304c\u306a\u3044\u305f\u3081\u696d\u8005\u304c\u614e\u91cd\u306a\u67fb\u5b9a\u3092\u3059\u308b\u3053\u3068\u304c\u7406\u7531\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u91d1\u6642\u8a08\u306e\u8cb7\u53d6\u76f8\u5834\u306f\u3069\u3053\u3067\u78ba\u8a8d\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30ed\u30ec\u30c3\u30af\u30b9\u5404\u30e2\u30c7\u30eb\u306e\u8cb7\u53d6\u4fa1\u683c\u306f\u30ed\u30c7\u30aa\u30c9\u30e9\u30a4\u30d6\u30fb\u30b3\u30e1\u5175\u30fb\u8cb7\u53d6\u5927\u5409\u7b49\u306e\u696d\u8005\u516c\u5f0f\u30b5\u30a4\u30c8\u3067\u78ba\u8a8d\u53ef\u80fd\u3002\u8907\u6570\u793e\u306e\u6bd4\u8f03\u304c\u304a\u3059\u3059\u3081\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金時計（ロレックス含む）買取相場｜18金無垢・ツートーン・ブランド別徹底解説",
  description: "金時計の買取は金相場とブランドプレミアムの両軸。ロレックス、オメガ、パテック等の18金無垢時計の買取相場、ツートーンの計算方法、高く売るコツを完全解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金時計の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金時計の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金時計買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金時計（ロレックス含む）の買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>金時計、特に<strong>18金無垢のロレックス</strong>は、金相場×ブランドプレミアムの二重の価値があり、高額買取が期待できる代表アイテムです。</p>

          <p>本記事では、金時計の買取価格の決まり方、ロレックスの18金モデル、ツートーン（コンビ）の計算方法、おすすめ業者を徹底解説します。</p>

          <h2>1. 金時計の買取価格の決まり方</h2>

          <p>金時計の買取価格は、以下の2つの軸で決まります:</p>
          <ul>
            <li><strong>金部分の価値</strong>: ケース・ブレスレットの金重量 × 純度 × 金相場</li>
            <li><strong>ブランドプレミアム</strong>: ロレックス・オメガ・パテック等のブランド付加価値</li>
          </ul>

          <p>つまり同じ重量・純度の金時計でも、ノーブランドとロレックスでは買取価格が数倍〜10倍以上違うことが普通です。</p>

          <h2>2. ロレックスの18金無垢モデル — 高額買取の代表</h2>

          <p>ロレックスの18金無垢時計の代表モデル:</p>
          <ul>
            <li><strong>デイデイト40 イエローゴールド（Ref. 228238）</strong>: 中古買取相場 約500〜700万円</li>
            <li><strong>デイトナ 18Kイエローゴールド（Ref. 116508）</strong>: 中古買取相場 約400〜600万円</li>
            <li><strong>サブマリーナ 18Kイエローゴールド（Ref. 126618LN）</strong>: 中古買取相場 約400〜500万円</li>
            <li><strong>GMTマスター II 18Kイエローゴールド</strong>: 中古買取相場 約400〜600万円</li>
            <li><strong>デイトジャスト 18Kイエローゴールド</strong>: 中古買取相場 約200〜350万円</li>
          </ul>

          <p>※2026年5月時点の参考値。実際は状態・付属品・モデル年式により大きく変動。</p>

          <h2>3. ツートーン（コンビ）の計算方法</h2>

          <p>ロレックスの「ツートーン（コンビ）」モデルは、ステンレスと18金の組み合わせ。金部分のみが金として評価されます。</p>

          <p>例えば、デイトジャスト ツートーン（ステンレス×18金）の場合:</p>
          <ul>
            <li>ベゼル（金）: 約5〜10g</li>
            <li>センターリンク（金）: 約15〜25g</li>
            <li>合計金重量: 約20〜35g</li>
            <li>金部分の素材価値: 20〜35g × ¥25,000/g = 約50〜85万円</li>
            <li>ブランドプレミアム加算: モデルにより異なる</li>
          </ul>

          <h2>4. ロレックス以外の金時計</h2>

          <ul>
            <li><strong>オメガ</strong> — シーマスター・コンステレーション系の金無垢: 100〜300万円</li>
            <li><strong>パテック・フィリップ</strong> — カラトラバ・ノーチラス 金無垢: 500〜2,000万円</li>
            <li><strong>オーデマ・ピゲ</strong> — ロイヤルオーク 金無垢: 500〜1,500万円</li>
            <li><strong>ヴァシュロン・コンスタンタン</strong>: 200〜800万円</li>
            <li><strong>ブライトリング</strong>金無垢: 50〜200万円</li>
          </ul>

          <h2>5. 金時計を高く売るコツ</h2>

          <ol>
            <li><strong>付属品を揃える</strong>: 箱・保証書・取扱説明書で査定額10〜20%アップ</li>
            <li><strong>動作確認</strong>: 動かない時計はオーバーホール費用分（5〜15万円）減額される</li>
            <li><strong>ブランド時計専門業者で査定</strong>: ロデオドライブ、コメ兵、おたからや等</li>
            <li><strong>複数業者で相見積もり</strong>: ブランド時計は業者差が大きい</li>
            <li><strong>金相場の動向確認</strong>: 金部分の価値は相場に連動</li>
          </ol>

          <h2>6. 金時計買取のおすすめ業者</h2>

          <div className="table-wrapper">
            <table>
              <thead><tr><th>業者</th><th>強み</th></tr></thead>
              <tbody>
                <tr><td>ロデオドライブ</td><td>ロレックスの買取実績豊富</td></tr>
                <tr><td>コメ兵</td><td>ブランド時計の老舗・店舗多数</td></tr>
                <tr><td>おたからや</td><td>全国700店舗以上で即現金化</td></tr>
                <tr><td>ヒカカク！</td><td>一括査定で複数業者比較</td></tr>
              </tbody>
            </table>
          </div>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>壊れたロレックスの金時計でも買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能です。動かなくてもケース・ブレスの金部分の素材価値+ブランドプレミアムがあるため、無垢の場合数十万円以上の買取例も。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>18金時計とステンレス時計の見分け方は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ケースの裏蓋やラグ部分の刻印を確認。「K18」「750」「18KT」があれば18金。重量も判別の目安（金は重く、ステンレスは軽い）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ロレックスのコンビモデルの金重量はどう測る？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">業者で専用測定。一般的にデイトジャスト・コンビは金部分20〜35g程度。正確な値は専門業者で査定。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ブランド保証書なしでも金時計は売れますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">売れますが、ある場合と比べて10〜15%安くなる傾向。本物確認の証明がないため業者が慎重な査定をすることが理由。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>金時計の買取相場はどこで確認できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ロレックス各モデルの買取価格はロデオドライブ・コメ兵・買取大吉等の業者公式サイトで確認可能。複数社の比較がおすすめ。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="product" />
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
          <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット（喜平・テニス）</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
          <RelatedArticles
            currentSlug="kintokei-rolex-kaitori"
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-yubiwa-kaitori", "kin-chain-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "kin-necklace-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
