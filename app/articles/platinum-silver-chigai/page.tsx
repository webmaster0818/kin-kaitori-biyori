import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261117: 「プラチナ シルバー 違い」。出典: 田中貴金属（TANAKA）貴金属元素データ Pt・Ag、
   日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版、造幣局「貴金属製品の品位区分と証明記号」・「品位証明」、
   USGS Mineral Commodity Summaries 2026（Silver・Platinum-Group Metals）。確認日 2026-11-17。
   価格は gold-spot-prices.json（毎朝更新）から計算 */
const TITLE = "プラチナとシルバー（銀）の違い — 刻印・重さ・価格を公式データで比較【毎朝更新】";
const URL = "https://gold-biyori.com/articles/platinum-silver-chigai/";
const DESC = "白く見えるプラチナとシルバー（銀）の違いを、田中貴金属の元素データ、日本ジュエリー協会の表示規定、造幣局の品位証明で比較しました。刻印の見分け方、同じ大きさでの重さの差、1gあたりの価格差（毎朝更新）を掲載しています。";

const PT_BUY = goldData.tanaka_official.pt_buyback_per_g as number;
const AG_BUY = goldData.tanaka_official.ag_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const yen2 = (n: number) => n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });

/* TANAKA 貴金属元素データ（密度 293K・熱伝導率/電気抵抗率 273K） */
const D_PT = 21.45;
const D_AG = 10.5;
/* USGS MCS 2026: 2025年の世界の鉱山生産（推定）銀 26,000t・プラチナ 170t */
const AG_T = 26000;
const PT_T = 170;

const FAQS = [
  { q: "プラチナとシルバーは刻印で見分けられますか？", a: "日本ジュエリー協会の表示規定では、プラチナは「Pt」と品位（Pt950・Pt900・Pt850など）、銀は「Ag」または「SV」「Silver」と品位（SV925など）で表示します。造幣局は、白金は見た目が銀と似ているが、品位証明の記号で白金の品位がわかると説明しています。" },
  { q: "「925」だけの刻印は何ですか？", a: "表示規定では、銀925の場合は元素記号Agを省略して「925」と表示できるとされています。品位925の銀合金は「Sterling（スターリングシルバー）」とも表示できます。" },
  { q: "同じ大きさならどちらが重いですか？", a: "プラチナです。田中貴金属の元素データでは、密度はプラチナ21.45、銀10.50で、同じ体積ならプラチナは銀の約2.0倍の重さになります（当サイトの計算）。" },
  { q: "銀にプラチナを混ぜた合金はプラチナ製品ですか？", a: "いいえ。表示規定では、銀900‰とプラチナの合金は「Ag900」または「Ag900(Pt)」と表示し、銀合金（銀製品）とは表示できても、プラチナ合金（プラチナ製品）と表示してはいけないとされています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナとシルバーの違い", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-17", dateModified: "2026-11-17",
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

export default function PlatinumSilverChigaiPage() {
  const ratio = PT_BUY / AG_BUY;
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-silver.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-silver-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナとシルバーの違い</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="プラチナとシルバーの違いの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナとシルバー（銀）の違い — 刻印・重さ・価格の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月17日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>プラチナ（白金・Pt）とシルバー（銀・Ag）は、どちらも白い貴金属ですが、<strong>別の元素</strong>です。見分ける手がかりは<strong>刻印（Pt○○○／SV・Ag○○○）</strong>と<strong>重さ</strong>で、同じ大きさならプラチナは銀の約{(D_PT / D_AG).toFixed(1)}倍の重さがあります。価格の差も大きく、最新の田中貴金属の店頭買取価格はプラチナ1g {yen(PT_BUY)}円、銀1g {yen2(AG_BUY)}円で、<strong>プラチナは銀の約{ratio.toFixed(0)}倍</strong>です（税込・{pubLabel}・当サイトの計算）。</p>

        <h2>性質の比較（元素データ）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>プラチナ（Pt）</th><th>銀（Ag）</th></tr></thead>
            <tbody>
              <tr><td>原子番号</td><td>78</td><td>47</td></tr>
              <tr><td>密度（293K）</td><td>21.45 g/cm³</td><td>10.50 g/cm³</td></tr>
              <tr><td>融点</td><td>1,768.2℃</td><td>961.78℃</td></tr>
              <tr><td>熱伝導率（273K）</td><td>72</td><td>428</td></tr>
              <tr><td>電気抵抗率（273K）</td><td>9.81</td><td>1.47</td></tr>
              <tr><td>2025年の世界の鉱山生産（推定）</td><td>{PT_T}t</td><td>{AG_T.toLocaleString()}t</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属（TANAKA）「貴金属元素データ」Pt・Ag（単位の記載がないため、密度はg/cm³、融点は℃として表記。熱伝導率・電気抵抗率は同データの数値をそのまま掲載）。鉱山生産は米国地質調査所（USGS）Mineral Commodity Summaries 2026。</p>
        <ul>
          <li><strong>重さ</strong>: 同じ体積ならプラチナは銀の約{(D_PT / D_AG).toFixed(2)}倍。10gの銀と同じ大きさのプラチナは約{yen2((10 / D_AG) * D_PT)}gです（当サイトの計算）。</li>
          <li><strong>融点</strong>: プラチナの融点は銀より約{yen(1768.2 - 961.78)}℃高い値です。</li>
          <li><strong>熱・電気</strong>: 銀は熱伝導率が高く電気抵抗率が低い金属です。田中貴金属は、銀は可視光線のほとんどを反射するため鏡に使われていると説明しています。</li>
          <li><strong>産出量</strong>: 2025年の世界の鉱山生産は、銀がプラチナの約{Math.round(AG_T / PT_T)}倍です（USGS の推定値から当サイトの計算）。</li>
        </ul>

        <h2>刻印（品位の表示）の違い</h2>
        <p>品位は合金に含まれる貴金属の最低含有率を千分率で表したものです。日本ジュエリー協会の表示規定と造幣局の品位証明では、次のように定められています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>プラチナ</th><th>銀</th></tr></thead>
            <tbody>
              <tr><td>記号</td><td>Pt（かつての「Pm」は現在使われていない）</td><td>Ag。SV・Silver・SILVER も使える</td></tr>
              <tr><td>表示の例</td><td>Pt950・Pt900・Pt850</td><td>Ag925・SV925・Silver925・925</td></tr>
              <tr><td>JIS H6309:2022 の品位区分</td><td>999・990・950・900・850</td><td>999・990・958・950・925・800</td></tr>
              <tr><td>製品として表示できる下限</td><td>850‰未満はプラチナ製品と表示できない</td><td>800‰未満は銀製品と表示できない</td></tr>
              <tr><td>漢字のみの表示</td><td>「白金」「白金製」は品位999</td><td>「銀」は品位925以上、「銀製」は品位800以上</td></tr>
              <tr><td>造幣局の品位証明</td><td>4区分</td><td>5区分</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版、造幣局「貴金属製品の品位区分と証明記号」。造幣局は「K18、Pt900などの記号は造幣局の証明記号ではありません」と説明しています。</p>
        <ul>
          <li>「SV」「Silver」だけで品位を併記しない表示は、925‰以上の銀に限られます。品位925の銀合金は「Sterling（スターリングシルバー）」とも表示でき、造幣局によると、その他の金属（主に銅）が1000分の75含まれています。</li>
          <li>銀900‰とプラチナの合金は「Ag900」または「Ag900(Pt)」と表示し、プラチナ製品とは表示できません。プラチナを含んでいても、主成分が銀なら銀の製品です。</li>
          <li>表示規定は、ニッケル・銅・亜鉛の合金である<strong>洋白（洋銀・ニッケルシルバー）</strong>について「銀の一種と間違われやすい」としています。洋白は貴金属ではありません。</li>
        </ul>

        <h2>1gあたりの価格の差（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品位</th><th>1gあたりの地金の値（当サイトの計算）</th><th>10gの地金の値</th></tr></thead>
            <tbody>
              <tr><td>Pt950</td><td>約{yen(PT_BUY * 0.95)}円</td><td>約{yen(PT_BUY * 9.5)}円</td></tr>
              <tr><td>Pt900</td><td>約{yen(PT_BUY * 0.9)}円</td><td>約{yen(PT_BUY * 9)}円</td></tr>
              <tr><td>SV925（銀925）</td><td>約{yen2(AG_BUY * 0.925)}円</td><td>約{yen(AG_BUY * 9.25)}円</td></tr>
              <tr><td>SV800（銀800）</td><td>約{yen2(AG_BUY * 0.8)}円</td><td>約{yen(AG_BUY * 8)}円</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">地金の値＝田中貴金属の店頭買取価格（プラチナ1g {yen(PT_BUY)}円・銀1g {yen2(AG_BUY)}円・{pubLabel}）×品位。業者の買取価格ではありません。宝石・刻印・ブランドなどの評価は含みません。</p>
        <p>同じ10gでも、Pt900とSV925の地金の値には約{yen(PT_BUY * 9 - AG_BUY * 9.25)}円の差があります。実際の買取価格は業者ごとに異なり、銀製品は手数料などで差が大きくなる場合があります。銀の売却は<Link href="/articles/silver-kaitori/">シルバー（銀）の買取相場</Link>、プラチナは<Link href="/articles/platinum-kaitori/">プラチナ買取相場ガイド</Link>をご覧ください。</p>

        <h2>見分けるときの手順</h2>
        <ol>
          <li><strong>刻印を確認する</strong>: 「Pt」で始まればプラチナ、「SV」「Ag」「Silver」「925」なら銀の表示です。造幣局の品位証明の記号がある製品は、日の丸とひし形の中の品位の数字で確認できます。</li>
          <li><strong>重さを比べる</strong>: 同じくらいの大きさで、プラチナは銀の約2倍の重さになります。ただし、宝石や空洞があると比べられません。重さの量り方は<Link href="/articles/kin-omosa-hakarikata/">金の重さの量り方</Link>でご説明しています。</li>
          <li><strong>刻印がない・判断できない場合</strong>: 買取店の分析機器による査定で確認できます。白い金の合金（ホワイトゴールド）との違いは<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>、プラチナの性質は<Link href="/articles/platinum-toha/">プラチナとは</Link>にまとめています。</li>
        </ol>

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
          <li>田中貴金属（TANAKA）「貴金属元素データ」Pt <a href="https://tanaka-preciousmetals.com/jp/guide/element/pt.html" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Ag <a href="https://tanaka-preciousmetals.com/jp/guide/element/ag.html" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>造幣局「品位証明」<a href="https://www.mint.go.jp/operations/exam/operations_certification-01.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a>・「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026」Silver <a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-silver.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a>・Platinum-Group Metals <a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-platinum-group.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月17日。</p>

        <RelatedArticles currentSlug="platinum-silver-chigai" relatedSlugs={["platinum-toha", "silver-kaitori", "white-gold-toha", "palladium-toha", "kin-mitsudo"]} />
      </article>
    </div>
  </>);
}
