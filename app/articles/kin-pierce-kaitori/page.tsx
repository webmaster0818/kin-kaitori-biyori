import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u7247\u65b9\u3057\u304b\u306a\u3044\u30d4\u30a2\u30b9\u3067\u3082\u8cb7\u53d6\u3067\u304d\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3067\u3059\u3002\u696d\u8005\u306f\u91d1\u3068\u3057\u3066\u91cd\u91cf\u3067\u67fb\u5b9a\u3059\u308b\u305f\u3081\u3001\u30da\u30a2\u3067\u306a\u304f\u3066\u3082\u4fa1\u683c\u306f\u540c\u3058\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u53e4\u304f\u3066\u5909\u8272\u3057\u3066\u3044\u308b\u30d4\u30a2\u30b9\u3067\u3082\u58f2\u308c\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u58f2\u308c\u307e\u3059\u3002\u8868\u9762\u306e\u5909\u8272\u306f\u8cb7\u53d6\u4fa1\u683c\u306b\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5b50\u4f9b\u7528\u306e\u5c0f\u3055\u3044\u30d4\u30a2\u30b9\u3067\u3082\u67fb\u5b9a\u5bfe\u8c61\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5bfe\u8c61\u3067\u3059\u30021g\u672a\u6e80\u3067\u3082\u91d1\u3068\u3057\u3066\u67fb\u5b9a\u53ef\u80fd\u3002\u8907\u6570\u307e\u3068\u3081\u308b\u3068\u52b9\u7387\u7684\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u30e1\u30c3\u30ad\u30d4\u30a2\u30b9\uff08K18GP\uff09\u306f\u8cb7\u53d6\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91d1\u542b\u6709\u91cf\u304c\u6975\u3081\u3066\u5c11\u306a\u3044\u305f\u3081\u3001\u307b\u3068\u3093\u3069\u306e\u696d\u8005\u3067\u8cb7\u53d6\u4e0d\u53ef\u307e\u305f\u306f\u6570\u5341\u5186\u7a0b\u5ea6\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u58ca\u308c\u305f\u30d4\u30a2\u30b9\uff08\u91dd\u304c\u66f2\u304c\u3063\u305f\u7b49\uff09\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u554f\u984c\u306a\u304f\u8cb7\u53d6\u53ef\u3002\u7d20\u6750\u3068\u3057\u3066\u306e\u4fa1\u5024\u3067\u5224\u65ad\u3059\u308b\u305f\u3081\u3001\u5f62\u72b6\u306f\u95a2\u4fc2\u3042\u308a\u307e\u305b\u3093\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金のピアス買取相場｜片方紛失・小さいピアスでも売れるコツ",
  description: "金のピアス（K18・K10等）の買取相場、片方なくしてしまった場合・小さくて軽い場合の買取可否、ブランドピアスの売り方を完全解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金のピアスの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金のピアスの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">金ピアス買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金のピアス買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>金のピアスは小ぶりで軽いことが多く、「売れるの？」と不安に思う方も多いはず。本記事で、片方紛失でも売れる方法、相場、高く売るコツを徹底解説します。</p>

          <h2>1. 金のピアスの買取価格の決まり方</h2>
          <p>純度 × 重量 × 金相場 - 業者手数料</p>
          <ul>
            <li>K18（純度75%）の場合: 1g約19,000〜25,000円（2026年5月時点）</li>
            <li>K10（純度41.67%）の場合: 1g約11,000〜14,000円</li>
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
          <RelatedArticles
            currentSlug="kin-pierce-kaitori"
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "daikichi-vs-nanboya", "kin-bracelet-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
