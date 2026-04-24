import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "横浜で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "横浜駅周辺・元町中華街エリアが横浜の金買取激戦区です。横浜駅周辺は大手買取チェーンが集中しており、元町エリアにはジュエリー専門店が多く、ブランド買取に強い業者も揃っています。" } },
      { "@type": "Question", name: "横浜の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であればその場で現金を受け取れます。横浜駅周辺にはゴールドプラザ、おたからや、買取大吉など大手チェーンが多数あり、予約不要で即日対応しています。" } },
      { "@type": "Question", name: "横浜と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "ほぼ同じです。金の買取価格は国際相場に連動しているため地域差はほとんどありません。横浜は東京に近いため、都内の業者との競争もあり、価格水準は東京と遜色ありません。" } },
      { "@type": "Question", name: "横浜で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナが横浜市内および神奈川県全域で出張買取に対応しています。出張費・査定料は無料です。" } },
      { "@type": "Question", name: "横浜の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により買取時の身分証提示は義務です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】横浜の金買取おすすめ業者ガイド — 横浜駅・元町・関内エリア別比較",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" },
    description: "横浜で金を高く売るならどこがいい？横浜駅・元町・関内のエリア別おすすめ買取業者、買取方法の比較、横浜の金買取相場と高く売るコツを徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】横浜の金買取おすすめ業者ガイド — 横浜駅・元町・関内エリア別比較",
  description:
    "横浜で金を高く売るならどこがいい？横浜駅・元町・関内のエリア別おすすめ買取業者、店頭・出張・宅配の方法別比較、横浜の金買取相場と高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">横浜で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">横浜には多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function YokohamaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">横浜の金買取おすすめ</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】横浜の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>横浜は人口約375万人を擁する日本第2の都市であり、金・貴金属の買取市場も非常に活発です。横浜駅周辺から元町・関内エリアまで、多くの買取業者が営業しています。</p>

        <p>「横浜で金を売るならどこがいい？」「横浜駅と元町どちらが高い？」「東京まで行かなくても高く売れる？」——この記事では、横浜での金買取に特化した<strong>エリア別・業者別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>横浜の金買取マーケットの特徴と東京との比較</li>
          <li>横浜駅・元町・関内のエリア別おすすめ買取業者</li>
          <li>横浜で金を高く売るためのコツ</li>
          <li>店頭・出張・宅配の方法別メリット</li>
          <li>横浜の金買取で注意すべきポイント</li>
        </ul>

        <h2>横浜の金買取市場の特徴</h2>

        <h3>東京に近いメリットを活かせる</h3>

        <p>横浜は東京まで電車で約30分という好立地にあります。このため、<strong>東京の業者との競争にもさらされており</strong>、横浜の買取業者も東京に負けない価格を提示する傾向があります。</p>

        <p>また、横浜に住んでいる方は横浜市内の業者に加えて、東京の業者にも宅配買取や一括査定で見積もりを取ることができます。<strong>地理的に選択肢が広い</strong>のが横浜の強みです。</p>

        <h3>横浜駅周辺の充実した買取インフラ</h3>

        <p>横浜駅はJR・私鉄・地下鉄が乗り入れる巨大ターミナルで、駅周辺にはゴールドプラザ横浜店（駅徒歩2分）、おたからや横浜本店、ブランディア横浜店など、<strong>主要な買取業者が徒歩圏内に集中</strong>しています。</p>

        <h3>横浜の金買取相場（2026年4月）</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>1gあたり買取価格（税込目安）</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>約15,000〜15,400円</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>約11,200〜11,600円</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>約8,700〜9,100円</td></tr>
              <tr><td><strong>Pt900（プラチナ）</strong></td><td>約4,400〜4,700円</td></tr>
            </tbody>
          </table>
        </div>

        <p>横浜の買取相場は東京とほぼ同水準です。わざわざ東京まで行かなくても、横浜市内で十分に高値での売却が可能です。</p>

        <CtaBox />

        <h2>横浜のエリア別おすすめ金買取業者</h2>

        <h3>横浜駅周辺エリア</h3>

        <p>横浜駅周辺は<strong>横浜で最も買取業者が集中</strong>しているエリアです。ゴールドプラザ横浜店はJR横浜駅から徒歩2分、年中無休で営業しており、気軽に査定を受けられます。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>大手チェーン密集、アクセス抜群</td></tr>
              <tr><td><strong>アクセス</strong></td><td>JR・私鉄・地下鉄横浜駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>競争が激しく高値が出やすい</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>効率よく複数店舗を回りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>元町・中華街エリア</h3>

        <p>元町はジュエリーショップが多いエリアとして知られています。ブランドジュエリーの買取に強い業者が多く、<strong>K18やプラチナのブランドジュエリー</strong>を売りたい方に適しています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>ジュエリー専門店が多い、ブランド買取に強い</td></tr>
              <tr><td><strong>アクセス</strong></td><td>みなとみらい線元町・中華街駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>ブランドジュエリーでプラス査定が期待できる</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>ブランドジュエリーを売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>関内・伊勢佐木町エリア</h3>

        <p>関内・伊勢佐木町エリアには地元密着型の買取店や質屋が点在しています。<strong>昔ながらの質屋</strong>で個別対応してもらえるのが特徴です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>地元密着型の質屋・専門店がある</td></tr>
              <tr><td><strong>アクセス</strong></td><td>JR関内駅・地下鉄伊勢佐木長者町駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>大手と比較することで好条件を引き出せる</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>個別に相談しながら売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h2>横浜で金を高く売る5つのコツ</h2>

        <ol>
          <li>
            <strong>横浜駅周辺で最低3社に見積もりを取る</strong>
            <p>横浜駅周辺は買取業者が密集しているため、徒歩圏内で効率よく複数社の査定を受けられます。同じ金製品でも業者によって1gあたり数百円の差が出ます。</p>
          </li>
          <li>
            <strong>東京の業者にも宅配買取で見積もりを取る</strong>
            <p>横浜は東京に近いため、東京の業者に宅配買取で見積もりを取ることも容易です。ヒカカク！の一括査定なら横浜と東京の業者を同時に比較できます。</p>
          </li>
          <li>
            <strong>ブランドジュエリーは元町エリアも検討する</strong>
            <p>ティファニー、カルティエなどのK18ジュエリーは、元町エリアのジュエリー専門店で高値がつくことがあります。</p>
          </li>
          <li>
            <strong>付属品を揃えて持参する</strong>
            <p>保証書、鑑定書、専用ケースを揃えることで査定額がアップします。</p>
          </li>
          <li>
            <strong>相場が高いときに売る</strong>
            <p>2026年4月現在、K24で1gあたり約15,200円と歴史的な高値水準です。今が売却の好機です。</p>
          </li>
        </ol>

        <CtaBox />

        <h2>横浜の金買取 — 方法別比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>即日現金化</th>
                <th>自宅完結</th>
                <th>おすすめ業者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>可能</td><td>不可</td><td>買取大吉、ゴールドプラザ</td></tr>
              <tr><td><strong>出張買取</strong></td><td>可能（当日〜翌日）</td><td>可能</td><td>ウリエル、ティファナ</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>不可（数日〜1週間）</td><td>可能</td><td>ティファナ</td></tr>
              <tr><td><strong>一括査定</strong></td><td>不可</td><td>可能</td><td>ヒカカク！</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4社比較 — 横浜で金買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>横浜エリアの特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>横浜・東京の業者を一括比較。最高値を効率的に探せる</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>横浜市内に複数店舗。即日現金化が可能</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>神奈川県全域で出張対応。出張費無料</td>
                <td>自宅で完結したい</td>
              </tr>
              <tr>
                <td><strong>ティファナ</strong></td>
                <td>出張/店頭/宅配</td>
                <td>3つの方法から選べる柔軟対応</td>
                <td>方法を選びたい</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>横浜の金買取 よくある質問</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "横浜で金買取の価格が高いエリアはどこですか？",
              a: "横浜駅周辺が最も買取業者が密集しており、競争による高値が期待できます。元町エリアはブランドジュエリーの買取に強い業者が多いです。",
            },
            {
              q: "横浜と東京で金の買取価格に差はありますか？",
              a: "ほぼ同じです。金の買取価格は国際相場に連動するため地域差はほとんどありません。横浜から東京の業者に宅配で送ることも可能なので、両方を比較するのがベストです。",
            },
            {
              q: "横浜で出張買取に対応している業者はありますか？",
              a: "ウリエルやティファナが横浜市内および神奈川県全域で出張買取に対応しています。出張費・査定料・キャンセル料はすべて無料です。",
            },
            {
              q: "横浜の金買取で即日現金化できますか？",
              a: "はい、店頭買取であればその場で現金を受け取れます。横浜駅周辺のゴールドプラザやおたからやなど、予約不要で即日対応しています。",
            },
            {
              q: "横浜で金を売る際に必要なものは？",
              a: "本人確認書類（運転免許証・マイナンバーカード等）が必須です。200万円超の取引ではマイナンバーの提示も必要です。",
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
          <Link href="/articles/tokyo-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">地域ガイド</span>
            <p className="text-sm font-bold mt-1">東京の金買取おすすめガイド</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">方法比較</span>
            <p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>横浜は東京に次ぐ人口を持つ大都市であり、金買取の選択肢も豊富です。<strong>横浜駅周辺で複数業者を比較</strong>するのが最も効率的な方法です。</p>

        <p>さらに東京に近い地の利を活かし、一括査定で東京の業者とも比較すれば、より高値での売却が実現できます。</p>

        <ol>
          <li><strong>横浜駅周辺で最低3社に見積もりを取る</strong></li>
          <li><strong>一括査定で東京の業者とも比較する</strong></li>
          <li><strong>ブランド品は元町エリアのジュエリー専門店にも見積もりを取る</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で横浜・東京の買取業者の価格を比較してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
