import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "名古屋で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "名古屋駅周辺・栄・大須エリアが金買取の激戦区です。特に大須は宝石・貴金属の専門店が集まるエリアとして知られ、競争による高値が期待できます。ただし店舗間の価格差があるため、複数店での比較が重要です。" } },
      { "@type": "Question", name: "名古屋の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉やおたからやなどの大手チェーンは名古屋市内に多数の店舗があり、予約不要で即日現金化が可能です。" } },
      { "@type": "Question", name: "名古屋で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナなど、名古屋市内および愛知県全域で出張買取に対応している業者があります。出張費・査定料は無料で、自宅にいながら金の売却が完結します。" } },
      { "@type": "Question", name: "名古屋と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、名古屋でも東京でもほぼ同じ水準です。ただし業者間の競争度の違いにより、1gあたり数十円〜100円程度の差が出る場合があります。" } },
      { "@type": "Question", name: "名古屋の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、買取時には身分証の提示が義務付けられています。付属品（保証書・箱）があれば査定額アップの可能性もあります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】名古屋の金買取おすすめ業者ガイド — 名駅・栄・大須エリア別比較",
    datePublished: "2026-04-24",
    dateModified: "2026-04-24",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" },
    description: "名古屋で金を高く売るならどこがいい？名駅・栄・大須のエリア別おすすめ買取業者、買取方法の比較、名古屋の金買取相場と高く売るコツを徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】名古屋の金買取おすすめ業者ガイド — 名駅・栄・大須エリア別比較",
  description:
    "名古屋で金を高く売るならどこがいい？名駅・栄・大須のエリア別おすすめ買取業者、店頭・出張・宅配の方法別比較、名古屋の金買取相場と高く売るコツを徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">名古屋で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">名古屋には多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function NagoyaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">名古屋の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="地域の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】名古屋の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>名古屋は中部地方最大の金買取マーケットです。名駅（名古屋駅周辺）・栄・大須を中心に多くの買取業者が集まり、<strong>東京・大阪に次ぐ激戦区</strong>として知られています。</p>

        <p>「名古屋で金を売るならどこがいい？」「大須と栄どちらが高く買い取ってもらえる？」「名古屋の買取相場は東京と差がある？」——この記事では、名古屋での金買取に特化した<strong>エリア別・業者別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>名古屋の金買取マーケットの特徴</li>
          <li>名駅・栄・大須のエリア別おすすめ買取業者</li>
          <li>名古屋で金を高く売るためのコツ</li>
          <li>店頭・出張・宅配の方法別メリット</li>
          <li>名古屋の金買取で注意すべきポイント</li>
        </ul>

        <h2>名古屋の金買取市場の特徴</h2>

        <p>名古屋は日本三大都市の一つであり、金・貴金属の買取市場も活発です。以下のような特徴があります。</p>

        <h3>東京・大阪に次ぐ第3の買取マーケット</h3>

        <p>名古屋は買取業者の数が多く、特に<strong>名駅・栄・大須の3大エリア</strong>に集中しています。業者間の競争が激しいため、利用者にとっては<strong>価格交渉がしやすい</strong>環境です。</p>

        <p>また、名古屋は東海地方一円（愛知・岐阜・三重・静岡）の中心都市であるため、周辺県からの利用者も多く、買取量が大きいぶん業者も積極的な価格提示をする傾向にあります。</p>

        <h3>名古屋ならではの「大須」エリア</h3>

        <p>名古屋の大須は、秋葉原（東京）・日本橋（大阪）と並ぶ日本三大電気街の一つですが、実は<strong>宝石・貴金属の専門店も多数集まるエリア</strong>です。池田商店をはじめとする老舗貴金属店が営業しており、地金売買に慣れた専門店ならではの<strong>相場に近い適正価格</strong>での買取が期待できます。</p>

        <h3>名古屋の金買取相場（2026年4月）</h3>

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

        <p>名古屋の買取相場は東京・大阪とほぼ同水準です。金の買取価格は国際相場（ロンドン金価格）と為替レートに連動するため、地域差はほとんどありません。ただし、<strong>業者ごとのマージン（手数料）の差</strong>によって数百円程度の違いが出ます。</p>

        <CtaBox />

        <h2>名古屋のエリア別おすすめ金買取業者</h2>

        <h3>名駅エリア（名古屋駅周辺）</h3>

        <p>名古屋駅周辺は<strong>大手買取チェーンが密集</strong>しているエリアです。アクセスが良く、仕事帰りやショッピングのついでに立ち寄れる利便性が魅力です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>大手チェーンが集中、比較がしやすい</td></tr>
              <tr><td><strong>アクセス</strong></td><td>JR・名鉄・近鉄・地下鉄が集まるターミナル</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>大手の標準的な買取価格</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>駅近で手軽に査定したい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>名駅エリアでは、なんぼや名古屋サンロード店が地下街に直結しておりアクセスが抜群です。おたからや、買取大吉、大黒屋なども名古屋駅徒歩圏内に店舗を構えています。</p>

        <h3>栄エリア</h3>

        <p>栄は名古屋最大の繁華街であり、<strong>百貨店やブランドショップが立ち並ぶ</strong>エリアです。ブランドジュエリーの買取に強い業者が多いのが特徴です。</p>

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
              <tr><td><strong>アクセス</strong></td><td>地下鉄栄駅・矢場町駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>ブランドジュエリーはプラス査定が期待できる</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>ティファニーやカルティエなどのブランド金製品を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>栄エリアでは、コメ兵本店やブランドオフ名古屋栄店など、ブランド品と貴金属の両方を評価できる業者が充実しています。K18やプラチナのブランドジュエリーは、素材価値に加えてブランド価値も上乗せされるため、ブランド買取に強い業者に見積もりを取ることが重要です。</p>

        <h3>大須エリア</h3>

        <p>大須は名古屋の下町的な商店街で、<strong>貴金属の専門店や質屋が多い</strong>のが特徴です。地金（インゴット・金貨）の売買に慣れた業者が多く、<strong>素材買取で最高値</strong>が出やすいエリアです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>貴金属専門店が多く、相場に近い価格で買取</td></tr>
              <tr><td><strong>アクセス</strong></td><td>地下鉄大須観音駅・上前津駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>素材買取では名古屋市内最高値の可能性</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>地金・インゴット・重量のある金製品を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>大須エリアには池田商店や質ウエダ、質セブンなど、<strong>名古屋の老舗貴金属店</strong>が営業しています。これらの店舗は貴金属問屋としての歴史が長く、地金の売買に精通しているため、大手チェーンよりも<strong>1gあたり数十円〜100円程度高い</strong>買取価格を提示してくれるケースがあります。</p>

        <h2>名古屋で金を高く売る5つのコツ</h2>

        <ol>
          <li>
            <strong>最低3社に見積もりを取る</strong>
            <p>名古屋は名駅・栄・大須に買取業者が密集しているため、1日で複数店舗を回ることが可能です。同じ金製品でも業者によって1gあたり数百円の差が出ます。30gのK18ネックレスなら数千円〜1万円以上の差になり得ます。</p>
          </li>
          <li>
            <strong>大須の専門店にも見積もりを取る</strong>
            <p>大手チェーンだけでなく、大須エリアの貴金属専門店にも査定を依頼しましょう。特に重量のあるインゴットや喜平チェーンなど地金系の製品は、専門店の方が高値をつけることが多いです。</p>
          </li>
          <li>
            <strong>ブランドジュエリーは栄のブランド買取店にも持ち込む</strong>
            <p>ティファニー、カルティエ、ブルガリなどのK18ジュエリーは、金の素材価値に加えてブランド価値が上乗せされます。栄エリアのブランド買取専門店と金買取専門店の両方で見積もりを取り、高い方に売却しましょう。</p>
          </li>
          <li>
            <strong>付属品を揃えて持参する</strong>
            <p>保証書、鑑定書、専用ケース、購入レシートがあれば、特にブランド品の場合に査定額アップにつながります。ギャランティカードの有無で買取価格が数万円変わることもあります。</p>
          </li>
          <li>
            <strong>相場が高いときに売る</strong>
            <p>2026年4月現在、金価格は歴史的な高値水準にあります。K24で1gあたり約15,200円、K18で約11,400円です。この水準は10年前の約3倍です。価格に納得できるなら、今が売却の好機と言えます。</p>
          </li>
        </ol>

        <CtaBox />

        <h2>名古屋の金買取 — 方法別比較</h2>

        <p>名古屋での金買取は、店頭・出張・宅配・一括査定の4つの方法があります。</p>

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

        <h3>名古屋で店頭買取するなら</h3>

        <p>名古屋市内には買取大吉、おたからや、大黒屋、なんぼやなど大手チェーンが多数出店しています。<strong>名駅・栄・大須の3エリアを1日で回る</strong>ことも十分可能な距離感なので、店頭買取で複数店を比較するのに適した都市です。</p>

        <h3>名古屋で出張買取を利用するなら</h3>

        <p>ウリエルやティファナは名古屋市内および愛知県全域で出張買取に対応しています。出張費・査定料・キャンセル料はすべて無料です。「大量の金製品がある」「重くて持ち運びが大変」「忙しくて店舗に行く時間がない」という方には出張買取がおすすめです。</p>

        <h2>名古屋の金買取で注意すべきポイント</h2>

        <h3>悪質な訪問買取に注意</h3>

        <p>「不用品を買い取ります」と突然訪問してくる業者には注意が必要です。不用品の回収を名目に訪問し、「金やアクセサリーはありませんか？」と貴金属を相場より大幅に安い価格で買い取ろうとする悪質なケースが報告されています。</p>

        <p>名古屋市消費生活センターにもこうした相談が寄せられています。もし訪問買取で取引してしまった場合は、<strong>クーリングオフ制度</strong>（契約日から8日以内）を利用して契約を撤回できます。</p>

        <h3>手数料の確認</h3>

        <p>一部の業者では「査定料」「手数料」「精錬加工費」などの名目で買取金額から差し引くケースがあります。当サイトで紹介している4社（ヒカカク！・買取大吉・ウリエル・ティファナ）はいずれも<strong>査定料・手数料無料</strong>です。</p>

        <h3>200万円超の取引は支払調書が必要</h3>

        <p>1回の取引で金地金・インゴットの売却額が200万円を超える場合、業者は税務署に支払調書を提出する義務があります。マイナンバーの提示も必要ですので、事前に準備しておきましょう。</p>

        <h2>4社比較 — 名古屋で金買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>名古屋エリアの特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>名古屋を含む全国の買取業者を一括比較。最高値が簡単にわかる</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>名古屋市内に複数店舗。名駅・栄エリアでアクセス良好</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>愛知県全域で出張対応。出張費・査定料すべて無料</td>
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

        <h2>名古屋の金買取 よくある質問</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "名古屋で金買取の価格が高いエリアはどこですか？",
              a: "名駅・栄・大須の3エリアが名古屋の金買取激戦区です。特に大須は貴金属専門店が集まるエリアで、相場に近い価格での買取が期待できます。ただし店舗ごとに差があるため、3エリアを回って比較するのがベストです。",
            },
            {
              q: "名古屋の金買取で即日現金化できますか？",
              a: "はい、店頭買取であればその場で現金を受け取れます。買取大吉やおたからやなど大手チェーンは名古屋市内に多数の店舗があり、予約不要で即日対応しています。出張買取も当日〜翌日の現金化が可能です。",
            },
            {
              q: "名古屋と東京で金の買取価格に差はありますか？",
              a: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、名古屋でも東京でもほぼ同じ水準です。ただし業者ごとのマージン（手数料）の違いにより、1gあたり数十円〜100円程度の差が出ることはあります。",
            },
            {
              q: "名古屋で出張買取に対応している業者はありますか？",
              a: "ウリエルやティファナが愛知県全域で出張買取に対応しています。出張費・査定料・キャンセル料はすべて無料なので、気軽に利用できます。",
            },
            {
              q: "名古屋で金を売る際に必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、金額にかかわらず身分証の提示が義務付けられています。また、200万円を超える取引の場合はマイナンバーの提示も必要です。",
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

        <p>名古屋は名駅・栄・大須の3大エリアに買取業者が集中しており、<strong>1日で複数店舗を回って比較できる</strong>利便性の高い都市です。</p>

        <p>2026年4月現在、金価格は歴史的な高値水準にあり、K24（純金）で1gあたり約15,200円前後です。売却を検討している方にとっては好機と言えるでしょう。</p>

        <p>名古屋で金を高く売るためのポイントをまとめます。</p>

        <ol>
          <li><strong>名駅・栄・大須の3エリアで最低3社に見積もりを取る</strong></li>
          <li><strong>地金系は大須の専門店、ブランド品は栄のブランド買取店にも見積もりを取る</strong></li>
          <li><strong>手数料無料の大手業者を選び、悪質な訪問買取には応じない</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で名古屋の買取業者の価格を比較してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
