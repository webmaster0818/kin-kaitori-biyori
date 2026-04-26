import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "福岡で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "天神・博多駅周辺・大名エリアが福岡の金買取激戦区です。特に天神は大手買取チェーンが集中しており、競争による高値が期待できます。" } },
      { "@type": "Question", name: "福岡の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であればその場で現金を受け取れます。買取大吉やなんぼやなどの大手チェーンは天神・博多に複数店舗があり、予約不要で即日対応しています。" } },
      { "@type": "Question", name: "福岡と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、福岡でも東京でもほぼ同じ水準です。ただし業者間の競争度の差で、1gあたり数十円〜100円程度の差が出る場合があります。" } },
      { "@type": "Question", name: "福岡で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナが福岡県全域で出張買取に対応しています。出張費・査定料は無料です。" } },
      { "@type": "Question", name: "福岡の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、買取時には身分証の提示が義務付けられています。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】福岡の金買取おすすめ業者ガイド — 天神・博多・大名エリア別比較",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" },
    description: "福岡で金を高く売るならどこがいい？天神・博多・大名のエリア別おすすめ買取業者、買取方法の比較、福岡の金買取相場と高く売るコツを徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】福岡の金買取おすすめ業者ガイド — 天神・博多・大名エリア別比較",
  description:
    "福岡で金を高く売るならどこがいい？天神・博多・大名のエリア別おすすめ買取業者、店頭・出張・宅配の方法別比較、福岡の金買取相場と高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">福岡で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">福岡にも多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function FukuokaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">福岡の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="地域の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】福岡の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>福岡は九州最大の金買取マーケットです。天神・博多駅周辺を中心に多くの買取業者が競合しており、<strong>九州エリアで最も高い買取価格が期待できる</strong>都市です。</p>

        <p>「福岡で金を売るならどこがいい？」「天神と博多どちらが高い？」「福岡の買取相場は東京と違う？」——この記事では、福岡での金買取に特化した<strong>エリア別・業者別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>福岡の金買取マーケットの特徴</li>
          <li>天神・博多・大名のエリア別おすすめ買取業者</li>
          <li>福岡で金を高く売るためのコツ</li>
          <li>店頭・出張・宅配の方法別メリット</li>
          <li>福岡の金買取で注意すべきポイント</li>
        </ul>

        <h2>福岡の金買取市場の特徴</h2>

        <p>福岡は九州の経済中心地であり、金・貴金属の買取市場も活発です。</p>

        <h3>九州最大の買取マーケット</h3>

        <p>福岡市には大手買取チェーンから地元密着型の専門店まで多くの業者が集まっています。特に<strong>天神エリア</strong>は西日本有数の繁華街であり、買取業者の密集度も高いため、<strong>競争原理が働いて高価買取につながりやすい</strong>環境です。</p>

        <p>また、福岡は九州一円（佐賀・長崎・熊本・大分・宮崎・鹿児島）からのアクセスも良いため、九州全体の買取需要が集まる「ハブ」としての役割を果たしています。</p>

        <h3>アジアからの需要も影響</h3>

        <p>福岡はアジアとの距離が近く、韓国・中国からの観光客による貴金属購入需要もあります。この需要が間接的に福岡の貴金属市場を活性化させ、買取業者にとっても<strong>再販売のルートが豊富</strong>なため、高値での買取が期待できます。</p>

        <h3>福岡の金買取相場（2026年4月）</h3>

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

        <p>福岡の買取相場は東京・大阪とほぼ同水準です。金の買取価格は国際相場と為替レートに連動するため、地域差はほとんどありません。</p>

        <CtaBox />

        <h2>福岡のエリア別おすすめ金買取業者</h2>

        <h3>天神エリア</h3>

        <p>天神は福岡最大の繁華街で、<strong>大手買取チェーンが最も密集</strong>しているエリアです。なんぼや福岡天神店、おたからや、買取大吉など主要な買取業者が揃っています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>大手チェーン密集、1日で複数店舗比較可能</td></tr>
              <tr><td><strong>アクセス</strong></td><td>地下鉄天神駅・西鉄福岡（天神）駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>競争が激しく高値が出やすい</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>複数店舗を効率よく回りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>博多駅周辺エリア</h3>

        <p>博多駅は九州の玄関口であり、博多マルイや駅ビル周辺に買取店が出店しています。<strong>九州各県からのアクセスが良い</strong>ため、出張や旅行のついでに立ち寄れる利便性があります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>交通アクセス抜群、九州各地からの利用に便利</td></tr>
              <tr><td><strong>アクセス</strong></td><td>JR博多駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>大手の標準的な買取価格</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>新幹線や電車で来る人、仕事帰りに立ち寄りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>大名・中央区エリア</h3>

        <p>大名エリアは天神の西側に位置し、セレクトショップやブランドリサイクル店が集まるおしゃれなエリアです。<strong>ブランドジュエリーの買取に強い</strong>業者が多い傾向にあります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>ブランド買取に強い業者が多い</td></tr>
              <tr><td><strong>アクセス</strong></td><td>天神駅から徒歩5〜10分</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>ブランド品ならプラス査定の可能性</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>ブランドジュエリーを売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h2>福岡で金を高く売る5つのコツ</h2>

        <ol>
          <li>
            <strong>天神エリアで最低3社に見積もりを取る</strong>
            <p>天神は買取業者が密集しているため、徒歩圏内で複数社の査定を受けられます。同じ金製品でも業者によって1gあたり数百円の差が出ます。</p>
          </li>
          <li>
            <strong>地元の貴金属専門店にも見積もりを取る</strong>
            <p>福岡宝石バンク、髙山質店、福岡宝石市場などの地元密着型の専門店は、大手チェーンよりも高値をつけることがあります。特に重量のある金製品は差額が大きくなります。</p>
          </li>
          <li>
            <strong>一括査定で全国の業者と比較する</strong>
            <p>ヒカカク！などの一括査定サービスを使えば、福岡の業者だけでなく全国の業者と価格を比較できます。宅配買取なら全国どこの業者にも売却可能です。</p>
          </li>
          <li>
            <strong>付属品を揃えて持参する</strong>
            <p>保証書、鑑定書、専用ケースがあれば査定額アップにつながります。特にブランドジュエリーは付属品の有無で大きく価格が変わります。</p>
          </li>
          <li>
            <strong>金相場をチェックしてから売る</strong>
            <p>2026年4月現在、金価格は歴史的な高値水準です。ただし日々変動するため、買取業者のWebサイトで当日の相場を確認してから来店しましょう。</p>
          </li>
        </ol>

        <CtaBox />

        <h2>福岡の金買取 — 方法別比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>即日現金化</th>
                <th>自宅完結</th>
                <th>価格交渉</th>
                <th>おすすめ業者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>可能</td><td>不可</td><td>しやすい</td><td>買取大吉、おたからや</td></tr>
              <tr><td><strong>出張買取</strong></td><td>可能（当日〜翌日）</td><td>可能</td><td>対面で可能</td><td>ウリエル、ティファナ</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>不可（数日〜1週間）</td><td>可能</td><td>難しい</td><td>ティファナ</td></tr>
              <tr><td><strong>一括査定</strong></td><td>不可</td><td>可能</td><td>複数社比較で高値</td><td>ヒカカク！</td></tr>
            </tbody>
          </table>
        </div>

        <p>福岡市内であれば店頭買取が最も効率的です。天神〜博多駅間は地下鉄で約5分なので、両エリアの業者を1日で回ることが可能です。一方、福岡県内の郊外にお住まいの方は出張買取がおすすめです。</p>

        <h2>福岡の金買取で注意すべきポイント</h2>

        <h3>悪質な訪問買取に注意</h3>

        <p>福岡でも「不用品の回収」を名目に突然訪問し、貴金属を相場より大幅に安い価格で買い取ろうとする悪質なケースが報告されています。突然の訪問買取には応じず、自分で業者を選んで持ち込むようにしましょう。</p>

        <h3>査定額の根拠を確認する</h3>

        <p>信頼できる業者は「今日の相場は1gあたり○○円で、お品物は○g、純度K18なので○○円です」と、<strong>計算の根拠を明確に説明</strong>してくれます。根拠を示さずに金額だけ提示する業者は避けましょう。</p>

        <h2>4社比較 — 福岡で金買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>福岡エリアの特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>福岡を含む全国の買取業者を一括比較</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>天神・博多エリアに複数店舗あり</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>福岡県全域で出張対応。出張費無料</td>
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

        <h2>福岡の金買取 よくある質問</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "福岡で金買取の価格が高いエリアはどこですか？",
              a: "天神・博多駅周辺・大名エリアが福岡の金買取激戦区です。特に天神は大手買取チェーンが密集しており、競争による高値が期待できます。複数店舗を回って比較するのがおすすめです。",
            },
            {
              q: "福岡の金買取で即日現金化できますか？",
              a: "はい、店頭買取であればその場で現金を受け取れます。天神・博多に大手チェーンが多数あり、予約不要で即日対応しています。",
            },
            {
              q: "福岡と東京で金の買取価格に差はありますか？",
              a: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、福岡でも東京でもほぼ同じ水準です。ただし業者間の競争度の違いにより、1gあたり数十円程度の差が出ることはあります。",
            },
            {
              q: "福岡で出張買取に対応している業者はありますか？",
              a: "ウリエルやティファナが福岡県全域で出張買取に対応しています。出張費・査定料・キャンセル料はすべて無料です。",
            },
            {
              q: "福岡で金を売る際に必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。200万円を超える取引の場合はマイナンバーの提示も必要です。",
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
          <Link href="/articles/osaka-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">地域ガイド</span>
            <p className="text-sm font-bold mt-1">大阪の金買取おすすめガイド</p>
          </Link>
          <Link href="/articles/nagoya-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">地域ガイド</span>
            <p className="text-sm font-bold mt-1">名古屋の金買取おすすめガイド</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>福岡は天神・博多を中心に多くの買取業者が集まる九州最大の金買取マーケットです。業者間の競争が活発なため、<strong>複数社を比較すれば高値での売却が期待できます</strong>。</p>

        <p>2026年4月現在、金価格は歴史的な高値水準にあります。売却を検討している方にとっては絶好の機会です。</p>

        <p>福岡で金を高く売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>天神エリアで最低3社に見積もりを取る</strong></li>
          <li><strong>地元の貴金属専門店にも見積もりを取る</strong></li>
          <li><strong>一括査定で全国の業者とも比較する</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で福岡の買取業者の価格を比較してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
