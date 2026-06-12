import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

const TITLE = "金を売るとマイナンバーが必要？200万円の境界線と支払調書の仕組みを解説【2026年】";
const URL = "https://gold-biyori.com/articles/kin-baikyaku-mynumber/";

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金売却とマイナンバー", item: URL },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金を売るとき、いくらからマイナンバーが必要ですか？", acceptedAnswer: { "@type": "Answer", text: "金地金・金貨の売却額が200万円を超えると、買取業者は税務署へ支払調書を提出する義務があり、その記載のために売主のマイナンバーの告知が必要になります。200万円以下の取引ではマイナンバーの提供は不要です（本人確認書類は別途必要）。" } },
    { "@type": "Question", name: "マイナンバーを提示すると税金が増えますか？", acceptedAnswer: { "@type": "Answer", text: "いいえ。マイナンバーの提示自体で税金が増えることはありません。売却益への課税（譲渡所得）は提示の有無に関係なく従来から発生するもので、支払調書は税務署が取引を把握するための書類です。" } },
    { "@type": "Question", name: "200万円以下に分けて売れば申告しなくていい？", acceptedAnswer: { "@type": "Answer", text: "いいえ。支払調書が提出されないことと、納税義務がないことは別問題です。年間の売却益が特別控除50万円を超えれば、調書の有無に関係なく確定申告が必要です。意図的な分割売却でも申告義務は変わりません。" } },
    { "@type": "Question", name: "マイナンバーカードを持っていない場合は？", acceptedAnswer: { "@type": "Answer", text: "通知カードやマイナンバー記載の住民票と、運転免許証などの本人確認書類の組み合わせで対応できる業者が一般的です。必要書類は業者により異なるため、事前に確認しましょう。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, datePublished: "2026-06-12", dateModified: "2026-06-12", author: { "@type": "Organization", name: "金買取日和" }, publisher: { "@type": "Organization", name: "金買取日和", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: TITLE,
  description: "金地金・金貨を200万円超で売却するとマイナンバーの告知と支払調書の提出が必要になります。なぜ必要か、出さないとどうなるか、200万円以下なら何が必要か、分割売却の誤解まで仕組みを解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">まずは無料査定で売却額の目安を知る</h3>
      <p className="text-sm text-warm-gray text-center mb-4">必要書類の準備は売却額の見当がついてからで十分です。査定・キャンセルは無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
      </div>
    </div>
  );
}

export default function KinBaikyakuMynumberPage() {
  return (<><FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金売却とマイナンバー</span></li></ol></nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金売却とマイナンバーの解説イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金を売るとマイナンバーが必要？200万円の境界線と支払調書の仕組み</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月12日</p>
        <p>金地金やインゴットを売却しようとして、買取店で「マイナンバーの提示をお願いします」と言われて戸惑う方は少なくありません。「なぜ番号が必要なの？」「出すと税金を取られる？」——この記事では、金売却とマイナンバーの関係を仕組みから解説します。</p>

        <h2>結論: 200万円超の売却でマイナンバーの告知が必要</h2>
        <p>金地金・金貨の売却代金が<strong>200万円を超える</strong>場合、買取業者は「<strong>金地金等の譲渡の対価の支払調書</strong>」を税務署に提出する義務があります（所得税法225条）。この調書には売主のマイナンバー（個人番号）を記載する必要があるため、売主は業者へマイナンバーを告知することになります。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>売却額</th><th>マイナンバー</th><th>本人確認書類</th><th>支払調書</th></tr></thead>
            <tbody>
              <tr><td><strong>200万円以下</strong></td><td>不要</td><td>必要（古物営業法・犯罪収益移転防止法）</td><td>提出されない</td></tr>
              <tr><td><strong>200万円超</strong></td><td>告知が必要</td><td>必要</td><td>税務署へ提出される</td></tr>
            </tbody>
          </table>
        </div>
        <p>※対象は金地金・プラチナ地金・金貨・プラチナ貨です。宝飾品（ジュエリー）の扱いは業者・取引形態により異なります。</p>

        <h2>マイナンバーを出すと税金が増える？ — 増えません</h2>
        <p>よくある誤解ですが、マイナンバーの提示によって<strong>新たに税金が発生したり増えたりすることはありません</strong>。</p>
        <ul>
          <li>金の売却益には、もともと<strong>譲渡所得</strong>として所得税がかかります（年間50万円の特別控除あり。<Link href="/articles/kin-kaitori-zeikin/">金買取の税金ガイド</Link>参照）</li>
          <li>支払調書は、税務署がその取引を<strong>把握する</strong>ための書類であって、課税額を決める書類ではありません</li>
          <li>つまり「調書が出る＝税金がかかる」ではなく、「利益が出ていれば調書の有無に関係なく申告義務がある」が正しい理解です</li>
        </ul>

        <h2>「200万円以下に分けて売ればいい」の誤解</h2>
        <p>支払調書を避ける目的で分割売却を勧める情報がありますが、注意が必要です。</p>
        <ul>
          <li>調書が提出されなくても、<strong>年間の売却益が50万円（特別控除）を超えれば確定申告が必要</strong>です。納税義務は変わりません</li>
          <li>税務署は調書以外にも、業者の帳簿（古物台帳）・銀行口座の入金記録・相続税調査などから取引を把握できます</li>
          <li>無申告が発覚すると無申告加算税・延滞税が上乗せされ、かえって不利になります</li>
        </ul>
        <p>売却回数・金額にかかわらず、<strong>利益が出たら正しく申告する</strong>のがもっとも安全で、結果的に得です。</p>

        <CtaBox />

        <h2>売却時に必要な書類まとめ</h2>
        <ol>
          <li><strong>本人確認書類</strong>（運転免許証・マイナンバーカード・パスポート等）— 金額にかかわらず必要。古物営業法・犯罪収益移転防止法に基づき、1万円超の取引では本人確認が義務付けられています</li>
          <li><strong>マイナンバー確認書類</strong> — 200万円超のとき。マイナンバーカード、または通知カード／個人番号記載の住民票＋本人確認書類</li>
          <li><strong>購入時の領収書・計算書</strong>（あれば）— 税額計算で大幅に有利になります。<Link href="/articles/kin-souzoku-baikyaku/">相続した金</Link>でも故人の書類が使えます</li>
        </ol>

        <h2>よくある質問</h2>
        <h3>Q. マイナンバーの提示を拒否したらどうなる？</h3>
        <p>業者には調書への記載義務があるため、200万円超の取引では提示を求められます。拒否した場合の対応（取引可否）は業者によって異なります。なお、提示してもしなくても納税義務は同じです。</p>
        <h3>Q. 業者にマイナンバーを渡して悪用されない？</h3>
        <p>業者は番号法（マイナンバー法）により利用目的が支払調書作成等に限定され、安全管理措置が義務付けられています。受け取った番号を他の目的に使うことは法律で禁止されています。</p>
        <h3>Q. 宝飾品（K18ネックレス等）の売却でもマイナンバーは必要？</h3>
        <p>支払調書の対象は金地金・金貨等です。ジュエリーの扱いは業者により運用が異なるため、売却先にご確認ください（本人確認書類は金額により必要です）。</p>

        <h2>まとめ</h2>
        <ul>
          <li>マイナンバーが必要なのは<strong>金地金・金貨の200万円超の売却</strong>のとき（支払調書のため）</li>
          <li>提示で税金が増えることはない。課税は売却益に対して従来どおり</li>
          <li>分割売却しても納税義務は変わらない。利益が50万円を超えたら確定申告を</li>
        </ul>
        <p className="text-sm text-warm-gray">参照: 所得税法225条（支払調書）、国税庁「金地金等の譲渡の対価の支払調書」、犯罪収益移転防止法・古物営業法（本人確認）。制度は改正される場合があります。個別の判断は税務署・税理士にご確認ください。</p>

        <ExpertQA category="howto" />
        <RelatedArticles
          currentSlug="kin-baikyaku-mynumber"
          relatedSlugs={["kin-kaitori-zeikin", "kin-zouyo-zeikin", "kin-souzoku-baikyaku", "kin-kaitori-souba", "k24-kaitori", "kin-takaku-uru", "kaitori-houhou-hikaku", "kin-kaitori-hajimete"]}
        />
      </article>
    </div>
  </>);
}
