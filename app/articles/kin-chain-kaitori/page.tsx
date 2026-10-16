import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

/* 重量×金額の例: 日次の純度換算値から毎朝再計算（田中貴金属の公表値ベース） */
const _GP = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const GP_DATE = `${Number(goldData.date.split("-")[1])}月${Number(goldData.date.split("-")[2])}日`;
const _gy = (n: number) => Math.round(n).toLocaleString();
const _gm = (n: number) => Math.round(n / 10000).toLocaleString();


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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"切れた金チェーンは買取できる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能です。重量で査定するため、切れた場所は関係ありません。\"}}, {\"@type\": \"Question\", \"name\": \"絡まったチェーンは解いてから売るべき？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"不要。無理に解くと切れる可能性が増えるため、絡まったまま業者へ。査定額は変わりません。\"}}, {\"@type\": \"Question\", \"name\": \"メンズ太チェーンの平均買取額は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"重量による。K18喜平30gで約" + _gm(_GP.k18 * 30) + "万円が目安（" + GP_DATE + "時点）。詳細は重量と相場による。\"}}, {\"@type\": \"Question\", \"name\": \"プレート・トップなしのチェーンだけでも売れる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"問題なく売れます。チェーン本体の重量で査定。\"}}, {\"@type\": \"Question\", \"name\": \"金メッキのチェーンは？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"純度が低く、ほとんどの業者で買取対象外または数十円程度。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】金のチェーン買取相場｜切れた・絡まったチェーンでも高く売る方法",
  description: "金のネックレスチェーン（K18・K10等）の買取相場、切れた・絡まった・歪んだチェーンでも売れるか、メンズチェーンの相場、高く売るコツを完全解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-chain-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金のチェーンの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金のチェーンの買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
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
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>金のチェーンネックレスは絡まりや切れがあっても買取可能。本記事で、相場、形状トラブルへの対応、高く売るコツを解説します。</p>

          <h2>1. 金チェーンの買取価格</h2>
          <p>純度×重量×金相場 - 業者手数料</p>
          <ul>
            <li>K18（純度75%）の場合: 1gあたり 約{_gy(_GP.k18)}円（{GP_DATE}時点の目安・毎朝更新）</li>
            <li>K14（純度58.5%）の場合: 1gあたり 約{_gy(_GP.k14)}円</li>
            <li>K10（純度41.67%）の場合: 1gあたり 約{_gy(_GP.k10)}円</li>
            <li>チェーン平均重量: 5〜30g（細チェーン〜メンズ太チェーン）</li>
          </ul>

          <h2>2. 切れた・絡まったチェーンも買取可</h2>
          <p>業者は金として重量で査定するため、形状不問。<strong>切れたチェーン、絡まって解けないチェーン、ぐちゃぐちゃのチェーンでも問題なく買取</strong>されます。</p>

          <h2>3. メンズ太チェーンの相場</h2>
          <ul>
            <li>K18 喜平 10g: 約{_gm(_GP.k18 * 10)}万円</li>
            <li>K18 喜平 30g: 約{_gm(_GP.k18 * 30)}万円</li>
            <li>K18 喜平 50g: 約{_gm(_GP.k18 * 50)}万円</li>
            <li>K24 純金チェーン 20g: 約{_gm(_GP.k24 * 20)}万円</li>
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
  <p className="mt-3 text-sm leading-relaxed">重量による。K18喜平30gで約{_gm(_GP.k18 * 30)}万円が目安（{GP_DATE}時点）。詳細は重量と相場による。</p>
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
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
          <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット（喜平・テニス）</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
          <RelatedArticles
            currentSlug="kin-chain-kaitori"
            relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-necklace-kaitori", "kin-bracelet-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "kin-yubiwa-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
