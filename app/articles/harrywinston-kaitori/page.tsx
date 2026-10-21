import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"ハリーウィンストンの結婚指輪、保証書なしでも買取可能ですか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能です。鑑定書なしの場合10〜20%減額されますが、本物と確認できれば買取されます。\"}}, {\"@type\": \"Question\", \"name\": \"ダイヤ部分と地金部分は別々に評価されますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"はい、合算評価。ダイヤモンドはGIA等の鑑定書に基づく評価、地金は金・プラチナの市場価値で査定。\"}}, {\"@type\": \"Question\", \"name\": \"ハリーウィンストンの買取相場の目安は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"新品定価の30〜50%が一般的。状態・付属品により変動。\"}}, {\"@type\": \"Question\", \"name\": \"壊れたハリーウィンストン製品は買取できますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能。ダイヤモンドと地金の素材価値が残るため、修理可能・不可能に関わらず査定対象。\"}}, {\"@type\": \"Question\", \"name\": \"ハリーウィンストンと他ブランド（カルティエ・ティファニー）の買取差は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"ハリーウィンストンが最高峰。同程度のスペックでも、ハリーウィンストンの方がブランドプレミアムが高い傾向。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】ハリーウィンストン買取相場｜婚約指輪・ネックレス・時計のブランド別査定額",
  description: "ハリーウィンストンの買取はブランドプレミアム＋ダイヤモンド・金素材の合算。婚約指輪、ネックレス、時計の買取相場、保証書なしでも売れるか、おすすめ業者を解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/harrywinston-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">ハリーウィンストンの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ハリーウィンストンの買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ハリーウィンストン買取相場と高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


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
            <li>ブランドジュエリーの買取を扱う業者で査定（コメ兵、なんぼや、リファスタ等）</li>
            <li>複数業者で相見積もり（業者差が大きい）</li>
            <li>クリーニングは専門業者に依頼する（ご自身での洗浄は避ける）</li>
            <li>金・プラチナ相場の高い時期を狙う</li>
          </ol>

          <h2>5. おすすめ買取業者</h2>

          <ServiceCaptureGrid />
          <div className="table-wrapper">
            <table>
              <thead><tr><th>業者</th><th>強み</th></tr></thead>
              <tbody>
                <tr><td>なんぼや</td><td>ハイブランドの実績豊富</td></tr>
                <tr><td>コメ兵</td><td>ブランドジュエリーの老舗</td></tr>
                <tr><td>リファスタ</td><td>公式は「貴金属・宝石買取専門店」と表記。ハリーウィンストン買取の案内ページあり（2026年10月16日確認）</td></tr>
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
            relatedSlugs={["kinseido-kaitori-guide", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-necklace-kaitori", "cartier-kaitori", "tiffany-kaitori", "bvlgari-kaitori", "vancleef-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "brand-jewelry-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
