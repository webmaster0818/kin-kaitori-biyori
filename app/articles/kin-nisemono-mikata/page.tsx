import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金と金メッキの簡単な見分け方は？", acceptedAnswer: { "@type": "Answer", text: "最も簡単なのは刻印の確認です。本物の金はK24・K18・750などの刻印があり、金メッキはK18GP・K18GFなどGP/GFの表記があります。また、磁石に近づけて反応する場合は偽物の可能性が高いです（本物の金は磁石に反応しません）。" } },
      { "@type": "Question", name: "磁石で金の本物と偽物を見分けられますか？", acceptedAnswer: { "@type": "Answer", text: "ある程度は見分けられます。本物の金は磁石に反応しません。磁石にくっつく場合は鉄やニッケルなどの金属を含む偽物の可能性が高いです。ただし、タングステンなど磁石に反応しない金属で作られた精巧な偽物も存在するため、磁石テストだけでは完全な判定はできません。" } },
      { "@type": "Question", name: "金メッキ（K18GP）と本物の金（K18）の違いは？", acceptedAnswer: { "@type": "Answer", text: "K18GPは真鍮やステンレスの表面に薄い金の膜をコーティングしたもので、金の含有量は極めて少なく、買取価格はほぼゼロです。本物のK18は金が75%含まれた合金で、素材そのものに価値があります。刻印のGP（Gold Plated）やGF（Gold Filled）の有無で判別できます。" } },
      { "@type": "Question", name: "刻印がない金製品は偽物ですか？", acceptedAnswer: { "@type": "Answer", text: "必ずしも偽物ではありません。古い製品や一部の海外製品には刻印がないことがあります。刻印がなくても金であれば買取業者がX線蛍光分析装置（XRF）で正確に純度を判定してくれます。買取業者の査定は無料なので、判断に迷ったらプロに相談してください。" } },
      { "@type": "Question", name: "自宅で金の真贋を確かめる方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "自宅でできる方法は、刻印確認、磁石テスト、色味・重さの確認、比重測定（水を使う方法）などがあります。ただし、精巧な偽物は自宅での判定が難しい場合があります。確実な判定が必要な場合は、買取業者のX線蛍光分析（無料）を利用するのが最も正確です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】金の偽物の見分け方ガイド — 金メッキとの違い・自宅でできる7つの判別方法",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "金の偽物と本物の見分け方を徹底解説。刻印・磁石・比重・色味など自宅でできる7つの判別方法、金メッキ（GP/GF）との違い、買取業者の真贋判定の仕組みを紹介。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の偽物の見分け方ガイド — 金メッキとの違い・自宅でできる7つの判別方法",
  description: "金の偽物と本物の見分け方を徹底解説。刻印・磁石・比重・色味など自宅でできる7つの判別方法、金メッキ（GP/GF）との違い、買取業者の真贋判定の仕組みを紹介。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金の真贋が気になる方へ — プロの無料査定</h3>
      <p className="text-sm text-warm-gray text-center mb-4">買取業者ならX線分析で正確に判定してくれます。査定は完全無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinNisemonoMikataPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の偽物の見分け方</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の偽物の見分け方 — 金メッキとの違い・7つの判別方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>金の価格が歴史的高値を記録する2026年、金の偽物（フェイクゴールド）や金メッキ製品が市場に増えています。「これは本物の金？それとも金メッキ？」と疑問に思った経験はありませんか？</p>

        <p>この記事では、<strong>自宅でできる7つの判別方法</strong>と、金メッキ（GP/GF）と本物の金の違い、そして買取業者が使うプロの真贋判定の仕組みまでを徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金の偽物と本物を見分ける7つの方法</li>
          <li>K18GP（金メッキ）とK18（本物）の違い</li>
          <li>「18K」刻印は偽物なのか？</li>
          <li>買取業者が使う真贋判定の仕組み</li>
          <li>偽物を掴まないための注意点</li>
        </ul>

        <h2>自宅でできる金の判別方法7選</h2>

        <h3>1. 刻印を確認する（最も基本）</h3>

        <p>本物の金製品には必ず<strong>刻印（ホールマーク）</strong>が入っています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>意味</th>
                <th>判定</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24, K18, K14, K10</strong></td><td>金の純度（日本式）</td><td>本物の可能性が高い</td></tr>
              <tr><td><strong>750, 585, 417</strong></td><td>金の純度（国際式・千分率）</td><td>本物の可能性が高い</td></tr>
              <tr><td><strong>K18GP</strong></td><td>Gold Plated（金メッキ）</td><td>金メッキ。金としての価値はほぼない</td></tr>
              <tr><td><strong>K18GF</strong></td><td>Gold Filled（金張り）</td><td>金張り。金としての価値は極めて低い</td></tr>
              <tr><td><strong>K18GR</strong></td><td>Gold Rolled（金ロール）</td><td>金ロール。金としての価値はほぼない</td></tr>
              <tr><td><strong>刻印なし</strong></td><td>不明</td><td>古い製品・海外製品の場合あり。要鑑定</td></tr>
            </tbody>
          </table>
        </div>

        <p>刻印の場所はリングの内側、ネックレスのクラスプ付近、ブレスレットの留め具付近にあります。ルーペ（10倍程度）を使うと確認しやすいです。</p>

        <h3>2. 磁石テスト</h3>

        <p><strong>本物の金は磁石に反応しません。</strong>磁石を金製品に近づけて、引き寄せられる場合は鉄やニッケルなどの金属が含まれている偽物の可能性が高いです。</p>

        <p>ただし、以下の注意点があります。</p>
        <ul>
          <li>K18WG（ホワイトゴールド）はパラジウムやニッケルを含むため、わずかに磁石に反応することがある</li>
          <li>タングステンなど磁石に反応しない金属で作られた精巧な偽物も存在する</li>
          <li>ネックレスの留め具にバネが使われている場合、留め具部分だけ磁石に反応する（これは正常）</li>
        </ul>

        <h3>3. 色味と輝きの確認</h3>

        <p>本物の金は<strong>落ち着いた上品な輝き</strong>を持っています。一方、金メッキは表面処理の影響で<strong>不自然にギラギラ</strong>した光沢を放つことがあります。</p>

        <ul>
          <li><strong>本物のK18YG：</strong>温かみのある深い黄金色。時間が経っても変色しにくい</li>
          <li><strong>金メッキ：</strong>やや明るすぎる黄色。使い込むと表面が剥がれて下地の色が見える</li>
          <li><strong>真鍮（メッキなし）：</strong>黄色味が強い。時間が経つと緑青（ろくしょう）が出る</li>
        </ul>

        <h3>4. 重さ（比重）の確認</h3>

        <p>金は非常に<strong>密度が高い（重い）金属</strong>です。同じ大きさの金属と比べて、本物の金は明らかに重く感じます。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>金属</th>
                <th>比重</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>19.3</td><td>非常に重い</td></tr>
              <tr><td><strong>K18</strong></td><td>15.2〜16.2</td><td>かなり重い</td></tr>
              <tr><td><strong>プラチナ（Pt900）</strong></td><td>約19.9</td><td>金より少し重い</td></tr>
              <tr><td><strong>銀（SV925）</strong></td><td>約10.4</td><td>金の約半分の重さ</td></tr>
              <tr><td><strong>真鍮</strong></td><td>約8.5</td><td>金の約半分以下</td></tr>
              <tr><td><strong>ステンレス</strong></td><td>約7.9</td><td>金より大幅に軽い</td></tr>
              <tr><td><strong>タングステン</strong></td><td>19.3</td><td>金とほぼ同じ（精巧な偽物に使われる）</td></tr>
            </tbody>
          </table>
        </div>

        <p>水を使った比重測定法で正確な比重を計算できます。詳しくは<Link href="/articles/kin-omosa-hakarikata/" className="text-accent hover:underline">金の重さの測り方ガイド</Link>をご覧ください。</p>

        <h3>5. メッキの剥がれをチェック</h3>

        <p>金メッキ製品は使い込むと<strong>表面のメッキが剥がれて下地の金属が露出</strong>します。特に角やエッジ部分、チェーンの留め具周辺を確認してください。下地に銀色や緑色の金属が見えたら、金メッキの可能性が高いです。</p>

        <h3>6. 皮膚への反応</h3>

        <p>偽物の金（真鍮やニッケル合金）は、長時間肌に触れると<strong>緑色や黒色の変色が肌に移る</strong>ことがあります。本物の金ではこの反応は起きません（ただしK10など金含有率が低い合金では稀に起きることがあります）。</p>

        <h3>7. 試金石テスト</h3>

        <p>試金石（素焼きの石板）に金製品をこすりつけ、残った線の色味で純度を推定する伝統的な方法です。本物の金は柔らかいため、試金石に明瞭な黄金色の線が残ります。試金石は金買取専門店や鉱物ショップで入手可能です。</p>

        <CtaBox />

        <h2>「K18GP」「K18GF」の刻印がある場合</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>正式名称</th>
                <th>金の含有量</th>
                <th>買取価格</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K18GP</strong></td><td>Gold Plated（金メッキ）</td><td>極めて少ない（表面のみ）</td><td>ほぼ0円（買取不可の業者が多い）</td></tr>
              <tr><td><strong>K18GF</strong></td><td>Gold Filled（金張り）</td><td>総重量の1/20以上</td><td>数十円〜数百円</td></tr>
              <tr><td><strong>K18RGP</strong></td><td>Rolled Gold Plated</td><td>極めて少ない</td><td>ほぼ0円</td></tr>
              <tr><td><strong>K18（刻印のみ）</strong></td><td>K18無垢（ソリッド）</td><td>75%</td><td>1gあたり約11,400円（2026年4月）</td></tr>
            </tbody>
          </table>
        </div>

        <h2>「18K」の刻印は偽物？</h2>

        <p>「Kが後ろに付く"18K"は偽物」という俗説がありますが、<strong>必ずしも正しくありません</strong>。</p>

        <ul>
          <li><strong>K18（Kが前）：</strong>日本式の表記。日本製に多い。信頼性が高い</li>
          <li><strong>18K（Kが後）：</strong>海外式の表記。アメリカやヨーロッパの正規品にも使われる</li>
          <li><strong>750：</strong>国際式の千分率表記。イタリア製に多い。信頼性が高い</li>
        </ul>

        <p>ただし、品質管理が不十分な製品の中には、18Kの刻印があっても実際の純度が低いケースも存在します。確実に判定したい場合は、買取業者のX線分析（無料）を利用してください。</p>

        <h2>買取業者が使う真贋判定の仕組み</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>判定方法</th>
                <th>仕組み</th>
                <th>精度</th>
                <th>費用</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>X線蛍光分析（XRF）</strong></td><td>X線を照射し、金属の組成を非破壊で分析</td><td>非常に高い（純度0.1%単位）</td><td>大手業者は無料</td></tr>
              <tr><td><strong>比重測定</strong></td><td>水を使って比重を計算</td><td>高い（ただし中空や宝石付きは不正確）</td><td>無料</td></tr>
              <tr><td><strong>試金石</strong></td><td>石に擦り付けた線の色で判定</td><td>中程度（熟練者なら高精度）</td><td>無料</td></tr>
              <tr><td><strong>酸テスト</strong></td><td>硝酸を塗布して反応を確認</td><td>高い（ただし表面に傷がつく）</td><td>無料</td></tr>
            </tbody>
          </table>
        </div>

        <p>大手買取業者（買取大吉、なんぼやなど）では<strong>X線蛍光分析装置（XRF）</strong>を導入しています。これは金製品を傷つけずに正確な純度を判定できる最も信頼性の高い方法です。</p>

        <h2>偽物を掴まないための5つの注意点</h2>

        <ol>
          <li><strong>フリマアプリやオークションでの金製品購入は慎重に：</strong>個人間取引は偽物のリスクが高い</li>
          <li><strong>「K18」の刻印があるだけで安心しない：</strong>偽物にも刻印が打たれていることがある</li>
          <li><strong>極端に安い金製品は疑う：</strong>相場より大幅に安い場合は偽物の可能性</li>
          <li><strong>海外旅行先での購入は注意：</strong>一部の国では偽物が堂々と売られている</li>
          <li><strong>迷ったらプロに見てもらう：</strong>買取業者の査定は無料。判断に迷ったら気軽に持ち込もう</li>
        </ol>

        <CtaBox />

        <h2>金の偽物に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "金と金メッキの簡単な見分け方は？", a: "最も簡単なのは刻印の確認です。本物の金はK24・K18・750などの刻印があり、金メッキはK18GP・K18GFなどGP/GFの表記があります。磁石テストも有効で、本物の金は磁石に反応しません。" },
            { q: "磁石で金の本物と偽物を見分けられますか？", a: "ある程度は見分けられます。本物の金は磁石に反応しません。ただし、タングステンなど磁石に反応しない金属で作られた精巧な偽物も存在するため、磁石テストだけでは完全な判定はできません。" },
            { q: "金メッキ（K18GP）と本物の金（K18）の違いは？", a: "K18GPは表面に薄い金の膜をコーティングしたもので、金としての価値はほぼゼロです。本物のK18は金が75%含まれた合金で、1gあたり約11,400円（2026年4月時点）の素材価値があります。" },
            { q: "刻印がない金製品は偽物ですか？", a: "必ずしも偽物ではありません。古い製品や一部の海外製品には刻印がないことがあります。買取業者がX線蛍光分析装置（XRF）で正確に判定してくれます。" },
            { q: "自宅で金の真贋を確かめる方法はありますか？", a: "刻印確認、磁石テスト、色味・重さの確認、比重測定などが自宅でできます。ただし、確実な判定が必要な場合は、買取業者のX線蛍光分析（無料）が最も正確です。" },
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
          <Link href="/articles/kin-jundo-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">知識ガイド</span><p className="text-sm font-bold mt-1">金の純度の見分け方</p></Link>
          <Link href="/articles/kin-omosa-hakarikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">知識ガイド</span><p className="text-sm font-bold mt-1">金の重さの測り方</p></Link>
          <Link href="/articles/kin-kaitori-sagi/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">注意ガイド</span><p className="text-sm font-bold mt-1">金買取の詐欺・トラブル対策</p></Link>
          <Link href="/articles/kowareta-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">壊れた金・刻印なしの買取</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>金の偽物を見分けるためには、<strong>刻印の確認が最も基本的かつ重要</strong>です。GP/GFの表記があれば金メッキ、K18やK24、750の表記があれば本物の可能性が高いです。磁石テストや比重測定も補助的な判定方法として有効です。</p>
        <p>ただし、精巧な偽物は自宅での判定が難しい場合があります。確実な判定が必要な場合は、<strong>買取業者のX線蛍光分析（無料）</strong>を利用してください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で金製品の真贋判定と買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
