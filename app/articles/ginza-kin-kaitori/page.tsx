import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "銀座・金買取", item: "https://gold-biyori.com/articles/ginza-kin-kaitori/" },
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
    headline: "【2026年最新】銀座の金買取おすすめ｜ハイブランド対応・富裕層向け店舗を厳選",
    description: "銀座エリアの金買取は富裕層・コレクター向け。ハイブランドジュエリー、希少金製品の専門業者、銀座中央通り・並木通り周辺の店舗を比較解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u9280\u5ea7\u306f\u4ed6\u306e\u30a8\u30ea\u30a2\u3088\u308a\u9ad8\u304f\u58f2\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u30cf\u30a4\u30d6\u30e9\u30f3\u30c9\u30fb\u9ad8\u984d\u54c1\u306f\u9280\u5ea7\u304c\u6709\u5229\u306a\u50be\u5411\u3002\u5c02\u9580\u77e5\u8b58\u306e\u9ad8\u3044\u67fb\u5b9a\u58eb\u3001\u5c02\u9580\u696d\u8005\u306e\u96c6\u4e2d\u3067\u9069\u6b63\u8a55\u4fa1\u304c\u671f\u5f85\u3067\u304d\u308b\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u9280\u5ea7\u306e\u8cb7\u53d6\u5e97\u306f\u4e88\u7d04\u304c\u5fc5\u8981\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u9ad8\u984d\u54c1\u306e\u5834\u5408\u3001\u5c02\u9580\u67fb\u5b9a\u58eb\u306e\u4e8b\u524d\u4e88\u7d04\u304c\u304a\u3059\u3059\u3081\u3002\u4e00\u822c\u54c1\u306f\u4e88\u7d04\u306a\u3057\u3067\u5bfe\u5fdc\u53ef\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u9280\u5ea7\u306e\u99c5\u304b\u3089\u5f92\u6b69\u4f55\u5206\u306e\u696d\u8005\u304c\u591a\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u9280\u5ea7\u99c5\u30fb\u6709\u697d\u753a\u99c5\u30fb\u6771\u9280\u5ea7\u99c5\u304b\u3089\u5f92\u6b695\u301c10\u5206\u570f\u5185\u306b\u96c6\u4e2d\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5c11\u91cf\u3067\u3082\u8cb7\u53d6\u3057\u3066\u304f\u308c\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u91d11g\u5358\u4f4d\u304b\u3089\u67fb\u5b9a\u5bfe\u5fdc\u3002\u305f\u3060\u3057\u9ad8\u984d\u91d1\u88fd\u54c1\u304c\u5f97\u610f\u306a\u696d\u8005\u304c\u591a\u3044\u305f\u3081\u3001\u5c11\u91cf\u306a\u3089\u4e00\u62ec\u67fb\u5b9a\u7d4c\u7531\u304c\u304a\u3059\u3059\u3081\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u9280\u5ea7\u30a8\u30ea\u30a2\u306e\u67fb\u5b9a\u6599\u30fb\u51fa\u5f35\u6599\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u307b\u307c\u5168\u696d\u8005\u3067\u7121\u6599\u3002\u30ad\u30e3\u30f3\u30bb\u30eb\u6599\u3082\u7121\u6599\u304c\u4e00\u822c\u7684\u3002\u4e8b\u524d\u306bHP\u3067\u78ba\u8a8d\u3092\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】銀座の金買取おすすめ｜ハイブランド対応・富裕層向け店舗を厳選",
  description: "銀座エリアの金買取は富裕層・コレクター向け。ハイブランドジュエリー、希少金製品の専門業者、銀座中央通り・並木通り周辺の店舗を比較解説。",
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
            <li><span className="text-foreground">銀座・金買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">銀座の金買取おすすめ店と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>銀座エリアは日本屈指のブランドジュエリー街。<strong>高額品・希少品の買取に強い専門業者</strong>が集中し、ハリーウィンストン、カルティエ、ヴァンクリーフ等の<strong>ハイブランド金製品の最高値買取</strong>が期待できます。</p>

          <h2>1. 銀座エリアの金買取事情</h2>
          <p>世界的ブランドフラッグシップが並ぶ商業地区。富裕層・経営者・コレクターが集まり、買取側も<strong>専門知識の高い査定士</strong>を配置しています。</p>

          <h2>2. 銀座の主要金買取店</h2>
          <ul>
            <li><strong>なんぼや 銀座本店</strong>: ハイブランドジュエリーの最大手、中央通り</li>
            <li><strong>コメ兵 銀座店</strong>: ブランド時計・ジュエリー専門</li>
            <li><strong>ゴールドプラザ 銀座店</strong>: 金・プラチナ専門、中央通り</li>
            <li><strong>大黒屋 銀座本店</strong>: 質屋系列、即現金化</li>
            <li><strong>リファスタ 銀座店</strong>: 業界最高水準査定</li>
            <li><strong>おたからや 銀座店</strong>: 全国700店舗ネットワーク</li>
          </ul>

          <h2>3. 銀座で高額買取が期待できる金製品</h2>
          <ul>
            <li>ハイブランドジュエリー（ハリーウィンストン、グラフ、ブシュロン等）</li>
            <li>K22・K24の純度高め金</li>
            <li>金時計（ロレックス、パテック・フィリップ等の18金無垢）</li>
            <li>アンティーク金製品・古銭</li>
            <li>K18WG/PG/YGの大粒ダイヤモンドジュエリー</li>
          </ul>

          <h2>4. 銀座で高く売る5つのコツ</h2>
          <ol>
            <li>ハイブランド専門業者を選ぶ（一般リサイクル店は避ける）</li>
            <li>保証書・鑑定書・箱を揃える</li>
            <li>複数業者で相見積もり</li>
            <li>金相場の高い時期を狙う</li>
            <li>当日中の決定は急がない、複数オファー比較が鉄則</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座は他のエリアより高く売れますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ハイブランド・高額品は銀座が有利な傾向。専門知識の高い査定士、専門業者の集中で適正評価が期待できる。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座の買取店は予約が必要？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">高額品の場合、専門査定士の事前予約がおすすめ。一般品は予約なしで対応可。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座の駅から徒歩何分の業者が多い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">銀座駅・有楽町駅・東銀座駅から徒歩5〜10分圏内に集中。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>少量でも買取してくれますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。金1g単位から査定対応。ただし高額金製品が得意な業者が多いため、少量なら一括査定経由がおすすめ。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座エリアの査定料・出張料は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ほぼ全業者で無料。キャンセル料も無料が一般的。事前にHPで確認を。</p>
</details>

          <RelatedArticles
            currentSlug="ginza-kin-kaitori"
            relatedSlugs={["tokyo-kin-kaitori", "okachimachi-kin-kaitori", "ikebukuro-kin-kaitori", "yokohama-kin-kaitori", "k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
