import goldData from "@/data/gold-spot-prices.json";

type Purity = "k24" | "k22" | "k18" | "k14" | "k10" | "k18wg" | "k18pg";

const PURITY_LABEL: Record<Purity, string> = {
  k24: "K24",
  k22: "K22",
  k18: "K18",
  k14: "K14",
  k10: "K10",
  k18wg: "K18WG",
  k18pg: "K18PG",
};

const WEIGHTS = [5, 10, 20, 30, 50, 100];

function priceOf(purity: Purity): number {
  const map = goldData.purity_buyback_estimate_per_g as Record<string, number>;
  return map[purity];
}

function fmt(n: number): string {
  if (n >= 1_000_000) {
    const man = n / 10_000;
    return `${man.toLocaleString(undefined, { maximumFractionDigits: 1 })}万円`;
  }
  return `${n.toLocaleString()}円`;
}

/**
 * 重量別の買取相場早見表（毎日の田中貴金属公表値から純度換算した目安）。
 * purities を1つ渡すと単独表、複数渡すとマトリクス表になる。
 * 日次ビルド（com.kin-kaitori.daily-gold-update）で自動的に最新化される。
 */
export function WeightPriceTable({ purities }: { purities: Purity[] }) {
  return (
    <div className="my-6 not-prose">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
        <h3 className="font-display text-base md:text-lg font-bold text-amber-dark !my-0 !border-none">
          重量別の買取相場 早見表（{goldData.date} 時点の目安）
        </h3>
      </div>
      <div className="overflow-x-auto rounded-xl border border-amber/30">
        <table className="w-full text-sm">
          <thead className="bg-amber/10">
            <tr>
              <th className="px-3 py-2.5 text-left font-bold text-amber-dark">重量</th>
              {purities.map((p) => (
                <th key={p} className="px-3 py-2.5 text-right font-bold text-amber-dark">
                  {PURITY_LABEL[p]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {WEIGHTS.map((w, i) => (
              <tr key={w} className={i % 2 ? "bg-cream/40" : "bg-white"}>
                <td className="px-3 py-2.5 font-medium">{w}g</td>
                {purities.map((p) => (
                  <td key={p} className="px-3 py-2.5 text-right tabular-nums">
                    {fmt(Math.round(priceOf(p) * w))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warm-gray leading-relaxed mt-2">
        ※田中貴金属工業が公表する税込買取参考価格をもとに純度換算した<strong>理論上の目安</strong>です（毎日自動更新）。
        実際の買取額は業者の手数料・査定基準・製品の状態により目安を下回ることが一般的です。金額を保証するものではないため、正確な額は無料査定でご確認ください。
      </p>
    </div>
  );
}
