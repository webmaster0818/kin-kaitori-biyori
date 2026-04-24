import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "買取大吉となんぼやではどちらが金を高く買い取ってくれますか？", acceptedAnswer: { "@type": "Answer", text: "金の買取価格は日によって異なり、一概にどちらが高いとは言えません。両社とも業界大手であり、相場に連動した価格を提示します。最高値で売るには両社に加えてヒカカク！の一括査定も利用し、3社以上を比較するのがおすすめです。" } },
    { "@type": "Question", name: "買取大吉の特徴は？", acceptedAnswer: { "@type": "Answer", text: "全国に950店舗以上を展開する業界最大級のチェーンです。店舗数が多くアクセスしやすいのが最大の強み。査定料・手数料は無料で、金・プラチナ・ブランド品・時計など幅広い品目に対応しています。" } },
    { "@type": "Question", name: "なんぼやの特徴は？", acceptedAnswer: { "@type": "Answer", text: "全国に139店舗以上を展開し、ビデオ通話による正確な事前査定が特徴です。LINE査定やビデオ査定で来店前に価格がわかるため、効率的に売却できます。貴金属・ブランド品に強い買取チェーンです。" } },
    { "@type": "Question", name: "どちらも手数料は無料ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、買取大吉・なんぼやともに査定料・手数料は無料です。キャンセルしても費用はかかりません。" } },
    { "@type": "Question", name: "この2社以外も比較すべきですか？", acceptedAnswer: { "@type": "Answer", text: "はい、必ず3社以上を比較しましょう。ヒカカク！の一括査定を使えば、買取大吉やなんぼや以外の業者とも価格を比較できます。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】買取大吉 vs なんぼや徹底比較 — 金買取はどちらがお得？", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】買取大吉 vs なんぼや徹底比較 — 金買取はどちらがお得？", description: "買取大吉となんぼやを店舗数・買取方法・手数料・口コミ・対応品目で徹底比較。金買取でどちらがお得かがわかる2026年最新の比較ガイド。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">まずは無料査定で比較してみましょう</h3>
      <p className="text-sm text-warm-gray text-center mb-4">2社だけでなく、一括査定で幅広く比較するのがベストです。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">買取大吉で査定する</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function DaikichiVsNanboyaPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">買取大吉 vs なんぼや比較</span></li></ol></nav>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】買取大吉 vs なんぼや 徹底比較</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>金の買取業者選びで、<strong>「買取大吉」と「なんぼや」</strong>のどちらにしようか迷っている方は多いでしょう。どちらも業界大手の買取チェーンですが、特徴や強みが異なります。</p>
        <p>この記事では、買取大吉となんぼやを<strong>店舗数・買取方法・手数料・口コミ・対応品目</strong>の5つの観点で徹底比較します。</p>

        <h2>買取大吉 vs なんぼや — 基本情報の比較</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>比較項目</th><th>買取大吉</th><th>なんぼや</th></tr></thead>
            <tbody>
              <tr><td><strong>全国店舗数</strong></td><td>950店舗以上</td><td>139店舗以上</td></tr>
              <tr><td><strong>運営会社</strong></td><td>株式会社エンパワー</td><td>バリュエンスホールディングス株式会社</td></tr>
              <tr><td><strong>上場</strong></td><td>非上場</td><td>東証グロース上場</td></tr>
              <tr><td><strong>買取方式</strong></td><td>店頭買取</td><td>店頭・宅配・出張・ビデオ査定</td></tr>
              <tr><td><strong>査定料</strong></td><td>無料</td><td>無料</td></tr>
              <tr><td><strong>キャンセル料</strong></td><td>無料</td><td>無料</td></tr>
              <tr><td><strong>現金化スピード</strong></td><td>即日（店頭）</td><td>即日（店頭）/24時間以内（宅配）</td></tr>
              <tr><td><strong>事前査定</strong></td><td>LINE査定あり</td><td>LINE査定・ビデオ査定あり</td></tr>
            </tbody>
          </table>
        </div>

        <h2>比較1：店舗数・アクセスの良さ</h2>
        <p><strong>買取大吉の圧勝です。</strong>950店舗以上は業界トップクラスで、全国のほとんどの主要都市にアクセスしやすい店舗があります。なんぼやは139店舗と多くはありませんが、主要駅の近くに出店しており、立地の質は高いです。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th></th><th>買取大吉</th><th>なんぼや</th></tr></thead>
            <tbody>
              <tr><td><strong>店舗数</strong></td><td>950+</td><td>139+</td></tr>
              <tr><td><strong>立地傾向</strong></td><td>郊外のロードサイドにも出店</td><td>駅近・繁華街中心</td></tr>
              <tr><td><strong>地方カバー率</strong></td><td>高い</td><td>中程度</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>地方在住の方</strong>は買取大吉の方がアクセスしやすい可能性が高いです。<strong>都市部在住の方</strong>はどちらも利用しやすいでしょう。</p>

        <h2>比較2：買取方法の充実度</h2>
        <p><strong>なんぼやが優勢です。</strong>なんぼやはビデオ通話による査定（ビデオ査定）を導入しており、スマホやPCで自宅にいながら正確な事前査定が受けられます。来店前に価格がわかるため、効率的です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>方法</th><th>買取大吉</th><th>なんぼや</th></tr></thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>対応</td><td>対応</td></tr>
              <tr><td><strong>出張買取</strong></td><td>一部店舗対応</td><td>対応</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>非対応（一部店舗のみ）</td><td>対応</td></tr>
              <tr><td><strong>LINE査定</strong></td><td>対応</td><td>対応</td></tr>
              <tr><td><strong>ビデオ査定</strong></td><td>非対応</td><td>対応</td></tr>
            </tbody>
          </table>
        </div>

        <h2>比較3：金買取の実力</h2>
        <p>金の買取価格は両社とも国際相場に連動した水準です。<strong>どちらが高いかはその日の価格設定による</strong>ため、一概には言えません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th></th><th>買取大吉</th><th>なんぼや</th></tr></thead>
            <tbody>
              <tr><td><strong>金買取価格</strong></td><td>相場連動。Webで公開</td><td>相場連動。Webで公開</td></tr>
              <tr><td><strong>純度判定</strong></td><td>X線蛍光分析</td><td>X線蛍光分析</td></tr>
              <tr><td><strong>手数料</strong></td><td>無料</td><td>無料</td></tr>
              <tr><td><strong>対応純度</strong></td><td>K24/K22/K18/K14/K10/K9</td><td>K24/K22/K18/K14/K10/K9</td></tr>
            </tbody>
          </table>
        </div>

        <h2>比較4：口コミ・評判</h2>
        <h3>買取大吉の口コミ傾向</h3>
        <ul>
          <li>店舗によって接客品質に差がある（フランチャイズのため）</li>
          <li>丁寧な対応の店舗は非常に評判が良い</li>
          <li>査定額に不満の声がある一方、満足の声も多い</li>
        </ul>
        <h3>なんぼやの口コミ傾向</h3>
        <ul>
          <li>接客が丁寧で、初めてでも安心という声が多い</li>
          <li>相場に忠実な価格提示で信頼できるという評価</li>
          <li>ビデオ査定の利便性を評価する声が多い</li>
        </ul>

        <h2>比較5：対応品目</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品目</th><th>買取大吉</th><th>なんぼや</th></tr></thead>
            <tbody>
              <tr><td>金・プラチナ</td><td>対応</td><td>対応</td></tr>
              <tr><td>ブランド品</td><td>対応</td><td>対応</td></tr>
              <tr><td>時計</td><td>対応</td><td>対応</td></tr>
              <tr><td>ダイヤ・宝石</td><td>対応</td><td>対応</td></tr>
              <tr><td>金券・チケット</td><td>対応</td><td>非対応</td></tr>
              <tr><td>カメラ</td><td>対応</td><td>非対応</td></tr>
              <tr><td>切手・古銭</td><td>対応</td><td>対応</td></tr>
            </tbody>
          </table>
        </div>
        <p>買取大吉の方が<strong>対応品目が幅広い</strong>です。金以外にも売りたいものがある場合は買取大吉が便利です。</p>

        <CtaBox />

        <h2>結論：あなたにおすすめなのは？</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>こんな人は</th><th>おすすめ</th></tr></thead>
            <tbody>
              <tr><td>地方在住で近くに店舗がほしい</td><td><strong>買取大吉</strong></td></tr>
              <tr><td>金以外にもまとめて売りたい</td><td><strong>買取大吉</strong></td></tr>
              <tr><td>事前にビデオ査定で価格を知りたい</td><td><strong>なんぼや</strong></td></tr>
              <tr><td>宅配買取を利用したい</td><td><strong>なんぼや</strong></td></tr>
              <tr><td>最高値で売りたい</td><td><strong>両社 + 一括査定で比較</strong></td></tr>
            </tbody>
          </table>
        </div>

        <blockquote><p><strong>最も重要なのは「比較すること」です。</strong>買取大吉となんぼやの2社だけでなく、ヒカカク！の一括査定で他の業者とも比較することで、本当の最高値がわかります。</p></blockquote>

        <h2>比較記事のFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "買取大吉となんぼやではどちらが高い？", a: "日によって異なるため一概に言えません。両社に査定を依頼し、さらに一括査定で他社とも比較するのがベストです。" },
            { q: "両社とも手数料は無料ですか？", a: "はい、査定料・手数料・キャンセル料ともに無料です。" },
            { q: "どちらが接客が良い？", a: "なんぼやは接客の丁寧さで高評価の口コミが多いです。買取大吉はフランチャイズのため店舗差がありますが、良い店舗は非常に好評です。" },
            { q: "2社だけで比較すれば十分？", a: "いいえ、最低3社以上の比較を推奨します。ヒカカク！の一括査定で幅広く比較しましょう。" },
            { q: "どちらも出張買取に対応していますか？", a: "なんぼやは出張買取に対応しています。買取大吉は一部店舗で対応しています。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/tentou-vs-takuhai/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">比較ガイド</span><p className="text-sm font-bold mt-1">店頭 vs 宅配 どっちがお得？</p></Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">方法比較</span><p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場情報</span><p className="text-sm font-bold mt-1">金買取相場一覧</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>買取大吉となんぼやはどちらも信頼できる大手買取チェーンです。</p>
        <ul>
          <li><strong>買取大吉：</strong>店舗数が多く、地方でもアクセスしやすい。幅広い品目に対応</li>
          <li><strong>なんぼや：</strong>ビデオ査定・宅配買取に対応。接客の丁寧さで高評価</li>
        </ul>
        <p>最高値で売るには、<strong>2社だけでなく3社以上を比較</strong>することが重要です。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で幅広く比較してみてください。</p>
      </article>
    </div>
  </>);
}
