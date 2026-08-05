import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import goldData from "@/data/gold-spot-prices.json";

const TITLE = "金買取のおすすめ業者はどこがいい？4社を目的別に徹底比較【2026年7月】";
const URL = "https://gold-biyori.com/articles/kin-kaitori-osusume/";
const P = goldData.purity_buyback_estimate_per_g;
const [, pMonth, pDay] = goldData.date.split("-").map(Number);

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金買取おすすめ業者比較", item: URL },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金買取はどこがいいですか？", acceptedAnswer: { "@type": "Answer", text: "目的によって最適な業者は変わります。最高値を狙うなら複数社の一括査定（ヒカカク！）、その場で現金化したいなら全国店舗網のある店頭買取（買取大吉）、自宅で完結したいなら出張買取専門（ウリエル）、店頭・出張・宅配から選びたいならティファナが候補です。いずれも査定は無料なので、2社以上の査定額を比べてから売るのが失敗しないコツです。" } },
    { "@type": "Question", name: "金買取の業者選びで最も重要なポイントは何ですか？", acceptedAnswer: { "@type": "Answer", text: "「複数社の査定額を比較すること」です。査定料はどこも無料ですが、提示される1gあたりの買取単価は業者ごとに異なります。売る前に当日の相場（本日のK24買取目安は1g" + P.k24.toLocaleString() + "円）を把握し、相場に近い単価を提示する業者を選びましょう。" } },
    { "@type": "Question", name: "査定だけ受けて売らなくても大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "本記事で比較している4社はいずれも査定無料・キャンセル無料を公式サイトで明記しています（2026年7月時点の公式情報）。査定額に納得できなければ売らなくて問題ありません。ただし宅配買取は業者によってキャンセル時の返送料負担が異なるため、事前確認をおすすめします。" } },
    { "@type": "Question", name: "壊れた金製品や刻印のない金でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "売れます。金は素材そのものに価値があるため、チェーンが切れたネックレス、片方だけのピアス、変色した指輪でも重量×純度で査定されます。刻印がなくても比重検査やX線分析で純度を確認できます。詳しくは「壊れた金・刻印なしでも売れる」の記事をご覧ください。" } },
    { "@type": "Question", name: "金を高く売るタイミングはいつですか？", acceptedAnswer: { "@type": "Answer", text: "金相場は日々変動します。当サイトの相場ページ（毎朝自動更新）で当日の1g価格を確認し、直近の推移と見比べるのが基本です。相場が歴史的高値圏にある局面では、使っていない金製品の売却を検討する価値があります。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-07-09", dateModified: goldData.date, author: { "@type": "Organization", name: "金買取日和" }, publisher: { "@type": "Organization", name: "金買取日和", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: TITLE,
  description: `金買取はどこがいい？一括査定・店頭・出張・宅配の4タイプ別におすすめ業者を比較。手数料・対応エリア・向いている人を一覧表で確認できます。本日の相場（K24 1g${P.k24.toLocaleString()}円・${pMonth}月${pDay}日更新）と査定前の準備、純度・品目・地域別ガイドへの入口も。`,
  alternates: { canonical: "https://gold-biyori.com/articles/kin-kaitori-osusume/" },
};

const COMPANIES = [
  { name: "ヒカカク！", method: "一括査定", url: "https://hikakaku.com", point: "複数業者にまとめて査定依頼し、最高値を比較できる", fee: "無料", area: "全国（Web完結）", fit: "とにかく最高値で売りたい人・相見積もりの手間を省きたい人" },
  { name: "買取大吉", method: "店頭買取", url: "https://kaitori-daikichi.jp", point: "全国600店舗以上。その場で査定・即現金化", fee: "査定・キャンセル無料", area: "全国47都道府県（店頭・出張）", fit: "近くの店舗でその場で現金化したい人" },
  { name: "ウリエル", method: "出張買取", url: "https://uriel-cuore.co.jp", point: "出張買取専門。出張費・査定料すべて無料で自宅完結", fee: "査定・出張・キャンセル無料", area: "関東・中部・近畿・岡山", fit: "自宅にいながら売却を完結したい人・量が多い人" },
  { name: "ティファナ", method: "店頭・出張・宅配", url: "https://tifana.net", point: "3つの買取方法から選べる。宅配は送料・キット無料", fee: "査定・キャンセル無料（宅配返送は対象外品のみ客負担）", area: "店頭=東京中心／宅配=全国", fit: "ライフスタイルに合わせて方法を選びたい人" },
];

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">まずは無料査定で「あなたの金の今の価値」を確認</h3>
      <p className="text-sm text-warm-gray text-center mb-4">4社とも査定無料・キャンセル無料。2社以上の査定額を比べるのが高く売る近道です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

const chipCls = "inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline";

export default function KinKaitoriOsusumePage() {
  return (<><FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金買取おすすめ業者比較</span></li></ol></nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金買取おすすめ業者の比較イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取のおすすめ業者はどこがいい？4社を目的別に徹底比較</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {pMonth}月{pDay}日（相場データは毎朝自動更新・業者情報は各社公式サイトを当サイトが直接確認）</p>

        <p>「金を売りたいけど、どこがいいのか分からない」——結論から言うと、<strong>正解は目的によって変わります</strong>。最高値を狙うなら複数社比較、すぐ現金化なら店頭、自宅完結なら出張。この記事では、当サイトが公式情報を直接確認した4社を目的別に整理し、選び方の基準・査定前の準備・当日の相場までまとめて案内します。</p>

        <h2 id="conclusion">結論: あなたに合う金買取業者はこれ</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>こんな人</th><th>おすすめ</th><th>理由</th></tr></thead>
            <tbody>
              <tr><td>とにかく<strong>最高値</strong>で売りたい</td><td><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow">ヒカカク！</a>（一括査定）</td><td>複数業者の査定額をまとめて比較でき、相見積もりの手間が省ける</td></tr>
              <tr><td><strong>今日中に現金化</strong>したい</td><td><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow">買取大吉</a>（店頭）</td><td>全国600店舗以上。その場で査定・即現金化</td></tr>
              <tr><td><strong>自宅で完結</strong>したい・量が多い</td><td><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow">ウリエル</a>（出張）</td><td>出張費・査定料すべて無料の出張買取専門</td></tr>
              <tr><td>買取<strong>方法を選びたい</strong></td><td><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow">ティファナ</a>（店頭/出張/宅配）</td><td>3つの方法から都合に合わせて選べる。宅配は送料・キット無料</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">※4社とも査定無料。どの方法でも「2社以上の査定額を比べてから売る」のが失敗しない大原則です。</p>

        <h2 id="today">まず今日の相場を知ってから査定へ（{pMonth}月{pDay}日更新）</h2>
        <p>業者の提示額が妥当か判断するには、当日の相場を知っておくことが不可欠です。本日の1gあたり買取目安は <strong>K24: {P.k24.toLocaleString()}円／K22: {P.k22.toLocaleString()}円／K18: {P.k18.toLocaleString()}円／K14: {P.k14.toLocaleString()}円</strong>（田中貴金属公表値をもとにした参考値・毎朝自動更新）。</p>
        <div className="flex flex-wrap gap-2 my-4 not-prose">
          <Link href="/articles/kin-kaitori-souba/" className={chipCls}>純度別の相場一覧を見る</Link>
          <Link href="/kin-kaitori-keisanki/" className={chipCls}>グラム計算機で概算する</Link>
          <Link href="/souba-dashboard/" className={chipCls}>相場ダッシュボード（推移）</Link>
        </div>

        <h2 id="comparison">金買取おすすめ4社の比較表</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>業者</th><th>方法</th><th>手数料</th><th>対応エリア</th><th>向いている人</th></tr></thead>
            <tbody>
              {COMPANIES.map((c) => (
                <tr key={c.name}>
                  <td><a href={c.url} target="_blank" rel="noopener noreferrer nofollow">{c.name}</a></td>
                  <td>{c.method}</td>
                  <td>{c.fee}</td>
                  <td>{c.area}</td>
                  <td>{c.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">※手数料・エリアは各社公式サイトの記載を当サイトが直接確認したものです（2026年7月時点）。8社のより詳しい手数料比較は<Link href="/articles/kin-kaitori-tesuryo-hikaku/">手数料8社比較</Link>、買取方法自体の違いは<Link href="/articles/kaitori-houhou-hikaku/">方法4つの比較</Link>をご覧ください。</p>

        <CtaBox />

        <h2 id="how-to-choose">失敗しない金買取業者の選び方 5つの基準</h2>
        <ol>
          <li><strong>複数社の査定額を比較する</strong>——査定料はどこも無料。単価は業者で差が出るため、最低2社の見積もりを取る。</li>
          <li><strong>当日の相場を基準に判断する</strong>——上の相場（毎朝更新）と提示単価の差を確認。大きく下回るなら理由（手数料の内含・製品の状態）を聞く。</li>
          <li><strong>手数料は「返送料」まで見る</strong>——査定・出張は無料が標準。差がつくのは宅配キャンセル時の返送料（<Link href="/articles/kin-kaitori-tesuryo-hikaku/">8社比較</Link>参照）。</li>
          <li><strong>重量と純度を自分で把握しておく</strong>——キッチンスケールで重さを量り、刻印（K24/K18/750など）を確認。<Link href="/articles/kin-jundo-mikata/">純度の見分け方</Link>参照。</li>
          <li><strong>古物商許可を確認する</strong>——公式サイトに古物商許可番号の記載がある業者を選ぶ（本記事の4社は記載あり）。</li>
        </ol>

        <h2 id="by-purity">純度別の買取ガイド</h2>
        <p>お手持ちの金の刻印に合わせて、純度別の相場・売り方をご覧ください。</p>
        <div className="flex flex-wrap gap-2 my-4 not-prose">
          <Link href="/articles/k24-kaitori/" className={chipCls}>K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className={chipCls}>K22（22金）</Link>
          <Link href="/articles/kinseido-kaitori-guide/" className={chipCls}>K18・K10・WG/PG</Link>
          <Link href="/articles/k14-kaitori/" className={chipCls}>K14（14金）</Link>
          <Link href="/articles/platinum-kaitori/" className={chipCls}>プラチナ</Link>
        </div>

        <h2 id="by-item">品目別の買取ガイド</h2>
        <div className="flex flex-wrap gap-2 my-4 not-prose">
          <Link href="/articles/kin-necklace-kaitori/" className={chipCls}>ネックレス（喜平）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className={chipCls}>指輪・リング</Link>
          <Link href="/articles/kin-bracelet-kaitori/" className={chipCls}>ブレスレット</Link>
          <Link href="/articles/kinka-ingot-kaitori/" className={chipCls}>金貨・インゴット</Link>
          <Link href="/articles/kinba-kaitori/" className={chipCls}>金歯</Link>
          <Link href="/articles/kowareta-kin-kaitori/" className={chipCls}>壊れた金・刻印なし</Link>
          <Link href="/articles/diamond-kaitori/" className={chipCls}>ダイヤ・宝石付き</Link>
        </div>

        <h2 id="by-region">地域別の金買取ガイド</h2>
        <div className="flex flex-wrap gap-2 my-4 not-prose">
          <Link href="/articles/tokyo-kin-kaitori/" className={chipCls}>東京</Link>
          <Link href="/articles/okachimachi-kin-kaitori/" className={chipCls}>御徒町</Link>
          <Link href="/articles/osaka-kin-kaitori/" className={chipCls}>大阪</Link>
          <Link href="/articles/nagoya-kin-kaitori/" className={chipCls}>名古屋</Link>
          <Link href="/articles/yokohama-kin-kaitori/" className={chipCls}>横浜</Link>
          <Link href="/articles/fukuoka-kin-kaitori/" className={chipCls}>福岡</Link>
          <Link href="/articles/sapporo-kin-kaitori/" className={chipCls}>札幌</Link>
          <Link href="/articles/niiza-kin-kaitori/" className={chipCls}>新座</Link>
        </div>

        <h2 id="preparation">査定前にやっておくと損しない3つの準備</h2>
        <ol>
          <li><strong>重量を量る</strong>——キッチンスケールでOK。<Link href="/kin-kaitori-keisanki/">グラム計算機</Link>に純度×重量を入れれば今日の概算額がその場で分かります。</li>
          <li><strong>当日の相場を確認する</strong>——<Link href="/articles/kin-kaitori-souba/">相場一覧</Link>（毎朝自動更新）で1g単価を把握してから査定に臨む。</li>
          <li><strong>付属品・鑑定書をそろえる</strong>——金貨のケースやジュエリーの鑑定書があると評価が上がる場合があります。壊れていても（<Link href="/articles/kowareta-kin-kaitori/">壊れた金の買取</Link>）そのまま持ち込みでOK。磨きすぎや分解はかえってマイナスです。</li>
        </ol>

        <h2 id="faq">よくある質問</h2>
        <h3>Q. 金買取はどこがいい？</h3>
        <p>目的次第です。最高値=一括査定（ヒカカク！）／即現金化=店頭（買取大吉）／自宅完結=出張（ウリエル）／方法を選ぶ=ティファナ。いずれも査定無料なので、2社以上比較が鉄則です。</p>
        <h3>Q. 査定だけでもいい？</h3>
        <p>4社とも査定・キャンセル無料を公式に明記しています。納得できなければ売らなくて問題ありません。</p>
        <h3>Q. 税金はかかる？</h3>
        <p>売却益によっては譲渡所得の課税対象です。年間50万円の特別控除など、詳しくは<Link href="/articles/kin-kaitori-zeikin/">税金・確定申告ガイド</Link>をご覧ください。</p>

        <CtaBox />
        <RelatedArticles
          currentSlug="kin-kaitori-osusume"
          relatedSlugs={["nagoya-kin-kaitori", "kin-takaku-uru", "kin-kaitori-tesuryo-hikaku", "kaitori-houhou-hikaku", "kin-uridoki-2026", "kin-kaitori-souba", "kin-kaitori-hajimete"]}
        />
      </article>
    </div>
  </>);
}
