"use client";

import { useState } from "react";
import goldData from "@/data/gold-spot-prices.json";

const PURITIES: { key: string; label: string }[] = [
  { key: "k24", label: "K24（純金）" },
  { key: "k22", label: "K22" },
  { key: "k18", label: "K18" },
  { key: "k14", label: "K14" },
  { key: "k10", label: "K10" },
];

export function GoldSimulator() {
  const [purity, setPurity] = useState("k18");
  const [grams, setGrams] = useState("10");

  const perG = (goldData.purity_buyback_estimate_per_g as Record<string, number>)[purity] ?? 0;
  const g = parseFloat(grams);
  const valid = !Number.isNaN(g) && g > 0 && g <= 100000;
  const total = valid ? Math.round(perG * g) : 0;

  return (
    <div className="not-prose bg-gradient-to-br from-amber/10 via-cream/40 to-amber/5 border-2 border-amber/30 rounded-2xl p-6 my-8 shadow-md">
      <h3 className="font-display text-lg md:text-xl font-bold text-amber-dark mb-1">金買取シミュレーター</h3>
      <p className="text-xs text-warm-gray mb-4">
        {goldData.date} の田中貴金属公表値ベース（毎日自動更新）。純度と重量を選ぶと概算がわかります。
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="block">
          <span className="text-sm font-bold">純度</span>
          <select
            value={purity}
            onChange={(e) => setPurity(e.target.value)}
            className="mt-1 w-full border border-amber/40 rounded-lg px-3 py-2.5 text-sm bg-white"
          >
            {PURITIES.map((p) => (
              <option key={p.key} value={p.key}>
                {p.label}（{Math.round((goldData.purity_buyback_estimate_per_g as Record<string, number>)[p.key]).toLocaleString()}円/g）
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-bold">重量（g）</span>
          <input
            type="number"
            min="0.1"
            step="0.1"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            className="mt-1 w-full border border-amber/40 rounded-lg px-3 py-2.5 text-sm bg-white"
          />
        </label>
      </div>
      <div className="bg-white rounded-xl border border-amber/30 p-4 text-center">
        <p className="text-sm text-warm-gray mb-1">買取目安（理論値）</p>
        <p className="font-display text-3xl md:text-4xl font-bold text-amber-dark">
          {valid ? `${total.toLocaleString()}円` : "—"}
        </p>
      </div>
      <p className="text-xs text-warm-gray leading-relaxed mt-3">
        ※公表値から純度換算した理論上の目安です。実際の買取額は業者の手数料・査定基準・製品の状態により目安を下回ることが一般的です。金額を保証するものではありません。正確な額は無料査定でご確認ください。
      </p>
    </div>
  );
}
