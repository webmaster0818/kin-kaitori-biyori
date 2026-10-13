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
      { "@type": "ListItem", position: 3, name: "銀座・金買取", item: "https://gold-biyori.com/articles/ginza-kin-kaitori/" },
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
    headline: "【2026年最新】銀座の金買取おすすめ｜ハイブランド対応・富裕層向け店舗を厳選",
    description: "銀座エリアの金買取は富裕層・コレクター向け。ハイブランドジュエリー、希少金製品の専門業者、銀座中央通り・並木通り周辺の店舗を比較解説。",
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
      { "@type": "Question", name: "銀座は他のエリアより高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "ハイブランド・高額品は銀座が有利な傾向。専門知識の高い査定士、専門業者の集中で適正評価が期待できる。" } },
      { "@type": "Question", name: "銀座の買取店は予約が必要？", acceptedAnswer: { "@type": "Answer", text: "高額品は来店予約を使うと待ち時間を減らせます。なんぼや・大黒屋・KOMEHYOは公式サイトに来店（買取）予約の窓口があります。" } },
      { "@type": "Question", name: "銀座の駅から徒歩何分の業者が多い？", acceptedAnswer: { "@type": "Answer", text: "公式の表記では、おたからや 銀座本店が銀座駅A13・A8出口から徒歩0分、なんぼや 銀座本店が銀座駅A2出口から徒歩1分程度、大黒屋 質銀座買取センターが銀座駅C8出口から徒歩1分、KOMEHYO GINZAが銀座一丁目駅8番出口から徒歩1分です（2026年10月13日確認）。" } },
      { "@type": "Question", name: "少量でも買取してくれますか？", acceptedAnswer: { "@type": "Answer", text: "店や品物によって異なります。少量の場合は来店前に電話やLINE査定で確認するか、一括査定（ヒカカク！）で複数社の反応を見るのがおすすめです。" } },
      { "@type": "Question", name: "銀座エリアの査定料・出張料は？", acceptedAnswer: { "@type": "Answer", text: "店によって異なります。KOMEHYO GINZAは公式の店舗ページで査定・キャンセル・手数料が無料と明記しています。そのほかの店は来店前に各社の公式サイトで確認してください。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】銀座の金買取おすすめ｜ハイブランド対応・富裕層向け店舗を厳選",
  description: "銀座エリアの金買取は富裕層・コレクター向け。ハイブランドジュエリー、希少金製品の専門業者、銀座中央通り・並木通り周辺の店舗を比較解説。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/ginza-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金製品の買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
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
            <li><span className="text-foreground">銀座・金買取</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">銀座の金買取おすすめ店と高く売る完全ガイド</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>


          <p>銀座エリアは日本屈指のブランドジュエリー街。<strong>高額品・希少品の買取に強い専門業者</strong>が集中し、ハリーウィンストン、カルティエ、ヴァンクリーフ等の<strong>ハイブランド金製品の最高値買取</strong>が期待できます。</p>

          <h2>1. 銀座エリアの金買取事情</h2>
          <p>世界的ブランドフラッグシップが並ぶ商業地区。富裕層・経営者・コレクターが集まり、買取側も<strong>専門知識の高い査定士</strong>を配置しています。</p>

          <h2>2. 銀座の主要金買取店</h2>
          <ul>
            <li><strong>なんぼや 銀座本店</strong>: 東京都中央区銀座5-7-4 鳩居堂ビルB1F（銀座駅A2出口より徒歩1分程度）。10:00〜19:30、定休日なし。ブランド品のほか金・貴金属・プラチナも買取。銀座には「銀座レンガ通り店」もあります</li>
            <li><strong>KOMEHYO GINZA</strong>（コメ兵）: 東京都中央区銀座2-7-18 藤田ビル（買取は2F。銀座一丁目駅8番出口より徒歩1分）。11:00〜20:00（臨時休業・営業内容の変更が店舗ページで告知されるため来店前に確認を）。ジュエリー・時計・バッグ等のブランド品買取店（地金の買取可否は店舗ページに記載なし）</li>
            <li><strong>ゴールドプラザ 東京銀座本店</strong>: 東京都中央区銀座5-8-17 銀座プラザ58ビル4F。10:00〜19:00（定休日は公式の店舗ページに記載なし）。金・プラチナ・ダイヤ・宝石のほか、ブランド品・時計も買取</li>
            <li><strong>大黒屋 質銀座買取センター</strong>: 東京都中央区銀座3-3-7 サカイリ9ビル1F-B1F（銀座駅C8出口より徒歩1分）。10:30〜19:30、年中無休（年末年始を除く）。質預かり・買取の店で、金・プラチナ・記念金貨も取り扱い。銀座には大黒屋の店舗がほかに2店（質銀座松屋通り店・質銀座並木通り買取センター）あります</li>
            <li><strong>おたからや 銀座本店</strong>: 東京都中央区銀座4-6-18 ギンザアクトビル3階（銀座駅A13・A8出口より徒歩0分）。10:00〜19:00、年中無休（年末年始を除く）。おたからやは公式表記で店舗数2,070店舗以上</li>
          </ul>
          <p>以前この記事で紹介していた「リファスタ 銀座店」は、リファスタ公式の店舗が東京池袋本店と大阪心斎橋店の2店のみで銀座に店舗がないため削除しました。</p>
          <p className="text-xs text-warm-gray">出典：<a href="https://nanboya.com/shop/tokyo/ginza-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや 銀座本店</a>／<a href="https://komehyo.jp/kaitori/shop/ginza" target="_blank" rel="noopener noreferrer nofollow">KOMEHYO GINZA</a>／<a href="https://goldplaza.jp/shop/ginza" target="_blank" rel="noopener noreferrer nofollow">ゴールドプラザ 東京銀座本店</a>／<a href="https://shichi.e-daikoku.com/shop/ginza-kaitori/" target="_blank" rel="noopener noreferrer nofollow">大黒屋 質銀座買取センター</a>／<a href="https://www.otakaraya.jp/shop/tokyo/" target="_blank" rel="noopener noreferrer nofollow">おたからや 東京都の店舗一覧</a>／<a href="https://kinkaimasu.jp/accessmap/tokyo/" target="_blank" rel="noopener noreferrer nofollow">リファスタ 店舗アクセス</a>（いずれも2026年10月13日確認）</p>

          <h2>3. 銀座で高額買取が期待できる金製品</h2>
          <ul>
            <li>ハイブランドジュエリー（ハリーウィンストン、グラフ、ブシュロン等）</li>
            <li>K22・K24の純度高め金</li>
            <li>金時計（ロレックス、パテック・フィリップ等の18金無垢）</li>
            <li>アンティーク金製品・古銭</li>
            <li>K18WG/PG/YGの大粒ダイヤモンドジュエリー</li>
          </ul>

          <h2>4. 銀座で高く売る5つのコツ</h2>
          <ol>
            <li>ハイブランド専門業者を選ぶ（一般リサイクル店は避ける）</li>
            <li>保証書・鑑定書・箱を揃える</li>
            <li>複数業者で相見積もり</li>
            <li>金相場の高い時期を狙う</li>
            <li>当日中の決定は急がない、複数オファー比較が鉄則</li>
          </ol>


          <CtaBox />

          <h2>よくある質問</h2>
          <details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座は他のエリアより高く売れますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">ハイブランド・高額品は銀座が有利な傾向。専門知識の高い査定士、専門業者の集中で適正評価が期待できる。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座の買取店は予約が必要？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">高額品は来店予約を使うと待ち時間を減らせます。なんぼや・大黒屋・KOMEHYOは公式サイトに来店（買取）予約の窓口があります。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座の駅から徒歩何分の業者が多い？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">公式の表記では、おたからや 銀座本店が銀座駅A13・A8出口から徒歩0分、なんぼや 銀座本店が銀座駅A2出口から徒歩1分程度、大黒屋 質銀座買取センターが銀座駅C8出口から徒歩1分、KOMEHYO GINZAが銀座一丁目駅8番出口から徒歩1分です（2026年10月13日確認）。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>少量でも買取してくれますか？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">店や品物によって異なります。少量の場合は来店前に電話やLINE査定で確認するか、一括査定（ヒカカク！）で複数社の反応を見るのがおすすめです。</p>
</details>
<details className="border-b border-warm-border py-4 group not-prose">
  <summary className="font-bold cursor-pointer flex justify-between items-center"><span>銀座エリアの査定料・出張料は？</span><span className="text-2xl ml-4 group-open:rotate-45 transition-transform">+</span></summary>
  <p className="mt-3 text-sm leading-relaxed">店によって異なります。KOMEHYO GINZAは公式の店舗ページで査定・キャンセル・手数料が無料と明記しています。そのほかの店は来店前に各社の公式サイトで確認してください。</p>
</details>

          <GoldPriceTrend />
          <ExpertQA category="region" />
          <NearbyAreas pref="東京都" areas={[{ slug: "tokyo-kin-kaitori", label: "東京" }, { slug: "adachi-kin-kaitori", label: "足立区" }, { slug: "arakawa-kin-kaitori", label: "荒川区" }, { slug: "bunkyo-kin-kaitori", label: "文京区" }, { slug: "chiyoda-kin-kaitori", label: "千代田区" }, { slug: "chofu-kin-kaitori", label: "調布" }, { slug: "chuo-tokyo-kin-kaitori", label: "中央区" }, { slug: "edogawa-kin-kaitori", label: "江戸川区" }]} />
          <RelatedArticles
            currentSlug="ginza-kin-kaitori"
            relatedSlugs={["tokyo-kin-kaitori", "okachimachi-kin-kaitori", "ikebukuro-kin-kaitori", "yokohama-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
          />
        </article>
      </div>
    </>
  );
}
