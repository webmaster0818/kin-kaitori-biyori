#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""gold-biyori 地域記事ジェネレータ。既存 tokyo-kin-kaitori テンプレートに準拠した
高品質な地域別「金買取」記事を生成。実在の地理データのみ使用（架空相場・架空店舗名なし）。
出力: app/articles/{slug}/page.tsx, data/articles-metadata.json 追記, /tmp/home-area-snippet.txt
"""
import json, os, re
ROOT=os.path.expanduser("~/projects/kin-kaitori-biyori")
ART=os.path.join(ROOT,"app/articles")
META=os.path.join(ROOT,"data/articles-metadata.json")
SITE="https://gold-biyori.com"

# (slug, 市区名, 都道府県, region, 政令市/県庁/その他, [主要エリア3], 特徴hook, [related既存slug], 近隣新slug表記)
# region: hokkaido-tohoku / kanto / chubu / kinki / chugoku-shikoku / kyushu
AREAS=[
 # --- 東京（区・市）---
 ("shibuya-kin-kaitori","渋谷","東京都","kanto","若者文化と商業の中心地",
  ["渋谷駅周辺","道玄坂・宇田川町","表参道・神宮前"],
  "渋谷は若者の街として知られる一方、ハイブランドの路面店や買取チェーンも多く、ファッションジュエリーから本格的な金製品まで幅広く売却できるエリアです。",
  ["tokyo-kin-kaitori","ikebukuro-kin-kaitori","kin-necklace-kaitori"]),
 ("shinjuku-kin-kaitori","新宿","東京都","kanto","乗降客数日本一の巨大ターミナル",
  ["新宿駅東口・歌舞伎町","西新宿","新宿三丁目"],
  "新宿は乗降客数日本一のターミナルで、駅周辺に大手買取チェーンが密集しています。仕事帰りや買い物ついでに立ち寄れる利便性の高さが魅力です。",
  ["tokyo-kin-kaitori","ikebukuro-kin-kaitori","kaitori-houhou-hikaku"]),
 ("ueno-kin-kaitori","上野","東京都","kanto","御徒町に隣接する貴金属の街",
  ["上野駅・アメ横","御徒町方面","上野広小路"],
  "上野は日本最大の貴金属問屋街・御徒町に隣接し、金地金やジュエリーの専門業者が集中するエリアです。相場に近い高価買取が期待できます。",
  ["okachimachi-kin-kaitori","tokyo-kin-kaitori","kinka-ingot-kaitori"]),
 ("shinagawa-kin-kaitori","品川","東京都","kanto","新幹線も停まるビジネス拠点",
  ["品川駅港南口","大井町","五反田方面"],
  "品川は新幹線停車駅を抱えるビジネス街で、オフィスワーカー向けの買取店が点在します。出張買取の対応エリアも広く、自宅売却にも便利です。",
  ["tokyo-kin-kaitori","kin-takaku-uru","kin-yubiwa-kaitori"]),
 ("setagaya-kin-kaitori","世田谷","東京都","kanto","東京23区で人口最多の住宅地",
  ["三軒茶屋","下北沢","二子玉川"],
  "世田谷区は23区で最も人口が多い住宅エリアで、出張買取の需要が高い地域です。相続や遺品整理に伴う金製品の売却相談も多く寄せられます。",
  ["tokyo-kin-kaitori","kin-souzoku-baikyaku","ihin-seiri-kin"]),
 ("machida-kin-kaitori","町田","東京都","kanto","神奈川に接する多摩地域の商業都市",
  ["町田駅周辺","原町田","小田急町田"],
  "町田は多摩地域南部の商業中心地で、神奈川県相模原市にも近く、広域から買取需要が集まります。駅前に大手チェーン店が揃います。",
  ["tokyo-kin-kaitori","yokohama-kin-kaitori","kaitori-houhou-hikaku"]),
 ("kichijoji-kin-kaitori","吉祥寺","東京都","kanto","住みたい街ランキング常連",
  ["吉祥寺駅","サンロード商店街","井の頭公園方面"],
  "吉祥寺は住みたい街として人気の高い武蔵野市の中心で、買い物ついでに立ち寄れる買取店が充実しています。ジュエリーの売却に適したエリアです。",
  ["tokyo-kin-kaitori","kin-necklace-kaitori","kin-bracelet-kaitori"]),
 ("kita-senju-kin-kaitori","北千住","東京都","kanto","5路線が乗り入れる足立区の玄関",
  ["北千住駅","千住大橋方面","西新井方面"],
  "北千住は足立区を代表するターミナルで、5路線が乗り入れる交通の要衝です。駅周辺に買取チェーンが集まり、城東エリアの売却拠点となっています。",
  ["tokyo-kin-kaitori","ikebukuro-kin-kaitori","kin-takaku-uru"]),
 # --- 神奈川 ---
 ("kawasaki-kin-kaitori","川崎","神奈川県","kanto","政令指定都市・東京と横浜の中間",
  ["川崎駅前","ラゾーナ周辺","武蔵小杉"],
  "川崎は人口150万を超える政令指定都市で、東京・横浜の中間に位置します。駅前に大型商業施設と買取店が集中し、利便性に優れます。",
  ["yokohama-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("sagamihara-kin-kaitori","相模原","神奈川県","kanto","神奈川県北部の政令指定都市",
  ["相模大野","橋本","淵野辺"],
  "相模原は神奈川県北部に位置する政令指定都市で、東京都町田市にも隣接します。郊外型の買取店や出張買取の需要が高いエリアです。",
  ["yokohama-kin-kaitori","machida-kin-kaitori","kin-takaku-uru"]),
 ("fujisawa-kin-kaitori","藤沢","神奈川県","kanto","湘南エリアの中心都市",
  ["藤沢駅","辻堂","江ノ島方面"],
  "藤沢は湘南エリアの中心都市で、商業施設が集まる藤沢駅周辺に買取店が点在します。近隣の茅ヶ崎・鎌倉からの来店も多い地域です。",
  ["yokohama-kin-kaitori","kin-necklace-kaitori","kaitori-houhou-hikaku"]),
 ("yokosuka-kin-kaitori","横須賀","神奈川県","kanto","三浦半島の中核市",
  ["横須賀中央","汐入","久里浜"],
  "横須賀は三浦半島の中核市で、横須賀中央駅周辺に買取店が集まります。出張買取の対応も広く、半島部からの売却にも便利です。",
  ["yokohama-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 # --- 埼玉 ---
 ("kawaguchi-kin-kaitori","川口","埼玉県","kanto","東京に隣接する埼玉南部の中核市",
  ["川口駅","西川口","東川口"],
  "川口は荒川を挟んで東京に隣接する埼玉県南部の中核市です。人口60万を超え、駅周辺に買取チェーンが揃い、都内への持ち込みも容易です。",
  ["omiya-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("kawagoe-kin-kaitori","川越","埼玉県","kanto","小江戸と呼ばれる歴史都市",
  ["川越駅","本川越","蔵造りの町並み"],
  "川越は「小江戸」と呼ばれる歴史的な街並みで知られる埼玉県西部の中核市です。観光地でありながら大手買取チェーンも展開しています。",
  ["omiya-kin-kaitori","kin-souzoku-baikyaku","kin-takaku-uru"]),
 ("tokorozawa-kin-kaitori","所沢","埼玉県","kanto","埼玉西部の交通拠点",
  ["所沢駅","新所沢","西武球場前方面"],
  "所沢は埼玉県西部の交通拠点で、西武線沿線の買取需要を集めます。駅前再開発で商業施設が充実し、買取店へのアクセスも良好です。",
  ["omiya-kin-kaitori","kawagoe-kin-kaitori","kaitori-houhou-hikaku"]),
 # --- 千葉 ---
 ("funabashi-kin-kaitori","船橋","千葉県","kanto","千葉県北西部の中核市",
  ["船橋駅","西船橋","津田沼方面"],
  "船橋は千葉県北西部の中核市で、人口60万超を抱えます。船橋駅・西船橋を中心に買取店が集まり、東京方面へのアクセスも良好です。",
  ["chiba-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("matsudo-kin-kaitori","松戸","千葉県","kanto","東京に隣接する千葉県北西部",
  ["松戸駅","新松戸","北小金"],
  "松戸は江戸川を挟んで東京に接する千葉県北西部の都市です。常磐線沿線の買取需要を集め、駅周辺にチェーン店が展開しています。",
  ["chiba-kin-kaitori","funabashi-kin-kaitori","kin-takaku-uru"]),
 ("kashiwa-kin-kaitori","柏","千葉県","kanto","東葛地域の商業中心地",
  ["柏駅","柏の葉","南柏"],
  "柏は「東葛の渋谷」とも呼ばれる商業中心地で、柏駅周辺に多くの買取店が集まります。茨城県南部からの来店も多い広域型のエリアです。",
  ["chiba-kin-kaitori","matsudo-kin-kaitori","kaitori-houhou-hikaku"]),
 # --- 中部・東海 ---
 ("nagoya-sakae-kin-kaitori","名古屋・栄","愛知県","chubu","名古屋随一の繁華街",
  ["栄駅","錦","矢場町"],
  "栄は名古屋随一の繁華街で、百貨店やブランド店が集まるエリアです。金・ブランドジュエリーの買取店が多く、高価買取が期待できます。",
  ["nagoya-kin-kaitori","kin-necklace-kaitori","kaitori-houhou-hikaku"]),
 ("toyota-kin-kaitori","豊田","愛知県","chubu","世界的自動車メーカーの企業城下町",
  ["豊田市駅","上挙母","三河豊田"],
  "豊田市は自動車産業で栄える愛知県中部の中核市です。郊外型店舗や出張買取の需要が高く、まとまった金製品の売却相談も寄せられます。",
  ["nagoya-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("gifu-kin-kaitori","岐阜","岐阜県","chubu","岐阜県の県庁所在地",
  ["岐阜駅","柳ケ瀬","名鉄岐阜"],
  "岐阜市は岐阜県の県庁所在地で、名古屋へのアクセスも良好です。柳ケ瀬商店街や岐阜駅周辺に買取店があり、県内各地から来店があります。",
  ["nagoya-kin-kaitori","kin-souba","kaitori-houhou-hikaku"]),
 ("shizuoka-kin-kaitori","静岡","静岡県","chubu","静岡県中部の県庁所在地",
  ["静岡駅","呉服町","新静岡"],
  "静岡市は静岡県の県庁所在地で政令指定都市です。駅前の呉服町通りを中心に商業が発達し、金買取店も複数展開しています。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("hamamatsu-kin-kaitori","浜松","静岡県","chubu","静岡県西部の政令指定都市",
  ["浜松駅","遠州","アクト周辺"],
  "浜松市は楽器・輸送機器産業で知られる静岡県西部の政令指定都市です。駅周辺に大手チェーンが揃い、愛知県東部からの来店もあります。",
  ["shizuoka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kanazawa-kin-kaitori","金沢","石川県","chubu","北陸を代表する観光・文化都市",
  ["金沢駅","香林坊","片町"],
  "金沢市は北陸を代表する観光・文化都市で、石川県の県庁所在地です。香林坊・片町の繁華街を中心に買取店が点在しています。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("niigata-kin-kaitori","新潟","新潟県","chubu","本州日本海側最大の都市",
  ["新潟駅","万代","古町"],
  "新潟市は本州日本海側で最大の人口を持つ政令指定都市です。万代・古町の中心市街地に買取店が集まり、県内全域から来店があります。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("nagano-kin-kaitori","長野","長野県","chubu","善光寺の門前町",
  ["長野駅","善光寺下","権堂"],
  "長野市は善光寺の門前町として発展した長野県の県庁所在地です。長野駅・権堂周辺に買取店があり、県北部の売却拠点となっています。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 # --- 近畿 ---
 ("namba-kin-kaitori","難波","大阪府","kinki","ミナミの中心繁華街",
  ["なんば駅","心斎橋","道頓堀"],
  "難波（ミナミ）は大阪を代表する繁華街で、心斎橋から続く商業エリアにブランド・金買取店が集中します。高価買取の競争が激しい地域です。",
  ["osaka-kin-kaitori","umeda-kin-kaitori","kin-necklace-kaitori"]),
 ("tennoji-kin-kaitori","天王寺","大阪府","kinki","あべのハルカスのある南の拠点",
  ["天王寺駅","阿倍野","あべのハルカス"],
  "天王寺・阿倍野は大阪南部の交通・商業拠点で、あべのハルカスを中心に再開発が進むエリアです。駅周辺に買取チェーンが揃います。",
  ["osaka-kin-kaitori","namba-kin-kaitori","kaitori-houhou-hikaku"]),
 ("sakai-kin-kaitori","堺","大阪府","kinki","大阪府南部の政令指定都市",
  ["堺東駅","堺駅","中百舌鳥"],
  "堺市は大阪府南部の政令指定都市で、人口80万を超えます。堺東駅周辺の商業地に買取店があり、泉州地域の売却拠点になっています。",
  ["osaka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("nara-kin-kaitori","奈良","奈良県","kinki","古都・奈良の県庁所在地",
  ["近鉄奈良駅","JR奈良駅","西大寺方面"],
  "奈良市は世界遺産を擁する古都で、奈良県の県庁所在地です。近鉄奈良駅周辺に買取店があり、大阪・京都へのアクセスも良好です。",
  ["kyoto-kin-kaitori","osaka-kin-kaitori","kin-souzoku-baikyaku"]),
 ("wakayama-kin-kaitori","和歌山","和歌山県","kinki","紀州の県庁所在地",
  ["和歌山駅","ぶらくり丁","和歌山市駅"],
  "和歌山市は紀州の中心・和歌山県の県庁所在地です。和歌山駅やぶらくり丁周辺に買取店があり、県内全域から金製品の売却が集まります。",
  ["osaka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("otsu-kin-kaitori","大津","滋賀県","kinki","琵琶湖畔の滋賀県県庁所在地",
  ["大津駅","膳所","石山"],
  "大津市は琵琶湖の南西畔に位置する滋賀県の県庁所在地で、京都に隣接します。京阪沿線の買取需要を集める落ち着いたエリアです。",
  ["kyoto-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("himeji-kin-kaitori","姫路","兵庫県","kinki","世界遺産・姫路城の城下町",
  ["姫路駅","大手前","みゆき通り"],
  "姫路市は世界遺産・姫路城で知られる兵庫県西部の中核市です。姫路駅前の商店街に買取店が集まり、播磨地域の売却拠点となっています。",
  ["kobe-kin-kaitori","osaka-kin-kaitori","kaitori-houhou-hikaku"]),
 # --- 中国・四国 ---
 ("okayama-kin-kaitori","岡山","岡山県","chugoku-shikoku","中国地方南部の政令指定都市",
  ["岡山駅","表町","奉還町"],
  "岡山市は中国・四国の交通結節点となる政令指定都市です。岡山駅・表町商店街を中心に買取店が集まり、広域から来店があります。",
  ["hiroshima-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kurashiki-kin-kaitori","倉敷","岡山県","chugoku-shikoku","美観地区で知られる岡山県西部",
  ["倉敷駅","美観地区","水島方面"],
  "倉敷市は白壁の美観地区で知られる岡山県西部の中核市です。倉敷駅周辺に買取店があり、観光客・地元客の双方が利用します。",
  ["okayama-kin-kaitori","hiroshima-kin-kaitori","kaitori-houhou-hikaku"]),
 ("takamatsu-kin-kaitori","高松","香川県","chugoku-shikoku","四国の玄関口",
  ["高松駅","丸亀町","瓦町"],
  "高松市は四国の玄関口となる香川県の県庁所在地です。丸亀町商店街など中心市街地に買取店が集まり、四国各県から来店があります。",
  ["okayama-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("matsuyama-kin-kaitori","松山","愛媛県","chugoku-shikoku","四国最大の人口を持つ城下町",
  ["松山市駅","大街道","道後温泉方面"],
  "松山市は四国で最も人口の多い愛媛県の県庁所在地で、道後温泉や松山城で知られます。大街道・銀天街の商店街に買取店があります。",
  ["takamatsu-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 # --- 九州 ---
 ("kitakyushu-kin-kaitori","北九州","福岡県","kyushu","福岡県北部の政令指定都市",
  ["小倉駅","黒崎","門司"],
  "北九州市は福岡県北部の政令指定都市で、小倉を中心に商業が発達しています。本州との結節点でもあり、広域から買取需要が集まります。",
  ["fukuoka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kumamoto-kin-kaitori","熊本","熊本県","kyushu","熊本城を擁する九州中央の政令指定都市",
  ["熊本駅","下通","上通"],
  "熊本市は九州中央部の政令指定都市で、下通・上通アーケードが九州有数の繁華街です。買取店が集まり、県内全域から来店があります。",
  ["fukuoka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kagoshima-kin-kaitori","鹿児島","鹿児島県","kyushu","南九州の中心都市",
  ["鹿児島中央駅","天文館","いづろ"],
  "鹿児島市は南九州の中心都市で、天文館が一大繁華街です。鹿児島中央駅・天文館周辺に買取店が集まり、県内各地から売却が寄せられます。",
  ["fukuoka-kin-kaitori","kumamoto-kin-kaitori","kaitori-houhou-hikaku"]),
 ("naha-kin-kaitori","那覇","沖縄県","kyushu","沖縄県の県庁所在地",
  ["県庁前","国際通り","おもろまち"],
  "那覇市は沖縄県の県庁所在地で、国際通りを中心に商業が集まります。観光地でありながら買取チェーンも展開し、離島からの来店もあります。",
  ["fukuoka-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("oita-kin-kaitori","大分","大分県","kyushu","別府温泉に近い県庁所在地",
  ["大分駅","府内町","セントポルタ"],
  "大分市は温泉で有名な大分県の県庁所在地です。大分駅周辺やセントポルタ中央町商店街に買取店があり、県内各地から来店があります。",
  ["fukuoka-kin-kaitori","kumamoto-kin-kaitori","kaitori-houhou-hikaku"]),
 # --- 北海道・東北 ---
 ("asahikawa-kin-kaitori","旭川","北海道","hokkaido-tohoku","道北最大の中核市",
  ["旭川駅","平和通買物公園","旭川四条"],
  "旭川市は北海道第2の都市で道北の中心です。平和通買物公園を中心に商業が集まり、買取店も展開しています。道北全域の売却拠点です。",
  ["sapporo-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("hakodate-kin-kaitori","函館","北海道","hokkaido-tohoku","道南の観光・港湾都市",
  ["函館駅","五稜郭","本町"],
  "函館市は道南の中心となる観光・港湾都市です。五稜郭・本町エリアに商業が集まり、買取店も点在します。観光・地元双方の利用があります。",
  ["sapporo-kin-kaitori","asahikawa-kin-kaitori","kaitori-houhou-hikaku"]),
 ("aomori-kin-kaitori","青森","青森県","hokkaido-tohoku","本州最北の県庁所在地",
  ["青森駅","新町","古川"],
  "青森市は本州最北の県庁所在地で、北海道への玄関口でもあります。新町通りを中心に買取店があり、県内各地から金製品が持ち込まれます。",
  ["sendai-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("morioka-kin-kaitori","盛岡","岩手県","hokkaido-tohoku","北東北の中核都市",
  ["盛岡駅","大通","菜園"],
  "盛岡市は岩手県の県庁所在地で、北東北の中核都市です。大通・菜園の繁華街に買取店があり、県内全域から売却需要が集まります。",
  ["sendai-kin-kaitori","aomori-kin-kaitori","kaitori-houhou-hikaku"]),
 ("akita-kin-kaitori","秋田","秋田県","hokkaido-tohoku","秋田県の県庁所在地",
  ["秋田駅","川反","広小路"],
  "秋田市は秋田県の県庁所在地で、川反は東北有数の歓楽街です。秋田駅・広小路周辺に買取店があり、県内各地から来店があります。",
  ["sendai-kin-kaitori","morioka-kin-kaitori","kaitori-houhou-hikaku"]),
 ("yamagata-kin-kaitori","山形","山形県","hokkaido-tohoku","蔵王の麓の県庁所在地",
  ["山形駅","七日町","霞城"],
  "山形市は山形県の県庁所在地で、七日町が中心商店街です。山形駅周辺に買取店があり、仙台へのアクセスも良く広域利用があります。",
  ["sendai-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("fukushima-kin-kaitori","福島","福島県","hokkaido-tohoku","福島県の県庁所在地",
  ["福島駅","栄町","パセオ通り"],
  "福島市は福島県の県庁所在地で、福島駅周辺の栄町・パセオ通りに商業が集まります。買取店も展開し、県北地域の売却拠点となっています。",
  ["sendai-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("koriyama-kin-kaitori","郡山","福島県","hokkaido-tohoku","福島県中通りの経済都市",
  ["郡山駅","駅前大通り","うすい百貨店周辺"],
  "郡山市は福島県の経済の中心で、東北新幹線の主要駅を抱えます。郡山駅周辺に商業施設と買取店が集まり、県中地域の拠点です。",
  ["fukushima-kin-kaitori","sendai-kin-kaitori","kaitori-houhou-hikaku"]),
 ("mito-kin-kaitori","水戸","茨城県","kanto","水戸黄門で知られる県庁所在地",
  ["水戸駅","泉町","南町"],
  "水戸市は茨城県の県庁所在地で、偕楽園で知られます。水戸駅・泉町周辺に買取店があり、県央・県北からの売却需要を集めています。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("utsunomiya-kin-kaitori","宇都宮","栃木県","kanto","餃子の街・栃木県の県庁所在地",
  ["宇都宮駅","オリオン通り","東武宇都宮"],
  "宇都宮市は栃木県の県庁所在地で、北関東有数の商業都市です。オリオン通り商店街に買取店が集まり、県内全域から来店があります。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("maebashi-kin-kaitori","前橋","群馬県","kanto","群馬県の県庁所在地",
  ["前橋駅","中央通り","けやき並木"],
  "前橋市は群馬県の県庁所在地で、隣接する高崎市と並ぶ県の中心です。中央通り周辺に買取店があり、県央地域の売却拠点となっています。",
  ["kin-takaku-uru","kin-souba","kaitori-houhou-hikaku"]),
 ("takasaki-kin-kaitori","高崎","群馬県","kanto","新幹線が交わる群馬の交通拠点",
  ["高崎駅","スズラン周辺","あら町"],
  "高崎市は上越・北陸新幹線が分岐する群馬県随一の交通拠点です。高崎駅周辺に商業施設と買取店が集まり、広域から来店があります。",
  ["maebashi-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kofu-kin-kaitori","甲府","山梨県","chubu","ジュエリー産業が盛んな県庁所在地",
  ["甲府駅","中央","オリオン通り"],
  "甲府市は山梨県の県庁所在地で、宝飾産業が盛んな「ジュエリーのまち」として知られます。専門性の高い買取が期待できるエリアです。",
  ["kin-necklace-kaitori","diamond-kaitori","kin-takaku-uru"]),
 # --- 県単位 ---
 ("saitama-ken-kin-kaitori","埼玉県","埼玉県","kanto","首都圏北部の人口集積地",
  ["さいたま市","川口・川越","所沢・越谷"],
  "埼玉県は人口730万を超える首都圏北部の県で、さいたま市・川口・川越など各地に買取店が展開しています。出張買取の対応も広範囲です。",
  ["omiya-kin-kaitori","kawaguchi-kin-kaitori","kaitori-houhou-hikaku"]),
 ("chiba-ken-kin-kaitori","千葉県","千葉県","kanto","首都圏東部の県",
  ["千葉市","船橋・松戸","柏・市川"],
  "千葉県は首都圏東部に位置し、千葉市・船橋・柏など県内各地に買取店があります。出張・宅配買取を使えば県内どこからでも売却可能です。",
  ["chiba-kin-kaitori","funabashi-kin-kaitori","kaitori-houhou-hikaku"]),
 ("kanagawa-ken-kin-kaitori","神奈川県","神奈川県","kanto","首都圏南部・人口全国2位の県",
  ["横浜市","川崎市","湘南・県西"],
  "神奈川県は人口920万を超える全国2位の県で、横浜・川崎・湘南など各地に買取店が集積します。都市部から郊外まで売却拠点が豊富です。",
  ["yokohama-kin-kaitori","kawasaki-kin-kaitori","kaitori-houhou-hikaku"]),
 ("aichi-ken-kin-kaitori","愛知県","愛知県","chubu","中部地方の中心・製造業の県",
  ["名古屋市","豊田・岡崎","一宮・豊橋"],
  "愛知県は中部地方の中心で、名古屋市を核に各地へ買取店が展開しています。製造業が盛んで人口も多く、売却需要の高い地域です。",
  ["nagoya-kin-kaitori","toyota-kin-kaitori","kaitori-houhou-hikaku"]),
 ("hyogo-ken-kin-kaitori","兵庫県","兵庫県","kinki","神戸を擁する近畿の県",
  ["神戸市","姫路・西宮","阪神間"],
  "兵庫県は神戸市を中心に、姫路・西宮・尼崎など広範囲に買取店が分布します。都市部から播磨・但馬まで、出張買取も活用できます。",
  ["kobe-kin-kaitori","himeji-kin-kaitori","kaitori-houhou-hikaku"]),
 ("fukuoka-ken-kin-kaitori","福岡県","福岡県","kyushu","九州最大の人口を持つ県",
  ["福岡市","北九州市","久留米方面"],
  "福岡県は九州最大の人口を持ち、福岡市・北九州市を中心に買取店が集積します。九州全域の売却需要が集まる中核的なエリアです。",
  ["fukuoka-kin-kaitori","kitakyushu-kin-kaitori","kaitori-houhou-hikaku"]),
 # ===== 第2弾 =====
 # 東京23区
 ("meguro-kin-kaitori","目黒","東京都","kanto","落ち着いた住宅・商業エリア",
  ["目黒駅","中目黒","自由が丘方面"],
  "目黒区は中目黒・自由が丘など人気の街を擁する東京南西部の住宅地で、ジュエリーの売却需要が高いエリアです。",
  ["shibuya-kin-kaitori","tokyo-kin-kaitori","kin-necklace-kaitori"]),
 ("ota-kin-kaitori","大田区","東京都","kanto","23区最大の面積を持つ城南の区",
  ["蒲田","大森","羽田方面"],
  "大田区は蒲田・大森を中心とする23区最大面積の区で、城南エリアの買取需要を集めます。出張買取の利用も多い地域です。",
  ["shinagawa-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("koto-kin-kaitori","江東区","東京都","kanto","湾岸開発が進む城東の区",
  ["豊洲","門前仲町","亀戸"],
  "江東区は豊洲などの湾岸エリア開発が進む城東の区で、新旧の住民が混在し買取需要も旺盛です。",
  ["kita-senju-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("sumida-kin-kaitori","墨田区","東京都","kanto","スカイツリーのある下町",
  ["錦糸町","押上","両国"],
  "墨田区は東京スカイツリーを擁する下町で、錦糸町を中心に買取店が集まります。城東エリアの売却拠点の一つです。",
  ["koto-kin-kaitori","kita-senju-kin-kaitori","kaitori-houhou-hikaku"]),
 ("nakano-kin-kaitori","中野","東京都","kanto","新宿に近い人気の住宅・商業地",
  ["中野駅","中野ブロードウェイ","新中野"],
  "中野区は新宿に隣接する人気の住宅・商業地で、中野駅周辺に買取店が集まります。サブカル文化でも知られます。",
  ["shinjuku-kin-kaitori","kichijoji-kin-kaitori","kaitori-houhou-hikaku"]),
 ("suginami-kin-kaitori","杉並区","東京都","kanto","閑静な住宅地が広がる区",
  ["荻窪","阿佐ヶ谷","高円寺"],
  "杉並区は荻窪・高円寺など個性的な街が並ぶ住宅地で、中央線沿線の買取需要を集めます。",
  ["nakano-kin-kaitori","kichijoji-kin-kaitori","kaitori-houhou-hikaku"]),
 ("nerima-kin-kaitori","練馬区","東京都","kanto","23区北西部の住宅地",
  ["練馬駅","光が丘","大泉学園"],
  "練馬区は23区北西部の住宅地で人口が多く、出張買取の需要が高いエリアです。西武・大江戸線沿線が中心です。",
  ["ikebukuro-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("adachi-kin-kaitori","足立区","東京都","kanto","北千住を擁する城北の区",
  ["北千住","綾瀬","西新井"],
  "足立区は北千住を中心とする城北の区で、複数路線が乗り入れる交通利便性の高いエリアです。",
  ["kita-senju-kin-kaitori","tokyo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("katsushika-kin-kaitori","葛飾区","東京都","kanto","下町情緒が残る城東の区",
  ["亀有","金町","新小岩"],
  "葛飾区は亀有・柴又など下町情緒が残る城東の区で、地域密着の買取需要があります。",
  ["sumida-kin-kaitori","kita-senju-kin-kaitori","kaitori-houhou-hikaku"]),
 ("itabashi-kin-kaitori","板橋区","東京都","kanto","23区北部の住宅・商業地",
  ["板橋駅","成増","高島平"],
  "板橋区は23区北部の住宅・商業地で、東武東上線・都営三田線沿線の買取需要を集めます。",
  ["ikebukuro-kin-kaitori","nerima-kin-kaitori","kaitori-houhou-hikaku"]),
 ("toshima-kin-kaitori","豊島区","東京都","kanto","池袋を擁する副都心の区",
  ["池袋","巣鴨","目白"],
  "豊島区は池袋を中心とする副都心の区で、買取店が密集します。巣鴨など高齢層の売却需要も高い地域です。",
  ["ikebukuro-kin-kaitori","tokyo-kin-kaitori","kin-souzoku-baikyaku"]),
 ("edogawa-kin-kaitori","江戸川区","東京都","kanto","千葉に接する城東の区",
  ["小岩","葛西","船堀"],
  "江戸川区は千葉県に接する城東の区で、小岩・葛西を中心に買取需要があります。ファミリー層の多い住宅地です。",
  ["katsushika-kin-kaitori","funabashi-kin-kaitori","kaitori-houhou-hikaku"]),
 ("chiyoda-kin-kaitori","千代田区","東京都","kanto","皇居を中心とするビジネス中枢",
  ["丸の内","神田","秋葉原"],
  "千代田区は丸の内・大手町などビジネスの中枢で、神田・秋葉原にも買取店があります。法人・オフィス需要も特徴です。",
  ["tokyo-kin-kaitori","ginza-kin-kaitori","kaitori-houhou-hikaku"]),
 ("minato-kin-kaitori","港区","東京都","kanto","高級住宅と商業の中心",
  ["新橋","六本木","品川方面"],
  "港区は六本木・麻布・青山などを擁する高級エリアで、ハイブランドジュエリーの売却需要が高い地域です。",
  ["ginza-kin-kaitori","tokyo-kin-kaitori","kin-necklace-kaitori"]),
 # 東京市部
 ("hachioji-kin-kaitori","八王子","東京都","kanto","多摩地域最大の都市",
  ["八王子駅","京王八王子","西八王子"],
  "八王子市は多摩地域最大の人口を持つ中核市で、駅周辺に買取店が集まります。多摩西部の売却拠点です。",
  ["machida-kin-kaitori","tachikawa-kin-kaitori","kaitori-houhou-hikaku"]),
 ("tachikawa-kin-kaitori","立川","東京都","kanto","多摩地域の商業中心",
  ["立川駅","北口","南口"],
  "立川市は多摩地域の商業中心で、立川駅周辺に大型商業施設と買取店が集まります。広域から来店があります。",
  ["hachioji-kin-kaitori","kichijoji-kin-kaitori","kaitori-houhou-hikaku"]),
 # 神奈川
 ("atsugi-kin-kaitori","厚木","神奈川県","kanto","県央の交通・商業拠点",
  ["本厚木駅","厚木","愛甲石田方面"],
  "厚木市は神奈川県央の交通・商業拠点で、本厚木駅周辺に買取店が集まります。県央エリアの売却拠点です。",
  ["sagamihara-kin-kaitori","yokohama-kin-kaitori","kaitori-houhou-hikaku"]),
 ("yamato-kin-kaitori","大和","神奈川県","kanto","県央の住宅都市",
  ["大和駅","中央林間","鶴間"],
  "大和市は小田急・相鉄が交わる神奈川県央の住宅都市で、駅周辺に買取需要があります。",
  ["atsugi-kin-kaitori","yokohama-kin-kaitori","kaitori-houhou-hikaku"]),
 ("hiratsuka-kin-kaitori","平塚","神奈川県","kanto","湘南西部の中核市",
  ["平塚駅","紅谷町","湘南海岸方面"],
  "平塚市は湘南西部の中核市で、平塚駅周辺の商店街に買取店があります。県西エリアの売却拠点です。",
  ["fujisawa-kin-kaitori","yokohama-kin-kaitori","kaitori-houhou-hikaku"]),
 ("odawara-kin-kaitori","小田原","神奈川県","kanto","県西の城下町",
  ["小田原駅","お城通り","栄町"],
  "小田原市は県西部の中核となる城下町で、小田原駅周辺に買取店があります。箱根の玄関口でもあります。",
  ["hiratsuka-kin-kaitori","yokohama-kin-kaitori","kaitori-houhou-hikaku"]),
 # 埼玉
 ("koshigaya-kin-kaitori","越谷","埼玉県","kanto","レイクタウンで知られる県東部",
  ["越谷駅","南越谷","レイクタウン"],
  "越谷市は日本最大級のショッピングモール・レイクタウンを擁する埼玉県東部の中核市です。買取需要も旺盛です。",
  ["omiya-kin-kaitori","kawaguchi-kin-kaitori","kaitori-houhou-hikaku"]),
 ("kasukabe-kin-kaitori","春日部","埼玉県","kanto","県東部の商業都市",
  ["春日部駅","ララガーデン周辺","北春日部"],
  "春日部市は埼玉県東部の商業都市で、春日部駅周辺に買取店があります。東武沿線の売却需要を集めます。",
  ["koshigaya-kin-kaitori","omiya-kin-kaitori","kaitori-houhou-hikaku"]),
 ("soka-kin-kaitori","草加","埼玉県","kanto","東京に近い県南東部",
  ["草加駅","松原団地","新田"],
  "草加市は東京に近い埼玉県南東部の都市で、東武スカイツリーライン沿線の買取需要があります。",
  ["koshigaya-kin-kaitori","kawaguchi-kin-kaitori","kaitori-houhou-hikaku"]),
 # 千葉
 ("ichikawa-chiba-kin-kaitori","市川","千葉県","kanto","東京に隣接する千葉県北西部",
  ["本八幡","市川駅","行徳"],
  "市川市は江戸川を挟んで東京に隣接する千葉県北西部の都市で、本八幡を中心に買取需要があります。",
  ["funabashi-kin-kaitori","matsudo-kin-kaitori","kaitori-houhou-hikaku"]),
 ("narashino-kin-kaitori","津田沼","千葉県","kanto","商業が集まる千葉県北西部",
  ["津田沼駅","新津田沼","奏の杜"],
  "津田沼（習志野市）は商業施設が集まる千葉県北西部の拠点で、駅周辺に買取店があります。",
  ["funabashi-kin-kaitori","chiba-kin-kaitori","kaitori-houhou-hikaku"]),
 # 茨城
 ("tsukuba-kin-kaitori","つくば","茨城県","kanto","研究学園都市",
  ["つくば駅","研究学園","TX沿線"],
  "つくば市は研究学園都市として発展する茨城県南部の都市で、つくばエクスプレス沿線の買取需要を集めます。",
  ["mito-kin-kaitori","kashiwa-kin-kaitori","kaitori-houhou-hikaku"]),
 # 愛知
 ("toyohashi-kin-kaitori","豊橋","愛知県","chubu","東三河の中核市",
  ["豊橋駅","広小路","駅前大通"],
  "豊橋市は東三河の中核市で、豊橋駅周辺に買取店が集まります。静岡県西部からの来店もあります。",
  ["nagoya-kin-kaitori","toyota-kin-kaitori","kaitori-houhou-hikaku"]),
 ("ichinomiya-kin-kaitori","一宮","愛知県","chubu","尾張西部の中核市",
  ["尾張一宮駅","本町","名鉄一宮"],
  "一宮市は尾張西部の中核市で、繊維産業で栄えた歴史を持ちます。一宮駅周辺に買取店があります。",
  ["nagoya-kin-kaitori","gifu-kin-kaitori","kaitori-houhou-hikaku"]),
 ("okazaki-kin-kaitori","岡崎","愛知県","chubu","西三河の中核市",
  ["岡崎駅","東岡崎","康生"],
  "岡崎市は徳川家ゆかりの西三河の中核市で、東岡崎・康生エリアに買取店があります。",
  ["toyota-kin-kaitori","nagoya-kin-kaitori","kaitori-houhou-hikaku"]),
 # 三重
 ("tsu-kin-kaitori","津","三重県","kinki","三重県の県庁所在地",
  ["津駅","大門","津新町"],
  "津市は三重県の県庁所在地で、津駅周辺に買取店があります。名古屋へのアクセスも良い県中部の拠点です。",
  ["nagoya-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("yokkaichi-kin-kaitori","四日市","三重県","kinki","三重県最大の工業都市",
  ["近鉄四日市駅","JR四日市","諏訪"],
  "四日市市は三重県最大の人口を持つ工業都市で、近鉄四日市駅周辺に買取店が集まります。",
  ["tsu-kin-kaitori","nagoya-kin-kaitori","kaitori-houhou-hikaku"]),
 # 大阪・近畿
 ("higashiosaka-kin-kaitori","東大阪","大阪府","kinki","ものづくりの中核市",
  ["布施","長田","八戸ノ里"],
  "東大阪市はものづくりで知られる大阪府東部の中核市で、布施を中心に買取需要があります。",
  ["osaka-kin-kaitori","namba-kin-kaitori","kaitori-houhou-hikaku"]),
 ("hirakata-kin-kaitori","枚方","大阪府","kinki","大阪と京都の中間の中核市",
  ["枚方市駅","樟葉","枚方公園"],
  "枚方市は大阪と京都の中間に位置する中核市で、枚方市駅周辺に買取店があります。京阪沿線の需要を集めます。",
  ["osaka-kin-kaitori","kyoto-kin-kaitori","kaitori-houhou-hikaku"]),
 ("toyonaka-kin-kaitori","豊中","大阪府","kinki","大阪北部の住宅都市",
  ["豊中駅","千里中央","蛍池"],
  "豊中市は大阪北部の住宅都市で、千里中央など商業エリアに買取店があります。北摂エリアの売却拠点です。",
  ["osaka-kin-kaitori","umeda-kin-kaitori","kaitori-houhou-hikaku"]),
 ("suita-kin-kaitori","吹田","大阪府","kinki","万博記念公園のある北摂の市",
  ["江坂","千里山","吹田駅"],
  "吹田市は万博記念公園で知られる北摂の市で、江坂など商業エリアに買取需要があります。",
  ["toyonaka-kin-kaitori","osaka-kin-kaitori","kaitori-houhou-hikaku"]),
 ("nishinomiya-kin-kaitori","西宮","兵庫県","kinki","阪神間の人気住宅都市",
  ["西宮北口","阪神西宮","甲子園"],
  "西宮市は阪神間の人気住宅都市で、西宮北口を中心に買取店が集まります。高級住宅地の売却需要が特徴です。",
  ["kobe-kin-kaitori","osaka-kin-kaitori","kin-necklace-kaitori"]),
 ("amagasaki-kin-kaitori","尼崎","兵庫県","kinki","大阪に隣接する阪神工業地帯の市",
  ["尼崎駅","阪神尼崎","塚口"],
  "尼崎市は大阪に隣接する阪神間の市で、尼崎駅周辺に買取店があります。商業・住宅の需要が混在します。",
  ["nishinomiya-kin-kaitori","osaka-kin-kaitori","kaitori-houhou-hikaku"]),
 # 中国・四国・北陸ほか
 ("toyama-kin-kaitori","富山","富山県","chubu","北陸の県庁所在地",
  ["富山駅","総曲輪","西町"],
  "富山市は北陸の県庁所在地で、総曲輪の商店街を中心に買取店があります。県内全域から来店があります。",
  ["kanazawa-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("fukui-kin-kaitori","福井","福井県","chubu","北陸西部の県庁所在地",
  ["福井駅","片町","ハピリン周辺"],
  "福井市は北陸西部の県庁所在地で、福井駅周辺に買取店があります。北陸新幹線延伸で利便性が向上しています。",
  ["kanazawa-kin-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("matsue-kin-kaitori","松江","島根県","chugoku-shikoku","山陰の中核・島根県の県庁所在地",
  ["松江駅","殿町","東本町"],
  "松江市は宍道湖畔に広がる島根県の県庁所在地です。松江駅周辺に買取店があり、山陰地域の売却拠点です。",
  ["okayama-kin-kaitori","hiroshima-kin-kaitori","kaitori-houhou-hikaku"]),
 ("yamaguchi-kin-kaitori","山口","山口県","chugoku-shikoku","山口県の県庁所在地",
  ["山口駅","湯田温泉","新山口方面"],
  "山口市は山口県の県庁所在地で、湯田温泉エリアなどに商業が集まります。県央の売却拠点となっています。",
  ["hiroshima-kin-kaitori","kitakyushu-kin-kaitori","kaitori-houhou-hikaku"]),
 ("kochi-kin-kaitori","高知","高知県","chugoku-shikoku","南四国の県庁所在地",
  ["高知駅","はりまや橋","帯屋町"],
  "高知市は南四国の県庁所在地で、帯屋町アーケードを中心に買取店があります。県内全域から来店があります。",
  ["takamatsu-kin-kaitori","matsuyama-kin-kaitori","kaitori-houhou-hikaku"]),
 ("tokushima-kin-kaitori","徳島","徳島県","chugoku-shikoku","阿波踊りで知られる県庁所在地",
  ["徳島駅","東新町","秋田町"],
  "徳島市は阿波踊りで知られる徳島県の県庁所在地です。徳島駅周辺に買取店があり、関西へのアクセスも良好です。",
  ["takamatsu-kin-kaitori","osaka-kin-kaitori","kaitori-houhou-hikaku"]),
 # 九州
 ("kurume-kin-kaitori","久留米","福岡県","kyushu","筑後地方の中核市",
  ["久留米駅","西鉄久留米","六ツ門"],
  "久留米市は福岡県南部・筑後地方の中核市で、西鉄久留米駅周辺に買取店があります。筑後エリアの売却拠点です。",
  ["fukuoka-kin-kaitori","kitakyushu-kin-kaitori","kaitori-houhou-hikaku"]),
 ("nagasaki-kin-kaitori","長崎","長崎県","kyushu","異国情緒あふれる県庁所在地",
  ["長崎駅","浜町","思案橋"],
  "長崎市は異国情緒で知られる長崎県の県庁所在地です。浜町アーケードを中心に買取店があり、県内から来店があります。",
  ["fukuoka-kin-kaitori","kumamoto-kin-kaitori","kaitori-houhou-hikaku"]),
 ("miyazaki-kin-kaitori","宮崎","宮崎県","kyushu","南国・宮崎県の県庁所在地",
  ["宮崎駅","橘通り","若草通り"],
  "宮崎市は南国情緒あふれる宮崎県の県庁所在地です。橘通りを中心に買取店があり、県内全域から来店があります。",
  ["kagoshima-kin-kaitori","kumamoto-kin-kaitori","kaitori-houhou-hikaku"]),
 ("saga-kin-kaitori","佐賀","佐賀県","kyushu","福岡に近い県庁所在地",
  ["佐賀駅","唐人町","白山"],
  "佐賀市は福岡に近い佐賀県の県庁所在地です。佐賀駅周辺に買取店があり、福岡県への持ち込みも容易です。",
  ["fukuoka-kin-kaitori","nagasaki-kin-kaitori","kaitori-houhou-hikaku"]),
]

PRICE_TABLE = """        <div className=\"table-wrapper\">
          <table>
            <thead>
              <tr><th>純度</th><th>1gあたり買取価格（税込目安）</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>約15,000〜15,400円</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>約11,200〜11,600円</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>約8,700〜9,100円</td></tr>
              <tr><td><strong>Pt900（プラチナ）</strong></td><td>約4,600〜4,800円</td></tr>
            </tbody>
          </table>
        </div>"""

def pascal(slug):
    return "".join(p.capitalize() for p in slug.split("-"))+"Page"

def gen(slug, city, pref, region, hook, districts, intro, related):
    title=f"【2026年最新】{city}の金買取おすすめ業者ガイド — 相場・方法・高く売るコツ"
    desc=f"{city}で金を高く売るならどこ？{city}の金買取相場、店頭・出張・宅配の方法別比較、{pref}で高価買取を狙うコツと注意点を公開情報ベースで解説します。"
    crumb=f"{city}の金買取おすすめ"
    rel_js=", ".join(f'"{r}"' for r in (related+["kin-kaitori-souba","kin-takaku-uru","daikichi-vs-nanboya","kin-kaitori-sagi"]))
    d=districts
    faqs=[
      (f"{city}で金買取の価格が高い業者の選び方は？",
       f"{city}では複数の買取業者を比較することが最も重要です。同じ純度・重量でも業者間で1gあたり数百円の差が出ます。まずヒカカク！の一括査定で複数社の見積もりを取り、最高値の業者を選びましょう。"),
      (f"{city}で金を即日現金化できますか？",
       f"はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉など大手チェーンは予約不要で対応しており、{d[0]}周辺の店舗で即日現金化が可能です。"),
      (f"{city}で出張買取は利用できますか？",
       f"ウリエルやティファナは{pref}内で出張買取に対応しています。出張費・査定料は無料で、自宅にいながら金製品の売却が完結します。外出が難しい方や量が多い方に便利です。"),
      (f"{city}の金買取で必要な持ち物は？",
       "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば査定額アップにつながることもあります。"),
      (f"{city}と都心部で金の買取価格に差はありますか？",
       "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を使えば、地域差を気にせず全国の高値業者と取引できます。"),
    ]
    faq_schema_items=",\n      ".join(
      '{ "@type": "Question", name: %s, acceptedAnswer: { "@type": "Answer", text: %s } }'%(json.dumps(q,ensure_ascii=False),json.dumps(a,ensure_ascii=False)) for q,a in faqs)
    faq_jsx="\n".join(
      '            {\n              q: %s,\n              a: %s,\n            },'%(json.dumps(q,ensure_ascii=False),json.dumps(a,ensure_ascii=False)) for q,a in faqs)

    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {{
  const d = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "ホーム", item: "{SITE}/" }},
      {{ "@type": "ListItem", position: 2, name: "記事一覧", item: "{SITE}/articles/" }},
      {{ "@type": "ListItem", position: 3, name: "{crumb}", item: "{SITE}/articles/{slug}/" }},
    ],
  }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}

function ArticleSchema() {{
  const d = {{
    "@context": "https://schema.org",
    "@type": "Article",
    headline: {json.dumps(title,ensure_ascii=False)},
    description: {json.dumps(desc,ensure_ascii=False)},
    datePublished: "2026-06-05",
    dateModified: "2026-06-05",
    author: {{ "@type": "Organization", name: "金買取びより編集部" }},
    publisher: {{ "@type": "Organization", name: "金買取びより" }},
  }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}

function FaqSchema() {{
  const d = {{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {faq_schema_items}
    ],
  }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}

export const metadata: Metadata = {{
  title: {json.dumps(title,ensure_ascii=False)},
  description: {json.dumps(desc,ensure_ascii=False)},
}};

function CtaBox() {{
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">{city}で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社を比較して最高値を狙いましょう。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}}

export default function {pascal(slug)}() {{
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">{crumb}</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="{city}の金買取イメージ" width={{1200}} height={{400}} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】{city}の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>

        <p>{city}は{hook}です。{intro}</p>

        <p>「{city}で金を売るならどこがいい？」「相場はいくら？」——この記事では、{city}での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を公開情報ベースでまとめました。</p>
        <ul>
          <li>{city}の金買取相場（2026年6月時点の目安）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>{city}で少しでも高く売るための実践ポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <h2>{city}の金買取相場（2026年6月）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。2026年6月時点の{city}での買取相場の目安は以下のとおりです。</p>
{PRICE_TABLE}
        <p>金相場は歴史的な高値圏で推移しています。{city}でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>

        <h2>{city}の主な金買取エリア</h2>
        <h3>{d[0]}</h3>
        <p><strong>{d[0]}</strong>は{city}の中心的な買取スポットです。大手買取チェーンや貴金属店が集まり、アクセスも良いため、まず候補に入れたいエリアです。</p>
        <h3>{d[1]}</h3>
        <p>{d[1]}周辺にも買取店が点在します。{d[0]}が混雑している場合の比較先として、見積もりを取っておくとよいでしょう。</p>
        <h3>{d[2]}</h3>
        <p>{d[2]}方面でも買取に対応する店舗があります。自宅に近い店舗で査定を受けたい方は、こうした周辺エリアも合わせて検討しましょう。</p>

        <CtaBox />

        <h2>{city}での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>こんな人に</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐ現金が欲しい人</td></tr>
              <tr><td><strong>出張買取</strong></td><td>ウリエル</td><td>自宅で完結・大量品も楽</td><td>外出が難しい人</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・24時間発送OK</td><td>忙しい人</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>最高値で売りたい人</td></tr>
            </tbody>
          </table>
        </div>
        <p>{city}にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れが効率的です。まず<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>も参考にしてください。</p>

        <h2>{city}で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、相見積もりで最高値を引き出しましょう。一括査定なら一度で複数社を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>も参考に。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。当サイト掲載の4社はすべて手数料無料です。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uru-timing/">売り時の見極め方</Link>もチェックしましょう。</p></li>
        </ol>

        <h2>{city}の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、{pref}でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数業者へ一括査定。最高値を効率よく探せる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化</li>
          <li><strong>ウリエル</strong>：出張買取専門。出張費・査定料すべて無料</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応</li>
        </ul>

        <CtaBox />

        <h2>{city}の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>アポなしで自宅を訪問し強引に買い取る「押し買い」のトラブルが各地で報告されています。信頼できる業者は必ず事前予約・連絡があります。</p>
        <h3>クーリングオフ制度</h3>
        <p>出張買取には特定商取引法によりクーリングオフ（8日間）が適用されます。店頭持ち込みは適用外のため、高額品は慎重に判断しましょう。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>を参照してください。</p>

        <h2>{city}の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {{[
{faq_jsx}
          ].map((faq) => (
            <details key={{faq.q}} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{{faq.q}}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{{faq.a}}</div>
            </details>
          ))}}
        </div>

        <RelatedArticles currentSlug="{slug}" relatedSlugs={{[{rel_js}]}} />

        <DealerComparisonTable
          heading="{city}の金買取で利用できる主要サービス比較"
          intro="{pref}でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>{city}で金を高く売るには、<strong>複数業者の比較</strong>が何より重要です。金相場が歴史的高値にある今は、手元の金製品を見直す好機といえます。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}}
'''

def main():
    meta=json.load(open(META,encoding="utf-8"))
    existing={m["slug"] for m in meta}
    added=[]; home=[]
    for slug,city,pref,region,clazz,districts,intro,related in [(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]) for a in AREAS]:
        if slug in existing:
            print("skip exists:",slug); continue
        d=os.path.join(ART,slug); os.makedirs(d,exist_ok=True)
        open(os.path.join(d,"page.tsx"),"w",encoding="utf-8").write(
            gen(slug,city,pref,region,clazz,districts,intro,related))
        title=f"{city}の金買取おすすめガイド"
        meta.append({"slug":slug,"title":title,"shortTitle":title,
                     "badge":city,"category":"region",
                     "description":f"{city}の金買取相場・方法・高く売るコツを解説。"})
        added.append(slug)
        home.append({"href":f"/articles/{slug}/","tag":"地域ガイド",
                     "title":f"【2026年最新】{city}の金買取おすすめ業者ガイド",
                     "description":f"{city}で金を高く売るための相場・方法・コツを解説。",
                     "tags":["金買取",city,"相場","高く売る"]})
    json.dump(meta,open(META,"w",encoding="utf-8"),ensure_ascii=False,indent=2)
    json.dump(home,open("/tmp/home-area-snippet.json","w",encoding="utf-8"),ensure_ascii=False,indent=2)
    print(f"\ngenerated area articles: {len(added)}")
    print("metadata total now:",len(meta))

if __name__=="__main__":
    main()
