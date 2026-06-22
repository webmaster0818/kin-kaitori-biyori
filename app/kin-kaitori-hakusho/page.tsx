import type { Metadata } from "next";
import Link from "next/link";
import spot from "@/data/gold-spot-prices.json";
import trend from "@/data/gold-price-trend.json";

const per = spot.purity_buyback_estimate_per_g as Record<string, number>;
const date = spot.date as string;
const YEAR = date.slice(0, 4);
type T = { date: string; au_buyback?: number; pt_buyback?: number; ag_buyback?: number; k24: number; k22: number; k18: number; k14: number; k10: number };
const series = (trend as T[]).filter((t) => typeof t.k24 === "number");
const yen = (n: number) => Math.round(n).toLocaleString();

const PURITIES: { key: keyof T; label: string }[] = [
  { key: "k24", label: "K24（純金）" },
  { key: "k22", label: "K22" },
  { key: "k18", label: "K18" },
  { key: "k14", label: "K14" },
];
const WEIGHTS = [5, 10, 20, 30, 50, 100];

export const metadata: Metadata = {
  title: `金買取相場白書${YEAR}｜純度別の買取単価・相場推移を公開【日次更新】`,
  description: `金（K24/K22/K18/K14）の1gあたり買取単価の目安と、直近の相場推移を当サイト独自にまとめた資料です。田中貴金属の公表値をもとに毎日自動更新。出典明記での引用を歓迎します。`,
  alternates: { canonical: "https://gold-biyori.com/kin-kaitori-hakusho/" },
};

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "金買取相場白書", item: "https://gold-biyori.com/kin-kaitori-hakusho/" },
    ],
  };
  const dataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `金買取相場白書${YEAR}（純度別買取単価・相場推移）`,
    description: "金（K24/K22/K18/K14/K10）の1gあたり買取単価の目安と相場推移。田中貴金属公表値をもとに日次更新。",
    creator: { "@type": "Organization", name: "金買取びより" },
    dateModified: date,
    license: "出典明記で引用可",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
    </>
  );
}

export default function Page() {
  const k24s = series.map((s) => s.k24);
  const high = Math.max(...k24s);
  const low = Math.min(...k24s);
  const first = series[0];
  const last = series[series.length - 1];
  const dir = last.k24 > first.k24 ? "上昇傾向" : last.k24 < first.k24 ? "下落傾向" : "横ばい";

  return (
    <>
      <Schemas />
      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent-dark transition-colors">ホーム</Link></li>
            <li aria-hidden className="px-1">/</li>
            <li className="text-foreground font-medium">金買取相場白書</li>
          </ol>
        </nav>

        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-3">
          金買取相場白書 {YEAR}｜純度別の買取単価・相場推移
        </h1>
        <p className="text-warm-gray text-sm mb-2">
          最終更新: {date}（毎日自動更新） ／ 出典: 田中貴金属 公表値ベース ／ 編集: 金買取びより
        </p>
        <p className="leading-relaxed mb-8 text-foreground/90">
          金（K24/K22/K18/K14/K10）の<strong>1gあたり買取単価の目安</strong>と、直近の<strong>相場推移</strong>を、田中貴金属の公表値をもとに当サイトが独自にまとめた資料です。数値は毎日自動で更新しています。メディア・ブログでの<strong>引用は出典明記を条件に歓迎</strong>します（本ページ末尾参照）。
        </p>

        {/* ヘッドライン */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { label: "本日のK24買取目安", value: `${yen(per.k24)}円/g` },
            { label: `期間内の高値（K24）`, value: `${yen(high)}円/g` },
            { label: `期間内の安値（K24）`, value: `${yen(low)}円/g` },
            { label: "直近の方向性", value: dir, sub: `${first.date}〜${last.date}` },
          ].map((s) => (
            <div key={s.label} className="border border-warm-border rounded-2xl p-4 bg-white text-center">
              <p className="text-xs text-warm-gray mb-1">{s.label}</p>
              <p className="font-display text-lg font-bold text-accent-dark leading-tight">{s.value}</p>
              {s.sub && <p className="text-[11px] text-warm-gray mt-0.5">{s.sub}</p>}
            </div>
          ))}
        </section>

        {/* 純度別 本日買取単価 */}
        <section className="mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">本日の純度別 買取単価（1gあたり）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-3 py-2.5 text-left font-bold border border-warm-border">純度</th>
                  <th className="px-3 py-2.5 text-right font-bold border border-warm-border">買取単価の目安（円/g）</th>
                </tr>
              </thead>
              <tbody>
                {[["k24", "K24（純金・24金）"], ["k22", "K22（22金）"], ["k18", "K18（18金）"], ["k14", "K14（14金）"], ["k10", "K10（10金）"]].map(([k, label], i) => (
                  <tr key={k} className={i % 2 ? "bg-cream/40" : "bg-white"}>
                    <td className="px-3 py-2.5 border border-warm-border font-medium">{label}</td>
                    <td className="px-3 py-2.5 border border-warm-border text-right tabular-nums font-bold text-accent-dark">{yen(per[k])}円</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※{date}時点・田中貴金属の公表値から純度換算した理論上の目安です（後述の免責参照）。</p>
        </section>

        {/* 相場推移（一次データ） */}
        <section className="mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">金買取相場の推移（純度別・1gあたり）</h2>
          <p className="text-sm text-warm-gray mb-4">直近{series.length}回分の純度別買取単価の推移です（田中貴金属公表値ベース）。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-3 py-2.5 text-left font-bold border border-warm-border">日付</th>
                  {PURITIES.map((p) => (
                    <th key={String(p.key)} className="px-3 py-2.5 text-right font-bold border border-warm-border">{p.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {series.map((s, i) => (
                  <tr key={s.date} className={i % 2 ? "bg-cream/40" : "bg-white"}>
                    <td className="px-3 py-2.5 border border-warm-border tabular-nums">{s.date}</td>
                    {PURITIES.map((p) => (
                      <td key={String(p.key)} className="px-3 py-2.5 border border-warm-border text-right tabular-nums">{yen(s[p.key] as number)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">※単位は円/g。相場は日々変動します。最新の確定値は各買取業者の無料査定でご確認ください。</p>
        </section>

        {/* 純度×重量 早見 */}
        <section className="mb-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">純度×重量別 買取目安早見表（本日）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-3 py-2.5 text-left font-bold border border-warm-border">重さ</th>
                  {PURITIES.map((p) => (
                    <th key={String(p.key)} className="px-3 py-2.5 text-right font-bold border border-warm-border">{p.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WEIGHTS.map((w, i) => (
                  <tr key={w} className={i % 2 ? "bg-cream/40" : "bg-white"}>
                    <td className="px-3 py-2.5 border border-warm-border font-medium">{w}g</td>
                    {PURITIES.map((p) => (
                      <td key={String(p.key)} className="px-3 py-2.5 border border-warm-border text-right tabular-nums text-accent-dark font-bold">{yen((per[String(p.key)]) * w)}円</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray mt-2">
            重さがわかっている場合の目安です。純度×重量で計算したい方は<Link href="/kin-kaitori-keisanki/" className="text-accent-dark underline">金買取相場グラム計算機</Link>もご利用ください。
          </p>
        </section>

        {/* 相場の決まり方 */}
        <section className="mb-10 bg-cream/40 border border-warm-border rounded-2xl p-6">
          <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">金の買取相場はどう決まるか</h2>
          <p className="text-warm-gray leading-relaxed mb-3">
            金の買取価格は、おおまかに<strong>「純度に応じた1gあたりの買取単価 × 重量（g）」</strong>で求められます。純度（K24＝純金、K18＝18金など）が高いほど1gあたりの単価は高くなり、K18は純金の約75%、K14は約58.5%といった割合が単価に反映されます。
          </p>
          <p className="text-warm-gray leading-relaxed text-sm">
            実際の買取額は、地金（インゴット）か装飾品か、留め具や石の有無、業者の手数料・査定基準などによって、上記の理論目安を下回ることが一般的です。相場は田中貴金属などの公表値を基準に日々変動するため、売却時は本白書の目安で当たりをつけたうえで、複数業者の無料査定で確定額を確認するのが確実です。
          </p>
        </section>

        {/* メソドロジー */}
        <section className="mb-10 border border-warm-border rounded-2xl p-6 bg-white">
          <h2 className="font-display text-lg font-bold text-foreground mb-3 !mt-0">算出方法（メソドロジー）</h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm leading-relaxed text-foreground/90">
            <li>基準データ：田中貴金属の公表値をもとに、純度別（K24/K22/K18/K14/K10）の1gあたり買取単価を算出。</li>
            <li>更新頻度：毎日自動更新（本資料は {date} 時点のスナップショット）。推移は直近{series.length}回分。</li>
            <li>早見表：純度別単価 × 重量で機械的に算出した理論上の目安。手数料・状態は加味していません。</li>
            <li>集計主体：金買取びより編集部。</li>
          </ul>
        </section>

        {/* 引用について */}
        <section className="mb-10 border border-accent/40 rounded-2xl p-6 bg-cream/50">
          <h2 className="font-display text-lg font-bold text-foreground mb-2 !mt-0">📊 データの引用について</h2>
          <p className="text-sm leading-relaxed mb-3">
            本白書の数値・表は、<strong>出典の明記</strong>を条件に、メディア・ブログ・SNS等でご自由に引用いただけます。
          </p>
          <div className="bg-white border border-warm-border rounded-lg p-3 text-xs text-warm-gray">
            出典表記の例：「出典：金買取相場白書{YEAR}（金買取びより / gold-biyori.com）」＋本ページへのリンク
          </div>
          <p className="text-sm leading-relaxed mt-3">
            本日の相場を自サイトに表示したい方は、コピペ1行で設置できる<Link href="/widget/" className="text-accent-dark underline">金価格ウィジェット（無料配布）</Link>もご利用ください。
          </p>
        </section>

        {/* 関連 */}
        <section className="mb-4">
          <h2 className="font-display text-lg font-bold text-foreground mb-3">関連ページ</h2>
          <ul className="space-y-2 text-sm">
            <li>📈 <Link href="/souba-dashboard/" className="text-accent-dark underline">金価格・買取相場ダッシュボード</Link>（本日の相場・チャート・シミュレーターをまとめて確認）</li>
            <li>🧮 <Link href="/kin-kaitori-keisanki/" className="text-accent-dark underline">金買取相場グラム計算機</Link>（純度×重量で買取目安を即計算）</li>
            <li>💍 製品別の相場：<Link href="/articles/kin-bracelet-kaitori/" className="text-accent-dark underline">金ブレスレット</Link>／<Link href="/articles/k24-kaitori/" className="text-accent-dark underline">K24</Link>／<Link href="/articles/k18-kaitori/" className="text-accent-dark underline">K18</Link></li>
          </ul>
        </section>

        <p className="text-xs text-warm-gray leading-relaxed border-t border-warm-border pt-4 mt-6">
          ※本白書の金額は、田中貴金属の公表値から純度換算した理論上の目安であり、実際の買取価格を保証するものではありません。実際の額は業者の手数料・査定基準・製品の状態により目安を下回ることが一般的です。相場は日々変動します。正確な金額は各買取業者の無料査定でご確認ください。
        </p>
      </main>
    </>
  );
}
