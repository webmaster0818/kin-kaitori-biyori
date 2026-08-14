#!/usr/bin/env python3
"""out/ の実ページから sitemap.xml を生成する。

■ なぜ必要になったか
  sitemap.xml が public/ の手書きファイルで、2026-06-08 の108URLのまま止まっていた。
  一方で実際には288記事を公開しており、**180記事がsitemapに載っていなかった**。
  載っていないページは検索エンジンに発見されにくく、機会損失になる。

■ 方針
  ・out/ に実在する index.html だけを対象にする（存在しないURLを載せない）
  ・404 / _not-found は除外する
  ・lastmod は相場データの日付（毎朝更新されるため実態と合う）
  ・生成後 public/ と out/ の両方に書く（次回ビルドでも消えないように）

日次スクリプト（daily-gold-update.sh）から毎日呼ぶ。
"""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SITE = "https://gold-biyori.com"
OUT = ROOT / "out"

# パスごとの更新頻度と優先度（既存sitemapの方針を踏襲）
def rule(path: str) -> tuple[str, str]:
    if path == "/":
        return "weekly", "1.0"
    if path in ("/articles/",):
        return "weekly", "0.8"
    if path.startswith("/articles/"):
        return "monthly", "0.7"
    if path in ("/privacy-policy/", "/terms/"):
        return "yearly", "0.3"
    return "monthly", "0.5"


def main() -> None:
    if not OUT.exists():
        raise SystemExit(f"out/ がありません: {OUT}  先にビルドしてください")

    # 相場データの日付を lastmod に使う（毎朝更新されるので実態と一致する）
    spot = json.loads((ROOT / "data" / "gold-spot-prices.json").read_text(encoding="utf-8"))
    lastmod = spot["date"]

    paths = []
    for p in OUT.rglob("index.html"):
        rel = p.parent.relative_to(OUT).as_posix()
        path = "/" if rel == "." else f"/{rel}/"
        # 検索結果に出す必要のないものは載せない
        if re.search(r"^/(404|_not-found)/", path):
            continue
        paths.append(path)
    paths.sort(key=lambda x: (x != "/", x))

    # D: 配布データもsitemapに載せる。
    #    白書からリンクしているだけでは発見が遅く、引用してもらう前に見つからない。
    DATA_FILES = ["/data/gold-price-history.csv",
                  "/data/gold-price-history.json",
                  "/data/gold-price-index.json"]

    lines = ['<?xml version="1.0" encoding="UTF-8"?>',
             '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for path in paths:
        cf, pr = rule(path)
        lines.append(f"  <url><loc>{SITE}{path}</loc><lastmod>{lastmod}</lastmod>"
                     f"<changefreq>{cf}</changefreq><priority>{pr}</priority></url>")
    for f in DATA_FILES:
        if (OUT / f.lstrip("/")).exists():
            lines.append(f"  <url><loc>{SITE}{f}</loc><lastmod>{lastmod}</lastmod>"
                         f"<changefreq>daily</changefreq><priority>0.6</priority></url>")
    lines += ["</urlset>", ""]
    xml = "\n".join(lines)

    for d in (ROOT / "public", OUT):
        if d.exists():
            (d / "sitemap.xml").write_text(xml, encoding="utf-8")
    print(f"sitemap: {len(paths)} URLs (lastmod={lastmod})")


if __name__ == "__main__":
    main()
