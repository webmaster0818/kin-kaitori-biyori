import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import { TodayPriceAnswer, formatDateJa } from "@/components/TodayPriceAnswer";
import goldData from "@/data/gold-spot-prices.json";

const k14Price = goldData.purity_buyback_estimate_per_g.k14;
const k18Price = goldData.purity_buyback_estimate_per_g.k18;
const k24Price = goldData.purity_buyback_estimate_per_g.k24;
const k10Price = goldData.purity_buyback_estimate_per_g.k10;
const [, priceMonth, priceDay] = goldData.date.split("-").map(Number);
const priceDateJa = formatDateJa(goldData.date);

const todayFaq = {
  q: "今日のK14（14金）の1g買取価格はいくらですか？",
  a: `本日（${priceDateJa}時点）のK14買取相場の目安は1gあたり${k14Price.toLocaleString()}円です（毎朝自動更新）。田中貴金属公表の店頭買取価格をもとに算出した参考値で、実際の査定額は業者・状態により異なります。お手持ちの重量での概算は、本ページの重量別早見表とグラム計算機でご確認ください。`,
};

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "K14買取ガイド", item: "https://gold-biyori.com/articles/k14-kaitori/" },
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
      { "@type": "Question", name: todayFaq.q, acceptedAnswer: { "@type": "Answer", text: todayFaq.a } },
      { "@type": "Question", name: "K14はK18・K24と比べてどのくらいの価格水準ですか？", acceptedAnswer: { "@type": "Answer", text: `K14はK18（1gあたり約${k18Price.toLocaleString()}円）の約78%、K24（約${k24Price.toLocaleString()}円）の約58%の価格水準です（${priceDateJa}時点の目安・毎朝自動更新）。` } },
      { "@type": "Question", name: "K14とK18の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "K14は金の純度が58.5%（14/24）、K18は75%（18/24）です。K14はK18より金の含有率が低いぶん買取価格も低くなりますが、硬度が高く傷つきにくいという特徴があります。アメリカではK14が主流です。" } },
      { "@type": "Question", name: "K14のアクセサリーは売れますか？", acceptedAnswer: { "@type": "Answer", text: `はい、K14の刻印がある製品は買取可能です。K14でも金の含有率が58.5%あるため、素材としての価値は十分にあります。1gあたり約${k14Price.toLocaleString()}円（${priceDateJa}時点の目安）なので、5gのネックレスなら約${(5 * k14Price).toLocaleString()}円の買取目安になります。` } },
      { "@type": "Question", name: "K14の刻印が「585」と書いてあるのですが？", acceptedAnswer: { "@type": "Answer", text: "「585」はK14の千分率表記です。金の含有率が585/1000（58.5%）であることを示しています。K14と同じ意味です。海外製品に多い表記方法です。" } },
      { "@type": "Question", name: "K14の金歯は買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、K14の金歯も買取可能です。歯科用金合金にはK14〜K20程度の純度が使われています。金歯は清潔にした状態で持ち込めば、金の素材価値で査定してもらえます。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `K14（14金）の買取相場 今日1g${k14Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】585刻印・製品別の査定額も`,
    datePublished: "2026-04-13",
    dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: `14金（K14）の買取相場 今日1g${k14Price.toLocaleString()}円【${priceMonth}月${priceDay}日更新】585刻印・製品別の査定額も`,
  description: `本日（${priceMonth}月${priceDay}日）の14金（K14・純度58.5%）買取相場は1gあたり${k14Price.toLocaleString()}円（毎朝自動更新）。K14とK18の違い、ネックレス・指輪・ブレスレットの製品別査定額、585刻印の意味、高く売るポイントとおすすめ買取業者4社を徹底解説。`,
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">K14製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">K14でも金価格高騰により高額買取が期待できます。複数社で比較しましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function K14KaitoriPage() {
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
          <li><span className="text-foreground">K14買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">14金（K14）買取相場 — 今日の1g価格と高く売る方法</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <TodayPriceAnswer purity="k14" />

        <p>K14（14金）は、<strong>純度58.5%</strong>の金合金です。日本ではK18が主流ですが、<strong>アメリカやヨーロッパではK14が最も一般的な金製品の純度</strong>として広く流通しています。海外旅行で購入したジュエリーや、ブランドアクセサリーにK14が使われていることも多いです。</p>

        <p>「K14のアクセサリーって売れるの？」「14金の相場は今いくら？」「K18より安いけど売る価値はある？」——この記事では、K14に特化した<strong>買取相場・刻印の見方・高く売るコツ</strong>を徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>K14（14金）の最新買取相場（1gあたりの価格）</li>
          <li>K14とK18・K10の買取価格の違い</li>
          <li>K14の刻印の種類と585の意味</li>
          <li>ネックレス・指輪・ブレスレットの製品別買取目安</li>
          <li>K14を高く売るためのおすすめ買取業者</li>
        </ul>

        <CtaBox />

        <GoldSpotPriceCard purity="k14" />

        <div id="weight-table">
          <WeightPriceTable purities={["k14"]} />
        </div>


        <h2>K14（14金）とは — 純度58.5%の金合金</h2>

        <p>K14は<strong>金の純度が58.5%（585/1000）</strong>の合金です。残りの41.5%は銀、銅、パラジウム、亜鉛などが混ぜられています。24分の14、つまり全体の約59%が金で構成されています。</p>

        <h3>K14の特徴</h3>

        <div className="table-wrapper">
          <table>
            <tbody>
              <tr><th>純度</th><td>58.5%（14/24・585/1000）</td></tr>
              <tr><th>主な刻印</th><td>K14・14K・585</td></tr>
              <tr><th>主な用途</th><td>アメリカ・ヨーロッパ製ジュエリー、ホワイト/ピンクゴールド製品</td></tr>
              <tr><th>性質</th><td>硬度が高く傷つきにくい。金の含有率が低いぶん買取単価はK18より低い</td></tr>
            </tbody>
          </table>
        </div>


        <p>K14の買取価格は<strong>K24の約58%</strong>の水準です。K18と比べると1gあたり約{(k18Price - k14Price).toLocaleString()}円安くなりますが、K10と比べると約{(k14Price - k10Price).toLocaleString()}円高く（いずれも{priceDateJa}時点の目安）、<strong>金の価格高騰により十分な売却価値</strong>があります。</p>

        
        <p>「K14だから大した金額にならないのでは？」と思われがちですが、金価格が歴史的高値の現在、<strong>10gのK14ネックレスでも約{Math.round((10 * k14Price) / 10000)}万円前後</strong>（{priceDateJa}時点の目安）の買取が期待できます。タンスに眠っているK14製品があれば、一度査定に出す価値は十分にあります。</p>

        <h3>K14買取価格の推移</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>時期</th>
                <th>K14の1gあたり買取目安</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>2020年4月</td><td>約3,700円</td><td>コロナショック後の金価格上昇期</td></tr>
              <tr><td>2022年4月</td><td>約4,800円</td><td>ロシア・ウクライナ情勢で上昇</td></tr>
              <tr><td>2024年4月</td><td>約7,200円</td><td>円安・地政学リスクで高騰</td></tr>
            </tbody>
          </table>
        </div>

        <p>2020年4月（約3,700円）と比較すると<strong>約{Math.round((k14Price / 3700) * 10) / 10}倍</strong>に上昇しています（{priceDateJa}時点）。K14は純度が低めのため「売ってもあまり値段がつかない」という時代もありましたが、現在の金価格高騰により、K14でも十分な買取額が得られる状況です。</p>

        <CtaBox />

        <h2>K14の刻印の見分け方</h2>

        <p>K14製品には以下のような刻印が打刻されています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>刻印</th>
                <th>意味</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K14</strong></td><td>14金（純度58.5%）</td><td>日本での一般的な表記</td></tr>
              <tr><td><strong>14K</strong></td><td>14金（純度58.5%）</td><td>アメリカなど海外で多い</td></tr>
              <tr><td><strong>585</strong></td><td>千分率表記（58.5%）</td><td>ヨーロッパで多い</td></tr>
              <tr><td><strong>14KT</strong></td><td>14カラット</td><td>アメリカで使用</td></tr>
              <tr><td><strong>14ct</strong></td><td>14カラット</td><td>イギリスなどで使用</td></tr>
              <tr><td><strong>K14WG</strong></td><td>14金ホワイトゴールド</td><td>白色の金合金</td></tr>
              <tr><td><strong>K14PG</strong></td><td>14金ピンクゴールド</td><td>ピンク色の金合金</td></tr>
              <tr><td><strong>K14YG</strong></td><td>14金イエローゴールド</td><td>黄色（通常の金色）</td></tr>
            </tbody>
          </table>
        </div>

        <h3>K14GPとK14GFに注意</h3>

        <p>刻印に「GP」や「GF」が含まれている場合は注意が必要です。</p>

        <ul>
          <li><strong>K14GP（Gold Plated）:</strong> K14の金が薄くコーティングされたメッキ製品。金の含有量が非常に少ないため、ほとんどの業者で<strong>買取不可</strong>または数十円程度</li>
          <li><strong>K14GF（Gold Filled）:</strong> K14の金を圧着した製品。GPよりは金の量が多いが、それでも買取価格は<strong>非常に低い</strong></li>
        </ul>

        <p>「K14」と「K14GP」「K14GF」は全く別物です。刻印をよく確認し、<strong>GP・GFがついていないことを確かめて</strong>から売却に出しましょう。判断が難しい場合は、買取業者に持ち込めばX線分析で正確に判定してもらえます。</p>

        <h2>K14のカラー別特徴と買取価格</h2>

        <p>K14にはイエローゴールド（YG）、ホワイトゴールド（WG）、ピンクゴールド（PG）の3色があります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>カラー</th>
                <th>合金の組成</th>
                <th>買取価格への影響</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K14YG（イエロー）</strong></td><td>金58.5% + 銀・銅</td><td>標準的な買取価格</td></tr>
              <tr><td><strong>K14WG（ホワイト）</strong></td><td>金58.5% + パラジウム・銀</td><td>パラジウム含有で若干高い場合あり</td></tr>
              <tr><td><strong>K14PG（ピンク）</strong></td><td>金58.5% + 銅多め</td><td>標準的な買取価格</td></tr>
            </tbody>
          </table>
        </div>

        <p>いずれのカラーも<strong>金の含有率は同じ58.5%</strong>なので、基本的な買取価格は変わりません。ただし、K14WGにはパラジウム（貴金属の一種）が含まれているため、パラジウムの価値も評価してくれる業者であれば若干高値になる場合があります。</p>

        <h2>K14製品の種類別買取ポイント</h2>

        <h3>ネックレス・チェーン</h3>

        <p>K14のネックレスは海外ブランド品に多く見られます。チェーンの重量がそのまま買取価格に直結するため、<strong>太くて重いチェーンほど高額</strong>になります。チェーン切れでも買取可能です。</p>

        <h3>指輪・リング</h3>

        <p>K14の指輪はアメリカンブランドに多いです。宝石がセットされている場合は、<strong>金の素材価値 + 宝石の価値</strong>で査定されます。特にダイヤモンド付きの場合は、金買取とブランド買取の両方に見積もりを取ることをおすすめします。</p>

        <h3>ハワイアンジュエリー（バングル・リング）</h3>

        <p>ハワイで購入したバングルやリングはK14が一般的です。ハワイアンジュエリーは<strong>彫刻の美しさにデザイン価値</strong>がある場合があり、ブランドジュエリー買取業者に持ち込むとプレミアムがつくことがあります。</p>

        <h3>万年筆のペン先</h3>

        <p>14Kと刻印された万年筆のペン先（ニブ）は金でできています。ペン先だけでも買取可能ですが、<strong>重量が1g前後と非常に軽い</strong>ため、単品では数千円程度の買取額になります。複数のペン先をまとめて売ると効率的です。</p>

        <h3>金歯</h3>

        <p>歯科治療で使われる金合金にはK14〜K20程度の純度が使われています。K14の金歯も買取可能で、歯科用金合金は<strong>不純物が少ないクリーンな金</strong>のため、適正な価格で買い取ってもらえます。</p>

        <h2>K14 vs K18 vs K10 — 純度別の買取価格比較</h2>

        <p>「14金は18金・10金とどれくらい買取価格が違うのか」を、本日の相場に基づく<strong>重量別の買取目安</strong>で比較します（毎朝自動更新）。K14の地金価値はK18の約78%、K10の約1.4倍が目安です。</p>

        <WeightPriceTable purities={["k18", "k14", "k10"]} />

        <p>刻印（585・K14等）で純度を確認したら、<Link href="/kin-kaitori-keisanki/">買取計算機</Link>で概算を出しておくと、店頭での査定額が妥当かをその場で判断できます。</p>

        <h2>14金の「価格」— 購入時の値段と買取価格が大きく違う理由</h2>

        <p>「14金 価格」で調べると、購入時の販売価格と買取価格の差に驚く方が多いはずです。この差には明確な理由があります。</p>

        <ul>
          <li><strong>販売価格には加工賃・デザイン料・ブランド料が含まれる</strong>: ジュエリーの店頭価格は、地金価値に加えて製作コストや流通マージンが上乗せされています。</li>
          <li><strong>買取価格は原則「地金価値」ベース</strong>: 一般的な買取店の査定は「重量×純度×当日の金相場」が基本です。購入時に支払ったデザイン料などは、原則として買取価格には反映されません。</li>
          <li><strong>例外はブランド品・宝石付き</strong>: 有名ブランドのジュエリーや宝石付き製品は、地金価値に加えてブランド・宝石の価値が別途評価される場合があります。該当する場合はブランド買取に強い業者も比較しましょう。</li>
        </ul>

        <p>つまり14金を売るときに比較すべきは「買ったときの値段」ではなく、<strong>上の表の地金価値目安に対して各社がどこまで近い金額を提示するか</strong>です。この見方を知っているだけで、安すぎる査定を避けられます。</p>

        <h2>K14を高く売る5つのポイント</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>

        <p>K14の買取価格は業者によって1gあたり数百円の差が出ます。20gのハワイアンバングルなら、1gあたり200円の差で<strong>4,000円もの差額</strong>になります。必ず3社以上に見積もりを取りましょう。</p>

        <h3>2. ブランド品は金買取とブランド買取の両方に査定を</h3>

        <p>ティファニーやケイト・スペードなどのブランドK14ジュエリーは、<strong>金の素材価値だけでなくブランド価値</strong>も評価されます。金買取専門店とブランド買取店の両方に見積もりを取り、高い方に売却しましょう。</p>

        <h3>3. 付属品を揃える</h3>

        <p>保証書、箱、ケース、購入レシートなどがあると査定額がアップする場合があります。特にブランドジュエリーは付属品の有無で<strong>数千円〜数万円の差</strong>がつくことも。</p>

        <h3>4. まとめ売りで交渉する</h3>

        <p>K14のアクセサリーが複数ある場合は、まとめて持ち込むと<strong>トータルの査定額を上乗せ</strong>してもらえる場合があります。「全部まとめて売るので少し上乗せしてもらえますか？」と交渉してみましょう。</p>

        <h3>5. 金相場が高いタイミングを意識する</h3>

        <p>金の買取価格は国際相場と為替に連動して毎日変動します。<Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金買取相場ページ</Link>で最新の相場を確認し、高いタイミングで売却しましょう。</p>

        <CtaBox />

        <h2>K14の買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>

        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数の買取業者に一括で査定を依頼できるサービスです。K14の買取価格は業者によって差が大きいため、一括査定のメリットが特に大きい純度です。</p>

        <ul>
          <li>複数業者の査定価格を一度に比較</li>
          <li>K14・K14WG・K14PGなど全カラー対応</li>
          <li>査定料・利用料すべて無料</li>
        </ul>

        <h3>買取大吉 — 全国600店舗以上で即現金化</h3>

        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国に600店舗以上を展開。K14の刻印がある製品はもちろん、刻印なしの製品もX線分析で純度を測定してくれます。</p>

        <h3>ウリエル — 自宅で完結する出張買取</h3>

        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取に特化。自宅にいながらプロの査定を受けられます。大量のアクセサリーをまとめて売りたい場合に便利です。</p>

        <h3>ティファナ — 3つの方法から選べる</h3>

        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張・宅配の3方法に対応。忙しくて店舗に行けない方でも、宅配や出張で気軽に査定を依頼できます。</p>

        <h2>K14の売却に関する税金</h2>

        <p>K14の金製品を売却して利益が出た場合、<strong>譲渡所得</strong>として課税対象になります。年間50万円の特別控除があるため、売却益が50万円以内なら実質非課税です。</p>

        <p>K14は1gあたりの単価がK24やK18より低いため、<strong>少量の売却であれば50万円の控除内に収まるケースが多い</strong>です。ただし、大量に売却する場合は確定申告が必要になる可能性があります。</p>

        <p>詳しくは<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">金買取の税金・確定申告ガイド</Link>をご確認ください。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            todayFaq,
            {
              q: "K14のアクセサリーは売れますか？",
              a: `はい、K14でも金の含有率が58.5%あるため、素材としての価値は十分にあります。金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日のK14買取相場」と重量別早見表（毎朝自動更新）でご確認ください。10gのネックレスなら約${(10 * k14Price).toLocaleString()}円（${priceDateJa}時点の目安）の買取額になります。`,
            },
            {
              q: "K14GPとK14の違いは？",
              a: "K14は金の含有率が58.5%の無垢（ソリッド）の金合金です。K14GP（Gold Plated）は薄い金メッキを施した製品で、金の含有量が非常に少なく、ほとんどの業者で買取不可です。刻印に「GP」や「GF」がついていないか確認してください。",
            },
            {
              q: "ハワイで買ったK14のバングルは売れますか？",
              a: `はい、問題なく売れます。ハワイアンジュエリーのバングルはK14が一般的で、重量もあるため高額買取が期待できます。20gのバングルなら約${(20 * k14Price).toLocaleString()}円前後（${priceDateJa}時点の目安）です。ブランド名（マイレ、フィリップリカードなど）が入っている場合は、ブランド価値も加味した査定を受けられる業者がおすすめです。`,
            },
            {
              q: "K14とK10、どちらが高く売れますか？",
              a: `K14の方が高く売れます。K14は金含有率58.5%、K10は41.7%なので、同じ重量ならK14の方が約40%高い買取価格です。例えば10gの場合、K14は約${(10 * k14Price).toLocaleString()}円、K10は約${(10 * k10Price).toLocaleString()}円（${priceDateJa}時点の目安）です。`,
            },
            {
              q: "K14の万年筆のペン先も買取できますか？",
              a: `はい、「14K」と刻印された万年筆のペン先は金でできており、買取可能です。ただし、ペン先1本の重量は1g前後と軽いため、単品の買取額は約${k14Price.toLocaleString()}円前後（重量1gの場合・${priceDateJa}時点の目安）です。複数のペン先がある場合はまとめて売ると効率的です。`,
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
        <ExpertQA category="purity" />
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
          <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット買取（喜平・テニス）</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="k14-kaitori"
          relatedSlugs={["k24-kaitori", "k22-kaitori", "kinseido-kaitori-guide", "kin-necklace-kaitori", "kin-yubiwa-kaitori", "kin-bracelet-kaitori", "kin-nobebo-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori"]}
        />

        <h2>まとめ</h2>

        <p>K14（14金）は純度58.5%の金合金で、アメリカンブランドジュエリーやハワイアンジュエリーに多く使われています。日本ではK18が主流のため「K14はあまり高く売れない」と思われがちですが、<strong>金価格が歴史的高値にある現在は、K14でも十分な買取価格</strong>が得られます。</p>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日のK14買取相場」と重量別早見表（毎朝自動更新）でご確認ください。2020年4月（約3,700円/g）と比べて約{Math.round((k14Price / 3700) * 10) / 10}倍に上昇しています。10gのK14ネックレスなら約{Math.round((10 * k14Price) / 10000)}万円前後（{priceDateJa}時点の目安）の買取が期待でき、売却を検討する価値は十分にあります。</p>

        <p>K14を少しでも高く売るために、以下の3つを必ず実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>ブランド品はブランド買取専門店にも見積もりを取る</strong></li>
          <li><strong>付属品（保証書・箱・レシート）を揃えて査定に出す</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのK14製品の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
