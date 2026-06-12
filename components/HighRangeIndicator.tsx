import trend from "@/data/gold-price-trend.json";

// 高値圏インジケーター（正直版）
// 蓄積済みの日次データ内で本日のK24がどの位置かを表示する。
// データは日次ビルドで自動蓄積されるため、表示も自動で精緻化されていく。
// 90日分たまったら「90日レンジ」表記に自動で切り替わる。
export function HighRangeIndicator() {
  const t = trend as Array<{ date: string; k24: number }>;
  if (t.length < 2) return null;

  const window = t.slice(-90);
  const days = window.length;
  const today = window[window.length - 1].k24;
  const values = window.map((p) => p.k24);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pos = max === min ? 50 : Math.round(((today - min) / (max - min)) * 100);
  const label =
    pos >= 80 ? "蓄積データ内では高値圏" : pos <= 20 ? "蓄積データ内では安値圏" : "蓄積データ内では中間圏";
  const windowLabel = days >= 90 ? "直近90日" : `蓄積${days}日分`;

  return (
    <div className="not-prose bg-white border border-amber/30 rounded-2xl p-5 mb-6">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-display text-base font-bold text-amber-dark">高値圏インジケーター</h3>
        <span className="text-xs text-warm-gray">{windowLabel}のK24推移内での位置</span>
      </div>
      <div className="relative h-3 rounded-full bg-gradient-to-r from-emerald-100 via-amber/20 to-red-100 mb-1">
        <span
          className="absolute -top-1 h-5 w-5 rounded-full bg-amber-dark border-2 border-white shadow"
          style={{ left: `calc(${pos}% - 10px)` }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-warm-gray mb-2">
        <span>安値 {min.toLocaleString()}円</span>
        <span>高値 {max.toLocaleString()}円</span>
      </div>
      <p className="text-sm font-bold text-foreground mb-1">
        本日 {today.toLocaleString()}円/g — {label}（{pos}%地点）
      </p>
      <p className="text-xs text-warm-gray leading-relaxed">
        ※当サイトが日次で蓄積している田中貴金属公表値ベースの指標です。
        {days < 90 && `現在は${days}日分のデータによる暫定値で、蓄積が進むほど参考性が高まります（90日分で確定運用に自動移行）。`}
        将来の価格を予測するものではありません。
      </p>
    </div>
  );
}
