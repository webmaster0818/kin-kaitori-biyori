/**
 * 金買取業者の公開情報まとめ（2026-05 時点）
 * 各業者の公式サイトおよび公的に確認できる情報のみ掲載。
 * 推測値は使用せず、明確な情報がない項目は「不明（要問合せ）」と表記する。
 */

export type Dealer = {
  /** 内部識別子 */
  id: string;
  /** 業者名（表示用） */
  name: string;
  /** 公式サイトURL（アフィリンク先） */
  url: string;
  /** 出典として明示するURL（情報の取得元） */
  source: string;
  /** 店舗数の説明 */
  shops: string;
  /** 出張買取対応エリア */
  visitArea: string;
  /** 査定スピード（最短目安） */
  speed: string;
  /** 送料・キャンセル料 */
  fees: string;
  /** 金/貴金属の専門性 */
  expertise: string;
  /** 特徴・強み（短文） */
  strengths: string;
  /** リンクで使うアンカー文 */
  cta: string;
};

export const DEALERS: Dealer[] = [
  {
    id: "daikichi",
    name: "買取大吉",
    url: "https://kaitori-daikichi.jp/",
    source: "https://kaitori-daikichi.jp/",
    shops: "全国 1,900 店舗以上",
    visitArea: "全国対応",
    speed: "電話無料査定 最短1分／店頭査定 約10〜15分（1点）",
    fees: "査定料・出張料・買取手数料・キャンセル料すべて無料",
    expertise: "総合買取（金・貴金属はカテゴリ専用ページあり）",
    strengths: "店舗数業界最大級。自社オークション・海外バイヤー網で還元率を確保",
    cta: "公式サイトで近くの店舗を探す",
  },
  {
    id: "nanboya",
    name: "なんぼや",
    url: "https://nanboya.com/",
    source: "https://nanboya.com/",
    shops: "全国 140 店舗以上",
    visitArea: "出張買取あり（要問合せ）",
    speed: "宅配買取 最短当日／出張買取 最短当日訪問／店頭 10〜15 分（1点）",
    fees: "宅配・店頭ともに査定料・キャンセル料無料。宅配は梱包材も無料",
    expertise: "総合買取（金・貴金属／プラチナのカテゴリ別ページあり）",
    strengths: "GIA/GG資格保有鑑定士在籍。海外10カ国以上の販売網",
    cta: "公式サイトで無料査定を依頼する",
  },
  {
    id: "sanoya",
    name: "質屋さのや",
    url: "https://www.sanoya.co.jp/gold/",
    source: "https://www.sanoya.co.jp/gold/",
    shops: "3 店舗（本店・大塚駅前店・巣鴨駅前店）",
    visitArea: "全国対応（宅配・出張・LINE査定）",
    speed: "店頭査定 通常数分（極端に大量でなければ）",
    fees: "送料・返送料すべて無料／手数料・鑑定料も無料",
    expertise: "金・貴金属に強い質屋（X線分析器装備、刻印なしも判別可）",
    strengths: "1g 未満でも相場通り買取。K24・K18・K14・Pt900 など幅広く対応",
    cta: "公式サイトで金の買取価格を確認する",
  },
  {
    id: "refasta",
    name: "リファスタ",
    url: "https://kinkaimasu.jp/",
    source: "https://kinkaimasu.jp/",
    shops: "東京池袋本店・大阪心斎橋店（実店舗 2 拠点）",
    visitArea: "全国対応の宅配買取（送料・配送補償5,000万円まで無料）",
    speed: "店頭・宅配ともに最短当日査定対応",
    fees: "宅配送料・キャンセル料・返送料すべて無料",
    expertise: "金・プラチナ・ダイヤモンド・宝石の買取専門店",
    strengths: "金・銀・プラチナ価格を毎日更新で公開。配送補償が手厚い",
    cta: "公式サイトで宅配買取を申し込む",
  },
  {
    id: "otakaraya",
    name: "おたからや",
    url: "https://www.otakaraya.jp/",
    source: "https://www.otakaraya.jp/",
    shops: "全国 1,780 店舗以上（2026年5月時点）",
    visitArea: "出張買取無料・全国対応",
    speed: "最短 5 分査定（公式表記）",
    fees: "査定料・出張費無料",
    expertise: "総合買取（金・貴金属／ブランド／時計／切手など）",
    strengths: "国内最大級の店舗網。出張買取の実績件数も豊富",
    cta: "公式サイトで最寄りの店舗を探す",
  },
  {
    id: "brand-revalue",
    name: "ブラリバ（BRAND REVALUE）",
    url: "https://kaitori.brandrevalue.jp/",
    source: "https://kaitori.brandrevalue.jp/flow/",
    shops: "全国主要都市に駅近店舗（数は公式店舗一覧参照）",
    visitArea: "出張買取あり（最短当日訪問）",
    speed: "出張買取 最短当日振込／宅配買取 最短到着即日案内",
    fees: "出張費・査定料・宅配送料・キャンセル料すべて無料",
    expertise: "ブランド品・時計・貴金属の総合買取",
    strengths: "店頭・出張・宅配の3方法から選択可。AACD基準準拠の鑑定",
    cta: "公式サイトで無料査定を依頼する",
  },
  {
    id: "shichifukujin",
    name: "買取本舗 七福神",
    url: "https://kikinzokukaitori.jp/",
    source: "https://kikinzokukaitori.jp/",
    shops: "全国 16 店舗（東京7・神奈川3・埼玉1・千葉1・北海道4）",
    visitArea: "出張買取あり（要問合せ）／宅配は全国対応",
    speed: "シンプルな貴金属 1 点なら数分／宅配は到着当日中に査定",
    fees: "宅配キット・送料・キャンセル料・振込手数料すべて無料",
    expertise: "金・プラチナ・ダイヤ・ブランド・時計に特化",
    strengths: "買取価格表を毎日公開。GIA鑑定士在籍",
    cta: "公式サイトで買取価格を確認する",
  },
];

/** 業者ID指定で配列を絞り込みたい時に使う */
export function pickDealers(ids: string[]): Dealer[] {
  const byId: Record<string, Dealer> = Object.fromEntries(
    DEALERS.map((d) => [d.id, d])
  );
  return ids
    .map((id) => byId[id])
    .filter((d): d is Dealer => Boolean(d));
}
