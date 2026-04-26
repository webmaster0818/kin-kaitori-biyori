import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金買取は店頭と宅配どっちが高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "一般的に宅配買取の方がやや高い傾向にあります。宅配買取は店舗運営コストが低いぶん買取価格に還元できるためです。ただし、店頭買取は対面で価格交渉ができるため、交渉次第で逆転することもあります。最も確実なのは両方に見積もりを取って比較することです。" } },
    { "@type": "Question", name: "店頭買取のメリットは？", acceptedAnswer: { "@type": "Answer", text: "最大のメリットは即日現金化できることです。来店から30分程度で現金を受け取れます。また、目の前で純度測定・重量計量を見られるため安心感があり、価格交渉もしやすいです。" } },
    { "@type": "Question", name: "宅配買取のメリットは？", acceptedAnswer: { "@type": "Answer", text: "自宅から一歩も出ずに完結できることです。近くに買取店がない地方の方や、忙しくて来店する時間がない方に最適です。また、全国の業者と比較できるため、地域の制約を受けずに最高値を探せます。" } },
    { "@type": "Question", name: "出張買取は店頭・宅配とどう違いますか？", acceptedAnswer: { "@type": "Answer", text: "出張買取は査定員が自宅に来てくれる方式です。対面で査定を見られる安心感は店頭と同じで、自宅から出なくてよい便利さは宅配と同じです。ただし日程調整が必要で、断りにくいと感じる方もいます。" } },
    { "@type": "Question", name: "初心者はどの方法がおすすめですか？", acceptedAnswer: { "@type": "Answer", text: "初めての方には店頭買取がおすすめです。目の前で査定の全工程を見られるため安心感があり、その場で質問もできます。慣れてきたら宅配や一括査定で全国の業者と比較するのがベストです。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】金買取は店頭・宅配・出張どれがお得？方法別メリット・デメリット徹底比較", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】金買取は店頭・宅配・出張どれがお得？方法別メリット・デメリット徹底比較", description: "金買取の店頭・宅配・出張・一括査定を徹底比較。それぞれのメリット・デメリット、買取価格の傾向、おすすめの人を解説。あなたに最適な売却方法がわかります。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">まずは無料査定で比較してみましょう</h3>
      <p className="text-sm text-warm-gray text-center mb-4">方法選びに迷ったら、一括査定で最高値を探すのが確実です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function TentouVsTakuhaiPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">店頭 vs 宅配 vs 出張 比較</span></li></ol></nav>
      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取は店頭・宅配・出張どれがお得？</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>金を売る方法は主に<strong>店頭買取・宅配買取・出張買取・一括査定</strong>の4つがあります。「どの方法が一番高く売れる？」「初めてだけどどれがいい？」——この記事では、4つの方法を<strong>価格・手間・安全性・スピード</strong>の観点で徹底比較します。</p>

        <h2>4つの買取方法の総合比較</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th></th><th>店頭買取</th><th>宅配買取</th><th>出張買取</th><th>一括査定</th></tr></thead>
            <tbody>
              <tr><td><strong>即日現金化</strong></td><td>可能</td><td>不可（3〜7日）</td><td>可能（当日〜翌日）</td><td>不可</td></tr>
              <tr><td><strong>自宅完結</strong></td><td>不可</td><td>可能</td><td>可能</td><td>可能</td></tr>
              <tr><td><strong>対面安心感</strong></td><td>高い</td><td>なし</td><td>高い</td><td>なし</td></tr>
              <tr><td><strong>価格交渉</strong></td><td>しやすい</td><td>難しい</td><td>しやすい</td><td>比較で高値</td></tr>
              <tr><td><strong>業者の選択肢</strong></td><td>近隣のみ</td><td>全国</td><td>対応エリア内</td><td>全国</td></tr>
              <tr><td><strong>手数料</strong></td><td>無料（大手）</td><td>無料（大手）</td><td>無料（大手）</td><td>無料</td></tr>
              <tr><td><strong>初心者おすすめ</strong></td><td>最もおすすめ</td><td>普通</td><td>おすすめ</td><td>高値重視の方に</td></tr>
            </tbody>
          </table>
        </div>

        <h2>方法1：店頭買取</h2>
        <h3>メリット</h3>
        <ul>
          <li><strong>即日現金化：</strong>来店から30分で現金が手に入る。最も早い方法</li>
          <li><strong>目の前で査定：</strong>純度測定・重量計量を見られるため安心感がある</li>
          <li><strong>価格交渉がしやすい：</strong>対面で「他社は○○円でした」と交渉できる</li>
          <li><strong>その場で質問できる：</strong>純度や相場について疑問をすぐに解決できる</li>
        </ul>
        <h3>デメリット</h3>
        <ul>
          <li><strong>来店の手間：</strong>店舗まで出向く必要がある</li>
          <li><strong>業者の選択肢が限られる：</strong>近隣の業者しか選べない</li>
          <li><strong>高額品の持ち運びリスク：</strong>インゴットなど高額品を持ち歩くのは不安</li>
        </ul>
        <p><strong>向いている人：</strong>即日で現金化したい人、対面で安心して取引したい人、複数店舗を回れる都市部の人</p>

        <h2>方法2：宅配買取</h2>
        <h3>メリット</h3>
        <ul>
          <li><strong>自宅完結：</strong>一歩も外に出ずに売却できる</li>
          <li><strong>全国の業者を選べる：</strong>地域に関係なく、最も高い業者に売却可能</li>
          <li><strong>やや高値の傾向：</strong>店舗運営コストが低いぶん、買取価格に還元される傾向</li>
          <li><strong>対面が苦手な人にも安心：</strong>非対面で完結するため、プレッシャーを感じない</li>
        </ul>
        <h3>デメリット</h3>
        <ul>
          <li><strong>現金化に数日かかる：</strong>発送→到着→査定→振込で3〜7日</li>
          <li><strong>査定額の根拠が見えにくい：</strong>目の前で測定を見られない</li>
          <li><strong>キャンセル時の返送料に注意：</strong>業者によっては返送料がかかる（要事前確認）</li>
          <li><strong>配送中の紛失リスク：</strong>保険付きの配送を利用すべき</li>
        </ul>
        <p><strong>向いている人：</strong>近くに買取店がない人、忙しくて来店できない人、全国の業者と比較して最高値で売りたい人</p>

        <h2>方法3：出張買取</h2>
        <h3>メリット</h3>
        <ul>
          <li><strong>自宅で対面査定：</strong>目の前で査定を見られる安心感 + 外出不要の便利さ</li>
          <li><strong>高額品の持ち運び不要：</strong>インゴットや大量のアクセサリーも安全</li>
          <li><strong>大量の金製品に最適：</strong>遺品整理などで大量に売りたい場合に便利</li>
        </ul>
        <h3>デメリット</h3>
        <ul>
          <li><strong>日程調整が必要：</strong>査定員の訪問日時を調整する必要がある</li>
          <li><strong>断りにくい心理：</strong>「わざわざ来てもらったのに断れない」と感じる人もいる</li>
          <li><strong>対応エリアに制限：</strong>地方の一部地域は対応外の場合がある</li>
        </ul>
        <p><strong>向いている人：</strong>大量の金製品がある人、高額品を持ち運びたくない人、自宅で完結したいが対面の安心感もほしい人</p>

        <h2>方法4：一括査定</h2>
        <h3>メリット</h3>
        <ul>
          <li><strong>複数業者を一括比較：</strong>最高値の業者が簡単にわかる</li>
          <li><strong>全国の業者と比較可能：</strong>地域の制約を受けない</li>
          <li><strong>無料で利用できる：</strong>ヒカカク！は完全無料</li>
        </ul>
        <h3>デメリット</h3>
        <ul>
          <li><strong>即日売却は不可：</strong>比較→業者選び→実物査定の手順が必要</li>
          <li><strong>営業連絡がある場合がある：</strong>査定依頼後に業者から連絡がくる</li>
        </ul>
        <p><strong>向いている人：</strong>最高値で売ることを最優先する人、時間に余裕がある人</p>

        <CtaBox />

        <h2>シーン別おすすめの方法</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>シーン</th><th>おすすめの方法</th><th>理由</th></tr></thead>
            <tbody>
              <tr><td>今すぐ現金が必要</td><td><strong>店頭買取</strong></td><td>最速で現金化できる</td></tr>
              <tr><td>最高値で売りたい</td><td><strong>一括査定 + 宅配</strong></td><td>全国の業者を比較できる</td></tr>
              <tr><td>遺品整理で大量にある</td><td><strong>出張買取</strong></td><td>持ち運び不要、大量対応</td></tr>
              <tr><td>近くに店がない</td><td><strong>宅配買取</strong></td><td>全国対応、自宅完結</td></tr>
              <tr><td>初めてで不安</td><td><strong>店頭買取</strong></td><td>対面で安心、質問できる</td></tr>
              <tr><td>インゴットなど高額品</td><td><strong>出張買取</strong></td><td>持ち運びリスクを回避</td></tr>
            </tbody>
          </table>
        </div>

        <h2>ベストな方法：「複数の方法を組み合わせる」</h2>
        <p>実は最も賢い方法は、<strong>複数の方法を組み合わせる</strong>ことです。</p>
        <ol>
          <li><strong>まずヒカカク！の一括査定</strong>で全国の業者の価格感を把握する</li>
          <li><strong>近隣の店頭買取店2〜3社に行き</strong>、対面で査定を受ける</li>
          <li><strong>一括査定の結果と店頭の結果を比較</strong>し、最も高い業者に売却する</li>
        </ol>
        <p>この方法なら、<strong>対面の安心感</strong>と<strong>全国比較による最高値</strong>の両方を手に入れられます。</p>

        <h2>方法別比較のFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "金買取は店頭と宅配どっちが高い？", a: "一般的に宅配がやや高い傾向ですが、店頭は価格交渉が可能です。両方に見積もりを取って比較するのがベストです。" },
            { q: "初心者はどの方法がおすすめ？", a: "店頭買取がおすすめです。目の前で査定を見られるため安心感があります。" },
            { q: "出張買取は断れますか？", a: "はい、信頼できる業者はキャンセル無料です。「検討します」と断って問題ありません。" },
            { q: "宅配買取は安全ですか？", a: "大手業者であれば安全です。キャンセル時の返送料が無料かを事前に確認しましょう。" },
            { q: "一括査定は本当に無料ですか？", a: "はい、ヒカカク！などの一括査定サービスは完全無料です。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">方法比較</span><p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p></Link>
          <Link href="/articles/daikichi-vs-nanboya/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">比較ガイド</span><p className="text-sm font-bold mt-1">買取大吉 vs なんぼや比較</p></Link>
          <Link href="/articles/kin-kaitori-hajimete/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">初心者ガイド</span><p className="text-sm font-bold mt-1">初めての金買取ガイド</p></Link>
          <Link href="/articles/kin-kaitori-sagi/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">注意ガイド</span><p className="text-sm font-bold mt-1">金買取の詐欺・トラブル対策</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>金買取の方法は一長一短があり、<strong>「この方法が絶対に正解」というものはありません</strong>。あなたの状況に合った方法を選びましょう。</p>
        <ul>
          <li><strong>即日現金化なら → 店頭買取</strong></li>
          <li><strong>最高値を追求するなら → 一括査定 + 宅配</strong></li>
          <li><strong>大量の金やインゴットなら → 出張買取</strong></li>
        </ul>
        <p>迷ったら、まず<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で金の価格感を把握してから、最適な方法を選びましょう。査定は無料です。</p>
      </article>
    </div>
  </>);
}
