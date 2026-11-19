import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261117: 「金 インゴット どこで買う」。出典: 田中貴金属「売買価格と別途手数料」、三菱マテリアル「金地金（インゴット）」
   「金地金・プラチナ地金・銀地金引出手数料および金地金販売手数料の改定について」（2026-04-01）・「金価格推移」、
   石福金属興業「金地金」、徳力本店「取扱品目・手数料」。確認日 2026-11-17。
   各社の11/17の価格は当日確認した値（固定）。上乗せ率の表は gold-spot-prices.json（毎朝更新）の田中の小売価格で計算 */
const TITLE = "金のインゴットはどこで買う？地金商4社のサイズ別手数料と購入額を公式情報で比較";
const URL = "https://gold-biyori.com/articles/kin-ingot-kounyusaki/";
const DESC = "金のインゴット（金地金）を買える場所と、田中貴金属・三菱マテリアル・石福金属興業・徳力本店のサイズ別の販売手数料を公式情報で比較しました。同じ日の小売価格の差と、手数料が価格に占める割合も計算しています。";

const AU_RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 金地金の販売手数料（地金1本あたり・税込）。null＝そのサイズの取り扱いなし（公式の一覧に記載なし）。2026-11-17 確認 */
type Fee = number | null;
const SIZES = ["2.5g", "5g", "10g", "20g", "30g", "50g", "100g", "200g", "300g", "500g", "1kg"] as const;
const FEES: { name: string; fees: Record<(typeof SIZES)[number], Fee> }[] = [
  { name: "田中貴金属", fees: { "2.5g": null, "5g": 8800, "10g": 8800, "20g": 8800, "30g": null, "50g": 13200, "100g": 16500, "200g": 16500, "300g": 16500, "500g": 0, "1kg": 0 } },
  { name: "三菱マテリアル", fees: { "2.5g": null, "5g": 8800, "10g": 8800, "20g": 8800, "30g": null, "50g": null, "100g": 16500, "200g": null, "300g": null, "500g": 0, "1kg": 0 } },
  { name: "石福金属興業", fees: { "2.5g": 4400, "5g": 6600, "10g": 6600, "20g": 6600, "30g": null, "50g": 8800, "100g": 11000, "200g": 11000, "300g": null, "500g": 0, "1kg": 0 } },
  { name: "徳力本店", fees: { "2.5g": null, "5g": 3850, "10g": 3850, "20g": 3850, "30g": 5500, "50g": 5500, "100g": 6600, "200g": 6600, "300g": 6600, "500g": 0, "1kg": 0 } },
];
const feeCell = (f: Fee) => (f === null ? "—" : f === 0 ? "無料" : `${f.toLocaleString()}円`);

/* 2026-11-17 に各社公式で確認した金の店頭小売価格（税込・1g） */
const PRICE_1117 = [
  { name: "田中貴金属", p: 21935, note: "9:30公表" },
  { name: "三菱マテリアル", p: 21913, note: "店頭価格・10:00更新" },
  { name: "徳力本店", p: 21957, note: "9:30発表" },
];
const g10 = PRICE_1117.map((c) => ({ ...c, total10: c.p * 10 + (FEES.find((f) => f.name === c.name)!.fees["10g"] as number), total100: c.p * 100 + (FEES.find((f) => f.name === c.name)!.fees["100g"] as number), total1k: c.p * 1000 }));
const maxP = Math.max(...PRICE_1117.map((c) => c.p));
const minP = Math.min(...PRICE_1117.map((c) => c.p));

/* 上乗せ率＝手数料÷（田中の最新の小売価格×重さ）。同じ価格で比べるため、全社とも田中の価格を使う（当サイトの計算） */
const RATE_SIZES: { label: (typeof SIZES)[number]; g: number }[] = [
  { label: "5g", g: 5 }, { label: "10g", g: 10 }, { label: "20g", g: 20 }, { label: "50g", g: 50 }, { label: "100g", g: 100 },
];

const FAQS = [
  { q: "金のインゴットはどこで買えますか？", a: "田中貴金属・三菱マテリアル・石福金属興業・徳力本店などの地金商の直営店のほか、各社の取扱店（特約店）、各社のインターネット取引でも購入できます。取扱店では手数料が地金商の価格と異なる場合があると徳力本店は案内しています。" },
  { q: "どの会社でも手数料は同じですか？", a: "異なります。2026年11月17日に各社の公式で確認した10gの金地金の販売手数料は、田中貴金属と三菱マテリアルが8,800円、石福金属興業が6,600円、徳力本店が3,850円（いずれも税込・1本あたり）でした。500gと1kgは4社とも無料です。" },
  { q: "金の小売価格は会社ごとに違いますか？", a: "各社がそれぞれ公表しているため、同じ日でも差があります。2026年11月17日は、田中貴金属21,935円、三菱マテリアル21,913円、徳力本店21,957円（1g・税込）でした。1kgでは最大4万4,000円の差になります（当サイトの計算）。" },
  { q: "小さいインゴットを何本も買うのと、大きいインゴットを1本買うのはどちらが安いですか？", a: "販売手数料は地金1本ごとにかかるため、同じ重さなら本数が少ないほど手数料の合計は少なくなります。たとえば田中貴金属で100gを買う場合、100gを1本なら16,500円、10gを10本なら88,000円です（当サイトの計算）。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金のインゴットはどこで買う？", item: URL },
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

export default function KinIngotKounyusakiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-ingot-100g.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-ingot-100g-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金のインゴットはどこで買う？</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金のインゴットの購入先の比較のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金のインゴットはどこで買う？ — 地金商4社の手数料と購入額の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月17日／各社の手数料・価格は2026年11月17日に公式サイトで確認</p>

        <p>金のインゴット（金地金）は、<strong>地金商の直営店・取扱店（特約店）・インターネット取引</strong>で購入できます。購入額は「小売価格×重さ＋販売手数料」で決まり、<strong>500g未満のインゴットにかかる販売手数料は会社によって異なります</strong>。2026年11月17日に確認した10gの手数料は、田中貴金属・三菱マテリアル8,800円、石福金属興業6,600円、徳力本店3,850円（税込・1本あたり）で、500gと1kgは4社とも無料です。当サイトは特定の購入先をおすすめする立場ではなく、公式に公表されている手数料と価格を並べています。</p>

        <h2>4社のサイズ別の販売手数料</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th>{FEES.map((c) => <th key={c.name}>{c.name}</th>)}</tr></thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s}><td>{s}</td>{FEES.map((c) => <td key={c.name}>{feeCell(c.fees[s])}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">金地金1本あたり・税込。「—」は各社の公式の一覧に記載がないサイズです。徳力本店は1gカード（手数料1,430円）も扱っています。三菱マテリアルの手数料は2026年5月11日契約分からの改定後の額（5g・10g・20gは6,600円→8,800円、100gは8,250円→16,500円）です。徳力本店は「弊社地金の取扱店では、手数料が弊社価格と異なる場合もございます」と案内しています。</p>

        <h2>同じ日の小売価格と購入額（2026年11月17日）</h2>
        <p>小売価格（1gあたり）は各社がそれぞれ公表しており、同じ日でも差があります。11月17日の公表値で、10g・100g・1kgを1本買う場合の購入額を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>会社</th><th>小売価格（1g・税込）</th><th>10g（手数料込み）</th><th>100g（手数料込み）</th><th>1kg</th></tr></thead>
            <tbody>
              {g10.map((c) => (
                <tr key={c.name}><td>{c.name}</td><td>{yen(c.p)}円（{c.note}）</td><td>{yen(c.total10)}円</td><td>{yen(c.total100)}円</td><td>{yen(c.total1k)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">購入額＝小売価格×重さ＋販売手数料（当サイトの計算）。石福金属興業の当日の価格は公式サイトの表示から取得できなかったため掲載していません。価格は1日のうちに変わる場合があります。</p>
        <p>この日の小売価格の差は1gあたり最大{yen(maxP - minP)}円で、1kgでは{yen((maxP - minP) * 1000)}円になります。小さいサイズでは手数料の差のほうが大きく、10gでは価格を確認できた3社のうち徳力本店の購入額が最も少ない結果でした。比べる場合は、<strong>同じ日・同じ時刻の価格と手数料を合計した額</strong>で比べる必要があります。</p>

        <h2>手数料が価格に占める割合（毎朝更新）</h2>
        <p>手数料の重さは、サイズが小さいほど大きくなります。最新の田中貴金属の小売価格（1g {yen(AU_RETAIL)}円・{pubLabel}）を4社共通の基準にして、地金代金に対する手数料の割合を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>地金代金（田中の価格）</th>{FEES.map((c) => <th key={c.name}>{c.name}</th>)}</tr></thead>
            <tbody>
              {RATE_SIZES.map((s) => (
                <tr key={s.label}><td>{s.label}</td><td>{yen(AU_RETAIL * s.g)}円</td>{FEES.map((c) => { const f = c.fees[s.label]; return <td key={c.name}>{f === null ? "—" : `+${((f / (AU_RETAIL * s.g)) * 100).toFixed(1)}%`}</td>; })}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">割合＝販売手数料÷（田中貴金属の店頭小売価格×重さ）（当サイトの計算）。各社の実際の小売価格は上の表のとおり少しずつ異なります。</p>

        <h2>購入できる場所の種類</h2>
        <ul>
          <li><strong>地金商の直営店</strong>: 田中貴金属は直営店と特約店を店舗検索で公開しています。三菱マテリアルの「ゴールドショップ三菱」は金の現物のみを扱い、プラチナと銀の現物は扱っていません。</li>
          <li><strong>取扱店（特約店）</strong>: 地金商の地金を扱う店舗です。手数料や価格が地金商と異なる場合があるため、購入前に確認が必要です。</li>
          <li><strong>インターネット取引</strong>: 田中貴金属（インターネットで地金・コイン購入）、三菱マテリアル（オンライン金地金取引）、石福金属興業（ネットショップ）がインターネットでの購入を案内しています。</li>
          <li><strong>積立からの引出し</strong>: 純金積立で貯めた金を地金で受け取る方法です。三菱マテリアルでは、引出手数料も販売手数料と同じ額（5g・10g・20gは8,800円、100gは16,500円、500g・1kgは無料）に改定されています。積立の費用は<Link href="/articles/junkin-tsumitate-hikaku/">純金積立の手数料比較</Link>にまとめています。</li>
        </ul>

        <h2>購入先が売却に関係する点</h2>
        <p>三菱マテリアルは、同社の金地金はいずれも品位99.99%の純金で、ロンドン貴金属市場協会とニューヨーク商品取引所に登録された刻印が品質を保証していると説明しています。徳力本店は「他社地金の買取金額は異なる場合もあります」としており、売却するときは製造した会社や刻印によって扱いが変わる場合があります。購入時の計算書・保証書は、売却時の確認と税金の計算（取得費）に使うため保管しておく必要があります。手数料のほかに確認しておきたい点（本人確認・現金の上限・税金・勧誘の手口）は<Link href="/articles/kin-kounyu-chuiten/">金を購入するときの注意点</Link>、サイズごとの寸法は<Link href="/articles/ingot-toha/">インゴットとは</Link>をご覧ください。</p>

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
          <li>田中貴金属工業「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>三菱マテリアル「金地金（インゴット）」<a href="https://gold.mmc.co.jp/howto/products/bullion.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「金地金・プラチナ地金・銀地金引出手数料および金地金販売手数料の改定について」（2026年4月1日）<a href="https://gold.mmc.co.jp/info/20260401_5.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「金価格推移」<a href="https://gold.mmc.co.jp/market/gold-price/" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a></li>
          <li>石福金属興業「金地金」<a href="https://retail.ishifuku-kinzoku.co.jp/product/gold.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a></li>
          <li>徳力本店「取扱品目・手数料」<a href="https://www.tokuriki-kanda.co.jp/goldetc/item/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月17日。手数料・価格は変更される場合があります。ご購入の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="kin-ingot-kounyusaki" relatedSlugs={["kin-kounyu-chuiten", "ingot-toha", "kin-nobebo-kaitori", "junkin-tsumitate-hikaku", "kin-kaitori-zeikin", "ingot-bunkatsu"]} />
      </article>
    </div>
  </>);
}
