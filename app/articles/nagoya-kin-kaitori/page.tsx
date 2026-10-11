import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import { TodayPriceAnswer } from "@/components/TodayPriceAnswer";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { LocalStores } from "@/components/LocalStores";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
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
      { "@type": "ListItem", position: 3, name: "名古屋の金買取おすすめ", item: "https://gold-biyori.com/articles/nagoya-kin-kaitori/" },
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
      { "@type": "Question", name: "名古屋で金買取の価格が高いエリアはどこですか？", acceptedAnswer: { "@type": "Answer", text: "名古屋駅周辺・栄・大須エリアが金買取の激戦区です。特に大須は宝石・貴金属の専門店が集まるエリアとして知られ、競争による高値が期待できます。ただし店舗間の価格差があるため、複数店での比較が重要です。" } },
      { "@type": "Question", name: "名古屋の金買取で即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉やおたからやなどの大手チェーンは名古屋市内に多数の店舗があり、予約不要で即日現金化が可能です。" } },
      { "@type": "Question", name: "名古屋で出張買取に対応している業者はありますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエル（公式の出張対応エリアに愛知県を含む。一部対応できない市町村あり）など、名古屋で出張買取に対応している業者があります。ティファナの出張エリアは東京・埼玉・神奈川の一部地域のため、愛知県は対象外です。出張費・査定料は無料で、自宅にいながら金の売却が完結します。" } },
      { "@type": "Question", name: "名古屋と東京で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、名古屋でも東京でもほぼ同じ水準です。ただし業者間の競争度の違いにより、1gあたり数十円〜100円程度の差が出る場合があります。" } },
      { "@type": "Question", name: "名古屋の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、買取時には身分証の提示が義務付けられています。付属品（保証書・箱）があれば査定額アップの可能性もあります。" } },
      { "@type": "Question", name: "名鉄名古屋駅や久屋大通駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "名鉄名古屋駅は地下街サンロード・エスカに「なんぼや」が直結しています。久屋大通駅は直下のセントラルパーク地下街に「バイセル」が徒歩1分です。栄・大須にも大手が集中しており、名駅・栄・久屋大通・大須のいずれも駅近で比較できます。" } },
      { "@type": "Question", name: "栄生駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "あります。買取大吉 中村栄生店が名鉄名古屋本線 栄生駅より徒歩5分（名古屋市中村区佐古前町2番49号）で、営業時間は10:00〜18:00・年中無休（お盆・年末年始を除く）です。金・貴金属に加え宝石・ジュエリーも買取品目にあり、公式にはエルメス・シャネル・ルイ・ヴィトン・カルティエ・ティファニーなどが買取強化ブランドとして掲載されています（2026年10月11日に公式店舗ページで確認）。" } },
      { "@type": "Question", name: "本陣駅・ささしまライブ駅・堀田駅の近くに金買取店はありますか？", acceptedAnswer: { "@type": "Answer", text: "本陣駅・ささしまライブ駅・堀田駅は、駅からの徒歩圏に金買取店を確認できていません（2026年10月11日確認）。本陣駅からは東山線で2駅、ささしまライブ駅からはあおなみ線で1駅の名古屋駅に出れば、なんぼや 名古屋サンロード店（近鉄名古屋駅 正面出口より徒歩1分・10:00〜20:00）などが使えます。堀田駅からは名鉄で金山、名城線で矢場町・栄へ。移動が難しければ無料の出張買取・宅配買取で自宅から売れます。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "名古屋の金買取｜栄生・名駅・本陣・ささしまライブなど駅別の実在店舗と営業時間【2026年10月】",
    datePublished: "2026-04-24",
    dateModified: "2026-10-11",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "栄生駅・近鉄/名鉄名古屋駅・栄・矢場町など駅別に、公式サイトで確認した金買取店の住所・駅からの徒歩分・営業時間を一覧に（2026年10月11日確認）。本陣・ささしまライブ・堀田など徒歩圏に店がない駅の選択肢と本日の金相場も。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "名古屋の金買取｜栄生・名駅・本陣・ささしまライブなど駅別の実在店舗と営業時間【2026年10月】",
  description:
    "栄生駅・近鉄/名鉄名古屋駅・栄・矢場町など駅別に、公式サイトで確認した金・ブランド買取店の住所・駅からの徒歩分・営業時間を一覧に（2026年10月11日確認）。本陣・ささしまライブ・堀田など徒歩圏に店がない駅の選択肢と、本日の金相場（毎日更新）も。",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/nagoya-kin-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">名古屋で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">名古屋には多くの買取業者があります。複数社を比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function NagoyaKinKaitoriPage() {
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
          <li><span className="text-foreground">名古屋の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="地域の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">名古屋の金買取｜栄生・名駅・本陣・ささしまライブなど駅別の実在店舗と営業時間【2026年10月】</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-5 md:p-6 mb-8 not-prose">
          <p className="font-bold text-navy text-lg mb-3">まず結論：名古屋で金を売るなら</p>
          <ul className="space-y-2 text-sm md:text-base">
            <li>⏱️ <strong>すぐ売りたい・駅近で探す</strong> → 名駅（なんぼや サンロード/エスカ）・栄・久屋大通・大須に大手が集中。<a href="#stations" className="text-accent-dark underline">駅別に探す</a></li>
            <li>💰 <strong>1円でも高く売りたい</strong> → 複数社の相見積もりが鉄則。まず<a href="/articles/ikkatsu-satei-hikaku/" className="text-accent-dark underline">一括査定で比較</a>し、地金は大須の専門店も検討。</li>
            <li>🧾 <strong>手数料で損したくない</strong> → 宅配返送料・振込手数料は業者差あり。<a href="/articles/kin-kaitori-tesuryo-hikaku/" className="text-accent-dark underline">手数料8社比較</a>で無料の業者を選ぶ。</li>
          </ul>
        </div>

        <TodayPriceAnswer purity="k18" />

        <p>名古屋は中部地方最大の金買取マーケットです。名駅（名古屋駅周辺）・栄・大須を中心に多くの買取業者が集まり、<strong>東京・大阪に次ぐ激戦区</strong>として知られています。</p>

        <p>「名古屋で金を売るならどこがいい？」「大須と栄どちらが高く買い取ってもらえる？」「名古屋の買取相場は東京と差がある？」——この記事では、名古屋での金買取に特化した<strong>エリア別・業者別の完全ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>名古屋の金買取マーケットの特徴</li>
          <li>名駅・栄・大須のエリア別おすすめ買取業者</li>
          <li>名古屋で金を高く売るためのコツ</li>
          <li>店頭・出張・宅配の方法別メリット</li>
          <li>名古屋の金買取で注意すべきポイント</li>
        </ul>

        <h2>名古屋の金買取市場の特徴</h2>

        <p>名古屋は日本三大都市の一つであり、金・貴金属の買取市場も活発です。以下のような特徴があります。</p>

        <h3>東京・大阪に次ぐ第3の買取マーケット</h3>

        <p>名古屋は買取業者の数が多く、特に<strong>名駅・栄・大須の3大エリア</strong>に集中しています。業者間の競争が激しいため、利用者にとっては<strong>価格交渉がしやすい</strong>環境です。</p>

        <p>また、名古屋は東海地方一円（愛知・岐阜・三重・静岡）の中心都市であるため、周辺県からの利用者も多く、買取量が大きいぶん業者も積極的な価格提示をする傾向にあります。</p>

        <h3>名古屋ならではの「大須」エリア</h3>

        <p>名古屋の大須は、秋葉原（東京）・日本橋（大阪）と並ぶ日本三大電気街の一つですが、実は<strong>宝石・貴金属の専門店も多数集まるエリア</strong>です。池田商店をはじめとする老舗貴金属店が営業しており、地金売買に慣れた専門店ならではの<strong>相場に近い適正価格</strong>での買取が期待できます。</p>

        <h3>名古屋の金買取相場（毎日自動更新）</h3>

        <PurityPriceTable />

        <p>名古屋の買取相場は東京・大阪とほぼ同水準です。金の買取価格は国際相場（ロンドン金価格）と為替レートに連動するため、地域差はほとんどありません。ただし、<strong>業者ごとのマージン（手数料）の差</strong>によって数百円程度の違いが出ます。</p>

        <LocalStores citySlug="nagoya-kin-kaitori" cityLabel="名古屋" pref="愛知県" />

        <CtaBox />

        <h2>名古屋のエリア別おすすめ金買取業者</h2>

        <h3>名駅エリア（名古屋駅周辺）</h3>

        <p>名古屋駅周辺は<strong>大手買取チェーンが密集</strong>しているエリアです。アクセスが良く、仕事帰りやショッピングのついでに立ち寄れる利便性が魅力です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>大手チェーンが集中、比較がしやすい</td></tr>
              <tr><td><strong>アクセス</strong></td><td>JR・名鉄・近鉄・地下鉄が集まるターミナル</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>大手の標準的な買取価格</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>駅近で手軽に査定したい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>名駅エリアでは、なんぼや名古屋サンロード店が地下街に直結しておりアクセスが抜群です。おたからや、買取大吉、大黒屋なども名古屋駅徒歩圏内に店舗を構えています。</p>

        <h3>栄エリア</h3>

        <p>栄は名古屋最大の繁華街であり、<strong>百貨店やブランドショップが立ち並ぶ</strong>エリアです。ブランドジュエリーの買取に強い業者が多いのが特徴です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>ブランド買取に強い業者が多い</td></tr>
              <tr><td><strong>アクセス</strong></td><td>地下鉄栄駅・矢場町駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>ブランドジュエリーはプラス査定が期待できる</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>ティファニーやカルティエなどのブランド金製品を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>栄エリアでは、コメ兵本店やブランドオフ名古屋栄店など、ブランド品と貴金属の両方を評価できる業者が充実しています。K18やプラチナのブランドジュエリーは、素材価値に加えてブランド価値も上乗せされるため、ブランド買取に強い業者に見積もりを取ることが重要です。</p>

        <h3>大須エリア</h3>

        <p>大須は名古屋の下町的な商店街で、<strong>貴金属の専門店や質屋が多い</strong>のが特徴です。地金（インゴット・金貨）の売買に慣れた業者が多く、<strong>素材買取で最高値</strong>が出やすいエリアです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>特徴</th>
                <th>詳細</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>エリアの強み</strong></td><td>貴金属専門店が多く、相場に近い価格で買取</td></tr>
              <tr><td><strong>アクセス</strong></td><td>地下鉄大須観音駅・上前津駅から徒歩圏内</td></tr>
              <tr><td><strong>価格傾向</strong></td><td>素材買取では名古屋市内最高値の可能性</td></tr>
              <tr><td><strong>こんな人に</strong></td><td>地金・インゴット・重量のある金製品を売りたい人</td></tr>
            </tbody>
          </table>
        </div>

        <p>大須エリアには池田商店や質ウエダ、質セブンなど、<strong>名古屋の老舗貴金属店</strong>が営業しています。これらの店舗は貴金属問屋としての歴史が長く、地金の売買に精通しているため、大手チェーンよりも<strong>1gあたり数十円〜100円程度高い</strong>買取価格を提示してくれるケースがあります。</p>

        <h2 id="stations">名古屋の駅別に金買取店を探す</h2>

        <p>「栄生駅」「近鉄名古屋駅」など<strong>最寄り駅から探したい</strong>方向けに、駅ごとに徒歩圏内の実在店舗をまとめました。店舗が見当たらない駅は、出張買取・宅配買取を利用する選択肢を正直に案内します（掲載は各社公式店舗ページで確認した実在店のみ）。</p>

        <h3>駅別早見表：最寄りの金買取店・駅からの徒歩分・営業時間</h3>
        <p>住所・アクセス・営業時間は、各社の公式店舗ページの表記をそのまま載せています（<strong>2026年10月11日確認</strong>）。祝日や施設の休業日で変わることがあるため、来店前に公式ページでご確認ください。</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>駅</th>
                <th>店舗（住所）</th>
                <th>駅からのアクセス（公式表記）</th>
                <th>営業時間・定休日</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>栄生駅</strong>（名鉄）</td><td>買取大吉 中村栄生店（中村区佐古前町2番49号）</td><td>名鉄名古屋本線 栄生駅より徒歩5分</td><td>10:00〜18:00／年中無休（お盆・年末年始除く）</td></tr>
              <tr><td><strong>近鉄名古屋駅・名鉄名古屋駅</strong></td><td>なんぼや 名古屋サンロード店（中村区名駅4-7-25先 ナゴヤ地下街サンロード）</td><td>近鉄名古屋駅 正面出口より徒歩1分／名鉄名古屋駅 中央改札口より徒歩3分／東山線 名古屋駅 南改札より徒歩1分程度</td><td>10:00〜20:00／施設に準ずる</td></tr>
              <tr><td><strong>JR名古屋駅</strong></td><td>なんぼや 名古屋エスカ店（中村区椿町6-9 エスカ地下街）</td><td>JR名古屋駅 中央口より徒歩1分程度</td><td>10:00〜20:00／エスカ定休日に準ずる</td></tr>
              <tr><td><strong>久屋大通駅</strong></td><td>バイセル 名古屋栄セントラルパーク店（中区錦3-15-13 セントラルパーク地下街B1F）</td><td>桜通線・名城線 久屋大通駅 南改札より徒歩1分</td><td>月〜土 10:00〜21:00／日・祝 10:00〜20:00（<Link href="/articles/hisayaodori-eki-kin-kaitori/" className="text-accent-dark underline">久屋大通駅の詳しい記事</Link>）</td></tr>
              <tr><td><strong>栄駅</strong></td><td>なんぼや メルサ栄店（中区栄3-4-5 メルサ栄本店4F）</td><td>栄駅 S7a・S7b出口より徒歩1分程度</td><td>10:00〜20:00（最終受付19:30）／施設に準ずる</td></tr>
              <tr><td><strong>栄駅</strong></td><td>大黒屋 質名古屋栄買取センター（中区栄3-7-9 新鏡栄ビル2F）</td><td>サカエチカ S7a出口より徒歩1分／栄駅 8番出口より徒歩3分</td><td>10:30〜19:30／定休日なし</td></tr>
              <tr><td><strong>栄駅</strong></td><td>堀田商事 栄地下店（中区栄3-5-12先 栄地下街南一番街）</td><td>名城線 栄駅 南改札口／東山線 栄駅 中改札口 すぐ</td><td>10:00〜19:00／年中無休</td></tr>
              <tr><td><strong>矢場町駅</strong></td><td>おたからや 名古屋本店（中区栄3-27-7）</td><td>名城線 矢場町駅 5出入口より徒歩4分</td><td>10:00〜19:00／年中無休（年末年始除く）</td></tr>
              <tr><td><strong>丸の内駅</strong></td><td>買取大吉 名古屋錦店（中区錦2-6-25）</td><td>桜通線 丸の内駅より徒歩4分</td><td>10:00〜19:00／年中無休</td></tr>
              <tr><td><strong>本陣駅・ささしまライブ駅・堀田駅</strong></td><td>徒歩圏の店舗は確認できず</td><td>名駅・金山などへ移動するか、出張・宅配買取（下記）</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">出典：<a href="https://www.kaitori-daikichi.jp/store/nakamura-sako/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 中村栄生店</a>／<a href="https://nanboya.com/gold-kaitori/shop/nagoya-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや 名古屋サンロード店（エスカ店も掲載）</a>／<a href="https://buysell-kaitori.com/store/nagoya/" target="_blank" rel="noopener noreferrer nofollow">バイセル 名古屋栄セントラルパーク店</a>／<a href="https://nanboya.com/gold-kaitori/shop/melsa-sakae-brandshop/" target="_blank" rel="noopener noreferrer nofollow">なんぼや メルサ栄店</a>／<a href="https://kaitori.e-daikoku.com/metal/gold-sakae/" target="_blank" rel="noopener noreferrer nofollow">大黒屋 質名古屋栄買取センター</a>／<a href="https://horita78.co.jp/company/shop/" target="_blank" rel="noopener noreferrer nofollow">堀田商事 店舗案内</a>／<a href="https://www.otakaraya.jp/shop/nagoya-honten/" target="_blank" rel="noopener noreferrer nofollow">おたからや 名古屋本店</a>／<a href="https://www.kaitori-daikichi.jp/store/nagoya-nishiki/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 名古屋錦店</a>（いずれも2026年10月11日確認）</p>

        <h3>栄生駅</h3>
        <p>栄生駅から歩ける実店舗があります。<strong>買取大吉 中村栄生店</strong>（名鉄名古屋本線 栄生駅より徒歩5分／名古屋市中村区佐古前町2番49号）。営業時間 10:00〜18:00、年中無休（お盆・年末年始を除く）。買取品目に金・貴金属と宝石・ジュエリーがあり、無料査定・出張買取・無料駐車場に対応しています。改札を出て高架下を右へ進み、直進した右手です。</p>
        <p><strong>ブランド品・宝石も同じ店で査定できます。</strong>公式店舗ページには「買取強化ブランド」として、ロレックス・オメガなどの時計、エルメス・シャネル・ルイ・ヴィトン・ディオール・グッチ、ジュエリーではカルティエ・ティファニー・ハリー・ウィンストン・ブルガリ・ヴァン クリーフ＆アーペルが挙がっています。金のブランドジュエリーは素材（金の重さ）とブランド価値の両方で見てもらえるので、栄生で「金」と「ブランド」をまとめて売りたい場合はここが最寄りです。<a href="https://www.kaitori-daikichi.jp/store/nakamura-sako/" target="_blank" rel="noopener noreferrer nofollow">出典：買取大吉 公式店舗ページ</a>（2026年10月11日確認）</p>
        <p><Link href="/articles/sako-eki-kin-kaitori/" className="text-accent-dark underline">→ 栄生駅の金買取（実在店舗・道順・営業時間）</Link></p>

        <h3>名鉄名古屋駅・名古屋駅（名駅）・近鉄名古屋駅</h3>
        <p>名駅は地下街に大手が直結しており、名鉄・JR・近鉄いずれの利用でも徒歩圏です。<strong>なんぼや 名古屋サンロード店</strong>（ナゴヤ地下街サンロード／中村区名駅4-7-25先）は、公式表記で<strong>近鉄名古屋駅 正面出口より徒歩1分・名鉄名古屋駅 中央改札口より徒歩3分</strong>、営業10:00〜20:00です。JR側なら<strong>なんぼや 名古屋エスカ店</strong>（中村区椿町6-9 エスカ地下街／JR名古屋駅 中央口より徒歩1分程度・10:00〜20:00）。金・プラチナ・貴金属に対応しています（2026年10月11日確認）。<a href="https://nanboya.com/gold-kaitori/shop/nagoya-brandshop/" target="_blank" rel="noopener noreferrer nofollow">出典：なんぼや公式</a></p>

        <h3>本陣駅・ささしまライブ駅</h3>
        <p>この2駅は、<strong>駅からの徒歩圏に金買取店を確認できていません</strong>。各社の公式店舗ページを確認しましたが、この2駅を最寄りとして案内している店舗はありませんでした（2026年10月11日再確認）。</p>
        <p>現実的な選択肢は次の2つです。<strong>①名駅へ移動する</strong>——本陣駅からは東山線で2駅（亀島の次が名古屋）、ささしまライブ駅からはあおなみ線で1駅です。名駅なら上の早見表のとおり、なんぼや（サンロード・エスカ）が駅直結の地下街で10:00〜20:00営業です。<strong>②無料の出張買取・宅配買取を使う</strong>——ウリエルは公式の出張対応エリアに愛知県を含めています（一部対応できない市町村あり）。宅配買取なら全国から利用できます。重量のある地金やデリケートな品は、むしろ出張の方が安全です。<a href="/articles/tentou-vs-takuhai/" className="text-accent-dark underline">店頭・出張・宅配の違いはこちら</a></p>

        <h3>久屋大通駅</h3>
        <p>久屋大通駅は駅直下のセントラルパーク地下街に<strong>バイセル 名古屋栄セントラルパーク店</strong>（南改札より徒歩1分・月〜土は21時まで）があります。道順・営業時間・周辺の選択肢は専用記事にまとめています。近くでは<strong>買取大吉 名古屋錦店</strong>（桜通線 丸の内駅より徒歩4分・10:00〜19:00・年中無休）も使えます。</p>
        <p><Link href="/articles/hisayaodori-eki-kin-kaitori/" className="text-accent-dark underline font-bold">→ 久屋大通駅の金・ブランド買取はこちら（南改札徒歩1分・21時まで）</Link></p>

        <h3>栄駅・栄町駅・矢場町駅</h3>
        <p><strong>なんぼや メルサ栄店</strong>（栄駅 S7a・S7b出口より徒歩1分程度／中区栄3-4-5 メルサ栄本店4F／10:00〜20:00）、<strong>大黒屋 質名古屋栄買取センター</strong>（栄駅8番出口 徒歩3分／中区栄3-7-9 新鏡栄ビル2F／10:30〜19:30）、栄地下街の<strong>堀田商事 栄地下店</strong>（栄駅 南改札口・中改札口すぐ／10:00〜19:00・年中無休）が代表です。矢場町駅側には<strong>おたからや 名古屋本店</strong>（矢場町駅5出入口より徒歩4分／10:00〜19:00）もあります（2026年10月11日確認）。ブランドジュエリーは素材＋ブランドの二重評価が期待できます。<a href="https://nanboya.com/gold-kaitori/shop/melsa-sakae-brandshop/" target="_blank" rel="noopener noreferrer nofollow">出典：なんぼや公式</a></p>

        <h3>大須（大須観音駅・上前津駅）</h3>
        <p>下町の商店街で貴金属専門店・質屋が多く、地金は名古屋市内で最高値が出やすいエリア。<strong>なんぼや 名古屋大須店</strong>（大須観音駅 徒歩5分／中区大須2-30-6）、<strong>大黒屋ブランド館 名古屋大須店</strong>（上前津駅 徒歩4分／中区大須3-26-40）が徒歩圏です。<a href="https://kaitori.e-daikoku.com/metal/gold-nagoya/" target="_blank" rel="noopener noreferrer nofollow">出典：大黒屋公式</a></p>

        <h3>金山駅</h3>
        <p>金山駅は総合駅で、大手チェーンの駅至近店は確認できていませんが、地場の買取専門店<strong>「さてい屋」（金山総合駅 東口 徒歩2分）</strong>が金・プラチナの買取に対応しています。査定料・手数料は無料、予約不要で身分証を持参すれば来店買取が可能です（休業日あり・詳細は<a href="http://www.sateiya.net/" target="_blank" rel="noopener noreferrer nofollow">公式サイト</a>でご確認ください）。より多くの業者を比較したい場合は、栄・大須の大手店舗へ足を延ばすか、下記の<strong>出張・宅配買取</strong>で相見積もりを取るのが確実です。</p>

        <h3>堀田駅・妙音通駅（瑞穂区・名古屋市南部）</h3>
        <p>堀田駅（名鉄名古屋本線・地下鉄名城線）と妙音通駅（名城線）の周辺は住宅エリアで、駅の徒歩圏に金買取店は確認できていません（2026年10月11日確認）。なお店名が似ている<strong>堀田商事 瑞穂本店</strong>（瑞穂区玉水町2-22-2／質・買取10:00〜19:00・日曜定休）は、公式に最寄駅の記載がなく、堀田駅から歩ける距離かは確認できていません。来店する場合は地図で道のりを確かめてください。<a href="https://horita78.co.jp/company/shop/" target="_blank" rel="noopener noreferrer nofollow">出典：堀田商事 店舗案内</a></p>
        <p>駅から出る場合は、堀田駅から名鉄で2駅（神宮前の次）の<strong>金山駅</strong>、または名城線で<strong>矢場町（おたからや 名古屋本店）・栄</strong>まで出るのが現実的です。移動が難しい場合は、ウリエル（公式の出張対応エリアに愛知県を含む・一部対応できない市町村あり）などの出張買取や宅配買取が使えます。地金・インゴットなど重量物は特に出張が安全です。</p>

        <h2>名古屋で金を高く売る5つのコツ</h2>

        <ol>
          <li>
            <strong>最低3社に見積もりを取る</strong>
            <p>名古屋は名駅・栄・大須に買取業者が密集しているため、1日で複数店舗を回ることが可能です。同じ金製品でも業者によって1gあたり数百円の差が出ます。30gのK18ネックレスなら数千円〜1万円以上の差になり得ます。</p>
          </li>
          <li>
            <strong>大須の専門店にも見積もりを取る</strong>
            <p>大手チェーンだけでなく、大須エリアの貴金属専門店にも査定を依頼しましょう。特に重量のあるインゴットや喜平チェーンなど地金系の製品は、専門店の方が高値をつけることが多いです。</p>
          </li>
          <li>
            <strong>ブランドジュエリーは栄のブランド買取店にも持ち込む</strong>
            <p>ティファニー、カルティエ、ブルガリなどのK18ジュエリーは、金の素材価値に加えてブランド価値が上乗せされます。栄エリアのブランド買取専門店と金買取専門店の両方で見積もりを取り、高い方に売却しましょう。</p>
          </li>
          <li>
            <strong>付属品を揃えて持参する</strong>
            <p>保証書、鑑定書、専用ケース、購入レシートがあれば、特にブランド品の場合に査定額アップにつながります。ギャランティカードの有無で買取価格が数万円変わることもあります。</p>
          </li>
          <li>
            <strong>相場が高いときに売る</strong>
            <p>{LP_DATE}時点、金価格は歴史的な高値水準にあります。K24で1gあたり約{LP_K24}円、K18で約{LP_K18}円です（田中貴金属の公表値をもとに純度換算した目安・毎朝自動更新）。価格に納得できるなら、今が売却の好機と言えます。</p>
          </li>
        </ol>

        <CtaBox />

        <h2>名古屋の金買取 — 方法別比較</h2>

        <p>名古屋での金買取は、店頭・出張・宅配・一括査定の4つの方法があります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>即日現金化</th>
                <th>自宅完結</th>
                <th>価格交渉</th>
                <th>おすすめ業者</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>可能</td><td>不可</td><td>しやすい</td><td>買取大吉、おたからや</td></tr>
              <tr><td><strong>出張買取</strong></td><td>可能（当日〜翌日）</td><td>可能</td><td>対面で可能</td><td>ウリエル</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>不可（数日〜1週間）</td><td>可能</td><td>難しい</td><td>ティファナ</td></tr>
              <tr><td><strong>一括査定</strong></td><td>不可</td><td>可能</td><td>複数社比較で高値</td><td>ヒカカク！</td></tr>
            </tbody>
          </table>
        </div>

        <h3>名古屋で店頭買取するなら</h3>

        <p>名古屋市内には買取大吉、おたからや、大黒屋、なんぼやなど大手チェーンが多数出店しています。<strong>名駅・栄・大須の3エリアを1日で回る</strong>ことも十分可能な距離感なので、店頭買取で複数店を比較するのに適した都市です。</p>

        <h3>名古屋で出張買取を利用するなら</h3>

        <p>ウリエルは公式の出張対応エリアに愛知県を含めています（一部対応できない市町村あり）。ティファナの出張エリアは東京・埼玉・神奈川の一部地域のため、愛知県は対象外です。出張費・査定料・キャンセル料はすべて無料です。「大量の金製品がある」「重くて持ち運びが大変」「忙しくて店舗に行く時間がない」という方には出張買取がおすすめです。</p>

        <h2>名古屋の金買取で注意すべきポイント</h2>

        <h3>悪質な訪問買取に注意</h3>

        <p>「不用品を買い取ります」と突然訪問してくる業者には注意が必要です。不用品の回収を名目に訪問し、「金やアクセサリーはありませんか？」と貴金属を相場より大幅に安い価格で買い取ろうとする悪質なケースが報告されています。</p>

        <p>名古屋市消費生活センターも「なごや見守り情報」（令和6年10月25日）で、不用品の買い取りの電話に応じたところ、来訪した業者に「貴金属はないか」と言われて指輪やネックレスまで買い取られた事例を紹介し、同様の相談が後を絶たないとしています（<a href="https://www.kaigo-wel.city.nagoya.jp/view/kaigo/docs/2024111500028/file_contents/nagoyamimamorijyouhou_huyouhin.pdf" target="_blank" rel="noopener noreferrer">名古屋市消費生活センター「不用品を処分するつもりが、貴金属まで買い取られた！」PDF</a>・2026年10月9日確認）。もし訪問買取で取引してしまった場合は、<strong>クーリングオフ制度</strong>（法律で決められた書面を受け取った日から8日以内。自分で出張買取を頼んだ場合も対象）を利用して契約を解除できます。</p>

        <h3>手数料の確認</h3>

        <p>一部の業者では「査定料」「手数料」「精錬加工費」などの名目で買取金額から差し引くケースがあります。買取大吉・ウリエル・ティファナは<strong>査定料・手数料無料</strong>を公式に明記しています。ヒカカク！は一括査定の利用が無料で、手数料・返送料は申し込み先の業者ごとに確認してください。</p>

        <h3>200万円超の取引は支払調書が必要</h3>

        <p>1回の取引で金地金・インゴットの売却額が200万円を超える場合、業者は税務署に支払調書を提出する義務があります。マイナンバーの提示も必要ですので、事前に準備しておきましょう。</p>

        <h2>4社比較 — 名古屋で金買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>名古屋エリアの特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>名古屋を含む全国の買取業者を一括比較。最高値が簡単にわかる</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>名古屋市内に複数店舗。名駅・栄エリアでアクセス良好</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>愛知県は出張対応エリア（一部市町村を除く）。出張費・査定料すべて無料</td>
                <td>自宅で完結したい</td>
              </tr>
              <tr>
                <td><strong>ティファナ</strong></td>
                <td>出張/店頭/宅配</td>
                <td>3つの方法から選べる柔軟対応</td>
                <td>方法を選びたい</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>名古屋の金買取 よくある質問</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "名古屋で金買取の価格が高いエリアはどこですか？",
              a: "名駅・栄・大須の3エリアが名古屋の金買取激戦区です。特に大須は貴金属専門店が集まるエリアで、相場に近い価格での買取が期待できます。ただし店舗ごとに差があるため、3エリアを回って比較するのがベストです。",
            },
            {
              q: "名古屋の金買取で即日現金化できますか？",
              a: "はい、店頭買取であればその場で現金を受け取れます。買取大吉やおたからやなど大手チェーンは名古屋市内に多数の店舗があり、予約不要で即日対応しています。出張買取も当日〜翌日の現金化が可能です。",
            },
            {
              q: "名古屋と東京で金の買取価格に差はありますか？",
              a: "基本的に大きな差はありません。金の買取価格は国際相場に連動しているため、名古屋でも東京でもほぼ同じ水準です。ただし業者ごとのマージン（手数料）の違いにより、1gあたり数十円〜100円程度の差が出ることはあります。",
            },
            {
              q: "名古屋で出張買取に対応している業者はありますか？",
              a: "ウリエルは公式の出張対応エリアに愛知県を含めています（一部対応できない市町村あり）。ティファナの出張エリアは東京・埼玉・神奈川の一部地域のため、愛知県は対象外です。出張費・査定料・キャンセル料はすべて無料なので、気軽に利用できます。",
            },
            {
              q: "名古屋で金を売る際に必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法により、金額にかかわらず身分証の提示が義務付けられています。また、200万円を超える取引の場合はマイナンバーの提示も必要です。",
            },
            {
              q: "名鉄名古屋駅や久屋大通駅の近くに金買取店はありますか？",
              a: "名鉄名古屋駅は地下街サンロード・エスカに「なんぼや」が直結しています。久屋大通駅は直下のセントラルパーク地下街に「バイセル」が徒歩1分です。栄・大須にも大手が集中しており、名駅・栄・久屋大通・大須のいずれも駅近で比較できます。",
            },
            {
              q: "栄生駅の近くに金買取店はありますか？",
              a: "あります。買取大吉 中村栄生店が名鉄名古屋本線 栄生駅より徒歩5分（名古屋市中村区佐古前町2番49号）で、営業時間は10:00〜18:00・年中無休（お盆・年末年始を除く）です。金・貴金属に加え宝石・ジュエリーも買取品目にあり、公式にはエルメス・シャネル・ルイ・ヴィトン・カルティエ・ティファニーなどが買取強化ブランドとして掲載されています（2026年10月11日に公式店舗ページで確認）。",
            },
            {
              q: "本陣駅・ささしまライブ駅・堀田駅の近くに金買取店はありますか？",
              a: "本陣駅・ささしまライブ駅・堀田駅は、駅からの徒歩圏に金買取店を確認できていません（2026年10月11日確認）。本陣駅からは東山線で2駅、ささしまライブ駅からはあおなみ線で1駅の名古屋駅に出れば、なんぼや 名古屋サンロード店（近鉄名古屋駅 正面出口より徒歩1分・10:00〜20:00）などが使えます。堀田駅からは名鉄で金山、名城線で矢場町・栄へ。移動が難しければ無料の出張買取・宅配買取で自宅から売れます。",
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
        <ExpertQA category="region" />
        <NearbyAreas pref="愛知県" areas={[{ slug: "aichi-ken-kin-kaitori", label: "愛知県" }, { slug: "anjo-kin-kaitori", label: "安城" }, { slug: "handa-kin-kaitori", label: "半田" }, { slug: "ichinomiya-kin-kaitori", label: "一宮" }, { slug: "kariya-kin-kaitori", label: "刈谷" }, { slug: "kasugai-kin-kaitori", label: "春日井" }, { slug: "komaki-kin-kaitori", label: "小牧" }, { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" }]} />
        <RelatedArticles
          currentSlug="nagoya-kin-kaitori"
          relatedSlugs={["osaka-kin-kaitori", "kyoto-kin-kaitori", "tokyo-kin-kaitori", "sendai-kin-kaitori", "k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "daikichi-vs-nanboya", "kin-kaitori-sagi", "toyokawa-kin-kaitori"]}
        />

        <h2>まとめ</h2>

        <p>名古屋は名駅・栄・大須の3大エリアに買取業者が集中しており、<strong>1日で複数店舗を回って比較できる</strong>利便性の高い都市です。</p>

        <p>{LP_DATE}時点、金価格は歴史的な高値水準にあり、K24（純金）で1gあたり約{LP_K24}円前後です（田中貴金属の公表値をもとに純度換算した目安・毎朝自動更新）。売却を検討している方にとっては好機と言えるでしょう。</p>

        <p>名古屋で金を高く売るためのポイントをまとめます。</p>

        <ol>
          <li><strong>名駅・栄・大須の3エリアで最低3社に見積もりを取る</strong></li>
          <li><strong>地金系は大須の専門店、ブランド品は栄のブランド買取店にも見積もりを取る</strong></li>
          <li><strong>手数料無料の大手業者を選び、悪質な訪問買取には応じない</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で名古屋の買取業者の価格を比較してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
