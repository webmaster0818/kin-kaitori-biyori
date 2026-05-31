import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
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
    description: "金買取のLINE査定・写真査定がどこまで信頼できるか、業者ごとの精度差、実物査定との金額差、効率的な活用法を徹底解説。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"LINE\u67fb\u5b9a\u984d\u306f\u5b9f\u969b\u306e\u8cb7\u53d6\u984d\u3068\u540c\u3058\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u6982\u7b97\u306e\u305f\u3081\u00b110\u301c20%\u306e\u5dee\u304c\u51fa\u308b\u3053\u3068\u304c\u591a\u3044\u3002\u5b9f\u7269\u67fb\u5b9a\u3067\u78ba\u5b9a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"LINE\u67fb\u5b9a\u306e\u7cbe\u5ea6\u3092\u4e0a\u3052\u308b\u65b9\u6cd5\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u523b\u5370\u304c\u660e\u78ba\u306a\u5199\u771f\u3001\u6b63\u78ba\u306a\u91cd\u91cf\u7533\u544a\u3001\u4ed8\u5c5e\u54c1\u306e\u6709\u7121\u3092\u4f1d\u3048\u308b\u3068\u7cbe\u5ea6\u304c\u4e0a\u304c\u308b\u3002\"}}, {\"@type\": \"Question\", \"name\": \"LINE\u67fb\u5b9a\u5f8c\u3001\u5fc5\u305a\u58f2\u3089\u306a\u3044\u3068\u3044\u3051\u306a\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5168\u3066\u306e\u696d\u8005\u3067\u30ad\u30e3\u30f3\u30bb\u30eb\u7121\u6599\u3002LINE\u67fb\u5b9a\u3060\u3051\u53d7\u3051\u3066\u58f2\u3089\u306a\u3044\u3053\u3068\u3082\u53ef\u80fd\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u5199\u771f\u306f\u4f55\u679a\u9001\u308b\u3079\u304d\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u672c\u4f53\u5168\u4f53\u30fb\u523b\u5370\u90e8\u5206\u30fb\u4ed8\u5c5e\u54c1 \u30673\u301c5\u679a\u304c\u76ee\u5b89\u3002\u591a\u3059\u304e\u3066\u3082\u51e6\u7406\u304c\u9045\u304f\u306a\u308b\u5834\u5408\u3042\u308a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"LINE\u67fb\u5b9a\u3067\u5927\u91cf\u306e\u91d1\u88fd\u54c1\u3092\u4e00\u6c17\u306b\u67fb\u5b9a\u3067\u304d\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u53ef\u80fd\u3060\u304c\u3001\u696d\u8005\u306b\u3088\u308a\u4e0a\u9650\u3042\u308a\u300210\u70b9\u4ee5\u4e0a\u306e\u5834\u5408\u306f\u51fa\u5f35\u8cb7\u53d6\u306e\u65b9\u304c\u52b9\u7387\u7684\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金買取のLINE査定・写真査定の精度｜実物査定との差と活用法",
  description: "金買取のLINE査定・写真査定がどこまで信頼できるか、業者ごとの精度差、実物査定との金額差、効率的な活用法を徹底解説。",
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
            <li><span className="text-foreground">ハウツー</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取のLINE査定・写真査定はどこまで信頼できる？</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


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
              <thead><tr><th>方法</th><th>所要時間</th><th>精度</th><th>こんな人向け</th></tr></thead>
              <tbody>
                <tr><td>LINE査定</td><td>即日〜数時間</td><td>±10〜20%</td><td>気軽に相場を知りたい</td></tr>
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

          <RelatedArticles
            currentSlug="line-satei-seido"
            relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "daikichi-vs-nanboya", "ikkatsu-satei-hikaku", "tentou-vs-takuhai", "kin-spot-vs-kaitori", "kin-jundo-mikata", "kin-nisemono-mikata", "kin-omosa-hakarikata", "platinum-kaitori", "diamond-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
          />
        </article>
      </div>
    </>
  );
}
