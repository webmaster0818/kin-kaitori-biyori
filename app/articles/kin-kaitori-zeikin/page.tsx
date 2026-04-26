import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金を売ったら必ず確定申告が必要ですか？", acceptedAnswer: { "@type": "Answer", text: "いいえ、必ずしも必要ではありません。金の売却益が年間50万円以内（特別控除額）であれば課税されないため、確定申告は不要です。また、生活用動産（1点30万円以下のジュエリーなど）の売却も非課税です。ただし、給与所得者で他の譲渡所得と合わせて20万円を超える場合は申告が必要です。" } },
      { "@type": "Question", name: "金の売却益にかかる税金はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "金の売却益は「譲渡所得」として総合課税されます。年間50万円の特別控除があり、保有期間5年超なら課税額がさらに半減（長期譲渡所得）します。税率は他の所得と合算した総所得に応じた累進税率（5%〜45%+住民税10%）が適用されます。" } },
      { "@type": "Question", name: "金の売却で200万円を超えるとどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "1回の取引で200万円を超える金地金・金貨の売却では、買取業者が税務署に「支払調書」を提出する義務があります。マイナンバーの提示も求められます。これにより税務署は売却の事実を把握するため、確定申告を怠ると税務調査の対象になる可能性があります。" } },
      { "@type": "Question", name: "金のジュエリーを売っても税金はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "1点30万円以下のジュエリーは「生活用動産」とみなされ、売却益は非課税です。ただし、1点30万円を超える場合は譲渡所得として課税対象になります。高額なブランドジュエリーや大きな金製品は注意が必要です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金買取の税金・確定申告ガイド — 譲渡所得の計算方法と節税対策",
  description:
    "金を売った時の税金はいくら？確定申告は必要？譲渡所得の計算方法、年間50万円の特別控除、5年超保有の優遇措置、200万円超の支払調書、節税対策まで税金の全知識を解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金の無料査定で売却額を確認</h3>
      <p className="text-sm text-warm-gray text-center mb-4">税金の計算には売却額の把握が第一歩。まずは無料査定で金の価値を確認しましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriZeikinPage() {
  return (
    <>
      <FaqSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金買取の税金・確定申告ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取の税金・確定申告ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月13日</p>

        <p>金の買取価格が歴史的な高値水準にある2026年、金の売却を検討する方が増えています。しかし、「<strong>金を売った時の税金はどうなるの？</strong>」「<strong>確定申告は必要？</strong>」という疑問を持つ方も多いでしょう。</p>

        <p>結論から言うと、金の売却益は<strong>「譲渡所得」</strong>として課税対象になりますが、<strong>年間50万円の特別控除</strong>があり、多くの場合は非課税または少額の税負担で済みます。</p>

        <p>この記事では、金の売却に関する税金の全知識を<strong>具体的な計算例付き</strong>で解説します。</p>

        <blockquote>
          <p><strong>免責事項：</strong>この記事は一般的な税務情報を解説するものであり、税務アドバイスではありません。個別の税務判断は税理士にご相談ください。</p>
        </blockquote>

        <h2>金の売却益にかかる税金の基本</h2>

        <h3>個人が金を売った場合は「譲渡所得」</h3>

        <p>個人が金地金・金貨・金製ジュエリーを売却して利益が出た場合、その利益は所得税法上の<strong>「譲渡所得」</strong>に分類されます。譲渡所得は他の所得（給与所得など）と合算される<strong>「総合課税」</strong>の対象です。</p>

        <h3>課税される金の売却とは</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>売却するもの</th>
                <th>課税区分</th>
                <th>備考</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>金地金（インゴット）</strong></td><td>譲渡所得（課税）</td><td>最も一般的なケース</td></tr>
              <tr><td><strong>金貨（投資用）</strong></td><td>譲渡所得（課税）</td><td>メイプルリーフ金貨等</td></tr>
              <tr><td><strong>ジュエリー（1点30万円超）</strong></td><td>譲渡所得（課税）</td><td>高額品は課税対象</td></tr>
              <tr><td><strong>ジュエリー（1点30万円以下）</strong></td><td>非課税</td><td>生活用動産として非課税</td></tr>
              <tr><td><strong>金歯</strong></td><td>非課税</td><td>生活用動産</td></tr>
            </tbody>
          </table>
        </div>

        <h2>譲渡所得の計算方法</h2>

        <h3>基本計算式</h3>

        <div className="bg-cream rounded-xl p-5 my-6">
          <p className="font-bold text-sm mb-2">譲渡所得の計算式</p>
          <p className="text-sm"><strong>譲渡所得 = 売却価格 - （取得費 + 譲渡費用） - 特別控除50万円</strong></p>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>売却価格</strong></td><td>買取業者から受け取った金額</td></tr>
              <tr><td><strong>取得費</strong></td><td>購入時に支払った金額（購入価格+手数料）</td></tr>
              <tr><td><strong>譲渡費用</strong></td><td>売却のためにかかった費用（送料など）</td></tr>
              <tr><td><strong>特別控除</strong></td><td>年間50万円（短期と長期を合わせて）</td></tr>
            </tbody>
          </table>
        </div>

        <h3>短期譲渡と長期譲渡の違い</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>区分</th>
                <th>保有期間</th>
                <th>課税対象額</th>
                <th>有利度</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>短期譲渡所得</strong></td><td>5年以内</td><td>（売却益 - 50万円）の全額</td><td>不利</td></tr>
              <tr><td><strong>長期譲渡所得</strong></td><td>5年超</td><td>（売却益 - 50万円）の<strong>1/2</strong></td><td>有利</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>ポイント：</strong>保有期間5年を超えると課税額が半分になります。売り急がない場合は5年超を待つのも節税策の一つです。</p>

        <h2>具体的な計算例</h2>

        <h3>例1: K24インゴット100gを売却（短期保有）</h3>

        <div className="bg-cream rounded-xl p-5 my-6">
          <p className="text-sm"><strong>前提：</strong>3年前に100gのK24インゴットを1g=10,000円（合計100万円）で購入。2026年に1g=15,200円（合計152万円）で売却。</p>
          <ul className="text-sm mt-3 space-y-1">
            <li>売却価格: 1,520,000円</li>
            <li>取得費: 1,000,000円</li>
            <li>売却益: 520,000円</li>
            <li>特別控除: -500,000円</li>
            <li><strong>課税対象額: 20,000円</strong>（短期のため全額）</li>
          </ul>
          <p className="text-sm mt-2">所得税率20%+住民税10%の場合: <strong>税額 約6,000円</strong></p>
        </div>

        <h3>例2: K24インゴット100gを売却（長期保有）</h3>

        <div className="bg-cream rounded-xl p-5 my-6">
          <p className="text-sm"><strong>前提：</strong>8年前に100gのK24インゴットを1g=5,000円（合計50万円）で購入。2026年に1g=15,200円（合計152万円）で売却。</p>
          <ul className="text-sm mt-3 space-y-1">
            <li>売却価格: 1,520,000円</li>
            <li>取得費: 500,000円</li>
            <li>売却益: 1,020,000円</li>
            <li>特別控除: -500,000円</li>
            <li>控除後: 520,000円</li>
            <li><strong>課税対象額: 260,000円</strong>（長期のため1/2）</li>
          </ul>
          <p className="text-sm mt-2">所得税率20%+住民税10%の場合: <strong>税額 約78,000円</strong></p>
        </div>

        <h3>例3: K18ネックレスを売却（30万円以下）</h3>

        <div className="bg-cream rounded-xl p-5 my-6">
          <p className="text-sm"><strong>前提：</strong>K18ネックレス（20g）を買取業者に査定してもらい、228,000円で売却。</p>
          <p className="text-sm mt-2"><strong>結果: 非課税</strong>（1点30万円以下の生活用動産のため）</p>
        </div>

        <CtaBox />

        <h2>取得費がわからない場合</h2>

        <p>相続や贈与で受け取った金、何十年も前に購入した金など、<strong>購入価格がわからない</strong>ケースは少なくありません。</p>

        <h3>5%ルール（概算取得費）</h3>

        <p>取得費が不明の場合、<strong>売却価格の5%を取得費とみなす</strong>ことができます（概算取得費）。</p>

        <div className="bg-cream rounded-xl p-5 my-6">
          <p className="text-sm"><strong>例：</strong>取得費不明のK24インゴット100gを152万円で売却</p>
          <ul className="text-sm mt-3 space-y-1">
            <li>売却価格: 1,520,000円</li>
            <li>概算取得費（5%）: 76,000円</li>
            <li>売却益: 1,444,000円</li>
            <li>特別控除: -500,000円</li>
            <li><strong>課税対象額: 944,000円</strong>（短期の場合）</li>
          </ul>
          <p className="text-sm mt-2 text-red-700 font-bold">取得費不明だと税負担が非常に大きくなります！</p>
        </div>

        <p><strong>対策：</strong>金を購入したら<strong>購入時のレシート・明細書・契約書を必ず保管</strong>しましょう。相続で受け取った場合は、被相続人の購入記録を探しましょう。</p>

        <h2>200万円超の取引と支払調書</h2>

        <p>1回の取引で<strong>200万円を超える</strong>金地金・金貨の売却を行った場合、買取業者は税務署に<strong>「支払調書」</strong>を提出する義務があります。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>対象</strong></td><td>1回200万円超の金地金・金貨の売却</td></tr>
              <tr><td><strong>義務者</strong></td><td>買取業者（売主ではない）</td></tr>
              <tr><td><strong>提出先</strong></td><td>税務署</td></tr>
              <tr><td><strong>必要な情報</strong></td><td>氏名・住所・マイナンバー・売却金額・数量</td></tr>
              <tr><td><strong>ジュエリーは？</strong></td><td>支払調書の対象外（地金・金貨のみ）</td></tr>
            </tbody>
          </table>
        </div>

        <p>支払調書が提出されると、税務署は売却の事実を把握します。確定申告をしないと<strong>税務調査の対象になる可能性</strong>がありますので、正しく申告しましょう。</p>

        <blockquote>
          <p><strong>注意：</strong>200万円以下に分割して売却すれば支払調書を回避できるという情報がありますが、これは<strong>脱税に該当する可能性</strong>があります。適正な申告を行いましょう。</p>
        </blockquote>

        <h2>確定申告の手順</h2>

        <ol>
          <li>
            <strong>必要書類を準備する</strong>
            <p>売却時の明細書（買取業者発行）、購入時のレシート・契約書、本人確認書類、マイナンバー。</p>
          </li>
          <li>
            <strong>譲渡所得を計算する</strong>
            <p>上記の計算式に当てはめて、課税対象額を算出します。</p>
          </li>
          <li>
            <strong>確定申告書を作成する</strong>
            <p>国税庁の「確定申告書等作成コーナー」（e-Tax）で作成可能です。譲渡所得の欄に金額を記入します。</p>
          </li>
          <li>
            <strong>申告期限を守る</strong>
            <p>売却した年の<strong>翌年2月16日〜3月15日</strong>が申告期限です。e-Taxなら自宅から提出できます。</p>
          </li>
        </ol>

        <h2>節税対策 — 金の売却で税金を抑える方法</h2>

        <h3>1. 年間50万円の特別控除を活かす</h3>

        <p>金の譲渡所得には年間50万円の特別控除があります。売却益が50万円以内に収まるよう、<strong>複数年に分けて売却する</strong>のが最も基本的な節税策です。</p>

        <h3>2. 5年超保有で長期譲渡所得に</h3>

        <p>保有期間が5年を超えると「長期譲渡所得」となり、課税額が<strong>1/2に軽減</strong>されます。売り急がない場合は5年超を待ちましょう。</p>

        <h3>3. 取得費の証明書類を保管する</h3>

        <p>購入時のレシートや明細がないと「5%ルール」が適用され、税負担が大幅に増えます。<strong>購入記録は必ず保管</strong>してください。</p>

        <h3>4. 損益通算を活用する</h3>

        <p>同じ年に他の資産（株式を除く）で損失が出ている場合、金の売却益と相殺できる場合があります。</p>

        <h3>5. 家族で分散して売却する</h3>

        <p>金を家族に贈与してから売却すれば、各自が50万円の特別控除を使えます。ただし、贈与税（年間110万円の基礎控除あり）との兼ね合いに注意が必要です。</p>

        <CtaBox />

        <h2>金の売却と税金に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "金を売ったら必ず確定申告が必要ですか？",
              a: "いいえ、必ずしも必要ではありません。金の売却益が年間50万円以内であれば課税されず、確定申告は不要です。また、1点30万円以下のジュエリー売却は生活用動産として非課税です。ただし、給与所得者で他の所得と合わせて20万円を超える場合は申告が必要です。",
            },
            {
              q: "金の売却益にかかる税金はいくらですか？",
              a: "金の売却益は「譲渡所得」として総合課税されます。年間50万円の特別控除後、保有期間5年超なら課税額が1/2に。税率は他の所得との合算に応じた累進税率（5%〜45%+住民税10%）です。",
            },
            {
              q: "金の売却で200万円を超えるとどうなりますか？",
              a: "1回の取引で200万円を超える金地金・金貨の売却では、買取業者が税務署に支払調書を提出します。マイナンバーの提示も求められます。確定申告を忘れないようにしましょう。",
            },
            {
              q: "金のジュエリーを売っても税金はかかりますか？",
              a: "1点30万円以下のジュエリーは生活用動産として非課税です。30万円を超える場合は譲渡所得として課税対象になります。",
            },
            {
              q: "相続した金を売った場合の税金は？",
              a: "相続した金を売却した場合も譲渡所得の対象です。取得費は被相続人（故人）の購入価格を引き継ぎます。購入記録がない場合は売却価格の5%が概算取得費となり、税負担が大きくなるため、遺品整理時に購入記録を探しましょう。",
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

        <h2>関連記事</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kinka-ingot-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">金貨・インゴット買取ガイド</p>
          </Link>
          <Link href="/articles/kin-uridoki-2026/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場分析</span>
            <p className="text-sm font-bold mt-1">金の売り時 2026年の判断基準</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>金の売却に関する税金のポイントをまとめます。</p>

        <ol>
          <li><strong>年間50万円以下の売却益は非課税</strong>（特別控除）</li>
          <li><strong>5年超保有で課税額が半分に</strong>（長期譲渡所得）</li>
          <li><strong>1点30万円以下のジュエリーは非課税</strong>（生活用動産）</li>
          <li><strong>200万円超の金地金売却は支払調書が提出される</strong></li>
          <li><strong>購入記録がないと税負担が大幅に増える</strong>（5%ルール）</li>
        </ol>

        <p>金の売却を検討中の方は、まず<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で売却額を把握し、税金の影響を計算した上で売却時期を判断しましょう。具体的な税務相談は税理士にご確認ください。</p>
      </article>
    </div>
    </>
  );
}
