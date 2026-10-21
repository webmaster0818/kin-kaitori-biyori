#!/usr/bin/env python3
"""金買取びより（gold-biyori.com）のデザイン案を Nano Banana Pro で作る（2026-10-21 MediaXAI「サイトデザインを刷新・brandwatch のテイスト」）。
brandwatchbank / gakki（scripts/gen-design-proposals.py）と同じ進め方＝FV3案＋ロゴ3案を先に見せる。
  python3 scripts/gen-design-proposals.py [logo|fv|all]   → design-proposals/（リポには入れない・.git/info/exclude）
⚠️ 上限10生成（約20円/枚）。既に画像がある案は skip する（再生成は該当PNGを消してから）。
⚠️ FV の数字は out/ で確かめた事実だけ: 296ページ・比較4社（ヒカカク！/買取大吉/ウリエル/ティファナ）・手数料調査13社・毎朝更新。
   K24 1g 21,965円は 2026-10-21 の gold-spot-prices.json の値（実装では日次で自動更新）。
⚠️ 実在企業のロゴ・刻印（ミントマーク）を描かせない。金地金・金貨は無銘。人物・顔は入れない。
⚠️ FV の写真は「横はじ切らないこと」: 被写体を中央〜右寄りに置き、左右の端に重要物を置かない構図で指示する。
"""
import base64, json, os, sys, urllib.request
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent; OUT = ROOT / "design-proposals"; MODEL = "gemini-3-pro-image-preview"
def key():
    if os.environ.get("GEMINI_API_KEY"): return os.environ["GEMINI_API_KEY"]
    for l in (Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env").read_text().splitlines():
        if l.startswith("GEMINI_API_KEY="): return l.split("=", 1)[1].strip().strip('"')

# ロゴはマークのみ生成（文字は描かせない＝文字化けを避ける）。ワードマークは実フォントで後から組む。
LOGO = ("Minimal refined brand mark for a Japanese gold and precious metal buyback price guide website. "
        "Fine line art, single thin consistent stroke weight, geometric, quiet, timeless, generous negative space, centered on pure white, "
        "crisp vector-like edges, flat, no gradients, no shadows, no 3D, no glossy effects, no text, no letters, no numbers, "
        "no existing brand logos, no hallmarks. Colors: near-black #1a1a1a lines with at most one small accent in muted antique gold #a88a4f. Concept: ")
LOGOS = {
  "logo-a-ingot-sun": "the outline of a small gold ingot seen from the front as a trapezoid, with a thin horizon line across it and a half circle sun rising from the line, meaning a fine clear day (biyori)",
  "logo-b-coin-ledger": "a thin circle like a coin edge, inside it three short horizontal hairlines of different lengths like a daily price ledger, one of them in muted gold",
  "logo-c-fundo-weight": "a traditional Japanese balance weight (fundo) silhouette, the hourglass-like shape with two concave sides, drawn as a single thin outline, with one small dot in muted gold at its center",
}

FV_BASE = ("Website first-view hero design mockup, 16:9 desktop screen, for a Japanese gold buyback price and comparison guide site. "
  "Refined, mature, adult, modern, quiet luxury editorial design like a private bank or a fine jeweler, generous whitespace, thin 1px hairline borders, "
  "square corners (no rounded bubbly cards), restrained color, no emoji, no icons with gloss, no 3D illustrations, no purple, no neon, no starbursts, no sale banners. "
  "Elegant Japanese Mincho serif for the headline, clean Japanese gothic sans for UI text, generous letter spacing. "
  "Photorealistic still-life photography: generic unbranded gold, absolutely no logos, no readable stamps, no mint marks, no hallmarks, no text engraved on the gold, no people, no hands. "
  "Photo composition rule: the main subject sits in the center-right with wide empty margins on both the left and right edges, nothing important touches the image edges. "
  "All Japanese text rendered cleanly, legibly, exactly as given, and no other text: small header logo text 「金買取びより」 and nav "
  "「おすすめ業者」「本日の相場」「グラム計算機」「相場白書」「高く売る方法」, headline 「金の価値を、今日の相場で。」, sub copy 「純度別の買取目安を毎朝更新。買取サービス4社を公式情報で比較。」, "
  "a slim search box with placeholder 「品目・純度で探す（例：K18 ネックレス）」, two equal outline buttons 「今日の相場を見る」「おすすめ4社を比較」, "
  "a small price card 「本日のK24買取目安」「1g 21,965円」「10月21日 更新」, "
  "and a stat row with four items 「掲載 296ページ」「比較 4社」「手数料調査 13社」「毎朝更新」. ")
FVS = {
  "fv-1-noir": FV_BASE + "Palette: deep charcoal black #141414 background, warm champagne gold #b8975a used sparingly for hairlines and the price figure, off-white #efebe4 text. "
    "Layout: text block left-aligned in the left 45%; on the right a single plain unbranded gold bar resting on dark slate with two plain coins, low-key side lighting emerging from darkness; "
    "the price card is a thin-bordered rectangle under the buttons; stat row along the bottom separated by thin gold vertical dividers.",
  "fv-2-ivory": FV_BASE + "Palette: warm ivory #f5f2ec background, ink #1f1d1a text, muted brass #8a6d3b accent. "
    "Layout: left 45% headline, search and buttons on the ivory paper; right 50% a framed photo panel with a thin hairline border and margins on all sides (the photo does not bleed to the screen edge): "
    "a simple gold chain necklace and a plain gold ring on pale travertine stone in soft natural daylight with a soft shadow; "
    "the price card overlaps the bottom-left corner of the photo frame as a white card with a hairline border; stats as four bordered cells in one row beneath.",
  "fv-3-ink-green": FV_BASE + "Palette: deep ink green #13231c background, antique gold #c2a56a accent, off-white text, thin translucent hairlines. "
    "Layout: centered composition. A macro photo of two plain stacked unbranded gold bars centered in the frame with a soft dark vignette that fades to the ink green on both left and right sides; "
    "small eyebrow line, centered headline and sub copy above, a wide search box and the two buttons centered below; "
    "the price card as a small bordered box at the right of the search; a thin translucent stat strip along the bottom.",
}

def gen(name, prompt, aspect):
    out = OUT / f"{name}.png"
    if out.exists(): print("skip", name); return
    body = json.dumps({"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": aspect, "imageSize": "2K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={key()}"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=300) as r:
            d = json.loads(r.read())
    except Exception as e:
        print("error", name, type(e).__name__, str(e)[:200].replace(key() or "", "***")); return
    for p in d.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in p: out.write_bytes(base64.b64decode(p["inlineData"]["data"])); print("ok", name); return
    print("no image", name)

if __name__ == "__main__":
    from concurrent.futures import ThreadPoolExecutor
    w = sys.argv[1] if len(sys.argv) > 1 else "all"; OUT.mkdir(exist_ok=True)
    only = set(sys.argv[2].split(",")) if len(sys.argv) > 2 else None
    jobs = []
    if w in ("logo", "all"): jobs += [(n, LOGO + c, "1:1") for n, c in LOGOS.items()]
    if w in ("fv", "all"): jobs += [(n, p, "16:9") for n, p in FVS.items()]
    if only: jobs = [j for j in jobs if j[0] in only]
    with ThreadPoolExecutor(6) as ex: list(ex.map(lambda j: gen(*j), jobs))
