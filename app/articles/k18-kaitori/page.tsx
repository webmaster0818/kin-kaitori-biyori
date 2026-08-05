import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import { TodayPriceAnswer, formatDateJa } from "@/components/TodayPriceAnswer";
import goldData from "@/data/gold-spot-prices.json";

const k24Price = goldData.purity_buyback_estimate_per_g.k24;
const k22Price = goldData.purity_buyback_estimate_per_g.k22;
const k18Price = goldData.purity_buyback_estimate_per_g.k18;
const k14Price = goldData.purity_buyback_estimate_per_g.k14;
const k10Price = goldData.purity_buyback_estimate_per_g.k10;
const [, priceMonth, priceDay] = goldData.date.split("-").map(Number);
const priceDateJa = formatDateJa(goldData.date);

// タイトルは metadata と ArticleSchema headline で共有し、文言のズレ（罠）を防ぐ
const pageTitle = `K18（18金）の買取相場 今日1g${k18Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】ネックレス・指輪の製品別査定も`;

const todayFaq = {
  q: "今日のK18（18金）の1g買取価格はいくらですか？",
  a: `本日（${priceDateJa}時点）のK18買取相場の目安は1gあたり${k18Price.toLocaleString()}円です（毎朝自動更新）。田中貴金属公表の店頭買取価格をもとに算出した参考値で、実際の査定額は業者・状態により異なります。ホワイトゴールド（K18WG）・ピンクゴールド（K18PG）も金含有率は同じ75%のため同額が目安です。お手持ちの重量での概算は、本ページの重量別早見表とグラム計算機でご確認ください。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "K18買取ガイド", item: "https://gold-biyori.com/articles/k18-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: todayFaq.q, acceptedAnswer: { "@type": "Answer", text: todayFaq.a } },
      { "@type": "Question", name: "K18の買取価格は毎日変わりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、国際金価格と為替レートにより毎日変動します。最新の目安は本ページ冒頭の「本日のK18買取相場」と重量別早見表（毎朝自動更新）でご確認ください。K18はK24（純金）の75%の金を含むため、買取価格もK24の約75%の水準です。" } },
      { "@type": "Question", name: "「K18」と「750」の刻印は同じ意味ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、同じ意味です。「K18」はカラット表記で24分の18＝金75%、「750」は千分率表記で750/1000＝金75%を示します。どちらもK18（18金）の正規の刻印で、買取価格は同じです。海外製品では「750」「18K」「18ct」と刻印されることが多いです。" } },
      { "@type": "Question", name: "K18ホワイトゴールド（K18WG）やピンクゴールド（K18PG）は安くなりますか？", acceptedAnswer: { "@type": "Answer", text: "なりません。K18WG（ホワイトゴールド）もK18PG（ピンクゴールド）も金の含有率は同じ75%で、業者の査定基準は「純金含有量×重量」のため、買取価格はイエローゴールドのK18と同額が目安です。色の違いは混ぜる金属（WGはパラジウム等、PGは銅）の差であり、金の量は変わりません。" } },
      { "@type": "Question", name: "K18ネックレスやリングの査定額はどう決まりますか？", acceptedAnswer: { "@type": "Answer", text: "金の買取は基本的に「1gあたりの相場×重量」で決まります。デザインや購入価格ではなく、金の含有量が価格の中心です。ダイヤなどの宝石が付いている場合は、金の素材価値に宝石の価値が上乗せされます。ブランドジュエリーはブランド価値が加わることもあります。" } },
      { "@type": "Question", name: "K18の刻印がない金製品も売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても買取は可能です。買取業者はX線蛍光分析装置（XRF）で正確に純度を測定しますので、刻印が薄い・ない製品でも適正な査定を受けられます。ただし判定に多少時間がかかる場合があります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    datePublished: "2026-07-16",
    dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: pageTitle,
  description: `本日（${priceMonth}月${priceDay}日）のK18（18金・純度75.0%）買取相場は1gあたり${k18Price.toLocaleString()}円（毎朝自動更新）。ネックレス・指輪・ブレスレットの製品別査定、K18/750刻印の見分け方、ホワイトゴールド・ピンクゴールドの扱い、K24・K22・K14との価格比較、高く売るコツとおすすめ業者4社を解説。`,
  alternates: { canonical: "https://gold-biyori.com/articles/k18-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K18製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K18は最も流通量が多く、どの業者でも買取可能です。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function K18KaitoriPage() {
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
          <li><span className="text-foreground">K18買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">K18（18金）買取相場 — 今日の1g価格と製品別の査定額</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <TodayPriceAnswer purity="k18" />

        <p>K18（18金）は、<strong>純度75.0%</strong>の金合金で、日本国内で流通する金ジュエリーの<strong>最も主力となる純度</strong>です。ネックレス・リング・ブレスレット・ピアスなど、私たちが「金製品」と聞いて思い浮かべるアクセサリーの多くがK18でできています。</p>

        <p>「K18ネックレスはいくらで売れる？」「K18とK24の価格差は？」「ホワイトゴールドは安くなる？」——この記事では、K18に特化した<strong>買取相場・製品別の査定額・高く売るコツ</strong>を、毎朝更新の実勢データとともに解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>K18（18金）の最新買取相場（1gあたりの価格）</li>
          <li>ネックレス・指輪・ブレスレットなど製品別の査定の考え方</li>
          <li>「K18」「750」刻印の見分け方</li>
          <li>ホワイトゴールド（K18WG）・ピンクゴールド（K18PG）の扱い</li>
          <li>K24・K22・K14との買取価格の違い</li>
        </ul>

        <CtaBox />

        <GoldSpotPriceCard purity="k18" />

        <div id="weight-table">
          <WeightPriceTable purities={["k18"]} />
        </div>


        <h2>K18（18金）とは — 純度75.0%、金製品の主役</h2>

        <p>K18は<strong>金の純度が75.0%（750/1000）</strong>の合金です。残りの25%には銀・銅・パラジウムなどが混ぜられています。「カラット」の24分の18、つまり全体の4分の3が金でできています。</p>

        <p>純金（K24）は柔らかく傷つきやすいため、日常的に身につけるジュエリーには不向きです。K18は金の美しさを保ちつつ、銀や銅を加えることで<strong>実用に耐える硬さと耐久性</strong>を実現しています。この「価値と実用性のバランス」の良さから、日本のジュエリーはK18が標準になっています。</p>

        <p>K18の買取価格は<strong>K24（純金）の約75%の水準</strong>です。K14と比べると1gあたり約{(k18Price - k14Price).toLocaleString()}円高く、K22と比べると約{(k22Price - k18Price).toLocaleString()}円安い目安です（{priceDateJa}時点）。</p>

        <h3>純度別の買取価格の位置づけ</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>金含有率</th>
                <th>1gあたり買取目安（{priceMonth}月{priceDay}日）</th>
                <th>主な用途</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>99.99%</td><td>約{k24Price.toLocaleString()}円</td><td>インゴット・金貨</td></tr>
              <tr><td><strong>K22（22金）</strong></td><td>91.7%</td><td>約{k22Price.toLocaleString()}円</td><td>金貨・海外ジュエリー</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>75.0%</td><td><strong>約{k18Price.toLocaleString()}円</strong></td><td>ジュエリー全般（主力）</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>58.5%</td><td>約{k14Price.toLocaleString()}円</td><td>海外製アクセサリー</td></tr>
              <tr><td><strong>K10（10金）</strong></td><td>41.7%</td><td>約{k10Price.toLocaleString()}円</td><td>低価格アクセサリー</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-warm-gray">※上記は田中貴金属公表のK24店頭買取価格から純度換算した参考値（毎日自動更新）です。金額を保証するものではありません。品位ごとの詳しい解説は<Link href="/articles/kinseido-kaitori-guide/" className="text-accent hover:underline">金の品位別・買取相場ガイド</Link>もご覧ください。</p>

        <h2>K18製品別の買取の考え方</h2>

        <p>金の買取は、デザインや購入価格ではなく<strong>「1gあたりの相場 × 重量」</strong>が基本です。以下は代表的なK18製品と、査定で見られるポイントです。重量が分かれば、<Link href="/kin-kaitori-keisanki/" className="text-accent hover:underline">グラム計算機</Link>で今日の目安をすぐ計算できます。</p>

        <h3>K18ネックレス・チェーン</h3>

        <p>K18ネックレスは金製品の中で最も売却相談が多い品目です。喜平・あずき・ベネチアンなどチェーンの種類にかかわらず、<strong>金の重量が価格の中心</strong>です。留め金（クラスプ）付近に「K18」「750」の刻印があります。太めの喜平ネックレスは重量があるため高額査定になりやすい品目です。詳しくは<Link href="/articles/kin-necklace-kaitori/" className="text-accent hover:underline">金ネックレス買取ガイド</Link>をご覧ください。</p>

        <h3>K18リング・指輪</h3>

        <p>指輪は内側に「K18」「750」の刻印があります。<strong>ダイヤなどの宝石が付いている場合</strong>は、金の素材価値に宝石の価値が上乗せされます。鑑定書があれば持参しましょう。結婚指輪・ファッションリングいずれも金の重量ベースで査定されます。詳しくは<Link href="/articles/kin-yubiwa-kaitori/" className="text-accent hover:underline">金の指輪・リング買取ガイド</Link>をご覧ください。</p>

        <h3>K18ブレスレット・バングル</h3>

        <p>喜平ブレスレットやテニスブレスレットもK18が主流です。喜平は重量、テニスブレスレットは金枠に加えてダイヤの評価が加わります。詳しくは<Link href="/articles/kin-bracelet-kaitori/" className="text-accent hover:underline">金ブレスレット買取ガイド</Link>をご確認ください。</p>

        <h3>K18時計・その他</h3>

        <p>K18ケースの高級時計は、<strong>ブランド価値が金の素材価値を大きく上回る</strong>ことが多く、金属買取業者よりも時計専門店の方が高値になる場合があります。両方に見積もりを取って比較しましょう。ピアス・カフス・メガネフレームなどもK18製品として買取対象です。</p>

        <CtaBox />

        <h2>「K18」「750」刻印の見分け方</h2>

        <p>K18製品には、金の純度を示す刻印（ホールマーク）が入っています。以下のいずれかがあればK18（金75%）です。</p>

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
              <tr><td><strong>K18 / 18K</strong></td><td>カラット表記（24分の18＝金75%）</td><td>日本製に多い</td></tr>
              <tr><td><strong>750</strong></td><td>千分率表記（750/1000＝金75%）</td><td>海外製・近年の製品に多い</td></tr>
              <tr><td><strong>18ct / 18kt</strong></td><td>英国・米国式のカラット表記</td><td>海外ジュエリー</td></tr>
              <tr><td><strong>K18WG / K18PG</strong></td><td>ホワイト／ピンクゴールドのK18</td><td>金含有率は同じ75%</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-warm-gray text-sm"><strong>注意：</strong>「K18GP」「K18GF」は<strong>金メッキ（Gold Plated）・金張り（Gold Filled）</strong>を意味し、金75%の製品ではありません。表面だけが金の製品で、買取価格は大きく下がるか対象外になります。「GP」「GF」の2文字がある場合は無垢のK18ではない点にご注意ください。</p>

        <p>刻印は指輪なら内側、ネックレス・ブレスレットは留め金付近にあります。ルーペ（10倍）を使うと見つけやすくなります。刻印が見えない・薄い場合も、買取業者がX線分析で正確に純度を測定してくれます。刻印の読み方は<Link href="/articles/kin-jundo-mikata/" className="text-accent hover:underline">金の純度の見方ガイド</Link>でも詳しく解説しています。</p>

        <h2>ホワイトゴールド・ピンクゴールドも同じ金75%</h2>

        <p>「K18WG（ホワイトゴールド）は安くなるのでは？」とよく質問を受けますが、<strong>買取価格はイエローゴールドのK18と同額が目安</strong>です。理由は金の含有率が同じ75%だからです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>種類</th>
                <th>金含有率</th>
                <th>混ぜる金属</th>
                <th>買取価格</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>K18イエローゴールド</td><td>75%</td><td>銀・銅</td><td>基準</td></tr>
              <tr><td>K18WG（ホワイトゴールド）</td><td>75%</td><td>パラジウム等（＋ロジウムメッキ）</td><td>同額が目安</td></tr>
              <tr><td>K18PG（ピンクゴールド）</td><td>75%</td><td>銅を多めに</td><td>同額が目安</td></tr>
            </tbody>
          </table>
        </div>

        <p>K18WGは表面のロジウムメッキが経年で剥がれて黄ばむことがありますが、これは<strong>表面のメッキの劣化であり内部の金含有量には影響しない</strong>ため、査定額は下がりません。K18PGの銅の酸化によるくすみも同様です。安心して査定に出しましょう。</p>

        <h2>K18を高く売る5つのポイント</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>

        <p>K18の買取価格は業者によって1gあたり数百円の差が出ます。20gのネックレスなら、1gあたり300円の差で<strong>6,000円もの差額</strong>になります。必ず3社以上に見積もりを取りましょう。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>のような一括査定なら一度の申し込みで複数業者を比較できます。業者選びは<Link href="/articles/kin-kaitori-osusume/" className="text-accent hover:underline">おすすめ業者比較</Link>も参考にしてください。</p>

        <h3>2. 手数料・条件を事前に確認する</h3>

        <p>「1gの買取単価が高くても、手数料が引かれて手取りが減る」ケースがあります。査定料・出張費・宝石取り外し料・宅配返送料などの条件を事前に確認しましょう。<Link href="/articles/kin-kaitori-tesuryo-hikaku/" className="text-accent hover:underline">手数料の比較記事</Link>で各社の条件を整理しています。</p>

        <h3>3. 宝石付きは鑑定書を用意する</h3>

        <p>ダイヤなどの宝石が付いたK18製品は、<strong>鑑定書・保証書</strong>があると宝石部分の評価がスムーズになり、査定額アップにつながります。売却前に付属品を探しておきましょう。</p>

        <h3>4. 相場が高いタイミングを狙う</h3>

        <p>金の買取価格は国際相場と為替に連動して毎日変動します。本ページ冒頭の「本日のK18買取相場」で最新の水準を確認できます。ただし「もっと上がるかも」と待ちすぎるのも禁物です。現在の価格に納得できるなら、売却を決断するのが合理的です。売り時の考え方は<Link href="/articles/kin-uridoki-2026/" className="text-accent hover:underline">金の売り時ガイド</Link>で解説しています。</p>

        <h3>5. まとめ売りで単価が上がることもある</h3>

        <p>使わないK18製品が複数ある場合、まとめて査定に出すと合計重量が増え、業者によっては単価アップやキャンペーン対象になることがあります。片方だけのピアスや切れたネックレスも金として買取可能です。</p>

        <CtaBox />

        <h2>K18の買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>

        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数の買取業者に一括で査定を依頼できるサービスです。K18は流通量が多く多くの業者が扱うため、一括査定で価格を比較するメリットが大きい品目です。</p>

        <ul>
          <li>複数業者の査定価格を一度に比較</li>
          <li>ネックレス・リングなど品目を問わず対応</li>
          <li>査定料・利用料すべて無料</li>
        </ul>

        <h3>買取大吉 — 全国600店舗以上で即現金化</h3>

        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国に600店舗以上を展開する大手買取チェーンです。店頭に持ち込めば、その場で査定・即現金化できます。</p>

        <ul>
          <li>全国600店舗以上（予約不要）</li>
          <li>蛍光X線分析装置で正確な純度測定</li>
          <li>査定料・出張費すべて無料</li>
        </ul>

        <h3>ウリエル — 自宅で完結する出張買取</h3>

        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取に特化したサービスです。自宅にいながらプロの査定を受けられるため、量が多い場合や外出が難しい場合に便利です。</p>

        <ul>
          <li>出張費・査定料すべて無料</li>
          <li>自宅にいながら完結</li>
          <li>キャンセル料無料（金額に納得できなければ断れる）</li>
        </ul>

        <h3>ティファナ — 3つの方法から選べる</h3>

        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張・宅配の3つの方法から選べる買取サービスです。ライフスタイルに合わせた柔軟な対応が魅力です。</p>

        <ul>
          <li>店頭・出張・宅配の3方法対応</li>
          <li>すべての方法で査定料無料</li>
          <li>金・プラチナ・宝石をまとめて査定OK</li>
        </ul>

        <h2>K18の売却に関する税金</h2>

        <p>K18の金製品を売却して利益が出た場合、<strong>譲渡所得</strong>として課税対象になります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>保有期間</th>
                <th>所得区分</th>
                <th>課税額の計算</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>5年以内</strong></td><td>短期譲渡所得</td><td>（売却額 - 取得費 - 50万円）× 税率</td></tr>
              <tr><td><strong>5年超</strong></td><td>長期譲渡所得</td><td>（売却額 - 取得費 - 50万円）× 1/2 × 税率</td></tr>
            </tbody>
          </table>
        </div>

        <p>年間50万円の特別控除があるため、<strong>売却益が50万円以内なら実質非課税</strong>です。また、1回の取引で200万円を超える場合は、買取業者が税務署に支払調書を提出します。詳しくは<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">金買取の税金・確定申告ガイド</Link>をご確認ください。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            todayFaq,
            {
              q: "K18の買取価格は毎日変わりますか？",
              a: `はい、国際金価格と為替レートにより毎日変動します。最新の目安は本ページ冒頭の「本日のK18買取相場」と重量別早見表（毎朝自動更新）でご確認ください。K18はK24（純金）の75%の金を含むため、買取価格もK24の約75%の水準です。K14と比べると1gあたり約${(k18Price - k14Price).toLocaleString()}円高い買取目安です（${priceDateJa}時点）。`,
            },
            {
              q: "「K18」と「750」の刻印は同じ意味ですか？",
              a: "はい、同じ意味です。「K18」はカラット表記で24分の18＝金75%、「750」は千分率表記で750/1000＝金75%を示します。どちらもK18（18金）の正規の刻印で、買取価格は同じです。海外製品では「750」「18K」「18ct」と刻印されることが多いです。",
            },
            {
              q: "K18WG（ホワイトゴールド）やK18PG（ピンクゴールド）は安くなりますか？",
              a: "なりません。K18WGもK18PGも金の含有率は同じ75%で、業者の査定基準は「純金含有量×重量」のため、買取価格はイエローゴールドのK18と同額が目安です。K18WGの黄ばみ（メッキ劣化）やK18PGのくすみ（銅の酸化）は内部の金含有量に影響しないため減額されません。",
            },
            {
              q: "「K18GP」「K18GF」も買取してもらえますか？",
              a: "「GP」は金メッキ、「GF」は金張りを意味し、無垢のK18（金75%）ではありません。表面だけが金の製品のため、金としての買取価格は大きく下がるか対象外になる場合があります。刻印に「GP」「GF」の2文字がないかご確認ください。",
            },
            {
              q: "K18の刻印がない金製品も売れますか？",
              a: "はい、刻印がなくても買取は可能です。買取業者はX線蛍光分析装置（XRF）で正確に純度を測定しますので、刻印が薄い・ない製品でも適正な査定を受けられます。ただし判定に多少時間がかかる場合があります。",
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
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/k10-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K10（10金）</Link>
          <Link href="/articles/kin-necklace-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ネックレス</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="k18-kaitori"
          relatedSlugs={["k24-kaitori", "k22-kaitori", "k14-kaitori", "k10-kaitori", "kinseido-kaitori-guide", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-jundo-mikata", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
        />

        <h2>まとめ</h2>

        <p>K18（18金）は純度75.0%の金合金で、日本の金ジュエリーの主力となる純度です。ネックレス・リング・ブレスレットなど幅広い製品に使われ、どの買取業者でも扱っているため売却しやすい品目です。ホワイトゴールド（K18WG）・ピンクゴールド（K18PG）も金含有率は同じ75%のため、買取価格は同額が目安です。</p>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日のK18買取相場」と重量別早見表（毎朝自動更新）でご確認ください。K18を少しでも高く売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>手数料・条件を事前に確認する</strong></li>
          <li><strong>宝石付きは鑑定書、まとめ売りで単価アップも狙う</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのK18製品の価値を確認してみてください。査定は無料です。</p>

        <p className="text-xs text-warm-gray">※本記事の価格は田中貴金属公表値をもとにした参考値であり、将来の価格や査定額を保証するものではありません。売却の判断はご自身の責任でお願いします。</p>
      </article>
    </div>
    </>
  );
}
