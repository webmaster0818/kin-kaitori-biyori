import type { Metadata } from "next";
import Link from "next/link";

const faqCategories = [
  {
    title: "金の買取価格・相場について",
    faqs: [
      { q: "金の買取価格は毎日変わりますか？", a: "はい、金の買取価格は国際相場（ロンドン金価格）と為替レートに連動して毎日変動します。日本国内の買取価格は、国際金価格（ドル建て）×為替レート（円/ドル）で決まるため、金相場と円安/円高の両方の影響を受けます。" },
      { q: "K24（純金）の現在の買取相場はいくらですか？", a: "2026年4月現在、K24（純金）の買取相場は1gあたり約15,000〜15,400円前後です。歴史的な高値水準にあり、10年前（約4,400円）の約3.5倍に上昇しています。最新の価格は買取業者のサイトで確認できます。" },
      { q: "K18の買取相場はK24の何%ですか？", a: "K18の買取相場はK24の約75%です。これはK18の金含有率が75%であることに対応しています。2026年4月現在、K18は1gあたり約11,200〜11,600円前後です。" },
      { q: "プラチナと金はどちらが高く売れますか？", a: "2026年4月現在、金（K24）の方がプラチナ（Pt1000）より高値です。K24が1gあたり約15,200円に対し、Pt1000は約5,200円前後。ただし、これは歴史的に異例で、2015年以前はプラチナの方が高値でした。" },
      { q: "金相場は今後どうなりますか？", a: "多くのアナリストは2026年後半も「高止まり〜緩やかな上昇」を予測しています。中央銀行の金購入拡大、地政学リスク、インフレが支え要因です。ただし相場予測は不確実であり、「今の価格に納得できるなら売る」のが実践的な判断です。" },
      { q: "2026年は金の売り時ですか？", a: "歴史的な高値水準にあるため、売却には非常に好条件です。ただし、相場のピークを当てることは誰にもできません。「自分にとっての納得価格かどうか」で判断するのが賢明です。詳しくは金の売り時ガイドをご覧ください。" },
    ],
  },
  {
    title: "金の純度・刻印について",
    faqs: [
      { q: "K24、K18、K14の違いは何ですか？", a: "Kの数字は金の純度を24分率で表しています。K24は純度99.99%（純金）、K18は75%、K14は58.5%です。数字が大きいほど金の含有率が高く、買取価格も高くなります。" },
      { q: "金の刻印はどこにありますか？", a: "ネックレスは留め金（クラスプ）の近く、指輪は内側、ブレスレットは留め金付近、ピアスはポスト（棒）やキャッチ（留め具）に刻印されています。小さいため、10倍のルーペがあると確認しやすいです。" },
      { q: "「750」「585」などの数字の刻印は何ですか？", a: "千分率表記と呼ばれる国際式の純度表記です。750=K18（75.0%）、585=K14（58.5%）、999=K24（99.9%）を意味します。海外製ジュエリーに多い表記方式です。" },
      { q: "「18K」のように後ろにKが付く刻印は偽物ですか？", a: "必ずしも偽物ではありません。海外（イタリア、アメリカ等）では「18K」「18KT」が正規品にも使われます。ただし、品質管理が不十分な製品に多い表記でもあるため、心配な場合は買取業者でXRF分析してもらいましょう。" },
      { q: "K18GPやK18GFは金として売れますか？", a: "K18GP（Gold Plated＝金メッキ）やK18GF（Gold Filled＝金張り）は金の含有量が非常に少なく、金としての買取はほぼできません。「K18」の後にGP/GF/RGP/HGEが付く場合は注意してください。" },
      { q: "刻印がない金製品は売れますか？", a: "はい、刻印がなくても金であれば売却可能です。買取業者がX線蛍光分析装置（XRF）や比重計で正確な純度を測定してくれます。古い製品や海外製品では刻印がないケースもあります。" },
    ],
  },
  {
    title: "買取方法・手続きについて",
    faqs: [
      { q: "金の買取にはどんな方法がありますか？", a: "主に4つの方法があります。(1)店頭買取：店舗に持ち込み、即日現金化。(2)出張買取：自宅に査定員が訪問。(3)宅配買取：宅配便で送付。(4)一括査定：複数業者に同時見積もり。それぞれメリット・デメリットがあり、状況に応じて選べます。" },
      { q: "買取に必要な持ち物は？", a: "本人確認書類（運転免許証・マイナンバーカード・パスポート等）が必須です。古物営業法により身分証の提示が義務付けられています。加えて、保証書・鑑定書・購入レシート・専用ケースがあれば査定額アップの可能性があります。" },
      { q: "査定だけで売らなくても大丈夫ですか？", a: "はい、当サイトで紹介している4社はいずれも査定のみOKで、キャンセル料は無料です。「まず価値を知りたい」という目的で気軽に査定依頼できます。" },
      { q: "即日で現金を受け取れますか？", a: "店頭買取であれば、査定完了後その場で現金を受け取れます。出張買取もその場で現金払いの業者が多いです。宅配買取の場合は、商品到着後1〜3営業日で銀行振込となります。" },
      { q: "出張買取は本当に無料ですか？", a: "当サイト掲載の4社はいずれも出張費・査定料・キャンセル料がすべて無料です。査定後に売却しなくても費用は一切かかりません。" },
      { q: "宅配買取で金を送るのは不安です。保険はありますか？", a: "信頼できる業者は宅配キットに保険付きの配送伝票を同封しています。配送中の紛失・破損に対する補償があるため安心です。心配な場合は事前に業者の補償内容を確認しましょう。" },
    ],
  },
  {
    title: "売れる金製品について",
    faqs: [
      { q: "壊れたアクセサリーでも買い取ってもらえますか？", a: "はい、買い取ってもらえます。金の買取は「素材としての価値」がベースなので、チェーン切れ、留め具の破損、変形、傷ありでも金の価値は変わりません。そのままの状態で持ち込めばOKです。" },
      { q: "片方だけのピアスも売れますか？", a: "はい、片方だけでも買取可能です。金の買取は重量ベースなので問題ありません。ただし、ブランドジュエリーの場合はペアの方がブランド価値が評価されやすいため、可能であれば両方揃えましょう。" },
      { q: "金歯は買い取ってもらえますか？", a: "はい、金歯も買取対象です。歯科用金合金はK14〜K20程度の純度が多く、1本あたり数千円〜数万円の買取価格になります。衛生面の処理は買取業者が行うため、そのまま持ち込めます。" },
      { q: "金メッキのアクセサリーは売れますか？", a: "金メッキ（K18GP等）は金の含有量がごく微量のため、ほとんどの業者で買取不可または数十円程度です。無垢の金製品（K24、K18、K14等）とは異なりますのでご注意ください。" },
      { q: "インゴット（金地金）も買い取ってもらえますか？", a: "はい、インゴットは最も高値がつきやすい金製品です。田中貴金属、三菱マテリアルなど信頼性の高いブランドのインゴットは、ほぼ金相場通りの価格で買取されます。" },
      { q: "金貨は額面で買い取られますか？", a: "いいえ、投資用金貨（メイプルリーフ、ウィーン金貨等）は金の重量・純度に基づいた金価格で評価されます。額面（50ドル等）は名目上のもので、実際の金としての価値はそれを大幅に上回ります。" },
    ],
  },
  {
    title: "業者選び・トラブル回避",
    faqs: [
      { q: "金の買取業者を選ぶポイントは？", a: "3つの基準で選びましょう。(1)査定料・手数料が無料か。(2)買取価格の根拠（純度・重量・当日レート）を説明してくれるか。(3)複数業者を比較して最高値を提示する業者を選んでいるか。1社だけで決めるのは最もやってはいけない行動です。" },
      { q: "押し買い（訪問買取）のトラブルに遭わないためには？", a: "突然自宅を訪問してくる業者には注意してください。信頼できる業者は必ず事前予約制です。万一契約してしまった場合でも、特定商取引法によりクーリングオフ（8日間）が適用されます。" },
      { q: "買取価格に手数料は含まれますか？", a: "当サイト掲載の4社は査定料・買取手数料・出張費・キャンセル料がすべて無料です。中には「手数料10%」「精錬費用」などの名目で差し引く業者もあるため、事前に確認しましょう。" },
      { q: "クーリングオフは使えますか？", a: "出張買取の場合、特定商取引法により8日間のクーリングオフが適用されます。ただし、店頭に自ら持ち込んだ場合は適用外です。高額品を売却する際は慎重に判断しましょう。" },
    ],
  },
  {
    title: "税金・確定申告について",
    faqs: [
      { q: "金を売ったら税金はかかりますか？", a: "金の売却益は「譲渡所得」として課税対象になります。ただし、年間50万円の特別控除があり、売却益が50万円以内であれば実質非課税です。また、1点30万円以下のジュエリー売却は生活用動産として非課税です。" },
      { q: "確定申告は必要ですか？", a: "売却益が年間50万円の特別控除を超え、かつ給与所得者の場合は他の所得と合わせて20万円を超える場合に確定申告が必要です。申告期限は売却の翌年2月16日〜3月15日です。" },
      { q: "5年以上持っていると税金が安くなるのは本当ですか？", a: "本当です。保有期間5年超の金は「長期譲渡所得」となり、特別控除後の課税対象額が1/2に軽減されます。売り急がない場合は5年超を待つのも有効な節税策です。" },
      { q: "200万円を超える売却で何か特別な手続きはありますか？", a: "1回の取引で200万円を超える金地金・金貨の売却では、買取業者が税務署に「支払調書」を提出する義務があります。マイナンバーの提示も求められます。確定申告を忘れずに行いましょう。" },
      { q: "相続した金を売った場合の税金は？", a: "相続した金の売却も譲渡所得の対象です。取得費は被相続人（故人）の購入価格を引き継ぎます。購入記録がない場合は売却価格の5%が概算取得費となり税負担が大きくなるため、遺品整理時に購入記録を探しましょう。" },
      { q: "金の売却益を申告しなかったらバレますか？", a: "200万円超の取引は支払調書により税務署に情報が届くため、未申告はバレる可能性が高いです。また、200万円以下でも税務調査の対象になることがあります。適正に申告しましょう。" },
    ],
  },
];

function FaqSchema() {
  const allFaqs = faqCategories.flatMap((cat) => cat.faqs);
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金買取よくある質問（FAQ）— 相場・純度・方法・税金の疑問を解決",
  description:
    "金買取に関するよくある質問を30問以上まとめました。買取相場、金の純度と刻印、買取方法、売れる製品、業者選び、税金・確定申告まで、金の売却に関するすべての疑問に回答。",
};

export default function FaqPage() {
  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  return (
    <>
      <FaqSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">よくある質問（FAQ）</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金買取 よくある質問（FAQ）</h1>
        <p className="text-warm-gray text-sm mb-4">最終更新: 2026年4月13日</p>
        <p className="text-warm-gray text-sm mb-8">全{totalQuestions}問の質問に回答しています。</p>

        <p>金の買取に関してよく寄せられる質問を<strong>カテゴリ別に{totalQuestions}問以上</strong>まとめました。相場・純度・買取方法・税金まで、金を売る前に知っておきたい情報を網羅しています。</p>

        {/* 目次 */}
        <div className="bg-cream rounded-xl p-5 my-6 not-prose">
          <p className="font-bold text-sm mb-3">カテゴリから探す</p>
          <ul className="space-y-2">
            {faqCategories.map((cat, idx) => (
              <li key={cat.title}>
                <a href={`#category-${idx}`} className="text-sm text-accent hover:underline">
                  {cat.title}（{cat.faqs.length}問）
                </a>
              </li>
            ))}
          </ul>
        </div>

        {faqCategories.map((cat, catIdx) => (
          <div key={cat.title} className="mb-10">
            <h2 id={`category-${catIdx}`}>{cat.title}</h2>
            <div className="space-y-3 not-prose">
              {cat.faqs.map((faq) => (
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
          </div>
        ))}

        <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
          <h3 className="font-bold text-base mb-3 text-center">まずは無料査定で金の価値を確認</h3>
          <p className="text-sm text-warm-gray text-center mb-4">疑問が解消したら、次のステップは無料査定です。複数業者を比較して最高値を狙いましょう。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
            <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
            <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
            <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
          </div>
        </div>

        <h2>関連記事</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">相場情報</span>
            <p className="text-sm font-bold mt-1">金買取相場一覧</p>
          </Link>
          <Link href="/articles/kin-jundo-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">知識ガイド</span>
            <p className="text-sm font-bold mt-1">金の純度の見分け方</p>
          </Link>
          <Link href="/articles/kin-kaitori-zeikin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">税金ガイド</span>
            <p className="text-sm font-bold mt-1">金買取の税金・確定申告ガイド</p>
          </Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">売却ガイド</span>
            <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
          </Link>
        </div>
      </article>
    </div>
    </>
  );
}
