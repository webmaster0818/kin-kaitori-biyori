import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金の指輪の買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、K18の指輪は1gあたり約11,200〜11,600円が買取目安です。一般的な結婚指輪（3〜5g）なら約34,000〜57,000円、ファッションリング（5〜10g）なら約57,000〜114,000円程度です。" } },
      { "@type": "Question", name: "結婚指輪や婚約指輪も買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、結婚指輪・婚約指輪も買取可能です。K18やPt900の素材価値で査定されます。ダイヤモンド付きの婚約指輪は、金属部分の素材価値に加えてダイヤの評価も加算されます。" } },
      { "@type": "Question", name: "サイズが合わなくなった指輪も売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、サイズに関係なく買取可能です。金の買取は素材の重量と純度で査定されるため、指輪のサイズは買取価格に影響しません。" } },
      { "@type": "Question", name: "刻印がない指輪でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、刻印がなくても買取可能です。買取業者はX線分析装置で正確な純度を測定しますので、刻印がなくても適正な査定を受けられます。ただし、金メッキの場合は買取不可です。" } },
      { "@type": "Question", name: "宝石付きの金の指輪はどう査定されますか？", acceptedAnswer: { "@type": "Answer", text: "金の素材価値と宝石の価値の合計で査定されます。ダイヤモンドは4C（カラット・カラー・クラリティ・カット）で評価されます。鑑定書があれば正確な評価が可能です。ブランドリングの場合はブランド価値も加算されます。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】金の指輪（リング）買取相場ガイド — 結婚指輪・ブランドリングの価格と高く売るコツ",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の指輪（リング）買取相場ガイド — 結婚指輪・ブランドリングの価格と高く売るコツ",
  description:
    "金の指輪の最新買取相場をK18・K24・K14・Pt900の素材別に掲載。結婚指輪・婚約指輪・ブランドリングの買取価格目安、宝石付きリングの査定ポイント、高く売るコツとおすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金の指輪の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">指輪の買取価格は業者によって差があります。複数社で比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinYubiwaKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の指輪買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-brand.png" alt="金の指輪の買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の指輪（リング）買取相場ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月13日</p>

        <p>金の指輪は、結婚指輪、婚約指輪、ファッションリングなど<strong>幅広いシーンで使われる金製品</strong>です。サイズが合わなくなった、離婚して不要になった、デザインが古い——理由はさまざまですが、金の指輪には<strong>素材としての確かな価値</strong>があり、買取業者で現金化できます。</p>

        <p>「金の指輪はいくらで売れる？」「結婚指輪のプラチナも売れる？」「ダイヤ付きの指輪はどう査定される？」——この記事では、金の指輪の<strong>素材別・種類別の買取相場、宝石付きリングの査定方法、高く売るコツ</strong>を徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金の指輪の素材別・重量別の最新買取相場</li>
          <li>結婚指輪・婚約指輪・ファッションリングの買取ポイント</li>
          <li>ダイヤモンド・宝石付きリングの査定方法</li>
          <li>ブランドリングの買取で知っておくべきこと</li>
          <li>金の指輪を高く売るコツとおすすめ業者</li>
        </ul>

        <CtaBox />

        <h2>金の指輪の買取相場一覧（2026年4月）</h2>

        <p>金の指輪の買取価格は、ネックレスと同様に<strong>「素材の純度」×「重量」</strong>で算出されます。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>素材</th>
                <th>1gあたり買取価格</th>
                <th>3g（細身リング）</th>
                <th>5g（標準リング）</th>
                <th>10g（太身リング）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>約15,200円</td><td>約45,600円</td><td>約76,000円</td><td>約152,000円</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>約11,400円</td><td>約34,200円</td><td>約57,000円</td><td>約114,000円</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>約8,900円</td><td>約26,700円</td><td>約44,500円</td><td>約89,000円</td></tr>
              <tr><td><strong>K10（10金）</strong></td><td>約6,000円</td><td>約18,000円</td><td>約30,000円</td><td>約60,000円</td></tr>
              <tr><td><strong>Pt900</strong></td><td>約4,700円</td><td>約14,100円</td><td>約23,500円</td><td>約47,000円</td></tr>
              <tr><td><strong>Pt950</strong></td><td>約4,900円</td><td>約14,700円</td><td>約24,500円</td><td>約49,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>指輪は<strong>ネックレスと比べると重量が軽い</strong>（3〜10g程度）ため、1本あたりの買取額はネックレスより低くなりがちです。しかし、ダイヤモンドや宝石が付いている場合は石の価値が加算され、<strong>金属部分の価値の数倍</strong>になることもあります。</p>

        <h2>指輪の種類別 — 重量の目安と買取相場</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>指輪の種類</th>
                <th>素材</th>
                <th>重量の目安</th>
                <th>買取目安（金属部分のみ）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>結婚指輪（マリッジリング）</strong></td><td>K18 / Pt900</td><td>3〜5g</td><td>約14,000〜57,000円</td></tr>
              <tr><td><strong>婚約指輪（エンゲージリング）</strong></td><td>Pt900 / K18</td><td>3〜6g</td><td>約14,000〜68,000円 + ダイヤ</td></tr>
              <tr><td><strong>ファッションリング</strong></td><td>K18 / K14 / K10</td><td>3〜10g</td><td>約18,000〜114,000円</td></tr>
              <tr><td><strong>印台リング（メンズ）</strong></td><td>K18 / K24</td><td>10〜30g</td><td>約114,000〜456,000円</td></tr>
              <tr><td><strong>ピンキーリング</strong></td><td>K10 / K14</td><td>1〜3g</td><td>約6,000〜27,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>メンズの印台リングは<strong>10〜30gと重量がある</strong>ため、K18であれば10万円以上の高額買取が期待できます。逆にK10のピンキーリングは1〜3gと軽いため、1本の買取額は6,000〜18,000円程度です。</p>

        <h2>結婚指輪・婚約指輪の買取</h2>

        <h3>結婚指輪（マリッジリング）</h3>

        <p>結婚指輪はK18またはPt900が一般的です。シンプルなデザインが多く、重量は3〜5g程度。<strong>ペア（2本セット）で売却</strong>すると合計重量が増えるため、まとまった買取額になります。</p>

        <p>K18の結婚指輪をペアで売る場合（合計8g程度）、<strong>約91,200円</strong>の買取目安です。Pt900の場合は約37,600円です。現在は金がプラチナより高値のため、K18の方が高額になります。</p>

        <h3>婚約指輪（エンゲージリング）</h3>

        <p>婚約指輪は<strong>ダイヤモンドの価値</strong>が買取額を大きく左右します。金属部分（Pt900やK18）の素材価値に加え、センターストーンのダイヤモンドが4C（カラット・カラー・クラリティ・カット）で評価されます。</p>

        <p><strong>鑑定書（GIAやCGLの証明書）</strong>があれば正確な評価が可能です。鑑定書がなくても査定は受けられますが、鑑定書ありの方が高値がつく傾向があります。</p>

        <p>詳しくは<Link href="/articles/diamond-kaitori/" className="text-accent hover:underline">ダイヤモンド・宝石買取ガイド</Link>をご覧ください。</p>

        <h3>ブランドリングの高額買取</h3>

        <p>ブランドリングは<strong>金属 + 宝石 + ブランド価値</strong>のトリプルで評価されます。人気ブランドの定番モデルは、金の素材価値だけの査定と比べて<strong>2〜5倍以上</strong>の買取価格になることも珍しくありません。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ブランド</th>
                <th>人気モデル</th>
                <th>買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>カルティエ</strong></td><td>ラブリング（K18YG）</td><td>約80,000〜120,000円</td></tr>
              <tr><td><strong>カルティエ</strong></td><td>トリニティリング</td><td>約70,000〜100,000円</td></tr>
              <tr><td><strong>ティファニー</strong></td><td>Tワイヤーリング</td><td>約40,000〜80,000円</td></tr>
              <tr><td><strong>ブルガリ</strong></td><td>ビー・ゼロワンリング</td><td>約60,000〜120,000円</td></tr>
              <tr><td><strong>ヴァンクリーフ</strong></td><td>ペルレリング</td><td>約50,000〜90,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>ブランドリングを売る場合は、<strong>金買取専門店とブランド買取専門店の両方に見積もりを取る</strong>のが鉄則です。金の素材価値だけを見る業者では、ブランドの付加価値が評価されず損をする可能性があります。</p>

        <CtaBox />

        <h2>宝石付き指輪の査定ポイント</h2>

        <h3>ダイヤモンド</h3>

        <p>ダイヤモンドは4C（カラット・カラー・クラリティ・カット）で評価されます。0.3ct以上のダイヤは<strong>個別評価</strong>されることが多く、鑑定書があると正確な査定が可能です。</p>

        <ul>
          <li><strong>0.1〜0.2ct:</strong> 数千円〜1万円程度</li>
          <li><strong>0.3〜0.5ct:</strong> 3万円〜10万円程度</li>
          <li><strong>1ct以上:</strong> 10万円〜100万円以上（品質による）</li>
        </ul>

        <h3>カラーストーン（色石）</h3>

        <p>ルビー、サファイア、エメラルドなどのカラーストーンも評価対象です。ただし、ダイヤモンドと比べると<strong>買取価格が付きにくい</strong>傾向があります。天然石の鑑別書があれば査定額アップにつながります。</p>

        <h3>宝石なし（金のみ）のリング</h3>

        <p>宝石が付いていないシンプルな金リングは、<strong>純粋に金の素材価値</strong>で査定されます。重量がすべてなので、正確な計量が重要です。</p>

        <h2>金の指輪を高く売る5つのコツ</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>
        <p>金の指輪の買取価格は業者によって差があります。特に宝石付きやブランドリングは業者間の差が大きいため、<strong>最低3社</strong>に見積もりを取りましょう。</p>

        <h3>2. ブランドリングはブランド買取専門店にも見積もりを</h3>
        <p>カルティエのラブリングなど人気モデルは、金の素材価値の2倍以上で取引されます。ブランド買取に強い業者を必ず含めましょう。</p>

        <h3>3. 鑑定書・保証書を揃える</h3>
        <p>ダイヤモンドの鑑定書（GIA、CGL等）やブランドの保証書があると査定額が大きくアップします。購入時の付属品を探しておきましょう。</p>

        <h3>4. ペアリングは2本セットで売る</h3>
        <p>結婚指輪のペアをバラで売るより、<strong>2本セットの方が合計重量が増えて効率的</strong>です。また、ブランドペアリングはセットの方がブランド価値も評価されやすくなります。</p>

        <h3>5. 複数の指輪をまとめて売る</h3>
        <p>タンスに眠っている指輪を複数まとめて持ち込むと、<strong>合計金額での上乗せ交渉</strong>がしやすくなります。「全部まとめるので少し上乗せしてほしい」と伝えましょう。</p>

        <CtaBox />

        <h2>金の指輪の買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>
        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数業者に一括査定。指輪の写真を送るだけで概算査定を受けられます。宝石付き・ブランドリングも対応。</p>

        <h3>買取大吉 — 全国600店舗で即現金化</h3>
        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国600店舗以上で予約不要。その場で計量・査定し即現金化。ブランドリングの査定にも対応しています。</p>

        <h3>ウリエル — 自宅で完結する出張買取</h3>
        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取に特化。遺品整理で見つかった指輪の大量査定にも便利です。出張費・査定料・キャンセル料すべて無料。</p>

        <h3>ティファナ — 3つの方法から選べる</h3>
        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張・宅配の3方法対応。忙しくて店に行けない方は宅配買取が便利です。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "結婚指輪は1本いくらで売れますか？",
              a: "K18の結婚指輪（4g程度）なら約45,600円、Pt900（4g程度）なら約18,800円が2026年4月時点の買取目安です。ペア（2本）で売ると合計額は倍になります。",
            },
            {
              q: "名前や日付の刻印が入っていても売れますか？",
              a: "はい、問題なく売れます。金の買取は溶かして再利用するための素材買取なので、イニシャルや日付の刻印は査定に影響しません。",
            },
            {
              q: "指輪のサイズが大きい方が高く売れますか？",
              a: "サイズが大きい＝金属量が多い＝重い、という傾向はありますが、査定は正確な重量で行われます。サイズ号数は価格に直接影響しません。重量（グラム）がすべてです。",
            },
            {
              q: "変色した指輪でも売れますか？",
              a: "はい、変色していても買取可能です。K18WG（ホワイトゴールド）のロジウムメッキが剥がれて黄色くなっているケースなどがありますが、金の素材価値は変わりません。",
            },
            {
              q: "プラチナと金の指輪、どちらが高く売れますか？",
              a: "2026年4月現在、K18の方がPt900より高く売れます。K18は1gあたり約11,400円、Pt900は約4,700円で、同じ重量ならK18がプラチナの約2.4倍の価格です。",
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
          <Link href="/articles/kin-necklace-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">金ネックレス買取相場ガイド</p>
          </Link>
          <Link href="/articles/kin-bracelet-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">金ブレスレット買取相場ガイド</p>
          </Link>
          <Link href="/articles/diamond-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">ダイヤモンド・宝石買取ガイド</p>
          </Link>
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
          </Link>
          <Link href="/articles/cartier-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">カルティエ買取相場ガイド</p>
          </Link>
          <Link href="/articles/platinum-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">プラチナ買取相場ガイド</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>金の指輪は、サイズが合わなくなっても、デザインが古くなっても、宝石が取れてしまっても——<strong>金の素材としての価値は変わりません</strong>。</p>

        <p>2026年4月現在、K18の指輪は1gあたり約11,400円。<strong>5gの指輪なら約57,000円</strong>、<strong>ダイヤ付きのブランドリングなら10万円以上</strong>の買取が期待できます。</p>

        <p>指輪を少しでも高く売るために、以下のポイントを実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（一括査定で効率的に比較）</li>
          <li><strong>ブランドリングは金買取とブランド買取の両方に見積もりを取る</strong></li>
          <li><strong>鑑定書・保証書・付属品を揃えて査定に出す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の指輪の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
