#!/usr/bin/env python3
"""
Phase 2: 全63記事への関連記事セクション挿入
- data/articles-metadata.json を生成
- 各記事の page.tsx の関連記事セクションを <RelatedArticles> で置換
  - パターンA: <aside className="mt-12 pt-8 border-t border-warm-border">...</aside>
  - パターンB: <h2>関連記事</h2> + <div>...</div>
  - パターンC: 関連記事ブロックが無い場合は <h2>まとめ</h2> の直前に挿入
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = ROOT / "app" / "articles"
DATA_DIR = ROOT / "data"
DATA_DIR.mkdir(exist_ok=True)
METADATA_PATH = DATA_DIR / "articles-metadata.json"

# ---------------------------------------------------------------------------
# 1. 記事分類定義
# ---------------------------------------------------------------------------

# 純度別 (7)
PURITY_SLUGS: dict[str, dict] = {
    "k24-kaitori":   {"badge": "K24", "shortTitle": "K24（純金）買取相場ガイド", "description": "純度99.9%の純金の最新買取相場と高く売るコツ。"},
    "k22-kaitori":   {"badge": "K22", "shortTitle": "K22（22金）買取相場ガイド", "description": "金含有率91.6%のK22の買取価格と特徴を解説。"},
    "k18-kaitori":   {"badge": "K18", "shortTitle": "K18（18金）買取相場ガイド", "description": "国内で最も流通量の多いK18の相場と刻印解説。"},
    "k14-kaitori":   {"badge": "K14", "shortTitle": "K14（14金）買取相場ガイド", "description": "海外製アクセサリに多いK14の相場と査定ポイント。"},
    "k10-kaitori":   {"badge": "K10", "shortTitle": "K10（10金）買取相場ガイド", "description": "金含有率41.7%のK10の買取価格と注意点。"},
    "k18wg-kaitori": {"badge": "K18WG", "shortTitle": "K18WG（ホワイトゴールド）買取相場", "description": "プラチナと混同されがちなK18WGの査定基準。"},
    "k18pg-kaitori": {"badge": "K18PG", "shortTitle": "K18PG（ピンクゴールド）買取相場", "description": "カルティエ等で人気のK18PGの相場と特徴。"},
}

# 製品別 (10)
PRODUCT_SLUGS: dict[str, dict] = {
    "kin-necklace-kaitori":     {"badge": "金ネックレス", "shortTitle": "金ネックレス買取相場ガイド", "description": "喜平・チェーン・ペンダントの重量別買取価格。"},
    "kin-bracelet-kaitori":     {"badge": "金ブレスレット", "shortTitle": "金ブレスレット買取相場ガイド", "description": "喜平・バングルなど金ブレスレットの査定相場。"},
    "kin-yubiwa-kaitori":       {"badge": "金の指輪", "shortTitle": "金の指輪・リング買取相場ガイド", "description": "K18・K24リングの重量別買取価格目安。"},
    "kin-chain-kaitori":        {"badge": "金チェーン", "shortTitle": "金チェーン買取相場ガイド", "description": "喜平・あずきなどチェーン種類別の相場一覧。"},
    "kin-pierce-kaitori":       {"badge": "金ピアス", "shortTitle": "金ピアス買取相場ガイド", "description": "片方だけでもOK。金ピアスの査定相場と注意点。"},
    "kin-nobebo-kaitori":       {"badge": "延べ棒", "shortTitle": "金の延べ棒（インゴット）買取ガイド", "description": "ブランド別・重量別の延べ棒買取価格を解説。"},
    "kinka-ingot-kaitori":      {"badge": "金貨・インゴット", "shortTitle": "金貨・インゴット買取相場ガイド", "description": "メイプル・カンガルー等の金貨買取目安。"},
    "kinba-kaitori":            {"badge": "金歯", "shortTitle": "金歯（インレー・クラウン）買取ガイド", "description": "歯科用金合金の純度と買取の進め方。"},
    "kintokei-rolex-kaitori":   {"badge": "金時計", "shortTitle": "金無垢腕時計・ロレックス買取相場", "description": "ロレックス等の金無垢ケース時計の高額買取。"},
    "kowareta-kin-kaitori":     {"badge": "壊れた金", "shortTitle": "壊れた金製品の買取ガイド", "description": "切れたチェーンや変形した金も買取可能。"},
}

# ブランド別 (5)
BRAND_SLUGS: dict[str, dict] = {
    "cartier-kaitori":      {"badge": "カルティエ", "shortTitle": "カルティエ買取相場ガイド", "description": "ラブブレスレット・ラブリングの最新買取相場。"},
    "tiffany-kaitori":      {"badge": "ティファニー", "shortTitle": "ティファニー買取相場ガイド", "description": "T・バイザヤード等のリセール価格を解説。"},
    "bvlgari-kaitori":      {"badge": "ブルガリ", "shortTitle": "ブルガリ買取相場ガイド", "description": "ビー・ゼロワン・セルペンティの買取相場目安。"},
    "harrywinston-kaitori": {"badge": "ハリーウィンストン", "shortTitle": "ハリーウィンストン買取相場ガイド", "description": "リリークラスター等の高額買取ポイント。"},
    "vancleef-kaitori":     {"badge": "ヴァンクリーフ", "shortTitle": "ヴァンクリーフ買取相場ガイド", "description": "アルハンブラシリーズの中古買取相場一覧。"},
}

# 地域別 (16)
REGION_SLUGS: dict[str, dict] = {
    "tokyo-kin-kaitori":        {"badge": "東京", "shortTitle": "東京の金買取おすすめ業者ガイド", "description": "東京エリアの金買取相場と人気店を比較。", "neighbors": ["ginza-kin-kaitori", "okachimachi-kin-kaitori", "ikebukuro-kin-kaitori", "yokohama-kin-kaitori"]},
    "ginza-kin-kaitori":        {"badge": "銀座", "shortTitle": "銀座の金買取おすすめ業者ガイド", "description": "銀座エリアの金・ブランド買取店をまとめて紹介。", "neighbors": ["tokyo-kin-kaitori", "okachimachi-kin-kaitori", "ikebukuro-kin-kaitori", "yokohama-kin-kaitori"]},
    "okachimachi-kin-kaitori":  {"badge": "御徒町", "shortTitle": "御徒町の金買取おすすめ業者ガイド", "description": "宝石街・御徒町の老舗金買取業者を比較。", "neighbors": ["tokyo-kin-kaitori", "ginza-kin-kaitori", "ikebukuro-kin-kaitori", "omiya-kin-kaitori"]},
    "ikebukuro-kin-kaitori":    {"badge": "池袋", "shortTitle": "池袋の金買取おすすめ業者ガイド", "description": "池袋エリアの金買取専門店を徹底比較。", "neighbors": ["tokyo-kin-kaitori", "ginza-kin-kaitori", "okachimachi-kin-kaitori", "omiya-kin-kaitori"]},
    "yokohama-kin-kaitori":     {"badge": "横浜", "shortTitle": "横浜の金買取おすすめ業者ガイド", "description": "横浜エリアの金買取相場と人気業者を紹介。", "neighbors": ["tokyo-kin-kaitori", "chiba-kin-kaitori", "ginza-kin-kaitori", "omiya-kin-kaitori"]},
    "chiba-kin-kaitori":        {"badge": "千葉", "shortTitle": "千葉の金買取おすすめ業者ガイド", "description": "千葉県内の金買取相場と人気店をまとめ。", "neighbors": ["tokyo-kin-kaitori", "yokohama-kin-kaitori", "omiya-kin-kaitori", "ginza-kin-kaitori"]},
    "omiya-kin-kaitori":        {"badge": "大宮", "shortTitle": "大宮の金買取おすすめ業者ガイド", "description": "大宮・さいたまエリアの金買取業者比較。", "neighbors": ["tokyo-kin-kaitori", "ikebukuro-kin-kaitori", "ginza-kin-kaitori", "yokohama-kin-kaitori"]},
    "osaka-kin-kaitori":        {"badge": "大阪", "shortTitle": "大阪の金買取おすすめ業者ガイド", "description": "大阪府全域の金買取相場と人気業者を比較。", "neighbors": ["umeda-kin-kaitori", "kobe-kin-kaitori", "kyoto-kin-kaitori", "nagoya-kin-kaitori"]},
    "umeda-kin-kaitori":        {"badge": "梅田", "shortTitle": "梅田の金買取おすすめ業者ガイド", "description": "梅田・大阪駅周辺の金買取店を徹底比較。", "neighbors": ["osaka-kin-kaitori", "kobe-kin-kaitori", "kyoto-kin-kaitori", "nagoya-kin-kaitori"]},
    "kobe-kin-kaitori":         {"badge": "神戸", "shortTitle": "神戸の金買取おすすめ業者ガイド", "description": "神戸市内の金買取相場と人気業者を紹介。", "neighbors": ["osaka-kin-kaitori", "umeda-kin-kaitori", "kyoto-kin-kaitori", "hiroshima-kin-kaitori"]},
    "kyoto-kin-kaitori":        {"badge": "京都", "shortTitle": "京都の金買取おすすめ業者ガイド", "description": "京都市内の金買取業者を相場とともに紹介。", "neighbors": ["osaka-kin-kaitori", "umeda-kin-kaitori", "kobe-kin-kaitori", "nagoya-kin-kaitori"]},
    "nagoya-kin-kaitori":       {"badge": "名古屋", "shortTitle": "名古屋の金買取おすすめ業者ガイド", "description": "名古屋市内の金買取相場と人気業者まとめ。", "neighbors": ["osaka-kin-kaitori", "kyoto-kin-kaitori", "tokyo-kin-kaitori", "sendai-kin-kaitori"]},
    "sapporo-kin-kaitori":      {"badge": "札幌", "shortTitle": "札幌の金買取おすすめ業者ガイド", "description": "札幌・北海道エリアの金買取業者を比較。", "neighbors": ["sendai-kin-kaitori", "tokyo-kin-kaitori", "fukuoka-kin-kaitori", "yokohama-kin-kaitori"]},
    "sendai-kin-kaitori":       {"badge": "仙台", "shortTitle": "仙台の金買取おすすめ業者ガイド", "description": "仙台・東北エリアの金買取業者まとめ。", "neighbors": ["sapporo-kin-kaitori", "tokyo-kin-kaitori", "nagoya-kin-kaitori", "omiya-kin-kaitori"]},
    "fukuoka-kin-kaitori":      {"badge": "福岡", "shortTitle": "福岡の金買取おすすめ業者ガイド", "description": "福岡・九州エリアの金買取相場と人気業者。", "neighbors": ["hiroshima-kin-kaitori", "osaka-kin-kaitori", "kobe-kin-kaitori", "sapporo-kin-kaitori"]},
    "hiroshima-kin-kaitori":    {"badge": "広島", "shortTitle": "広島の金買取おすすめ業者ガイド", "description": "広島・中国地方の金買取業者をまとめて比較。", "neighbors": ["fukuoka-kin-kaitori", "osaka-kin-kaitori", "kobe-kin-kaitori", "nagoya-kin-kaitori"]},
}

# 比較・解説 (10)
COMPARE_SLUGS: dict[str, dict] = {
    "daikichi-vs-nanboya":         {"badge": "業者比較", "shortTitle": "買取大吉 vs なんぼや 徹底比較", "description": "大手2社の買取価格・特徴を実情報で比較。"},
    "ikkatsu-satei-hikaku":        {"badge": "一括査定", "shortTitle": "金の一括査定サイト比較", "description": "ヒカカク等の一括査定サービス比較ガイド。"},
    "tentou-vs-takuhai":           {"badge": "店頭vs宅配", "shortTitle": "店頭買取と宅配買取の比較", "description": "店頭・宅配買取それぞれのメリット・デメリット。"},
    "line-satei-seido":            {"badge": "LINE査定", "shortTitle": "LINE査定の精度と注意点", "description": "LINE写真査定で本査定にどれだけ近付くか解説。"},
    "kin-spot-vs-kaitori":         {"badge": "スポット価格", "shortTitle": "金スポット価格と買取価格の違い", "description": "店頭買取・小売・スポット価格の関係を解説。"},
    "kin-jundo-mikata":            {"badge": "純度の見方", "shortTitle": "金の純度の見方ガイド", "description": "K24/K18/K14など刻印から純度を判別する方法。"},
    "kin-nisemono-mikata":         {"badge": "偽物の見分け方", "shortTitle": "金の偽物・メッキの見分け方", "description": "GP/GFなど金メッキと無垢の見分け方を解説。"},
    "kin-omosa-hakarikata":        {"badge": "重さの量り方", "shortTitle": "金の重さの量り方と注意点", "description": "自宅で金の重量を測定する手順と精度の目安。"},
    "platinum-kaitori":            {"badge": "プラチナ", "shortTitle": "プラチナ買取相場ガイド", "description": "Pt900/Pt950の最新買取相場と高く売る方法。"},
    "diamond-kaitori":             {"badge": "ダイヤモンド", "shortTitle": "ダイヤモンド・宝石買取ガイド", "description": "4Cの基本とダイヤモンド買取相場を解説。"},
}

# HOW-TO・法律・準備 (15)
HOWTO_SLUGS: dict[str, dict] = {
    "kin-takaku-uru":           {"badge": "高く売るコツ", "shortTitle": "金を高く売る5つのコツ", "description": "相見積もり・付属品など売却前の必須準備。"},
    "kin-uru-timing":           {"badge": "売却タイミング", "shortTitle": "金を売る最適なタイミング", "description": "為替・国際相場と買取価格の関係を解説。"},
    "kin-uridoki-2026":         {"badge": "2026年売り時", "shortTitle": "2026年金の売り時カレンダー", "description": "今年の金相場展望と売却タイミングの判断軸。"},
    "kin-kaitori-souba":        {"badge": "相場一覧", "shortTitle": "金買取相場一覧まとめ", "description": "K24/K22/K18等の最新買取相場をまとめて掲載。"},
    "kin-kaitori-hajimete":     {"badge": "初めての方", "shortTitle": "金買取がはじめての方ガイド", "description": "金買取の流れと初心者がチェックすべき項目。"},
    "kin-kaitori-sagi":         {"badge": "詐欺対策", "shortTitle": "金買取の詐欺・押し買い対策", "description": "悪質業者を見抜くチェックポイントを解説。"},
    "kaitori-houhou-hikaku":    {"badge": "買取方法比較", "shortTitle": "金の買取方法4種類を徹底比較", "description": "店頭・出張・宅配・一括査定の違いと選び方。"},
    "kin-kaitori-zeikin":       {"badge": "税金", "shortTitle": "金買取と税金（譲渡所得）の解説", "description": "50万円控除や保有期間で変わる税率を整理。"},
    "kin-kakutei-shinkoku":     {"badge": "確定申告", "shortTitle": "金売却の確定申告の進め方", "description": "金売却で必要な確定申告書類と記入例を解説。"},
    "kin-200man-mynumber":      {"badge": "200万円超", "shortTitle": "金200万円超売却とマイナンバー", "description": "200万円ルールと法定調書の仕組みを解説。"},
    "kin-souzoku-baikyaku":     {"badge": "相続", "shortTitle": "相続した金の売却ガイド", "description": "相続税評価額と売却時の税金関係を整理。"},
    "ihin-seiri-kin":           {"badge": "遺品整理", "shortTitle": "遺品の金製品 整理・売却ガイド", "description": "遺品の金製品を整理・売却する進め方。"},
    "kongyaku-yubiwa-uru":      {"badge": "婚約指輪", "shortTitle": "婚約指輪・結婚指輪の売却ガイド", "description": "婚約・結婚指輪を売る前に知っておきたい注意点。"},
    "gin-kaitori":              {"badge": "銀買取", "shortTitle": "銀（シルバー）買取相場ガイド", "description": "純銀・SV925の買取相場と高く売るコツ。"},
    "shinju-kaitori":           {"badge": "真珠買取", "shortTitle": "真珠（パール）買取相場ガイド", "description": "あこや・南洋真珠の買取相場と評価ポイント。"},
}

ALL_DEFS = [
    (PURITY_SLUGS, "purity"),
    (PRODUCT_SLUGS, "product"),
    (BRAND_SLUGS, "brand"),
    (REGION_SLUGS, "region"),
    (COMPARE_SLUGS, "compare"),
    (HOWTO_SLUGS, "howto"),
]

ALL_META: dict[str, dict] = {}
for defs, cat in ALL_DEFS:
    for slug, info in defs.items():
        ALL_META[slug] = {
            "slug": slug,
            "title": info["shortTitle"],
            "shortTitle": info["shortTitle"],
            "badge": info["badge"],
            "description": info["description"],
            "category": cat,
        }

# ---------------------------------------------------------------------------
# 2. 関連記事マッチングロジック
# ---------------------------------------------------------------------------

PRIMARY_PURITY = ["k24-kaitori", "k18-kaitori", "k22-kaitori", "k14-kaitori"]
PRIMARY_PRODUCT = ["kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-nobebo-kaitori"]
PRIMARY_BRAND = ["cartier-kaitori", "tiffany-kaitori", "bvlgari-kaitori"]
PRIMARY_REGION = ["tokyo-kin-kaitori", "osaka-kin-kaitori", "ginza-kin-kaitori", "okachimachi-kin-kaitori"]
PRIMARY_HOWTO = ["kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-kaitori-hajimete"]
PRIMARY_COMPARE = ["daikichi-vs-nanboya", "tentou-vs-takuhai", "ikkatsu-satei-hikaku"]


def compute_related(slug: str) -> list[str]:
    """指定slugに対する関連記事slugリストを返す。10-15本目安。"""
    related: list[str] = []
    seen: set[str] = {slug}

    def add(*slugs: str):
        for s in slugs:
            if s in seen:
                continue
            if s not in ALL_META:
                continue
            related.append(s)
            seen.add(s)

    if slug in PURITY_SLUGS:
        # 他の純度別
        for p in PURITY_SLUGS:
            add(p)
        # 主要製品 4本
        for p in PRIMARY_PRODUCT:
            add(p)
        # 主要HOW-TO 3本
        for h in PRIMARY_HOWTO[:3]:
            add(h)
        # 主要地域 2本
        for r in PRIMARY_REGION[:2]:
            add(r)

    elif slug in PRODUCT_SLUGS:
        # 純度別 主要3本
        for p in PRIMARY_PURITY[:3]:
            add(p)
        # 同カテゴリの他製品
        same_product_map: dict[str, list[str]] = {
            "kin-necklace-kaitori": ["kin-chain-kaitori", "kin-bracelet-kaitori", "kin-yubiwa-kaitori", "kin-pierce-kaitori"],
            "kin-bracelet-kaitori": ["kin-necklace-kaitori", "kin-chain-kaitori", "kin-yubiwa-kaitori"],
            "kin-yubiwa-kaitori":   ["kin-necklace-kaitori", "kin-bracelet-kaitori", "kongyaku-yubiwa-uru"],
            "kin-chain-kaitori":    ["kin-necklace-kaitori", "kin-bracelet-kaitori"],
            "kin-pierce-kaitori":   ["kin-necklace-kaitori", "kin-yubiwa-kaitori"],
            "kin-nobebo-kaitori":   ["kinka-ingot-kaitori", "kin-spot-vs-kaitori"],
            "kinka-ingot-kaitori":  ["kin-nobebo-kaitori", "kin-spot-vs-kaitori"],
            "kinba-kaitori":        ["kin-jundo-mikata", "kowareta-kin-kaitori"],
            "kintokei-rolex-kaitori": ["kin-yubiwa-kaitori", "kin-chain-kaitori"],
            "kowareta-kin-kaitori": ["kinba-kaitori", "ihin-seiri-kin"],
        }
        for s in same_product_map.get(slug, []):
            add(s)
        # 主要HOW-TO 3本
        for h in PRIMARY_HOWTO[:3]:
            add(h)
        # 主要地域 2本
        for r in PRIMARY_REGION[:2]:
            add(r)
        # 主要ブランド 1本（補強）
        for b in PRIMARY_BRAND[:1]:
            add(b)

    elif slug in BRAND_SLUGS:
        # K18 と K18PG/WG（ブランドジュエリーで頻出）
        add("k18-kaitori", "k18pg-kaitori", "k18wg-kaitori")
        # 指輪・ブレスレット・ネックレス
        add("kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-necklace-kaitori")
        # 他ブランド
        other_brands = [b for b in BRAND_SLUGS if b != slug]
        for b in other_brands[:4]:
            add(b)
        # ダイヤ
        add("diamond-kaitori")
        # 高く売るコツ
        add("kin-takaku-uru", "kin-kaitori-souba")

    elif slug in REGION_SLUGS:
        # 隣接地域 4本
        for r in REGION_SLUGS[slug].get("neighbors", []):
            add(r)
        # 純度別 主要3本
        for p in PRIMARY_PURITY[:3]:
            add(p)
        # HOW-TO 3本
        for h in PRIMARY_HOWTO[:3]:
            add(h)
        # 比較 1本
        add("daikichi-vs-nanboya")
        # 詐欺対策
        add("kin-kaitori-sagi")

    elif slug in HOWTO_SLUGS:
        # 純度別 3本
        for p in PRIMARY_PURITY[:3]:
            add(p)
        # 関連HOW-TO
        howto_related_map: dict[str, list[str]] = {
            "kin-takaku-uru":       ["kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-uru-timing", "kin-kaitori-hajimete"],
            "kin-uru-timing":       ["kin-uridoki-2026", "kin-takaku-uru", "kin-kaitori-souba"],
            "kin-uridoki-2026":     ["kin-uru-timing", "kin-takaku-uru", "kin-kaitori-souba"],
            "kin-kaitori-souba":    ["kin-takaku-uru", "kin-uru-timing", "kin-uridoki-2026"],
            "kin-kaitori-hajimete": ["kin-takaku-uru", "kaitori-houhou-hikaku", "kin-kaitori-sagi"],
            "kin-kaitori-sagi":     ["tentou-vs-takuhai", "kin-kaitori-hajimete", "line-satei-seido"],
            "kaitori-houhou-hikaku": ["tentou-vs-takuhai", "ikkatsu-satei-hikaku", "line-satei-seido"],
            "kin-kaitori-zeikin":   ["kin-kakutei-shinkoku", "kin-200man-mynumber", "kin-souzoku-baikyaku"],
            "kin-kakutei-shinkoku": ["kin-kaitori-zeikin", "kin-200man-mynumber"],
            "kin-200man-mynumber":  ["kin-kaitori-zeikin", "kin-kakutei-shinkoku"],
            "kin-souzoku-baikyaku": ["ihin-seiri-kin", "kin-kaitori-zeikin"],
            "ihin-seiri-kin":       ["kin-souzoku-baikyaku", "kowareta-kin-kaitori", "kin-kaitori-zeikin"],
            "kongyaku-yubiwa-uru":  ["kin-yubiwa-kaitori", "diamond-kaitori", "cartier-kaitori"],
            "gin-kaitori":          ["platinum-kaitori", "kin-kaitori-souba", "kin-takaku-uru"],
            "shinju-kaitori":       ["diamond-kaitori", "platinum-kaitori", "kin-yubiwa-kaitori"],
        }
        for h in howto_related_map.get(slug, [])[:3]:
            add(h)
        # 主要HOW-TO 補強 2本
        for h in PRIMARY_HOWTO:
            add(h)
        # 比較・解説 2本
        for c in PRIMARY_COMPARE[:2]:
            add(c)
        # 主要地域 1本
        for r in PRIMARY_REGION[:1]:
            add(r)

    elif slug in COMPARE_SLUGS:
        # 純度別 主要3本
        for p in PRIMARY_PURITY[:3]:
            add(p)
        # 他の比較記事
        for c in COMPARE_SLUGS:
            add(c)
        # HOW-TO 主要3本
        for h in PRIMARY_HOWTO[:3]:
            add(h)
        # 製品 1本
        add("kin-necklace-kaitori")

    # フォールバック補充
    fallback = [
        "kin-takaku-uru", "kin-kaitori-souba", "k18-kaitori", "k24-kaitori",
        "kin-necklace-kaitori", "kin-yubiwa-kaitori", "tokyo-kin-kaitori",
        "osaka-kin-kaitori", "kaitori-houhou-hikaku", "daikichi-vs-nanboya",
    ]
    for f in fallback:
        if len(related) >= 12:
            break
        add(f)

    return related[:15]


# ---------------------------------------------------------------------------
# 3. メイン処理
# ---------------------------------------------------------------------------

def main():
    existing_slugs = sorted(p.name for p in ARTICLES_DIR.iterdir() if p.is_dir())

    missing = [s for s in existing_slugs if s not in ALL_META]
    if missing:
        raise SystemExit(f"分類されていない記事があります: {missing}")
    extra = [s for s in ALL_META if s not in existing_slugs]
    if extra:
        raise SystemExit(f"メタデータに存在するが記事フォルダがない: {extra}")

    # JSON 書き出し
    metadata_list = [ALL_META[s] for s in existing_slugs]
    METADATA_PATH.write_text(
        json.dumps(metadata_list, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"[OK] data/articles-metadata.json 生成 ({len(metadata_list)}件)")

    # 置換パターン
    aside_pattern = re.compile(
        r'( *)<aside className="mt-12 pt-8 border-t border-warm-border[^"]*">.*?</aside>\n',
        re.DOTALL,
    )
    # 既存の <RelatedArticles ... /> を再生成のため置換
    existing_related_pattern = re.compile(
        r'( *)<RelatedArticles\b[^/]*?/>\n',
        re.DOTALL,
    )
    # 「<h2>関連記事</h2> + 直後の <div ...>...</div>」を1ブロックとして検出
    # （複数行・任意インデント対応）
    h2_block_pattern = re.compile(
        r'( *)<h2>関連記事</h2>\s*\n'
        r'(?:\s*\n)?'                     # 空行があってもなくてもOK
        r'\s*<div className="grid[^"]*">.*?</div>\n',
        re.DOTALL,
    )
    # 「<h2>関連記事</h2> + <ul>...</ul>」のシンプルなリスト形式
    h2_ul_pattern = re.compile(
        r'( *)<h2>関連記事</h2>\s*\n'
        r'\s*<ul>.*?</ul>\n',
        re.DOTALL,
    )
    # まとめセクション直前に挿入する用
    matome_pattern = re.compile(r'( *)<h2>まとめ</h2>')

    updated = 0
    not_matched: list[str] = []
    link_count_total = 0
    per_category_links: dict[str, int] = {c: 0 for _, c in ALL_DEFS}
    per_category_articles: dict[str, int] = {c: 0 for _, c in ALL_DEFS}

    for slug in existing_slugs:
        page_path = ARTICLES_DIR / slug / "page.tsx"
        original = page_path.read_text(encoding="utf-8")
        related = compute_related(slug)
        link_count_total += len(related)
        cat = ALL_META[slug]["category"]
        per_category_links[cat] += len(related)
        per_category_articles[cat] += 1

        related_arr = "[" + ", ".join(f'"{r}"' for r in related) + "]"

        # 既存ブロックを優先的に置換（idempotent）
        m = existing_related_pattern.search(original)
        mode = "existing"
        if not m:
            m = aside_pattern.search(original)
            mode = "aside"
        if not m:
            m = h2_block_pattern.search(original)
            mode = "h2block"
        if not m:
            m = h2_ul_pattern.search(original)
            mode = "h2ul"
        if not m:
            m = matome_pattern.search(original)
            mode = "matome"

        if not m:
            not_matched.append(slug)
            continue

        indent = m.group(1) or "        "
        new_aside = (
            f'{indent}<RelatedArticles\n'
            f'{indent}  currentSlug="{slug}"\n'
            f'{indent}  relatedSlugs={{{related_arr}}}\n'
            f'{indent}/>\n'
        )

        if mode == "matome":
            # まとめの直前に挿入（まとめは残す）
            new_aside_with_blank = new_aside + "\n"
            new_content = (
                original[: m.start()]
                + new_aside_with_blank
                + original[m.start():]
            )
        else:
            new_content = original[: m.start()] + new_aside + original[m.end():]

        # import 追加
        if "import RelatedArticles" not in new_content:
            link_import_re = re.compile(r'(import Link from "next/link";\n)')
            if link_import_re.search(new_content):
                new_content = link_import_re.sub(
                    r'\1import RelatedArticles from "@/components/RelatedArticles";\n',
                    new_content,
                    count=1,
                )
            else:
                first_import = re.search(r"^(import [^\n]+\n)", new_content, re.MULTILINE)
                if first_import:
                    new_content = (
                        new_content[: first_import.end()]
                        + 'import RelatedArticles from "@/components/RelatedArticles";\n'
                        + new_content[first_import.end():]
                    )

        if new_content != original:
            page_path.write_text(new_content, encoding="utf-8")
            updated += 1

    if not_matched:
        print(f"  [WARN] パターンマッチしなかった記事 ({len(not_matched)}件):")
        for s in not_matched:
            print(f"    - {s}")
    print(f"[OK] {updated}/{len(existing_slugs)} 記事を更新")
    print(
        f"[OK] 総リンク数: {link_count_total}本 "
        f"(1記事あたり平均 {link_count_total / max(1, len(existing_slugs)):.1f}本)"
    )
    print("[OK] カテゴリ別:")
    for _, cat in ALL_DEFS:
        n_articles = per_category_articles[cat]
        n_links = per_category_links[cat]
        avg = n_links / n_articles if n_articles else 0
        print(
            f"     {cat}: {n_articles}記事 / {n_links}リンク (平均 {avg:.1f}本)"
        )


if __name__ == "__main__":
    main()
