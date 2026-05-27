import goldData from "@/data/gold-spot-prices.json";

type Purity = "k24" | "k22" | "k18" | "k14" | "k10" | "k18wg" | "k18pg" | "pt" | "ag";

const PURITY_LABEL: Record<Purity, string> = {
  k24: "K24 (純金)",
  k22: "K22",
  k18: "K18",
  k14: "K14",
  k10: "K10",
  k18wg: "K18WG (ホワイトゴールド)",
  k18pg: "K18PG (ピンクゴールド)",
  pt: "プラチナ (Pt)",
  ag: "銀 (Ag)",
};

function getPrice(purity: Purity): number {
  if (purity === "pt") return goldData.tanaka_official.pt_buyback_per_g as number;
  if (purity === "ag") return goldData.tanaka_official.ag_buyback_per_g as number;
  const purityMap = goldData.purity_buyback_estimate_per_g as Record<string, number>;
  return purityMap[purity];
}

export function GoldSpotPriceCard({ purity }: { purity: Purity }) {
  const price = getPrice(purity);
  const label = PURITY_LABEL[purity];
  const isPtAg = purity === "pt" || purity === "ag";

  return (
    <aside className="my-6 not-prose bg-gradient-to-br from-amber/10 via-cream/40 to-amber/5 border-2 border-amber/30 rounded-2xl p-6 shadow-md">
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <h3 className="font-display text-lg md:text-xl font-bold text-amber-dark !mt-0 !mb-0 !border-none">
          本日の{label} 1g買取相場
        </h3>
        <span className="text-xs text-warm-gray">取得日: {goldData.date}</span>
      </div>

      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-display text-4xl md:text-5xl font-bold text-amber-dark">
          {typeof price === "number" && Number.isInteger(price)
            ? price.toLocaleString()
            : (typeof price === "number" ? price.toFixed(2) : "—")}
        </span>
        <span className="text-lg text-foreground/80 font-medium">円/g</span>
      </div>

      <div className="text-xs text-warm-gray leading-relaxed border-t border-amber/20 pt-3">
        <p>
          <strong>出典:</strong>{" "}
          <a
            href={goldData.source as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-dark underline hover:text-burgundy"
          >
            田中貴金属 店頭買取価格（{goldData.date}公表）
          </a>
        </p>
        {!isPtAg && (
          <p className="mt-1">
            ※ 田中貴金属公開の K24 店頭買取価格から純度比 × 業者買取平均係数 0.96 で算出した参考値。実際の業者査定額は各社・状態・付属品により異なります。
          </p>
        )}
        {isPtAg && (
          <p className="mt-1">
            ※ 田中貴金属の店頭買取価格をそのまま参考値として掲載。実際の業者査定額は各社の在庫状況・キャンペーン・状態評価により異なります。
          </p>
        )}
      </div>
    </aside>
  );
}
