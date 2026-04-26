import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金を売った場合、確定申告は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "金の売却益が年間50万円を超える場合は確定申告が必要です。ただし、給与所得者で他の雑所得等が20万円以下の場合は所得税の確定申告は不要（住民税の申告は必要）です。生活用金製品（1点30万円以下のジュエリーなど）の売却は非課税です。" } },
      { "@type": "Question", name: "金の売却益の計算方法は？", acceptedAnswer: { "@type": "Answer", text: "売却益 = 売却価格 - （取得費 + 売却費用）で計算します。取得費は購入時の価格、売却費用は売却にかかった手数料等です。取得費が不明な場合は、売却価格の5%を取得費として計算できますが、課税額が大幅に増えるため購入時のレシートは保管しておきましょう。" } },
      { "@type": "Question", name: "金の売却で節税する方法はありますか？", acceptedAnswer: { "@type": "Answer", text: "主な節税方法は、5年超保有してから売却する（長期譲渡所得で課税額が半分になる）、年間の売却益を50万円以内に抑える（特別控除の範囲内）、家族名義で分散して売却する、などがあります。" } },
      { "@type": "Question", name: "金の売却で200万円超の場合、何が起きますか？", acceptedAnswer: { "@type": "Answer", text: "1回の取引で200万円を超える金地金・金貨の売却は、買取業者が税務署に支払調書を提出する義務があります。マイナンバーの提示も求められます。なお、ジュエリーの売却は支払調書の対象外ですが、確定申告の義務自体は金額に関係なく発生します。" } },
      { "@type": "Question", name: "取得費（購入価格）がわからない場合はどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "取得費が不明な場合は、売却価格の5%を取得費として計算します。例えば100万円で売却した場合、取得費は5万円とみなされ、95万円が売却益になります。非常に不利な計算になるため、購入時のレシートや領収書は必ず保管しておきましょう。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】金の売却と確定申告やり方ガイド — 譲渡所得の計算・節税・申告手順",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "金を売却した時の確定申告のやり方を徹底解説。譲渡所得の計算方法、50万円の特別控除、5年超保有の優遇、節税対策、確定申告書の書き方まで網羅。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金の売却と確定申告やり方ガイド — 譲渡所得の計算・節税・申告手順",
  description: "金を売却した時の確定申告のやり方を徹底解説。譲渡所得の計算方法、50万円の特別控除、5年超保有の優遇措置、節税対策、確定申告書の書き方まで網羅。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金の売却を検討中の方へ</h3>
      <p className="text-sm text-warm-gray text-center mb-4">まずは無料査定で売却額の目安を確認。税金を考慮した売却計画を立てましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKakuteiShinkokuPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の売却と確定申告</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の売却と確定申告のやり方ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>2026年、金の価格は歴史的高値を記録しています。K24（純金）は1gあたり約15,200円と、10年前の約3.5倍に上昇。金を売却して大きな利益を得る方が増えていますが、<strong>売却益には税金がかかる場合がある</strong>ことをご存知ですか？</p>

        <p>この記事では、金を売却した場合の確定申告のやり方を、<strong>計算方法・節税対策・申告手順</strong>まで実践的に解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金の売却で確定申告が必要になる条件</li>
          <li>譲渡所得の計算方法（具体例付き）</li>
          <li>50万円の特別控除と5年超保有の優遇措置</li>
          <li>確定申告が不要になるケース</li>
          <li>具体的な節税テクニック</li>
          <li>確定申告書の書き方（手順付き）</li>
        </ul>

        <h2>金の売却益に対する税金の基本</h2>

        <p>金の売却で得た利益は<strong>「譲渡所得」</strong>として所得税の課税対象になります。ただし、すべての金の売却に税金がかかるわけではありません。</p>

        <h3>課税される金の売却</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>売却する金製品</th>
                <th>課税の扱い</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>金地金（インゴット）</strong></td><td>譲渡所得（総合課税）</td><td>年間50万円の特別控除あり</td></tr>
              <tr><td><strong>金貨</strong></td><td>譲渡所得（総合課税）</td><td>収集目的の金貨も含む</td></tr>
              <tr><td><strong>金のジュエリー（1点30万円超）</strong></td><td>譲渡所得（総合課税）</td><td>貴金属・宝石類で1点30万円超のもの</td></tr>
              <tr><td><strong>金のジュエリー（1点30万円以下）</strong></td><td>非課税</td><td>生活用動産として非課税</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>重要ポイント：</strong>生活用のジュエリー（ネックレス、指輪など）で1点あたりの売却額が30万円以下の場合は、「生活用動産」として<strong>非課税</strong>です。</p>

        <h2>譲渡所得の計算方法</h2>

        <h3>基本の計算式</h3>

        <p>譲渡所得は以下の3ステップで計算します。</p>

        <ol>
          <li><strong>売却益の計算：</strong>売却価格 -（取得費 + 売却費用）= 売却益</li>
          <li><strong>特別控除の適用：</strong>売却益 - 50万円（特別控除）= 課税対象の譲渡所得</li>
          <li><strong>長期保有の場合：</strong>保有期間5年超なら、課税対象額がさらに1/2に</li>
        </ol>

        <h3>計算例1：短期保有（5年以内）の場合</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>金額</th></tr></thead>
            <tbody>
              <tr><td>金地金の売却価格</td><td>300万円</td></tr>
              <tr><td>取得費（購入価格）</td><td>150万円</td></tr>
              <tr><td>売却費用</td><td>0円</td></tr>
              <tr><td><strong>売却益</strong></td><td><strong>150万円</strong></td></tr>
              <tr><td>特別控除（年間50万円）</td><td>-50万円</td></tr>
              <tr><td><strong>課税対象の譲渡所得</strong></td><td><strong>100万円</strong></td></tr>
            </tbody>
          </table>
        </div>

        <p>この100万円が他の所得（給与所得など）に合算されて課税されます。所得税率が20%の方なら、追加の税金は約20万円です。</p>

        <h3>計算例2：長期保有（5年超）の場合</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>金額</th></tr></thead>
            <tbody>
              <tr><td>金地金の売却価格</td><td>300万円</td></tr>
              <tr><td>取得費（購入価格）</td><td>150万円</td></tr>
              <tr><td>売却費用</td><td>0円</td></tr>
              <tr><td>売却益</td><td>150万円</td></tr>
              <tr><td>特別控除</td><td>-50万円</td></tr>
              <tr><td>長期譲渡所得（1/2）</td><td>100万円 x 1/2</td></tr>
              <tr><td><strong>課税対象の譲渡所得</strong></td><td><strong>50万円</strong></td></tr>
            </tbody>
          </table>
        </div>

        <p>長期保有なら課税対象額が<strong>半分の50万円</strong>になります。同じ所得税率20%なら追加の税金は約10万円で、短期保有と比べて<strong>10万円の節税</strong>になります。</p>

        <CtaBox />

        <h2>確定申告が不要になるケース</h2>

        <ul>
          <li><strong>金の売却益が年間50万円以下：</strong>特別控除の範囲内で課税対象額が0円</li>
          <li><strong>生活用ジュエリーで1点30万円以下の売却：</strong>生活用動産として非課税</li>
          <li><strong>給与所得者で他の雑所得等が20万円以下：</strong>所得税の確定申告は不要（ただし住民税の申告は必要）</li>
          <li><strong>売却損が出た場合：</strong>損失が出た場合は申告不要（ただし他の譲渡所得との損益通算が可能）</li>
        </ul>

        <h2>具体的な節税テクニック5選</h2>

        <ol>
          <li>
            <strong>5年超保有してから売却する</strong>
            <p>保有期間5年超で長期譲渡所得の適用を受ければ、課税対象額が半分になります。急いで売る必要がない場合は、5年を超えてから売却するのが有利です。</p>
          </li>
          <li>
            <strong>年間の売却益を50万円以内に抑える</strong>
            <p>特別控除は年間50万円です。大量の金を売却する場合は、複数年に分けて売却することで、毎年50万円の控除を利用できます。</p>
          </li>
          <li>
            <strong>取得費の証拠を保管しておく</strong>
            <p>購入時のレシート・領収書・通帳の記録は必ず保管してください。取得費が不明だと売却価格の5%が取得費とみなされ、税金が大幅に増えます。</p>
          </li>
          <li>
            <strong>売却費用を経費として計上する</strong>
            <p>売却にかかった費用（鑑定費用、運搬費用など）は取得費に加算でき、課税対象額を減らせます。</p>
          </li>
          <li>
            <strong>家族名義の金は家族が売却する</strong>
            <p>所得税は累進課税のため、所得の低い家族が売却した方が税率が低くなる場合があります。ただし、名義と実際の所有者が一致していることが前提です。</p>
          </li>
        </ol>

        <h2>200万円超の取引と支払調書</h2>

        <p>1回の取引で<strong>200万円を超える金地金・金貨の売却</strong>を行った場合、買取業者は税務署に<strong>支払調書</strong>を提出する義務があります。</p>

        <ul>
          <li>支払調書には、売却者の氏名・住所・マイナンバー・売却金額が記載される</li>
          <li>マイナンバーの提示も求められる</li>
          <li>支払調書が提出されると、税務署はあなたの金の売却を把握している</li>
          <li>確定申告をしないと「無申告」として追徴課税のリスクがある</li>
        </ul>

        <blockquote>
          <p><strong>注意：</strong>支払調書の対象は「金地金」「金貨」「プラチナ地金」であり、ジュエリー（加工品）は対象外です。ただし、ジュエリーの売却でも確定申告の義務自体は発生する場合があります。</p>
        </blockquote>

        <h2>確定申告の手順</h2>

        <ol>
          <li>
            <strong>必要書類を準備する</strong>
            <ul>
              <li>売却時の明細書・レシート（売却価格・日付の証明）</li>
              <li>購入時のレシート・領収書（取得費の証明）</li>
              <li>源泉徴収票（給与所得者の場合）</li>
              <li>マイナンバーカードまたは通知カード</li>
            </ul>
          </li>
          <li>
            <strong>確定申告書を作成する</strong>
            <p>国税庁の「確定申告書等作成コーナー」（e-Tax）を利用するのが最も簡単です。「収入金額等」の「譲渡」欄に金の売却に関する情報を入力します。</p>
          </li>
          <li>
            <strong>申告期間内に提出する</strong>
            <p>確定申告期間は<strong>毎年2月16日〜3月15日</strong>です。e-Taxならオンラインで24時間提出可能です。</p>
          </li>
          <li>
            <strong>納税する</strong>
            <p>追加の税金がある場合は、3月15日までに納付します。口座振替、クレジットカード、コンビニ払いなどの方法が利用可能です。</p>
          </li>
        </ol>

        <h2>取得費が不明な場合の対処法</h2>

        <p>相続した金や、購入時のレシートを紛失した場合、取得費が不明になります。この場合の対処法は以下の通りです。</p>

        <ul>
          <li><strong>売却価格の5%を取得費とする（概算取得費）：</strong>最も不利な計算方法。100万円で売却した場合、取得費はわずか5万円</li>
          <li><strong>購入時の金相場から推定する：</strong>購入した年月がわかっている場合、当時の金相場から取得費を推定できる場合がある。ただし税務署の判断による</li>
          <li><strong>通帳の記録を確認する：</strong>購入時の銀行振込の記録があれば、取得費の証拠になる場合がある</li>
          <li><strong>税理士に相談する：</strong>高額な売却の場合は、税理士に相談することで適切な取得費の算定方法を見つけられることがある</li>
        </ul>

        <CtaBox />

        <h2>金の売却と確定申告に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "金を売った場合、確定申告は必要ですか？", a: "金の売却益が年間50万円を超える場合は確定申告が必要です。ただし、生活用金製品（1点30万円以下のジュエリーなど）の売却は非課税です。給与所得者で他の雑所得等が20万円以下の場合は所得税の確定申告は不要ですが、住民税の申告は必要です。" },
            { q: "金の売却益の計算方法は？", a: "売却益 = 売却価格 - （取得費 + 売却費用）で計算します。ここから年間50万円の特別控除を差し引き、保有期間5年超なら課税対象額がさらに半分になります。" },
            { q: "金の売却で節税する方法はありますか？", a: "5年超保有してから売却する（課税額が半分）、年間の売却益を50万円以内に抑える、取得費の証拠を保管する、などが効果的です。高額な売却の場合は税理士への相談もおすすめです。" },
            { q: "金の売却で200万円超の場合、何が起きますか？", a: "1回の取引で200万円を超える金地金・金貨の売却は、買取業者が税務署に支払調書を提出します。マイナンバーの提示も必要です。税務署があなたの売却を把握するため、確定申告は忘れずに行いましょう。" },
            { q: "取得費がわからない場合はどうなりますか？", a: "売却価格の5%を取得費として計算します。例えば100万円で売却した場合、取得費は5万円、売却益は95万円になります。非常に不利な計算なので、購入時のレシートは必ず保管してください。" },
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
          <Link href="/articles/kin-kaitori-zeikin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">金買取の税金・確定申告ガイド</p></Link>
          <Link href="/articles/kin-souzoku-baikyaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">相続した金の売却ガイド</p></Link>
          <Link href="/articles/ihin-seiri-kin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">遺品整理</span><p className="text-sm font-bold mt-1">遺品整理で見つかった金の売り方</p></Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場情報</span><p className="text-sm font-bold mt-1">金買取相場一覧</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>金の売却益は「譲渡所得」として課税対象になりますが、<strong>年間50万円の特別控除</strong>と<strong>5年超保有の半額軽減</strong>を活用することで税負担を大幅に抑えられます。</p>
        <p>最も重要なのは<strong>取得費の証拠（購入レシート等）を保管すること</strong>です。不明な場合は売却額の5%しか認められず、税金が大幅に増えます。</p>
        <p>※この記事は一般的な情報提供であり、税務アドバイスではありません。具体的な税務判断は税理士にご相談ください。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で売却額の目安を確認し、税金を考慮した売却計画を立てましょう。</p>
      </article>
    </div>
    </>
  );
}
