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
      { "@type": "ListItem", position: 3, name: "松阪の金買取おすすめ", item: "https://gold-biyori.com/articles/matsusaka-kin-kaitori/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "松阪駅の金買取｜駅から徒歩10分・15分の2店と松阪市内10店（公式確認）・今日の相場【2026年10月】",
    description: "松阪駅から歩ける金買取店は西出口徒歩10分の大阪屋、南口徒歩約15分のエコリングの2店。買取大吉・おたからや等は車で5〜6分の郊外店です。松阪市内10店の住所・営業時間・駅からのアクセスを公式で確認し、今日の金相場とあわせて掲載。",
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
      { "@type": "Question", name: "松阪駅から歩いて行ける金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "各社公式で確認できたのは2店です。質ディスカウント大阪屋 松阪店（湊町265・近鉄/JR松阪駅 西出口より徒歩10分・10:00〜19:00）と、エコリング三重松阪店（長月町88-21・松阪駅南口より徒歩約15分・11:00〜18:30・水曜定休）です（2026年10月17日確認）。" } },
      { "@type": "Question", name: "松阪で金買取の価格が高い業者の選び方は？", acceptedAnswer: { "@type": "Answer", text: "松阪では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。" } },
      { "@type": "Question", name: "松阪で金を即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。松阪駅から歩いて行けるのは大阪屋（西出口徒歩10分）とエコリング（南口徒歩約15分）で、買取大吉・おたからやの市内店は駅から車で5〜6分の郊外店です（各社公式・2026年10月17日確認）。" } },
      { "@type": "Question", name: "松阪で出張買取は利用できますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルは公式の出張対応エリアに三重県を含めています（一部対応できない市町村あり）。ティファナの出張エリアは東京・埼玉・神奈川・千葉の一部地域のため、三重県は対象外です。出張費・査定料は無料で、自宅で金製品の売却が完了するため、外出が難しい方や量が多い方に適しています。" } },
      { "@type": "Question", name: "松阪の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。" } },
      { "@type": "Question", name: "松阪と都心部で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を利用すれば、地域を問わず複数の業者の査定額を比較できます。" } }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "松阪駅の金買取｜駅から徒歩10分・15分の2店と松阪市内10店（公式確認）・今日の相場【2026年10月】",
  description: "松阪駅から歩ける金買取店は西出口徒歩10分の大阪屋、南口徒歩約15分のエコリングの2店。買取大吉・おたからや等は車で5〜6分の郊外店です。松阪市内10店の住所・営業時間・駅からのアクセスを公式で確認し、今日の金相場とあわせて掲載。",
  alternates: { canonical: "https://gold-biyori.com/articles/matsusaka-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">松阪で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社の査定額を比較することをおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function MatsusakaKinKaitoriPage() {
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
          <li><span className="text-foreground">松阪の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="松阪の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">松阪駅の金買取｜駅から徒歩10分・15分の2店と松阪市内10店（公式確認）・今日の相場【2026年10月】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <p>松阪市内の金買取店は、松阪駅から歩ける2店を除くと郊外のショッピングセンター内の店が中心です。この記事では<a href="#stations" className="text-accent hover:underline">松阪駅からの早見表</a>と、公式で確認した市内10店の情報をまとめました。</p>

        <p>「松阪で金を売るならどこがいい？」「相場はいくら？」——この記事では、松阪での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を、公開情報にもとづいてまとめました。</p>
        <ul>
          <li>松阪の金買取相場（{priceDateJa}時点の目安）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>松阪で金を高く売るためのポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <TodayPriceAnswer purity="k18" />

        <h2 id="stations">松阪駅から探す金買取店</h2>

        <p><strong>結論：松阪駅から歩いて行ける金買取店は2店です</strong>（西出口から徒歩10分の大阪屋、南口から徒歩約15分のエコリング）。買取大吉・おたからやの松阪市内の店はいずれも郊外のショッピングセンター内で、公式の案内は「松阪駅から車で5〜6分」などの車でのアクセスです。</p>

        <h3>松阪駅・松ヶ崎駅からの早見表（各社公式の表記・2026年10月17日確認）</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>駅</th><th>店舗（住所）</th><th>駅からのアクセス（公式表記）</th><th>営業時間・定休日</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>松阪駅 西出口</strong>（JR・近鉄）</td><td><a href="https://www.osakaya-matsusaka.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">質ディスカウント 大阪屋 松阪店</a>（湊町265 大阪屋ビル1F）</td><td>西出口より徒歩10分・駐車場あり</td><td>10:00〜19:00／年中無休（年末年始除く）</td></tr>
              <tr><td><strong>松阪駅 南口</strong></td><td><a href="https://www.eco-ring.com/shop/mie/matsusaka/mie-matsusaka" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">エコリング 三重松阪店</a>（長月町88-21）</td><td>南口より徒歩約15分（約1.0km）／「愛宕町」バス停より徒歩約1分</td><td>11:00〜18:30／水曜・年末年始</td></tr>
              <tr><td><strong>松阪駅から車</strong></td><td><a href="https://www.otakaraya-shop.jp/matsusaka/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">おたからや アドバンスモール松阪店</a>（田村町235-1）</td><td>JR・近鉄 松阪駅より車で5分／鈴の音バス「アドバンスモール」より徒歩3分</td><td>10:00〜18:00／月曜</td></tr>
              <tr><td><strong>松阪駅から車</strong></td><td><a href="https://www.kaitori-daikichi.jp/store/tr-matsusaka/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉 スーパーセンタートライアル松阪店</a>（東町59-6）</td><td>JR紀勢本線 松阪駅より車で6分</td><td>10:00〜19:00／年中無休</td></tr>
              <tr><td><strong>松ヶ崎駅</strong>（近鉄山田線）</td><td><a href="https://www.kaitori-daikichi.jp/store/at-matsusakafunae/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉 イオンタウン松阪船江店</a>（船江町1392-27 B棟1F）</td><td>松ヶ崎駅より徒歩9分（松阪駅からの記載なし）</td><td>10:00〜19:00／年中無休</td></tr>
              <tr><td><strong>駅から約2km</strong></td><td><a href="https://wakaba-shop.jp/shop/mie-matsusaka/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取店わかば ベーシック松阪川井町店</a>（川井町473-1）</td><td>JR紀勢本線・名松線／近鉄山田線から約2km。県道59号線沿い「松阪市民文化会館前」交差点（駐車場あり）</td><td>9:30〜18:30（最終受付18:00）／金曜日・年末年始休み</td></tr>
              <tr><td><strong>駅の記載なし</strong></td><td>おたからや 高町店・オークワ松阪下村店・バロー大黒田店、ジュエルカフェ アピタ松阪三雲店</td><td>公式に駅からのアクセスの記載なし（下の店舗一覧に住所を掲載）</td><td>店舗ごとに異なる</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">※徒歩分・車での分数は各社公式の表記をそのまま掲載し、当サイトで計算した数字は載せていません。なんぼや・大黒屋・ゴールドプラザ・キングラム・福ちゃんは三重県に店舗がなく（各社公式の店舗一覧で確認）、バイセルは松阪市は出張買取のみです。</p>

        <h3>松阪駅から売りに行くときの選び方</h3>
        <ul>
          <li><strong>電車で来て歩いて行きたい：</strong>西出口の大阪屋（徒歩10分・質屋で金・プラチナ・ダイヤの買取に対応）、または南口のエコリング（徒歩約15分。水曜定休）</li>
          <li><strong>車で行ける・相見積もりを取りたい：</strong>おたからや アドバンスモール松阪店（車で5分・月曜定休）と買取大吉 トライアル松阪店（車で6分・年中無休）を回ると、2社の査定額を比べられます</li>
          <li><strong>店に行かずに売りたい：</strong>ウリエルは公式の出張エリアに三重県を含みます（一部市町村を除く）。ティファナは三重県が出張エリア外のため宅配買取（全国・送料無料）で利用できます</li>
        </ul>

        <h2>松阪の金買取相場（毎日自動更新）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。最新の松阪での買取目安は以下のとおりです（毎日自動更新）。</p>
        <PurityPriceTable />
        <p>金相場は歴史的な高値圏で推移しています。松阪でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>


        <LocalStores citySlug="matsusaka-kin-kaitori" cityLabel="松阪" pref="三重県" />

        <CtaBox />

        <h2>松阪での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>おすすめの方</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐに現金化したい方</td></tr>
              <tr><td><strong>出張買取</strong></td><td>ウリエル</td><td>自宅で完結・量が多い場合も依頼しやすい</td><td>外出が難しい方</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・送料無料（公式表記）</td><td>店舗へ行く時間がない方</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>複数社の査定額を比較したい方</td></tr>
            </tbody>
          </table>
        </div>
        <p>松阪にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れをおすすめします。あわせて<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>もご参照ください。</p>

        <h2>松阪で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、複数社から見積もりを取ることをおすすめします。一括査定を利用すれば、一度に複数社の査定額を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>もご参照ください。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。買取大吉・ティファナ・ウリエルは査定料・手数料の無料を公式に明記しています。ヒカカク！経由の場合は、手数料・返送料を申し込み先の業者ごとにご確認ください。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uridoki-2026/">売り時の見極め方</Link>もあわせてご確認ください。</p></li>
        </ol>

        <h2>松阪の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、三重県でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数の業者へ一括で査定を依頼でき、査定額を比較できる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化に対応</li>
          <li><strong>ウリエル</strong>：出張買取が中心（店頭買取は川崎店のみ・宅配買取の案内は公式サイトになし）。出張費・査定料すべて無料</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応</li>
        </ul>
        <ServiceCaptureGrid />

        <CtaBox />

        <h2>松阪の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>事前の約束なく自宅を訪問し、強引に買い取る「押し買い」のトラブルが各地で報告されています。訪問を約束していない業者による勧誘は、特定商取引法で禁止されています。</p>
        <h3>クーリング・オフ制度</h3>
        <p>出張買取には、特定商取引法によりクーリング・オフ（8日間）が適用されます。店頭への持ち込みは適用外のため、高額品の売却は慎重にご判断ください。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>をご参照ください。</p>

        <h2>松阪の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "松阪駅から歩いて行ける金買取店はありますか？",
              a: "各社公式で確認できたのは2店です。質ディスカウント大阪屋 松阪店（湊町265・近鉄/JR松阪駅 西出口より徒歩10分・10:00〜19:00）と、エコリング三重松阪店（長月町88-21・松阪駅南口より徒歩約15分・11:00〜18:30・水曜定休）です（2026年10月17日確認）。",
            },
            {
              q: "松阪で金買取の価格が高い業者の選び方は？",
              a: "松阪では複数の買取業者を比較することが重要です。同じ純度・重量でも、業者によって1gあたりの査定額が異なる場合があります。ヒカカク！の一括査定などで複数社から見積もりを取り、査定額を比較したうえで業者を選ぶことをおすすめします。",
            },
            {
              q: "松阪で金を即日現金化できますか？",
              a: "はい、店頭買取であれば査定後その場で現金を受け取れます。松阪駅から歩いて行けるのは大阪屋（西出口徒歩10分）とエコリング（南口徒歩約15分）で、買取大吉・おたからやの市内店は駅から車で5〜6分の郊外店です（各社公式・2026年10月17日確認）。",
            },
            {
              q: "松阪で出張買取は利用できますか？",
              a: "ウリエルは公式の出張対応エリアに三重県を含めています（一部対応できない市町村あり）。ティファナの出張エリアは東京・埼玉・神奈川・千葉の一部地域のため、三重県は対象外です。出張費・査定料は無料で、自宅で金製品の売却が完了するため、外出が難しい方や量が多い方に適しています。",
            },
            {
              q: "松阪の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば、査定額が上がる場合があります。",
            },
            {
              q: "松阪と都心部で金の買取価格に差はありますか？",
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
        <NearbyAreas pref="三重県" areas={[{ slug: "suzuka-kin-kaitori", label: "鈴鹿" }, { slug: "tsu-kin-kaitori", label: "津" }, { slug: "yokkaichi-kin-kaitori", label: "四日市" }, { slug: "nagoya-kin-kaitori", label: "名古屋" }, { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" }, { slug: "toyota-kin-kaitori", label: "豊田" }, { slug: "gifu-kin-kaitori", label: "岐阜" }, { slug: "shizuoka-kin-kaitori", label: "静岡" }]} />
        <RelatedArticles currentSlug="matsusaka-kin-kaitori" relatedSlugs={["tsu-kin-kaitori", "suzuka-kin-kaitori", "kin-kaitori-souba", "kin-kaitori-souba", "kin-takaku-uru", "daikichi-vs-nanboya", "kin-kaitori-sagi"]} />

        <DealerComparisonTable
          heading="松阪の金買取で利用できる主要サービス比較"
          intro="三重県でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>松阪で金を高く売るには、<strong>複数業者の比較</strong>が重要です。金相場は歴史的な高値圏にあるため、お手元の金製品を見直す機会としてご活用ください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格をご確認いただけます。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
