import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261117: 「プラチナ アレルギー」。出典: 厚生労働科学研究費補助金（免疫・アレルギー疾患政策研究事業）
   「金属アレルギーの新規管理法の確立に関する研究」令和6年度 総括研究報告書（研究代表者 矢上晶子、2025年5月）、
   日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版。確認日 2026-11-17。
   健康に関する記述は上記報告書の数値と記載の範囲に限る（診断・断定はしない） */
const TITLE = "プラチナで金属アレルギーは起きる？公的研究のパッチテスト陽性率と、刻印で確認できること";
const URL = "https://gold-biyori.com/articles/platinum-allergy/";
const DESC = "プラチナ（白金）と金属アレルギーについて、厚生労働科学研究の報告書にある金属ごとのパッチテスト陽性率と、日本ジュエリー協会の表示規定（Pt900の残り10%・めっきの表示）から確認できることを整理しました。";

/* 報告書: 全国18施設・金属アレルギーが疑われた345例に「金属アレルギー試薬シリーズ」でパッチテスト */
const RATES = [
  { m: "パラジウム（Pd）", r: "15.9%" },
  { m: "コバルト", r: "11.5%" },
  { m: "亜鉛", r: "7.3%" },
  { m: "インジウム", r: "6.3%" },
  { m: "銅", r: "5.4%" },
  { m: "クロム", r: "2.7%" },
  { m: "銀（Ag）", r: "2.7%" },
  { m: "ニオブ", r: "1.8%" },
  { m: "白金（プラチナ・Pt）", r: "1%未満" },
];

const FAQS = [
  { q: "プラチナは金属アレルギーが起きにくいのですか？", a: "厚生労働科学研究の報告書（令和6年度）では、金属アレルギーが疑われた345例のパッチテストで、白金の陽性率は1%未満で、感作の頻度は極めて低かったとされています。ただし、陽性が0ではなく、また製品にはプラチナ以外の金属も含まれるため、症状がある場合は皮膚科で相談することが勧められます。" },
  { q: "Pt900のプラチナには何が含まれていますか？", a: "Pt900はプラチナが最低90%（900‰）含まれていることを示す表示です。残りの金属の種類は品位の表示からはわかりません。日本ジュエリー協会の表示規定では、従金属を主金属に続けて（ ）内に元素名で表示できるとされていますが、表示されていない製品もあります。" },
  { q: "プラチナめっきの製品はプラチナ製品と同じですか？", a: "異なります。表示規定では、プラチナめっきは「PTP」と表示し（例: K14 PTP）、説明には「プラチナめっき仕上げ」などと表現するとされています。めっきの下の地金はプラチナではありません。" },
  { q: "どの金属にアレルギーがあるかはどうやって調べますか？", a: "報告書は、金属アレルギーの診断にはパッチテストが最も有用とされていると述べています。検査は皮膚科などの医療機関にご相談ください。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナと金属アレルギー", item: URL },
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

export default function PlatinumAllergyPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-platinum.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-platinum-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナと金属アレルギー</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="プラチナと金属アレルギーの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナと金属アレルギー — パッチテストの陽性率と刻印で確認できること</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月17日／出典の確認日: 2026年11月17日</p>

        <p>厚生労働科学研究の報告書（令和6年度）では、金属アレルギーが疑われた345例に行ったパッチテストで、<strong>白金（プラチナ）の陽性率は1%未満</strong>で、感作の頻度は極めて低かったとされています。一方、同じ調査で陽性率が最も高かったのは、ホワイトゴールドの割り金などに使われる<strong>パラジウム（15.9%）</strong>でした。ジュエリーの「Pt900」はプラチナが最低90%という意味で、<strong>残りの金属は刻印からはわかりません</strong>。当サイトは医療機関ではなく、ここでは公的な研究報告と業界の表示規定に書かれている内容のみを掲載しています。症状がある場合は皮膚科などの医療機関にご相談ください。</p>

        <h2>公的研究にある金属ごとのパッチテスト陽性率</h2>
        <p>厚生労働科学研究費補助金（免疫・アレルギー疾患政策研究事業）の研究班は、全国18施設の協力を得て、金属アレルギーが疑われた345例（男性61例・女性282例・無回答2例、平均48.4歳）に、金属試薬シリーズによるパッチテストを行いました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>金属</th><th>陽性率</th></tr></thead>
            <tbody>
              {RATES.map((x) => (
                <tr key={x.m}><td>{x.m}</td><td>{x.r}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 厚生労働科学研究「金属アレルギーの新規管理法の確立に関する研究」令和6年度 総括研究報告書（研究代表者 矢上晶子、2025年5月）。陽性率1%未満の金属として、白金のほかマンガン・イリジウム・スズ・アルミニウム・タンタル・タングステン・ガリウム・ルテニウム・モリブデン・ジルコニウム・チタンが挙げられています。</p>
        <ul>
          <li>この数値は<strong>金属アレルギーが疑われて受診した人</strong>を対象にした結果で、一般の人のうちアレルギーがある人の割合ではありません。</li>
          <li>ニッケルと金はこの試薬シリーズから除外されています。報告書は、日本接触皮膚炎研究班のジャパニーズベースラインシリーズ（JBS2015）の2023年度の報告で<strong>ニッケル25.2%、金26.7%</strong>と、極めて高頻度な感作アレルゲンであると記載しています。</li>
          <li>報告書は、パラジウムについてニッケルとの交差感作が知られており、装飾品（ピアス・指輪・時計の裏蓋など）や歯科金属を介した曝露が主な感作経路と考えられるとしています。銀は女性の陽性率（3.0%）が男性（1.7%）より高い傾向でした。</li>
        </ul>

        <h2>プラチナのジュエリーに含まれる金属</h2>
        <p>日本ジュエリー協会の表示規定では、品位は合金に含まれる貴金属の<strong>最低含有率</strong>です。Pt900ならプラチナが90%以上で、残り（最大10%）は別の金属です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>表示</th><th>プラチナの割合</th><th>プラチナ以外の金属</th></tr></thead>
            <tbody>
              <tr><td>Pt999（純プラチナ）</td><td>99.9%以上</td><td>0.1%以下</td></tr>
              <tr><td>Pt950</td><td>95%以上</td><td>5%以下</td></tr>
              <tr><td>Pt900</td><td>90%以上</td><td>10%以下</td></tr>
              <tr><td>Pt850</td><td>85%以上</td><td>15%以下</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版。プラチナ850‰未満の製品はプラチナ製品と表示できないとされています。</p>
        <ul>
          <li><strong>従金属の表示</strong>: 表示規定では、主金属に続けて従金属を（ ）内に元素名で表示できます（例: 銀とパラジウムの合金「Ag950(Pd)」）。従金属が表示されていない製品では、刻印だけで残りの金属はわかりません。購入先・製造元への確認が必要です。</li>
          <li><strong>ホワイトゴールド</strong>: 白い色でもプラチナではなく金の合金で、表示規定は主にパラジウム等を割り金とした白色の金合金と定義しています。詳しくは<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>、パラジウムは<Link href="/articles/palladium-toha/">パラジウムとは</Link>をご覧ください。</li>
          <li><strong>プラチナめっき</strong>: 表示規定では「PTP」（例: K14 PTP）と表示し、「プラチナ仕上げ」は不適切な表現とされています。めっきの下の地金はプラチナではありません。</li>
        </ul>

        <h2>購入・使用の前に確認できること</h2>
        <ol>
          <li><strong>刻印</strong>: 「Pt」と品位の数字を確認します。「PTP」「RHP」などはめっきの表示です。刻印の種類は<Link href="/articles/platinum-toha/">プラチナとは</Link>にまとめています。</li>
          <li><strong>従金属</strong>: 刻印で分からない場合は、販売店や製造元にプラチナ以外に含まれる金属を確認します。</li>
          <li><strong>医療機関での検査</strong>: 報告書は、金属アレルギーの診療ではパッチテストが最も有用とされる一方で、普及が十分ではないことを課題に挙げています。どの金属に反応するかは、皮膚科などで相談してください。</li>
        </ol>
        <p>使わなくなったプラチナのジュエリーを手放す場合の価格の目安は、<Link href="/articles/platinum-kaitori/">プラチナ買取相場ガイド</Link>と<Link href="/articles/platinum-pt900-kaitori/">Pt900の買取相場</Link>に掲載しています。</p>

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
          <li>厚生労働科学研究費補助金（免疫・アレルギー疾患政策研究事業）「金属アレルギーの新規管理法の確立に関する研究」令和6年度 総括研究報告書（研究代表者 矢上晶子、2025年5月）<a href="https://mhlw-grants.niph.go.jp/system/files/download_pdf/2024/202412002A.pdf" target="_blank" rel="noopener noreferrer">mhlw-grants.niph.go.jp</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月17日。本ページは医学的な診断や助言を行うものではありません。</p>

        <RelatedArticles currentSlug="platinum-allergy" relatedSlugs={["platinum-toha", "white-gold-toha", "palladium-toha", "platinum-silver-chigai", "platinum-kaitori"]} />
      </article>
    </div>
  </>);
}
