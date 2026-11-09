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
    description: "金地金・金貨を200万円超で売るときのマイナンバー告知義務（所得税法・支払調書。犯罪収益移転防止法ではありません）。業者の対応、確定申告との関係を解説します。",
    datePublished: "2026-05-18",
    dateModified: "2026-11-09",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"マイナンバーを提出したくない場合、売れない？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"200万円超の取引はできません。200万円以下に分割するか、提出に同意する必要があります。\"}}, {\"@type\": \"Question\", \"name\": \"マイナンバー提出後に税金がかかるの？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"提出自体は税金とは別。譲渡益が年間50万円超なら確定申告が必要。\"}}, {\"@type\": \"Question\", \"name\": \"家族複数の名義で売却すれば回避できる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"実際の所有者が異なる場合は合法。所有者が同一人物なのに名義変えは脱税リスク。\"}}, {\"@type\": \"Question\", \"name\": \"マイナンバー通知カードでもいい？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"通知カードは令和2年5月25日に廃止されていますが、記載の氏名・住所などが住民票と一致している場合に限り、番号確認書類として使えます（国税庁）。一致しない場合は番号付きの住民票の写しかマイナンバーカードを使います。\"}}, {\"@type\": \"Question\", \"name\": \"複数回に分けて売る場合の業者の対応は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"同じ業者で短期間に複数回 = 合算判断される可能性あり。事前に業者へ確認。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】金の200万円超売却時のマイナンバー提出義務｜法律と業者対応を完全解説",
  description: "金地金・金貨を200万円超で売るときのマイナンバー告知義務（所得税法・支払調書。犯罪収益移転防止法ではありません）。業者の対応、確定申告との関係を解説します。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-200man-mynumber/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金製品の買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
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
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-mynumber.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-mynumber-m.webp)" }}>
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
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p><strong>金地金・白金地金・金貨・白金貨</strong>（国税庁のいう「金地金等」）を買取業者に売り、<strong>200万円超</strong>の代金を受け取る場合、売主は氏名・住所・マイナンバー（個人番号）を業者に告知し、業者は税務署へ支払調書を提出します。根拠は<strong>所得税法</strong>（224条の6・225条）で、犯罪収益移転防止法ではありません（2026年11月9日に国税庁・e-Gov法令検索で確認）。本記事で詳細を解説。</p>

          <h2>1. 200万円超でマイナンバーが必要な理由</h2>
          <p>マイナンバーが必要になるのは、<strong>所得税法の「金地金等の譲渡の対価の支払調書」</strong>のためです。金地金等の売買を業として行う者が、国内で金地金等の譲渡を受けて200万円超の対価を支払うときは、税務署へ支払調書を提出する義務があります（平成24年1月から。<a href="https://www.nta.go.jp/information/release/kokuzeicho/2015/shotoku_shohi/sanko04_05.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">国税庁</a>）。売主には、支払を受ける時までに氏名・住所・個人番号を業者へ告知する義務があり、業者は住民票の写しなどの書類でそれを確認します（所得税法224条の6・225条1項14号。<a href="https://laws.e-gov.go.jp/law/340AC0000000033" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">e-Gov法令検索</a>）。</p>
          <p>対象は国税庁の説明する<strong>金・白金の地金と金貨・白金貨</strong>です。ネックレス・指輪などのジュエリーはこの4種に挙がっていないため、扱いは売却先にご確認ください。</p>
          <p>なお、犯罪収益移転防止法は、<strong>代金を現金で200万円超</strong>支払う宝石・貴金属等の売買で、業者に取引時確認（本人確認）を求める法律です（<a href="https://www.npa.go.jp/sosikihanzai/jafic/hourei/data/hougaiyou20240401.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">警察庁JAFIC 法令の概要</a>）。本人確認の根拠であって、マイナンバーの根拠ではありません。</p>

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
            <li>本人確認書類（運転免許証等）+ マイナンバーカード（または番号付きの住民票の写し。通知カードは氏名・住所が住民票と一致する場合に限る）の提示</li>
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
  <p className="mt-3 text-sm leading-relaxed">通知カードは令和2年5月25日に廃止されていますが、記載の氏名・住所などが住民票と一致している場合に限り、番号確認書類として使えます（<a href="https://www.nta.go.jp/taxes/tetsuzuki/mynumberinfo/honninkakunin/shorui.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-accent underline">国税庁</a>）。一致しない場合は番号付きの住民票の写しかマイナンバーカードを使います。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>複数回に分けて売る場合の業者の対応は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">同じ業者で短期間に複数回 = 合算判断される可能性あり。事前に業者へ確認。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="howto" />
          <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
          <RelatedArticles
            currentSlug="kin-200man-mynumber"
            relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-kaitori-zeikin", "kin-kakutei-shinkoku", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-kaitori-hajimete", "daikichi-vs-nanboya", "tentou-vs-takuhai", "tokyo-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
