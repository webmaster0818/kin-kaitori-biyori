import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261118: 「金買取 消費税」。出典: 国税庁 タックスアンサー No.6105（課税の対象）・No.6303（税率）・No.6499（金または白金の地金の課税仕入れと本人確認書類）、
   国税庁「消費税法改正のお知らせ（平成31年4月）」、田中貴金属「本日の貴金属価格」（店頭小売価格（税込）・店頭買取価格（税込）の表示）。確認日 2026-11-18。
   独自: 田中の税込価格から重さ別の消費税相当額を割り戻し（gold-spot-prices.json・毎朝更新）。個別の税務判断は書かない */
const TITLE = "金買取に消費税はかかる？個人が売るときの扱い・買取価格に含まれる消費税相当額（重さ別・毎朝更新）";
const URL = "https://gold-biyori.com/articles/kin-kaitori-shohizei/";
const DESC = "個人が手持ちの金を売っても、売った人が消費税を納める必要は通常ありません。田中貴金属の買取価格は税込で表示されています。重さ別の買取額に含まれる消費税相当額を毎朝更新で計算し、業者側の本人確認書類の保存義務（2019年10月〜）など国税庁の資料で整理しました。";

const AU_R = goldData.tanaka_official.au_retail_per_g as number;
const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const tax = (n: number) => (n * 10) / 110;

const WEIGHTS = [
  { label: "10g", g: 10 },
  { label: "50g", g: 50 },
  { label: "100g", g: 100 },
  { label: "500g", g: 500 },
  { label: "1kg", g: 1000 },
];

const FAQS = [
  { q: "個人が金を売ったら消費税を納める必要がありますか？", a: "国税庁によると、消費税の課税の対象は事業者が事業として対価を得て行う取引で、給与所得者がたまたま自家用車を売却する行為などは事業として行う取引になりません。手持ちの金製品や地金を個人が売る場合、通常は売った人が消費税を申告・納付することはありません。金の売買を事業として反復・継続して行っている場合は扱いが異なります。" },
  { q: "金の買取価格には消費税が含まれていますか？", a: "田中貴金属は、1gあたりの「店頭買取価格（税込）」を公表しています。表示は税込で、当サイトでは税率10%として、税込の買取額から消費税相当額を割り戻して計算しています。" },
  { q: "金を売ったときの税金は消費税以外にありますか？", a: "個人の場合、売却益は所得税の対象になることがあります（譲渡所得）。計算方法と特別控除は金買取と税金のページでご説明しています。" },
  { q: "なぜ金の買取では本人確認書類のコピーを取られるのですか？", a: "理由の1つは消費税です。国税庁によると、事業者が金または白金の地金を仕入れたとき、売却者の本人確認書類（運転免許証の写しなど）を保存しないと、その仕入れに係る消費税額を控除できません（令和元年10月1日以後の課税仕入れから）。このほか古物営業法等による本人確認もあります。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金買取と消費税", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-18", dateModified: "2026-11-18",
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

export default function KinKaitoriShohizeiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-zeikin.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-zeikin-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金買取と消費税</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金買取と消費税の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取と消費税 — 個人が売るときの扱いと、買取額に含まれる消費税相当額</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月18日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／税制は2026年11月18日に国税庁の資料で確認</p>

        <p>個人が手持ちの金を売る場合、<strong>売った人が消費税を申告・納付することは通常ありません</strong>。消費税の課税の対象は、事業者が事業として対価を得て行う取引だからです（国税庁 No.6105）。一方、田中貴金属の金の買取価格は<strong>「店頭買取価格（税込）」</strong>として表示されており、最新の値は1g {yen(AU_B)}円です（{pubLabel}）。税率10%として割り戻すと、このうち約{yen(tax(AU_B))}円が消費税相当額にあたります（当サイトの計算）。</p>

        <h2>重さ別の買取額・購入額に含まれる消費税相当額（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さ</th><th>買取額（税込）</th><th>うち消費税相当額</th><th>購入額（税込・手数料別）</th><th>うち消費税相当額</th></tr></thead>
            <tbody>
              {WEIGHTS.map((w) => (
                <tr key={w.label}><td>{w.label}</td><td>{yen(AU_B * w.g)}円</td><td>約{yen(tax(AU_B * w.g))}円</td><td>{yen(AU_R * w.g)}円</td><td>約{yen(tax(AU_R * w.g))}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 買取額＝田中貴金属の金の店頭買取価格（税込）×重さ、購入額＝店頭小売価格（税込）×重さ。消費税相当額＝税込額×10/110（標準税率10%・国税庁 No.6303）。購入時の別途手数料、業者ごとの買取価格の違い、所得税は含めていません。田中貴金属は、店頭価格には売買の別途手数料が含まれないと注記しています。</p>
        <p>金地金を買ったときには消費税込みの価格を払い、売るときには消費税相当分を含んだ価格を受け取る形になります。購入と売却の時点で金価格が同じなら、消費税相当分は受取額にも含まれます。消費税率が購入時より売却時のほうが高い場合（例: 8%の時期に購入し10%の時期に売却）は、税込価格に含まれる割合も変わります。</p>

        <h2>立場ごとの消費税の扱い</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>立場</th><th>消費税の扱い</th><th>根拠</th></tr></thead>
            <tbody>
              <tr><td>個人が手持ちの金を売る</td><td>事業として行う取引に当たらず、通常は売った人に消費税の納税はない</td><td>国税庁 No.6105</td></tr>
              <tr><td>事業者（法人・個人事業者）が金を売る</td><td>事業として行う資産の譲渡で課税の対象。法人の活動はすべて事業として行う取引になる</td><td>国税庁 No.6105</td></tr>
              <tr><td>買取業者が金地金を仕入れる</td><td>売却者の本人確認書類を保存しないと、仕入れに係る消費税額を控除できない（令和元年10月1日以後）</td><td>国税庁 No.6499</td></tr>
              <tr><td>密輸品と知りながら仕入れる</td><td>仕入税額控除を受けられない（平成31年4月1日以後。金・白金の地金に限らない）</td><td>国税庁「消費税法改正のお知らせ」</td></tr>
              <tr><td>海外から金を持ち込む（輸入）</td><td>保税地域から引き取る外国貨物は、事業者でない一般消費者も納税義務者になる</td><td>国税庁 No.6105</td></tr>
            </tbody>
          </table>
        </div>

        <h2>売るときに本人確認書類の写しを取られる理由の1つ</h2>
        <p>国税庁によると、事業者が「金または白金の地金」を仕入れた場合、売却者の本人確認書類を保存しないと、その仕入れに係る消費税額について仕入税額控除を受けられません（災害などやむを得ない事情がある場合を除く）。主な書類は、運転免許証の写し、住民票の写し（1年以内に作成されたもの）、マイナンバーカードの写し（表面のみ）などで、令和6年12月2日以後は健康保険証の写しは対象から除かれています。</p>
        <p>買取額が200万円を超える場合の支払調書やマイナンバーの扱いは<Link href="/articles/kin-200man-mynumber/">金200万円超の売却とマイナンバー</Link>、売却時の本人確認全般は<Link href="/articles/kin-baikyaku-mynumber/">金の売却とマイナンバー</Link>、売却益にかかる所得税は<Link href="/articles/kin-kaitori-zeikin/">金買取と税金（譲渡所得）</Link>でご説明しています。</p>

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
          <li>国税庁 タックスアンサー No.6105「課税の対象」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.6303「消費税および地方消費税の税率」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6303.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.6499「金または白金の地金の課税仕入れを行った場合の本人確認書類の保存について」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6499.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>国税庁「消費税法改正のお知らせ（平成31年4月）」<a href="https://www.nta.go.jp/publication/pamph/shohi/kaisei/201904.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月18日（国税庁のタックスアンサーは令和8年4月1日現在の法令等）。本ページは制度の概要のご説明で、個別の税務判断ではありません。具体的な申告については税務署または税理士にご確認ください。</p>

        <RelatedArticles currentSlug="kin-kaitori-shohizei" relatedSlugs={["kin-kaitori-zeikin", "kin-kakutei-shinkoku", "kin-200man-mynumber", "kin-baikyaku-mynumber", "kin-kounyu-chuiten"]} />
      </article>
    </div>
  </>);
}
