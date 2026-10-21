import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { LocalStores } from "@/components/LocalStores";
import { TodayPriceAnswer } from "@/components/TodayPriceAnswer";
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
      { "@type": "ListItem", position: 3, name: "上田の金買取おすすめ", item: "https://gold-biyori.com/articles/ueda-kin-kaitori/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "上田駅・八木沢駅・中塩田駅の金買取はどこ？別所線沿線から行ける店と上田市の実在7店・今日の相場【2026年10月】",
    description: "上田駅から徒歩5〜10分の3店、別所線 上田原駅から徒歩約7分のわかば、車で行ける店まで上田市の7店を住所・駅からの行き方・営業時間つきで一覧に（2026年10月17日公式確認）。八木沢駅・中塩田駅からの売り方と今日の金相場も。",
    datePublished: "2026-06-05",
    dateModified: "2026-10-17",
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
      { "@type": "Question", name: "上田で金買取の価格が高い業者の選び方は？", acceptedAnswer: { "@type": "Answer", text: "上田では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。" } },
      { "@type": "Question", name: "上田で金を即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。上田駅から徒歩圏のさすがや アリオ上田店（温泉口徒歩5分）、おたからや 上田海野町店（お城口徒歩5分ほど）、買取大吉 上田天神店（お城口徒歩10分）などの店頭なら、査定に納得すればその日のうちに現金化できます。" } },
      { "@type": "Question", name: "八木沢駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "八木沢駅（上田電鉄別所線）・別所温泉駅の周辺には、各社公式で確認できる金買取店はありません（2026年10月17日確認）。別所線で上田原駅まで行けば買取店わかば 上田原店（上田原駅から徒歩約7分・日曜定休）、終点の上田駅まで行けば、さすがや アリオ上田店（温泉口から徒歩5分）・おたからや 上田海野町店（お城口から徒歩5分ほど）・買取大吉 上田天神店（お城口より徒歩10分）があります。" } },
      { "@type": "Question", name: "中塩田駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "中塩田駅の徒歩圏には金・貴金属の買取店を確認できませんでした（2026年10月17日確認）。別所線の上田原駅で降りれば買取店わかば 上田原店（徒歩約7分）、終点の上田駅に出れば、さすがや アリオ上田店（温泉口から徒歩5分）、おたからや 上田海野町店（お城口から徒歩5分ほど）、買取大吉 上田天神店（お城口より徒歩10分）に歩いて行けます。外出が難しい場合は、買取大吉の出張買取（上田天神店の公式ページに「日本全国OK」と記載）や宅配買取が使えます。" } },
      { "@type": "Question", name: "上田で出張買取は利用できますか？", acceptedAnswer: { "@type": "Answer", text: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月17日確認）。外出が難しい方や量が多い方は、宅配買取（ティファナは全国対応・送料無料）をご検討ください。" } },
      { "@type": "Question", name: "上田の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。" } },
      { "@type": "Question", name: "上田と都心部で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を利用すれば、地域を問わず複数の業者の査定額を比較できます。" } }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "上田駅・八木沢駅・中塩田駅の金買取はどこ？別所線沿線から行ける店と上田市の実在7店・今日の相場【2026年10月】",
  description: "上田駅から徒歩5〜10分の3店、別所線 上田原駅から徒歩約7分のわかば、車で行ける店まで上田市の7店を住所・駅からの行き方・営業時間つきで一覧に（2026年10月17日公式確認）。八木沢駅・中塩田駅からの売り方と今日の金相場も。",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/ueda-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">上田で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社の査定額を比較することをおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function UedaKinKaitoriPage() {
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
          <li><span className="text-foreground">上田の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="上田の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">上田駅・八木沢駅・中塩田駅の金買取はどこ？別所線沿線から行ける店と上田市の実在7店・今日の相場【2026年10月】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <TodayPriceAnswer purity="k18" />

        <p>上田駅から徒歩5〜10分の範囲に金・貴金属を買い取る店が3店、別所線の上田原駅から徒歩約7分に1店あり、車なら国道18号線沿いなどにも店があります。<strong>八木沢駅・中塩田駅の徒歩圏には、公式で確認できる金買取店はありません</strong>（<a href="#stations" className="text-accent-dark underline">駅別の店舗一覧へ</a>）。</p>

        <p>「上田で金を売るならどこがいい？」「相場はいくら？」——この記事では、上田での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を、公開情報にもとづいてまとめました。</p>
        <ul>
          <li>上田の金買取相場（{priceDateJa}時点の目安）</li>
          <li>上田駅・八木沢駅・中塩田駅から行ける実在店舗（住所・行き方・営業時間）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>上田で金を高く売るためのポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <h2>上田の金買取相場（毎日自動更新）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。最新の上田での買取目安は以下のとおりです（毎日自動更新）。</p>
        <PurityPriceTable />
        <p>金相場は歴史的な高値圏で推移しています。上田でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>

        <h2 id="stations">上田駅・八木沢駅・中塩田駅から探す金買取店</h2>
        <p>上田市内で金・貴金属の買取に対応している実在店舗を、駅からの行き方と営業時間を含めてまとめました。住所・アクセス・営業時間は各社の公式店舗ページの表記どおりです（<strong>2026年10月17日確認</strong>）。来店前に公式ページで最新の営業日をご確認ください。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>店舗（住所）</th><th>駅からのアクセス（公式表記）</th><th>営業時間・定休日</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>買取専門店さすがや アリオ上田店</strong>（上田市天神3-5-1 アリオ上田2F）</td><td>JR上田駅 温泉口から徒歩5分</td><td>10:00〜20:00／アリオ上田に準ずる</td></tr>
              <tr><td><strong>おたからや 上田海野町店</strong>（上田市中央2-5-10 丸陽ビル2階）</td><td>しなの鉄道 上田駅お城口から徒歩5分ほど（海野町商店街・高市神社向かい）</td><td>平日10:00〜18:00・土日祝10:00〜17:00／水曜定休（臨時休業あり）</td></tr>
              <tr><td><strong>買取大吉 上田天神店</strong>（上田市天神3丁目4-25 デンセンショールーム）</td><td>JR上田駅お城口より徒歩10分（店長挨拶欄は「徒歩15分」）</td><td>10:00〜19:00／毎週日曜定休（年末年始等を除く）・専用駐車場無料</td></tr>
              <tr><td><strong>ザ・ゴールド 上田店</strong>（上田市中央東2-11）</td><td>最寄駅の記載なし。国道18号線産業道路沿い（下川原柳バス停から徒歩10分）</td><td>10:00〜18:00／年中無休（一部夏季・年末年始を除く）</td></tr>
              <tr><td><strong>キングラム 上田インター店</strong>（上田市住吉277-17）</td><td>最寄駅の記載なし。車で上田駅から約10分（上田菅平IC方面・長島の交差点）</td><td>平日10:00〜18:00・土日祝10:00〜17:00／年中無休（年末年始等を除く）</td></tr>
              <tr><td><strong>買取店わかば 上田原店</strong>（上田市上田原1175-10 バードビル1F）</td><td>上田電鉄別所線 上田原駅から徒歩約7分（創造館入口交差点の角・無料駐車場あり）</td><td>10:00〜18:00／日曜・年末年始</td></tr>
              <tr><td><strong>ジュエルカフェ イオンスタイル上田店</strong>（上田市常田2-12-18 イオンスタイル上田1階）</td><td>上田駅から徒歩14分・車で5分（公式の施設紹介）</td><td>10:00〜19:00／定休日の記載なし</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典：<a href="https://sasugaya.jp/shop/ueda/" target="_blank" rel="noopener noreferrer nofollow">さすがや アリオ上田店</a>／<a href="https://www.otakaraya-shop.jp/ueda/" target="_blank" rel="noopener noreferrer nofollow">おたからや 上田海野町店</a>（<a href="https://www.otakaraya.jp/shop/nagano/" target="_blank" rel="noopener noreferrer nofollow">おたからや公式の長野県店舗一覧</a>でも上田市は同店1件）／<a href="https://www.kaitori-daikichi.jp/store/uedatenjin/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 上田天神店</a>／<a href="https://www.the-gold.jp/item/metal/shop/45.html" target="_blank" rel="noopener noreferrer nofollow">ザ・ゴールド 上田店</a>／<a href="https://kingram.jp/shop/uedainter/" target="_blank" rel="noopener noreferrer nofollow">キングラム 上田インター店</a>／<a href="https://wakaba-shop.jp/shop/nagano-uedahara/" target="_blank" rel="noopener noreferrer nofollow">わかば 上田原店</a>／<a href="https://jewel-cafe.jp/shop/chubu/nagano/aeon-ueda/" target="_blank" rel="noopener noreferrer nofollow">ジュエルカフェ イオンスタイル上田店</a>（いずれも2026年10月17日確認）。わかばの公式には「赤坂下駅から徒歩約5分」の記載もありますが、別所線に赤坂下駅は無い（最寄りは赤坂上駅）ため、上田原駅からの表記のみ掲載しています。</p>

        <h3>上田駅から歩いて行くなら</h3>
        <p>駅から歩ける距離にあるのは、<strong>温泉口側のさすがや アリオ上田店（徒歩5分・20時まで）</strong>と、<strong>お城口側のおたからや 上田海野町店（徒歩5分ほど）・買取大吉 上田天神店（徒歩10分）</strong>です。さすがやと大吉はどちらも天神3丁目で近いので、1日で2〜3店の見積もりを比べられます。おたからやは水曜定休、大吉は日曜定休、おたからや・キングラムは土日祝が17時までなので、週末や夕方に行く場合は営業時間にご注意ください。</p>

        <h3 id="yagisawa">八木沢駅（上田電鉄別所線 BE14）から売りに行く場合</h3>
        <p>八木沢駅は別所線の終点・別所温泉駅のひとつ手前の無人駅です（隣は舞田駅と別所温泉駅。<a href="https://www.uedadentetsu.com/timetable/besshosen_yagisawa.html" target="_blank" rel="noopener noreferrer nofollow">上田電鉄 八木沢駅</a>）。<strong>八木沢駅・別所温泉駅の周辺に、各社公式で確認できる金買取店はありません</strong>（買取大吉・おたからや・さすがや・キングラム・ザ・ゴールド・なんぼや・大黒屋・エコリングの公式店舗一覧で確認／2026年10月17日）。</p>
        <ul>
          <li><strong>途中の上田原駅（BE5）で降りる</strong>——わかば 上田原店が上田原駅から徒歩約7分（公式表記）。日曜定休です。</li>
          <li><strong>終点の上田駅（BE1）まで乗る</strong>——八木沢駅から13駅。上田駅からはさすがや（温泉口徒歩5分）・おたからや（お城口徒歩5分ほど）・買取大吉（お城口徒歩10分）に歩いて行けるので、2〜3店の見積もりを1日で比べられます。</li>
          <li><strong>出張・宅配</strong>——買取大吉は出張買取の対象に長野県を含みます（離島や一部地域は対象外の場合あり）。ウリエル・ティファナは長野県が出張エリア外のため、ティファナは宅配買取（全国・送料無料）で利用できます。</li>
        </ul>

        <h3>中塩田駅（上田電鉄別所線）の近くで売りたい場合</h3>
        <p>中塩田駅の徒歩圏には、金・貴金属の買取店を確認できませんでした（各社の公式店舗ページと、おたからや公式の長野県店舗一覧で確認／2026年10月17日）。塩田地区からは、次のどれかが現実的です。</p>
        <ul>
          <li><strong>別所線で上田原駅・上田駅へ出る</strong>——上田方面へ5駅の上田原駅で降りればわかば 上田原店（徒歩約7分）、終点の上田駅からは上の早見表の3店（さすがや・おたからや・大吉）に歩いて行けます。</li>
          <li><strong>車で行く</strong>——買取大吉 上田天神店は専用駐車場が無料（来店客のみ）。ザ・ゴールド 上田店は国道18号線沿い、キングラム 上田インター店は上田菅平IC方面です。</li>
          <li><strong>出張買取を頼む</strong>——買取大吉 上田天神店の公式店舗ページには出張買取「日本全国OK」と記載があります。なお、ウリエル・ティファナは長野県が公式の出張エリアに入っていません。</li>
          <li><strong>宅配買取を使う</strong>——ティファナの宅配買取は全国対応・送料無料（公式表記）です。家から出ずに査定額を確かめられます。</li>
        </ul>
        <p>迷ったら、上田駅周辺の2〜3店で見積もりを取ることで、効率よく比較できます。</p>

        <LocalStores citySlug="ueda-kin-kaitori" cityLabel="上田" pref="長野県" />

        <CtaBox />

        <h2>上田での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>おすすめの方</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐに現金化したい方</td></tr>
              <tr><td><strong>出張買取</strong></td><td>買取大吉（上田天神店の公式ページに「日本全国OK」）</td><td>自宅で完結・量が多い場合も依頼しやすい</td><td>外出が難しい人（ウリエル・ティファナは長野県が出張エリア外）</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・送料無料（公式表記）</td><td>店舗へ行く時間がない方</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>複数社の査定額を比較したい方</td></tr>
            </tbody>
          </table>
        </div>
        <p>上田にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れをおすすめします。あわせて<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>もご参照ください。</p>

        <h2>上田で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、複数社から見積もりを取ることをおすすめします。一括査定を利用すれば、一度に複数社の査定額を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>もご参照ください。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。買取大吉・ティファナ・ウリエルは査定料・手数料の無料を公式に明記しています。ヒカカク！経由の場合は、手数料・返送料を申し込み先の業者ごとにご確認ください。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uridoki-2026/">売り時の見極め方</Link>もあわせてご確認ください。</p></li>
        </ol>

        <h2>上田の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、長野県でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数の業者へ一括で査定を依頼でき、査定額を比較できる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化に対応</li>
          <li><strong>ウリエル</strong>：出張買取が中心。長野県は公式の出張エリア外で、店頭買取は川崎店のみ・宅配買取の案内は公式サイトにないため、上田からは利用しにくい業者です</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応。店舗は東京・埼玉、出張は東京・埼玉・神奈川・千葉の一部（公式の出張可能エリア）のため、上田からは宅配買取（全国対応・送料無料）で利用</li>
        </ul>
        <ServiceCaptureGrid />

        <CtaBox />

        <h2>上田の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>事前の約束なく自宅を訪問し、強引に買い取る「押し買い」のトラブルが各地で報告されています。訪問を約束していない業者による勧誘は、特定商取引法で禁止されています。</p>
        <h3>クーリング・オフ制度</h3>
        <p>出張買取には、特定商取引法によりクーリング・オフ（8日間）が適用されます。店頭への持ち込みは適用外のため、高額品の売却は慎重にご判断ください。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>をご参照ください。</p>

        <h2>上田の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "上田で金買取の価格が高い業者の選び方は？",
              a: "上田では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。",
            },
            {
              q: "上田で金を即日現金化できますか？",
              a: "はい、店頭買取であれば査定後その場で現金を受け取れます。上田駅から徒歩圏のさすがや アリオ上田店（温泉口徒歩5分）、おたからや 上田海野町店（お城口徒歩5分ほど）、買取大吉 上田天神店（お城口徒歩10分）などの店頭なら、査定に納得すればその日のうちに現金化できます。",
            },
            {
              q: "八木沢駅の近くに金買取店はありますか？",
              a: "八木沢駅（上田電鉄別所線）・別所温泉駅の周辺には、各社公式で確認できる金買取店はありません（2026年10月17日確認）。別所線で上田原駅まで行けば買取店わかば 上田原店（上田原駅から徒歩約7分・日曜定休）、終点の上田駅まで行けば、さすがや アリオ上田店（温泉口から徒歩5分）・おたからや 上田海野町店（お城口から徒歩5分ほど）・買取大吉 上田天神店（お城口より徒歩10分）があります。",
            },
            {
              q: "中塩田駅の近くに金買取店はありますか？",
              a: "中塩田駅の徒歩圏には金・貴金属の買取店を確認できませんでした（2026年10月17日確認）。別所線の上田原駅で降りれば買取店わかば 上田原店（徒歩約7分）、終点の上田駅に出れば、さすがや アリオ上田店（温泉口から徒歩5分）、おたからや 上田海野町店（お城口から徒歩5分ほど）、買取大吉 上田天神店（お城口より徒歩10分）に歩いて行けます。外出が難しい場合は、買取大吉の出張買取（上田天神店の公式ページに「日本全国OK」と記載）や宅配買取が使えます。",
            },
            {
              q: "上田で出張買取は利用できますか？",
              a: "長野県は、ウリエル・ティファナとも公式の出張買取対応エリアに含まれていません（2026年10月17日確認）。外出が難しい方や量が多い方は、宅配買取（ティファナは全国対応・送料無料）をご検討ください。",
            },
            {
              q: "上田の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。",
            },
            {
              q: "上田と都心部で金の買取価格に差はありますか？",
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
        <NearbyAreas pref="長野県" areas={[{ slug: "nagano-kin-kaitori", label: "長野" }, { slug: "matsumoto-kin-kaitori", label: "松本" }, { slug: "nagoya-kin-kaitori", label: "名古屋" }, { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" }, { slug: "toyota-kin-kaitori", label: "豊田" }, { slug: "gifu-kin-kaitori", label: "岐阜" }, { slug: "shizuoka-kin-kaitori", label: "静岡" }, { slug: "hamamatsu-kin-kaitori", label: "浜松" }]} />
        <RelatedArticles currentSlug="ueda-kin-kaitori" relatedSlugs={["nagano-kin-kaitori", "matsumoto-kin-kaitori", "kin-souzoku-baikyaku", "kin-kaitori-souba", "kin-takaku-uru", "daikichi-vs-nanboya", "kin-kaitori-sagi"]} />

        <DealerComparisonTable
          heading="上田の金買取で利用できる主要サービス比較"
          intro="長野県でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>上田で金を高く売るには、<strong>複数業者の比較</strong>が重要です。金相場は歴史的な高値圏にあるため、お手元の金製品を見直す機会としてご活用ください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格をご確認いただけます。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
