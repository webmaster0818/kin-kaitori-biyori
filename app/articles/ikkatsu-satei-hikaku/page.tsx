import type { Metadata } from "next";
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
    headline: "【2026年最新】金買取の一括査定サイト比較｜ヒカカク・うるココ等の特徴と選び方",
    description: "金買取の一括査定サイト主要5社（ヒカカク、うるココ、買取コネクト等）を徹底比較。提携業者数、対応エリア、利用方法、おすすめ用途別を完全解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u4e00\u62ec\u67fb\u5b9a\u306e\u5229\u7528\u306b\u8cbb\u7528\u306f\u304b\u304b\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5b8c\u5168\u7121\u6599\u3002\u8907\u6570\u696d\u8005\u306e\u898b\u7a4d\u3082\u308a\u3082\u3001\u6700\u7d42\u7684\u306b\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u3066\u3082\u6599\u91d1\u306f\u767a\u751f\u3057\u307e\u305b\u3093\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u4e00\u62ec\u67fb\u5b9a\u306e\u898b\u7a4d\u3082\u308a\u306f\u6b63\u78ba\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Web\u67fb\u5b9a\u306e\u305f\u3081\u6982\u7b97\u3002\u5b9f\u7269\u67fb\u5b9a\u3067\u91d1\u984d\u304c\u5909\u308f\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u65e8\u3092\u7406\u89e3\u3057\u3066\u304a\u304f\u3068\u5b89\u5fc3\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u3069\u306e\u30b5\u30a4\u30c8\u3092\u4f7f\u3046\u306e\u304c\u4e00\u756a\u304a\u3059\u3059\u3081\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u63d0\u643a\u696d\u8005\u6570\u304c\u591a\u3044\u30d2\u30ab\u30ab\u30af\uff01\u304c\u521d\u5fc3\u8005\u5411\u3051\u3002\u5c02\u9580\u67fb\u5b9a\u91cd\u8996\u306a\u3089\u3046\u308b\u30b3\u30b3\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u898b\u7a4d\u3082\u308a\u5f8c\u3001\u5fc5\u305a\u58f2\u3089\u306a\u3044\u3068\u3044\u3051\u306a\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5168\u3066\u306e\u4e00\u62ec\u67fb\u5b9a\u30b5\u30a4\u30c8\u3067\u30ad\u30e3\u30f3\u30bb\u30eb\u7121\u6599\u3002\u898b\u7a4d\u3082\u308a\u3060\u3051\u53d6\u5f97\u3057\u58f2\u3089\u306a\u3044\u3053\u3068\u3082\u53ef\u80fd\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u8907\u6570\u306e\u30b5\u30a4\u30c8\u306b\u540c\u6642\u306b\u4f9d\u983c\u3057\u3066\u3082\u3044\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3002\u3080\u3057\u308d\u8907\u6570\u30b5\u30a4\u30c8\u3067\u91cd\u8907\u3057\u306a\u3044\u696d\u8005\u306e\u898b\u7a4d\u3082\u308a\u3092\u96c6\u3081\u308b\u65b9\u304c\u52b9\u679c\u7684\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金買取の一括査定サイト比較｜ヒカカク・うるココ等の特徴と選び方",
  description: "金買取の一括査定サイト主要5社（ヒカカク、うるココ、買取コネクト等）を徹底比較。提携業者数、対応エリア、利用方法、おすすめ用途別を完全解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


          <p>金買取で最高値を引き出すには複数業者の相見積もりが必須。一括査定サイトは1回の入力で複数業者から見積もりが届く便利なサービスです。</p>

          <h2>1. 一括査定サイトの仕組み</h2>
          <p>ユーザーが金製品の情報を入力 → 提携業者に一斉に査定依頼 → 業者から見積もりが届く → 最高値で売却。</p>

          <h2>2. 主要一括査定サイト比較</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>サイト名</th><th>提携業者数</th><th>強み</th></tr></thead>
              <tbody>
                <tr><td>ヒカカク！</td><td>700社以上</td><td>業界最大級、ジュエリー専門業者も多数</td></tr>
                <tr><td>うるココ</td><td>150社以上</td><td>専門査定士が多く、丁寧な対応</td></tr>
                <tr><td>買取コネクト</td><td>100社以上</td><td>金専門業者にフォーカス</td></tr>
                <tr><td>サイトポリス</td><td>50社以上</td><td>店頭・宅配・出張すべて対応</td></tr>
                <tr><td>ウリドキ</td><td>200社以上</td><td>口コミレビューが充実</td></tr>
              </tbody>
            </table>
          </div>

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
            <li>3〜5社から見積もりが届くため、比較ポイントをメモ</li>
            <li>気に入った業者と店頭・出張・宅配で正式査定</li>
            <li>当日中の決定を求められても焦らない</li>
          </ol>

          <h2>5. ヒカカク！の使い方（参考）</h2>
          <p>ヒカカク！は業界最大級の提携業者数。ジュエリー・金・ブランド品まで幅広く対応。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow">公式サイト</a>から入力フォームで査定依頼。</p>


          <CtaBox />

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
  <p className="mt-3 text-sm leading-relaxed">提携業者数が多いヒカカク！が初心者向け。専門査定重視ならうるココ。</p>
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
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "daikichi-vs-nanboya", "tentou-vs-takuhai", "line-satei-seido", "kin-spot-vs-kaitori", "kin-jundo-mikata", "kin-nisemono-mikata", "kin-omosa-hakarikata", "platinum-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
          />
        </article>
      </div>
    </>
  );
}
