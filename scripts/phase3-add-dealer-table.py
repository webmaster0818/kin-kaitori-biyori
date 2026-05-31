#!/usr/bin/env python3
"""
Phase 3: 主要記事に <DealerComparisonTable /> を挿入。
- 挿入位置: <h2>まとめ</h2> の直前。まとめがなければ <RelatedArticles> の直前。
- 既に挿入済みの場合はスキップ（idempotent）。
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"

# 各記事ごとに渡すprops（テーブル見出しを少しカスタマイズ）
TARGETS: list[dict] = [
    {
        "slug": "kin-kaitori-souba",
        "heading": "金買取業者 主要7社 徹底比較（2026年最新）",
        "intro": "全国展開の大手チェーンから金専門の質屋・宅配買取専門店まで、店舗数・対応エリア・手数料を公式情報で比較しました。",
    },
    {
        "slug": "k18-kaitori",
        "heading": "K18買取に強い業者 7社比較",
        "intro": "K18（18金）の買取依頼前に、店舗数・査定スピード・手数料を公式情報で比較できます。",
    },
    {
        "slug": "k24-kaitori",
        "heading": "K24（純金）買取に強い業者 7社比較",
        "intro": "K24・純金製品の買取依頼前に、各業者の対応範囲・手数料を公式情報で比較しましょう。",
    },
    {
        "slug": "tokyo-kin-kaitori",
        "heading": "東京の金買取で利用できる主要業者 7社比較",
        "intro": "全国チェーンから都内拠点の金専門店まで、東京で金を売れる業者を公式情報で比較しました。",
    },
    {
        "slug": "kin-takaku-uru",
        "heading": "相見積もりに使える金買取業者 7社",
        "intro": "金を高く売るには複数業者の比較が必須。公式公開情報を一覧化しました。",
    },
    {
        "slug": "kaitori-houhou-hikaku",
        "heading": "店頭・出張・宅配に対応する金買取業者 7社比較",
        "intro": "買取方法ごとの強みと、対応している主要業者を公式情報で整理しました。",
    },
    {
        "slug": "kin-nisemono-mikata",
        "heading": "鑑定設備のある金買取業者 7社",
        "intro": "X線分析機など鑑定設備を備える業者を中心に、公式情報をまとめました。",
    },
]


def insert_table(slug: str, heading: str, intro: str) -> tuple[bool, str]:
    page_path = ARTICLES_DIR / slug / "page.tsx"
    if not page_path.exists():
        return False, "ファイル無し"

    original = page_path.read_text(encoding="utf-8")
    if "<DealerComparisonTable" in original:
        return False, "既に挿入済"

    # 挿入する JSX
    snippet_lines = [
        '        <DealerComparisonTable',
        f'          heading="{heading}"',
        f'          intro="{intro}"',
        '        />',
        '',
    ]

    # まとめ直前を最優先で挿入
    matome = re.search(r"( *)<h2>まとめ</h2>", original)
    related = re.search(r"( *)<RelatedArticles\b", original)

    target_match = matome or related
    if not target_match:
        return False, "挿入位置が見つからない"

    indent = target_match.group(1) or "        "
    snippet = "\n".join(
        [indent + line.lstrip() if line.strip() else "" for line in snippet_lines]
    )
    if not snippet.endswith("\n"):
        snippet += "\n"

    new_content = (
        original[: target_match.start()]
        + snippet
        + original[target_match.start():]
    )

    # import 追加
    if "import DealerComparisonTable" not in new_content:
        link_import_re = re.compile(r'(import Link from "next/link";\n)')
        if link_import_re.search(new_content):
            new_content = link_import_re.sub(
                r'\1import DealerComparisonTable from "@/components/DealerComparisonTable";\n',
                new_content,
                count=1,
            )
        else:
            first_import = re.search(r"^(import [^\n]+\n)", new_content, re.MULTILINE)
            if first_import:
                new_content = (
                    new_content[: first_import.end()]
                    + 'import DealerComparisonTable from "@/components/DealerComparisonTable";\n'
                    + new_content[first_import.end():]
                )

    page_path.write_text(new_content, encoding="utf-8")
    return True, "更新"


def main():
    inserted = 0
    skipped = 0
    failed: list[str] = []
    for t in TARGETS:
        ok, reason = insert_table(t["slug"], t["heading"], t["intro"])
        if ok:
            print(f"[OK] {t['slug']}: {reason}")
            inserted += 1
        elif reason == "既に挿入済":
            print(f"[SKIP] {t['slug']}: {reason}")
            skipped += 1
        else:
            print(f"[FAIL] {t['slug']}: {reason}")
            failed.append(t["slug"])
    print(
        f"\n[SUMMARY] inserted={inserted}, skipped={skipped}, "
        f"failed={len(failed)} / total={len(TARGETS)}"
    )
    if failed:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
