import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261117: 「銀投資」。出典: 田中貴金属「本日の貴金属価格」、徳力本店「取扱品目・手数料」（銀地金の売買手数料）、
   三菱マテリアル「引出手数料…の改定について」（2026-04-01）、JPX「純銀上場信託（1542）」銘柄概要（2026-02-27現在）、
   日本取引所グループ「銀先物 制度概要」、USGS MCS 2026 Silver、国税庁 No.3105・No.3152・No.1463・No.1522。確認日 2026-11-17。
   勧める・勧めないは書かない（仕組み・費用・税の事実のみ）。価格は gold-spot-prices.json（毎朝更新） */
const TITLE = "銀投資の方法と費用 — 銀地金・積立・ETF・先物の手数料と税金を公式資料で比較【毎朝更新】";
const URL = "https://gold-biyori.com/articles/gin-toushi/";
const DESC = "銀（シルバー）に投資する4つの方法（銀地金・積立・ETF・先物）の手数料と税金を、田中貴金属・徳力本店・JPX・国税庁などの公式資料で整理しました。銀と金の売買価格差、銀地金のサイズ別の往復コストを毎朝更新で計算しています。";

const T = goldData.tanaka_official;
const AG_R = T.ag_retail_per_g as number;
const AG_B = T.ag_buyback_per_g as number;
const AU_R = T.au_retail_per_g as number;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const yen2 = (n: number) => n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const agSpread = ((AG_R - AG_B) / AG_B) * 100;
const auSpread = ((AU_R - AU_B) / AU_B) * 100;

/* 徳力本店の銀地金の手数料（税込・2026-11-17 確認）。購入はバー1本、売却は同一買取単価1件あたりの総重量。銀地金は徳力本店製のみ買取 */
const BARS = [
  { label: "100g", g: 100, buyFee: 4400, sellFee: 3300 },
  { label: "500g", g: 500, buyFee: 6050, sellFee: 5500 },
  { label: "1kg", g: 1000, buyFee: 6600, sellFee: 6600 },
  { label: "10kg", g: 10000, buyFee: 24200, sellFee: 24200 },
];
const barRows = BARS.map((b) => {
  const cost = AG_R * b.g + b.buyFee;
  const need = (cost + b.sellFee) / b.g;
  return { ...b, cost, sell: AG_B * b.g - b.sellFee, rise: (need / AG_B - 1) * 100 };
});

const FAQS = [
  { q: "銀に投資する方法には何がありますか？", a: "主に、銀地金（現物）を買う方法、地金商の積立で少しずつ買う方法、銀に連動するETF（例: 純銀上場信託・銘柄コード1542）を証券会社で買う方法、大阪取引所の銀先物を取引する方法があります。費用と税金の扱いはそれぞれ異なります。" },
  { q: "銀は金より売買の価格差が大きいのですか？", a: "田中貴金属の公表値では、" + `${goldData.date.replace(/-/g, "/")}` + " 時点で銀の小売価格は買取価格より約" + agSpread.toFixed(1) + "%高く、金の約" + auSpread.toFixed(1) + "%より差が大きくなっています（当サイトの計算・毎朝更新）。" },
  { q: "銀地金を売ったときの税金は？", a: "国税庁によると、土地・建物・株式等以外の資産の譲渡による所得は総合課税の譲渡所得です。譲渡所得には年50万円の特別控除があり、所有期間が5年を超える場合は控除後の金額の2分の1が課税の対象になります（No.3105・No.3152）。" },
  { q: "銀のETFの税金は地金と違いますか？", a: "違います。ETFの譲渡益は上場株式等に係る譲渡所得等として申告分離課税（所得税15%・住民税5%、別途復興特別所得税）です（国税庁 No.1463）。JPXの銘柄概要では、純銀上場信託（1542）はNISA制度の成長投資枠の対象と記載されています（2026年2月27日現在）。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "銀投資の方法と費用", item: URL },
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

export default function GinToushiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-gin.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-gin-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">銀投資の方法と費用</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="銀投資の方法と費用の比較のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">銀投資の方法と費用 — 銀地金・積立・ETF・先物の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月17日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／手数料・制度は2026年11月17日に各社公式で確認</p>

        <p>銀（シルバー）に投資する方法には、<strong>銀地金・積立・ETF・先物</strong>があります。最新の田中貴金属の銀の店頭小売価格は1g {yen2(AG_R)}円、店頭買取価格は1g {yen2(AG_B)}円で、<strong>小売価格は買取価格より約{agSpread.toFixed(1)}%高く</strong>、金（約{auSpread.toFixed(1)}%）より差が大きくなっています（税込・{pubLabel}・当サイトの計算）。銀地金ではさらにバー1本ごとの手数料がかかります。当サイトは銀への投資を勧める・勧めない立場ではなく、仕組み・費用・税を公式資料の数字で並べています。</p>

        <h2>4つの方法の比較</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>方法</th><th>主な費用</th><th>税金（売却益）</th><th>確認した例</th></tr></thead>
            <tbody>
              <tr><td>銀地金（現物）</td><td>小売価格と買取価格の差＋バー1本ごとの手数料（売却時も手数料）</td><td>総合課税の譲渡所得（No.3105・No.3152）</td><td>徳力本店: 100g・500g・1kg・10kg</td></tr>
              <tr><td>積立</td><td>積立購入手数料・年会費、地金で受け取る場合は引出手数料</td><td>取扱会社の説明書面で確認（純金積立の扱いは<Link href="/articles/junkin-tsumitate-hikaku/">純金積立の比較</Link>参照）</td><td>三菱マテリアル: 金・プラチナ・銀の積立。銀地金の引出手数料 100g 9,900円・1kg 17,600円</td></tr>
              <tr><td>ETF</td><td>信託報酬（年率）、証券会社の売買手数料</td><td>上場株式等の譲渡所得等・申告分離課税（No.1463）</td><td>純銀上場信託（1542）: 信託報酬 年0.55%（税込）</td></tr>
              <tr><td>先物</td><td>取引手数料、証拠金（VaR方式）</td><td>先物取引に係る雑所得等・申告分離課税（No.1522）</td><td>大阪取引所 銀先物: 取引単位30kg</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">各社・各商品の条件は2026年11月17日時点（1542は JPX 銘柄概要の2026年2月27日現在の値）。三菱マテリアルの引出手数料は2026年5月11日契約分からの改定後の額です。</p>

        <h2>銀地金の往復コスト（毎朝更新）</h2>
        <p>銀地金を買ってすぐに同じ量を売る場合に、受取額が購入額に戻るには買取価格がどれだけ上がる必要があるかを、徳力本店の手数料と田中貴金属の最新の価格で計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>購入額（手数料込み）</th><th>すぐに売った場合の受取額</th><th>購入額に戻るのに必要な値上がり幅</th></tr></thead>
            <tbody>
              {barRows.map((r) => (
                <tr key={r.label}><td>{r.label}</td><td>{yen(r.cost)}円</td><td>{yen(r.sell)}円</td><td>+{r.rise.toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 購入額＝田中貴金属の銀の店頭小売価格×重さ＋徳力本店の購入手数料（100g 4,400円・500g 6,050円・1kg 6,600円・10kg 24,200円）。受取額＝店頭買取価格×重さ−徳力本店の売却手数料（100g 3,300円・500g 5,500円・1kg 6,600円・10kg 24,200円）。2026年11月17日は徳力本店の銀の小売価格（280.06円）・買取価格（263.01円）が田中貴金属の公表値と同じでした。徳力本店は銀地金は自社製のみ買い取ると案内しています。税金・振込手数料は含めていません。</p>
        <p>100gの地金は手数料の割合が大きく、購入額に戻るまでの値上がり幅が大きくなります。金地金の同じ計算は<Link href="/articles/kin-kounyu-chuiten/">金を購入するときの注意点</Link>に掲載しています。</p>

        <h2>銀の価格の動き（USGS）</h2>
        <p>米国地質調査所（USGS）によると、2025年の銀の平均価格は1トロイオンスあたり推定38ドルで、2024年の平均（28.37ドル）より34%高くなりました。2025年は年初の29.35ドルが年間の最安値で、11月13日に53.60ドルの高値をつけています。USGS は供給不足が続いたことを価格上昇の理由として挙げています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>平均価格（ドル/トロイオンス）</th></tr></thead>
            <tbody>
              <tr><td>2021年</td><td>25.23</td></tr>
              <tr><td>2022年</td><td>21.88</td></tr>
              <tr><td>2023年</td><td>23.54</td></tr>
              <tr><td>2024年</td><td>28.37</td></tr>
              <tr><td>2025年（推定）</td><td>38</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: U.S. Geological Survey「Mineral Commodity Summaries 2026: Silver」。2022年は前年より約13%低く（当サイトの計算）、上昇だけでなく下落した年もあります。過去の推移は将来の価格を示すものではありません。</p>
        <p>USGS によると、2025年の世界の銀の消費は推定35,700tで、2025年の米国での用途は電気・電子25%、その他の工業用途と写真19%、地金への投資18%、太陽光発電15%、コイン・メダル14%などです。</p>

        <h2>銀の先物とETFの仕組み</h2>
        <ul>
          <li><strong>大阪取引所 銀先物</strong>: 現物先物取引。標準品は純度99.99%以上の銀地金、取引単位30kg、呼値は1gにつき0.1円、偶数月の直近6限月。通常の制限値幅は10%（金標準先物は5%）です。</li>
          <li><strong>純銀上場信託（1542）</strong>: 三菱UFJ信託銀行が管理する ETF で、大阪取引所の銀の先物価格から評価した銀地金の理論価格（100gあたり）との連動を目指します。一定の口数があれば、受益権と引き換えに地金の現物を受け取ることもできるとされています。</li>
        </ul>
        <p>金の先物の仕組みは<Link href="/articles/kin-sakimono-torihiki/">金先物取引とは</Link>、金の投資信託・ETF の費用は<Link href="/articles/kin-toushin-hiyou-hikaku/">金の投資信託の費用比較</Link>にまとめています。銀のアクセサリーや食器を売る場合は、地金とは価格の基準が異なります（<Link href="/articles/silver-kaitori/">シルバー（銀）の買取相場</Link>）。</p>

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
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>徳力本店「取扱品目・手数料」<a href="https://www.tokuriki-kanda.co.jp/goldetc/item/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>三菱マテリアル「金地金・プラチナ地金・銀地金引出手数料および金地金販売手数料の改定について」（2026年4月1日）<a href="https://gold.mmc.co.jp/info/20260401_5.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「積立購入」<a href="https://gold.mmc.co.jp/howto/mgp/trans/deposit.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a></li>
          <li>日本取引所グループ「純銀上場信託（現物国内保管型）1542」銘柄概要 <a href="https://www.jpx.co.jp/equities/products/etfs/issues/files/1542-j.pdf" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「銀先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/silver-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Silver」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-silver.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>国税庁 タックスアンサー No.3105「譲渡所得の対象となる資産と課税方法」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3152 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.1463 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1463.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.1522 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月17日。手数料・制度・税制は変更される場合があります。お取引の前に、各社の最新情報と説明書面をご確認ください。</p>

        <RelatedArticles currentSlug="gin-toushi" relatedSlugs={["silver-kaitori", "kin-toushin-hiyou-hikaku", "kin-sakimono-torihiki", "junkin-tsumitate-hikaku", "platinum-silver-chigai"]} />
      </article>
    </div>
  </>);
}
