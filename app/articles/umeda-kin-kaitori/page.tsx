import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
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
    dateModified: "2026-10-12",
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
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "梅田と心斎橋、どちらが高く売れる？", acceptedAnswer: { "@type": "Answer", text: "業者ごとに得意分野や査定基準が異なるため、エリアで一概には言えません。梅田・心斎橋の両方で見積もりを取って比較するのがおすすめです。" } },
      { "@type": "Question", name: "梅田の買取店は何時まで営業？", acceptedAnswer: { "@type": "Answer", text: "店によって異なります。公式で確認できた梅田の3店では、ゴールドプラザ 大阪梅田本店が19時、大黒屋ブランド館 梅田店が19時30分、なんぼや 梅田本店が21時（最終受付20時30分）までです（2026年10月12日確認）。" } },
      { "@type": "Question", name: "梅田から出張買取は呼べる？", acceptedAnswer: { "@type": "Answer", text: "可能。ウリエルは公式の出張対応エリアに大阪府を含めています（一部対応できない市町村あり）。大阪に本社がある福ちゃんも出張買取を行っていますが、対応地域は公式サイトに記載がないため、申し込み時にご確認ください。" } },
      { "@type": "Question", name: "梅田で土日に利用できる店舗はありますか？", acceptedAnswer: { "@type": "Answer", text: "なんぼや 梅田本店（定休日なし）と大黒屋ブランド館 梅田店（年中無休・年末年始を除く）は土日も営業しています。ゴールドプラザ 大阪梅田本店は公式の店舗ページに定休日の記載がないため、来店前にご確認ください（2026年10月12日確認）。" } },
      { "@type": "Question", name: "地下街の業者と地上の業者の差は？", acceptedAnswer: { "@type": "Answer", text: "地下街は梅田駅から直結でアクセス良好、地上は店舗が広く落ち着いて査定可。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】梅田の金買取おすすめ｜大阪駅周辺の主要店舗と相場比較",
  description: "梅田・大阪駅周辺で金を高く売るための業者比較。JR大阪駅・阪急梅田・地下街の主要店舗、相場、出張・宅配の選び方を解説。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/umeda-kin-kaitori/" },
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">梅田・大阪駅の金買取おすすめ店と高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>梅田エリア（大阪駅・阪急梅田・阪神梅田）は関西最大の商業地区。買取業者の競争が激しく、<strong>相見積もりで高値が出やすい</strong>地域です。</p>

          <h2>1. 梅田エリアの金買取事情</h2>
          <p>大阪府の人口880万人の経済中心地。福ちゃん本社所在地、大手買取業者の関西本店が集中。</p>

          <h2>2. 梅田の主要金買取店</h2>
          <ul>
            <li><strong>福ちゃん</strong>: 本社は大阪市東成区（運営 株式会社REGATE）。公式の店舗一覧は全国11店舗で、大阪府内は豊中店（2026年10月11日確認。梅田に店舗はなし）</li>
            <li><strong>大黒屋ブランド館 梅田店</strong>: 大阪市北区芝田2-2-4 合同屋ビル1F（地下鉄梅田駅5番出口より徒歩2分・阪急大阪梅田駅 茶屋町口より徒歩3分）。10:30〜19:30、年中無休（年末年始を除く）。質預かり・買取の店で、金・プラチナ・記念金貨も取り扱い</li>
            <li><strong>なんぼや 梅田本店</strong>: 大阪市北区茶屋町1-27 ABC-MART梅田ビルB2F。10:00〜21:00（最終受付20:30）、定休日なし。ブランド品のほか金・貴金属も買取</li>
            <li><strong>ゴールドプラザ 大阪梅田本店</strong>: 大阪市北区梅田1-12-17 JRE梅田スクエアビル8F（JR大阪駅から徒歩3分）。10:00〜19:00（定休日は公式の店舗ページに記載なし）。金・プラチナ・ダイヤ・宝石のほか、ブランド品・時計も買取</li>
          </ul>
          <p>ジュエルカフェは公式の店舗一覧で大阪府内が堺市・富田林市の2店舗のみで、梅田に店舗はありません。</p>
          <p className="text-xs text-warm-gray">出典：<a href="https://shichi.e-daikoku.com/shop/umeda/" target="_blank" rel="noopener noreferrer nofollow">大黒屋ブランド館 梅田店</a>／<a href="https://nanboya.com/shop/osaka/umeda-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや 梅田本店</a>／<a href="https://goldplaza.jp/shop/osaka/" target="_blank" rel="noopener noreferrer nofollow">ゴールドプラザ 大阪梅田本店</a>／<a href="https://www.jewel-cafe.jp/shop/" target="_blank" rel="noopener noreferrer nofollow">ジュエルカフェ 店舗案内</a>（いずれも2026年10月12日確認）</p>

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
  <p className="mt-3 text-sm leading-relaxed">業者ごとに得意分野や査定基準が異なるため、エリアで一概には言えません。梅田・心斎橋の両方で見積もりを取って比較するのがおすすめです。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田の買取店は何時まで営業？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">店によって異なります。公式で確認できた梅田の3店では、ゴールドプラザ 大阪梅田本店が19時、大黒屋ブランド館 梅田店が19時30分、なんぼや 梅田本店が21時（最終受付20時30分）までです（2026年10月12日確認）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田から出張買取は呼べる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。ウリエルは公式の出張対応エリアに大阪府を含めています（一部対応できない市町村あり）。大阪に本社がある福ちゃんも出張買取を行っていますが、対応地域は公式サイトに記載がないため、申し込み時にご確認ください。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>梅田で土日に利用できる店舗はありますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">なんぼや 梅田本店（定休日なし）と大黒屋ブランド館 梅田店（年中無休・年末年始を除く）は土日も営業しています。ゴールドプラザ 大阪梅田本店は公式の店舗ページに定休日の記載がないため、来店前にご確認ください（2026年10月12日確認）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>地下街の業者と地上の業者の差は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">地下街は梅田駅から直結でアクセス良好、地上は店舗が広く落ち着いて査定可。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="region" />
          <NearbyAreas pref="大阪府" areas={[{ slug: "osaka-kin-kaitori", label: "大阪" }, { slug: "higashiosaka-kin-kaitori", label: "東大阪" }, { slug: "hirakata-kin-kaitori", label: "枚方" }, { slug: "ibaraki-osaka-kin-kaitori", label: "茨木" }, { slug: "ikeda-osaka-kin-kaitori", label: "池田" }, { slug: "izumi-osaka-kin-kaitori", label: "和泉" }, { slug: "kishiwada-kin-kaitori", label: "岸和田" }, { slug: "moriguchi-kin-kaitori", label: "守口" }]} />
          <RelatedArticles
            currentSlug="umeda-kin-kaitori"
            relatedSlugs={["osaka-kin-kaitori", "kobe-kin-kaitori", "kyoto-kin-kaitori", "nagoya-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
