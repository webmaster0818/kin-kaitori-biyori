import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "池袋・金買取", item: "https://gold-biyori.com/articles/ikebukuro-kin-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】池袋の金買取おすすめ｜公式で確認した4店舗と相場比較",
    description: "池袋エリアで金を高く売るための業者比較ガイド。サンシャイン通り・西口・東口の主要店舗、出張・宅配対応、相場の見方を完全解説。",
    datePublished: "2026-05-18",
    dateModified: "2026-10-13",
    author: {
      "@type": "Organization",
      name: "金買取びより編集部",
    },
    publisher: {
      "@type": "Organization",
      name: "金買取びより",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "池袋で土日でも金買取できますか？", acceptedAnswer: { "@type": "Answer", text: "できます。公式で確認できた店では、大黒屋 質池袋東口買取センター（年中無休・年末年始を除く）、なんぼや 池袋店（定休日なし）、買取大吉 池袋西口店（年中無休）が土日も営業しています。リファスタ 東京池袋本店は水曜・日曜が定休で完全予約制です（2026年10月13日確認）。" } },
      { "@type": "Question", name: "池袋の金買取で一番高い業者はどこ？", acceptedAnswer: { "@type": "Answer", text: "業者により得意分野が異なるため一概には言えません。一括査定（ヒカカク！）で複数比較がおすすめ。" } },
      { "@type": "Question", name: "池袋駅から徒歩何分の業者が多い？", acceptedAnswer: { "@type": "Answer", text: "公式の表記では、大黒屋 質池袋東口買取センターが池袋駅東口（中央）から徒歩1分、なんぼや 池袋店がJR池袋駅東口から徒歩2分程度、買取大吉 池袋西口店がJR池袋駅西口から徒歩2分、リファスタ 東京池袋本店が池袋駅35番出口から徒歩7分です（2026年10月13日確認）。" } },
      { "@type": "Question", name: "出張買取で池袋以外も対応できる？", acceptedAnswer: { "@type": "Answer", text: "ウリエルは公式の出張対応エリアに東京都を含めています（一部対応できない市町村あり）。ティファナの出張は東京・埼玉・神奈川・千葉の一部地域です。申し込み時に対象エリアかご確認ください。" } },
      { "@type": "Question", name: "身分証は何が必要？", acceptedAnswer: { "@type": "Answer", text: "古物営業法により本人確認が必要。運転免許証、マイナンバーカード、パスポートのいずれか。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】池袋の金買取おすすめ｜公式で確認した4店舗と相場比較",
  description: "池袋エリアで金を高く売るための業者比較ガイド。サンシャイン通り・西口・東口の主要店舗、出張・宅配対応、相場の見方を完全解説。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/ikebukuro-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金製品の買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">池袋・金買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">池袋の金買取おすすめ店と高く売る方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>池袋は東京都内でも金買取業者が集中するエリアです。東口・西口、サンシャイン方面に買取店があり、<strong>徒歩圏で複数店の見積もりを比べやすいエリア</strong>です。</p>

          <h2>1. 池袋エリアの金買取事情</h2>
          <p>池袋駅は複数路線が乗り入れるターミナル駅で、東口・西口とも駅から数分の場所に買取店があります。下の店舗情報は各社の公式店舗ページで確認したものです。</p>

          <h2>2. 池袋の主要金買取店</h2>
          <ul>
            <li><strong>大黒屋 質池袋東口買取センター</strong>: 東京都豊島区南池袋1-22-1 アサヒ薬局ビルB1F（池袋駅東口〔中央〕より徒歩1分）。10:00〜19:00、年中無休（年末年始を除く）。質預かり・買取の店で、金・プラチナ・記念金貨も取り扱い。池袋には大黒屋の店舗がほかに2店（質池袋買取センター・質池袋西口駅前店）あります</li>
            <li><strong>なんぼや 池袋店</strong>: 東京都豊島区東池袋1-2-7 OKビル（JR池袋駅東口より徒歩2分程度）。10:00〜21:00（最終受付20:30）、定休日なし。ブランド品のほか金・貴金属・プラチナも買取</li>
            <li><strong>買取大吉 池袋西口店</strong>: 東京都豊島区西池袋1-17-6 新光ビル1階（JR池袋駅西口から徒歩2分）。10:00〜19:00、年中無休。金買取強化店。買取大吉は全国2,400店舗以上</li>
            <li><strong>リファスタ 東京池袋本店</strong>: 東京都豊島区東池袋1-25-14 アルファビルディング4F（池袋駅35番出口よりサンシャイン方面へ徒歩7分）。10:00〜13:00／14:00〜17:00（店頭最終受付16:00・完全予約制）、水曜・日曜定休（臨時休業あり）。金・プラチナ・ダイヤ・宝石の買取店</li>
          </ul>
          <p>以前この記事で紹介していた「ゴールドプラザ 池袋店」「ジュエルカフェ 池袋店」は、各社の公式店舗一覧に池袋の店舗がないため削除しました（ゴールドプラザの関東の店舗は銀座・町田・吉祥寺・錦糸町・西新宿・千葉・横浜・大宮・志木）。「買取大臣 池袋店」は公式の店舗情報を確認できなかったため掲載していません。</p>
          <p className="text-xs text-warm-gray">出典：<a href="https://shichi.e-daikoku.com/shop/ikebukuro-higashiguchi/" target="_blank" rel="noopener noreferrer nofollow">大黒屋 質池袋東口買取センター</a>／<a href="https://nanboya.com/shop/tokyo/ikebukuro-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや 池袋店</a>／<a href="https://www.kaitori-daikichi.jp/store/ikebukuro-nishiguchi/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 池袋西口店</a>／<a href="https://kinkaimasu.jp/accessmap/tokyo/" target="_blank" rel="noopener noreferrer nofollow">リファスタ 東京池袋本店</a>／<a href="https://goldplaza.jp/shop" target="_blank" rel="noopener noreferrer nofollow">ゴールドプラザ 店舗一覧</a>／<a href="https://www.jewel-cafe.jp/shop/" target="_blank" rel="noopener noreferrer nofollow">ジュエルカフェ 店舗案内</a>（いずれも2026年10月13日確認）</p>

          <h2>3. 店頭・出張・宅配の比較</h2>
          <div className="table-wrapper">
            <table>
              <thead><tr><th>方式</th><th>特徴</th><th>おすすめの方</th></tr></thead>
              <tbody>
                <tr><td>店頭</td><td>即現金化、対面交渉可</td><td>急いで売りたい人</td></tr>
                <tr><td>出張</td><td>自宅で査定、大量品向け</td><td>外出が難しい方</td></tr>
                <tr><td>宅配</td><td>全国対応、自分のペースで</td><td>時間に余裕がある人</td></tr>
              </tbody>
            </table>
          </div>

          <h2>4. 池袋で高く売る5つのコツ</h2>
          <ol>
            <li>東口・西口の複数業者で相見積もり</li>
            <li>金相場の高い日に売る</li>
            <li>身分証必須（古物営業法）</li>
            <li>付属品（箱・保証書）を揃える</li>
            <li>当日中の決定は不要、即決を求める業者は避ける</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋で土日でも金買取できますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">できます。公式で確認できた店では、大黒屋 質池袋東口買取センター（年中無休・年末年始を除く）、なんぼや 池袋店（定休日なし）、買取大吉 池袋西口店（年中無休）が土日も営業しています。リファスタ 東京池袋本店は水曜・日曜が定休で完全予約制です（2026年10月13日確認）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋の金買取で一番高い業者はどこ？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">業者により得意分野が異なるため一概には言えません。一括査定（ヒカカク！）で複数比較がおすすめ。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>池袋駅から徒歩何分の業者が多い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">公式の表記では、大黒屋 質池袋東口買取センターが池袋駅東口（中央）から徒歩1分、なんぼや 池袋店がJR池袋駅東口から徒歩2分程度、買取大吉 池袋西口店がJR池袋駅西口から徒歩2分、リファスタ 東京池袋本店が池袋駅35番出口から徒歩7分です（2026年10月13日確認）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>出張買取で池袋以外も対応できる？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ウリエルは公式の出張対応エリアに東京都を含めています（一部対応できない市町村あり）。ティファナの出張は東京・埼玉・神奈川・千葉の一部地域です。申し込み時に対象エリアかご確認ください。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>身分証は何が必要？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">古物営業法により本人確認が必要。運転免許証、マイナンバーカード、パスポートのいずれか。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="region" />
          <NearbyAreas pref="東京都" areas={[{ slug: "tokyo-kin-kaitori", label: "東京" }, { slug: "adachi-kin-kaitori", label: "足立区" }, { slug: "arakawa-kin-kaitori", label: "荒川区" }, { slug: "bunkyo-kin-kaitori", label: "文京区" }, { slug: "chiyoda-kin-kaitori", label: "千代田区" }, { slug: "chofu-kin-kaitori", label: "調布" }, { slug: "chuo-tokyo-kin-kaitori", label: "中央区" }, { slug: "edogawa-kin-kaitori", label: "江戸川区" }]} />
          <RelatedArticles
            currentSlug="ikebukuro-kin-kaitori"
            relatedSlugs={["tokyo-kin-kaitori", "ginza-kin-kaitori", "okachimachi-kin-kaitori", "omiya-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
