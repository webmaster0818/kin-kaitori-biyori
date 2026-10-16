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
      { "@type": "ListItem", position: 3, name: "ハウツー", item: "https://gold-biyori.com/articles/line-satei-seido/" },
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
    headline: "【2026年最新】金買取のLINE査定・写真査定の精度｜実物査定との差と活用法",
    description: "金買取のLINE査定・写真査定がどこまで信頼できるか、業者ごとの精度差、実物査定との金額差、効率的な活用法を解説します。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"LINE査定額は実際の買取額と同じ？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"概算のため±10〜20%の差が出ることが多い。実物査定で確定。\"}}, {\"@type\": \"Question\", \"name\": \"LINE査定の精度を上げる方法は？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"刻印が明確な写真、正確な重量申告、付属品の有無を伝えると精度が上がる。\"}}, {\"@type\": \"Question\", \"name\": \"LINE査定後、必ず売らないといけない？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"全ての業者でキャンセル無料。LINE査定だけ受けて売らないことも可能。\"}}, {\"@type\": \"Question\", \"name\": \"写真は何枚送るべき？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"本体全体・刻印部分・付属品 で3〜5枚が目安。多すぎても処理が遅くなる場合あり。\"}}, {\"@type\": \"Question\", \"name\": \"LINE査定で大量の金製品を一気に査定できる？\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"可能だが、業者により上限あり。10点以上の場合は出張買取の方が効率的。\"}}]}" }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】金買取のLINE査定・写真査定の精度｜実物査定との差と活用法",
  description: "金買取のLINE査定・写真査定がどこまで信頼できるか、業者ごとの精度差、実物査定との金額差、効率的な活用法を解説します。",
  alternates: { canonical: "https://gold-biyori.com/articles/line-satei-seido/" },
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
            <li><span className="text-foreground">ハウツー</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取のLINE査定・写真査定はどこまで信頼できる？</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>「LINE査定や写真査定って、本当の買取価格と差はあるの？」——本記事で精度・限界・効率的な活用法を完全解説します。</p>

          <h2>1. LINE査定・写真査定とは</h2>
          <p>LINE等のメッセージアプリ・メールで金製品の写真を送り、業者から概算査定を受ける方法。最近では多くの大手業者が対応:</p>
          <ul>
            <li>ヒカカク！LINE査定</li>
            <li>大吉公式LINE</li>
            <li>なんぼやLINE査定</li>
            <li>福ちゃんLINE査定</li>
            <li>ジュエルカフェLINE査定</li>
          </ul>

          <h2>2. 精度の限界</h2>
          <p>写真査定は<strong>概算金額</strong>のみ。以下の理由で実物査定と差が出ることがあります:</p>
          <ul>
            <li>正確な重量が分からない（写真からは推定）</li>
            <li>純度の真贋判定が不可</li>
            <li>傷・色味の状態が見えにくい</li>
            <li>付属品の有無が確認できない</li>
          </ul>

          <h2>3. 実物査定との差は？</h2>
          <p>業界平均では、LINE査定額と実物査定額の差は<strong>±10〜20%</strong>と言われます。重量が大きく違う場合（写真で軽そうに見えて重い等）はさらに差が出ることも。</p>

          <h2>4. LINE査定を上手く使うコツ</h2>
          <ol>
            <li>商品の刻印（K18等）が明確に見える写真を送る</li>
            <li>キッチンスケール等で重量を計って事前申告</li>
            <li>付属品（保証書・箱）も別途写真</li>
            <li>複数業者にLINE査定を依頼して比較</li>
            <li>気に入った業者と実物査定の予約を取る</li>
          </ol>

          <h2>5. LINE査定 vs 一括査定 vs 店頭査定</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>方法</th><th>所要時間</th><th>精度</th><th>おすすめの方</th></tr></thead>
              <tbody>
                <tr><td>LINE査定</td><td>即日〜数時間</td><td>±10〜20%</td><td>手軽に相場を知りたい方</td></tr>
                <tr><td>一括査定</td><td>1〜3日</td><td>±5〜15%</td><td>複数業者を比較したい</td></tr>
                <tr><td>店頭査定</td><td>当日</td><td>確定</td><td>すぐ売りたい</td></tr>
              </tbody>
            </table>
          </div>

          <h2>6. LINE査定が向いている人</h2>
          <ul>
            <li>金製品を売るか迷っていて、まず相場が知りたい</li>
            <li>店舗まで行く時間がない</li>
            <li>複数業者の概算を比較したい</li>
            <li>金製品が多くて全部持ち込めない</li>
          </ul>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>LINE査定額は実際の買取額と同じ？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">概算のため±10〜20%の差が出ることが多い。実物査定で確定。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>LINE査定の精度を上げる方法は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">刻印が明確な写真、正確な重量申告、付属品の有無を伝えると精度が上がる。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>LINE査定後、必ず売らないといけない？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">全ての業者でキャンセル無料。LINE査定だけ受けて売らないことも可能。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>写真は何枚送るべき？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">本体全体・刻印部分・付属品 で3〜5枚が目安。多すぎても処理が遅くなる場合あり。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>LINE査定で大量の金製品を一気に査定できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">可能だが、業者により上限あり。10点以上の場合は出張買取の方が効率的。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="compare" />
          <RelatedArticles
            currentSlug="line-satei-seido"
            relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "daikichi-vs-nanboya", "ikkatsu-satei-hikaku", "tentou-vs-takuhai", "kin-spot-vs-kaitori", "kin-jundo-mikata", "kin-nisemono-mikata", "kin-omosa-hakarikata", "platinum-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
          />
        </article>
      </div>
    </>
  );
}
