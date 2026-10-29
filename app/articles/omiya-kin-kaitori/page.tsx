import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";
/* live-price-consts */
const _LPP = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const _LPT = goldData.tanaka_official as Record<string, number>;
const LP_DATE = `${Number(goldData.date.split("-")[1])}月${Number(goldData.date.split("-")[2])}日`;
const LP_K18 = Math.round(_LPP.k18).toLocaleString();
const LP_K24 = Math.round(_LPP.k24).toLocaleString();

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "大宮（埼玉）の金買取おすすめ", item: "https://gold-biyori.com/articles/omiya-kin-kaitori/" },
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
      { "@type": "Question", name: "大宮（埼玉）で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "公式の店舗一覧で確認できた範囲では、大宮駅の東口・西口周辺に買取店があります（2026年10月13日確認・店名と営業時間は本文の一覧を参照）。金の買取価格は店ごとに異なるため、複数店で見積もりを取って比べるのがおすすめです。" } },
      { "@type": "Question", name: "大宮（埼玉）の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であればその場で現金を受け取れます。大宮（埼玉）には買取大吉・なんぼやの店舗があります（公式店舗一覧で確認）。来店予約の要否や営業時間は店ごとに異なるため、事前にご確認ください。" } },
      { "@type": "Question", name: "大宮（埼玉）と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、大宮（埼玉）でも東京でもほぼ同じ水準です。ただし、一括査定で全国の業者と比較することをおすすめします。" } },
      { "@type": "Question", name: "埼玉の地方都市からでも金を高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "宅配買取を利用すれば、埼玉のどこからでも全国の高価買取業者に売却できます。ヒカカク！の一括査定なら、大宮（埼玉）の業者だけでなく全国の業者と価格を比較可能です。" } },
      { "@type": "Question", name: "大宮（埼玉）で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエル（公式の出張対応エリアに埼玉県を含む。一部対応できない市町村あり）やティファナ（出張エリアは東京・埼玉・神奈川・千葉の一部地域）が出張買取に対応しています。出張費・査定料は無料です。大宮（埼玉）市外の埼玉エリアも対応可能な場合がありますので、事前にご確認ください。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】大宮（埼玉）の金買取おすすめ業者ガイド — 大宮駅周辺の店舗一覧と相場",
    datePublished: "2026-04-26",
    dateModified: "2026-10-13",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "大宮（埼玉）で金を高く売るならどこがいい？公式で確認した買取店の一覧、買取方法の比較、大宮（埼玉）の金買取相場と高く売るコツを解説します。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年最新】大宮（埼玉）の金買取おすすめ業者ガイド — 大宮駅周辺の店舗一覧と相場",
  description: "大宮（埼玉）で金を高く売るならどこがいい？公式で確認した買取店の一覧、店頭・出張・宅配の方法別比較、大宮（埼玉）の金買取相場と高く売るコツを解説します。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/omiya-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">大宮（埼玉）で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">大宮（埼玉）にも多くの買取業者があります。複数社の査定額を比較することをおすすめします。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function OmiyaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/region-saitama.webp)", ["--subhero-m" as string]: "url(/images/subhero/region-saitama-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">大宮（埼玉）の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="地域の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】大宮（埼玉）の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <p>大宮（埼玉）で金を売りたい人向けのガイドです。各社の公式店舗一覧で確認できた大宮（埼玉）の買取店（店名・住所・営業時間・定休日）と、店頭・出張・宅配の使い分け、今日の金相場をまとめました。</p>

        <p>「大宮（埼玉）で金を売るならどこがいい？」「埼玉の地方からでも高く売れる？」「大宮（埼玉）の買取相場は東京と違う？」——この記事では、大宮（埼玉）での金買取に特化した<strong>店舗一覧と売り方のガイド</strong>をお届けします。</p>

        <p>この記事では、以下の内容をご説明します。</p>
        <ul>
          <li>大宮（埼玉）の金買取マーケットの特徴</li>
          <li>大宮（埼玉）で公式に確認できた買取店</li>
          <li>大宮（埼玉）で金を高く売るためのコツ</li>
          <li>埼玉の地方都市からの売却方法</li>
          <li>大宮（埼玉）の金買取で注意すべきポイント</li>
        </ul>

        <h2>大宮（埼玉）の金買取市場の特徴</h2>

        <h3>大宮（埼玉）の買取店の状況</h3>

        <p>大宮（埼玉）では、買取大吉・なんぼや・ゴールドプラザの店舗を各社の公式店舗一覧で確認できました（2026年10月13日確認）。店名・住所・営業時間は下の一覧のとおりです。</p>

        <h3>大宮（埼玉）の金買取相場（毎日自動更新）</h3>

        <PurityPriceTable />

        <p>金の買取価格は国際相場に連動しているため、大宮（埼玉）でも東京でも基本的に同じ水準です。ただし、<strong>業者間の競争が激しいエリアほど高値が出やすい</strong>傾向があります。</p>

        <CtaBox />

        <h2>大宮（埼玉）で公式に確認できた買取店</h2>

        <ul>
          <li><strong>なんぼや 大宮店</strong>: さいたま市大宮区大門町1-21 町田ビル2F（JR大宮駅 東口北より徒歩1分程度）。11:00〜19:00、定休日なし</li>
          <li><strong>ゴールドプラザ 大宮店</strong>: さいたま市大宮区桜木町1-1-26 石井第2ビル1F。10:00〜19:00、当面の間は毎週水曜定休。金・プラチナ・ダイヤ・宝石・ブランド品・時計などを買取</li>
          <li><strong>買取大吉 大宮西口店</strong>: さいたま市大宮区桜木町1-1-26。10:00〜20:00、年中無休</li>
          <li><strong>買取大吉 コクーンシティ店</strong>: さいたま市大宮区吉敷町4-263-1 コクーン2 1階。10:00〜21:00、年中無休。大宮区には買取大吉がほかに大宮氷川参道店・大宮大成店などがあります</li>
        </ul>

        <p>以前この記事に掲載していた店舗表は、別の都市の記述が混入しており公式で確認できなかったため削除しました。</p>
        <p className="text-xs text-warm-gray">出典：<a href="https://nanboya.com/shop/saitama/" target="_blank" rel="noopener noreferrer nofollow">なんぼや 埼玉県の店舗一覧</a>／<a href="https://goldplaza.jp/shop/omiya" target="_blank" rel="noopener noreferrer nofollow">ゴールドプラザ 大宮店</a>／<a href="https://www.kaitori-daikichi.jp/store/kanto/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 関東の店舗一覧</a>（いずれも2026年10月13日確認）</p>

        <h2>大宮（埼玉）で金を高く売るための5つのコツ</h2>

        <ol>
          <li>
            <strong>複数業者に見積もりを取る</strong>
            <p>大宮（埼玉）には多くの買取業者があります。同じ金製品でも業者によって1gあたり数百円の差が出ることがあるため、<strong>最低3社には見積もり</strong>を取ることをおすすめします。一括査定サービスを使えば効率的です。</p>
          </li>
          <li>
            <strong>大手チェーンと地元専門店を比較する</strong>
            <p>全国チェーンと地元の専門店では価格設定が異なることがあります。両方に見積もりを取ることで、最高値を見つけやすくなります。</p>
          </li>
          <li>
            <strong>宅配買取で全国の業者とも比較する</strong>
            <p>大宮（埼玉）の店舗だけでなく、全国対応の宅配買取や一括査定を利用すれば、より多くの業者と価格を比較できます。ヒカカク！なら全国の業者に一括で見積もり依頼が可能です。</p>
          </li>
          <li>
            <strong>純度を事前に確認しておく</strong>
            <p>K24、K18、K14など、お持ちの金製品の純度を刻印で確認しておくと、査定がスムーズです。刻印がわからない場合は、買取業者がX線分析で無料判定してくれます。</p>
          </li>
          <li>
            <strong>付属品を揃える</strong>
            <p>ブランドジュエリーの場合は保証書・箱があると、査定額が上がる場合があります。金地金（インゴット）の場合は品位証明書が重要です。</p>
          </li>
        </ol>

        <h2>埼玉の地方都市からの売却方法</h2>

        <p>大宮以外の埼玉県内（川越・所沢・川口・春日部・越谷など）にお住まいの方も、以下の方法で高価買取が可能です。</p>

        <ul>
          <li><strong>宅配買取：</strong>全国対応の業者に金製品を郵送して査定。送料無料・キャンセル時の返送料も無料の業者が多い</li>
          <li><strong>一括査定：</strong>ヒカカク！などの一括査定サービスを使えば、全国の業者と価格を比較可能</li>
          <li><strong>大宮（埼玉）への持ち込み：</strong>JR線で大宮駅まで出向き、駅周辺の買取店で店頭査定。高額品の場合は交通費を考慮してもメリットがある</li>
          <li><strong>出張買取：</strong>一部の業者は埼玉の主要都市への出張に対応。事前に確認を</li>
        </ul>

        <h2>大宮（埼玉）で利用できる買取方法の比較</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>メリット</th>
                <th>デメリット</th>
                <th>おすすめの方</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>即日現金化。目の前で計量・査定</td><td>店舗に出向く必要がある</td><td>即日現金が欲しい人</td></tr>
              <tr><td><strong>出張買取</strong></td><td>自宅で完結。量が多い場合も依頼しやすい</td><td>日程調整が必要</td><td>外出が難しい方</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>全国の業者と比較可能</td><td>発送の手間。現金化に数日</td><td>最高値を追求したい人</td></tr>
              <tr><td><strong>一括査定</strong></td><td>複数業者に一度で見積もり</td><td>実物査定まで時間がかかる</td><td>効率的に比較したい人</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4社比較 — 大宮（埼玉）で使えるおすすめ買取サービス</h2>

        <ServiceCaptureGrid />

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>大宮（埼玉）での特徴</th>
                <th>おすすめの方</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>大宮（埼玉）の業者+全国の業者に一括見積もり。最高値が見つかりやすい</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>大宮（埼玉）市内に複数店舗あり。即日現金化可能</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>埼玉エリアで出張対応。出張費・査定料無料</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>店頭/出張（宅配は一時停止中）</td><td>出張は東京・埼玉・神奈川・千葉の一部地域、店舗は東京・埼玉。宅配買取は一時停止中（公式 2026年10月29日確認）。大宮が出張の対象地域かは申し込み時に確認を</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>大宮（埼玉）の金買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "大宮（埼玉）で金買取の価格が高いエリアはどこですか？", a: "公式の店舗一覧で確認できた範囲では、大宮駅の東口・西口周辺に買取店があります（2026年10月13日確認・店名と営業時間は本文の一覧を参照）。金の買取価格は店ごとに異なるため、複数店で見積もりを取って比べるのがおすすめです。" },
            { q: "大宮（埼玉）の金買取で即日現金化できますか？", a: "はい、店頭買取であればその場で現金を受け取れます。大宮（埼玉）には買取大吉・なんぼやの店舗があります（公式店舗一覧で確認）。来店予約の要否や営業時間は店ごとに異なるため、事前にご確認ください。" },
            { q: "大宮（埼玉）と東京で金の買取価格に差はありますか？", a: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、大宮（埼玉）でも東京でもほぼ同じ水準です。ただし、一括査定で全国の業者と比較することをおすすめします。" },
            { q: "埼玉の地方都市からでも金を高く売れますか？", a: "宅配買取を利用すれば、埼玉のどこからでも全国の高価買取業者に売却できます。ヒカカク！の一括査定なら、大宮（埼玉）の業者だけでなく全国の業者と価格を比較可能です。" },
            { q: "大宮（埼玉）で出張買取に対応している業者はありますか？", a: "ウリエル（公式の出張対応エリアに埼玉県を含む。一部対応できない市町村あり）やティファナ（出張エリアは東京・埼玉・神奈川・千葉の一部地域）が出張買取に対応しています。出張費・査定料は無料です。大宮（埼玉）市外の埼玉エリアも対応可能な場合がありますので、事前にご確認ください。" },
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
        <ExpertQA category="region" />
        <NearbyAreas pref="埼玉県" areas={[{ slug: "ageo-kin-kaitori", label: "上尾" }, { slug: "asaka-kin-kaitori", label: "朝霞" }, { slug: "fukaya-kin-kaitori", label: "深谷" }, { slug: "kasukabe-kin-kaitori", label: "春日部" }, { slug: "kawagoe-kin-kaitori", label: "川越" }, { slug: "kawaguchi-kin-kaitori", label: "川口" }, { slug: "koshigaya-kin-kaitori", label: "越谷" }, { slug: "kuki-kin-kaitori", label: "久喜" }]} />
        <RelatedArticles
          currentSlug="omiya-kin-kaitori"
          relatedSlugs={["tokyo-kin-kaitori", "ikebukuro-kin-kaitori", "ginza-kin-kaitori", "yokohama-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi"]}
        />

        <h2>まとめ</h2>

        <p>大宮（埼玉）には公式で確認できる買取店が複数あり、<strong>複数社を比較することで高値売却</strong>が実現できます。</p>

        <p>{LP_DATE}時点、金の買取価格は歴史的な高値圏にあります。K24（純金）は1gあたり約{LP_K24}円前後、K18は約{LP_K18}円前後です（田中貴金属の公表値をもとに純度換算した目安・毎朝自動更新）。</p>

        <p>大宮（埼玉）で金を高く売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>大宮（埼玉）の店舗+全国の業者で相見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>大手チェーンと地元専門店の両方を比較する</strong></li>
          <li><strong>純度・付属品を確認してから査定に出す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で埼玉エリアの買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
