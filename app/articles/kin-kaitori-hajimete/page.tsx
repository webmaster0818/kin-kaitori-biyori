import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金を売るのに必要なものは何ですか？", acceptedAnswer: { "@type": "Answer", text: "本人確認書類（運転免許証・マイナンバーカード・パスポートのいずれか1点）が必須です。古物営業法により、金額にかかわらず身分証の提示が義務付けられています。200万円超の取引ではマイナンバーの提示も必要です。" } },
    { "@type": "Question", name: "金買取の流れはどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "店頭買取の場合、来店→受付→純度測定（X線分析）→重量計量→買取価格提示→承諾→本人確認→現金受け取り、という流れです。所要時間は15〜30分程度です。" } },
    { "@type": "Question", name: "壊れたアクセサリーや刻印がない金でも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、壊れていても、刻印がなくても買取可能です。金の買取は素材価値がベースなので、チェーン切れや変色があっても金としての価値は変わりません。刻印がない場合はX線分析で純度を判定します。" } },
    { "@type": "Question", name: "金買取に手数料はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "当サイトで紹介している4社（ヒカカク！・買取大吉・ティファナ・ウリエル）はいずれも査定料・出張費・キャンセル料が無料です。手数料がかかる業者は避けましょう。" } },
    { "@type": "Question", name: "金を売った場合、税金はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "売却益が年間50万円を超えると譲渡所得として課税対象になります。ただし50万円以内なら実質非課税です。また、保有5年超なら課税額が半減します。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】初めての金買取ガイド — 流れ・必要なもの・注意点を完全解説", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】初めての金買取ガイド — 流れ・必要なもの・注意点を完全解説", description: "金を売るのが初めての方向けに、買取の流れ、必要な持ち物、注意すべきポイント、おすすめの買取業者をわかりやすく解説。初心者が失敗しないための完全ガイド。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">初めてでも安心！無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">査定は無料、キャンセルも無料。まずは価値を知ることから始めましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriHajimetePage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">初めての金買取ガイド</span></li></ol></nav>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】初めての金買取ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>
        <p>「金を売りたいけど、何から始めればいいの？」「どんな準備が必要？」「騙されない？」——金を売るのが初めての方は不安が多いものです。</p>
        <p>この記事では、初めて金を売る方のために、<strong>買取の流れ・必要なもの・注意点</strong>をステップごとにわかりやすく解説します。この記事を読めば、安心して金を売却できます。</p>

        <h2>金買取の全体の流れ（5ステップ）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>ステップ</th><th>内容</th><th>所要時間の目安</th></tr></thead>
            <tbody>
              <tr><td><strong>1. 準備</strong></td><td>売りたい金製品と身分証を用意</td><td>10分</td></tr>
              <tr><td><strong>2. 査定依頼</strong></td><td>業者に査定を依頼（店頭/出張/宅配）</td><td>5分〜</td></tr>
              <tr><td><strong>3. 査定</strong></td><td>純度・重量の測定、価格提示</td><td>10〜20分</td></tr>
              <tr><td><strong>4. 売却の判断</strong></td><td>価格に納得すれば売却。納得できなければキャンセル（無料）</td><td>5分</td></tr>
              <tr><td><strong>5. 現金受け取り</strong></td><td>本人確認後、現金を受け取る</td><td>5分</td></tr>
            </tbody>
          </table>
        </div>
        <p>店頭買取の場合、来店から現金受け取りまで<strong>約30分</strong>で完了します。</p>

        <h2>ステップ1：準備するもの</h2>
        <h3>必須：本人確認書類</h3>
        <p>古物営業法により、金買取では<strong>金額にかかわらず本人確認</strong>が必要です。以下のいずれか1点を持参してください。</p>
        <ul>
          <li>運転免許証</li>
          <li>マイナンバーカード（通知カードは不可）</li>
          <li>パスポート</li>
          <li>在留カード</li>
          <li>住民基本台帳カード（写真付き）</li>
        </ul>
        <p><strong>有効期限が切れているものは使えません。</strong>事前に確認しておきましょう。</p>

        <h3>200万円超の場合：マイナンバー</h3>
        <p>1回の取引で200万円を超える金地金（インゴット）の売却では、マイナンバーの提示が必要です。マイナンバーカードまたは通知カード+身分証を持参してください。</p>

        <h3>あると査定額アップ：付属品</h3>
        <ul>
          <li>保証書・ギャランティカード</li>
          <li>鑑定書・鑑別書</li>
          <li>専用ケース・箱</li>
          <li>購入時のレシート・領収書</li>
        </ul>

        <h2>ステップ2：買取方法を選ぶ</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>方法</th><th>メリット</th><th>デメリット</th><th>初心者おすすめ度</th></tr></thead>
            <tbody>
              <tr><td><strong>店頭買取</strong></td><td>即日現金化、目の前で査定</td><td>来店の手間</td><td>最もおすすめ</td></tr>
              <tr><td><strong>出張買取</strong></td><td>自宅完結、持ち運び不要</td><td>日程調整が必要</td><td>おすすめ</td></tr>
              <tr><td><strong>宅配買取</strong></td><td>完全非対面</td><td>現金化まで数日</td><td>普通</td></tr>
              <tr><td><strong>一括査定</strong></td><td>複数業者を比較</td><td>即日売却は不可</td><td>高値重視の方に</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>初めての方には店頭買取がおすすめです。</strong>目の前で純度測定・重量計量・価格計算のすべてを見ることができるため、安心感があります。</p>

        <h2>ステップ3：査定の流れ</h2>
        <ol>
          <li><strong>受付：</strong>売りたい金製品を渡す</li>
          <li><strong>純度判定：</strong>X線蛍光分析装置（XRF）で純度を測定。K18、K24などの純度が正確にわかる</li>
          <li><strong>重量計量：</strong>電子天秤で0.01g単位まで正確に計量</li>
          <li><strong>価格計算：</strong>当日の相場 x 純度 x 重量 で買取価格を算出</li>
          <li><strong>価格提示：</strong>「今日の相場は○○円/gで、お品物は○g、K18なので○○円です」と説明</li>
        </ol>
        <p>信頼できる業者は、計算の根拠を<strong>すべて説明</strong>してくれます。根拠を示さず金額だけ提示する業者は避けましょう。</p>

        <CtaBox />

        <h2>ステップ4：売却の判断</h2>
        <h3>売る場合</h3>
        <p>価格に納得できれば、身分証の確認後に売買契約書にサインし、現金を受け取ります。</p>
        <h3>売らない場合</h3>
        <p>価格に納得できなければ、<strong>キャンセルしてOKです</strong>。信頼できる業者はキャンセル料を請求しません。「他の業者にも見積もりを取りたい」と正直に伝えましょう。</p>

        <h2>初心者がやりがちな5つの失敗</h2>
        <ol>
          <li><strong>1社だけで売ってしまう：</strong>最低3社に見積もりを取りましょう。同じ金製品でも業者間で10〜30%の差が出ることがあります。</li>
          <li><strong>相場を確認せずに売る：</strong>田中貴金属のWebサイト等で当日の金相場を確認してから来店しましょう。</li>
          <li><strong>突然の訪問買取に応じる：</strong>突然訪問してくる買取業者は相場の10分の1以下の価格を提示することがあります。絶対に応じないでください。</li>
          <li><strong>手数料を確認しない：</strong>「査定料3,000円」「精錬費5%」など、手数料を後から差し引く業者があります。事前に確認しましょう。</li>
          <li><strong>付属品を捨ててしまう：</strong>保証書やケースがあれば査定額がアップします。捨てずに一緒に持参しましょう。</li>
        </ol>

        <h2>金の買取価格の相場（2026年4月）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>純度</th><th>1gあたり買取価格（目安）</th><th>10gの場合</th></tr></thead>
            <tbody>
              <tr><td><strong>K24（純金）</strong></td><td>約15,200円</td><td>約152,000円</td></tr>
              <tr><td><strong>K18（18金）</strong></td><td>約11,400円</td><td>約114,000円</td></tr>
              <tr><td><strong>K14（14金）</strong></td><td>約8,900円</td><td>約89,000円</td></tr>
              <tr><td><strong>K10（10金）</strong></td><td>約6,000円</td><td>約60,000円</td></tr>
              <tr><td><strong>Pt900</strong></td><td>約4,500円</td><td>約45,000円</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4社比較 — 初心者におすすめの買取業者</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>業者名</th><th>方式</th><th>初心者へのおすすめポイント</th></tr></thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数業者を比較できるので初心者でも損しにくい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>全国600店舗以上。接客が丁寧で初心者に優しい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅で対面査定。持ち運びの心配なし</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>好きな方法を選べる。初めてでも安心</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>初めての金買取 よくある質問</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "金を売るのに必要なものは？", a: "本人確認書類（運転免許証・マイナンバーカード等）が必須です。200万円超の取引ではマイナンバーも必要です。" },
            { q: "壊れたアクセサリーでも売れますか？", a: "はい、壊れていても刻印がなくても買取可能です。金は素材価値で評価されるため、状態は問いません。" },
            { q: "手数料はかかりますか？", a: "当サイト掲載の4社は査定料・出張費・キャンセル料すべて無料です。" },
            { q: "税金はかかりますか？", a: "売却益が年間50万円超で譲渡所得として課税対象です。50万円以内なら実質非課税です。" },
            { q: "どのくらい時間がかかりますか？", a: "店頭買取の場合、来店から現金受け取りまで約30分です。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
          <Link href="/articles/kin-kaitori-sagi/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">注意ガイド</span><p className="text-sm font-bold mt-1">金買取の詐欺・トラブル対策</p></Link>
          <Link href="/articles/kin-jundo-mikata/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">知識ガイド</span><p className="text-sm font-bold mt-1">金の純度の見分け方</p></Link>
          <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">方法比較</span><p className="text-sm font-bold mt-1">買取方法4つを徹底比較</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>金を売るのが初めてでも心配いりません。<strong>身分証1つ持って買取店に行くだけ</strong>で、約30分で現金化できます。</p>
        <ol>
          <li><strong>身分証を持って大手の買取店に行く</strong></li>
          <li><strong>最低3社に見積もりを取る</strong></li>
          <li><strong>納得できる価格なら売る、できなければキャンセル（無料）</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で金の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
