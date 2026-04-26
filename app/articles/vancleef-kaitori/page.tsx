import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ヴァンクリーフ&アーペルのアルハンブラはどのくらいで売れますか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月時点の買取相場目安として、ヴィンテージアルハンブラネックレス（K18YG/オニキス）で約25万〜35万円、ヴィンテージアルハンブラブレスレット5モチーフで約55万〜75万円、マジックアルハンブラネックレスで約40万〜60万円です。素材・石の種類・状態により変動します。" } },
      { "@type": "Question", name: "ヴァンクリーフの買取価格は定価の何割ですか？", acceptedAnswer: { "@type": "Answer", text: "ヴァンクリーフ&アーペルは5大ジュエラーの中でもリセールバリューが非常に高く、人気モデルは定価の50〜70%前後の買取率です。特にアルハンブラシリーズは需要が供給を大きく上回っており、高い買取率を維持しています。" } },
      { "@type": "Question", name: "ヴァンクリーフの箱や保証書がなくても売れますか？", acceptedAnswer: { "@type": "Answer", text: "買取は可能ですが、ヴァンクリーフ&アーペルの証明書（ギャランティカード）と専用ケースの有無は査定額に大きく影響します。特にギャランティカードがあると10〜20%の査定額アップが期待できます。" } },
      { "@type": "Question", name: "ヴァンクリーフの定価改定は買取価格に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ヴァンクリーフ&アーペルは毎年のように定価改定（値上げ）を行っています。定価が上がるたびに中古品の相対価格が高まるため、買取相場も連動して上昇する傾向にあります。" } },
      { "@type": "Question", name: "ヴァンクリーフのジュエリーはどこで売るのが一番高いですか？", acceptedAnswer: { "@type": "Answer", text: "ヴァンクリーフ&アーペルはブランド価値が非常に高いため、金の素材買取店よりもブランドジュエリーの買取に強い専門店の方が高値がつきます。一括査定サービスで複数業者を比較し、最高値の業者に売却するのが最も確実です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ヴァンクリーフ&アーペル買取相場ガイド — アルハンブラの価格と高く売るコツ",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "ヴァンクリーフ&アーペル（Van Cleef & Arpels）の最新買取相場をモデル別に掲載。アルハンブラ・フリヴォル・ペルレの買取価格目安、高く売るコツ、おすすめ買取業者を解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】ヴァンクリーフ&アーペル買取相場ガイド — アルハンブラの価格と高く売るコツ",
  description:
    "ヴァンクリーフ&アーペル（Van Cleef & Arpels）の最新買取相場をモデル別に掲載。アルハンブラ・フリヴォル・ペルレの買取価格目安、高く売るコツ、おすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">ヴァンクリーフ&アーペルの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ヴァンクリーフは業者によって査定額に大きな差が出ます。複数社比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function VancleefKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">ヴァンクリーフ&アーペル買取ガイド</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】ヴァンクリーフ&アーペル買取相場と高く売る方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>ヴァンクリーフ&アーペル（Van Cleef & Arpels）は1906年にパリで創業した世界5大ジュエラーのひとつです。アルハンブラに代表される四つ葉のクローバーモチーフは世界的に愛されており、<strong>リセールバリュー（再販価値）が極めて高い</strong>ことで知られています。</p>

        <p>「ヴァンクリーフのアルハンブラを売りたい」「Van Cleefの買取相場はいくら？」「フリヴォルの買取価格は？」——この記事では、ヴァンクリーフ&アーペルの買取相場をモデル別に徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>アルハンブラ・フリヴォル・ペルレの最新買取相場</li>
          <li>ヴァンクリーフのリセールバリューが高い理由</li>
          <li>石の種類（オニキス・マザーオブパール・カーネリアン等）による価格差</li>
          <li>高く売るための実践的なポイント</li>
          <li>おすすめ買取業者4社の比較</li>
        </ul>

        <h2>ヴァンクリーフ&アーペルのリセールバリューが高い理由</h2>

        <h3>世界5大ジュエラーのブランド力</h3>

        <p>ヴァンクリーフ&アーペルは、カルティエ、ハリーウィンストン、ティファニー、ブルガリと並ぶ<strong>世界5大ジュエラー</strong>のひとつです。120年以上の歴史と、ミステリーセッティングなどの独自技法により、ジュエリー愛好家から絶大な支持を受けています。</p>

        <h3>正規店での入手困難</h3>

        <p>ヴァンクリーフ&アーペルの人気モデル（特にアルハンブラ）は、<strong>正規店でも品薄状態</strong>が続いています。購入希望者がウェイティングリストに登録して数ヶ月〜1年待ちというケースも珍しくありません。この希少性が中古市場での高値を支えています。</p>

        <h3>定価の継続的な値上げ</h3>

        <p>ヴァンクリーフ&アーペルは毎年のように定価改定を行っており、2023年〜2026年の間に<strong>累計20〜30%以上の値上げ</strong>が実施されています。定価が上がるほど中古品の「お得感」が増し、買取相場も押し上げられます。</p>

        <h2>アルハンブラシリーズの買取相場（2026年4月）</h2>

        <p>アルハンブラはヴァンクリーフ&アーペルの最も代表的なコレクションです。四つ葉のクローバーモチーフのジュエリーで、1968年の誕生以来50年以上愛され続けています。</p>

        <h3>ヴィンテージアルハンブラ</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材 / 石</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ペンダント（1モチーフ）</strong></td><td>K18YG / オニキス</td><td>約25万〜35万円</td></tr>
              <tr><td><strong>ペンダント（1モチーフ）</strong></td><td>K18YG / マザーオブパール</td><td>約25万〜35万円</td></tr>
              <tr><td><strong>ペンダント（1モチーフ）</strong></td><td>K18YG / カーネリアン</td><td>約25万〜35万円</td></tr>
              <tr><td><strong>ブレスレット（5モチーフ）</strong></td><td>K18YG / マザーオブパール</td><td>約55万〜75万円</td></tr>
              <tr><td><strong>ブレスレット（5モチーフ）</strong></td><td>K18YG / オニキス</td><td>約55万〜75万円</td></tr>
              <tr><td><strong>ネックレス（10モチーフ）</strong></td><td>K18YG / マザーオブパール</td><td>約90万〜120万円</td></tr>
              <tr><td><strong>ネックレス（20モチーフ）</strong></td><td>K18YG / オニキス</td><td>約170万〜220万円</td></tr>
              <tr><td><strong>イヤリング</strong></td><td>K18YG / マザーオブパール</td><td>約40万〜55万円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>スウィートアルハンブラ</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材 / 石</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ペンダント</strong></td><td>K18YG / カーネリアン</td><td>約10万〜15万円</td></tr>
              <tr><td><strong>ペンダント</strong></td><td>K18PG / マザーオブパール</td><td>約10万〜15万円</td></tr>
              <tr><td><strong>ブレスレット</strong></td><td>K18YG / ターコイズ</td><td>約12万〜18万円</td></tr>
              <tr><td><strong>ピアス</strong></td><td>K18YG / マザーオブパール</td><td>約15万〜22万円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>マジックアルハンブラ</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材 / 石</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ネックレス（6モチーフ）</strong></td><td>K18YG / マザーオブパール</td><td>約40万〜60万円</td></tr>
              <tr><td><strong>イヤリング（2モチーフ）</strong></td><td>K18YG / マザーオブパール</td><td>約30万〜45万円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>その他の人気コレクション</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>コレクション / モデル</th>
                <th>素材</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>フリヴォル ペンダント（ミニ）</strong></td><td>K18YG + ダイヤ</td><td>約15万〜25万円</td></tr>
              <tr><td><strong>フリヴォル ネックレス（3フラワー）</strong></td><td>K18YG + ダイヤ</td><td>約40万〜60万円</td></tr>
              <tr><td><strong>フリヴォル イヤリング（ミニ）</strong></td><td>K18YG + ダイヤ</td><td>約25万〜40万円</td></tr>
              <tr><td><strong>ペルレ クルール リング</strong></td><td>K18YG + カーネリアン</td><td>約8万〜14万円</td></tr>
              <tr><td><strong>ペルレ シニアチュール リング</strong></td><td>K18YG</td><td>約5万〜10万円</td></tr>
              <tr><td><strong>ドゥパピヨン ダイヤネックレス</strong></td><td>K18WG + ダイヤ</td><td>約80万〜120万円</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p><strong>注意：</strong>上記はあくまで目安です。買取価格は石の種類・状態・付属品の有無・サイズにより変動します。特にマザーオブパールやカーネリアンの欠けは減額対象になります。</p>
        </blockquote>

        <CtaBox />

        <h2>石の種類による買取価格の違い</h2>

        <p>ヴァンクリーフ&アーペルのアルハンブラは使用される石の種類によって定価と買取価格が異なります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>石の種類</th>
                <th>特徴</th>
                <th>人気度</th>
                <th>買取への影響</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>マザーオブパール（白蝶貝）</strong></td><td>白い輝きが上品</td><td>最も人気</td><td>安定した高値</td></tr>
              <tr><td><strong>オニキス（黒）</strong></td><td>シックで男女兼用</td><td>高い</td><td>マザーオブパールと同等</td></tr>
              <tr><td><strong>カーネリアン（赤褐色）</strong></td><td>温かみのある色合い</td><td>高い</td><td>安定した需要</td></tr>
              <tr><td><strong>ターコイズ（水色）</strong></td><td>爽やかな印象</td><td>限定的</td><td>希少なため高値になることも</td></tr>
              <tr><td><strong>マラカイト（緑）</strong></td><td>鮮やかな緑</td><td>個性的</td><td>モデルにより差あり</td></tr>
              <tr><td><strong>ダイヤモンド</strong></td><td>最高級ライン</td><td>非常に高い</td><td>最も高額</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>石の状態は重要です。</strong>マザーオブパールやカーネリアンは天然石のため、欠け・ひび・変色があると減額対象になります。保管時は専用ケースに入れ、衝撃や直射日光を避けてください。</p>

        <h2>ヴァンクリーフを高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>ヴァンクリーフに強いブランド買取店を選ぶ</strong>
            <p>ヴァンクリーフ&アーペルはブランド価値が買取価格の大部分を占めます。<strong>5大ジュエラーの査定経験が豊富な専門店</strong>に依頼することで、適正な高額査定が期待できます。金の素材買取店では素材価値のみの評価になるため注意してください。</p>
          </li>
          <li>
            <strong>ギャランティカード（証明書）を必ず揃える</strong>
            <p>ヴァンクリーフ&アーペルのギャランティカードは真贋証明として非常に重要です。<strong>カードの有無で10〜20%の価格差</strong>が出ることがあります。紛失している場合はヴァンクリーフのブティックで相談してみてください。</p>
          </li>
          <li>
            <strong>天然石の状態を保護する</strong>
            <p>マザーオブパール・カーネリアン・ターコイズなどの天然石は、衝撃や温度変化に弱い素材です。保管時は専用ケースに入れ、他のジュエリーと接触しないようにしましょう。</p>
          </li>
          <li>
            <strong>定価改定前に売却を検討する</strong>
            <p>ヴァンクリーフは定期的に定価改定を行います。定価が上がった直後は中古品の相対価格が上がるため、<strong>値上げ情報をキャッチしたら売却のタイミング</strong>として検討する価値があります。</p>
          </li>
          <li>
            <strong>一括査定で複数業者を比較する</strong>
            <p>ヴァンクリーフ&アーペルは業者によって査定額の差が大きいブランドです。ある業者で50万円の査定が、別の業者で70万円になることも珍しくありません。<strong>最低3社には見積もりを取る</strong>ことをおすすめします。</p>
          </li>
        </ol>

        <h2>4社比較 — ヴァンクリーフ買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>ヴァンクリーフ買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>複数業者の査定額を一括比較。最高値が簡単にわかる</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>全国600店舗以上。即日現金化可能</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>自宅完結。高額ジュエリーの出張査定に対応</td>
                <td>自宅で完結したい</td>
              </tr>
              <tr>
                <td><strong>ティファナ</strong></td>
                <td>出張/店頭/宅配</td>
                <td>3つの方法から選択。ハイブランドジュエリーの査定実績あり</td>
                <td>方法を選びたい</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>ヴァンクリーフ買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "ヴァンクリーフ&アーペルのアルハンブラはどのくらいで売れますか？",
              a: "2026年4月時点の買取相場目安として、ヴィンテージアルハンブラペンダント（K18YG/オニキス）で約25万〜35万円、5モチーフブレスレットで約55万〜75万円、10モチーフネックレスで約90万〜120万円です。石の種類・状態・付属品により変動します。",
            },
            {
              q: "ヴァンクリーフの買取価格は定価の何割ですか？",
              a: "人気モデルは定価の50〜70%前後の買取率です。特にアルハンブラシリーズは正規店でも品薄のため、中古市場での需要が非常に高く、高い買取率を維持しています。",
            },
            {
              q: "ヴァンクリーフの箱や保証書がなくても売れますか？",
              a: "買取は可能ですが、ギャランティカード（証明書）と専用ケースの有無は査定額に大きく影響します。特にギャランティカードがあると10〜20%の査定額アップが期待できます。高額モデルほど影響が大きくなります。",
            },
            {
              q: "マザーオブパールが欠けているのですが、買取できますか？",
              a: "買取は可能ですが、天然石の欠け・ひび・変色は減額対象になります。マザーオブパールの小さな欠けであれば10〜20%程度の減額、大きな欠けや複数箇所の場合は30%以上の減額になることがあります。",
            },
            {
              q: "ヴァンクリーフとカルティエ、どちらがリセールバリューが高いですか？",
              a: "一般的にヴァンクリーフ&アーペルの方がリセールバリューが高い傾向にあります。特にアルハンブラシリーズは正規店での入手困難さから、中古市場での価格維持力が非常に強く、定価の50〜70%の買取率を維持しています。",
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
          <Link href="/articles/cartier-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">カルティエ買取相場ガイド</p>
          </Link>
          <Link href="/articles/bvlgari-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">ブルガリ買取相場ガイド</p>
          </Link>
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K18（18金）買取相場ガイド</p>
          </Link>
          <Link href="/articles/diamond-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">ダイヤモンド・宝石買取ガイド</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>ヴァンクリーフ&アーペル（Van Cleef & Arpels）は5大ジュエラーの中でも<strong>リセールバリューが最も高い</strong>ブランドのひとつです。特にアルハンブラシリーズは正規店での入手困難さから中古市場での需要が極めて高く、定価の50〜70%の買取率を維持しています。</p>

        <p>2026年4月現在、金相場の高騰と定価改定の効果により、ヴァンクリーフの買取相場は上昇傾向です。ヴィンテージアルハンブラ20モチーフネックレスは約170万〜220万円、5モチーフブレスレットは約55万〜75万円の高額買取が期待できます。</p>

        <p>ヴァンクリーフを最高値で売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>ハイジュエリーの査定に強い専門店に依頼する</strong>（一括査定で複数比較）</li>
          <li><strong>ギャランティカード・専用ケースを揃える</strong>（10〜20%の差が出る）</li>
          <li><strong>天然石の状態を保護し、早めに売却を検討する</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのヴァンクリーフの買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
