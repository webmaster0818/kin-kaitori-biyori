#!/usr/bin/env python3
"""公式サイトのキャプチャ（components/ServiceCapture・ServiceCaptureGrid）を記事に入れる（2026-10-21 MediaXAI・デザイン②）。冪等。
  python3 scripts/add-service-captures-202610.py [--dry]
- 地域記事（「{city}の金買取で利用できる送客先4社」の箇条書き）: </ul> の直後に <ServiceCaptureGrid />（2×2）
- 各社を h3 見出しで紹介している記事（k10/k14/k18/k22/bracelet/necklace/yubiwa/tokyo/osaka）: 見出しの直後に <ServiceCapture id=… />
- kin-kaitori-osusume: 「4社の比較表」の注記の直後に <ServiceCaptureGrid />
文言・リンクは触らない（キャプチャはリンクなし・キャプションは「画像：〇〇 公式サイト（domain）2026年10月21日時点」）。
生成器 scripts/gen-area-articles.py のテンプレにも同じ行を入れてある（再生成しても残る）。
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DRY = "--dry" in sys.argv
IDS = {"ヒカカク！": "hikakaku", "買取大吉": "daikichi", "ウリエル": "uriel", "ティファナ": "tifana"}
AREA_RE = re.compile(r'(<h2>[^<]*の金買取で利用できる送客先4社</h2>\n(?:.*\n)*?\s*</ul>\n)')
H3_RE = re.compile(r'^(\s*)<h3>(ヒカカク！|買取大吉|ウリエル|ティファナ) — [^<]*</h3>\n', re.M)
OSUSUME_ANCHOR = '方法4つの比較</Link>をご覧ください。</p>\n'


def add_import(s, line):
    if line in s:
        return s
    imports = list(re.finditer(r'^import .*;\n', s, re.M))
    pos = imports[-1].end() if imports else 0
    return s[:pos] + line + "\n" + s[pos:]


stats = {"area": 0, "h3": 0, "osusume": 0, "skip": 0}
for p in sorted((ROOT / "app/articles").glob("*/page.tsx")):
    s = orig = p.read_text()
    slug = p.parent.name
    if slug == "kin-kaitori-osusume":
        if "<ServiceCaptureGrid />" not in s and OSUSUME_ANCHOR in s:
            s = s.replace(OSUSUME_ANCHOR, OSUSUME_ANCHOR + "        <ServiceCaptureGrid />\n", 1)
            s = add_import(s, 'import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";')
            stats["osusume"] += 1
    elif AREA_RE.search(s):
        if "<ServiceCaptureGrid />" not in s:
            s = AREA_RE.sub(lambda m: m.group(1) + "        <ServiceCaptureGrid />\n", s, count=1)
            s = add_import(s, 'import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";')
            stats["area"] += 1
    if H3_RE.search(s) and "<ServiceCapture id=" not in s:
        s = H3_RE.sub(lambda m: m.group(0) + f'{m.group(1)}<ServiceCapture id="{IDS[m.group(2)]}" />\n', s)
        s = add_import(s, 'import ServiceCapture from "@/components/ServiceCapture";')
        stats["h3"] += 1
    if s != orig:
        if not DRY:
            p.write_text(s)
    else:
        stats["skip"] += 1
print(stats)
