import type { Metadata } from "next";
import { PurityPriceTable } from "@/components/PurityPriceTable";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { NearbyAreas } from "@/components/NearbyAreas";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

function BreadcrumbSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "豊島区の金買取おすすめ", item: "https://gold-biyori.com/articles/toshima-kin-kaitori/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function ArticleSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】豊島区の金買取おすすめ業者ガイド — 相場・方法・高く売るコツ",
    description: "豊島区で金を高く売るならどこ？豊島区の金買取相場、店頭・出張・宅配の方法別比較、東京都で高価買取を狙うコツと注意点を公開情報ベースで解説します。",
    datePublished: "2026-06-05",
    dateModified: "2026-06-05",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

function FaqSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "豊島区で金買取の価格が高い業者の選び方は？", acceptedAnswer: { "@type": "Answer", text: "豊島区では複数の買取業者を比較することが最も重要です。同じ純度・重量でも業者間で1gあたり数百円の差が出ます。まずヒカカク！の一括査定で複数社の見積もりを取り、最高値の業者を選びましょう。" } },
      { "@type": "Question", name: "豊島区で金を即日現金化できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉など大手チェーンは予約不要で対応しており、池袋周辺の店舗で即日現金化が可能です。" } },
      { "@type": "Question", name: "豊島区で出張買取は利用できますか？", acceptedAnswer: { "@type": "Answer", text: "ウリエルやティファナは東京都内で出張買取に対応しています。出張費・査定料は無料で、自宅にいながら金製品の売却が完結します。外出が難しい方や量が多い方に便利です。" } },
      { "@type": "Question", name: "豊島区の金買取で必要な持ち物は？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば査定額アップにつながることもあります。" } },
      { "@type": "Question", name: "豊島区と都心部で金の買取価格に差はありますか？", acceptedAnswer: { "@type": "Answer", text: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を使えば、地域差を気にせず全国の高値業者と取引できます。" } }
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】豊島区の金買取おすすめ業者ガイド — 相場・方法・高く売るコツ",
  description: "豊島区で金を高く売るならどこ？豊島区の金買取相場、店頭・出張・宅配の方法別比較、東京都で高価買取を狙うコツと注意点を公開情報ベースで解説します。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">豊島区で金の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社を比較して最高値を狙いましょう。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function ToshimaKinKaitoriPage() {
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
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">豊島区の金買取おすすめ</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="豊島区の金買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】豊島区の金買取おすすめ業者ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>

        <p>豊島区は池袋を擁する副都心の区です。豊島区は池袋を中心とする副都心の区で、買取店が密集します。巣鴨など高齢層の売却需要も高い地域です。</p>

        <p>「豊島区で金を売るならどこがいい？」「相場はいくら？」——この記事では、豊島区での金買取に役立つ<strong>相場・方法・高く売るコツ</strong>を公開情報ベースでまとめました。</p>
        <ul>
          <li>豊島区の金買取相場（2026年6月時点の目安）</li>
          <li>店頭・出張・宅配・一括査定の方法別比較</li>
          <li>豊島区で少しでも高く売るための実践ポイント</li>
          <li>送客先4社の特徴と選び方</li>
        </ul>

        <h2>豊島区の金買取相場（毎日自動更新）</h2>
        <p>金の地金価格は世界共通の国際相場で決まり、純度と重量で買取額が算出されます。最新の豊島区での買取目安は以下のとおりです（毎日自動更新）。</p>
        <PurityPriceTable />
        <p>金相場は歴史的な高値圏で推移しています。豊島区でも、まとまった量や高純度の金製品は高額査定が期待できます。最新の相場は<Link href="/articles/kin-kaitori-souba/">金買取相場一覧</Link>で確認できます。</p>

        <h2>豊島区の主な金買取エリア</h2>
        <h3>池袋</h3>
        <p><strong>池袋</strong>は豊島区の中心的な買取スポットです。大手買取チェーンや貴金属店が集まり、アクセスも良いため、まず候補に入れたいエリアです。</p>
        <h3>巣鴨</h3>
        <p>巣鴨周辺にも買取店が点在します。池袋が混雑している場合の比較先として、見積もりを取っておくとよいでしょう。</p>
        <h3>目白</h3>
        <p>目白方面でも買取に対応する店舗があります。自宅に近い店舗で査定を受けたい方は、こうした周辺エリアも合わせて検討しましょう。</p>

        <CtaBox />

        <h2>豊島区での金買取方法を比較</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>方法</th><th>おすすめ業者</th><th>メリット</th><th>こんな人に</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>買取大吉</td><td>即日現金化・目の前で計量</td><td>すぐ現金が欲しい人</td></tr>
              <tr><td><strong>出張買取</strong></td><td>ウリエル</td><td>自宅で完結・大量品も楽</td><td>外出が難しい人</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>ティファナ</td><td>全国対応・24時間発送OK</td><td>忙しい人</td></tr>
              <tr><td><strong>一括査定</strong></td><td>ヒカカク！</td><td>複数業者を一度に比較</td><td>最高値で売りたい人</td></tr>
            </tbody>
          </table>
        </div>
        <p>豊島区にお住まいの方は<strong>「一括査定で相場を把握 → 最高値の店舗・出張で売却」</strong>の流れが効率的です。まず<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>も参考にしてください。</p>

        <h2>豊島区で金を高く売る5つのポイント</h2>
        <ol>
          <li><strong>最低3社に見積もりを取る</strong><p>1社だけで決めず、相見積もりで最高値を引き出しましょう。一括査定なら一度で複数社を比較できます。</p></li>
          <li><strong>純度と重量を事前に把握する</strong><p>刻印（K24・K18など）と重さの目安を知っておくと、提示額が適正か判断しやすくなります。<Link href="/articles/kin-omosa-hakarikata/">重さの量り方</Link>も参考に。</p></li>
          <li><strong>付属品を揃える</strong><p>ブランドジュエリーは保証書・箱があると評価が上がる場合があります。</p></li>
          <li><strong>手数料無料の業者を選ぶ</strong><p>査定料・精錬費などを差し引く業者もあります。当サイト掲載の4社はすべて手数料無料です。</p></li>
          <li><strong>相場の高いタイミングを狙う</strong><p>金価格は日々変動します。<Link href="/articles/kin-uru-timing/">売り時の見極め方</Link>もチェックしましょう。</p></li>
        </ol>

        <h2>豊島区の金買取で利用できる送客先4社</h2>
        <p>当サイトでは、東京都でも利用できる以下の4サービスをおすすめしています。</p>
        <ul>
          <li><strong>ヒカカク！</strong>：複数業者へ一括査定。最高値を効率よく探せる</li>
          <li><strong>買取大吉</strong>：全国展開の大手チェーン。予約不要で即日現金化</li>
          <li><strong>ウリエル</strong>：出張買取専門。出張費・査定料すべて無料</li>
          <li><strong>ティファナ</strong>：店頭・出張・宅配の3方式に対応</li>
        </ul>

        <CtaBox />

        <h2>豊島区の金買取 注意点</h2>
        <h3>押し買いに注意</h3>
        <p>アポなしで自宅を訪問し強引に買い取る「押し買い」のトラブルが各地で報告されています。信頼できる業者は必ず事前予約・連絡があります。</p>
        <h3>クーリングオフ制度</h3>
        <p>出張買取には特定商取引法によりクーリングオフ（8日間）が適用されます。店頭持ち込みは適用外のため、高額品は慎重に判断しましょう。詳しくは<Link href="/articles/kin-kaitori-sagi/">買取詐欺・トラブル対策</Link>を参照してください。</p>

        <h2>豊島区の金買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            {
              q: "豊島区で金買取の価格が高い業者の選び方は？",
              a: "豊島区では複数の買取業者を比較することが最も重要です。同じ純度・重量でも業者間で1gあたり数百円の差が出ます。まずヒカカク！の一括査定で複数社の見積もりを取り、最高値の業者を選びましょう。",
            },
            {
              q: "豊島区で金を即日現金化できますか？",
              a: "はい、店頭買取であれば査定後その場で現金を受け取れます。買取大吉など大手チェーンは予約不要で対応しており、池袋周辺の店舗で即日現金化が可能です。",
            },
            {
              q: "豊島区で出張買取は利用できますか？",
              a: "ウリエルやティファナは東京都内で出張買取に対応しています。出張費・査定料は無料で、自宅にいながら金製品の売却が完結します。外出が難しい方や量が多い方に便利です。",
            },
            {
              q: "豊島区の金買取で必要な持ち物は？",
              a: "本人確認書類（運転免許証・マイナンバーカード・パスポートなど）が必須です。古物営業法で買取時の身分証提示が義務付けられています。保証書や箱などの付属品があれば査定額アップにつながることもあります。",
            },
            {
              q: "豊島区と都心部で金の買取価格に差はありますか？",
              a: "純度・重量が同じなら金の地金価値は全国共通ですが、業者の経費や競争状況により提示額に差が出ます。一括査定や宅配買取を使えば、地域差を気にせず全国の高値業者と取引できます。",
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
        <NearbyAreas pref="東京都" areas={[{ slug: "tokyo-kin-kaitori", label: "東京" }, { slug: "adachi-kin-kaitori", label: "足立区" }, { slug: "arakawa-kin-kaitori", label: "荒川区" }, { slug: "bunkyo-kin-kaitori", label: "文京区" }, { slug: "chiyoda-kin-kaitori", label: "千代田区" }, { slug: "chofu-kin-kaitori", label: "調布" }, { slug: "chuo-tokyo-kin-kaitori", label: "中央区" }, { slug: "edogawa-kin-kaitori", label: "江戸川区" }]} />
        <RelatedArticles currentSlug="toshima-kin-kaitori" relatedSlugs={["ikebukuro-kin-kaitori", "tokyo-kin-kaitori", "kin-souzoku-baikyaku", "kin-kaitori-souba", "kin-takaku-uru", "daikichi-vs-nanboya", "kin-kaitori-sagi"]} />

        <DealerComparisonTable
          heading="豊島区の金買取で利用できる主要サービス比較"
          intro="東京都でも利用できる金買取サービスを公式情報で比較しました。"
        />

        <h2>まとめ</h2>
        <p>豊島区で金を高く売るには、<strong>複数業者の比較</strong>が何より重要です。金相場が歴史的高値にある今は、手元の金製品を見直す好機といえます。</p>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金の買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}
