import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "東京で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "銀座・新宿・上野御徒町エリアが高価買取の激戦区です。特に御徒町は貴金属問屋街として有名で、相場に近い価格での買取が期待できます。ただし店舗間で差があるため、複数店の比較が重要です。" } },
      { "@type": "Question", name: "東京の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉やおたからやなどの大手チェーンは東京都内に多数の店舗があり、予約不要で即日現金化が可能です。" } },
      { "@type": "Question", name: "東京で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナなど、東京都内全域で出張買取に対応している業者があります。出張費・査定料は無料で、自宅にいながら金の売却が完結します。" } },
      { "@type": "Question", name: "東京の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、買取時には身分証の提示が義務付けられています。付属品（保証書・箱）があれば査定額アップの可能性もあります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】東京の金買取おすすめ業者ガイド — エリア別・方法別に徹底比較",
  description:
    "東京で金を高く売るならどこがいい？銀座・新宿・上野御徒町のエリア別おすすめ買取業者、店頭・出張・宅配の方法別比較、東京の金買取相場と高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">東京で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">東京には多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function TokyoKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">東京の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="地域の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】東京の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月13日</p>

        <p>東京は日本最大の金買取マーケットです。銀座・新宿・上野御徒町を中心に数百の買取業者がひしめき合い、<strong>競争が激しいぶん高値がつきやすい</strong>という特徴があります。</p>

        <p>「東京で金を売るならどこがいい？」「エリアによって買取価格は違う？」「出張買取と店頭買取どっちが得？」——この記事では、東京での金買取に特化した<strong>エリア別・方法別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>東京のエリア別おすすめ金買取業者</li>
          <li>店頭・出張・宅配・一括査定の方法別メリット比較</li>
          <li>東京ならではの金買取事情と高く売るコツ</li>
          <li>送客先4社の東京での特徴と評判</li>
        </ul>

        <h2>東京の金買取相場（2026年4月）</h2>

        <p>2026年4月現在、東京での金買取相場は以下のとおりです。</p>

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
              <tr><td><strong>Pt900（プラチナ）</strong></td><td>約4,600〜4,800円</td></tr>
            </tbody>
          </table>
        </div>

        <p>東京は全国で最も買取業者間の競争が激しいエリアです。そのため、<strong>地方と比べて1gあたり100〜300円ほど高い買取価格</strong>が提示される傾向があります。</p>

        <h2>エリア別 — 東京のおすすめ金買取スポット</h2>

        <h3>銀座・有楽町エリア</h3>

        <p><strong>銀座は東京の金買取の中心地</strong>です。田中貴金属工業をはじめ、ゴールドプラザ、買取本舗七福神など大手業者が集中しています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>メリット</strong></td><td>大手が集中し高値提示が多い。信頼性が高い</td></tr>
              <tr><td><strong>デメリット</strong></td><td>混雑しやすい。待ち時間が発生することも</td></tr>
              <tr><td><strong>おすすめの人</strong></td><td>高額品（インゴット・ブランドジュエリー）を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>新宿エリア</h3>

        <p>新宿はアクセスの良さと業者数の多さが魅力です。<strong>駅周辺に買取大吉・おたからや・なんぼやなど</strong>の大手チェーンが揃っており、仕事帰りや買い物ついでに立ち寄れます。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>メリット</strong></td><td>アクセス抜群。夜遅くまで営業する店舗も多い</td></tr>
              <tr><td><strong>デメリット</strong></td><td>専門性はやや低い店舗もある</td></tr>
              <tr><td><strong>おすすめの人</strong></td><td>仕事帰りにサッと査定したい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>上野・御徒町エリア</h3>

        <p>御徒町は<strong>日本最大の貴金属問屋街</strong>です。ジュエリー関連の業者が数百軒集まるエリアで、金の買取価格も全国トップクラスの高さです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>メリット</strong></td><td>問屋価格に近い高値が出やすい。専門性が高い</td></tr>
              <tr><td><strong>デメリット</strong></td><td>個人客に不慣れな業者もある</td></tr>
              <tr><td><strong>おすすめの人</strong></td><td>金地金・インゴットなど大量の金を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <h3>渋谷・池袋・その他エリア</h3>

        <p>渋谷・池袋にも買取大吉やおたからやなどのチェーン店があり、日常の買い物ついでに立ち寄れます。23区外（立川・八王子・町田など）にも大手チェーンの支店が展開されており、都心まで出なくても査定を受けることが可能です。</p>

        <CtaBox />

        <h2>方法別 — 東京での金買取方法を比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>おすすめ業者</th>
                <th>メリット</th>
                <th>デメリット</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>店頭買取</strong></td>
                <td>買取大吉</td>
                <td>即日現金化。目の前で計量</td>
                <td>店舗まで移動が必要</td>
                <td>すぐに現金が欲しい人</td>
              </tr>
              <tr>
                <td><strong>出張買取</strong></td>
                <td>ウリエル</td>
                <td>自宅で完結。大量品も楽</td>
                <td>日程調整が必要</td>
                <td>外出が難しい人</td>
              </tr>
              <tr>
                <td><strong>宅配買取</strong></td>
                <td>ティファナ</td>
                <td>全国対応。24時間発送OK</td>
                <td>現金化まで数日かかる</td>
                <td>忙しい人</td>
              </tr>
              <tr>
                <td><strong>一括査定</strong></td>
                <td>ヒカカク！</td>
                <td>複数業者を一度に比較</td>
                <td>個別に連絡が来る</td>
                <td>最高値で売りたい人</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>東京在住の方は<strong>「一括査定 + 店頭買取の組み合わせ」</strong>が最も効率的です。まずヒカカク！で複数業者の見積もりを取得し、最高値の業者に持ち込みましょう。</p>

        <h2>おすすめ4社の東京での特徴</h2>

        <h3>ヒカカク！ — 東京の業者を一括比較</h3>

        <p>ヒカカク！は複数の買取業者に一括で査定依頼ができるサービスです。東京は登録業者数が最も多いエリアなので、<strong>最も比較の効果が高い</strong>地域と言えます。</p>

        <ul>
          <li>東京都内の登録業者数が全国最多</li>
          <li>Web完結で24時間査定依頼可能</li>
          <li>利用料完全無料</li>
        </ul>

        <h3>買取大吉 — 東京都内に多数店舗</h3>

        <p>買取大吉は全国600店舗以上を展開する大手チェーンで、東京都内にも<strong>新宿・銀座・池袋・渋谷・上野</strong>をはじめ多数の店舗があります。</p>

        <ul>
          <li>予約不要。飛び込みで即日査定OK</li>
          <li>査定料・手数料すべて無料</li>
          <li>その場で現金払い</li>
        </ul>

        <h3>ウリエル — 東京都内全域で出張買取</h3>

        <p>ウリエルは出張買取に特化した業者で、<strong>東京23区はもちろん、多摩地域も対応</strong>しています。</p>

        <ul>
          <li>出張費・査定料・キャンセル料すべて無料</li>
          <li>自宅にいながら完結</li>
          <li>大量の金製品もまとめて査定可能</li>
        </ul>

        <h3>ティファナ — 3つの方法から選択</h3>

        <p>ティファナは店頭・出張・宅配の3つの方法に対応。東京に複数の店舗を構え、ライフスタイルに合わせた柔軟な売却が可能です。</p>

        <ul>
          <li>店頭・出張・宅配の3つの方法に対応</li>
          <li>金以外の貴金属やブランド品もまとめて売却OK</li>
          <li>査定料無料</li>
        </ul>

        <CtaBox />

        <h2>東京で金を高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>最低3社に見積もりを取る</strong>
            <p>東京は業者の選択肢が豊富なので、相見積もりの効果が最も出やすいエリアです。同じK18ネックレスでも業者間で数千円〜数万円の差が出ます。</p>
          </li>
          <li>
            <strong>御徒町の専門店も候補に入れる</strong>
            <p>金地金やインゴットなど高額品を売る場合は、御徒町の貴金属専門店にも見積もりを取りましょう。問屋街ならではの高値が期待できます。</p>
          </li>
          <li>
            <strong>ブランドジュエリーは銀座の専門店へ</strong>
            <p>ティファニーやカルティエなどのブランドK18ジュエリーは、素材買取より高く評価してくれるブランド専門店（銀座に多い）に持ち込むのが得策です。</p>
          </li>
          <li>
            <strong>まとめ売りで交渉する</strong>
            <p>複数の金製品をまとめて売却する場合、総額が大きくなるため業者も買取意欲が高まり、1gあたりの単価を上げてくれることがあります。</p>
          </li>
          <li>
            <strong>土日は避ける</strong>
            <p>銀座・新宿の人気店は土日に混雑します。平日に訪問すれば待ち時間が短く、スタッフも丁寧に対応してくれる傾向があります。</p>
          </li>
        </ol>

        <h2>東京の金買取 注意点とトラブル回避</h2>

        <h3>押し買いに注意</h3>

        <p>東京では訪問買取（押し買い）のトラブルが報告されています。<strong>飛び込みで自宅を訪問してくる業者</strong>には注意が必要です。信頼できる業者は必ず事前に予約・連絡があります。</p>

        <h3>手数料を確認する</h3>

        <p>「高価買取」と謳いながら、査定手数料・精錬費用・溶解費用などの名目で差し引く悪質な業者も存在します。当サイト掲載の4社はすべて<strong>手数料無料</strong>です。</p>

        <h3>クーリングオフ制度</h3>

        <p>出張買取の場合、特定商取引法によりクーリングオフ（8日間）が適用されます。店頭に持ち込んだ場合は適用外のため、高額品は慎重に判断しましょう。</p>

        <h2>東京の金買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "東京で金買取の価格が高いエリアはどこですか？",
              a: "銀座・新宿・上野御徒町エリアが高価買取の激戦区です。特に御徒町は貴金属問屋街として有名で、相場に近い価格での買取が期待できます。ただし店舗間で差があるため、複数店の比較が重要です。",
            },
            {
              q: "東京の金買取で即日現金化できますか？",
              a: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉やおたからやなどの大手チェーンは東京都内に多数の店舗があり、予約不要で即日現金化が可能です。",
            },
            {
              q: "東京で出張買取に対応している業者はありますか？",
              a: "ウリエルやティファナなど、東京都内全域で出張買取に対応している業者があります。出張費・査定料は無料で、自宅にいながら金の売却が完結します。",
            },
            {
              q: "東京の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、買取時には身分証の提示が義務付けられています。付属品（保証書・箱）があれば査定額アップの可能性もあります。",
            },
            {
              q: "東京と地方で金の買取価格に差はありますか？",
              a: "同じ純度・重量でも、東京は業者間の競争が激しいため、地方と比べて1gあたり100〜300円ほど高い買取価格が提示される傾向があります。一括査定を利用すれば、その差をさらに活用できます。",
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
          <Link href="/articles/osaka-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">地域ガイド</span>
            <p className="text-sm font-bold mt-1">大阪の金買取おすすめガイド</p>
          </Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">方法比較</span>
            <p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>東京は金買取業者の競争が最も激しいエリアであり、<strong>全国で最も高い買取価格が期待できる</strong>地域です。</p>

        <p>2026年4月現在、K24（純金）の買取相場は1gあたり約15,200円前後と歴史的な高値水準にあります。東京にお住まいの方は、この好条件を最大限に活かしましょう。</p>

        <p>東京で金を高く売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>ヒカカク！の一括査定で複数業者を比較する</strong></li>
          <li><strong>銀座・御徒町の専門店にも見積もりを取る</strong></li>
          <li><strong>ブランド品はブランド専門店と金買取専門店の両方で査定を受ける</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金製品の買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
