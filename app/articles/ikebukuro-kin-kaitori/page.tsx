import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
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
      { "@type": "ListItem", position: 3, name: "池袋・金買取", item: "https://gold-biyori.com/articles/ikebukuro-kin-kaitori/" },
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
    headline: "【2026年最新】池袋の金買取おすすめ｜大手7店舗の特徴と相場比較",
    description: "池袋エリアで金を高く売るための業者比較ガイド。サンシャイン通り・西口・東口の主要店舗、出張・宅配対応、相場の見方を完全解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u6c60\u888b\u3067\u571f\u65e5\u3067\u3082\u91d1\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u591a\u304f\u306e\u5927\u624b\u696d\u8005\uff08\u5927\u9ed2\u5c4b\u3001\u306a\u3093\u307c\u3084\u3001\u5927\u5409\u7b49\uff09\u306f\u571f\u65e5\u3082\u55b6\u696d\u3002\u4e8b\u524d\u306b\u55b6\u696d\u6642\u9593\u3092\u78ba\u8a8d\u63a8\u5968\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u6c60\u888b\u306e\u91d1\u8cb7\u53d6\u3067\u4e00\u756a\u9ad8\u3044\u696d\u8005\u306f\u3069\u3053\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u696d\u8005\u306b\u3088\u308a\u5f97\u610f\u5206\u91ce\u304c\u7570\u306a\u308b\u305f\u3081\u4e00\u6982\u306b\u306f\u8a00\u3048\u307e\u305b\u3093\u3002\u4e00\u62ec\u67fb\u5b9a\uff08\u30d2\u30ab\u30ab\u30af\uff01\uff09\u3067\u8907\u6570\u6bd4\u8f03\u304c\u304a\u3059\u3059\u3081\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u6c60\u888b\u99c5\u304b\u3089\u5f92\u6b69\u4f55\u5206\u306e\u696d\u8005\u304c\u591a\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u6771\u53e35\u301c10\u5206\u570f\u5185\u306b\u5927\u624b\u96c6\u4e2d\u3002\u30b5\u30f3\u30b7\u30e3\u30a4\u30f3\u901a\u308a\u6cbf\u3044\u3068\u99c5\u8fd1\u306b\u5206\u6563\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u51fa\u5f35\u8cb7\u53d6\u3067\u6c60\u888b\u4ee5\u5916\u3082\u5bfe\u5fdc\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u591a\u304f\u306e\u696d\u8005\u304c\u90fd\u5185\u5168\u57df\u30fb\u9996\u90fd\u570f\u306b\u5bfe\u5fdc\u3002\u4e8b\u524d\u306b\u30a8\u30ea\u30a2\u78ba\u8a8d\u3092\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u8eab\u5206\u8a3c\u306f\u4f55\u304c\u5fc5\u8981\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53e4\u7269\u55b6\u696d\u6cd5\u306b\u3088\u308a\u672c\u4eba\u78ba\u8a8d\u304c\u5fc5\u8981\u3002\u904b\u8ee2\u514d\u8a31\u8a3c\u3001\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u30ab\u30fc\u30c9\u3001\u30d1\u30b9\u30dd\u30fc\u30c8\u306e\u3044\u305a\u308c\u304b\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】池袋の金買取おすすめ｜大手7店舗の特徴と相場比較",
  description: "池袋エリアで金を高く売るための業者比較ガイド。サンシャイン通り・西口・東口の主要店舗、出張・宅配対応、相場の見方を完全解説。",
  robots: { index: false, follow: true },
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
            <li><span className="text-foreground">池袋・金買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">池袋の金買取おすすめ店と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>池袋は東京都内でも金買取業者が集中するエリアです。サンシャインシティ周辺・西口・東口に主要店舗が点在し、競争が活発なため<strong>相場以上の買取が期待できる地域</strong>。</p>

          <h2>1. 池袋エリアの金買取事情</h2>
          <p>JR池袋駅は1日240万人以上が利用する東京北部最大のターミナル。富裕層も多く居住し、買取需要も活発です。</p>

          <h2>2. 池袋の主要金買取店</h2>
          <ul>
            <li><strong>大黒屋 池袋本店</strong>: 質屋系列、即現金化、JR東口5分</li>
            <li><strong>なんぼや 池袋店</strong>: ジュエリー専門査定、東口</li>
            <li><strong>ゴールドプラザ 池袋店</strong>: 金・プラチナ専門、東口</li>
            <li><strong>大吉 池袋本店</strong>: 全国700店舗、東口</li>
            <li><strong>買取大臣 池袋店</strong>: 西口、地域密着</li>
            <li><strong>ジュエルカフェ 池袋店</strong>: ハイブランド対応</li>
            <li><strong>リファスタ 池袋本店</strong>: 業界最高水準を謳う専門店</li>
          </ul>

          <h2>3. 店頭・出張・宅配の比較</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>方式</th><th>特徴</th><th>こんな人向け</th></tr></thead>
              <tbody>
                <tr><td>店頭</td><td>即現金化、対面交渉可</td><td>急いで売りたい人</td></tr>
                <tr><td>出張</td><td>自宅で査定、大量品向け</td><td>外出が難しい人</td></tr>
                <tr><td>宅配</td><td>全国対応、自分のペースで</td><td>時間に余裕がある人</td></tr>
              </tbody>
            </table>
          </div>

          <h2>4. 池袋で高く売る5つのコツ</h2>
          <ol>
            <li>東口・西口の複数業者で相見積もり</li>
            <li>金相場の高い日に売る</li>
            <li>身分証必須（古物営業法）</li>
            <li>付属品（箱・保証書）を揃える</li>
            <li>当日中の決定は不要、即決を求める業者は避ける</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋で土日でも金買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。多くの大手業者（大黒屋、なんぼや、大吉等）は土日も営業。事前に営業時間を確認推奨。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋の金買取で一番高い業者はどこ？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">業者により得意分野が異なるため一概には言えません。一括査定（ヒカカク！）で複数比較がおすすめ。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋駅から徒歩何分の業者が多い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">東口5〜10分圏内に大手集中。サンシャイン通り沿いと駅近に分散。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>出張買取で池袋以外も対応できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。多くの業者が都内全域・首都圏に対応。事前にエリア確認を。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>身分証は何が必要？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">古物営業法により本人確認が必要。運転免許証、マイナンバーカード、パスポートのいずれか。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="region" />
          <NearbyAreas pref="東京都" areas={[{ slug: "tokyo-kin-kaitori", label: "東京" }, { slug: "adachi-kin-kaitori", label: "足立区" }, { slug: "arakawa-kin-kaitori", label: "荒川区" }, { slug: "bunkyo-kin-kaitori", label: "文京区" }, { slug: "chiyoda-kin-kaitori", label: "千代田区" }, { slug: "chofu-kin-kaitori", label: "調布" }, { slug: "chuo-tokyo-kin-kaitori", label: "中央区" }, { slug: "edogawa-kin-kaitori", label: "江戸川区" }]} />
          <RelatedArticles
            currentSlug="ikebukuro-kin-kaitori"
            relatedSlugs={["tokyo-kin-kaitori", "ginza-kin-kaitori", "okachimachi-kin-kaitori", "omiya-kin-kaitori", "k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
