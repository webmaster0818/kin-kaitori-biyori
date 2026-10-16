import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
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
      { "@type": "ListItem", position: 3, name: "業者比較", item: "https://gold-biyori.com/articles/ikkatsu-satei-hikaku/" },
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
    headline: "金買取の一括査定サイト比較【2026年10月】｜ヒカカク！とウリドキの公式表記・使い方と注意点",
    description: "金買取の一括査定サイトを公式表記で比較（2026年10月9日確認）。ヒカカク！は貴金属・宝石カテゴリ1,082社、ウリドキは1商品あたり最大10社。社数を公式で確認できないサービスはその旨を明記し、仕組み・メリットとデメリット・使い方のコツを解説。",
    datePublished: "2026-05-18",
    dateModified: "2026-10-16",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"一括査定の利用に費用はかかる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"完全無料。複数業者の見積もりも、最終的にキャンセルしても料金は発生しません。\"}}, {\"@type\": \"Question\", \"name\": \"一括査定の見積もりは正確？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Web査定のため概算。実物査定で金額が変わる可能性がある旨を理解しておくと安心。\"}}, {\"@type\": \"Question\", \"name\": \"どのサイトを使うのが一番おすすめ？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"貴金属カテゴリの掲載社数を公式に示しているヒカカク！（1,082社・2026年10月9日確認）が比べやすい選択肢です。他のサービスは掲載社数の公式表記を確認できませんでした。\"}}, {\"@type\": \"Question\", \"name\": \"見積もり後、必ず売らないといけない？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"全ての一括査定サイトでキャンセル無料。見積もりだけ取得し売らないことも可能。\"}}, {\"@type\": \"Question\", \"name\": \"複数のサイトに同時に依頼してもいい？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能。むしろ複数サイトで重複しない業者の見積もりを集める方が効果的。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "金買取の一括査定サイト比較【2026年10月】｜ヒカカク！とウリドキの公式表記・使い方と注意点",
  description: "金買取の一括査定サイトを公式表記で比較（2026年10月9日確認）。ヒカカク！は貴金属・宝石カテゴリ1,082社、ウリドキは1商品あたり最大10社。社数を公式で確認できないサービスはその旨を明記し、仕組み・メリットとデメリット・使い方のコツを解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/ikkatsu-satei-hikaku/" },
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
            <li><span className="text-foreground">業者比較</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取の一括査定サイト比較と最高値の引き出し方</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>金買取で最高値を引き出すには複数業者の相見積もりが必須。一括査定サイトは1回の入力で複数業者から見積もりが届く便利なサービスです。</p>

          <h2>1. 一括査定サイトの仕組み</h2>
          <p>ユーザーが金製品の情報を入力 → 提携業者に一斉に査定依頼 → 業者から見積もりが届く → 最高値で売却。</p>

          <h2>2. 主要一括査定サイト比較</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>サイト名</th><th>提携業者数</th><th>強み</th></tr></thead>
              <tbody>
                <tr><td>ヒカカク！</td><td>貴金属・宝石カテゴリ 1,082社（公式表記・2026年10月9日確認）</td><td>公式は「国内最大級の買取比較サイト」「最大20社から一括で査定見積もり」と表記（2026年10月16日確認）</td></tr>
                <tr><td>うるココ</td><td>公式に記載なし（一括査定サービスとしての公式サイトを確認できず）</td><td>—（公式情報を確認できず）</td></tr>
                <tr><td>買取コネクト</td><td>公式に記載なし（公式サイトを確認できず）</td><td>—（公式情報を確認できず）</td></tr>
                <tr><td>サイトポリス</td><td>公式に記載なし（公式サイトを確認できず）</td><td>—（公式情報を確認できず）</td></tr>
                <tr><td>ウリドキ</td><td>公式に記載なし（提携社数の表記なし。1商品の査定は「最大10社」と公式表記・2026年10月9日確認）</td><td>口コミレビューが充実</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※ 社数は2026年10月9日に各社の公式サイトで確認しました。ヒカカク！は公式の「貴金属・宝石の買取価格を比較」ページのタイトル表記（16,409点・1,082社）で、カテゴリごとに掲載社数を表示しており、サイト全体の提携社数は公表されていません。ウリドキは公式の金・ジュエリー買取ページに提携社数の記載がなく、「最大10社」（2024年4月〜2026年3月の実績に基づく、と注記）が1商品あたりの査定社数です。うるココ・買取コネクト・サイトポリスは一括査定サービスとしての公式サイトを確認できなかったため、以前掲載していた社数（150社以上・100社以上・50社以上）と特徴を削除しました。</p>

          <h2>3. 一括査定のメリット・デメリット</h2>
          <p><strong>メリット:</strong></p>
          <ul>
            <li>1回入力で複数業者の見積もりが届く</li>
            <li>業者間の競争が起きて高値が出やすい</li>
            <li>無料・キャンセル無料</li>
          </ul>
          <p><strong>デメリット:</strong></p>
          <ul>
            <li>複数業者から電話・メールが届く</li>
            <li>Web査定のため正確な金額は実物査定後</li>
          </ul>

          <h2>4. 一括査定サイトを上手く使うコツ</h2>
          <ol>
            <li>金製品の情報を詳細に入力（純度、重量、付属品の有無等）</li>
            <li>連絡先（電話・メール）を明確に</li>
            <li>複数社から見積もりが届くため（届く社数は品物・地域で変わります）、比較ポイントをメモ</li>
            <li>気に入った業者と店頭・出張・宅配で正式査定</li>
            <li>当日中の決定を求められても焦らない</li>
          </ol>

          <h2>5. ヒカカク！の使い方（参考）</h2>
          <p>ヒカカク！は公式で「国内最大級の買取比較サイト」「最大20社から一括で査定見積もりが可能」と案内しています（2026年10月16日確認）。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow">公式サイト</a>から入力フォームで査定依頼。</p>


          <CtaBox />
          <p>一括査定サービスそのものの評判や注意点（キャンセル方法・電話連絡・個人情報）は <Link href="/articles/hikakaku-kin-kaitori-kuchikomi/">ヒカカクの金買取 口コミ・評判</Link> で公式クチコミの傾向を出典付きで整理しています。</p>

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>一括査定の利用に費用はかかる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">完全無料。複数業者の見積もりも、最終的にキャンセルしても料金は発生しません。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>一括査定の見積もりは正確？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">Web査定のため概算。実物査定で金額が変わる可能性がある旨を理解しておくと安心。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>どのサイトを使うのが一番おすすめ？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">貴金属カテゴリの掲載社数を公式に示しているヒカカク！（1,082社・2026年10月9日確認）が比べやすい選択肢です。他のサービスは掲載社数の公式表記を確認できませんでした。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>見積もり後、必ず売らないといけない？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">全ての一括査定サイトでキャンセル無料。見積もりだけ取得し売らないことも可能。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>複数のサイトに同時に依頼してもいい？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能。むしろ複数サイトで重複しない業者の見積もりを集める方が効果的。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="compare" />
          <RelatedArticles
            currentSlug="ikkatsu-satei-hikaku"
            relatedSlugs={["hikakaku-kin-kaitori-kuchikomi", "nagoya-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "daikichi-vs-nanboya", "tentou-vs-takuhai", "line-satei-seido", "kin-spot-vs-kaitori", "kin-jundo-mikata", "kin-nisemono-mikata", "kin-omosa-hakarikata", "platinum-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
          />
        </article>
      </div>
    </>
  );
}
