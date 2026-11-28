import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261128: 「ブリタニア金貨」。出典: The Royal Mint「Britannia 2025 1oz Gold Bullion Coin」（Denomination £100・999.9 Fine Gold・Pure Metal Content 1 Troy Oz・Diameter 32.69mm・
   Security Features: Micro-text / Latent image / Tincture lines / Surface animation・Reverse Philip Nathan・Obverse Martin Jennings）、
   「Britannia 2017 1oz Gold Coin」（1987年に最初の Britannia bullion デザイン・Philip Nathan・32.69mm・999.9）、
   「The benefits of the Britannia bullion coin」（1987年導入・当初22カラット・2013年から24カラット＝999.9・1oz/1/2/1/4/1/10oz・2021年に4つのセキュリティ機能・
   英国の法定通貨のため英国居住者はCGT非課税・金地金型はVAT非課税）、
   三菱マテリアル「金貨」・石福金属興業「コイン」（一覧にブリタニアなし）、徳力本店「相場」（2026/11/27 11:45発表 ウィーン・メイプル 1oz 買取〈プレミアム無〉589,699円・金地金買取 20,146円/g）、
   e-Gov 所得税法 224条の6・施行令 350条の7。確認日 2026-11-28。含まれる金の値・比率は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "ブリタニア金貨とは — 純金1オンス・999.9の規格、2013年の品位変更、今日の金の値【毎朝更新】";
const URL = "https://gold-biyori.com/articles/britannia-kinka/";
const DESC = "イギリスのブリタニア金貨の規格（1987年発行開始・2013年から999.9・4サイズ・額面£100）を英国王立造幣局の公式で確認し、サイズ別に含まれる金の値を田中貴金属の価格で毎朝計算しています。国内の地金商の取扱と売却時の注意もまとめました。";

const T = goldData.tanaka_official;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const OZ = 31.1035; // g（計量単位令のトロイオンス）
const SIZES = [
  { label: "1oz", oz: 1 },
  { label: "1/2oz", oz: 0.5 },
  { label: "1/4oz", oz: 0.25 },
  { label: "1/10oz", oz: 0.1 },
].map((s) => ({ ...s, pure: OZ * s.oz, value: OZ * s.oz * AU_B }));
const n200 = Math.floor(2_000_000 / SIZES[0].value);

/* 徳力本店 2026/11/27 11:45発表（静的）: ウィーン・メイプル 1oz の買取（プレミアム無・税込）と金地金の買取価格 */
const TOKURIKI_COIN_1OZ = 589699;
const TOKURIKI_AU_B = 20146;
const TOKURIKI_RATIO = (TOKURIKI_COIN_1OZ / (TOKURIKI_AU_B * OZ)) * 100;

const FAQS = [
  { q: "ブリタニア金貨の純度は？", a: "英国王立造幣局（The Royal Mint）によると、ブリタニア金貨は1987年の導入時は22カラットで作られ、2013年からは24カラット（999.9）で作られています。2012年以前の年号は品位が異なるため、売却時は年号を伝えます。" },
  { q: "ブリタニア金貨1オンスに含まれる金の値はいくらですか？", a: `2013年以降の1オンス金貨は純金1トロイオンス（約31.1035g）です。最新の田中貴金属の金の店頭買取価格（${pubLabel}）で計算すると約${yen(SIZES[0].value)}円です（当サイトの計算・買取価格そのものではありません）。` },
  { q: "国内の地金商でブリタニア金貨は売れますか？", a: "2026年11月28日の確認では、三菱マテリアル・石福金属興業の公式の金貨の一覧にブリタニア金貨はありませんでした。三菱マテリアルは取り扱いのない金貨は買い取りできないことがあるとしているため、事前に問い合わせます。買取店では、金の値を基準にする店と、金貨として評価する店があります。" },
  { q: "ブリタニア金貨を売ると税金はかかりますか？", a: "英国居住者は資本利得税（CGT）が非課税と英国王立造幣局は説明していますが、これは英国の制度です。日本の居住者が売却して利益が出た場合は、日本の所得税（譲渡所得）の対象になります。1回の売却額が200万円を超えると、買い取った事業者が支払調書を提出します。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ブリタニア金貨とは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-28", dateModified: "2026-11-28",
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

export default function BritanniaKinkaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinka.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinka-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">ブリタニア金貨とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="ブリタニア金貨の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ブリタニア金貨とは — 規格と、サイズ別に含まれる金の値</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月28日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／規格は2026年11月28日に英国王立造幣局の公式で確認</p>

        <p>ブリタニア金貨は、英国王立造幣局（The Royal Mint）が<strong>1987年</strong>から発行している地金型の金貨です。導入時は22カラットでしたが、<strong>2013年からは24カラット（999.9）</strong>で作られています。現行の1オンス金貨は額面£100・純金1トロイオンス・直径32.69mmで、最新の田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）で計算すると、含まれる金の値は<strong>約{yen(SIZES[0].value)}円</strong>です。</p>

        <h2>ブリタニア金貨の規格（英国王立造幣局の公式）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td>発行元</td><td>英国王立造幣局（The Royal Mint）</td></tr>
              <tr><td>発行開始</td><td>1987年（裏面のブリタニア像は Philip Nathan のデザイン）</td></tr>
              <tr><td>品位</td><td>1987年〜：22カラット／2013年〜：24カラット（999.9）</td></tr>
              <tr><td>サイズ</td><td>1オンス・1/2オンス・1/4オンス・1/10オンス</td></tr>
              <tr><td>1オンス金貨（2025年）</td><td>額面£100・999.9・純金1トロイオンス・直径32.69mm</td></tr>
              <tr><td>偽造防止</td><td>2021年に4つの機能を追加（見る角度で三叉の矛と南京錠が切り替わる潜像、波のサーフェスアニメーション、ユニオンフラッグのティンクチャーライン、マイクロテキスト）</td></tr>
              <tr><td>表面（オバース）のデザイン</td><td>2025年の1オンス地金型は Martin Jennings（年号により異なります）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: The Royal Mint「Britannia 2025 1oz Gold Bullion Coin」「Britannia 2017 1oz Gold Coin」「The benefits of the Britannia bullion coin」（2026年11月28日確認）。1/2オンス以下の額面・直径は年号ごとの公式ページでご確認ください。</p>

        <h2>サイズ別に含まれる金の量と値（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>含まれる金</th><th>金の値</th></tr></thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.label}><td>{s.label}</td><td>{s.pure.toFixed(2)}g</td><td>{yen(s.value)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 含まれる金＝1トロイオンス（31.1035g）×サイズ。2013年以降の999.9の金貨が対象です。金の値＝含まれる金×田中貴金属の金の店頭買取価格（{pubLabel}）。金貨の買取価格そのものではありません。</p>

        <h2>2012年以前の22カラットの年号について</h2>
        <p>英国王立造幣局は、ブリタニア金貨が1987年の導入時に22カラットで作られ、2013年から24カラット（999.9）に変わったと説明しています。同じ「1オンス」の表記でも、2012年以前の年号は金以外の金属を含む22カラットで、現行の999.9の金貨とは品位が異なります。上の表の計算は2013年以降の金貨が対象で、2012年以前の総重量・含有量は当サイトでは公式の数値を確認できていません。売却や査定の依頼では、年号を必ず伝えます。22カラットの品位の考え方は<Link href="/articles/k22-kaitori/">22金（K22）の買取相場</Link>をご覧ください。</p>

        <h2>金貨の買取は金の値の何割か（徳力本店の公表値での試算）</h2>
        <p>ブリタニア金貨は国内の大手地金商の公式の一覧にないため、同じ24カラット・1オンスの地金型金貨で、国内の地金商が公表している買取価格を参考にします。徳力本店の2026年11月27日 11:45発表では、ウィーン金貨・メイプルリーフ金貨1オンスの買取（他社で購入したコインに適用されるプレミアム無）は<strong>{TOKURIKI_COIN_1OZ.toLocaleString()}円</strong>、同時刻の金地金の買取価格は1g {TOKURIKI_AU_B.toLocaleString()}円でした。1オンス分の金の値に対する金貨の買取価格の割合は<strong>約{TOKURIKI_RATIO.toFixed(1)}%</strong>です（当サイトの計算）。</p>
        <p>ブリタニア金貨の買取価格はこの比率と同じとは限りません。取り扱いのある店舗で、金の値に対して何割で買い取るのかを確認します。購入時の上乗せ率の比較は<Link href="/articles/kinka-kounyusaki/">金貨はどこで買う？</Link>にまとめています。</p>

        <h2>国内での売却</h2>
        <ul>
          <li><strong>大手地金商の取扱</strong>: 2026年11月28日の確認では、三菱マテリアル（カンガルー・メイプルリーフ・ウィーンの3種）、石福金属興業（メイプルリーフ・ウィーン）の公式の金貨の一覧にブリタニア金貨はありませんでした。三菱マテリアルは、取り扱いのない金貨は買い取りできないことがあるため事前に問い合わせるよう案内しています。</li>
          <li><strong>英国の税制との違い</strong>: 英国王立造幣局は、ブリタニア金貨が英国の法定通貨であるため英国居住者は資本利得税（CGT）が非課税で、金の地金型金貨は付加価値税（VAT）も非課税と説明しています。日本の居住者が国内で売却する場合は日本の税制が適用され、利益は譲渡所得として課税の対象になります（<Link href="/articles/kin-kaitori-zeikin/">金買取と税金</Link>）。</li>
          <li><strong>支払調書</strong>: 所得税法は金貨を「金地金等」に含めており（224条の6）、1回の売却額が200万円を超えると、買い取った事業者が支払調書を提出します。金の値で計算すると、最新の価格では1オンス金貨<strong>{n200}枚まで</strong>が200万円以下です（当サイトの計算）。</li>
          <li><strong>確認しておくこと</strong>: 年号（2012年以前か2013年以降か）、サイズ、カプセル・ケースの有無を伝えます。付属品の扱いは<Link href="/articles/kin-fuzokuhin-nashi/">付属品がない金の買取</Link>をご覧ください。</li>
        </ul>
        <p>同じ英国王立造幣局の22金の金貨は<Link href="/articles/sovereign-kaitori/">ソブリン金貨の買取</Link>、24カラットの地金型金貨は<Link href="/articles/vienna-kinka-kaitori/">ウィーン金貨の買取</Link>、金貨全体は<Link href="/articles/kinka-kaitori-guide/">金貨買取ガイド</Link>をご覧ください。</p>

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
          <li>The Royal Mint「Britannia 2025 1oz Gold Bullion Coin」<a href="https://www.royalmint.com/invest/bullion/bullion-coins/gold-coins/britannia-2025-1oz-gold-bullion-coin/" target="_blank" rel="noopener noreferrer">royalmint.com</a>・「Britannia 2017 1oz Gold Coin」<a href="https://www.royalmint.com/collect/archive/2017/britannia-2017-1oz-gold-coin" target="_blank" rel="noopener noreferrer">royalmint.com</a>・「The benefits of the Britannia bullion coin」<a href="https://www.royalmint.com/invest/discover/invest-in-gold/the-benefits-of-the-britannia-bullion-coin/" target="_blank" rel="noopener noreferrer">royalmint.com</a></li>
          <li>三菱マテリアル「金貨」<a href="https://gold.mmc.co.jp/howto/products/coin.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・石福金属興業「コイン」<a href="https://retail.ishifuku-kinzoku.co.jp/product/coin.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a>・徳力本店「相場」<a href="https://www.tokuriki-kanda.co.jp/goldetc/market/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>e-Gov法令検索「所得税法」<a href="https://laws.e-gov.go.jp/law/340AC0000000033" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a>・「所得税法施行令」<a href="https://laws.e-gov.go.jp/law/340CO0000000096" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月28日。取扱・価格は変更される場合があります。お取引の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="britannia-kinka" relatedSlugs={["sovereign-kaitori", "vienna-kinka-kaitori", "kinka-kaitori-guide", "kinka-kounyusaki", "krugerrand-kaitori"]} />
      </article>
    </div>
  </>);
}
