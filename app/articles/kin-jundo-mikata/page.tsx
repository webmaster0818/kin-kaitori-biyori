import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "K18とK24の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "K24は金の純度99.99%以上の「純金」、K18は純度75%の「金合金」です。K24は柔らかく資産用（インゴット・金貨）に使われ、K18は硬く加工しやすいためジュエリーに多く使われます。買取価格はK24の方が約33%高くなります。" } },
      { "@type": "Question", name: "金の刻印がない場合でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても売れます。買取業者はX線蛍光分析装置（XRF）や比重計で正確な純度を測定できます。古い製品や海外製品では刻印がないケースもあるため、まずは業者に持ち込んで鑑定してもらいましょう。" } },
      { "@type": "Question", name: "K18GPやK18GFは金として売れますか？", acceptedAnswer: { "@type": "Answer", text: "K18GP（Gold Plated＝金メッキ）やK18GF（Gold Filled＝金張り）は金の含有量が非常に少ないため、金としての買取はほぼできません。GPは表面に薄い金の膜を貼っただけ、GFは総重量の1/20程度が金です。" } },
      { "@type": "Question", name: "自宅で金の純度を確認する方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "最も確実なのは刻印の確認です。ルーペで「K24」「K18」「750」などの刻印を探してください。刻印がない場合は、磁石テスト（金は磁石につかない）や比重テストで大まかな判別ができますが、正確な純度は買取業者のXRF分析でしかわかりません。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の純度の見分け方 — K18・K24の違い、刻印の読み方、偽物判別法を解説",
  description:
    "金の純度はどうやって見分ける？K24・K18・K14の違い、刻印（ホールマーク）の読み方、金メッキとの見分け方、自宅でできる簡易判別法から業者によるXRF分析まで徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金の純度がわからない方も安心 — 無料鑑定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">刻印がない金製品も、買取業者に持ち込めば無料で純度を鑑定してもらえます。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で鑑定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張鑑定を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で鑑定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinJundoMikataPage() {
  return (
    <>
      <FaqSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の純度の見分け方</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の純度の見分け方 — K18・K24の違いと刻印の読み方</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月13日</p>

        <p>「手元の金製品は本物？」「K18とK24は何が違う？」「刻印の数字の意味がわからない」——金を売る前に最も気になるのが<strong>純度</strong>です。</p>

        <p>金の純度によって買取価格は大きく変わります。K24（純金）とK18では<strong>1gあたり約4,000円の差</strong>があり、10gのネックレスなら約4万円もの差額になります。</p>

        <p>この記事では、金の純度の基本から刻印の読み方、自宅でできる簡易判別法、偽物の見分け方まで<strong>徹底解説</strong>します。</p>

        <h2>金の純度とは — 「カラット（K）」の意味</h2>

        <p>金の純度は<strong>「カラット（Karat）」</strong>という単位で表されます。24分率で、K24が最高純度（99.99%以上）です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>表記</th>
                <th>金の含有率</th>
                <th>千分率表記</th>
                <th>主な用途</th>
                <th>1gあたり買取価格（2026年4月目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24</strong></td><td>99.99%</td><td>999</td><td>インゴット・金貨</td><td>約15,200円</td></tr>
              <tr><td><strong>K22</strong></td><td>91.7%</td><td>916</td><td>一部のコイン（クルーガーランド等）</td><td>約13,900円</td></tr>
              <tr><td><strong>K20</strong></td><td>83.3%</td><td>833</td><td>金歯・歯科用金合金</td><td>約12,600円</td></tr>
              <tr><td><strong>K18</strong></td><td>75.0%</td><td>750</td><td>ジュエリー全般</td><td>約11,400円</td></tr>
              <tr><td><strong>K14</strong></td><td>58.5%</td><td>585</td><td>海外ジュエリー</td><td>約8,900円</td></tr>
              <tr><td><strong>K10</strong></td><td>41.7%</td><td>417</td><td>カジュアルジュエリー</td><td>約6,300円</td></tr>
              <tr><td><strong>K9</strong></td><td>37.5%</td><td>375</td><td>英国ジュエリー</td><td>約5,700円</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>ポイント：</strong>K24とK18では1gあたり約3,800円の差があります。10gのネックレスなら38,000円、50gの喜平チェーンなら190,000円もの差額になります。純度の確認は非常に重要です。</p>

        <h2>金の刻印（ホールマーク）の読み方</h2>

        <p>金製品の純度を確認する<strong>最も簡単で確実な方法は刻印を見ること</strong>です。</p>

        <h3>日本式と海外式の刻印パターン</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>表記方式</th>
                <th>純度</th>
                <th>よく見られる製品</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24</strong></td><td>日本式</td><td>99.99%</td><td>インゴット、金貨</td></tr>
              <tr><td><strong>999</strong></td><td>千分率（国際式）</td><td>99.9%</td><td>海外インゴット</td></tr>
              <tr><td><strong>K18</strong></td><td>日本式</td><td>75%</td><td>日本製ジュエリー</td></tr>
              <tr><td><strong>750</strong></td><td>千分率（国際式）</td><td>75%</td><td>イタリア製ジュエリー</td></tr>
              <tr><td><strong>18K</strong></td><td>海外式（あとK）</td><td>75%</td><td>アメリカ・アジア製</td></tr>
              <tr><td><strong>18KT</strong></td><td>海外式</td><td>75%</td><td>アメリカ製</td></tr>
              <tr><td><strong>K14</strong></td><td>日本式</td><td>58.5%</td><td>一部の日本製品</td></tr>
              <tr><td><strong>585</strong></td><td>千分率</td><td>58.5%</td><td>海外製ジュエリー</td></tr>
            </tbody>
          </table>
        </div>

        <h3>刻印の場所 — どこを探せばいい？</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>製品</th>
                <th>刻印の場所</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ネックレス</strong></td><td>留め金（クラスプ）の近く、引き輪の横、プレートの裏</td></tr>
              <tr><td><strong>指輪</strong></td><td>リングの内側</td></tr>
              <tr><td><strong>ブレスレット</strong></td><td>留め金の近く、プレートの裏</td></tr>
              <tr><td><strong>ピアス</strong></td><td>ポスト（棒の部分）、キャッチ（留め具）</td></tr>
              <tr><td><strong>ペンダント</strong></td><td>バチカン（チェーンを通す金具）の裏</td></tr>
              <tr><td><strong>インゴット</strong></td><td>表面に大きく刻印</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>コツ：</strong>刻印は非常に小さいため、<strong>ルーペ（10倍の拡大鏡）</strong>があると見つけやすくなります。100円ショップやホームセンターで購入できます。</p>

        <h3>造幣局のホールマーク</h3>

        <p>日本の造幣局が品位検定を行い、合格した製品には<strong>日の丸のマーク（ホールマーク）</strong>が刻印されます。このマークがある製品は純度が公的に保証されているため、最も信頼性が高いです。</p>

        <CtaBox />

        <h2>要注意！金メッキ・金張りの見分け方</h2>

        <p>金製品と間違えやすいのが<strong>金メッキ（GP）と金張り（GF）</strong>です。これらは金としての買取価値がほぼありません。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>表記</th>
                <th>意味</th>
                <th>金の含有量</th>
                <th>買取価値</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K18（無印）</strong></td><td>K18無垢（ソリッド）</td><td>75%</td><td>高い（1g約11,400円）</td></tr>
              <tr><td><strong>K18GP</strong></td><td>Gold Plated（金メッキ）</td><td>ごく微量</td><td>ほぼなし</td></tr>
              <tr><td><strong>K18GF</strong></td><td>Gold Filled（金張り）</td><td>総重量の1/20程度</td><td>ほぼなし</td></tr>
              <tr><td><strong>K18RGP</strong></td><td>Rolled Gold Plate</td><td>ごく微量</td><td>ほぼなし</td></tr>
              <tr><td><strong>HGE</strong></td><td>Hard Gold Electroplate</td><td>ごく微量</td><td>なし</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>見分けるポイント：</strong>「K18」の後ろにアルファベットが付いていたら要注意です。「K18YG」「K18WG」「K18PG」はカラーゴールドの表記なので金製品ですが、「K18GP」「K18GF」は金メッキ・金張りです。</p>

        <h2>自宅でできる金の簡易判別法</h2>

        <h3>1. 磁石テスト</h3>

        <p><strong>金は磁石に反応しません。</strong>強力な磁石（ネオジム磁石など）を当てて、引きつけられる場合はメッキ品や偽物の可能性が高いです。ただし、磁石に反応しない金属（銅、アルミなど）もあるため、このテストだけでは断定できません。</p>

        <h3>2. 重さ（比重）テスト</h3>

        <p>金は非常に重い金属です。同じ大きさの他の金属と比べて<strong>明らかにずっしりと重い</strong>場合は本物の可能性が高いです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>金属</th>
                <th>比重</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>19.3</td></tr>
              <tr><td><strong>K18</strong></td><td>15.2〜16.2</td></tr>
              <tr><td><strong>K14</strong></td><td>13.0〜14.5</td></tr>
              <tr><td>プラチナ（Pt900）</td><td>19.9</td></tr>
              <tr><td>銀</td><td>10.5</td></tr>
              <tr><td>銅</td><td>8.9</td></tr>
              <tr><td>鉄</td><td>7.9</td></tr>
            </tbody>
          </table>
        </div>

        <h3>3. 色と光沢の確認</h3>

        <p>純金（K24）は<strong>濃い黄金色</strong>で、他の金属にはない独特の温かみのある光沢があります。K18は少し明るめの金色、K14はさらに薄い金色です。変色しやすかったり、緑や黒のサビが出ている場合は金メッキの劣化の可能性があります。</p>

        <h3>4. 試金石テスト（上級者向け）</h3>

        <p>黒い試金石に金をこすりつけ、残った痕跡の色で純度を判別する伝統的な方法です。専門的な知識が必要なため、一般の方には買取業者での鑑定をおすすめします。</p>

        <blockquote>
          <p><strong>重要：</strong>上記の自宅テストはあくまで参考です。正確な純度は<strong>買取業者のX線蛍光分析装置（XRF）</strong>でしか判定できません。大手業者なら無料で分析してくれます。</p>
        </blockquote>

        <h2>買取業者によるプロの鑑定方法</h2>

        <h3>X線蛍光分析（XRF）</h3>

        <p>現在の買取業者で最も一般的な分析方法です。<strong>製品に傷をつけずに正確な金の含有率を測定</strong>できます。分析時間は数秒〜1分程度で、K24・K18・K14などの純度がデジタル表示されます。</p>

        <h3>比重計測定</h3>

        <p>製品の重量と水中での重量の差から比重を算出し、純度を判別する方法です。XRFと併用することでより正確な鑑定が可能です。</p>

        <h3>タッチストーン（試金石）テスト</h3>

        <p>試金石に金をこすりつけ、酸をかけて反応を見る伝統的な方法です。製品にわずかな傷がつきますが、表面と内部の金の一致を確認できるため、高度な偽物の判別に有効です。</p>

        <CtaBox />

        <h2>K18・K24の違いを徹底比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>K24（純金）</th>
                <th>K18（18金）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>金含有率</strong></td><td>99.99%</td><td>75%</td></tr>
              <tr><td><strong>硬さ</strong></td><td>非常に柔らかい</td><td>適度に硬い</td></tr>
              <tr><td><strong>色</strong></td><td>濃い黄金色</td><td>やや明るい金色（カラーバリエーションあり）</td></tr>
              <tr><td><strong>変色</strong></td><td>しない</td><td>ほとんどしない（WGはメッキ剥がれあり）</td></tr>
              <tr><td><strong>主な用途</strong></td><td>インゴット・金貨・資産保全</td><td>ジュエリー全般</td></tr>
              <tr><td><strong>買取価格（1g）</strong></td><td>約15,200円</td><td>約11,400円</td></tr>
              <tr><td><strong>価格差</strong></td><td colSpan={2}>K24はK18より1gあたり約3,800円高い</td></tr>
            </tbody>
          </table>
        </div>

        <h2>金の純度に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "K18とK24の違いは何ですか？",
              a: "K24は金の純度99.99%以上の「純金」、K18は純度75%の「金合金」です。K24は柔らかく資産用（インゴット・金貨）に使われ、K18は硬く加工しやすいためジュエリーに多く使われます。買取価格はK24の方が約33%高くなります。",
            },
            {
              q: "金の刻印がない場合でも売れますか？",
              a: "はい、刻印がなくても売れます。買取業者はX線蛍光分析装置（XRF）や比重計で正確な純度を測定できます。古い製品や海外製品では刻印がないケースもあるため、まずは業者に持ち込んで鑑定してもらいましょう。",
            },
            {
              q: "K18GPやK18GFは金として売れますか？",
              a: "K18GP（Gold Plated＝金メッキ）やK18GF（Gold Filled＝金張り）は金の含有量が非常に少ないため、金としての買取はほぼできません。刻印に「GP」「GF」「RGP」「HGE」が含まれている場合は注意してください。",
            },
            {
              q: "自宅で金の純度を確認する方法はありますか？",
              a: "最も確実なのは刻印の確認です。ルーペで「K24」「K18」「750」などの刻印を探してください。刻印がない場合は、磁石テスト（金は磁石につかない）や比重テストで大まかな判別ができますが、正確な純度は買取業者のXRF分析でしかわかりません。",
            },
            {
              q: "「18K」の刻印は偽物ですか？",
              a: "必ずしも偽物ではありません。海外（特にイタリアやアメリカ）では「K」を後ろに付ける「18K」「18KT」が正規品にも使われます。ただし、品質管理が不十分な製品に多い表記でもあるため、心配な場合は買取業者で分析してもらいましょう。",
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
            <p className="text-sm font-bold mt-1">K18（18金）買取相場ガイド</p>
          </Link>
          <Link href="/articles/k24-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K24（純金）買取相場ガイド</p>
          </Link>
          <Link href="/articles/kowareta-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">壊れた金・刻印なしの買取ガイド</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>金の純度は買取価格を左右する最も重要な要素です。K24とK18では<strong>1gあたり約3,800円の差</strong>があり、製品の重量が増えるほどその差額は大きくなります。</p>

        <p>純度の確認方法を優先順位でまとめます。</p>

        <ol>
          <li><strong>刻印を確認する</strong>（最も簡単・確実）</li>
          <li><strong>買取業者のXRF分析を受ける</strong>（刻印がない場合）</li>
          <li><strong>自宅テスト（磁石・比重）はあくまで参考</strong></li>
        </ol>

        <p>純度がわからない金製品をお持ちの方は、まず<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>や<a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉の無料鑑定</a>で正確な純度と価値を確認してみてください。鑑定は無料です。</p>
      </article>
    </div>
    </>
  );
}
