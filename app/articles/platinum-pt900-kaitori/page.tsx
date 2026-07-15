import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { formatDateJa } from "@/components/TodayPriceAnswer";
import goldData from "@/data/gold-spot-prices.json";

const [, priceMonth, priceDay] = goldData.date.split("-").map(Number);
const priceDateJa = formatDateJa(goldData.date);

// タイトルは metadata と ArticleSchema headline で共有し、文言のズレ（罠）を防ぐ。
// ⚠️ Pt900の純度別自動目安キーは未整備のため、価格は断定せず田中貴金属の公表値へ誘導する。
const pageTitle = `プラチナPt900の買取相場 今日1gはいくら？田中貴金属の店頭価格で確認【${priceMonth}月${priceDay}日更新】`;

const todayFaq = {
  q: "今日のプラチナPt900の1g買取価格はいくらですか？",
  a: `当サイトのプラチナ純度別の自動買取目安は現在準備中（実勢データ取得中）です。最新の1g価格は、田中貴金属が毎営業日公表する店頭価格をご参照ください（本ページ内に本日の公表値カードを掲載しています）。プラチナはPt1000（純プラチナ）を基準に、Pt900は含有率90%が目安です。実際の買取額は業者・状態・付属品により異なります。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "プラチナPt900買取ガイド", item: "https://gold-biyori.com/articles/platinum-pt900-kaitori/" },
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
      { "@type": "Question", name: "Pt900とPt1000・Pt950の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "数字はプラチナの純度を表します。Pt1000は純プラチナ（99.95%以上）、Pt950は95%、Pt900は90%、Pt850は85%です。日本のジュエリー、特に指輪ではPt900が最も一般的です。プラチナ含有率が高いほど1gあたりの買取価格も高くなります。" } },
      { "@type": "Question", name: "Pt900のリングはいくらで売れますか？", acceptedAnswer: { "@type": "Answer", text: "プラチナの買取は「1gあたりの相場×重量×純度」が基本です。金額はプラチナ相場（田中貴金属の公表値が目安）と製品の重量で決まります。ダイヤなどの宝石が付いている場合は、プラチナの素材価値に宝石の価値が上乗せされます。正確な額は無料査定でご確認ください。" } },
      { "@type": "Question", name: "プラチナと金ではどちらが高いですか？", acceptedAnswer: { "@type": "Answer", text: "2020年代半ば現在は、1gあたりでは金の方がプラチナより高値で推移しています。かつてはプラチナの方が高い時代もありましたが、2015年頃から逆転しています。ただしブランドジュエリーはデザインやブランド価値が加わるため、単純な素材比較だけでは判断できません。" } },
      { "@type": "Question", name: "Pt900の刻印がない製品も買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。プラチナは見た目がシルバーやホワイトゴールドと似ているため、素人目では判別が困難です。業者に持ち込めば無料で判定してもらえます。" } },
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
  description: `プラチナPt900（純度90%）の買取相場の確認方法を解説。最新の1g価格は田中貴金属公表の店頭価格を参照（本日の公表値カード掲載）。Pt1000・Pt950との違い、指輪・ネックレスの査定の考え方、金との違い・見分け方、おすすめ業者4社を紹介。`,
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">プラチナPt900製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">プラチナの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

// 金の TodayPriceAnswer と同じ体裁の「近日掲載（実勢データ取得中）」ボックス。
// 価格は断定せず、田中貴金属の公表値カードへ誘導する（捏造回避・YMYL配慮）。
function PtTodayAnswer() {
  return (
    <section className="not-prose my-6 bg-gold-bg border-2 border-accent/40 rounded-2xl p-6 shadow-sm">
      <p className="text-sm font-bold text-accent-dark mb-2 !mt-0">本日のプラチナPt900買取相場</p>
      <p className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-2">
        <strong className="font-display text-2xl md:text-3xl font-bold text-accent-dark leading-tight">
          実勢データ取得中 — 田中貴金属の店頭価格を参照
        </strong>
      </p>
      <p className="text-xs text-warm-gray leading-relaxed mb-4">
        当サイトのプラチナ純度別の自動買取目安は現在準備中です。最新の1g価格は、田中貴金属が毎営業日公表する店頭価格をご確認ください（本ページ内に本日の公表値カードを掲載）。Pt1000（純プラチナ）を基準に、Pt900は含有率90%が目安です。実際の買取額は業者・状態・付属品により異なります。
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href="#today-pt-card"
          className="text-sm bg-white border border-accent/50 text-accent-dark font-medium rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
        >
          本日の田中貴金属プラチナ公表値を見る
        </a>
        <a
          href={goldData.source as string}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-accent text-white font-medium rounded-lg px-3 py-2 hover:bg-accent-dark transition-colors"
        >
          田中貴金属の公式相場ページ
        </a>
      </div>
    </section>
  );
}

export default function PlatinumPt900KaitoriPage() {
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
          <li><span className="text-foreground">プラチナPt900買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="貴金属の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナPt900買取相場 — 今日の価格の調べ方と査定の考え方</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}</p>

        <PtTodayAnswer />

        <p>Pt900は、<strong>プラチナ含有率90%</strong>の合金で、日本のプラチナジュエリー、特に<strong>結婚指輪や婚約指輪で最も一般的な純度</strong>です。「Pt900のリングを売りたい」「今日のプラチナ相場はいくら？」——この記事では、Pt900の買取価格の調べ方と査定の考え方を、正確な一次情報をもとに解説します。</p>

        <div className="bg-cream border border-accent/30 rounded-xl p-4 my-6 text-sm">
          <p className="!my-0"><strong>ご案内：</strong>プラチナ全般（Pt1000/Pt950/Pt900/Pt850）の純度別相場・製品別の詳しい価格目安・価格推移は、<Link href="/articles/platinum-kaitori/" className="text-accent hover:underline">プラチナ買取相場ガイド（純度別まとめ）</Link>で網羅的に解説しています。本ページはPt900に絞った要点版です。</p>
        </div>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>Pt900の今日の買取価格を正しく確認する方法</li>
          <li>Pt900とPt1000・Pt950・Pt850の違い</li>
          <li>Pt900リング・ネックレスの査定の考え方</li>
          <li>金とプラチナの違い・見分け方</li>
        </ul>

        <CtaBox />

        <h2 id="today-pt-card">本日のプラチナ店頭価格（田中貴金属 公表値）</h2>

        <p>プラチナの買取価格は国際相場と為替により毎日変動します。当サイトでは信頼できる一次情報として、<strong>田中貴金属工業が公表する店頭買取価格</strong>を掲載しています。下記は純プラチナ（Pt1000相当）の公表値です。<strong>Pt900は含有率90%のため、この価格の約90%が素材価値の目安</strong>になります。</p>

        <GoldSpotPriceCard purity="pt" />

        <p className="text-xs text-warm-gray">※上記は田中貴金属公表の店頭買取価格（純プラチナ基準）です。Pt900の実際の買取額は「公表値 × 90% × 業者の買取係数」に加え、製品の状態・付属品・手数料により変動します。当サイトはプラチナの純度別自動目安を整備中のため、正確な額は各業者の無料査定でご確認ください。金額を保証するものではありません。</p>

        <h2>Pt900とは — 純度90%、指輪の定番</h2>

        <p>Pt900は<strong>プラチナ90%＋パラジウムなど10%</strong>の合金です。純プラチナ（Pt1000）は柔らかいため、宝石をしっかり留める必要がある指輪には、適度な硬さを持つPt900が最適とされています。日本の結婚指輪・婚約指輪の多くがPt900です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>プラチナ含有率</th>
                <th>主な用途</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Pt1000</strong></td><td>99.95%以上</td><td>インゴット・一部ジュエリー</td></tr>
              <tr><td><strong>Pt950</strong></td><td>95.0%</td><td>海外ハイブランド</td></tr>
              <tr><td><strong>Pt900</strong></td><td>90.0%</td><td>指輪・婚約指輪（日本の定番）</td></tr>
              <tr><td><strong>Pt850</strong></td><td>85.0%</td><td>ネックレスチェーン</td></tr>
            </tbody>
          </table>
        </div>

        <p>プラチナ含有率が高いほど1gあたりの買取価格は高くなります。Pt900はPt1000の約90%、Pt850はPt1000の約85%が素材価値の目安です。</p>

        <h2>Pt900製品の査定の考え方</h2>

        <p>プラチナの買取は<strong>「1gあたりの相場 × 重量 × 純度」</strong>が基本です。デザインや購入価格ではなく、プラチナの含有量が価格の中心になります。</p>

        <h3>Pt900リング・指輪</h3>

        <p>結婚指輪・婚約指輪はPt900が主流です。指輪の内側に「Pt900」「PT900」の刻印があります。<strong>ダイヤなどの宝石が付いている場合</strong>は、プラチナの素材価値に宝石の価値が上乗せされます。鑑定書があれば持参しましょう。</p>

        <h3>Pt900ネックレス・その他</h3>

        <p>ペンダントや一部のネックレスにもPt900が使われます（チェーン部分は強度確保のためPt850が多い）。プラチナケースの高級時計は、ブランド価値が素材価値を大きく上回ることが多く、時計専門店の方が高値になる場合があります。</p>

        <CtaBox />

        <h2>金とプラチナの違い・見分け方</h2>

        <p>プラチナ（Pt900）とホワイトゴールド（K18WG）は見た目がよく似ていますが、以下で見分けられます。</p>

        <ul>
          <li><strong>刻印：</strong>プラチナは「Pt900」「Pt950」、ホワイトゴールドは「K18WG」「750」</li>
          <li><strong>重さ：</strong>プラチナの方がわずかに重い（比重が大きい）</li>
          <li><strong>変色：</strong>K18WGは表面のロジウムメッキが剥がれて黄ばむことがある。プラチナは変色しにくい</li>
        </ul>

        <p>最も確実なのは刻印の確認です。判別が難しい場合は、買取業者に持ち込めばX線蛍光分析装置で正確に判定してもらえます（大手業者なら無料）。金の純度の見方は<Link href="/articles/kin-jundo-mikata/" className="text-accent hover:underline">金の純度の見方ガイド</Link>もご覧ください。</p>

        <h2>Pt900の買取におすすめの業者4社</h2>

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
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者のプラチナ買取価格を一括比較</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>純度をその場で測定・即現金化</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅で査定が完結・出張費無料</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>店頭/出張/宅配</td><td>3つの方法から選択・金とまとめて査定OK</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            todayFaq,
            {
              q: "Pt900とPt1000・Pt950の違いは何ですか？",
              a: "数字はプラチナの純度を表します。Pt1000は純プラチナ（99.95%以上）、Pt950は95%、Pt900は90%、Pt850は85%です。日本のジュエリー、特に指輪ではPt900が最も一般的です。プラチナ含有率が高いほど1gあたりの買取価格も高くなります。",
            },
            {
              q: "Pt900のリングはいくらで売れますか？",
              a: "プラチナの買取は「1gあたりの相場×重量×純度」が基本です。金額はプラチナ相場（田中貴金属の公表値が目安）と製品の重量で決まります。ダイヤなどの宝石が付いている場合は、プラチナの素材価値に宝石の価値が上乗せされます。正確な額は無料査定でご確認ください。",
            },
            {
              q: "プラチナと金ではどちらが高いですか？",
              a: "2020年代半ば現在は、1gあたりでは金の方がプラチナより高値で推移しています。かつてはプラチナの方が高い時代もありましたが、2015年頃から逆転しています。ただしブランドジュエリーはデザインやブランド価値が加わるため、単純な素材比較だけでは判断できません。",
            },
            {
              q: "Pt900の刻印がない製品も買取できますか？",
              a: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。プラチナは見た目がシルバーやホワイトゴールドと似ているため、素人目では判別が困難です。業者に持ち込めば無料で判定してもらえます。",
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
        <ExpertQA category="compare" />
        <RelatedArticles
          currentSlug="platinum-pt900-kaitori"
          relatedSlugs={["platinum-kaitori", "silver-kaitori", "k24-kaitori", "k18-kaitori", "kin-jundo-mikata", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "diamond-kaitori"]}
        />

        <h2>まとめ</h2>

        <p>Pt900はプラチナ含有率90%の合金で、日本の結婚指輪・婚約指輪で最も一般的な純度です。買取は「1gの相場 × 重量 × 純度」が基本で、Pt900は純プラチナ（Pt1000）の約90%が素材価値の目安になります。</p>

        <p>当サイトはプラチナの純度別自動目安を整備中のため、<strong>最新の1g価格は本ページ掲載の田中貴金属公表値</strong>と、各業者の無料査定でご確認ください。プラチナ全般の詳しい相場は<Link href="/articles/platinum-kaitori/" className="text-accent hover:underline">プラチナ買取相場ガイド（純度別まとめ）</Link>もあわせてご覧ください。</p>

        <p>Pt900を高く売るには<strong>複数業者への相見積もり</strong>が最も重要です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのプラチナ製品の価値を確認してみてください。査定は無料です。</p>

        <p className="text-xs text-warm-gray">※本記事の価格情報は田中貴金属の公表値をもとにした参考情報であり、将来の価格や査定額を保証するものではありません。売却の判断はご自身の責任でお願いします。</p>
      </article>
    </div>
    </>
  );
}
