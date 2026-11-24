import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（深夜04時の回）: 「金 インフレ」。投資判断の語＝勧める・勧めないを書かない。将来予測もしない。
   公表値（物価指数・金価格）を並べて計算し、費用（売買の価格差）と税（国税庁）を並べるだけ。
   出典: 総務省統計局「2020年基準 消費者物価指数 全国 2025年（令和7年）平均」表7（総合指数・前年比 2013〜2025年）、
   同「消費者物価指数のしくみと見方」（1970年の総合指数30.9）、田中貴金属「年次金価格推移」（参考小売価格・税抜の年平均）、
   田中貴金属 店頭価格（gold-spot-prices.json・毎朝更新）、国税庁 No.3161。確認日 2026-11-25。
   独自: 金の年平均価格を消費者物価指数で割った「2020年の物価で見た金価格」と、年ごとの物価と金価格の前年比の並び（当サイトの計算） */
const TITLE = "金とインフレの関係 — 消費者物価指数と金価格の13年分（2013〜2025年）を並べて計算";
const URL = "https://gold-biyori.com/articles/kin-inflation/";
const DESC = "金とインフレ（物価上昇）の関係を、総務省統計局の消費者物価指数と田中貴金属の年平均金価格（2013〜2025年）で計算しました。物価が上がったのに金価格が下がった年、2020年の物価に直した金価格、売買の価格差と売却時の税金（国税庁）も掲載しています。将来の予測や売買の判断は行っていません。";

const AU_R = goldData.tanaka_official.au_retail_per_g as number;
const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const pct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;

/* cpi＝総合指数（2020年＝100）、cpiYoy＝統計局公表の前年比（%）、gold＝田中貴金属 参考小売価格（税抜）の年平均（円/g） */
type Y = { y: number; cpi: number; cpiYoy: number; gold: number };
const YEARS: Y[] = [
  { y: 2013, cpi: 94.9, cpiYoy: 0.4, gold: 4453 },
  { y: 2014, cpi: 97.5, cpiYoy: 2.7, gold: 4340 },
  { y: 2015, cpi: 98.2, cpiYoy: 0.8, gold: 4564 },
  { y: 2016, cpi: 98.1, cpiYoy: -0.1, gold: 4396 },
  { y: 2017, cpi: 98.6, cpiYoy: 0.5, gold: 4576 },
  { y: 2018, cpi: 99.5, cpiYoy: 1.0, gold: 4543 },
  { y: 2019, cpi: 100.0, cpiYoy: 0.5, gold: 4918 },
  { y: 2020, cpi: 100.0, cpiYoy: 0.0, gold: 6122 },
  { y: 2021, cpi: 99.8, cpiYoy: -0.2, gold: 6402 },
  { y: 2022, cpi: 102.3, cpiYoy: 2.5, gold: 7649 },
  { y: 2023, cpi: 105.6, cpiYoy: 3.2, gold: 8834 },
  { y: 2024, cpi: 108.5, cpiYoy: 2.7, gold: 11718 },
  { y: 2025, cpi: 111.9, cpiYoy: 3.2, gold: 17302 },
];
const ROWS = YEARS.map((r, i) => ({ ...r, real: (r.gold / r.cpi) * 100, goldYoy: i === 0 ? null : (r.gold / YEARS[i - 1].gold - 1) * 100 }));
const A = ROWS[0];
const Z = ROWS[ROWS.length - 1];
const cpiX = Z.cpi / A.cpi;
const goldX = Z.gold / A.gold;
const realX = Z.real / A.real;
const upButDown = ROWS.filter((r) => r.goldYoy !== null && r.cpiYoy > 0 && r.goldYoy < 0);
const inflYears = ROWS.filter((r) => r.y >= 2022);
/* 100万円を2013年の年平均価格で金に換えた場合（売買の手数料・税は考えない当サイトの計算） */
const GRAM = 1_000_000 / A.gold;
const SPREAD = (1 - AU_B / AU_R) * 100;

const FAQS = [
  { q: "インフレになると金価格は上がりますか？", a: `必ず上がるとは言えません。統計局の消費者物価指数で物価が上がった年のうち、2014年（物価${pct(2.7)}）と2018年（物価${pct(1.0)}）は、田中貴金属の年平均金価格が前年より下がりました（当サイトの計算）。物価の上昇率が2.5%以上だった年は5回あり、2014年は金価格が下がり、2022〜2025年の4年は金価格が上がりました。金価格は為替やドル建ての国際価格でも動くため、物価だけでは決まりません。` },
  { q: "物価の上昇を考えると、金価格はどれだけ上がったことになりますか？", a: `2013年から2025年にかけて、消費者物価指数は${A.cpi}から${Z.cpi}へ約${cpiX.toFixed(2)}倍、金の年平均価格は${yen(A.gold)}円から${yen(Z.gold)}円へ約${goldX.toFixed(2)}倍になりました。金価格を物価指数で割って2020年の物価に直すと、約${realX.toFixed(2)}倍の計算です（当サイトの計算）。` },
  { q: "金は利息がつきますか？", a: "金地金や金貨を持っているだけでは利息や配当はつきません。値上がりした場合の売却益が収入になり、原則として総合課税の譲渡所得として課税されます（国税庁 No.3161）。" },
  { q: "金を買うときと売るときの価格差はどれくらいですか？", a: `最新の田中貴金属の公表値（${pubLabel}）では、金の店頭小売価格1g ${yen(AU_R)}円に対して店頭買取価格は${yen(AU_B)}円で、差は小売価格の約${SPREAD.toFixed(1)}%です。500g未満の地金にはこのほかに1本ごとの別途手数料がかかります。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金とインフレ", item: URL },
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

export default function KinInflationPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-souba.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-souba-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金とインフレ</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金価格と物価の関係のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金とインフレ — 消費者物価指数と金価格の13年分</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／出典の確認日: 2026年11月25日／店頭価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>2013年から2025年にかけて、総務省統計局の<strong>消費者物価指数（総合）は約{cpiX.toFixed(2)}倍</strong>、田中貴金属の<strong>金の年平均価格は約{goldX.toFixed(2)}倍</strong>になりました。金価格を物価指数で割り、2020年の物価に直しても約{realX.toFixed(2)}倍です（当サイトの計算）。ただし、年ごとに見ると<strong>物価が上がったのに金価格が下がった年が{upButDown.length}回</strong>（{upButDown.map((r) => `${r.y}年`).join("・")}）あり、物価と金価格は同じ向きに動くとは限りません。金価格は為替やドル建ての国際価格でも大きく動きます。</p>

        <h2>物価指数と金価格の年ごとの比較（2013〜2025年）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>消費者物価指数（2020年＝100）</th><th>物価の前年比</th><th>金の年平均価格（円/g・税抜）</th><th>金価格の前年比</th><th>2020年の物価で見た金価格</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.y}>
                  <td>{r.y}年</td>
                  <td>{r.cpi.toFixed(1)}</td>
                  <td>{pct(r.cpiYoy)}</td>
                  <td>{r.gold.toLocaleString()}</td>
                  <td>{r.goldYoy === null ? "—" : <strong>{pct(r.goldYoy)}</strong>}</td>
                  <td>{yen(r.real)}円</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 総務省統計局「2020年基準 消費者物価指数 全国 2025年（令和7年）平均」表7（総合指数・前年比）、田中貴金属「年次金価格推移」（田中貴金属参考小売価格・税抜の年平均）。金価格の前年比と「2020年の物価で見た金価格」（＝金の年平均価格÷物価指数×100）は当サイトの計算です。</p>

        <p>表から読み取れることは次のとおりです。</p>
        <ul>
          <li><strong>物価が上がり金価格が下がった年</strong>: {upButDown.map((r) => `${r.y}年（物価${pct(r.cpiYoy)}・金${pct(r.goldYoy as number)}）`).join("、")}。</li>
          <li><strong>物価の上昇が続いた2022年以降</strong>: {inflYears.map((r) => `${r.y}年（物価${pct(r.cpiYoy)}・金${pct(r.goldYoy as number)}）`).join("、")}。この4年は、いずれも金価格が物価を大きく上回って上がりました。2022〜2024年は円安が進んだ年でもあり、円建て金価格の上昇をドル建ての動きと為替に分けた計算は<Link href="/articles/enyasu-kin/">円安と金価格</Link>で分けて計算しています。</li>
          <li><strong>2020年</strong>: 物価は前年比0.0%で横ばいでしたが、金価格は{pct(ROWS[7].goldYoy as number)}上がりました。物価が動かない年にも金価格は大きく動いています。</li>
        </ul>
        <p>2013年の年平均価格で100万円分の金（約{GRAM.toFixed(1)}g）を買ったとすると、2025年の年平均価格では約{yen((GRAM * Z.gold) / 10000)}万円、同じ期間に物価に合わせて100万円が必要とする額は約{yen((1_000_000 * cpiX) / 10000)}万円です（売買の価格差・手数料・税は含まない当サイトの計算）。統計局は、消費者物価指数は世帯が買う財・サービスに限った物価の水準で、貨幣の価値をそのまま表すものではないと注意しています。</p>

        <h2>金を持つ場合の費用と税金</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td>売買の価格差</td><td>最新の田中貴金属の店頭価格で、小売1g {yen(AU_R)}円・買取1g {yen(AU_B)}円（差は小売価格の約{SPREAD.toFixed(1)}%・{pubLabel}）</td></tr>
              <tr><td>小型の地金の別途手数料</td><td>田中貴金属の場合、500g未満の地金は購入時に1本ごと、売却時に1件の合計重量ごとに別途手数料（例: 5g・10g・20gの購入は8,800円）</td></tr>
              <tr><td>利息・配当</td><td>金地金・金貨を保有しているだけでは生じない</td></tr>
              <tr><td>売却益の税金</td><td>原則、総合課税の譲渡所得。特別控除50万円。所有期間5年超は控除後の金額の2分の1が課税対象（国税庁 No.3161）</td></tr>
              <tr><td>金投資口座・金貯蓄口座の利益</td><td>金融類似商品として20.315%の源泉分離課税（国税庁 No.3161）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属「本日の地金価格」「売買価格と別途手数料」、国税庁「No.3161 金地金の譲渡による所得」（令和8年4月1日現在法令等）。純金積立・投資信託・ETFの費用の比較は<Link href="/articles/kin-toushin-hiyou-hikaku/">金の投資信託・ETF・積立・地金の費用比較</Link>に、売却時の税金の計算は<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>にまとめています。</p>

        <h2>このページで扱っていないこと</h2>
        <ul>
          <li><strong>2012年以前</strong>: 統計局は1970年の総合指数を30.9（2020年＝100）としていますが、本ページの年ごとの表は2025年平均の公表資料に載っている2013年以降に限っています。1973年以降の金価格の推移は<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>をご覧ください。</li>
          <li><strong>今後の物価と金価格</strong>: 予測は行っていません。また、金を買うべきか・売るべきかの判断も行っていません。</li>
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
          <li>総務省統計局「2020年基準 消費者物価指数 全国 2025年（令和7年）平均」<a href="https://www.stat.go.jp/data/cpi/sokuhou/nen/index-z.html" target="_blank" rel="noopener noreferrer">stat.go.jp</a></li>
          <li>総務省統計局「消費者物価指数のしくみと見方（2020年基準）」<a href="https://www.stat.go.jp/data/cpi/2020/mikata/index.html" target="_blank" rel="noopener noreferrer">stat.go.jp</a></li>
          <li>田中貴金属「年次金価格推移」<a href="https://gold.tanaka.co.jp/commodity/souba/y-gold.php" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>田中貴金属「本日の地金価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>国税庁「No.3161 金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。本ページは過去の公表値をもとにした計算で、金の売買や投資を勧めるものではありません。金は元本保証の商品ではなく、価格は変動します。</p>

        <RelatedArticles currentSlug="kin-inflation" relatedSlugs={["enyasu-kin", "kin-kakaku-boraku-kako", "kin-toushin-hiyou-hikaku", "kin-kaitori-zeikin", "kin-honisei", "kin-kaitori-souba"]} />
      </article>
    </div>
  </>);
}
