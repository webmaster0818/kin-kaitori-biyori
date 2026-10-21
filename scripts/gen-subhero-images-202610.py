#!/usr/bin/env python3
"""配下ページの見出し帯（ファーストビュー）用テーマ画像を Nano Banana Pro で作る（2026-10-21 MediaXAI 承認・上限3,000円）。
gakki-kaitori-biyori の同名スクリプトと同じ構成。トーンは TOP の hero-ivory.webp（生成り・トラバーチン・自然光・真鍮）。

  python3 scripts/gen-subhero-images-202610.py <key ...|all|topic|region> [--force]
    → design-proposals/subhero-raw/<key>.png（元画像・リポ外）
    → public/images/subhero/<key>.webp（PC 1400px）と <key>-m.webp（スマホ用に右側を切り出し 780px）
  python3 scripts/gen-subhero-images-202610.py --convert-only [key ...]   … 元画像から webp だけ作り直す
  python3 scripts/gen-subhero-images-202610.py --list                     … キーとプロンプトの一覧

⚠️ 1回の API 呼び出し＝1枚の課金（約20円）。呼び出しは design-proposals/subhero-raw/_calls.log に1行ずつ記録する（上限 CAP）。
⚠️ 文字・ロゴ・刻印・人物・手なし。ブランド記事は実在ブランドの意匠（モチーフ・ロゴ・箱・色）を描かない＝無銘のジュエリー。
⚠️ 被写体は右側、左 45% は無地の明るい背景（帯の文字側へ溶かすため）。21:9 で作る（帯の横長に合わせる）。
ページへの割り当ては scripts/add-subhero-images-202610.py（data/subhero-map.json）。
"""
import base64, json, os, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "design-proposals" / "subhero-raw"
OUT = ROOT / "public" / "images" / "subhero"
LOG = RAW / "_calls.log"
MODEL = "gemini-3-pro-image-preview"
CAP = 140


def key():
    if os.environ.get("GEMINI_API_KEY"):
        return os.environ["GEMINI_API_KEY"]
    for l in (Path.home() / ".openclaw/workspace/secrets/shiroari-expert-keys.env").read_text().splitlines():
        if l.startswith("GEMINI_API_KEY="):
            return l.split("=", 1)[1].strip().strip('"')


STYLE = (
    "Photorealistic editorial still-life photograph for a quiet-luxury fine jewellery catalogue, shot on a full-frame camera "
    "with a 90mm lens at f/2.8, natural perspective, real materials with subtle real-world texture, gentle film grain. "
    "Soft natural daylight from the upper left through a window, gentle long soft shadows, warm neutral colour grade: "
    "muted ivory, warm linen beige, pale travertine and soft brass-gold tones. Light and airy, never dark or low-key. "
    "Ultra-wide 21:9 composition: the main subject is compact and sits in the RIGHT 40% of the frame, vertically centred, "
    "with generous empty margin above and below it (not touching any edge). The LEFT 50% of the frame is a calm, plain, "
    "very light ivory linen or stone surface gently out of focus, with nothing in it. "
    "No people, no faces, no hands, no human figures. "
    "Absolutely no text, letters, numbers, logos, brand names, monograms, hallmarks, stamps or engravings anywhere; "
    "papers, cards, boxes, tags and screens are completely blank and unbranded. "
    "Jewellery must be physically correct and realistic: continuous, evenly linked chains without melted or fused links, "
    "round rings of uniform thickness, correct prong settings, objects resting naturally on the surface with real contact shadows. "
    "The background is one continuous, seamless surface without a hard vertical split or panel edge. "
    "Not a 3D render, no CGI look, no glossy plastic look, no floating objects, no impossible reflections, "
    "no perfect symmetry, no sparkles or glow effects, no dark background, no surreal elements, no collage."
)

# ---- テーマ（記事の内容に合わせた静物）----
TOPIC = {
    # 純度
    "k24": "a small plain pure-gold bar with a smooth blank face (no stamp) beside a little pile of rich deep-yellow gold casting grains, on a pale travertine slab",
    "k22": "a plain heavy deep-yellow 22-karat gold band ring beside a short neat stack of deep-yellow gold coins seen from a low side angle so that only their reeded edges show (no coin face visible), on a pale travertine slab over linen",
    "k18": "a plain polished yellow-gold band ring and a fine yellow-gold cable chain draped in a soft curve, on a pale travertine slab",
    "k14": "a slim gold ring with a slightly paler, softer gold colour and a thin pale-gold chain bracelet, on warm off-white linen",
    "k10": "a delicate pale-gold necklace with a tiny round pendant and a pair of small pale-gold stud earrings, on warm off-white linen",
    "kinseido": "three plain band rings side by side in yellow gold, white gold and rose gold, resting on a pale travertine slab",
    # 品目
    "bracelet": "a heavy yellow-gold curb (kihei) link chain bracelet with flat, evenly linked links, laid in a loose oval on a pale travertine slab",
    "chain": "a long yellow-gold rope chain loosely coiled in a soft spiral on warm linen, every link continuous and even",
    "necklace": "a yellow-gold necklace with a small plain round gold pendant, draped in a gentle S-curve over a folded ivory linen cloth",
    "yubiwa": "four different plain gold rings (a wide band, a slim band, a ring with a small round stone, a signet ring with a blank face) standing and lying on a pale stone tray",
    "pierce": "several pairs of gold earrings (small hoops, simple studs and a short drop pair) arranged on a small round ivory ceramic dish",
    "kinba": "a few small dental gold crowns and a gold inlay resting in a small shallow white porcelain dish on linen, clean and clinical yet calm",
    "kowareta": "a broken thin gold chain with a snapped link, a single gold earring without its pair and a bent gold ring, lying on linen",
    "nobebo": "three plain gold bars of different sizes with smooth blank faces (no stamps) stacked casually on a pale travertine slab",
    "ingot-100g": "one small plain rectangular gold bar with a smooth blank face (no stamp) lying on a folded ivory linen cloth on stone",
    "kinka": "three short neat stacks of gold bullion coins of slightly different diameters, seen from a low side angle so that only the reeded edges are visible and no coin face is visible, on a pale travertine slab",
    "vienna": "a clear plastic cylindrical coin tube lying on its side on ivory linen, filled with a stack of gold coins seen edge-on so that only their reeded edges show (no coin face visible)",
    "kinka-ingot": "a short neat stack of gold coins photographed exactly side-on at table level so that the top face of the stack is not visible at all, only the reeded edges, beside a small plain gold bar with a smooth blank face, on a pale travertine slab",
    "kintokei": "a yellow-gold men's dress wristwatch with a plain cream dial with only simple thin baton markers and no numerals or writing, a smooth round case, a smooth bezel and a brown leather strap, lying on linen",
    "platinum": "a plain polished platinum band ring and a fine platinum chain, cool silvery-white metal, on a pale travertine slab",
    "pt900": "two plain platinum wedding bands of different widths, one standing and one lying, on a pale grey-beige stone slab",
    "diamond": "a platinum solitaire engagement ring with a round brilliant diamond in a simple four-prong setting, on a pale travertine slab",
    "shinju": "a single strand of round white pearls with soft natural lustre, loosely coiled on ivory linen",
    "gin": "antique sterling silver tableware: two spoons, a small cup and a little tray, clearly bright cool silver-white metal (not brass, not gold), on pale linen",
    "silver": "a chunky sterling silver chain bracelet and a plain silver bangle on a pale stone slab, cool soft highlights",
    # 見分け方・量り方
    "jundo": "a polished gold ring lying on its side next to a brass jeweller's loupe, the inside of the ring smooth and plain, on a travertine slab",
    "nisemono": "a gold chain necklace beside a small plain round grey magnet, on a pale travertine slab, an inspecting mood",
    "mekki": "an old gold-plated bracelet with slightly worn edges beside a brass jeweller's loupe on linen",
    "omosa": "a small shallow round brass weighing pan resting on a pale stone slab and holding a gold chain, with three small cylindrical unmarked brass weights standing beside it",
    "gram-keisan": "a set of small cylindrical brass weights without any markings standing beside a gold chain on a pale stone slab",
    "spot-vs": "a small plain gold bar with a blank face and a finished gold ring placed side by side on a travertine slab",
    # 売り方・手続き
    "osusume": "a calm arrangement of a gold ring, a short gold chain and a small plain gold bar with a blank face on a pale travertine slab, like a curated selection",
    "compare": "three small gold items (a ring, a pair of earrings, a short chain) lined up in a row on three small pale stone tiles on linen, a comparing mood",
    "vs": "two small pale travertine slabs side by side, each holding one gold ring, on warm linen",
    "souba": "a closed linen-bound notebook and a brass pencil beside a gold chain and a ring on a stone desk, no writing visible",
    "uridoki": "a small brass-framed hourglass with pale sand beside a gold ring on a travertine slab, morning light",
    "takaku-uru": "gold jewellery being polished: a soft cotton polishing cloth with a gold bracelet and a ring on linen",
    "fuzokuhin": "a gold ring resting on a small plain kraft paper envelope on linen, no box",
    "hajimete": "a small drawstring linen pouch with a gold ring and a short gold chain resting beside it on a pale travertine slab",
    "tetsuzuki": "a few completely blank sheets of paper, a brass pen and a gold ring on a pale wooden desk",
    "sagi": "a small closed wooden jewellery box with a little brass lock and key on linen, a careful, protective mood",
    "tesuryo": "a small brass dish holding a gold ring and a gold earring, beside a closed plain ivory envelope on a stone tabletop",
    "houhou": "a small plain kraft cardboard shipping box, a linen pouch and a gold chain arranged on a pale wooden table",
    "tentou-takuhai": "a plain kraft cardboard box with its lid open and a gold bracelet in a linen pouch inside it, on a pale table",
    "line-satei": "a smartphone lying face down beside a gold ring and a short gold chain on a travertine slab",
    "zeikin": "a wooden Japanese soroban abacus beside a small gold bar with a blank face and a few blank sheets of paper on a pale desk",
    "kakutei": "a clear plastic document folder with completely blank papers, a brass pen and a small plain gold bar with a blank face on a pale desk",
    "zouyo": "a gold bracelet in a plain open ivory gift box with a loosely tied natural linen ribbon, no logo",
    "souzoku": "an old wooden keepsake box with its lid open, holding vintage gold jewellery (a plain gold bar brooch, a ring and a chain; no cameo, no carved figures or faces), on linen",
    "ihin": "a quiet Japanese room with soft shoji light, a low wooden chest with a small open drawer revealing old gold rings and a chain",
    "mynumber": "a plain blank white card with no printing, a brass pen and a small gold bar with a blank face on a pale desk",
    "kongyaku": "a diamond engagement ring and a plain gold wedding band together on a folded ivory linen cloth beside a few dried flowers",
    # 記事以外のページ（FAQ・白書・相場ダッシュボード・記事一覧）。計算機は gram-keisan を流用
    "faq": "a gold ring and a pair of small gold earrings beside a closed linen-bound notebook on a pale travertine slab",
    "hakusho": "a closed cloth-bound book with a blank cover, a small plain gold bar with a blank face resting on it, on a pale stone desk",
    "dashboard": "a small plain gold bar with a blank face, a platinum ring and a small plain silver bar with a blank face on three stepped pale travertine blocks",
    "articles": "a calm flat-lay of assorted gold jewellery (a ring, a chain, a pair of earrings, a small bangle) on one single continuous sheet of warm ivory linen that fills the entire frame edge to edge (no table edge, no wall, no second surface)",
    # ブランド（実在ブランドの意匠は描かない＝無銘）
    "brand-jewelry": "an assortment of unbranded fine jewellery: a gold ring with a small diamond, a pair of pearl stud earrings and a fine gold pendant necklace, on a pale travertine slab",
    "brand-a": "a smooth, plain, polished yellow-gold oval bangle with no screws, no studs and no ornament, beside a slim plain gold ring, on a pale travertine slab",
    "brand-b": "a delicate platinum pendant necklace with a single small round diamond on a fine chain, on ivory linen, unbranded",
    "brand-c": "a chunky rose-gold ring with a smooth domed band and a pair of simple rose-gold hoop earrings, on a pale stone slab, unbranded, no spiral or coil shapes",
    "brand-d": "a platinum cocktail ring with a round cluster of small diamonds around a central round diamond, on ivory linen, unbranded",
    "brand-e": "a fine yellow-gold necklace with a few small round cabochon stones in pale coral and white, simple round shapes only (no flowers, no clovers), lying on one single continuous sheet of pale linen that fills the entire frame edge to edge (no table edge, no wall, no second surface)",
}

# ---- 地域。実在のランドマーク・看板・文字は描かない。ジュエリーは右、窓や素材で土地の空気 ----
REGION = {
    "hokkaido": "a gold ring on a pale birch-wood tray beside a window; outside, softly blurred falling snow and white birch trees in pale daylight",
    "tohoku": "a short gold chain on a hand-woven pale linen cloth on a light wooden table; through a window, softly blurred snowy fields and distant gentle hills",
    "tokyo-a": "a gold ring and a short gold chain on a pale travertine slab by a large window; outside, an out-of-focus pale daytime city of generic high-rise buildings",
    "tokyo-b": "a gold bracelet on a light oak counter in a minimal modern interior with pale plaster walls; soft afternoon city light through a tall window, blurred generic buildings",
    "tokyo-c": "a gold necklace on a pale stone ledge beside a window with thin vertical wooden louvres casting soft striped shadows, a calm contemporary Japanese interior",
    "kanagawa-a": "a gold ring on a pale driftwood-coloured wooden tray by a window; outside, a softly blurred calm sea and pale sky",
    "kanagawa-b": "a gold chain on ivory linen by a window with an out-of-focus harbour view of a pale waterfront with generic low buildings",
    "saitama": "a gold ring on a pale ceramic plate on a light wooden table; through a window, softly blurred quiet suburban trees and low houses",
    "chiba": "a gold bracelet on a pale stone slab; through a window, softly blurred flat open fields and a distant pale coastline",
    "kitakanto": "a gold ring on a pale wooden tray; through a window, softly blurred rolling green hills and a distant mountain ridge",
    "hokuriku": "a gold chain on a pale washi-paper covered tray in a quiet room with soft diffused light; through a window, a pale overcast sky over blurred tiled roofs",
    "koshin": "a gold ring on a light wooden table; through a window, softly blurred layered mountain ridges and vineyards in pale morning haze",
    "aichi-a": "a gold necklace on a pale travertine slab by a large window; outside, an out-of-focus pale modern city with generic towers",
    "aichi-b": "a gold ring on a pale ceramic dish with a soft glazed texture (like local pottery) on light wood, soft daylight",
    "shizuoka": "a gold chain on a pale wooden tray beside a small cup of green tea; through a window, softly blurred green tea fields",
    "gifu-mie": "a gold ring on a pale stone; through a window, a softly blurred clear river and green forested hills",
    "osaka-a": "a gold bracelet on a pale stone counter by a large window; outside, an out-of-focus pale bright city with generic buildings",
    "osaka-b": "a short gold chain on a light wooden counter in a calm modern interior with warm pale plaster walls and soft afternoon light",
    "kyoto": "a gold ring on a pale tatami mat with soft light filtered through a paper shoji screen, a small moss garden softly blurred outside",
    "hyogo": "a gold necklace on a pale travertine slab by a window; outside, softly blurred green hills sloping down to a calm harbour",
    "chugoku": "a gold ring on a pale wooden tray; through a window, a calm inland sea with small softly blurred green islands in pale light",
    "shikoku": "a gold chain on a pale linen cloth; through a window, a softly blurred clear river valley and green hills",
    "kyushu-a": "a gold bracelet on a pale stone slab; through a window, a softly blurred calm sea and green volcanic hills in pale light",
    "kyushu-b": "a gold ring on a pale ceramic dish with a soft porcelain glaze on light wood, soft daylight, calm",
    "okinawa": "a gold necklace on a pale coral-stone surface by a window; outside, a softly blurred turquoise sea and white sand in bright soft light",
}


def prompts():
    p = {}
    for k, s in TOPIC.items():
        p[f"topic-{k}"] = f"Subject: {s}. " + STYLE
    for k, s in REGION.items():
        p[f"region-{k}"] = (f"Scene: {s}. A calm, quiet, local atmosphere in Japan, no landmarks, no signs, no writing. "
                            "The jewellery and the window view sit in the right half; the left half is a plain, very light, "
                            "softly out-of-focus wall or surface. " + STYLE)
    return p


def calls():
    return len(LOG.read_text().splitlines()) if LOG.exists() else 0


def gen(name, prompt, extra=""):
    if calls() >= CAP:
        sys.exit(f"CAP {CAP} reached")
    body = json.dumps({"contents": [{"parts": [{"text": (extra + " " if extra else "") + prompt}]}],
                       "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "21:9", "imageSize": "2K"}}}).encode()
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent"
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json", "x-goog-api-key": key()})
    with LOG.open("a") as f:
        f.write(f"{time.strftime('%H:%M:%S')} {name}\n")
    d = None
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=300) as r:
                d = json.loads(r.read())
            break
        except Exception as e:  # タイムアウト等。再送は課金されうるので1回だけ、ログにも数える
            print("ERR", name, type(e).__name__, str(e)[:200], flush=True)
            if attempt == 1 or calls() >= CAP:
                return False
            with LOG.open("a") as f:
                f.write(f"{time.strftime('%H:%M:%S')} {name} (resend)\n")
            time.sleep(5)
    for part in d.get("candidates", [{}])[0].get("content", {}).get("parts", []):
        if "inlineData" in part:
            raw = RAW / f"{name}.png"
            if raw.exists():  # 作り直し前の版は残す
                raw.rename(RAW / f"{name}.prev{int(time.time())}.png")
            raw.write_bytes(base64.b64decode(part["inlineData"]["data"]))
            print("ok", name, f"(calls={calls()})", flush=True)
            return True
    print("no image", name, json.dumps(d)[:300], flush=True)
    return False


# スマホ用の切り出し（被写体のある右側）。画像ごとに調整が要るときはここに (左, 上, 右, 下) の比率を書く
M_CROP = {}
M_CROP_DEFAULT = (0.30, 0.0, 1.0, 1.0)


def convert(name):
    from PIL import Image
    src = RAW / f"{name}.png"
    im = Image.open(src).convert("RGB")
    w, h = im.size
    pc = im.resize((1400, round(1400 * h / w)), Image.LANCZOS)
    pc.save(OUT / f"{name}.webp", "WEBP", quality=74, method=6)
    l, t, r, b = M_CROP.get(name, M_CROP_DEFAULT)
    m = im.crop((round(w * l), round(h * t), round(w * r), round(h * b)))
    m = m.resize((780, round(780 * m.size[1] / m.size[0])), Image.LANCZOS)
    m.save(OUT / f"{name}-m.webp", "WEBP", quality=72, method=6)


if __name__ == "__main__":
    RAW.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    P = prompts()
    if "--list" in sys.argv:
        for k, v in P.items():
            print(k, "|", v[:120])
        print(len(P), "keys")
        sys.exit()
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    force = "--force" in sys.argv
    extra = ""
    if "--extra" in sys.argv:  # 作り直し時の追加指示（例: --extra "The chain must be..."）は環境変数で渡す
        extra = os.environ.get("SUBHERO_EXTRA", "")
    sel = []
    for a in args or ["all"]:
        if a == "all":
            sel += list(P)
        elif a in ("topic", "region"):
            sel += [k for k in P if k.startswith(a + "-")]
        elif a in P:
            sel.append(a)
        else:
            sys.exit(f"unknown key {a}")
    if "--convert-only" in sys.argv:
        for k in sel:
            if (RAW / f"{k}.png").exists():
                convert(k)
        sys.exit()
    for k in sel:
        if (RAW / f"{k}.png").exists() and not force:
            continue
        if gen(k, P[k], extra):
            convert(k)
    print("total calls", calls())
