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
      { "@type": "ListItem", position: 3, name: "梅田・金買取", item: "https://gold-biyori.com/articles/umeda-kin-kaitori/" },
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
    headline: "【2026年最新】梅田の金買取おすすめ｜大阪駅周辺の主要店舗と相場比較",
    description: "梅田・大阪駅周辺で金を高く売るための業者比較。JR大阪駅・阪急梅田・地下街の主要店舗、相場、出張・宅配の選び方を解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u6885\u7530\u3068\u5fc3\u658e\u6a4b\u3001\u3069\u3061\u3089\u304c\u9ad8\u304f\u58f2\u308c\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5f97\u610f\u5206\u91ce\u304c\u7570\u306a\u308b\u305f\u3081\u4e00\u6982\u306b\u306f\u8a00\u3048\u306a\u3044\u3002\u4e00\u822c\u91d1\u88fd\u54c1\u306f\u6885\u7530\u3001\u30cf\u30a4\u30d6\u30e9\u30f3\u30c9\u306f\u5fc3\u658e\u6a4b\u306e\u50be\u5411\u3002\u4e21\u65b9\u3067\u898b\u7a4d\u3082\u308a\u6bd4\u8f03\u63a8\u5968\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u6885\u7530\u306e\u8cb7\u53d6\u5e97\u306f\u4f55\u6642\u307e\u3067\u55b6\u696d\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u591a\u304f\u306e\u5927\u624b\u696d\u8005\u306f19\u301c20\u6642\u307e\u3067\u55b6\u696d\u3002\u4f1a\u793e\u5e30\u308a\u306e\u67fb\u5b9a\u3082\u53ef\u80fd\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u6885\u7530\u304b\u3089\u51fa\u5f35\u8cb7\u53d6\u306f\u547c\u3079\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u798f\u3061\u3083\u3093\u7b49\u591a\u304f\u306e\u696d\u8005\u304c\u5927\u962a\u5e9c\u5168\u57df\u306b\u51fa\u5f35\u5bfe\u5fdc\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u6885\u7530\u3067\u571f\u65e5\u3082OK\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u307b\u307c\u5168\u696d\u8005\u304c\u571f\u65e5\u55b6\u696d\u3002\u65e5\u66dc\u306e\u65b9\u304c\u7a7a\u3044\u3066\u3044\u308b\u3053\u3068\u304c\u591a\u3044\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5730\u4e0b\u8857\u306e\u696d\u8005\u3068\u5730\u4e0a\u306e\u696d\u8005\u306e\u5dee\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5730\u4e0b\u8857\u306f\u6885\u7530\u99c5\u304b\u3089\u76f4\u7d50\u3067\u30a2\u30af\u30bb\u30b9\u826f\u597d\u3001\u5730\u4e0a\u306f\u5e97\u8217\u304c\u5e83\u304f\u843d\u3061\u7740\u3044\u3066\u67fb\u5b9a\u53ef\u3002\u4e21\u65b9\u3068\u3082\u4fe1\u983c\u3067\u304d\u308b\u696d\u8005\u304c\u591a\u3044\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】梅田の金買取おすすめ｜大阪駅周辺の主要店舗と相場比較",
  description: "梅田・大阪駅周辺で金を高く売るための業者比較。JR大阪駅・阪急梅田・地下街の主要店舗、相場、出張・宅配の選び方を解説。",
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
            <li><span className="text-foreground">梅田・金買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">梅田・大阪駅の金買取おすすめ店と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>梅田エリア（大阪駅・阪急梅田・阪神梅田）は関西最大の商業地区。買取業者の競争が激しく、<strong>相見積もりで高値が出やすい</strong>地域です。</p>

          <h2>1. 梅田エリアの金買取事情</h2>
          <p>大阪府の人口880万人の経済中心地。福ちゃん本社所在地、大手買取業者の関西本店が集中。</p>

          <h2>2. 梅田の主要金買取店</h2>
          <ul>
            <li><strong>福ちゃん 梅田本店</strong>: 大阪本社、全国12店舗</li>
            <li><strong>大黒屋 梅田店</strong>: 質屋系列、即現金化、阪急東通商店街</li>
            <li><strong>なんぼや 梅田店</strong>: ハイブランド対応</li>
            <li><strong>ゴールドプラザ 大阪本店</strong>: 金・プラチナ専門</li>
            <li><strong>リファスタ 大阪心斎橋店</strong>: 業界最高水準（梅田から地下鉄1本）</li>
            <li><strong>ジュエルカフェ 梅田店</strong>: ファッション系ジュエリー</li>
          </ul>

          <h2>3. 梅田で高く売る5つのコツ</h2>
          <ol>
            <li>福ちゃん（地元本社）+全国大手の両方で見積もり</li>
            <li>梅田・心斎橋・難波エリアで広く比較</li>
            <li>金相場の高い日を狙う</li>
            <li>付属品を揃える</li>
            <li>業者の手数料率を確認</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田と心斎橋、どちらが高く売れる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">得意分野が異なるため一概には言えない。一般金製品は梅田、ハイブランドは心斎橋の傾向。両方で見積もり比較推奨。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田の買取店は何時まで営業？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">多くの大手業者は19〜20時まで営業。会社帰りの査定も可能。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田から出張買取は呼べる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。福ちゃん等多くの業者が大阪府全域に出張対応。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田で土日もOK？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ほぼ全業者が土日営業。日曜の方が空いていることが多い。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>地下街の業者と地上の業者の差は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">地下街は梅田駅から直結でアクセス良好、地上は店舗が広く落ち着いて査定可。両方とも信頼できる業者が多い。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="region" />
          <RelatedArticles
            currentSlug="umeda-kin-kaitori"
            relatedSlugs={["osaka-kin-kaitori", "kobe-kin-kaitori", "kyoto-kin-kaitori", "nagoya-kin-kaitori", "k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
