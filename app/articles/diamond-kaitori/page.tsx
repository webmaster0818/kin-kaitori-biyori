import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】ダイヤモンド・宝石買取ガイド — 4Cの評価基準と高く売るコツ",
  description:
    "ダイヤモンド買取相場を4C（カラット・カット・クラリティ・カラー）別に解説。鑑定書の有無による価格差、ルビー・サファイア・エメラルド・真珠の買取相場、ブランドジュエリーの高額買取のコツ、おすすめ買取業者4社を比較。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">ダイヤモンド・宝石の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ダイヤモンドの価値は素人には判断が難しいもの。プロの査定で正確な価値を確認しましょう。</p>
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
        name: "ダイヤモンドの買取価格はどれくらいですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ダイヤモンドの買取価格は4C（カラット・カット・クラリティ・カラー）によって大きく異なります。0.3カラットで約3〜8万円、0.5カラットで約8〜20万円、1.0カラットで約30〜100万円が目安です。品質（4Cのグレード）によって同じカラット数でも数倍の差が出ます。",
        },
      },
      {
        "@type": "Question",
        name: "鑑定書がないダイヤモンドも買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、鑑定書がなくても買取は可能です。ただし、鑑定書がない場合は業者が独自に鑑定するため、鑑定書付きの場合と比べて10〜30%程度買取価格が下がることがあります。GIA（米国宝石学会）やCGL（中央宝石研究所）の鑑定書があると最も高く評価されます。",
        },
      },
      {
        "@type": "Question",
        name: "小さいダイヤモンド（メレダイヤ）も買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "0.1カラット以下の小さなダイヤモンド（メレダイヤ）は、1石あたりの買取価格は非常に低い（数百円〜数千円程度）ですが、台座の金やプラチナの素材価値で買取されます。メレダイヤが多数ついたジュエリーなら、合算すると意外な金額になることもあります。",
        },
      },
      {
        "@type": "Question",
        name: "ブランドジュエリーは高く買い取ってもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、ハリーウィンストン、カルティエ、ティファニー、ヴァンクリーフ＆アーペルなどのブランドジュエリーは、素材価値に加えてブランドプレミアムが上乗せされ、素材価格の2〜10倍以上の買取額になることがあります。ブランド買取に強い業者を選ぶことが重要です。",
        },
      },
      {
        "@type": "Question",
        name: "ダイヤモンド以外の宝石も買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、ルビー、サファイア、エメラルド、真珠（パール）、アレキサンドライト、タンザナイト、オパールなど多くの宝石が買取対象です。ただし、宝石の種類や品質によって買取価格は大きく異なります。特にルビー・サファイア・エメラルドの「三大宝石」は高値がつきやすいです。",
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

export default function DiamondKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">ダイヤモンド・宝石買取ガイド</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】ダイヤモンド・宝石買取ガイド — 4Cの評価と高く売るコツ</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

          <p>「婚約指輪のダイヤモンドはいくらで売れる？」「鑑定書がないけど買取できる？」「ルビーやサファイアも売れる？」——ダイヤモンドや宝石の売却は、金やプラチナと違って<strong>品質評価が複雑</strong>なため、不安を感じる方が多いジャンルです。</p>

          <p>ダイヤモンドの買取価格は<strong>4C（カラット・カット・クラリティ・カラー）</strong>と呼ばれる4つの評価基準で決まります。同じ1カラットのダイヤモンドでも、品質によって<strong>30万円〜100万円以上</strong>の差が出ることがあります。</p>

          <p>この記事では以下の内容を解説します。</p>

          <ul>
            <li>ダイヤモンド買取相場（4Cによる価格差）</li>
            <li>鑑定書の有無による価格差</li>
            <li>ダイヤモンド以外の宝石の買取相場</li>
            <li>ブランドジュエリーの高額買取のポイント</li>
            <li>おすすめ買取業者4社の比較</li>
          </ul>

          <h2>ダイヤモンドの4C — 買取価格を決める4つの評価基準</h2>

          <p>ダイヤモンドの品質と価値を決めるのが<strong>4C</strong>です。これはGIA（米国宝石学会）が策定した世界共通の評価基準で、以下の4つの要素から構成されます。</p>

          <h3>1. Carat（カラット）— 重量</h3>

          <p>カラットはダイヤモンドの重量を表す単位です。1カラット = 0.2グラムです。カラット数が大きいほど希少性が高く、価格も高くなります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>カラット</th>
                  <th>直径の目安</th>
                  <th>買取価格の目安（中品質の場合）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0.1ct</td><td>約3.0mm</td><td>約3,000〜10,000円</td></tr>
                <tr><td>0.2ct</td><td>約3.8mm</td><td>約10,000〜30,000円</td></tr>
                <tr><td>0.3ct</td><td>約4.3mm</td><td>約30,000〜80,000円</td></tr>
                <tr><td>0.5ct</td><td>約5.2mm</td><td>約80,000〜200,000円</td></tr>
                <tr><td>0.7ct</td><td>約5.8mm</td><td>約150,000〜400,000円</td></tr>
                <tr><td>1.0ct</td><td>約6.5mm</td><td>約300,000〜1,000,000円</td></tr>
                <tr><td>2.0ct</td><td>約8.2mm</td><td>約1,000,000〜5,000,000円</td></tr>
                <tr><td>3.0ct以上</td><td>約9.3mm以上</td><td>数百万〜数千万円</td></tr>
              </tbody>
            </table>
          </div>

          <p>カラット数が2倍になると、価格は2倍以上になります。これは大きなダイヤモンドほど希少性が高いためです。特に<strong>1カラットの壁</strong>は大きく、0.99ctと1.00ctでは心理的な価格差が生じます。</p>

          <h3>2. Cut（カット）— 輝き</h3>

          <p>カットはダイヤモンドの輝きを決める最も重要な要素です。どれだけ大きくても、カットが悪ければ輝きが鈍くなります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>グレード</th>
                  <th>評価</th>
                  <th>買取価格への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Excellent（エクセレント）</strong></td><td>最高品質</td><td>最も高い</td></tr>
                <tr><td><strong>Very Good（ベリーグッド）</strong></td><td>優秀</td><td>高い</td></tr>
                <tr><td><strong>Good（グッド）</strong></td><td>良好</td><td>標準的</td></tr>
                <tr><td>Fair（フェア）</td><td>やや劣る</td><td>やや低い</td></tr>
                <tr><td>Poor（プア）</td><td>不良</td><td>低い</td></tr>
              </tbody>
            </table>
          </div>

          <p>3EX（トリプルエクセレント）は、カット・対称性・研磨の3項目すべてがExcellentのダイヤモンドで、<strong>最も高い評価</strong>を受けます。ハート＆キューピッドパターンが見えるものは特に人気があります。</p>

          <h3>3. Clarity（クラリティ）— 透明度</h3>

          <p>クラリティは、ダイヤモンド内部の内包物（インクルージョン）や表面の傷（ブレミッシュ）の少なさを表します。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>グレード</th>
                  <th>意味</th>
                  <th>買取価格への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>FL（フローレス）</strong></td><td>10倍拡大で内外無傷</td><td>最高（非常に希少）</td></tr>
                <tr><td><strong>IF（インターナリーフローレス）</strong></td><td>10倍拡大で内部無傷</td><td>非常に高い</td></tr>
                <tr><td><strong>VVS1-VVS2</strong></td><td>10倍拡大でも発見困難な微小内包物</td><td>高い</td></tr>
                <tr><td><strong>VS1-VS2</strong></td><td>10倍拡大で軽い内包物</td><td>標準〜やや高い</td></tr>
                <tr><td>SI1-SI2</td><td>10倍拡大で容易に発見できる内包物</td><td>標準</td></tr>
                <tr><td>I1-I3</td><td>肉眼で見える内包物</td><td>低い</td></tr>
              </tbody>
            </table>
          </div>

          <h3>4. Color（カラー）— 色</h3>

          <p>ダイヤモンドのカラーは、D（完全な無色）からZ（薄い黄色）までのアルファベットで表されます。無色に近いほど高い評価を受けます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>グレード</th>
                  <th>色の特徴</th>
                  <th>買取価格への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>D-E-F</strong></td><td>無色（Colorless）</td><td>最も高い</td></tr>
                <tr><td><strong>G-H-I-J</strong></td><td>ほぼ無色（Near Colorless）</td><td>高い〜標準</td></tr>
                <tr><td>K-L-M</td><td>わずかに黄色（Faint）</td><td>やや低い</td></tr>
                <tr><td>N-R</td><td>非常に薄い黄色（Very Light）</td><td>低い</td></tr>
                <tr><td>S-Z</td><td>薄い黄色（Light）</td><td>低い</td></tr>
              </tbody>
            </table>
          </div>

          <p>ただし、Z以上の濃い色を持つ「ファンシーカラーダイヤモンド」（ファンシーイエロー、ファンシーピンク、ファンシーブルーなど）は、むしろ<strong>希少性が高く高額</strong>で取引されます。</p>

          <CtaBox />

          <h2>4Cランク別の買取価格差 — 同じ1ctでもこれだけ違う</h2>

          <p>4Cの組み合わせによって、<strong>同じ1カラットのダイヤモンドでも30万円〜200万円以上の価格差</strong>が出ます。以下に代表的な組み合わせによる価格差を示します。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ランク</th>
                  <th>4Cの組み合わせ（1ct）</th>
                  <th>買取価格の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>最高ランク</strong></td><td>D / Excellent / IF / 1.0ct</td><td>約150〜200万円</td></tr>
                <tr><td><strong>高ランク</strong></td><td>E / Very Good / VVS1 / 1.0ct</td><td>約100〜150万円</td></tr>
                <tr><td><strong>中ランク</strong></td><td>G / Good / VS1 / 1.0ct</td><td>約60〜100万円</td></tr>
                <tr><td><strong>標準ランク</strong></td><td>I / Good / SI1 / 1.0ct</td><td>約30〜60万円</td></tr>
                <tr><td><strong>低ランク</strong></td><td>K / Fair / I1 / 1.0ct</td><td>約10〜30万円</td></tr>
              </tbody>
            </table>
          </div>

          <p>このように、同じ1カラットでも最高ランクと低ランクでは<strong>10倍以上の差</strong>が出ます。だからこそ鑑定書（グレーディングレポート）が重要なのです。</p>

          <h2>メレダイヤ（小粒ダイヤ）の買取について</h2>

          <p>0.1カラット以下の小さなダイヤモンドを<strong>メレダイヤ</strong>と呼びます。パヴェセッティングやエタニティリングに多数使われている小粒のダイヤモンドです。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>メレダイヤのサイズ</th>
                  <th>1石あたりの買取価格</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0.05ct以下</td><td>数十円〜数百円</td><td>ほぼ値段がつかない</td></tr>
                <tr><td>0.05〜0.1ct</td><td>数百円〜1,000円</td><td>多数あれば合算で数千円に</td></tr>
                <tr><td>0.1〜0.2ct</td><td>1,000〜5,000円</td><td>品質による差が大きい</td></tr>
              </tbody>
            </table>
          </div>

          <p>メレダイヤ自体は高額にはなりませんが、<strong>台座の金やプラチナの素材価値</strong>が主な買取価格の構成要素になります。例えば、メレダイヤが20石付いたK18リング（5g）なら、金の素材価値（約57,000円）+ メレダイヤ（数千円）= 約6万円前後になります。</p>

          <p><strong>ポイント：</strong>「メレダイヤだから値段がつかない」とあきらめず、台座の金属価値を含めて査定してもらいましょう。</p>

          <h2>フリマ・ヤフオク vs 買取業者 — ダイヤモンドはどこで売る？</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>フリマ・ヤフオク</th>
                  <th>買取業者</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>手数料</strong></td><td>10%（メルカリ）/ 8.8〜10%（ヤフオク）</td><td>無料</td></tr>
                <tr><td><strong>価格</strong></td><td>良い石なら業者より高くなる場合あり</td><td>相場に基づいた公正価格</td></tr>
                <tr><td><strong>トラブルリスク</strong></td><td>「偽物」クレーム、返品トラブル</td><td>なし</td></tr>
                <tr><td><strong>鑑定の正確さ</strong></td><td>自己申告（信頼性低い）</td><td>プロが鑑定（信頼性高い）</td></tr>
                <tr><td><strong>メレダイヤ</strong></td><td>売れにくい</td><td>台座の金属価値で買取可能</td></tr>
                <tr><td><strong>ブランドジュエリー</strong></td><td>高値がつく場合あり</td><td>ブランド買取専門店なら高値</td></tr>
              </tbody>
            </table>
          </div>

          <p><strong>フリマ・ヤフオクが有利なケース：</strong>鑑定書付きの高品質ダイヤ（1ct以上、Gカラー以上）で、購入証明書もあるブランドジュエリーの場合。信頼性を担保できるなら、個人売買の方が高値がつくことがあります。</p>

          <p><strong>買取業者が有利なケース：</strong>鑑定書なし、メレダイヤ、ノーブランド品、壊れたジュエリーなど。トラブルリスクなく確実に現金化できます。</p>

          <h2>鑑定書の有無による価格差</h2>

          <p>ダイヤモンドの買取において、<strong>鑑定書（グレーディングレポート）の有無は大きな価格差</strong>を生みます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>鑑定書の状態</th>
                  <th>買取価格への影響</th>
                  <th>補足</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>GIA鑑定書あり</strong></td><td>最も高い（基準価格）</td><td>世界最高権威の鑑定機関</td></tr>
                <tr><td><strong>CGL鑑定書あり</strong></td><td>高い（GIAに次ぐ）</td><td>日本国内で最も信頼される鑑定機関</td></tr>
                <tr><td>その他の鑑定書あり</td><td>標準的</td><td>AGTなど</td></tr>
                <tr><td><strong>鑑定書なし</strong></td><td>10〜30%低下</td><td>業者が独自に鑑定するためリスク分が差引かれる</td></tr>
              </tbody>
            </table>
          </div>

          <p>鑑定書がない場合でも買取は可能ですが、業者が独自に鑑定するため、「グレードが低く評価される」リスクがあります。鑑定書があれば客観的なグレードが証明されているため、高い評価を受けやすくなります。</p>

          <blockquote>
            <p><strong>鑑定書を紛失した場合：</strong>GIAやCGLに鑑定書の再発行を依頼できる場合があります。ダイヤモンドにレーザー刻印されているGIAのレポート番号がわかれば、GIAのデータベースで鑑定結果を確認できます。</p>
          </blockquote>

          <h2>鑑定書を再発行してから売るべきか — 損得計算</h2>

          <p>「鑑定書を紛失したけど、再発行してから売った方がいい？」という質問は多いです。結論は<strong>ダイヤモンドのサイズと品質による</strong>です。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ダイヤモンドのサイズ</th>
                  <th>鑑定書再発行の費用</th>
                  <th>鑑定書の有無による価格差</th>
                  <th>再発行すべきか</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>0.3ct以下</td><td>約5,000〜10,000円</td><td>約3,000〜10,000円</td><td>不要（元が取れない場合が多い）</td></tr>
                <tr><td>0.3〜0.5ct</td><td>約5,000〜10,000円</td><td>約10,000〜50,000円</td><td>品質次第（高品質なら再発行推奨）</td></tr>
                <tr><td>0.5〜1.0ct</td><td>約8,000〜15,000円</td><td>約50,000〜200,000円</td><td><strong>再発行推奨</strong></td></tr>
                <tr><td>1.0ct以上</td><td>約10,000〜20,000円</td><td>約100,000〜500,000円以上</td><td><strong>必ず再発行すべき</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>0.5カラット以上のダイヤモンドは、鑑定書の有無で<strong>数万円〜数十万円の差</strong>が出ます。再発行費用は1〜2万円程度なので、十分に元が取れます。</p>

          <p><strong>再発行の方法：</strong>GIA鑑定書の場合、ダイヤモンドにレーザー刻印されたレポート番号がわかれば、GIAに連絡してレポートのコピーを取得できます。CGLの場合は、ダイヤモンドを直接CGLに送付して再鑑定を依頼します（所要約2〜3週間）。</p>

          <h2>ダイヤモンド以外の宝石の買取相場</h2>

          <p>ダイヤモンド以外にも、さまざまな宝石が買取対象になります。</p>

          <h3>三大宝石（ルビー・サファイア・エメラルド）</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>宝石</th>
                  <th>高品質1ctの買取目安</th>
                  <th>高値がつく条件</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>ルビー</strong></td><td>約50,000〜500,000円</td><td>ミャンマー（ビルマ）産、ピジョンブラッド（鳩の血色）</td></tr>
                <tr><td><strong>サファイア</strong></td><td>約30,000〜300,000円</td><td>カシミール産、コーンフラワーブルー</td></tr>
                <tr><td><strong>エメラルド</strong></td><td>約20,000〜200,000円</td><td>コロンビア産、鮮やかなグリーン、内包物少なめ</td></tr>
              </tbody>
            </table>
          </div>

          <h3>その他の宝石</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>宝石</th>
                  <th>買取価格の傾向</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>真珠（パール）</strong></td><td>1粒 約1,000〜100,000円</td><td>サイズ・照り・巻き・形・色で評価。アコヤ真珠が主流</td></tr>
                <tr><td><strong>アレキサンドライト</strong></td><td>1ct 約100,000〜1,000,000円</td><td>変色効果（昼と夜で色が変わる）が強いほど高値</td></tr>
                <tr><td><strong>タンザナイト</strong></td><td>1ct 約10,000〜100,000円</td><td>鮮やかなバイオレットブルーが人気</td></tr>
                <tr><td><strong>オパール</strong></td><td>1ct 約5,000〜100,000円</td><td>ブラックオパール（オーストラリア産）が最高値</td></tr>
                <tr><td><strong>トパーズ</strong></td><td>1ct 約1,000〜20,000円</td><td>インペリアルトパーズが高値</td></tr>
                <tr><td><strong>ガーネット</strong></td><td>1ct 約500〜10,000円</td><td>デマントイドガーネットが希少</td></tr>
              </tbody>
            </table>
          </div>

          <p>宝石の買取価格は品質（色の鮮やかさ、透明度、サイズ）によって大きく異なります。また、<strong>産地</strong>も重要な評価ポイントで、同じルビーでもミャンマー産とタイ産では価格に大きな差があります。</p>

          <h2>ブランドジュエリーは高額買取のチャンス</h2>

          <p>ダイヤモンドや宝石がセットされたブランドジュエリーは、素材価値に加えて<strong>ブランドプレミアム</strong>が上乗せされるため、非常に高額な買取が期待できます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ブランド</th>
                  <th>ブランドプレミアムの目安</th>
                  <th>特に高値がつくライン</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>ハリーウィンストン</strong></td><td>素材価格の5〜10倍</td><td>リリークラスター、サンフラワー</td></tr>
                <tr><td><strong>カルティエ</strong></td><td>素材価格の3〜8倍</td><td>ラブリング、トリニティ、パンテール</td></tr>
                <tr><td><strong>ティファニー</strong></td><td>素材価格の2〜5倍</td><td>ティファニーセッティング、バイザヤード</td></tr>
                <tr><td><strong>ヴァンクリーフ＆アーペル</strong></td><td>素材価格の5〜10倍</td><td>アルハンブラ、ペルレ</td></tr>
                <tr><td><strong>ブルガリ</strong></td><td>素材価格の2〜5倍</td><td>ビーゼロワン、セルペンティ</td></tr>
                <tr><td><strong>グラフ</strong></td><td>素材価格の5〜10倍</td><td>大粒ダイヤモンドジュエリー</td></tr>
              </tbody>
            </table>
          </div>

          <p>ブランドジュエリーを売却する際は、以下の付属品が揃っているかどうかが重要です。</p>

          <ul>
            <li><strong>鑑定書・鑑別書</strong>（GIA、CGLなど）</li>
            <li><strong>購入証明書・レシート</strong></li>
            <li><strong>専用ケース・BOX</strong></li>
            <li><strong>ギャランティカード（保証書）</strong></li>
            <li><strong>ショッピングバッグ</strong></li>
          </ul>

          <p>付属品がすべて揃っている場合と、何もない場合では、<strong>買取価格が20〜50%以上変わる</strong>こともあります。</p>

          <CtaBox />

          <h2>4社比較 — ダイヤモンド・宝石買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>ダイヤ・宝石買取の特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>ダイヤモンド対応の複数業者を一括比較。鑑定書なしでもOK</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>宝石鑑定士が在籍。ダイヤモンドの4C評価に精通</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>ブランドジュエリーの出張買取に強い。出張費無料</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>ダイヤモンド・色石・真珠を含む宝石全般を査定可能</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><strong>ブランドジュエリーの場合は、金属買取専門店よりもブランド買取に強い業者の方が高値がつくことが多いです。</strong>両方に見積もりを取って比較しましょう。</p>

          <h2>ダイヤモンド・宝石買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "ダイヤモンドの買取価格はどれくらいですか？",
                a: "ダイヤモンドの買取価格は4C（カラット・カット・クラリティ・カラー）によって大きく異なります。0.3カラットで約3〜8万円、0.5カラットで約8〜20万円、1.0カラットで約30〜100万円が目安です。品質（4Cのグレード）によって同じカラット数でも数倍の差が出ます。",
              },
              {
                q: "鑑定書がないダイヤモンドも買取できますか？",
                a: "はい、鑑定書がなくても買取は可能です。ただし、鑑定書がない場合は業者が独自に鑑定するため、鑑定書付きの場合と比べて10〜30%程度買取価格が下がることがあります。GIA（米国宝石学会）やCGL（中央宝石研究所）の鑑定書があると最も高く評価されます。",
              },
              {
                q: "小さいダイヤモンド（メレダイヤ）も買取できますか？",
                a: "0.1カラット以下の小さなダイヤモンド（メレダイヤ）は、1石あたりの買取価格は非常に低い（数百円〜数千円程度）ですが、台座の金やプラチナの素材価値で買取されます。メレダイヤが多数ついたジュエリーなら、台座の金属価値と合わせると意外な金額になることもあります。",
              },
              {
                q: "ブランドジュエリーは高く買い取ってもらえますか？",
                a: "はい、ハリーウィンストン、カルティエ、ティファニー、ヴァンクリーフ＆アーペルなどのブランドジュエリーは、素材価値に加えてブランドプレミアムが上乗せされます。付属品（ケース、保証書、購入証明書など）が揃っていると、さらに高値がつきやすくなります。金属買取専門店とブランド買取専門店の両方に見積もりを取りましょう。",
              },
              {
                q: "ダイヤモンド以外の宝石も買取できますか？",
                a: "はい、ルビー、サファイア、エメラルド、真珠（パール）、アレキサンドライト、タンザナイト、オパールなど多くの宝石が買取対象です。ただし、宝石の種類や品質によって買取価格は大きく異なります。鑑別書があると正確な評価がされやすく、高値がつきやすくなります。",
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
            <Link href="/articles/platinum-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">プラチナ買取相場ガイド</p>
            </Link>
            <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
            </Link>
            <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">売却ガイド</span>
              <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">方法比較</span>
              <p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p>
            </Link>
          </div>

          <h2>まとめ</h2>

          <p>ダイヤモンドの買取価格は4C（カラット・カット・クラリティ・カラー）で決まります。同じカラット数でも品質によって数倍の差が出るため、<strong>鑑定書の有無が非常に重要</strong>です。</p>

          <p>ブランドジュエリー（ハリーウィンストン、カルティエ、ティファニーなど）は素材価値の数倍〜10倍以上のプレミアムがつくことがあり、付属品が揃っているかどうかでさらに大きな差が出ます。</p>

          <p>ダイヤモンド・宝石を高く売るポイントは以下の3つです。</p>

          <ol>
            <li><strong>鑑定書・付属品を揃える</strong>（GIA、CGLの鑑定書は必須級）</li>
            <li><strong>宝石鑑定に強い業者と金属買取業者の両方に見積もりを取る</strong></li>
            <li><strong>ブランドジュエリーはブランド買取専門店にも見積もりを取る</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で複数業者の見積もりを比較してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
