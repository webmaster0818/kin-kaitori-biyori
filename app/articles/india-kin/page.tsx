import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（深夜04時の回）: 「インド 金」。
   出典: インド準備銀行（RBI）「Half Yearly Report on Management of Foreign Exchange Reserves: October 2025 - March 2026」I.6（金準備 880.52t ほか）、
   インド政府 PIB「Union Budget 2024-25」2024-07-23（金・銀の関税 15%→6%、プラチナ 15.4%→6.4%）、
   インド規格局（BIS）Hallmarking FAQ（IS 1417:2016 の6区分・HUID・刻印料）、田中貴金属 店頭買取価格（gold-spot-prices.json・毎朝更新）。確認日 2026-11-25。
   独自: RBI の保有量を田中の価格で円換算、BIS の6区分を日本の品位区分と並べ、区分ごとの1gの金の地金の値を計算（毎朝更新）。将来予測・売買の判断は書かない */
const TITLE = "インドと金 — 準備銀行の保有量880トン・輸入関税6%・ホールマーク6区分を公式資料で確認";
const URL = "https://gold-biyori.com/articles/india-kin/";
const DESC = "インドと金の関係を、インド準備銀行（RBI）の外貨準備報告、インド政府の2024年度予算（金の関税15%→6%）、インド規格局（BIS）のホールマーク制度の公式資料で整理しました。インドの22K（916）などの刻印が日本の品位区分のどれに当たるか、1gあたりの金の値（毎朝更新）も掲載しています。";

const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* RBI 2026年3月末 */
const RBI_T = 880.52;
const RBI_DOM = 680.05;
const RBI_BOE = 197.67;
const RBI_DEP = 2.8;
const rbiOku = (RBI_T * 1_000_000 * AU_B) / 1e8; /* 億円・当サイトの計算 */

/* BIS IS 1417:2016 の6区分と、日本の区分（JIS H6309:2022・造幣局の品位証明）との対応（当サイトの整理） */
const GRADES = [
  { bis: "14K", ppt: 585, jp: "K14（585）", mint: "あり" },
  { bis: "18K", ppt: 750, jp: "K18（750）", mint: "あり" },
  { bis: "20K", ppt: 833, jp: "K20（833）", mint: "なし" },
  { bis: "22K", ppt: 916, jp: "K22（916）", mint: "あり" },
  { bis: "23K", ppt: 958, jp: "該当する区分なし", mint: "なし" },
  { bis: "24KS", ppt: 995, jp: "K24（999）に届かない", mint: "なし" },
];

const FAQS = [
  { q: "インドの中央銀行はどれくらい金を持っていますか？", a: `インド準備銀行（RBI）の外貨準備の半期報告によると、2026年3月末の保有量は${RBI_T}トンで、そのうち${RBI_DOM}トンを国内で保管しています。外貨準備に占める金の割合（ドル建ての評価額）は、2025年9月末の13.92%から2026年3月末の約16.70%に上がりました。` },
  { q: "インドの金の輸入関税は何%ですか？", a: "インド政府は2024年7月23日の2024年度予算で、金と銀の関税を15%から6%に、プラチナを15.4%から6.4%に引き下げると発表しました。国内のジュエリー加工の付加価値を高めることが理由とされています。その後の改定の有無は、インド政府の最新の告示でご確認ください。" },
  { q: "インドで買った22Kの金のネックレスは日本で売れますか？", a: `22K（916）は日本の品位区分のK22と同じ千分率で、日本の買取店でも品位と重さをもとに査定されます。金の含有量だけで計算すると、最新の田中貴金属の店頭買取価格（1g ${yen(AU_B)}円）で1gあたり約${yen((AU_B * 916) / 1000)}円の金が含まれる計算です（当サイトの計算で、買取価格そのものではありません）。` },
  { q: "HUIDとは何ですか？", a: "インド規格局（BIS）のホールマークの一部で、製品ごとに付ける6桁の英数字の識別番号です。2021年7月1日から導入され、BISのアプリ「BIS Care」で番号を確かめられます。刻印は品位の表示とHUIDなどで構成されます。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インドと金", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-25", dateModified: "2026-11-25",
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

export default function IndiaKinPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-hakusho.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-hakusho-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">インドと金</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="インドと金の関係のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">インドと金 — 準備銀行の保有量・輸入関税・ホールマークの公式資料</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／出典の確認日: 2026年11月25日／円換算: {pubLabel}の田中貴金属の店頭買取価格（毎朝自動更新）</p>

        <p>インドは、中央銀行・政府・規格の3つの面で金と深く関わっています。インド準備銀行（RBI）は<strong>2026年3月末に{RBI_T}トン</strong>の金を保有し、外貨準備に占める割合は約16.70%でした。政府は2024年7月に<strong>金の輸入関税を15%から6%</strong>に引き下げています。ジュエリーには、インド規格局（BIS）が定める<strong>14K〜24KSの6区分</strong>のホールマーク（品位の刻印）が付けられます。RBIの保有量を最新の田中貴金属の店頭買取価格で円に換算すると、<strong>約{yen(rbiOku / 10000)}兆円</strong>になります（当サイトの計算）。</p>

        <h2>インド準備銀行の金の保有量（2026年3月末）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>数量</th></tr></thead>
            <tbody>
              <tr><td>保有量の合計</td><td><strong>{RBI_T}トン</strong></td></tr>
              <tr><td>うち国内で保管</td><td>{RBI_DOM}トン（{((RBI_DOM / RBI_T) * 100).toFixed(1)}%）</td></tr>
              <tr><td>うちイングランド銀行・国際決済銀行（BIS）に保管</td><td>{RBI_BOE}トン</td></tr>
              <tr><td>うち金預金の形で保有</td><td>{RBI_DEP}トン</td></tr>
              <tr><td>外貨準備に占める金の割合（ドル建て評価額）</td><td>13.92%（2025年9月末）→ 約16.70%（2026年3月末）</td></tr>
              <tr><td>円換算（当サイトの計算）</td><td>約{yen(rbiOku)}億円（1g {yen(AU_B)}円 × {RBI_T}トン）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: Reserve Bank of India「Half Yearly Report on Management of Foreign Exchange Reserves: October 2025 - March 2026」I.6 Management of Gold Reserves。国内保管の割合と円換算は当サイトの計算です。円換算は田中貴金属の店頭買取価格（税込・{pubLabel}）を使った目安で、RBIの評価額とは異なります。</p>
        <p>同じ報告の外貨準備の内訳表では、金の評価額は2025年9月末の97,465百万ドルから、10月末101,726百万ドル、11月末106,740百万ドルと増えています。外貨準備の合計は同じ期間に700,089百万ドルから687,930百万ドルに減っており、金の割合はこの両方の動きで上がりました。</p>

        <h2>金の輸入関税の引き下げ（2024年7月）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品目</th><th>引き下げ前</th><th>引き下げ後</th></tr></thead>
            <tbody>
              <tr><td>金</td><td>15%</td><td><strong>6%</strong></td></tr>
              <tr><td>銀</td><td>15%</td><td><strong>6%</strong></td></tr>
              <tr><td>プラチナ</td><td>15.4%</td><td><strong>6.4%</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: Press Information Bureau（インド政府）「Union Budget 2024-25」2024年7月23日。理由は「国内の金・貴金属ジュエリーの付加価値を高めるため」と説明されています。</p>

        <h2>ホールマークの6区分と、日本の品位区分との対応</h2>
        <p>インドの金のジュエリーには、BISの規格 IS 1417:2016 に定める6区分のどれかが刻印されます。千分率（‰）の数値を、日本の区分（JIS H6309・造幣局の品位証明）と並べました。1gあたりの金の値は、最新の田中貴金属の店頭買取価格に千分率を掛けた当サイトの計算で、買取店の買取価格ではありません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>BISの区分</th><th>千分率</th><th>日本の区分</th><th>造幣局の品位証明</th><th>1gあたりの金の値（毎朝更新）</th></tr></thead>
            <tbody>
              {GRADES.map((g) => (
                <tr key={g.bis}>
                  <td><strong>{g.bis}</strong></td>
                  <td>{g.ppt}</td>
                  <td>{g.jp}</td>
                  <td>{g.mint}</td>
                  <td>{yen((AU_B * g.ppt) / 1000)}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: Bureau of Indian Standards「Hallmarking FAQ」（IS 1417:2016 の6区分）。日本の区分は<Link href="/articles/kin-toha/">金とは</Link>の対応表（日本ジュエリー協会の表示規定・造幣局）によります。対応の整理と1gの値は当サイトの計算です（{pubLabel}の店頭買取価格 1g {yen(AU_B)}円）。</p>
        <ul>
          <li><strong>22K（916）</strong>は日本のK22と同じ千分率です。K22の買取の目安は<Link href="/articles/k22-kaitori/">22金の買取相場</Link>にまとめています。</li>
          <li><strong>23K（958）</strong>に当たる区分は、日本のJIS・造幣局の品位区分にはありません。</li>
          <li><strong>24KS（995）</strong>は日本のK24（999以上）の基準に届かない数値です。</li>
          <li>HUID（6桁の英数字）は2021年7月1日から導入された製品ごとの識別番号で、BISのアプリ「BIS Care」で確かめられます。BISの刻印料は金製品1点あたり45ルピー（最低200ルピー）です。</li>
        </ul>

        <h2>このページで扱っていないこと</h2>
        <ul>
          <li><strong>インドの需要量</strong>: 宝飾品・地金の年間需要の統計は、ワールド・ゴールド・カウンシルの「Gold Demand Trends」で公表されています。本ページでは政府・中央銀行・規格局の公表資料に限って掲載しています。</li>
          <li><strong>金価格への影響</strong>: インドの需要や関税の変更が金価格をどれだけ動かすかは予測していません。過去の価格の推移は<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>・<Link href="/articles/enyasu-kin/">円安と金価格</Link>をご覧ください。</li>
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
          <li>Reserve Bank of India「Half Yearly Report on Management of Foreign Exchange Reserves: October 2025 - March 2026」<a href="https://www.rbi.org.in/Scripts/PublicationsView.aspx?id=23811" target="_blank" rel="noopener noreferrer">rbi.org.in</a></li>
          <li>Press Information Bureau「Union Budget 2024-25」（2024年7月23日）<a href="https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/jul/doc2024723352501.pdf" target="_blank" rel="noopener noreferrer">pib.gov.in（PDF）</a></li>
          <li>Bureau of Indian Standards「Hallmarking FAQ」<a href="https://www.bis.gov.in/hallmarking-overview/hallmarking-faqs/hallmarking-faq/?lang=en" target="_blank" rel="noopener noreferrer">bis.gov.in</a></li>
          <li>田中貴金属「本日の地金価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。本ページは公表資料を整理したもので、金の売買や投資を勧めるものではありません。</p>

        <RelatedArticles currentSlug="india-kin" relatedSlugs={["k22-kaitori", "kin-toha", "kin-jundo-mikata", "kin-maizoryo", "enyasu-kin", "kin-kakaku-boraku-kako"]} />
      </article>
    </div>
  </>);
}
