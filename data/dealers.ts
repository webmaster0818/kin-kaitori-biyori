/**
 * 金買取業者の公開情報まとめ（2026-05 作成・2026-10-19 全7社を公式サイトで再確認）
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
    shops: "全国 2,400 店舗以上（2026年10月 公式表記）",
    visitArea: "全国対応（離島・一部地域は対象外の場合あり）",
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
    shops: "全国 140 店舗以上（2026年10月 公式表記）",
    visitArea: "全国対応（希望エリア・品物・予約状況により対応が難しい場合あり・公式表記）",
    speed: "宅配買取 最短当日／出張買取 最短当日訪問／店頭 10〜15 分（1点）",
    fees: "店頭・宅配・出張・オンラインとも査定料・キャンセル料無料。宅配は送料・宅配キット無料（不成立時の返送料も当社負担）",
    expertise: "総合買取（金・貴金属／プラチナのカテゴリ別ページあり）",
    strengths: "GIA/GG資格保有者在籍。海外10カ国以上／20店舗以上に展開（公式表記）",
    cta: "公式サイトで無料査定を依頼する",
  },
  {
    id: "sanoya",
    name: "質屋さのや",
    url: "https://www.sanoya.co.jp/gold/",
    source: "https://www.sanoya.co.jp/gold/",
    shops: "3 店舗（本店・大塚駅前店・巣鴨駅前店）",
    visitArea: "宅配買取は全国（送料無料）。出張買取は品物が多い場合に本店へ問い合わせ（対応エリアの記載なし）",
    speed: "店頭査定 通常数分（極端に大量でなければ）",
    fees: "宅配の送料・返送料無料／買取手数料・鑑定料なし、売却しない場合も査定料・X線検査料なし",
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
    visitArea: "全国対応の宅配買取（送料無料。梱包キット利用で配送保険は最大5,000万円）",
    speed: "宅配は到着当日に査定（公式「当日査定を保証」）／店頭は即日振込（池袋）",
    fees: "宅配送料・キャンセル料・返送料すべて無料",
    expertise: "貴金属・宝石買取専門店（公式表記）",
    strengths: "金・プラチナ・銀の国内公表価格を公式サイトに掲載。店舗は池袋・心斎橋の2店に集約",
    cta: "公式サイトで宅配買取を申し込む",
  },
  {
    id: "otakaraya",
    name: "おたからや",
    url: "https://www.otakaraya.jp/",
    source: "https://www.otakaraya.jp/",
    shops: "世界 2,080 店舗以上（2026年10月時点・公式表記）",
    visitArea: "出張買取無料・全国対応（公式「全国あらゆる場所に専門の査定士がお伺い」）",
    speed: "金・貴金属の査定は平均5〜15分程度（物量による・公式FAQ）",
    fees: "出張料・査定料・買取手数料すべて無料（公式表記）",
    expertise: "総合買取（金・貴金属／ブランド／時計／切手など）",
    strengths: "店頭・出張・フォーム・LINE査定のほか無料査定フェアも開催（公式「選べる査定方法」）",
    cta: "公式サイトで最寄りの店舗を探す",
  },
  {
    id: "brand-revalue",
    name: "ブラリバ（BRAND REVALUE）",
    url: "https://kaitori.brandrevalue.jp/",
    source: "https://kaitori.brandrevalue.jp/flow/",
    shops: "店舗数は公式店舗一覧参照（公式表記「全店舗、駅チカ」）",
    visitArea: "出張買取あり（対応エリアは公式に記載なし・要問合せ）",
    speed: "出張買取 成約後最短当日中に振込／宅配買取 到着から3日以内に査定連絡（最短到着即日）",
    fees: "出張費・査定料無料。宅配の査定キャンセル時はキャンセル料なし・返送料は当社負担（成約後の返品は送料自己負担）",
    expertise: "ブランド品・時計・貴金属の総合買取",
    strengths: "店頭・出張・宅配の3方法から選択可。AACDの基準に則り偽造品の流通防止に取り組む（公式表記）",
    cta: "公式サイトで無料査定を依頼する",
  },
  {
    id: "shichifukujin",
    name: "買取本舗 七福神",
    url: "https://kikinzokukaitori.jp/",
    source: "https://kikinzokukaitori.jp/",
    shops: "17 店舗（東京7・神奈川3・埼玉1・千葉2・北海道4。2026年10月 公式店舗一覧）",
    visitArea: "出張買取あり（要問合せ）／宅配は全国対応",
    speed: "シンプルな貴金属 1 点なら数分／宅配は到着当日中に査定",
    fees: "宅配キット・送料・振込手数料・査定料無料、買取手数料なし（公式表記）",
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
