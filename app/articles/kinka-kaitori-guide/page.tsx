import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金貨買取ガイド", item: "https://gold-biyori.com/articles/kinka-kaitori-guide/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年7月】金貨買取ガイド｜メイプルリーフ・イーグル・カンガルー・記念金貨の相場と売り方",
    description: "メイプルリーフ金貨・イーグル金貨・カンガルー金貨・天皇陛下記念金貨の買取を種類別に解説。純度と純金量の見方、地金価値の計算方法、プレミアが付くケース、高く売るコツまで1ページで網羅。",
    datePublished: "2026-07-03",
    dateModified: "2026-07-03",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金貨の買取価格はどうやって決まりますか？", acceptedAnswer: { "@type": "Answer", text: "地金型金貨は「純金量×当日の金相場」が基準です。メイプルリーフ・カンガルーなど1オンス金貨は約31.1gの純金量で計算されます。最新の1gあたり相場は本ページの「本日の買取相場」カード（毎日自動更新）でご確認ください。" } },
      { "@type": "Question", name: "イーグル金貨は22金ですが純金の金貨より安くなりますか？", acceptedAnswer: { "@type": "Answer", text: "1オンス版のイーグル金貨は総重量約33.93gのK22合金ですが、純金を約31.1g含みます。査定は純金量ベースのため、同じ1オンスの純金金貨とほぼ同水準で評価されます。" } },
      { "@type": "Question", name: "天皇陛下記念金貨は額面で売るべきですか？", acceptedAnswer: { "@type": "Answer", text: "多くの場合、金の地金価値が額面を大きく上回ります。例えば御在位60年記念10万円金貨は純金20g、御即位記念10万円金貨は純金30gを含み、現在の金相場では地金価値だけで額面を超えます。" } },
      { "@type": "Question", name: "金貨はケースから出すと安くなりますか？", acceptedAnswer: { "@type": "Answer", text: "地金型金貨は素材価値中心のため傷の影響は小さいですが、記念金貨は傷や指紋がコレクター価値の減額要因になり得ます。できるだけ元のケース・カプセルのまま、素手で触らず査定に出しましょう。" } },
      { "@type": "Question", name: "1/10オンスなど小さい金貨も売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい。1/20oz〜1/2ozなどの小型金貨も重量に応じて評価されます。複数枚ある場合はまとめて査定に出すと効率的です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

export const metadata: Metadata = {
  title: "【2026年7月】金貨買取ガイド｜メイプルリーフ・イーグル・カンガルー・記念金貨の相場と売り方",
  description: "メイプルリーフ金貨・イーグル金貨・カンガルー金貨・天皇陛下記念金貨の買取を種類別に解説。純度と純金量の見方、地金価値の計算方法、プレミアが付くケース、高く売るコツまで1ページで網羅。",
  alternates: { canonical: "https://gold-biyori.com/articles/kinka-kaitori-guide/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金貨の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">金貨は高額取引になるため、複数社の比較が特に重要です。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinkaKaitoriGuidePage() {
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
            <li><span className="text-foreground">金貨買取ガイド</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="金貨の買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年7月】金貨買取ガイド — メイプルリーフ・イーグル・カンガルー・記念金貨</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

          <p>金貨の買取価格は、基本的に<strong>「純金量×当日の金相場」</strong>で決まります。この記事では、代表的な地金型金貨である<strong>メイプルリーフ金貨・イーグル金貨・カンガルー金貨</strong>と、日本の<strong>記念金貨（天皇陛下御在位記念など）</strong>の買取知識を種類別に1ページへまとめました。</p>

          <p>この記事を読めば以下のことがわかります。</p>
          <ul>
            <li>金貨の種類ごとの純度・重量と評価基準</li>
            <li>地金価値の計算方法（本日のK24相場から算出）</li>
            <li>記念金貨にプレミアが付くケース</li>
            <li>保管状態が価格に与える影響</li>
            <li>金貨を高く・安全に売るためのコツ</li>
          </ul>

          <GoldSpotPriceCard purity="k24" />

          <WeightPriceTable purities={["k24"]} />

          <h2>主要な金貨の種類と評価基準</h2>

          <p>投資用に発行される「地金型金貨」は、金の素材価値に連動した価格で取引されます。世界各国の造幣局が発行しており、流通量が多いため<strong>売却しやすい（流動性が高い）</strong>のが特徴です。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金貨名</th>
                  <th>発行国</th>
                  <th>純度</th>
                  <th>重量（1oz版）</th>
                  <th>評価の基準</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>メイプルリーフ金貨</strong></td><td>カナダ</td><td>K24（99.99%）</td><td>約31.1g</td><td>純金量×金相場</td></tr>
                <tr><td><strong>イーグル金貨</strong></td><td>アメリカ</td><td>K22（91.67%）</td><td>約33.93g（純金約31.1g含有）</td><td>純金量×金相場</td></tr>
                <tr><td><strong>カンガルー金貨</strong></td><td>オーストラリア</td><td>K24（99.99%）</td><td>約31.1g</td><td>純金量×金相場</td></tr>
                <tr><td><strong>天皇陛下記念金貨</strong></td><td>日本</td><td>K24</td><td>10g〜30g（種類による）</td><td>地金価値＋プレミア</td></tr>
              </tbody>
            </table>
          </div>

          <p>1gあたりの最新相場は上の<strong>「本日の買取相場」カード（毎日自動更新）</strong>でご確認ください。ウィーン金貨は<Link href="/articles/vienna-kinka-kaitori/" className="text-accent hover:underline">ウィーン金貨買取ガイド</Link>、インゴットとの比較は<Link href="/articles/kinka-ingot-kaitori/" className="text-accent hover:underline">金貨・インゴット買取ガイド</Link>で解説しています。</p>

          <h2>メイプルリーフ金貨（カナダ）</h2>

          <p>メイプルリーフ金貨はカナダ王室造幣局が発行する地金型金貨で、<strong>純度99.99%（K24）の純金</strong>として高く評価されます。世界で最も流通量が多い金貨の一つであり、どの買取業者でもスムーズに売却できます。</p>

          <ul>
            <li>純度99.99%・1オンス＝約31.1gが評価の基準</li>
            <li>地金価格に連動するため金相場が高いほど高値</li>
            <li>1/20oz・1/10oz・1/4oz・1/2ozの小型サイズも重量に応じて評価</li>
          </ul>

          <h2>イーグル金貨（アメリカ）</h2>

          <p>イーグル金貨はアメリカ造幣局が発行する地金型金貨です。<strong>K22（純度91.67%）の合金</strong>で耐久性が高いのが特徴ですが、1オンス版は総重量約33.93gの中に<strong>純金を約31.1g含む</strong>ように設計されています。</p>

          <p>そのため「22金だから安い」ということはなく、<strong>査定は純金量ベース</strong>で行われ、同じ1オンスの純金金貨とほぼ同水準で評価されます。</p>

          <h2>カンガルー金貨（オーストラリア）</h2>

          <p>カンガルー金貨はオーストラリアのパース造幣局が発行する地金型金貨で、<strong>純度99.99%（K24）の純金</strong>です。<strong>毎年カンガルーのデザインが変わる</strong>のが特徴で、基本は素材価値での評価ですが、希少年号にはプレミアが付くこともあります。</p>

          <h2>記念金貨（天皇陛下御在位など）</h2>

          <p>日本の造幣局が発行する記念金貨は額面が設定されていますが、<strong>金の地金価値が額面を大きく上回る</strong>のが一般的です。額面で使ってしまうのは大きな損になります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>金貨名</th>
                  <th>額面</th>
                  <th>重量・純度</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>天皇陛下御在位60年記念金貨</strong></td><td>10万円</td><td>20g・K24</td></tr>
                <tr><td><strong>天皇陛下御即位記念金貨</strong></td><td>10万円</td><td>30g・K24</td></tr>
                <tr><td><strong>皇太子殿下御成婚記念金貨</strong></td><td>5万円</td><td>18g・K24</td></tr>
                <tr><td><strong>長野オリンピック記念金貨</strong></td><td>1万円</td><td>15.6g・K24</td></tr>
              </tbody>
            </table>
          </div>

          <p>買取価格の目安は「純金重量×本日のK24相場」で概算できます。上の相場カードの1g単価に重量を掛けてみてください。さらに、<strong>発行枚数が少ないものや未使用品はコレクターズプレミアム</strong>が上乗せされる場合があります。ケース・証明書が揃っていると真贋確認がスムーズで、プレミア評価も受けやすくなります。</p>

          <h2>地金価値の計算方法</h2>

          <ol>
            <li><strong>純金量を確認する：</strong>1オンス金貨なら約31.1g（イーグル金貨も純金量は約31.1g）。記念金貨は上の表の重量</li>
            <li><strong>本日のK24買取単価を確認する：</strong>本ページ冒頭の相場カードまたは<Link href="/souba-dashboard/" className="text-accent hover:underline">相場ダッシュボード</Link>（毎日自動更新）</li>
            <li><strong>純金量×1g単価＝地金価値の概算</strong>。業者はここから手数料分を調整した価格を提示します</li>
          </ol>

          <p>概算は<Link href="/kin-kaitori-keisanki/" className="text-accent hover:underline">金買取グラム計算機</Link>でも簡単に確認できます。</p>

          <CtaBox />

          <h2>保管状態と買取価格の関係</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>状態</th>
                  <th>地金型金貨への影響</th>
                  <th>記念金貨への影響</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>未開封・ケース入り</strong></td><td>ほぼ影響なし</td><td>コレクター価値の評価に有利</td></tr>
                <tr><td><strong>指紋・小傷あり</strong></td><td>影響は小さい（溶解前提のため）</td><td>コレクター価値が下がる場合あり</td></tr>
              </tbody>
            </table>
          </div>

          <p>地金型金貨（メイプルリーフ等）は素材価値中心のため状態の影響は小さいですが、記念金貨は状態がプレミア評価に影響します。<strong>できるだけ元のケース・カプセルのまま、素手で触らずに</strong>査定に出しましょう。</p>

          <h2>金貨を高く・安全に売る4つのポイント</h2>

          <ol>
            <li>
              <strong>複数業者に見積もりを取る</strong>
              <p>金貨は1枚でも高額になるため、業者間のわずかな単価差が大きな金額差になります。最低3社は比較しましょう。</p>
            </li>
            <li>
              <strong>希少性がありそうな金貨はコイン専門業者にも査定を</strong>
              <p>発行枚数の少ない記念金貨や希少年号は、地金価値以上のプレミアが付くことがあります。金買取業者と古銭・コイン専門業者の両方に見積もりを取ると確実です。</p>
            </li>
            <li>
              <strong>本人確認書類を準備する</strong>
              <p>金貨の売却には本人確認が必須です。また200万円を超える取引ではマイナンバーの提示が必要になる場合があります。詳しくは<Link href="/articles/kin-kaitori-tetsuzuki-guide/" className="text-accent hover:underline">金買取の手続き完全ガイド</Link>をご覧ください。</p>
            </li>
            <li>
              <strong>税金のルールを理解しておく</strong>
              <p>売却益は譲渡所得として課税対象になる場合があります。詳しくは<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">金買取の税金ガイド</Link>を確認してください。</p>
            </li>
          </ol>

          <h2>金貨買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "金貨の買取価格はどうやって決まりますか？",
                a: "地金型金貨は「純金量×当日の金相場」が基準です。メイプルリーフ・カンガルーなど1オンス金貨は約31.1gの純金量で計算されます。最新の1gあたり相場は本ページの「本日の買取相場」カード（毎日自動更新）でご確認ください。",
              },
              {
                q: "イーグル金貨は22金ですが純金の金貨より安くなりますか？",
                a: "1オンス版のイーグル金貨は総重量約33.93gのK22合金ですが、純金を約31.1g含みます。査定は純金量ベースのため、同じ1オンスの純金金貨とほぼ同水準で評価されます。",
              },
              {
                q: "天皇陛下記念金貨は額面で売るべきですか？",
                a: "多くの場合、金の地金価値が額面を大きく上回ります。例えば御在位60年記念10万円金貨は純金20g、御即位記念10万円金貨は純金30gを含み、現在の金相場では地金価値だけで額面を超えます。額面で使わず、必ず買取査定を受けましょう。",
              },
              {
                q: "金貨はケースから出すと安くなりますか？",
                a: "地金型金貨は素材価値中心のため傷の影響は小さいですが、記念金貨は傷や指紋がコレクター価値の減額要因になり得ます。できるだけ元のケース・カプセルのまま、素手で触らず査定に出しましょう。",
              },
              {
                q: "1/10オンスなど小さい金貨も売れますか？",
                a: "はい。1/20oz〜1/2ozなどの小型金貨も重量に応じて評価されます。複数枚ある場合はまとめて査定に出すと効率的です。",
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
            <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット（喜平・テニス）</Link>
            <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
            <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
            <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
            <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
            <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
            </div>
          </div>
          <RelatedArticles
            currentSlug="kinka-kaitori-guide"
            relatedSlugs={["kinka-ingot-kaitori", "vienna-kinka-kaitori", "ingot-100g-kaitori", "k24-kaitori", "k22-kaitori", "kin-nobebo-kaitori", "kin-kaitori-zeikin", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku"]}
          />

          <DealerComparisonTable
            heading="金貨の買取で使える主要サービス比較"
            intro="公式情報をもとに金買取サービスを比較しました。"
          />

          <h2>まとめ</h2>

          <p>金貨の買取価格は「純金量×当日の金相場」が基準です。メイプルリーフ・カンガルーは純度99.99%の1オンス（約31.1g）、イーグル金貨はK22合金でも純金約31.1gを含むため、いずれも同水準で評価されます。天皇陛下記念金貨などの記念金貨は<strong>額面より地金価値が高い</strong>ことがほとんどで、プレミアが付く場合もあります。</p>

          <ol>
            <li><strong>複数業者に見積もりを取る</strong>（高額取引ほど差が大きい）</li>
            <li><strong>記念金貨・希少年号はコイン専門業者にも査定を</strong></li>
            <li><strong>ケース・証明書ごと、素手で触らず査定に出す</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちの金貨の買取価格を確認してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
