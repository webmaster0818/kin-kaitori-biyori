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
      { "@type": "ListItem", position: 3, name: "婚約指輪を売る", item: "https://gold-biyori.com/articles/kongyaku-yubiwa-uru/" },
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
    headline: "【2026年最新】婚約指輪を売る方法｜離婚・破談時の買取相場と注意点を完全解説",
    description: "婚約指輪を売る判断基準・買取相場・税金・心理的ハードルの対処法を解説。離婚や破談時に後悔せず売却するための業者選びとタイミングを解説します。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"婚約破棄になった指輪、相手に返さなくてもいい？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"法的には婚約解消の責任側により異なる。一般的には返還しない・売却前に協議推奨。\"}}, {\"@type\": \"Question\", \"name\": \"離婚時、婚約指輪は財産分与の対象？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"原則として「特有財産」扱いで分与対象外。ただし元夫婦間の合意で異なる場合あり。\"}}, {\"@type\": \"Question\", \"name\": \"売却益に税金はかかる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"30万円以下なら非課税。30万円超は譲渡所得で50万円控除あり、年間50万円以上で課税。\"}}, {\"@type\": \"Question\", \"name\": \"売る前にクリーニングすべき？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"簡単な拭き取り程度であれば問題ありません。深いクリーニングは専門業者に任せるか、業者の査定後に行うことをおすすめします。\"}}, {\"@type\": \"Question\", \"name\": \"売却後の心理的ケアは？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"売却金で新生活の準備（引っ越し・転職費用等）に充当する考え方が多い。形を変えてリフォームも選択肢。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】婚約指輪を売る方法｜離婚・破談時の買取相場と注意点を完全解説",
  description: "婚約指輪を売る判断基準・買取相場・税金・心理的ハードルの対処法を解説。離婚や破談時に後悔せず売却するための業者選びとタイミングを解説します。",
  alternates: { canonical: "https://gold-biyori.com/articles/kongyaku-yubiwa-uru/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">婚約指輪の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">婚約指輪の買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
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
            <li><span className="text-foreground">婚約指輪を売る</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">婚約指輪を売る方法｜離婚・破談時の買取とタイミング</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>離婚・婚約破棄で婚約指輪を売却するのは精神的にも複雑です。本記事では、買取相場・税金・売却タイミングを冷静に整理し、後悔しない判断基準を解説します。</p>

          <h2>1. 婚約指輪の買取価格の決まり方</h2>
          <p>主に以下の3要素:</p>
          <ul>
            <li><strong>ダイヤモンドの4C</strong>: カラット・カラー・クラリティ・カット</li>
            <li><strong>地金</strong>: K18・プラチナの重量×純度</li>
            <li><strong>ブランドプレミアム</strong>: ティファニー・カルティエ・ハリーウィンストン等</li>
          </ul>

          <h2>2. 主なブランド別買取相場（参考）</h2>
          <ul>
            <li><Link href="/articles/tiffany-kaitori/" className="text-accent hover:underline">ティファニー</Link> ハーモニー 0.3ct: 約20〜35万円</li>
            <li><Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ</Link> ソリテール 0.3ct: 約25〜40万円</li>
            <li><Link href="/articles/harrywinston-kaitori/" className="text-accent hover:underline">ハリーウィンストン</Link> マイクロパヴェ 0.5ct: 約60〜120万円</li>
            <li>国内ブランド（4°C, ヴァンドーム青山等）0.3ct: 約10〜20万円</li>
          </ul>

          <h2>3. 婚約指輪を売る前の確認事項</h2>
          <ul>
            <li>鑑定書（GIA / 中央宝石研究所）の有無</li>
            <li>購入時の保証書・箱・カードの有無</li>
            <li>婚約者との合意（離婚協議書での扱い等）</li>
            <li>家族・親族との相談</li>
          </ul>

          <h2>4. 売却タイミングの判断</h2>
          <ul>
            <li><strong>すぐ売る</strong>: 心理的・経済的にすぐ整理したい場合。金相場が高い時期</li>
            <li><strong>待って売る</strong>: 感情が落ち着いてから。半年〜1年置く</li>
            <li><strong>形を変えて使う</strong>: リフォーム（別ジュエリーに改造）も選択肢</li>
          </ul>

          <h2>5. 税金について</h2>
          <p>原則：個人の生活用動産の譲渡として<strong>1個30万円以下なら非課税</strong>。30万円超は譲渡所得として50万円控除あり、年間50万円以上の譲渡益のみ課税。</p>

          <h2>6. 婚約指輪を高く売るコツ</h2>
          <ol>
            <li>ブランドジュエリー専門業者で査定</li>
            <li>箱・保証書・鑑定書を揃える</li>
            <li>複数業者で相見積もり</li>
            <li>金相場の高い時期を狙う</li>
            <li>感情的にならず冷静に交渉</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>婚約破棄になった指輪、相手に返さなくてもいい？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">法的には婚約解消の責任側により異なる。一般的には返還しない・売却前に協議推奨。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>離婚時、婚約指輪は財産分与の対象？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">原則として「特有財産」扱いで分与対象外。ただし元夫婦間の合意で異なる場合あり。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>売却益に税金はかかる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">30万円以下なら非課税。30万円超は譲渡所得で50万円控除あり、年間50万円以上で課税。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>売る前にクリーニングすべき？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">簡単な拭き取り程度であれば問題ありません。深いクリーニングは専門業者に任せるか、業者の査定後に行うことをおすすめします。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>売却後の心理的ケアは？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">売却金で新生活の準備（引っ越し・転職費用等）に充当する考え方が多い。形を変えてリフォームも選択肢。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="howto" />
          <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
          <RelatedArticles
            currentSlug="kongyaku-yubiwa-uru"
            relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-yubiwa-kaitori", "diamond-kaitori", "cartier-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-kaitori-hajimete", "daikichi-vs-nanboya", "tentou-vs-takuhai", "tokyo-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
