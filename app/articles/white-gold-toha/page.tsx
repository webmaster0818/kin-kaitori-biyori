import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

/* kwexp-20261114: 「ホワイトゴールドとは」。定義・めっき・ニッケルの表示は日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定 2026年度改訂版」、
   ホールマークは造幣局、買取の扱いは田中貴金属 RE:TANAKA（いずれも 2026-11-14 確認）。価格は日次の gold-spot-prices.json から毎朝再計算する */
const TITLE = "ホワイトゴールドとは？定義・ロジウムめっき・プラチナとの違いと今日の1g価格";
const URL = "https://gold-biyori.com/articles/white-gold-toha/";
const DESC = "ホワイトゴールド（WG）は白色の金合金です。日本ジュエリー協会の表示規定による定義、ロジウムめっきの扱い、K18WG・K14WGの品位、プラチナとの違いを整理し、今日の田中貴金属の公表値で1gあたりの参考値も掲載しています。";

const T = goldData.tanaka_official as Record<string, number>;
const P = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `${priceDateJa}取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
/* 金・プラチナの含有量×田中貴金属の店頭買取価格（地金1g）。製品の買取価格ではなく含有量の価値 */
const AU_750 = T.au_buyback_per_g * 0.75;
const AU_585 = T.au_buyback_per_g * 0.585;
const PT_900 = T.pt_buyback_per_g * 0.9;
const PT_950 = T.pt_buyback_per_g * 0.95;

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ホワイトゴールドとは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-14", dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "ホワイトゴールドとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "主にパラジウム等を割り金とした白色の金合金です（日本ジュエリー協会の表示規定）。K18WGは金を75%（品位750）、K14WGは58.5%（品位585）含みます。" } },
    { "@type": "Question", name: "ホワイトゴールドとプラチナは同じですか？", acceptedAnswer: { "@type": "Answer", text: "異なる金属です。ホワイトゴールドは金の合金、プラチナ（白金）は別の元素です。刻印はホワイトゴールドがK18WG・Au750WGなど、プラチナはPt900・Pt950などで表示されます。" } },
    { "@type": "Question", name: "ホワイトゴールドの買取価格はK18と同じですか？", acceptedAnswer: { "@type": "Answer", text: "金の含有量で査定する場合、K18WGの金の量はK18（イエロー）と同じ75%です。当サイトの純度別の参考値もK18と同じ値で計算しています。実際の査定額は業者・状態により異なります。" } },
  ] };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(art) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
  </>);
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">ホワイトゴールド製品の査定額を確認する</h3>
      <p className="text-sm text-warm-gray text-center mb-4">業者ごとに査定額が異なるため、複数社の比較をおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で比較する（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
      </div>
    </div>
  );
}

const FAQS = [
  { q: "ホワイトゴールドが黄色っぽくなったのはなぜですか？", a: "表示規定では、ホワイトゴールドの表面に地金本体の色に近い白色めっきを施すことが認められており、白色めっきはロジウムめっきが一般的とされています。表面のめっきが摩耗すると、本体の合金の色が見えるようになります。" },
  { q: "イエローゴールドにロジウムめっきをした製品はホワイトゴールドですか？", a: "いいえ。表示規定では、カラーゴールド名は地金本体の色で称するとされ、色みのある金合金（ロジウムめっきとの色差⊿E14を超えるもの）にロジウムめっきをかけてホワイトゴールドと表示することは不当な表示とされています。この場合は「K18 RHP」などと表示します。" },
  { q: "ホワイトゴールドはニッケルを含みますか？", a: "割り金の組成は製品により異なります。表示規定では、ニッケルフリー（NF）を表示する場合に「安全である」という表現を付けてはならないとしており、ピアスなど体に穴をあけて用いる装身具のポストにはニッケル含有貴金属を使用しないものとしています。" },
  { q: "造幣局のホールマークで色は分かりますか？", a: "造幣局のホールマークは品位（純度）を証明するもので、日の丸とひし形の中の千分率の数字（K18は750）で示されます。色の区別は表示されません。" },
];

export default function WhiteGoldTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinseido.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinseido-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">ホワイトゴールドとは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="ホワイトゴールドのジュエリーのイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ホワイトゴールドとは — 定義・ロジウムめっき・プラチナとの違い</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月14日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p><strong>ホワイトゴールド（WG）とは、主にパラジウム等を割り金とした白色の金合金です。</strong>日本ジュエリー協会の表示規定では「白色金」とも表記し、表示例として K14WG・Au585WG を挙げています。白く見えても主成分は金であり、プラチナ（白金）とは別の金属です。</p>
        <p>K18WGに含まれる金は75%（品位750）で、田中貴金属の最新の金の店頭買取価格（1g {yen(T.au_buyback_per_g)}円・{pubLabel}）で計算すると、<strong>金の含有量の価値は1gあたり約{yen(AU_750)}円</strong>です。</p>

        <h2>ホワイトゴールドの定義と表示（日本ジュエリー協会の表示規定）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>カラーゴールド</th><th>記号</th><th>割り金の例（表示規定）</th><th>表示の例</th></tr></thead>
            <tbody>
              <tr><td><strong>ホワイトゴールド（白色金）</strong></td><td>WG</td><td>主にパラジウム等を割り金とした白色の金合金</td><td>K14WG／Au585WG</td></tr>
              <tr><td>イエローゴールド</td><td>YG</td><td>主たる割り金の銀銅比率が4：6〜6：4程度の黄色みの金合金</td><td>K18YG／Au750YG</td></tr>
              <tr><td>ピンクゴールド</td><td>PG</td><td>割り金の銅比率が高い、やや赤みのある金合金</td><td>K18PG／Au750PG</td></tr>
              <tr><td>グリーンゴールド（青金）</td><td>GRG</td><td>割り金の銀比率が高い、青みのある金合金</td><td>K18GRG／Au750GRG</td></tr>
            </tbody>
          </table>
        </div>
        <p>表示規定は、カラーゴールド名を<strong>金合金の地金本体の色</strong>で称するものとし、表面のめっき・化学変化・塗装・張りなどの表面色でカラーゴールド名を称することはできないとしています。</p>

        <h2>ロジウムめっきの扱い</h2>
        <ul>
          <li>ホワイトゴールドには、地金本体の色に近い白色めっきを表面に施すことが認められています。白色めっきはロジウムめっきが一般的です</li>
          <li>本体の色とめっきの色の差には許容範囲があり、色差⊿E14以内とされています（測色は CIELAB 方式・JIS K5600-4-6）</li>
          <li>色みのある金合金（ロジウムめっきとの色差⊿E14を超える）にロジウムめっきをかけて「ホワイトゴールド」と表示することは不当な表示とされ、この場合は「K18 RHP」「Au750 RHP」と表示します</li>
        </ul>
        <p>表面のロジウムめっきは使用とともに摩耗します。黄ばみ・変色と査定額の関係は<Link href="/articles/kinseido-kaitori-guide/">金の品位別買取相場</Link>でご説明しています。</p>

        <h2>品位別の金の量と1gあたりの参考値</h2>
        <p>ホワイトゴールドは品位（純度）ごとに金の量が決まります。JIS H6309:2022 の区分では K18＝750、K14＝585 です。下表は田中貴金属の店頭買取価格に含有率を掛けた<strong>金属そのものの価値の目安</strong>で、製品の買取価格ではありません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>素材</th><th>主成分の含有率</th><th>含有量の価値（1gあたり）</th><th>当サイトの参考買取価格（1g）</th></tr></thead>
            <tbody>
              <tr><td><strong>K18WG</strong></td><td>金 75%</td><td>約{yen(AU_750)}円</td><td>{yen(P.k18wg)}円</td></tr>
              <tr><td>K18（イエロー）</td><td>金 75%</td><td>約{yen(AU_750)}円</td><td>{yen(P.k18)}円</td></tr>
              <tr><td><strong>K14WG</strong></td><td>金 58.5%</td><td>約{yen(AU_585)}円</td><td>{yen(P.k14)}円</td></tr>
              <tr><td>Pt900（プラチナ）</td><td>プラチナ 90%</td><td>約{yen(PT_900)}円</td><td>—</td></tr>
              <tr><td>Pt950（プラチナ）</td><td>プラチナ 95%</td><td>約{yen(PT_950)}円</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">含有量の価値＝田中貴金属の店頭買取価格（金 1g {yen(T.au_buyback_per_g)}円・プラチナ 1g {yen(T.pt_buyback_per_g)}円、{pubLabel}）×含有率。当サイトの参考買取価格は、田中貴金属のK24店頭買取価格から純度比×業者買取平均係数0.96で算出した値です。K18WGとK18は金の含有率が同じため、同じ値で計算しています。</p>
        <p>最新の価格では、K18WGの金の価値（1g 約{yen(AU_750)}円）とPt900のプラチナの価値（1g 約{yen(PT_900)}円）は{AU_750 >= PT_900 ? "K18WGのほうが高い" : "Pt900のほうが高い"}水準です。金とプラチナの価格はそれぞれ別に動くため、この関係は日によって変わります。</p>

        <CtaBox />

        <h2>買取での扱い</h2>
        <p>田中貴金属の貴金属製品買取（RE:TANAKA）は、ネックレス・リング・ピアスなど貴金属ジュエリー製品全般を買取の対象とし、金製品ではK9未満を買取できない品位としています。複数の品種・品位を組み合わせた製品（例: Pt850/K18のリング）は、パーツごとに品位を特定すると案内しています。デザイン・ブランド・石の価値は評価しないとしています。</p>
        <p>ホワイトゴールドとプラチナが一緒になったジュエリーや、刻印が読めない製品は、店舗でパーツごとに確認することになります。刻印の読み方は<Link href="/articles/kin-jundo-mikata/">金の純度の見分け方</Link>をご覧ください。</p>

        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {FAQS.map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>出典</h2>
        <ul className="text-sm">
          <li>一般社団法人日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定 2026年度改訂版」（3. 貴金属品位・4. 色の表示・11. ニッケルフリーの表示・12. めっきの表示）<a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>独立行政法人造幣局「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>田中貴金属工業 RE:TANAKA「お買取りができるもの／できないもの」<a href="https://gold.tanaka.co.jp/retanaka/service/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/retanaka/service/</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/commodity/souba/</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月14日。相場は変動します。実際の査定額は業者・製品の状態により異なります。</p>

        <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
        <RelatedArticles currentSlug="white-gold-toha" relatedSlugs={["kinseido-kaitori-guide", "k18-kaitori", "k14-kaitori", "platinum-kaitori", "kin-jundo-mikata", "k24gp-toha"]} />
      </article>
    </div>
  </>);
}
