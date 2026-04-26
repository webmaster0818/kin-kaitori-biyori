import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "遺品整理で見つかった金は売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、売れます。金のネックレス、指輪、ブレ��レット、金歯、金の延べ棒、金貨など、金を含む製品はすべて買取対象です。壊れていても、片方だけのピアスでも、刻印が消えていても買取可能です。金の買取は素材としての価値がベースなので、状態は問いません。" } },
      { "@type": "Question", name: "遺品の金を売る場合、相続税の申告は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "遺産総額が基礎控���額（3,000万円 + 600万円 x 法定相続人の数）を超える場合は相続税の申告が必要です。金の価値は相続時の時価で評価されます。基礎控除の範囲内であれば申告不要です。" } },
      { "@type": "Question", name: "遺品の金は誰が売っていいのですか？", acceptedAnswer: { "@type": "Answer", text: "遺産分割が完了する前は相続人全員の共有財産です。遺産分割協議で金の所有者が決まってから売却するのが原則です。相続人全員の同意があれば���分割前に売却して代金を分配することも可能です。トラブル防止のため、他の相続人に無断で売却しないでください。" } },
      { "@type": "Question", name: "遺品整理で金の純度がわからない場合はどうすればいいですか？", acceptedAnswer: { "@type": "Answer", text: "買取業者に持ち込めば、X線蛍光分析装置（XRF）で無料で純度を判定してくれます。刻印がなくても、変色していても、金であれば正確に判定可能です。自分で判断する必要はありません。" } },
      { "@type": "Question", name: "遺品整理業者と金買取業者、どちらに売った方が高いですか？", acceptedAnswer: { "@type": "Answer", text: "金・貴金属は金買取の専門業者に売った方が高値がつく傾向があります。遺品整理業者は整理・片付けが本業のため、金の査定額が相場より低くなることがあります。金・貴金属だけは分けて、買取専門業者に査定を依頼することをおすすめします。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】遺品整理で見つか���た金の売り方ガイド — 相続・税金・高く売る方法",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "遺品整理で見つかった金・貴金属の売り方を徹底解説。相続税の取り扱い、遺産分割の注意点、遺品の金を高く売る方法、おすすめ買取業者を紹介。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】遺品整理で見つかった金の売り方ガイド — 相続・税金・高く売る方法",
  description: "遺品整理で見つかった金・貴金属の売り方を徹底解説。相続税の取り扱い、遺産分割の注意点、遺品の金を高く売る方法、おすすめ買取業者4社を紹介。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">遺品の金・貴金属の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">純度不明でも壊れていても査定OK。まずは価値を確認しましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function IhinSeiriKinPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">遺品整理の金買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】遺品整理で見つかった金の売り方ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>遺品整理を進める中で、故人が大切にしていた金のジュエリ��や金製品が見つかることがあります。金のネックレス、指輪、ブレスレット、金歯、金の延べ棒——2026年現在、金の価格は歴史的高値にあり、<strong>遺品の金には想像以上の価値がある</strong>可能性があります。</p>

        <p>「遺品で見つかった金はどうすればいい？」「相続税はかかる？」「誰が売っていいの？」——この記事では、遺品整理で見つかった金の売り方を、<strong>相続の手続き・税金・高く売る方法</strong>まで実践的に解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>遺品整理で見つかりやすい金製品の種類と価値</li>
          <li>遺品の金の相続税の取り扱い</li>
          <li>遺産分割と売却の順序（トラブル防止）</li>
          <li>遺品の金を高く売るための方法</li>
          <li>遺品整理業者 vs 金買取業���の比較</li>
        </ul>

        <h2>遺品整理で���つかりやすい金製品と価値の目安</h2>

        <p>以下は遺品整理でよく見つかる金製品と、2026年4月時点の買取価格の目安です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>金製品の種類</th>
                <th>重量の目安</th>
                <th>買取価格の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K18ネックレス（チェーン）</strong></td><td>3〜15g</td><td>約34,000〜171,000円</td></tr>
              <tr><td><strong>K18指輪</strong></td><td>2〜10g</td><td>約23,000〜114,000円</td></tr>
              <tr><td><strong>K18ブレスレット</strong></td><td>3〜20g</td><td>約34,000〜228,000円</td></tr>
              <tr><td><strong>K18喜平ネックレス</strong></td><td>30〜100g</td><td>約342,000〜1,140,000円</td></tr>
              <tr><td><strong>金歯（K14〜K20相当）</strong></td><td>1〜3g/本</td><td>約6,000〜35,000円/本</td></tr>
              <tr><td><strong>金の延べ棒（K24）</strong></td><td>5g〜1kg</td><td>約76,000〜15,200,000円</td></tr>
              <tr><td><strong>金貨（メイプルリーフ等）</strong></td><td>約31.1g（1oz）</td><td>約473,000円</td></tr>
              <tr><td><strong>金杯・金盃</strong></td><td>10〜50g</td><td>約114,000〜570,000円</td></tr>
              <tr><td><strong>万年筆の金ペン先</strong></td><td>0.5〜2g</td><td>約3,000〜15,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>意外と見落としがちな金製品：</strong></p>
        <ul>
          <li>タンスの引き出しの奥にしまわれたジュエリー</li>
          <li>入れ歯に付いた金歯（歯科用金合金）</li>
          <li>記念品の金杯・金盃</li>
          <li>万年筆のペン先（K14/K18の刻印をチェック）</li>
          <li>メガネのフレーム（K18フレームの場合あり）</li>
          <li>金縁の仏具（おりん、花瓶など）</li>
        </ul>

        <CtaBox />

        <h2>遺品の金と相続税の関係</h2>

        <h3>相続税の基礎控除</h3>

        <p>遺品の金は相続財産に含まれます。ただし、相続税には<strong>基礎控除</strong>があります。</p>

        <p><strong>基礎控除額 = 3,000万円 + 600万円 x 法定相続人の数</strong></p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>法定相続人の数</th>
                <th>基礎控除額</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1人</td><td>3,600万円</td></tr>
              <tr><td>2人</td><td>4,200万円</td></tr>
              <tr><td>3人</td><td>4,800万円</td></tr>
              <tr><td>4人</td><td>5,400万円</td></tr>
            </tbody>
          </table>
        </div>

        <p>遺産総額（不動産+預貯金+金・貴金属+その他）がこの基礎控除額以下であれば、<strong>��続税はかかりません</strong>。</p>

        <h3>金の相続税評価額</h3>

        <p>金の相続税評価額は<strong>相続開始日（被相続人の死亡日）の時価</strong>で計算されます。</p>

        <ul>
          <li><strong>金地金（インゴット）：</strong>相続開始日の金の買取相場 x 重量</li>
          <li><strong>金のジュエリー：</strong>買取業者の査定額または時価（精密な評価が必要な場合は鑑定士に依頼）</li>
          <li><strong>金貨：</strong>額面ではなく、時価（金の素材価値+プレミアム）で評価</li>
        </ul>

        <h3>相続した金を売却した場合の税金</h3>

        <p>相続した金を売却した場合、<strong>相続税と譲渡所得税の2つの税金</strong>が関係します。</p>

        <ul>
          <li><strong>相続税：</strong>相続時の評価額に基づいて計算（基礎控除の範囲内なら不要）</li>
          <li><strong>譲渡所得税：</strong>売却益（売却価格 - 取得費）に基づいて計算。取得費は被相続人が購入した時の価格</li>
        </ul>

        <blockquote>
          <p><strong>重要：</strong>相続した金の「取得費」は、���相続人（故人）が購入した時の価格を引き継ぎます。購入時のレシートが見つからない場合は、売却価格の5%が取得費とみなされ、税金が大幅に増える可能性があります。故人の書類の中に購入レシートがないか、必ず確認してください。</p>
        </blockquote>

        <h2>遺品の金を売却する前にやるべきこと</h2>

        <ol>
          <li>
            <strong>相続人全員で確認する</strong>
            <p>遺品の金は相続財産です。<strong>他の相続人���無��で売却しない</strong>でください。遺産分割協議で金の帰属が決まるまでは、全員の共有財産です。無断売却はトラブルの原因になります。</p>
          </li>
          <li>
            <strong>遺言書を確認する</strong>
            <p>故人が遺言書で金・貴金属の相続先を指定している場合があります。遺言書がある場合はその内容に従ってください。</p>
          </li>
          <li>
            <strong>金製品をリストアップする</strong>
            <p>見つかった金製品をすべてリストアップし、写真を撮っておきましょう。重量がわかれば概算価値も計算できます。このリストは遺産分割協議の資料にもなります。</p>
          </li>
          <li>
            <strong>購入時のレシートを探す</strong>
            <p>故人の書類（通帳、レシート、保証書、金の品位証明���など）の中に購入記録がないか確認してください。取得費の証明になり、売却時の税金を大幅に抑えられます。</p>
          </li>
          <li>
            <strong>査定だけ先に受ける</strong>
            <p>遺産分割前でも、買取業者に「査定のみ」を依頼することは可能です。金の価値を知っておくことで、遺産分割の話し合いがスムーズになります。</p>
          </li>
        </ol>

        <h2>遺品整理業者 vs 金買取専門業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>比較項目</th>
                <th>遺品整理業者</th>
                <th>金買取専門業者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>金の査定精度</strong></td><td>低い〜中程度</td><td>高い（X線分析装置あり）</td></tr>
              <tr><td><strong>金の買取価格</strong></td><td>相場より安い傾向</td><td>相場に近い高値</td></tr>
              <tr><td><strong>対応範囲</strong></td><td>家財一式の片付け+買取</td><td>金・貴金属のみ</td></tr>
              <tr><td><strong>手間</strong></td><td>まとめて任せられる</td><td>金だけ分けて持ち込む手間あり</td></tr>
              <tr><td><strong>おすすめの使い方</strong></td><td>家財整理全般</td><td>金・貴金属の売却</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>おすすめの方法：</strong>遺品整理は遺品整理業者に依頼しつつ、<strong>金・貴金属だけは分けて金買取専門業者に査定を依頼</strong>するのが最も高値で売れる方法です。遺品整理業者に金を渡してしまうと、���来の価値よりかなり安く買い取られる可能性があります。</p>

        <h2>遺品の金を高く売���ための5つのポイント</h2>

        <ol>
          <li>
            <strong>金買取の専門業者に依頼する</strong>
            <p>遺品整理業者やリサイクルショップではなく、<strong>金買取に特化した専門業者</strong>に査定を依頼しましょう。専門業者は正確な相場で査定してくれます。</p>
          </li>
          <li>
            <strong>複数業者に見積もりを取る</strong>
            <p>同じ金製品でも業者によって買取価格に差があります。<strong>最低3社には見積もり</strong>を取りましょう。一括査定サービスを使えば効率的です。</p>
          </li>
          <li>
            <strong>すべての金製���をまとめて査定に出す</strong>
            <p>ネックレス、指輪、金歯など、見つかった金製品はすべてまとめて査定に出しましょう。まとめ売りで買取額が上がることがあります。</p>
          </li>
          <li>
            <strong>ブランドジュエリーは別途査定する</strong>
            <p>カルティエ、ティファニー、ブルガリなどのブランドジュエリーは、金の素材価値以上のブランド価値があります。ブランド買取にも見積もりを取りましょう。</p>
          </li>
          <li>
            <strong>金相場が高い今が売り時</strong>
            <p>2026年4月現在、K24の買取相場は1gあたり約15,200円と歴史的高値です。遺品の金を売却するなら、今は非常に好条件です。</p>
          </li>
        </ol>

        <h2>4社比較 — 遺品の金買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>遺品買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者の買取価格を一括比較。最高値が見つかりやすい</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>全国600店舗���上。遺品のまとめ査定OK</td><td>近くの店舗で売りたい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅に出張して査定。大量の遺品もその場で対応</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>3つの方法から選択。遺品のまとめ買取に対応</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>遺品の金売却に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "遺品整理で見つかった金は売れますか？", a: "はい、売れます。金のネックレス、指輪、金歯、金の延べ棒、金貨など、金を含む製品はすべて買取対��です。壊れていても、刻印が消えていても買取可能です。" },
            { q: "遺品の金���売る場合、相続税の申告は必要ですか？", a: "遺産総額が基礎控除額（3,000万円 + 600万円 x 法定相続人の数）を超える場合は相続税の申告が必要です。基礎控除の範囲内であれば申告不要です。" },
            { q: "遺品の金は誰が売っていいのですか？", a: "遺産分割協議で金の帰属が決まってから売却するのが原則です。他の相続人に無断で売却しないでください。トラブル防止のため、全員の同意を得てから進めましょう。" },
            { q: "遺品整理で金の純度がわからない場合は？", a: "買取業者に持ち込めば、X線蛍光分析装置で無料で純度を判定してくれます。刻印がなくても、変色し��いても正確に判定可能です。" },
            { q: "遺品整理業者と金買��業者、どちらに売った方が高い？", a: "金・貴金属は��買取の専門業者に売った方が高値がつきます。遺品整理業者は整理が本業のため、金の査定が相場より低くなることがあります。金だけは分けて専門業者に依頼しましょう。" },
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
          <Link href="/articles/kin-souzoku-baikyaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">相続した金の売却ガイド</p></Link>
          <Link href="/articles/kin-kakutei-shinkoku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">金の売却と確定申告</p></Link>
          <Link href="/articles/kin-kaitori-hajimete/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">初心者ガイド</span><p className="text-sm font-bold mt-1">初めての金買取ガイド</p></Link>
          <Link href="/articles/kowareta-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">壊れた金・刻印なしの買取</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>遺品整理で見つかった金は、2026年現在の歴史的高値により<strong>想像以上���価値がある</strong>可能性があります。K18のネックレス1本でも数万〜十数万円、喜平チェーンなら数十万円以上の買取額になることも珍しくありません。</p>
        <p>遺品の金を高く売るために、以下の3つを実践してください。</p>
        <ol>
          <li><strong>遺品整理業者とは別に、金買取の専門業者に査定を依���する</strong></li>
          <li><strong>相続人全員の同意を得てから売却する</strong></li>
          <li><strong>複数業者に見積もりを取り、最高値の業者に売却する</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で遺品の金の買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
