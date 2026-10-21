#!/usr/bin/env python3
"""配下ページの見出し帯（ファーストビュー）にテーマ画像を割り当てる（2026-10-21 MediaXAI 承認）。冪等。
gakki-kaitori-biyori の同名スクリプトと同じ考え方。

  python3 scripts/add-subhero-images-202610.py          … 割り当て＋page.tsx へ反映、data/subhero-map.json を書き出す
  python3 scripts/add-subhero-images-202610.py --check  … 書き換えずに件数だけ表示

- パンくず nav の親（max-w の div / main＝見出し帯を含むコンテナ）の開始タグに CSS 変数だけを足す:
    style={{ ["--subhero" as string]: "url(/images/subhero/<key>.webp)", ["--subhero-m" as string]: "url(/images/subhero/<key>-m.webp)" }}
  文言・リンク・見出し・metadata・JSON-LD には触れない。帯の描画は app/globals.css（「配下ページのテーマ画像」）。
- 割り当て: 記事＝TOPIC（記事ごとのテーマ）／地域記事＝都道府県→REGION_OF_PREF（記事数の多い都府県は a・b・c と回す）／
  記事以外＝PAGES。画像は scripts/gen-subhero-images-202610.py で作る。
- ⚠️ 地域記事を scripts/gen-area-articles.py・gen-area-batch2.py で再生成・新規作成したら、このスクリプトを再実行する
  （生成器のテンプレートには入れていない。新しい都市は AREAS の都道府県から自動で割り当たる）。
"""
import ast, json, re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
APP = ROOT / "app"
ARTICLES = APP / "articles"
IMG = ROOT / "public" / "images" / "subhero"

TOPIC = {
    "brand-jewelry-kin-kaitori": "brand-jewelry", "cartier-kaitori": "brand-a", "tiffany-kaitori": "brand-b",
    "bvlgari-kaitori": "brand-c", "harrywinston-kaitori": "brand-d", "vancleef-kaitori": "brand-e",
    "daikichi-vs-nanboya": "vs", "diamond-kaitori": "diamond", "gin-kaitori": "gin", "silver-kaitori": "silver",
    "hikakaku-kin-kaitori-kuchikomi": "compare", "ikkatsu-satei-hikaku": "compare", "ihin-seiri-kin": "ihin",
    "ingot-100g-kaitori": "ingot-100g", "k10-kaitori": "k10", "k14-kaitori": "k14", "k18-kaitori": "k18",
    "k22-kaitori": "k22", "k24-kaitori": "k24", "kaitori-houhou-hikaku": "houhou",
    "kin-200man-mynumber": "mynumber", "kin-baikyaku-mynumber": "mynumber", "kin-bracelet-kaitori": "bracelet",
    "kin-chain-kaitori": "chain", "kin-fuzokuhin-nashi": "fuzokuhin", "kin-gram-keisan": "gram-keisan",
    "kin-jundo-mikata": "jundo", "kin-kaitori-hajimete": "hajimete", "kin-kaitori-osusume": "osusume",
    "kin-kaitori-sagi": "sagi", "kin-kaitori-souba": "souba", "kin-kaitori-tesuryo-hikaku": "tesuryo",
    "kin-kaitori-tetsuzuki-guide": "tetsuzuki", "kin-kaitori-zeikin": "zeikin", "kin-kakutei-shinkoku": "kakutei",
    "kin-mekki-mikata": "mekki", "kin-necklace-kaitori": "necklace", "kin-nisemono-mikata": "nisemono",
    "kin-nobebo-kaitori": "nobebo", "kin-omosa-hakarikata": "omosa", "kin-pierce-kaitori": "pierce",
    "kin-souzoku-baikyaku": "souzoku", "kin-spot-vs-kaitori": "spot-vs", "kin-takaku-uru": "takaku-uru",
    "kin-uridoki-2026": "uridoki", "kin-yubiwa-kaitori": "yubiwa", "kin-zouyo-zeikin": "zouyo",
    "kinba-kaitori": "kinba", "kinka-ingot-kaitori": "kinka-ingot", "kinka-kaitori-guide": "kinka",
    "kinseido-kaitori-guide": "kinseido", "kintokei-rolex-kaitori": "kintokei", "kongyaku-yubiwa-uru": "kongyaku",
    "kowareta-kin-kaitori": "kowareta", "line-satei-seido": "line-satei", "platinum-kaitori": "platinum",
    "platinum-pt900-kaitori": "pt900", "shinju-kaitori": "shinju", "tentou-vs-takuhai": "tentou-takuhai",
    "vienna-kinka-kaitori": "vienna",
}
# 記事以外（帯を持つページだけ。privacy/terms/about/author/widget/404 は対象外）
PAGES = {
    "faq": "topic-faq", "kin-kaitori-hakusho": "topic-hakusho", "kin-kaitori-keisanki": "topic-gram-keisan",
    "souba-dashboard": "topic-dashboard", "articles": "topic-articles",
}
# 生成器（AREAS）に無い地域記事・駅記事の都道府県
PREF_FIX = {
    "chiba-kin-kaitori": "千葉県", "fukuoka-kin-kaitori": "福岡県", "ginza-kin-kaitori": "東京都",
    "hiroshima-kin-kaitori": "広島県", "ikebukuro-kin-kaitori": "東京都", "kobe-kin-kaitori": "兵庫県",
    "kyoto-kin-kaitori": "京都府", "nagoya-kin-kaitori": "愛知県", "okachimachi-kin-kaitori": "東京都",
    "omiya-kin-kaitori": "埼玉県", "osaka-kin-kaitori": "大阪府", "sapporo-kin-kaitori": "北海道",
    "sendai-kin-kaitori": "宮城県", "tokyo-kin-kaitori": "東京都", "umeda-kin-kaitori": "大阪府",
    "yokohama-kin-kaitori": "神奈川県", "hisayaodori-eki-kin-kaitori": "愛知県", "sako-eki-kin-kaitori": "愛知県",
}
_R = {
    "hokkaido": "北海道", "tohoku": "青森県 岩手県 宮城県 秋田県 山形県 福島県", "tokyo": "東京都", "kanagawa": "神奈川県",
    "saitama": "埼玉県", "chiba": "千葉県", "kitakanto": "茨城県 栃木県 群馬県", "hokuriku": "新潟県 富山県 石川県 福井県",
    "koshin": "山梨県 長野県", "aichi": "愛知県", "shizuoka": "静岡県", "gifu-mie": "岐阜県 三重県", "osaka": "大阪府",
    "kyoto": "京都府 奈良県 滋賀県 和歌山県", "hyogo": "兵庫県", "chugoku": "鳥取県 島根県 岡山県 広島県 山口県",
    "shikoku": "徳島県 香川県 愛媛県 高知県", "kyushu": "福岡県 佐賀県 長崎県 熊本県 大分県 宮崎県 鹿児島県", "okinawa": "沖縄県",
}
REGION_OF_PREF = {p: r for r, ps in _R.items() for p in ps.split()}
# 記事数の多い地域は写真を回す（同じ写真が続かないように）
REGION_VARIANTS = {"tokyo": "abc", "kanagawa": "ab", "aichi": "ab", "osaka": "ab", "kyushu": "ab"}

# パンくず nav の直前の開始タグ（コンテナ）。既に付けた style は外してから付け直す（冪等）
OPEN_RX = re.compile(r'(<(div|main)\b)([^>]*?)(>\s*(?:\{/\*.*?\*/\}\s*)?<nav\b)', re.S)
STYLE_RX = re.compile(r'\s*style=\{\{ \["--subhero" as string\]: "[^"]*", \["--subhero-m" as string\]: "[^"]*" \}\}')


def area_prefs():
    out = {}
    for f, var in (("gen-area-articles.py", "AREAS"), ("gen-area-batch2.py", "AREAS2")):
        s = (ROOT / "scripts" / f).read_text()
        i = s.index("[", re.search(rf"^{var}\s*=", s, re.M).end() - 1)
        depth = 0
        for k in range(i, len(s)):
            depth += {"[": 1, "]": -1}.get(s[k], 0)
            if depth == 0:
                break
        for a in ast.literal_eval(s[i:k + 1]):
            out[a[0]] = a[2]
    return out


def assign():
    meta = {m["slug"]: m for m in json.loads((ROOT / "data" / "articles-metadata.json").read_text())}
    prefs = {**area_prefs(), **PREF_FIX}
    slugs = sorted(d.name for d in ARTICLES.iterdir() if (d / "page.tsx").is_file())
    mapping, region_order = {}, {}
    for s in slugs:
        if s in TOPIC:
            mapping[s] = "topic-" + TOPIC[s]
        elif s in prefs:
            region_order.setdefault(REGION_OF_PREF[prefs[s]], []).append(s)
        else:
            print("⚠️ 割り当てなし（写真なしの帯のまま）:", s, meta.get(s, {}).get("category"))
    for area, items in region_order.items():
        v = REGION_VARIANTS.get(area)
        for i, s in enumerate(sorted(items)):
            mapping[s] = f"region-{area}-{v[i % len(v)]}" if v else f"region-{area}"
    files = {f"articles/{s}": ARTICLES / s / "page.tsx" for s in slugs}
    for p, k in PAGES.items():
        files[p] = APP / p / "page.tsx"
        mapping[p] = k
    return files, {(f"articles/{s}" if s not in PAGES else s): k for s, k in mapping.items()}


def main():
    check = "--check" in sys.argv
    files, mapping = assign()
    applied, missing_img, no_band, unchanged = {}, [], [], 0
    for name, f in sorted(files.items()):
        src = f.read_text()
        m = OPEN_RX.search(src)
        if not m:
            no_band.append(name)
            continue
        k = mapping.get(name)
        if k and not (IMG / f"{k}.webp").exists():
            missing_img.append((name, k))
            k = None
        attrs = STYLE_RX.sub("", m.group(3))
        if k:
            attrs += (f' style={{{{ ["--subhero" as string]: "url(/images/subhero/{k}.webp)", '
                      f'["--subhero-m" as string]: "url(/images/subhero/{k}-m.webp)" }}}}')
            applied[name] = k
        new = src[:m.start()] + m.group(1) + attrs + m.group(4) + src[m.end():]
        if new == src:
            unchanged += 1
        elif not check:
            f.write_text(new)
    if not check:
        (ROOT / "data" / "subhero-map.json").write_text(json.dumps(applied, ensure_ascii=False, indent=1, sort_keys=True) + "\n")
    print(f"pages {len(files)} / 画像あり {len(applied)} / 帯なし {len(no_band)} {no_band} / 変更なし {unchanged} / "
          f"画像ファイル未作成 {len(missing_img)}")
    if missing_img:
        print("  未作成:", sorted({k for _, k in missing_img}))
    used = sorted(set(applied.values()))
    print(f"使っている画像 {len(used)} 枚")


if __name__ == "__main__":
    main()
