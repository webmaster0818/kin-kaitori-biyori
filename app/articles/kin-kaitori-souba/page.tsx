import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "【2026年最新】金買取相場一覧 — K24/K18/K14の1gあたり価格と推移",
  description:
    "2026年最新の金買取相場を純度別（K24・K22・K18・K14・K10）に一覧で掲載。金相場が動く5つの要因、業者別の買取価格差、過去10年の高値・安値ヒストリカルデータ、今後の見通しを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">今すぐ査定してみませんか？</h3>
      <p className="text-sm text-warm-gray text-center mb-4">相場を知ったら、次は実際の買取価格を確認。無料査定で損なく売却しましょう。</p>
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
        name: "金の買取価格と小売価格の違いは何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "小売価格は「金を買う場合の価格」、買取価格は「金を売る場合の価格」です。買取価格は小売価格より低く、その差額（スプレッド）が業者の利益になります。一般的に1gあたり50〜200円程度の差があります。",
        },
      },
      {
        "@type": "Question",
        name: "K18とK24で買取価格にどのくらい差がありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "K24（純金）は金含有率99.99%、K18は75%です。K18の1gあたり買取価格はK24の約75%程度になります。例えばK24が15,000円/gの場合、K18は約11,250円/g前後です。",
        },
      },
      {
        "@type": "Question",
        name: "金の買取に消費税はかかりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "金の売却時には消費税が上乗せされて支払われます。個人が金を売却して得た利益は「譲渡所得」として課税対象になります。年間50万円の特別控除があり、保有期間5年超の場合はさらに税率が優遇されます。",
        },
      },
      {
        "@type": "Question",
        name: "金相場が動く主な要因は何ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "金相場が動く主な要因は5つあります。(1)為替レート（円安・ドル高）、(2)有事・地政学リスク、(3)各国中央銀行の金購入動向、(4)世界的なインフレ率、(5)金の実需と供給バランスです。",
        },
      },
      {
        "@type": "Question",
        name: "金の相場が下がるタイミングはありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "金価格が下がりやすいのは、米国の金利が上昇する局面、ドル高が進む局面、世界経済が安定して安全資産への需要が減る局面です。ただし2020年以降は従来のセオリーが必ずしも当てはまらず、短期的な予測は困難です。",
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

export default function KinKaitoriSoubaPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金買取相場</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取相場一覧 — K24/K18/K14の1gあたり価格と推移</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

          <p>「金の買取相場っていくら？」「K18のネックレスを売りたいけど、今の相場がわからない」——そんな疑問をお持ちの方に向けて、この記事では<strong>2026年4月時点の最新の金買取相場を純度別に一覧で掲載</strong>しています。</p>

          <p>金の買取価格は、国際的な金価格（ロンドン金価格）と為替レート（ドル円相場）に連動して毎日変動します。そのため、売却を検討している方は<strong>「今がいくらなのか」をリアルタイムで把握することが重要</strong>です。</p>

          <p>この記事を読めば、以下のことがわかります。</p>
          <ul>
            <li>K24・K22・K18・K14・K10の純度別1gあたりの買取相場</li>
            <li>プラチナ（Pt1000/Pt900/Pt850）の買取相場</li>
            <li><strong>金相場が動く5つの要因</strong>（円安・有事・中央銀行・インフレ・需給）</li>
            <li><strong>業者別の買取価格差の実態</strong></li>
            <li><strong>過去10年の高値・安値ヒストリカルデータ</strong></li>
            <li>相場を自分で調べる方法</li>
            <li>相場を踏まえた最適な売却方法</li>
          </ul>

          <h2 id="k24">純度別 金の買取相場一覧（2026年4月）</h2>

          <p>金の買取価格は<strong>「純度」</strong>によって大きく異なります。以下は2026年4月時点の主要な金種の1gあたり買取相場の目安です。</p>

          <p>実際の買取価格は、業者の手数料率やその日のレート反映タイミングにより変動します。複数業者に査定を依頼して比較することをおすすめします。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>純度</th>
                  <th>金含有率</th>
                  <th>1gあたり買取相場（税込目安）</th>
                  <th>主な製品例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>K24（純金）</strong></td><td>99.99%</td><td>約15,000〜15,400円</td><td>インゴット、金貨、金箔</td></tr>
                <tr><td><strong>K22</strong></td><td>91.7%</td><td>約13,700〜14,100円</td><td>一部のコイン、海外ジュエリー</td></tr>
                <tr><td><strong>K18</strong></td><td>75.0%</td><td>約11,200〜11,600円</td><td>ネックレス、指輪、ブレスレット</td></tr>
                <tr><td><strong>K14</strong></td><td>58.5%</td><td>約8,700〜9,100円</td><td>ピアス、ペンダント、時計ケース</td></tr>
                <tr><td><strong>K10</strong></td><td>41.7%</td><td>約6,200〜6,500円</td><td>カジュアルアクセサリー</td></tr>
                <tr><td><strong>K9</strong></td><td>37.5%</td><td>約5,600〜5,900円</td><td>海外製アクセサリー</td></tr>
              </tbody>
            </table>
          </div>

          <blockquote>
            <p><strong>ポイント：</strong>上記はあくまで「素材としての金」の相場です。ブランド品（ティファニー、カルティエなど）の場合は、ブランド価値が上乗せされることがあります。ブランドジュエリーは、金買取専門店だけでなくブランド買取に強い業者にも見積もりを取りましょう。</p>
          </blockquote>

          <h2 id="platinum">プラチナの買取相場一覧（2026年4月）</h2>

          <p>金と並んで人気の貴金属がプラチナです。プラチナは工業用途（自動車の触媒など）での需要も大きく、金とは異なる値動きをします。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>純度</th>
                  <th>プラチナ含有率</th>
                  <th>1gあたり買取相場（税込目安）</th>
                  <th>主な製品例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Pt1000（純プラチナ）</strong></td><td>99.99%</td><td>約5,100〜5,400円</td><td>インゴット</td></tr>
                <tr><td><strong>Pt950</strong></td><td>95.0%</td><td>約4,800〜5,100円</td><td>結婚指輪、高級ジュエリー</td></tr>
                <tr><td><strong>Pt900</strong></td><td>90.0%</td><td>約4,500〜4,800円</td><td>指輪、ネックレス</td></tr>
                <tr><td><strong>Pt850</strong></td><td>85.0%</td><td>約4,200〜4,500円</td><td>チェーン、ブレスレット</td></tr>
              </tbody>
            </table>
          </div>

          <p>プラチナは2026年現在、金の約1/3の価格です。2000年代前半はプラチナの方が金より高価でしたが、金価格の高騰により逆転しました。しかし、プラチナには<strong>水素エネルギー関連の需要増加</strong>が見込まれており、中長期的な価格上昇の可能性があります。</p>

          <h2 id="dental">金歯・歯科用金属の買取相場</h2>

          <p>歯の治療で使われた金歯や金冠も、金としての価値があるため買取の対象となります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>金含有率の目安</th>
                  <th>1gあたり買取相場</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>金歯（金合金）</td><td>K16〜K20相当（60〜80%）</td><td>約9,000〜12,000円</td></tr>
                <tr><td>金パラ（金銀パラジウム合金）</td><td>金12%+パラジウム20%</td><td>約2,500〜3,500円</td></tr>
                <tr><td>銀歯（銀合金）</td><td>銀40〜50%</td><td>約50〜100円</td></tr>
              </tbody>
            </table>
          </div>

          <p>金歯は歯科医院で外してもらうか、自然に外れたものをそのまま買取に出せます。土台の歯（セメント等）が付いていても問題ありません。複数の金歯をまとめて査定に出すと、重量が増えるため買取価格が上がりやすくなります。</p>

          <h2 id="ingot">金貨・インゴットの買取相場</h2>

          <p>金貨やインゴット（金の延べ棒）は、素材としての金価値に加えて、プレミアム（上乗せ分）が付くことがあります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>種類</th>
                  <th>重量</th>
                  <th>買取相場の目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>メイプルリーフ金貨（1oz）</td><td>31.1g</td><td>約470,000〜480,000円</td></tr>
                <tr><td>ウィーン金貨ハーモニー（1oz）</td><td>31.1g</td><td>約470,000〜480,000円</td></tr>
                <tr><td>カンガルー金貨（1oz）</td><td>31.1g</td><td>約470,000〜480,000円</td></tr>
                <tr><td>金インゴット（100g）</td><td>100g</td><td>約1,510,000〜1,540,000円</td></tr>
                <tr><td>金インゴット（500g）</td><td>500g</td><td>約7,550,000〜7,700,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>インゴットの場合、<strong>LBMA（ロンドン貴金属市場協会）認定の刻印</strong>があるかどうかが重要です。田中貴金属、三菱マテリアル、住友金属鉱山、徳力本店などの国内大手精錬所の刻印があれば、高値で買い取ってもらえます。認定外のインゴットは、分析手数料が差し引かれる場合があります。</p>

          <CtaBox />

          <h2>金相場が動く5つの要因</h2>

          <p>金相場は複雑な要因が絡み合って変動します。以下の5つが主な要因であり、これを理解しておくと売却タイミングの判断に役立ちます。</p>

          <h3>要因1：為替レート（円安・ドル高）</h3>
          <p>金の国際取引はドル建てで行われるため、<strong>円安が進むと国内の金価格は上昇</strong>します。2020年の1ドル=約105円から2026年の約155円前後への円安進行は、円建て金価格を大きく押し上げました。仮にドル建て金価格が同じでも、円安が10%進めば国内金価格は10%上昇します。</p>

          <h3>要因2：有事・地政学リスク</h3>
          <p>戦争、テロ、金融危機などの「有事」が起きると、安全資産として金の需要が急増し、価格が上昇します。2022年のウクライナ侵攻、2023年以降の中東情勢の不安定化、米中対立の長期化は、いずれも金価格を押し上げる要因になっています。</p>

          <h3>要因3：各国中央銀行の金購入動向</h3>
          <p>中国人民銀行、インド準備銀行、ポーランド国立銀行、トルコ中央銀行などが外貨準備として金を大量購入しています。2022年以降は年間1,000トン以上の購入が続いており、<strong>「脱ドル化」の流れ</strong>の中で金の需要が構造的に拡大しています。中央銀行の購入は長期的なトレンドであり、簡単には反転しません。</p>

          <h3>要因4：世界的なインフレ率</h3>
          <p>インフレが進むと通貨の実質的な価値が下がるため、実物資産である金への需要が高まります。2021年以降、世界各国でインフレ率が上昇し、金がインフレヘッジ（インフレから資産を守る手段）として再評価されました。インフレ率が低下傾向にある2026年でも、実質金利が低水準にとどまっているため、金への需要は維持されています。</p>

          <h3>要因5：金の実需と供給バランス</h3>
          <p>金の需要は宝飾品（約50%）、投資（約25%）、中央銀行購入（約15%）、工業用途（約10%）で構成されています。一方で、新規鉱山開発は環境規制の強化や開発コストの上昇により困難になっており、<strong>供給量の大幅な増加は見込めない</strong>状況です。需要が拡大する中で供給が限定的であることが、中長期的な価格上昇の土台になっています。</p>

          <h2>業者別の買取価格差 — なぜ差が出るのか</h2>

          <p>同じ日に同じK18ネックレスを査定に出しても、<strong>業者によって買取価格に10〜30%の差</strong>が出ることがあります。この差はなぜ生まれるのでしょうか。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>差が出る要因</th>
                  <th>内容</th>
                  <th>影響度</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>手数料率（スプレッド）</strong></td><td>大手は1gあたり50〜100円の差、中小は200〜500円の差になることも</td><td>大</td></tr>
                <tr><td><strong>レート反映タイミング</strong></td><td>国際相場をリアルタイム反映する業者と、1日1回更新の業者で差が出る</td><td>中</td></tr>
                <tr><td><strong>販売ルート</strong></td><td>海外に直接輸出ルートを持つ業者は国内再販のみの業者より高値</td><td>中</td></tr>
                <tr><td><strong>キャンペーン</strong></td><td>新規顧客獲得のため買取価格を上乗せしている時期がある</td><td>小〜中</td></tr>
                <tr><td><strong>在庫状況</strong></td><td>特定の純度・製品を積極的に仕入れたい業者は高値を提示</td><td>小</td></tr>
              </tbody>
            </table>
          </div>

          <p>たとえばK18ネックレス（30g）を3社に見積もりした場合の例です。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者</th>
                  <th>1gあたり価格</th>
                  <th>30gの買取額</th>
                  <th>最高値との差</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>A社（大手チェーン）</td><td>11,200円</td><td>336,000円</td><td>-12,000円</td></tr>
                <tr><td>B社（一括査定最高値）</td><td>11,600円</td><td><strong>348,000円</strong></td><td>—</td></tr>
                <tr><td>C社（地域の質屋）</td><td>10,600円</td><td>318,000円</td><td>-30,000円</td></tr>
              </tbody>
            </table>
          </div>

          <p>最安値と最高値で<strong>3万円の差</strong>があります。たった数分の手間で3万円は大きいです。<strong>複数業者への相見積もりは絶対に省略しないでください。</strong></p>

          <h2>過去10年の金価格推移（高値・安値ヒストリカルデータ）</h2>

          <p>金価格は過去20年間で大きく上昇しています。過去10年の詳細な高値・安値データを見てみましょう。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>年</th>
                  <th>年間平均価格（K24/1g・税込）</th>
                  <th>年間高値</th>
                  <th>年間安値</th>
                  <th>前年比</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>2016年</td><td>約4,400円</td><td>約4,800円</td><td>約4,000円</td><td>—</td></tr>
                <tr><td>2017年</td><td>約4,600円</td><td>約4,900円</td><td>約4,300円</td><td>+4.5%</td></tr>
                <tr><td>2018年</td><td>約4,500円</td><td>約4,800円</td><td>約4,200円</td><td>-2.2%</td></tr>
                <tr><td>2019年</td><td>約5,000円</td><td>約5,500円</td><td>約4,500円</td><td>+11.1%</td></tr>
                <tr><td>2020年</td><td>約6,100円</td><td>約7,000円</td><td>約5,100円</td><td>+22.0%</td></tr>
                <tr><td>2021年</td><td>約6,400円</td><td>約6,900円</td><td>約5,900円</td><td>+4.9%</td></tr>
                <tr><td>2022年</td><td>約7,600円</td><td>約8,500円</td><td>約6,800円</td><td>+18.8%</td></tr>
                <tr><td>2023年</td><td>約8,800円</td><td>約10,000円</td><td>約7,800円</td><td>+15.8%</td></tr>
                <tr><td>2024年</td><td>約11,800円</td><td>約13,500円</td><td>約9,800円</td><td>+34.1%</td></tr>
                <tr><td>2025年</td><td>約14,200円</td><td>約15,000円</td><td>約12,500円</td><td>+20.3%</td></tr>
                <tr><td>2026年（1-4月）</td><td>約15,200円</td><td>約15,600円</td><td>約14,500円</td><td>+7.0%</td></tr>
              </tbody>
            </table>
          </div>

          <p>2016年から2026年の10年間で、金価格は<strong>約3.5倍</strong>に上昇しています。特に2024年は前年比+34%という驚異的な上昇率を記録しました。</p>

          <p>注目すべきは、<strong>各年の安値と高値に大きな差がある</strong>点です。2024年の場合、安値（約9,800円）と高値（約13,500円）の間に約3,700円/gの差があります。100gのインゴットなら37万円の差です。「いつ売るか」は重要ですが、短期的な底値・天井を正確に予測することは誰にもできません。</p>

          <h3>今後の見通し</h3>

          <p>多くのアナリストは、2026年後半にかけても金価格は<strong>高止まり〜緩やかな上昇</strong>を予測しています。主な理由は以下のとおりです。</p>

          <ul>
            <li>米FRBの利下げサイクルが金価格の下支えに</li>
            <li>中央銀行の金購入トレンドは継続見込み</li>
            <li>世界的な不確実性（地政学リスク）は解消されていない</li>
            <li>インフレ率は低下傾向だが、実質金利は低水準を維持</li>
          </ul>

          <p>ただし、<strong>短期的な調整（一時的な価格下落）は常にあり得ます</strong>。「いつ売るか」のタイミングを完璧に読むことは誰にもできません。そのため、「今の価格に満足できるなら売る」という判断基準が実践的です。</p>

          <CtaBox />

          <h2>金の相場を自分で調べる方法</h2>

          <p>金の買取相場は、以下の方法で自分でも確認できます。</p>

          <h3>1. 田中貴金属工業の公式サイト</h3>
          <p>国内最大手の貴金属ディーラーである田中貴金属工業は、毎営業日の金・プラチナ・銀の小売価格と買取価格を公開しています。「田中貴金属 金価格」で検索すると、その日の1gあたりの価格がすぐにわかります。</p>

          <h3>2. 三菱マテリアルの公式サイト</h3>
          <p>三菱マテリアルも毎日の金価格を公開しています。グラフ形式で推移が確認できるため、トレンドの把握に便利です。</p>

          <h3>3. 日本金地金流通協会</h3>
          <p>業界団体である日本金地金流通協会のサイトでは、複数の会員企業の金価格を比較できます。業者間の価格差を把握するのに役立ちます。</p>

          <h3>4. 買取業者の公式サイト</h3>
          <p>多くの買取業者が自社サイトで「今日の買取価格」を公開しています。ただし、<strong>業者が公開している価格は「基準価格」であり、実際の買取価格は手数料や諸条件により異なる</strong>場合があります。正確な金額は、実際に査定を依頼してください。</p>

          <h3>5. 一括査定サービス（ヒカカク！など）</h3>
          <p>複数の買取業者に一度に査定依頼を出せるサービスです。業者ごとの買取価格を比較できるため、<strong>最高値で売りたい場合は一括査定が最も効率的</strong>です。</p>

          <blockquote>
            <p><strong>注意：</strong>「金 相場 本日」などで検索して出てくる価格は「小売価格（買う場合の価格）」であることが多いです。売却する場合の「買取価格」は小売価格より低くなります（通常、1gあたり50〜200円程度の差）。</p>
          </blockquote>

          <h2>金の買取相場に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "金の買取価格と小売価格の違いは何ですか？",
                a: "小売価格は「金を買う場合の価格」、買取価格は「金を売る場合の価格」です。買取価格は小売価格より低く、その差額（スプレッド）が業者の利益になります。一般的に1gあたり50〜200円程度の差があります。複数業者に見積もりを取ることで、スプレッドの小さい業者を見つけられます。",
              },
              {
                q: "K18とK24で買取価格にどのくらい差がありますか？",
                a: "K24（純金）は金含有率99.99%、K18は75%です。そのため、K18の1gあたり買取価格はK24の約75%程度になります。例えば、K24が15,000円/gの場合、K18は約11,250円/g前後です。ただし、K18製品にはデザイン性やブランド価値が加味されることがあるため、製品の状態やブランドによってはさらに高値が付くこともあります。",
              },
              {
                q: "金の買取に消費税はかかりますか？",
                a: "金の売却時には消費税が上乗せされて支払われます（売却額に消費税分が含まれる）。つまり、金を売る側にとっては消費税分が「プラス」になります。なお、個人が金を売却して得た利益は「譲渡所得」として課税対象になります。年間50万円の特別控除があり、保有期間5年超の場合はさらに税率が優遇されます。",
              },
              {
                q: "壊れた金アクセサリーでも買取価格は同じですか？",
                a: "基本的に、金の買取は「素材としての重量と純度」で価格が決まるため、壊れていても買取価格は同じです。ただし、デザイン性やブランド価値が評価される「ジュエリーとしての買取」の場合は、状態が良い方が高値になります。壊れた金アクセサリーは、金の素材買取に特化した業者に依頼するのがおすすめです。",
              },
              {
                q: "金の相場が下がるタイミングはありますか？",
                a: "金価格が下がりやすいのは、米国の金利が上昇する局面、ドル高が進む局面、世界経済が安定して「安全資産」への需要が減る局面です。ただし、2020年以降は従来のセオリーが必ずしも当てはまらず、金利上昇局面でも金価格が上昇するケースが増えています。短期的な予測は困難なため、「売りたい時が売り時」と考えるのが実践的です。",
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

          <CtaBox />

          <h2>まとめ</h2>

          <p>金の買取相場は2026年4月現在、歴史的な高値圏にあります。K24（純金）は1gあたり約15,200円前後、K18は約11,400円前後で取引されています。</p>

          <p>金価格は今後も高止まりが予想されていますが、短期的な調整はいつ起きてもおかしくありません。「今の価格で納得できるなら売る」というのが、最も合理的な判断基準です。</p>

          <p>売却を検討している方は、<strong>必ず複数の業者に査定を依頼</strong>してください。同じ金製品でも、業者によって買取価格に数千円〜数万円の差が出ることがあります。一括査定サービスを使えば、手間なく最高値の業者が見つかります。</p>

          <ul>
            <li><strong>最高値で売りたい</strong> → <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！で一括査定</a></li>
            <li><strong>店頭で即現金化したい</strong> → <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉の店舗を探す</a></li>
            <li><strong>自宅で完結したい</strong> → <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエルの出張買取</a></li>
            <li><strong>方法を選びたい</strong> → <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナで査定依頼</a></li>
          </ul>
        </article>
      </div>
    </>
  );
}
