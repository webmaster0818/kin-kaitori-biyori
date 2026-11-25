import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261116: 「金 密度」。出典: 田中貴金属（TANAKA）貴金属元素データ Au・Pt・Pd・Ag（密度 293K）、
   徳力本店「貴金属材料の物理特性（参考値）」、田中貴金属「金地金」（寸法）、USGS Mineral Commodity Summaries 2026: Gold。確認日 2026-11-16。
   体積・水の量・立方体の一辺などはすべて当サイトの計算 */
const TITLE = "金の密度は19.32g/cm³ — 重さと体積の換算表・他の貴金属との比較";
const URL = "https://gold-biyori.com/articles/kin-mitsudo/";
const DESC = "金の密度（19.32g/cm³）を田中貴金属の元素データで確認し、1g〜1kgの体積、プラチナ・パラジウム・銀との比較、水に沈めて確かめる方法の精度、2025年の世界の産金量の体積を計算しました。";

const AU_BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const D_AU = 19.32;
const METALS = [
  { name: "プラチナ（Pt）", d: 21.45 },
  { name: "金（Au）", d: 19.32 },
  { name: "パラジウム（Pd）", d: 12.02 },
  { name: "銀（Ag）", d: 10.5 },
];
const WEIGHTS = [1, 10, 100, 500, 1000];
/* 2025年の世界の金鉱山生産 3,300t（USGS MCS 2026） */
const WORLD_T = 3300;
const worldM3 = (WORLD_T * 1e6) / D_AU / 1e6;
const cube = (v: number) => Math.cbrt(v);

const FAQS = [
  { q: "金の密度はいくつですか？", a: "田中貴金属の貴金属元素データでは、金の密度は19.32（293K＝約20℃）です。徳力本店の物性表も19.32g/cm³としています。1cm³の純金は約19.32gです。" },
  { q: "金とプラチナはどちらが重いですか？", a: "同じ体積ならプラチナのほうが重くなります。田中貴金属の元素データでは、プラチナの密度は21.45、金は19.32で、プラチナは金より約11%重い計算です（当サイトの計算）。" },
  { q: "K18など合金の密度はいくつですか？", a: "合金の密度は、金以外に混ぜる金属（割り金）の種類と割合で変わるため、品位だけでは1つの値に決まりません。当サイトでは、公的な資料で確認できた純金属の値のみを掲載しています。" },
  { q: "家庭で密度を測って本物か確かめられますか？", a: "原理的には可能ですが、小さな製品では難しくなります。10gの純金が押しのける水は約0.52gで、0.1g単位のキッチンスケールでは測定の誤差が大きくなります（当サイトの計算）。確実に確認したい場合は、買取店の分析機器による査定をご利用ください。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金の密度", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-16", dateModified: "2026-11-16",
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

export default function KinMitsudoPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-omosa.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-omosa-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の密度</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金の密度の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金の密度 — 19.32g/cm³から求める体積と重さ</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月16日／金価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p><strong>金の密度は19.32g/cm³</strong>です（田中貴金属の貴金属元素データ・293K）。1cm³の純金の重さは約19.32gで、水（約1g/cm³）の約19倍にあたります。1cm³の純金を最新の田中貴金属の店頭買取価格（1g {yen(AU_BUY)}円・{pubLabel}）で換算すると、約{yen(D_AU * AU_BUY)}円です（当サイトの計算）。</p>

        <h2>重さ別の体積と立方体にしたときの一辺</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>純金の重さ</th><th>体積（当サイトの計算）</th><th>立方体にしたときの一辺</th></tr></thead>
            <tbody>
              {WEIGHTS.map((g) => (
                <tr key={g}><td>{g >= 1000 ? "1kg" : `${g}g`}</td><td>{(g / D_AU).toFixed(3)}cm³</td><td>約{(cube(g / D_AU) * 10).toFixed(1)}mm</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">体積＝重さ÷19.32。1kgの純金の体積は約{(1000 / D_AU).toFixed(1)}cm³で、一辺 約{(cube(1000 / D_AU) * 10).toFixed(0)}mmの立方体になります。田中貴金属が示す1kgの金地金の寸法（目安）は113×52×10mmで、この直方体の体積（約58.8cm³）は金の体積より大きくなります。寸法は目安として示された外形の値です。</p>

        <h2>他の貴金属との比較</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>金属</th><th>密度（g/cm³）</th><th>金を1としたときの比（当サイトの計算）</th><th>10gの体積（当サイトの計算）</th></tr></thead>
            <tbody>
              {METALS.map((m) => (
                <tr key={m.name}><td>{m.name}</td><td>{m.d.toFixed(2)}</td><td>{(m.d / D_AU).toFixed(2)}</td><td>{(10 / m.d).toFixed(3)}cm³</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">密度は田中貴金属（TANAKA）「貴金属元素データ」の密度（293K）の値です。徳力本店の物性表（参考値）も、金19.32・プラチナ21.45・パラジウム12.02・銀10.5g/cm³としています。</p>
        <p>同じ大きさなら、プラチナは金より約{((21.45 / D_AU - 1) * 100).toFixed(0)}%重く、銀は金の約{((10.5 / D_AU) * 100).toFixed(0)}%の重さです。プラチナの性質は<Link href="/articles/platinum-toha/">プラチナとは</Link>、パラジウムは<Link href="/articles/palladium-toha/">パラジウムとは</Link>でご説明しています。</p>

        <h2>水に沈めて密度を確かめる方法の精度</h2>
        <p>物を水に沈めると、その体積と同じ量の水を押しのけます。重さを体積で割れば密度が求められるため、金かどうかの目安になります。ただし、小さな製品では押しのける水の量がわずかです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>試料</th><th>押しのける水の量（当サイトの計算）</th><th>0.1g単位のはかりで読む場合の誤差の目安</th></tr></thead>
            <tbody>
              <tr><td>純金 10g</td><td>約{(10 / D_AU).toFixed(2)}g</td><td>±0.05gの読み取り誤差で、密度は約{(10 / (10 / D_AU + 0.05)).toFixed(1)}〜{(10 / (10 / D_AU - 0.05)).toFixed(1)}と幅が出る</td></tr>
              <tr><td>純金 100g</td><td>約{(100 / D_AU).toFixed(2)}g</td><td>同じ誤差で、密度は約{(100 / (100 / D_AU + 0.05)).toFixed(1)}〜{(100 / (100 / D_AU - 0.05)).toFixed(1)}</td></tr>
              <tr><td>銀 10g（比較）</td><td>約{(10 / 10.5).toFixed(2)}g</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">水の密度を1g/cm³として計算。宝石・空洞・接着剤などを含む製品では、この方法で金の割合は分かりません。</p>
        <p>10g程度の製品では密度の幅が大きく、合金（K18など）との区別は困難です。偽物の見分け方は<Link href="/articles/kin-nisemono-mikata/">金の偽物の見分け方</Link>、重さの量り方は<Link href="/articles/kin-omosa-hakarikata/">金の重さの量り方</Link>をご覧ください。</p>

        <h2>1年間に採れる金の体積</h2>
        <p>米国地質調査所（USGS）によると、2025年の世界の金鉱山生産は推定3,300tです。密度19.32で体積に換算すると約{worldM3.toFixed(0)}m³で、一辺 約{cube(worldM3).toFixed(1)}mの立方体に収まります（当サイトの計算）。国別の生産量と埋蔵量は<Link href="/articles/kin-maizoryo/">金の埋蔵量</Link>にまとめています。</p>

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
          <li>田中貴金属（TANAKA）「貴金属元素データ」Au <a href="https://tanaka-preciousmetals.com/jp/library/element/au" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Pt <a href="https://tanaka-preciousmetals.com/jp/library/element/pt" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Pd <a href="https://tanaka-preciousmetals.com/jp/library/element/pd" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Ag <a href="https://tanaka-preciousmetals.com/jp/library/element/ag" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>徳力本店「貴金属材料（線・板・クラッド）物理特性（参考値）」<a href="https://www.tokuriki-kanda.co.jp/industrial/pdf/industrial-material-001.pdf" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>田中貴金属工業「金地金」（寸法）<a href="https://gold.tanaka.co.jp/commodity/gold_bar.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月16日。</p>

        <RelatedArticles currentSlug="kin-mitsudo" relatedSlugs={["kin-toha", "kin-nisemono-mikata", "kin-omosa-hakarikata", "ingot-toha", "platinum-toha", "kin-jundo-mikata", "kinpaku-toha", "kin-dekikata", "archimedes-kin"]} />
      </article>
    </div>
  </>);
}
