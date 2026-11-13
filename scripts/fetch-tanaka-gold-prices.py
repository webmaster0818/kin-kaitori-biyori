#!/usr/bin/env python3
"""
田中貴金属の本日の店頭買取価格を取得し、純度別（K10/K14/K18/K22/K24/Pt/Ag）の参考価格を生成。

実行:
  python3 scripts/fetch-tanaka-gold-prices.py

出力:
  data/gold-spot-prices.json    - 本日の価格
  data/gold-price-history/YYYY-MM.json - 月別履歴に追記
"""
import json
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_FILE = ROOT / "data" / "gold-spot-prices.json"
HISTORY_DIR = ROOT / "data" / "gold-price-history"
URL = "https://gold.tanaka.co.jp/commodity/souba/"


def fetch_html() -> str:
    req = urllib.request.Request(URL, headers={"User-Agent": "Mozilla/5.0 (KinKaitori-Bot)"})
    with urllib.request.urlopen(req, timeout=15) as r:
        return r.read().decode("utf-8")


def parse_price(html: str) -> dict:
    """田中貴金属のページから金/プラチナ/銀の店頭買取価格を抽出。

    HTML 構造: <td class="retail_tax">25,521 円</td> / <td class="purchase_tax">24,972 円</td>
    出現順: 金 -> プラチナ -> 銀 -> 金(再掲) ...
    """
    # retail_tax / purchase_tax クラスを順番に取得
    retail_re = re.compile(r'<td class="retail_tax">\s*([\d,\.]+)\s*円', re.IGNORECASE)
    purchase_re = re.compile(r'<td class="purchase_tax">\s*([\d,\.]+)\s*円', re.IGNORECASE)

    retails = retail_re.findall(html)
    purchases = purchase_re.findall(html)

    if len(retails) < 3 or len(purchases) < 3:
        return {}

    def to_num(s: str) -> float:
        return float(s.replace(",", ""))

    # 地金価格の公表日時（例: 「2026年11月02日 17:00公表（日本時間）」）。取れなければ None
    pub = re.search(r'地金価格\s*<span>\s*(\d{4})年(\d{1,2})月(\d{1,2})日\s*(\d{1,2}:\d{2})公表', html)
    published_at = f"{pub.group(1)}-{int(pub.group(2)):02d}-{int(pub.group(3)):02d} {pub.group(4)}" if pub else None

    # 最初の3組: 金(Au), プラチナ(Pt), 銀(Ag)
    return {
        "published_at": published_at,  # main() でトップレベル tanaka_published_at に移す
        "au_retail_per_g": int(to_num(retails[0])),
        "au_buyback_per_g": int(to_num(purchases[0])),
        "pt_retail_per_g": int(to_num(retails[1])),
        "pt_buyback_per_g": int(to_num(purchases[1])),
        "ag_retail_per_g": to_num(retails[2]),
        "ag_buyback_per_g": to_num(purchases[2]),
    }


RETANAKA_URL = "https://gold.tanaka.co.jp/retanaka/price/"


def fetch_retanaka_ag() -> dict:
    """RE:TANAKA（田中貴金属の貴金属製品買取）の銀製品リサイクル価格（1g・税込）と発表日時。

    ページ構造: 銀製品表は品位 1000(999)〜800 の6行に <td rowspan="6">&yen;160</td> が1つ（全品位一律）。
    取れなければ {}（silver-kaitori は行を出さない）。日次処理は止めない。
    """
    try:
        req = urllib.request.Request(RETANAKA_URL, headers={"User-Agent": "Mozilla/5.0 (KinKaitori-Bot)"})
        with urllib.request.urlopen(req, timeout=15) as r:
            html = r.read().decode("utf-8", errors="ignore")
        # 銀製品の表（<section id="ag_price">）の 品位 1000 (999) の行のセル。プラチナ表にも同じ品位表記があるので section で絞る
        i = html.find('id="ag_price"')
        m = re.search(r'<th>\s*1000\s*<br\s*/?>\s*\(999\)\s*</th>\s*<td[^>]*>\s*(?:&yen;|¥|￥)\s*([\d,]+)', html[i:]) if i >= 0 else None
        pub = re.search(r'リサイクル価格\s*(?:<[^>]+>\s*)*(\d{4})年(\d{1,2})月(\d{1,2})日\s*(\d{1,2}:\d{2})発表', html)
        if not m or not pub:
            print("WARN: RE:TANAKA 銀製品リサイクル価格の表が見つかりません")
            return {}
        return {
            "ag_per_g": int(m.group(1).replace(",", "")),
            "published_at": f"{pub.group(1)}-{int(pub.group(2)):02d}-{int(pub.group(3)):02d} {pub.group(4)}",
        }
    except Exception as e:  # noqa: BLE001
        print(f"WARN: RE:TANAKA 銀製品リサイクル価格を取得できませんでした: {e}")
        return {}


def calc_purity_prices(au_per_g: int) -> dict:
    """K24 (Au 999.9) 価格から純度別の理論値を算出。

    純度比に基づく計算:
    - K10 = K24 × (10/24) × 業者買取係数（96%）
    - K14 = K24 × (14/24) × 業者買取係数
    - K18 = K24 × (18/24) × 業者買取係数
    - K22 = K24 × (22/24) × 業者買取係数

    田中貴金属の K24価格を「市場標準」として、業者買取はそこから約3-5%減で計算。
    """
    # 純度別の参考買取価格（業界平均係数を 0.96 として算出）
    factor = 0.96
    return {
        "k24": int(round(au_per_g * 1.0 * factor)),
        "k22": int(round(au_per_g * (22/24) * factor)),
        "k18": int(round(au_per_g * (18/24) * factor)),
        "k14": int(round(au_per_g * (14/24) * factor)),
        "k10": int(round(au_per_g * (10/24) * factor)),
        # ホワイトゴールド・ピンクゴールドはK18相当（純度同じ）
        "k18wg": int(round(au_per_g * (18/24) * factor)),
        "k18pg": int(round(au_per_g * (18/24) * factor)),
    }


def main():
    print(f"=== 田中貴金属から本日の価格を取得 ===")
    html = fetch_html()
    prices = parse_price(html)

    if "au_buyback_per_g" not in prices:
        print("ERROR: 金(Au)の店頭買取価格を取得できませんでした")
        sys.exit(1)

    purity = calc_purity_prices(prices["au_buyback_per_g"])
    retanaka = fetch_retanaka_ag()

    today = datetime.now().strftime("%Y-%m-%d")
    data = {
        "date": today,
        "source": URL,
        "source_label": "田中貴金属",
        "fetched_at": datetime.now().isoformat(),
        # 田中の地金価格の公表日時（JST・ページ表記）。休日は前営業日の値。
        # ⚠️ tanaka_official の中に入れない（各ページが Record<string, number> で読んでいる）
        "tanaka_published_at": prices.get("published_at"),
        # RE:TANAKA 銀製品リサイクル価格（Ag800〜1000 一律・1g税込）と発表日時。silver-kaitori 冒頭で使う。
        # ⚠️ これも tanaka_official の中に入れない（同上）
        "retanaka_ag_recycle_per_g": retanaka.get("ag_per_g"),
        "retanaka_published_at": retanaka.get("published_at"),
        "tanaka_official": {
            "au_buyback_per_g": prices.get("au_buyback_per_g"),
            "au_retail_per_g": prices.get("au_retail_per_g"),
            "pt_buyback_per_g": prices.get("pt_buyback_per_g"),
            "pt_retail_per_g": prices.get("pt_retail_per_g"),
            "ag_buyback_per_g": prices.get("ag_buyback_per_g"),
            "ag_retail_per_g": prices.get("ag_retail_per_g"),
        },
        # 純度別の参考買取価格（業者平均係数 0.96 で算出）
        "purity_buyback_estimate_per_g": purity,
        "note": "純度別価格は田中貴金属公開のK24店頭買取価格から純度比×業者買取平均係数0.96で算出した参考値です。実際の業者査定額は各社・状態・付属品により異なります。",
    }

    # 本日の価格を保存
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✓ {OUT_FILE} 保存完了")

    # 月別履歴ファイルに追記
    HISTORY_DIR.mkdir(parents=True, exist_ok=True)
    month = datetime.now().strftime("%Y-%m")
    hist_file = HISTORY_DIR / f"{month}.json"
    hist = []
    if hist_file.exists():
        try:
            hist = json.loads(hist_file.read_text())
        except Exception:
            hist = []
    # 同日重複削除（最新で上書き）
    hist = [h for h in hist if h.get("date") != today]
    hist.append({
        "date": today,
        "au_buyback": data["tanaka_official"]["au_buyback_per_g"],
        "pt_buyback": data["tanaka_official"]["pt_buyback_per_g"],
        "ag_buyback": data["tanaka_official"]["ag_buyback_per_g"],
        "k24": purity["k24"],
        "k22": purity["k22"],
        "k18": purity["k18"],
        "k14": purity["k14"],
        "k10": purity["k10"],
    })
    hist.sort(key=lambda x: x["date"])
    hist_file.write_text(json.dumps(hist, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✓ {hist_file} 履歴追記完了 ({len(hist)}日分)")

    # 全月をマージして相場推移用ファイルを生成（コンポーネントが単一ファイルをimportできるように）
    merged = []
    for f in sorted(HISTORY_DIR.glob("*.json")):
        if f.name == "gold-price-trend.json":
            continue
        try:
            merged.extend(json.loads(f.read_text()))
        except Exception:
            pass
    # 同日重複を除去（最後勝ち）・日付順
    by_date = {h["date"]: h for h in merged if h.get("date")}
    merged = [by_date[d] for d in sorted(by_date)]
    trend = merged[-60:]  # 直近60日分まで
    trend_file = ROOT / "data" / "gold-price-trend.json"
    trend_file.write_text(json.dumps(trend, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✓ {trend_file} 相場推移マージ完了 ({len(trend)}日分)")

    print(f"\n=== 本日の価格サマリ ({today}) ===")
    print(f"  Au (K24相当): {prices.get('au_buyback_per_g'):,}円/g")
    print(f"  Pt: {prices.get('pt_buyback_per_g'):,}円/g")
    print(f"  Ag: {prices.get('ag_buyback_per_g')}円/g")
    print(f"  → K18 参考買取: {purity['k18']:,}円/g")
    print(f"  → K14 参考買取: {purity['k14']:,}円/g")


if __name__ == "__main__":
    main()
