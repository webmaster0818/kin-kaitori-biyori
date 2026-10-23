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
      { "@type": "ListItem", position: 3, name: "松本の金買取おすすめ", item: "https://gold-biyori.com/articles/matsumoto-kin-kaitori/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "松本の金買取｜松本駅お城口から徒歩7分の店と市内8店を公式情報で比較【2026年10月】",
    description: "松本駅お城口から徒歩7分のおたからや 伊勢町通り店、21時まで開くジュエルカフェ イオンモール松本店、駐車場のある買取大吉3店など松本市内8店の住所・営業時間・定休日・駐車場を公式店舗ページで比較（2026年10月23日確認）。今日の金相場も。",
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
      { "@type": "Question", name: "松本で金買取の価格が高い業者の選び方は？", acceptedAnswer: { "@type": "Answer", text: "松本では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。" } },
      { "@type": "Question", name: "松本駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "JR松本駅 お城口から徒歩7分（伊勢町通り沿い・伊勢町交差点からすぐ）に、おたからや 伊勢町通り店（松本市中央1-20-30 井垣ビル1F-B・10:00〜19:00・不定休）があります。中央4丁目のジュエルカフェ イオンモール松本店（イオンモール松本1F）は10:00〜21:00・定休日なしです（駅からの徒歩分は店舗ページに記載なし）。JR村井駅 北口から徒歩6分にはおたからや イオンタウン松本村井店があります（各社公式・2026年10月23日確認）。" } },
      { "@type": "Question", name: "松本で金を即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "店頭買取であれば、査定に納得すればその場で現金を受け取れます。松本駅からはお城口から徒歩7分のおたからや 伊勢町通り店（10:00〜19:00・不定休）が歩いて行ける店です。買取大吉は松本元町店・松本店・ネオパーク松本店の3店があり、公式で「予約不要」と案内しています（2026年10月23日確認）。" } },
      { "@type": "Question", name: "松本で出張買取は利用できますか？", acceptedAnswer: { "@type": "Answer", text: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月11日確認）。買取大吉は松本市内の店舗の公式ページで出張買取を「出張費無料・日本全国OK」と案内しています（2026年10月23日確認）。宅配買取ならティファナが全国対応・送料無料（公式表記）です。" } },
      { "@type": "Question", name: "松本の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。" } },
      { "@type": "Question", name: "松本と都心部で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を利用すれば、地域を問わず複数の業者の査定額を比較できます。" } }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "松本の金買取｜松本駅お城口から徒歩7分の店と市内8店を公式情報で比較【2026年10月】",
  description: "松本駅お城口から徒歩7分のおたからや 伊勢町通り店、21時まで開くジュエルカフェ イオンモール松本店、駐車場のある買取大吉3店など松本市内8店の住所・営業時間・定休日・駐車場を公式店舗ページで比較（2026年10月23日確認）。今日の金相場も。",
  alternates: { canonical: "https://gold-biyori.com/articles/matsumoto-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">松本で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社の査定額を比較することをおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function MatsumotoKinKaitoriPage() {
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
          <li><span className="text-foreground">松本の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="松本の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">松本の金買取｜松本駅お城口から徒歩7分の店と市内8店を公式情報で比較【2026年10月】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <p>松本駅から歩いて行ける金買取店は、公式表記で<strong>お城口から徒歩7分のおたからや 伊勢町通り店</strong>です。ほかに中央4丁目のジュエルカフェ イオンモール松本店、元町・高宮北・出川の買取大吉3店、村井町南のおたからや・さすがやなど、駐車場のある店が市内にあります（<a href="#stations" className="text-accent-dark underline">駅から探す</a>／<a href="#compare" className="text-accent-dark underline">8店の比較</a>）。</p>

        <p>「松本で金を売るならどこがいい？」「相場はいくら？」——この記事では、松本での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を、公開情報にもとづいてまとめました。</p>
        <ul>
          <li>松本駅・村井駅から歩いて行ける2店と、市内8店の比較（2026年10月23日に公式で確認）</li>
          <li>松本の金買取相場（{priceDateJa}時点の目安）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>松本で金を高く売るためのポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <h2>松本の金買取相場（毎日自動更新）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。最新の松本での買取目安は以下のとおりです（毎日自動更新）。</p>
        <PurityPriceTable />
        <p>金相場は歴史的な高値圏で推移しています。松本でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>

        <h2 id="stations">松本駅・村井駅から歩いて行ける金買取店</h2>
        <p>松本市内で金・貴金属の買取に対応している実在店舗のうち、<strong>駅からの徒歩分を公式の店舗ページに載せている店</strong>は、松本駅お城口のおたからや 伊勢町通り店と、JR村井駅北口のおたからや イオンタウン松本村井店の2店です。住所・アクセス・営業時間は各社の公式店舗ページの表記どおりです（<strong>2026年10月23日確認</strong>）。来店前に公式ページで最新の営業日をご確認ください。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗（住所）</th><th>駅からのアクセス（公式表記）</th><th>営業時間・定休日</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>おたからや 伊勢町通り店</strong>（松本市中央1-20-30 井垣ビル1F-B）</td><td>JR松本駅 お城口から徒歩7分（伊勢町通り沿い、伊勢町交差点からすぐ）</td><td>10:00〜19:00／不定休</td></tr>
              <tr><td><strong>おたからや イオンタウン松本村井店</strong>（松本市村井町南2丁目21-45 イオンタウン松本村井2階）</td><td>JR村井駅 北口より徒歩6分（八十二銀行向い・国道19号村井交差点すぐ）</td><td>10:00〜19:00／年中無休（年末年始は除く）</td></tr>
            </tbody>
          </table>
        </div>

        <h3>松本駅から歩いて行くなら</h3>
        <p>松本駅お城口から徒歩7分のおたからや 伊勢町通り店は、車の場合は近くのコインパーキングを使うよう案内しています。買取品目は貴金属のほか、ブランドバッグ・小物、ブランド腕時計、切手・テレカ、古銭・古紙幣、カメラ、美術品、香木です。松本市・塩尻市・安曇野市へは出張費無料で出張買取にも対応しています（公式サイトの表記）。</p>
        <p>松本駅周辺ではほかに、<strong>ジュエルカフェ イオンモール松本店</strong>（松本市中央4-9-51 イオンモール松本1F・10:00〜21:00・定休日なし）があります。駅からの徒歩分は店舗ページに記載がないため載せていません。買取品目は金プラチナ・ダイヤモンド・宝石・ブランドバッグ・ブランド腕時計・金券・切手などで、21時まで開いているのは下の表の8店のうちこの店だけです。</p>

        <h2 id="compare">松本市内の金買取店8店を比較：場所・営業時間・定休日・駐車場</h2>
        <p>駅から歩ける2店に加えて、車で行ける店を並べました。いずれも公式の店舗ページの表記です（2026年10月23日確認）。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗（住所）</th><th>場所の目印（公式表記）</th><th>営業時間・定休日</th><th>駐車場</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>おたからや 伊勢町通り店</strong>（中央1-20-30）</td><td>JR松本駅 お城口から徒歩7分</td><td>10:00〜19:00／不定休</td><td>近くのコインパーキング</td></tr>
              <tr><td><strong>ジュエルカフェ イオンモール松本店</strong>（中央4-9-51 イオンモール松本1F）</td><td>イオンモール松本の1階</td><td>10:00〜21:00／定休日なし</td><td>イオンモール松本の近隣駐車場の案内あり</td></tr>
              <tr><td><strong>買取大吉 松本元町店</strong>（元町3-3-8）</td><td>信州大学医学部附属病院より徒歩6分</td><td>10:00〜19:00／水曜定休</td><td>専用駐車場</td></tr>
              <tr><td><strong>買取大吉 松本店</strong>（高宮北1-7 塩ノ崎ビル1階）</td><td>国道19号線沿い、松本日産から北に100m・ニトリ松本高宮店の斜向かい</td><td>10:00〜19:00／年中無休（年末年始除く）</td><td>店舗前</td></tr>
              <tr><td><strong>買取大吉 ネオパーク松本店</strong>（出川2丁目3番1号）</td><td>ネオパーク松本の入口からすぐ</td><td>10:00〜19:00／年中無休（臨時休業を除く）</td><td>ネオパーク松本の駐車場</td></tr>
              <tr><td><strong>おたからや イオンタウン松本村井店</strong>（村井町南2丁目21-45 イオンタウン松本村井2階）</td><td>JR村井駅 北口より徒歩6分</td><td>10:00〜19:00／年中無休（年末年始は除く）</td><td>イオンタウン松本村井の駐車場</td></tr>
              <tr><td><strong>買取専門店さすがや イオンタウン松本村井店</strong>（村井町南2-21-60）</td><td>国道19号 ガスト松本村井店の南側隣</td><td>10:00〜19:00／年末年始を除く年中無休</td><td>店舗ページに記載なし</td></tr>
              <tr><td><strong>おたからや 筑摩店</strong>（筑摩4丁目3-48 横内ビル1階西側）</td><td>松本駅から車で5分（松本信用金庫つかま支店の向かい）</td><td>10:00〜19:00／不定休</td><td>店舗併設駐車場</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典：<a href="https://isemachidori.originality-otakaraya.net/info.php" target="_blank" rel="noopener noreferrer nofollow">おたからや 伊勢町通り店</a>／<a href="https://jewel-cafe.jp/shop/chubu/nagano/aeonmall-matsumoto/" target="_blank" rel="noopener noreferrer nofollow">ジュエルカフェ イオンモール松本店</a>／<a href="https://www.kaitori-daikichi.jp/store/matsumoto-motomachi/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 松本元町店</a>／<a href="https://www.kaitori-daikichi.jp/store/matsumoto/" target="_blank" rel="noopener noreferrer nofollow">松本店</a>／<a href="https://www.kaitori-daikichi.jp/store/np-matsumoto/" target="_blank" rel="noopener noreferrer nofollow">ネオパーク松本店</a>／<a href="https://www.otakaraya.jp/shop/aeon-matsumotomurai/" target="_blank" rel="noopener noreferrer nofollow">おたからや イオンタウン松本村井店</a>／<a href="https://sasugaya.jp/shop/matsumotomurai/" target="_blank" rel="noopener noreferrer nofollow">さすがや イオンタウン松本村井店</a>／<a href="http://tsukama.otakaraya.net/info/index.html" target="_blank" rel="noopener noreferrer nofollow">おたからや 筑摩店</a>（<a href="https://www.otakaraya.jp/shop/nagano/matsumoto_shi/" target="_blank" rel="noopener noreferrer nofollow">おたからや公式の松本市店舗一覧</a>は3店）。いずれも2026年10月23日に確認。ザ・ゴールドの松本市内の店舗は、公式サイトが10月23日に応答しなかったため確認できず、掲載していません。</p>
        <p>買取大吉の3店は、いずれも公式の店舗ページで出張買取を「出張費無料・日本全国OK」と案内しています。松本元町店は完全個室で、LINE査定・メール査定にも対応しています。村井では、おたからやとさすがやがどちらも村井町南2丁目にあり、1日で2店の見積もりを比べられます。</p>

        <h3>東信エリア（上田市）</h3>
        <p>上田市の店舗は、<Link href="/articles/ueda-kin-kaitori/">上田駅・八木沢駅・中塩田駅の金買取</Link>の記事にまとめています。上田駅から徒歩5〜10分の3店を含む市内7店を、各社の公式店舗ページで確認した住所・駅からの行き方・買取品目・駐車場・定休日で比較しています（2026年10月22日確認）。</p>

        <CtaBox />

        <h2>松本での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>おすすめの方</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐに現金化したい方</td></tr>
              <tr><td><strong>出張買取</strong></td><td>買取大吉（松本市内3店の公式ページに「出張費無料・日本全国OK」）</td><td>自宅で完結・量が多い場合も依頼しやすい</td><td>外出が難しい方（ウリエル・ティファナは長野県が出張エリア外）</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・送料無料（公式表記）</td><td>店舗へ行く時間がない方</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>複数社の査定額を比較したい方</td></tr>
            </tbody>
          </table>
        </div>
        <p>松本にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れをおすすめします。あわせて<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>もご参照ください。</p>

        <h2>松本で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、複数社から見積もりを取ることをおすすめします。一括査定を利用すれば、一度に複数社の査定額を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>もご参照ください。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。買取大吉・ティファナ・ウリエルは査定料・手数料の無料を公式に明記しています。ヒカカク！経由の場合は、手数料・返送料を申し込み先の業者ごとにご確認ください。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uridoki-2026/">売り時の見極め方</Link>もあわせてご確認ください。</p></li>
        </ol>

        <h2>松本の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、長野県でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数の業者へ一括で査定を依頼でき、査定額を比較できる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化に対応</li>
          <li><strong>ウリエル</strong>：出張買取が中心。長野県は公式の出張エリア外で、店頭買取は川崎店のみ・宅配買取の案内は公式サイトにないため、松本市からは利用しにくい業者です</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応。店舗は東京・埼玉、出張は東京・埼玉・神奈川・千葉の一部（公式の出張可能エリア）のため、松本市からは宅配買取（全国対応・送料無料）で利用</li>
        </ul>
        <ServiceCaptureGrid />

        <CtaBox />

        <h2>松本の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>事前の約束なく自宅を訪問し、強引に買い取る「押し買い」のトラブルが各地で報告されています。訪問を約束していない業者による勧誘は、特定商取引法で禁止されています。</p>
        <h3>クーリング・オフ制度</h3>
        <p>出張買取には、特定商取引法によりクーリング・オフ（8日間）が適用されます。店頭への持ち込みは適用外のため、高額品の売却は慎重にご判断ください。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>をご参照ください。</p>

        <h2>松本の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "松本で金買取の価格が高い業者の選び方は？",
              a: "松本では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。",
            },
            {
              q: "松本駅の近くに金買取店はありますか？",
              a: "JR松本駅 お城口から徒歩7分（伊勢町通り沿い・伊勢町交差点からすぐ）に、おたからや 伊勢町通り店（松本市中央1-20-30 井垣ビル1F-B・10:00〜19:00・不定休）があります。中央4丁目のジュエルカフェ イオンモール松本店（イオンモール松本1F）は10:00〜21:00・定休日なしです（駅からの徒歩分は店舗ページに記載なし）。JR村井駅 北口から徒歩6分にはおたからや イオンタウン松本村井店があります（各社公式・2026年10月23日確認）。",
            },
            {
              q: "松本で金を即日現金化できますか？",
              a: "店頭買取であれば、査定に納得すればその場で現金を受け取れます。松本駅からはお城口から徒歩7分のおたからや 伊勢町通り店（10:00〜19:00・不定休）が歩いて行ける店です。買取大吉は松本元町店・松本店・ネオパーク松本店の3店があり、公式で「予約不要」と案内しています（2026年10月23日確認）。",
            },
            {
              q: "松本で出張買取は利用できますか？",
              a: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月11日確認）。買取大吉は松本市内の店舗の公式ページで出張買取を「出張費無料・日本全国OK」と案内しています（2026年10月23日確認）。宅配買取ならティファナが全国対応・送料無料（公式表記）です。",
            },
            {
              q: "松本の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。",
            },
            {
              q: "松本と都心部で金の買取価格に差はありますか？",
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
        <NearbyAreas pref="長野県" areas={[{ slug: "nagano-kin-kaitori", label: "長野" }, { slug: "ueda-kin-kaitori", label: "上田" }, { slug: "nagoya-kin-kaitori", label: "名古屋" }, { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" }, { slug: "toyota-kin-kaitori", label: "豊田" }, { slug: "gifu-kin-kaitori", label: "岐阜" }, { slug: "shizuoka-kin-kaitori", label: "静岡" }, { slug: "hamamatsu-kin-kaitori", label: "浜松" }]} />
        <RelatedArticles currentSlug="matsumoto-kin-kaitori" relatedSlugs={["nagano-kin-kaitori", "ueda-kin-kaitori", "kin-kaitori-souba", "kaitori-houhou-hikaku", "kin-takaku-uru", "daikichi-vs-nanboya", "kin-kaitori-sagi"]} />

        <DealerComparisonTable
          heading="松本の金買取で利用できる主要サービス比較"
          intro="長野県でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>松本で金を高く売るには、<strong>複数業者の比較</strong>が重要です。金相場は歴史的な高値圏にあるため、お手元の金製品を見直す機会としてご活用ください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格をご確認いただけます。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
