import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金を相場通りに売るには？", item: "https://gold-biyori.com/articles/kin-kaitori-soubadori/" },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article",
    headline: "金を相場通りに売るには？｜手取りを相場に近づけるコツ", description: "金を相場通りに高く売るコツを解説。買取単価と地金相場の差（業者マージン）を理解し、手取りを最大化する方法を紹介します。",
    datePublished: "2026-06-05", dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "買取価格が相場より低いのはなぜ？", acceptedAnswer: { "@type": "Answer", text: "業者の利益（マージン）が差し引かれるためです。マージンの小さい業者を選べば手取りが増えます。" } },
      { "@type": "Question", name: "手取りを増やすには？", acceptedAnswer: { "@type": "Answer", text: "一括査定で単価の高い業者を探し、まとめ売りで交渉するのが効果的です。" } },
      { "@type": "Question", name: "どこが相場に近いですか？", acceptedAnswer: { "@type": "Answer", text: "御徒町など専門業者は相場に近い傾向があります。複数比較が確実です。" } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "金を相場通りに売るには？｜手取りを相場に近づけるコツ",
  description: "金を相場通りに高く売るコツを解説。買取単価と地金相場の差（業者マージン）を理解し、手取りを最大化する方法を紹介します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">相場通りに売るにはの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社を比較して最高値を狙いましょう。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriSoubadoriPage() {
  return (
    <>
      <FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金を相場通りに売るには？</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="【2026年最新】金を相場通りに売るには？" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金を相場通りに売るには？</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>「相場はこの値段なのに、なぜ買取額は低いの？」——業者のマージンの仕組みを知れば、手取りを相場に近づけられます。</p>
        <h2>ポイント</h2>
        <ul>
          <li>買取単価＝地金相場−業者マージン</li>
          <li>マージンの小さい業者・まとめ売りで手取りが伸びる</li>
          <li>一括査定で最も高い単価を探す</li>
        </ul>
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "買取価格が相場より低いのはなぜ？",
              a: "業者の利益（マージン）が差し引かれるためです。マージンの小さい業者を選べば手取りが増えます。",
            },
            {
              q: "手取りを増やすには？",
              a: "一括査定で単価の高い業者を探し、まとめ売りで交渉するのが効果的です。",
            },
            {
              q: "どこが相場に近いですか？",
              a: "御徒町など専門業者は相場に近い傾向があります。複数比較が確実です。",
            },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
        <GoldPriceTrend />
        <ExpertQA category="howto" />
        <RelatedArticles currentSlug="kin-kaitori-soubadori" relatedSlugs={["kin-spot-vs-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "ikkatsu-satei-hikaku", "kaitori-houhou-hikaku", "kin-bracelet-kaitori"]} />
        <DealerComparisonTable heading="相場通りに売るにはの買取で使える主要サービス比較" intro="公式情報をもとに金買取サービスを比較しました。" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
