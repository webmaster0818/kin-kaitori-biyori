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
      { "@type": "ListItem", position: 3, name: "金チェーン買取", item: "https://gold-biyori.com/articles/kin-chain-kaitori/" },
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
    headline: "【2026年最新】金のチェーン買取相場｜切れた・絡まったチェーンでも高く売る方法",
    description: "金のネックレスチェーン（K18・K10等）の買取相場、切れた・絡まった・歪んだチェーンでも売れるか、メンズチェーンの相場、高く売るコツを完全解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u5207\u308c\u305f\u91d1\u30c1\u30a7\u30fc\u30f3\u306f\u8cb7\u53d6\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3067\u3059\u3002\u91cd\u91cf\u3067\u67fb\u5b9a\u3059\u308b\u305f\u3081\u3001\u5207\u308c\u305f\u5834\u6240\u306f\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u7d61\u307e\u3063\u305f\u30c1\u30a7\u30fc\u30f3\u306f\u89e3\u3044\u3066\u304b\u3089\u58f2\u308b\u3079\u304d\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u4e0d\u8981\u3002\u7121\u7406\u306b\u89e3\u304f\u3068\u5207\u308c\u308b\u53ef\u80fd\u6027\u304c\u5897\u3048\u308b\u305f\u3081\u3001\u7d61\u307e\u3063\u305f\u307e\u307e\u696d\u8005\u3078\u3002\u67fb\u5b9a\u984d\u306f\u5909\u308f\u308a\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30e1\u30f3\u30ba\u592a\u30c1\u30a7\u30fc\u30f3\u306e\u5e73\u5747\u8cb7\u53d6\u984d\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91cd\u91cf\u306b\u3088\u308b\u3002K18\u559c\u5e7330g\u3067\u7d0460\u4e07\u5186\u304c\u76ee\u5b89\u3002\u8a73\u7d30\u306f\u91cd\u91cf\u3068\u76f8\u5834\u306b\u3088\u308b\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30d7\u30ec\u30fc\u30c8\u30fb\u30c8\u30c3\u30d7\u306a\u3057\u306e\u30c1\u30a7\u30fc\u30f3\u3060\u3051\u3067\u3082\u58f2\u308c\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u554f\u984c\u306a\u304f\u58f2\u308c\u307e\u3059\u3002\u30c1\u30a7\u30fc\u30f3\u672c\u4f53\u306e\u91cd\u91cf\u3067\u67fb\u5b9a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u91d1\u30e1\u30c3\u30ad\u306e\u30c1\u30a7\u30fc\u30f3\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u7d14\u5ea6\u304c\u4f4e\u304f\u3001\u307b\u3068\u3093\u3069\u306e\u696d\u8005\u3067\u8cb7\u53d6\u5bfe\u8c61\u5916\u307e\u305f\u306f\u6570\u5341\u5186\u7a0b\u5ea6\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金のチェーン買取相場｜切れた・絡まったチェーンでも高く売る方法",
  description: "金のネックレスチェーン（K18・K10等）の買取相場、切れた・絡まった・歪んだチェーンでも売れるか、メンズチェーンの相場、高く売るコツを完全解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金のチェーンの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金のチェーンの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">金チェーン買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金のチェーン買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>金のチェーンネックレスは絡まりや切れがあっても買取可能。本記事で、相場、形状トラブルへの対応、高く売るコツを解説します。</p>

          <h2>1. 金チェーンの買取価格</h2>
          <p>純度×重量×金相場 - 業者手数料</p>
          <ul>
            <li>K18（純度75%）の場合: 1gあたり 約19,000〜25,000円</li>
            <li>K14（純度58.5%）の場合: 1gあたり 約15,000〜18,000円</li>
            <li>K10（純度41.67%）の場合: 1gあたり 約11,000〜14,000円</li>
            <li>チェーン平均重量: 5〜30g（細チェーン〜メンズ太チェーン）</li>
          </ul>

          <h2>2. 切れた・絡まったチェーンも買取可</h2>
          <p>業者は金として重量で査定するため、形状不問。<strong>切れたチェーン、絡まって解けないチェーン、ぐちゃぐちゃのチェーンでも問題なく買取</strong>されます。</p>

          <h2>3. メンズ太チェーンの相場</h2>
          <ul>
            <li>K18 喜平 10g: 約20万円</li>
            <li>K18 喜平 30g: 約60万円</li>
            <li>K18 喜平 50g: 約100万円</li>
            <li>K24 純金チェーン 20g: 約56万円</li>
          </ul>

          <h2>4. 金チェーンを高く売る5つのコツ</h2>
          <ol>
            <li>切れていても・絡まっていても売る</li>
            <li>無理に解こうとせず業者に渡す</li>
            <li>複数チェーンまとめて売却</li>
            <li>金相場の高い日に売る</li>
            <li>金専門業者で査定（手数料率が低い）</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>切れた金チェーンは買取できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能です。重量で査定するため、切れた場所は関係ありません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>絡まったチェーンは解いてから売るべき？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">不要。無理に解くと切れる可能性が増えるため、絡まったまま業者へ。査定額は変わりません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>メンズ太チェーンの平均買取額は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">重量による。K18喜平30gで約60万円が目安。詳細は重量と相場による。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>プレート・トップなしのチェーンだけでも売れる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">問題なく売れます。チェーン本体の重量で査定。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>金メッキのチェーンは？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">純度が低く、ほとんどの業者で買取対象外または数十円程度。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="product" />
          <RelatedArticles
            currentSlug="kin-chain-kaitori"
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-necklace-kaitori", "kin-bracelet-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "kin-yubiwa-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
