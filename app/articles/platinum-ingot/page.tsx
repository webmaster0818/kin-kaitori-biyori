import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261119: 「プラチナ インゴット」。出典: 徳力本店「取扱品目・手数料」（プラチナ地金の購入・売却手数料、2026/11/19 13:00 の小売8,013円・買取7,590円）、
   石福金属興業「プラチナ地金」（500g〜5gの寸法・バーチャージ。1kgは掲載なし）、三菱マテリアル「引出手数料…の改定について」（2026-04-01・Pt 500g・1kgの引出手数料は無料）
   ・「金地金（インゴット）」（ゴールドショップ三菱各店ではプラチナの現物の取扱なし）、徳力本店「貴金属材料 物理特性（参考値）」（Pt 21.45g/cm³）、
   国税庁「金地金等に係る譲渡所得の調査状況」（金地金等＝金・白金地金、金貨・白金貨／200万円超の支払調書）、No.3105・No.3152。確認日 2026-11-19。
   往復コスト・体積・200万円の重さは当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "プラチナインゴットのサイズと手数料 — 5g〜500gの寸法・バーチャージと、買って売るまでの往復コスト【毎朝更新】";
const URL = "https://gold-biyori.com/articles/platinum-ingot/";
const DESC = "プラチナインゴット（プラチナ地金）のサイズ別の寸法と手数料を、徳力本店・石福金属興業の公式ページで確認しました。購入から売却までの往復コスト、200万円を超える重さ、税金を、田中貴金属のプラチナ価格で毎朝更新しています。";

const T = goldData.tanaka_official;
const PT_R = T.pt_retail_per_g as number;
const PT_B = T.pt_buyback_per_g as number;
const AU_R = T.au_retail_per_g as number;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 徳力本店のプラチナ地金の手数料（税込・2026-11-19 確認）。売却は同一買取単価1件あたりの総重量で計算 */
const TOKURIKI = [
  { label: "500gバー", g: 500, buyFee: 0, sellFee: 0 },
  { label: "100gバー", g: 100, buyFee: 6600, sellFee: 6600 },
  { label: "50gスモールバー", g: 50, buyFee: 5500, sellFee: 5500 },
  { label: "30gスモールバー", g: 30, buyFee: 5500, sellFee: 3300 },
  { label: "10gスモールバー", g: 10, buyFee: 3850, sellFee: 3300 },
  { label: "5gスモールバー", g: 5, buyFee: 3850, sellFee: 1650 },
];
const rows = TOKURIKI.map((b) => {
  const cost = PT_R * b.g + b.buyFee;
  const sell = PT_B * b.g - b.sellFee;
  return { ...b, cost, sell, loss: cost - sell, lossPct: ((cost - sell) / cost) * 100, rise: ((cost + b.sellFee) / b.g / PT_B - 1) * 100 };
});
/* 石福金属興業のプラチナ地金（寸法・バーチャージ。2026-11-19 確認） */
const ISHIFUKU = [
  { g: 500, size: [100, 55, 4.24], charge: 0 },
  { g: 100, size: [65, 35, 2.05], charge: 11000 },
  { g: 50, size: [45, 25, 2.1], charge: 8800 },
  { g: 10, size: [26, 15, 1.2], charge: 6600 },
  { g: 5, size: [22, 13, 0.82], charge: 6600 },
];
const D_PT = 21.45;
const gram200 = 2_000_000 / PT_B;
const ptSpread = ((PT_R - PT_B) / PT_B) * 100;
const auSpread = ((AU_R - AU_B) / AU_B) * 100;

const FAQS = [
  { q: "プラチナインゴットにはどんなサイズがありますか？", a: "2026年11月19日の確認では、徳力本店が500g・100g・50g・30g・10g・5g、石福金属興業が500g・100g・50g・10g・5gを掲載しています。1kgのプラチナ地金は、両社の購入ページには掲載がありませんでした。" },
  { q: "プラチナインゴットの手数料はいくらですか？", a: "徳力本店では、購入時に100gバー6,600円・50gと30g 5,500円・10gと5g 3,850円、500gバーは0円です。石福金属興業のバーチャージは100g 11,000円・50g 8,800円・10gと5g 6,600円、500gは無料です（いずれも税込・2026年11月19日確認）。" },
  { q: "プラチナインゴットを売ると支払調書が出ますか？", a: "国税庁によると、金地金等（金・白金地金、金貨・白金貨）の売買を業として行う者は、200万円超の対価を支払う場合に支払調書を税務署に提出します。最新の田中貴金属のプラチナの店頭買取価格では、約" + Math.ceil(gram200) + "gを超えると200万円を超えます（当サイトの計算・毎朝更新）。" },
  { q: "プラチナインゴットを売ったときの税金は？", a: "国税庁は、金地金等の譲渡益は原則として総合課税の譲渡所得として課税されるとしています。譲渡所得には年50万円の特別控除があり、所有期間が5年を超える場合は控除後の金額の2分の1が課税の対象になります（No.3105・No.3152）。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナインゴット", item: URL },
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

export default function PlatinumIngotPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-platinum.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-platinum-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナインゴット</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="プラチナインゴットのサイズと手数料のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナインゴットのサイズと手数料 — 5g〜500gの往復コスト</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月19日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／サイズ・手数料は2026年11月19日に各社公式で確認</p>

        <p><strong>プラチナインゴット（プラチナ地金）は、徳力本店では500g・100g・50g・30g・10g・5gの6サイズ、石福金属興業では500g・100g・50g・10g・5gの5サイズ</strong>が購入ページに掲載されています（2026年11月19日確認）。500g未満のバーには1本ごとに手数料がかかり、小さいサイズほど価格に占める割合が大きくなります。最新の田中貴金属のプラチナの店頭小売価格は1g {yen(PT_R)}円、店頭買取価格は1g {yen(PT_B)}円で、小売価格は買取価格より約{ptSpread.toFixed(1)}%高くなっています（金は約{auSpread.toFixed(1)}%・{pubLabel}・当サイトの計算）。</p>

        <h2>サイズ別の往復コスト（徳力本店の手数料・毎朝更新）</h2>
        <p>プラチナインゴットを買い、すぐに同じ店で売った場合の受取額と、購入額に戻るのに必要なプラチナ価格の上昇幅を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>購入額（手数料込み）</th><th>すぐに売った場合の受取額</th><th>差額（購入額に対する割合）</th><th>購入額に戻るのに必要な値上がり幅</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}><td>{r.label}</td><td>{yen(r.cost)}円</td><td>{yen(r.sell)}円</td><td>{yen(r.loss)}円（{r.lossPct.toFixed(1)}%）</td><td>+{r.rise.toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 購入額＝田中貴金属のプラチナの店頭小売価格×重さ＋徳力本店の購入手数料。受取額＝店頭買取価格×重さ−徳力本店の売却手数料（500g 0円・100g 6,600円・50g 5,500円・30gと10g 3,300円・5g 1,650円）。2026年11月19日13:00 は、徳力本店のプラチナの小売価格（8,013円）・買取価格（7,590円）が田中貴金属の公表値と同じでした。徳力本店は他社の地金の買取金額は異なる場合があるとしています。税金・振込手数料は含めていません。</p>
        <p>500gバーは手数料がかからないため、差額は小売価格と買取価格の差だけになります。金地金の同じ計算は<Link href="/articles/kin-kounyu-chuiten/">金を購入するときの注意点</Link>、購入先ごとの手数料は<Link href="/articles/kin-ingot-kounyusaki/">金のインゴットはどこで買うか</Link>に掲載しています。</p>

        <h2>石福金属興業のサイズ・寸法とバーチャージ</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さ</th><th>寸法（縦×横×厚さ）</th><th>バーチャージ（税込）</th><th>寸法から求めた体積</th><th>重さ÷密度21.45の体積</th></tr></thead>
            <tbody>
              {ISHIFUKU.map((b) => (
                <tr key={b.g}><td>{b.g}g</td><td>{b.size[0]}×{b.size[1]}×{b.size[2]}mm</td><td>{b.charge ? `${b.charge.toLocaleString()}円` : "無料"}</td><td>{((b.size[0] * b.size[1] * b.size[2]) / 1000).toFixed(2)}cm³</td><td>{(b.g / D_PT).toFixed(2)}cm³</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">石福金属興業は、重量を基準に作るため寸法は製品により多少異なり、バーチャージは1個ごとにかかると案内しています。右の2列は当サイトの計算です。どのサイズも、寸法から求めた体積と密度から求めた体積の差は約1.4%以内（50gが最大）で、寸法は純プラチナの重さとほぼ整合しています。プラチナの密度21.45g/cm³は徳力本店の物性表（参考値）の値です（<Link href="/articles/kin-mitsudo/">金の密度</Link>）。</p>
        <p>三菱マテリアルは、ゴールドショップ三菱の各店ではプラチナの現物を扱っていないと案内しています。会員制の積立の寄託残高からプラチナ地金500g・1kgを引き出す場合の引出手数料は無料としています（2026年4月1日のお知らせ）。</p>

        <h2>200万円を超える重さと税金</h2>
        <ul>
          <li><strong>支払調書</strong>: 国税庁によると、金地金等（金・白金地金、金貨・白金貨）の売買を業として行う者が、200万円超の対価を支払う場合は、税務署に支払調書を提出します（平成24年1月から）。最新のプラチナの店頭買取価格では<strong>約{Math.ceil(gram200)}g超</strong>が目安で、500gバー1本（約{yen(PT_B * 500)}円）は200万円を超えます（当サイトの計算）。</li>
          <li><strong>税金</strong>: 金地金等の譲渡益は、原則として総合課税の譲渡所得です。年50万円の特別控除があり、所有期間5年超は控除後の2分の1が課税の対象です（No.3105・No.3152）。</li>
        </ul>
        <p>支払調書とマイナンバーの手続きは<Link href="/articles/kin-200man-mynumber/">金を200万円以上売るとき</Link>、プラチナのジュエリーを売る場合の価格の考え方は<Link href="/articles/platinum-kaitori/">プラチナ買取相場</Link>をご覧ください。プラチナ地金以外の投資方法（積立・ETF・先物）の費用は<Link href="/articles/platinum-toushi/">プラチナ投資の方法と費用</Link>で比較しています。</p>

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
          <li>徳力本店「取扱品目・手数料」<a href="https://www.tokuriki-kanda.co.jp/goldetc/item/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>石福金属興業「プラチナ地金」<a href="https://retail.ishifuku-kinzoku.co.jp/product/platinum.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a></li>
          <li>三菱マテリアル「金地金・プラチナ地金・銀地金引出手数料および金地金販売手数料の改定について」（2026年4月1日）<a href="https://gold.mmc.co.jp/info/20260401_5.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「金地金（インゴット）」<a href="https://gold.mmc.co.jp/howto/products/bullion.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a></li>
          <li>徳力本店「貴金属材料（線・板・クラッド）物理特性（参考値）」<a href="https://www.tokuriki-kanda.co.jp/industrial/pdf/industrial-material-001.pdf" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>国税庁「金地金等に係る譲渡所得の調査状況」<a href="https://www.nta.go.jp/information/release/kokuzeicho/2015/shotoku_shohi/sanko04_05.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・タックスアンサー No.3105 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3152 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月19日。手数料・取扱サイズは変更される場合があります。お取引の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="platinum-ingot" relatedSlugs={["platinum-toushi", "platinum-kaitori", "platinum-toha", "ingot-toha", "kin-ingot-kounyusaki", "kin-200man-mynumber"]} />
      </article>
    </div>
  </>);
}
