import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "2026年は金を売るのに良いタイミングですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、K24（純金）の買取価格は1gあたり約15,200円前後と歴史的な高値圏です。2016年（約4,400円）の約3.5倍に上昇しており、売却には好条件と言えます。ただし短期的な調整は常にあり得るため、「今の価格に納得できるなら売る」のが実践的な判断です。" } },
    { "@type": "Question", name: "金を売るベストなタイミングはいつですか？", acceptedAnswer: { "@type": "Answer", text: "金価格の正確な予測は誰にもできません。「ベストなタイミングを待つ」より「自分が納得できる価格で売る」方が合理的です。実践的には、円安が進んだとき、地政学リスクが高まったとき、金相場が直近の高値を更新したときが売り時の目安です。" } },
    { "@type": "Question", name: "金価格は今後も上がり続けますか？", acceptedAnswer: { "@type": "Answer", text: "多くのアナリストは2026年後半も「高止まり〜緩やかな上昇」を予測していますが、暴落リスクもゼロではありません。金融不安の後退や急激な円高、中央銀行の金売却などが起きれば調整局面に入る可能性があります。" } },
    { "@type": "Question", name: "月別で金が高い時期はありますか？", acceptedAnswer: { "@type": "Answer", text: "明確な季節パターンはありません。金価格は国際相場と為替で決まるため、「○月が高い」という法則は存在しません。ただし、年末年始や大型連休前後は取引量が減り値動きが大きくなることがあります。" } },
    { "@type": "Question", name: "金を少しずつ分けて売るのは有効ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、分割売却は有効な戦略です。一度に全量を売るとそのタイミングの価格に依存しますが、数回に分けて売れば価格変動リスクを分散できます。また、年間50万円の特別控除を複数年にわたって活用できる税金メリットもあります。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】金を売るタイミングはいつ？相場分析と売り時の判断基準", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】金を売るタイミングはいつ？相場分析と売り時の判断基準", description: "金を売るベストなタイミングを解説。2026年の金相場の見通し、月別の傾向、売り時の判断基準、分割売却の税金メリットまで徹底ガイド。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">今の価格で無料査定してみませんか？</h3>
      <p className="text-sm text-warm-gray text-center mb-4">査定は無料。価格に納得できなければ売らなくてOKです。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinUruTimingPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金を売るタイミング</span></li></ol></nav>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金を売るタイミングはいつ？</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>金価格が歴史的な高値を更新し続ける2026年。「今売るべき？」「もっと上がるのを待つべき？」——金の売却タイミングで悩んでいる方は多いでしょう。</p>
        <p>この記事では、2026年の金相場の現状分析、今後の見通し、<strong>合理的な売却判断の基準</strong>を解説します。</p>

        <h2>2026年4月の金相場 — 歴史的な高値圏</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>指標</th><th>価格</th><th>前年比</th></tr></thead>
            <tbody>
              <tr><td><strong>K24 買取価格（1g）</strong></td><td>約15,200円</td><td>+15%</td></tr>
              <tr><td><strong>K18 買取価格（1g）</strong></td><td>約11,400円</td><td>+15%</td></tr>
              <tr><td>国際金価格（1oz）</td><td>約3,300ドル</td><td>+20%</td></tr>
              <tr><td>ドル/円</td><td>約155円</td><td>円安傾向継続</td></tr>
            </tbody>
          </table>
        </div>

        <h3>金価格の10年間の推移</h3>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>K24 1gあたり年間平均（目安）</th><th>前年比</th></tr></thead>
            <tbody>
              <tr><td>2016年</td><td>約4,400円</td><td>—</td></tr>
              <tr><td>2017年</td><td>約4,600円</td><td>+5%</td></tr>
              <tr><td>2018年</td><td>約4,500円</td><td>-2%</td></tr>
              <tr><td>2019年</td><td>約5,000円</td><td>+11%</td></tr>
              <tr><td>2020年</td><td>約6,200円</td><td>+24%</td></tr>
              <tr><td>2021年</td><td>約6,400円</td><td>+3%</td></tr>
              <tr><td>2022年</td><td>約7,600円</td><td>+19%</td></tr>
              <tr><td>2023年</td><td>約8,800円</td><td>+16%</td></tr>
              <tr><td>2024年</td><td>約11,800円</td><td>+34%</td></tr>
              <tr><td>2025年</td><td>約14,000円</td><td>+19%</td></tr>
              <tr><td>2026年（1〜4月）</td><td>約15,200円</td><td>+9%</td></tr>
            </tbody>
          </table>
        </div>
        <p>10年間で<strong>約3.5倍</strong>に上昇。特に2024年は+34%と過去最大級の上昇率でした。</p>

        <h2>金価格を動かす5つの要因</h2>
        <ol>
          <li><strong>中央銀行の金購入：</strong>2024年は世界の中央銀行が1,045トンの金を購入。3年連続で1,000トン超。2026年も買い増し傾向が続いています。</li>
          <li><strong>地政学リスク：</strong>ウクライナ紛争、中東情勢、米中対立の長期化により、安全資産としての金需要が持続。</li>
          <li><strong>円安：</strong>ドル建ての金価格に加えて円安が進むと、円建ての金価格はさらに上昇します。1ドル=155円前後の円安が金価格を押し上げています。</li>
          <li><strong>インフレ：</strong>世界的なインフレ環境下で、実物資産である金への逃避需要が増加。</li>
          <li><strong>米国の金融政策：</strong>FRBの利下げ期待は金価格にプラス、利上げはマイナスに作用します。</li>
        </ol>

        <h2>2026年後半の見通し</h2>
        <p>多くのアナリストは2026年後半について<strong>「高止まり〜緩やかな上昇」</strong>を予測しています。主な根拠は以下のとおりです。</p>
        <ul>
          <li>中央銀行の金購入が続く見通し</li>
          <li>地政学リスクの解消が見通せない</li>
          <li>円安傾向が継続する可能性</li>
        </ul>

        <p>一方で、以下のリスクシナリオも考慮すべきです。</p>
        <ul>
          <li>地政学リスクの後退による利益確定売り</li>
          <li>急激な円高（日銀の政策変更など）</li>
          <li>FRBの予想外の利上げ</li>
        </ul>

        <blockquote><p><strong>重要：</strong>金価格の正確な予測は誰にもできません。「もっと上がるかもしれない」と待ち続けるより、<strong>「今の価格に納得できるなら売る」</strong>のが最も合理的な判断基準です。</p></blockquote>

        <CtaBox />

        <h2>売り時を判断する3つの基準</h2>

        <h3>基準1：目標価格を決めておく</h3>
        <p>「K24が1gあたり○○円になったら売る」と事前に目標価格を決めておく方法です。感情に左右されず合理的に判断できます。</p>

        <h3>基準2：利益が出ていれば売る</h3>
        <p>購入価格より上がっている今が売り時です。「もっと上がるかも」と欲を出すと、下落した時に後悔します。確実な利益を確保しましょう。</p>

        <h3>基準3：現金が必要になったら売る</h3>
        <p>資金が必要なタイミングが最適な売り時です。住宅購入、教育資金、老後資金など、具体的な使い道があるなら迷わず売却しましょう。</p>

        <h2>分割売却のメリット</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>メリット</th><th>説明</th></tr></thead>
            <tbody>
              <tr><td><strong>価格変動リスクの分散</strong></td><td>一括売却のタイミングリスクを軽減</td></tr>
              <tr><td><strong>税金の最適化</strong></td><td>年間50万円の特別控除を複数年にわたって活用</td></tr>
              <tr><td><strong>支払調書の回避</strong></td><td>1回200万円以下に分ければ支払調書が不要</td></tr>
            </tbody>
          </table>
        </div>

        <h2>売るタイミングに関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "2026年は金を売るのに良いタイミングですか？", a: "2026年4月現在は歴史的な高値圏にあり、売却には好条件です。ただし短期的な調整は常にあり得ます。" },
            { q: "金を売るベストなタイミングはいつですか？", a: "正確な予測は誰にもできません。「今の価格に納得できるなら売る」が最も合理的な判断です。" },
            { q: "月別で金が高い時期はありますか？", a: "明確な季節パターンはありません。国際相場と為替で決まるため、月別の法則は存在しません。" },
            { q: "金価格は今後も上がり続けますか？", a: "多くのアナリストは高止まりを予測していますが、暴落リスクもゼロではありません。" },
            { q: "分割売却は有効ですか？", a: "はい、価格変動リスクの分散と税金の最適化の両面でメリットがあります。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kin-uridoki-2026/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場分析</span><p className="text-sm font-bold mt-1">金の売り時はいつ？2026年の見通し</p></Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場情報</span><p className="text-sm font-bold mt-1">金買取相場一覧</p></Link>
          <Link href="/articles/kin-kaitori-zeikin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">金買取の税金・確定申告ガイド</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>2026年4月現在、金価格は歴史的な高値水準にあります。10年前の約3.5倍です。</p>
        <p>「もっと上がるかも」と待ち続けるリスクと、「今の高値で確実に利益を確保する」メリットを天秤にかけ、合理的に判断しましょう。</p>
        <ol>
          <li><strong>目標価格を事前に決めておく</strong></li>
          <li><strong>大量に保有している場合は分割売却を検討する</strong></li>
          <li><strong>複数業者に見積もりを取って最高値で売却する</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で今の価格を確認してみてください。査定は無料、売る義務はありません。</p>
      </article>
    </div>
  </>);
}
