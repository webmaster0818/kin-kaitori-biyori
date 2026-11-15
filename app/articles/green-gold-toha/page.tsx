import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261115: 「グリーンゴールド」。出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版
   （4. 色の表示・カラーゴールドの定義・3.(3) カラット表示・3.(6) 杢目金）、造幣局「品位証明」。確認日 2026-11-15。
   金・銀の値は gold-spot-prices.json（毎朝更新）から計算 */
const TITLE = "グリーンゴールド（青金）とは？K18GRGの定義・表示規定と1gの地金の値";
const URL = "https://gold-biyori.com/articles/green-gold-toha/";
const DESC = "グリーンゴールド（青金・GRG）とは何かを、日本ジュエリー協会の表示規定で説明します。イエロー・ピンク・ホワイトゴールドとの違い、K18GRGの1gに含まれる金と銀の地金の値（毎朝更新）も掲載しています。";

const AU_BUY = goldData.tanaka_official.au_buyback_per_g as number;
const AG_BUY = goldData.tanaka_official.ag_buyback_per_g as number;
const K18_EST = goldData.purity_buyback_estimate_per_g.k18 as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
/* K18GRG 1g: 金0.75g。残り0.25gがすべて銀だったと仮定した上限の銀の値 */
const AU_PART = AU_BUY * 0.75;
const AG_MAX = AG_BUY * 0.25;
const PURITIES = [
  { k: "K18GRG", r: 0.75 }, { k: "K14GRG", r: 0.585 }, { k: "K10GRG", r: 0.416 },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "グリーンゴールドとは", item: URL },
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
  { q: "グリーンゴールドと青金は同じですか？", a: "日本ジュエリー協会の表示規定では、グリーンゴールドの和名を「青金」とし、記号はGRG、定義は「割り金の銀比率が高い、青みのある金合金」です。表示の例として K18GRG・Au750GRG が挙げられています。" },
  { q: "K18GRGはK18と同じ価値ですか？", a: "金の含有率はどちらも75%（750‰）です。地金として評価する場合、含まれる金の量は同じ重さのK18イエローゴールドと同じです。割り金（金以外の25%）の銀の分は、1gあたり最大でも約" + yen(AG_MAX) + "円（当サイトの計算・田中貴金属の銀の店頭買取価格による）です。" },
  { q: "緑色にめっきした製品をグリーンゴールドと呼べますか？", a: "呼べません。日本ジュエリー協会の表示規定では、カラーゴールド名は金合金の地金本体の色をもって称し、表面のめっき・化学変化・塗装・張りなどの表面色をもってカラーゴールド名を称することはできないとされています。" },
  { q: "グリーンゴールドの刻印はどう表示されますか？", a: "表示規定では、色を強調して表示する場合、色の記号を材質品位に続けて表示します（例: K18GRG、Au750GRG）。造幣局の品位証明は金の品位を証明するもので、色の区分はありません。" },
];

export default function GreenGoldTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinseido.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinseido-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">グリーンゴールドとは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="カラーゴールドの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">グリーンゴールド（青金）とは — K18GRGの定義と1gの地金の値</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月15日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>グリーンゴールドは、日本ジュエリー協会の表示規定で<strong>「割り金の銀比率が高い、青みのある金合金」</strong>と定められたカラーゴールドです。和名は<strong>青金（あおきん）</strong>、記号は<strong>GRG</strong>で、K18GRG・Au750GRG のように表示します。色は地金そのものの色で、めっきの色ではありません。</p>
        <ul>
          <li>K18GRG の金の含有率は75%で、K18イエローゴールドと同じ</li>
          <li>K18GRG 1gに含まれる金0.75gの地金の値は約{yen(AU_PART)}円（{pubLabel}の田中貴金属の金 店頭買取価格×0.75・当サイトの計算）</li>
          <li>割り金の銀の分は、1gあたり最大でも約{yen(AG_MAX)}円</li>
        </ul>

        <h2>カラーゴールド4種の定義（表示規定）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>名称</th><th>記号</th><th>割り金の例（表示規定の記載）</th><th>表示の例</th></tr></thead>
            <tbody>
              <tr><td><strong>グリーンゴールド（青金）</strong></td><td>GRG</td><td>割り金の銀比率が高い、青みのある金合金</td><td>K18GRG／Au750GRG</td></tr>
              <tr><td>イエローゴールド</td><td>YG</td><td>主たる割り金の銀銅比率が4：6〜6：4程度の黄色みの金合金</td><td>K18YG／Au750YG</td></tr>
              <tr><td>ピンクゴールド</td><td>PG</td><td>割り金の銅比率が高い、やや赤みのある金合金</td><td>K18PG／Au750PG</td></tr>
              <tr><td>ホワイトゴールド（白色金）</td><td>WG</td><td>主にパラジウム等を割り金とした白色の金合金</td><td>K14WG／Au585WG</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版「4. 色の表示」（2026年11月15日確認）。表示規定は、色を強調して表示する場合に記号を材質品位に連ねて表示するとしています。</p>
        <p>4種の違いは、金以外に混ぜる金属（割り金）の種類と割合です。銀を多くすると青み（グリーン）、銅を多くすると赤み（ピンク）、パラジウム等で白（ホワイト）になります。ホワイトゴールドについては<Link href="/articles/white-gold-toha/">ホワイトゴールドとは</Link>でご説明しています。</p>

        <h3>表示規定で決まっていること</h3>
        <ul>
          <li>カラーゴールド名は地金本体の色をもって称する。めっき・化学変化（酸化・硫化・塩化等）・塗装・張りなどの表面の色をもって称することはできない</li>
          <li>カラット表示は K を数値の前に置くのが原則（海外では18Kのように後ろに置くことがある）</li>
          <li>同じ品位で色の違う材料を組み合わせた杢目金などは、材質品位だけを表示する（例: Au750YG・PG・WG → Au750）</li>
        </ul>

        <h2>1gに含まれる金と銀の値（当サイトの計算）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品位</th><th>金の割合</th><th>1gの金の地金の値</th><th>割り金がすべて銀だった場合の銀の値（上限）</th></tr></thead>
            <tbody>
              {PURITIES.map((p) => (
                <tr key={p.k}><td>{p.k}</td><td>{(p.r * 100).toFixed(1)}%</td><td>約{yen(AU_BUY * p.r)}円</td><td>約{yen(AG_BUY * (1 - p.r))}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算: 田中貴金属の金 店頭買取価格 1g {yen(AU_BUY)}円・銀 店頭買取価格 1g {AG_BUY.toLocaleString()}円（税込・{pubLabel}）×割合。割り金の銀と銅などの比率は表示規定に数値がないため、銀の値は「すべて銀だった場合」の上限として示しています。業者の買取価格ではありません。当サイトの K18 の買取目安（係数0.96を含む）は1g {yen(K18_EST)}円です。</p>
        <p>K18GRG を売る場合、金の量はK18の他の色と変わらず、地金としての評価の差は割り金の分（1gあたり数十円程度まで）にとどまる計算です。デザインやブランドの評価は別に加わる場合があります。品位別の買取目安は<Link href="/articles/k18-kaitori/">K18の買取相場</Link>・<Link href="/articles/kinseido-kaitori-guide/">品位別買取相場</Link>をご覧ください。</p>

        <h2>刻印と品位証明</h2>
        <p>表示規定による表示は K18GRG・Au750GRG のように品位と色の記号を続けたものです。造幣局の品位証明（ホールマーク）は金の品位を証明するもので、色の区分はありません。刻印の読み方は<Link href="/articles/kin-jundo-mikata/">金の純度の見分け方</Link>でご説明しています。</p>

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
          <li>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定」2026年度改訂版 <a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>造幣局「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月15日。価格は変動します。ご売却の際は、各業者の最新の買取価格をご確認ください。</p>

        <RelatedArticles currentSlug="green-gold-toha" relatedSlugs={["white-gold-toha", "k18-kaitori", "kinseido-kaitori-guide", "kin-jundo-mikata", "platinum-toha"]} />
      </article>
    </div>
  </>);
}
