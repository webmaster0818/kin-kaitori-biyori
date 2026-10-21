import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

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
      { "@type": "ListItem", position: 3, name: "金ピアス買取", item: "https://gold-biyori.com/articles/kin-pierce-kaitori/" },
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
    headline: "【2026年最新】金のピアス買取相場｜片方紛失・小さいピアスでも売れるコツ",
    description: "金のピアス（K18・K10等）の買取相場、片方なくしてしまった場合・小さくて軽い場合の買取可否、ブランドピアスの売り方を完全解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"片方しかないピアスでも買取できますか？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能です。業者は金として重量で査定するため、ペアでなくても価格は同じ。\"}}, {\"@type\": \"Question\", \"name\": \"古くて変色しているピアスでも売れる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"売れます。表面の変色は買取価格に影響しません。\"}}, {\"@type\": \"Question\", \"name\": \"子供用の小さいピアスでも査定対象？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"対象です。1g未満でも金として査定可能。複数まとめると効率的。\"}}, {\"@type\": \"Question\", \"name\": \"メッキピアス（K18GP）は買取できる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"金含有量が極めて少ないため、ほとんどの業者で買取不可または数十円程度。\"}}, {\"@type\": \"Question\", \"name\": \"壊れたピアス（針が曲がった等）は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"問題なく買取可。素材としての価値で判断するため、形状は関係ありません。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】金のピアス買取相場｜片方紛失・小さいピアスでも売れるコツ",
  description: "金のピアス（K18・K10等）の買取相場、片方なくしてしまった場合・小さくて軽い場合の買取可否、ブランドピアスの売り方を完全解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-pierce-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金のピアスの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金のピアスの買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
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
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-pierce.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-pierce-m.webp)" }}>
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金ピアス買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金のピアス買取相場と高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>金のピアスは小ぶりで軽いことが多く、「売れるの？」と不安に思う方も多いはず。本記事で、片方紛失でも売れる方法、相場、高く売るコツを解説します。</p>

          <h2>1. 金のピアスの買取価格の決まり方</h2>
          <p>純度 × 重量 × 金相場 - 業者手数料</p>
          <ul>
            <li>K18（純度75%）の場合: 1g約{_gy(_GP.k18)}円（{GP_DATE}時点の目安・毎朝更新）</li>
            <li>K10（純度41.67%）の場合: 1g約{_gy(_GP.k10)}円</li>
            <li>ピアスの平均重量: 1g前後（片耳）〜3g（ペア）</li>
          </ul>

          <h2>2. 片方紛失した場合</h2>
          <p><strong>片方だけでも問題なく買取可能</strong>です。業者は金として重量で査定するため、ペアが揃っていなくても価格は変わりません。</p>

          <h2>3. 小さい・軽いピアスの買取</h2>
          <p>0.5g未満の超軽量ピアスでも査定可。ただし買取額は数千円程度の場合あり。複数まとめて売却すると手間が見合います。</p>

          <h2>4. ブランドピアスの場合</h2>
          <p>地金価値 + ブランドプレミアム = 買取額。</p>
          <ul>
            <li><Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ</Link> LOVE: 5〜15万円</li>
            <li><Link href="/articles/tiffany-kaitori/" className="text-accent hover:underline">ティファニー</Link> オープンハート: 1〜5万円</li>
            <li><Link href="/articles/vancleef-kaitori/" className="text-accent hover:underline">ヴァンクリーフ</Link> アルハンブラ: 8〜25万円</li>
          </ul>

          <h2>5. 金ピアスを高く売る5つのコツ</h2>
          <ol>
            <li>片方紛失でも諦めず売る</li>
            <li>複数ピアスをまとめて売却</li>
            <li>ブランド品は保証書・箱を揃える</li>
            <li>金相場の高い日に売る</li>
            <li>複数業者で相見積もり</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>片方しかないピアスでも買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能です。業者は金として重量で査定するため、ペアでなくても価格は同じ。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>古くて変色しているピアスでも売れる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">売れます。表面の変色は買取価格に影響しません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>子供用の小さいピアスでも査定対象？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">対象です。1g未満でも金として査定可能。複数まとめると効率的。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>メッキピアス（K18GP）は買取できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">金含有量が極めて少ないため、ほとんどの業者で買取不可または数十円程度。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>壊れたピアス（針が曲がった等）は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">問題なく買取可。素材としての価値で判断するため、形状は関係ありません。</p>
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
          <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
          <RelatedArticles
            currentSlug="kin-pierce-kaitori"
            relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "daikichi-vs-nanboya", "kin-bracelet-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
