import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

const TITLE = "金買取の手数料を8社で徹底比較【2026年6月調査】査定料・出張料・返送料・振込手数料";
const URL = "https://gold-biyori.com/articles/kin-kaitori-tesuryo-hikaku/";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金買取の手数料比較", item: URL },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金買取の査定料はどこも無料ですか？", acceptedAnswer: { "@type": "Answer", text: "今回調査した8社（買取大吉・ウリエル・ティファナ・なんぼや・バイセル・福ちゃん・ザ・ゴールド・おたからや）はすべて公式サイトで査定料無料と明記しています（2026年6月時点）。" } },
    { "@type": "Question", name: "見落としやすい手数料は何ですか？", acceptedAnswer: { "@type": "Answer", text: "宅配買取でキャンセルした場合の「返送料」です。今回の調査では、なんぼや・ティファナは返送料無料、バイセル・福ちゃん・ザ・ゴールドはお客様負担（着払い）と公式に記載されており、各社で差がありました。また「買取相場価格に手数料は含まれていない」と注記する業者もあるため、査定時に差引きの有無を確認するのが確実です。" } },
    { "@type": "Question", name: "手数料無料なら、どこで売っても同じですか？", acceptedAnswer: { "@type": "Answer", text: "いいえ。手数料が無料でも、提示される買取単価（1gあたりの価格）は業者ごとに異なります。手数料の有無と買取単価の両方を見て、手取り額で比較するのが正解です。複数社の査定を取ることをおすすめします。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Organization", name: "金買取日和" }, publisher: { "@type": "Organization", name: "金買取日和", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: TITLE,
  description: "金買取8社（買取大吉・ウリエル・ティファナ・なんぼや・バイセル・福ちゃん・ザ・ゴールド・おたからや）の査定料・出張料・宅配送料・キャンセル時返送料・振込手数料を各公式サイトで調査して比較。見落としやすい返送料の差まで一覧表で確認できます。",
};

const ROWS: Array<{ name: string; satei: string; shucchou: string; takuhai: string; hensou: string; cancel: string; furikomi: string; methods: string }> = [
  { name: "買取大吉", satei: "無料", shucchou: "無料（全国47都道府県※離島等除く）", takuhai: "宅配なし", hensou: "—", cancel: "無料", furikomi: "記載なし", methods: "店頭・出張" },
  { name: "ウリエル", satei: "無料", shucchou: "無料（関東・中部・近畿・岡山）", takuhai: "宅配なし", hensou: "—", cancel: "無料", furikomi: "記載なし", methods: "出張中心（無店舗型）" },
  { name: "ティファナ", satei: "無料", shucchou: "無料（東京都＋武蔵野市）", takuhai: "送料無料・キット無料", hensou: "無料（対象外品のみ客負担）", cancel: "無料", furikomi: "記載なし", methods: "店頭・出張・宅配" },
  { name: "なんぼや", satei: "無料", shucchou: "無料（全国）", takuhai: "送料・キット無料", hensou: "無料", cancel: "無料", furikomi: "記載なし", methods: "店頭・出張・宅配・オンライン" },
  { name: "バイセル", satei: "無料", shucchou: "無料（離島除く全国）", takuhai: "送料・キット無料", hensou: "客負担（着払い）", cancel: "無料（8日間返品保証）", furikomi: "無料（会社負担）", methods: "店頭・出張・宅配" },
  { name: "福ちゃん", satei: "無料", shucchou: "無料（全国※一部地域除く）", takuhai: "送料・キット無料", hensou: "客負担（着払い）", cancel: "無料", furikomi: "無料（会社負担）", methods: "店頭・出張・宅配" },
  { name: "ザ・ゴールド", satei: "無料", shucchou: "無料（全国90%以上カバー）", takuhai: "送料無料（着払い発送）", hensou: "客負担", cancel: "無料", furikomi: "無料（会社負担）", methods: "店頭・出張・宅配" },
  { name: "おたからや", satei: "無料", shucchou: "無料（全国）", takuhai: "宅配なし", hensou: "—", cancel: "記載なし（査定後キャンセル可とは明記）", furikomi: "記載なし", methods: "店頭・出張" },
];

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">手数料を確認したら、次は買取単価の比較</h3>
      <p className="text-sm text-warm-gray text-center mb-4">手取り額＝買取単価×重量−手数料。複数社の無料査定で単価を比べましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriTesuryoHikakuPage() {
  return (<><FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金買取の手数料比較</span></li></ol></nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金買取の手数料比較イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取の手数料を8社で徹底比較【2026年6月調査】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月12日（各社公式サイトを当サイトが直接確認した時点の情報です）</p>
        <p>金買取で本当に大事なのは「買取単価」だけではありません。<strong>査定料・出張料・キャンセル時の返送料・振込手数料</strong>などの諸費用で、最終的な手取り額が変わります。</p>
        <p>この記事では、主要買取8社の公式サイトを当サイトが直接確認し、手数料と利用条件を一覧にまとめました。公式に記載がない項目は「記載なし」と正直に表記しています。</p>

        <h2>8社の手数料 比較一覧表</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>業者</th><th>査定料</th><th>出張料</th><th>宅配送料</th><th>キャンセル時返送料</th><th>キャンセル料</th><th>振込手数料</th><th>買取方法</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.name}>
                  <td><strong>{r.name}</strong></td><td>{r.satei}</td><td>{r.shucchou}</td><td>{r.takuhai}</td><td>{r.hensou}</td><td>{r.cancel}</td><td>{r.furikomi}</td><td>{r.methods}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典: 各社公式サイト（2026年6月12日確認）。「記載なし」は公式サイトで確認できなかった項目です。最新情報・詳細条件は各公式サイトでご確認ください。</p>

        <h2>比較からわかった3つのポイント</h2>
        <h3>1. 査定料・出張料・キャンセル料は「無料」が業界標準</h3>
        <p>8社すべてが査定料無料を明記しており、出張料・キャンセル料もほぼ全社が無料です（おたからやはキャンセル料の明示記載はないものの「査定額に納得できなければキャンセル可能」と記載）。つまり<strong>この3項目では差がつきません</strong>。</p>

        <h3>2. 差がつくのは宅配買取の「返送料」</h3>
        <p>見落としやすいのが、宅配査定後にキャンセルした場合の<strong>返送料</strong>です。今回の調査では明確に差がありました。</p>
        <ul>
          <li><strong>返送料も無料</strong>: なんぼや（「返送料すべて0円」と明記）、ティファナ（対象外品の返送のみ客負担）</li>
          <li><strong>返送料は客負担（着払い）</strong>: バイセル・福ちゃん・ザ・ゴールド</li>
          <li><strong>そもそも宅配なし</strong>: 買取大吉・ウリエル・おたからや（店頭・出張のみ）</li>
        </ul>
        <p>「査定額を見てから決めたい」人が宅配を使うなら、キャンセル時のコストまで含めて選ぶのが賢明です。</p>

        <h3>3. 「手数料無料」でも買取単価から差し引かれる場合がある</h3>
        <p>なんぼやは金買取ページに「<strong>買取相場価格に手数料は含まれておりません。手数料に関しては実物拝見時にご案内</strong>」と注記しています（2026年6月確認）。これは誠実な開示ですが、裏を返せば「Web掲載の相場単価＝手取り単価とは限らない」ということです。</p>
        <p>どの業者でも、査定時に<strong>「この金額から差し引かれるものはありますか？」と一言確認</strong>し、目減り・精錬費等の控除がないかをチェックしましょう。</p>

        <h2>手取り額で比較する手順</h2>
        <ol>
          <li><Link href="/souba-dashboard/">本日の相場</Link>で理論値（公表値×純度×重量）を把握する</li>
          <li>2〜3社で無料査定を受け、<strong>提示額（円/g）</strong>を控える</li>
          <li>「提示額からの差引きの有無」を口頭で確認する</li>
          <li>宅配なら返送料、振込なら振込手数料の負担も確認する</li>
          <li>手取り額がもっとも大きい業者で売却する</li>
        </ol>

        <CtaBox />

        <h2>よくある質問</h2>
        <h3>Q. 溶解検査の費用を取られることはありますか？</h3>
        <p>今回調査した8社の公式サイトには、溶解検査や精錬手数料の具体的な記載はありませんでした（ザ・ゴールドとおたからやは比重による検査を記載）。インゴット以外の製品でも、通常は刻印確認・比重計・X線などの非破壊検査が一般的です。検査方法と費用は査定時に確認しましょう。</p>
        <h3>Q. 200万円を超える売却で必要なものは？</h3>
        <p>支払調書の関係でマイナンバーの告知が必要になります。詳しくは<Link href="/articles/kin-baikyaku-mynumber/">金売却とマイナンバーの解説</Link>をご覧ください。</p>
        <h3>Q. 結局どこがおすすめ？</h3>
        <p>手数料はほぼ横並びのため、決め手は「買取単価」と「利用したい買取方法」です。店頭派なら店舗数の多い業者、宅配でじっくり比較したいなら返送料無料の業者、と使い方で選び、必ず複数社で査定額を比較してください。</p>

        <h2>まとめ</h2>
        <ul>
          <li>査定料・出張料・キャンセル料は8社とも実質無料 — ここでは差がつかない</li>
          <li>差がつくのは<strong>宅配キャンセル時の返送料</strong>（無料: なんぼや・ティファナ／客負担: バイセル・福ちゃん・ザ・ゴールド）と<strong>振込手数料の明記</strong>（無料明記: バイセル・福ちゃん・ザ・ゴールド）</li>
          <li>「相場価格に手数料が含まれない」業者もある — 査定時に差引きの有無を必ず確認</li>
          <li>最後は手数料込みの<strong>手取り額</strong>で複数社を比較する</li>
        </ul>

        <ExpertQA category="compare" />
        <RelatedArticles
          currentSlug="kin-kaitori-tesuryo-hikaku"
          relatedSlugs={["kaitori-houhou-hikaku", "daikichi-vs-nanboya", "tentou-vs-takuhai", "kin-kaitori-souba", "kin-takaku-uru", "kin-kaitori-hajimete", "kin-baikyaku-mynumber", "kin-kaitori-zeikin"]}
        />
      </article>
    </div>
  </>);
}
