import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

function BreadcrumbSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "長野の金買取おすすめ", item: "https://gold-biyori.com/articles/nagano-kin-kaitori/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "長野駅の金買取｜善光寺口から徒歩1〜2分の3店と長野市内12店を公式情報で比較【2026年10月】",
    description: "長野駅の善光寺口から徒歩0〜2分のなんぼや・おたからや・さすがや、善光寺下駅のおたからや、車で行ける買取大吉など長野市内12店の住所・営業時間・定休日・駐車場を公式店舗ページで比較（2026年10月23日確認）。今日の金相場も。",
    datePublished: "2026-06-05",
    dateModified: "2026-10-23",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "長野で金買取の価格が高い業者の選び方は？", acceptedAnswer: { "@type": "Answer", text: "長野では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。" } },
      { "@type": "Question", name: "長野駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "あります。JR長野駅の善光寺口側に、なんぼや ながの東急百貨店（本館5F・善光寺口より徒歩1分程度・10:00〜19:00）、おたからや 駅前店（イツワビル3F・善光寺口0分・10:00〜18:00・水曜定休）、買取専門店さすがや 長野駅前店（ドン・キホーテ長野駅前店1F・徒歩2分・10:00〜19:00）の3店があります。長野電鉄の善光寺下駅から徒歩2分には、おたからや 善光寺下駅店（10:00〜18:00・不定休・専用駐車場あり）があります（各社公式・2026年10月23日確認）。" } },
      { "@type": "Question", name: "長野で金を即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "店頭買取であれば、査定に納得すればその場で現金を受け取れます。長野駅の善光寺口側には、なんぼや ながの東急百貨店（徒歩1分程度・19時まで）、おたからや 駅前店（0分・18時まで・水曜定休）、さすがや 長野駅前店（徒歩2分・19時まで）があります（公式表記・2026年10月23日確認）。" } },
      { "@type": "Question", name: "長野で出張買取は利用できますか？", acceptedAnswer: { "@type": "Answer", text: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月11日確認）。買取大吉は長野市内の店舗の公式ページで出張買取を「出張費無料・日本全国OK」と案内しています（2026年10月23日確認）。宅配買取ならティファナが全国対応・送料無料（公式表記）です。" } },
      { "@type": "Question", name: "長野の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。" } },
      { "@type": "Question", name: "長野と都心部で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を利用すれば、地域を問わず複数の業者の査定額を比較できます。" } }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "長野駅の金買取｜善光寺口から徒歩1〜2分の3店と長野市内12店を公式情報で比較【2026年10月】",
  description: "長野駅の善光寺口から徒歩0〜2分のなんぼや・おたからや・さすがや、善光寺下駅のおたからや、車で行ける買取大吉など長野市内12店の住所・営業時間・定休日・駐車場を公式店舗ページで比較（2026年10月23日確認）。今日の金相場も。",
  alternates: { canonical: "https://gold-biyori.com/articles/nagano-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">長野で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社の査定額を比較することをおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function NaganoKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/region-koshin.webp)", ["--subhero-m" as string]: "url(/images/subhero/region-koshin-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">長野の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="長野の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">長野駅の金買取｜善光寺口から徒歩1〜2分の3店と長野市内12店を公式情報で比較【2026年10月】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <p>長野駅の善光寺口側には、公式表記で駅から徒歩0〜2分の金買取店が3店（なんぼや・おたからや・さすがや）あります。善光寺下駅にもおたからやがあり、郊外には駐車場のある買取大吉・キングラム・ジュエルカフェなどの店舗があります（<a href="#stations" className="text-accent-dark underline">駅から探す</a>／<a href="#car" className="text-accent-dark underline">車で行く</a>）。</p>

        <p>「長野で金を売るならどこがいい？」「相場はいくら？」——この記事では、長野での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を、公開情報にもとづいてまとめました。</p>
        <ul>
          <li>長野駅・善光寺下駅から歩いて行ける4店と、車で行ける8店（2026年10月23日に公式で確認）</li>
          <li>長野の金買取相場（{priceDateJa}時点の目安）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>長野で金を高く売るためのポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <h2>長野の金買取相場（毎日自動更新）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。最新の長野での買取目安は以下のとおりです（毎日自動更新）。</p>
        <PurityPriceTable />
        <p>金相場は歴史的な高値圏で推移しています。長野でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>

        <h2 id="stations">長野駅・善光寺下駅から歩いて行ける金買取店</h2>
        <p>長野市内で金・貴金属の買取に対応している実在店舗のうち、<strong>駅からの徒歩分を公式の店舗ページに載せている4店</strong>をまとめました。住所・アクセス・営業時間は各社の公式店舗ページの表記どおりです（<strong>2026年10月23日確認</strong>）。来店前に公式ページで最新の営業日をご確認ください。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗（住所）</th><th>駅からのアクセス（公式表記）</th><th>営業時間・定休日</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>なんぼや ながの東急百貨店</strong>（長野市南千歳1-1-1 ながの東急百貨店 本館5F）</td><td>JR長野駅 善光寺口より徒歩1分程度／しなの鉄道北しなの線・長野電鉄 長野駅 改札口より徒歩1分程度</td><td>10:00〜19:00／定休日なし（施設に準じる）</td></tr>
              <tr><td><strong>おたからや 駅前店</strong>（長野市南千歳1-22-13 イツワビル3F）</td><td>JR長野駅 善光寺口0分</td><td>10:00〜18:00／水曜定休</td></tr>
              <tr><td><strong>買取専門店さすがや 長野駅前店</strong>（長野市南長野末広町1355-5 ウェストプラザ長野ビル1F・ドン・キホーテ長野駅前店1F）</td><td>長野駅 徒歩2分</td><td>10:00〜19:00／年末年始を除く年中無休</td></tr>
              <tr><td><strong>おたからや 善光寺下駅店</strong>（長野市大字三輪1292 上原ビル1F）</td><td>長野電鉄長野線 善光寺下駅 徒歩2分</td><td>10:00〜18:00／不定休</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典：<a href="https://nanboya.com/gold-kaitori/shop/nagano-tokyu-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや ながの東急百貨店</a>／<a href="http://ekimae.otakaraya.net/info/index.html" target="_blank" rel="noopener noreferrer nofollow">おたからや 駅前店</a>／<a href="https://sasugaya.jp/shop/naganoekimae/" target="_blank" rel="noopener noreferrer nofollow">さすがや 長野駅前店</a>／<a href="http://zenkoji.otakaraya.net/info/" target="_blank" rel="noopener noreferrer nofollow">おたからや 善光寺下駅店</a>（<a href="https://www.otakaraya.jp/shop/nagano/nagano_shi/" target="_blank" rel="noopener noreferrer nofollow">おたからや公式の長野市店舗一覧</a>は7店）。いずれも2026年10月23日に確認。</p>

        <h3>長野駅の善光寺口側に3店</h3>
        <p>3店とも善光寺口側にあり、公式表記はなんぼやが徒歩1分程度、おたからや 駅前店が0分、さすがやが徒歩2分です。<strong>19時まで開いているのはなんぼやとさすがや</strong>、おたからや 駅前店は18時までで水曜定休です。なんぼやは百貨店の5階、さすがやはドン・キホーテ長野駅前店の1階にあります。</p>
        <h3>善光寺下駅（長野電鉄長野線）</h3>
        <p>善光寺下駅から徒歩2分のおたからや 善光寺下駅店は、専用駐車場ありと店舗ページに記載されています。長野駅まで電車で出れば、上の3店とあわせて見積もりを比べられます。</p>

        <h2 id="compare">長野駅・善光寺下駅の4店を比較：買取品目・買取方法・駐車場・定休日</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗</th><th>公式の買取品目</th><th>買取方法</th><th>駐車場</th><th>定休日</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>なんぼや ながの東急百貨店</strong></td><td>金・貴金属・プラチナ（金・貴金属の店舗ページ）</td><td>店頭（公式サイトに宅配・出張・オンライン買取の案内あり）</td><td>近隣駐車場（ながの東急百貨店 第一駐車場などの案内あり）</td><td>なし（施設に準じる）</td></tr>
              <tr><td><strong>おたからや 駅前店</strong></td><td>金／宝石・ダイヤ／ブランド／ブランド時計／切手／金貨・銀貨／古銭など</td><td>店頭（おたからやは出張買取も案内）</td><td>近隣駐車場（善光寺口パーキング第1の案内あり）</td><td>水曜</td></tr>
              <tr><td><strong>さすがや 長野駅前店</strong></td><td>金・プラチナ／喜平ネックレス・ブレスレット／ダイヤ・宝石／腕時計／ブランド品など</td><td>店舗買取・出張買取</td><td>店舗ページに記載なし（ドン・キホーテ長野駅前店内）</td><td>年末年始を除く年中無休</td></tr>
              <tr><td><strong>おたからや 善光寺下駅店</strong></td><td>金／宝石・ダイヤ／ブランド／ブランド時計／切手／金貨・銀貨／古銭など</td><td>店頭（おたからやは出張買取も案内）</td><td>専用駐車場あり</td><td>不定休</td></tr>
            </tbody>
          </table>
        </div>

        <h2 id="car">車で行ける長野市内の金買取店</h2>
        <p>駅からの徒歩分の記載はないものの、公式の店舗ページに駐車場の記載がある店です（2026年10月23日確認）。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗（住所）</th><th>場所の目印（公式表記）</th><th>営業時間・定休日</th><th>駐車場</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>買取大吉 長野吉田店</strong>（長野市吉田2丁目24-1）</td><td>イオンタウン長野三輪より徒歩4分</td><td>10:00〜19:00／年中無休（臨時休業を除く）</td><td>店舗前の専用駐車場</td></tr>
              <tr><td><strong>買取大吉 長野稲田3丁目店</strong>（長野市稲田3-22-22）</td><td>JR北長野駅から車で約5分（徒歩20分）</td><td>10:00〜18:30／火曜定休</td><td>店舗前に専用駐車場</td></tr>
              <tr><td><strong>買取大吉 ドン・キホーテ川中島店</strong>（長野市川中島町御厨981）</td><td>ドン・キホーテ川中島の1階、店内入口からすぐ</td><td>10:00〜19:00／年中無休</td><td>ドン・キホーテ川中島店の駐車場</td></tr>
              <tr><td><strong>ジュエルカフェ イオンタウン長野三輪店</strong>（長野市三輪9丁目43-24 1F）</td><td>イオンタウン長野三輪の1階</td><td>10:00〜20:00／定休日なし</td><td>駐車場あり</td></tr>
              <tr><td><strong>キングラム 稲里下氷鉋店</strong>（長野市下氷鉋1275-1）</td><td>国道117号線沿い、ファミリーマート下氷鉋店の道路を挟んで向かい側</td><td>10:00〜19:00／年中無休（年末年始・特別休業を除く）</td><td>無料駐車場</td></tr>
              <tr><td><strong>さすがや MEGAドン・キホーテ長野店</strong>（長野市高田1758 MEGAドン・キホーテ長野店1F）</td><td>国道18号線「上高田北」交差点目の前</td><td>10:00〜19:00／MEGAドン・キホーテ長野店に準ずる</td><td>店舗ページに記載なし（MEGAドン・キホーテ長野店内）</td></tr>
              <tr><td><strong>さすがや 青木島ショッピングパーク店</strong>（長野市青木島4-4-5 青木島ショッピングパーク3F）</td><td>県道77号線 青木島交差点南</td><td>10:00〜19:00／年末年始</td><td>店舗ページに記載なし（青木島ショッピングパーク内）</td></tr>
              <tr><td><strong>買取店わかば 長野ショッピングタウンあおぞら店</strong>（長野市東和田930 ショッピングタウンあおぞら専門店街1F）</td><td>国道406号線沿い 東和田西交差点近く</td><td>10:00〜18:30（最終受付18:00）／不定休・年末年始</td><td>広い駐車場あり</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典：<a href="https://www.kaitori-daikichi.jp/store/nagano-yoshida/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 長野吉田店</a>／<a href="https://www.kaitori-daikichi.jp/store/nagano-inada3/" target="_blank" rel="noopener noreferrer nofollow">長野稲田3丁目店</a>／<a href="https://www.kaitori-daikichi.jp/store/dq-kawanakajima/" target="_blank" rel="noopener noreferrer nofollow">ドン・キホーテ川中島店</a>／<a href="https://jewel-cafe.jp/shop/chubu/nagano/aeontown-nagano/" target="_blank" rel="noopener noreferrer nofollow">ジュエルカフェ イオンタウン長野三輪店</a>／<a href="https://kingram.jp/shop/inazatoshimohigano/" target="_blank" rel="noopener noreferrer nofollow">キングラム 稲里下氷鉋店</a>／<a href="https://sasugaya.jp/shop/nagano/" target="_blank" rel="noopener noreferrer nofollow">さすがや MEGAドン・キホーテ長野店</a>／<a href="https://sasugaya.jp/shop/aokijima/" target="_blank" rel="noopener noreferrer nofollow">さすがや 青木島ショッピングパーク店</a>／<a href="https://wakaba-shop.jp/shop/nagano-life/" target="_blank" rel="noopener noreferrer nofollow">わかば 長野ショッピングタウンあおぞら店</a>（いずれも2026年10月23日確認）。おたからやは上の2店のほか、長野市内に東郵便局前店（東和田782-4・10:00〜18:30・火曜定休）、徳間店、小島田店、安茂里店（JR信越本線 安茂里駅2番出口から徒歩2分・火曜定休）、檀田店があります（おたからや公式の長野市店舗一覧の表記）。</p>
        <p>買取大吉の3店は、いずれも公式の店舗ページで出張買取を「出張費無料・日本全国OK」と案内しています。ジュエルカフェ・キングラムの買取品目は、ジュエルカフェが金プラチナ・ダイヤモンド・宝石・ブランドバッグ・金券・切手・骨董品など、キングラムが金・プラチナ・ブランド品・時計・ダイヤ・宝石・お酒など（公式の長野県店舗一覧の表記）です。</p>

        <h3>東信エリア（上田市）</h3>
        <p>上田市の店舗は、<Link href="/articles/ueda-kin-kaitori/">上田駅・八木沢駅・中塩田駅の金買取</Link>の記事にまとめています。上田駅から徒歩5〜10分の3店を含む市内7店を、各社の公式店舗ページで確認した住所・駅からの行き方・買取品目・駐車場・定休日で比較しています（2026年10月22日確認）。</p>

        <CtaBox />

        <h2>長野での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>おすすめの方</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐに現金化したい方</td></tr>
              <tr><td><strong>出張買取</strong></td><td>買取大吉（長野市内3店の公式ページに「出張費無料・日本全国OK」）</td><td>自宅で完結・量が多い場合も依頼しやすい</td><td>外出が難しい方（ウリエル・ティファナは長野県が出張エリア外）</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・送料無料（公式表記）</td><td>店舗へ行く時間がない方</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>複数社の査定額を比較したい方</td></tr>
            </tbody>
          </table>
        </div>
        <p>長野にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れをおすすめします。あわせて<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>もご参照ください。</p>

        <h2>長野で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、複数社から見積もりを取ることをおすすめします。一括査定を利用すれば、一度に複数社の査定額を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>もご参照ください。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。買取大吉・ティファナ・ウリエルは査定料・手数料の無料を公式に明記しています。ヒカカク！経由の場合は、手数料・返送料を申し込み先の業者ごとにご確認ください。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uridoki-2026/">売り時の見極め方</Link>もあわせてご確認ください。</p></li>
        </ol>

        <h2>長野の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、長野県でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数の業者へ一括で査定を依頼でき、査定額を比較できる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化に対応</li>
          <li><strong>ウリエル</strong>：出張買取が中心。長野県は公式の出張エリア外で、店頭買取は川崎店のみ・宅配買取の案内は公式サイトにないため、長野市からは利用しにくい業者です</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応。店舗は東京・埼玉、出張は東京・埼玉・神奈川・千葉の一部（公式の出張可能エリア）のため、長野市からは宅配買取（全国対応・送料無料）で利用</li>
        </ul>
        <ServiceCaptureGrid />

        <CtaBox />

        <h2>長野の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>事前の約束なく自宅を訪問し、強引に買い取る「押し買い」のトラブルが各地で報告されています。訪問を約束していない業者による勧誘は、特定商取引法で禁止されています。</p>
        <h3>クーリング・オフ制度</h3>
        <p>出張買取には、特定商取引法によりクーリング・オフ（8日間）が適用されます。店頭への持ち込みは適用外のため、高額品の売却は慎重にご判断ください。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>をご参照ください。</p>

        <h2>長野の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "長野で金買取の価格が高い業者の選び方は？",
              a: "長野では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。",
            },
            {
              q: "長野駅の近くに金買取店はありますか？",
              a: "あります。JR長野駅の善光寺口側に、なんぼや ながの東急百貨店（本館5F・善光寺口より徒歩1分程度・10:00〜19:00）、おたからや 駅前店（イツワビル3F・善光寺口0分・10:00〜18:00・水曜定休）、買取専門店さすがや 長野駅前店（ドン・キホーテ長野駅前店1F・徒歩2分・10:00〜19:00）の3店があります。長野電鉄の善光寺下駅から徒歩2分には、おたからや 善光寺下駅店（10:00〜18:00・不定休・専用駐車場あり）があります（各社公式・2026年10月23日確認）。",
            },
            {
              q: "長野で金を即日現金化できますか？",
              a: "店頭買取であれば、査定に納得すればその場で現金を受け取れます。長野駅の善光寺口側には、なんぼや ながの東急百貨店（徒歩1分程度・19時まで）、おたからや 駅前店（0分・18時まで・水曜定休）、さすがや 長野駅前店（徒歩2分・19時まで）があります（公式表記・2026年10月23日確認）。",
            },
            {
              q: "長野で出張買取は利用できますか？",
              a: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月11日確認）。買取大吉は長野市内の店舗の公式ページで出張買取を「出張費無料・日本全国OK」と案内しています（2026年10月23日確認）。宅配買取ならティファナが全国対応・送料無料（公式表記）です。",
            },
            {
              q: "長野の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。",
            },
            {
              q: "長野と都心部で金の買取価格に差はありますか？",
              a: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を利用すれば、地域を問わず複数の業者の査定額を比較できます。",
            },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <GoldPriceTrend />
        <ExpertQA category="region" />
        <NearbyAreas pref="長野県" areas={[{ slug: "matsumoto-kin-kaitori", label: "松本" }, { slug: "ueda-kin-kaitori", label: "上田" }, { slug: "nagoya-kin-kaitori", label: "名古屋" }, { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" }, { slug: "toyota-kin-kaitori", label: "豊田" }, { slug: "gifu-kin-kaitori", label: "岐阜" }, { slug: "shizuoka-kin-kaitori", label: "静岡" }, { slug: "hamamatsu-kin-kaitori", label: "浜松" }]} />
        <RelatedArticles currentSlug="nagano-kin-kaitori" relatedSlugs={["ueda-kin-kaitori", "matsumoto-kin-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]} />

        <DealerComparisonTable
          heading="長野の金買取で利用できる主要サービス比較"
          intro="長野県でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>長野で金を高く売るには、<strong>複数業者の比較</strong>が重要です。金相場は歴史的な高値圏にあるため、お手元の金製品を見直す機会としてご活用ください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格をご確認いただけます。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
