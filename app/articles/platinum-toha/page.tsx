import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261115: 「プラチナとは」。出典: 田中貴金属（TANAKA）貴金属元素データ Pt、日本ジュエリー協会「素材等の表示規定」2026年度改訂版、
   造幣局「貴金属製品の品位区分と証明記号」、WPIC Platinum Quarterly Q2 2026（2025年実績）、USGS MCS 2026、田中貴金属「プラチナの価値」。確認日 2026-11-15。
   価格は gold-spot-prices.json（毎朝更新）から計算。将来の価格には触れない */
const TITLE = "プラチナとは？性質・品位の表示（Pt950・Pt900・Pt850）・用途と1gの価格";
const URL = "https://gold-biyori.com/articles/platinum-toha/";
const DESC = "プラチナ（白金・Pt）とは何かを、田中貴金属の元素データ、日本ジュエリー協会の表示規定、造幣局の品位証明、WPICの需要データで説明します。品位別の1gあたりの地金の値も毎朝更新で掲載しています。";

const PT_RETAIL = goldData.tanaka_official.pt_retail_per_g as number;
const PT_BUY = goldData.tanaka_official.pt_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
/* 密度: プラチナ 21.45（TANAKA 元素データ）／金 19.32 g/cm³（徳力本店の物性表・ingot-toha 等と同じ値） */
const D_PT = 21.45;
const D_AU = 19.32;
const GRADES = [
  { g: "Pt999（純プラチナ）", r: 0.999, note: "999‰以上。「純白金」「純プラチナ」と表示できる" },
  { g: "Pt950", r: 0.95, note: "造幣局の品位証明の区分あり" },
  { g: "Pt900", r: 0.9, note: "造幣局の品位証明の区分あり" },
  { g: "Pt850", r: 0.85, note: "これ未満はプラチナ製品と表示できない" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナとは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-15", dateModified: "2026-11-15",
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
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

const FAQS = [
  { q: "プラチナと白金は同じものですか？", a: "同じ金属です。日本ジュエリー協会の表示規定は、貴金属として「白金（プラチナ）」と併記しています。なお、「白金」「白金製」と品位を併記せずに表示する場合は品位999でなければならないとされています。ホワイトゴールドは金の合金で、白金（プラチナ）とは別の素材です。" },
  { q: "Pt850未満の製品はプラチナと呼べますか？", a: "日本ジュエリー協会の表示規定では、プラチナ850‰未満の純度の製品をプラチナ製品（プラチナジュエリー）と表示してはならないとされています。" },
  { q: "「Pm」という刻印は何ですか？", a: "日本ジュエリー協会の表示規定によると、プラチナ製品の表示にはかつて「Pm」が使われていましたが、現在は使われていません。現在の表示は元素記号「Pt」です。" },
  { q: "造幣局の品位証明はプラチナにもありますか？", a: "あります。造幣局の白金製品の品位証明は999・950・900・850の4区分です。平成24年4月から純度の高い区分は「1000」ではなく「999」と表示しています。なお、造幣局は「K18」「Pt900」などの記号は造幣局の証明記号ではないと説明しています。" },
];

export default function PlatinumTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-pt900.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-pt900-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナとは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="プラチナの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナとは — 性質・品位の表示・用途と1gの価格</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月15日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>プラチナ（白金）は、元素記号<strong>Pt</strong>・原子番号<strong>78</strong>の貴金属です。日本では「白金」とも呼ばれ、ジュエリーでは<strong>Pt950・Pt900・Pt850</strong>などの品位で表示されます。最新の田中貴金属のプラチナの店頭買取価格は1g {yen(PT_BUY)}円、店頭小売価格は1g {yen(PT_RETAIL)}円です（税込・{pubLabel}）。</p>

        <h2>プラチナの性質（元素データ）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>プラチナ（Pt）</th><th>参考: 金（Au）</th></tr></thead>
            <tbody>
              <tr><td>原子番号</td><td>78</td><td>79</td></tr>
              <tr><td>原子量</td><td>195.084</td><td>—</td></tr>
              <tr><td>密度</td><td>21.45 g/cm³</td><td>19.32 g/cm³</td></tr>
              <tr><td>融点</td><td>1,768.2℃</td><td>—</td></tr>
              <tr><td>発見年</td><td>1748年</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属（TANAKA）「貴金属元素データ Pt」（単位の記載がないため、密度はg/cm³・融点は℃として表記。日本金属学会『まてりあ』の白金の値＝密度21.44 Mg/m³とも整合）。金の密度は徳力本店の物性表。</p>
        <p>密度から計算すると、同じ大きさならプラチナは金より約{((D_PT / D_AU - 1) * 100).toFixed(0)}%重くなります（当サイトの計算）。同じデザインの指輪でもプラチナのほうが手に持ったときに重く感じるのはこのためです。</p>

        <h2>品位の表示（Pt950・Pt900・Pt850）</h2>
        <p>品位は合金に含まれるプラチナの最低含有率を千分率で表したものです。日本ジュエリー協会の表示規定と造幣局の品位証明では、次のとおり定められています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品位</th><th>プラチナの割合</th><th>1gあたりの地金の値（当サイトの計算）</th><th>表示上の扱い</th></tr></thead>
            <tbody>
              {GRADES.map((x) => (
                <tr key={x.g}><td>{x.g}</td><td>{(x.r * 100).toFixed(1)}%</td><td>約{yen(PT_BUY * x.r)}円</td><td>{x.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">1gあたりの地金の値は、田中貴金属のプラチナ店頭買取価格（{pubLabel}）×品位で計算したもので、業者の買取価格ではありません。JIS H6309:2022 の白金の品位区分は999・990・950・900・850、造幣局の品位証明は999・950・900・850の4区分です。</p>
        <ul>
          <li>貴金属の純度表示に「1000」を使ってはならない（単一金属の100%は存在しないため）</li>
          <li>「白金」「白金製」と品位を併記しない場合は品位999でなければならない</li>
          <li>かつて使われた「Pm」の表示は、現在は使われていない</li>
          <li>プラチナめっきの製品は「プラチナめっき仕上げ」などと表現し、「プラチナ仕上げ」は不適切な表現とされている</li>
        </ul>
        <p>刻印の読み方や買取での扱いは<Link href="/articles/platinum-kaitori/">プラチナ買取相場ガイド</Link>、Pt900 の価格は<Link href="/articles/platinum-pt900-kaitori/">Pt900の買取相場</Link>をご覧ください。白い金の合金との違いは<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>でご説明しています。</p>

        <h2>どこで採れ、何に使われているか</h2>
        <p>米国地質調査所（USGS）によると、2025年の世界のプラチナ鉱山生産は推定170tで、南アフリカが120t（約71%・当サイトの計算）、ロシア20t、ジンバブエ18tと続きます。</p>
        <p>WPIC（ワールド・プラチナ・インベストメント・カウンシル）が2026年9月に公表した2025年の需要は合計8,671koz（約270t）で、内訳は次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>用途</th><th>2025年（koz）</th><th>構成比（当サイトの計算）</th></tr></thead>
            <tbody>
              <tr><td>自動車（排ガス浄化触媒など）</td><td>3,039</td><td>35%</td></tr>
              <tr><td>工業（化学・ガラス・電気・医療など）</td><td>2,266</td><td>26%</td></tr>
              <tr><td>宝飾</td><td>2,214</td><td>26%</td></tr>
              <tr><td>投資</td><td>1,152</td><td>13%</td></tr>
            </tbody>
          </table>
        </div>
        <p>田中貴金属は、世界のプラチナ需要の60%以上が自動車産業などの工業用素材として使われ、市場規模が金より小さいため価格が大きく変動することがあると説明しています。過去の価格の推移と金との比較は<Link href="/articles/platinum-kachi-suii/">プラチナは価値がなくなる？</Link>にまとめています。</p>

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
          <li>田中貴金属（TANAKA）「貴金属元素データ Pt」<a href="https://tanaka-preciousmetals.com/jp/library/element/pt" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>日本金属学会「金属なんでもランキング 白金」（まてりあ 第60巻第7号）<a href="https://jimm.jp/around_metal/ranking/17.platinum.pdf" target="_blank" rel="noopener noreferrer">jimm.jp</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>造幣局「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a>・「品位証明」<a href="https://www.mint.go.jp/operations/exam/operations_certification-01.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Platinum-Group Metals」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-platinum-group.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>World Platinum Investment Council「Platinum Quarterly Q2 2026」（2026年9月9日）<a href="https://platinuminvestment.com/files/354715/WPIC_Platinum_Quarterly_Q2_2026_JA.pdf" target="_blank" rel="noopener noreferrer">platinuminvestment.com</a></li>
          <li>田中貴金属工業「プラチナの価値」<a href="https://gold.tanaka.co.jp/first/value/value_04.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月15日。価格は変動します。ご売却の際は、各業者の最新の買取価格をご確認ください。</p>

        <RelatedArticles currentSlug="platinum-toha" relatedSlugs={["platinum-silver-chigai", "platinum-allergy", "palladium-toha", "platinum-kaitori", "platinum-pt900-kaitori", "platinum-kachi-suii", "white-gold-toha", "kinseido-kaitori-guide", "platinum-ingot"]} />
      </article>
    </div>
  </>);
}
