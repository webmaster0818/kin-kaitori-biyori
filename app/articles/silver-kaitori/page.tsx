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
// ⚠️ 銀の純度別自動目安キーは未整備のため、価格は断定せず田中貴金属の公表値へ誘導する。
const pageTitle = `シルバー（銀・SV925）の買取相場 今日1gはいくら？田中貴金属の店頭価格で確認【${priceMonth}月${priceDay}日更新】`;

const todayFaq = {
  q: "今日のシルバー（銀）の1g買取価格はいくらですか？",
  a: `当サイトの銀の純度別自動買取目安は現在準備中（実勢データ取得中）です。最新の1g価格は、田中貴金属が毎営業日公表する銀の店頭価格をご参照ください（本ページ内に本日の公表値カードを掲載しています）。銀は純銀（Ag999）を基準に、SV925（スターリングシルバー）は含有率92.5%が目安です。銀は金・プラチナに比べ1gあたりの単価が低いため、買取は重量が多いほど有利です。実際の買取額は業者・状態・付属品により異なります。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "シルバー買取ガイド", item: "https://gold-biyori.com/articles/silver-kaitori/" },
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
      { "@type": "Question", name: "「SV925」「シルバー925」とは何ですか？", acceptedAnswer: { "@type": "Answer", text: "SV925は銀を92.5%含む合金で、スターリングシルバーとも呼ばれます。純銀（Ag999）は柔らかいため、銅などを7.5%加えて強度を高めたものがSV925です。アクセサリーで最も一般的な銀の純度で、刻印は「SV925」「925」「STERLING」などがあります。" } },
      { "@type": "Question", name: "銀のアクセサリーは買取してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、買取可能です。ただし銀は金・プラチナに比べて1gあたりの単価が大幅に低いため、少量では買取額が小さくなります。業者によっては最低重量や手数料の条件があるため、まとめて査定に出すのがおすすめです。ブランド銀製品はブランド価値が加わることもあります。" } },
      { "@type": "Question", name: "銀食器や銀の置物も売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、純銀（Sterling）の食器・トレー・置物なども買取対象です。重量があるため、アクセサリーより買取額が大きくなることがあります。ただし「銀メッキ（Silver Plated／EPNS表記）」は表面だけが銀のため、素材としての買取価格は大きく下がります。刻印をご確認ください。" } },
      { "@type": "Question", name: "銀の刻印がない製品も買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。ただし銀メッキ製品や洋白（ニッケルシルバー）は銀ではないため、買取対象外または大幅減額になる場合があります。" } },
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
  description: `シルバー（銀・SV925）の買取相場の確認方法を解説。最新の1g価格は田中貴金属公表の店頭価格を参照（本日の公表値カード掲載）。SV925・純銀の違い、銀アクセサリー・銀食器の買取の基本、銀メッキの注意点、おすすめ業者4社を紹介。`,
  alternates: { canonical: "https://gold-biyori.com/articles/silver-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">シルバー（銀）製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">銀はまとめて出すと効率的です。金・プラチナと一緒に査定すると手取りが増えます。</p>
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
function AgTodayAnswer() {
  return (
    <section className="not-prose my-6 bg-gold-bg border-2 border-accent/40 rounded-2xl p-6 shadow-sm">
      <p className="text-sm font-bold text-accent-dark mb-2 !mt-0">本日のシルバー（銀）買取相場</p>
      <p className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-2">
        <strong className="font-display text-2xl md:text-3xl font-bold text-accent-dark leading-tight">
          実勢データ取得中 — 田中貴金属の店頭価格を参照
        </strong>
      </p>
      <p className="text-xs text-warm-gray leading-relaxed mb-4">
        当サイトの銀の純度別自動買取目安は現在準備中です。最新の1g価格は、田中貴金属が毎営業日公表する銀の店頭価格をご確認ください（本ページ内に本日の公表値カードを掲載）。純銀（Ag999）を基準に、SV925は含有率92.5%が目安です。実際の買取額は業者・状態・付属品により異なります。
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href="#today-ag-card"
          className="text-sm bg-white border border-accent/50 text-accent-dark font-medium rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
        >
          本日の田中貴金属 銀公表値を見る
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

export default function SilverKaitoriPage() {
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
          <li><span className="text-foreground">シルバー買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="貴金属の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">シルバー（銀）買取相場 — 今日の価格の調べ方とSV925買取の基本</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}</p>

        <AgTodayAnswer />

        <p>シルバー（銀）は、アクセサリー・食器・置物など幅広い製品に使われる貴金属です。中でも<strong>SV925（スターリングシルバー・銀92.5%）</strong>はアクセサリーで最も一般的な純度です。「銀のアクセサリーは売れる？」「今日の銀相場はいくら？」——この記事では、銀買取の基本と今日の価格の調べ方を、正確な一次情報をもとに解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>銀（シルバー）の今日の買取価格を正しく確認する方法</li>
          <li>SV925・純銀・銀メッキの違い</li>
          <li>銀アクセサリー・銀食器を売るときのポイント</li>
          <li>銀の刻印の見分け方</li>
        </ul>

        <CtaBox />

        <h2 id="today-ag-card">本日の銀の店頭価格（田中貴金属 公表値）</h2>

        <p>銀の買取価格は国際相場と為替により毎日変動します。当サイトでは信頼できる一次情報として、<strong>田中貴金属工業が公表する銀の店頭買取価格</strong>を掲載しています。下記は純銀（Ag基準）の公表値です。<strong>SV925は含有率92.5%のため、この価格の約92.5%が素材価値の目安</strong>になります。</p>

        <GoldSpotPriceCard purity="ag" />

        <p className="text-xs text-warm-gray">※上記は田中貴金属公表の銀の店頭買取価格です。SV925の実際の買取額は「公表値 × 92.5% × 業者の買取係数」に加え、製品の状態・付属品・手数料により変動します。銀は金・プラチナに比べ単価が低いため、少量では買取額が小さくなります。当サイトは銀の純度別自動目安を整備中のため、正確な額は各業者の無料査定でご確認ください。金額を保証するものではありません。</p>

        <h2>銀の純度と刻印 — SV925・純銀・銀メッキの違い</h2>

        <p>銀製品には純度を示す刻印が入っています。買取価格は銀の含有量で決まるため、まず刻印を確認しましょう。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>銀含有率</th>
                <th>主な用途・備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>Ag999 / 999 / SV1000</strong></td><td>99.9%</td><td>純銀。銀貨・インゴット・一部食器</td></tr>
              <tr><td><strong>SV950 / 950</strong></td><td>95.0%</td><td>高品位のジュエリー</td></tr>
              <tr><td><strong>SV925 / 925 / STERLING</strong></td><td>92.5%</td><td>アクセサリーの定番（スターリングシルバー）</td></tr>
              <tr><td><strong>SV900 / 900 / COIN</strong></td><td>90.0%</td><td>コインシルバー・古い製品</td></tr>
              <tr><td className="text-warm-gray"><strong>Silver Plated / EPNS</strong></td><td className="text-warm-gray">表面のみ</td><td className="text-warm-gray">銀メッキ。素材としての買取価格は大幅減</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-warm-gray text-sm"><strong>注意：</strong>「Silver Plated」「EPNS」「洋白（ニッケルシルバー）」は<strong>銀メッキ・銀ではない金属</strong>で、銀としての価値はほとんどありません。「SV925」「925」「STERLING」など銀の含有を示す刻印があるかご確認ください。刻印がない・判別が難しい場合も、買取業者がX線分析で正確に測定してくれます。</p>

        <h2>銀を売るときの3つのポイント</h2>

        <h3>1. まとめて査定に出す</h3>

        <p>銀は1gあたりの単価が金・プラチナより大幅に低いため、少量だと買取額が小さくなります。<strong>使わない銀アクセサリー・銀食器・銀貨をまとめて</strong>査定に出すと、合計重量が増えて手取りが上がります。金・プラチナ製品と一緒に出すのも効率的です。</p>

        <h3>2. 銀メッキと純銀を見分ける</h3>

        <p>「Silver Plated」「EPNS」などの銀メッキは素材価値がほとんどありません。売却前に刻印を確認し、無垢の銀（SV925など）かどうかを把握しておくと、査定結果に納得しやすくなります。</p>

        <h3>3. 複数業者・条件を比較する</h3>

        <p>銀の買取単価や最低重量・手数料の条件は業者によって差があります。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>のような一括査定なら一度の申し込みで複数業者を比較できます。手数料の条件は<Link href="/articles/kin-kaitori-tesuryo-hikaku/" className="text-accent hover:underline">手数料の比較記事</Link>も参考にしてください。</p>

        <CtaBox />

        <h2>シルバー買取におすすめの業者4社</h2>

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
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者の銀買取価格を一括比較</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>純度をその場で測定・即現金化</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>銀食器など重い品も自宅で査定</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>店頭/出張/宅配</td><td>3つの方法から選択・まとめて査定OK</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            todayFaq,
            {
              q: "「SV925」「シルバー925」とは何ですか？",
              a: "SV925は銀を92.5%含む合金で、スターリングシルバーとも呼ばれます。純銀（Ag999）は柔らかいため、銅などを7.5%加えて強度を高めたものがSV925です。アクセサリーで最も一般的な銀の純度で、刻印は「SV925」「925」「STERLING」などがあります。",
            },
            {
              q: "銀のアクセサリーは買取してもらえますか？",
              a: "はい、買取可能です。ただし銀は金・プラチナに比べて1gあたりの単価が大幅に低いため、少量では買取額が小さくなります。業者によっては最低重量や手数料の条件があるため、まとめて査定に出すのがおすすめです。ブランド銀製品はブランド価値が加わることもあります。",
            },
            {
              q: "銀食器や銀の置物も売れますか？",
              a: "はい、純銀（Sterling）の食器・トレー・置物なども買取対象です。重量があるため、アクセサリーより買取額が大きくなることがあります。ただし「銀メッキ（Silver Plated／EPNS表記）」は表面だけが銀のため、素材としての買取価格は大きく下がります。刻印をご確認ください。",
            },
            {
              q: "銀の刻印がない製品も買取できますか？",
              a: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。ただし銀メッキ製品や洋白（ニッケルシルバー）は銀ではないため、買取対象外または大幅減額になる場合があります。",
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
          currentSlug="silver-kaitori"
          relatedSlugs={["platinum-pt900-kaitori", "platinum-kaitori", "k24-kaitori", "k18-kaitori", "kin-jundo-mikata", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
        />

        <h2>まとめ</h2>

        <p>シルバー（銀）はアクセサリー・食器・置物など幅広い製品に使われる貴金属です。アクセサリーの定番はSV925（銀92.5%）で、買取は「1gの相場 × 重量 × 純度」が基本です。銀は金・プラチナより単価が低いため、まとめて売ると効率的です。「Silver Plated」「EPNS」などの銀メッキは素材価値がほとんどない点に注意しましょう。</p>

        <p>当サイトは銀の純度別自動目安を整備中のため、<strong>最新の1g価格は本ページ掲載の田中貴金属公表値</strong>と、各業者の無料査定でご確認ください。</p>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちの銀製品の価値を確認してみてください。査定は無料です。</p>

        <p className="text-xs text-warm-gray">※本記事の価格情報は田中貴金属の公表値をもとにした参考情報であり、将来の価格や査定額を保証するものではありません。売却の判断はご自身の責任でお願いします。</p>
      </article>
    </div>
    </>
  );
}
