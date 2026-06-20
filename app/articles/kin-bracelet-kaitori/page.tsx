import type { Metadata } from "next";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
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
      { "@type": "ListItem", position: 3, name: "金ブレスレット買取ガイド", item: "https://gold-biyori.com/articles/kin-bracelet-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金のブレスレットの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日の買取相場」カードと重量別早見表（毎日自動更新）でご確認ください。10gのK18ブレスレットなら約114,000円、30gの喜平ブレスレットなら約342,000円程度です。" } },
      { "@type": "Question", name: "喜平ブレスレットは高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、喜平ブレスレットは金の含有量（重量）が多いため高額買取が期待できます。K18の六面ダブル喜平ブレスレット（20cm・30g）なら約342,000円の買取目安です。" } },
      { "@type": "Question", name: "壊れたブレスレットでも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、留め具の破損、チェーン切れ、変形などがあっても買取可能です。金の買取は素材の重量と純度がベースなので、状態は買取価格に影響しません。" } },
      { "@type": "Question", name: "バングルとブレスレットで買取価格は違いますか？", acceptedAnswer: { "@type": "Answer", text: "買取価格は純度と重量で決まるため、バングルかブレスレットかは関係ありません。ただしバングルは構造上、チェーンブレスレットより重い傾向があるため、結果的に高額になることが多いです。" } },
      { "@type": "Question", name: "金のブレスレットの重さの目安は？", acceptedAnswer: { "@type": "Answer", text: "細いチェーンブレスレットで3〜5g、テニスブレスレットで5〜10g、喜平ブレスレットで10〜50g、バングルで15〜40gが一般的な重量です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年6月最新】金ブレスレット・バングル買取相場ガイド — 喜平・テニスブレスの価格と高く売るコツ",
    datePublished: "2026-04-13",
    dateModified: "2026-06-11",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年6月最新】金ブレスレット・バングル買取相場ガイド — 喜平・テニスブレスの価格と高く売るコツ",
  description:
    "金ブレスレット・バングルの最新買取相場をK18・K24・K14の純度別・重量別に掲載。喜平ブレスレット・テニスブレスレット・バングルの買取価格目安、壊れていても売れる理由、高く売るコツとおすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金ブレスレットの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ブレスレットの買取価格は業者によって差があります。複数社で比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinBraceletKaitoriPage() {
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
          <li><span className="text-foreground">金ブレスレット買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-brand.png" alt="金ブレスレットの買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年6月最新】金ブレスレット・バングル買取相場ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月11日</p>

        <p>金のブレスレットやバングルは、<strong>ネックレスに次いで買取に持ち込まれることの多い金製品</strong>です。特に喜平ブレスレットやバングルは重量があるため、金価格が高騰している現在、<strong>驚くほどの高額買取</strong>が期待できます。</p>

        <p>「金のブレスレットっていくらで売れる？」「喜平ブレスの相場は？」「壊れたバングルでも売れる？」——この記事では、金ブレスレット・バングルの<strong>種類別・純度別の買取相場、高く売るコツ</strong>を徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金ブレスレット・バングルの純度別・重量別の最新買取相場</li>
          <li>喜平・テニスブレス・バングルなど種類別の特徴と重量目安</li>
          <li>壊れた・変形したブレスレットでも売れる理由</li>
          <li>ブランドブレスレットの査定ポイント</li>
          <li>金ブレスレットを高く売るコツとおすすめ業者</li>
        </ul>

        <CtaBox />

        <GoldSpotPriceCard purity="k18" />

        <WeightPriceTable purities={["k24", "k22", "k18", "k14"]} />


        <h2>金ブレスレットの買取相場一覧（目安・毎日変動）</h2>

        <p>金ブレスレットの買取価格は<strong>「純度」×「重量」</strong>で決まります。</p>

        <div className="table-wrapper">
          
        </div>

        <p>喜平ブレスレットやバングルは<strong>金製品の中でも特に重量がある</strong>ため、買取額も高額になります。特に6面ダブルや8面トリプルの喜平は50g以上のものもあり、K18であれば<strong>50万円超の買取</strong>も珍しくありません。</p>

        <h2>喜平ブレスレットの買取</h2>

        <p>喜平ブレスレットは<strong>金ブレスレットの中で最も高額買取が期待できる製品</strong>です。</p>

        <h3>喜平の種類と特徴</h3>

        <div className="table-wrapper">
          
        </div>

        <p>カルティエのラブブレスレットなどは、<strong>金の素材価値の3〜5倍以上</strong>で取引されることもあります。ブランドブレスレットを売る場合は、金買取専門店だけでなく、<strong>ブランド買取専門店にも必ず見積もり</strong>を取りましょう。</p>

        <h2>金ブレスレットを高く売る5つのコツ</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>
        <p>喜平ブレスレットのような高額品は、業者間の差が数万円になることも。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>の一括査定で効率的に比較しましょう。</p>

        <h3>2. ブランド品は専門店にも見積もりを</h3>
        <p>カルティエやティファニーのブレスレットは、ブランド買取店の方が圧倒的に高値です。金買取店とブランド買取店の両方に見積もりを取りましょう。</p>

        <h3>3. 付属品を揃える</h3>
        <p>保証書、箱、ケース、ドライバー（カルティエのラブブレスレットの場合）があると査定額が大幅にアップします。</p>

        <h3>4. 事前に重量を確認する</h3>
        <p>デジタルスケール（0.1g単位）で重量を測っておくと、査定額の目安がわかり、<strong>不当に安い査定を出す業者を見抜けます</strong>。</p>

        <h3>5. 金相場が高いタイミングを狙う</h3>
        <p>金の買取価格は毎日変動します。<Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金買取相場ページ</Link>で最新価格をチェックし、高いタイミングで売却しましょう。</p>

        <CtaBox />

        <h2>金ブレスレットの買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>
        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数業者に一括査定。喜平ブレスレットのような高額品こそ、比較のメリットが大きいです。</p>

        <h3>買取大吉 — 全国600店舗で即現金化</h3>
        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国600店舗以上。ブレスレットをその場で計量・査定し即現金化。喜平やバングルの買取実績も豊富です。</p>

        <h3>ウリエル — 自宅で完結する出張買取</h3>
        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取に特化。高額な喜平ブレスレットを持ち歩くのが不安な方におすすめです。</p>

        <h3>ティファナ — 3つの方法から選べる</h3>
        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張・宅配の3方法対応。ライフスタイルに合わせて最適な方法を選べます。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "喜平ブレスレットの買取相場はいくらですか？",
              a: "K18の喜平ブレスレットは1gあたり約11,400円が目安です。20gなら約228,000円、50gなら約570,000円です。面数（2面・6面・8面）による価格差はほとんどなく、重量がすべてです。",
            },
            {
              q: "壊れたブレスレットでも売れますか？",
              a: "はい、留め具の破損、チェーン切れ、変形などがあっても問題なく買取可能です。金の買取は素材の重量と純度で査定されるため、破損は価格に影響しません。",
            },
            {
              q: "バングルの中が空洞でも売れますか？",
              a: "はい、中空（ホロー）バングルも買取可能です。ただし、見た目のサイズに対して重量が軽いため、無垢バングルと比べると買取額は低くなります。査定時に正確な重量が計測されます。",
            },
            {
              q: "テニスブレスレットのダイヤも評価されますか？",
              a: "はい、テニスブレスレットのダイヤモンドは金属部分とは別に評価されます。総カラット数と品質（4C）で査定されるため、鑑定書があると正確な評価が可能です。",
            },
            {
              q: "金のブレスレットの重さを自宅で測る方法は？",
              a: "0.1g単位のデジタルスケール（キッチンスケールでも可）で測定できます。Amazonなどで1,000〜2,000円で購入可能です。詳しくは「金の重さの測り方ガイド」をご覧ください。",
            },
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

        <GoldPriceTrend />
        <ExpertQA category="product" />
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="kin-bracelet-kaitori"
          relatedSlugs={["k24-kaitori", "k18-kaitori", "k22-kaitori", "kin-necklace-kaitori", "kin-chain-kaitori", "kin-yubiwa-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori"]}
        />

        <h2>まとめ</h2>

        <p>金のブレスレット・バングルは、ネックレスと並んで<strong>高額買取が期待できる金製品</strong>です。特に喜平ブレスレットやバングルは重量があるため、1本で数十万円の買取額になることも珍しくありません。</p>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日の買取相場」カードと重量別早見表（毎日自動更新）でご確認ください。<strong>20gの喜平ブレスレットなら約23万円</strong>、<strong>50gなら約57万円</strong>の買取が期待できます。壊れていても、変形していても、金の素材価値は変わりません。</p>

        <p>金ブレスレットを少しでも高く売るために、以下のポイントを実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（高額品ほど比較のメリット大）</li>
          <li><strong>ブランド品は金買取とブランド買取の両方に見積もりを取る</strong></li>
          <li><strong>事前にデジタルスケールで重量を確認しておく</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちのブレスレットの価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
