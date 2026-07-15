import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import { TodayPriceAnswer, formatDateJa } from "@/components/TodayPriceAnswer";
import goldData from "@/data/gold-spot-prices.json";

const k18Price = goldData.purity_buyback_estimate_per_g.k18;
const k10Price = goldData.purity_buyback_estimate_per_g.k10;
const [priceYear, priceMonth, priceDay] = goldData.date.split("-").map(Number);
const priceDateJa = formatDateJa(goldData.date);

const todayFaq = {
  q: "今日のK18（18金）・K10（10金）の1g買取価格はいくらですか？",
  a: `本日（${priceDateJa}時点）の買取目安は、K18が1gあたり${k18Price.toLocaleString()}円、K10が${k10Price.toLocaleString()}円です（毎朝自動更新。K18WG・K18PGはK18と同額）。田中貴金属公表の店頭買取価格をもとに算出した参考値で、実際の査定額は業者・状態により異なります。お手持ちの重量での概算は、本ページの重量別早見表とグラム計算機でご確認ください。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金の品位別買取ガイド", item: "https://gold-biyori.com/articles/kinseido-kaitori-guide/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `金の品位別買取相場 今日K18は1g${k18Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】K10・K18WG・PGの査定額と刻印の見方`,
    description: `本日（${priceMonth}月${priceDay}日）の買取相場はK18が1g${k18Price.toLocaleString()}円、K10が${k10Price.toLocaleString()}円（毎朝自動更新）。K18WG・K18PGとの価格差、刻印の見方、GP/GFメッキの注意点、高く売るコツまで1ページで解説。`,
    datePublished: "2026-07-03",
    dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: todayFaq.q, acceptedAnswer: { "@type": "Answer", text: todayFaq.a } },
      { "@type": "Question", name: "K18とK10の買取価格はどのくらい違いますか？", acceptedAnswer: { "@type": "Answer", text: "K18は金の純度75%、K10は41.7%です。買取価格は純金含有量に比例するため、同じ重量ならK10はK18の約55%の価格になります。最新の1gあたり目安は本ページの「本日の買取相場」カードと重量別早見表（毎日自動更新）でご確認ください。" } },
      { "@type": "Question", name: "K18WGやK18PGはK18（イエロー）より安くなりますか？", acceptedAnswer: { "@type": "Answer", text: "なりません。K18WG（ホワイトゴールド）もK18PG（ピンクゴールド）も純金含有量は同じ75%で、業者の査定基準は「純金含有量×重量」のため、買取価格はK18と同じです。" } },
      { "@type": "Question", name: "ホワイトゴールドの黄ばみやピンクゴールドの変色は減額されますか？", acceptedAnswer: { "@type": "Answer", text: "減額されません。K18WGの黄ばみは表面のロジウムメッキの劣化、K18PGのくすみは銅の酸化が主因で、いずれも内部の金含有量には影響しないため、買取価格は変わりません。" } },
      { "@type": "Question", name: "「750」「417」という刻印は何ですか？", acceptedAnswer: { "@type": "Answer", text: "千分率表記です。「750」は金750/1000（75%）＝K18相当、「417」（または416）は金417/1000（41.7%）＝K10相当を意味します。海外製品に多い表記です。" } },
      { "@type": "Question", name: "K18GPやK10GPの製品も買取できますか？", acceptedAnswer: { "@type": "Answer", text: "GP（Gold Plated＝金メッキ）やGF（Gold Filled＝金張り）は金の含有量が非常に少ないため、ほとんどの業者で買取不可または数十円程度です。刻印にGP・GFが付いていないか必ず確認してください。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: `金の品位別買取相場 今日K18は1g${k18Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】K10・K18WG・PGの査定額と刻印の見方`,
  description: `本日（${priceMonth}月${priceDay}日）の買取相場はK18が1g${k18Price.toLocaleString()}円、K10が${k10Price.toLocaleString()}円（毎朝自動更新）。K18WG・K18PGとの価格差、刻印の見方、GP/GFメッキの注意点、高く売るコツまで1ページで解説。`,
  alternates: { canonical: "https://gold-biyori.com/articles/kinseido-kaitori-guide/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">K10・K18製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">品位を問わず、金製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinseidoKaitoriGuidePage() {
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
            <li><span className="text-foreground">金の品位別買取ガイド</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【{priceYear}年{priceMonth}月】金の品位別買取相場ガイド — K10・K18・K18WG・K18PG</h1>
          <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

          <TodayPriceAnswer purity="k18" />

          <p>金製品の買取価格は<strong>「品位（純度）×重量×当日の金相場」</strong>で決まります。この記事では、日本で最も流通量が多い<strong>K18（18金）</strong>、手頃な価格で人気の<strong>K10（10金）</strong>、そしてカラーバリエーションである<strong>K18WG（ホワイトゴールド）・K18PG（ピンクゴールド）</strong>の買取知識を1ページにまとめました。</p>

          <p>この記事を読めば以下のことがわかります。</p>
          <ul>
            <li>品位（K10/K18など）ごとの純度と買取価格の関係</li>
            <li>K18WG・K18PGがK18（イエロー）と同価格で買い取られる理由</li>
            <li>刻印（K18・750・417・GP/GFなど）の見方</li>
            <li>変色・黄ばみ・切れたチェーンが査定に与える影響</li>
            <li>品位を問わず高く売るためのコツとおすすめ買取業者</li>
          </ul>

          <GoldSpotPriceCard purity="k18" />

          <div id="weight-table">
            <WeightPriceTable purities={["k18", "k18wg", "k18pg", "k10"]} />
          </div>

          <h2>品位（純度）と買取価格の関係</h2>

          <p>「K」はカラット（Karat）の略で、純金を24分率で表します。K18なら24分の18、つまり<strong>金の含有率75%</strong>です。買取価格は純金含有量に比例するため、品位がわかれば相場感がつかめます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>品位</th>
                  <th>金の含有率</th>
                  <th>千分率刻印</th>
                  <th>K24比の価格水準</th>
                  <th>主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K24</strong></td><td>99.9%以上</td><td>999 / 1000</td><td>100%</td><td>インゴット・金貨</td></tr>
                <tr><td><strong>K18</strong></td><td>75%</td><td>750</td><td>約75%</td><td>国内ジュエリーの主流</td></tr>
                <tr><td><strong>K18WG</strong></td><td>75%</td><td>750</td><td>約75%（K18と同じ）</td><td>銀白色のジュエリー</td></tr>
                <tr><td><strong>K18PG</strong></td><td>75%</td><td>750</td><td>約75%（K18と同じ）</td><td>ピンク色のジュエリー</td></tr>
                <tr><td><strong>K14</strong></td><td>58.5%</td><td>585</td><td>約59%</td><td>海外ブランド・ハワイアン</td></tr>
                <tr><td><strong>K10</strong></td><td>41.7%</td><td>417 / 416</td><td>約42%</td><td>国内カジュアルブランド</td></tr>
              </tbody>
            </table>
          </div>

          <p>1gあたりの最新価格は毎日変動します。上の<strong>「本日の買取相場」カードと重量別早見表（毎日自動更新）</strong>、または<Link href="/souba-dashboard/" className="text-accent hover:underline">相場ダッシュボード</Link>でご確認ください。K14・K22・K24は個別ガイド（<Link href="/articles/k14-kaitori/" className="text-accent hover:underline">K14</Link>／<Link href="/articles/k22-kaitori/" className="text-accent hover:underline">K22</Link>／<Link href="/articles/k24-kaitori/" className="text-accent hover:underline">K24</Link>）で詳しく解説しています。</p>

          <h2>K18（18金）— 日本で最も流通する品位</h2>

          <p>K18は<strong>金の純度が75%（750/1000）</strong>の合金です。残りの25%は銀、銅、パラジウムなどが混ぜられています。ネックレス、指輪、ブレスレットなど、日本のジュエリーで最も多く使われています。</p>

          <p>純金（K24）は美しい輝きを持つ一方で<strong>非常に柔らかく</strong>、日常使いでは変形や傷がつきやすい素材です。K18は他の金属を混ぜることで<strong>硬度と耐久性を確保</strong>しつつ、金の色味と資産価値を維持したバランスの良い合金であり、世界中のジュエリーで採用されています。</p>

          <h3>K18製品の査定でよくある心配ごと</h3>
          <ul>
            <li><strong>切れたネックレス・壊れた留め具：</strong>問題なく買取可能。金の買取は素材価値がベースのため、状態は価格に影響しません</li>
            <li><strong>宝石付きの指輪：</strong>金の素材価値＋宝石の価値で査定。宝石の評価は業者差が大きいため、宝石鑑定に強い業者にも見積もりを</li>
            <li><strong>ブランドジュエリー：</strong>ティファニー・カルティエ・ブルガリなどは素材価格の1.5〜3倍以上になることも。ブランド買取店にも見積もりを取りましょう</li>
            <li><strong>ピアス片方のみ：</strong>重量ベースなので片方だけでも買取可能</li>
          </ul>

          <h2>K10（10金）— 手頃な価格で人気の品位</h2>

          <p>K10は<strong>金の純度が41.7%（417/1000）</strong>の合金です。4℃、スタージュエリー、ヴァンドーム青山など、日本のジュエリーブランドで広く採用されています。</p>

          <ul>
            <li><strong>価格が手頃：</strong>K18の約半分の価格で金のジュエリーが購入できる</li>
            <li><strong>硬度が高い：</strong>金の含有率が低いぶんK18より硬く、傷がつきにくい</li>
            <li><strong>変色しにくい場合がある：</strong>合金比率の関係で日常使いに強い</li>
          </ul>

          <p>「K10だから大した金額にならない」と思われがちですが、金価格が歴史的高値にある現在、<strong>K10でも十分な買取価格</strong>が期待できます。K10製品は1点の重量が軽いことが多いため、複数まとめて査定に出すのが効率的です。なお、イギリスなどで流通するK9（375刻印・金37.5%）も買取可能で、K10よりわずかに低い価格になります。</p>

          <h2>K18WG（ホワイトゴールド）— K18と同価格</h2>

          <p>K18WGは「18金ホワイトゴールド」の略で、<strong>純金75%＋パラジウム・銀・ニッケル等の白色金属25%</strong>の合金です。見た目はプラチナに似ていますが、本質はK18と同じ18金です。</p>

          <p>買取相場は<strong>通常のK18（イエロー）と完全に同じ</strong>です。業者の査定基準は「純金含有量×重量」であり、色をつくる副金属の違いは価格に影響しないためです。</p>

          <h3>黄ばみ・変色は減額されない</h3>
          <p>K18WGは長く使うと表面のロジウムメッキが剥がれ、わずかに黄色っぽく見えることがあります。これは変色ではなく<strong>メッキの劣化</strong>で、内部の金含有量には影響しないため、<strong>買取価格は下がりません</strong>。売却前にクリーニングや磨き直しをする必要もありません。</p>

          <h3>プラチナとの見分け方</h3>
          <p>K18WGとプラチナは見た目での判別が難しいため、刻印で確認します。K18WGなら「K18WG」「750」、プラチナなら「Pt900」「Pt950」などの刻印があります。現在は金相場の高騰により、同じ重量ならK18WG（純度75%）の方がプラチナより高くなる場合が多いですが、時期により逆転することもあります。</p>

          <h2>K18PG（ピンクゴールド）— こちらもK18と同価格</h2>

          <p>K18PGは「18金ピンクゴールド」の略で、<strong>純金75%＋銅20〜25%＋銀・パラジウム等</strong>の合金です。銅の割合が多いほどピンクが濃くなり、濃いものは「ローズゴールド」と呼ばれることもありますが、刻印が「K18PG」「750」であれば買取上の扱いは同じです。</p>

          <p>買取価格はK18・K18WGと同じ。<strong>銅の酸化による色あせ・くすみがあっても減額されません</strong>。サイズ直しの穴や凹みがあるリングも、重量で査定されるため問題なく買取できます。</p>

          <h2>刻印の見方 — 品位別一覧</h2>

          <p>刻印はネックレスなら留め金付近、指輪ならリング内側、ピアスならポスト部分にあります。見えにくい場合は10倍程度のルーペを使うと確認できます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>刻印</th>
                  <th>意味</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K18 / 750</strong></td><td>18金（純度75%）</td><td>K18は日本式、750は国際式</td></tr>
                <tr><td><strong>18K / 18KT</strong></td><td>18金（海外式表記）</td><td>正規品にも使われるが、品質管理が不十分な製品もあり要注意</td></tr>
                <tr><td><strong>K10 / 417 / 416</strong></td><td>10金（純度41.7%）</td><td>417・416は千分率表記</td></tr>
                <tr><td><strong>K18WG / K10WG</strong></td><td>ホワイトゴールド</td><td>買取価格は同品位のイエローと同じ</td></tr>
                <tr><td><strong>K18PG / K10PG</strong></td><td>ピンクゴールド</td><td>同上</td></tr>
                <tr><td><strong>K18YG / K10YG</strong></td><td>イエローゴールド</td><td>通常の金色</td></tr>
                <tr><td><strong>GP</strong></td><td>Gold Plated（金メッキ）</td><td>金の価値はほぼない。買取不可が多い</td></tr>
                <tr><td><strong>GF</strong></td><td>Gold Filled（金張り）</td><td>GPより金は多いが買取価格は非常に低い</td></tr>
              </tbody>
            </table>
          </div>

          <h3>最重要の注意点 — GP・GFはメッキ製品</h3>

          <p>刻印に<strong>「GP」「GF」が含まれる製品は金メッキ・金張り</strong>であり、K18やK10の無垢（ソリッド）製品とは全く別物です。金の含有量が極めて少ないため、ほとんどの業者で買取不可または数十円程度になります。売却前に必ずGP・GFの有無を確認しましょう。</p>

          <p>刻印がない古い製品や海外製品でも、金であれば買取可能です。大手買取業者ならX線蛍光分析（XRF）や比重計で純度を無料測定してくれます。判断に迷ったら、そのまま査定に出すのが確実です。</p>

          <CtaBox />

          <h2>品位を問わず高く売る5つのポイント</h2>

          <ol>
            <li>
              <strong>複数業者に見積もりを取る</strong>
              <p>買取価格は業者によって1gあたり数百円の差が出ます。重量のあるネックレスやまとめ売りでは数千円〜数万円の差になるため、最低3社は比較しましょう。</p>
            </li>
            <li>
              <strong>ブランド品はブランド買取にも見積もりを取る</strong>
              <p>ティファニー、カルティエ、4℃などのジュエリーは、金の素材価値以上のブランド価格がつくことがあります。金買取専門店とブランド買取店の両方に査定を依頼し、高い方に売却しましょう。</p>
            </li>
            <li>
              <strong>まとめて売る</strong>
              <p>K10やK18のアクセサリーが複数ある場合は、まとめて査定に出すと総重量が増え、1gあたりの単価を上乗せしてもらえる場合があります。</p>
            </li>
            <li>
              <strong>付属品を揃える</strong>
              <p>保証書、鑑定書、専用ケース、購入レシートがあれば、特にブランド品の査定額アップにつながります。</p>
            </li>
            <li>
              <strong>相場が高いタイミングで売る</strong>
              <p>金の買取相場は毎日変動します。本ページ冒頭の相場カードや<Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金買取相場ページ</Link>で最新価格を確認し、納得できる水準で売却しましょう。</p>
            </li>
          </ol>

          <h2>4社比較 — 品位別買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者の買取価格を一括比較。品位を問わず最高値が見つかりやすい</td><td>最高値で売りたい</td></tr>
                <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>全品位対応。刻印なしでもX線分析で純度測定。即日現金化</td><td>即現金化したい</td></tr>
                <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅で完結。出張費無料。まとめ売りに便利</td><td>自宅で完結したい</td></tr>
                <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>3つの方法から選択可能。貴金属まとめて査定OK</td><td>方法を選びたい</td></tr>
              </tbody>
            </table>
          </div>

          <h2>品位別買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              todayFaq,
              {
                q: "K18とK10の買取価格はどのくらい違いますか？",
                a: "K18は金の純度75%、K10は41.7%です。買取価格は純金含有量に比例するため、同じ重量ならK10はK18の約55%の価格になります。最新の1gあたり目安は本ページの「本日の買取相場」カードと重量別早見表（毎日自動更新）でご確認ください。",
              },
              {
                q: "K18WGやK18PGはK18（イエロー）より安くなりますか？",
                a: "なりません。K18WG（ホワイトゴールド）もK18PG（ピンクゴールド）も純金含有量は同じ75%で、業者の査定基準は「純金含有量×重量」のため、買取価格はK18と同じです。",
              },
              {
                q: "ホワイトゴールドの黄ばみやピンクゴールドの変色は減額されますか？",
                a: "減額されません。K18WGの黄ばみは表面のロジウムメッキの劣化、K18PGのくすみは銅の酸化が主因で、いずれも内部の金含有量には影響しないため、買取価格は変わりません。無理に磨くと傷を増やすリスクがあるため、そのまま査定に出しましょう。",
              },
              {
                q: "「750」「417」という刻印は何ですか？",
                a: "千分率表記です。「750」は金750/1000（75%）＝K18相当、「417」（または416）は金417/1000（41.7%）＝K10相当を意味します。海外製品に多い表記で、いずれも問題なく買取できます。",
              },
              {
                q: "K18GPやK10GPの製品も買取できますか？",
                a: "GP（Gold Plated＝金メッキ）やGF（Gold Filled＝金張り）は金の含有量が非常に少ないため、ほとんどの業者で買取不可または数十円程度です。刻印にGP・GFが付いていないか必ず確認してください。判断が難しい場合は買取業者のX線分析で正確に判定してもらえます。",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 font-medium text-sm">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <GoldPriceTrend />
          <ExpertQA category="purity" />
          {/* p0-winner-cluster */}
          <div className="not-prose my-8">
            <GoldSimulator />
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
            <div className="flex flex-wrap gap-2">
            <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
            <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット（喜平・テニス）</Link>
            <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
            <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
            <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
            <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
            <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
            </div>
          </div>
          <RelatedArticles
            currentSlug="kinseido-kaitori-guide"
            relatedSlugs={["k18-kaitori", "k10-kaitori", "k24-kaitori", "k22-kaitori", "k14-kaitori", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-nobebo-kaitori", "kin-jundo-mikata", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori"]}
          />

          <DealerComparisonTable
            heading="K10・K18の買取に強い業者比較"
            intro="品位別の金買取依頼前に、店舗数・査定スピード・手数料を公式情報で比較できます。"
          />

          <h2>まとめ</h2>

          <p>金製品の買取価格は「品位×重量×当日の相場」で決まります。K18は純度75%、K10は41.7%で、<strong>K18WG・K18PGはカラーが違うだけでK18と同価格</strong>です。変色・黄ばみ・チェーン切れは減額要因になりません。</p>

          <p>売却時のポイントは以下の3つです。</p>

          <ol>
            <li><strong>刻印を確認する</strong>（GP・GFはメッキ製品なので注意）</li>
            <li><strong>複数業者に見積もりを取る</strong>（一括査定が効率的）</li>
            <li><strong>ブランド品はブランド買取にも査定を依頼する</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちの金製品の価値を確認してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
