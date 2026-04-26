import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【2026年最新】K24（純金）買取相場ガイド — 1gあたりの価格推移と高く売る方法",
  description:
    "K24（純金・純度99.99%）の最新買取相場を1gあたりの価格で掲載。インゴット・金貨・ジュエリーの製品別買取価格、K24とK18・K22の価格差比較、高く売るポイント3つ、おすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K24純金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K24は最も高値で取引される金製品です。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "K24（純金）の買取価格は1gいくらですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026年4月現在、K24（純金）の買取価格は1gあたり約15,000〜15,400円前後です。ただし、国際金価格と為替レートにより毎日変動します。",
        },
      },
      {
        "@type": "Question",
        name: "K24のインゴットと金貨で買取価格は異なりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、異なる場合があります。田中貴金属や徳力本店など有名ブランドのインゴットは信頼性が高く、買取単価が高めになる傾向があります。金貨はプレミアム（付加価値）が付く場合もあり、特に記念金貨や発行数が少ないものは額面以上の価格になることがあります。",
        },
      },
      {
        "@type": "Question",
        name: "K24とK18はどれくらい価格差がありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "K24は純度99.99%、K18は純度75%なので、同じ重量で比較するとK24はK18の約1.33倍の買取価格になります。2026年4月時点では、K24が1gあたり約15,200円、K18が約11,400円です。",
        },
      },
      {
        "@type": "Question",
        name: "K24の純金製品はどこで売るのが一番高いですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "複数の買取業者に見積もりを取って比較するのが最も確実です。ヒカカク！のような一括査定サービスを利用すれば、複数業者の査定価格を一度に比較できます。業者によって1gあたり数百円の差が出るため、重量が大きいインゴットなどでは数万円の差になることもあります。",
        },
      },
      {
        "@type": "Question",
        name: "K24の売却時に税金はかかりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、金の売却益は譲渡所得として課税対象になります。保有期間5年以内の場合は短期譲渡所得、5年超の場合は長期譲渡所得（税額が半分）になります。また、1回の取引で200万円を超える場合は、買取業者が税務署に支払調書を提出します。年間50万円の特別控除があるため、売却益が50万円以内なら実質非課税です。",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】K24（純金）買取相場ガイド — 1gあたりの価格推移と高く売る方法",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
    author: {
      "@type": "Organization",
      name: "金買取びより",
    },
    publisher: {
      "@type": "Organization",
      name: "金買取びより",
    },
    description:
      "K24（純金・純度99.99%）の最新買取相場を1gあたりの価格で掲載。インゴット・金貨・ジュエリーの製品別買取価格、高く売るポイント、おすすめ買取業者4社を徹底解説。",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

export default function K24KaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">K24純金買取ガイド</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】K24（純金）買取相場ガイド — 高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

          <p>K24（純金）は<strong>純度99.99%</strong>の最も価値が高い金です。金投資の対象としてインゴット（金地金）や金貨を保有している方、あるいは純金ジュエリーをお持ちの方にとって、「今の買取相場はいくらなのか」は最大の関心事でしょう。</p>

          <p>2026年現在、金価格は歴史的な高値圏にあります。国際情勢の不安定化、各国中央銀行の金購入拡大、円安の進行——これらの要因が重なり、<strong>K24の買取価格は1gあたり15,000円を突破</strong>しました。2020年と比較すると約2.3倍の上昇です。</p>

          <p>この記事では、K24（純金）の買取に関するすべての情報を網羅的に解説します。</p>

          <ul>
            <li>K24（純金）とは何か — 純度99.99%の意味と特性</li>
            <li>K24の最新買取相場（1gあたりの価格と推移）</li>
            <li>K24製品の種類別買取価格（インゴット・金貨・ジュエリー）</li>
            <li>K24 vs K18 vs K22 — 純度別の価格差比較</li>
            <li>K24を高く売るための実践ポイント</li>
            <li>おすすめ買取業者4社の比較</li>
          </ul>

          <h2>K24（純金）とは — 純度99.99%の金</h2>

          <p>K24は<strong>カラット（Karat）表記で24金</strong>、つまり<strong>純度99.99%以上の金</strong>を意味します。「K」はカラットの略で、金の純度を24分率で表す国際的な表記法です。K24は24/24＝100%に限りなく近い純度の金ということになります。</p>

          <p>厳密には100%の純金を精製することは技術的に困難なため、<strong>99.99%以上の純度をもって「純金」</strong>と定義しています。これを「フォーナイン（Four Nines）」と呼ぶこともあります。</p>

          <h3>K24の特性</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>特性</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>純度</strong></td><td>99.99%（999.9/1000）</td></tr>
                <tr><td><strong>色</strong></td><td>鮮やかな黄金色</td></tr>
                <tr><td><strong>硬度</strong></td><td>非常に柔らかい（モース硬度2.5）</td></tr>
                <tr><td><strong>比重</strong></td><td>19.32 g/cm3</td></tr>
                <tr><td><strong>融点</strong></td><td>1,064度C</td></tr>
                <tr><td><strong>特徴</strong></td><td>変色しない、腐食しない、酸に溶けない（王水を除く）</td></tr>
                <tr><td><strong>用途</strong></td><td>インゴット、金貨、一部のジュエリー、工業用途</td></tr>
              </tbody>
            </table>
          </div>

          <p>K24は他の金属を含まない純粋な金であるため、<strong>変色や腐食がない</strong>のが最大の特徴です。何百年経っても輝きを失わないため、古代から「永遠の価値」を持つ金属として珍重されてきました。</p>

          <p>一方で、K24は非常に柔らかいため、ジュエリーとしては傷がつきやすく変形しやすいという欠点があります。そのため日常使いのジュエリーにはK18やK14が使われることが多く、K24は主に<strong>インゴット（金地金）や金貨などの投資・保存用途</strong>で用いられています。</p>

          <h3>K24の刻印表記</h3>

          <p>K24製品には以下のような刻印が刻まれています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>刻印</th>
                  <th>意味</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K24</strong></td><td>24金（日本式表記）</td><td>最も一般的</td></tr>
                <tr><td><strong>999.9</strong></td><td>純度999.9/1000（国際式表記）</td><td>インゴットに多い</td></tr>
                <tr><td><strong>24K</strong></td><td>24金（海外式表記）</td><td>海外製品</td></tr>
                <tr><td><strong>FINE GOLD</strong></td><td>純金（英語表記）</td><td>インゴットや金貨</td></tr>
                <tr><td><strong>純金</strong></td><td>日本語表記</td><td>日本の造幣局刻印製品</td></tr>
              </tbody>
            </table>
          </div>

          <h2>K24買取相場 — 2026年4月最新価格</h2>

          <p>2026年4月現在のK24（純金）の買取相場は以下のとおりです。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>価格（税込目安）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K24 買取価格（1gあたり）</strong></td><td><strong>約15,000〜15,400円</strong></td></tr>
                <tr><td>K24 小売価格（1gあたり）</td><td>約15,400〜15,800円</td></tr>
                <tr><td>K24 田中貴金属 参考小売価格</td><td>約15,600円</td></tr>
              </tbody>
            </table>
          </div>

          <p>買取価格と小売価格の差額（スプレッド）は業者によって異なりますが、一般的に<strong>1gあたり200〜600円程度</strong>です。スプレッドが小さい業者ほど、売り手にとって有利と言えます。</p>

          <h3>K24 1gあたり買取価格の推移（2020年〜2026年）</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>年</th>
                  <th>K24 1gあたり買取価格（年間平均目安）</th>
                  <th>前年比</th>
                  <th>主な要因</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2020年</td><td>約6,600円</td><td>+25.7%</td><td>コロナショック、金融緩和</td></tr>
                <tr><td>2021年</td><td>約6,400円</td><td>-3.0%</td><td>ワクチン普及でリスク後退</td></tr>
                <tr><td>2022年</td><td>約7,600円</td><td>+18.8%</td><td>ウクライナ侵攻、インフレ加速、円安</td></tr>
                <tr><td>2023年</td><td>約8,800円</td><td>+15.8%</td><td>中央銀行の金購入、地政学リスク</td></tr>
                <tr><td>2024年</td><td>約11,800円</td><td>+34.1%</td><td>中東情勢、米利下げ期待、中国需要</td></tr>
                <tr><td>2025年</td><td>約14,000円</td><td>+18.6%</td><td>ドル安、中銀買い継続、安全資産需要</td></tr>
                <tr><td>2026年（1〜4月）</td><td>約15,200円</td><td>+8.6%</td><td>地政学リスク継続、米関税政策不安</td></tr>
              </tbody>
            </table>
          </div>

          <p>2020年の約6,600円から2026年の約15,200円へと、<strong>6年間で約2.3倍</strong>に上昇しています。特に2024年は前年比+34%という急騰を見せました。</p>

          <p>金価格上昇の主な背景をもう少し詳しく解説します。</p>

          <h3>金価格が高騰し続けている5つの理由</h3>

          <ol>
            <li>
              <strong>世界の中央銀行による金購入の拡大</strong>
              <p>中国人民銀行をはじめ、ポーランド、トルコ、インドなどの中央銀行が外貨準備として金を大量購入しています。2022年以降、年間1,000トン以上の購入が続いており、需給がタイトになっています。</p>
            </li>
            <li>
              <strong>地政学リスクの高まり</strong>
              <p>ウクライナ紛争の長期化、中東情勢の不安定化、米中関係の緊張など、世界的な地政学リスクが金の「安全資産」としての需要を押し上げています。</p>
            </li>
            <li>
              <strong>円安の進行</strong>
              <p>国際金価格はドル建てですが、日本円に換算すると円安が進むほど円建ての金価格は上昇します。2020年の1ドル=約105円から2026年の約155円前後への円安進行が、国内金価格を大きく押し上げています。</p>
            </li>
            <li>
              <strong>インフレヘッジとしての金需要</strong>
              <p>世界的なインフレが続く中、実物資産である金はインフレヘッジ（物価上昇から資産を守る手段）として注目されています。</p>
            </li>
            <li>
              <strong>米国の金融政策・関税政策の不透明感</strong>
              <p>2026年に入ってからも米国の関税政策や金融政策に対する不透明感が続いており、株式市場の変動性が高まる中で金への資金流入が続いています。</p>
            </li>
          </ol>

          <CtaBox />

          <h2>K24製品の種類と買取価格</h2>

          <p>K24（純金）はさまざまな形で流通しています。製品の種類によって買取時の扱いが異なるため、それぞれの特徴と買取価格の目安を解説します。</p>

          <h3>K24インゴット（金地金）</h3>

          <p>インゴット（金地金、ゴールドバー）は、K24純金を長方形の板状に鋳造した製品です。投資用として最も一般的な形態で、重量ごとに規格化されています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>重量</th>
                  <th>買取価格の目安（2026年4月）</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1g</td><td>約15,000〜15,200円</td><td>小規模投資向け</td></tr>
                <tr><td>5g</td><td>約75,000〜76,000円</td><td>ギフト・記念品に人気</td></tr>
                <tr><td>10g</td><td>約150,000〜152,000円</td><td>初心者の投資向け</td></tr>
                <tr><td>20g</td><td>約300,000〜304,000円</td><td></td></tr>
                <tr><td>50g</td><td>約750,000〜760,000円</td><td></td></tr>
                <tr><td>100g</td><td>約1,500,000〜1,540,000円</td><td>本格的な投資向け</td></tr>
                <tr><td>500g</td><td>約7,500,000〜7,700,000円</td><td></td></tr>
                <tr><td>1kg</td><td>約15,000,000〜15,400,000円</td><td>大口取引。200万円超で支払調書発行</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>有名ブランドのインゴットは買取に有利です。</strong>以下のブランドは「グッドデリバリーバー」として国際的に認定されており、信頼性が高く、スムーズに買取してもらえます。</p>

          <ul>
            <li><strong>田中貴金属工業</strong>（日本最大手。TANAKA の刻印）</li>
            <li><strong>徳力本店</strong>（日本の老舗精錬メーカー）</li>
            <li><strong>三菱マテリアル</strong>（三菱グループ）</li>
            <li><strong>住友金属鉱山</strong></li>
            <li><strong>日本マテリアル</strong></li>
            <li><strong>PAMP</strong>（スイスの大手精錬メーカー）</li>
            <li><strong>Valcambi</strong>（スイス）</li>
            <li><strong>Heraeus</strong>（ドイツ）</li>
          </ul>

          <p>ブランド不明のインゴットでも、純度が確認できれば買取は可能ですが、分析に時間がかかる場合や、若干手数料が発生する場合があります。</p>

          <h3>K24金貨</h3>

          <p>金貨は観賞用・収集用・投資用など多目的に流通しています。K24（純金）の金貨は「地金型金貨」と呼ばれ、金の価値にほぼ連動した価格で取引されます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金貨名</th>
                  <th>発行国</th>
                  <th>代表的なサイズ</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>メイプルリーフ金貨</strong></td><td>カナダ</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>ウィーン金貨ハーモニー</strong></td><td>オーストリア</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>カンガルー金貨</strong></td><td>オーストラリア</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>パンダ金貨</strong></td><td>中国</td><td>30g</td><td>約455,000〜465,000円</td></tr>
                <tr><td><strong>天皇陛下御在位記念金貨</strong></td><td>日本</td><td>20g</td><td>額面以上（プレミアム付）</td></tr>
              </tbody>
            </table>
          </div>

          <p>地金型金貨の買取価格は「金の素材価値 + プレミアム（付加価値）」で決まります。メイプルリーフ金貨やウィーン金貨は流通量が多いため、素材価値に近い価格で取引されますが、記念金貨や発行数の少ない金貨にはコレクターズプレミアムが付くことがあります。</p>

          <h3>K24ジュエリー</h3>

          <p>K24のジュエリーは日本では比較的珍しいですが、中国や東南アジアでは非常に人気があります。「24金ジュエリー」「純金ジュエリー」として販売されています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>重量の目安</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>K24ネックレス</td><td>5〜20g</td><td>約75,000〜304,000円</td></tr>
                <tr><td>K24リング</td><td>3〜10g</td><td>約45,000〜152,000円</td></tr>
                <tr><td>K24バングル</td><td>10〜50g</td><td>約152,000〜760,000円</td></tr>
                <tr><td>K24ペンダントトップ</td><td>2〜10g</td><td>約30,000〜152,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>K24ジュエリーは柔らかいため、使用中に変形したり傷がついたりしていることがありますが、<strong>変形や傷があっても買取価格に影響しません</strong>。金としての素材価値で評価されるためです。</p>

          <h2>田中貴金属の小売価格と買取価格の差</h2>

          <p>田中貴金属工業は国内最大手の貴金属ディーラーであり、毎営業日にK24の小売価格と買取価格を公表しています。この「小売価格」と「買取価格」の差を<strong>スプレッド</strong>と呼び、業者の利益に相当します。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>価格（2026年4月目安）</th>
                  <th>説明</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>田中貴金属 小売価格</strong></td><td>約15,600円/g</td><td>金を「買う」場合の価格</td></tr>
                <tr><td><strong>田中貴金属 買取価格</strong></td><td>約15,400円/g</td><td>金を「売る」場合の価格</td></tr>
                <tr><td><strong>スプレッド</strong></td><td>約200円/g</td><td>売買の差額（大手の標準的な水準）</td></tr>
                <tr><td><strong>一般買取業者の買取価格</strong></td><td>約15,000〜15,200円/g</td><td>田中貴金属より200〜400円/g低い傾向</td></tr>
              </tbody>
            </table>
          </div>

          <p>田中貴金属は直接の小売・買取を行っているため、スプレッドが非常に小さい（約200円/g）のが特徴です。一方、一般の買取業者は田中貴金属の買取価格よりさらに200〜400円/g程度低いのが一般的です。</p>

          <p>ただし、<strong>田中貴金属では持ち込み買取のみ対応</strong>で、出張買取や一括査定には対応していません。利便性を考慮すると、一括査定で複数業者を比較し、最も田中貴金属の価格に近い業者を選ぶのが実践的です。</p>

          <h2>純金コイン vs 純金インゴット — どちらが高く売れるか</h2>

          <p>K24の金貨（純金コイン）とインゴット（金地金）は、どちらも純度99.99%の純金ですが、買取時の価格には微妙な違いがあります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>純金コイン（1oz/31.1g）</th>
                  <th>純金インゴット（30g）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>素材価値</strong></td><td>約472,000円</td><td>約456,000円</td></tr>
                <tr><td><strong>プレミアム</strong></td><td>あり（数千〜数万円の上乗せ）</td><td>なし（素材価値のみ）</td></tr>
                <tr><td><strong>流動性</strong></td><td>高い（世界共通の規格品）</td><td>高い（ブランド品なら特に）</td></tr>
                <tr><td><strong>偽物リスク</strong></td><td>低い（造幣局発行）</td><td>やや高い（ノーブランドの場合）</td></tr>
                <tr><td><strong>保管のしやすさ</strong></td><td>コンパクト</td><td>重量が大きいと嵩張る</td></tr>
              </tbody>
            </table>
          </div>

          <p>純金コインは造幣局が発行する公式製品であるため、偽物リスクが低く、<strong>プレミアム（上乗せ価格）</strong>が付くことがあります。特に発行数が限定的な記念金貨や人気のメイプルリーフ金貨は、素材価値以上の価格で取引されます。</p>

          <p>一方、インゴットは重量が大きいほど効率的（1gあたりの単価が高い）ですが、ブランド（田中貴金属、PAMP等）がないノーブランドのインゴットは分析手数料がかかる場合があります。</p>

          <p><strong>結論：</strong>1オンス程度の小口であれば純金コインの方がやや有利。大口（100g以上）であればブランドインゴットの方が取引効率が良いです。</p>

          <h2>K24偽物・メッキ品の見分け方</h2>

          <p>金価格の高騰に伴い、偽物のK24製品も増えています。以下の方法で偽物・メッキ品を見分けることができます。</p>

          <h3>自分でできる簡易チェック</h3>

          <ol>
            <li><strong>磁石テスト：</strong>金は磁石に反応しません。磁石に付く場合は鉄やニッケルが含まれた偽物の可能性大</li>
            <li><strong>重さの確認：</strong>金は非常に重い金属（比重19.3）です。同じサイズの他の金属と比べて明らかに軽い場合は要注意</li>
            <li><strong>刻印の確認：</strong>「K24」「999.9」「FINE GOLD」などの刻印があるか。刻印が不鮮明だったり、「K24GP」「K24GF」と書かれている場合はメッキ・金張り</li>
            <li><strong>変色の確認：</strong>K24（純金）は一切変色しません。黒ずみや緑青（ろくしょう）が出ている場合は純金ではない</li>
          </ol>

          <h3>業者による正確な鑑定方法</h3>

          <ul>
            <li><strong>X線蛍光分析（XRF）：</strong>非破壊で金属組成を正確に測定。最も信頼性が高い</li>
            <li><strong>比重計：</strong>水に沈めて比重を計算。K24の比重19.3と比較</li>
            <li><strong>タッチストーン法：</strong>試金石に金をこすりつけ、酸で反応を見る伝統的な方法</li>
          </ul>

          <p>自分で判断できない場合は、<strong>買取業者に持ち込めば無料で鑑定</strong>してもらえます。大手業者はXRF分析装置を完備しているため、数秒で正確な純度がわかります。</p>

          <h2>K24 vs K18 vs K22 — 純度別の買取価格比較</h2>

          <p>「自分の金製品がどの純度なのか」「純度によってどれくらい価格が変わるのか」は気になるポイントです。以下の表で、主要な金の純度と買取価格を比較します。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>純度表記</th>
                  <th>金の含有率</th>
                  <th>1gあたり買取価格（2026年4月目安）</th>
                  <th>K24との価格比</th>
                  <th>主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K24（24金）</strong></td><td>99.99%</td><td><strong>約15,200円</strong></td><td>100%</td><td>インゴット、金貨</td></tr>
                <tr><td><strong>K22（22金）</strong></td><td>91.7%</td><td>約13,900円</td><td>約91%</td><td>一部の金貨、高級ジュエリー</td></tr>
                <tr><td><strong>K20（20金）</strong></td><td>83.3%</td><td>約12,700円</td><td>約84%</td><td>金歯、一部のジュエリー</td></tr>
                <tr><td><strong>K18（18金）</strong></td><td>75.0%</td><td>約11,400円</td><td>約75%</td><td>ジュエリー全般</td></tr>
                <tr><td><strong>K14（14金）</strong></td><td>58.5%</td><td>約8,900円</td><td>約59%</td><td>海外ジュエリー、時計</td></tr>
                <tr><td><strong>K10（10金）</strong></td><td>41.7%</td><td>約6,300円</td><td>約42%</td><td>カジュアルジュエリー</td></tr>
                <tr><td><strong>K9（9金）</strong></td><td>37.5%</td><td>約5,700円</td><td>約38%</td><td>英国ジュエリー</td></tr>
              </tbody>
            </table>
          </div>

          <p>この表から分かるとおり、<strong>買取価格は純度にほぼ比例</strong>します。K24とK18を比べると、K24の方が約33%高い買取価格になります。例えば10gの製品なら、K24は約152,000円、K18は約114,000円で、<strong>約38,000円の差</strong>があります。</p>

          <blockquote>
            <p><strong>ポイント：</strong>K22は日本ではあまり馴染みがありませんが、イギリスのソブリン金貨や南アフリカのクルーガーランド金貨はK22（純度91.7%）です。純金ではありませんが、K24に近い高い純度を持っています。</p>
          </blockquote>

          <CtaBox />

          <h2>K24を高く売るための3つのポイント</h2>

          <ol>
            <li>
              <strong>複数業者に見積もりを取る（相見積もり）</strong>
              <p>K24の買取価格は業者によって1gあたり100〜500円の差が出ます。たとえば100gのインゴットを売却する場合、1gあたり300円の差があれば<strong>30,000円の差額</strong>になります。1kgのインゴットなら<strong>30万円以上の差</strong>です。</p>
              <p>一括査定サービス（ヒカカク！など）を利用すれば、複数の業者に一度に見積もりを取れるので効率的です。</p>
            </li>
            <li>
              <strong>付属品・証明書を揃える</strong>
              <p>インゴットの場合、<strong>品質保証書（アッセイカード）</strong>が付属しているかどうかで買取のスムーズさが変わります。保証書があればX線分析が不要になるため、即座に査定が完了します。</p>
              <p>金貨の場合も、専用ケース・発行証明書があると、コレクターズバリュー（収集価値）が評価される場合があります。</p>
            </li>
            <li>
              <strong>売却タイミングを見極める</strong>
              <p>金価格は日々変動します。国際金価格の動向と為替レートの両方を確認し、<strong>金価格が高く、円安が進んでいるタイミング</strong>が最も有利です。</p>
              <p>ただし、相場の天井を予測することは困難です。「今の価格で十分な利益が出る」と感じたら、無理に待たずに売却するのも賢明な判断です。2026年4月現在の相場は歴史的高値圏にあり、売却の好機と言えます。</p>
            </li>
          </ol>

          <h2>K24売却時の税金について</h2>

          <p>K24（純金）を売却して利益が出た場合、<strong>譲渡所得</strong>として確定申告が必要になることがあります。税金に関する重要なポイントをまとめます。</p>

          <h3>譲渡所得の計算方法</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>課税対象</strong></td><td>売却価格 - 取得費（購入価格） - 売却費用</td></tr>
                <tr><td><strong>特別控除</strong></td><td>年間50万円（他の譲渡所得と合算）</td></tr>
                <tr><td><strong>短期譲渡所得</strong></td><td>保有期間5年以内：全額が課税対象</td></tr>
                <tr><td><strong>長期譲渡所得</strong></td><td>保有期間5年超：課税対象の1/2が所得に算入</td></tr>
                <tr><td><strong>支払調書</strong></td><td>1回200万円超の取引で買取業者が税務署に提出</td></tr>
              </tbody>
            </table>
          </div>

          <p>たとえば、10年前に50万円で購入したK24インゴット（約50g）を、2026年に約76万円で売却した場合：</p>

          <ul>
            <li>売却益：76万円 - 50万円 = 26万円</li>
            <li>特別控除50万円を適用：26万円 - 50万円 = 0円（課税なし）</li>
          </ul>

          <p>この場合、特別控除の範囲内のため<strong>税金はかかりません</strong>。しかし、大きな利益が出る場合は、保有期間が5年を超えているか確認し、長期譲渡所得の優遇を受けるのが有利です。</p>

          <blockquote>
            <p><strong>注意：</strong>購入時のレシートや明細がないと取得費が証明できず、売却額の5%を取得費とみなされる場合があります。購入時の書類は必ず保管しておきましょう。</p>
          </blockquote>

          <h2>4社比較 — K24買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>K24買取の特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>複数業者のK24買取価格を一括比較。インゴットの高額取引に特に有効</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>目の前で重量測定・純度検査。その場で現金支払い。全国600店舗以上</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>自宅でインゴットや金貨を安全に査定・売却。重い金地金の持ち運び不要</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>3つの方法から選択可能。K24以外の貴金属もまとめて査定OK</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>特にインゴットの売却は高額になるため、複数業者の比較が重要です。</strong>1kgのインゴットでは業者間で数十万円の差が出ることもあります。まずはヒカカク！で一括査定を取り、そのうえで個別に交渉するのがおすすめです。</p>

          <CtaBox />

          <h2>K24買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "K24（純金）の買取価格は1gいくらですか？",
                a: "2026年4月現在、K24（純金）の買取価格は1gあたり約15,000〜15,400円前後です。ただし、国際金価格と為替レートにより毎日変動します。買取業者のウェブサイトやヒカカク！の一括査定で最新の価格を確認することをおすすめします。",
              },
              {
                q: "K24のインゴットと金貨で買取価格は異なりますか？",
                a: "はい、異なる場合があります。田中貴金属や徳力本店など有名ブランドのインゴットは信頼性が高く、買取単価が高めになる傾向があります。金貨はプレミアム（付加価値）が付く場合もあり、特に記念金貨や発行数が少ないものは額面以上の価格になることがあります。一般的な地金型金貨（メイプルリーフ等）は金の素材価値に近い価格で取引されます。",
              },
              {
                q: "K24とK18はどれくらい価格差がありますか？",
                a: "K24は純度99.99%、K18は純度75%なので、同じ重量で比較するとK24はK18の約1.33倍の買取価格になります。2026年4月時点では、K24が1gあたり約15,200円、K18が約11,400円です。10gの製品なら約38,000円の差があります。",
              },
              {
                q: "K24の純金製品はどこで売るのが一番高いですか？",
                a: "複数の買取業者に見積もりを取って比較するのが最も確実です。ヒカカク！のような一括査定サービスを利用すれば、複数業者の査定価格を一度に比較できます。業者によって1gあたり数百円の差が出るため、重量が大きいインゴットなどでは数万円〜数十万円の差になることもあります。",
              },
              {
                q: "K24の売却時に税金はかかりますか？",
                a: "はい、金の売却益は譲渡所得として課税対象になります。ただし、年間50万円の特別控除があるため、売却益が50万円以内なら実質非課税です。保有期間5年超の場合は長期譲渡所得となり、課税額が半分になります。また、1回の取引で200万円を超える場合は、買取業者が税務署に支払調書を提出します。",
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

          <h2>関連記事</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
            </Link>
            <Link href="/articles/kinka-ingot-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">金貨・インゴット買取ガイド</p>
            </Link>
            <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">相場情報</span>
              <p className="text-sm font-bold mt-1">金買取相場一覧 — K24/K18/K14の1gあたり価格</p>
            </Link>
            <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">売却ガイド</span>
              <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
            </Link>
          </div>

          <h2>まとめ</h2>

          <p>K24（純金）は純度99.99%の最も価値が高い金であり、インゴット・金貨・ジュエリーなどさまざまな形で保有されています。</p>

          <p>2026年4月現在、K24の買取相場は<strong>1gあたり約15,000〜15,400円</strong>と歴史的な高値水準にあります。2020年の約6,600円から約2.3倍に上昇しており、保有している純金製品を売却するには絶好のタイミングと言えます。</p>

          <p>K24を最高値で売るためのポイントは以下の3つです。</p>

          <ol>
            <li><strong>複数業者に相見積もりを取る</strong>（一括査定が効率的）</li>
            <li><strong>付属品・証明書を揃える</strong>（インゴットのアッセイカード等）</li>
            <li><strong>相場を確認し、納得できる価格で売却する</strong></li>
          </ol>

          <p>特にインゴットや金貨は高額取引になるため、業者選びが重要です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で複数業者の買取価格を比較してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
