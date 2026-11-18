import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261118: 「9金 買取」。出典: 田中貴金属 RE:TANAKA「リサイクル価格」（2026-11-18 17:00発表の金製品10区分）と同時刻の「本日の貴金属価格」（金の店頭買取価格 20,876円）、
   日本ジュエリー協会「素材等の表示規定」2026年度改訂版（JIS H6309:2022・K9=375・333‰未満は金製品と表示不可）、造幣局「貴金属製品の品位区分と証明記号」（375の区分あり）。確認日 2026-11-18。
   独自: 同時刻の地金価格に対する品位別のリサイクル価格の比率（金の含有量あたり）。最新の目安は毎朝の地金価格×11/18 の比率 */
const TITLE = "9金（K9）の買取価格は？田中貴金属の公表値で見る1gの価格と、金の含有量に対する買取の割合（品位別比較）";
const URL = "https://gold-biyori.com/articles/k9-kaitori/";
const DESC = "9金（K9・375）は金の含有率37.5%の金合金です。田中貴金属RE:TANAKAのK9の買取価格（リサイクル価格）を、同時刻の地金価格と比べて品位別に計算すると、含まれる金の地金の値に対する割合はK24の91.5%に対しK9は77.8%でした。JIS・造幣局の区分も整理しています。";

const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 2026-11-18 17:00 発表の RE:TANAKA リサイクル価格（税込・鑑定料・手数料込み）と、同じ 17:00 公表の金の店頭買取価格（税込） */
const SNAP_AU = 20876;
const RECYCLE = [
  { k: "K24", r: 0.999, p: 19084 },
  { k: "K22", r: 0.916, p: 17421 },
  { k: "K20", r: 0.833, p: 15603 },
  { k: "K18", r: 0.75, p: 13918 },
  { k: "K15", r: 0.625, p: 10786 },
  { k: "K14", r: 0.585, p: 10035 },
  { k: "K12", r: 0.5, p: 8438 },
  { k: "K10", r: 0.416, p: 6878 },
  { k: "K9", r: 0.375, p: 6089 },
];
const K9_SNAP = 6089;
const K9_RATIO = K9_SNAP / SNAP_AU;
const K9_EST = AU_B * K9_RATIO;
const WEIGHTS = [1, 3, 5, 10, 20];

const FAQS = [
  { q: "9金（K9）とは何ですか？", a: "金の含有率が24分の9（品位375＝37.5%以上）の金合金です。JIS H6309:2022 の金の品位区分に375があり、造幣局も375の品位証明を行っています。日本ジュエリー協会の表示規定では、333‰（K8相当）未満は金製品と表示できません。" },
  { q: "9金は買い取ってもらえますか？", a: "田中貴金属の RE:TANAKA は金製品の品位区分にK9を設け、1gあたりのリサイクル価格を毎日9:30と14:00に公表しています（海外相場や為替の大きな変動により同日内に変更することがあると案内しており、2026年11月18日は17:00発表の価格が掲載されていました）。2026年11月18日17:00発表のK9は1g 6,089円（税込・鑑定料・手数料込み）でした。" },
  { q: "9金はK18より買取価格の割合が低いのですか？", a: "当サイトが2026年11月18日17:00の田中貴金属の公表値で計算したところ、含まれる金の地金の値に対するリサイクル価格の割合はK18が88.9%、K9が77.8%でした。品位が低いほど割合が下がる傾向がありました。" },
  { q: "「9K」と刻印されているものは9金ですか？", a: "日本ジュエリー協会の表示規定は、海外では18Kのように K を数値の後ろに表示することがあり、原則は K を数値の前に置くとしています。9K は K9 と同じく24分の9のカラット表示です。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "9金（K9）の買取価格", item: URL },
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

export default function K9KaitoriPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-k10.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-k10-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">9金（K9）の買取価格</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="9金（K9）の買取価格の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">9金（K9）の買取価格 — 1gの価格と、金の含有量に対する買取の割合</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月18日／比較表: 2026年11月18日17:00の田中貴金属の公表値／最新の目安: {pubLabel}の地金価格（毎朝自動更新）</p>

        <p>9金（K9）は、<strong>金を37.5%含む金合金</strong>です（品位375）。田中貴金属の RE:TANAKA が2026年11月18日17:00に発表した<strong>K9のリサイクル価格（製品の買取価格）は1g 6,089円</strong>（税込・鑑定料・手数料込み）でした。同時刻の金の店頭買取価格（1g 20,876円）から計算した、K9に含まれる金の地金の値は1g 約7,828円で、<strong>リサイクル価格はその77.8%</strong>にあたります（当サイトの計算）。最新の地金価格にこの比率をかけた目安は1g 約{yen(K9_EST)}円です（{pubLabel}）。</p>

        <h2>品位別の買取価格と、金の含有量に対する割合</h2>
        <p>同じ時刻に発表された地金価格とリサイクル価格を品位ごとに比べました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品位</th><th>金の割合</th><th>リサイクル価格（1g）</th><th>含まれる金の地金の値（1g）</th><th>地金の値に対する割合</th></tr></thead>
            <tbody>
              {RECYCLE.map((x) => (
                <tr key={x.k}><td>{x.k === "K9" ? <strong>K9</strong> : x.k}</td><td>{(x.r * 100).toFixed(1)}%</td><td>{x.p.toLocaleString()}円</td><td>{yen(SNAP_AU * x.r)}円</td><td>{((x.p / (SNAP_AU * x.r)) * 100).toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 含まれる金の地金の値＝田中貴金属の金の店頭買取価格（税込・2026年11月18日17:00公表 1g 20,876円）×金の割合。リサイクル価格は RE:TANAKA の2026年11月18日17:00発表分（税込。鑑定料・手数料を含み、別途の手数料はかからないと案内されています）。金の割合は、JIS の品位がある区分はその値（K22=916・K10=416 等）、K15・K12 はカラットの24分率（15/24・12/24）です。</p>
        <p>K24は含まれる金の値の91.5%、K18は88.9%に対し、K9は77.8%で、<strong>品位が低いほど割合が下がっていました</strong>。田中貴金属はリサイクル価格の算定方法の内訳を公表していないため、差の理由は当サイトでは確認できていません。割合は発表のたびに変わる場合があります。</p>

        <h2>重さ別の目安（最新の地金価格から）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さ</th><th>含まれる金の量</th><th>買取の目安</th></tr></thead>
            <tbody>
              {WEIGHTS.map((w) => (
                <tr key={w}><td>{w}g</td><td>{(w * 0.375).toFixed(3)}g</td><td>約{yen(K9_EST * w)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">目安＝田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・税込・{pubLabel}）×{(K9_RATIO * 100).toFixed(2)}%（2026年11月18日17:00のK9のリサイクル価格÷地金価格）。実際の買取価格は業者・時刻・製品で異なります。</p>

        <h2>9金の品位と刻印</h2>
        <ul>
          <li><strong>JIS</strong>: JIS H6309:2022 の金の品位区分に375があり、カラット表示ではK9です（日本ジュエリー協会の表示規定）。</li>
          <li><strong>造幣局</strong>: 金製品の品位証明6区分（999・916・750・585・416・375）に375があります。日の丸とひし形の「375」の刻印は造幣局の証明、「K9」の刻印は事業者の表示です。</li>
          <li><strong>下限</strong>: 表示規定では、333‰（K8相当）未満の製品を金製品と表示してはならないとしています。</li>
          <li><strong>海外の表記</strong>: 海外では「9K」のようにKを数値の後ろに置く表示があります（表示規定）。</li>
        </ul>
        <p>他の品位の区分は<Link href="/articles/kin-toha/">金とは</Link>の対応表、K10の相場は<Link href="/articles/k10-kaitori/">K10（10金）の買取相場</Link>、刻印の見方は<Link href="/articles/kin-jundo-mikata/">金の純度の見分け方</Link>をご覧ください。</p>

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
          <li>田中貴金属工業 RE:TANAKA「リサイクル価格」<a href="https://gold.tanaka.co.jp/retanaka/price/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」<a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>造幣局「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月18日。価格は変動します。ご売却の際は、各業者の最新の買取価格をご確認ください。</p>

        <RelatedArticles currentSlug="k9-kaitori" relatedSlugs={["k10-kaitori", "kin-toha", "kinseido-kaitori-guide", "kin-jundo-mikata", "k14-kaitori"]} />
      </article>
    </div>
  </>);
}
