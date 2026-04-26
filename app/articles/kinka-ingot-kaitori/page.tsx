import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【2026年最新】金貨・インゴット買取ガイド — 種類別の相場と税金の注意点",
  description:
    "金貨（メイプルリーフ・ウィーン・カンガルー・パンダ・天皇陛下記念金貨）とインゴット（田中貴金属・徳力本店・三菱マテリアル）の買取相場を掲載。重量別の買取目安、200万円超の税金対策、おすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金貨・インゴットの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金貨・インゴットは高額取引になるため、複数社の比較が特に重要です。</p>
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
        name: "メイプルリーフ金貨1オンスの買取価格はいくらですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026年4月現在、メイプルリーフ金貨1オンス（31.1g、純金K24）の買取価格は約47万〜48万円が目安です。金の国際相場と為替レートにより毎日変動します。",
        },
      },
      {
        "@type": "Question",
        name: "金のインゴットはどこで売るのが一番高いですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "複数の買取業者に相見積もりを取るのが最も確実です。インゴットは高額取引になるため、1gあたり数百円の差でも合計では大きな金額になります。ヒカカク！などの一括査定サービスを利用すれば、複数業者の価格を効率的に比較できます。",
        },
      },
      {
        "@type": "Question",
        name: "金貨やインゴットの売却時に税金はかかりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、売却益は譲渡所得として課税対象になります。年間50万円の特別控除があり、保有期間5年超なら長期譲渡所得（課税額半分）になります。また、1回の取引で200万円を超える場合は買取業者が税務署に支払調書を提出する義務があります。",
        },
      },
      {
        "@type": "Question",
        name: "ブランド不明のインゴットも買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、買取可能です。ただし、田中貴金属や三菱マテリアルなど有名ブランドのインゴットと比べると、純度確認に時間がかかる場合があります。X線分析で正確に純度を測定してから買取価格が決まります。",
        },
      },
      {
        "@type": "Question",
        name: "記念金貨は額面以上で買い取ってもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、多くの記念金貨は額面を大きく上回る価格で買い取ってもらえます。天皇陛下御在位記念金貨（額面1万円、純金20g）は約30万円以上、天皇陛下御即位記念金貨（額面10万円、純金30g）は約45万円以上で取引されています。金の素材価値に加え、コレクターズプレミアムが付く場合もあります。",
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

export default function KinkaIngotKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金貨・インゴット買取ガイド</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金貨・インゴット買取ガイド — 種類別の相場と税金</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

          <p>金貨やインゴット（金地金）は、金の投資・保有手段として最もポピュラーな形態です。2026年4月現在、金価格は歴史的な高値水準にあり、保有している金貨やインゴットを売却するには絶好のタイミングと言えます。</p>

          <p>ただし、金貨・インゴットの売却は<strong>高額取引になるため、業者選び、税金の取り扱い、本人確認書類の準備</strong>など、ジュエリーの売却以上に注意すべきポイントがあります。</p>

          <p>この記事では以下の内容を解説します。</p>

          <ul>
            <li>金貨の種類と買取相場（メイプルリーフ、ウィーン、カンガルー、パンダ、天皇陛下記念金貨など）</li>
            <li>インゴットの買取相場（田中貴金属、徳力本店、三菱マテリアルなどのブランド別）</li>
            <li>重量別の買取価格目安（1g〜1kg）</li>
            <li>金の売却に関する税金のルール</li>
            <li>おすすめ買取業者4社の比較</li>
          </ul>

          <h2>金貨の種類と買取相場</h2>

          <p>「地金型金貨」と呼ばれる投資用金貨は、金の素材価値に連動した価格で取引されます。世界各国の造幣局が発行しており、純金（K24）のものが主流です。</p>

          <h3>主要な地金型金貨の買取相場</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金貨名</th>
                  <th>発行国</th>
                  <th>純度</th>
                  <th>重量</th>
                  <th>買取価格の目安（2026年4月）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>メイプルリーフ金貨</strong></td><td>カナダ</td><td>K24（99.99%）</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>ウィーン金貨ハーモニー</strong></td><td>オーストリア</td><td>K24（99.99%）</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>カンガルー金貨</strong></td><td>オーストラリア</td><td>K24（99.99%）</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>パンダ金貨</strong></td><td>中国</td><td>K24（99.99%）</td><td>30g</td><td>約455,000〜465,000円</td></tr>
                <tr><td><strong>アメリカンイーグル金貨</strong></td><td>アメリカ</td><td>K22（91.67%）</td><td>1oz（33.93g）※金含有量は31.1g</td><td>約470,000〜480,000円</td></tr>
                <tr><td><strong>クルーガーランド金貨</strong></td><td>南アフリカ</td><td>K22（91.67%）</td><td>1oz（33.93g）※金含有量は31.1g</td><td>約465,000〜475,000円</td></tr>
                <tr><td><strong>ブリタニア金貨</strong></td><td>イギリス</td><td>K24（99.99%）</td><td>1oz（31.1g）</td><td>約470,000〜480,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>メイプルリーフ金貨やウィーン金貨は世界で最も流通量が多い地金型金貨であり、<strong>流動性が高い（すぐに売れる）</strong>のが特徴です。買取業者も即座に査定・買取できるため、売却がスムーズです。</p>

          <h3>金貨のサイズバリエーション</h3>

          <p>多くの地金型金貨は1オンス以外にも複数のサイズが用意されています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>サイズ</th>
                  <th>重量</th>
                  <th>買取価格の目安（K24金貨の場合）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1/20oz</td><td>約1.56g</td><td>約23,000〜24,000円</td></tr>
                <tr><td>1/10oz</td><td>約3.11g</td><td>約47,000〜48,000円</td></tr>
                <tr><td>1/4oz</td><td>約7.78g</td><td>約118,000〜120,000円</td></tr>
                <tr><td>1/2oz</td><td>約15.55g</td><td>約235,000〜240,000円</td></tr>
                <tr><td><strong>1oz</strong></td><td><strong>約31.1g</strong></td><td><strong>約470,000〜480,000円</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h3>日本の記念金貨</h3>

          <p>日本の造幣局が発行する記念金貨は、額面が設定されていますが、金の素材価値が額面を大きく上回っています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金貨名</th>
                  <th>額面</th>
                  <th>重量・純度</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>天皇陛下御在位60年記念10万円金貨</strong></td><td>10万円</td><td>20g・K24</td><td>約300,000〜320,000円</td></tr>
                <tr><td><strong>天皇陛下御即位記念10万円金貨</strong></td><td>10万円</td><td>30g・K24</td><td>約455,000〜475,000円</td></tr>
                <tr><td><strong>皇太子殿下御成婚記念5万円金貨</strong></td><td>5万円</td><td>18g・K24</td><td>約270,000〜290,000円</td></tr>
                <tr><td><strong>長野オリンピック記念1万円金貨</strong></td><td>1万円</td><td>15.6g・K24</td><td>約235,000〜250,000円</td></tr>
                <tr><td><strong>2002FIFAワールドカップ記念1万円金貨</strong></td><td>1万円</td><td>15.6g・K24</td><td>約235,000〜250,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>記念金貨は金の素材価値に加え、<strong>コレクターズプレミアム</strong>が上乗せされることがあります。特に未使用品でケースや証明書が揃っている場合は、素材価値以上の価格がつきやすいです。</p>

          <CtaBox />

          <h2>インゴット（金地金）の買取</h2>

          <p>インゴットは金を長方形の板状に鋳造した製品で、純金（K24）です。投資用として最も効率的な保有形態であり、買取時も<strong>最も高い単価</strong>で取引されます。</p>

          <h3>主要ブランドのインゴット</h3>

          <p>インゴットには製造元（ブランド）の刻印が入っています。以下のブランドはLBMA（ロンドン貴金属市場協会）の「グッドデリバリーリスト」に認定されており、世界中で信頼性が高く評価されています。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ブランド</th>
                  <th>国</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>田中貴金属工業</strong></td><td>日本</td><td>日本最大手。「TANAKA」刻印。国内で最も流通量が多い</td></tr>
                <tr><td><strong>徳力本店</strong></td><td>日本</td><td>1727年創業の老舗。「TOKURIKI」刻印</td></tr>
                <tr><td><strong>三菱マテリアル</strong></td><td>日本</td><td>三菱グループの精錬メーカー</td></tr>
                <tr><td><strong>住友金属鉱山</strong></td><td>日本</td><td>住友グループ</td></tr>
                <tr><td><strong>日本マテリアル</strong></td><td>日本</td><td></td></tr>
                <tr><td><strong>PAMP</strong></td><td>スイス</td><td>世界最大級の貴金属精錬メーカー。レディフォルトゥナ柄が有名</td></tr>
                <tr><td><strong>Valcambi</strong></td><td>スイス</td><td>スイスの大手精錬メーカー</td></tr>
                <tr><td><strong>Heraeus</strong></td><td>ドイツ</td><td>欧州大手</td></tr>
                <tr><td><strong>Perth Mint</strong></td><td>オーストラリア</td><td>オーストラリア政府造幣局</td></tr>
              </tbody>
            </table>
          </div>

          <h3>重量別のインゴット買取価格目安</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>重量</th>
                  <th>買取価格の目安（2026年4月）</th>
                  <th>税金の注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1g</td><td>約15,000〜15,200円</td><td>—</td></tr>
                <tr><td>5g</td><td>約75,000〜76,000円</td><td>—</td></tr>
                <tr><td>10g</td><td>約150,000〜152,000円</td><td>—</td></tr>
                <tr><td>20g</td><td>約300,000〜304,000円</td><td>200万円超で支払調書</td></tr>
                <tr><td>50g</td><td>約750,000〜760,000円</td><td>200万円超で支払調書</td></tr>
                <tr><td>100g</td><td>約1,500,000〜1,540,000円</td><td>200万円超で支払調書</td></tr>
                <tr><td>500g</td><td>約7,500,000〜7,700,000円</td><td>支払調書対象</td></tr>
                <tr><td><strong>1kg</strong></td><td><strong>約15,000,000〜15,400,000円</strong></td><td>支払調書対象</td></tr>
              </tbody>
            </table>
          </div>

          <p>インゴットの買取は重量が大きいほど高額になります。100gのインゴットで約150万円、500gで約750万円、1kgで約1,500万円です。<strong>業者間で1gあたり数百円の差があれば、合計で数万円〜数十万円の差</strong>になるため、必ず複数業者に見積もりを取りましょう。</p>

          <blockquote>
            <p><strong>アッセイカード（品質保証書）について：</strong>インゴットには通常、製造元が発行するアッセイカード（品質保証書）が付属しています。これがあると純度が保証されるため、スムーズに買取が進みます。紛失した場合でも買取は可能ですが、X線分析が必要になることがあります。</p>
          </blockquote>

          <CtaBox />

          <h2>地金価値 vs コレクター価値 — 金貨の二つの価値</h2>

          <p>金貨の買取価格は「地金価値（素材としての金の価値）」と「コレクター価値（収集価値）」の2つで構成されます。この違いを理解することで、より高く売却できます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>価値の種類</th>
                  <th>内容</th>
                  <th>該当する金貨の例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>地金価値のみ</strong></td><td>金の重量 x 1gあたりの相場で計算。流通量が多い金貨</td><td>メイプルリーフ金貨、ウィーン金貨、カンガルー金貨</td></tr>
                <tr><td><strong>地金価値+コレクター価値</strong></td><td>素材価値に希少性・歴史的価値が加算</td><td>天皇陛下記念金貨、旧デザインのパンダ金貨、限定版金貨</td></tr>
                <tr><td><strong>コレクター価値が主</strong></td><td>素材価値を大幅に上回る収集価値</td><td>古銭、希少年号の金貨、エラーコイン</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>売却先の選び方：</strong>地金価値のみの金貨は金買取業者（ヒカカク！、買取大吉など）で問題ありません。コレクター価値がありそうな金貨は、<strong>古銭・コイン専門の買取業者にも見積もりを取る</strong>と、素材価値以上の買取額が期待できます。</p>

          <h2>状態（傷・保管ケース）が価格に与える影響</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>状態</th>
                  <th>地金型金貨への影響</th>
                  <th>記念金貨への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>未開封・プルーフ</strong></td><td>ほぼ影響なし</td><td>コレクター価値UP（+10〜30%）</td></tr>
                <tr><td><strong>ケース・証明書付き</strong></td><td>ほぼ影響なし</td><td>コレクター価値UP（+5〜20%）</td></tr>
                <tr><td><strong>素手で触った跡あり</strong></td><td>影響なし</td><td>コレクター価値やや低下</td></tr>
                <tr><td><strong>小傷あり</strong></td><td>影響なし（溶解するため）</td><td>コレクター価値低下</td></tr>
                <tr><td><strong>大きな傷・凹み</strong></td><td>影響なし（溶解するため）</td><td>コレクター価値大幅低下</td></tr>
              </tbody>
            </table>
          </div>

          <p>地金型金貨（メイプルリーフ等）は<strong>溶かして精錬するため、傷や状態は基本的に価格に影響しません</strong>。一方、記念金貨やコレクターズコインは状態が価格に大きく影響するため、ケースに入れた状態で、素手で触らないように保管することが重要です。</p>

          <h2>偽造金貨の見分け方</h2>

          <p>金価格の高騰に伴い、偽造金貨も増加しています。以下の方法で見分けることができます。</p>

          <h3>自分でできるチェック</h3>
          <ol>
            <li><strong>重量チェック：</strong>1オンス金貨は31.1g。精密スケール（0.01g単位）で計量し、公称重量と一致するか確認</li>
            <li><strong>サイズチェック：</strong>直径と厚さをノギスで測定。公称サイズと一致するか確認</li>
            <li><strong>磁石テスト：</strong>金は磁石に反応しない。磁石に付く場合は偽物の可能性大</li>
            <li><strong>音のテスト：</strong>本物の金貨は指で弾くと高く澄んだ音がする。くぐもった音なら要注意</li>
            <li><strong>デザインの精密さ：</strong>偽造品はデザインが粗い場合がある。公式サイトの画像と比較</li>
          </ol>

          <h3>確実な鑑定方法</h3>
          <p>最も確実なのは、<strong>買取業者にX線蛍光分析（XRF）で測定してもらう</strong>ことです。大手の買取業者であれば無料で分析してくれます。偽物だった場合でも、鑑定費用はかかりません。</p>

          <h2>オークション vs 買取業者 — 金貨はどこで売る？</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>オークション（ヤフオク等）</th>
                  <th>買取業者</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>手数料</strong></td><td>8.8〜10%</td><td>無料</td></tr>
                <tr><td><strong>地金型金貨の価格</strong></td><td>相場同等〜やや低い</td><td>相場に連動</td></tr>
                <tr><td><strong>記念金貨の価格</strong></td><td>コレクター需要で高値の可能性</td><td>地金価値が中心</td></tr>
                <tr><td><strong>偽物トラブル</strong></td><td>出品者への疑義・返品リスク</td><td>なし</td></tr>
                <tr><td><strong>入金スピード</strong></td><td>落札後7〜14日</td><td>即日〜3日</td></tr>
                <tr><td><strong>おすすめの金貨</strong></td><td>希少な記念金貨</td><td>地金型金貨・インゴット</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>地金型金貨（メイプルリーフ等）やインゴットは買取業者が有利。</strong>手数料ゼロ・即現金化・トラブルリスクなしの三拍子が揃います。</p>

          <p><strong>希少な記念金貨や古銭はオークションや古銭専門店も検討。</strong>コレクター需要により、地金価値以上の価格がつく場合があります。</p>

          <h2>相続・遺品の金貨を売る場合の手続き</h2>

          <p>故人が保有していた金貨やインゴットを売却する場合の手続きを解説します。</p>

          <h3>必要なもの</h3>
          <ul>
            <li><strong>売却する相続人の本人確認書類</strong>（運転免許証、マイナンバーカード等）</li>
            <li><strong>金貨・インゴットの現物</strong></li>
            <li><strong>購入時の書類（あれば）</strong> — 取得費の証明に使える（節税効果大）</li>
          </ul>

          <h3>相続税への影響</h3>
          <p>金貨・インゴットは相続財産に含まれます。相続時点の時価（死亡日の金価格で計算）で評価されます。相続税の申告が必要な場合は、税理士に相談することをおすすめします。</p>

          <h3>遺産分割の注意点</h3>
          <p>複数の相続人がいる場合、金貨・インゴットの売却代金は遺産分割協議の対象になります。全相続人の合意なく売却するとトラブルの原因になるため、事前に話し合っておきましょう。</p>

          <blockquote>
            <p><strong>ポイント：</strong>故人の購入時の書類（レシート・明細書）が見つかれば、売却益の計算で取得費を証明でき、大幅な節税になります。遺品整理の際は、金融関連の書類を丁寧に確認しましょう。</p>
          </blockquote>

          <h2>税金について — 200万円超は支払調書発行</h2>

          <p>金貨やインゴットの売却は高額になることが多いため、<strong>税金の取り扱いを正しく理解する</strong>ことが重要です。</p>

          <h3>支払調書の提出義務</h3>

          <p><strong>1回の取引で200万円を超える金地金・金貨の買取</strong>を行った場合、買取業者は税務署に「金地金等の譲渡の対価の支払調書」を提出する義務があります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>取引金額</th>
                  <th>支払調書</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>200万円以下</td><td>提出なし</td><td>業者は税務署に報告する義務なし</td></tr>
                <tr><td><strong>200万円超</strong></td><td><strong>提出あり</strong></td><td>業者が税務署に報告。売却者のマイナンバー提示が必要</td></tr>
              </tbody>
            </table>
          </div>

          <p>支払調書が提出されること自体は違法ではなく、正常な取引の一部です。ただし、確定申告で適切に申告する必要があります。</p>

          <h3>譲渡所得の計算</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>売却益</strong></td><td>売却価格 - 取得費（購入価格＋手数料）</td></tr>
                <tr><td><strong>特別控除</strong></td><td>年間50万円（他の譲渡所得と合算）</td></tr>
                <tr><td><strong>短期譲渡所得</strong></td><td>保有期間5年以内：売却益全額が課税対象</td></tr>
                <tr><td><strong>長期譲渡所得</strong></td><td>保有期間5年超：売却益の1/2のみ課税</td></tr>
              </tbody>
            </table>
          </div>

          <h3>具体的な税金シミュレーション</h3>

          <p><strong>ケース1：</strong>10年前に100gのインゴットを50万円で購入し、2026年に150万円で売却した場合</p>

          <ul>
            <li>売却益：150万円 - 50万円 = 100万円</li>
            <li>特別控除：100万円 - 50万円 = 50万円</li>
            <li>長期譲渡所得（5年超）：50万円 x 1/2 = 25万円が他の所得に合算</li>
            <li>所得税率20%の場合：25万円 x 20% = <strong>約5万円の税金</strong></li>
          </ul>

          <p><strong>ケース2：</strong>3年前に500gのインゴットを600万円で購入し、2026年に750万円で売却した場合</p>

          <ul>
            <li>売却益：750万円 - 600万円 = 150万円</li>
            <li>特別控除：150万円 - 50万円 = 100万円</li>
            <li>短期譲渡所得（5年以内）：100万円が他の所得に合算</li>
            <li>所得税率20%の場合：100万円 x 20% = <strong>約20万円の税金</strong></li>
          </ul>

          <blockquote>
            <p><strong>重要：</strong>購入時の明細書・レシートを保管しておくことが非常に重要です。取得費を証明できない場合、売却額の5%を取得費とみなされるため、実際より多くの税金を支払うことになります。</p>
          </blockquote>

          <h3>節税のポイント</h3>

          <ul>
            <li><strong>5年以上保有してから売却する</strong>（長期譲渡所得の優遇を受ける）</li>
            <li><strong>年間の売却益を50万円以内に抑える</strong>（特別控除の範囲内）</li>
            <li><strong>購入時の書類を保管する</strong>（取得費の証明）</li>
            <li><strong>複数年に分けて売却する</strong>（毎年50万円の控除を活用）</li>
          </ul>

          <h2>4社比較 — 金貨・インゴット買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>金貨・インゴット買取の特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>高額インゴットの複数業者比較に最適。数十万円の差が出ることも</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>金貨・インゴットの買取実績豊富。その場で計量・査定・現金化</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>重いインゴットを持ち運ぶ必要なし。自宅で安全に取引完結</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>金貨・インゴットに加え、ジュエリーもまとめて査定可能</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>インゴットの売却は特に高額になるため、最低3社には見積もりを取ることを強く推奨します。</strong>1kgのインゴットの場合、1gあたり200円の差があれば<strong>20万円</strong>、500円の差があれば<strong>50万円</strong>の差になります。</p>

          <CtaBox />

          <h2>金貨・インゴット買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "メイプルリーフ金貨1オンスの買取価格はいくらですか？",
                a: "2026年4月現在、メイプルリーフ金貨1オンス（31.1g、純金K24）の買取価格は約47万〜48万円が目安です。金の国際相場と為替レートにより毎日変動しますので、売却前に最新の価格を確認することをおすすめします。メイプルリーフ金貨は世界で最も流通量が多い金貨の一つであり、どの買取業者でもスムーズに売却できます。",
              },
              {
                q: "金のインゴットはどこで売るのが一番高いですか？",
                a: "複数の買取業者に相見積もりを取るのが最も確実です。インゴットは高額取引になるため、1gあたり数百円の差でも合計では大きな金額になります。例えば500gのインゴットで1gあたり300円の差があれば15万円の差です。ヒカカク！などの一括査定サービスを利用すれば、複数業者の価格を効率的に比較できます。",
              },
              {
                q: "金貨やインゴットの売却時に税金はかかりますか？",
                a: "はい、売却益は譲渡所得として課税対象になります。年間50万円の特別控除があり、保有期間5年超なら長期譲渡所得として課税額が半分になります。また、1回の取引で200万円を超える場合は買取業者が税務署に支払調書を提出する義務があります。購入時のレシートや明細書は必ず保管しておきましょう。",
              },
              {
                q: "ブランド不明のインゴットも買取できますか？",
                a: "はい、買取可能です。ただし、田中貴金属や三菱マテリアルなど有名ブランドのインゴットと比べると、純度確認のためX線分析が必要になり、査定に時間がかかる場合があります。純度が確認できれば、ブランドインゴットと同等の価格で買取されます。",
              },
              {
                q: "記念金貨は額面以上で買い取ってもらえますか？",
                a: "はい、多くの記念金貨は額面を大きく上回る価格で買い取ってもらえます。例えば天皇陛下御在位60年記念10万円金貨（純金20g）は約30万円以上、天皇陛下御即位記念10万円金貨（純金30g）は約45万円以上で取引されています。未使用品でケースや証明書が揃っている場合は、さらにコレクターズプレミアムが付くことがあります。",
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
            <Link href="/articles/k24-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">K24（純金）買取相場ガイド</p>
            </Link>
            <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
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

          <p>金貨・インゴットは金の投資・保有手段として最もポピュラーであり、2026年4月現在の歴史的高値の中、売却を検討する方が増えています。</p>

          <p>主要な買取価格の目安は以下のとおりです。</p>

          <ul>
            <li><strong>メイプルリーフ金貨 1oz：</strong>約47万〜48万円</li>
            <li><strong>インゴット 100g：</strong>約150万〜154万円</li>
            <li><strong>インゴット 500g：</strong>約750万〜770万円</li>
            <li><strong>インゴット 1kg：</strong>約1,500万〜1,540万円</li>
          </ul>

          <p>金貨・インゴットの売却で気を付けるべきポイントは以下の3つです。</p>

          <ol>
            <li><strong>複数業者に相見積もりを取る</strong>（高額取引では数十万円の差が出る）</li>
            <li><strong>税金を理解する</strong>（200万円超で支払調書、5年超保有で長期譲渡所得の優遇）</li>
            <li><strong>購入時の書類を保管する</strong>（取得費の証明で節税）</li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で複数業者の買取価格を比較してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
