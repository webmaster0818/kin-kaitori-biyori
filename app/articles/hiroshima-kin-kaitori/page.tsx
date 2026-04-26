import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "広島で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "広島駅周辺・一番町・クリスロード商店街エリアが金買取の激戦区です。大手買取チェーンが集中しており、競争による高値が期待できます。" } },
      { "@type": "Question", name: "広島の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であればその場で現金を受け取れます。買取大吉やなんぼやなど大手チェーンが広島市内に多数あり、予約不要で即日対応しています。" } },
      { "@type": "Question", name: "広島と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、広島でも東京でもほぼ同じ水準です。ただし、一括査定で全国の業者と比較することをおすすめします。" } },
      { "@type": "Question", name: "中国・四国の地方都市からでも金を高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "宅配買取を利用すれば、中国・四国のどこからでも全国の高価買取業者に売却できます。ヒカカク！の一括査定なら、広島の業者だけでなく全国の業者と価格を比較可能です。" } },
      { "@type": "Question", name: "広島で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナが広島市内で出張買取に対応しています。出張費・査定料は無料です。広島市外の中国・四国エリアも対応可能な場合がありますので、事前にご確認ください。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】広島の金買取おすすめ業者ガイド — 広島駅・八丁堀・本通エリア別比較",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "広島で金を高く売るならどこがいい？広島駅・八丁堀・本通のエリア別おすすめ買取業者、買取方法の比較、広島の金買取相場と高く売るコツを徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】広島の金買取おすすめ業者ガイド — 広島駅・八丁堀・本通エリア別比較",
  description: "広島で金を高く売るならどこがいい？広島駅・八丁堀・本通のエリア別おすすめ買取業者、店頭・出張・宅配の方法別比較、広島の金買取相場と高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">広島で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">広島にも多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function HiroshimaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">広島の金買取おすすめ</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】広島の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>広島は中国・四国地方最大の都市であり、金・貴金属の買取市場も中国・四国エリアで最も活発です。広島駅周辺・八丁堀・本通一番町を中心に、大手チェーンから地元密着型の専門店まで多くの買取業者が営業しています。</p>

        <p>「広島で金を売るならどこがいい？」「中国・四国の地方からでも高く売れる？」「広島の買取相場は東京と違う？」——この記事では、広島での金買取に特化した<strong>エリア別・業者別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>広島の金買取マーケットの特徴</li>
          <li>広島駅・八丁堀・本通のエリア別おすすめ買取業者</li>
          <li>広島で金を高く売るためのコツ</li>
          <li>中国・四国の地方都市からの売却方法</li>
          <li>広島の金買取で注意すべきポイント</li>
        </ul>

        <h2>広島の金買取市場の特徴</h2>

        <h3>中国・四国最大の買取激戦区</h3>

        <p>広島市には買取大吉、なんぼや、おたからや、大黒屋、ブランドジャック、銀座屋などの<strong>全国チェーンと地元専門店が多数</strong>集結しています。広島駅東口のBiVi広島や、一番町のクリスロード商店街には買取店が密集しており、競争が激しいエリアです。</p>

        <p>中国・四国エリア（岡山・山口・島根・鳥取・愛媛・香川など）からの利用者が広島に集まるため、買取量が多く、業者も積極的な価格提示をする傾向にあります。</p>

        <h3>広島の金買取相場（2026年4月）</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>1gあたり買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>約15,000〜15,400円</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>約11,200〜11,600円</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>約8,700〜9,000円</td></tr>
              <tr><td><strong>Pt900（プラチナ）</strong></td><td>約4,500〜4,800円</td></tr>
            </tbody>
          </table>
        </div>

        <p>金の買取価格は国際相場に連動しているため、広島でも東京でも基本的に同じ水準です。ただし、<strong>業者間の競争が激しいエリアほど高値が出やすい</strong>傾向があります。</p>

        <CtaBox />

        <h2>広島のエリア別おすすめ買取業者</h2>

        <h3>広島駅周辺エリア</h3>

        <p>JR広島駅の西口・東口ともに買取店が集中しています。BiVi広島駅東口には銀座屋が、広島パルコには大黒屋が入っており、買い物ついでに立ち寄れる便利さが魅力です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>特徴</th>
                <th>対応方法</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>買取大吉</strong></td><td>全国チェーン。査定料・手数料無料。広島市内に複数店舗</td><td>店頭・出張</td></tr>
              <tr><td><strong>なんぼや</strong></td><td>広島クリスロード店。金・貴金属専門の査定士が対応</td><td>店頭</td></tr>
              <tr><td><strong>大黒屋</strong></td><td>広島パルコ店。質屋の老舗で信頼性が高い</td><td>店頭</td></tr>
              <tr><td><strong>銀座屋</strong></td><td>BiVi広島駅東口店。金買取に特化</td><td>店頭</td></tr>
            </tbody>
          </table>
        </div>

        <h3>八丁堀・本通エリア</h3>

        <p>広島の繁華街である一番町アーケードや青葉通一番町駅周辺には、ブラリバやおたからやなどの買取専門店があります。地下鉄東西線「青葉通一番町駅」からアクセスが良好です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>特徴</th>
                <th>対応方法</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ブラリバ</strong></td><td>金の査定知識が豊富。口コミ評価が高い</td><td>店頭・宅配・出張</td></tr>
              <tr><td><strong>おたからや</strong></td><td>広島市内に複数店舗。フランチャイズの大手</td><td>店頭・出張</td></tr>
              <tr><td><strong>ブランドジャック</strong></td><td>貴金属・高額商品メインの買取専門店。口コミ評価が高い</td><td>店頭</td></tr>
            </tbody>
          </table>
        </div>

        <h3>郊外エリア（泉・長町・利府）</h3>

        <p>広島市郊外のイオンモールやショッピングセンター内にも買取店が出店しています。車でのアクセスが便利で、駐車場完備の店舗が多いのが特徴です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>特徴</th>
                <th>対応方法</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>買取大吉</strong></td><td>イオンモール系列に出店。駐車場完備</td><td>店頭・出張</td></tr>
              <tr><td><strong>ザ・ゴールド</strong></td><td>中国・四国に強い買取チェーン。貴金属・ジュエリーに特化</td><td>店頭・出張・宅配</td></tr>
            </tbody>
          </table>
        </div>

        <h2>広島で金を高く売るための5つのコツ</h2>

        <ol>
          <li>
            <strong>複数業者に見積もりを取る</strong>
            <p>広島には多くの買取業者があります。同じ金製品でも業者によって1gあたり数百円の差が出ることがあるため、<strong>最低3社には見積もり</strong>を取りましょう。一括査定サービスを使えば効率的です。</p>
          </li>
          <li>
            <strong>大手チェーンと地元専門店を比較する</strong>
            <p>全国チェーン（買取大吉、なんぼや等）と地元の専門店（ブランドジャック等）では価格設定が異なることがあります。両方に見積もりを取ることで、最高値を見つけやすくなります。</p>
          </li>
          <li>
            <strong>宅配買取で全国の業者とも比較する</strong>
            <p>広島の店舗だけでなく、全国対応の宅配買取や一括査定を利用すれば、より多くの業者と価格を比較できます。ヒカカク！なら全国の業者に一括で見積もり依頼が可能です。</p>
          </li>
          <li>
            <strong>純度を事前に確認しておく</strong>
            <p>K24、K18、K14など、お持ちの金製品の純度を刻印で確認しておくと、査定がスムーズです。刻印がわからない場合は、買取業者がX線分析で無料判定してくれます。</p>
          </li>
          <li>
            <strong>付属品を揃える</strong>
            <p>ブランドジュエリーの場合は保証書・箱があると査定額アップ。金地金（インゴット）の場合は品位証明書が重要です。</p>
          </li>
        </ol>

        <h2>中国・四国の地方都市からの売却方法</h2>

        <p>広島以外の中国・四国地方（岡山・福山・東広島・山口・松山など）にお住まいの方も、以下の方法で高価買取が可能です。</p>

        <ul>
          <li><strong>宅配買取：</strong>全国対応の業者に金製品を郵送して査定。送料無料・キャンセル時の返送料も無料の業者が多い</li>
          <li><strong>一括査定：</strong>ヒカカク！などの一括査定サービスを使えば、全国の業者と価格を比較可能</li>
          <li><strong>広島への持ち込み：</strong>新幹線で広島駅まで出向き、駅周辺の買取店で店頭査定。高額品の場合は交通費を考慮してもメリットがある</li>
          <li><strong>出張買取：</strong>一部の業者は中国・四国の主要都市への出張に対応。事前に確認を</li>
        </ul>

        <h2>広島で利用できる買取方法の比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>メリット</th>
                <th>デメリット</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>即日現金化。目の前で計量・査定</td><td>店舗に出向く必要がある</td><td>即日現金が欲しい人</td></tr>
              <tr><td><strong>出張買取</strong></td><td>自宅で完結。大量の品もOK</td><td>日程調整が必要</td><td>外出が難しい人</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>全国の業者と比較可能</td><td>発送の手間。現金化に数日</td><td>最高値を追求したい人</td></tr>
              <tr><td><strong>一括査定</strong></td><td>複数業者に一度で見積もり</td><td>実物査定まで時間がかかる</td><td>効率的に比較したい人</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4社比較 — 広島で使えるおすすめ買取サービス</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>広島での特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>広島の業者+全国の業者に一括見積もり。最高値が見つかりやすい</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>広島市内に複数店舗あり。即日現金化可能</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>広島エリアで出張対応。出張費・査定料無料</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>3つの方法から選択可能。広島からの宅配にも対応</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>広島の金買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "広島で金買取の価格が高いエリアはどこですか？", a: "広島駅周辺・一番町・クリスロード商店街エリアが金買取の激戦区です。大手買取チェーンが集中しており、競争による高値が期待できます。" },
            { q: "広島の金買取で即日現金化できますか？", a: "はい、店頭買取であればその場で現金を受け取れます。買取大吉やなんぼやなど大手チェーンが広島市内に多数あり、予約不要で即日対応しています。" },
            { q: "広島と東京で金の買取価格に差はありますか？", a: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、広島でも東京でもほぼ同じ水準です。ただし、一括査定で全国の業者と比較することをおすすめします。" },
            { q: "中国・四国の地方都市からでも金を高く売れますか？", a: "宅配買取を利用すれば、中国・四国のどこからでも全国の高価買取業者に売却できます。ヒカカク！の一括査定なら、広島の業者だけでなく全国の業者と価格を比較可能です。" },
            { q: "広島で出張買取に対応している業者はありますか？", a: "ウリエルやティファナが広島市内で出張買取に対応しています。出張費・査定料は無料です。広島市外の中国・四国エリアも対応可能な場合がありますので、事前にご確認ください。" },
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
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">方法比較</span>
            <p className="text-sm font-bold mt-1">買取方法4つを徹底比較</p>
          </Link>
          <Link href="/articles/kin-kaitori-sagi/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">注意ガイド</span>
            <p className="text-sm font-bold mt-1">金買取の詐欺・トラブル対策</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>広島は中国・四国エリアの金買取において最も重要な市場です。広島駅・八丁堀・本通を中心に多くの買取業者が競合しており、<strong>複数社を比較することで高値売却</strong>が実現できます。</p>

        <p>2026年4月現在、金の買取価格は歴史的高値圏にあります。K24（純金）は1gあたり約15,200円前後、K18は約11,400円前後と、売却を検討している方にとっては好条件です。</p>

        <p>広島で金を高く売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>広島の店舗+全国の業者で相見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>大手チェーンと地元専門店の両方を比較する</strong></li>
          <li><strong>純度・付属品を確認してから査定に出す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で広島エリアの買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
