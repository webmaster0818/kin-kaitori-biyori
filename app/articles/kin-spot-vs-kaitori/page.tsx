import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金の基礎知識", item: "https://gold-biyori.com/articles/kin-spot-vs-kaitori/" },
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
    headline: "【2026年最新】金スポット価格と買取価格の違い｜なぜ業者の買取は安いのか",
    description: "金スポット価格と業者買取価格の違い・差額の理由を完全解説。田中貴金属の店頭価格、業者手数料、為替の影響、最高値を引き出す業者選びまで。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u30b9\u30dd\u30c3\u30c8\u4fa1\u683c\u3068\u8cb7\u53d6\u4fa1\u683c\u306f\u3069\u308c\u304f\u3089\u3044\u5dee\u304c\u3042\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u696d\u8005\u306b\u3088\u308a2\u301c20%\u7a0b\u5ea6\u3002\u91d1\u5c02\u9580\u696d\u8005\u30672\u301c5%\u3001\u30ea\u30b5\u30a4\u30af\u30eb\u30b7\u30e7\u30c3\u30d7\u306710\u301c20%\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30b9\u30dd\u30c3\u30c8\u4fa1\u683c\u306f\u6bce\u65e5\u5909\u52d5\u3059\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u306f\u3044\u3001\u5e02\u5834\u306e\u53d6\u5f15\u6642\u9593\u4e2d\u306f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u5909\u52d5\u3002\u7530\u4e2d\u8cb4\u91d1\u5c5e\u306e\u5e97\u982d\u4fa1\u683c\u306f\u671d\u306b\u767a\u8868\u3055\u308c\u3001\u305d\u306e\u65e5\u306e\u3046\u3061\u306f\u56fa\u5b9a\u3055\u308c\u308b\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30b9\u30dd\u30c3\u30c8\u4fa1\u683c\u3088\u308a\u9ad8\u304f\u8cb7\u3044\u53d6\u3063\u3066\u304f\u308c\u308b\u696d\u8005\u306f\u3042\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u7279\u6b8a\u4f8b\uff08\u8cb7\u53d6\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u7b49\uff09\u4ee5\u5916\u3001\u539f\u5247\u306a\u3044\u3002\u30b9\u30dd\u30c3\u30c8\u4fa1\u683c = \u53d6\u5f15\u5e02\u5834\u306e\u4e0a\u9650\u5024\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5c11\u91cf\u3067\u3082\u9ad8\u304f\u58f2\u308b\u65b9\u6cd5\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91d1\u5c02\u9580\u696d\u8005\u3092\u9078\u3076\u30fb\u8907\u6570\u696d\u8005\u3067\u6bd4\u8f03\u3002\u5c11\u91cf\u306a\u3089\u5b85\u914d\u8cb7\u53d6\uff08\u9001\u6599\u7121\u6599\uff09\u3082\u691c\u8a0e\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30b9\u30dd\u30c3\u30c8\u4fa1\u683c\u306e\u9ad8\u3044\u6642\u671f\u306f\u3044\u3064\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u6b74\u53f2\u7684\u306b\u306f\u7d4c\u6e08\u4e0d\u5b89\u6642\u30fb\u30a4\u30f3\u30d5\u30ec\u5c40\u9762\u3067\u91d1\u4fa1\u683c\u304c\u4e0a\u6607\u3002\u76f4\u8fd1\u306f2024\u301c2026\u5e74\u3067\u6b74\u53f2\u7684\u9ad8\u5024\u570f\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金スポット価格と買取価格の違い｜なぜ業者の買取は安いのか",
  description: "金スポット価格と業者買取価格の違い・差額の理由を完全解説。田中貴金属の店頭価格、業者手数料、為替の影響、最高値を引き出す業者選びまで。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">金の基礎知識</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金スポット価格と買取価格の違いを完全解説</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>「金のスポット価格は1g 25,000円なのに、買取業者だと19,000円しか出ない」——なぜこの差が出るのか？本記事で完全解説します。</p>

          <h2>1. スポット価格とは</h2>
          <p>スポット価格は<strong>金の取引市場での現在価格</strong>。世界市場（LBMA：ロンドン金属取引所）の価格を、日本の貴金属業者（田中貴金属、三菱マテリアル等）が円換算して公表する価格です。</p>

          <h2>2. 業者買取価格はなぜ安いのか</h2>
          <p>業者買取価格 = スポット価格 - 業者の手数料・利益</p>
          <ul>
            <li>運営コスト（店舗・人件費・広告等）</li>
            <li>査定・鑑定コスト</li>
            <li>転売までの保管・リスクコスト</li>
            <li>業者の利益</li>
          </ul>
          <p>結果、買取価格はスポット価格の<strong>90〜98%</strong>になります。</p>

          <h2>3. 業者の手数料率の比較</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>業者タイプ</th><th>手数料率</th><th>特徴</th></tr></thead>
              <tbody>
                <tr><td>金専門業者</td><td>2〜5%</td><td>高水準買取、量が多いほど有利</td></tr>
                <tr><td>大手チェーン</td><td>5〜10%</td><td>店舗が多い・宅配対応</td></tr>
                <tr><td>リサイクルショップ</td><td>10〜20%</td><td>店頭即現金化、手軽</td></tr>
              </tbody>
            </table>
          </div>

          <h2>4. スポット価格はどこで確認できる？</h2>
          <ul>
            <li><strong>田中貴金属工業</strong> tanaka.co.jp/commodity/souba/</li>
            <li>三菱マテリアル mmc.co.jp/gold/souba/</li>
            <li>住友金属鉱山 smm.co.jp/products/precious/</li>
          </ul>

          <h2>5. 為替の影響</h2>
          <p>金は国際市場でドル建て取引が基本。円安になると円建て金価格が上昇、円高で下落。為替の動きも要チェック。</p>

          <h2>6. 業者選びでスポット価格に近づける5つのコツ</h2>
          <ol>
            <li>金専門業者を選ぶ（手数料率が低い）</li>
            <li>大量売却で手数料率交渉</li>
            <li>複数業者で相見積もり</li>
            <li>業者の手数料率を事前確認</li>
            <li>スポット価格の高い日に売る</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>スポット価格と買取価格はどれくらい差がある？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">業者により2〜20%程度。金専門業者で2〜5%、リサイクルショップで10〜20%。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>スポット価格は毎日変動する？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">はい、市場の取引時間中はリアルタイム変動。田中貴金属の店頭価格は朝に発表され、その日のうちは固定される。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>スポット価格より高く買い取ってくれる業者はある？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">特殊例（買取キャンペーン等）以外、原則ない。スポット価格 = 取引市場の上限値。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>少量でも高く売る方法は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">金専門業者を選ぶ・複数業者で比較。少量なら宅配買取（送料無料）も検討。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>スポット価格の高い時期はいつ？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">歴史的には経済不安時・インフレ局面で金価格が上昇。直近は2024〜2026年で歴史的高値圏。</p>
</details>

          <h2>関連記事</h2>
          <ul>
            <li><Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金の買取相場（最新）</Link></li>
            <li><Link href="/articles/k18-kaitori/" className="text-accent hover:underline">K18（18金）の買取相場</Link></li>
            <li><Link href="/articles/kin-takaku-uru/" className="text-accent hover:underline">金を高く売るコツ</Link></li>
            <li><Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">買取方法の比較</Link></li>
          </ul>
        </article>
      </div>
    </>
  );
}
