#!/usr/bin/env python3
"""TOP ファーストビュー（デザイン② Ivory）の額装写真を Nano Banana Pro で1枚作る（2026-10-21 MediaXAI「②、B」）。
  python3 scripts/gen-hero-ivory.py [name]  → design-proposals/{name}.png（既にあれば skip）
⚠️ 上限3生成。文字・ロゴ・刻印・人物なし。左右の端に重要物を置かない構図（額の中で contain 表示するため）。
キーは scripts/gen-design-proposals.py と同じ（~/.openclaw/workspace/secrets/shiroari-expert-keys.env）。表示しない。
"""
import base64, json, sys, urllib.request
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from importlib import import_module
gdp = import_module("gen-design-proposals")

PROMPT = (
    "Photorealistic editorial still-life photograph, landscape 4:3. "
    "A thin plain gold curb chain necklace draped in a soft loose curve and a single plain polished gold band ring, "
    "resting on a pale ivory travertine stone slab with natural small pores, on a warm off-white linen surface. "
    "Soft natural daylight from the upper left through a window, gentle long soft shadows, warm neutral color grade, "
    "muted ivory, beige and brass tones, calm quiet luxury, shallow depth of field, fine jewelry catalogue quality. "
    "Composition: the subject sits in the center of the frame with generous empty space on the left and right edges; "
    "nothing important touches any edge of the image. "
    "Absolutely no text, no letters, no numbers, no logos, no hallmarks, no stamps or engravings on the gold, "
    "no watermark, no people, no hands, no faces, no props other than the stone and linen."
)

if __name__ == "__main__":
    name = sys.argv[1] if len(sys.argv) > 1 else "hero-ivory-1"
    gdp.OUT.mkdir(exist_ok=True)
    out = gdp.OUT / f"{name}.png"
    if out.exists():
        print("skip", name); sys.exit()
    body = json.dumps({"contents": [{"parts": [{"text": PROMPT}]}],
                       "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "4:3", "imageSize": "2K"}}}).encode()
    k = gdp.key()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{gdp.MODEL}:generateContent?key={k}"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"}), timeout=300) as r:
            d = json.loads(r.read())
    except Exception as e:
        print("error", type(e).__name__, str(e)[:200].replace(k or "", "***")); sys.exit(1)
    for p in d.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in p:
            out.write_bytes(base64.b64decode(p["inlineData"]["data"])); print("ok", out); sys.exit()
    print("no image")
