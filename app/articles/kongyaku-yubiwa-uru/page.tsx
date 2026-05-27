import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
    description: "婚約指輪を売る判断基準・買取相場・税金・心理的ハードルの対処法を解説。離婚や破談時に後悔せず売却するための業者選びとタイミングを徹底ガイド。",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"\u5a5a\u7d04\u7834\u68c4\u306b\u306a\u3063\u305f\u6307\u8f2a\u3001\u76f8\u624b\u306b\u8fd4\u3055\u306a\u304f\u3066\u3082\u3044\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u6cd5\u7684\u306b\u306f\u5a5a\u7d04\u89e3\u6d88\u306e\u8cac\u4efb\u5074\u306b\u3088\u308a\u7570\u306a\u308b\u3002\u4e00\u822c\u7684\u306b\u306f\u8fd4\u9084\u3057\u306a\u3044\u30fb\u58f2\u5374\u524d\u306b\u5354\u8b70\u63a8\u5968\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u96e2\u5a5a\u6642\u3001\u5a5a\u7d04\u6307\u8f2a\u306f\u8ca1\u7523\u5206\u4e0e\u306e\u5bfe\u8c61\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u539f\u5247\u3068\u3057\u3066\u300c\u7279\u6709\u8ca1\u7523\u300d\u6271\u3044\u3067\u5206\u4e0e\u5bfe\u8c61\u5916\u3002\u305f\u3060\u3057\u5143\u592b\u5a66\u9593\u306e\u5408\u610f\u3067\u7570\u306a\u308b\u5834\u5408\u3042\u308a\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u58f2\u5374\u76ca\u306b\u7a0e\u91d1\u306f\u304b\u304b\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"30\u4e07\u5186\u4ee5\u4e0b\u306a\u3089\u975e\u8ab2\u7a0e\u300230\u4e07\u5186\u8d85\u306f\u8b72\u6e21\u6240\u5f97\u306750\u4e07\u5186\u63a7\u9664\u3042\u308a\u3001\u5e74\u959350\u4e07\u5186\u4ee5\u4e0a\u3067\u8ab2\u7a0e\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u58f2\u308b\u524d\u306b\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u3059\u3079\u304d\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u7c21\u5358\u306a\u62ed\u304d\u53d6\u308a\u7a0b\u5ea6\u306fOK\u3002\u6df1\u3044\u30af\u30ea\u30fc\u30cb\u30f3\u30b0\u306f\u30d7\u30ed\u306b\u4efb\u305b\u308b\u304b\u3001\u696d\u8005\u67fb\u5b9a\u5f8c\u3067OK\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u58f2\u5374\u5f8c\u306e\u5fc3\u7406\u7684\u30b1\u30a2\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u58f2\u5374\u91d1\u3067\u65b0\u751f\u6d3b\u306e\u6e96\u5099\uff08\u5f15\u3063\u8d8a\u3057\u30fb\u8ee2\u8077\u8cbb\u7528\u7b49\uff09\u306b\u5145\u5f53\u3059\u308b\u8003\u3048\u65b9\u304c\u591a\u3044\u3002\u5f62\u3092\u5909\u3048\u3066\u30ea\u30d5\u30a9\u30fc\u30e0\u3082\u9078\u629e\u80a2\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】婚約指輪を売る方法｜離婚・破談時の買取相場と注意点を完全解説",
  description: "婚約指輪を売る判断基準・買取相場・税金・心理的ハードルの対処法を解説。離婚や破談時に後悔せず売却するための業者選びとタイミングを徹底ガイド。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">婚約指輪の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">婚約指輪の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">婚約指輪を売る完全ガイド｜離婚・破談時の買取とタイミング</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月18日</p>


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
  <p className="mt-3 text-sm leading-relaxed">簡単な拭き取り程度はOK。深いクリーニングはプロに任せるか、業者査定後でOK。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>売却後の心理的ケアは？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">売却金で新生活の準備（引っ越し・転職費用等）に充当する考え方が多い。形を変えてリフォームも選択肢。</p>
</details>

          <h2>関連記事</h2>
          <ul>
            <li><Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金の買取相場（最新）</Link></li>
            <li><Link href="/articles/k18-kaitori/" className="text-accent hover:underline">K18（18金）の買取相場</Link></li>
            <li><Link href="/articles/kin-takaku-uru/" className="text-accent hover:underline">金を高く売るコツ</Link></li>
            <li><Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">買取方法の比較</Link></li>
          </ul>
        </article>
      </div>
    </>
  );
}
