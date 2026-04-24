import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "銀（シルバー）の買取相場は1gあたりいくらですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、銀の買取相場は1gあたり約130〜145円です（SV1000/純銀の場合）。SV925（スターリングシルバー）の場合は1gあたり約120〜135円が目安です。金やプラチナに比べて単価は低いですが、重量のある製品ならまとまった金額になります。" } },
      { "@type": "Question", name: "シルバーアクセサリーは買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、SV925やSV950の刻印があるシルバーアクセサリーは買取可能です。ただし、銀は1gあたりの単価が低いため、軽いアクセサリー1点では数百円程度の買取額になることが多いです。まとめて売る方が効率的です。" } },
      { "@type": "Question", name: "銀食器やカトラリーは買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、銀食器やカトラリーも買取可能です。特にクリストフルやティファニーなどのブランド銀食器は、銀の素材価値に加えてブランド価値が上乗せされ、高額買取が期待できます。" } },
      { "@type": "Question", name: "銀の変色（黒ずみ）は買取価格に影響しますか？", acceptedAnswer: { "@type": "Answer", text: "素材買取の場合、変色は価格に影響しません。銀の黒ずみは表面の硫化反応であり、素材としての価値は変わりません。ただし、ブランド買取として評価される場合は、磨いてから持ち込んだ方が印象が良くなることがあります。" } },
      { "@type": "Question", name: "銀と金を一緒に査定に出せますか？", acceptedAnswer: { "@type": "Answer", text: "はい、まとめて査定に出せます。金・銀・プラチナなど複数の貴金属をまとめて持ち込むと、総重量が増えるため業者が取引効率を考慮して1gあたりの単価を上げてくれることがあります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】銀（シルバー）買取相場ガイド — SV925・SV1000の1gあたり価格と高く売る方法",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" },
    description: "銀（シルバー）の最新買取相場を1gあたりの価格で掲載。SV925・SV1000の純度別価格、銀食器・シルバーアクセサリーの買取事情、高く売るコツを徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】銀（シルバー）買取相場ガイド — SV925・SV1000の1gあたり価格と高く売る方法",
  description:
    "銀（シルバー）の最新買取相場を1gあたりの価格で掲載。SV925・SV1000の純度別価格目安、銀食器・アクセサリーの買取、高く売るコツ、おすすめ買取業者4社を比較。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">銀製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">銀の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function GinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">銀（シルバー）買取ガイド</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】銀（シルバー）買取相場ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>銀（シルバー）は金やプラチナに次ぐ代表的な貴金属です。アクセサリー、食器、工芸品、工業用途など幅広く使われており、<strong>不要になった銀製品を売却したい</strong>という方も多いでしょう。</p>

        <p>「銀の買取相場はいくら？」「SV925のアクセサリーは売れる？」「銀食器をまとめて売りたい」——この記事では、銀の買取に関する<strong>相場・製品別の価格目安・高く売るコツ</strong>をすべて解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>銀（シルバー）の最新買取相場（1gあたりの価格）</li>
          <li>SV925・SV1000など純度別の買取価格</li>
          <li>銀食器・銀アクセサリー・銀貨の買取事情</li>
          <li>銀を高く売るためのコツ</li>
          <li>おすすめの買取業者</li>
        </ul>

        <h2>銀（シルバー）とは — 基本知識</h2>

        <p>銀は原子番号47の貴金属で、<strong>熱伝導率・電気伝導率がすべての金属の中で最も高い</strong>という特性を持っています。白く美しい光沢があり、古くからジュエリーや食器、貨幣に使われてきました。</p>

        <h3>銀の純度と表記</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>表記</th>
                <th>純度</th>
                <th>用途</th>
                <th>特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>SV1000（純銀）</strong></td><td>99.9%以上</td><td>インゴット、一部の銀貨</td><td>非常に柔らかい。加工品にはほぼ使われない</td></tr>
              <tr><td><strong>SV950</strong></td><td>95.0%</td><td>高級銀食器、工芸品</td><td>硬度がやや高い。ブリタニアシルバーとも呼ばれる</td></tr>
              <tr><td><strong>SV925（スターリングシルバー）</strong></td><td>92.5%</td><td>アクセサリー、ジュエリー</td><td>最も一般的。「925」の刻印で表記</td></tr>
              <tr><td><strong>SV900（コインシルバー）</strong></td><td>90.0%</td><td>銀貨、アンティーク</td><td>旧来の銀貨に使われた純度</td></tr>
            </tbody>
          </table>
        </div>

        <p>市場で最も多く流通しているのは<strong>SV925（スターリングシルバー）</strong>です。ティファニー、クロムハーツ、ジョージジェンセンなどの有名ブランドもSV925を採用しています。</p>

        <h2>銀の最新買取相場（2026年4月）</h2>

        <p>2026年4月現在の銀の買取相場は以下のとおりです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>1gあたり買取価格（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>SV1000（純銀）</strong></td><td>約130〜145円</td></tr>
              <tr><td><strong>SV950</strong></td><td>約125〜140円</td></tr>
              <tr><td><strong>SV925</strong></td><td>約120〜135円</td></tr>
              <tr><td><strong>SV900</strong></td><td>約115〜130円</td></tr>
            </tbody>
          </table>
        </div>

        <p>銀の国際相場は2026年4月時点で1gあたり約420〜430円（小売価格）で推移しています。買取価格は小売価格の30〜35%程度が一般的です。金やプラチナに比べて<strong>1gあたりの単価は低い</strong>ですが、重量のある銀食器やインゴットであればまとまった金額になります。</p>

        <h3>銀価格の推移</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>年</th>
                <th>銀 1gあたり買取価格（年間平均目安）</th>
                <th>前年比</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2020年</td><td>約60円</td><td>—</td></tr>
              <tr><td>2021年</td><td>約80円</td><td>+33%</td></tr>
              <tr><td>2022年</td><td>約75円</td><td>-6%</td></tr>
              <tr><td>2023年</td><td>約85円</td><td>+13%</td></tr>
              <tr><td>2024年</td><td>約105円</td><td>+24%</td></tr>
              <tr><td>2025年</td><td>約125円</td><td>+19%</td></tr>
              <tr><td>2026年（1〜4月）</td><td>約135円</td><td>+8%</td></tr>
            </tbody>
          </table>
        </div>

        <p>銀の買取価格は2020年の約60円から2026年の約135円へと、<strong>6年間で約2.3倍</strong>に上昇しています。金ほどではありませんが、銀も高値圏で推移しています。</p>

        <h2>銀製品別の買取価格目安</h2>

        <h3>シルバーアクセサリー</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>製品</th>
                <th>重量の目安</th>
                <th>素材買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>シルバーリング（細め）</td><td>5〜10g</td><td>約600〜1,350円</td></tr>
              <tr><td>シルバーリング（太め）</td><td>15〜30g</td><td>約1,800〜4,050円</td></tr>
              <tr><td>シルバーネックレス</td><td>20〜50g</td><td>約2,400〜6,750円</td></tr>
              <tr><td>シルバーブレスレット</td><td>30〜80g</td><td>約3,600〜10,800円</td></tr>
              <tr><td>シルバーバングル</td><td>40〜100g</td><td>約4,800〜13,500円</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p><strong>重要：</strong>クロムハーツ、ティファニー、ゴローズなどのブランドシルバーアクセサリーは、素材価値の<strong>10倍〜100倍以上</strong>の買取額がつくことがあります。ブランド買取専門店にも見積もりを取りましょう。</p>
        </blockquote>

        <h3>銀食器・カトラリー</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>製品</th>
                <th>重量の目安</th>
                <th>素材買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>スプーン（1本）</td><td>30〜60g</td><td>約3,600〜8,100円</td></tr>
              <tr><td>フォーク（1本）</td><td>30〜50g</td><td>約3,600〜6,750円</td></tr>
              <tr><td>カトラリーセット（6組）</td><td>500〜1,000g</td><td>約60,000〜135,000円</td></tr>
              <tr><td>銀のティーポット</td><td>300〜800g</td><td>約36,000〜108,000円</td></tr>
              <tr><td>銀のトレー</td><td>200〜500g</td><td>約24,000〜67,500円</td></tr>
            </tbody>
          </table>
        </div>

        <p>銀食器は1点の重量が大きいため、<strong>まとまった買取額</strong>になります。特にクリストフル、ティファニー、ジョージジェンセンなどのブランド銀食器は素材価値以上の評価がつくことがあります。</p>

        <h3>銀貨・銀インゴット</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>製品</th>
                <th>重量</th>
                <th>買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>メイプルリーフ銀貨（1oz）</td><td>31.1g</td><td>約4,000〜4,500円（+コレクター価値）</td></tr>
              <tr><td>イーグル銀貨（1oz）</td><td>31.1g</td><td>約4,000〜4,500円（+コレクター価値）</td></tr>
              <tr><td>銀インゴット（100g）</td><td>100g</td><td>約13,000〜14,500円</td></tr>
              <tr><td>銀インゴット（1kg）</td><td>1,000g</td><td>約130,000〜145,000円</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>銀を高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>まとめて売る</strong>
            <p>銀は1gあたりの単価が低いため、少量では買取額が小さくなります。複数のシルバー製品をまとめて持ち込むことで、総重量が増え、業者も対応しやすくなります。金やプラチナの製品も一緒に持ち込むとさらに効果的です。</p>
          </li>
          <li>
            <strong>ブランド品はブランド買取店にも見積もりを取る</strong>
            <p>クロムハーツ、ティファニー、ゴローズなどのシルバーアクセサリーは、素材買取の数十倍〜100倍以上の価格がつく場合があります。必ずブランド買取専門店にも見積もりを取りましょう。</p>
          </li>
          <li>
            <strong>銀食器はブランドと状態を確認する</strong>
            <p>クリストフルやティファニーの銀食器は、ブランド価値で高額買取が期待できます。磨いて綺麗な状態で持ち込むと印象が良くなります。</p>
          </li>
          <li>
            <strong>刻印を確認する</strong>
            <p>SV925、925、STERLING、SV950などの刻印を確認してから持ち込みましょう。刻印がない場合でも、業者がX線分析で純度を判定してくれます。</p>
          </li>
          <li>
            <strong>複数業者で比較する</strong>
            <p>銀は業者によって買取レートに差があります。特に大量の銀製品を売る場合は、数社に見積もりを取ることで数千円〜数万円の差が出ることがあります。</p>
          </li>
        </ol>

        <h2>銀の買取で知っておくべき注意点</h2>

        <h3>銀メッキ（シルバープレート）は買取不可</h3>

        <p>銀メッキ（EPNS、Silver Platedなどの刻印）の製品は、銀の含有量が極めて少ないため、ほとんどの業者で<strong>買取不可</strong>です。「STERLING」「SV925」「925」などの刻印がある製品のみが銀製品として買取対象になります。</p>

        <h3>変色（黒ずみ）は価格に影響しない</h3>

        <p>銀は空気中の硫黄と反応して黒ずみます（硫化）。これは表面だけの変化であり、<strong>素材としての価値は変わりません</strong>。磨く必要はありませんが、ブランド品の場合は見た目の印象を良くするために軽く磨いてから持ち込むのも手です。</p>

        <h3>少量では買取額が低い</h3>

        <p>銀は1gあたり約130円程度のため、10gのシルバーリング1本では約1,300円程度の買取額です。「わざわざ持ち込む手間に見合わない」と感じる方は、<strong>金やプラチナの製品と一緒にまとめて</strong>査定に出すのがおすすめです。</p>

        <h2>4社比較 — 銀買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>銀買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者の銀買取価格を一括比較</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>銀を含む貴金属全般に対応。即日現金化</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>銀食器など重い製品も自宅で完結</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>銀を含む幅広い品目に対応</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>銀買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "銀（シルバー）の買取相場は1gあたりいくらですか？",
              a: "2026年4月現在、純銀（SV1000）で1gあたり約130〜145円、SV925で約120〜135円が目安です。金（K24で約15,200円/g）と比べると単価は低いですが、重量のある銀食器やインゴットならまとまった金額になります。",
            },
            {
              q: "シルバーアクセサリーは買取できますか？",
              a: "SV925やSV950の刻印があるシルバーアクセサリーは買取可能です。クロムハーツやティファニーなどのブランド品は素材価値の数十倍以上の買取額が期待できます。",
            },
            {
              q: "銀食器やカトラリーは買取できますか？",
              a: "はい、銀食器やカトラリーも買取可能です。重量があるためまとまった金額になります。クリストフルなどのブランド食器はブランド価値も加算されます。",
            },
            {
              q: "銀の変色（黒ずみ）は買取価格に影響しますか？",
              a: "素材買取の場合、変色は価格に影響しません。黒ずみは表面の硫化反応で、素材の価値は変わりません。",
            },
            {
              q: "銀メッキの製品は買取できますか？",
              a: "銀メッキ（EPNS、Silver Platedなど）の製品は銀の含有量が極めて少ないため、ほとんどの業者で買取不可です。「925」「STERLING」の刻印がある製品のみが対象です。",
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
          <Link href="/articles/platinum-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">プラチナ買取相場ガイド</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>銀（シルバー）は金やプラチナと比べて1gあたりの単価は低いですが、銀食器やカトラリー、大型のシルバーアクセサリーなど<strong>重量のある製品であればまとまった買取額</strong>になります。</p>

        <p>特にブランドシルバー（クロムハーツ、ティファニー、ゴローズなど）は素材価値の数十倍以上の価格がつくため、<strong>必ずブランド買取専門店にも見積もりを取る</strong>ことが重要です。</p>

        <ol>
          <li><strong>まとめて売る（金・プラチナと一緒に査定に出す）</strong></li>
          <li><strong>ブランド品はブランド買取店にも見積もりを取る</strong></li>
          <li><strong>複数業者で比較して最高値を探す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で銀製品の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
