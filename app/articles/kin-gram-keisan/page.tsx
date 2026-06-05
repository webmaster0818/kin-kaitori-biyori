import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金買取の価格はこう決まる", item: "https://gold-biyori.com/articles/kin-gram-keisan/" },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article",
    headline: "金買取の価格はこう決まる｜グラム計算の仕組みと計算方法", description: "金買取価格のグラム計算を解説。1gあたりの相場×重量×純度で求める計算式と、自分で概算する方法を紹介します。",
    datePublished: "2026-06-05", dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "金の買取価格はどう計算しますか？", acceptedAnswer: { "@type": "Answer", text: "純度に応じた1gあたりの買取単価に、重量（g）を掛けて算出します。例: K18が1g11,400円なら10gで114,000円が目安です。" } },
      { "@type": "Question", name: "自分で重さを量れますか？", acceptedAnswer: { "@type": "Answer", text: "0.1g単位のはかりがあれば概算できます。重さの量り方の記事も参考にしてください。" } },
      { "@type": "Question", name: "純度はどう調べますか？", acceptedAnswer: { "@type": "Answer", text: "刻印（K24・K18など）で確認できます。刻印がない場合は業者の比重・成分検査で判定されます。" } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "金買取の価格はこう決まる｜グラム計算の仕組みと計算方法",
  description: "金買取価格のグラム計算を解説。1gあたりの相場×重量×純度で求める計算式と、自分で概算する方法を紹介します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">グラム計算の無料査定はこちら</h3>
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

export default function KinGramKeisanPage() {
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
          <li><span className="text-foreground">金買取の価格はこう決まる</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="【2026年最新】金買取の価格はこう決まる" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取の価格はこう決まる</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>金の買取価格は「1gあたりの買取単価 × 重量」で決まります。純度ごとの単価を知れば、自分でも概算できます。</p>
        <h2>ポイント</h2>
        <ul>
          <li>買取額＝1gあたり単価×重量が基本</li>
          <li>純度（K24/K18など）で単価が変わる</li>
          <li>刻印で純度、はかりで重量を確認</li>
        </ul>
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "金の買取価格はどう計算しますか？",
              a: "純度に応じた1gあたりの買取単価に、重量（g）を掛けて算出します。例: K18が1g11,400円なら10gで114,000円が目安です。",
            },
            {
              q: "自分で重さを量れますか？",
              a: "0.1g単位のはかりがあれば概算できます。重さの量り方の記事も参考にしてください。",
            },
            {
              q: "純度はどう調べますか？",
              a: "刻印（K24・K18など）で確認できます。刻印がない場合は業者の比重・成分検査で判定されます。",
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
        <RelatedArticles currentSlug="kin-gram-keisan" relatedSlugs={["kin-omosa-hakarikata", "kin-kaitori-souba", "kin-jundo-mikata", "k18-kaitori", "kin-takaku-uru"]} />
        <DealerComparisonTable heading="グラム計算の買取で使える主要サービス比較" intro="公式情報をもとに金買取サービスを比較しました。" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
