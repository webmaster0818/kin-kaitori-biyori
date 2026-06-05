import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金買取の本人確認はなぜ必要？", item: "https://gold-biyori.com/articles/kin-honnin-kakunin/" },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article",
    headline: "金買取の本人確認はなぜ必要？｜古物営業法と使える身分証", description: "金買取の本人確認を解説。古物営業法で義務付けられる理由、使える本人確認書類、マイナンバーが必要なケースを紹介します。",
    datePublished: "2026-06-05", dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "なぜ本人確認が必要ですか？", acceptedAnswer: { "@type": "Answer", text: "古物営業法により、盗品流通防止の観点から買取時の本人確認が義務付けられています。" } },
      { "@type": "Question", name: "どの書類が使えますか？", acceptedAnswer: { "@type": "Answer", text: "運転免許証・マイナンバーカード・パスポート・保険証などが一般的です。" } },
      { "@type": "Question", name: "マイナンバーは必要ですか？", acceptedAnswer: { "@type": "Answer", text: "200万円超の取引などでは支払調書のためマイナンバー提出が必要な場合があります。" } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "金買取の本人確認はなぜ必要？｜古物営業法と使える身分証",
  description: "金買取の本人確認を解説。古物営業法で義務付けられる理由、使える本人確認書類、マイナンバーが必要なケースを紹介します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">本人確認の無料査定はこちら</h3>
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

export default function KinHonninKakuninPage() {
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
          <li><span className="text-foreground">金買取の本人確認はなぜ必要？</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="【2026年最新】金買取の本人確認はなぜ必要？" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取の本人確認はなぜ必要？</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>金買取では本人確認が法律で義務付けられています。理由と必要書類を知っておけば、当日スムーズに売却できます。</p>
        <h2>ポイント</h2>
        <ul>
          <li>古物営業法で本人確認が義務</li>
          <li>免許証・マイナンバーカード等が使える</li>
          <li>高額取引はマイナンバー提出が必要な場合がある</li>
        </ul>
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "なぜ本人確認が必要ですか？",
              a: "古物営業法により、盗品流通防止の観点から買取時の本人確認が義務付けられています。",
            },
            {
              q: "どの書類が使えますか？",
              a: "運転免許証・マイナンバーカード・パスポート・保険証などが一般的です。",
            },
            {
              q: "マイナンバーは必要ですか？",
              a: "200万円超の取引などでは支払調書のためマイナンバー提出が必要な場合があります。",
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
        <RelatedArticles currentSlug="kin-honnin-kakunin" relatedSlugs={["kin-200man-mynumber", "kin-kaitori-mochimono", "kin-kaitori-zeikin", "kin-kaitori-hajimete", "kaitori-houhou-hikaku"]} />
        <DealerComparisonTable heading="本人確認の買取で使える主要サービス比較" intro="公式情報をもとに金買取サービスを比較しました。" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
