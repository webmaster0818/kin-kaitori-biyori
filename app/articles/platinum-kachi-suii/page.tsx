import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261115: 「プラチナ 価値がなくなる」。上がる・下がる、売る・買うの判断は書かない。将来予測（WPIC の 2026年見通し等）は載せない。
   過去の公表値のみ: 田中貴金属 年次プラチナ価格推移・年次金価格推移（1973〜2025年）、WPIC Platinum Quarterly Q2 2026（2026-09-09 公表）の2025年実績、
   USGS Mineral Commodity Summaries 2026、田中貴金属「プラチナの価値」。確認日 2026-11-15。最新値は gold-spot-prices.json（毎朝更新） */
const TITLE = "プラチナは価値がなくなる？田中貴金属の53年分の価格と需要・供給の公表データで確認";
const URL = "https://gold-biyori.com/articles/platinum-kachi-suii/";
const DESC = "プラチナの価値について、田中貴金属の年次価格推移（1973〜2025年）、金との価格の逆転、WPICが公表した2025年の需要・供給、USGSの国別生産量を並べました。将来の価格の予測は行っていません。";

const PT_RETAIL = goldData.tanaka_official.pt_retail_per_g as number;
const PT_BUY = goldData.tanaka_official.pt_buyback_per_g as number;
const AU_RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const RATIO_NOW = PT_RETAIL / AU_RETAIL;

/* 田中貴金属 年次推移（参考小売価格・税抜 円/g の年平均）。比率は当サイトの計算 */
const YEARS: { y: number; pt: number; au: number }[] = [
  { y: 1980, pt: 5030, au: 4499 }, { y: 1990, pt: 2262, au: 1826 }, { y: 2000, pt: 1963, au: 1014 },
  { y: 2005, pt: 3245, au: 1619 }, { y: 2008, pt: 5409, au: 2937 }, { y: 2009, pt: 3717, au: 2951 },
  { y: 2011, pt: 4522, au: 4060 }, { y: 2012, pt: 4078, au: 4321 }, { y: 2014, pt: 4759, au: 4340 },
  { y: 2015, pt: 4205, au: 4564 }, { y: 2020, pt: 3114, au: 6122 }, { y: 2023, pt: 4437, au: 8834 },
  { y: 2024, pt: 4745, au: 11718 }, { y: 2025, pt: 6747, au: 17302 },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナの価値の推移", item: URL },
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
  { q: "プラチナは将来価値がなくなりますか？", a: "当サイトは将来の価格を予測していません。過去の公表値では、田中貴金属の年次データ（1973〜2025年・税抜）でプラチナの年間最低値が最も低かったのは1995年の1g 1,219円、年平均の最安も1995年の1,343円です。2025年の年平均は6,747円でした。" },
  { q: "プラチナが金より安くなったのはいつからですか？", a: "田中貴金属の年次データの年平均（税抜）で、プラチナが金を下回ったのは1981・1982・1984・1985・2012年と、2015年以降の毎年です。2025年はプラチナ6,747円・金17,302円で、プラチナは金の約39%でした（当サイトの計算）。" },
  { q: "プラチナは何に使われていますか？", a: "WPIC（ワールド・プラチナ・インベストメント・カウンシル）が2026年9月に公表した2025年の需要は、自動車3,039koz・宝飾2,214koz・工業2,266koz・投資1,152koz、合計8,671kozです。田中貴金属は、世界の需要の60%以上が自動車産業などの工業用素材だと説明しています。" },
  { q: "プラチナの価格が金より大きく動くのはなぜですか？", a: "田中貴金属は、プラチナは取引される市場規模が金より小さく、世界経済や社会情勢の影響を受けて価格が大きく変動することがあり、金より価格変動のリスクが大きいと説明しています。" },
];

export default function PlatinumKachiSuiiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-platinum.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-platinum-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナの価値の推移</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="プラチナ価格の推移のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナは価値がなくなるのか — 53年分の価格と需要・供給の公表データ</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月15日／最新の価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>「プラチナは価値がなくなる」という話題について、田中貴金属の<strong>1973〜2025年の年次価格</strong>、WPIC（ワールド・プラチナ・インベストメント・カウンシル）が公表した<strong>2025年の需要・供給</strong>、米国地質調査所（USGS）の<strong>国別生産量</strong>を並べました。当サイトは将来の価格を予測していません。</p>
        <ul>
          <li>最新の田中貴金属のプラチナ: 店頭小売価格 1g {yen(PT_RETAIL)}円・店頭買取価格 1g {yen(PT_BUY)}円（税込・{pubLabel}）</li>
          <li>年平均でプラチナが金を下回っているのは2015年以降の毎年。最新の小売価格ではプラチナは金の{(RATIO_NOW * 100).toFixed(0)}%</li>
          <li>1980年の年間最高値 1g 8,240円を初めて上回ったのは2025年（12,326円）＝45年後</li>
          <li>2025年の世界の需要は8,671koz（約270t）、うち自動車が35%（WPIC 2026年9月公表値・当サイトの計算）</li>
        </ul>

        <h2>プラチナと金の年平均価格（田中貴金属）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>プラチナ（円/g）</th><th>金（円/g）</th><th>プラチナ÷金</th></tr></thead>
            <tbody>
              {YEARS.map((r) => (
                <tr key={r.y}><td>{r.y}年</td><td>{r.pt.toLocaleString()}</td><td>{r.au.toLocaleString()}</td><td>{r.pt > r.au ? <strong>{(r.pt / r.au).toFixed(2)}</strong> : (r.pt / r.au).toFixed(2)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属工業「年次プラチナ価格推移」「年次金価格推移」（参考小売価格・税抜の年平均。2026年11月15日確認）。比率は当サイトの計算で、1を超える年（プラチナが金より高い年）を太字にしています。</p>
        <p>2000年代はプラチナが金の約2倍の年もありましたが、2015年以降は毎年金を下回り、2025年は約0.39倍でした。「価値がなくなる」という見方は、この金との差の広がりを指して語られることが多いと考えられます。一方で、プラチナの円建て年平均は2020年の3,114円から2025年の6,747円まで5年続けて上がっています。</p>

        <h3>大きく下がった年</h3>
        <ul>
          <li>1981年: 年平均 5,030円 → 3,241円（-35.6%）</li>
          <li>2009年: 年平均 5,409円 → 3,717円（-31.3%）。2008年の年間最高値は7,589円、年間最低値は2,454円</li>
          <li>1991年: 年平均 2,262円 → 1,690円（-25.3%）</li>
          <li>年平均の最安は1995年の1,343円、年間最低値の最安も1995年の1,219円（1973年以降）</li>
        </ul>
        <p>当サイトの日次記録（田中貴金属の店頭買取価格・税込）では、記録開始の2026年5月28日の 1g 10,570円から、11月3日の 7,717円まで-27.0%でした。</p>

        <h2>2025年の需要と供給（WPIC公表値）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>区分</th><th>2025年（koz）</th><th>トン換算</th><th>構成比（当サイトの計算）</th></tr></thead>
            <tbody>
              <tr><td>自動車</td><td>3,039</td><td>95t</td><td>35%</td></tr>
              <tr><td>宝飾</td><td>2,214</td><td>69t</td><td>26%</td></tr>
              <tr><td>工業</td><td>2,266</td><td>70t</td><td>26%</td></tr>
              <tr><td>投資</td><td>1,152</td><td>36t</td><td>13%</td></tr>
              <tr><td><strong>需要合計</strong></td><td>8,671</td><td>270t</td><td>—</td></tr>
              <tr><td>鉱山供給</td><td>5,561</td><td>173t</td><td>—</td></tr>
              <tr><td>リサイクル</td><td>1,669</td><td>52t</td><td>—</td></tr>
              <tr><td><strong>供給合計</strong></td><td>7,231</td><td>225t</td><td>—</td></tr>
              <tr><td>需給差</td><td>-1,440（供給不足）</td><td>-45t</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: WPIC「Platinum Quarterly Q2 2026」（2026年9月9日公表・データはMetals Focus）。WPICは過去の年の数字も改訂しており、2026年3月公表の Q4 2025 版では2025年の需給差は-1,082kozでした。WPICは2023年（-802koz）・2024年（-1,096koz）も供給不足と公表しています。koz＝1,000トロイオンス。</p>

        <h2>どこで採れるか（USGS）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>国</th><th>2024年</th><th>2025年（推定）</th></tr></thead>
            <tbody>
              <tr><td>南アフリカ</td><td>126t</td><td>120t</td></tr>
              <tr><td>ロシア</td><td>22t</td><td>20t</td></tr>
              <tr><td>ジンバブエ</td><td>18.4t</td><td>18t</td></tr>
              <tr><td>カナダ</td><td>5.7t</td><td>5t</td></tr>
              <tr><td>米国</td><td>3.01t</td><td>1.8t</td></tr>
              <tr><td>世界合計</td><td>179t</td><td>170t</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: U.S. Geological Survey「Mineral Commodity Summaries 2026 — Platinum-Group Metals」（2026年2月）。原表はkg。2025年は南アフリカが世界の約71%（当サイトの計算）。</p>
        <p>田中貴金属は、プラチナは地球上の埋蔵量が金より少なく、産出地域も南アフリカ・ロシアなどに限られると説明しています。プラチナそのものの性質や品位の表示は<Link href="/articles/platinum-toha/">プラチナとは</Link>でご説明しています。</p>

        <h2>手持ちのプラチナを売るときに確認できること</h2>
        <ul>
          <li>買取価格は田中貴金属などの公表価格×品位（Pt950・Pt900・Pt850）を基準に、業者ごとに決まります。<Link href="/articles/platinum-kaitori/">プラチナ買取相場</Link>・<Link href="/articles/platinum-pt900-kaitori/">Pt900の買取相場</Link>をご覧ください。</li>
          <li>最新の店頭買取価格 1g {yen(PT_BUY)}円で計算すると、Pt900 は1gあたり約{yen(PT_BUY * 0.9)}円、Pt850 は約{yen(PT_BUY * 0.85)}円（地金の値のみ・業者の手数料等は含まない・当サイトの計算）です。</li>
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
          <li>田中貴金属工業「年次プラチナ価格推移」<a href="https://gold.tanaka.co.jp/commodity/souba/y-platinum.php" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「年次金価格推移」<a href="https://gold.tanaka.co.jp/commodity/souba/y-gold.php" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>田中貴金属工業「プラチナの価値」<a href="https://gold.tanaka.co.jp/first/value/value_04.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>World Platinum Investment Council「Platinum Quarterly Q2 2026」（2026年9月9日）<a href="https://platinuminvestment.com/files/354715/WPIC_Platinum_Quarterly_Q2_2026_JA.pdf" target="_blank" rel="noopener noreferrer">platinuminvestment.com（日本語版PDF）</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Platinum-Group Metals」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-platinum-group.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月15日。過去の価格・需給は将来の価格を示すものではありません。プラチナは元本保証の商品ではありません。</p>

        <RelatedArticles currentSlug="platinum-kachi-suii" relatedSlugs={["platinum-toha", "platinum-kaitori", "platinum-pt900-kaitori", "kin-kakaku-boraku-kako", "kin-kaitori-souba", "platinum-toushi"]} />
      </article>
    </div>
  </>);
}
