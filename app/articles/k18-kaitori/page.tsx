import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【完全ガイド】K18（18金）買取相場と高く売る方法 — 製品別・刻印の見方",
  description:
    "K18（18金）の最新買取相場を1gあたりの価格で掲載。ネックレス・指輪・ブレスレットの製品別価格目安、K18の刻印の見分け方、高く売るコツ、おすすめ買取業者4社の比較まで徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K18製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K18の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function K18KaitoriPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">K18買取ガイド</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【完全ガイド】K18（18金）買取相場と高く売る方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新：2026年4月13日</p>

        <p>K18（18金）は、日本で最も流通量が多い金製品です。ネックレス、指輪、ブレスレット、ピアスなど、多くのジュエリーにK18が使われています。</p>

        <p>「K18のネックレスを売りたい」「18金の相場はいくら？」「K18の刻印がよくわからない」——この記事では、K18に関するすべての疑問を解決し、<strong>最高値で売却するための実践的なガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>K18とは何か（純度75%の意味と特性）</li>
          <li>K18の最新買取相場（1gあたりの価格）</li>
          <li>ネックレス・指輪・ブレスレットの製品別買取価格の目安</li>
          <li>K18の刻印の見方と偽物の見分け方</li>
          <li>K18を高く売るためのおすすめ買取業者</li>
        </ul>

        <h2>K18（18金）とは — 純度75%の金合金</h2>

        <p>K18は<strong>「18金」</strong>とも呼ばれ、<strong>金の純度が75%（750/1000）</strong>の合金です。残りの25%は銀、銅、パラジウムなどの他の金属が混ぜられています。</p>

        <h3>なぜ純金（K24）ではなくK18が使われるのか</h3>

        <p>純金（K24）は美しい輝きを持ちますが、<strong>非常に柔らかい</strong>という欠点があります。そのままではジュエリーとして使うと、日常使いで変形したり傷がついたりしやすいのです。</p>

        <p>K18は金に他の金属を混ぜることで<strong>硬度と耐久性を確保</strong>しつつ、<strong>金の美しい色味と資産価値を維持</strong>したバランスの良い合金です。そのため、世界中のジュエリーで最も多く使われています。</p>

        <h3>K18の色の種類</h3>

        <p>K18は混ぜる金属の種類によって色が変わります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>名称</th>
                <th>配合</th>
                <th>色の特徴</th>
                <th>人気度</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K18YG（イエローゴールド）</strong></td><td>金75%+銀+銅</td><td>クラシックな金色</td><td>最も人気</td></tr>
              <tr><td><strong>K18PG（ピンクゴールド）</strong></td><td>金75%+銅多め</td><td>温かみのあるピンク色</td><td>女性に人気</td></tr>
              <tr><td><strong>K18WG（ホワイトゴールド）</strong></td><td>金75%+パラジウム</td><td>プラチナに似た銀色</td><td>男女ともに人気</td></tr>
              <tr><td><strong>K18RG（ローズゴールド）</strong></td><td>金75%+銅かなり多め</td><td>赤みの強いピンク</td><td>個性的</td></tr>
              <tr><td><strong>K18GG（グリーンゴールド）</strong></td><td>金75%+銀多め</td><td>薄い緑がかった金色</td><td>希少</td></tr>
            </tbody>
          </table>
        </div>

        <p>買取価格は色（カラー）による大きな差はありません。いずれも金の含有率は75%で同じだからです。ただし、<strong>K18WGの場合、表面にロジウムメッキ（銀白色のコーティング）が施されている</strong>ことが多く、剥がれていると見た目が黄色っぽくなりますが、買取価格には影響しません。</p>

        <h2>K18の最新買取相場（2026年4月）</h2>

        <p>2026年4月現在のK18の買取相場は以下のとおりです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>価格（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K18 買取価格（1gあたり）</strong></td><td>約11,200〜11,600円</td></tr>
              <tr><td>K18 小売価格（1gあたり）</td><td>約11,600〜12,000円</td></tr>
              <tr><td>K24 買取価格（参考）</td><td>約15,000〜15,400円</td></tr>
            </tbody>
          </table>
        </div>

        <p>K18の買取価格はK24（純金）の約75%です。これはK18の金含有率が75%であることに対応しています。</p>

        <h3>K18 1gあたり買取価格の推移</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>年</th>
                <th>K18 1gあたり買取価格（年間平均目安）</th>
                <th>前年比</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2020年</td><td>約4,500円</td><td>—</td></tr>
              <tr><td>2021年</td><td>約4,800円</td><td>+6.7%</td></tr>
              <tr><td>2022年</td><td>約5,700円</td><td>+18.8%</td></tr>
              <tr><td>2023年</td><td>約6,600円</td><td>+15.8%</td></tr>
              <tr><td>2024年</td><td>約8,800円</td><td>+33.3%</td></tr>
              <tr><td>2025年</td><td>約10,600円</td><td>+20.5%</td></tr>
              <tr><td>2026年（1〜4月）</td><td>約11,400円</td><td>+7.5%</td></tr>
            </tbody>
          </table>
        </div>

        <p>K18の買取価格は2020年の約4,500円から2026年の約11,400円へと、<strong>6年間で約2.5倍</strong>に上昇しています。今がまさに「売り時」と言える相場水準です。</p>

        <h2 id="necklace">K18製品別の買取価格目安</h2>

        <p>K18の買取価格は「重量 x 1gあたり相場」が基本ですが、実際の製品の重量は種類によって異なります。以下に代表的なK18製品の重量と買取価格の目安を示します。</p>

        <h3>K18ネックレス</h3>

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
              <tr><td>チェーンネックレス（細め）</td><td>3〜5g</td><td>約34,000〜57,000円</td></tr>
              <tr><td>チェーンネックレス（太め）</td><td>8〜15g</td><td>約91,000〜171,000円</td></tr>
              <tr><td>ペンダントネックレス</td><td>5〜10g</td><td>約57,000〜114,000円</td></tr>
              <tr><td>喜平ネックレス（50cm）</td><td>30〜50g</td><td>約342,000〜570,000円</td></tr>
              <tr><td>喜平ネックレス（60cm）</td><td>50〜100g</td><td>約570,000〜1,140,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>喜平ネックレスは重量があるため、買取価格も高額になります。特に<strong>6面カットや8面カットのダブル喜平</strong>は重量があるため、50万円〜100万円以上の買取価格になることも珍しくありません。</p>

        <h3 id="ring">K18指輪・リング</h3>

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
              <tr><td>細身のリング</td><td>2〜4g</td><td>約23,000〜46,000円</td></tr>
              <tr><td>標準的な結婚指輪</td><td>3〜6g</td><td>約34,000〜68,000円</td></tr>
              <tr><td>ボリュームリング</td><td>8〜15g</td><td>約91,000〜171,000円</td></tr>
              <tr><td>印台リング（メンズ）</td><td>15〜30g</td><td>約171,000〜342,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>宝石（ダイヤモンド、ルビーなど）が付いた指輪の場合、金の素材価値に加えて<strong>宝石の価値が上乗せ</strong>されることがあります。ただし、宝石の評価は業者によって大きく異なるため、<strong>宝石鑑定に強い業者にも見積もりを取る</strong>のがおすすめです。</p>

        <h3 id="bracelet">K18ブレスレット</h3>

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
              <tr><td>チェーンブレスレット（細め）</td><td>3〜5g</td><td>約34,000〜57,000円</td></tr>
              <tr><td>チェーンブレスレット（太め）</td><td>8〜15g</td><td>約91,000〜171,000円</td></tr>
              <tr><td>喜平ブレスレット</td><td>20〜50g</td><td>約228,000〜570,000円</td></tr>
              <tr><td>バングル</td><td>10〜30g</td><td>約114,000〜342,000円</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p><strong>注意：</strong>上記の価格はK18の素材価値のみの目安です。ブランドジュエリー（ティファニー、カルティエ、ブルガリ、ヴァンクリーフなど）の場合は、ブランド価値が上乗せされ、素材価格の1.5〜3倍以上の買取額になることがあります。</p>
        </blockquote>

        <CtaBox />

        <h2>K18の刻印の見方と確認方法</h2>

        <p>K18製品には必ず<strong>刻印（ホールマーク）</strong>が入っています。刻印を確認することで、製品の純度がわかります。</p>

        <h3>K18の主な刻印パターン</h3>

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
              <tr><td><strong>K18</strong></td><td>18金（日本式表記）</td><td>最も一般的</td></tr>
              <tr><td><strong>750</strong></td><td>金750/1000 = 75%（国際式表記）</td><td>海外製品に多い</td></tr>
              <tr><td><strong>18K</strong></td><td>18金（海外式表記）</td><td>Kが後ろに付く。偽物に多いとの俗説あり</td></tr>
              <tr><td><strong>18KT</strong></td><td>18カラット</td><td>海外製品</td></tr>
              <tr><td><strong>K18YG</strong></td><td>18金イエローゴールド</td><td>色の種類も明記</td></tr>
              <tr><td><strong>K18WG</strong></td><td>18金ホワイトゴールド</td><td></td></tr>
              <tr><td><strong>K18PG</strong></td><td>18金ピンクゴールド</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <h3>刻印の場所</h3>

        <ul>
          <li><strong>ネックレス：</strong>留め金（クラスプ）の近く、プレートの裏</li>
          <li><strong>指輪：</strong>リングの内側</li>
          <li><strong>ブレスレット：</strong>留め金の近く</li>
          <li><strong>ピアス：</strong>ポスト（棒の部分）やキャッチ（留め具）</li>
          <li><strong>ペンダント：</strong>バチカン（チェーンを通す金具）の裏</li>
        </ul>

        <p>刻印が見えにくい場合は、<strong>ルーペ（10倍程度の拡大鏡）</strong>を使うと確認できます。100円ショップやホームセンターで手に入ります。</p>

        <h3>「18K」の刻印は偽物？</h3>

        <p>「Kが後ろに付く"18K"は偽物」という俗説がありますが、これは<strong>必ずしも正しくありません</strong>。海外（特にイタリアやアメリカ）では「18K」「18KT」という表記が正規品にも使われています。</p>

        <p>ただし、品質管理が不十分な海外製品の中には、刻印と実際の純度が異なるケースもあります。心配な場合は、<strong>買取業者に持ち込めばX線分析で正確な純度を判定</strong>してもらえます（大手業者なら分析無料）。</p>

        <h3>刻印がない場合</h3>

        <p>古い製品や海外製品の中には刻印がないものもあります。刻印がなくても金であれば買取は可能です。業者がX線蛍光分析装置（XRF）や比重計で純度を測定してくれます。</p>

        <h2>K18を高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>複数業者に見積もりを取る</strong>
            <p>K18の買取価格は業者によって1gあたり数百円の差が出ます。10gのネックレスなら数千円、50gの喜平チェーンなら数万円の差になります。最低3社には見積もりを取りましょう。</p>
          </li>
          <li>
            <strong>ブランド品はブランド買取にも見積もりを取る</strong>
            <p>ティファニー、カルティエ、ブルガリなどのK18ジュエリーは、金の素材価値以上の買取額が期待できます。金買取専門店とブランド買取専門店の両方に見積もりを取り、高い方に売却しましょう。</p>
          </li>
          <li>
            <strong>付属品を揃える</strong>
            <p>保証書、鑑定書、専用ケース、購入レシートがあれば、特にブランド品の場合に査定額アップにつながります。</p>
          </li>
          <li>
            <strong>まとめて売る</strong>
            <p>複数のK18製品を持っている場合は、まとめて査定に出すと総重量が増え、業者も取引効率が良くなるため、1gあたりの単価を上げてくれることがあります。</p>
          </li>
          <li>
            <strong>相場が高いときに売る</strong>
            <p>2026年4月現在のK18買取価格（1gあたり約11,400円）は歴史的な高値水準です。今後さらに上がる保証はないため、現在の価格に満足できるなら売却のタイミングとしては好適です。</p>
          </li>
        </ol>

        <h2>4社比較 — K18買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>K18買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>複数業者のK18買取価格を一括比較。最高値が簡単にわかる</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>K18の査定経験豊富。目の前で計量・査定してくれる安心感</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>自宅にいながらK18の査定・売却が完結。出張費無料</td>
                <td>自宅で完結したい</td>
              </tr>
              <tr>
                <td><strong>ティファナ</strong></td>
                <td>出張/店頭/宅配</td>
                <td>3つの方法から選択可能。K18以外の貴金属もまとめて査定OK</td>
                <td>方法を選びたい</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>K18買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "K18のネックレスが切れてしまったのですが、買取できますか？",
              a: "はい、切れたネックレスでも問題なく買取できます。金の買取は「素材としての価値」がベースなので、チェーンが切れていても、留め具が壊れていても、絡まっていても、金としての価値は変わりません。そのままの状態で持ち込めばOKです。",
            },
            {
              q: "K18WG（ホワイトゴールド）とプラチナの見分け方は？",
              a: "見た目だけでは非常に判別が難しいです。K18WGは表面にロジウムメッキが施されているため、プラチナと似た銀白色をしています。確実に見分けるには刻印を確認してください。K18WGなら「K18WG」または「750」、プラチナなら「Pt900」「Pt950」などの刻印があります。判断できない場合は、買取業者に持ち込めば分析装置で正確に判定してもらえます。",
            },
            {
              q: "K18のメッキ製品は買取できますか？",
              a: "K18GP（Gold Plated）やK18GF（Gold Filled）はK18の薄い層がコーティングされた製品であり、金の含有量が非常に少ないため、ほとんどの業者では買取不可または数十円程度の価格になります。「K18GP」「K18GF」の刻印がある場合は、K18の無垢（ソリッド）とは異なるのでご注意ください。",
            },
            {
              q: "K18とK14、どちらが高く売れますか？",
              a: "K18の方が高く売れます。K18は金含有率75%、K14は58.5%なので、同じ重量ならK18の方が約28%高い買取価格になります。例えば10gのアクセサリーの場合、K18は約114,000円、K14は約89,000円（2026年4月時点の目安）です。",
            },
            {
              q: "K18のピアス片方だけでも売れますか？",
              a: "はい、片方だけでも買取可能です。金の買取は重量がベースなので、片方でも問題ありません。ただし、ブランドジュエリーの場合は、ペアで揃っている方がブランド価値が評価されやすいため、可能であれば両方揃えて売却する方が有利です。片方しかない場合は、金の素材買取に特化した業者に依頼しましょう。",
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

        <h2>まとめ</h2>

        <p>K18（18金）は日本で最も多く流通する金製品であり、ネックレス・指輪・ブレスレットなど幅広い製品に使われています。</p>

        <p>2026年4月現在、K18の買取相場は<strong>1gあたり約11,200〜11,600円</strong>と歴史的な高値水準にあります。6年前（2020年）と比べて約2.5倍に上昇しており、売却を検討している方にとっては好機と言えるでしょう。</p>

        <p>K18を少しでも高く売るために、以下の3つを必ず実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>ブランド品は金買取とブランド買取の両方に見積もりを取る</strong></li>
          <li><strong>付属品（保証書・ケース等）を揃えて査定に出す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのK18製品の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  );
}
