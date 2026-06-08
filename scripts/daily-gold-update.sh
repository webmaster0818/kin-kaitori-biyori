#!/bin/bash
# kin-kaitori-biyori 日次 金相場更新 + 自動デプロイ
# 田中貴金属の本日価格を取得 → 履歴/推移を更新 → ビルド → deploy/src へ push → CF自動反映
# LaunchAgent から毎日実行（ログは /tmp/kin-kaitori-daily.log）

set -e
export PATH=/opt/homebrew/bin:/usr/bin:/usr/local/bin:$PATH

SRC="/Users/takashi.hasegawa/projects/kin-kaitori-biyori"
DEPLOY="/Users/takashi.hasegawa/projects/kin-kaitori-biyori-deploy"
RUN_LOG="/tmp/kin-kaitori-daily.log"
START=$(date +%s)

cd "$SRC"
echo "[$(date '+%Y-%m-%d %H:%M:%S')] === 日次金相場更新 開始 ==="

echo "[$(date '+%H:%M:%S')] [1/4] 田中貴金属 本日価格を取得"
/opt/homebrew/bin/python3 scripts/fetch-tanaka-gold-prices.py 2>&1 | tail -3

echo "[$(date '+%H:%M:%S')] [2/4] Next.js ビルド"
rm -rf .next
export NODE_OPTIONS="--max-old-space-size=8192"
npx next build 2>&1 | tail -3
find out -name "__next*.txt" -type f -delete

echo "[$(date '+%H:%M:%S')] [3/4] deploy へ rsync & push"
rsync -a --delete --exclude=.git "$SRC/out/" "$DEPLOY/"
cd "$DEPLOY"
git add -A
git commit -m "Daily gold price update: $(date '+%Y-%m-%d')" --allow-empty 2>&1 | tail -2
git push origin HEAD:main 2>&1 | tail -2

echo "[$(date '+%H:%M:%S')] [4/4] src コミット & push"
cd "$SRC"
git add -A
git commit -m "Daily gold price data: $(date '+%Y-%m-%d')" --allow-empty 2>&1 | tail -2
git push origin HEAD:main 2>&1 | tail -2

echo "[$(date '+%H:%M:%S')] ✅ 完了 — 経過 $(( $(date +%s) - START ))s"
