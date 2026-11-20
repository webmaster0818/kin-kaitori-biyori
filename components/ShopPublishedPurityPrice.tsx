/* shop-pub-1120: 買取店が公式サイトで公表している品位別の1g買取相場（手入力・日次では更新しない）。
   2026-11-20 16時 遅れ挽回で k14-kaitori・k22-kaitori の冒頭に追加。値は各社公式ページを当日開いて確認したもの。
   田中貴金属（gold.tanaka.co.jp）は 11/20 終日 503/504 で開けず、RE:TANAKA の製品リサイクル価格は載せていない */

import goldData from "@/data/gold-spot-prices.json";

type Purity = "k14" | "k22";

const CHECKED_DATE = "2026年11月20日";

const SHOPS: Array<{
  name: string;
  url: string;
  published: string;
  basis: string;
  prices: Record<Purity, number>;
}> = [
  {
    name: "なんぼや",
    url: "https://nanboya.com/gold-kaitori/souba/",
    published: "2026年11月20日 9:30更新",
    basis: "「買取相場価格に手数料は含まれておりません」と注記",
    prices: { k14: 11396, k22: 18217 },
  },
  {
    name: "おたからや",
    url: "https://www.otakaraya.jp/gold/14kin",
    published: "2026年11月20日 9:30更新",
    basis: "参考価格（税込）・買取価格を保証するものではないと注記",
    prices: { k14: 11709, k22: 18365 },
  },
  {
    name: "コメ兵（KOMEHYO）",
    url: "https://komehyo.jp/kaitori/gold/14k/souba/",
    published: "2026年11月20日更新（時刻の表記なし）",
    basis: "田中貴金属の公表価格等を基準に算出した参考価格（税込）・手数料はかからないと記載",
    prices: { k14: 9263, k22: 15015 },
  },
];

const URL_OVERRIDE: Record<Purity, Record<string, string>> = {
  k14: {},
  k22: {
    "おたからや": "https://www.otakaraya.jp/gold/22kin",
    "コメ兵（KOMEHYO）": "https://komehyo.jp/kaitori/gold/22k/souba/",
    "なんぼや": "https://nanboya.com/gold-kaitori/souba/",
  },
};

const LABEL: Record<Purity, string> = { k14: "14金（K14）", k22: "22金（K22）" };

export function ShopPublishedPurityPrice({ purity }: { purity: Purity }) {
  const rows = SHOPS.map((s) => ({ ...s, url: URL_OVERRIDE[purity][s.name] ?? s.url }));
  const vals = rows.map((r) => r.prices[purity]);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  return (
    <section className="not-prose my-6 border border-rule bg-white p-5" id="shop-published">
      <p className="text-sm font-bold text-accent-dark mb-1 !mt-0">買取店が公表している{LABEL[purity]}の1g買取相場（{CHECKED_DATE}確認）</p>
      <p className="text-xs text-warm-gray mb-3">各社の公式ページに出ている数字をそのまま載せています。同じ日でも、税込か・手数料を含むか・基準にした価格の違いで、<strong>1gあたり{min.toLocaleString()}円〜{max.toLocaleString()}円</strong>と開きがあります。</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-rule text-left">
              <th className="py-2 pr-3">店名</th>
              <th className="py-2 pr-3">{LABEL[purity]} 1g</th>
              <th className="py-2 pr-3">公表日時</th>
              <th className="py-2">基準（公式の注記）</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-b border-rule/50">
                <td className="py-2 pr-3"><a href={r.url} target="_blank" rel="noopener noreferrer nofollow" className="text-accent-dark underline">{r.name}</a></td>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">{r.prices[purity].toLocaleString()}円</td>
                <td className="py-2 pr-3 text-xs">{r.published}</td>
                <td className="py-2 text-xs">{r.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-warm-gray mt-3 mb-0">※この表は{CHECKED_DATE}に各社の公式ページで確認した値で、毎日の自動更新はしていません。最新の値は各社のページでご確認ください。上の「本日の買取相場」は当サイトが田中貴金属のK24店頭買取価格から計算した目安で、各社の公表値とは別のものです{goldData.date < "2026-11-20" ? `（田中貴金属のサイトは${CHECKED_DATE}は応答がなく、目安は前回公表分のままです）` : ""}。</p>
    </section>
  );
}
