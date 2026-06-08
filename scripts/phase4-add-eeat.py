#!/usr/bin/env python3
"""
Phase4: 全記事に E-E-A-T 強化要素を注入（冪等）。
  - <GoldPriceTrend />   … 金K24相場の推移グラフ（一次データ）
  - <ExpertQA category=…/> … カテゴリ別の事実ベース専門Q&A
両方とも <RelatedArticles ...> の直前に挿入する。
既に注入済みのページはスキップ。
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ART_DIR = ROOT / "app" / "articles"
META = json.loads((ROOT / "data" / "articles-metadata.json").read_text())
CAT = {m["slug"]: m["category"] for m in META}
VALID = {"purity", "product", "brand", "region", "howto", "compare"}

IMPORT_TREND = 'import { GoldPriceTrend } from "@/components/GoldPriceTrend";'
IMPORT_QA = 'import { ExpertQA } from "@/components/ExpertQA";'

done, skipped, missing_cat = 0, 0, []

for page in sorted(ART_DIR.glob("*/page.tsx")):
    slug = page.parent.name
    src = page.read_text()

    if "<ExpertQA" in src or "GoldPriceTrend" in src:
        skipped += 1
        continue

    m = re.search(r'<RelatedArticles\b', src)
    if not m:
        skipped += 1
        continue

    category = CAT.get(slug)
    if category not in VALID:
        # メタに無い/不正な場合はslugから推定
        category = "region" if slug.endswith("-kin-kaitori") else "howto"
        missing_cat.append(slug)

    # --- imports 追加（RelatedArticles の import 行の直後）---
    rel_imp = re.search(r'^import RelatedArticles .*$', src, re.MULTILINE)
    if rel_imp and IMPORT_TREND not in src:
        insert_at = rel_imp.end()
        src = src[:insert_at] + "\n" + IMPORT_TREND + "\n" + IMPORT_QA + src[insert_at:]

    # --- コンポーネント注入（RelatedArticles の行頭インデントを踏襲）---
    line_start = src.rfind("\n", 0, src.find("<RelatedArticles")) + 1
    indent = re.match(r"[ \t]*", src[line_start:]).group(0)
    block = (
        f"{indent}<GoldPriceTrend />\n"
        f'{indent}<ExpertQA category="{category}" />\n'
    )
    anchor_pos = src.find("<RelatedArticles")
    # 挿入位置は RelatedArticles 行の先頭インデント位置
    src = src[:line_start] + block + src[line_start:]

    page.write_text(src)
    done += 1

print(f"✓ 注入: {done}ページ / スキップ: {skipped}ページ")
if missing_cat:
    print(f"  メタ未登録→推定カテゴリ適用: {len(missing_cat)}件 例 {missing_cat[:5]}")
