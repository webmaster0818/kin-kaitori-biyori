import type { Metadata } from "next";
import Link from "next/link";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金の延べ棒（インゴット）はどこで売れますか？", acceptedAnswer: { "@type": "Answer", text: "田中貴金属、三菱マテリアルなどの地金商のほか、買取大吉、おたからや、なんぼやなどの買取専門店でも売却可能です。買取専門店は手数料無料の場合が多く、複数社の比較がしやすいためおすすめです。" } },
    { "@type": "Question", name: "インゴットの買取に手数料はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "業者によります。田中貴金属などの地金商では、500g未満のインゴットに対してバーチャージ（小口手数料）として数千円〜1万円程度かかる場合があります。当サイト掲載の4社は査定料・手数料無料です。" } },
    { "@type": "Question", name: "インゴットを売ったら税金はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、売却益は譲渡所得として課税対象です。年間50万円の特別控除があり、5年超保有なら課税額が半減します。また、1回200万円を超える取引では支払調書が税務署に提出されます。" } },
    { "@type": "Question", name: "刻印がないインゴットでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "刻印がないインゴットでも買取可能です。X線蛍光分析装置（XRF）で純度を判定できます。ただし、公認ブランド（LBMA認定）の刻印がある方が信頼性が高く、スムーズに高値で買い取ってもらえます。" } },
    { "@type": "Question", name: "金の延べ棒を分割して売却できますか？", acceptedAnswer: { "@type": "Answer", text: "物理的に切断することは可能ですが、一般的には推奨されません。インゴットは公認ブランドの刻印・シリアルナンバーが価値の一部なので、切断するとその価値が失われます。税金対策のための分割売却は、年をまたいで複数回に分けて売る方法が一般的です。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】金の延べ棒・インゴット買取ガイド — 相場・税金・売る方法を徹底解説", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】金の延べ棒・インゴット買取ガイド — 相場・税金・売る方法を徹底解説", description: "金の延べ棒（インゴット・ゴールドバー）の最新買取相場、重量別の買取価格目安、売却時の税金（200万円超の支払調書・譲渡所得）、おすすめ買取業者を徹底解説。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">インゴットの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">インゴットの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinNobeboKaitoriPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金の延べ棒・インゴット買取ガイド</span></li></ol></nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の延べ棒・インゴット買取ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>金の延べ棒（インゴット・ゴールドバー）は、金を投資・資産保全目的で保有する最も一般的な形態です。2026年4月現在、金相場が歴史的な高値を更新し続けており、<strong>インゴットの売却を検討する方が急増</strong>しています。</p>

        <p>「金の延べ棒はどこで売れる？」「インゴットの買取価格はいくら？」「売却時の税金はどうなる？」——この記事では、金インゴットの売却に関する<strong>相場・税金・おすすめ売却先</strong>をすべて解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金インゴットの最新買取相場（重量別の価格目安）</li>
          <li>インゴットを売る方法と売却先の選び方</li>
          <li>売却時の税金（譲渡所得・支払調書・マイナンバー）</li>
          <li>インゴットのブランドと刻印の見方</li>
          <li>高く売るためのコツと注意点</li>
        </ul>

        <h2>金インゴットとは</h2>

        <p>金インゴットは、溶かした金を鋳型に流し込んで成形した金塊のことです。<strong>延べ棒、ゴールドバー</strong>とも呼ばれます。純度は99.99%（K24/フォーナイン）が標準で、投資用・資産保全用として世界中で流通しています。</p>

        <h3>主な金インゴットのブランド</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>ブランド名</th><th>国</th><th>LBMA認定</th><th>特徴</th></tr></thead>
            <tbody>
              <tr><td><strong>田中貴金属工業</strong></td><td>日本</td><td>認定</td><td>日本で最も流通量が多い</td></tr>
              <tr><td><strong>三菱マテリアル</strong></td><td>日本</td><td>認定</td><td>大手素材メーカー</td></tr>
              <tr><td><strong>石福金属興業</strong></td><td>日本</td><td>認定</td><td>老舗の地金商</td></tr>
              <tr><td><strong>徳力本店</strong></td><td>日本</td><td>認定</td><td>造幣局にも金を供給</td></tr>
              <tr><td><strong>CREDIT SUISSE</strong></td><td>スイス</td><td>認定</td><td>海外ブランドで人気</td></tr>
              <tr><td><strong>PAMP</strong></td><td>スイス</td><td>認定</td><td>美しいデザインで有名</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>LBMA（ロンドン貴金属市場協会）認定</strong>のブランドは、品質が国際的に保証されており、どの買取業者でもスムーズに買い取ってもらえます。</p>

        <h2>金インゴットの最新買取相場（2026年4月）</h2>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>重量</th><th>買取価格の目安（税込）</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td><strong>5g</strong></td><td>約76,000〜77,000円</td><td>小型バー。初心者向け</td></tr>
              <tr><td><strong>10g</strong></td><td>約152,000〜154,000円</td><td></td></tr>
              <tr><td><strong>20g</strong></td><td>約304,000〜308,000円</td><td>200万円以下で支払調書不要</td></tr>
              <tr><td><strong>50g</strong></td><td>約760,000〜770,000円</td><td></td></tr>
              <tr><td><strong>100g</strong></td><td>約1,520,000〜1,540,000円</td><td></td></tr>
              <tr><td><strong>500g</strong></td><td>約7,600,000〜7,700,000円</td><td>地金商ではバーチャージなし</td></tr>
              <tr><td><strong>1kg</strong></td><td>約15,200,000〜15,400,000円</td><td>大口取引。特別レート適用の場合あり</td></tr>
            </tbody>
          </table>
        </div>

        <p>2026年4月現在、金の買取価格は1gあたり約15,200円前後です。100gのインゴットで約152万円、1kgのインゴットで約1,520万円という<strong>歴史的な高額</strong>になっています。</p>

        <CtaBox />

        <h2>金インゴットを売る方法</h2>

        <h3>売却先の比較</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>売却先</th><th>メリット</th><th>デメリット</th><th>手数料</th></tr></thead>
            <tbody>
              <tr><td><strong>地金商（田中貴金属等）</strong></td><td>信頼性が高い、買取価格を公開</td><td>500g未満はバーチャージ、店舗が限られる</td><td>バーチャージ：数千円〜1.6万円</td></tr>
              <tr><td><strong>買取専門店（買取大吉等）</strong></td><td>手数料無料、全国に店舗多数</td><td>地金商より若干低い場合あり</td><td>無料</td></tr>
              <tr><td><strong>一括査定（ヒカカク！）</strong></td><td>複数業者を比較して最高値が探せる</td><td>実物査定までに時間がかかる</td><td>無料</td></tr>
            </tbody>
          </table>
        </div>

        <h3>バーチャージ（小口手数料）に注意</h3>

        <p>田中貴金属や三菱マテリアルなどの地金商では、500g未満のインゴットを売却する際に<strong>バーチャージ（小口手数料）</strong>が発生します。金額は5gバーで約4,400円、100gバーで約16,500円程度です。</p>

        <p>一方、買取大吉やおたからやなどの<strong>買取専門店はバーチャージが不要</strong>です。特に小型のインゴット（5g〜100g）を売る場合は、手数料無料の買取専門店の方がトータルで有利になることがあります。</p>

        <h2>インゴット売却時の税金</h2>

        <h3>譲渡所得の計算</h3>

        <p>金インゴットの売却益は<strong>譲渡所得</strong>として課税されます。</p>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>保有期間</th><th>計算式</th></tr></thead>
            <tbody>
              <tr><td><strong>5年以内（短期）</strong></td><td>売却額 - 取得費 - 売却費用 - 50万円（特別控除）= 課税対象額</td></tr>
              <tr><td><strong>5年超（長期）</strong></td><td>（売却額 - 取得費 - 売却費用 - 50万円）x 1/2 = 課税対象額</td></tr>
            </tbody>
          </table>
        </div>

        <p>年間50万円の特別控除があるため、売却益が50万円以内であれば実質非課税です。</p>

        <h3>200万円超の支払調書</h3>

        <p>1回の取引で売却額が<strong>200万円を超える</strong>場合、業者は税務署に<strong>支払調書</strong>を提出する義務があります。マイナンバーの提示も必要です。</p>

        <blockquote>
          <p><strong>税金対策のヒント：</strong>年間50万円の控除を活用するため、<strong>年をまたいで分割売却</strong>する方法があります。例えば100gのインゴットを一括で売ると控除は50万円のみですが、2年に分けて50gずつ売れば各年に50万円の控除が使えます。ただし、分割売却の可否や最適な方法は税理士に相談することをおすすめします。</p>
        </blockquote>

        <h3>取得費の証明</h3>

        <p>インゴットを売却する際には、<strong>購入時の領収書・契約書</strong>が重要です。取得費を証明できない場合、売却額の5%が取得費として計算され、<strong>税金が大幅に高くなる</strong>可能性があります。</p>

        <h2>インゴットを高く売る5つのコツ</h2>

        <ol>
          <li><strong>複数業者に見積もりを取る：</strong>インゴットは高額なので、1gあたり数十円の差が数万円〜数十万円の差になります。</li>
          <li><strong>手数料を比較する：</strong>地金商のバーチャージと買取専門店の無料査定、トータルでどちらが有利か計算しましょう。</li>
          <li><strong>出張買取を活用する：</strong>高額なインゴットを持ち歩くのはリスクがあります。出張買取なら自宅で安全に売却できます。</li>
          <li><strong>税金を考慮して売却タイミングを決める：</strong>年をまたいだ分割売却で特別控除を最大限活用しましょう。</li>
          <li><strong>付属品を保管しておく：</strong>保証書、品質保証カード、購入時の箱を保管しておくと、スムーズに売却できます。</li>
        </ol>

        <CtaBox />

        <h2>インゴット買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "金の延べ棒はどこで売れますか？", a: "田中貴金属などの地金商、買取大吉やおたからやなどの買取専門店、ヒカカク！の一括査定など、複数の売却先があります。手数料の有無を比較して選びましょう。" },
            { q: "インゴットの買取に手数料はかかりますか？", a: "地金商では500g未満のインゴットにバーチャージがかかる場合があります。買取専門店は基本的に手数料無料です。" },
            { q: "インゴットを売ったら税金はかかりますか？", a: "売却益は譲渡所得として課税対象です。年間50万円の特別控除があり、5年超保有なら課税額が半減します。" },
            { q: "刻印がないインゴットでも売れますか？", a: "X線分析で純度を判定できるため売却可能です。ただしLBMA認定ブランドの刻印がある方がスムーズです。" },
            { q: "インゴットを持ち歩くのが怖いのですが？", a: "出張買取を利用すれば自宅で安全に売却できます。ウリエルやティファナの出張買取は無料です。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/kinka-ingot-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">金貨・インゴット買取ガイド</p></Link>
          <Link href="/articles/kin-kaitori-zeikin/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">税金ガイド</span><p className="text-sm font-bold mt-1">金買取の税金・確定申告ガイド</p></Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場情報</span><p className="text-sm font-bold mt-1">金買取相場一覧</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>2026年4月現在、金インゴットの買取価格は歴史的な高値を記録しています。100gのインゴットで約152万円、1kgで約1,520万円です。</p>
        <p>インゴットは高額取引になるため、<strong>業者選び・手数料の比較・税金対策</strong>が特に重要です。</p>
        <ol>
          <li><strong>複数業者に見積もりを取る（1gあたりの差が大きな金額差になる）</strong></li>
          <li><strong>バーチャージの有無を比較する</strong></li>
          <li><strong>税金を考慮して売却計画を立てる（必要に応じて税理士に相談）</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でインゴットの最新買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
