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
    { "@type": "ListItem", position: 3, name: "金価格はなぜ上がっている？", item: "https://gold-biyori.com/articles/kin-kakaku-suii/" },
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article",
    headline: "金価格はなぜ上がっている？｜推移の要因と今後の見通し", description: "金価格の推移と高騰の要因を解説。インフレ・為替・地政学リスクなど価格を動かす要素と、売り時の考え方を紹介します。",
    datePublished: "2026-06-05", dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}
function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: "金価格はなぜ上がっているのですか？", acceptedAnswer: { "@type": "Answer", text: "インフレや地政学リスクで安全資産としての需要が高まり、円安も国内価格を押し上げています。" } },
      { "@type": "Question", name: "今は売り時ですか？", acceptedAnswer: { "@type": "Answer", text: "高値圏が続いていますが、最終判断は相場推移を見て行いましょう。売り時の見極めに関する記事も参考にしてください。" } },
      { "@type": "Question", name: "これからも上がりますか？", acceptedAnswer: { "@type": "Answer", text: "将来予測は困難です。相場は変動するため、納得できる水準で判断しましょう。" } }
  ] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "金価格はなぜ上がっている？｜推移の要因と今後の見通し",
  description: "金価格の推移と高騰の要因を解説。インフレ・為替・地政学リスクなど価格を動かす要素と、売り時の考え方を紹介します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金価格の推移の無料査定はこちら</h3>
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

export default function KinKakakuSuiiPage() {
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
          <li><span className="text-foreground">金価格はなぜ上がっている？</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="【2026年最新】金価格はなぜ上がっている？" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金価格はなぜ上がっている？</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>金価格は近年歴史的な高値圏で推移しています。価格を動かす要因を知れば、売却タイミングの判断に役立ちます。</p>
        <h2>ポイント</h2>
        <ul>
          <li>インフレ・金利・為替・地政学リスクが価格を左右</li>
          <li>円安は国内金価格を押し上げる要因</li>
          <li>長期的に安全資産として需要が高い</li>
        </ul>
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "金価格はなぜ上がっているのですか？",
              a: "インフレや地政学リスクで安全資産としての需要が高まり、円安も国内価格を押し上げています。",
            },
            {
              q: "今は売り時ですか？",
              a: "高値圏が続いていますが、最終判断は相場推移を見て行いましょう。売り時の見極めに関する記事も参考にしてください。",
            },
            {
              q: "これからも上がりますか？",
              a: "将来予測は困難です。相場は変動するため、納得できる水準で判断しましょう。",
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
        <RelatedArticles currentSlug="kin-kakaku-suii" relatedSlugs={["kin-uru-timing", "kin-uridoki-2026", "kin-spot-vs-kaitori", "kin-kaitori-souba", "kin-takaku-uru", "kin-bracelet-kaitori"]} />
        <DealerComparisonTable heading="金価格の推移の買取で使える主要サービス比較" intro="公式情報をもとに金買取サービスを比較しました。" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
