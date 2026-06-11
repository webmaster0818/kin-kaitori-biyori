import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "ピンクゴールド買取", item: "https://gold-biyori.com/articles/k18pg-kaitori/" },
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
    headline: "【2026年6月最新】ピンクゴールド（K18PG）買取相場｜K18・K18WGとの違いと高く売るコツ",
    description: "ピンクゴールド（K18PG）の買取相場はK18・K18WGと同価格。なぜ同じなのか、ローズゴールドとの違い、変色や色落ちは買取価格に影響するか、徹底解説。",
    datePublished: "2026-05-18",
    dateModified: "2026-06-11",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"K18PG\u3068K18\u306f\u8272\u4ee5\u5916\u306b\u9055\u3044\u306f\u3042\u308a\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u7d14\u91d1\u542b\u6709\u91cf\u306f\u540c\u305875%\u3002\u9055\u3044\u306f\u6b8b\u308a25%\u306e\u91d1\u5c5e\u914d\u5408\u306e\u307f\uff08K18PG\u306f\u9285\u591a\u3081\uff09\u3002\u8cb7\u53d6\u4fa1\u683c\u306f\u5b8c\u5168\u306b\u540c\u3058\u3067\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30d4\u30f3\u30af\u30b4\u30fc\u30eb\u30c9\u304c\u8272\u3042\u305b\u30fb\u5909\u8272\u3057\u307e\u3057\u305f\u3002\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u554f\u984c\u306a\u304f\u8cb7\u53d6\u53ef\u80fd\u3002\u696d\u8005\u306f\u91d1\u542b\u6709\u91cf\u3067\u67fb\u5b9a\u3059\u308b\u305f\u3081\u3001\u8868\u9762\u306e\u5909\u8272\u306f\u4fa1\u683c\u306b\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18PG\u3068\u30ed\u30fc\u30ba\u30b4\u30fc\u30eb\u30c9\u306e\u9055\u3044\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u672c\u8cea\u306f\u540c\u3058\u3002\u30ed\u30fc\u30ba\u30b4\u30fc\u30eb\u30c9\u306f\u9285\u542b\u6709\u91cf\u304c\u591a\u3044\u6fc3\u3044\u30d4\u30f3\u30af\u3092\u6307\u3059\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u304c\u3001\u523b\u5370\u300cK18PG\u300d\u300c750\u300d\u304c\u3042\u308c\u3070\u540c\u3058\u4fa1\u683c\u3067\u8cb7\u53d6\u3055\u308c\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18PG\u306e\u30ea\u30f3\u30b0\u3001\u30b5\u30a4\u30ba\u76f4\u3057\u3067\u7a74\u304c\u7a7a\u3044\u3066\u3044\u307e\u3059\u304c\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3067\u3059\u3002\u91cd\u91cf\u3067\u67fb\u5b9a\u3059\u308b\u305f\u3081\u3001\u7a74\u30fb\u51f9\u307f\u304c\u3042\u3063\u3066\u3082\u8cb7\u53d6\u4fa1\u683c\u306f\u5909\u308f\u308a\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18PG\u3068\u30d7\u30e9\u30c1\u30ca\u3001\u3069\u3061\u3089\u304c\u9ad8\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u73fe\u5728\u306e\u91d1\u76f8\u5834\u9ad8\u9a30\u306b\u3088\u308a\u3001K18PG\uff08\u7d14\u5ea675%\uff09\u306e\u65b9\u304c\u9ad8\u3044\u5834\u5408\u304c\u591a\u3044\u3067\u3059\u3002\u540c\u3058\u91cd\u91cf\u306a\u3089\u30d4\u30f3\u30af\u30b4\u30fc\u30eb\u30c9\u306e\u65b9\u304c\u9ad8\u5024\u50be\u5411\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年6月最新】ピンクゴールド（K18PG）買取相場｜K18・K18WGとの違いと高く売るコツ",
  description: "ピンクゴールド（K18PG）の買取相場はK18・K18WGと同価格。なぜ同じなのか、ローズゴールドとの違い、変色や色落ちは買取価格に影響するか、徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">ピンクゴールド製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ピンクゴールド製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">ピンクゴールド買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ピンクゴールド（K18PG）の買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月11日</p>


          <p>ピンクゴールド（K18PG）は、その美しいピンク色から女性に人気のジュエリーです。「色がついているから価値が違うの？」と思うかもしれませんが、買取相場は<strong>通常のK18やK18WGと同じ</strong>です。</p>

          <p>本記事では、K18PGの買取の仕組み、ローズゴールドとの違い、変色・色落ちへの対応、高く売るコツを徹底解説します。</p>

          <GoldSpotPriceCard purity="k18pg" />

          <WeightPriceTable purities={["k18pg"]} />


          <h2>1. K18PGとは — 純度75%のピンクゴールド</h2>

          <p>K18PGは「18金ピンクゴールド」の略。「PG」は「Pink Gold」の頭文字。金合金の組成:</p>
          <ul>
            <li>純金：75%（K18と同じ）</li>
            <li>銅：20〜25%（ピンク色の主成分）</li>
            <li>銀・パラジウム等：残り</li>
          </ul>

          <p>銅の含有量が多いほどピンクが濃くなり、「ローズゴールド」と呼ばれることも。色味の濃淡は配合比率次第ですが、<strong>純金含有量は75%で固定</strong>です。</p>

          <h2>2. K18PGの買取相場 — K18系列と同価格</h2>

          <p>K18PGの買取価格は、<strong>K18（イエロー）・K18WG（ホワイト）と全く同じ</strong>。理由は業者の査定基準が「純金含有量×重量」だからです。</p>

          <p>2026年5月時点の参考相場:</p>
          <ul>
            <li>K18PG：1gあたりの最新目安は本ページ冒頭の「本日の買取相場」カード参照（毎日自動更新）</li>
            <li>K18：同上</li>
            <li>K18WG：同上</li>
          </ul>

          <p>金相場は田中貴金属の店頭価格が業界の指標。買取業者はそこから1〜10%の手数料を引いた金額を提示します。</p>

          <h2>3. K18PGの刻印の見方</h2>

          <p>刻印で必ず確認すべきもの:</p>
          <ul>
            <li><strong>「K18PG」</strong> — 最も一般的</li>
            <li><strong>「750」</strong> — 純度のみの表記</li>
            <li><strong>「18K」「18KT」</strong> — 海外製品でも見られる</li>
          </ul>

          <p>避けるべき刻印（金メッキ製品）:</p>
          <ul>
            <li><strong>「K18PG GP」</strong> — Gold Plated（金メッキ、買取数十円〜）</li>
            <li><strong>「K18PG GF」</strong> — Gold Filled（金張り、買取数百円〜）</li>
          </ul>

          <h2>4. K18PGの色味・変色について</h2>

          <p>K18PGは銅の含有量が多いため、長期間使うと<strong>「色がやや変わる・くすむ」</strong>場合があります。これは銅の酸化が主因です。</p>

          <p><strong>買取価格への影響: なし</strong></p>

          <p>業者は金含有量で査定するため、変色・色落ちがあっても価格は変わりません。クリーニングや磨きで補修する必要もありません。</p>

          <h2>5. ローズゴールドとの違い</h2>

          <p>「ローズゴールド」は明確な定義はなく、<strong>ピンクゴールドより銅含有量が多い濃いピンク</strong>を指すことが多いです。買取時の取り扱いは同じ。刻印が「K18PG」「750」であれば、ローズゴールドでも同価格で買取されます。</p>

          <h2>6. K18PG製品の主なアイテムと買取ポイント</h2>

          <ul>
            <li><strong>結婚指輪・婚約指輪</strong>: 男女ペアの内訳、刻印（イニシャル）の有無で査定額が変動することは稀（重量で決まる）</li>
            <li><strong>K18PGネックレス・ブレスレット</strong>: 切れていても買取可</li>
            <li><strong>K18PGピアス</strong>: 片方紛失でも残った方を買取可能</li>
            <li><strong>ブランドジュエリー</strong>: <Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ</Link>・<Link href="/articles/tiffany-kaitori/" className="text-accent hover:underline">ティファニー</Link>・<Link href="/articles/bvlgari-kaitori/" className="text-accent hover:underline">ブルガリ</Link>系はブランドプレミアム加算あり</li>
          </ul>

          <h2>7. K18PGを高く売る5つのコツ</h2>

          <ol>
            <li><strong>複数業者で相見積もり</strong>: 同じK18PGでも10〜15%の業者差</li>
            <li><strong>金相場の高い日を狙う</strong>: 田中貴金属の店頭価格を毎日チェック</li>
            <li><strong>ブランド品は保証書・箱を揃える</strong>: 5〜10%アップ</li>
            <li><strong>無理に磨かない</strong>: 表面磨きは価格に影響しないため不要、傷を増やすリスク</li>
            <li><strong>業者の手数料率を確認</strong>: 「相場の98%」など明示している業者が信頼できる</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18PGとK18は色以外に違いはありますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">純金含有量は同じ75%。違いは残り25%の金属配合のみ（K18PGは銅多め）。買取価格は完全に同じです。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ピンクゴールドが色あせ・変色しました。買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">問題なく買取可能。業者は金含有量で査定するため、表面の変色は価格に影響しません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18PGとローズゴールドの違いは？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">本質は同じ。ローズゴールドは銅含有量が多い濃いピンクを指すことが多いですが、刻印「K18PG」「750」があれば同じ価格で買取されます。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18PGのリング、サイズ直しで穴が空いていますが買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能です。重量で査定するため、穴・凹みがあっても買取価格は変わりません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18PGとプラチナ、どちらが高い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">現在の金相場高騰により、K18PG（純度75%）の方が高い場合が多いです。同じ重量ならピンクゴールドの方が高値傾向。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="purity" />
          <RelatedArticles
            currentSlug="k18pg-kaitori"
            relatedSlugs={["k24-kaitori", "k22-kaitori", "k18-kaitori", "k14-kaitori", "k10-kaitori", "k18wg-kaitori", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-nobebo-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
