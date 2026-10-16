import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
/* live-price-consts */
const _LPP = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const _LPT = goldData.tanaka_official as Record<string, number>;
const LP_DATE = `${Number(goldData.date.split("-")[1])}月${Number(goldData.date.split("-")[2])}日`;
const LP_K18 = Math.round(_LPP.k18).toLocaleString();
const LP_K24 = Math.round(_LPP.k24).toLocaleString();
const LP_PT = Math.round(_LPT.pt_buyback_per_g).toLocaleString();

const faqCategories = [
  {
    title: "金の買取価格・相場について",
    faqs: [
      { q: "金の買取価格は毎日変わりますか？", a: "はい、金の買取価格は国際相場（ロンドン金価格）と為替レートに連動して毎日変動します。日本国内の買取価格は、国際金価格（ドル建て）×為替レート（円/ドル）で決まるため、金相場と円安/円高の両方の影響を受けます。" },
      { q: "K24（純金）の現在の買取相場はいくらですか？", a: `${LP_DATE}時点、K24（純金）の買取相場は1gあたり約${LP_K24}円前後です（田中貴金属の公表値をもとに純度換算した目安・毎朝自動更新）。歴史的な高値水準にあり、10年前（約4,400円）から大きく上昇しています。` },
      { q: "K18の買取相場はK24の何%ですか？", a: `K18の買取相場はK24の約75%です。これはK18の金含有率が75%であることに対応しています。${LP_DATE}時点、K18は1gあたり約${LP_K18}円前後です。` },
      { q: "プラチナと金はどちらが高く売れますか？", a: `${LP_DATE}時点、金（K24）の方がプラチナ（Pt1000）より高値です。K24が1gあたり約${LP_K24}円に対し、Pt1000は約${LP_PT}円前後。ただし、これは歴史的に異例で、2015年以前はプラチナの方が高値でした。` },
      { q: "金相場は今後どうなりますか？", a: "多くのアナリストは2026年後半も「高止まり〜緩やかな上昇」を予測しています。中央銀行の金購入拡大、地政学リスク、インフレが支え要因です。ただし相場予測は不確実なため、現在の価格に納得できるかどうかを基準に判断することをおすすめします。" },
      { q: "2026年は金の売り時ですか？", a: "歴史的な高値水準にあり、売却を検討しやすい時期といえます。ただし、相場の天井を予測することはできません。ご自身にとって納得できる価格かどうかを基準にご判断ください。詳しくは金の売り時ガイドをご覧ください。" },
    ],
  },
  {
    title: "金の純度・刻印について",
    faqs: [
      { q: "K24、K18、K14の違いは何ですか？", a: "Kの数字は金の純度を24分率で表しています。K24は純度99.99%（純金）、K18は75%、K14は58.5%です。数字が大きいほど金の含有率が高く、買取価格も高くなります。" },
      { q: "金の刻印はどこにありますか？", a: "ネックレスは留め金（クラスプ）の近く、指輪は内側、ブレスレットは留め金付近、ピアスはポスト（棒）やキャッチ（留め具）に刻印されています。刻印は小さいため、10倍程度のルーペを使うと確認しやすくなります。" },
      { q: "「750」「585」などの数字の刻印は何ですか？", a: "千分率表記と呼ばれる国際式の純度表記です。750=K18（75.0%）、585=K14（58.5%）、999=K24（99.9%）を意味します。海外製ジュエリーに多い表記方式です。" },
      { q: "「18K」のように後ろにKが付く刻印は偽物ですか？", a: "必ずしも偽物ではありません。海外（イタリア、アメリカ等）では「18K」「18KT」が正規品にも使われます。ただし、品質管理が不十分な製品に多い表記でもあるため、ご不安な場合は、買取業者にXRF分析による純度の確認をご依頼ください。" },
      { q: "K18GPやK18GFは金として売れますか？", a: "K18GP（Gold Plated＝金メッキ）やK18GF（Gold Filled＝金張り）は金の含有量が非常に少なく、金としての買取はほとんどできません。「K18」の後にGP/GF/RGP/HGEが付く場合はご注意ください。" },
      { q: "刻印がない金製品は売れますか？", a: "はい、刻印がなくても金であれば売却可能です。買取業者がX線蛍光分析装置（XRF）や比重計で純度を測定します。古い製品や海外製品では刻印がないケースもあります。" },
    ],
  },
  {
    title: "買取方法・手続きについて",
    faqs: [
      { q: "金の買取にはどんな方法がありますか？", a: "主に4つの方法があります。(1)店頭買取：店舗に持ち込み、即日現金化。(2)出張買取：自宅に査定員が訪問。(3)宅配買取：宅配便で送付。(4)一括査定：複数業者に同時見積もり。それぞれメリット・デメリットがあり、状況に応じて選べます。" },
      { q: "買取に必要な持ち物は？", a: "本人確認書類（運転免許証・マイナンバーカード・パスポート等）が必須です。古物営業法により身分証の提示が義務付けられています。加えて、保証書・鑑定書・購入レシート・専用ケースがあれば査定額が上がる場合があります。" },
      { q: "査定だけで売らなくても大丈夫ですか？", a: "はい。買取大吉・ティファナ・ウリエルは査定のみの利用も可能・キャンセル料無料と公式に明記しています。ヒカカク！は一括査定の利用が無料で、査定後のキャンセルは申し込み先の業者へ直接連絡します。価値を確認する目的で査定を依頼することも可能です。" },
      { q: "即日で現金を受け取れますか？", a: "店頭買取であれば、査定完了後その場で現金を受け取れます。出張買取も、その場で現金で支払う業者が多くあります。宅配買取の場合は、商品到着後1〜3営業日で銀行振込となります。" },
      { q: "出張買取は本当に無料ですか？", a: "買取大吉・ティファナ・ウリエルは出張費・査定料・キャンセル料がすべて無料と公式に明記しています。ヒカカク！は一括査定の利用が無料ですが、出張・査定は申し込み先の各業者が行うため、出張費やキャンセル時の扱いは、その業者の条件をご確認ください。" },
      { q: "宅配買取で金を送るのは不安です。保険はありますか？", a: "信頼できる業者は宅配キットに保険付きの配送伝票を同封しています。配送中の紛失・破損に対する補償の有無と内容は、事前に各業者の公式サイトにてご確認ください。" },
    ],
  },
  {
    title: "売れる金製品について",
    faqs: [
      { q: "壊れたアクセサリーでも買い取ってもらえますか？", a: "はい、買い取ってもらえます。金の買取は「素材としての価値」がベースなので、チェーン切れ、留め具の破損、変形、傷ありでも金の価値は変わりません。そのままの状態でお持ち込みいただけます。" },
      { q: "片方だけのピアスも売れますか？", a: "はい、片方だけでも買取可能です。金の買取は重量ベースなので問題ありません。ただし、ブランドジュエリーの場合はペアの方がブランド価値が評価されやすいため、可能であれば両方をそろえて査定に出すことをおすすめします。" },
      { q: "金歯は買い取ってもらえますか？", a: "はい、金歯も買取対象です。歯科用金合金はK14〜K20程度の純度が多く、1本あたり数千円〜数万円の買取価格になります。衛生面の処理は買取業者が行うため、そのままお持ち込みいただけます。" },
      { q: "金メッキのアクセサリーは売れますか？", a: "金メッキ（K18GP等）は金の含有量がごく微量のため、ほとんどの業者で買取不可または数十円程度です。無垢の金製品（K24、K18、K14等）とは異なりますのでご注意ください。" },
      { q: "インゴット（金地金）も買い取ってもらえますか？", a: "はい、インゴットは金製品のなかでも相場に近い価格で売却しやすい品目です。田中貴金属、三菱マテリアルなど信頼性の高いブランドのインゴットは、ほぼ金相場通りの価格で買取されます。" },
      { q: "金貨は額面で買い取られますか？", a: "いいえ、投資用金貨（メイプルリーフ、ウィーン金貨等）は金の重量・純度に基づいた金価格で評価されます。額面（50ドル等）は名目上のもので、実際の金としての価値はそれを大幅に上回ります。" },
    ],
  },
  {
    title: "業者選び・トラブル回避",
    faqs: [
      { q: "金の買取業者を選ぶポイントは？", a: "以下の3つの基準で選ぶことをおすすめします。(1)査定料・手数料が無料か。(2)買取価格の根拠（純度・重量・当日レート）を説明してくれるか。(3)複数業者の査定額を比較したうえで選んでいるか。1社の査定だけで決めることはおすすめしません。" },
      { q: "押し買い（訪問買取）のトラブルに遭わないためには？", a: "予約なく自宅を訪問してくる業者にはご注意ください。訪問を事前に約束していない業者による勧誘は、特定商取引法で禁止されています。万一契約してしまった場合でも、特定商取引法によりクーリング・オフ（8日間）が適用されます。" },
      { q: "買取価格に手数料は含まれますか？", a: "買取大吉・ティファナ・ウリエルは査定料・出張費・キャンセル料などの無料を公式に明記しています。ヒカカク！経由の場合は、手数料・返送料を申し込み先の業者ごとにご確認ください。中には「手数料10%」「精錬費用」などの名目で差し引く業者もあるため、事前にご確認ください。" },
      { q: "クーリング・オフは使えますか？", a: "出張買取の場合、特定商取引法により8日間のクーリング・オフが適用されます。ただし、店頭に自ら持ち込んだ場合は適用外です。高額品を売却する際は、慎重にご判断ください。" },
    ],
  },
  {
    title: "税金・確定申告について",
    faqs: [
      { q: "金を売ったら税金はかかりますか？", a: "金の売却益は「譲渡所得」として課税対象になります。ただし、年間50万円の特別控除があり、売却益が50万円以内であれば実質非課税です。また、1点30万円以下のジュエリー売却は生活用動産として非課税です。" },
      { q: "確定申告は必要ですか？", a: "売却益が年間50万円の特別控除を超え、かつ給与所得者の場合は他の所得と合わせて20万円を超える場合に確定申告が必要です。申告期限は売却の翌年2月16日〜3月15日です。" },
      { q: "5年以上持っていると税金が安くなるのは本当ですか？", a: "はい。保有期間が5年を超える金は「長期譲渡所得」となり、特別控除後の課税対象額が1/2に軽減されます。売り急がない場合は5年超を待つのも有効な節税策です。" },
      { q: "200万円を超える売却で何か特別な手続きはありますか？", a: "1回の取引で200万円を超える金地金・金貨の売却では、買取業者が税務署に「支払調書」を提出する義務があります。マイナンバーの提示も求められます。必要な場合は、確定申告を行ってください。" },
      { q: "相続した金を売った場合の税金は？", a: "相続した金の売却も譲渡所得の対象です。取得費は被相続人（故人）の購入価格を引き継ぎます。購入記録がない場合は売却価格の5%が概算取得費となり税負担が大きくなるため、遺品整理の際に購入記録をご確認ください。" },
      { q: "金の売却益を申告しなかった場合、税務署に把握されますか？", a: "200万円超の取引は支払調書により税務署に情報が届くため、未申告の場合は把握される可能性が高くなります。また、200万円以下の取引でも税務調査の対象となる場合があります。適正な申告をお願いいたします。" },
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
    "金買取に関するよくある質問を30問以上まとめました。買取相場、金の純度と刻印、買取方法、売れる製品、業者選び、税金・確定申告まで、金の売却に関する主な質問に回答しています。",
  alternates: { canonical: "https://gold-biyori.com/faq/" },
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

        <p>金の買取に関してよく寄せられる質問を<strong>カテゴリ別に{totalQuestions}問以上</strong>まとめました。相場・純度・買取方法・税金など、金の売却前にご確認いただきたい情報を掲載しています。</p>

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
          <h3 className="font-bold text-base mb-3 text-center">無料査定のご案内</h3>
          <p className="text-sm text-warm-gray text-center mb-4">金の価値は、無料査定で確認できます。複数業者の査定額を比較することをおすすめします。</p>
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
