import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】金歯の買取相場ガイド — 1本いくら？売り方と注意点",
  description:
    "金歯は買取業者に売れます。金歯1本あたりの買取相場（約3,000〜15,000円）、金歯の純度（K14〜K20）、売り方の手順、衛生面の注意点、金歯買取OKのおすすめ業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金歯の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金歯も立派な金製品。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
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
        name: "金歯は本当に売れますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、金歯は買取業者に売れます。金歯に使われている金は本物の金合金であり、K14〜K20（純度58.5%〜83.3%）の金が含まれています。金としての素材価値で買取されるため、見た目や状態に関係なく売却できます。",
        },
      },
      {
        "@type": "Question",
        name: "金歯1本の買取価格はいくらですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "金歯1本あたりの買取価格は約3,000〜15,000円が目安です。金歯の大きさ（重量）と純度によって価格が異なります。クラウン（被せ物）は約1〜3g、ブリッジは約3〜8gが一般的です。2026年4月現在の金価格高騰により、以前より高値で買い取ってもらえます。",
        },
      },
      {
        "@type": "Question",
        name: "金歯を売るにはどうすればいいですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "まず歯科医院で金歯を外してもらい（治療の一環として）、その後買取業者に持ち込みます。既に外れている金歯はそのまま買取業者に持っていけます。事前に軽く洗浄しておくと良いですが、完璧な洗浄は不要です。業者が超音波洗浄を行います。",
        },
      },
      {
        "@type": "Question",
        name: "金歯の買取に身分証明書は必要ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、古物営業法により、買取時には本人確認書類（運転免許証、マイナンバーカード、パスポートなど）の提示が必要です。これは金歯に限らず、すべての貴金属買取で共通のルールです。",
        },
      },
      {
        "@type": "Question",
        name: "複数の金歯をまとめて売ると有利ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、有利です。金歯は1本あたりの重量が小さいため、1本だけでは数千円程度になることが多いですが、複数本まとめて売ると総重量が増え、取引効率が良くなるため業者も高めの単価を提示しやすくなります。家族の分もまとめて持ち込むのがおすすめです。",
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

export default function KinbaKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金歯買取ガイド</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金歯の買取相場ガイド — 1本いくら？売り方と注意点</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

          <p>「抜いた金歯が引き出しに眠っている」「亡くなった家族の金歯がある」「金歯って売れるの？」——実は、<strong>金歯は買取業者で売却できます</strong>。しかも、2026年の金価格高騰により、想像以上に高値がつくことがあります。</p>

          <p>金歯はジュエリーと同じ金合金で作られており、K14〜K20（純度58.5%〜83.3%）の金が含まれています。見た目は歯の形をしていますが、買取業者は<strong>「金としての素材価値」</strong>で査定するため、状態や見た目は関係ありません。</p>

          <p>この記事では以下の内容を解説します。</p>

          <ul>
            <li>金歯は売れるのか（結論：売れる）</li>
            <li>金歯の買取相場（1本あたり・重量あたり）</li>
            <li>金歯の純度（K14〜K20が多い理由）</li>
            <li>金歯の売り方（具体的な手順）</li>
            <li>金歯買取OKの業者4社比較</li>
            <li>売却時の注意点</li>
          </ul>

          <h2>金歯は売れるのか？ — 結論：売れる</h2>

          <p><strong>金歯は間違いなく売れます。</strong>大手買取業者のほとんどが金歯の買取に対応しています。</p>

          <p>金歯に使われている金は、ジュエリーに使われている金と同じ本物の金合金です。歯科用金合金は<strong>K14（純度58.5%）からK20（純度83.3%）</strong>のものが一般的で、中にはK18やK20の高純度のものもあります。</p>

          <p>買取業者は金歯を溶かして精錬し、純金として再利用します。そのため、歯の形をしていても、セメントやレジンが付着していても、変色していても問題ありません。</p>

          <blockquote>
            <p><strong>よくある誤解：</strong>「金歯は不衛生だから買い取ってもらえないのでは？」と心配する方がいますが、全く問題ありません。買取業者は超音波洗浄で付着物を除去し、その後溶解・精錬するため、衛生面の心配は不要です。</p>
          </blockquote>

          <h2>金歯の買取相場 — 2026年4月最新</h2>

          <h3>重量あたりの買取相場</h3>

          <p>金歯の買取価格は「重量 x 1gあたりの純度別買取単価」で計算されます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金歯の純度</th>
                  <th>金含有率</th>
                  <th>1gあたり買取価格（2026年4月目安）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K20（金歯で高品質）</strong></td><td>83.3%</td><td>約12,700円</td></tr>
                <tr><td><strong>K18</strong></td><td>75.0%</td><td>約11,400円</td></tr>
                <tr><td><strong>K16</strong></td><td>66.6%</td><td>約10,100円</td></tr>
                <tr><td><strong>K14（最も一般的）</strong></td><td>58.5%</td><td>約8,900円</td></tr>
                <tr><td>金パラ（金12%）</td><td>12.0%</td><td>約1,800円</td></tr>
              </tbody>
            </table>
          </div>

          <p>歯科用金合金で最も多いのは<strong>K14〜K16クラス</strong>です。ただし、古い時代の金歯にはK18やK20が使われていることもあり、思わぬ高値がつくことがあります。</p>

          <p>なお、「金パラ（金銀パラジウム合金）」は金の含有率が12%と低いため、1gあたりの買取価格はかなり低くなります。銀歯に見えるけど実は金パラ、というケースも多いです。</p>

          <h3>1本あたりの買取価格目安</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金歯の種類</th>
                  <th>重量の目安</th>
                  <th>買取価格の目安（K14の場合）</th>
                  <th>買取価格の目安（K18の場合）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>インレー（詰め物）</td><td>0.5〜1.5g</td><td>約4,500〜13,000円</td><td>約5,700〜17,000円</td></tr>
                <tr><td>クラウン（被せ物）</td><td>1.5〜3g</td><td>約13,000〜27,000円</td><td>約17,000〜34,000円</td></tr>
                <tr><td>ブリッジ（3本連結）</td><td>3〜8g</td><td>約27,000〜71,000円</td><td>約34,000〜91,000円</td></tr>
                <tr><td>ブリッジ（大型）</td><td>8〜15g</td><td>約71,000〜134,000円</td><td>約91,000〜171,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>大型のブリッジ（複数歯にまたがるもの）は重量が大きく、<strong>10万円以上</strong>の買取価格になることも珍しくありません。</p>

          <CtaBox />

          <h2>金歯の種類別解説 — インレー・クラウン・ブリッジの違い</h2>

          <p>金歯と一口に言っても、治療の種類によって形状・大きさ・重量が異なります。それぞれの特徴を理解しておくと、買取価格の目安がわかります。</p>

          <h3>インレー（詰め物）</h3>
          <p>虫歯を削った後に詰める小さな金属片です。歯の一部を覆うだけなので、重量は<strong>0.5〜1.5g程度</strong>と最も軽い。奥歯の咬合面（噛む面）に使われることが多く、外見からは見えにくいものです。K14で0.5gの場合、買取価格は約4,500円です。</p>

          <h3>クラウン（被せ物）</h3>
          <p>歯全体を覆うキャップ状の金属です。歯の形をしているため、<strong>重量は1.5〜3g程度</strong>と中程度。前歯に使われることは少なく、奥歯に多く見られます。K14で2gの場合、買取価格は約17,800円です。</p>

          <h3>ブリッジ（連結冠）</h3>
          <p>欠損した歯の両隣の歯を支えにして、3本以上の歯を連結した金属です。<strong>重量は3〜15g以上</strong>と最も重く、買取価格も高額になります。大型のブリッジ（5本以上連結）は10万円以上になることも。K14で8gの場合、買取価格は約71,200円です。</p>

          <h2>歯科医院での金歯の外し方 — 5つのステップ</h2>

          <p>「口の中の金歯を売りたいけど、どうやって外すの？」という方のために、歯科医院での手順を解説します。</p>

          <ol>
            <li>
              <strong>ステップ1：歯科医院を予約する</strong>
              <p>かかりつけの歯科医院に電話し、「金歯の被せ物を外したい」と伝えます。治療の一環として対応してもらえます。</p>
            </li>
            <li>
              <strong>ステップ2：レントゲン撮影・診察</strong>
              <p>金歯の下の歯の状態を確認するためにレントゲンを撮影します。歯の状態によって、新しい被せ物を入れるか、抜歯するかの方針が決まります。</p>
            </li>
            <li>
              <strong>ステップ3：金歯を外す</strong>
              <p>専用の器具（クラウンリムーバー）を使い、接着剤（セメント）を破壊して金歯を外します。麻酔は基本的に不要ですが、状態によっては局所麻酔を使います。所要時間は約10〜20分です。</p>
            </li>
            <li>
              <strong>ステップ4：「金歯を持ち帰りたい」と伝える</strong>
              <p><strong>これが最も重要なステップです。</strong>言わないと歯科医院が廃棄してしまうことがあります。「外した金歯を持ち帰りたい」と必ず伝えてください。ほとんどの歯科医院で対応してくれます。</p>
            </li>
            <li>
              <strong>ステップ5：新しい治療を行う</strong>
              <p>金歯を外した歯には、新しい被せ物（セラミック、銀歯、プラスチックなど）を入れます。保険適用の銀歯なら数千円程度です。</p>
            </li>
          </ol>

          <blockquote>
            <p><strong>費用の目安：</strong>金歯を外して新しい被せ物を入れる治療費は、保険適用で3,000〜5,000円程度（3割負担）です。金歯の買取価格がこれを大きく上回るため、トータルではプラスになることがほとんどです。</p>
          </blockquote>

          <h2>亡くなった家族の金歯を売る場合の手続き</h2>

          <p>故人の金歯を売却するケースは珍しくありません。特別な法的手続きは基本的に不要ですが、以下の点を確認しておきましょう。</p>

          <h3>火葬後に金歯が残る場合</h3>
          <p>金の融点は約1,064度Cで、火葬の温度（800〜1,200度C）によっては溶けずに残ることがあります。火葬後、遺骨とともに金歯が見つかった場合は、遺族が引き取れます。</p>

          <h3>売却に必要なもの</h3>
          <ul>
            <li><strong>本人確認書類：</strong>売却する方（遺族）の運転免許証やマイナンバーカード</li>
            <li><strong>故人との関係の確認：</strong>業者によっては戸籍謄本や住民票を求められることがある（稀）</li>
            <li><strong>金歯そのもの：</strong>そのままの状態でOK。洗浄は軽く水洗い程度で十分</li>
          </ul>

          <p>多くの場合、<strong>遺族の本人確認書類だけで売却可能</strong>です。「故人のものですが買取できますか？」と事前に電話確認しておくとスムーズです。</p>

          <h3>相続税について</h3>
          <p>金歯は相続財産に含まれる可能性がありますが、少額であれば実務上は問題になることはほとんどありません。高額（数十万円以上）になる場合は、相続財産に含めて申告することが望ましいです。</p>

          <h2>実査定事例 — 金歯はいくらで売れた？</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>事例</th>
                  <th>金歯の種類</th>
                  <th>重量</th>
                  <th>測定された純度</th>
                  <th>買取価格</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>事例1</td><td>クラウン1本</td><td>2.1g</td><td>K18相当</td><td><strong>23,940円</strong></td></tr>
                <tr><td>事例2</td><td>インレー2個</td><td>1.8g（合計）</td><td>K14相当</td><td><strong>16,020円</strong></td></tr>
                <tr><td>事例3</td><td>ブリッジ（3本連結）</td><td>5.3g</td><td>K16相当</td><td><strong>53,530円</strong></td></tr>
                <tr><td>事例4</td><td>クラウン2本+インレー1個</td><td>6.5g（合計）</td><td>K14〜K18混在</td><td><strong>65,000円</strong></td></tr>
                <tr><td>事例5</td><td>大型ブリッジ（5本連結）</td><td>12.8g</td><td>K16相当</td><td><strong>129,280円</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>事例5のように、大型ブリッジは<strong>1つで10万円以上</strong>になることがあります。「たかが金歯」と思わず、まずは査定に出してみることをおすすめします。</p>

          <h2>金歯の純度 — なぜK14〜K20が使われるのか</h2>

          <p>歯科用金合金にK14〜K20が多い理由は、<strong>口腔内での耐久性と加工性のバランス</strong>にあります。</p>

          <ul>
            <li><strong>K24（純金）：</strong>柔らかすぎて噛む力に耐えられない。歯科用には不適。</li>
            <li><strong>K20〜K18：</strong>適度な硬さと耐食性があり、高品質な歯科治療に使用。自費診療で使われることが多い。</li>
            <li><strong>K14〜K16：</strong>硬さと耐久性のバランスが良く、最も一般的な歯科用金合金。</li>
            <li><strong>金パラ（金12%）：</strong>保険適用の治療で最も多く使われる。安価だが金の含有率が低い。</li>
          </ul>

          <p><strong>自分の金歯の純度がわからない場合でも心配ありません。</strong>買取業者がX線蛍光分析装置で正確に純度を測定してくれます。測定は無料で、数秒〜数分で結果が出ます。</p>

          <h2>金歯の売り方 — 具体的な手順</h2>

          <h3>ステップ1：金歯を手元に用意する</h3>

          <p>金歯が既に外れている場合は、そのままでOKです。まだ口の中にある場合は、以下の方法で外します。</p>

          <ul>
            <li><strong>治療のついでに外す：</strong>歯科医院で再治療（新しい被せ物に交換するなど）の際に、古い金歯を返してもらいます。「金歯を持ち帰りたい」と伝えれば、ほとんどの歯科医院で対応してくれます。</li>
            <li><strong>抜歯の場合：</strong>抜歯時に金歯がついたまま抜けた場合も、持ち帰りを希望すれば返してもらえます。</li>
          </ul>

          <blockquote>
            <p><strong>重要：</strong>金歯を売る目的だけで健康な歯の金歯を外すのはおすすめしません。あくまで「治療のついで」や「既に外れたもの」を売却しましょう。</p>
          </blockquote>

          <h3>ステップ2：軽く洗浄する</h3>

          <p>金歯を持ち込む前に、水やぬるま湯で軽く洗い、付着した汚れやセメントの大きな塊を取り除いておくと査定がスムーズです。ただし、<strong>完璧に洗浄する必要はありません</strong>。細かいセメントやレジンは業者が超音波洗浄で除去します。</p>

          <h3>ステップ3：買取業者に持ち込む</h3>

          <p>金歯を買取業者に持ち込みます。店頭買取の場合は予約不要のお店が多いですが、事前に電話で「金歯の買取は可能か」確認しておくと安心です。</p>

          <h3>ステップ4：査定・売却</h3>

          <p>業者が金歯の重量を測定し、X線分析で純度を判定します。買取価格が提示されるので、納得すれば売却、納得できなければキャンセル（無料）できます。</p>

          <h2>4社比較 — 金歯買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>金歯買取の特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>金歯対応の複数業者を一括比較。小さな金歯でも対応</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>金歯の買取実績が豊富。その場で純度測定・即現金化</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>金歯を含む貴金属をまとめて自宅で査定。出張費無料</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>金歯・金パラも査定可能。他の貴金属とまとめて査定OK</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <CtaBox />

          <h2>金歯買取の注意点</h2>

          <h3>1. 複数本まとめて売った方が有利</h3>

          <p>金歯は1本あたりの重量が小さい（0.5〜3g程度）ため、1本だけでは買取価格が数千円にとどまることがあります。<strong>複数本まとめて売る</strong>と総重量が増え、業者も高めの単価を提示しやすくなります。</p>

          <p>家族や親戚の金歯も一緒に集めて持ち込むのがおすすめです。</p>

          <h3>2. 金歯以外の歯科用金属との見分け方</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>見た目</th>
                  <th>買取可否</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>金歯（K14〜K20）</strong></td><td>黄金色</td><td>買取可</td><td>高い（1gあたり8,900〜12,700円）</td></tr>
                <tr><td><strong>金パラ</strong></td><td>銀色（やや黄色味）</td><td>買取可</td><td>中程度（1gあたり約1,800円）</td></tr>
                <tr><td><strong>銀歯（銀合金）</strong></td><td>銀色</td><td>買取可（安い）</td><td>低い（1gあたり約100〜200円）</td></tr>
                <tr><td><strong>セラミック・レジン</strong></td><td>白色</td><td>買取不可</td><td>—</td></tr>
              </tbody>
            </table>
          </div>

          <p>見た目が金色であれば金歯の可能性が高いですが、正確な判別は買取業者に任せましょう。持ち込めば無料で判定してもらえます。</p>

          <h3>3. 身分証明書が必要</h3>

          <p>古物営業法により、買取時には<strong>本人確認書類</strong>（運転免許証、マイナンバーカード、パスポートなど）の提示が必要です。忘れずに持参しましょう。</p>

          <h3>4. 故人の金歯の売却</h3>

          <p>亡くなった方の金歯を売却することも可能です。火葬後に残った金歯を売却するケースも多くあります。特別な手続きは不要で、通常の金買取と同じ流れで売却できます。</p>

          <h2>金歯買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "金歯は本当に売れますか？",
                a: "はい、金歯は買取業者に売れます。金歯に使われている金は本物の金合金であり、K14〜K20（純度58.5%〜83.3%）の金が含まれています。金としての素材価値で買取されるため、見た目や状態に関係なく売却できます。大手の金買取業者のほとんどが金歯の買取に対応しています。",
              },
              {
                q: "金歯1本の買取価格はいくらですか？",
                a: "金歯1本あたりの買取価格は約3,000〜15,000円が目安です。金歯の大きさ（重量）と純度によって価格が異なります。クラウン（被せ物）は約1.5〜3gで約13,000〜27,000円、ブリッジ（3本連結）は約3〜8gで約27,000〜71,000円程度です（K14の場合）。2026年4月現在の金価格高騰により、以前より高値で買い取ってもらえます。",
              },
              {
                q: "金歯を売るにはどうすればいいですか？",
                a: "まず歯科医院で金歯を外してもらい（治療の一環として）、その後買取業者に持ち込みます。既に外れている金歯はそのまま買取業者に持っていけます。事前に軽く洗浄しておくと良いですが、完璧な洗浄は不要です。業者が超音波洗浄を行った上で、重量測定とX線分析で純度を判定してくれます。",
              },
              {
                q: "金歯の買取に身分証明書は必要ですか？",
                a: "はい、古物営業法により、買取時には本人確認書類（運転免許証、マイナンバーカード、パスポートなど）の提示が必要です。これは金歯に限らず、すべての貴金属買取で共通のルールです。",
              },
              {
                q: "複数の金歯をまとめて売ると有利ですか？",
                a: "はい、有利です。金歯は1本あたりの重量が小さいため、1本だけでは数千円程度になることが多いですが、複数本まとめて売ると総重量が増え、取引効率が良くなるため業者も高めの単価を提示しやすくなります。家族や親戚の金歯もまとめて持ち込むのがおすすめです。",
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
            <Link href="/articles/kowareta-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">壊れた金・刻印なしの買取ガイド</p>
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

          <p>金歯は「歯」の形をしていますが、中身は本物の金合金です。K14〜K20の金が含まれており、<strong>1本あたり約3,000〜15,000円</strong>、大型のブリッジなら<strong>10万円以上</strong>の買取価格になることもあります。</p>

          <p>2026年4月現在の金価格は歴史的な高値水準にあり、金歯の買取価格も過去最高レベルです。引き出しに眠っている金歯があれば、今が売り時です。</p>

          <p>金歯を高く売るポイントは以下の3つです。</p>

          <ol>
            <li><strong>複数本まとめて売る</strong>（家族の分も一緒に）</li>
            <li><strong>複数業者に見積もりを取る</strong>（一括査定が便利）</li>
            <li><strong>金パラや銀歯も一緒に持ち込む</strong>（まとめて査定で効率UP）</li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で金歯の買取価格を確認してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
