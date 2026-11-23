import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261115: 「金価格 暴落」。将来の予測・売買の判断は書かない。過去の公表値（田中貴金属 年次金価格推移 1973〜2025年）と
   当サイトが毎日記録している田中貴金属の店頭買取価格（2026-05-28〜）を並べて計算するだけ。
   出典: 田中貴金属 https://gold.tanaka.co.jp/commodity/souba/y-gold.php（2026-11-15 確認）。最新値は gold-spot-prices.json（毎朝更新） */
const TITLE = "金価格の暴落は過去に何回あった？田中貴金属の年次データ53年分で見る下落の記録";
const URL = "https://gold-biyori.com/articles/kin-kakaku-boraku-kako/";
const DESC = "金価格が大きく下がった年を、田中貴金属の年次金価格推移（1973〜2025年）と当サイトの日次記録で整理しました。円建てとドル建てで下落率が違う理由、1980年の高値を回復するまでの年数も掲載しています。将来の予測は行っていません。";

const RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const pct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;
/* 最新の小売価格（税込）を税抜に直して、年次データ（税抜）の2025年最高値と比べる */
const RETAIL_EX = RETAIL / 1.1;
const HI_2025 = 22844;
const VS_2025HI = (RETAIL_EX / HI_2025 - 1) * 100;

/* 田中貴金属 年次金価格推移（参考小売価格・税抜 円/g、海外ドル建 ドル/トロイオンス、為替T.T.S.平均）。前年比は年平均どうしの当サイトの計算 */
type Row = { y: number; jpy: number; jpyPrev: number; usd: number; usdPrev: number; fx: number; fxPrev: number };
const ROWS: Row[] = [
  { y: 1981, jpy: 3311, jpyPrev: 4499, usd: 459.87, usdPrev: 612.13, fx: 221.68, fxPrev: 227.83 },
  { y: 1976, jpy: 1257, jpyPrev: 1616, usd: 124.84, usdPrev: 161.6, fx: 296.6, fxPrev: 297.86 },
  { y: 1986, jpy: 2044, jpyPrev: 2490, usd: 367.59, usdPrev: 317.32, fx: 169.6, fxPrev: 239.62 },
  { y: 1999, jpy: 1069, jpyPrev: 1287, usd: 278.91, usdPrev: 294.19, fx: 114.95, fxPrev: 131.93 },
  { y: 1984, jpy: 2808, jpyPrev: 3296, usd: 360.45, usdPrev: 424.35, fx: 238.58, fxPrev: 238.53 },
  { y: 1988, jpy: 1845, jpyPrev: 2133, usd: 437.09, usdPrev: 446.63, fx: 129.19, fxPrev: 145.71 },
  { y: 1991, jpy: 1609, jpyPrev: 1826, usd: 362.24, usdPrev: 383.59, fx: 135.56, fxPrev: 145.83 },
  { y: 1985, jpy: 2490, jpyPrev: 2808, usd: 317.32, usdPrev: 360.45, fx: 239.62, fxPrev: 238.58 },
  { y: 1992, jpy: 1446, jpyPrev: 1609, usd: 343.72, usdPrev: 362.24, fx: 127.67, fxPrev: 135.56 },
  { y: 2013, jpy: 4453, jpyPrev: 4321, usd: 1411.77, usdPrev: 1668.86, fx: 98.7, fxPrev: 80.81 },
  { y: 2014, jpy: 4340, jpyPrev: 4453, usd: 1266.23, usdPrev: 1411.77, fx: 106.79, fxPrev: 98.7 },
];
const ch = (a: number, b: number) => (a / b - 1) * 100;

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金価格の暴落の記録", item: URL },
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
  { q: "金価格が最も大きく下がったのはいつですか？", a: "田中貴金属の年次金価格推移（税抜の参考小売価格）では、1980年の年間最高値1g 6,495円のあと、1999年の年間最低値1g 917円まで下がっています（約86%の下落・当サイトの計算）。年平均どうしの前年比では1981年の-26.4%が1973年以降で最大です。" },
  { q: "1980年の高値を取り戻すまで何年かかりましたか？", a: "同じ年次データで、1980年の年間最高値6,495円を年間最高値が初めて上回ったのは2020年（7,063円）です。年平均では1980年の4,499円を2020年の6,122円が初めて上回りました。いずれも約40年後です。" },
  { q: "ドル建ての金価格が下がっても、円建てが下がらないことはありますか？", a: "あります。2013年は海外のドル建て価格の年平均が前年比-15.4%でしたが、為替（T.T.S.平均）が80.81円から98.70円の円安になったため、円建ての年平均は+3.1%でした。円建ての価格は、ドル建て価格×為替÷31.1035（1トロイオンスのグラム数）で概算できます。" },
  { q: "金価格は今後暴落しますか？", a: "当サイトは将来の金価格を予測していません。このページは田中貴金属が公表している過去の価格と、当サイトが記録した日々の店頭買取価格を並べたものです。金は元本保証の商品ではなく、価格は変動します。" },
];

export default function KinKakakuBorakuPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-souba.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-souba-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金価格の暴落の記録</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金価格の推移のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金価格の暴落は過去に何回あったか — 田中貴金属の年次データ53年分で見る下落の記録</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月15日／最新の価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>「金価格の暴落」について、田中貴金属が公表している<strong>1973〜2025年の年次金価格推移</strong>と、当サイトが2026年5月から毎日記録している店頭買取価格をもとに、過去に大きく下がった時期を数字で整理しました。当サイトは将来の価格を予測していません。</p>
        <ul>
          <li>最大の下落: 1980年の年間最高値 1g 6,495円 → 1999年の年間最低値 1g 917円（約-86%）</li>
          <li>年平均の前年比で最大の下落: 1981年の-26.4%（1980年 4,499円 → 1981年 3,311円）</li>
          <li>1980年の最高値を年間最高値が再び上回ったのは2020年（7,063円）＝約40年後</li>
          <li>当サイトの日次記録では、2026年8月25日の店頭買取価格 1g 26,168円から、11月3日の 21,494円まで-17.9%</li>
        </ul>

        <h2>年平均が前年より大きく下がった年（1973〜2025年）</h2>
        <p>田中貴金属の年次データの年平均（参考小売価格・税抜）を前年と比べ、円建てで-10%以上下がった年と、ドル建てで-10%以上下がった年を並べました。前年比は当サイトの計算です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>円建て 年平均（円/g）</th><th>円建て 前年比</th><th>ドル建て 前年比</th><th>為替 前年比</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.y}><td>{r.y}年</td><td>{r.jpyPrev.toLocaleString()} → {r.jpy.toLocaleString()}</td><td><strong>{pct(ch(r.jpy, r.jpyPrev))}</strong></td><td>{pct(ch(r.usd, r.usdPrev))}</td><td>{r.fxPrev}円 → {r.fx}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属工業「年次金価格推移」（期間1973〜2025年。消費税率の違いがあるため参考小売価格は税抜。2026年11月15日確認）。為替はT.T.S.平均。年平均どうしの比較のため、年の途中の最高値・最低値の動きは含みません。</p>

        <h3>円建てとドル建てで下落率が違う理由</h3>
        <p>国内の金価格は、海外のドル建て価格（1トロイオンス＝31.1035g あたり）を為替で円に換算した値が基準になります。そのため、<strong>ドル建て価格と為替の両方</strong>で動きます。</p>
        <ul>
          <li>1986年: ドル建ては+15.8%でしたが、為替が239.62円から169.60円の円高になり、円建ては-17.9%</li>
          <li>2013年: ドル建ては-15.4%でしたが、為替が80.81円から98.70円の円安になり、円建ては+3.1%</li>
          <li>1999年: ドル建ては-5.2%、為替が131.93円から114.95円の円高で、円建ては-16.9%</li>
        </ul>
        <p>「海外で金価格が暴落した」という報道があっても、日本の店頭価格の下がり方は為替次第で大きく異なります。</p>

        <h2>1980年の高値から回復まで約40年</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>年</th><th>価格（円/g・税抜）</th></tr></thead>
            <tbody>
              <tr><td>年間最高値</td><td>1980年</td><td>6,495円</td></tr>
              <tr><td>その後の年間最低値の最安</td><td>1999年</td><td>917円（1980年の最高値から約-86%）</td></tr>
              <tr><td>1980年の最高値を初めて上回った年間最高値</td><td>2020年</td><td>7,063円</td></tr>
              <tr><td>1980年の年平均 4,499円を初めて上回った年平均</td><td>2020年</td><td>6,122円（2013年は4,453円で届かず）</td></tr>
            </tbody>
          </table>
        </div>
        <p>年間最高値は、1980年のあと2020年・2022年・2023年・2024年・2025年に更新されています。2025年の年間最高値は1g 22,844円、年間最低値は13,433円でした。最新の店頭小売価格 1g {yen(RETAIL)}円（税込・{pubLabel}）を税抜に直すと約{yen(RETAIL_EX)}円で、2025年の年間最高値と比べて{pct(VS_2025HI)}です（当サイトの計算）。</p>

        <h2>2026年の日々の動き（当サイトの記録）</h2>
        <p>当サイトは2026年5月28日から、田中貴金属の金の店頭買取価格（税込）を毎朝記録しています（10月23日〜30日は田中貴金属のサイトが応答せず欠測）。この記録では次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>日付</th><th>店頭買取価格（1g・税込）</th></tr></thead>
            <tbody>
              <tr><td>記録期間の最高値</td><td>2026年8月25日</td><td>26,168円</td></tr>
              <tr><td>その後の最安値</td><td>2026年11月3日</td><td>21,494円（-17.9%）</td></tr>
              <tr><td>前の記録日からの下落が最大</td><td>2026年10月22日 → 10月31日</td><td>22,858円 → 21,938円（-4.0%・欠測をはさむ）</td></tr>
              <tr><td>連続した日の下落が最大</td><td>2026年6月10日 → 6月11日</td><td>-905円（-3.8%）</td></tr>
              <tr><td>最新</td><td>{pubLabel}</td><td>{yen(BUY)}円</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">記録データは<Link href="/kin-kaitori-hakusho/">金買取白書</Link>でCSV・JSONとして公開しています。日々の推移のグラフは<Link href="/souba-dashboard/">最新の金買取相場</Link>でご覧いただけます。</p>

        <h2>金を売る側が確認できること</h2>
        <ul>
          <li>店頭の買取価格は田中貴金属などの公表価格に連動し、平日は1日に複数回変わります。売却する日の公表時刻と価格をご確認ください。</li>
          <li>製品（K18・K14など）の買取額は、地金価格×品位をもとに業者ごとの係数で決まります。品位別の目安は<Link href="/articles/kinseido-kaitori-guide/">品位別買取相場</Link>をご覧ください。</li>
          <li>売却益が出た場合の税金は<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>でご説明しています。</li>
        </ul>

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
          <li>田中貴金属工業「年次金価格推移」（1973〜2025年）<a href="https://gold.tanaka.co.jp/commodity/souba/y-gold.php" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>当サイトの日次記録（田中貴金属の金 店頭買取価格・2026年5月28日〜）<Link href="/kin-kaitori-hakusho/">金買取白書</Link></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月15日。過去の価格は将来の価格を示すものではありません。金は元本保証の商品ではありません。</p>

        <RelatedArticles currentSlug="kin-kakaku-boraku-kako" relatedSlugs={["kin-uridoki-2026", "kin-kaitori-souba", "kin-toushin-hiyou-hikaku", "platinum-kachi-suii", "kin-kaitori-zeikin", "kin-honisei", "enyasu-kin"]} />
      </article>
    </div>
  </>);
}
