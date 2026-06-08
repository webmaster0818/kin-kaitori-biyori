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
      { "@type": "ListItem", position: 3, name: "金の税金・法律", item: "https://gold-biyori.com/articles/kin-200man-mynumber/" },
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
    headline: "【2026年最新】金の200万円超売却時のマイナンバー提出義務｜法律と業者対応を完全解説",
    description: "金200万円超の売却時に必要なマイナンバー提出義務（犯罪収益移転防止法）。提出を避ける方法はあるか、業者の対応、確定申告との関係を徹底解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u3092\u63d0\u51fa\u3057\u305f\u304f\u306a\u3044\u5834\u5408\u3001\u58f2\u308c\u306a\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"200\u4e07\u5186\u8d85\u306e\u53d6\u5f15\u306f\u3067\u304d\u307e\u305b\u3093\u3002200\u4e07\u5186\u4ee5\u4e0b\u306b\u5206\u5272\u3059\u308b\u304b\u3001\u63d0\u51fa\u306b\u540c\u610f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u63d0\u51fa\u5f8c\u306b\u7a0e\u91d1\u304c\u304b\u304b\u308b\u306e\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u63d0\u51fa\u81ea\u4f53\u306f\u7a0e\u91d1\u3068\u306f\u5225\u3002\u8b72\u6e21\u76ca\u304c\u5e74\u959350\u4e07\u5186\u8d85\u306a\u3089\u78ba\u5b9a\u7533\u544a\u304c\u5fc5\u8981\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5bb6\u65cf\u8907\u6570\u306e\u540d\u7fa9\u3067\u58f2\u5374\u3059\u308c\u3070\u56de\u907f\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5b9f\u969b\u306e\u6240\u6709\u8005\u304c\u7570\u306a\u308b\u5834\u5408\u306f\u5408\u6cd5\u3002\u6240\u6709\u8005\u304c\u540c\u4e00\u4eba\u7269\u306a\u306e\u306b\u540d\u7fa9\u5909\u3048\u306f\u8131\u7a0e\u30ea\u30b9\u30af\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u901a\u77e5\u30ab\u30fc\u30c9\u3067\u3082\u3044\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u696d\u8005\u306b\u3088\u308a\u5bfe\u5fdc\u304c\u7570\u306a\u308b\u3002\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u30ab\u30fc\u30c9\uff08\u9854\u5199\u771f\u4ed8\u304d\uff09\u304c\u78ba\u5b9f\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u8907\u6570\u56de\u306b\u5206\u3051\u3066\u58f2\u308b\u5834\u5408\u306e\u696d\u8005\u306e\u5bfe\u5fdc\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u540c\u3058\u696d\u8005\u3067\u77ed\u671f\u9593\u306b\u8907\u6570\u56de = \u5408\u7b97\u5224\u65ad\u3055\u308c\u308b\u53ef\u80fd\u6027\u3042\u308a\u3002\u4e8b\u524d\u306b\u696d\u8005\u3078\u78ba\u8a8d\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の200万円超売却時のマイナンバー提出義務｜法律と業者対応を完全解説",
  description: "金200万円超の売却時に必要なマイナンバー提出義務（犯罪収益移転防止法）。提出を避ける方法はあるか、業者の対応、確定申告との関係を徹底解説。",
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
            <li><span className="text-foreground">金の税金・法律</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金200万円超売却時のマイナンバー提出義務｜法令と注意点</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>金製品を<strong>1回の取引で200万円超</strong>売却する場合、業者は犯罪収益移転防止法に基づき、お客様にマイナンバー（個人番号）の提出を求める必要があります。本記事で詳細を解説。</p>

          <h2>1. 200万円超でマイナンバーが必要な理由</h2>
          <p>「犯罪収益移転防止法」第4条の規定により、貴金属の200万円超の取引では業者に本人確認義務が課されます。マイナンバー（個人番号）の通知が必要です。</p>

          <h2>2. マイナンバー提出を避ける方法</h2>
          <p>下記の方法がありますが、いずれも法令準拠が前提:</p>
          <ul>
            <li><strong>2回に分けて売却</strong>: 100万円ずつ別日に売却（合法だが業者により規定あり）</li>
            <li><strong>異なる業者で売却</strong>: 各業者で200万円以下の取引にとどめる</li>
            <li><strong>家族で分担</strong>: 共有財産の場合、各人の名義で分割売却（法令を遵守）</li>
          </ul>

          <p>※注意：これらは「合法的に200万円以下にする」方法であって、脱税目的の意図的回避は法令違反のリスクがあります。</p>

          <h2>3. マイナンバー提出後の扱い</h2>
          <p>業者は税務署に取引報告書（支払調書）を提出します。これにより税務署が把握しますが、提出自体は法的義務であり脱税告発ではありません。</p>

          <h2>4. 確定申告との関係</h2>
          <p>マイナンバー提出が必要な売却 = 譲渡所得の確定申告が必要な可能性が高い。年間譲渡益が50万円超なら確定申告が必要（特別控除50万円）。</p>

          <h2>5. 200万円超売却時の流れ</h2>
          <ol>
            <li>業者が200万円超を確認</li>
            <li>本人確認書類（運転免許証等）+ マイナンバーカード（または通知カード）の提示</li>
            <li>業者が提出書類のコピーを取得</li>
            <li>業者が税務署へ支払調書を提出（取引日から翌月末まで）</li>
            <li>お客様も確定申告（年間50万円超の譲渡益の場合）</li>
          </ol>

          <h2>6. 提出書類の保管期間</h2>
          <p>業者は提出書類を取引日から7年間保管する義務があります。</p>

          <h2>7. よくある質問への対応</h2>
          <p>「マイナンバーは提出したくない」というご相談に対しては、業者は法令に従う必要があり、原則として提出なしでは200万円超の取引は不可です。</p>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>マイナンバーを提出したくない場合、売れない？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">200万円超の取引はできません。200万円以下に分割するか、提出に同意する必要があります。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>マイナンバー提出後に税金がかかるの？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">提出自体は税金とは別。譲渡益が年間50万円超なら確定申告が必要。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>家族複数の名義で売却すれば回避できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">実際の所有者が異なる場合は合法。所有者が同一人物なのに名義変えは脱税リスク。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>マイナンバー通知カードでもいい？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">業者により対応が異なる。マイナンバーカード（顔写真付き）が確実。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>複数回に分けて売る場合の業者の対応は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">同じ業者で短期間に複数回 = 合算判断される可能性あり。事前に業者へ確認。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="howto" />
          <RelatedArticles
            currentSlug="kin-200man-mynumber"
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-kaitori-zeikin", "kin-kakutei-shinkoku", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-kaitori-hajimete", "daikichi-vs-nanboya", "tentou-vs-takuhai", "tokyo-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
