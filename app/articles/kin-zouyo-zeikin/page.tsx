import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

const TITLE = "【2026年最新】金の贈与と税金ガイド — 贈与税の計算・110万円の基礎控除・売却時の取得費";
const URL = "https://gold-biyori.com/articles/kin-zouyo-zeikin/";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金の贈与と税金ガイド", item: URL },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "親から金地金をもらったら贈与税はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "もらった財産の合計が年間110万円（基礎控除）を超えると贈与税の課税対象です。金地金・金貨・宝飾品も贈与時の時価で評価されます。110万円以下なら申告・納税は不要です。" } },
    { "@type": "Question", name: "贈与でもらった金を売るとき、取得費はどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "贈与で取得した資産は、贈与した人の取得費と取得時期を引き継ぎます（国税庁タックスアンサーNo.3270）。親が30年前に購入した金なら、受贈者が売る際も「30年前の購入価格・購入日」で譲渡所得を計算します。購入時の領収書を一緒に受け取っておくことが重要です。" } },
    { "@type": "Question", name: "名義だけ子どもに変えれば贈与税はかからない？", acceptedAnswer: { "@type": "Answer", text: "いいえ。形式上の名義変更でも実質的に財産が移転していれば贈与税の対象です。逆に、名義だけ変えて実質は親が管理している場合は「名義財産」として親の相続財産と扱われることがあります。贈与契約書を作り、受贈者が実際に管理することが大切です。" } },
    { "@type": "Question", name: "毎年110万円ずつ金を贈与すれば非課税ですか？", acceptedAnswer: { "@type": "Answer", text: "毎年の贈与がそれぞれ独立した贈与であれば、各年110万円以下は基礎控除内です。ただし「最初から総額を贈与する約束」とみなされる（定期贈与）と総額に課税されるリスクがあります。毎年贈与契約書を作成し、金額や時期を機械的に固定しないなどの注意が必要です。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Organization", name: "金買取日和" }, publisher: { "@type": "Organization", name: "金買取日和", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: TITLE,
  description: "金地金・金貨・宝飾品を贈与すると贈与税はどうなる？110万円の基礎控除、贈与税の速算表、相続時精算課税、贈与でもらった金を売却するときの取得費の引き継ぎまで、国税庁の一次情報をもとに解説します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">もらった金の価値を知るなら無料査定</h3>
      <p className="text-sm text-warm-gray text-center mb-4">贈与税の評価にも売却判断にも、まず現在価値の把握が第一歩です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
      </div>
    </div>
  );
}

export default function KinZouyoZeikinPage() {
  return (<><FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金の贈与と税金ガイド</span></li></ol></nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金の贈与と税金ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の贈与と税金ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月12日</p>
        <p>金価格の上昇で、「親から金地金をもらった」「子に金貨を渡しておきたい」という生前贈与の相談が増えています。金の贈与には<strong>贈与税</strong>が関わり、さらに<strong>もらった金を将来売却するときの税金（譲渡所得）</strong>にも影響します。</p>
        <p>この記事では、金の贈与にかかる税金の仕組みを国税庁の一次情報（タックスアンサー）をもとに整理します。</p>

        <h2>金の贈与は贈与税の課税対象</h2>
        <p>金地金（インゴット）・金貨・宝飾品も財産であり、無償でもらえば<strong>贈与税の課税対象</strong>です。評価額は<strong>贈与を受けた日の時価</strong>（小売価格×重量が目安）で計算します。</p>
        <p>贈与税には年間<strong>110万円の基礎控除</strong>があります（暦年課税）。1月1日〜12月31日にもらった財産の合計が110万円以下なら、申告も納税も不要です（国税庁タックスアンサー No.4402）。</p>

        <h2>贈与税の速算表（基礎控除後）</h2>
        <p>110万円を超えた部分には、以下の税率がかかります（国税庁タックスアンサー No.4408）。</p>
        <h3>特例税率（父母・祖父母など直系尊属から、18歳以上の子・孫への贈与）</h3>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>基礎控除後の課税価格</th><th>税率</th><th>控除額</th></tr></thead>
            <tbody>
              <tr><td>200万円以下</td><td>10%</td><td>—</td></tr>
              <tr><td>400万円以下</td><td>15%</td><td>10万円</td></tr>
              <tr><td>600万円以下</td><td>20%</td><td>30万円</td></tr>
              <tr><td>1,000万円以下</td><td>30%</td><td>90万円</td></tr>
              <tr><td>1,500万円以下</td><td>40%</td><td>190万円</td></tr>
              <tr><td>3,000万円以下</td><td>45%</td><td>265万円</td></tr>
            </tbody>
          </table>
        </div>
        <h3>一般税率（兄弟間・夫婦間・未成年の子への贈与など）</h3>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>基礎控除後の課税価格</th><th>税率</th><th>控除額</th></tr></thead>
            <tbody>
              <tr><td>200万円以下</td><td>10%</td><td>—</td></tr>
              <tr><td>300万円以下</td><td>15%</td><td>10万円</td></tr>
              <tr><td>400万円以下</td><td>20%</td><td>25万円</td></tr>
              <tr><td>600万円以下</td><td>30%</td><td>65万円</td></tr>
              <tr><td>1,000万円以下</td><td>40%</td><td>125万円</td></tr>
            </tbody>
          </table>
        </div>
        <blockquote>
          <p><strong>計算例：</strong>父から18歳以上の子へ、時価500万円の金地金を贈与<br />
          課税価格 = 500万円 − 110万円 = 390万円<br />
          贈与税 = 390万円 × 15% − 10万円 = <strong>48万5,000円</strong>（特例税率）</p>
        </blockquote>

        <h2>もらった金を売るとき — 取得費と取得時期を引き継ぐ</h2>
        <p>ここが金の贈与でもっとも見落とされやすいポイントです。贈与で取得した資産を売却する場合、譲渡所得の計算では<strong>贈与した人の取得費と取得時期をそのまま引き継ぎます</strong>（国税庁タックスアンサー No.3270）。</p>
        <ul>
          <li>親が30年前に購入した金なら、子が売るときも「30年前の購入価格」が取得費、保有期間も30年（＝<Link href="/articles/kin-kaitori-zeikin/">長期譲渡所得</Link>で課税半減）</li>
          <li>購入時の領収書・計算書がないと取得費は売却額の5%とされ、大幅に不利になります。<strong>贈与時に必ず購入時の書類も一緒に受け取りましょう</strong></li>
        </ul>

        <h2>注意したい3つの落とし穴</h2>
        <h3>1. 名義変更だけの「名義財産」</h3>
        <p>名義を子どもにしても、実際には親が保管・管理しているなら実質は親の財産（名義財産）とみなされ、相続時に相続財産へ算入されることがあります。<strong>贈与契約書の作成</strong>と、<strong>受贈者自身による管理</strong>が大切です。</p>
        <h3>2. 定期贈与とみなされるリスク</h3>
        <p>「毎年110万円ずつ10年間贈与する」と最初に約束すると、総額1,100万円の定期金贈与として一括課税されるおそれがあります。毎年その都度、贈与契約を交わす形にしましょう。</p>
        <h3>3. 相続開始前の贈与の持ち戻し</h3>
        <p>相続または遺贈で財産を取得した人への生前贈与は、相続開始前一定期間（段階的に7年へ延長中）の分が相続財産に加算されます。直前の駆け込み贈与は相続税対策にならない場合があります。</p>

        <h2>相続時精算課税という選択肢</h2>
        <p>60歳以上の父母・祖父母から18歳以上の子・孫への贈与では、<strong>相続時精算課税制度</strong>（累計2,500万円まで特別控除・2024年からは別枠で年110万円の基礎控除も追加）を選べます（国税庁タックスアンサー No.4103）。ただし一度選ぶと暦年課税には戻れないため、税理士への相談をおすすめします。</p>

        <CtaBox />

        <h2>よくある質問</h2>
        <h3>Q. 金の贈与は税務署にバレない？</h3>
        <p>金の売却時には200万円超で支払調書が税務署へ提出されるほか、相続税調査では家族名義の資産も確認されます。無申告加算税・延滞税のリスクを考えると、基礎控除を超える贈与は正しく申告するのが結局もっとも有利です。</p>
        <h3>Q. 贈与を受けた年の申告期限は？</h3>
        <p>贈与を受けた年の翌年2月1日〜3月15日に贈与税の申告・納税を行います。</p>
        <h3>Q. 夫婦間で金を渡すのも贈与？</h3>
        <p>はい。夫婦間でも年間110万円を超える財産移転は贈与税の対象です（生活費・教育費としての通常の範囲は非課税）。</p>

        <h2>まとめ</h2>
        <ul>
          <li>金の贈与は年間110万円超で贈与税の対象。評価は贈与日の時価</li>
          <li>もらった金を売るときは、贈与者の取得費・取得時期を引き継ぐ — <strong>購入時の領収書も一緒にもらう</strong>のが鉄則</li>
          <li>名義財産・定期贈与・持ち戻しの3つの落とし穴に注意。金額が大きい場合は税理士へ</li>
        </ul>
        <p className="text-sm text-warm-gray">参照: 国税庁タックスアンサー No.4402（贈与税がかかる場合）・No.4408（贈与税の計算と税率）・No.4103（相続時精算課税）・No.3270（相続や贈与によって取得した資産の取得費）。税制は改正される場合があります。個別の判断は税理士・税務署にご確認ください。</p>

        <ExpertQA category="howto" />
        <RelatedArticles
          currentSlug="kin-zouyo-zeikin"
          relatedSlugs={["kin-kaitori-zeikin", "kin-souzoku-baikyaku", "kin-baikyaku-mynumber", "kin-kaitori-souba", "k24-kaitori", "kin-uridoki-2026", "ihin-seiri-kin", "kin-takaku-uru"]}
        />
      </article>
    </div>
  </>);
}
