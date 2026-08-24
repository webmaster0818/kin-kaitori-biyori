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
  「久屋大通駅 金 買取」で名古屋ページが 9.5位・0クリックだったため、
  駅名がタイトルに入った専用ページに入れ替わるかを見る目的で作成した。
  ⚠️ 掲載する店舗情報は公式店舗ページで確認したもののみ。
  ⚠️ 買取大吉 名古屋錦店は公式の最寄り表記が「丸の内駅 徒歩4分」。
     久屋大通駅からの徒歩分数は公式に無いので、勝手に計算せず「1駅」と書く。
*/

const CHECKED = "2026年8月24日";
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "久屋大通駅の金買取はどこ？南改札徒歩1分の実在店舗と今日の相場【2026年8月】",
  description:
    "久屋大通駅（桜通線・名城線）から歩ける金買取店を、公式店舗ページで確認した情報だけでまとめました。南改札徒歩1分の店舗の営業時間・道順、今日の金相場、栄・錦エリアとの使い分けまで。",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gold-biyori.com/articles/hisayaodori-eki-kin-kaitori/" },
};

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "久屋大通駅の金買取", item: "https://gold-biyori.com/articles/hisayaodori-eki-kin-kaitori/" },
    ],
  };
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "久屋大通駅の金買取はどこ？南改札徒歩1分の実在店舗と今日の相場【2026年8月】",
    description: "久屋大通駅から歩ける金買取店を、公式店舗ページで確認した情報だけでまとめた記事です。",
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
        name: "久屋大通駅の近くに金買取店はありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: `あります。バイセル 名古屋栄セントラルパーク店が桜通線・名城線 久屋大通駅の南改札より徒歩1分（愛知県名古屋市中区錦3-15-13 セントラルパーク地下街B1F 22番店舗）です。営業時間は月〜土10:00〜21:00、日祝10:00〜20:00（施設の営業時間に準じます）（${CHECKED}に公式店舗ページで確認）。`,
        },
      },
      {
        "@type": "Question",
        name: "地下街から地上に出ずに行けますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "行けます。久屋大通駅の地下2階・南改札を出てセントラルパークに入り直進、てんぷら松月の手前を左に曲がった場所にあります。雨の日でも濡れずに移動できます。",
        },
      },
      {
        "@type": "Question",
        name: "夜でも査定してもらえますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "月〜土は21:00まで、日祝は20:00まで営業しています（施設の営業時間に準じます）。名古屋市内の金買取店としては遅い時間まで対応しているほうです。",
        },
      },
      {
        "@type": "Question",
        name: "ほかに久屋大通から行ける店はありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "錦エリアに買取大吉 名古屋錦店（中区錦2-6-25／10:00〜19:00・年中無休）があります。ただし公式が案内している最寄りは桜通線 丸の内駅から徒歩4分で、久屋大通駅からは桜通線で1駅です。",
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
          <Link href="/">ホーム</Link> ／ <Link href="/articles/">記事一覧</Link> ／ 久屋大通駅の金買取
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="久屋大通駅の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">
            久屋大通駅の金買取はどこ？南改札徒歩1分の実在店舗と今日の相場【2026年8月】
          </h1>
          <p className="text-warm-gray text-sm mb-8">
            店舗情報は{CHECKED}に公式店舗ページで確認／相場は毎朝自動更新（{priceDateJa}時点）
          </p>

          <p>
            久屋大通駅（桜通線・名城線）は、駅の真下にセントラルパーク地下街が広がっています。
            <strong>改札から地上に出ずに行ける金買取店が1軒</strong>あり、雨の日でも濡れずに持ち込めるのがこの駅の利点です。
          </p>

          <h2>久屋大通駅から歩ける金買取店</h2>
          <h3>バイセル 名古屋栄セントラルパーク店</h3>
          <div className="table-wrapper">
            <table>
              <tbody>
                <tr><th>最寄り</th><td>桜通線・名城線 久屋大通駅 南改札より徒歩1分</td></tr>
                <tr><th>住所</th><td>〒460-0003 愛知県名古屋市中区錦3-15-13 セントラルパーク地下街 B1F 22番店舗</td></tr>
                <tr><th>営業時間</th><td>月〜土 10:00〜21:00／日・祝 10:00〜20:00（施設の営業時間に準じます）</td></tr>
                <tr><th>電話</th><td>0120-638-164</td></tr>
                <tr><th>設備</th><td>完全個室／トイレあり</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            公式の道順は<strong>「久屋大通駅の地下2階、南改札口を出てCentral Parkに入り直進 → てんぷら松月の手前を左」</strong>です。
            地下だけで完結します。
          </p>
          <p className="text-sm text-warm-gray">
            出典：
            <a href="https://buysell-kaitori.com/store/nagoya/" target="_blank" rel="noopener noreferrer nofollow">バイセル 名古屋栄セントラルパーク店 公式店舗ページ</a>
            （{CHECKED}確認）
          </p>

          <h3>錦エリアまで足を延ばす場合</h3>
          <p>
            <strong>買取大吉 名古屋錦店</strong>（愛知県名古屋市中区錦2-6-25／10:00〜19:00・年中無休）もあります。
            ただし<strong>公式が案内している最寄りは「桜通線 丸の内駅から徒歩4分」</strong>で、久屋大通駅からの徒歩分数は公式に記載がありません。
            久屋大通駅からは桜通線で1駅です。相見積もりを取りたい場合の2軒目として使えます。
          </p>
          <p className="text-sm text-warm-gray">
            出典：
            <a href="https://www.kaitori-daikichi.jp/store/nagoya-nishiki/" target="_blank" rel="noopener noreferrer nofollow">買取大吉 名古屋錦店 公式店舗ページ</a>
            （{CHECKED}確認）
          </p>

          <h2>今日の金買取相場</h2>
          <p>
            金の価値は純度と重量で決まります。<strong>駅が違っても地金としての価値は変わりません</strong>。下表は本日の目安です（毎日自動更新）。
          </p>
          <PurityPriceTable />

          <h2>この駅で売る利点は「時間」と「天候」</h2>
          <ul>
            <li><strong>21時まで（日祝20時まで）</strong>営業しているため、仕事帰りに寄れます。名古屋市内では遅いほうです。</li>
            <li><strong>地下街で完結する</strong>ので、雨の日でも荷物を濡らさずに運べます。</li>
            <li><strong>完全個室</strong>のため、金額のやり取りを人に聞かれにくい環境です。</li>
          </ul>
          <p>
            一方、徒歩1分圏は1軒だけです。同じ日に複数社を回りたい場合は、栄・大須方面まで含めて動くことになります。
            エリア全体は<Link href="/articles/nagoya-kin-kaitori/">名古屋の金買取（駅別）</Link>と
            <Link href="/articles/nagoya-sakae-kin-kaitori/">名古屋・栄の金買取</Link>にまとめています。
          </p>

          <h2>持ち物と、来店前の確認</h2>
          <ul>
            <li><strong>本人確認書類は必須</strong>です（古物営業法）。運転免許証・マイナンバーカード・パスポートなど。</li>
            <li>保証書・箱などの付属品があれば一緒に持参します。</li>
            <li>営業時間は施設（セントラルパーク地下街）の営業時間に準じます。年末年始などは変わる可能性があります。</li>
          </ul>

          <GoldPriceTrend />

          <h2>よくある質問</h2>
          <h3>久屋大通駅の近くに金買取店はありますか？</h3>
          <p>あります。バイセル 名古屋栄セントラルパーク店が南改札より徒歩1分です（{CHECKED}に公式店舗ページで確認）。</p>
          <h3>地下街から地上に出ずに行けますか？</h3>
          <p>行けます。地下2階の南改札を出てセントラルパークに入り直進、てんぷら松月の手前を左です。</p>
          <h3>夜でも査定してもらえますか？</h3>
          <p>月〜土は21時、日祝は20時までです（施設の営業時間に準じます）。</p>
          <h3>ほかに久屋大通から行ける店は？</h3>
          <p>錦エリアの買取大吉 名古屋錦店があります。公式の最寄り表記は丸の内駅 徒歩4分で、久屋大通からは1駅です。</p>

          <NearbyAreas
            pref="愛知県"
            areas={[
              { slug: "nagoya-kin-kaitori", label: "名古屋" },
              { slug: "nagoya-sakae-kin-kaitori", label: "名古屋・栄" },
              { slug: "sako-eki-kin-kaitori", label: "栄生駅" },
              { slug: "toyota-kin-kaitori", label: "豊田" },
              { slug: "gifu-kin-kaitori", label: "岐阜" },
            ]}
          />
          <RelatedArticles
            currentSlug="hisayaodori-eki-kin-kaitori"
            relatedSlugs={["nagoya-kin-kaitori", "nagoya-sakae-kin-kaitori", "sako-eki-kin-kaitori", "kin-kaitori-souba", "kin-takaku-uru"]}
          />

          <DealerComparisonTable
            heading="久屋大通・名古屋で利用できる金買取サービス比較"
            intro="愛知県で利用できる金買取サービスを公式情報で比較しました。"
          />

          <h2>まとめ</h2>
          <p>
            久屋大通駅から歩ける金買取店は<strong>バイセル 名古屋栄セントラルパーク店（南改札徒歩1分）</strong>です。
            <strong>21時まで営業・地下街で完結・完全個室</strong>という3点が、この駅を選ぶ実質的な理由になります。
            相見積もりを取りたい場合は、桜通線で1駅の錦エリアや栄まで足を延ばしてください。
          </p>
        </article>
      </div>
    </>
  );
}
