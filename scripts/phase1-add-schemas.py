#!/usr/bin/env python3
"""
Phase 1: Add BreadcrumbList schema to all 63 articles, and Article schema to
the 29 articles missing it.

Strategy:
 - Inject a `BreadcrumbSchema()` function before the existing `FaqSchema()` function
   (every article has FaqSchema, confirmed).
 - For articles missing ArticleSchema, also inject an `ArticleSchema()` function
   after the new BreadcrumbSchema definition.
 - Insert <BreadcrumbSchema /> and <ArticleSchema /> JSX components inside the
   default-exported component's `return ( <> ... )` block, immediately after the
   <FaqSchema /> tag.
 - All injected schemas use https://gold-biyori.com/ as base URL.
 - Articles already containing ArticleSchema/articleData/breadcrumbData are left
   alone for that piece (idempotent).

Usage:
    python3 scripts/phase1-add-schemas.py           # apply
    python3 scripts/phase1-add-schemas.py --dry     # only show what would change
    python3 scripts/phase1-add-schemas.py --one k24-kaitori  # process one only
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
SITE_URL = "https://gold-biyori.com"


def extract_metadata(text: str) -> tuple[str | None, str | None]:
    """Extract title and description from `export const metadata` block."""
    # Try multi-line `metadata: Metadata = { ... };`
    m = re.search(
        r"export\s+const\s+metadata\s*:\s*Metadata\s*=\s*\{(.*?)\};",
        text,
        re.DOTALL,
    )
    if not m:
        return None, None
    meta_body = m.group(1)
    title_m = re.search(r'title:\s*"([^"]+)"', meta_body)
    desc_m = re.search(r'description:\s*\n?\s*"([^"]+)"', meta_body)
    title = title_m.group(1) if title_m else None
    desc = desc_m.group(1) if desc_m else None
    return title, desc


def extract_breadcrumb_label(text: str) -> str | None:
    """Pull the current-page label from the visual breadcrumb in the JSX."""
    m = re.search(
        r'<li><span className="text-foreground">([^<]+)</span></li>',
        text,
    )
    if m:
        return m.group(1).strip()
    return None


def extract_publish_date(text: str) -> str | None:
    """Read 最終更新 line and convert to ISO date. Fallback None."""
    m = re.search(r"最終更新[:：]\s*(\d{4})年(\d{1,2})月(\d{1,2})日", text)
    if not m:
        return None
    y, mo, d = m.groups()
    return f"{int(y):04d}-{int(mo):02d}-{int(d):02d}"


def has_breadcrumb_schema(text: str) -> bool:
    return "BreadcrumbList" in text or "breadcrumbData" in text or "BreadcrumbSchema" in text


def has_article_schema(text: str) -> bool:
    return "ArticleSchema" in text or "articleData" in text


def build_breadcrumb_function(article_title: str, slug: str) -> str:
    # Escape any embedded quotes/backslashes for JS string literal context
    title_js = (
        article_title
        .replace("\\", "\\\\")
        .replace('"', '\\"')
    )
    url = f"{SITE_URL}/articles/{slug}/"
    return f'''function BreadcrumbSchema() {{
  const breadcrumbData = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "ホーム", item: "{SITE_URL}/" }},
      {{ "@type": "ListItem", position: 2, name: "記事一覧", item: "{SITE_URL}/articles/" }},
      {{ "@type": "ListItem", position: 3, name: "{title_js}", item: "{url}" }},
    ],
  }};
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{{{ __html: JSON.stringify(breadcrumbData) }}}}
    />
  );
}}

'''


def build_article_function(headline: str, description: str, published: str, modified: str) -> str:
    headline_js = headline.replace("\\", "\\\\").replace('"', '\\"')
    desc_js = (description or headline).replace("\\", "\\\\").replace('"', '\\"')
    return f'''function ArticleSchema() {{
  const articleData = {{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "{headline_js}",
    description: "{desc_js}",
    datePublished: "{published}",
    dateModified: "{modified}",
    author: {{
      "@type": "Organization",
      name: "金買取びより編集部",
    }},
    publisher: {{
      "@type": "Organization",
      name: "金買取びより",
    }},
  }};
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{{{ __html: JSON.stringify(articleData) }}}}
    />
  );
}}

'''


# Match the FaqSchema function definition start so we can insert directly before it.
FAQ_FN_RE = re.compile(r"^function FaqSchema\(\) \{", re.MULTILINE)
# Match the <FaqSchema /> tag inside JSX
FAQ_TAG_RE = re.compile(r"(<FaqSchema\s*/>)")


def process_file(page: Path, dry: bool = False) -> dict:
    slug = page.parent.name
    text = page.read_text(encoding="utf-8")
    result = {"slug": slug, "added": [], "skipped": [], "errors": []}

    title, desc = extract_metadata(text)
    if not title:
        result["errors"].append("metadata title not found")
        return result

    breadcrumb_label = extract_breadcrumb_label(text) or title

    pub_date = extract_publish_date(text) or "2026-04-15"
    mod_date = pub_date  # use 最終更新 for both, simplest defensible choice

    need_breadcrumb = not has_breadcrumb_schema(text)
    need_article = not has_article_schema(text)

    if not need_breadcrumb and not need_article:
        result["skipped"].append("both schemas already present")
        return result

    # ---- 1) Inject function definitions before `function FaqSchema()`
    faq_match = FAQ_FN_RE.search(text)
    if not faq_match:
        result["errors"].append("FaqSchema() function not found")
        return result

    inserts = ""
    if need_breadcrumb:
        inserts += build_breadcrumb_function(breadcrumb_label, slug)
        result["added"].append("BreadcrumbSchema")
    if need_article:
        inserts += build_article_function(title, desc or title, pub_date, mod_date)
        result["added"].append("ArticleSchema")

    new_text = text[: faq_match.start()] + inserts + text[faq_match.start():]

    # ---- 2) Inject JSX tags right after the existing <FaqSchema /> tag
    tags = ""
    if need_breadcrumb:
        tags += "\n      <BreadcrumbSchema />"
    if need_article:
        tags += "\n      <ArticleSchema />"

    def replace_first(match: re.Match) -> str:
        return match.group(1) + tags

    # Only replace the first occurrence (which is the one inside the default export JSX)
    new_text, n_replacements = FAQ_TAG_RE.subn(replace_first, new_text, count=1)
    if n_replacements == 0:
        result["errors"].append("<FaqSchema /> JSX tag not found")
        return result

    if dry:
        result["preview"] = new_text[: faq_match.start() + 800]
    else:
        page.write_text(new_text, encoding="utf-8")

    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry", action="store_true", help="show first preview without writing")
    parser.add_argument("--one", help="process only this slug")
    args = parser.parse_args()

    if not ARTICLES_DIR.exists():
        print(f"ERROR: {ARTICLES_DIR} does not exist", file=sys.stderr)
        return 1

    targets = []
    for sub in sorted(ARTICLES_DIR.iterdir()):
        if args.one and sub.name != args.one:
            continue
        page = sub / "page.tsx"
        if page.exists():
            targets.append(page)

    print(f"Processing {len(targets)} article(s) {'(dry-run)' if args.dry else ''}")

    summary = {"breadcrumb_added": 0, "article_added": 0, "skipped": 0, "errors": 0}
    for page in targets:
        r = process_file(page, dry=args.dry)
        if r["errors"]:
            print(f"  [ERR] {r['slug']}: {r['errors']}")
            summary["errors"] += 1
            continue
        if "BreadcrumbSchema" in r["added"]:
            summary["breadcrumb_added"] += 1
        if "ArticleSchema" in r["added"]:
            summary["article_added"] += 1
        if not r["added"]:
            summary["skipped"] += 1
        added_str = ",".join(r["added"]) if r["added"] else "skip"
        print(f"  [{added_str:<35}] {r['slug']}")

    print()
    print("Summary:")
    print(f"  BreadcrumbSchema added: {summary['breadcrumb_added']}")
    print(f"  ArticleSchema added   : {summary['article_added']}")
    print(f"  Skipped (already had) : {summary['skipped']}")
    print(f"  Errors                : {summary['errors']}")
    return 0 if summary["errors"] == 0 else 2


if __name__ == "__main__":
    sys.exit(main())
