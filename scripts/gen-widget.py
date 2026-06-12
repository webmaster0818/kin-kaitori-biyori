#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""金価格ウィジェット生成: data/gold-spot-prices.json → public/widget.js / public/widget.html
日次更新スクリプト(daily-gold-update.sh)のビルド前に実行され、毎日自動で最新化される。
widget.js = 設置先DOMに直接描画（gold-biyori.comへのリンクを含む＝被リンク装置）。
widget.html = iframe派向けのスタンドアロン版。
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
d = json.load(open(os.path.join(ROOT, "data", "gold-spot-prices.json")))
date = d["date"]
p = d["purity_buyback_estimate_per_g"]
k24, k18, k14 = round(p["k24"]), round(p["k18"]), round(p["k14"])

fmt = lambda v: f"{v:,}"

JS = f"""(function() {{
  var s = document.currentScript;
  if (!s) return;
  var box = document.createElement('div');
  box.setAttribute('style', 'box-sizing:border-box;max-width:320px;font-family:-apple-system,\"Hiragino Sans\",\"Noto Sans JP\",sans-serif;border:1px solid #d9c58a;border-radius:12px;padding:14px 16px;background:linear-gradient(135deg,#fffdf5,#faf3df);color:#3a3326;line-height:1.5;');
  box.innerHTML = '<div style="font-size:11px;color:#8a7a55;margin-bottom:4px;">本日の金買取相場の目安（{date}・田中貴金属公表値より純度換算）</div>'
    + '<div style="font-size:22px;font-weight:700;color:#9a7b2d;">K24 {fmt(k24)}円<span style="font-size:12px;font-weight:400;">/g</span></div>'
    + '<div style="font-size:13px;margin-top:2px;">K18 {fmt(k18)}円/g ・ K14 {fmt(k14)}円/g</div>'
    + '<div style="font-size:11px;margin-top:8px;"><a href="https://gold-biyori.com/souba-dashboard/" target="_blank" rel="noopener" style="color:#9a7b2d;text-decoration:underline;">金買取日和｜金価格ダッシュボード</a>（毎日自動更新）</div>'
    + '<div style="font-size:10px;color:#9b8e6e;margin-top:4px;">※理論上の目安。実際の買取額は業者・状態により異なります。</div>';
  s.parentNode.insertBefore(box, s);
}})();
"""

HTML = f"""<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="robots" content="noindex">
<title>本日の金買取相場ウィジェット | 金買取日和</title></head>
<body style="margin:0;padding:8px;background:transparent;">
<script src="https://gold-biyori.com/widget.js"></script>
</body></html>
"""

open(os.path.join(ROOT, "public", "widget.js"), "w", encoding="utf-8").write(JS)
open(os.path.join(ROOT, "public", "widget.html"), "w", encoding="utf-8").write(HTML)
print(f"widget generated: K24={k24} ({date})")
