import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "自宅で金の重さを正確に測る方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "デジタルキッチンスケール（0.1g単��）で重量を測定できます。ただし、宝石やチェーンの留め具など金以外の素材が含まれる場合は正確な金の重量とは異なります。より正確に知りたい場合は、買取業者の無料査定を利用しましょう。" } },
      { "@type": "Question", name: "金の比重を使って純度を調べる方法は？", acceptedAnswer: { "@type": "Answer", text: "水を使った比重測定法で金の純度を推定できます。金製品を空気中で計量し、次に水中で計量して、その差から比重を計算します。K24（純金）の比重は19.3、K18は約15.2〜16.2、K14は約13.0〜14.5です。" } },
      { "@type": "Question", name: "金のネックレスの重さはどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "K18チェーンネックレス（細め）で約3〜5g、太めで約8〜15g、喜平ネックレス（50cm）で約30〜50gが一般的な目安です。重量は太さ・長さ・デザインにより大きく異なります。" } },
      { "@type": "Question", name: "金の重さを測るのにおすすめの秤（はかり）は？", acceptedAnswer: { "@type": "Answer", text: "0.01g単位で計測できるデジタルジュエリースケール（精密秤）がおすすめです。Amazonなどで1,000〜3,000円程度で購入できます。キッチンスケール（0.1g単位）でも簡易的な測定は可能です。" } },
      { "@type": "Question", name: "宝石付きのジュエリーは金の重さをどう測ればいいですか？", acceptedAnswer: { "@type": "Answer", text: "宝石付きジュエリーの場合、自宅で金部分だけの重さを正確に測��ことは困難です。買取業者はX線蛍光分析装置で金属部分の純度を特定し、宝石の重量を差し引いて計算します。買取業者の無料査定を利用するのが最も正確です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新���金の重さの測り方ガイド — 自宅でグラムを量る方法と買取価格の計算",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "金の重さを自宅で測る方法を徹底解説。デジタルスケールの使い方、水を使った比重測定法、金製品の重量目安、買取価格の計算方法までわかりやすく紹介。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の重さの測り方ガイド — 自宅でグラムを量る方法と買取価格の計算",
  description: "金の重さを自宅で測る方法を徹底解説。デジタルスケールの使い方、水を使った比重測定法、金製品の重量目安、買取価格の計算方法までわかりやすく紹介。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">正確な金の重量と買取価格を知りたい方へ</h3>
      <p className="text-sm text-warm-gray text-center mb-4">買取業者なら精密機器で正確に計量・査定してくれます。査定は無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinOmosaHakrikataPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の重さの測り方</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の重さの測り方ガイド — 自宅でグラムを量る方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>金の買取価格は「重量（g）x 1gあたりの相場」で計算されます。つまり、<strong>金の重さを知ることは、買取価格を知る第一歩</strong>です。</p>

        <p>「手持ちのK18ネックレスは何グラムあるんだろう？」「自宅で金の重さを測る方法はある？」「買取業者はどうやって計量しているの？」——この記事では、金の重さの測り方から買取価格の計算方法まで、実践的に解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>自宅で金の重さを測る3つの方法</li>
          <li>水を使った比重測定で純度を推定する方法</li>
          <li>金製品の種類別の重量目安</li>
          <li>重量から買取価格を概算する計算方法</li>
          <li>買取業者が使う精密計量機器の仕組み</li>
        </ul>

        <h2>自宅で金の重さを測る3つの方法</h2>

        <h3>方法1：デジタルスケール（最も手軽）</h3>

        <p>最も手軽で実用的な方法は、<strong>デジタルスケール（電子秤）</strong>を使うことです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>スケールの種類</th>
                <th>精度</th>
                <th>価格帯</th>
                <th>おすすめ用途</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ジュエリースケール（精密秤）</strong></td><td>0.01g単位</td><td>1,000〜3,000円</td><td>軽量なリング・ピアスの計量に最適</td></tr>
              <tr><td><strong>キッチンスケール</strong></td><td>0.1〜1g単位</td><td>1,000〜2,000円</td><td>ネックレス・ブレスレットなど数g以上の計量に</td></tr>
              <tr><td><strong>郵便はかり</strong></td><td>1g単位</td><td>500〜1,500円</td><td>インゴットなど重量のある品の計量に</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>おすすめは0.01g単位のジュエリースケールです。</strong>Amazonや楽天で「ジュエリースケール 0.01g」で検索すると、1,000〜3,000円程度で購入できます。金の買取価格は1gあたり1万円以上のため、0.1gの差でも1,000円以上の違いになります。</p>

        <h3>方法2：水を使った比重測定法</h3>

        <p>水を使って金の<strong>比重（密度）</strong>を測定��る方法です。金の比重は純度によって異なるため、この方法で<strong>おおよその純度を推定</strong>できます。</p>

        <p><strong>準備するもの：</strong></p>
        <ul>
          <li>デジタルスケール（0.1g以上の精度）</li>
          <li>水を入れるコップまたは容器</li>
          <li>細い糸（ミシン糸など）</li>
          <li>水（水道水でOK）</li>
        </ul>

        <p><strong>手順：</strong></p>
        <ol>
          <li>金製品の重さを空気中で量り、メモする（例：10.0g）</li>
          <li>コップに水を入れ、スケールに乗せ、表示を0gにリセット（風袋引き）</li>
          <li>金製品を糸で吊るし、水中に沈める（容器の底に触れないように注意）</li>
          <li>水中での重さの表示をメモする（例：0.65g）</li>
          <li>比重を計算する：空気中の���さ / 水中表示 = 10.0 / 0.65 = 約15.4</li>
        </ol>

        <h3>純度別の比重一覧</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>比重の目安</th>
                <th>金の含有率</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>19.3</td><td>99.99%</td></tr>
              <tr><td><strong>K22</strong></td><td>17.5〜18.5</td><td>91.7%</td></tr>
              <tr><td><strong>K18</strong></td><td>15.2〜16.2</td><td>75.0%</td></tr>
              <tr><td><strong>K14</strong></td><td>13.0〜14.5</td><td>58.5%</td></tr>
              <tr><td><strong>K10</strong></td><td>11.5〜12.5</td><td>41.7%</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p><strong>注意：</strong>宝石が付いている場合や、中空構造のジュエリーでは正確な比重が測れません。宝石の中には真珠やサンゴなど水に弱いものもあるため、宝石付きジュエリーにはこの方法を使わないでください。</p>
        </blockquote>

        <h3>方法3：体積から計算する方法（インゴット向け）</h3>

        <p>金地金（インゴット）など形状が単純な場合は、<strong>体積から重さを計算</strong>できます。</p>

        <p>計算式：<strong>重さ（g）= 体積（cm3）x 金の比重</strong></p>

        <p>例えば、K24の金地金で縦2cm x 横1cm x 高さ0.5cm = 体積1.0cm3の場合：</p>
        <p>重さ = 1.0 x 19.3 = <strong>19.3g</strong></p>

        <p>ただし、この方法は形状が正確に測れる場合に限られます。ジュエリーなど複雑な形状には不向きです。</p>

        <CtaBox />

        <h2>金製品の種類別 重量の目安</h2>

        <p>「自宅にスケールがない」という方のために、金製品の種類別の一般的な重量目安を紹介します。</p>

        <h3>K18ネックレス</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>種類</th>
                <th>���量の目安</th>
                <th>買取価格の目安（2026年4月）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>細いチェーンネックレス</td><td>3〜5g</td><td>約34,000〜57,000円</td></tr>
              <tr><td>太めのチェーンネックレス</td><td>8〜15g</td><td>約91,000〜171,000円</td></tr>
              <tr><td>ペンダントネックレス</td><td>5〜10g</td><td>約57,000〜114,000円</td></tr>
              <tr><td>喜平ネックレス（50cm）</td><td>30〜50g</td><td>約342,000〜570,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K18指輪・リング</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>種類</th>
                <th>重量の目安</th>
                <th>買取価格の目安（2026年4月）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>細身のリング</td><td>2〜4g</td><td>約23,000〜46,000円</td></tr>
              <tr><td>結婚指輪</td><td>3〜6g</td><td>約34,000〜68,000円</td></tr>
              <tr><td>印台リング（メンズ）</td><td>15〜30g</td><td>約171,000〜342,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K18ブレスレット</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>種類</th>
                <th>重量の目安</th>
                <th>買取価格の目安（2026年4月）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>細めチェーンブレスレット</td><td>3〜5g</td><td>約34,000〜57,000円</td></tr>
              <tr><td>喜平ブレスレット</td><td>20〜50g</td><td>約228,000〜570,000円</td></tr>
              <tr><td>バングル</td><td>10〜30g</td><td>約114,000〜342,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>金地金（インゴット）</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>サイズ</th>
                <th>重量</th>
                <th>買取価格の目安（2026年4月）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>5gバー</td><td>5g</td><td>約76,000〜77,000円</td></tr>
              <tr><td>10gバー</td><td>10g</td><td>約152,000〜154,000円</td></tr>
              <tr><td>100gバー</td><td>100g</td><td>約1,520,000〜1,540,000円</td></tr>
              <tr><td>1kgバー</td><td>1,000g</td><td>約15,200,000〜15,400,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h2>重量から買取価格を計算する方法</h2>

        <p>金の買取価格は以下の計算式で概算できます。</p>

        <p><strong>買取価格 = 金の重量（g）x 純度の割合 x K24の1gあたり買取相場</strong></p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>純度の割合</th>
                <th>1gあたり買取相場の目安（2026年4月）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24</strong></td><td>99.99%</td><td>約15,200円</td></tr>
              <tr><td><strong>K18</strong></td><td>75.0%</td><td>約11,400円</td></tr>
              <tr><td><strong>K14</strong></td><td>58.5%</td><td>約8,900円</td></tr>
              <tr><td><strong>K10</strong></td><td>41.7%</td><td>約6,300円</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>計算例：</strong>K18のネックレス（10g）の場合</p>
        <p>10g x 11,400円/g = <strong>約114,000円</strong></p>

        <p>これはあくまで素材としての概算��す。実際の買取価格は業者のマージンや手数料、ブランド品であればブランド価値の上乗せにより変動します。</p>

        <h2>買取��者が使う計量・分析機器</h2>

        <p>買取業者では以下の専門機器を使って、正確な重量と純度を測定します。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>機器</th>
                <th>用途</th>
                <th>精度</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>電子天秤（精密秤）</strong></td><td>重量の正確な測定</td><td>0.01g単位</td></tr>
              <tr><td><strong>X線蛍光分析装置（XRF）</strong></td><td>非破壊で金属の組成・純度を特定</td><td>純度0.1%単位</td></tr>
              <tr><td><strong>比重計</strong></td><td>水を使った比重測定</td><td>比重0.01単位</td></tr>
              <tr><td><strong>試金石</strong></td><td>金属の硬度・色味で純度を推定</td><td>おおよその判定</td></tr>
            </tbody>
          </table>
        </div>

        <p>大手買取業者（買取大吉、なんぼやなど）では<strong>X線蛍光分析装置（XRF）</strong>を導入しています。これは金属を傷つけずに純度を特定できる装置で、最も正確な方法です。査定は無料なので、自宅で測った概算値と比較してみることをおすすめします。</p>

        <CtaBox />

        <h2>金の重さ測定の注意点</h2>

        <ul>
          <li><strong>宝石付きジュエリー：</strong>ダイヤモンドやルビーなどの宝石の重さは金の重さに含まれません。自宅では金部分だけの重さを分離して測ることは困難です</li>
          <li><strong>金メッキ製品：</strong>「K18GP」「K18GF」は金メッキ・金張りであり、金の含有量は極めて少ない。比重測定をすると金より軽い値が出ます</li>
          <li><strong>中空構造：</strong>一部のジュエリーは中が空洞になっています。見た目ほど重くないことがあります</li>
          <li><strong>留め具や接合部：</strong>ネックレスの留め具（クラスプ）やバネ部分は、本体と異なる素材が使われていることがあります</li>
          <li><strong>スケールの校正：</strong>デジタルスケールは使用前に0g校正を行い、水平な場所に置いて計量してください</li>
        </ul>

        <h2>金の重さに関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "自宅で金の重さを正確��測る方法はありますか？", a: "デジタルキッチンスケール（0.1g単位）で重量を測定できます。より正確に知りたい場合は、0.01g単位のジュエリースケール（1,000〜3,000円程度）を使いましょう。ただし、宝石付きの場合は金部分だけの���量を測るのは困難なため、買取業者の無料査定を利用するのが確実です。" },
            { q: "金の比重を使って純度を調べる方法は？", a: "水を使った比重測定法で金の純度を推定できます。金製品を空���中で計量し、次に水中での重さの変化から比重を算出します。K24（純金）の比重は19.3、K18は約15.2〜16.2です。ただし、宝石付きや中空構造のジュエリーでは正確な比重が測れません。" },
            { q: "金のネックレスの重さはどのくらいですか？", a: "K18チェーンネックレス（細め）で約3〜5g、太めで約8〜15g、喜平ネックレス（50cm）で約30〜50gが一般的な目安です。重量はチェーンの太さ・長さ・編み方（カットの種類）により大きく異なります。" },
            { q: "金の重さを測るのにおすすめの秤は？", a: "0.01g単位で計測できるデジタルジュエリースケールがおすすめです。Amazonなどで1,000〜3,000円程度で購入できます。金の買取価格は1gあたり1万円以上のため、精度の高い秤を使うことで概算の精度が上がります。" },
            { q: "宝石付きのジュエリーの金の重さはどう測る？", a: "自宅で金部分だけの重さを正確に測ることは困難です。買取業者はX線蛍光分析装置（XRF）で金属部分の純度を特定し、宝石の重量を差し引いて計算します。大手買取業者の査定は無料なので、プロに任せるのが最も正確です。" },
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
          <Link href="/articles/kin-jundo-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">知識ガイド</span>
            <p className="text-sm font-bold mt-1">金の純度の見分け方</p>
          </Link>
          <Link href="/articles/kin-nisemono-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">知識ガイド</span>
            <p className="text-sm font-bold mt-1">金の偽物の見分け方</p>
          </Link>
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K18（18金）買取相場ガイド</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>金の重さを知ることは、買取価格の概算を把握する第一歩です。自宅ではデジタルスケール（0.01g単位のジュ���リースケール推奨）で重量を測定し、純度別の1gあたり相場を掛けることで概算価格が計算できます。</p>

        <p>ただし、正確な買取価格を知るには、<strong>買取業者の無料査定が最も確実</strong>です。業者はX線蛍光分析装置（XRF）や精密天秤を使って、正確な純度と重量を測定してくれます。</p>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で正確な買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
