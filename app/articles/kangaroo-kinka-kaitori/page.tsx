import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "カンガルー金貨（オーストラリア）の買取ガイド", item: "https://gold-biyori.com/articles/kangaroo-kinka-kaitori/" },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article",
    headline: "カンガルー金貨（オーストラリア）の買取ガイド", description: "オーストラリアのカンガルー金貨を高く売るコツ。純度99.99%の純金としての評価と相場の調べ方を解説します。",
    datePublished: "2026-06-05", dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "カンガルー金貨は高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "純度99.99%の純金で、重量×金相場が基準です。" } },
      { "@type": "Question", name: "デザイン違いで価値は変わりますか？", acceptedAnswer: { "@type": "Answer", text: "地金型は基本的に素材価値で評価されます。希少年号はプレミアが付くこともあります。" } },
      { "@type": "Question", name: "ケース保管が必要ですか？", acceptedAnswer: { "@type": "Answer", text: "傷防止のためケース・カプセル保管が望ましいです。" } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "カンガルー金貨（オーストラリア）の買取ガイド",
  description: "オーストラリアのカンガルー金貨を高く売るコツ。純度99.99%の純金としての評価と相場の調べ方を解説します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">カンガルー金貨の無料査定はこちら</h3>
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

export default function KangarooKinkaKaitoriPage() {
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
          <li><span className="text-foreground">カンガルー金貨（オーストラリア）の買取ガイド</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="【2026年最新】カンガルー金貨（オーストラリア）の買取ガイド" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】カンガルー金貨（オーストラリア）の買取ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>カンガルー金貨はパース造幣局発行の地金型金貨で、純度99.99%の純金として評価されます。</p>
        <h2>ポイント</h2>
        <ul>
          <li>純度99.99%・重量が評価基準</li>
          <li>毎年デザインが変わる点も特徴</li>
          <li>金相場連動で高値が出やすい</li>
        </ul>
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "カンガルー金貨は高く売れますか？",
              a: "純度99.99%の純金で、重量×金相場が基準です。",
            },
            {
              q: "デザイン違いで価値は変わりますか？",
              a: "地金型は基本的に素材価値で評価されます。希少年号はプレミアが付くこともあります。",
            },
            {
              q: "ケース保管が必要ですか？",
              a: "傷防止のためケース・カプセル保管が望ましいです。",
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
        <RelatedArticles currentSlug="kangaroo-kinka-kaitori" relatedSlugs={["maple-leaf-kinka-kaitori", "vienna-kinka-kaitori", "k24-kaitori", "kin-takaku-uru", "kin-kaitori-souba"]} />
        <DealerComparisonTable heading="カンガルー金貨の買取で使える主要サービス比較" intro="公式情報をもとに金買取サービスを比較しました。" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
