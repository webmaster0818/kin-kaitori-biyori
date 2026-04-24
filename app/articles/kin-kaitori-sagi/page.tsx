import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金買取で最も多い詐欺の手口は？", acceptedAnswer: { "@type": "Answer", text: "最も多いのは突然の訪問買取です。「不用品を買い取ります」と訪問し、貴金属を相場より大幅に安い価格で買い取る手口です。国民生活センターにも多くの相談が寄せられています。" } },
    { "@type": "Question", name: "訪問買取で売ってしまった場合、取り消せますか？", acceptedAnswer: { "@type": "Answer", text: "はい、クーリングオフ制度を利用できます。訪問買取の場合、契約日から8日以内であれば無条件で契約を撤回し、品物を返してもらえます。書面で通知する必要があります。" } },
    { "@type": "Question", name: "金買取業者が信頼できるか見分ける方法は？", acceptedAnswer: { "@type": "Answer", text: "古物商許可番号を提示しているか、査定料・手数料が明確か、買取価格の根拠を説明してくれるか、を確認しましょう。大手チェーン（買取大吉、おたからや等）や一括査定サービス（ヒカカク！）を利用するのが安全です。" } },
    { "@type": "Question", name: "金の買取価格が相場より安いと感じたらどうすべき？", acceptedAnswer: { "@type": "Answer", text: "その場で売却せず、複数の業者に見積もりを取りましょう。田中貴金属など地金商のWebサイトで当日の相場を確認し、提示された価格が相場の90%以上かどうかをチェックしてください。" } },
    { "@type": "Question", name: "宅配買取のトラブルで多いケースは？", acceptedAnswer: { "@type": "Answer", text: "宅配買取では、安い査定額を提示された上で「キャンセルの場合は返送料をご負担ください」と言われるケースがあります。事前にキャンセル時の返送料が無料かどうかを確認しましょう。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】金買取の詐欺・トラブル完全対策ガイド — 悪質手口と対処法", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】金買取の詐欺・トラブル完全対策ガイド — 悪質手口と対処法", description: "金買取でよくある詐欺の手口7選と対処法。訪問買取の押し買い、不当な安値査定、偽の純度判定など悪質業者の見分け方とクーリングオフの手順を徹底解説。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">安心・安全な買取業者はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">以下の4社は査定料・手数料すべて無料。信頼できる大手業者です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriSagiPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金買取の詐欺・トラブル対策</span></li></ol></nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金買取の詐欺・トラブル完全対策ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>金価格が歴史的な高値を更新し続ける2026年、金の売却を検討する人が急増しています。それに伴い、<strong>悪質な買取業者によるトラブルや詐欺被害も増加</strong>しています。</p>

        <p>「訪問買取で安く買い叩かれた」「純度を偽って安い価格を提示された」「キャンセルしようとしたら高額な違約金を請求された」——こうした被害に遭わないために、この記事では<strong>金買取でよくある詐欺の手口と対策法</strong>を徹底解説します。</p>

        <h2>金買取でよくある詐欺・トラブル7選</h2>

        <h3>1. 突然の訪問買取（押し買い）</h3>
        <p>最も被害が多いのが<strong>突然の訪問買取</strong>です。「不用品を買い取ります」「着なくなった洋服はありませんか？」と電話や訪問で接触し、自宅に上がり込んだ後に「金やアクセサリーはありませんか？」と貴金属を要求します。</p>
        <p>断りにくい雰囲気を作り、相場の10分の1以下の価格で買い取る悪質なケースが国民生活センターに多数報告されています。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>突然の訪問買取には絶対に応じない</li>
            <li>ドアを開けない。インターホン越しに断る</li>
            <li>「今は考えていません」とはっきり断る</li>
          </ul>
        </div>

        <h3>2. 不当な安値査定</h3>
        <p>相場が1gあたり15,000円の金を5,000円で買い取るなど、<strong>相場を大幅に下回る価格を提示</strong>する手口です。「この金は品質が悪い」「傷があるから安い」など、もっともらしい理由をつけて安値を正当化します。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>事前に田中貴金属のWebサイト等で当日の金相場を確認する</li>
            <li>提示価格が相場の90%未満なら売らない</li>
            <li>必ず複数業者で比較する</li>
          </ul>
        </div>

        <h3>3. 偽の純度判定</h3>
        <p>「この金は偽物です」「K18ではなくK14です」と嘘の純度判定を行い、安く買い取る手口です。悪質な業者は貴金属テスターを使って「反応が出なかった」と偽る場合もあります。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>刻印を自分で確認してから持ち込む</li>
            <li>X線蛍光分析装置（XRF）で分析してくれる業者を選ぶ</li>
            <li>1社の判定を鵜呑みにせず、別の業者でも確認する</li>
          </ul>
        </div>

        <h3>4. 手数料・精錬費の名目で差し引き</h3>
        <p>「査定料」「手数料」「精錬加工費」「分析費」などの名目で、<strong>買取金額から数千円〜数万円を差し引く</strong>手口です。事前に説明せず、契約書にのみ小さく記載しているケースもあります。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>「手数料はかかりますか？」と事前に確認する</li>
            <li>査定料・手数料無料を明言している業者を選ぶ</li>
            <li>契約書の内容をよく読んでからサインする</li>
          </ul>
        </div>

        <h3>5. 宅配買取でのキャンセル料トラブル</h3>
        <p>宅配買取で送った後に安い査定額を提示され、キャンセルしようとすると<strong>「返送料3,000円がかかります」</strong>と言われるケースです。返送料を払いたくないため、安い価格で売ってしまう人も多いです。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>キャンセル時の返送料が無料かどうかを事前に確認する</li>
            <li>キャンセル料が発生する業者は利用しない</li>
          </ul>
        </div>

        <h3>6. 即決を迫るプレッシャー</h3>
        <p>「今日だけの特別価格です」「今売らないと明日は下がります」と<strong>考える時間を与えず即決を迫る</strong>手口です。冷静に判断できない状況を作り出します。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>急かす業者からは絶対に買わない</li>
            <li>「検討します」と言って持ち帰る</li>
            <li>信頼できる業者は即決を迫らない</li>
          </ul>
        </div>

        <h3>7. 金投資詐欺（買取とは別の詐欺）</h3>
        <p>「金を買えば必ず値上がりする」「年利20%保証」など、金への投資を持ちかける詐欺です。これは買取詐欺ではなく投資詐欺ですが、金価格高騰に便乗して増加しています。</p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 my-4 not-prose">
          <p className="text-sm font-bold text-red-800 mb-2">対策</p>
          <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
            <li>「元本保証」「高利回り保証」は詐欺のサイン</li>
            <li>金融庁の登録業者かどうかを確認する</li>
            <li>勧誘された場合は消費者ホットライン（188）に相談</li>
          </ul>
        </div>

        <CtaBox />

        <h2>信頼できる買取業者の見分け方</h2>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>チェックポイント</th><th>信頼できる業者</th><th>要注意な業者</th></tr></thead>
            <tbody>
              <tr><td><strong>古物商許可番号</strong></td><td>Webサイトや店頭に明示</td><td>表示がない</td></tr>
              <tr><td><strong>手数料</strong></td><td>査定料・出張費・キャンセル料すべて無料</td><td>手数料が不明瞭</td></tr>
              <tr><td><strong>価格の根拠</strong></td><td>純度・重量・当日相場を基に説明</td><td>金額だけ提示して根拠を示さない</td></tr>
              <tr><td><strong>即決の要求</strong></td><td>「検討してください」と余裕を持たせる</td><td>「今日だけ」「今すぐ」と急かす</td></tr>
              <tr><td><strong>身分証の提示</strong></td><td>出張時に社員証・古物商許可証を提示</td><td>身分を明かさない</td></tr>
              <tr><td><strong>口コミ・評判</strong></td><td>Google口コミ等で確認できる</td><td>口コミが一切ない</td></tr>
            </tbody>
          </table>
        </div>

        <h2>被害に遭ったときの対処法</h2>

        <h3>クーリングオフ（訪問買取の場合）</h3>
        <p>訪問買取（出張買取で自分から依頼したものを除く）で売却してしまった場合、<strong>契約日から8日以内</strong>であればクーリングオフが可能です。</p>
        <ol>
          <li>契約書に記載された業者の住所宛に<strong>書面（ハガキまたは内容証明郵便）</strong>で通知する</li>
          <li>書面には「契約を解除します」と明記し、契約日・品名・金額を記載する</li>
          <li>業者は品物を返還する義務がある</li>
          <li>クーリングオフ期間中、業者は品物を転売してはならない</li>
        </ol>

        <h3>相談窓口</h3>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>相談先</th><th>電話番号</th><th>対応内容</th></tr></thead>
            <tbody>
              <tr><td><strong>消費者ホットライン</strong></td><td>188（局番なし）</td><td>消費生活全般の相談</td></tr>
              <tr><td><strong>警察相談ダイヤル</strong></td><td>#9110</td><td>犯罪被害の相談</td></tr>
              <tr><td><strong>国民生活センター</strong></td><td>03-3446-1623</td><td>消費者トラブルの相談</td></tr>
            </tbody>
          </table>
        </div>

        <h2>金買取 詐欺・トラブルに関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "金買取で最も多い詐欺の手口は？", a: "突然の訪問買取（押し買い）が最も多いです。不用品回収を名目に訪問し、金を相場より大幅に安い価格で買い取る手口です。" },
            { q: "訪問買取で売ってしまった場合、取り消せますか？", a: "はい、クーリングオフ制度で契約日から8日以内であれば無条件で撤回できます。書面で業者に通知する必要があります。" },
            { q: "信頼できる業者の見分け方は？", a: "古物商許可番号の明示、手数料の透明性、査定価格の根拠説明、口コミ・評判の確認がポイントです。" },
            { q: "相場より安い価格を提示されたらどうすべき？", a: "その場で売らず、必ず複数の業者に見積もりを取りましょう。田中貴金属のWebサイト等で当日の相場を確認してください。" },
            { q: "宅配買取は安全ですか？", a: "大手業者であれば安全です。ただし、キャンセル時の返送料が無料かどうかを事前に確認しましょう。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kin-kaitori-hajimete/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">初心者ガイド</span><p className="text-sm font-bold mt-1">金買取の初心者ガイド</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">方法比較</span><p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p></Link>
          <Link href="/articles/tentou-vs-takuhai/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">比較ガイド</span><p className="text-sm font-bold mt-1">店頭 vs 宅配 どっちがお得？</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>金買取の詐欺・トラブルは、<strong>知識と準備で防げるもの</strong>がほとんどです。以下の3つを守れば、安全に金を売却できます。</p>
        <ol>
          <li><strong>突然の訪問買取には絶対に応じない</strong></li>
          <li><strong>事前に相場を確認し、複数業者で比較する</strong></li>
          <li><strong>手数料無料・査定根拠を説明してくれる業者を選ぶ</strong></li>
        </ol>
        <p>安心・安全に金を売却するなら、<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で信頼できる業者を比較してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
