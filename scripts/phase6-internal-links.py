#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""③内部リンク最適化: 地域記事に「近隣エリア」(同一都道府県→同一地方)の
相互リンクを注入し、新規99記事への被リンク（既存→新規の双方向）を密にする。冪等。
"""
import importlib.util, json, os, re

ROOT = os.path.expanduser("~/projects/kin-kaitori-biyori")
ART = os.path.join(ROOT, "app/articles")
META = os.path.join(ROOT, "data/articles-metadata.json")

def load(name, path):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, path))
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m); return m

g1 = load("g1", "scripts/gen-area-articles.py")
g2 = load("g2", "scripts/gen-area-batch2.py")

# slug -> (city, pref, region)
geo = {}
for a in g1.AREAS:  geo[a[0]] = (a[1], a[2], a[3])
for a in g2.AREAS2: geo[a[0]] = (a[1], a[2], a[3])

# 初期ジェネレータ由来で geo に無い主要都市を手当て
MANUAL = {
 "tokyo-kin-kaitori": ("東京", "東京都", "kanto"),
 "ginza-kin-kaitori": ("銀座", "東京都", "kanto"),
 "ikebukuro-kin-kaitori": ("池袋", "東京都", "kanto"),
 "okachimachi-kin-kaitori": ("御徒町", "東京都", "kanto"),
 "yokohama-kin-kaitori": ("横浜", "神奈川県", "kanto"),
 "omiya-kin-kaitori": ("大宮", "埼玉県", "kanto"),
 "chiba-kin-kaitori": ("千葉", "千葉県", "kanto"),
 "nagoya-kin-kaitori": ("名古屋", "愛知県", "chubu"),
 "osaka-kin-kaitori": ("大阪", "大阪府", "kinki"),
 "umeda-kin-kaitori": ("梅田", "大阪府", "kinki"),
 "kyoto-kin-kaitori": ("京都", "京都府", "kinki"),
 "kobe-kin-kaitori": ("神戸", "兵庫県", "kinki"),
 "hiroshima-kin-kaitori": ("広島", "広島県", "chugoku-shikoku"),
 "fukuoka-kin-kaitori": ("福岡", "福岡県", "kyushu"),
 "sapporo-kin-kaitori": ("札幌", "北海道", "hokkaido-tohoku"),
 "sendai-kin-kaitori": ("仙台", "宮城県", "hokkaido-tohoku"),
}
geo.update({k: v for k, v in MANUAL.items() if k not in geo})

meta = json.load(open(META, encoding="utf-8"))
region_slugs = [m["slug"] for m in meta if m["category"] == "region" and m["slug"] in geo]

# 都道府県・地方ごとに分類
by_pref, by_region = {}, {}
for s in region_slugs:
    city, pref, region = geo[s]
    by_pref.setdefault(pref, []).append(s)
    by_region.setdefault(region, []).append(s)

MAX_LINKS = 8

def neighbors(slug):
    city, pref, region = geo[slug]
    out = []
    # 1) 同一都道府県（自分以外）
    same_pref = [x for x in by_pref.get(pref, []) if x != slug]
    # 県内の主要都市（県名一致 or 短い名前）を優先的に前へ寄せる
    same_pref.sort(key=lambda x: (geo[x][0] not in (pref.replace("県","").replace("都","").replace("府","").replace("道","")), x))
    out.extend(same_pref)
    # 2) 同一地方で補完
    if len(out) < MAX_LINKS:
        same_region = [x for x in by_region.get(region, []) if x != slug and x not in out]
        out.extend(same_region)
    # 重複除去・上限
    seen, res = set(), []
    for x in out:
        if x not in seen:
            seen.add(x); res.append(x)
        if len(res) >= MAX_LINKS:
            break
    return res

IMPORT = 'import { NearbyAreas } from "@/components/NearbyAreas";'

done, skipped = 0, 0
for slug in region_slugs:
    page = os.path.join(ART, slug, "page.tsx")
    if not os.path.exists(page):
        continue
    src = open(page, encoding="utf-8").read()
    if "<NearbyAreas" in src:
        skipped += 1; continue
    m = re.search(r'<RelatedArticles\b', src)
    if not m:
        skipped += 1; continue

    nbrs = neighbors(slug)
    if not nbrs:
        skipped += 1; continue
    _, pref, _ = geo[slug]
    areas_js = ", ".join('{ slug: "%s", label: "%s" }' % (n, geo[n][0]) for n in nbrs)

    # import 追加
    rel_imp = re.search(r'^import RelatedArticles .*$', src, re.MULTILINE)
    if rel_imp and IMPORT not in src:
        src = src[:rel_imp.end()] + "\n" + IMPORT + src[rel_imp.end():]

    # RelatedArticles 直前に注入（インデント踏襲）
    pos = src.find("<RelatedArticles")
    line_start = src.rfind("\n", 0, pos) + 1
    indent = re.match(r"[ \t]*", src[line_start:]).group(0)
    block = f'{indent}<NearbyAreas pref="{pref}" areas={{[{areas_js}]}} />\n'
    src = src[:line_start] + block + src[line_start:]

    open(page, "w", encoding="utf-8").write(src)
    done += 1

print(f"✓ NearbyAreas注入: {done}ページ / スキップ: {skipped}")
print(f"  都道府県数: {len(by_pref)} / 地域記事(geoあり): {len(region_slugs)}")
