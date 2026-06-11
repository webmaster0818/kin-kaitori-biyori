import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "ホワイトゴールド買取", item: "https://gold-biyori.com/articles/k18wg-kaitori/" },
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
    headline: "【2026年6月最新】ホワイトゴールド（K18WG）買取相場と高く売るコツ｜K18との価格差まで完全解説",
    description: "ホワイトゴールド（K18WG）の買取相場は通常のK18と同じ。なぜ同価格なのか、刻印の見分け方、変色しても大丈夫か、おすすめ買取業者まで徹底解説。",
    datePublished: "2026-05-18",
    dateModified: "2026-06-11",
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"K18WG\u3068\u30d7\u30e9\u30c1\u30ca\uff08Pt900\uff09\u306f\u3069\u3061\u3089\u304c\u9ad8\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u73fe\u5728\u306f\u91d1\u76f8\u5834\u306e\u9ad8\u9a30\u306b\u3088\u308a\u3001K18WG\uff08\u7d14\u5ea675%\uff09\u306e\u65b9\u304c\u9ad8\u3044\u5834\u5408\u304c\u591a\u3044\u3067\u3059\u3002\u540c\u3058\u91cd\u91cf\u306a\u3089\u3001K18WG\u306e\u65b9\u304c\u8cb7\u53d6\u4fa1\u683c\u304c\u9ad8\u304f\u306a\u308b\u50be\u5411\u3002\u305f\u3060\u3057\u6642\u671f\u306b\u3088\u308a\u9006\u8ee2\u3059\u308b\u3053\u3068\u3082\u3042\u308a\u307e\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18WG\u306e\u5909\u8272\u30fb\u304f\u3059\u307f\u306f\u8cb7\u53d6\u4fa1\u683c\u306b\u5f71\u97ff\u3057\u307e\u3059\u304b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u5f71\u97ff\u3057\u307e\u305b\u3093\u3002\u8cb7\u53d6\u696d\u8005\u306f\u5185\u90e8\u306e\u91d1\u542b\u6709\u91cf\u3067\u67fb\u5b9a\u3059\u308b\u305f\u3081\u3001\u8868\u9762\u306e\u30ed\u30b8\u30a6\u30e0\u30e1\u30c3\u30ad\u5265\u304c\u308c\u3084\u9ec4\u3070\u307f\u304c\u3042\u3063\u3066\u3082\u4fa1\u683c\u306f\u540c\u3058\u3067\u3059\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18WG\u3068K18\u306e\u898b\u5206\u3051\u65b9\u306f\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u8272\u3067\u5224\u65ad: K18WG\u306f\u9280\u767d\u8272\u3001K18\u306f\u3084\u3084\u8d64\u307f\u306e\u3042\u308b\u30a4\u30a8\u30ed\u30fc\u3002\u523b\u5370\u3067\u78ba\u8a8d: K18WG\u306f\u300cK18WG\u300d\u300c750\u300d\u3001K18\u306f\u300cK18\u300d\u300c750\u300d\u3002\"}}, {\"@type\": \"Question\", \"name\": \"\u77f3\u4ed8\u304d\u306eK18WG\u30ea\u30f3\u30b0\u306f\u3069\u3046\u67fb\u5b9a\u3055\u308c\u308b\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91d1\u90e8\u5206\u3068\u77f3\u90e8\u5206\u304c\u5225\u67fb\u5b9a\u3002\u4f8b\u3048\u3070\u30c0\u30a4\u30e4\u30e2\u30f3\u30c9\u304c0.3ct\u4ee5\u4e0a\u306e\u54c1\u8cea\u306a\u3089GIA\u9451\u5b9a\u66f8\u4ed8\u304d\u3067\u6570\u4e07\u5186\u301c\u306e\u8ffd\u52a0\u67fb\u5b9a\u3002\u77f3\u306a\u3057\u7121\u57a2\u306eK18WG\u90e8\u5206\u306e\u4fa1\u5024\u306f\u91cd\u91cf\u3067\u8a08\u7b97\u3002\"}}, {\"@type\": \"Question\", \"name\": \"K18WG\u306f\u3069\u3053\u3067\u58f2\u308b\u306e\u304c\u4e00\u756a\u9ad8\u3044\uff1f\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"\u91d1\u5c02\u9580\u306e\u8cb7\u53d6\u696d\u8005\uff08\u30ea\u30d5\u30a1\u30b9\u30bf\u3001\u30b4\u30fc\u30eb\u30c9\u30d7\u30e9\u30b6\u7b49\uff09\u304b\u3001\u4e00\u62ec\u67fb\u5b9a\u30b5\u30a4\u30c8\uff08\u30d2\u30ab\u30ab\u30af\uff01\uff09\u3067\u8907\u6570\u6bd4\u8f03\u3059\u308b\u306e\u304c\u304a\u3059\u3059\u3081\u3002\u7dcf\u5408\u30ea\u30b5\u30a4\u30af\u30eb\u30b7\u30e7\u30c3\u30d7\u306f\u91d1\u5c02\u9580\u3067\u306a\u3044\u5834\u5408\u304c\u3042\u308a\u3001\u8cb7\u53d6\u4fa1\u683c\u304c\u4f4e\u3044\u50be\u5411\u3002\"}}]}" }} />;
}

export const metadata: Metadata = {
  title: "【2026年6月最新】ホワイトゴールド（K18WG）買取相場と高く売るコツ｜K18との価格差まで完全解説",
  description: "ホワイトゴールド（K18WG）の買取相場は通常のK18と同じ。なぜ同価格なのか、刻印の見分け方、変色しても大丈夫か、おすすめ買取業者まで徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">ホワイトゴールド製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ホワイトゴールド製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">ホワイトゴールド買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ホワイトゴールド（K18WG）の買取相場と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月11日</p>


          <p>ホワイトゴールド（K18WG）は、見た目はプラチナに似た銀白色のジュエリーですが、<strong>本質は18金（K18）の合金</strong>です。「白っぽいから価値が低いのでは？」と思われがちですが、その買取相場は通常のK18と全く同じです。</p>

          <p>本記事では、K18WGがなぜK18と同価格なのか、変色しても問題ないのか、買取時の刻印の見方、高く売るコツを徹底解説します。</p>

          <GoldSpotPriceCard purity="k18wg" />

          <WeightPriceTable purities={["k18wg"]} />


          <h2>1. K18WGとは — 純度75%のホワイトゴールド</h2>

          <p>K18WGは、<strong>「18金ホワイトゴールド」</strong>の略称です。「WG」は「White Gold」の頭文字。純度の表記としては「750」と打刻されることもあります。</p>

          <p>金合金の組成:</p>
          <ul>
            <li>純金：75%（K18と同じ）</li>
            <li>パラジウム・銀・ニッケル等の白色金属：25%</li>
          </ul>

          <p>つまり、<strong>K18WGとK18（イエローゴールド）は、配合される割合や金属の種類が違うだけで、純金の含有率は同じ75%</strong>です。</p>

          <h2>2. K18WGの買取相場 — K18と同価格</h2>

          <p>K18WGの買取相場は、<strong>通常のK18（イエローゴールド）と完全に同じ</strong>です。なぜなら、業者の査定基準は「純金含有量」と「重量」だからです。</p>

          <p>例えば、2026年5月時点の参考相場:</p>
          <ul>
            <li>K18WG：1gあたりの最新目安は本ページ冒頭の「本日の買取相場」カード参照（毎日自動更新）</li>
            <li>K18WG：1gあたり 同上</li>
          </ul>

          <p>具体的な最新価格は、田中貴金属工業など金市場の店頭価格を参照ください。買取業者は、店頭価格から1〜10%程度の手数料を引いた金額を提示します。</p>

          <h2>3. K18WGの刻印の見方</h2>

          <p>ジュエリーの内側（リング内側、ネックレスの留め具付近）に以下のような刻印があります:</p>
          <ul>
            <li><strong>「K18WG」</strong> — 最も一般的な表記</li>
            <li><strong>「750」</strong> — 純度のみの表記（K18相当）</li>
            <li><strong>「18K」「18KT」</strong> — 海外製品でも見られる表記</li>
          </ul>

          <p>注意すべき刻印:</p>
          <ul>
            <li><strong>「K18GP」</strong> — Gold Plated。金メッキ製品で、買取価格は数十円〜数百円程度</li>
            <li><strong>「K18GF」</strong> — Gold Filled。金張り（厚メッキ）。買取価格はGPより少し高い程度</li>
          </ul>

          <h2>4. K18WGが変色する理由と買取への影響</h2>

          <p>K18WGは、長く使うと表面のロジウムメッキが剥がれ、わずかに黄色っぽく見えることがあります。これは<strong>「変色」ではなく、ロジウムメッキの劣化</strong>です。</p>

          <p><strong>買取価格への影響: なし</strong></p>

          <p>業者は表面状態ではなく、内部の金含有量で査定するため、変色・黄ばみがあっても価格は下がりません。「変色したから売れないかも」と心配する必要はありません。</p>

          <h2>5. K18WG製品の種類別買取の注意点</h2>

          <p>K18WG製品でよく見るアイテムと、買取時のポイント:</p>
          <ul>
            <li><strong>リング・ネックレス</strong>: 切れていても問題なく買取可（金の価値は重量で決まる）</li>
            <li><strong>ダイヤモンドジュエリー</strong>: 石部分も別査定。Vsの大粒なら石だけで数万円〜</li>
            <li><strong>結婚指輪・婚約指輪</strong>: ブランド品なら<Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ</Link>・<Link href="/articles/tiffany-kaitori/" className="text-accent hover:underline">ティファニー</Link>系の専門ページも参照</li>
            <li><strong>メガネ・腕時計</strong>: WG使用部分のみ価値（フレーム重量で査定）</li>
          </ul>

          <h2>6. K18WGを高く売る5つのコツ</h2>

          <ol>
            <li><strong>複数業者で相見積もり</strong>: 同じK18WGでも業者により10〜15%の差が出る</li>
            <li><strong>金相場が高い日に売る</strong>: 1週間で1g数百円〜千円単位で変動。田中貴金属の店頭価格を毎日チェック</li>
            <li><strong>付属品を揃える</strong>: ブランドジュエリーは保証書・箱で5〜10%アップ</li>
            <li><strong>無理にクリーニングしない</strong>: 表面を磨いても買取額は変わらず、傷を増やすリスク</li>
            <li><strong>業者の手数料を確認</strong>: 「相場の98%」など手数料率を明示している業者が安心</li>
          </ol>

          <h2>7. K18WG買取のおすすめ業者比較</h2>

          <div className="table-wrapper">
            <table>
              <thead><tr><th>業者</th><th>方式</th><th>特徴</th></tr></thead>
              <tbody>
                <tr><td>ヒカカク！</td><td>一括査定</td><td>1回で複数業者の見積もり比較</td></tr>
                <tr><td>買取大吉</td><td>店頭・出張</td><td>全国700店舗以上の大手</td></tr>
                <tr><td>ウリエル</td><td>出張買取</td><td>自宅で査定、即現金化</td></tr>
                <tr><td>ティファナ</td><td>店頭・宅配</td><td>初心者にも分かりやすい</td></tr>
              </tbody>
            </table>
          </div>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18WGとプラチナ（Pt900）はどちらが高い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">現在は金相場の高騰により、K18WG（純度75%）の方が高い場合が多いです。同じ重量なら、K18WGの方が買取価格が高くなる傾向。ただし時期により逆転することもあります。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18WGの変色・くすみは買取価格に影響しますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">影響しません。買取業者は内部の金含有量で査定するため、表面のロジウムメッキ剥がれや黄ばみがあっても価格は同じです。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18WGとK18の見分け方は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">色で判断: K18WGは銀白色、K18はやや赤みのあるイエロー。刻印で確認: K18WGは「K18WG」「750」、K18は「K18」「750」。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>石付きのK18WGリングはどう査定される？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">金部分と石部分が別査定。例えばダイヤモンドが0.3ct以上の品質ならGIA鑑定書付きで数万円〜の追加査定。石なし無垢のK18WG部分の価値は重量で計算。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>K18WGはどこで売るのが一番高い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">金専門の買取業者（リファスタ、ゴールドプラザ等）か、一括査定サイト（ヒカカク！）で複数比較するのがおすすめ。総合リサイクルショップは金専門でない場合があり、買取価格が低い傾向。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="purity" />
          <RelatedArticles
            currentSlug="k18wg-kaitori"
            relatedSlugs={["k24-kaitori", "k22-kaitori", "k18-kaitori", "k14-kaitori", "k10-kaitori", "k18pg-kaitori", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-nobebo-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori"]}
          />
        </article>
      </div>
    </>
  );
}
