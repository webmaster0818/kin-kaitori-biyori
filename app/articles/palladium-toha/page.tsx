import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261116: 「パラジウムとは」。出典: 田中貴金属（TANAKA）貴金属元素データ Pd・Pt、日本ジュエリー協会「素材等の表示規定」2026年度改訂版
   （貴金属の定義・Ag950(Pd)・WG・JIS/ISO/CIBJO/造幣局の品位区分）、USGS Mineral Commodity Summaries 2026: Platinum-Group Metals、
   田中貴金属「本日の貴金属価格」（パラジウムの店頭価格の掲載なし）。確認日 2026-11-16。比率・構成比は当サイトの計算。将来の価格には触れない */
const TITLE = "パラジウムとは？性質・品位の表示（Pd950・Pd500）・ジュエリーでの使われ方と産出国";
const URL = "https://gold-biyori.com/articles/palladium-toha/";
const DESC = "パラジウム（Pd）とは何かを、田中貴金属の元素データ、日本ジュエリー協会の表示規定、米国地質調査所（USGS）の生産量・価格データで説明します。品位の区分、ホワイトゴールドの割り金としての使われ方、国別の産出量も掲載しています。";

/* USGS MCS 2026: 2025年の鉱山生産（kg）と年平均価格（ドル/トロイオンス） */
const PROD = [
  { c: "ロシア", kg: 84000 },
  { c: "南アフリカ", kg: 70000 },
  { c: "カナダ", kg: 16000 },
  { c: "ジンバブエ", kg: 15000 },
  { c: "米国", kg: 6200 },
];
const WORLD_KG = 190000;
const PRICE = [
  { y: 2021, pd: 2419.18, pt: 1094.31 },
  { y: 2022, pd: 2133.81, pt: 966.54 },
  { y: 2023, pd: 1351.66, pt: 973.0 },
  { y: 2024, pd: 994.9, pt: 960.7 },
  { y: 2025, pd: 1100, pt: 1200 },
];
const D_PD = 12.02;
const D_PT = 21.45;

const FAQS = [
  { q: "パラジウムは貴金属ですか？", a: "日本ジュエリー協会の表示規定は、貴金属を金、白金（プラチナ）、パラジウム、ロジウム、ルテニウム、イリジウム、オスミウム、銀の8種の元素の単体と定義しており、パラジウムはその1つです。" },
  { q: "パラジウムの刻印にはどのようなものがありますか？", a: "表示規定では元素記号「Pd」を用います。JIS H6309:2022 のパラジウムの品位区分は999・990・950・500で、品位はPd950のように元素記号と千分率で表示します。なお、同規定に掲載されている造幣局の検定品位区分には、パラジウムの区分はありません。" },
  { q: "ホワイトゴールドにパラジウムが使われているのはなぜですか？", a: "日本ジュエリー協会の表示規定は、ホワイトゴールド（白色金）を「主にパラジウム等を割り金とした白色の金合金」と定義しています。割り金の選び方で金合金の色が変わるためです。" },
  { q: "パラジウムの今日の価格はどこで分かりますか？", a: "田中貴金属の「本日の貴金属価格」には、金・プラチナ・銀の店頭価格が掲載されていますが、パラジウムの店頭価格は掲載されていません（2026年11月16日確認）。当サイトでは、USGSが公表している年平均価格（ドル建て）を掲載しています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "パラジウムとは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-16", dateModified: "2026-11-16",
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

export default function PalladiumTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-platinum.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-platinum-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">パラジウムとは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="パラジウムの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">パラジウムとは — 性質・品位の表示・使われ方と産出国</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月16日／確認日: 2026年11月16日</p>

        <p>パラジウムは、元素記号<strong>Pd</strong>・原子番号<strong>46</strong>の貴金属です。プラチナと同じ白金族金属の1つで、日本ジュエリー協会の表示規定では金・プラチナ・銀などと並ぶ8種の貴金属に含まれます。ジュエリーでは<strong>ホワイトゴールドの割り金</strong>として使われ、2025年の世界の鉱山生産は推定190tで、ロシアと南アフリカで全体の約{Math.round(((84000 + 70000) / WORLD_KG) * 100)}%を占めます（USGS・当サイトの計算）。</p>

        <h2>パラジウムの性質（元素データ）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>パラジウム（Pd）</th><th>参考: プラチナ（Pt）</th></tr></thead>
            <tbody>
              <tr><td>原子番号</td><td>46</td><td>78</td></tr>
              <tr><td>原子量</td><td>106.42</td><td>195.084</td></tr>
              <tr><td>密度（293K）</td><td>12.02 g/cm³</td><td>21.45 g/cm³</td></tr>
              <tr><td>融点</td><td>1,554.8℃</td><td>1,768.2℃</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属（TANAKA）「貴金属元素データ Pd・Pt」（単位の記載がないため、密度はg/cm³・融点は℃として表記）。</p>
        <p>密度から計算すると、同じ大きさならパラジウムの重さはプラチナの約{Math.round((D_PD / D_PT) * 100)}%です（当サイトの計算）。金の密度との比較は<Link href="/articles/kin-mitsudo/">金の密度</Link>でご説明しています。</p>

        <h2>品位の区分と表示</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>規格</th><th>パラジウムの品位区分</th></tr></thead>
            <tbody>
              <tr><td>JIS H6309:2022</td><td>999・990・950・500</td></tr>
              <tr><td>ISO 9202:2019</td><td>999・990・950・500</td></tr>
              <tr><td>CIBJO の標準品位</td><td>999・950・500</td></tr>
              <tr><td>造幣局の検定品位区分</td><td>区分なし（金・プラチナ・銀・コンビのみ）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版（14. 品位区分規格）。</p>
        <ul>
          <li>表示には元素記号「Pd」を用い、品位は「Pd950」のように元素記号と千分率で表します。</li>
          <li>銀950‰とパラジウムの二元合金は、主金属の銀を表示して「Ag950」、従金属も表示する場合は「Ag950(Pd)」とします。</li>
          <li>ホワイトゴールド（白色金）は「主にパラジウム等を割り金とした白色の金合金」と定義され、表示例は「K14WG」「Au585WG」です。</li>
        </ul>
        <p>ホワイトゴールドの定義と品位別の地金の値は<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>、プラチナの品位は<Link href="/articles/platinum-toha/">プラチナとは</Link>をご覧ください。</p>

        <h2>どこで採れるか（2025年の鉱山生産）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>国</th><th>2025年（推定）</th><th>世界に占める割合（当サイトの計算）</th></tr></thead>
            <tbody>
              {PROD.map((p) => (
                <tr key={p.c}><td>{p.c}</td><td>{(p.kg / 1000).toFixed(1)}t</td><td>約{Math.round((p.kg / WORLD_KG) * 100)}%</td></tr>
              ))}
              <tr><td>世界合計（概数）</td><td>190t</td><td>100%</td></tr>
            </tbody>
          </table>
        </div>
        <p>USGSは、ロシアを世界最大のパラジウム産出国としています。また、2025年に世界でスクラップから回収されたパラジウムとプラチナは約140tで、このうち米国の自動車用触媒からの回収はパラジウム約50t、プラチナ約8.6tと推計しています。</p>

        <h2>年平均価格の推移（ドル建て）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>パラジウム（ドル/トロイオンス）</th><th>プラチナ（ドル/トロイオンス）</th><th>パラジウム÷プラチナ（当サイトの計算）</th></tr></thead>
            <tbody>
              {PRICE.map((p) => (
                <tr key={p.y}><td>{p.y}年{p.y === 2025 ? "（推定）" : ""}</td><td>{p.pd.toLocaleString()}</td><td>{p.pt.toLocaleString()}</td><td>{(p.pd / p.pt).toFixed(2)}倍</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: USGS「Mineral Commodity Summaries 2026: Platinum-Group Metals」の Salient Statistics（Engelhard の未加工地金の年平均価格）。2025年は推定値です。</p>
        <p>2021年にはパラジウムの年平均価格がプラチナの約{(2419.18 / 1094.31).toFixed(1)}倍でしたが、2025年はプラチナを下回りました（当サイトの計算）。USGSは2025年のパラジウムの年平均価格が前年比11%上昇したとしています。当サイトは将来の価格の見通しは掲載しておりません。プラチナの価格の推移は<Link href="/articles/platinum-kachi-suii/">プラチナの価値の推移</Link>にまとめています。</p>

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
          <li>田中貴金属（TANAKA）「貴金属元素データ」Pd <a href="https://tanaka-preciousmetals.com/jp/library/element/pd" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Pt <a href="https://tanaka-preciousmetals.com/jp/library/element/pt" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Platinum-Group Metals」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-platinum-group.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月16日。価格は変動します。</p>

        <RelatedArticles currentSlug="palladium-toha" relatedSlugs={["white-gold-toha", "platinum-toha", "platinum-kaitori", "kinseido-kaitori-guide", "kin-mitsudo"]} />
      </article>
    </div>
  </>);
}
