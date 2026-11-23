import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261119: 「1オンス 何グラム」。出典: 計量法 第5条・第8条、計量単位令 第5条 別表第六（トロイオンス＝キログラムの0.0311035倍・金貨の質量の計量）・
   第8条 別表第七（ポンド＝キログラムの0.45359237倍、オンス＝ポンドの16分の1）、USGS Mineral Commodity Summaries 2026: Gold（ドル/トロイオンスの年平均・1t＝32,150.7トロイオンス）、
   田中貴金属「本日の貴金属価格」。確認日 2026-11-19。円換算・端数の重さはすべて当サイトの計算 */
const TITLE = "1オンスは何グラム？金・プラチナはトロイオンス31.1035g — 常衡オンス（28.35g）との違いと1オンスの価格【毎朝更新】";
const URL = "https://gold-biyori.com/articles/ounce-gram/";
const DESC = "金・銀・プラチナの1オンスはトロイオンスで31.1035g、食品などの常衡オンスは約28.35gです。計量単位令の定義、1オンスの金・プラチナ・銀の価格（田中貴金属の公表値で毎朝更新）、1/10オンスなど端数の重さを計算しました。";

const T = goldData.tanaka_official;
const AU_R = T.au_retail_per_g as number;
const AU_B = T.au_buyback_per_g as number;
const PT_R = T.pt_retail_per_g as number;
const PT_B = T.pt_buyback_per_g as number;
const AG_R = T.ag_retail_per_g as number;
const AG_B = T.ag_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 計量単位令 別表第六・第七 */
const TROY = 31.1035;
const AVDP = 453.59237 / 16; // 28.349523125
const diffG = TROY - AVDP;
const diffPct = (TROY / AVDP - 1) * 100;

const FRACTIONS = [
  { label: "1/20オンス", oz: 1 / 20 },
  { label: "1/10オンス", oz: 1 / 10 },
  { label: "1/4オンス", oz: 1 / 4 },
  { label: "1/2オンス", oz: 1 / 2 },
  { label: "1オンス", oz: 1 },
];
const METALS = [
  { name: "金", r: AU_R, b: AU_B },
  { name: "プラチナ", r: PT_R, b: PT_B },
  { name: "銀", r: AG_R, b: AG_B },
];
/* USGS MCS 2026: Gold — Price, dollars per troy ounce（2025年は推定） */
const USGS = [
  { y: "2021年", v: 1801 },
  { y: "2022年", v: 1802 },
  { y: "2023年", v: 1945 },
  { y: "2024年", v: 2388 },
  { y: "2025年（推定）", v: 3300 },
];

const FAQS = [
  { q: "金の1オンスは何グラムですか？", a: "31.1035gです。計量単位令の別表第六で、金貨の質量の計量に用いるトロイオンスは「キログラムの0.0311035倍」と定められています。金・銀・プラチナの国際価格で使われる「オンス」もトロイオンスです。" },
  { q: "普通の1オンスとトロイオンスは違いますか？", a: "違います。食品などで使われるオンス（常衡オンス）は、計量単位令の別表第七でポンド（0.45359237kg）の16分の1と定められ、約28.35gです。トロイオンスのほうが約" + diffG.toFixed(2) + "g（約" + diffPct.toFixed(1) + "%）重くなります（当サイトの計算）。" },
  { q: "1オンスの金はいくらですか？", a: "田中貴金属の最新の公表値（" + pubLabel + "）で計算すると、純金31.1035gの店頭買取価格は約" + yen(AU_B * TROY) + "円、店頭小売価格は約" + yen(AU_R * TROY) + "円です（当サイトの計算・毎朝更新）。金貨は銘柄や状態により、地金の価値とは異なる価格で取引されます。" },
  { q: "1kgは何オンスですか？", a: "1kg÷31.1035gで約" + (1000 / TROY).toFixed(2) + "トロイオンスです（当サイトの計算）。米国地質調査所（USGS）の資料でも、1トン（1,000kg）＝32,150.7トロイオンスとしています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "1オンスは何グラム", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-19", dateModified: "2026-11-19",
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

export default function OunceGramPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-omosa.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-omosa-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">1オンスは何グラム</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="オンスとグラムの換算の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">1オンスは何グラムか — 金・プラチナ・銀は1トロイオンス＝31.1035g</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月19日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／法令は2026年11月19日に e-Gov で確認</p>

        <p><strong>金・銀・プラチナの「1オンス」は、トロイオンスで31.1035g</strong>です。計量単位令は、トロイオンスを「キログラムの0.0311035倍」と定めています。食品などで使われる<strong>常衡オンスは約28.35g</strong>で、トロイオンスのほうが約{diffG.toFixed(2)}g（約{diffPct.toFixed(1)}%）重くなります（当サイトの計算）。純金1オンスを最新の田中貴金属の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）で換算すると、<strong>約{yen(AU_B * TROY)}円</strong>です。</p>

        <h2>計量単位令で定められた「オンス」は2種類</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>単位</th><th>法令上の定義</th><th>グラム換算</th><th>定められた用途</th></tr></thead>
            <tbody>
              <tr><td>トロイオンス</td><td>キログラムの0.0311035倍（別表第六）</td><td>31.1035g</td><td>金貨の質量の計量</td></tr>
              <tr><td>オンス（常衡オンス）</td><td>ポンドの16分の1、ポンド＝キログラムの0.45359237倍（別表第七）</td><td>{AVDP.toFixed(4)}g（当サイトの計算）</td><td>ヤードポンド法の質量の単位</td></tr>
              <tr><td>もんめ（参考）</td><td>キログラムの0.00375倍（別表第六）</td><td>3.75g</td><td>真珠の質量の計量</td></tr>
              <tr><td>カラット（参考）</td><td>キログラムの0.0002倍（別表第六）</td><td>0.2g</td><td>宝石の質量の計量</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 計量単位令 第5条・別表第六、第8条・別表第七（e-Gov 法令検索）。宝飾品の「カラット」は宝石の重さの単位で、金の純度を表す「K（カラット）」とは別のものです。</p>
        <p>計量法第8条第2項は、別表第六の単位を、そこに定められた特殊の計量に係る取引・証明に限って使えるとしています。日本の法令でトロイオンスが取引・証明の単位として認められているのは<strong>「金貨の質量の計量」</strong>です。輸出入の取引などは、同条第3項で適用が除かれています。国内の金地金の価格は、田中貴金属などが1gあたりで公表しています。</p>

        <h2>1オンスの金・プラチナ・銀の価格（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>金属（純度100%として）</th><th>1オンス（31.1035g）の店頭買取価格</th><th>1オンスの店頭小売価格</th></tr></thead>
            <tbody>
              {METALS.map((m) => (
                <tr key={m.name}><td>{m.name}</td><td>約{yen(m.b * TROY)}円</td><td>約{yen(m.r * TROY)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 田中貴金属の1gあたりの税込の店頭価格（{pubLabel}）×31.1035g。地金の重さで計算した値で、金貨の売買価格（銘柄・状態・手数料で変わります）とは一致しません。</p>

        <h2>1/10オンスなど端数の重さと金の価値</h2>
        <p>金貨には1オンスのほか、1/2・1/4・1/10オンスなどの小さい重さがあります。トロイオンスで計算した純金の重さと、田中貴金属の店頭買取価格で換算した値は次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さの表示</th><th>グラム換算（当サイトの計算）</th><th>純金として換算した店頭買取価格</th></tr></thead>
            <tbody>
              {FRACTIONS.map((f) => (
                <tr key={f.label}><td>{f.label}</td><td>{(TROY * f.oz).toFixed(4)}g</td><td>約{yen(AU_B * TROY * f.oz)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">金貨の表示重量は、合金全体ではなく含まれる純金の重さを指す銘柄があります（例: K22合金の金貨）。お手元の金貨の重さの読み方は<Link href="/articles/kinka-kaitori-guide/">金貨の買取ガイド</Link>、量り方は<Link href="/articles/kin-omosa-hakarikata/">金の重さの量り方</Link>をご覧ください。</p>

        <h2>海外の金価格はドル/トロイオンス</h2>
        <p>米国地質調査所（USGS）の資料は、金の価格を「1トロイオンスあたりのドル」で示しています。1gあたりに直すと次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>年平均価格（ドル/トロイオンス）</th><th>1gあたり（ドル・当サイトの計算）</th></tr></thead>
            <tbody>
              {USGS.map((u) => (
                <tr key={u.y}><td>{u.y}</td><td>{u.v.toLocaleString()}</td><td>{(u.v / TROY).toFixed(1)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」（Engelhard の年平均の気配値。2025年は1〜11月のデータによる推定）。同資料は1トン＝32,150.7トロイオンス、米財務省の保有金の評価には公定価格1トロイオンス42.22ドルを用いると注記しています。国内価格はドル建て価格を為替で円に換算した値が基準になるため、円安・円高でも変わります（<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>）。</p>

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
          <li>計量法（平成4年法律第51号）第5条・第8条 <a href="https://laws.e-gov.go.jp/law/404AC0000000051" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>計量単位令（平成4年政令第357号）第5条・別表第六、第8条・別表第七 <a href="https://laws.e-gov.go.jp/law/404CO0000000357" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月19日。価格は毎朝の田中貴金属の公表値で自動更新しています。</p>

        <RelatedArticles currentSlug="ounce-gram" relatedSlugs={["kinka-kaitori-guide", "kin-omosa-hakarikata", "ingot-toha", "kin-mitsudo", "kinka-ingot-kaitori", "kin-kakaku-boraku-kako", "enyasu-kin"]} />
      </article>
    </div>
  </>);
}
