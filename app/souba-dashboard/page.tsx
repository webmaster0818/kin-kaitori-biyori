import type { Metadata } from "next";
import Link from "next/link";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { GoldSimulator } from "@/components/GoldSimulator";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import goldData from "@/data/gold-spot-prices.json";
import trend from "@/data/gold-price-trend.json";

export const metadata: Metadata = {
  title: "金価格・買取相場ダッシュボード【毎日自動更新】| 純度別価格とシミュレーター",
  description:
    "本日の金買取相場を純度別（K24/K22/K18/K14/K10）に毎日自動更新で掲載。日次の価格推移チャート、重量×純度の買取シミュレーター、重量別早見表で「いま売るといくらか」がすぐ分かります。田中貴金属公表値ベース。",
};

function diffBadge() {
  const t = trend as Array<{ date: string; k24: number }>;
  if (t.length < 2) return null;
  const today = t[t.length - 1];
  const prev = t[t.length - 2];
  const diff = today.k24 - prev.k24;
  const pct = ((diff / prev.k24) * 100).toFixed(2);
  const up = diff >= 0;
  return (
    <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full ${up ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
      前回比 {up ? "▲" : "▼"}{Math.abs(diff).toLocaleString()}円（{up ? "+" : "-"}{Math.abs(parseFloat(pct))}%）
    </span>
  );
}

export default function SoubaDashboard() {
  const k24 = (goldData.purity_buyback_estimate_per_g as Record<string, number>).k24;
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "金価格・買取相場ダッシュボード", item: "https://gold-biyori.com/souba-dashboard/" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金価格・買取相場ダッシュボード</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金価格・買取相場ダッシュボード</h1>
          <p className="text-warm-gray text-sm mb-6">毎日自動更新（データ取得日: {goldData.date}／出典: 田中貴金属公表値）</p>

          <div className="not-prose bg-cream/50 border border-amber/30 rounded-2xl p-6 mb-6 text-center">
            <p className="text-sm text-warm-gray mb-1">本日のK24（純金）買取目安</p>
            <p className="font-display text-4xl md:text-5xl font-bold text-amber-dark mb-2">{Math.round(k24).toLocaleString()}円<span className="text-lg font-medium">/g</span></p>
            {diffBadge()}
          </div>

          <h2>純度別の本日価格</h2>
          <PurityPriceTable />

          <h2>買取シミュレーター</h2>
          <GoldSimulator />

          <h2>価格推移チャート</h2>
          <GoldPriceTrend />
          <p className="text-xs text-warm-gray">※当サイトが日次で蓄積している田中貴金属公表値の推移です。蓄積日数とともにチャートが充実していきます。</p>

          <h2>重量別の早見表</h2>
          <WeightPriceTable purities={["k24", "k22", "k18", "k14"]} />

          <h2>売り時・税金のガイド</h2>
          <ul>
            <li><Link href="/articles/kin-kaitori-souba/">金買取相場の総合ガイド</Link></li>
            <li><Link href="/articles/kin-uridoki-2026/">金の売り時の考え方</Link></li>
            <li><Link href="/articles/kin-kaitori-zeikin/">金売却の税金（譲渡所得・支払調書）</Link></li>
            <li><Link href="/articles/k24-kaitori/">K24（純金）買取ガイド</Link></li>
            <li><Link href="/articles/k18-kaitori/">K18買取ガイド</Link></li>
          </ul>

          <h2>よくある質問</h2>
          <h3>Q. この価格で売れますか？</h3>
          <p>掲載しているのは公表値から純度換算した理論上の目安です。実際の買取額は業者の手数料・査定基準・製品の状態によって目安を下回ることが一般的です。複数業者の無料査定で比較するのがおすすめです。</p>
          <h3>Q. 価格はいつ更新されますか？</h3>
          <p>毎日午前に自動更新しています。田中貴金属工業が公表する税込参考価格をもとにしています。</p>
        </article>
      </div>
    </>
  );
}
