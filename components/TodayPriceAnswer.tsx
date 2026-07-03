import Link from "next/link";
import goldData from "@/data/gold-spot-prices.json";
import trendData from "@/data/gold-price-trend.json";

type Purity = "k24" | "k22" | "k18" | "k14" | "k10";

const PURITY_LABEL: Record<Purity, string> = {
  k24: "K24（純金）",
  k22: "K22（22金）",
  k18: "K18（18金）",
  k14: "K14（14金）",
  k10: "K10（10金）",
};

export function getPurityPrice(purity: Purity): number {
  const map = goldData.purity_buyback_estimate_per_g as Record<string, number>;
  return map[purity];
}

export function formatDateJa(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${y}年${m}月${d}日`;
}

/**
 * 前日比を算出する。
 * gold-price-trend.json の末尾エントリが本日（gold-spot-prices.json の date）と一致し、
 * かつ、その1つ前のエントリがちょうど1日前の日付である場合のみ数値を返す。
 * 算出できない場合は null（近似せず非表示にする＝捏造回避）。
 */
function getDayOverDayDiff(purity: Purity): number | null {
  const trend = trendData as Array<Record<string, number | string>>;
  if (trend.length < 2) return null;
  const last = trend[trend.length - 1];
  const prev = trend[trend.length - 2];
  if (last.date !== goldData.date) return null;
  const lastPrice = last[purity];
  const prevPrice = prev[purity];
  if (typeof lastPrice !== "number" || typeof prevPrice !== "number") return null;
  // トレンド末尾値が本日の相場データと一致していることを確認（不一致なら非表示）
  if (lastPrice !== getPurityPrice(purity)) return null;
  // 1つ前のエントリがちょうど前日であることを確認（欠測日をまたぐ場合は「前日比」を名乗らない）
  const lastDate = new Date(`${last.date}T00:00:00Z`);
  const prevDate = new Date(`${prev.date}T00:00:00Z`);
  if (lastDate.getTime() - prevDate.getTime() !== 24 * 60 * 60 * 1000) return null;
  return lastPrice - prevPrice;
}

export function TodayPriceAnswer({ purity }: { purity: Purity }) {
  const price = getPurityPrice(purity);
  const label = PURITY_LABEL[purity];
  const diff = getDayOverDayDiff(purity);
  const dateJa = formatDateJa(goldData.date);

  return (
    <section className="not-prose my-6 bg-gold-bg border-2 border-accent/40 rounded-2xl p-6 shadow-sm">
      <p className="text-sm font-bold text-accent-dark mb-2 !mt-0">本日の{label}買取相場</p>
      <p className="flex items-baseline flex-wrap gap-x-2 gap-y-1 mb-2">
        <span className="text-base font-medium text-foreground">1gあたり</span>
        <strong className="font-display text-4xl md:text-5xl font-bold text-accent-dark leading-none">
          {price.toLocaleString()}円
        </strong>
        <span className="text-sm text-warm-gray">
          （{dateJa}時点
          {diff !== null && (
            <>
              ・前日比
              <span className={diff >= 0 ? "text-accent-dark font-bold" : "text-navy font-bold"}>
                {diff >= 0 ? "+" : "−"}
                {Math.abs(diff).toLocaleString()}円
              </span>
            </>
          )}
          ）
        </span>
      </p>
      <p className="text-xs text-warm-gray leading-relaxed mb-4">
        ※ 毎朝自動更新。田中貴金属公表の店頭買取価格（K24）をもとに純度比×業者買取平均係数0.96で算出した買取目安です。実際の査定額は業者・状態・付属品により異なります。
      </p>
      <div className="flex flex-wrap gap-2">
        <a
          href="#weight-table"
          className="text-sm bg-white border border-accent/50 text-accent-dark font-medium rounded-lg px-3 py-2 hover:bg-accent/10 transition-colors"
        >
          5g・10g・30gはいくら？ 重量別早見表へ
        </a>
        <Link
          href="/kin-kaitori-keisanki/"
          className="text-sm bg-accent text-white font-medium rounded-lg px-3 py-2 hover:bg-accent-dark transition-colors"
        >
          お手持ちのグラム数で計算する
        </Link>
      </div>
    </section>
  );
}
