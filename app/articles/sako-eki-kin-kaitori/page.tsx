import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import goldData from "@/data/gold-spot-prices.json";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { NearbyAreas } from "@/components/NearbyAreas";
import RelatedArticles from "@/components/RelatedArticles";
import DealerComparisonTable from "@/components/DealerComparisonTable";

/*
  N3（2026-08-24）駅名クエリの検証用ページ。
  「栄生駅 金 買取」で名古屋ページが 8.4位・0クリックだったため、
  駅名がタイトルに入った専用ページに入れ替わるかを見る目的で作成した。
  ⚠️ 実店舗が公式で確認できた駅だけ作る。店の無い駅は作らない（中身が無いページを量産しない）。
  ⚠️ 掲載する店舗情報は公式店舗ページで確認したもののみ。徒歩分数も公式表記をそのまま使う。
*/

const CHECKED = "2026年8月24日";
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "栄生駅の金買取はどこ？徒歩5分の実在店舗と今日の相場【2026年8月】",
  description:
    "栄生駅（名鉄名古屋本線）から歩ける金買取店を、公式店舗ページで確認した情報だけでまとめました。買取大吉 中村栄生店の住所・営業時間・道順、今日の金相場、名駅を使う場合との比較まで。",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/sako-eki-kin-kaitori/" },
};

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "栄生駅の金買取", item: "https://gold-biyori.com/articles/sako-eki-kin-kaitori/" },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "栄生駅の金買取はどこ？徒歩5分の実在店舗と今日の相場【2026年8月】",
    description:
      "栄生駅から歩ける金買取店を、公式店舗ページで確認した情報だけでまとめた記事です。",
    datePublished: "2026-08-24",
    dateModified: "2026-08-24",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "栄生駅の近くに金買取店はありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: `あります。買取大吉 中村栄生店が名鉄名古屋本線 栄生駅より徒歩5分（愛知県名古屋市中村区佐古前町2番49号）にあります。営業時間は10:00〜18:00、定休日は年中無休（お盆・年末年始を除く）です（${CHECKED}に公式店舗ページで確認）。`,
        },
      },
      {
        "@type": "Question",
        name: "栄生駅の店舗は予約が必要ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "公式店舗ページには無料査定・出張買取の案内があります。予約の要否は店舗により運用が異なるため、来店前に電話（0120-772-001）で確認すると確実です。",
        },
      },
      {
        "@type": "Question",
        name: "車で行けますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "公式店舗ページに無料駐車場・近隣駐車場充実の記載があります。台数までは公表されていないため、まとまった量を持ち込む場合は事前に確認してください。",
        },
      },
      {
        "@type": "Question",
        name: "栄生駅と名古屋駅、どちらで売るのが有利ですか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "金の地金価値は純度と重量で決まるため、駅が違うだけで価値が変わることはありません。違いは比較できる店舗数です。名古屋駅まで1駅（約2分）で大手が複数あるため、相見積もりを取りたい場合は名駅まで出るほうが選択肢は増えます。",
        },
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}

export default function Page() {
  return (
    <>
      <Schemas />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-xs text-warm-gray mb-4">
          <Link href="/">ホーム</Link> ／ <Link href="/articles/">記事一覧</Link> ／ 栄生駅の金買取
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="栄生駅の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">
            栄生駅の金買取はどこ？徒歩5分の実在店舗と今日の相場【2026年8月】
          </h1>
          <p className="text-warm-gray text-sm mb-8">
            店舗情報は{CHECKED}に公式店舗ページで確認／相場は毎朝自動更新（{priceDateJa}時点）
          </p>

          <p>
            栄生（さこう）駅は名鉄名古屋本線の駅で、名古屋駅から1駅です。駅前に買取店が並ぶ立地ではありませんが、
            <strong>徒歩5分の場所に金・貴金属を扱う店舗が1軒あります</strong>。まずそこを押さえ、必要なら名駅まで出て比較する、という順番が現実的です。
          </p>

          <h2>栄生駅から歩ける金買取店</h2>
          <h3>買取大吉 中村栄生店</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr><th>最寄り</th><td>名鉄名古屋本線 栄生駅より徒歩5分</td></tr>
                <tr><th>住所</th><td>愛知県名古屋市中村区佐古前町2番49号</td></tr>
                <tr><th>営業時間</th><td>10:00〜18:00</td></tr>
                <tr><th>定休日</th><td>年中無休（お盆・年末年始を除く）</td></tr>
                <tr><th>電話</th><td>0120-772-001</td></tr>
                <tr><th>設備・対応</th><td>無料査定／出張買取／無料駐車場／近隣駐車場</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            公式店舗ページに道順が写真つきで掲載されています。<strong>改札を出たら高架下（右）へ進み、しばらく直進</strong>。
            さこうデンタルクリニック前の横断歩道を渡り、さらに直進すると右手にあります。
          </p>
          <p className="text-sm text-warm-gray">
            出典：
            <a href="https://www.kaitori-daikichi.jp/store/nakamura-sako/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 中村栄生店 公式店舗ページ</a>
            （{CHECKED}確認）
          </p>

          <h2>今日の金買取相場</h2>
          <p>
            金の価値は純度と重量で決まり、国際相場に連動します。<strong>どの駅で売っても地金としての価値は変わりません</strong>。
            下表は本日の目安です（毎日自動更新）。
          </p>
          <PurityPriceTable />

          <h2>栄生で売るか、名駅まで出るか</h2>
          <p>
            栄生駅から名古屋駅までは名鉄で1駅・約2分です。判断の分かれ目は「比較できる店舗数」だけです。
          </p>
          <div className="table-wrapper">
            <table>
              <thead><tr><th></th><th>栄生で売る</th><th>名駅まで出る</th></tr></thead>
              <tbody>
                <tr><th>店舗数</th><td>徒歩圏に1軒</td><td>複数（地下街に大手が集中）</td></tr>
                <tr><th>相見積もり</th><td>取りにくい</td><td>同じ日に複数社を回れる</td></tr>
                <tr><th>向いている人</th><td>近所で済ませたい・車で行きたい</td><td>金額を比較してから決めたい</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            名駅側の店舗は<Link href="/articles/nagoya-kin-kaitori/">名古屋の金買取（駅別）</Link>にまとめています。
          </p>

          <h2>持ち物と、来店前の確認</h2>
          <ul>
            <li><strong>本人確認書類は必須</strong>です（古物営業法）。運転免許証・マイナンバーカード・パスポートなど。</li>
            <li>保証書・箱などの付属品があれば一緒に持参します。</li>
            <li>営業時間が18時までのため、仕事帰りの来店は時間に注意してください。</li>
            <li>まとまった量を持ち込む場合や、来店が難しい場合は<strong>出張買取</strong>にも対応しています。</li>
          </ul>

          <GoldPriceTrend />

          <h2>よくある質問</h2>
          <h3>栄生駅の近くに金買取店はありますか？</h3>
          <p>あります。買取大吉 中村栄生店が徒歩5分です（{CHECKED}に公式店舗ページで確認）。</p>
          <h3>予約は必要ですか？</h3>
          <p>予約の要否は店舗運用によります。確実なのは来店前に電話（0120-772-001）で確認することです。</p>
          <h3>車で行けますか？</h3>
          <p>公式店舗ページに無料駐車場・近隣駐車場の記載があります。台数は公表されていません。</p>
          <h3>栄生と名駅で買取価格は変わりますか？</h3>
          <p>地金としての価値は変わりません。変わるのは比較できる店舗数です。</p>

          <NearbyAreas
            pref="愛知県"
            areas={[
              { slug: "nagoya-kin-kaitori", label: "名古屋" },
              { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" },
              { slug: "hisayaodori-eki-kin-kaitori", label: "久屋大通駅" },
              { slug: "toyota-kin-kaitori", label: "豊田" },
              { slug: "gifu-kin-kaitori", label: "岐阜" },
            ]}
          />
          <RelatedArticles
            currentSlug="sako-eki-kin-kaitori"
            relatedSlugs={["nagoya-kin-kaitori", "hisayaodori-eki-kin-kaitori", "kin-kaitori-souba", "kin-takaku-uru", "kin-kaitori-tetsuzuki-guide"]}
          />

          <DealerComparisonTable
            heading="栄生・名古屋で利用できる金買取サービス比較"
            intro="愛知県で利用できる金買取サービスを公式情報で比較しました。"
          />

          <h2>まとめ</h2>
          <p>
            栄生駅から歩ける金買取店は<strong>買取大吉 中村栄生店（徒歩5分）</strong>です。
            1軒だけなので相見積もりは取りにくく、金額を比較したい場合は1駅先の名古屋駅を使うのが現実的です。
            地金の価値自体はどこで売っても同じなので、<strong>迷う理由は「比較できるかどうか」だけ</strong>だと考えてください。
          </p>
        </article>
      </div>
    </>
  );
}
