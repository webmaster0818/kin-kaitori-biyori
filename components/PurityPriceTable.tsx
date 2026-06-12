import goldData from "@/data/gold-spot-prices.json";

/**
 * 純度別の1gあたり買取目安テーブル（田中貴金属公表値ベース・日次ビルドで自動更新）。
 * 地域記事の旧静的テーブル（誤った固定価格）の置き換え用。
 */
export function PurityPriceTable() {
  const p = goldData.purity_buyback_estimate_per_g as Record<string, number>;
  const pt = goldData.tanaka_official.pt_buyback_per_g as number;
  const rows: [string, number][] = [
    ["K24（純金）", p.k24],
    ["K22（22金）", p.k22],
    ["K18（18金）", p.k18],
    ["K14（14金）", p.k14],
    ["プラチナ（Pt）", pt],
  ];
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>純度</th>
            <th>1gあたり買取目安（{goldData.date} 時点）</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, v]) => (
            <tr key={label}>
              <td>
                <strong>{label}</strong>
              </td>
              <td>{Math.round(v).toLocaleString()}円前後</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-warm-gray mt-2">
        ※田中貴金属工業の公表する税込買取参考価格をもとに純度換算した理論上の目安（毎日自動更新）。実際の買取額は業者の手数料・査定基準により目安を下回ることが一般的です。
      </p>
    </div>
  );
}
