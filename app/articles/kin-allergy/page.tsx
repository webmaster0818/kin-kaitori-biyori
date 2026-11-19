import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261120: 「金 アレルギー」。出典: 日本皮膚免疫アレルギー学会 日本接触皮膚炎研究班「Japanese baseline series 2015 調査データ（アレルゲン別_陽性率）」（JBS2015_250124.pdf・2015〜2023年）、
   厚生労働科学研究「金属アレルギーの新規管理法の確立に関する研究」令和6年度 総括研究報告書（研究代表者 矢上晶子、2025年5月）、
   日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版（品位＝最低含有率・カラット表示・カラーゴールドの割り金・ニッケルフリーの表示）。確認日 2026-11-20。
   9年間の平均・ニッケルとの比較・品位別の金以外の割合は当サイトの計算。健康に関する記述は上記資料の数値と記載の範囲に限る（診断・断定はしない） */
const TITLE = "金で金属アレルギーは起きる？パッチテスト陽性率の9年分の推移と、18金・10金に含まれる金以外の金属";
const URL = "https://gold-biyori.com/articles/kin-allergy/";
const DESC = "金（ゴールド）と金属アレルギーについて、日本接触皮膚炎研究班のパッチテスト陽性率（金・ニッケル 2015〜2023年）と、日本ジュエリー協会の表示規定から、18金・14金・10金に含まれる金以外の金属の割合を整理しました。";

/* JBS2015 調査データ（アレルゲン別_陽性率）: 年・症例数・金チオ硫酸ナトリウム・硫酸ニッケル */
const JBS = [
  { y: 2015, n: 1217, au: 25.7, ni: 23.5 },
  { y: 2016, n: 1517, au: 23.7, ni: 25.3 },
  { y: 2017, n: 1598, au: 26.9, ni: 24.9 },
  { y: 2018, n: 1533, au: 26.1, ni: 24.0 },
  { y: 2019, n: 1709, au: 25.2, ni: 24.4 },
  { y: 2020, n: 1476, au: 24.2, ni: 24.0 },
  { y: 2021, n: 1159, au: 29.3, ni: 26.6 },
  { y: 2022, n: 1257, au: 25.1, ni: 23.7 },
  { y: 2023, n: 1365, au: 26.7, ni: 25.2 },
];
const totalN = JBS.reduce((s, r) => s + r.n, 0);
/* 症例数で重み付けした平均（当サイトの計算） */
const avgAu = JBS.reduce((s, r) => s + r.au * r.n, 0) / totalN;
const avgNi = JBS.reduce((s, r) => s + r.ni * r.n, 0) / totalN;
const auOverNi = JBS.filter((r) => r.au > r.ni).length;
const minAu = Math.min(...JBS.map((r) => r.au));
const maxAu = Math.max(...JBS.map((r) => r.au));

/* 日本ジュエリー協会 表示規定のカラット表示と品位（JIS H6309:2022） */
const KARATS = [
  { k: "K24", h: 999 },
  { k: "K22", h: 916 },
  { k: "K18", h: 750 },
  { k: "K14", h: 585 },
  { k: "K10", h: 416 },
  { k: "K9", h: 375 },
];

const FAQS = [
  { q: "金で金属アレルギーは起きますか？", a: `起きることがあります。日本接触皮膚炎研究班のパッチテスト調査では、金（金チオ硫酸ナトリウム）の陽性率は2015〜2023年の各年で${minAu}〜${maxAu}%でした。日本ジュエリー協会の表示規定も、金・パラジウム・プラチナなど多くの金属イオンが金属アレルギーの原因となることがあるとしています。症状がある場合は皮膚科にご相談ください。` },
  { q: "純金なら金属アレルギーは起きませんか？", a: "そうとは言えません。上記の調査で陽性率が高かった試薬は金そのもの（金チオ硫酸ナトリウム）です。表示規定も、金を含む多くの金属イオンが原因となることがあるとしています。" },
  { q: "18金に含まれる金以外の金属は何ですか？", a: "K18は金が最低75%（750‰）という表示で、残り最大25%の金属の種類は刻印だけではわかりません。表示規定では、イエローゴールドは主な割り金が銀と銅、ピンクゴールドは銅の比率が高く、ホワイトゴールドは主にパラジウム等を割り金とした金合金とされています。" },
  { q: "「NF（ニッケルフリー）」と書かれていればアレルギーは起きませんか？", a: "表示規定は、NFを表示する場合に、ニッケルを含まないから安全という表現を付けてはならないとしています。ニッケル以外の金属でも金属アレルギーの原因となることがあるためです。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金と金属アレルギー", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-20", dateModified: "2026-11-20",
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

export default function KinAllergyPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金と金属アレルギー</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金と金属アレルギーの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金と金属アレルギー — パッチテスト陽性率の推移と、金製品に含まれる金以外の金属</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月20日／出典の確認日: 2026年11月20日</p>

        <p>金でも金属アレルギーは起きることがあります。日本接触皮膚炎研究班のパッチテスト調査（ジャパニーズベースラインシリーズ2015）では、<strong>金（金チオ硫酸ナトリウム）の陽性率は2015〜2023年の各年で{minAu}〜{maxAu}%</strong>で、9年間のうち{auOverNi}年はニッケルより高い値でした。日本ジュエリー協会の表示規定も、ニッケルを含め、金・パラジウム・プラチナなど多くの金属イオンが金属アレルギーの症状や発症の原因となることがあるとしています。また、18金〜10金の金製品には<strong>金以外の金属が最大25.0%〜58.4%</strong>含まれ、その種類は刻印からはわかりません。</p>

        <h2>金とニッケルのパッチテスト陽性率（2015〜2023年）</h2>
        <p>日本皮膚免疫アレルギー学会の日本接触皮膚炎研究班は、国内の標準的なパッチテスト試薬（ジャパニーズベースラインシリーズ2015）について、アレルゲン別の陽性率を年ごとに公表しています。金属のうち、金とニッケルの値は次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>症例数</th><th>金（金チオ硫酸ナトリウム）</th><th>ニッケル（硫酸ニッケル）</th></tr></thead>
            <tbody>
              {JBS.map((r) => (
                <tr key={r.y}><td>{r.y}年</td><td>{r.n.toLocaleString()}</td><td>{r.au.toFixed(1)}%</td><td>{r.ni.toFixed(1)}%</td></tr>
              ))}
              <tr><td><strong>9年間（症例数で加重平均）</strong></td><td>{totalN.toLocaleString()}</td><td><strong>{avgAu.toFixed(1)}%</strong></td><td><strong>{avgNi.toFixed(1)}%</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本接触皮膚炎研究班「Japanese baseline series 2015 調査データ（アレルゲン別_陽性率）」。最下行は、各年の陽性率に症例数を掛けて合計し、9年間の症例数で割った当サイトの計算です。同じ資料で、コバルトは6.5〜9.3%、水銀は2.3〜7.1%でした。</p>
        <ul>
          <li>この数値は<strong>パッチテストを受けた人</strong>の中での陽性の割合で、一般の人のうち金属アレルギーがある人の割合ではありません。</li>
          <li>厚生労働科学研究の報告書（令和6年度）は、ニッケルと金について、この調査で常に高い陽性率を示しており、2023年度の報告でもニッケル25.2%・金26.7%と、極めて高頻度な感作アレルゲンであると記載しています。同じ報告書は、金属アレルギーの診療ではパッチテストが最も有用とされる一方、普及が十分でないことを課題に挙げています。</li>
        </ul>

        <h2>金製品に含まれる金以外の金属の割合</h2>
        <p>日本ジュエリー協会の表示規定では、品位は合金に含まれる貴金属の<strong>最低含有率</strong>です。カラット表示の品位から、金以外の金属が最大でどれだけ含まれるかを計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>表示</th><th>品位（金の最低含有率）</th><th>金以外の金属（最大）</th></tr></thead>
            <tbody>
              {KARATS.map((x) => (
                <tr key={x.k}><td>{x.k}</td><td>{x.h}‰（{(x.h / 10).toFixed(1)}%）</td><td>{((1000 - x.h) / 10).toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版（カラット表示と品位はJIS H6309:2022）。右列は当サイトの計算（1000−品位）です。</p>
        <p>金以外の金属（割り金）の種類について、表示規定は次のように定めています。</p>
        <ul>
          <li><strong>イエローゴールド（YG）</strong>: 主な割り金の銀と銅の比率が4:6〜6:4程度の黄色みの金合金</li>
          <li><strong>ピンクゴールド（PG）</strong>: 割り金の銅の比率が高い、やや赤みのある金合金</li>
          <li><strong>ホワイトゴールド（WG）</strong>: 主にパラジウム等を割り金とした白色の金合金。上記の厚生労働科学研究の調査（金属アレルギーが疑われた345例）では、パラジウムの陽性率は15.9%でした。詳しくは<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>をご覧ください。</li>
          <li><strong>従金属の表示</strong>: 主金属に続けて従金属を（ ）内に元素名で表示できますが、表示されていない製品では、刻印だけで割り金の種類はわかりません。</li>
        </ul>

        <h2>「ニッケルフリー」の表示とめっき</h2>
        <ul>
          <li><strong>NF（ニッケルフリー）</strong>: 表示規定は、NFを表示する場合に「ニッケルを含まない故に安全である」という表現を付してはならないとしています。また、ピアスなど体に穴をあけて用いる装身具のポストには、ニッケルを含む貴金属を使用しないものとしています。</li>
          <li><strong>金めっき（GP）</strong>: めっきの下の地金は金ではありません。表示の見方は<Link href="/articles/kin-mekki-mikata/">金メッキの見分け方</Link>、刻印の種類は<Link href="/articles/kin-jundo-mikata/">金の純度の見方</Link>にまとめています。</li>
        </ul>

        <h2>購入・使用の前に確認できること</h2>
        <ol>
          <li><strong>刻印</strong>: 「K18」「750」などの品位と、「WG」「PG」などのカラーゴールドの記号、「GP」などのめっきの表示を確認します。</li>
          <li><strong>割り金</strong>: 刻印で分からない場合は、販売店や製造元に金以外に含まれる金属を確認します。</li>
          <li><strong>医療機関での検査</strong>: どの金属に反応するかは、皮膚科などでパッチテストについて相談してください。</li>
        </ol>
        <p>着けられなくなった金のジュエリーを手放す場合は、地金の価値で評価されます。品位別の価格の目安は<Link href="/articles/k18-kaitori/">18金の買取相場</Link>・<Link href="/articles/k10-kaitori/">10金の買取相場</Link>、金そのものの性質は<Link href="/articles/kin-toha/">金とは</Link>、プラチナの場合は<Link href="/articles/platinum-allergy/">プラチナと金属アレルギー</Link>をご覧ください。</p>

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
          <li>日本皮膚免疫アレルギー学会 日本接触皮膚炎研究班「Japanese baseline series 2015 調査データ（アレルゲン別_陽性率）」<a href="https://www.jscia.org/img/pdf/JBS2015_250124.pdf" target="_blank" rel="noopener noreferrer">jscia.org</a></li>
          <li>厚生労働科学研究費補助金（免疫・アレルギー疾患政策研究事業）「金属アレルギーの新規管理法の確立に関する研究」令和6年度 総括研究報告書（研究代表者 矢上晶子、2025年5月）<a href="https://mhlw-grants.niph.go.jp/system/files/download_pdf/2024/202412002A.pdf" target="_blank" rel="noopener noreferrer">mhlw-grants.niph.go.jp</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月20日。本ページは医学的な診断や助言を行うものではありません。症状がある場合は医療機関にご相談ください。</p>

        <RelatedArticles currentSlug="kin-allergy" relatedSlugs={["platinum-allergy", "white-gold-toha", "kin-jundo-mikata", "kin-toha", "k18-kaitori", "kin-mekki-mikata"]} />
      </article>
    </div>
  </>);
}
