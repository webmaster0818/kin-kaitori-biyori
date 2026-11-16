import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261116: 「金 埋蔵量」。出典: USGS Mineral Commodity Summaries 2026: Gold（2024・2025年の鉱山生産、国別埋蔵量、用途の内訳）、
   産総研 地質調査総合センター GSJ 地質ニュース Vol.6 No.2（2017年2月）「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」（菱刈鉱山の産金量・可採金量）。
   確認日 2026-11-16。割合・年数・体積は当サイトの計算。将来の価格には触れない */
const TITLE = "金の埋蔵量は世界で約6万6,000トン — 国別の埋蔵量・生産量と日本の菱刈鉱山";
const URL = "https://gold-biyori.com/articles/kin-maizoryo/";
const DESC = "金の埋蔵量を、米国地質調査所（USGS）の2026年版データで国別に掲載しました。2025年の鉱山生産、埋蔵量÷年間生産の年数、日本で唯一操業する菱刈鉱山の産金量（産総研 地質調査総合センターの資料）もご説明します。";

/* USGS MCS 2026（t・金量）。生産は 2025 年推定 */
const ROWS = [
  { c: "オーストラリア", p: 280, r: 13000 },
  { c: "ロシア", p: 310, r: 12000 },
  { c: "南アフリカ", p: 90, r: 5000 },
  { c: "インドネシア", p: 90, r: 3600 },
  { c: "カナダ", p: 200, r: 3200 },
  { c: "中国", p: 380, r: 3200 },
  { c: "米国", p: 160, r: 3000 },
  { c: "ブラジル", p: 80, r: 2500 },
  { c: "カザフスタン", p: 130, r: 2300 },
  { c: "ペルー", p: 110, r: 2200 },
  { c: "ウズベキスタン", p: 130, r: 2200 },
  { c: "メキシコ", p: 140, r: 1400 },
  { c: "ガーナ", p: 150, r: 1000 },
  { c: "その他の国", p: 1000, r: 11000 },
];
const WORLD_P = 3300;
const WORLD_R = 66000;
const D_AU = 19.32;
const reserveM3 = (WORLD_R * 1e6) / D_AU / 1e6;

const FAQS = [
  { q: "世界の金の埋蔵量はどれくらいですか？", a: "米国地質調査所（USGS）の Mineral Commodity Summaries 2026 では、世界の金の埋蔵量は66,000tです。国別ではオーストラリア（13,000t）、ロシア（12,000t）、南アフリカ（5,000t）の順に多くなっています。" },
  { q: "金はあと何年で採れなくなりますか？", a: "埋蔵量66,000tを2025年の鉱山生産3,300tで割ると約20年です（当サイトの計算）。ただし、埋蔵量は採算や技術、探鉱の進展で見直される数値で、USGSも2026年版でオーストラリア・ブラジル・中国・ペルー・その他の国の埋蔵量を改訂しています。この年数は、金が採れなくなる時期を示すものではありません。" },
  { q: "日本に金鉱山はありますか？", a: "産総研 地質調査総合センターの資料（2017年）は、現在操業している金属鉱山は鹿児島県伊佐市の菱刈金銀鉱山のみと言えると説明しています。菱刈鉱山の産金量は224t（2016年3月時点）、2015年末時点の可採金量は約170tとされています。" },
  { q: "採れた金は何に使われていますか？", a: "USGSが World Gold Council のデータとして示す世界の消費（ETF等を除く）の内訳は、宝飾40%、地金24%、中央銀行など21%、公式コイン・メダル等7%、電気・電子7%、その他1%です。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金の埋蔵量", item: URL },
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

export default function KinMaizoryoPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-hakusho.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-hakusho-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の埋蔵量</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金の埋蔵量の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金の埋蔵量 — 国別の埋蔵量・生産量と日本の菱刈鉱山</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月16日／確認日: 2026年11月16日</p>

        <p>米国地質調査所（USGS）によると、<strong>世界の金の埋蔵量は66,000t</strong>、2025年の世界の金鉱山生産は推定<strong>3,300t</strong>です。埋蔵量を年間生産で割ると約{Math.round(WORLD_R / WORLD_P)}年分にあたります（当サイトの計算）が、埋蔵量は採算や技術の変化で見直される数値のため、この年数で金が採れなくなるわけではありません。</p>

        <h2>国別の埋蔵量と2025年の生産量</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>国</th><th>埋蔵量</th><th>世界の埋蔵量に占める割合（当サイトの計算）</th><th>2025年の生産（推定）</th><th>埋蔵量÷生産（当サイトの計算）</th></tr></thead>
            <tbody>
              {ROWS.map((x) => (
                <tr key={x.c}><td>{x.c}</td><td>{x.r.toLocaleString()}t</td><td>約{((x.r / WORLD_R) * 100).toFixed(0)}%</td><td>{x.p.toLocaleString()}t</td><td>約{Math.round(x.r / x.p)}年</td></tr>
              ))}
              <tr><td>世界合計（概数）</td><td>66,000t</td><td>100%</td><td>3,300t</td><td>約{Math.round(WORLD_R / WORLD_P)}年</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: USGS「Mineral Commodity Summaries 2026: Gold」World Mine Production and Reserves（金量・t）。埋蔵量の多い順に掲載。オーストラリアの埋蔵量のうち、JORC（オーストラリアの資源報告基準）に準拠した、または同等の埋蔵量は4,500tとされています。</p>
        <p>生産量が最も多いのは中国（380t）ですが、埋蔵量はオーストラリア・ロシアが大きく上回ります。USGSによると、2025年の生産は中国・ロシア・オーストラリア・カナダ・米国の順に多く、この5か国で世界の41%を占めました。</p>

        <h2>埋蔵量はどれくらいの大きさか</h2>
        <p>金の密度19.32g/cm³（田中貴金属の元素データ）で計算すると、66,000tの金の体積は約{reserveM3.toLocaleString(undefined, { maximumFractionDigits: 0 })}m³で、一辺 約{Math.cbrt(reserveM3).toFixed(1)}mの立方体に収まります（当サイトの計算）。体積と重さの換算は<Link href="/articles/kin-mitsudo/">金の密度</Link>に掲載しています。</p>

        <h2>日本の金鉱山 — 菱刈鉱山</h2>
        <p>産総研 地質調査総合センターの「GSJ 地質ニュース」（2017年2月）は、現在操業している日本の金属鉱山は鹿児島県伊佐市の菱刈金銀鉱山のみと言えると説明しています。同資料による菱刈鉱山の数値は次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>数値</th></tr></thead>
            <tbody>
              <tr><td>出鉱開始</td><td>1985年</td></tr>
              <tr><td>2015年の生産</td><td>出鉱量20.4万t・平均金品位37g/t・金7.5t</td></tr>
              <tr><td>これまでの産金量</td><td>224t（2016年3月時点）</td></tr>
              <tr><td>可採金量</td><td>約170t（2015年末時点）</td></tr>
              <tr><td>運営</td><td>住友金属鉱山株式会社</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 実松健造「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」GSJ 地質ニュース Vol.6 No.2（2017年2月）。同資料は数値の出典を住友金属鉱山株式会社（2016）としています。2016年以降の数値は当サイトでは確認しておりません。</p>
        <p>平均金品位37g/tは、鉱石1tあたり37gの金が含まれることを示します。同資料は、出鉱開始から長年にわたり高品位の鉱石を安定して生産できる金鉱山は世界的にもまれだとしています。川で採れる金については<Link href="/articles/sakin-toha/">砂金とは</Link>でご説明しています。</p>

        <h2>採れた金の使い道</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>用途</th><th>世界の消費に占める割合</th></tr></thead>
            <tbody>
              <tr><td>宝飾</td><td>40%</td></tr>
              <tr><td>地金（現物のバー）</td><td>24%</td></tr>
              <tr><td>中央銀行など</td><td>21%</td></tr>
              <tr><td>公式コイン・メダル等</td><td>7%</td></tr>
              <tr><td>電気・電子</td><td>7%</td></tr>
              <tr><td>その他</td><td>1%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: USGS「Mineral Commodity Summaries 2026: Gold」（World Gold Council のデータ。上場投資信託などの投資を除く推計）。</p>
        <p>金地金（インゴット）については<Link href="/articles/ingot-toha/">インゴットとは</Link>、過去の価格の動きは<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>をご覧ください。当サイトは将来の価格の見通しは掲載しておりません。</p>

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
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>産業技術総合研究所 地質調査総合センター「GSJ 地質ニュース」Vol.6 No.2（2017年2月）実松健造「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」<a href="https://www.gsj.jp/data/gcn/gsj_cn_vol6.no2_p48-52.pdf" target="_blank" rel="noopener noreferrer">gsj.jp</a></li>
          <li>田中貴金属（TANAKA）「貴金属元素データ Au」<a href="https://tanaka-preciousmetals.com/jp/library/element/au" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月16日。</p>

        <RelatedArticles currentSlug="kin-maizoryo" relatedSlugs={["sakin-toha", "kin-mitsudo", "ingot-toha", "kin-kakaku-boraku-kako", "kin-uridoki-2026"]} />
      </article>
    </div>
  </>);
}
