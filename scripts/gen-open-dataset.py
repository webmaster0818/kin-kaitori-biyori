#!/usr/bin/env python3
"""引用用の公開データセットを生成する（2026-08-06 新設）。

背景:
  白書ページ（/kin-kaitori-hakusho/）は既にあるが、**データそのものを配っていない**ため
  他メディアが引用しようにも「数字を手で写す」しかない状態だった。
  引用される側になるには、機械可読なファイルを配るのが前提になる。

出力（public/data/ 配下＝そのまま公開URLになる）:
  gold-price-history.json … 日次の純度別買取単価（全期間）
  gold-price-history.csv  … 同上のCSV（表計算・BIでそのまま開ける形）
  gold-price-index.json   … 起点日=100 とした推移指数（メディアが引用しやすい単一指標）

⚠️ 数値は data/gold-price-history/*.json の実データのみ。推定で埋めない。
⚠️ 日次更新スクリプト（daily-gold-update.sh）から毎日呼ぶこと。呼ばないと配布データが古くなる。
"""
import csv
import glob
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HIST_DIR = ROOT / "data" / "gold-price-history"
OUT_DIR = ROOT / "public" / "data"
PURITIES = ["k24", "k22", "k18", "k14", "k10"]


def load_series():
    rows = []
    for f in sorted(glob.glob(str(HIST_DIR / "*.json"))):
        rows += json.loads(Path(f).read_text(encoding="utf-8"))
    # 日付重複は後勝ち（再取得で上書きされた場合に備える）
    by_date = {r["date"]: r for r in rows if r.get("date")}
    return [by_date[d] for d in sorted(by_date)]


def main():
    series = load_series()
    if not series:
        raise SystemExit("履歴データが空です。生成を中止します。")
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    meta = {
        "name": "金買取相場データ（純度別・日次）",
        "publisher": "金買取びより（gold-biyori.com）",
        "source": "田中貴金属工業が公表する店頭買取価格（税込）",
        "source_url": "https://gold.tanaka.co.jp/commodity/souba/",
        "method": (
            "田中貴金属が公表するK24店頭買取価格に、純度比（K22=91.7%/K18=75%/K14=58.5%/K10=41.7%）と "
            "業者買取平均係数0.96を掛けて算出した参考値。丸め・推定補完は行っていない。"
        ),
        "license": "出典（金買取びより https://gold-biyori.com/kin-kaitori-hakusho/ ）の明記を条件に自由に利用可",
        "update_frequency": "毎日（自動更新）",
        "unit": "円/g（税込）",
        "period": {"start": series[0]["date"], "end": series[-1]["date"]},
        "records": len(series),
        "caveat": "業者の実際の査定額は状態・付属品・各社の手数料により、この目安を下回るのが一般的です。",
    }

    # 1) JSON（全期間）
    (OUT_DIR / "gold-price-history.json").write_text(
        json.dumps({"meta": meta, "data": series}, ensure_ascii=False, indent=1),
        encoding="utf-8",
    )

    # 2) CSV
    with (OUT_DIR / "gold-price-history.csv").open("w", encoding="utf-8-sig", newline="") as f:
        w = csv.writer(f)
        w.writerow(["date", "au_buyback_per_g", *[f"{p}_per_g" for p in PURITIES]])
        for r in series:
            w.writerow([r["date"], r.get("au_buyback", ""), *[r.get(p, "") for p in PURITIES]])

    # 3) 指数（起点日=100）
    base = series[0]
    index = []
    for r in series:
        row = {"date": r["date"]}
        for p in PURITIES:
            b, v = base.get(p), r.get(p)
            row[p] = round(v / b * 100, 2) if b and v else None
        index.append(row)
    (OUT_DIR / "gold-price-index.json").write_text(
        json.dumps({
            "meta": {**meta,
                      "name": "金買取相場指数（純度別・起点日=100）",
                      "base_date": base["date"],
                      "note": "起点日の買取単価を100としたときの推移。値動きの比較用。"},
            "data": index,
        }, ensure_ascii=False, indent=1),
        encoding="utf-8",
    )

    latest = index[-1]
    print(f"✅ 公開データ生成 {len(series)}件 ({meta['period']['start']}〜{meta['period']['end']})")
    print(f"   指数(起点{base['date']}=100): " + " / ".join(f"{p.upper()}={latest[p]}" for p in PURITIES))


if __name__ == "__main__":
    main()
