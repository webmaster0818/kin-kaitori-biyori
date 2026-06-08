import trend from "@/data/gold-price-trend.json";
import spot from "@/data/gold-spot-prices.json";

type Point = {
  date: string;
  k24: number;
  k18: number;
  k14: number;
};

// 表示する系列（K24=純金。代表値として推移を描く）
const SERIES: { key: keyof Point; label: string; color: string }[] = [
  { key: "k24", label: "K24（純金）", color: "#b8860b" },
];

function fmtDate(d: string): string {
  // "2026-06-08" -> "6/8"
  const [, m, day] = d.split("-");
  return `${Number(m)}/${Number(day)}`;
}

export function GoldPriceTrend() {
  const data = (trend as Point[]).filter((d) => typeof d.k24 === "number");
  const latest = data[data.length - 1];
  const first = data[0];
  const enough = data.length >= 2;

  // SVG geometry
  const W = 640;
  const H = 220;
  const padL = 56;
  const padR = 16;
  const padT = 20;
  const padB = 34;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const values = data.map((d) => d.k24);
  const vmin = Math.min(...values);
  const vmax = Math.max(...values);
  // y軸は最小〜最大に少し余白
  const span = Math.max(vmax - vmin, 1);
  const yLo = vmin - span * 0.25;
  const yHi = vmax + span * 0.25;

  const x = (i: number) =>
    data.length === 1
      ? padL + innerW / 2
      : padL + (innerW * i) / (data.length - 1);
  const y = (v: number) => padT + innerH * (1 - (v - yLo) / (yHi - yLo));

  const linePts = data.map((d, i) => `${x(i)},${y(d.k24)}`).join(" ");

  const delta = enough ? latest.k24 - first.k24 : 0;
  const deltaPct = enough ? (delta / first.k24) * 100 : 0;
  const up = delta >= 0;

  return (
    <section className="my-8 not-prose bg-white border border-amber/30 rounded-2xl p-5 md:p-6 shadow-sm">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-1">
        <h3 className="font-display text-lg md:text-xl font-bold text-amber-dark !mt-0 !mb-0 !border-none">
          金（K24）買取相場の推移
        </h3>
        <span className="text-xs text-warm-gray">最終更新: {spot.date}</span>
      </div>
      <p className="text-xs text-warm-gray mb-4">
        当サイトが田中貴金属の公表値をもとに毎営業日記録している一次データです（K24
        1g買取参考価格）。
      </p>

      <div className="flex flex-wrap items-end gap-x-6 gap-y-2 mb-4">
        <div>
          <div className="text-xs text-warm-gray">最新（{fmtDate(latest.date)}）</div>
          <div className="font-display text-3xl font-bold text-amber-dark">
            {latest.k24.toLocaleString()}
            <span className="text-base font-medium text-foreground/70"> 円/g</span>
          </div>
        </div>
        {enough && (
          <div>
            <div className="text-xs text-warm-gray">
              {fmtDate(first.date)} 比
            </div>
            <div
              className={`text-lg font-bold ${
                up ? "text-emerald-700" : "text-rose-700"
              }`}
            >
              {up ? "▲" : "▼"} {Math.abs(delta).toLocaleString()} 円/g（
              {up ? "+" : "−"}
              {Math.abs(deltaPct).toFixed(1)}%）
            </div>
          </div>
        )}
      </div>

      {enough ? (
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          role="img"
          aria-label="金K24買取相場の推移グラフ"
        >
          {/* y軸グリッド（min/mid/max） */}
          {[yHi, (yHi + yLo) / 2, yLo].map((gv, i) => (
            <g key={i}>
              <line
                x1={padL}
                y1={y(gv)}
                x2={W - padR}
                y2={y(gv)}
                stroke="#eee5cf"
                strokeWidth="1"
              />
              <text
                x={padL - 8}
                y={y(gv) + 4}
                textAnchor="end"
                fontSize="11"
                fill="#9a8f7a"
              >
                {Math.round(gv).toLocaleString()}
              </text>
            </g>
          ))}

          {/* 折れ線 */}
          {SERIES.map((s) => (
            <polyline
              key={s.key}
              points={linePts}
              fill="none"
              stroke={s.color}
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}

          {/* 点 + x軸ラベル */}
          {data.map((d, i) => (
            <g key={d.date}>
              <circle cx={x(i)} cy={y(d.k24)} r="3.5" fill="#b8860b" />
              {(i === 0 ||
                i === data.length - 1 ||
                data.length <= 8 ||
                i % Math.ceil(data.length / 8) === 0) && (
                <text
                  x={x(i)}
                  y={H - padB + 18}
                  textAnchor="middle"
                  fontSize="11"
                  fill="#9a8f7a"
                >
                  {fmtDate(d.date)}
                </text>
              )}
            </g>
          ))}
        </svg>
      ) : (
        <div className="rounded-xl bg-cream/50 border border-amber/20 p-4 text-sm text-foreground/80">
          相場推移グラフは、毎営業日の記録を積み上げて表示します（現在
          {data.length}日分を記録済み）。日を追うごとに推移がご覧いただけます。
        </div>
      )}

      <p className="text-xs text-warm-gray leading-relaxed border-t border-amber/20 pt-3 mt-4">
        <strong>出典:</strong>{" "}
        <a
          href={spot.source as string}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-dark underline hover:text-burgundy"
        >
          田中貴金属 店頭買取価格
        </a>
        ／ K24以外の純度は当日のK24価格に純度比×業者買取平均係数0.96を乗じた参考値です。実際の査定額は各社・状態・付属品により異なります。
      </p>
    </section>
  );
}
