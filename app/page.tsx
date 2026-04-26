import Link from "next/link";
import Image from "next/image";

const services = [
  {
    name: "ヒカカク！",
    method: "一括査定",
    description: "複数業者に一括で査定依頼。最高値を簡単に比較できる",
    target: "最高値で売りたい人",
    url: "https://hikakaku.com",
    color: "bg-white border-accent/30 hover:border-accent",
    iconSrc: "/images/icon-compare.png",
  },
  {
    name: "買取大吉",
    method: "店頭買取",
    description: "全国600店舗以上。その場で査定、即現金化",
    target: "店頭で即現金化したい人",
    url: "https://kaitori-daikichi.jp",
    color: "bg-white border-accent/30 hover:border-accent",
    iconSrc: "/images/icon-gold-bar.png",
  },
  {
    name: "ティファナ",
    method: "出張/店頭/宅配",
    description: "3つの方法から選べる。ライフスタイルに合わせた柔軟対応",
    target: "選択肢が欲しい人",
    url: "https://tifana.net",
    color: "bg-white border-accent/30 hover:border-accent",
    iconSrc: "/images/icon-jewelry.png",
  },
  {
    name: "ウリエル",
    method: "出張買取専門",
    description: "自宅にいながら完結。出張費・査定料すべて無料",
    target: "自宅で完結したい人",
    url: "https://uriel-cuore.co.jp",
    color: "bg-white border-accent/30 hover:border-accent",
    iconSrc: "/images/icon-price.png",
  },
];

const articles = [
  {
    href: "/articles/kin-kaitori-souba/",
    tag: "相場情報",
    title: "【2026年最新】金買取相場一覧 — K24/K18/K14の1gあたり価格",
    description:
      "純度別の金買取相場を毎日更新。K24・K18・K14・K10・プラチナの1gあたり価格と、金価格の推移・今後の見通しを解説。",
    tags: ["金相場", "K24", "K18", "プラチナ"],
  },
  {
    href: "/articles/kin-takaku-uru/",
    tag: "売却ガイド",
    title: "【2026年最新】金を高く売る5つのコツ — 相見積もり・タイミング・業者選び",
    description:
      "金・貴金属を少しでも高く売るための実践テクニック。相見積もり、売却タイミング、付属品の有無、避けるべきNG行動まで徹底解説。",
    tags: ["高く売る", "コツ", "相見積もり", "タイミング"],
  },
  {
    href: "/articles/kaitori-houhou-hikaku/",
    tag: "方法比較",
    title: "【2026年最新】金の買取方法4つを徹底比較 — 店頭・出張・宅配・一括査定",
    description:
      "店頭買取・出張買取・宅配買取・一括査定のメリット・デメリットを表で比較。あなたに合った売却方法がわかります。",
    tags: ["店頭買取", "出張買取", "宅配買取", "一括査定"],
  },
  {
    href: "/articles/k18-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】K18（18金）買取相場と高く売る方法",
    description:
      "K18の1gあたりの買取相場、ネックレス・指輪・ブレスレットの製品別価格、刻印の見方、おすすめ買取業者を徹底解説。",
    tags: ["K18", "18金", "ネックレス", "指輪"],
  },
  {
    href: "/articles/k24-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】K24（純金）買取相場ガイド — 高く売る方法",
    description:
      "K24（純金・純度99.99%）の最新買取相場を1gあたりの価格で掲載。インゴット・金貨・ジュエリーの製品別買取価格と高く売るポイントを解説。",
    tags: ["K24", "純金", "インゴット", "金貨"],
  },
  {
    href: "/articles/platinum-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】プラチナ買取相場ガイド — 純度別の価格と高く売る方法",
    description:
      "Pt1000/Pt950/Pt900/Pt850の純度別買取相場、プラチナ価格高騰の背景、金との違い・見分け方を徹底解説。",
    tags: ["プラチナ", "Pt900", "Pt950", "指輪"],
  },
  {
    href: "/articles/kinba-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】金歯の買取相場ガイド — 1本いくら？",
    description:
      "金歯1本あたりの買取相場、金歯の純度（K14〜K20）、売り方の手順、衛生面の注意点を解説。",
    tags: ["金歯", "K14", "歯科用金合金"],
  },
  {
    href: "/articles/kowareta-kin-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】壊れた金・刻印なしでも売れる — 金買取の条件と査定方法",
    description:
      "チェーン切れ・片方のピアス・変色したリング・刻印なしの金製品もすべて買取可能。X線分析による査定の仕組みを解説。",
    tags: ["壊れた金", "刻印なし", "傷あり"],
  },
  {
    href: "/articles/diamond-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】ダイヤモンド・宝石買取ガイド — 4Cの評価と高く売るコツ",
    description:
      "ダイヤモンド買取相場を4C別に解説。鑑定書の有無による価格差、ブランドジュエリーの高額買取のコツも。",
    tags: ["ダイヤモンド", "宝石", "ルビー", "4C"],
  },
  {
    href: "/articles/kinka-ingot-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】金貨・インゴット買取ガイド — 種類別の相場と税金",
    description:
      "メイプルリーフ金貨・ウィーン金貨・インゴットの買取相場、重量別の買取目安、200万円超の税金対策を解説。",
    tags: ["金貨", "インゴット", "メイプルリーフ", "税金"],
  },
  {
    href: "/articles/tokyo-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】東京の金買取おすすめ業者ガイド — エリア別・方法別に徹底比較",
    description:
      "東京で金を高く売るならどこがいい？銀座・新宿・上野御徒町のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["東京", "銀座", "新宿", "御徒町"],
  },
  {
    href: "/articles/osaka-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】大阪の金買取おすすめ業者ガイド — 梅田・難波・心斎橋エリア別比較",
    description:
      "大阪で金を高く売るならどこがいい？梅田・難波・心斎橋のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["大阪", "梅田", "難波", "心斎橋"],
  },
  {
    href: "/articles/kin-jundo-mikata/",
    tag: "知識ガイド",
    title: "【2026年最新】金の純度の見分け方 — K18・K24の違いと刻印の読み方",
    description:
      "金の純度はどうやって見分ける？K24・K18・K14の違い、刻印の読み方、金メッキとの見分け方を徹底解説。",
    tags: ["純度", "刻印", "K18", "K24"],
  },
  {
    href: "/articles/kin-kaitori-zeikin/",
    tag: "税金ガイド",
    title: "【2026年最新】金買取の税金・確定申告ガイド — 譲渡所得の計算と節税対策",
    description:
      "金を売った時の税金はいくら？譲渡所得の計算方法、年間50万円の特別控除、5年超保有の優遇措置を解説。",
    tags: ["税金", "確定申告", "譲渡所得", "節税"],
  },
  {
    href: "/articles/kin-uridoki-2026/",
    tag: "相場分析",
    title: "【2026年最新】金の売り時はいつ？相場の見通しと売却判断の基準",
    description:
      "2026年は金の売り時？歴史的高値の背景、今後の金相場予測、合理的な売却判断の基準を解説。",
    tags: ["売り時", "2026年", "金相場", "予測"],
  },
  {
    href: "/articles/nagoya-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】名古屋の金買取おすすめ業者ガイド — 名駅・栄・大須エリア別比較",
    description:
      "名古屋で金を高く売るならどこがいい？名駅・栄・大須のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["名古屋", "名駅", "栄", "大須"],
  },
  {
    href: "/articles/fukuoka-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】福岡の金買取おすすめ業者ガイド — 天神・博多・大名エリア別比較",
    description:
      "福岡で金を高く売るならどこがいい？天神・博多・大名のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["福岡", "天神", "博多", "大名"],
  },
  {
    href: "/articles/yokohama-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】横浜の金買取おすすめ業者ガイド — 横浜駅・元町・関内エリア別比較",
    description:
      "横浜で金を高く売るならどこがいい？横浜駅・元町・関内のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["横浜", "横浜駅", "元町", "関内"],
  },
  {
    href: "/articles/sapporo-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】札幌の金買取おすすめ業者ガイド — 札幌駅・大通・すすきのエリア別比較",
    description:
      "札幌で金を高く売るならどこがいい？札幌駅・大通・すすきののエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["札幌", "大通", "すすきの", "北海道"],
  },
  {
    href: "/articles/gin-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】銀（シルバー）買取相場ガイド — SV925・SV1000の1gあたり価格",
    description:
      "銀の最新買取相場を1gあたりの価格で掲載。SV925・SV1000の純度別価格、銀食器の買取、高く売るコツを解説。",
    tags: ["銀", "シルバー", "SV925", "銀食器"],
  },
  {
    href: "/articles/k10-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】K10（10金）買取相場ガイド — 1gあたりの価格と高く売る方法",
    description:
      "K10の最新買取相場を1gあたりの価格で掲載。K10とK18の違い、製品別価格目安、高く売るコツを解説。",
    tags: ["K10", "10金", "アクセサリー", "相場"],
  },
  {
    href: "/articles/kin-nobebo-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】金の延べ棒・インゴット買取ガイド — 相場・税金・売る方法",
    description:
      "金インゴットの最新買取相場、重量別の価格目安、売却時の税金と注意点、おすすめ買取業者を解説。",
    tags: ["インゴット", "延べ棒", "ゴールドバー", "税金"],
  },
  {
    href: "/articles/shinju-kaitori/",
    tag: "品目ガイド",
    title: "【2026年最新】真珠（パール）買取相場ガイド — 種類別の価格と高く売る方法",
    description:
      "真珠の最新買取相場を種類別に掲載。アコヤ真珠・南洋真珠・タヒチパールの価格目安と高く売るコツを解説。",
    tags: ["真珠", "パール", "アコヤ", "ミキモト"],
  },
  {
    href: "/articles/kin-kaitori-sagi/",
    tag: "注意ガイド",
    title: "【2026年最新】金買取の詐欺・トラブル完全対策ガイド — 悪質手口と対処法",
    description:
      "金買取でよくある詐欺の手口7選と対処法。訪問買取の押し買い、不当な安値査定の見分け方を解説。",
    tags: ["詐欺", "トラブル", "押し買い", "対策"],
  },
  {
    href: "/articles/kin-souzoku-baikyaku/",
    tag: "税金ガイド",
    title: "【2026年最新】相続した金・遺品の金を売却するガイド — 税金・手続き・注意点",
    description:
      "相続した金の売却で発生する税金、取得費の計算方法、遺品整理で見つかった金の対応手順を解説。",
    tags: ["相続", "遺品", "税金", "売却"],
  },
  {
    href: "/articles/kin-uru-timing/",
    tag: "相場分析",
    title: "【2026年最新】金を売るタイミングはいつ？相場分析と売り時の判断基準",
    description:
      "金を売るベストなタイミングを解説。2026年の金相場の見通し、売り時の判断基準、分割売却のメリットを解説。",
    tags: ["タイミング", "売り時", "相場分析", "2026年"],
  },
  {
    href: "/articles/kin-kaitori-hajimete/",
    tag: "初心者ガイド",
    title: "【2026年最新】初めての金買取ガイド — 流れ・必要なもの・注意点を完全解説",
    description:
      "金を売るのが初めての方向けに、買取の流れ、必要な持ち物、注意すべきポイントをわかりやすく解説。",
    tags: ["初心者", "流れ", "必要なもの", "注意点"],
  },
  {
    href: "/articles/daikichi-vs-nanboya/",
    tag: "比較ガイド",
    title: "【2026年最新】買取大吉 vs なんぼや徹底比較 — 金買取はどちらがお得？",
    description:
      "買取大吉となんぼやを店舗数・手数料・口コミ・対応品目で徹底比較。どちらがお得かがわかります。",
    tags: ["買取大吉", "なんぼや", "比較", "口コミ"],
  },
  {
    href: "/articles/tentou-vs-takuhai/",
    tag: "比較ガイド",
    title: "【2026年最新】金買取は店頭・宅配・出張どれがお得？方法別徹底比較",
    description:
      "金買取の店頭・宅配・出張を徹底比較。メリット・デメリット、価格傾向、おすすめの方法を解説。",
    tags: ["店頭買取", "宅配買取", "出張買取", "比較"],
  },
  {
    href: "/articles/cartier-kaitori/",
    tag: "ブランドガイド",
    title: "【2026年最新】カルティエ（Cartier）買取相場ガイド — 人気モデル別の価格と高く売るコツ",
    description:
      "カルティエの最新買取相場をモデル別に掲載。ラブリング・トリニティ・ジュストアンクルの買取価格目安と高く売るコツを解説。",
    tags: ["カルティエ", "Cartier", "ラブリング", "ジュストアンクル"],
  },
  {
    href: "/articles/tiffany-kaitori/",
    tag: "ブランドガイド",
    title: "【2026年最新】ティファニー（Tiffany）買取相場ガイド — 人気モデル別の価格と高く売るコツ",
    description:
      "ティファニーの最新買取相場をモデル別に掲載。Tスマイル・バイザヤード・ハードウェアの買取価格目安と高く売るコツを解説。",
    tags: ["ティファニー", "Tiffany", "Tスマイル", "バイザヤード"],
  },
  {
    href: "/articles/bvlgari-kaitori/",
    tag: "ブランドガイド",
    title: "【2026年最新】ブルガリ（BVLGARI）買取相場ガイド — 人気モデル別の価格と高く売るコツ",
    description:
      "ブルガリの最新買取相場をモデル別に掲載。ビー・ゼロワン・セルペンティ・ブルガリブルガリの買取価格と高く売るコツを解説。",
    tags: ["ブルガリ", "BVLGARI", "セルペンティ", "ビー・ゼロワン"],
  },
  {
    href: "/articles/vancleef-kaitori/",
    tag: "ブランドガイド",
    title: "【2026年最新】ヴァンクリーフ&アーペル買取相場ガイド — アルハンブラの価格と高く売るコツ",
    description:
      "ヴァンクリーフ&アーペルの最新買取相場をモデル別に掲載。アルハンブラ・フリヴォル・ペルレの買取価格と高く売るコツを解説。",
    tags: ["ヴァンクリーフ", "Van Cleef", "アルハンブラ", "フリヴォル"],
  },
  {
    href: "/articles/sendai-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】仙台の金買取おすすめ業者ガイド — 仙台駅・一番町・青葉通エリア別比較",
    description:
      "仙台で金を高く売るならどこがいい？仙台駅・一番町・青葉通のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["仙台", "仙台駅", "一番町", "東北"],
  },
  {
    href: "/articles/hiroshima-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】広島の金買取おすすめ業者ガイド — 広島駅・八丁堀・本通エリア別比較",
    description:
      "広島で金を高く売るならどこがいい？広島駅・八丁堀・本通のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["広島", "八丁堀", "本通", "中国地方"],
  },
  {
    href: "/articles/kobe-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】神戸の金買取おすすめ業者ガイド — 三宮・元町・ハーバーランドエリア別比較",
    description:
      "神戸で金を高く売るならどこがいい？三宮・元町・ハーバーランドのエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["神戸", "三宮", "元町", "関西"],
  },
  {
    href: "/articles/kyoto-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】京都の金買取おすすめ業者ガイド — 四条・烏丸・河原町エリア別比較",
    description:
      "京都で金を高く売るならどこがいい？四条・烏丸・河原町のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["京都", "四条", "烏丸", "河原町"],
  },
  {
    href: "/articles/omiya-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】大宮（埼玉）の金買取おすすめ業者ガイド — 大宮駅・浦和・川越エリア別比較",
    description:
      "大宮・埼玉で金を高く売るならどこがいい？大宮駅・浦和・川越のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["大宮", "埼玉", "浦和", "川越"],
  },
  {
    href: "/articles/chiba-kin-kaitori/",
    tag: "地域ガイド",
    title: "【2026年最新】千葉の金買取おすすめ業者ガイド — 千葉駅・船橋・柏エリア別比較",
    description:
      "千葉で金を高く売るならどこがいい？千葉駅・船橋・柏のエリア別おすすめ買取業者と高く売るコツを解説。",
    tags: ["千葉", "船橋", "柏", "松戸"],
  },
  {
    href: "/articles/kin-omosa-hakarikata/",
    tag: "知識ガイド",
    title: "【2026年最新】金の重さの測り方ガイド — 自宅でグラムを量る方法と買取価格の計算",
    description:
      "金の重さを自宅で測る方法を解説。デジタルスケールの使い方、比重測定法、金製品の重量目安、買取価格の計算方法を紹介。",
    tags: ["重さ", "測り方", "グラム", "比重"],
  },
  {
    href: "/articles/kin-nisemono-mikata/",
    tag: "知識ガイド",
    title: "【2026年最新】金の偽物の見分け方ガイド — 金メッキとの違い・7つの判別方法",
    description:
      "金の偽物と本物の見分け方を解説。刻印・磁石・比重・色味など7つの判別方法、金メッキとの違いを紹介。",
    tags: ["偽物", "見分け方", "金メッキ", "GP"],
  },
  {
    href: "/articles/kin-kakutei-shinkoku/",
    tag: "税金ガイド",
    title: "【2026年最新】金の売却と確定申告やり方ガイド — 譲渡所得の計算・節税・申告手順",
    description:
      "金を売却した時の確定申告のやり方を解説。譲渡所得の計算方法、50万円の特別控除、節税対策、申告書の書き方を紹介。",
    tags: ["確定申告", "やり方", "譲渡所得", "節税"],
  },
  {
    href: "/articles/ihin-seiri-kin/",
    tag: "遺品整理ガイド",
    title: "【2026年最新】遺品整理で見つかった金の売り方ガイド — 相続・税金・高く売る方法",
    description:
      "遺品整理で見つかった金の売り方を解説。相続税の取り扱い、遺産分割の注意点、遺品の金を高く売る方法を紹介。",
    tags: ["遺品整理", "相続", "遺品", "金買取"],
  },
];

const faqs = [
  {
    q: "金の買取価格は毎日変わりますか？",
    a: "はい、金の買取価格は国際相場（ロンドン金価格）と為替レートに連動して毎日変動します。相場をチェックして、高いタイミングで売却するのがおすすめです。",
  },
  {
    q: "壊れたアクセサリーや片方だけのピアスも買い取ってもらえますか？",
    a: "買い取ってもらえます。金・貴金属の買取は「素材としての価値」がベースなので、壊れていても、片方だけでも、刻印が消えていても査定対象になります。",
  },
  {
    q: "買取に手数料はかかりますか？",
    a: "当サイトで紹介している4社（ヒカカク！・買取大吉・ティファナ・ウリエル）はいずれも査定料・出張費・キャンセル料が無料です。安心して査定を依頼できます。",
  },
  {
    q: "金を売った場合、税金はかかりますか？",
    a: "金の売却益は「譲渡所得」として課税対象になります。ただし、年間50万円の特別控除があり、保有期間5年超なら課税額がさらに半減します。詳しくは金買取相場ページで解説しています。",
  },
  {
    q: "2026年は金を売るのに良いタイミングですか？",
    a: "2026年4月現在、K24（純金）の買取価格は1gあたり約15,200円前後と歴史的な高値圏です。10年前（約4,400円）の3倍以上に上昇しており、売却には好条件と言えます。ただし、短期的な調整は常にあり得ますので、「今の価格に納得できるなら売る」のが実践的な判断です。",
  },
];

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <FaqSchema />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center">
        <Image
          src="/images/hero-gold.png"
          alt="金・貴金属イメージ"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="text-center">
            <p className="text-accent font-medium text-sm mb-3 tracking-[0.2em] uppercase">
              Gold &amp; Precious Metals
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              大切な金・貴金属を、
              <br />
              <span className="text-accent">最高価格</span>で。
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
              K24（純金）・K18・プラチナの最新買取相場をチェック。
              <br className="hidden md:block" />
              4つの人気買取サービスを比較して、あなたに最適な売却方法が見つかります。
            </p>
            <div className="bg-black/40 backdrop-blur-sm border border-accent/30 rounded-xl inline-block px-6 py-3 mb-8">
              <p className="text-xs text-white/60 mb-1">本日の金買取参考相場（K24/1g）</p>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                &#165;15,200<span className="text-sm text-white/60 font-normal ml-1">前後</span>
              </p>
              <p className="text-xs text-white/50 mt-1">※2026年4月時点の目安。実際の買取価格は業者・純度により異なります。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/articles/kin-kaitori-souba/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light text-navy font-bold px-7 py-3.5 rounded-full hover:from-accent-light hover:to-accent transition-all shadow-lg hover:shadow-accent/30"
              >
                最新の金買取相場を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/articles/kin-takaku-uru/"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 font-medium px-7 py-3.5 rounded-full hover:bg-white/20 transition-all"
              >
                高く売るコツを読む
              </Link>
            </div>
            <p className="text-white/40 text-xs mt-4">最終更新: 2026年4月15日</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-y border-warm-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-warm-gray">
            {["査定料・出張費すべて無料", "4社の買取業者を徹底比較", "2026年最新相場対応", "利用者の声500件以上"].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2026年4月 金は今が売り時？相場高騰の背景 */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          2026年4月｜金は今が売り時？相場高騰の背景
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8 max-w-2xl mx-auto">
          金の買取価格は2026年4月時点で歴史的な高値水準にあります。K24（純金）は1gあたり約15,200円前後と、2016年（約4,400円）の約3.5倍に上昇しました。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white border border-warm-border rounded-xl p-5">
            <p className="text-accent font-bold text-2xl mb-1">+246%</p>
            <p className="text-sm text-warm-gray">10年間の金価格上昇率（2016年→2026年）</p>
          </div>
          <div className="bg-white border border-warm-border rounded-xl p-5">
            <p className="text-accent font-bold text-2xl mb-1">15,200円/g</p>
            <p className="text-sm text-warm-gray">K24（純金）の買取参考相場（2026年4月）</p>
          </div>
          <div className="bg-white border border-warm-border rounded-xl p-5">
            <p className="text-accent font-bold text-2xl mb-1">+34%</p>
            <p className="text-sm text-warm-gray">2024年の年間上昇率（過去最大級）</p>
          </div>
        </div>
        <div className="bg-cream rounded-xl p-6 md:p-8">
          <h3 className="font-bold text-base mb-4">金価格が高騰している主な要因</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "各国中央銀行の金購入拡大", desc: "中国・インド・ポーランドなどの中央銀行が外貨準備として金を大量購入。年間1,000トン以上の買い越しが続く" },
              { title: "地政学リスクの継続", desc: "ウクライナ紛争、中東情勢、米中対立の長期化により、安全資産としての金需要が持続" },
              { title: "円安の進行", desc: "1ドル=約155円前後の円安により、ドル建て金価格に加えて円建ての上昇幅がさらに拡大" },
              { title: "世界的なインフレ", desc: "各国の金融緩和によるインフレを背景に、実物資産である金への逃避需要が増加" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-lg p-4 border border-warm-border">
                <p className="font-bold text-sm mb-1">{item.title}</p>
                <p className="text-xs text-warm-gray leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-warm-gray mt-4 leading-relaxed">
            多くのアナリストは2026年後半も「高止まり〜緩やかな上昇」を予測しています。ただし、短期的な調整は常にあり得るため、<strong>「今の価格に納得できるなら売る」</strong>のが最も実践的な判断基準です。
          </p>
        </div>
      </section>

      {/* 4社比較サマリー */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
            買取方法で選ぶ おすすめ4社
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            あなたの希望する売却スタイルに合わせて、最適な買取業者を選べます
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((svc) => (
              <a
                key={svc.name}
                href={svc.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={`${svc.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all group block`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Image src={svc.iconSrc} alt="" width={48} height={48} className="rounded-lg flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-base group-hover:text-accent transition-colors">
                      {svc.name}
                    </h3>
                    <span className="inline-block bg-white/80 text-accent text-xs font-bold px-2 py-0.5 rounded mt-1">
                      {svc.method}
                    </span>
                  </div>
                </div>
                <p className="text-warm-gray text-sm leading-relaxed mb-2">
                  {svc.description}
                </p>
                <p className="text-xs text-navy font-medium">
                  &#x25B6; {svc.target}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 業者の選び方3つのポイント */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          金買取業者の選び方 3つのポイント
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8 max-w-2xl mx-auto">
          買取業者は数多くありますが、すべてが信頼できるとは限りません。以下のポイントを確認して安全な売却を。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-warm-border rounded-xl p-6">
            <div className="text-accent font-bold text-2xl mb-2">1</div>
            <h3 className="font-bold text-base mb-2">査定料・手数料が無料か</h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              信頼できる業者は査定料・出張費・キャンセル料がすべて無料です。「査定料3,000円」「手数料10%」のような業者は避けましょう。当サイト掲載の4社はすべて査定無料です。
            </p>
          </div>
          <div className="bg-white border border-warm-border rounded-xl p-6">
            <div className="text-accent font-bold text-2xl mb-2">2</div>
            <h3 className="font-bold text-base mb-2">買取価格の根拠を説明してくれるか</h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              「なぜこの金額なのか」を純度・重量・当日のレートを基に説明してくれる業者は信頼できます。金額の根拠を示さず即決を迫る業者には注意が必要です。
            </p>
          </div>
          <div className="bg-white border border-warm-border rounded-xl p-6">
            <div className="text-accent font-bold text-2xl mb-2">3</div>
            <h3 className="font-bold text-base mb-2">複数業者を比較しているか</h3>
            <p className="text-sm text-warm-gray leading-relaxed">
              1社だけで売却を決めるのは最もやってはいけない行動です。同じ金製品でも業者間で10〜30%の価格差が出ることがあります。最低3社に見積もりを取りましょう。
            </p>
          </div>
        </div>
      </section>

      {/* 品目別リンク */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
            品目から探す
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            お持ちの金製品に合った買取情報をご覧ください
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { label: "K24（純金）", href: "/articles/k24-kaitori/" },
              { label: "K18（18金）", href: "/articles/k18-kaitori/" },
              { label: "K14（14金）", href: "/articles/kin-kaitori-souba/#k14" },
              { label: "プラチナ", href: "/articles/platinum-kaitori/" },
              { label: "金歯・金冠", href: "/articles/kinba-kaitori/" },
              { label: "ネックレス", href: "/articles/k18-kaitori/#necklace" },
              { label: "指輪・リング", href: "/articles/k18-kaitori/#ring" },
              { label: "ダイヤモンド・宝石", href: "/articles/diamond-kaitori/" },
              { label: "金貨・インゴット", href: "/articles/kinka-ingot-kaitori/" },
              { label: "壊れた金・刻印なし", href: "/articles/kowareta-kin-kaitori/" },
              { label: "東京の金買取", href: "/articles/tokyo-kin-kaitori/" },
              { label: "大阪の金買取", href: "/articles/osaka-kin-kaitori/" },
              { label: "名古屋の金買取", href: "/articles/nagoya-kin-kaitori/" },
              { label: "福岡の金買取", href: "/articles/fukuoka-kin-kaitori/" },
              { label: "横浜の金買取", href: "/articles/yokohama-kin-kaitori/" },
              { label: "札幌の金買取", href: "/articles/sapporo-kin-kaitori/" },
              { label: "銀（シルバー）", href: "/articles/gin-kaitori/" },
              { label: "K10（10金）", href: "/articles/k10-kaitori/" },
              { label: "インゴット", href: "/articles/kin-nobebo-kaitori/" },
              { label: "真珠（パール）", href: "/articles/shinju-kaitori/" },
              { label: "純度の見分け方", href: "/articles/kin-jundo-mikata/" },
              { label: "税金・確定申告", href: "/articles/kin-kaitori-zeikin/" },
              { label: "詐欺・トラブル対策", href: "/articles/kin-kaitori-sagi/" },
              { label: "初めての金買取", href: "/articles/kin-kaitori-hajimete/" },
              { label: "売り時 2026", href: "/articles/kin-uridoki-2026/" },
              { label: "カルティエ", href: "/articles/cartier-kaitori/" },
              { label: "ティファニー", href: "/articles/tiffany-kaitori/" },
              { label: "ブルガリ", href: "/articles/bvlgari-kaitori/" },
              { label: "ヴァンクリーフ", href: "/articles/vancleef-kaitori/" },
              { label: "仙台の金買取", href: "/articles/sendai-kin-kaitori/" },
              { label: "広島の金買取", href: "/articles/hiroshima-kin-kaitori/" },
              { label: "神戸の金買取", href: "/articles/kobe-kin-kaitori/" },
              { label: "京都の金買取", href: "/articles/kyoto-kin-kaitori/" },
              { label: "大宮の金買取", href: "/articles/omiya-kin-kaitori/" },
              { label: "千葉の金買取", href: "/articles/chiba-kin-kaitori/" },
              { label: "金の重さの測り方", href: "/articles/kin-omosa-hakarikata/" },
              { label: "偽物の見分け方", href: "/articles/kin-nisemono-mikata/" },
              { label: "確定申告のやり方", href: "/articles/kin-kakutei-shinkoku/" },
              { label: "遺品整理の金買取", href: "/articles/ihin-seiri-kin/" },
              { label: "よくある質問", href: "/faq/" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="bg-white rounded-lg border border-warm-border p-3 text-center text-sm font-medium hover:border-accent/50 hover:shadow-sm transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 税金・確定申告の注意点 */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          金を売る前に知っておきたい — 税金・確定申告の注意点
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8 max-w-2xl mx-auto">
          金の売却益は「譲渡所得」として課税対象になる場合があります。基本ルールを押さえておきましょう。
        </p>
        <div className="bg-white border border-warm-border rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="space-y-4 text-sm">
            <div className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">1.</span>
              <div>
                <p className="font-bold mb-1">年間50万円の特別控除</p>
                <p className="text-warm-gray">金の売却益が年間50万円以内であれば実質非課税です。生活用の金製品（ジュエリーなど）で1点30万円以下の売却は非課税になる場合もあります。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">2.</span>
              <div>
                <p className="font-bold mb-1">5年超保有で税額が半分に</p>
                <p className="text-warm-gray">保有期間5年超の金は「長期譲渡所得」となり、課税対象額が1/2に軽減されます。売り急がない場合は5年を超えてから売却するのも手です。</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">3.</span>
              <div>
                <p className="font-bold mb-1">200万円超の取引は支払調書が発行される</p>
                <p className="text-warm-gray">1回の取引で200万円を超える金地金・金貨の売却は、業者が税務署に支払調書を提出する義務があります。マイナンバーの提示も必要です。</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-warm-border">
            <p className="text-xs text-warm-gray">
              ※詳しい税金の計算方法や節税対策は <Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">金買取の税金・確定申告ガイド</Link> で解説しています。不明点は税理士に相談することをおすすめします。
            </p>
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            人気の記事
          </h2>
          <div className="space-y-5">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group p-6"
              >
                <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {article.tag}
                </span>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed mb-3">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gold-bg py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white border border-warm-border rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-5 font-medium text-sm">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-cream to-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            まずは無料査定から始めましょう
          </h2>
          <p className="text-warm-gray mb-8 text-sm md:text-base leading-relaxed">
            金・貴金属の買取価格は業者によって大きく異なります。
            <br className="md:hidden" />
            複数社を比較して、最高値での売却を目指しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://hikakaku.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-light text-navy font-bold px-7 py-3.5 rounded-full hover:from-accent-light hover:to-accent transition-all shadow-lg hover:shadow-accent/30"
            >
              一括査定で最高値を調べる
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://uriel-cuore.co.jp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-medium px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors shadow-md hover:shadow-lg"
            >
              出張買取を申し込む
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
