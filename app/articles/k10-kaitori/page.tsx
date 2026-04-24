import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "K10の買取相場は1gあたりいくらですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、K10の買取相場は1gあたり約5,800〜6,200円です。K18（約11,400円）の約半分ですが、金価格の高騰により過去と比べて大幅に上昇しています。2024年4月は約4,700円でしたので、2年で約30%上昇しています。" } },
      { "@type": "Question", name: "K10とK18の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "K10は金の純度が41.7%（10/24）、K18は75%（18/24）です。K10は金の含有率が低いぶん買取価格も低くなりますが、硬度が高く変色しにくいという特徴があり、日常使いのアクセサリーに多く使われています。" } },
      { "@type": "Question", name: "K10のアクセサリーは本当に売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、K10の刻印がある製品は買取可能です。K10は金の含有率が41.7%あるため、素材としての価値は十分にあります。1gあたり約6,000円なので、5gのネックレスなら約30,000円の買取額になります。" } },
      { "@type": "Question", name: "K10の刻印が「416」と書いてありますが、これは何ですか？", acceptedAnswer: { "@type": "Answer", text: "「416」はK10の千分率表記です。金の含有率が416/1000（41.6%）であることを示しています。K10と同じ意味です。海外製品に多い表記方法です。" } },
      { "@type": "Question", name: "K10とK9の違いは？", acceptedAnswer: { "@type": "Answer", text: "K10は金含有率41.7%、K9は37.5%です。日本ではK10が流通していますが、イギリスなどではK9（9金/375）が一般的です。いずれも買取可能ですが、K10の方が純度が高いぶん高い買取価格になります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】K10（10金）買取相場ガイド — 1gあたりの価格と高く売る方法",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】K10（10金）買取相場ガイド — 1gあたりの価格と高く売る方法",
  description:
    "K10（10金）の最新買取相場を1gあたりの価格で掲載。K10とK18の違い、K10アクセサリーの製品別価格目安、刻印の見分け方、高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K10製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K10でも金価格高騰により高額買取が期待できます。複数社で比較しましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function K10KaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">K10買取ガイド</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】K10（10金）買取相場と高く売る方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>K10（10金）は、手頃な価格で金のジュエリーが楽しめることから人気の金合金です。4℃、スタージュエリー、ヴァンドーム青山など、<strong>日本のジュエリーブランドでK10を採用しているブランドは多数</strong>あります。</p>

        <p>「K10のアクセサリーって売れるの？」「K10の相場はいくら？」「K18より安いけど売る価値はある？」——この記事では、K10の買取に関する<strong>最新相場・製品別の価格目安・高く売るコツ</strong>を徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>K10の最新買取相場（1gあたりの価格）</li>
          <li>K10とK18・K14の違い</li>
          <li>K10アクセサリーの製品別買取価格目安</li>
          <li>K10の刻印の見方</li>
          <li>K10を高く売るためのコツ</li>
        </ul>

        <h2>K10（10金）とは — 純度41.7%の金合金</h2>

        <p>K10は<strong>金の純度が41.7%（417/1000）</strong>の合金です。残りの58.3%は銀、銅、パラジウムなどの他の金属が混ぜられています。</p>

        <h3>K10が人気な理由</h3>

        <ul>
          <li><strong>価格が手頃：</strong>K18の約半分の価格で金のジュエリーが購入できる</li>
          <li><strong>硬度が高い：</strong>金の含有率が低いぶん、K18より硬く傷がつきにくい</li>
          <li><strong>変色しにくい：</strong>金以外の金属の割合が多いため、K18より変色しにくい場合がある</li>
          <li><strong>軽い：</strong>金の含有率が低いぶんやや軽い</li>
        </ul>

        <h3>K10・K14・K18・K24の比較</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>金含有率</th>
                <th>1gあたり買取価格（2026年4月目安）</th>
                <th>特徴</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>99.9%</td><td>約15,000〜15,400円</td><td>最も高価。柔らかい</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>75.0%</td><td>約11,200〜11,600円</td><td>ジュエリーの定番</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>58.5%</td><td>約8,700〜9,100円</td><td>海外で人気</td></tr>
              <tr><td><strong>K10（10金）</strong></td><td>41.7%</td><td>約5,800〜6,200円</td><td>手頃で丈夫</td></tr>
            </tbody>
          </table>
        </div>

        <p>K10はK18の約55%の買取価格ですが、金価格の高騰により<strong>K10でも1gあたり約6,000円</strong>と、以前では考えられない高値になっています。</p>

        <h2>K10の最新買取相場（2026年4月）</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>価格（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K10 買取価格（1gあたり）</strong></td><td>約5,800〜6,200円</td></tr>
              <tr><td>K10 小売価格（1gあたり）</td><td>約6,500〜7,000円</td></tr>
              <tr><td>K18 買取価格（参考）</td><td>約11,200〜11,600円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K10買取価格の推移</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>年</th>
                <th>K10 1gあたり買取価格（年間平均目安）</th>
                <th>前年比</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2020年</td><td>約2,500円</td><td>—</td></tr>
              <tr><td>2021年</td><td>約2,700円</td><td>+8%</td></tr>
              <tr><td>2022年</td><td>約3,200円</td><td>+19%</td></tr>
              <tr><td>2023年</td><td>約3,700円</td><td>+16%</td></tr>
              <tr><td>2024年</td><td>約4,700円</td><td>+27%</td></tr>
              <tr><td>2025年</td><td>約5,600円</td><td>+19%</td></tr>
              <tr><td>2026年（1〜4月）</td><td>約6,000円</td><td>+7%</td></tr>
            </tbody>
          </table>
        </div>

        <p>K10の買取価格は6年間で約2.4倍に上昇しています。<strong>「K10だから安い」という時代ではなくなっています</strong>。</p>

        <CtaBox />

        <h2>K10製品別の買取価格目安</h2>

        <h3>K10ネックレス</h3>

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
              <tr><td>チェーンネックレス（細め）</td><td>2〜4g</td><td>約12,000〜24,000円</td></tr>
              <tr><td>チェーンネックレス（太め）</td><td>5〜10g</td><td>約30,000〜60,000円</td></tr>
              <tr><td>ペンダントネックレス</td><td>3〜7g</td><td>約18,000〜42,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K10指輪・リング</h3>

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
              <tr><td>細身のリング</td><td>1〜3g</td><td>約6,000〜18,000円</td></tr>
              <tr><td>標準的なリング</td><td>3〜5g</td><td>約18,000〜30,000円</td></tr>
              <tr><td>ボリュームリング</td><td>5〜10g</td><td>約30,000〜60,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K10ピアス・イヤリング</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>種類</th>
                <th>重量の目安（ペア）</th>
                <th>買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>スタッドピアス</td><td>1〜2g</td><td>約6,000〜12,000円</td></tr>
              <tr><td>フープピアス</td><td>2〜5g</td><td>約12,000〜30,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h2>K10の刻印の見方</h2>

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
              <tr><td><strong>K10</strong></td><td>10金（日本式表記）</td><td>最も一般的</td></tr>
              <tr><td><strong>416</strong></td><td>金416/1000 = 41.6%</td><td>海外製品に多い</td></tr>
              <tr><td><strong>417</strong></td><td>金417/1000 = 41.7%</td><td>海外製品</td></tr>
              <tr><td><strong>10K</strong></td><td>10金（海外式表記）</td><td>Kが後ろに付く</td></tr>
              <tr><td><strong>K10YG</strong></td><td>10金イエローゴールド</td><td>色の種類も明記</td></tr>
              <tr><td><strong>K10PG</strong></td><td>10金ピンクゴールド</td><td>女性に人気</td></tr>
              <tr><td><strong>K10WG</strong></td><td>10金ホワイトゴールド</td><td></td></tr>
            </tbody>
          </table>
        </div>

        <p>K10にもK18と同様にイエローゴールド（YG）、ピンクゴールド（PG）、ホワイトゴールド（WG）のカラーバリエーションがあります。買取価格はカラーによる差はありません。</p>

        <h2>K10を高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>複数業者に見積もりを取る</strong>
            <p>K10の買取価格は業者によって1gあたり数百円の差が出ます。5gのネックレスなら数千円の差になります。</p>
          </li>
          <li>
            <strong>まとめて売る</strong>
            <p>K10製品は1点の重量が軽いことが多いため、複数の製品をまとめて査定に出すと効率的です。K18やプラチナの製品も一緒に出すとさらに効果的です。</p>
          </li>
          <li>
            <strong>ブランド品はブランド買取も検討する</strong>
            <p>4℃、スタージュエリー、ヴァンドーム青山などのK10ジュエリーは、素材価値以上のブランド買取価格がつくことがあります。</p>
          </li>
          <li>
            <strong>付属品を揃える</strong>
            <p>保証書、専用ケース、ギャランティカードがあれば査定額アップにつながります。</p>
          </li>
          <li>
            <strong>相場が高いときに売る</strong>
            <p>2026年4月現在、K10の買取価格は歴史的な高値水準です。「K10だから大した金額にならない」と思わず、今の相場で査定を受けてみましょう。</p>
          </li>
        </ol>

        <CtaBox />

        <h2>4社比較 — K10買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>K10買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者のK10買取価格を一括比較</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>K10を含む全純度の金に対応。即日現金化</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅で完結。出張費無料</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>3つの方法から選択可能</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <h2>K10買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "K10の買取相場は1gあたりいくらですか？", a: "2026年4月現在、K10の買取相場は1gあたり約5,800〜6,200円です。金価格の高騰により、2020年（約2,500円）の約2.4倍になっています。" },
            { q: "K10のアクセサリーは本当に売れますか？", a: "はい、K10の刻印がある製品は買取可能です。1gあたり約6,000円なので、5gのネックレスなら約30,000円の買取額になります。" },
            { q: "K10とK18の違いは？", a: "K10は金含有率41.7%、K18は75%です。K10の買取価格はK18の約55%ですが、硬度が高く日常使いに向いています。" },
            { q: "K10の刻印が「416」ですが買取できますか？", a: "はい、「416」はK10の千分率表記です。K10と同じ純度なので問題なく買取可能です。" },
            { q: "K10の変色した製品は買取できますか？", a: "はい、変色していても素材価値は変わりません。K10の変色は表面の酸化反応で、金としての価値に影響はありません。" },
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
          <Link href="/articles/kin-jundo-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">知識ガイド</span>
            <p className="text-sm font-bold mt-1">金の純度の見分け方</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>K10（10金）はK18に比べて金の含有率は低いですが、2026年4月現在の買取価格は<strong>1gあたり約5,800〜6,200円</strong>と、数年前のK18の価格水準に達しています。</p>

        <p>「K10だから大した金額にならない」と思い込まず、まずは査定を受けてみてください。5gのK10ネックレスでも約30,000円になる時代です。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong></li>
          <li><strong>K18やプラチナの製品とまとめて売る</strong></li>
          <li><strong>ブランド品はブランド買取も検討する</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でK10製品の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
