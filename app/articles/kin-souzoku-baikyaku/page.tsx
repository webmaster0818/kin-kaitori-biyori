import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "相続した金を売却すると税金はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、売却益は譲渡所得として所得税の課税対象です。ただし年間50万円の特別控除があり、被相続人の購入時から5年超経過していれば課税額が半減します。また、相続時に相続税を支払っている場合は取得費に加算できる特例もあります。" } },
    { "@type": "Question", name: "遺品整理で見つかった金の価値がわからない場合は？", acceptedAnswer: { "@type": "Answer", text: "買取業者に持ち込めば無料で査定してもらえます。刻印の確認やX線分析で純度を判定し、当日の相場で買取価格を算出してくれます。複数業者で査定を受けて比較するのがおすすめです。" } },
    { "@type": "Question", name: "相続した金の取得費（購入価格）がわからない場合は？", acceptedAnswer: { "@type": "Answer", text: "購入時の領収書がない場合、売却額の5%が取得費として計算されます。例えば100万円で売却した場合、取得費は5万円として計算され、売却益95万円に課税されます。領収書があれば大幅に税金を減らせるため、故人の書類をよく探しましょう。" } },
    { "@type": "Question", name: "相続した金は相続税の申告に含める必要がありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、金・貴金属も相続財産に含まれます。相続税の評価は、相続開始日（死亡日）の金相場で行います。申告漏れがあると追徴課税の対象になるため、税理士に相談することをおすすめします。" } },
    { "@type": "Question", name: "遺品の金をすぐに売らず保有し続けるべきですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、金価格は歴史的な高値水準にあります。今後の値動きは予測できませんが、現在の価格に納得できるなら売却のタイミングとしては好適です。保有し続ける場合は盗難・紛失リスクに注意し、適切に保管しましょう。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】相続した金・遺品の金を売却するガイド — 税金・手続き・注意点", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】相続した金・遺品の金を売却するガイド — 税金・手続き・注意点", description: "相続した金・遺品の金を売却する際の税金（譲渡所得・相続税）、取得費の計算方法、遺品整理で見つかった金の査定方法、トラブルを避けるポイントを徹底解説。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">相続した金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">まずは価値を知ることが大切です。査定は無料・キャンセルも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinSouzokuBaikyakuPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">相続した金・遺品の金を売るガイド</span></li></ol></nav>
      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】相続した金・遺品の金を売却するガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>
        <p>親や祖父母から相続した金、遺品整理で見つかった金のアクセサリーやインゴット。「売りたいけれど税金はどうなる？」「取得費がわからない場合は？」「遺産分割協議が必要？」——相続した金の売却には、通常の売却にはない<strong>特有の注意点</strong>があります。</p>
        <p>この記事では、相続した金・遺品の金を売却する際の<strong>税金・手続き・注意点</strong>をわかりやすく解説します。</p>

        <h2>相続した金の売却で発生する税金</h2>
        <h3>1. 相続税（相続時）</h3>
        <p>金・貴金属は相続財産に含まれ、<strong>相続税の課税対象</strong>です。評価額は<strong>相続開始日（被相続人の死亡日）の金相場</strong>で計算します。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td><strong>評価方法</strong></td><td>死亡日の金小売価格 x 重量（g）</td></tr>
              <tr><td><strong>基礎控除</strong></td><td>3,000万円 + 600万円 x 法定相続人の数</td></tr>
              <tr><td><strong>申告期限</strong></td><td>相続開始を知った日から10ヶ月以内</td></tr>
            </tbody>
          </table>
        </div>
        <p>相続財産の合計が基礎控除を超えなければ相続税は発生しません。ただし、金は<strong>申告漏れが発覚しやすい</strong>財産です。200万円超の売却は支払調書が税務署に提出されるため、申告漏れは追徴課税のリスクがあります。</p>

        <h3>2. 譲渡所得税（売却時）</h3>
        <p>相続した金を売却して利益が出た場合、<strong>譲渡所得</strong>として所得税が課税されます。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>保有期間</th><th>計算式</th></tr></thead>
            <tbody>
              <tr><td><strong>5年以内</strong></td><td>売却額 - 取得費 - 売却費用 - 50万円 = 課税対象額</td></tr>
              <tr><td><strong>5年超</strong></td><td>（売却額 - 取得費 - 売却費用 - 50万円）x 1/2 = 課税対象額</td></tr>
            </tbody>
          </table>
        </div>

        <h3>重要：保有期間は被相続人の購入日から起算</h3>
        <p>保有期間は<strong>被相続人（亡くなった方）が金を購入した日</strong>から、相続人が売却する日までの期間で計算します。つまり、故人が30年前に購入した金であれば、相続後すぐに売却しても<strong>長期譲渡所得（5年超）</strong>として課税額が半減します。</p>

        <h3>取得費がわからない場合の注意</h3>
        <p>故人が金を購入した際の<strong>領収書や契約書</strong>が見つからない場合、売却額の5%が取得費として計算されます。これは非常に不利です。</p>
        <blockquote>
          <p><strong>具体例：</strong>相続した100gのインゴットを1,520万円で売却した場合<br />
          領収書あり（取得費500万円）：課税対象額 = (1,520万 - 500万 - 50万) x 1/2 = 485万円<br />
          領収書なし（取得費5%）：課税対象額 = (1,520万 - 76万 - 50万) x 1/2 = 697万円<br />
          <strong>差額：212万円</strong>（税率30%なら約64万円の税金差）</p>
        </blockquote>
        <p>故人の書類をよく探し、領収書・契約書・金融機関の取引明細などを見つけましょう。</p>

        <CtaBox />

        <h2>遺品整理で見つかった金の対応手順</h2>
        <ol>
          <li><strong>金製品をすべてリストアップする：</strong>アクセサリー、インゴット、金貨、金歯など、金と思われるものをすべて集める</li>
          <li><strong>刻印を確認する：</strong>K24、K18、K14、K10、750、585、416などの刻印を確認。刻印がない場合は業者に持ち込んで判定</li>
          <li><strong>購入時の書類を探す：</strong>領収書、契約書、保証書を探す。取得費の証明に重要</li>
          <li><strong>買取業者に査定を依頼する：</strong>最低3社に査定を依頼。査定は無料</li>
          <li><strong>遺産分割協議で売却方針を決める：</strong>相続人が複数いる場合、売却の可否と売却金の分配方法を協議</li>
          <li><strong>売却・確定申告：</strong>売却後、譲渡所得の確定申告を行う</li>
        </ol>

        <h2>相続した金を売る際の注意点</h2>
        <h3>遺産分割協議が必要</h3>
        <p>相続人が複数いる場合、金の売却は<strong>遺産分割協議</strong>で合意を得てから行いましょう。協議が完了する前に一人の判断で売却すると、後からトラブルになることがあります。</p>

        <h3>相続税の取得費加算の特例</h3>
        <p>相続税を支払った方が、<strong>相続開始日から3年10ヶ月以内</strong>に相続した金を売却した場合、支払った相続税の一部を取得費に加算できる特例があります。この特例を使えば譲渡所得税を大幅に減らせる可能性があります。</p>

        <h3>悪質な遺品整理業者に注意</h3>
        <p>遺品整理の際に「不用品として引き取ります」と言って金製品を安く持ち去る悪質な業者が報告されています。遺品整理業者と金の買取は<strong>別々の業者に依頼</strong>することをおすすめします。</p>

        <h2>4社比較 — 相続した金の買取におすすめの業者</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>業者名</th><th>方式</th><th>相続金の買取特徴</th><th>こんな人に</th></tr></thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者の価格を一括比較</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>純度不明の遺品もX線分析で査定</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>遺品が大量でも自宅で完結</td><td>遺品が多い方</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>幅広い品目に対応</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>相続金の売却に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "相続した金を売却すると税金はかかりますか？", a: "売却益は譲渡所得として課税対象です。年間50万円の特別控除があり、被相続人の購入時から5年超なら課税額が半減します。" },
            { q: "取得費（購入価格）がわからない場合は？", a: "売却額の5%が取得費として計算されます。非常に不利なので、購入時の領収書を探すことが重要です。" },
            { q: "遺品整理で見つかった金の価値がわからない場合は？", a: "買取業者に持ち込めば無料で査定してもらえます。複数業者で比較しましょう。" },
            { q: "相続人が複数いる場合、誰が売却すべき？", a: "遺産分割協議で合意を得てから、代表者が売却するのが一般的です。売却金は協議に従って分配します。" },
            { q: "相続した金をすぐに売るべきですか？", a: "2026年4月現在は歴史的な高値水準なので売却の好機です。ただし税金を考慮して最適な時期を判断しましょう。税理士への相談をおすすめします。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kin-kaitori-zeikin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">金買取の税金・確定申告ガイド</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
          <Link href="/articles/kin-kaitori-hajimete/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">初心者ガイド</span><p className="text-sm font-bold mt-1">金買取の初心者ガイド</p></Link>
          <Link href="/articles/kin-nobebo-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">金の延べ棒・インゴット買取ガイド</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>相続した金の売却では、<strong>税金の計算（取得費の有無が重要）</strong>と<strong>遺産分割協議</strong>が通常の売却にはない注意点です。</p>
        <ol>
          <li><strong>購入時の領収書を探す（取得費の証明で税金が大幅に変わる）</strong></li>
          <li><strong>遺産分割協議で合意を得てから売却する</strong></li>
          <li><strong>複数業者に査定を依頼して最高値で売却する</strong></li>
          <li><strong>税理士に相談して最適な売却タイミングを決める</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で相続した金の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
