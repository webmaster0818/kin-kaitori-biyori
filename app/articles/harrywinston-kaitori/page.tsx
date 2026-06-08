import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
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
      { "@type": "ListItem", position: 3, name: "ハリーウィンストン買取", item: "https://gold-biyori.com/articles/harrywinston-kaitori/" },
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
    headline: "【2026年最新】ハリーウィンストン買取相場｜婚約指輪・ネックレス・時計のブランド別査定額",
    description: "ハリーウィンストンの買取はブランドプレミアム＋ダイヤモンド・金素材の合算。婚約指輪、ネックレス、時計の買取相場、保証書なしでも売れるか、おすすめ業者を解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u306e\u7d50\u5a5a\u6307\u8f2a\u3001\u4fdd\u8a3c\u66f8\u306a\u3057\u3067\u3082\u8cb7\u53d6\u53ef\u80fd\u3067\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3067\u3059\u3002\u9451\u5b9a\u66f8\u306a\u3057\u306e\u5834\u540810\u301c20%\u6e1b\u984d\u3055\u308c\u307e\u3059\u304c\u3001\u672c\u7269\u3068\u78ba\u8a8d\u3067\u304d\u308c\u3070\u8cb7\u53d6\u3055\u308c\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30c0\u30a4\u30e4\u90e8\u5206\u3068\u5730\u91d1\u90e8\u5206\u306f\u5225\u3005\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u306f\u3044\u3001\u5408\u7b97\u8a55\u4fa1\u3002\u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u306fGIA\u7b49\u306e\u9451\u5b9a\u66f8\u306b\u57fa\u3065\u304f\u8a55\u4fa1\u3001\u5730\u91d1\u306f\u91d1\u30fb\u30d7\u30e9\u30c1\u30ca\u306e\u5e02\u5834\u4fa1\u5024\u3067\u67fb\u5b9a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u306e\u8cb7\u53d6\u76f8\u5834\u306e\u76ee\u5b89\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u65b0\u54c1\u5b9a\u4fa1\u306e30\u301c50%\u304c\u4e00\u822c\u7684\u3002\u72b6\u614b\u30fb\u4ed8\u5c5e\u54c1\u306b\u3088\u308a\u5909\u52d5\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u58ca\u308c\u305f\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u88fd\u54c1\u306f\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u3068\u5730\u91d1\u306e\u7d20\u6750\u4fa1\u5024\u304c\u6b8b\u308b\u305f\u3081\u3001\u4fee\u7406\u53ef\u80fd\u30fb\u4e0d\u53ef\u80fd\u306b\u95a2\u308f\u3089\u305a\u67fb\u5b9a\u5bfe\u8c61\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u3068\u4ed6\u30d6\u30e9\u30f3\u30c9\uff08\u30ab\u30eb\u30c6\u30a3\u30a8\u30fb\u30c6\u30a3\u30d5\u30a1\u30cb\u30fc\uff09\u306e\u8cb7\u53d6\u5dee\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u304c\u6700\u9ad8\u5cf0\u3002\u540c\u7a0b\u5ea6\u306e\u30b9\u30da\u30c3\u30af\u3067\u3082\u3001\u30cf\u30ea\u30fc\u30a6\u30a3\u30f3\u30b9\u30c8\u30f3\u306e\u65b9\u304c\u30d6\u30e9\u30f3\u30c9\u30d7\u30ec\u30df\u30a2\u30e0\u304c\u9ad8\u3044\u50be\u5411\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】ハリーウィンストン買取相場｜婚約指輪・ネックレス・時計のブランド別査定額",
  description: "ハリーウィンストンの買取はブランドプレミアム＋ダイヤモンド・金素材の合算。婚約指輪、ネックレス、時計の買取相場、保証書なしでも売れるか、おすすめ業者を解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">ハリーウィンストンの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ハリーウィンストンの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">ハリーウィンストン買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ハリーウィンストン買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>ハリーウィンストン（Harry Winston）は「キング・オブ・ダイヤモンド」と呼ばれる超ハイブランド。ダイヤモンド・プラチナ・金の素材価値に、強力なブランドプレミアムが加わり、買取相場は<strong>定価の30〜50%</strong>が一般的です。</p>

          <h2>1. ハリーウィンストンの買取価格の決まり方</h2>
          <p>ブランドプレミアム + ダイヤモンド + プラチナ/K18 で構成。<strong>新品定価の30〜50%</strong>が買取相場の目安。</p>

          <h2>2. 主なシリーズと買取相場</h2>
          <ul>
            <li><strong>ハリーウィンストン マイクロパヴェ リング</strong>: 60万〜300万円</li>
            <li><strong>HW ロゴ ペンダント K18</strong>: 15万〜50万円</li>
            <li><strong>ソリティア・エンゲージメントリング（ダイヤ1ct以上）</strong>: 100万〜500万円超</li>
            <li><strong>クラスター リング・ネックレス</strong>: 30万〜200万円</li>
            <li><strong>HW プレミア コレクション（時計）</strong>: 100万〜1,000万円超</li>
          </ul>

          <h2>3. 保証書・鑑定書がない場合</h2>
          <p>10〜20%程度減額されますが、本物確認は業者の専門査定で可能。買取自体は問題なく可能です。</p>

          <h2>4. ハリーウィンストンを高く売るコツ</h2>
          <ol>
            <li>箱・保証書・鑑定書をすべて揃える</li>
            <li>ブランドジュエリー専門業者で査定（コメ兵、なんぼや、リファスタ等）</li>
            <li>複数業者で相見積もり（業者差が大きい）</li>
            <li>クリーニングはプロに任せる（自己流NG）</li>
            <li>金・プラチナ相場の高い時期を狙う</li>
          </ol>

          <h2>5. おすすめ買取業者</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>業者</th><th>強み</th></tr></thead>
              <tbody>
                <tr><td>なんぼや</td><td>ハイブランドの実績豊富</td></tr>
                <tr><td>コメ兵</td><td>ブランドジュエリーの老舗</td></tr>
                <tr><td>リファスタ</td><td>金・プラチナ・ダイヤすべて専門査定</td></tr>
                <tr><td>ヒカカク！</td><td>一括査定で比較</td></tr>
              </tbody>
            </table>
          </div>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ハリーウィンストンの結婚指輪、保証書なしでも買取可能ですか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能です。鑑定書なしの場合10〜20%減額されますが、本物と確認できれば買取されます。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ダイヤ部分と地金部分は別々に評価されますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">はい、合算評価。ダイヤモンドはGIA等の鑑定書に基づく評価、地金は金・プラチナの市場価値で査定。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ハリーウィンストンの買取相場の目安は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">新品定価の30〜50%が一般的。状態・付属品により変動。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>壊れたハリーウィンストン製品は買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。ダイヤモンドと地金の素材価値が残るため、修理可能・不可能に関わらず査定対象。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>ハリーウィンストンと他ブランド（カルティエ・ティファニー）の買取差は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ハリーウィンストンが最高峰。同程度のスペックでも、ハリーウィンストンの方がブランドプレミアムが高い傾向。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="brand" />
          <RelatedArticles
            currentSlug="harrywinston-kaitori"
            relatedSlugs={["k18-kaitori", "k18pg-kaitori", "k18wg-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-necklace-kaitori", "cartier-kaitori", "tiffany-kaitori", "bvlgari-kaitori", "vancleef-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba"]}
          />
        </article>
      </div>
    </>
  );
}
