import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261118: 「金とは」。出典: 田中貴金属（TANAKA）貴金属元素データ Au、日本ジュエリー協会「素材等の表示規定」2026年度改訂版（JIS H6309:2022 の品位区分・カラット表示・333‰未満の表示禁止）、
   造幣局「貴金属製品の品位区分と証明記号」（金6区分）、田中貴金属 RE:TANAKA「リサイクル価格」（買取の品位区分）。確認日 2026-11-18。
   独自: 3つの公的・公式の区分を同じ行にそろえた対応表＋品位別の1gの金の地金の値（gold-spot-prices.json・毎朝更新） */
const TITLE = "金（ゴールド）とは？元素の性質・純度の表し方（JIS・造幣局・買取の区分の対応表）と1gの価格";
const URL = "https://gold-biyori.com/articles/kin-toha/";
const DESC = "金（Au）とは何かを、田中貴金属の元素データ、日本ジュエリー協会の表示規定（JIS H6309）、造幣局の品位証明で説明します。JIS・造幣局・買取の3つの品位区分を1つの表にそろえ、品位別の1gあたりの金の地金の値を毎朝更新で掲載しています。";

const AU_R = goldData.tanaka_official.au_retail_per_g as number;
const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* JIS H6309:2022（表示規定より）・造幣局の品位証明区分・RE:TANAKA の金製品の品位区分（いずれも 2026-11-18 確認） */
const GRADES = [
  { k: "K24", m: 999, mint: true, re: "K24（特定品は別価格）" },
  { k: "（なし）", m: 990, mint: false, re: "—" },
  { k: "K22", m: 916, mint: true, re: "K22" },
  { k: "K20", m: 833, mint: false, re: "K20" },
  { k: "K18", m: 750, mint: true, re: "K18" },
  { k: "K14", m: 585, mint: true, re: "K14" },
  { k: "K10", m: 416, mint: true, re: "K10" },
  { k: "K9", m: 375, mint: true, re: "K9" },
  { k: "K8", m: 333, mint: false, re: "—" },
];

const FAQS = [
  { q: "金とはどんな金属ですか？", a: "金は元素記号Au・原子番号79の貴金属元素です。田中貴金属の元素データでは、密度は19.32g/cm³（293K）、融点は1064.18℃です。ジュエリーや地金のほか、電子部品の配線（極細線）や、医療用の体外診断キットにも使われています。" },
  { q: "K18やK24の「K」は何を表しますか？", a: "純金を24とした24分率のカラット表示です。K18は24分の18（品位750＝75.0%以上）、K24は品位999（99.9%以上）を表します。日本ジュエリー協会の表示規定では、Kは数値の前に置くのが原則です。" },
  { q: "「純金」と表示できるのは何%からですか？", a: "日本ジュエリー協会の表示規定では、999‰以上の金を「純金」と表示できるとしています。1000‰（100%）の表示は、単一金属で化学的・理論的に存在しないため使ってはならないとしています。" },
  { q: "何%以上なら金製品と呼べますか？", a: "表示規定では、金の純度が333‰（K8相当）未満の製品を金製品（ゴールドジュエリー）と表示してはならないとしています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金とは", item: URL },
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

export default function KinTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金（ゴールド）の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金（ゴールド）とは — 元素の性質・純度の表し方と1gの価格</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月18日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／元素データ・表示規定・品位区分は2026年11月18日に確認</p>

        <p>金（ゴールド）は、<strong>元素記号Au・原子番号79の貴金属元素</strong>です。密度は19.32g/cm³、融点は1064.18℃です（田中貴金属の元素データ）。ジュエリーでは、金に銀・銅・パラジウムなどを混ぜた合金を使い、金の割合を<strong>千分率（750など）またはカラット（K18など）</strong>で表します。最新の田中貴金属の金の店頭小売価格は1g {yen(AU_R)}円、店頭買取価格は1g {yen(AU_B)}円です（税込・{pubLabel}）。</p>

        <h2>元素としての金（田中貴金属の元素データ）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>値</th></tr></thead>
            <tbody>
              <tr><td>原子番号・元素記号</td><td>79・Au</td></tr>
              <tr><td>原子量</td><td>196.966569</td></tr>
              <tr><td>安定同位体</td><td>197Au のみ</td></tr>
              <tr><td>結晶構造</td><td>面心立方（fcc）</td></tr>
              <tr><td>密度（293K）</td><td>19.32 g/cm³</td></tr>
              <tr><td>融点／沸点</td><td>1064.18℃／2857℃</td></tr>
              <tr><td>熱伝導率（273K）</td><td>319 W/(m·K)</td></tr>
              <tr><td>電気抵抗率（273K）</td><td>2.05 μΩ·cm</td></tr>
              <tr><td>酸化状態</td><td>+3、+1</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属（TANAKA）「貴金属元素データ Au」（2026年11月18日確認）。単位は当サイトで補記しました。</p>
        <p>田中貴金属は、金の用途として装飾用のほか、携帯電話やスマートフォンの中で極細線として電気をつなぐ役目や、ナノサイズの粒子（金ナノコロイド）が赤く発色する性質を利用したインフルエンザ・妊娠診断などの体外診断キットを挙げています。密度を使った重さと体積の換算は<Link href="/articles/kin-mitsudo/">金の密度</Link>、世界の埋蔵量・生産量・用途の内訳は<Link href="/articles/kin-maizoryo/">金の埋蔵量</Link>にまとめています。</p>

        <h2>純度の表し方 — JIS・造幣局・買取の区分の対応表</h2>
        <p>金の純度の区分は、JIS（日本産業規格）、造幣局の品位証明（ホールマーク）、地金商の買取でそれぞれ異なります。当サイトで3つを同じ行にそろえ、1gに含まれる金の地金としての値を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>カラット</th><th>JIS の品位（‰）</th><th>造幣局の品位証明</th><th>RE:TANAKA の買取区分</th><th>1gの金の地金の値（毎朝更新）</th></tr></thead>
            <tbody>
              {GRADES.map((g) => (
                <tr key={g.m}><td>{g.k}</td><td>{g.m}</td><td>{g.mint ? "あり" : "なし"}</td><td>{g.re}</td><td>約{yen(AU_B * g.m / 1000)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版（JIS H6309:2022 の区分・カラット表示）、造幣局「貴金属製品の品位区分と証明記号」（金製品6区分）、田中貴金属 RE:TANAKA「リサイクル価格」（金製品の品位区分）。いずれも2026年11月18日確認。RE:TANAKA は表のほかに K15・K12 の区分も設けています。地金の値＝田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・税込・{pubLabel}）×品位÷1000で、業者の製品の買取価格ではありません。</p>
        <ul>
          <li>品位は最低含有率を表します（例: Au750 は750‰以上833‰未満）。</li>
          <li>JIS の990には対応するカラット表示がありません。</li>
          <li>造幣局は平成24年4月以降の受付分から、K22を「916」、K10を「416」と表示しています（それ以前は917・417）。</li>
          <li>K18 などの刻印は事業者の表示で、造幣局の証明記号（日の丸とひし形の数字）とは別のものです。</li>
        </ul>
        <p>刻印の読み方と見分け方は<Link href="/articles/kin-jundo-mikata/">金の純度の見分け方</Link>、品位ごとの買取の目安は<Link href="/articles/kinseido-kaitori-guide/">金の品位別買取相場</Link>をご覧ください。最も低い区分の K9 については<Link href="/articles/k9-kaitori/">9金（K9）の買取</Link>でご説明しています。</p>

        <h2>色の違う金（カラーゴールド）</h2>
        <p>金の合金は、混ぜる金属（割り金）で色が変わります。表示規定はイエローゴールド（YG）・ピンクゴールド（PG）・ホワイトゴールド（WG）・グリーンゴールド（GRG）の4つを定めており、色の名前は表面のめっきではなく地金本体の色で称することとしています。造幣局は、金の品位が同じであればホワイトゴールドもピンクゴールドも同じホールマーク表示になると説明しています。詳しくは<Link href="/articles/green-gold-toha/">グリーンゴールドとは</Link>・<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>をご覧ください。</p>

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
          <li>田中貴金属（TANAKA）「貴金属元素データ Au」<a href="https://tanaka-preciousmetals.com/jp/library/element/au" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」<a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>造幣局「貴金属製品の品位証明」<a href="https://www.mint.go.jp/operations/exam/operations_certification-01.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a>・「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・RE:TANAKA「リサイクル価格」<a href="https://gold.tanaka.co.jp/retanaka/price/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月18日。価格は変動します。ご売却の際は、各業者の最新の買取価格をご確認ください。</p>

        <RelatedArticles currentSlug="kin-toha" relatedSlugs={["kin-jundo-mikata", "kin-mitsudo", "kin-maizoryo", "kinseido-kaitori-guide", "k9-kaitori", "platinum-toha", "kinpaku-toha", "kikinzoku-toha"]} />
      </article>
    </div>
  </>);
}
