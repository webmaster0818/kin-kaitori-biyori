import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261124（深夜02時の回）: 「円安 金」。将来の予測・売買の判断は書かない。公表値を並べて計算するだけ。
   出典: 世界銀行 Commodity Price Data（The Pink Sheet）月次 Gold（$/troy oz・2026年11月3日更新版・2011年1月〜2026年10月）、
   日本銀行 時系列統計データ FM08「東京市場 ドル・円 スポット 17時時点/月中平均」（FXERM07・API 取得 2026-11-24）、
   計量単位令 別表第六（トロイオンス＝0.0311035kg）。確認日 2026-11-24。
   円換算（月ごとに ドル建て×ドル円÷31.1035 → 年平均）、前年比、要因の割合はすべて当サイトの計算。
   国内の店頭価格（消費税・手数料を含む）とは一致しない */
const TITLE = "円安で金価格はどれだけ上がった？ドル建て金価格とドル円の15年分で、円建ての値上がりを要因ごとに分解";
const URL = "https://gold-biyori.com/articles/enyasu-kin/";
const DESC = "円安と金価格の関係を、世界銀行の金価格（ドル/トロイオンス）と日本銀行のドル円レート（月中平均）の2012〜2026年の公表値で整理しました。円建て1gあたりの値、前年比をドル建ての動きと為替の動きに分けた表、円安でも円建てが下がった月を掲載しています。将来の予測は行っていません。";

const TROY = 31.1035;
/* 年平均（2026年は1〜10月）。usd＝世界銀行 Gold の月次の平均、fx＝日銀 ドル円 月中平均の平均、
   jpy＝月ごとに usd×fx÷31.1035 を計算した値の平均（円/g・当サイトの計算） */
type Y = { y: number; usd: number; fx: number; jpy: number; part?: string };
const YEARS: Y[] = [
  { y: 2011, usd: 1569.2, fx: 79.78, jpy: 4015 },
  { y: 2012, usd: 1669.6, fx: 79.79, jpy: 4283 },
  { y: 2013, usd: 1411.7, fx: 97.6, jpy: 4415 },
  { y: 2014, usd: 1265.6, fx: 105.84, jpy: 4299 },
  { y: 2015, usd: 1160.8, fx: 121.02, jpy: 4514 },
  { y: 2016, usd: 1249.0, fx: 108.84, jpy: 4359 },
  { y: 2017, usd: 1257.5, fx: 112.16, jpy: 4534 },
  { y: 2018, usd: 1269.2, fx: 110.4, jpy: 4502 },
  { y: 2019, usd: 1392.6, fx: 109.01, jpy: 4878 },
  { y: 2020, usd: 1770.2, fx: 106.78, jpy: 6071 },
  { y: 2021, usd: 1799.6, fx: 109.78, jpy: 6351 },
  { y: 2022, usd: 1800.8, fx: 131.37, jpy: 7583 },
  { y: 2023, usd: 1942.8, fx: 140.51, jpy: 8779 },
  { y: 2024, usd: 2387.6, fx: 151.5, jpy: 11632 },
  { y: 2025, usd: 3441.5, fx: 149.65, jpy: 16575 },
  { y: 2026, usd: 4507.3, fx: 158.44, jpy: 22948, part: "1〜10月" },
];
/* 2026年の月次（世界銀行 Gold・日銀 月中平均）。jpy は当サイトの計算 */
const MONTHS = [
  { m: 1, usd: 4753, fx: 156.79 },
  { m: 2, usd: 5020, fx: 155.23 },
  { m: 3, usd: 4856, fx: 158.64 },
  { m: 4, usd: 4721, fx: 159.28 },
  { m: 5, usd: 4587, fx: 158.34 },
  { m: 6, usd: 4228, fx: 160.69 },
  { m: 7, usd: 4073, fx: 162.45 },
  { m: 8, usd: 4411, fx: 158.81 },
  { m: 9, usd: 4319, fx: 156.23 },
  { m: 10, usd: 4105, fx: 157.89 },
].map((r) => ({ ...r, jpy: (r.usd * r.fx) / TROY }));

const ch = (a: number, b: number) => (a / b - 1) * 100;
const pct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;
const yen = (n: number) => Math.round(n).toLocaleString();

const ROWS = YEARS.slice(1).map((r, i) => {
  const p = YEARS[i];
  return { ...r, dUsd: ch(r.usd, p.usd), dFx: ch(r.fx, p.fx), dJpy: ch(r.jpy, p.jpy) };
});
/* 期間全体（2012年→2026年1〜10月）を対数で分けた割合（当サイトの計算） */
const A = YEARS[1];
const Z = YEARS[YEARS.length - 1];
const mUsd = Z.usd / A.usd;
const mFx = Z.fx / A.fx;
const mJpy = Z.jpy / A.jpy;
const shareFx = (Math.log(mFx) / (Math.log(mUsd) + Math.log(mFx))) * 100;
/* 円安（ドル円が上昇）なのに円建てが下がった月・円高なのに上がった月 */
const MCH = MONTHS.slice(1).map((r, i) => ({ m: r.m, dUsd: ch(r.usd, MONTHS[i].usd), dFx: ch(r.fx, MONTHS[i].fx), dJpy: ch(r.jpy, MONTHS[i].jpy) }));
const weakButDown = MCH.filter((r) => r.dFx > 0 && r.dJpy < 0);
const Y2013 = ROWS.find((r) => r.y === 2013)!;
const Y2016 = ROWS.find((r) => r.y === 2016)!;
const Y2022 = ROWS.find((r) => r.y === 2022)!;
const Y2025 = ROWS.find((r) => r.y === 2025)!;

const FAQS = [
  { q: "なぜ円安になると金価格が上がるのですか？", a: "金の国際価格はドル建て（1トロイオンスあたりのドル）で決まり、円建ての価格はおおむね「ドル建て価格×ドル円レート÷31.1035」で換算されるためです。ドル建て価格が同じでも、1ドルが100円から150円になれば、円建ての値は1.5倍になります。" },
  { q: "円安なら金価格は必ず上がりますか？", a: `必ずではありません。円建ての値はドル建て価格と為替の両方で動きます。たとえば2013年はドル円が年平均で${pct(Y2013.dFx)}の円安でしたが、ドル建て金価格が${pct(Y2013.dUsd)}だったため、円建ては${pct(Y2013.dJpy)}にとどまりました（当サイトの計算）。2026年も月単位では、円安なのに円建てが下がった月が${weakButDown.length}回ありました。` },
  { q: "円高になると金価格は下がりますか？", a: `ドル建て価格が同じなら下がります。2016年はドル建てが${pct(Y2016.dUsd)}上がりましたが、ドル円が${pct(Y2016.dFx)}の円高になり、円建ては${pct(Y2016.dJpy)}でした。一方2025年は${pct(Y2025.dFx)}のやや円高でも、ドル建てが${pct(Y2025.dUsd)}上がったため、円建ては${pct(Y2025.dJpy)}でした。` },
  { q: "この表の円建ての値は、店頭の金価格と同じですか？", a: "同じではありません。国際価格を為替で換算しただけの値で、国内の店頭価格には消費税や販売・買取の手数料などが加わります。実際の店頭価格は金融機関や地金商の公表値をご確認ください。当サイトの金買取相場のページでは、田中貴金属の公表値を毎朝記録しています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "円安と金価格", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-24", dateModified: "2026-11-24",
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

export default function EnyasuKinPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-souba.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-souba-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">円安と金価格</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="円安と金価格の関係のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">円安と金価格 — ドル建て金価格とドル円の15年分で見る、円建ての値上がりの内訳</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月24日／出典の確認日: 2026年11月24日</p>

        <p>金の国際価格はドルで決まるため、円建ての金価格は<strong>「ドル建て価格 × ドル円レート ÷ 31.1035」</strong>でおおむね決まります。世界銀行の金価格と日本銀行のドル円レートで計算すると、円建ての1gあたりの値は2012年の年平均{yen(A.jpy)}円から2026年1〜10月の平均{yen(Z.jpy)}円へ<strong>約{mJpy.toFixed(1)}倍</strong>になりました。この間にドル建ては約{mUsd.toFixed(1)}倍、ドル円は{A.fx}円から{Z.fx}円（約{mFx.toFixed(1)}倍の円安）で、値上がりのうち<strong>約{Math.round(shareFx)}%は円安、約{Math.round(100 - shareFx)}%はドル建て価格の上昇</strong>によるものです（対数で分けた当サイトの計算）。ただし、円安でもドル建てが下がれば、円建ては下がることがあります。</p>

        <h2>円建て金価格の計算のしかた</h2>
        <p>金の国際価格は「1トロイオンスあたりのドル」で表されます。トロイオンスは計量単位令で0.0311035kg（31.1035g）と定められています。1gあたりの円に直すと次のとおりです。</p>
        <ul>
          <li><strong>円建て（円/g）＝ ドル建て（ドル/トロイオンス）× ドル円（円/ドル）÷ 31.1035</strong></li>
          <li>例: 2026年10月はドル建て4,105ドル、ドル円157.89円で、4,105 × 157.89 ÷ 31.1035 ≒ <strong>{yen(MONTHS[9].jpy)}円/g</strong></li>
          <li>ドル建て価格が同じでも、ドル円が10%上がる（円安になる）と、円建ての値も10%上がります。</li>
        </ul>
        <p>オンスとグラムの関係は<Link href="/articles/ounce-gram/">1オンスは何グラム？</Link>で詳しくまとめています。</p>

        <h2>2012〜2026年の円建て金価格と、前年比の内訳</h2>
        <p>年平均の値と、前年からの変化を「ドル建ての動き」と「為替の動き」に分けて並べました。為替の欄はプラスが円安、マイナスが円高です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>ドル建て（ドル/oz）</th><th>ドル円（円）</th><th>円建て換算（円/g）</th><th>ドル建ての前年比</th><th>為替の前年比</th><th>円建ての前年比</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.y}>
                  <td>{r.y}年{r.part ? `（${r.part}）` : ""}</td>
                  <td>{r.usd.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</td>
                  <td>{r.fx.toFixed(2)}</td>
                  <td>{r.jpy.toLocaleString()}</td>
                  <td>{pct(r.dUsd)}</td>
                  <td>{pct(r.dFx)}</td>
                  <td><strong>{pct(r.dJpy)}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 世界銀行「Commodity Price Data（The Pink Sheet）」月次 Gold（2026年11月3日更新版）、日本銀行「東京市場 ドル・円 スポット 17時時点/月中平均」。年平均は月次の平均、円建て換算は月ごとに計算した値の平均、前年比はいずれも当サイトの計算です。2026年は1〜10月の平均で、前年（12か月の平均）と比べています。</p>

        <p>表から読み取れることは次のとおりです。</p>
        <ul>
          <li><strong>2013年</strong>: ドル建ては{pct(Y2013.dUsd)}と大きく下がりましたが、{pct(Y2013.dFx)}の円安で打ち消され、円建ては{pct(Y2013.dJpy)}でした。</li>
          <li><strong>2016年</strong>: ドル建ては{pct(Y2016.dUsd)}上がりましたが、{pct(Y2016.dFx)}の円高で、円建ては{pct(Y2016.dJpy)}と下がりました。</li>
          <li><strong>2022年</strong>: ドル建てはほぼ横ばい（{pct(Y2022.dUsd)}）でしたが、{pct(Y2022.dFx)}の円安で、円建ては{pct(Y2022.dJpy)}上がりました。この年の円建ての値上がりは、ほぼ為替だけによるものです。</li>
          <li><strong>2025年</strong>: ドル円はやや円高（{pct(Y2025.dFx)}）でしたが、ドル建てが{pct(Y2025.dUsd)}上がり、円建ては{pct(Y2025.dJpy)}でした。この年は為替よりドル建ての動きが大きく効いています。</li>
        </ul>
        <p>1980年代からの長い推移や、大きく下がった年の記録は<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落は過去に何回あった？</Link>（田中貴金属の年次データ）にまとめています。</p>

        <h2>2026年の月ごとの動き — 円安でも円建てが下がった月</h2>
        <p>月単位で見ると、為替よりドル建ての動きが大きい月があります。前月より円安になったのに、円建てが下がった月は2026年1〜10月で{weakButDown.length}回でした（{weakButDown.map((r) => `${r.m}月`).join("・")}）。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>月</th><th>ドル建て（ドル/oz）</th><th>ドル円（円）</th><th>円建て換算（円/g）</th><th>前月比（ドル建て／為替／円建て）</th></tr></thead>
            <tbody>
              {MONTHS.map((r, i) => {
                const c = i > 0 ? MCH[i - 1] : null;
                return (
                  <tr key={r.m}>
                    <td>2026年{r.m}月</td>
                    <td>{r.usd.toLocaleString()}</td>
                    <td>{r.fx.toFixed(2)}</td>
                    <td>{yen(r.jpy)}</td>
                    <td>{c ? `${pct(c.dUsd)}／${pct(c.dFx)}／${pct(c.dJpy)}` : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 世界銀行 Pink Sheet 月次 Gold、日本銀行 ドル・円 月中平均。円建て換算と前月比は当サイトの計算です。</p>

        <h2>この計算で分からないこと</h2>
        <ul>
          <li><strong>店頭価格との差</strong>: 国内の店頭価格には消費税（10%）や販売・買取の手数料が加わるため、上の換算値とは一致しません。実際の買取価格の目安は<Link href="/articles/kin-kaitori-souba/">金買取相場</Link>（田中貴金属の公表値を毎朝記録）をご覧ください。</li>
          <li><strong>この先の円安・円高</strong>: 為替やドル建て金価格の今後は、このページでは予測していません。表は過去の公表値を並べたものです。</li>
          <li><strong>売るときの税金</strong>: 金を売って利益が出た場合の課税は<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>にまとめています。</li>
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
          <li>World Bank「Commodity Price Data（The Pink Sheet）」Monthly prices（2026年11月3日更新）<a href="https://www.worldbank.org/en/research/commodity-markets" target="_blank" rel="noopener noreferrer">worldbank.org</a></li>
          <li>日本銀行「時系列統計データ検索サイト」外国為替市況 東京市場 ドル・円 スポット 17時時点/月中平均 <a href="https://www.stat-search.boj.or.jp/" target="_blank" rel="noopener noreferrer">stat-search.boj.or.jp</a></li>
          <li>計量単位令 別表第六（トロイオンス）<a href="https://laws.e-gov.go.jp/law/404CO0000000357" target="_blank" rel="noopener noreferrer">e-Gov法令検索</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月24日。本ページは過去の公表値をもとにした計算で、金の売買や投資を勧めるものではありません。</p>

        <RelatedArticles currentSlug="enyasu-kin" relatedSlugs={["kin-kakaku-boraku-kako", "kin-kaitori-souba", "ounce-gram", "kin-uridoki-2026", "kin-kaitori-zeikin", "kin-toushin-hiyou-hikaku", "kin-inflation"]} />
      </article>
    </div>
  </>);
}
