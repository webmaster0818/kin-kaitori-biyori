#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OG画像（public/og-image.png・1200x630）と favicon（public/favicon.ico・public/icon.png）を作る。

⚠️ 画像に価格・件数などの数字を入れない（相場は毎日変わり、画像だけ古い数字が残るため）。
   favicon はヘッダーのロゴ（public/images/icon-gold-bar.png）を縮小したもの。

  python3 scripts/make-og.py
"""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
W, H = 1200, 630
NAVY, NAVY_LIGHT = (26, 26, 46), (42, 42, 78)      # --navy / --navy-light
ACCENT, ACCENT_DARK = (201, 168, 76), (139, 105, 20)  # --accent / --accent-dark
INK, DIM = (245, 242, 232), (170, 170, 190)

JP_BOLD = "/System/Library/Fonts/ヒラギノ角ゴシック W7.ttc"
JP = "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"


def make_og() -> None:
    S = 2
    im = Image.new("RGB", (W * S, H * S), NAVY)
    d = ImageDraw.Draw(im)
    # 右下に金の延べ棒を模した台形を3本（装飾）
    for i, (bx, by, bw) in enumerate([(790, 430, 300), (860, 330, 300), (720, 330, 0)]):
        if bw == 0:
            continue
        sk, bh = 36, 84
        d.polygon([((bx + sk) * S, by * S), ((bx + bw - sk) * S, by * S),
                   ((bx + bw) * S, (by + bh) * S), (bx * S, (by + bh) * S)],
                  fill=ACCENT if i == 0 else ACCENT_DARK, outline=NAVY)
    d.rectangle([0, 0, W * S, 14 * S], fill=ACCENT)
    d.rectangle([86 * S, 300 * S, 206 * S, 306 * S], fill=ACCENT)

    def put(xy, s, font, size, fill):
        d.text((xy[0] * S, xy[1] * S), s, font=ImageFont.truetype(font, size * S), fill=fill)

    put((86, 150), "金買取びより", JP_BOLD, 104, ACCENT)
    put((86, 340), "金・貴金属買取の比較ガイド", JP_BOLD, 46, INK)
    put((86, 420), "買取相場 / 高く売るコツ / 業者比較", JP, 30, DIM)
    put((86, 556), "gold-biyori.com", JP, 28, DIM)

    out = ROOT / "public" / "og-image.png"
    im.resize((W, H), Image.LANCZOS).save(out, optimize=True)
    print(f"書き出し → {out}")


def make_icons() -> None:
    src = Image.open(ROOT / "public" / "images" / "icon-gold-bar.png").convert("RGBA")
    src.resize((192, 192), Image.LANCZOS).save(ROOT / "public" / "icon.png", optimize=True)
    src.save(ROOT / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
    print("書き出し → public/icon.png, public/favicon.ico")


if __name__ == "__main__":
    make_og()
    make_icons()
