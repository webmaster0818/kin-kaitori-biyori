import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import goldData from "@/data/gold-spot-prices.json";

const TITLE = "ブランドジュエリー・時計の金買取ガイド｜ブランド価値と地金価値の二重評価【2026年7月】";
const URL = "https://gold-biyori.com/articles/brand-jewelry-kin-kaitori/";
const P = goldData.purity_buyback_estimate_per_g;
const [, pMonth, pDay] = goldData.date.split("-").map(Number);

function BreadcrumbSchema() {
  const d = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ブランドジュエリーの金買取", item: URL },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "ブランドジュエリーは地金として売るのと、ブランド品として売るのはどちらが得ですか？", acceptedAnswer: { "@type": "Answer", text: "ブランド・モデル・状態によります。人気ブランドの定番ライン（美品・付属品あり）はブランド価値評価の方が高くなることが多く、廃番品・傷みが強い品・マイナーラインは地金価値（重量×純度×当日相場）が下限の目安になります。両方の評価ができる業者で査定を受け、高い方で売るのが正解です。" } },
    { "@type": "Question", name: "箱や保証書がなくても売れますか？", acceptedAnswer: { "@type": "Answer", text: "売れます。ただしブランド価値評価では付属品（箱・保証書・鑑別書）の有無が査定額に影響します。付属品が無い場合でも、K18やPt製品なら地金価値が下支えになるため、価値がゼロになることはありません。" } },
    { "@type": "Question", name: "刻印が薄れたブランドジュエリーでも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "できます。買取店は比重検査やX線分析で素材の純度を確認できるため、刻印が読めなくても地金として査定可能です。ブランドの真贋判定は刻印以外の要素（作り・仕上げ・付属品）も含めて行われます。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "ブランドジュエリー・時計の金買取ガイド", datePublished: "2026-07-11", dateModified: goldData.date, author: { "@type": "Organization", name: "金買取日和" }, publisher: { "@type": "Organization", name: "金買取日和", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: TITLE,
  description: `シャネル・エルメス・グッチ・ミキモト・オメガなどブランドジュエリー・時計を高く売るコツ。ブランド価値と地金価値（本日K18 1g${P.k18.toLocaleString()}円）の二重評価の仕組み、ブランド別の評価ポイント、付属品の影響を解説します。`,
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">ブランド品は「二重評価」できる業者で査定を</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ブランド価値と地金価値の両方を見られる業者なら取りこぼしがありません。査定は無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function BrandJewelryKinKaitoriPage() {
  return (<><FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">ブランドジュエリーの金買取</span></li></ol></nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="ブランドジュエリーの金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ブランドジュエリー・時計の金買取ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {pMonth}月{pDay}日（相場は毎朝自動更新）</p>

        <p>ブランドのジュエリー・時計は、<strong>「ブランド価値」と「地金（金・プラチナ）価値」の二重で評価</strong>されます。人気ブランドの美品はブランド価値の方が高く、廃番品や傷みのある品でも<strong>地金価値（本日のK18買取目安: 1g{P.k18.toLocaleString()}円）が下限の保証</strong>になる——この仕組みを知っているだけで、売り方の判断が変わります。</p>

        <h2>二重評価の仕組み: どちらで売るのが得か</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>状態</th><th>有利な評価</th><th>理由</th></tr></thead>
            <tbody>
              <tr><td>人気ブランド定番ライン・美品・付属品あり</td><td><strong>ブランド価値</strong></td><td>中古市場の需要が地金価値を上回る</td></tr>
              <tr><td>廃番・型古・傷みあり</td><td><strong>地金価値</strong></td><td>重量×純度×当日相場で確実に値が付く</td></tr>
              <tr><td>マイナーライン・刻印薄れ</td><td><strong>地金価値</strong></td><td>比重検査・X線分析で素材評価可能</td></tr>
            </tbody>
          </table>
        </div>
        <p>迷ったら<Link href="/kin-kaitori-keisanki/">グラム計算機</Link>で地金価値の下限を把握してから査定に出すと、提示額の妥当性を判断できます。</p>

        <h2 id="fashion">ファッションブランドのジュエリー</h2>
        <ul>
          <li><strong>シャネル</strong> — ココマークのジュエリー、J12等の時計が人気。ブランド価値評価が中心で、状態・付属品の影響が大きい</li>
          <li><strong>エルメス</strong> — シェーヌダンクル等の人気ラインは中古需要が強く、ブランド価値優位になりやすい</li>
          <li><strong>グッチ</strong> — シルバー製品が多く、ゴールド製品（K18）は地金価値も下支えに</li>
          <li><strong>ディオール</strong> — 人気ラインはブランド評価。メッキ製品はブランド価値のみの評価になる点に注意</li>
        </ul>

        <h2 id="domestic">国産ジュエリーブランド</h2>
        <ul>
          <li><strong>アガット</strong> — K10・K18製品が中心。ブランド価値＋素材価値の両面で評価</li>
          <li><strong>4℃（ヨンドシー）</strong> — K10・K18・Pt製品。素材価値が査定の軸になることが多い</li>
          <li><strong>ポンテヴェキオ</strong> — K18のカラーストーンジュエリー。地金価値＋宝石評価</li>
          <li><strong>スタージュエリー</strong> — K10・K18・Pt。素材価値＋ブランド価値</li>
        </ul>
        <p>国産ブランドは海外ハイブランドに比べ中古ブランド市場が小さいため、<strong>K18・Ptの地金価値が査定の実質的な基準</strong>になるケースが多いです。当日の1g相場（<Link href="/articles/kin-kaitori-souba/">相場一覧</Link>）を確認してから売りましょう。</p>

        <h2 id="pearl">真珠ブランド（ミキモト・タサキ）</h2>
        <ul>
          <li><strong>ミキモト</strong> — 真珠の品質（照り・巻き・キズ）評価が中心＋K18枠の金価値</li>
          <li><strong>タサキ（TASAKI）</strong> — バランス等人気ラインはブランド評価。パール品質とK18・Pt枠の価値の合算</li>
        </ul>
        <p>真珠自体は金と違い相場が公示されないため、<strong>真珠鑑別の実績がある業者</strong>での査定が損を防ぎます。</p>

        <h2 id="watch">時計ブランド（オメガ・グランドセイコー・ショパール）</h2>
        <ul>
          <li><strong>オメガ</strong> — スピードマスター・シーマスターが定番人気。<strong>金無垢ケースはケース重量×K18相場が下限</strong>になる</li>
          <li><strong>グランドセイコー</strong> — 国産高級時計として中古需要が安定。金無垢・付属品の有無で査定差が大きい</li>
          <li><strong>ショパール</strong> — ハッピーダイヤモンド等の人気ライン。ジュエリーウォッチは宝石＋地金＋ブランドの三重評価</li>
        </ul>

        <CtaBox />

        <h2>ハイジュエリー5ブランドは個別ガイドへ</h2>
        <p>中古市場が特に大きい5ブランドは、ライン別の詳しいガイドを用意しています。</p>
        <div className="flex flex-wrap gap-2 my-4 not-prose">
          <Link href="/articles/cartier-kaitori/" className="inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline">カルティエ</Link>
          <Link href="/articles/tiffany-kaitori/" className="inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline">ティファニー</Link>
          <Link href="/articles/bvlgari-kaitori/" className="inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline">ブルガリ</Link>
          <Link href="/articles/vancleef-kaitori/" className="inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline">ヴァンクリーフ</Link>
          <Link href="/articles/harrywinston-kaitori/" className="inline-block bg-white border border-warm-border rounded-full px-4 py-1.5 text-xs text-navy hover:border-accent/50 hover:text-accent-dark transition no-underline">ハリーウィンストン</Link>
        </div>

        <h2>高く売る3つの共通ポイント</h2>
        <ol>
          <li><strong>付属品をそろえる</strong> — 箱・保証書・鑑別書はブランド価値評価の必須材料</li>
          <li><strong>地金価値の下限を知ってから査定へ</strong> — 重量を量り<Link href="/kin-kaitori-keisanki/">計算機</Link>で概算（本日K18: 1g{P.k18.toLocaleString()}円）</li>
          <li><strong>ブランドと地金の両方を評価できる業者で比較</strong> — <Link href="/articles/kin-kaitori-osusume/">おすすめ業者比較</Link>参照</li>
        </ol>

        <CtaBox />
        <RelatedArticles
          currentSlug="brand-jewelry-kin-kaitori"
          relatedSlugs={["cartier-kaitori", "tiffany-kaitori", "kin-kaitori-osusume", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-kaitori-souba"]}
        />
      </article>
    </div>
  </>);
}
