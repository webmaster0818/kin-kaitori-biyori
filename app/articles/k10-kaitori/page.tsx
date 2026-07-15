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
const k18Price = goldData.purity_buyback_estimate_per_g.k18;
const k14Price = goldData.purity_buyback_estimate_per_g.k14;
const k10Price = goldData.purity_buyback_estimate_per_g.k10;
const [, priceMonth, priceDay] = goldData.date.split("-").map(Number);
const priceDateJa = formatDateJa(goldData.date);

// タイトルは metadata と ArticleSchema headline で共有し、文言のズレ（罠）を防ぐ
const pageTitle = `K10（10金）の買取相場 今日1g${k10Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】アクセサリー・指輪の製品別査定も`;

const todayFaq = {
  q: "今日のK10（10金）の1g買取価格はいくらですか？",
  a: `本日（${priceDateJa}時点）のK10買取相場の目安は1gあたり${k10Price.toLocaleString()}円です（毎朝自動更新）。田中貴金属公表の店頭買取価格をもとに算出した参考値で、実際の査定額は業者・状態により異なります。K10は金の含有率が41.7%と低めのため、K18の約${Math.round((k10Price / k18Price) * 100)}%の価格水準です。お手持ちの重量での概算は、本ページの重量別早見表とグラム計算機でご確認ください。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "K10買取ガイド", item: "https://gold-biyori.com/articles/k10-kaitori/" },
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
      { "@type": "Question", name: "K10とK18の買取価格はどのくらい違いますか？", acceptedAnswer: { "@type": "Answer", text: `K10は金の純度41.7%、K18は75%です。買取価格は純金含有量に比例するため、同じ重量ならK10はK18の約${Math.round((k10Price / k18Price) * 100)}%の価格になります。${priceDateJa}時点の目安ではK18が1g約${k18Price.toLocaleString()}円、K10が約${k10Price.toLocaleString()}円です。最新値は本ページの「本日の買取相場」と重量別早見表（毎日自動更新）でご確認ください。` } },
      { "@type": "Question", name: "「K10」と「417」の刻印は同じ意味ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、同じ意味です。「K10」はカラット表記で24分の10＝金41.7%、「417」（または416）は千分率表記で金417/1000（41.7%）を示します。どちらもK10（10金）の正規の刻印で、買取価格は同じです。海外製品では「417」「10K」と刻印されることが多いです。" } },
      { "@type": "Question", name: "K10のアクセサリーでも買取してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、買取可能です。K10は金の含有率が低めですが、金製品であることに変わりはなく、多くの買取業者が対象としています。ピアス・華奢なネックレス・リングなど軽量な製品が多いため、複数まとめて査定に出すと効率的です。" } },
      { "@type": "Question", name: "K10の刻印がないアクセサリーも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても買取は可能です。買取業者はX線蛍光分析装置（XRF）で正確に純度を測定しますので、刻印が薄い・ない製品でも適正な査定を受けられます。ただし「K10GP」など金メッキ表記の場合は無垢の金ではないためご注意ください。" } },
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
  description: `本日（${priceMonth}月${priceDay}日）のK10（10金・純度41.7%）買取相場は1gあたり${k10Price.toLocaleString()}円（毎朝自動更新）。アクセサリー・指輪の製品別査定、K10/417刻印の見分け方、K18との違い、高く売るコツとおすすめ業者4社を解説。`,
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K10製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K10も金製品として買取可能です。まとめて出すと効率的。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function K10KaitoriPage() {
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
          <li><span className="text-foreground">K10買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">K10（10金）買取相場 — 今日の1g価格とK18との違い</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <TodayPriceAnswer purity="k10" />

        <p>K10（10金）は、<strong>純度41.7%</strong>の金合金で、ピアスや華奢なネックレスなど<strong>手ごろな価格帯のアクセサリー</strong>に多く使われる純度です。金の含有量が半分以下のため、K18ほどの高値にはなりませんが、金製品として問題なく買取対象になります。</p>

        <p>「K10のアクセサリーはいくらで売れる？」「K18とどれくらい価格が違う？」「刻印の417って何？」——この記事では、K10に特化した<strong>買取相場・製品別の考え方・高く売るコツ</strong>を、毎朝更新の実勢データとともに解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>K10（10金）の最新買取相場（1gあたりの価格）</li>
          <li>K10とK18・K14の買取価格の違い</li>
          <li>「K10」「417」刻印の見分け方</li>
          <li>K10アクセサリーを効率よく売る方法</li>
        </ul>

        <CtaBox />

        <GoldSpotPriceCard purity="k10" />

        <div id="weight-table">
          <WeightPriceTable purities={["k10"]} />
        </div>


        <h2>K10（10金）とは — 純度41.7%の手ごろな金合金</h2>

        <p>K10は<strong>金の純度が41.7%（417/1000）</strong>の合金です。全体の半分以下が金で、残りは銀・銅などが混ぜられています。「カラット」の24分の10がK10という意味です。</p>

        <p>金の含有量が少ない分、K18より<strong>硬く丈夫で価格も手ごろ</strong>なため、若い世代向けのファッションジュエリーや、細く繊細なデザインのアクセサリーに使われます。金の割合が少ないため経年で変色しやすい傾向もありますが、変色は表面的なもので、内部の金含有量には影響しないため買取価格には反映されません。</p>

        <p>K10の買取価格は<strong>K18の約{Math.round((k10Price / k18Price) * 100)}%の水準</strong>です。K14と比べると1gあたり約{(k14Price - k10Price).toLocaleString()}円安い目安です（{priceDateJa}時点）。</p>

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
              <tr><td><strong>K18（18金）</strong></td><td>75.0%</td><td>約{k18Price.toLocaleString()}円</td><td>ジュエリー全般（主力）</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>58.5%</td><td>約{k14Price.toLocaleString()}円</td><td>海外製アクセサリー</td></tr>
              <tr><td><strong>K10（10金）</strong></td><td>41.7%</td><td><strong>約{k10Price.toLocaleString()}円</strong></td><td>手ごろなアクセサリー</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-warm-gray">※上記は田中貴金属公表のK24店頭買取価格から純度換算した参考値（毎日自動更新）です。金額を保証するものではありません。品位ごとの詳しい解説は<Link href="/articles/kinseido-kaitori-guide/" className="text-accent hover:underline">金の品位別・買取相場ガイド</Link>もご覧ください。</p>

        <h2>K10とK18の違い</h2>

        <p>同じ「金」でも、K10とK18では金の含有量が大きく異なります。買取価格は金の量に比例するため、価格差もそのまま反映されます。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>比較項目</th>
                <th>K10（10金）</th>
                <th>K18（18金）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>金含有率</strong></td><td>41.7%</td><td>75.0%</td></tr>
              <tr><td><strong>1g買取目安</strong></td><td>約{k10Price.toLocaleString()}円</td><td>約{k18Price.toLocaleString()}円</td></tr>
              <tr><td><strong>硬さ</strong></td><td>硬く丈夫</td><td>適度な硬さ</td></tr>
              <tr><td><strong>色味</strong></td><td>やや白っぽい黄色</td><td>濃い金色</td></tr>
              <tr><td><strong>主な製品</strong></td><td>手ごろなアクセサリー</td><td>ジュエリー全般</td></tr>
            </tbody>
          </table>
        </div>

        <p>K18の詳しい相場は<Link href="/articles/k18-kaitori/" className="text-accent hover:underline">K18（18金）買取ガイド</Link>、K14は<Link href="/articles/k14-kaitori/" className="text-accent hover:underline">K14（14金）買取ガイド</Link>をご覧ください。</p>

        <h2>「K10」「417」刻印の見分け方</h2>

        <p>K10製品には、金の純度を示す刻印が入っています。以下のいずれかがあればK10（金41.7%）です。</p>

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
              <tr><td><strong>K10 / 10K</strong></td><td>カラット表記（24分の10＝金41.7%）</td><td>日本製に多い</td></tr>
              <tr><td><strong>417 / 416</strong></td><td>千分率表記（金417/1000＝41.7%）</td><td>海外製に多い</td></tr>
              <tr><td><strong>10ct / 10kt</strong></td><td>英国・米国式のカラット表記</td><td>海外アクセサリー</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-warm-gray text-sm"><strong>注意：</strong>「K10GP」「K10GF」は<strong>金メッキ（Gold Plated）・金張り（Gold Filled）</strong>を意味し、金41.7%の製品ではありません。表面だけが金の製品で、金としての買取価格は大きく下がるか対象外になります。「GP」「GF」の2文字がないかご確認ください。</p>

        <p>刻印は指輪なら内側、ネックレス・ピアスは金具付近にあります。刻印が見えない・薄い場合も、買取業者がX線分析で正確に純度を測定してくれます。刻印の読み方は<Link href="/articles/kin-jundo-mikata/" className="text-accent hover:underline">金の純度の見方ガイド</Link>でも詳しく解説しています。</p>

        <CtaBox />

        <h2>K10を効率よく・高く売る4つのポイント</h2>

        <h3>1. 複数まとめて査定に出す</h3>

        <p>K10は1点あたりが軽く高額になりにくいため、<strong>使わないアクセサリーをまとめて査定に出す</strong >のが効率的です。合計重量が増えることで、業者によっては単価アップやキャンペーン対象になることもあります。片方だけのピアスや切れたネックレスも金として買取可能です。</p>

        <h3>2. 複数の買取業者を比較する</h3>

        <p>K10の買取単価は業者によって差が出ます。少額でも複数社を比較することで手取りが変わります。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>のような一括査定なら一度の申し込みで複数業者を比較できます。業者選びは<Link href="/articles/kin-kaitori-osusume/" className="text-accent hover:underline">おすすめ業者比較</Link>も参考にしてください。</p>

        <h3>3. 手数料・最低重量の条件を確認する</h3>

        <p>少額の買取では、手数料や最低重量の条件によって手取りが目減りすることがあります。査定料・出張費・宅配返送料などを事前に確認しましょう。<Link href="/articles/kin-kaitori-tesuryo-hikaku/" className="text-accent hover:underline">手数料の比較記事</Link>で各社の条件を整理しています。</p>

        <h3>4. 相場が高いタイミングを狙う</h3>

        <p>金の買取価格は国際相場と為替に連動して毎日変動します。本ページ冒頭の「本日のK10買取相場」で最新の水準を確認できます。金相場が高い局面はK10でも手取りが増えます。売り時の考え方は<Link href="/articles/kin-uridoki-2026/" className="text-accent hover:underline">金の売り時ガイド</Link>で解説しています。</p>

        <CtaBox />

        <h2>K10の買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>

        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数の買取業者に一括で査定を依頼できるサービスです。少額のK10でも複数業者を比較でき、手取りの最大化に役立ちます。</p>

        <ul>
          <li>複数業者の査定価格を一度に比較</li>
          <li>アクセサリー・小物もまとめて対応</li>
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

        <h2>K10の売却に関する税金</h2>

        <p>K10の金製品を売却して利益が出た場合、<strong>譲渡所得</strong>として課税対象になります。ただし年間50万円の特別控除があるため、<strong>売却益が50万円以内なら実質非課税</strong>です。K10は1点あたりの金額が小さいため、少量の売却で課税対象になることはまれです。詳しくは<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">金買取の税金・確定申告ガイド</Link>をご確認ください。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            todayFaq,
            {
              q: "K10とK18の買取価格はどのくらい違いますか？",
              a: `K10は金の純度41.7%、K18は75%です。買取価格は純金含有量に比例するため、同じ重量ならK10はK18の約${Math.round((k10Price / k18Price) * 100)}%の価格になります。${priceDateJa}時点の目安ではK18が1g約${k18Price.toLocaleString()}円、K10が約${k10Price.toLocaleString()}円です。最新値は本ページの「本日の買取相場」と重量別早見表（毎日自動更新）でご確認ください。`,
            },
            {
              q: "「K10」と「417」の刻印は同じ意味ですか？",
              a: "はい、同じ意味です。「K10」はカラット表記で24分の10＝金41.7%、「417」（または416）は千分率表記で金417/1000（41.7%）を示します。どちらもK10（10金）の正規の刻印で、買取価格は同じです。海外製品では「417」「10K」と刻印されることが多いです。",
            },
            {
              q: "K10のアクセサリーでも買取してもらえますか？",
              a: "はい、買取可能です。K10は金の含有率が低めですが、金製品であることに変わりはなく、多くの買取業者が対象としています。ピアス・華奢なネックレス・リングなど軽量な製品が多いため、複数まとめて査定に出すと効率的です。",
            },
            {
              q: "K10の刻印がないアクセサリーも売れますか？",
              a: "はい、刻印がなくても買取は可能です。買取業者はX線蛍光分析装置（XRF）で正確に純度を測定しますので、刻印が薄い・ない製品でも適正な査定を受けられます。ただし「K10GP」など金メッキ表記の場合は無垢の金ではないためご注意ください。",
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
          <Link href="/articles/k18-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K18（18金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kinseido-kaitori-guide/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">品位別ガイド</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="k10-kaitori"
          relatedSlugs={["k24-kaitori", "k22-kaitori", "k18-kaitori", "k14-kaitori", "kinseido-kaitori-guide", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-jundo-mikata", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
        />

        <h2>まとめ</h2>

        <p>K10（10金）は純度41.7%の金合金で、手ごろな価格帯のアクセサリーに多く使われています。金の含有量が半分以下のためK18ほどの高値にはなりませんが、金製品として問題なく買取対象になります。K18の約{Math.round((k10Price / k18Price) * 100)}%が価格の目安です。</p>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日のK10買取相場」と重量別早見表（毎朝自動更新）でご確認ください。K10を効率よく売るために、以下を実践してください。</p>

        <ol>
          <li><strong>使わないアクセサリーをまとめて査定に出す</strong></li>
          <li><strong>複数業者を比較する</strong>（一括査定が効率的）</li>
          <li><strong>手数料・最低重量の条件を事前に確認する</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのK10製品の価値を確認してみてください。査定は無料です。</p>

        <p className="text-xs text-warm-gray">※本記事の価格は田中貴金属公表値をもとにした参考値であり、将来の価格や査定額を保証するものではありません。売却の判断はご自身の責任でお願いします。</p>
      </article>
    </div>
    </>
  );
}
