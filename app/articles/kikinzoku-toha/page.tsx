import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（深夜04時の回）: 「貴金属とは」。
   出典: 田中貴金属 産業用貴金属製品サイト「貴金属元素比較」（8元素の原子番号・密度・融点・発見年）、
   同「産業用貴金属相場（2026年10月）」（業者間取引参考価格・税抜・円/g の月間平均）、
   犯罪による収益の移転防止に関する法律施行令 第4条（e-Gov 法令API）、田中貴金属 店頭価格（gold-spot-prices.json・毎朝更新）。確認日 2026-11-25。
   独自: 8元素の性質と価格を1つの表にそろえ、金を1とした価格の比・1万円で買える量・1kgの体積を計算 */
const TITLE = "貴金属とは？8種類の元素の性質と価格を1つの表で比較（金・銀・プラチナ・パラジウムほか）";
const URL = "https://gold-biyori.com/articles/kikinzoku-toha/";
const DESC = "貴金属とは、金・銀と白金族6元素（プラチナ・パラジウム・ロジウム・イリジウム・ルテニウム・オスミウム）の8元素の総称です。田中貴金属の元素データと産業用相場（2026年10月平均）で、密度・融点・発見年・1gの価格・金との価格比を1つの表にまとめ、法令上の「貴金属」の範囲も整理しました。";

const AU_R = goldData.tanaka_official.au_retail_per_g as number;
const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const PT_B = goldData.tanaka_official.pt_buyback_per_g as number;
const AG_B = goldData.tanaka_official.ag_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 田中貴金属「貴金属元素比較」（密度は293K、融点は℃）と「産業用貴金属相場（2026年10月）」の月間平均（税抜・円/g）。
   オスミウムは産業用相場の公表対象外 */
type E = { sym: string; name: string; z: number; d: number; mp: number; found: string; price: number | null; group: string };
const ELEMENTS: E[] = [
  { sym: "Ru", name: "ルテニウム", z: 44, d: 12.41, mp: 2250, found: "1844年", price: 9424, group: "白金族" },
  { sym: "Rh", name: "ロジウム", z: 45, d: 12.41, mp: 1963, found: "1803年", price: 46524, group: "白金族" },
  { sym: "Pd", name: "パラジウム", z: 46, d: 12.02, mp: 1554.8, found: "1803年", price: 5826, group: "白金族" },
  { sym: "Ag", name: "銀", z: 47, d: 10.5, mp: 961.78, found: "古代", price: 298.89, group: "—" },
  { sym: "Os", name: "オスミウム", z: 76, d: 22.57, mp: 3045, found: "1804年", price: null, group: "白金族" },
  { sym: "Ir", name: "イリジウム", z: 77, d: 22.42, mp: 2446, found: "1804年", price: 45774, group: "白金族" },
  { sym: "Pt", name: "白金（プラチナ）", z: 78, d: 21.45, mp: 1768.2, found: "1748年", price: 8373, group: "白金族" },
  { sym: "Au", name: "金", z: 79, d: 19.32, mp: 1064.18, found: "古代", price: 20973, group: "—" },
];
const AU_AVG = 20973;
const ranked = ELEMENTS.filter((e) => e.price !== null).sort((a, b) => (b.price as number) - (a.price as number));
const RH = ELEMENTS.find((e) => e.sym === "Rh")!;
const AG = ELEMENTS.find((e) => e.sym === "Ag")!;

const FAQS = [
  { q: "貴金属は何種類ありますか？", a: "一般に、金・銀と、白金族と呼ばれるプラチナ・パラジウム・ロジウム・イリジウム・ルテニウム・オスミウムの6元素を合わせた8元素を貴金属と呼びます。田中貴金属の元素データも、この8元素を貴金属元素として掲載しています。" },
  { q: "法律でいう「貴金属」も同じ8種類ですか？", a: "法令によって範囲が異なります。たとえば犯罪収益移転防止法の施行令第4条は、取引時確認の対象となる貴金属を「金、白金、銀及びこれらの合金」と定めており、パラジウムなどは含まれていません。手続きの対象かどうかは、それぞれの法令の定めで確認する必要があります。" },
  { q: "いちばん高い貴金属はどれですか？", a: `田中貴金属の産業用貴金属相場（2026年10月の月間平均・税抜）では、ロジウムが1g ${yen(RH.price as number)}円で最も高く、金（${yen(AU_AVG)}円）の約${((RH.price as number) / AU_AVG).toFixed(1)}倍でした。価格の順位は時期によって入れ替わります。オスミウムは同相場の公表対象外です。` },
  { q: "家にある貴金属はどこで売れますか？", a: "金・プラチナ・銀の製品は、地金商や買取店で品位（純度）と重さをもとに査定されます。パラジウムの買取価格を公表している地金商もあります（例: 徳力本店）。売却前の確認事項は「はじめての金買取」にまとめています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "貴金属とは", item: URL },
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

export default function KikinzokuTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">貴金属とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="貴金属の種類のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">貴金属とは — 8種類の元素の性質と価格の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／元素データ・産業用相場・法令は2026年11月25日に確認／店頭価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>貴金属とは、<strong>金・銀と、白金族（プラチナ・パラジウム・ロジウム・イリジウム・ルテニウム・オスミウム）の6元素を合わせた8元素</strong>の総称です。いずれも空気中で錆びにくく、産出量が少ない金属です。田中貴金属の産業用相場（2026年10月の月間平均・税抜）で1gあたりの価格を比べると、最も高いのは<strong>ロジウム（{yen(RH.price as number)}円）</strong>で、金（{yen(AU_AVG)}円）の約{((RH.price as number) / AU_AVG).toFixed(1)}倍、最も安いのは銀（{AG.price}円）でした。ただし、法令でいう「貴金属」は8元素すべてとは限らず、犯罪収益移転防止法の施行令では<strong>金・白金・銀とその合金</strong>に限られています。</p>

        <h2>8種類の貴金属の性質と1gの価格</h2>
        <p>田中貴金属が公表している元素データと産業用相場を、1つの表にそろえました。「金との比」は、各元素の1gの価格を金の価格で割った当サイトの計算です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>元素</th><th>原子番号</th><th>分類</th><th>密度（g/cm³）</th><th>融点（℃）</th><th>発見</th><th>1gの価格（2026年10月平均・税抜）</th><th>金との比</th></tr></thead>
            <tbody>
              {ELEMENTS.map((e) => (
                <tr key={e.sym}>
                  <td><strong>{e.name}</strong>（{e.sym}）</td>
                  <td>{e.z}</td>
                  <td>{e.group}</td>
                  <td>{e.d}</td>
                  <td>{e.mp.toLocaleString()}</td>
                  <td>{e.found}</td>
                  <td>{e.price === null ? "公表なし" : `${e.price.toLocaleString()}円`}</td>
                  <td>{e.price === null ? "—" : `${(e.price / AU_AVG).toFixed(2)}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属「貴金属元素比較」（密度は293K）、田中貴金属「産業用貴金属相場（2026年10月）」の月間平均。産業用相場は業者間取引の参考価格（税抜）で、地金の店頭小売価格とは異なります。オスミウムは同相場に掲載がありません。金との比は当サイトの計算です。</p>

        <p>表から分かることは次のとおりです。</p>
        <ul>
          <li><strong>価格の順位</strong>: 2026年10月の平均では{ranked.map((e) => e.name.replace("（プラチナ）", "")).join("＞")}の順でした。ロジウムとイリジウムは金の2倍を超え、プラチナは金の約{(8373 / AU_AVG).toFixed(2)}倍でした。</li>
          <li><strong>重さ</strong>: 8元素のうちオスミウム・イリジウム・プラチナ・金の4つは密度が19を超え、銀（10.5）の2倍近い重さになります。金1kgの体積は約{(1000 / 19.32).toFixed(1)}cm³です（当サイトの計算）。</li>
          <li><strong>融点</strong>: 銀（961.78℃）と金（1,064.18℃）は比較的低く、白金族は1,500℃を超えます。オスミウムは3,045℃です。</li>
          <li><strong>発見の時期</strong>: 金と銀は古代から使われてきましたが、白金族の6元素はいずれも18〜19世紀に発見されています。</li>
        </ul>

        <h2>法令でいう「貴金属」の範囲</h2>
        <p>「貴金属」という言葉は、法令ごとに対象が決められています。売却や購入の手続きに関係する主なものは次のとおりです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>法令・制度</th><th>対象となる貴金属</th><th>主な手続き</th></tr></thead>
            <tbody>
              <tr><td>犯罪収益移転防止法 施行令 第4条</td><td>金、白金、銀及びこれらの合金</td><td>代金が200万円を超える貴金属等の売買契約を結ぶ際の取引時確認（本人確認など）</td></tr>
              <tr><td>所得税法の支払調書（金地金等の譲渡の対価）</td><td>金地金・白金地金・金貨・白金貨</td><td>1回の売却代金が200万円を超えると、買取業者が税務署に支払調書を提出</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 犯罪による収益の移転防止に関する法律施行令 第4条・第7条（e-Gov法令検索、2026年11月25日確認）。支払調書の詳細は<Link href="/articles/kin-200man-mynumber/">金の売却200万円とマイナンバー</Link>をご覧ください。</p>
        <p>パラジウムは、元素としては貴金属ですが、上の2つの制度の対象には含まれていません。同じ「貴金属」でも、法令の手続きは金・プラチナ・銀を中心に定められています。</p>

        <h2>身近な製品に含まれる貴金属</h2>
        <ul>
          <li><strong>金・プラチナ・銀</strong>: ジュエリー、地金、金貨・銀貨。品位（純度）の表し方は<Link href="/articles/kin-toha/">金とは</Link>・<Link href="/articles/platinum-toha/">プラチナとは</Link>で説明しています。</li>
          <li><strong>パラジウム</strong>: ホワイトゴールドや歯科用合金の割り金。<Link href="/articles/palladium-toha/">パラジウムとは</Link>をご覧ください。</li>
          <li><strong>ロジウム</strong>: ホワイトゴールドやシルバーの表面のメッキ。ロジウムを含む製品でも、査定は主に土台の金属の品位と重さで行われます。</li>
        </ul>
        <p>店頭価格の参考として、最新の田中貴金属の店頭買取価格（税込）は、金1g {yen(AU_B)}円・プラチナ1g {yen(PT_B)}円・銀1g {AG_B}円です（{pubLabel}）。金の小売価格は1g {yen(AU_R)}円です。</p>

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
          <li>田中貴金属「貴金属元素比較」<a href="https://tanaka-preciousmetals.com/jp/guide/element/comparison.html" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>田中貴金属「産業用貴金属相場（2026年10月）」<a href="https://tanaka-preciousmetals.com/jp/guide/rate/" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>犯罪による収益の移転防止に関する法律施行令 <a href="https://laws.e-gov.go.jp/law/420CO0000000020" target="_blank" rel="noopener noreferrer">e-Gov法令検索</a></li>
          <li>田中貴金属「本日の地金価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。価格は変動します。産業用相場は業者間取引の参考価格で、店頭での売買価格とは異なります。</p>

        <RelatedArticles currentSlug="kikinzoku-toha" relatedSlugs={["kin-toha", "platinum-toha", "palladium-toha", "kin-mitsudo", "platinum-silver-chigai", "kin-kaitori-hajimete"]} />
      </article>
    </div>
  </>);
}
