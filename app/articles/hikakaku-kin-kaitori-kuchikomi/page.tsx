import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { ExpertQA } from "@/components/ExpertQA";

const UPDATED = "2026-10-08";
const UPDATED_JA = "2026年10月8日";
const URL = "https://gold-biyori.com/articles/hikakaku-kin-kaitori-kuchikomi/";
const TITLE = "ヒカカクの金買取 口コミ・評判は？貴金属を一括査定に出す流れと注意点【2026年10月最新】";
const DESC =
  "ヒカカク！で金・プラチナを売る前に知りたい口コミ・評判を、公式クチコミの評価分布（総合3.4・1,083件）と傾向から出典付きで整理。無料・最大20社の一括査定の仕組み、貴金属カテゴリ（1,082社掲載）の使い方、刻印・重量入力のコツ、キャンセル・電話連絡・本人確認の注意点、向いている人まで解説。";

const faqs = [
  {
    q: "ヒカカク！の金買取は無料ですか？",
    a: "公式のよくあるご質問に「完全無料でご利用いただけます」と明記されています。利用規約第6条でも「当社がユーザーに対して請求する費用は原則無料」です。査定結果を見て売らない選択をしても料金はかかりません。",
  },
  {
    q: "ヒカカク！が金を査定・買取するのですか？",
    a: "いいえ。公式FAQに「ヒカカク！では買取業者のご紹介のみ行っており、査定や買取に関しましては直接買取業者よりご連絡」とあります。査定額を出すのも買い取るのも、紹介先の各買取店です。地金の評価はその日の金相場に連動するため、業者間の差は買取係数や手数料で生まれます。",
  },
  {
    q: "刻印や純度が分からない金製品でも査定できますか？",
    a: "できます。公式の貴金属・宝石カテゴリページには「持っている貴金属・宝石がどんな種類なのか分からなくても、査定可能な業者がほとんど」とあります。ただし公式も「刻印されている数値を確認しておくと買取額の目安が分かり安心」としているので、K18・750・Pt900などの刻印と重量は分かる範囲で入力してください。",
  },
  {
    q: "査定後にキャンセルしたいときは？",
    a: "公式FAQでは、申込後は買取業者と直接取引になるため、キャンセルは業者へ直接連絡するよう案内されています。ヒカカク！側でまとめて取り消す仕組みはありません。査定価格に納得しなければ買取依頼をやめてよいことは、使い方ガイドに明記されています。",
  },
  {
    q: "売却時に本人確認やマイナンバーは必要ですか？",
    a: "本人確認は古物営業法に基づき、紹介先の買取店で求められます。ヒカカク！の申込フォーム自体は氏名・メール・電話番号・地域の入力とSMS認証です。金地金等を1回200万円超で売却する場合は、業者が税務署へ支払調書を提出するためマイナンバーの提示を求められます。詳しくは当サイトの解説記事をご覧ください。",
  },
  {
    q: "ヒカカク！の口コミは悪いものが多いのですか？",
    a: "公式クチコミページ（2026年10月8日時点）では総合評価3.4、星5が425件、星1が266件で、公式自身が「悪い・ひどい・買取が安いというクチコミの比率は32.5%」と表示しています。気になる内容は電話の多さと見積もり業者数の少なさに集中しています。詳しくは本文の評判の章をご覧ください。",
  },
];

function CtaBox({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose text-center">
      <h3 className="font-bold text-base mb-2">{title}</h3>
      <p className="text-sm text-warm-gray mb-4">{lead}</p>
      <p className="text-xs text-warm-gray mb-3">
        <span className="inline-block align-middle border border-warm-gray/50 rounded px-1.5 py-0.5 mr-2 text-[11px] font-bold tracking-wide">PR</span>
        ヒカカク！（買取価格比較サイト・最大20社に一括査定・完全無料）
      </p>
      <a
        href="https://hikakaku.com"
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-block bg-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
      >
        金・貴金属の一括査定で最高値を調べる →
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, type: "article", images: ["/og-image.png"] },
};

function Schemas() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    datePublished: UPDATED,
    dateModified: UPDATED,
    mainEntityOfPage: URL,
    author: { "@type": "Organization", name: "金買取びより編集部", url: "https://gold-biyori.com/author/" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "ヒカカクの金買取 口コミ・評判", item: URL },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Schemas />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">ヒカカクの金買取 口コミ・評判</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ヒカカクの金買取 口コミ・評判は？貴金属を一括査定に出す流れと注意点</h1>
          <p className="text-warm-gray text-sm mb-8">
            最終更新: {UPDATED_JA}（公式サイト・公式クチコミページを同日に確認。本記事は広告（PR）リンクを含みます）
          </p>

          <div className="not-prose bg-gold-bg border-2 border-accent/30 rounded-xl p-5 my-6">
            <p className="font-bold mb-2">この記事の結論（30秒）</p>
            <ul className="text-sm space-y-1 list-disc pl-5">
              <li>ヒカカク！は<strong>買取店を紹介する比較サイト</strong>で、自社では査定も買取もしない。利用は<strong>完全無料</strong>、最大20社から査定結果がメールで届く。</li>
              <li>貴金属・宝石カテゴリは<strong>1,082社・16,406点</strong>の掲載、直近1年の買取実績は「最低10円〜最高15,000,000円」（2026年10月8日時点の公式カテゴリページ表記）。</li>
              <li>公式クチコミは<strong>総合3.4・1,083件</strong>。良い声は「一度の入力で複数社から返事」「買取不可でも丁寧」、気になる声は「電話が多い」「見積もり業者が少ない」。</li>
              <li>向いているのは<strong>刻印・重量が分かる金製品で複数社の相見積もりを取りたい人</strong>。金は相場連動で地金価格の差が小さいため、<strong>手数料・買取係数・デザイン評価の差</strong>を比べる用途に向く。電話連絡を避けたい人や、今日中に現金化したい人には向かない。</li>
            </ul>
          </div>

          <CtaBox title="金・貴金属の買取価格を複数社で比較" lead="刻印（K18・Pt900など）と重量を入力するだけ。査定額に納得できなければ売らなくてOKです。" />

          <h2>1. ヒカカク！とは（仕組み・運営会社・貴金属カテゴリ）</h2>
          <p>
            ヒカカク！（hikakaku.com）は「買取価格比較サイト」です。公式の使い方ガイドでは、できることを「一括査定の申し込み」「買取業者を見つける」「買取相場を知る」の3つに整理しています。
            本記事で扱う一括査定は、<strong>商品情報を送ると最大20社から査定結果がメールで届き、価格を比較して納得した業者にだけ買取を申し込む</strong>仕組みです。
          </p>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr><th>サービス名</th><td>ヒカカク！（買取価格比較サイト）</td></tr>
                <tr><th>運営会社</th><td>株式会社じげん（ZIGExN Co., Ltd.）東京都港区虎ノ門3-4-8／代表責任者 平尾 丈</td></tr>
                <tr><th>許可・表記</th><td>古物営業法に基づき都道府県公安委員会の許可を取得と表記。アフィリエイトプログラムを利用したサービス紹介を行う旨も明記</td></tr>
                <tr><th>料金</th><td>完全無料（利用規約第6条「当社がユーザーに対して請求する費用は原則無料」）</td></tr>
                <tr><th>査定社数</th><td>最大20社から査定結果（買取不可の場合は返信が無いこともある）</td></tr>
                <tr><th>買取方法</th><td>宅配・出張・店頭から最大3つを希望として選択</td></tr>
                <tr><th>貴金属・宝石カテゴリ</th><td>掲載 16,406点・1,082社。直近1年の買取実績は「最低10円〜最高15,000,000円」と表示。絞り込みは「貴金属」「宝石」。相場表の先頭に金インゴットの最高買取相場が掲載</td></tr>
                <tr><th>利用規模</th><td>「月間300万人以上が利用する買取比較サイト」（使い方ガイドの記載）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※ 数値はいずれも2026年10月8日に公式サイトの各ページを確認したもの。掲載点数・社数は日々変動します。</p>
          <p>
            押さえておきたいのは、<strong>ヒカカク！自身は査定も買取もしない</strong>点です。公式FAQに「買取業者のご紹介のみ行っており、査定や買取に関しましては直接買取業者よりご連絡」とあり、利用規約第5条でも「一切の買取業務は行わず、金銭の授受には関与しない」「取引の成立・内容について保証しない」と定められています。
            査定額の妥当性や対応の良し悪しは<strong>紹介先の買取店ごとに違う</strong>ため、届いた査定を比べて選ぶ作業が利用者側に残ります。ヒカカク！以外の一括査定サイトとの違いは<Link href="/articles/ikkatsu-satei-hikaku/">金買取の一括査定サイト比較</Link>に、店頭・出張型の業者との使い分けは<Link href="/articles/kin-kaitori-osusume/">金買取おすすめ業者4社の比較</Link>にまとめています。
          </p>

          <h2>2. 金・貴金属を一括査定に出す流れ</h2>
          <p>公式の「査定申込の流れ」をもとに、金製品を出す場合の実務に置き換えると次の5ステップです。</p>
          <ol>
            <li>
              <strong>査定フォームを起動</strong>：トップの「一括査定・見積もり」から。写真でAI査定（品名・型番が分からなくてもOK）と、自分で入力する方式の2つがあります。
            </li>
            <li>
              <strong>商品情報を入力</strong>：商品カテゴリは「貴金属・宝石・指輪」を選び、商品名に種類・刻印・重量（例：K18 喜平ネックレス 30g／Pt900 ダイヤ付きリング 0.3ct）を入れます。
              公式の貴金属カテゴリページは「金やプラチナなどの貴金属は純度が査定額に影響するため、事前に刻印されている数値を確認しておくと買取額の目安が分かり安心」としています。<strong>刻印の読み方</strong>は<Link href="/articles/kin-jundo-mikata/">金の純度の見方</Link>、<strong>重量の量り方</strong>は<Link href="/articles/kin-omosa-hakarikata/">金の重さの量り方</Link>を参照してください。ダイヤ付きなら鑑定書の有無も備考に。
            </li>
            <li>
              <strong>お客様情報を入力</strong>：氏名・メール・電話番号・地域が必須で、買取方法（宅配・出張・店頭）を最大3つ選びます。公式フォームには「『宅配』にチェックを入れると、たくさん業者が見つかる可能性が高まります」と注記があります。高額品を宅配に出すのが不安なら、店頭と出張を併せて選び、届いた業者の中から対面で売れるところを選ぶ手もあります。
            </li>
            <li>
              <strong>SMS認証→申込完了</strong>：携帯のSMSで届く6桁コードを入力して完了。登録アドレスに確認メールが届きます。
            </li>
            <li>
              <strong>査定結果を比較して業者を選ぶ</strong>：公式ガイドでは「最短1日」でメールが届くとされています。当サイトの<Link href="/souba-dashboard/">本日の金相場</Link>と<Link href="/kin-kaitori-keisanki/">グラム計算機</Link>で「相場×純度×重量」の理論値を出し、提示額がその何％かを見て比較します。納得した業者にだけ買取を申し込みます。
            </li>
          </ol>

          <h2>3. 金を出す前に知っておきたい注意点</h2>
          <p>公式FAQ・利用規約の記載と、金買取特有の事情から、事前に知っておくべき点を抜き出します。</p>
          <h3>3-1. キャンセルは「各業者へ直接」</h3>
          <p>
            FAQでは「査定のお申込み後は、買取業者とお客様で直接お取引していただいております。キャンセルをご希望の場合、業者へ直接ご連絡」と案内されています。ヒカカク！側で一括して取り消す機能はありません。<strong>査定価格に納得しなければ買取依頼をやめてよい</strong>ことは使い方ガイドに明記されていますが、断る連絡は自分で各業者に行います。
          </p>
          <h3>3-2. 申込後は商品情報・個人情報を変更できない／削除もできない</h3>
          <p>
            FAQに「お申込み完了後は、ご記入いただいた商品情報や個人情報の変更はできかねます」「お客様からいただいた情報は削除することができません」とあります。刻印や重量を書き間違えると修正が効かないので、送信前に確認してください。
          </p>
          <h3>3-3. 電話連絡が来る前提で申し込む</h3>
          <p>
            電話番号は必須項目で、査定・買取の連絡は各業者から直接来ます。利用規約第4条でも、サイト上・電話・メールで各種連絡をすることがあると定められています。後述の口コミでも電話の多さは指摘が多い点なので、<strong>連絡が取りやすい時間帯に申し込む</strong>か、備考にメール希望と書いておくのが現実的な対処です。
          </p>
          <h3>3-4. 金は「相場連動」なので、査定額の差は係数と手数料で出る</h3>
          <p>
            使い方ガイドのQ&amp;Aには「買取価格は常に変動しているため時間差で価値が変更する場合」があると明記されています。金は毎営業日の相場で地金価格が決まるため、<strong>申込日と実物査定日の相場差</strong>がそのまま提示額に出ます。業者間の差は買取係数・手数料・キャンペーン・デザイン評価で生まれるので、<Link href="/articles/kin-kaitori-tesuryo-hikaku/">手数料の比較</Link>も併せて確認してください。あまりに不当な値下げがあれば「買取業者へ注意喚起を行うので、お問い合わせフォームからご連絡ください」とも案内されています。
          </p>
          <h3>3-5. 本人確認・200万円超のマイナンバー・税金</h3>
          <p>
            買取時の本人確認は古物営業法に基づき紹介先の業者で行われます。金地金等を1回200万円超で売却すると業者が支払調書を提出するため、マイナンバーの提示が必要です（<Link href="/articles/kin-200man-mynumber/">金200万円とマイナンバー</Link>）。売却益が大きい場合の税金は<Link href="/articles/kin-kaitori-zeikin/">金買取の税金</Link>を参照してください。出張買取の訪問時は、<Link href="/articles/kin-kaitori-sagi/">金買取の詐欺・トラブル対策</Link>にある身分証の確認と即決しない姿勢が基本です。
          </p>

          <h2>4. 良い評判・気になる評判（出典付き）</h2>
          <p>
            口コミは、ヒカカク！が自社サイトで公開している「ヒカカク！のクチコミ・評判」ページ（2026年10月8日確認）を出典にしています。本文の転載はせず、評価分布と内容の傾向だけを整理しました。
          </p>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>項目</th><th>公式クチコミページの表示（2026年10月8日時点）</th></tr></thead>
              <tbody>
                <tr><td>総合評価</td><td>3.4（5点満点）</td></tr>
                <tr><td>件数の内訳</td><td>星5：425件／星4：200件／星3：106件／星2：86件／星1：266件（合計1,083件）</td></tr>
                <tr><td>公式の注記</td><td>「悪い・ひどい・買取が安いというクチコミの比率は32.5%」と自サイトに表示</td></tr>
              </tbody>
            </table>
          </div>
          <h3>良い評判に多い内容</h3>
          <ul>
            <li><strong>一度の入力で複数社から査定が返る</strong>：ピックアップ掲載の高評価では、1回の依頼で3〜4社から結果が届き、個人情報の入力も一度で済む点が便利とされています。</li>
            <li><strong>買取不可でも連絡や代替案がある</strong>：2026年の投稿でも「買取不可であっても迅速丁寧に対応」「他の方法も提案」といった評価が複数見られます。</li>
            <li><strong>複数社から速やかに金額提示があった</strong>：他カテゴリの事例ですが、8社から丁寧に査定額が提示され比較できたという声があります。</li>
          </ul>
          <h3>気になる評判に多い内容</h3>
          <ul>
            <li><strong>見積もり業者が少ない・1社しか来ない</strong>：「事前見積もりの業者数が少ない」「一社しか価格提示がなく桁違いに安かった」という星1の投稿があります。公式FAQも、商品によっては1社も返信が無いことがあると認めています。</li>
            <li><strong>電話がひっきりなしに来る</strong>：申込直後から電話が続いた、価格を明示せず「実物を見せてほしい」と言われたという星1の投稿があります。</li>
            <li><strong>店舗で相場より低い提示</strong>：持ち込み後に為替・相場の変動を理由に低い額を出されたという声。金は相場連動のため、申込日と査定日で額が変わりうることは公式も明記しています。</li>
            <li><strong>操作が分かりにくい</strong>：返信方法が分からなかったという星3の投稿があり、会員登録・マイページの使い方は事前に確認した方が安心です。</li>
          </ul>
          <h3>貴金属カテゴリのクチコミ欄で見える傾向</h3>
          <p>
            公式の貴金属・宝石カテゴリページには、紹介先の買取店（おたからや等）に対する利用者のクチコミが掲載されています。2026年10月上旬の投稿では、「出張買取で不安だったが身分証と合言葉の確認があり安心できた」「金額も他社より高かった」「説明が丁寧だった」といった高評価が目立ちます。<strong>評価はヒカカク！そのものより、紹介先の業者ごとに分かれる</strong>というのがカテゴリ欄から読み取れる傾向です。
          </p>
          <p className="text-xs text-warm-gray">※ 口コミの件数・評価は公式サイトの表示を転記したもので、当サイトが集計したものではありません。投稿本文の引用はしていません。</p>

          <h2>5. 向いている人・向かない人</h2>
          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="border border-accent/40 bg-gold-bg rounded-xl p-4">
              <p className="font-bold mb-2">向いている人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>刻印・重量が分かる金製品で、<strong>複数社の相見積もり</strong>を取りたい</li>
                <li>喜平・インゴット・ブランドジュエリーなど<strong>係数やデザイン評価で差が出る品</strong>を売る</li>
                <li>遺品整理などで<strong>まとめ売り</strong>したい（出張・宅配対応の業者を探したい）</li>
                <li>電話・メールのやり取りが苦にならない</li>
              </ul>
            </div>
            <div className="border border-warm-border rounded-xl p-4">
              <p className="font-bold mb-2">向かない人</p>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li>複数の業者からの<strong>電話連絡を避けたい</strong></li>
                <li>今日中に現金化したい（店頭買取に直接持ち込む方が早い）</li>
                <li>メッキ品やごく軽量の品だけを売りたい（返信が来ない可能性がある。<Link href="/articles/kin-mekki-mikata/" className="text-accent underline">メッキの見分け方</Link>）</li>
                <li>申込後に情報を修正・削除したい</li>
              </ul>
            </div>
          </div>
          <p>
            迷う場合は、まず<Link href="/kin-kaitori-keisanki/">グラム計算機</Link>で理論値を出し、提示額が理論値の何％かで業者を比べるのが無駄がありません。初めての方は<Link href="/articles/kin-kaitori-hajimete/">金買取が初めての人向けガイド</Link>、高く売る手順は<Link href="/articles/kin-takaku-uru/">金を高く売るコツ</Link>にまとめています。
          </p>

          <CtaBox title="刻印と重量を入力して複数社の査定額を比較" lead="K18・Pt900などの刻印と重量、鑑定書の有無を書き添えると、実物査定での減額を避けやすくなります。" />

          <h2>よくある質問</h2>
          {faqs.map((f) => (
            <details key={f.q} className="border-b border-warm-border py-4 group not-prose">
              <summary className="font-bold cursor-pointer flex justify-between items-center"><span>{f.q}</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
              <p className="mt-3 text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}

          <h2>出典</h2>
          <ul className="text-sm">
            <li><a href="https://hikakaku.com/lp/" target="_blank" rel="noopener noreferrer nofollow">ヒカカク！ サイトの使い方（一括査定の流れ・無料・最大20社・よくある質問）</a></li>
            <li><a href="https://hikakaku.com/hikakaku_reviews/" target="_blank" rel="noopener noreferrer nofollow">ヒカカク！のクチコミ・評判（総合評価・件数内訳）</a></li>
            <li><a href="https://hikakaku.com/category/all-category/precious-metals-and-gems/" target="_blank" rel="noopener noreferrer nofollow">貴金属・宝石の買取価格を比較（掲載点数・社数・買取実績・査定前のポイント・カテゴリ内クチコミ）</a></li>
            <li><a href="https://hikakaku.com/%e3%82%88%e3%81%8f%e3%81%82%e3%82%8b%e3%81%94%e8%b3%aa%e5%95%8f/" target="_blank" rel="noopener noreferrer nofollow">ヒカカク！ よくあるご質問（紹介のみ・キャンセル・情報変更・削除・配信停止）</a></li>
            <li><a href="https://hikakaku.com/%E5%88%A9%E7%94%A8%E8%A6%8F%E7%B4%84/" target="_blank" rel="noopener noreferrer nofollow">ヒカカク！ サイト利用規約（第4〜6条・最終改定2024年10月1日）</a></li>
            <li><a href="https://hikakaku.com/pages/company/" target="_blank" rel="noopener noreferrer nofollow">運営者情報</a>／<a href="https://hikakaku.com/pages/kobutsu_hyoki/" target="_blank" rel="noopener noreferrer nofollow">古物営業法に基づく表記</a></li>
          </ul>
          <p className="text-xs text-warm-gray">※ いずれも{UPDATED_JA}に公式サイトの生ページを確認して記載しています。サービス内容・件数は変更されることがあるため、最新情報は公式サイトでご確認ください。本記事はPRリンクを含みます。</p>

          <ExpertQA category="compare" />
          <RelatedArticles
            currentSlug="hikakaku-kin-kaitori-kuchikomi"
            relatedSlugs={["ikkatsu-satei-hikaku", "kin-kaitori-osusume", "kaitori-houhou-hikaku", "kin-takaku-uru", "kin-kaitori-hajimete", "kin-kaitori-sagi", "kin-200man-mynumber", "kin-kaitori-souba"]}
          />
        </article>
      </div>
    </>
  );
}
