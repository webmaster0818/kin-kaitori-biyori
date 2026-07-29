import type { Metadata } from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
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
      { "@type": "ListItem", position: 3, name: "金買取の手続き完全ガイド", item: "https://gold-biyori.com/articles/kin-kaitori-tetsuzuki-guide/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年7月】金買取の手続き完全ガイド｜持ち物・本人確認・未成年の可否・予約から現金化までの流れ",
    description: "金買取に必要な持ち物リスト、古物営業法で義務付けられる本人確認、未成年の売却可否、予約の要否と当日の流れをまとめて解説。マイナンバーが必要になるケースまで、初めての金買取で迷わないための完全ガイド。",
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
      { "@type": "Question", name: "金買取に身分証は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "必須です。古物営業法により、買取時の本人確認が義務付けられています。運転免許証・マイナンバーカード・パスポート・健康保険証などが使えます。" } },
      { "@type": "Question", name: "マイナンバーの提出が必要になるのはどんなときですか？", acceptedAnswer: { "@type": "Answer", text: "金地金・金貨などで1回200万円を超える取引では、業者が税務署に支払調書を提出するため、マイナンバーの提示が必要になる場合があります。" } },
      { "@type": "Question", name: "未成年でも金を売れますか？", acceptedAnswer: { "@type": "Answer", text: "多くの業者では未成年単独の買取はできません。古物営業法やトラブル防止の観点から制限されており、親権者の同意書や同伴があれば対応可能な場合があります。事前に業者へ確認しましょう。" } },
      { "@type": "Question", name: "金買取に予約は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "予約不要の店舗も多いですが、混雑時は予約すると待ち時間を減らせます。出張買取は日程調整が必要です。" } },
      { "@type": "Question", name: "査定にどれくらい時間がかかりますか？", acceptedAnswer: { "@type": "Answer", text: "点数にもよりますが、数点なら15〜30分程度が目安です。受付→本人確認→査定→金額提示→同意で現金受け取り、という流れが一般的です。" } },
      { "@type": "Question", name: "保証書や箱がなくても売れますか？", acceptedAnswer: { "@type": "Answer", text: "売れます。金は素材価値で査定されるため付属品なしでも問題ありません。ただし保証書・箱・鑑定書があると、特にブランド品で査定額が上がる場合があります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年7月】金買取の手続き完全ガイド｜持ち物・本人確認・未成年の可否・予約から現金化までの流れ",
  description: "金買取に必要な持ち物リスト、古物営業法で義務付けられる本人確認、未成年の売却可否、予約の要否と当日の流れをまとめて解説。マイナンバーが必要になるケースまで、初めての金買取で迷わないための完全ガイド。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-kaitori-tetsuzuki-guide/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">手続きはどの業者もシンプルです。複数社を比較して最高値を狙いましょう。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriTetsuzukiGuidePage() {
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
            <li><span className="text-foreground">金買取の手続き完全ガイド</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="金買取の手続きイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年7月】金買取の手続き完全ガイド — 持ち物・本人確認・未成年・予約の流れ</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: 2026年7月3日</p>

          <p>金を初めて売るとき、「何を持っていけばいい？」「本人確認って何のため？」「予約は必要？」と手続き面の疑問が意外と多いものです。この記事では、金買取の<strong>必要な持ち物・本人確認のルール・未成年の売却可否・予約から現金受け取りまでの流れ</strong>を1ページにまとめました。</p>

          <p>この記事を読めば以下のことがわかります。</p>
          <ul>
            <li>当日必要な持ち物リスト（必須のもの／あると有利なもの）</li>
            <li>本人確認が法律で義務付けられている理由と使える書類</li>
            <li>マイナンバーの提示が必要になるケース</li>
            <li>未成年が金を売れるかどうか</li>
            <li>予約の要否と、来店から現金受け取りまでのステップ</li>
          </ul>

          <h2>当日の流れ — 受付から現金受け取りまで</h2>

          <p>金買取の手続きはどの業者もシンプルで、店頭なら<strong>数点で15〜30分程度</strong>が目安です。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ステップ</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>1. 受付</strong></td><td>売りたい品物を渡す（予約不要の店舗も多い）</td></tr>
                <tr><td><strong>2. 本人確認</strong></td><td>本人確認書類を提示（古物営業法で義務）</td></tr>
                <tr><td><strong>3. 査定</strong></td><td>刻印確認・計量・純度測定（X線分析など）</td></tr>
                <tr><td><strong>4. 金額提示</strong></td><td>純度×重量×当日相場を基に買取額を提示。根拠の説明を求めましょう</td></tr>
                <tr><td><strong>5. 同意・現金受け取り</strong></td><td>金額に同意すればその場で現金化（宅配買取は振込）</td></tr>
              </tbody>
            </table>
          </div>

          <p>提示額に納得できなければ、<strong>その場で売らずに持ち帰って他社と比較して問題ありません</strong>。査定・キャンセルは無料の業者がほとんどです。</p>

          <h2>持ち物リスト — 必須は本人確認書類</h2>

          <h3>必須の持ち物</h3>

          <ul>
            <li><strong>本人確認書類：</strong>古物営業法により提示が必須（詳細は次章）</li>
            <li><strong>売りたい金製品：</strong>壊れていても、片方だけでも、変色していても買取可能</li>
          </ul>

          <h3>あると査定に有利な持ち物</h3>

          <ul>
            <li><strong>保証書・ギャランティカード：</strong>特にブランドジュエリーで査定額アップにつながる</li>
            <li><strong>箱・専用ケース・鑑定書：</strong>同上。記念金貨はケース・証明書があると真贋確認がスムーズ</li>
            <li><strong>購入時の明細・レシート：</strong>真贋確認がスムーズになるほか、高額売却時の税金計算（取得費の証明）で大幅な節税につながる</li>
          </ul>

          <p>付属品がなくても金は素材価値で査定されるため、売却自体に支障はありません。詳しくは<Link href="/articles/kin-fuzokuhin-nashi/" className="text-accent hover:underline">付属品なしの金買取ガイド</Link>もご覧ください。</p>

          <CtaBox />

          <h2>本人確認 — 古物営業法で義務付けられている</h2>

          <p>金買取の本人確認は、業者が勝手に求めているのではなく、<strong>古物営業法により盗品流通防止の観点から義務付けられています</strong>。本人確認を求めない業者は、むしろ法令順守の面で注意が必要です。</p>

          <h3>使える本人確認書類</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>書類</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>運転免許証</strong></td><td>最も一般的。1点で完結</td></tr>
                <tr><td><strong>マイナンバーカード</strong></td><td>1点で完結（通知カードは不可の業者が多い）</td></tr>
                <tr><td><strong>パスポート</strong></td><td>現住所の確認書類を追加で求められる場合あり</td></tr>
                <tr><td><strong>健康保険証</strong></td><td>業者により補助書類（公共料金領収書など）が必要な場合あり</td></tr>
              </tbody>
            </table>
          </div>

          <p>宅配買取の場合は本人確認書類のコピーを同封する方式が一般的です。有効期限切れの書類は使えないため、事前に確認しておきましょう。</p>

          <h3>200万円超の取引はマイナンバーが必要</h3>

          <p>金地金・金貨などで<strong>1回の取引が200万円を超える</strong>場合、買取業者は税務署に「支払調書」を提出する義務があり、売却者の<strong>マイナンバーの提示</strong>が必要になります。これは正常な取引の一部であり、拒否すると買取できない場合があります。詳しくは<Link href="/articles/kin-baikyaku-mynumber/" className="text-accent hover:underline">金売却とマイナンバーの解説記事</Link>と<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">税金・確定申告ガイド</Link>をご覧ください。</p>

          <h2>未成年は金を売れる？ — 単独では不可が一般的</h2>

          <p>結論から言うと、<strong>多くの業者では未成年単独の買取はできません</strong>。古物営業法や各都道府県の青少年保護条例、トラブル防止の観点から、未成年との取引は制限されています。</p>

          <ul>
            <li><strong>未成年単独：</strong>ほとんどの業者で買取不可</li>
            <li><strong>親権者の同意書あり：</strong>業者によっては対応可能</li>
            <li><strong>親権者の同伴あり：</strong>対応可能な業者が比較的多い</li>
          </ul>

          <p>対応は業者ごとに異なるため、<strong>来店前に電話などで確認</strong>しましょう。なお、親から相続・贈与された金製品を売る場合でも、売却者が未成年であれば同じ制限がかかります。確実なのは、親権者名義で売却することです。</p>

          <h2>予約は必要？ — 不要が多いが、予約にはメリットも</h2>

          <p>店頭買取は<strong>予約不要の店舗が多い</strong>ですが、以下の場合は予約がおすすめです。</p>

          <ul>
            <li><strong>混雑しやすい週末・大型連休：</strong>予約で待ち時間を短縮できる</li>
            <li><strong>点数が多い・高額品がある：</strong>査定担当者を確保してもらえてスムーズ</li>
            <li><strong>出張買取：</strong>日程調整（予約）が必須</li>
            <li><strong>宅配買取：</strong>宅配キットの取り寄せが必要な場合が多い</li>
          </ul>

          <p>店頭・出張・宅配それぞれの特徴は<Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">買取方法4つの徹底比較</Link>で解説しています。即日現金化したい方は<Link href="/articles/kin-kaitori-sokujitsu/" className="text-accent hover:underline">即日買取ガイド</Link>もご覧ください。</p>

          <CtaBox />

          <h2>手続きに関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "金買取に身分証は必要ですか？",
                a: "必須です。古物営業法により、買取時の本人確認が義務付けられています。運転免許証・マイナンバーカード・パスポート・健康保険証などが使えます。",
              },
              {
                q: "マイナンバーの提出が必要になるのはどんなときですか？",
                a: "金地金・金貨などで1回200万円を超える取引では、業者が税務署に支払調書を提出するため、マイナンバーの提示が必要になる場合があります。これは正常な取引の一部です。",
              },
              {
                q: "未成年でも金を売れますか？",
                a: "多くの業者では未成年単独の買取はできません。古物営業法やトラブル防止の観点から制限されており、親権者の同意書や同伴があれば対応可能な場合があります。事前に業者へ確認しましょう。",
              },
              {
                q: "金買取に予約は必要ですか？",
                a: "予約不要の店舗も多いですが、混雑時は予約すると待ち時間を減らせます。出張買取は日程調整が、宅配買取はキットの取り寄せが必要です。",
              },
              {
                q: "査定にどれくらい時間がかかりますか？",
                a: "点数にもよりますが、数点なら15〜30分程度が目安です。受付→本人確認→査定→金額提示→同意で現金受け取り、という流れが一般的です。",
              },
              {
                q: "保証書や箱がなくても売れますか？",
                a: "売れます。金は素材価値で査定されるため付属品なしでも問題ありません。ただし保証書・箱・鑑定書があると、特にブランド品で査定額が上がる場合があります。",
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
          <ExpertQA category="howto" />
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
        {/* d3-kisei-202607 */}
        <div className="bg-cream border border-accent/40 rounded-lg p-4 my-6 text-sm">
          <strong>関連:</strong> 「2026年に金の買取が規制される？」という疑問には、
          <Link href="/articles/kin-nobebo-kaitori/#kisei-2026" className="text-accent hover:underline">金インゴットの買取規制【2026年の最新動向】</Link>
          で一次情報ベースの整理を公開しています（変わること・変わらないこと）。
        </div>
          <RelatedArticles
            currentSlug="kin-kaitori-tetsuzuki-guide"
            relatedSlugs={["kin-kaitori-hajimete", "kin-kaitori-sokujitsu", "kin-baikyaku-mynumber", "kin-200man-mynumber", "kin-kaitori-zeikin", "kin-kaitori-sagi", "kin-fuzokuhin-nashi", "kin-takaku-uru", "kaitori-houhou-hikaku", "kin-kaitori-souba"]}
          />

          <DealerComparisonTable
            heading="金買取の主要サービス比較"
            intro="公式情報をもとに金買取サービスを比較しました。"
          />

          <h2>まとめ</h2>

          <p>金買取の手続きはシンプルで、<strong>必須の持ち物は本人確認書類だけ</strong>です。本人確認は古物営業法による義務、200万円超の取引ではマイナンバーの提示が必要、未成年は単独では売却できない——この3点を押さえておけば、当日は迷いません。</p>

          <ol>
            <li><strong>本人確認書類（免許証・マイナンバーカード等）を持参する</strong></li>
            <li><strong>保証書・箱・購入明細があれば一緒に持っていく</strong></li>
            <li><strong>提示額に納得できなければ持ち帰り、複数業者を比較する</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
        </article>
      </div>
    </>
  );
}
