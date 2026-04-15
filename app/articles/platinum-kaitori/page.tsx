import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】プラチナ買取相場ガイド — Pt900/Pt950/Pt1000の価格と高く売る方法",
  description:
    "プラチナ（Pt1000/Pt950/Pt900/Pt850）の最新買取相場を純度別に掲載。2026年のプラチナ価格高騰の背景、製品別（指輪・ネックレス・時計）の買取価格目安、金との違い・見分け方、おすすめ買取業者4社比較を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">プラチナ製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">プラチナの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
        name: "プラチナの買取価格は1gいくらですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026年4月現在、Pt1000（純プラチナ）の買取価格は1gあたり約5,200〜5,500円、Pt900は約4,700〜5,000円、Pt850は約4,400〜4,700円が目安です。",
        },
      },
      {
        "@type": "Question",
        name: "プラチナと金ではどちらが高いですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "2026年現在は金の方がプラチナよりも高価です。K24（純金）が1gあたり約15,200円に対し、Pt1000（純プラチナ）は約5,300円と、金の約3分の1の価格です。かつてはプラチナの方が高い時代もありましたが、2015年頃から逆転しています。",
        },
      },
      {
        "@type": "Question",
        name: "Pt900とPt950の違いは何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "数字はプラチナの純度を表します。Pt900は純度90%、Pt950は純度95%です。Pt950の方がプラチナ含有率が高いため、1gあたりの買取価格も高くなります。日本のジュエリーではPt900とPt850が一般的で、海外ではPt950が多く使われています。",
        },
      },
      {
        "@type": "Question",
        name: "プラチナの刻印がない製品も買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。ただし、プラチナは見た目がシルバーやホワイトゴールドと似ているため、素人目では判別が困難です。業者に持ち込めば無料で判定してもらえます。",
        },
      },
      {
        "@type": "Question",
        name: "プラチナは今後値上がりしますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "水素エネルギー社会の進展に伴い、燃料電池触媒としてのプラチナ需要は中長期的に拡大が見込まれています。また、鉱山の新規開発が難しく供給が限られていることも価格を支える要因です。ただし、価格予測は不確実であり、現在の価格に満足できるなら売却も合理的な判断です。",
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

export default function PlatinumKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">プラチナ買取ガイド</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】プラチナ買取相場ガイド — 純度別の価格と高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新：2026年4月13日</p>

          <p>プラチナ（白金）は、結婚指輪やダイヤモンドリングに使われる高級貴金属です。「プラチナのリングを売りたい」「Pt900の刻印があるけど、いくらで売れるのか」「金との価格差が気になる」——この記事では、プラチナ買取に関するあらゆる疑問を解決します。</p>

          <p>2026年現在、プラチナ価格は上昇トレンドにあります。水素エネルギー社会への移行に伴う産業需要の拡大、南アフリカの鉱山供給の制約、投資需要の増加が価格を押し上げています。</p>

          <p>この記事を読めば以下のことがわかります。</p>

          <ul>
            <li>プラチナの純度別（Pt1000/Pt950/Pt900/Pt850）買取相場</li>
            <li>2026年プラチナ価格高騰の背景</li>
            <li>プラチナ製品別（指輪・ネックレス・時計）の買取価格</li>
            <li>金とプラチナの違い・見分け方</li>
            <li>おすすめ買取業者4社の比較</li>
          </ul>

          <h2>プラチナ買取相場 — 純度別の最新価格（2026年4月）</h2>

          <p>プラチナ製品は純度によって価格が異なります。2026年4月現在の純度別買取相場は以下のとおりです。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>純度表記</th>
                  <th>プラチナ含有率</th>
                  <th>1gあたり買取価格（税込目安）</th>
                  <th>主な用途</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Pt1000（純プラチナ）</strong></td><td>99.95%以上</td><td><strong>約5,200〜5,500円</strong></td><td>インゴット、一部ジュエリー</td></tr>
                <tr><td><strong>Pt950</strong></td><td>95.0%</td><td>約4,900〜5,200円</td><td>海外ジュエリー、ハイブランド</td></tr>
                <tr><td><strong>Pt900</strong></td><td>90.0%</td><td>約4,700〜5,000円</td><td>日本のジュエリー全般</td></tr>
                <tr><td><strong>Pt850</strong></td><td>85.0%</td><td>約4,400〜4,700円</td><td>ネックレスチェーン</td></tr>
              </tbody>
            </table>
          </div>

          <p>日本で最も多く流通しているプラチナジュエリーは<strong>Pt900</strong>です。指輪や婚約指輪に多く使われています。ネックレスのチェーン部分には<strong>Pt850</strong>が使われることが多く、これは強度を確保するためです。</p>

          <p>海外のハイブランド（カルティエ、ティファニー、ハリーウィンストンなど）では<strong>Pt950</strong>が主流です。</p>

          <h3>プラチナ価格の推移（2020年〜2026年）</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>年</th>
                  <th>Pt1000 1gあたり買取価格（年間平均目安）</th>
                  <th>前年比</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2020年</td><td>約2,800円</td><td>—</td></tr>
                <tr><td>2021年</td><td>約3,500円</td><td>+25.0%</td></tr>
                <tr><td>2022年</td><td>約3,800円</td><td>+8.6%</td></tr>
                <tr><td>2023年</td><td>約4,200円</td><td>+10.5%</td></tr>
                <tr><td>2024年</td><td>約4,600円</td><td>+9.5%</td></tr>
                <tr><td>2025年</td><td>約5,000円</td><td>+8.7%</td></tr>
                <tr><td>2026年（1〜4月）</td><td>約5,300円</td><td>+6.0%</td></tr>
              </tbody>
            </table>
          </div>

          <p>プラチナの買取価格は2020年の約2,800円から2026年の約5,300円へと、<strong>6年間で約1.9倍</strong>に上昇しています。金の2.3倍の上昇率には及びませんが、着実な上昇トレンドが続いています。</p>

          <h2>2026年プラチナ価格高騰の背景</h2>

          <p>プラチナ価格が上昇を続けている背景には、以下の要因があります。</p>

          <h3>1. 水素エネルギー社会への移行</h3>

          <p>プラチナは<strong>燃料電池の触媒</strong>として不可欠な金属です。水素自動車（FCV）や定置用燃料電池の普及に伴い、プラチナの産業需要は今後大幅に拡大すると見込まれています。</p>

          <p>トヨタのMIRAI、ホンダのCR-V FCEVなど、燃料電池車の市販モデルが増えており、1台あたり約30〜60gのプラチナが使用されています。水素社会の実現が進めば、プラチナ需要は飛躍的に増加する可能性があります。</p>

          <h3>2. 鉱山供給の制約</h3>

          <p>世界のプラチナ生産の約70%は<strong>南アフリカ</strong>に集中しています。南アフリカでは電力不足（ロードシェディング）、老朽化した鉱山設備、労働問題などにより、生産量が伸び悩んでいます。新規鉱山の開発も困難であり、供給制約が価格を下支えしています。</p>

          <h3>3. 投資需要の増加</h3>

          <p>プラチナの価格は金の約3分の1まで割安になっており、「金に対して割安なプラチナ」に注目する投資家が増えています。プラチナETF（上場投資信託）への資金流入も増加傾向にあります。</p>

          <h3>4. 自動車触媒需要の回復</h3>

          <p>プラチナはディーゼル車の排ガス浄化触媒として大量に使用されています。欧州を中心にディーゼル車の販売は縮小傾向ですが、一方でガソリン車向けにもプラチナが代替使用されるようになっており、自動車触媒としての需要は底堅く推移しています。</p>

          <CtaBox />

          <h2>プラチナ製品別の買取価格目安</h2>

          <h3>プラチナ指輪・リング</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>純度</th>
                  <th>重量の目安</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>結婚指輪（細め）</td><td>Pt900</td><td>3〜5g</td><td>約14,000〜24,000円</td></tr>
                <tr><td>結婚指輪（標準）</td><td>Pt900</td><td>5〜8g</td><td>約24,000〜38,000円</td></tr>
                <tr><td>婚約指輪（ダイヤ付）</td><td>Pt900</td><td>4〜6g（枠のみ）</td><td>約19,000〜29,000円＋ダイヤの価値</td></tr>
                <tr><td>ファッションリング</td><td>Pt900</td><td>5〜15g</td><td>約24,000〜72,000円</td></tr>
                <tr><td>メンズリング</td><td>Pt900</td><td>10〜25g</td><td>約48,000〜120,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>ダイヤモンドが付いたプラチナリングの場合、プラチナの素材価値に加えて<strong>ダイヤモンドの価値が上乗せ</strong>されます。ダイヤモンドの評価は4C（カラット・カット・クラリティ・カラー）によって大きく異なるため、鑑定書があれば持参しましょう。</p>

          <h3>プラチナネックレス</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>純度</th>
                  <th>重量の目安</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>チェーンネックレス（細め）</td><td>Pt850</td><td>3〜5g</td><td>約13,000〜22,000円</td></tr>
                <tr><td>チェーンネックレス（太め）</td><td>Pt850</td><td>8〜15g</td><td>約35,000〜66,000円</td></tr>
                <tr><td>ペンダントネックレス</td><td>Pt900</td><td>5〜10g</td><td>約24,000〜48,000円</td></tr>
                <tr><td>喜平ネックレス</td><td>Pt850</td><td>30〜50g</td><td>約132,000〜220,000円</td></tr>
              </tbody>
            </table>
          </div>

          <h3>プラチナ時計</h3>

          <p>プラチナケースの高級時計は、ブランド価値が大きく影響するため、素材価値だけでは買取価格を算出できません。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ブランド・モデル例</th>
                  <th>プラチナ素材価値目安</th>
                  <th>実際の買取相場（ブランド価値込み）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ロレックス デイデイト（Pt950）</td><td>約15〜25万円</td><td>約300〜800万円</td></tr>
                <tr><td>パテックフィリップ カラトラバ（Pt950）</td><td>約20〜30万円</td><td>約500〜2,000万円</td></tr>
                <tr><td>ノーブランド プラチナ時計</td><td>約10〜20万円</td><td>約10〜25万円（素材価値中心）</td></tr>
              </tbody>
            </table>
          </div>

          <p>ブランド時計の場合は、金属買取業者よりも<strong>時計専門の買取業者の方が高値</strong>がつくことが多いです。両方に見積もりを取って比較しましょう。</p>

          <h2>金とプラチナの違い・見分け方</h2>

          <p>金とプラチナは見た目が異なりますが、ホワイトゴールド（K18WG）とプラチナは非常によく似ています。以下の方法で見分けることができます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>金（K24/K18）</th>
                  <th>プラチナ（Pt900/Pt950）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>色</strong></td><td>黄金色（K18YG）/ 銀白色（K18WG）</td><td>銀白色（やや暗め）</td></tr>
                <tr><td><strong>比重</strong></td><td>K24: 19.3 / K18: 15.5</td><td>Pt900: 19.9 / Pt950: 20.3</td></tr>
                <tr><td><strong>硬度</strong></td><td>K24は柔らかい / K18は中程度</td><td>やや硬い</td></tr>
                <tr><td><strong>変色</strong></td><td>金は変色しない / K18WGはメッキ剥がれあり</td><td>変色しない</td></tr>
                <tr><td><strong>磁石反応</strong></td><td>反応しない</td><td>反応しない</td></tr>
                <tr><td><strong>刻印</strong></td><td>K24, K18, 750 など</td><td>Pt900, Pt950, Pt850 など</td></tr>
                <tr><td><strong>価格（2026年4月）</strong></td><td>K24: 約15,200円/g</td><td>Pt1000: 約5,300円/g</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>最も確実な見分け方は刻印の確認です。</strong>プラチナには「Pt」の刻印が入っています。刻印が見えない場合や判別が難しい場合は、買取業者に持ち込めばX線蛍光分析装置で正確に判定してもらえます（大手業者なら無料）。</p>

          <h3>K18WG（ホワイトゴールド）との見分け方</h3>

          <p>K18WG（18金ホワイトゴールド）はプラチナに似た銀白色ですが、以下の違いがあります。</p>

          <ul>
            <li><strong>刻印：</strong>K18WGは「K18WG」「750」、プラチナは「Pt900」「Pt950」</li>
            <li><strong>重さ：</strong>プラチナの方がわずかに重い（同じサイズなら持ち比べで違いがわかることも）</li>
            <li><strong>メッキ剥がれ：</strong>K18WGは表面のロジウムメッキが経年で剥がれ、黄色っぽくなることがある。プラチナは変色しない</li>
            <li><strong>価格差：</strong>2026年4月時点ではK18（約11,400円/g）の方がPt900（約4,800円/g）より高い</li>
          </ul>

          <CtaBox />

          <h2>4社比較 — プラチナ買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>プラチナ買取の特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>複数業者のプラチナ買取価格を一括比較。最高値が簡単にわかる</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>プラチナの純度をその場で測定。即現金化。Pt850からOK</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>自宅でプラチナジュエリーの査定が完結。出張費・査定料無料</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>3つの方法から選択可能。プラチナ＋金をまとめて査定OK</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>プラチナ買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "プラチナの買取価格は1gいくらですか？",
                a: "2026年4月現在、Pt1000（純プラチナ）の買取価格は1gあたり約5,200〜5,500円、Pt900は約4,700〜5,000円、Pt850は約4,400〜4,700円が目安です。ただし、国際プラチナ価格と為替レートにより毎日変動します。",
              },
              {
                q: "プラチナと金ではどちらが高いですか？",
                a: "2026年現在は金の方がプラチナよりも高価です。K24（純金）が1gあたり約15,200円に対し、Pt1000（純プラチナ）は約5,300円と、金の約3分の1の価格です。かつてはプラチナの方が高い時代もありましたが、2015年頃から逆転しています。ただし、ブランドジュエリーの場合はデザインやブランド価値が加算されるため、単純な素材比較だけでは判断できません。",
              },
              {
                q: "Pt900とPt950の違いは何ですか？",
                a: "数字はプラチナの純度を表します。Pt900は純度90%（残り10%はパラジウムなど）、Pt950は純度95%です。Pt950の方がプラチナ含有率が高いため、1gあたりの買取価格も高くなります。日本のジュエリーではPt900とPt850が一般的で、海外のハイブランドではPt950が多く使われています。",
              },
              {
                q: "プラチナの刻印がない製品も買取できますか？",
                a: "はい、刻印がなくても買取は可能です。買取業者がX線蛍光分析装置（XRF）で純度を測定してくれます。ただし、プラチナは見た目がシルバーやホワイトゴールドと似ているため、素人目では判別が困難です。業者に持ち込めば無料で判定してもらえます。",
              },
              {
                q: "プラチナは今後値上がりしますか？",
                a: "水素エネルギー社会の進展に伴い、燃料電池触媒としてのプラチナ需要は中長期的に拡大が見込まれています。また、鉱山の新規開発が難しく供給が限られていることも価格を支える要因です。ただし、価格予測は不確実であり、現在の価格に満足できるなら売却も合理的な判断です。",
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
            <Link href="/articles/diamond-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">ダイヤモンド・宝石買取ガイド</p>
            </Link>
            <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">相場情報</span>
              <p className="text-sm font-bold mt-1">金買取相場一覧 — K24/K18/K14の1gあたり価格</p>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">方法比較</span>
              <p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p>
            </Link>
          </div>

          <h2>まとめ</h2>

          <p>プラチナは結婚指輪やダイヤモンドジュエリーに最も多く使われている貴金属です。純度別にPt1000、Pt950、Pt900、Pt850があり、日本ではPt900とPt850が主流です。</p>

          <p>2026年4月現在、プラチナの買取相場はPt1000で<strong>1gあたり約5,200〜5,500円</strong>と上昇トレンドにあります。水素エネルギー社会への移行に伴う需要拡大が中長期的に価格を支えると見られていますが、現在の価格水準でも2020年比で約1.9倍に上昇しており、売却を検討するには十分な水準です。</p>

          <p>プラチナを高く売るためには、<strong>複数業者への相見積もり</strong>が最も重要です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのプラチナ製品の価値を確認してみてください。</p>
        </article>
      </div>
    </>
  );
}
