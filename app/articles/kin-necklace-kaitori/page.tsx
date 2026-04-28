import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "金のネックレスの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "2026年4月現在、K18のネックレスは1gあたり約11,200〜11,600円、K24は約15,000〜15,400円、K14は約8,700〜9,100円が買取目安です。10gのK18ネックレスなら約11万円前後の買取額になります。" } },
      { "@type": "Question", name: "切れたネックレスでも買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、チェーンが切れたネックレスでも問題なく買取できます。金の買取は素材の重量と純度がベースなので、破損していても金としての価値は変わりません。" } },
      { "@type": "Question", name: "金のネックレスの重さの目安は？", acceptedAnswer: { "@type": "Answer", text: "K18ネックレスの一般的な重量は、細いチェーンで2〜5g、標準的なチェーンで5〜10g、太めのチェーンで10〜20g、喜平ネックレスで20〜100g程度です。" } },
      { "@type": "Question", name: "喜平ネックレスは高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、喜平ネックレスは金の含有量（重量）が多いため、高額買取が期待できます。50gのK18六面ダブル喜平なら約57万円前後の買取目安です。喜平はデザイン性も評価されやすいチェーンです。" } },
      { "@type": "Question", name: "ペンダントトップの宝石も評価してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ペンダントトップにダイヤモンドや宝石がセットされている場合は、金の素材価値に加えて宝石の価値も評価されます。鑑定書がある場合は必ず持参しましょう。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】金ネックレス買取相場ガイド — 純度・重さ別の価格と高く売るコツ",
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】金ネックレス買取相場ガイド — 純度・重さ別の価格と高く売るコツ",
  description:
    "金ネックレスの最新買取相場をK24・K18・K14の純度別・重量別に掲載。喜平ネックレスの買取価格、チェーン切れでも売れる理由、ブランドネックレスの査定ポイント、高く売るコツとおすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金ネックレスの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ネックレスの買取価格は業者によって差があります。複数社で比較して最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinNecklaceKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金ネックレス買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-brand.png" alt="金ネックレスの買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金ネックレス買取相場ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月13日</p>

        <p>金のネックレスは、<strong>最も多く買取に持ち込まれる金製品</strong>の一つです。使わなくなったネックレス、チェーンが切れたネックレス、デザインが古くなったネックレス——いずれも金の素材価値があるため、買取業者で現金化できます。</p>

        <p>「金のネックレスっていくらで売れる？」「切れたチェーンでも大丈夫？」「喜平ネックレスの相場は？」——この記事では、金ネックレスの<strong>純度別・重量別の買取相場、チェーンの種類別の特徴、高く売るコツ</strong>を徹底解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金ネックレスの純度別・重量別の最新買取相場</li>
          <li>喜平・あずき・ベネチアンなどチェーン種類別の特徴</li>
          <li>切れた・壊れたネックレスでも売れる理由</li>
          <li>ブランドネックレスの査定ポイント</li>
          <li>金ネックレスを高く売るコツとおすすめ業者</li>
        </ul>

        <CtaBox />

        <h2>金ネックレスの買取相場一覧（2026年4月）</h2>

        <p>金ネックレスの買取価格は<strong>「純度（K24/K18/K14など）」×「重量（g）」</strong>で決まります。2026年4月現在の1gあたりの買取目安は以下のとおりです。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>純度</th>
                <th>1gあたり買取価格</th>
                <th>5g</th>
                <th>10g</th>
                <th>20g</th>
                <th>50g</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>K24</strong></td><td>約15,200円</td><td>約76,000円</td><td>約152,000円</td><td>約304,000円</td><td>約760,000円</td></tr>
              <tr><td><strong>K18</strong></td><td>約11,400円</td><td>約57,000円</td><td>約114,000円</td><td>約228,000円</td><td>約570,000円</td></tr>
              <tr><td><strong>K14</strong></td><td>約8,900円</td><td>約44,500円</td><td>約89,000円</td><td>約178,000円</td><td>約445,000円</td></tr>
              <tr><td><strong>K10</strong></td><td>約6,000円</td><td>約30,000円</td><td>約60,000円</td><td>約120,000円</td><td>約300,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>K18の10gのネックレスなら<strong>約11万4千円</strong>、50gの喜平ネックレスなら<strong>約57万円</strong>の買取額が目安です。金価格が歴史的高値圏にある現在、ネックレス1本でも驚くほどの金額になります。</p>

        <h2>金ネックレスの重量の目安</h2>

        <p>「自分のネックレスは何グラムくらい？」という疑問を解消するため、チェーンの太さ・長さ別の重量目安をまとめました。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ネックレスの種類</th>
                <th>重量の目安</th>
                <th>K18での買取目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>細いチェーン（40cm）</td><td>2〜4g</td><td>約22,800〜45,600円</td></tr>
              <tr><td>標準チェーン（45cm）</td><td>5〜8g</td><td>約57,000〜91,200円</td></tr>
              <tr><td>太めのチェーン（50cm）</td><td>10〜15g</td><td>約114,000〜171,000円</td></tr>
              <tr><td>喜平2面（50cm）</td><td>10〜30g</td><td>約114,000〜342,000円</td></tr>
              <tr><td>喜平6面ダブル（50cm）</td><td>30〜50g</td><td>約342,000〜570,000円</td></tr>
              <tr><td>喜平6面トリプル（50cm）</td><td>50〜100g</td><td>約570,000〜1,140,000円</td></tr>
              <tr><td>ペンダントトップ付き</td><td>+3〜10g</td><td>+約34,200〜114,000円</td></tr>
            </tbody>
          </table>
        </div>

        <p>正確な重量は<strong>デジタルスケール（0.1g単位）</strong>で測定するのが最も確実です。自宅にスケールがない場合は、買取業者の店頭で正確に計量してもらえます。</p>

        <h2>チェーンの種類別の特徴と買取</h2>

        <h3>喜平チェーン</h3>

        <p>喜平（きへい）は<strong>金ネックレスの定番</strong>です。環をつなぎ合わせたシンプルな構造で、2面・6面・8面などの種類があります。面数が多いほど光の反射が美しく、重量も重くなります。</p>

        <p>喜平ネックレスは<strong>デザインよりも金の重量で価値が決まる</strong>ため、買取価格が安定しています。「2面カット」「6面ダブル」「8面トリプル」などの種類によって重量が異なるため、事前に計量しておくと査定額の目安がつけやすくなります。</p>

        <h3>あずきチェーン</h3>

        <p>小さな楕円形の環が連なる繊細なチェーンです。<strong>女性用ネックレスに多い</strong>定番のデザインで、ペンダントトップと組み合わせて使われることが多いです。重量は比較的軽め（2〜5g程度）ですが、金の素材価値で買取可能です。</p>

        <h3>ベネチアンチェーン</h3>

        <p>箱型のコマが連なるチェーンで、<strong>滑らかな質感と上品な光沢</strong>が特徴です。あずきチェーンと同様に女性用が多く、重量は3〜8g程度が一般的です。</p>

        <h3>ロープチェーン</h3>

        <p>環がねじれた構造のチェーンで、<strong>独特の編み目模様</strong>が特徴です。太さのバリエーションが豊富で、太いものは50g以上になることもあります。</p>

        <h3>スネークチェーン</h3>

        <p>蛇のように滑らかなチェーンです。密に編まれた構造のため、<strong>見た目のわりに重量がある</strong>のが特徴です。切れやすいというデメリットがありますが、切れていても買取には問題ありません。</p>

        <h2>切れた・壊れたネックレスも買取可能</h2>

        <p>金のネックレスは<strong>破損していても買取可能</strong>です。以下の状態でもすべて査定対象になります。</p>

        <ul>
          <li>チェーンが切れている</li>
          <li>留め具が壊れている</li>
          <li>ペンダントトップが外れている</li>
          <li>変色・黒ずみがある</li>
          <li>絡まってほどけない</li>
          <li>刻印が消えている・読めない</li>
        </ul>

        <p>金の買取は<strong>「素材としての価値」</strong>がベースです。チェーンが切れていても、金としての重量と純度は変わらないため、買取価格に影響はありません。「壊れているから売れない」と諦めずに、まず査定に出してみましょう。</p>

        <p>詳しくは<Link href="/articles/kowareta-kin-kaitori/" className="text-accent hover:underline">壊れた金・刻印なしの買取ガイド</Link>をご確認ください。</p>

        <CtaBox />

        <h2>ブランドネックレスの買取</h2>

        <p>ブランドの金ネックレスは、<strong>金の素材価値 + ブランド価値</strong>で査定されます。ブランド価値が加味されると、金の重量だけの査定より大幅に高くなることがあります。</p>

        <h3>高額買取が期待できるブランド</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ブランド</th>
                <th>人気モデル</th>
                <th>ブランド価値の評価</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>カルティエ</strong></td><td>トリニティ、ラブ</td><td>非常に高い</td></tr>
              <tr><td><strong>ティファニー</strong></td><td>Tスマイル、バイザヤード</td><td>非常に高い</td></tr>
              <tr><td><strong>ヴァンクリーフ</strong></td><td>アルハンブラ</td><td>非常に高い</td></tr>
              <tr><td><strong>ブルガリ</strong></td><td>ビー・ゼロワン、セルペンティ</td><td>非常に高い</td></tr>
              <tr><td><strong>エルメス</strong></td><td>シェーヌダンクル</td><td>高い</td></tr>
              <tr><td><strong>シャネル</strong></td><td>ココクラッシュ</td><td>高い</td></tr>
            </tbody>
          </table>
        </div>

        <p>ブランドネックレスを売る場合は、<strong>金買取専門店とブランド買取専門店の両方に見積もりを取る</strong>ことをおすすめします。金の素材価値だけを見る業者と、ブランド価値も含めて評価する業者では、<strong>数万円〜数十万円の差</strong>がつくことがあります。</p>

        <p>各ブランドの詳しい買取相場は、<Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ買取ガイド</Link>、<Link href="/articles/tiffany-kaitori/" className="text-accent hover:underline">ティファニー買取ガイド</Link>、<Link href="/articles/vancleef-kaitori/" className="text-accent hover:underline">ヴァンクリーフ買取ガイド</Link>をご覧ください。</p>

        <h3>ブランドネックレスの査定で重要なポイント</h3>

        <ul>
          <li><strong>付属品:</strong> 箱・保証書・ショッパー（紙袋）が揃っていると査定額アップ</li>
          <li><strong>状態:</strong> 傷・くすみが少ないほど高評価</li>
          <li><strong>人気モデル:</strong> 定番人気モデルは中古市場での需要が高く、高額買取になりやすい</li>
          <li><strong>サイズ:</strong> 一般的なサイズ（40〜45cm）は需要が高い</li>
        </ul>

        <h2>金ネックレスを高く売る5つのコツ</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>

        <p>金ネックレスの買取価格は業者によって1gあたり数百円の差が出ます。20gのネックレスなら1gあたり200円の差で<strong>4,000円もの差額</strong>になります。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>の一括査定で効率的に比較しましょう。</p>

        <h3>2. ブランド品は専門店にも見積もりを取る</h3>

        <p>カルティエやティファニーなどのブランドネックレスは、金の素材価値だけでなく<strong>ブランド価値</strong>も大きいです。金買取店とブランド買取店の両方で見積もりを取り、高い方に売却しましょう。</p>

        <h3>3. ペンダントトップと一緒に売る</h3>

        <p>チェーンとペンダントトップがセットの場合、<strong>一緒に売る方が査定額が高く</strong>なる場合があります。特にブランド品はセットでの価値が評価されます。</p>

        <h3>4. 付属品を揃える</h3>

        <p>保証書、箱、ケースがあると査定額アップにつながります。購入時の領収書も、取得費の証明（税金計算時）に役立ちます。</p>

        <h3>5. 軽く清掃してから査定に出す</h3>

        <p>柔らかい布で軽く拭いてから査定に出しましょう。見た目の印象が良くなり、査定員の心証も良くなります。ただし、<strong>研磨剤や化学薬品は使わない</strong>でください。金を傷つけたり、メッキを剥がしてしまう恐れがあります。</p>

        <CtaBox />

        <h2>金ネックレスの買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>
        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数の買取業者に一括で査定を依頼できるサービス。ネックレスの純度がわからなくても、写真を送るだけで概算査定を受けられます。</p>

        <h3>買取大吉 — 全国600店舗で即現金化</h3>
        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国600店舗以上。ネックレスをその場で計量・査定し、即現金化。チェーン切れや刻印なしでもX線分析で対応。</p>

        <h3>ウリエル — 自宅で完結する出張買取</h3>
        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取に特化。自宅にいながら査定を受けられ、複数のネックレスをまとめて売りたい場合に便利です。</p>

        <h3>ティファナ — 3つの方法から選べる</h3>
        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張・宅配の3方法に対応。ライフスタイルに合わせて選べる柔軟さが魅力です。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "金のネックレスの買取相場はいくらですか？",
              a: "2026年4月現在、K18のネックレスは1gあたり約11,400円が買取目安です。10gのK18ネックレスなら約114,000円、50gの喜平ネックレスなら約570,000円の買取額になります。純度（K24/K18/K14/K10）と重量で価格が決まります。",
            },
            {
              q: "チェーンが切れたネックレスでも売れますか？",
              a: "はい、問題なく売れます。金の買取は素材の重量と純度がベースなので、チェーンが切れていても買取価格は変わりません。留め具の破損、変色、絡まりなど、どんな状態でも査定対象です。",
            },
            {
              q: "喜平ネックレスの6面と8面で買取価格は違いますか？",
              a: "面数の違い自体は買取価格に大きく影響しません。買取価格は主に「純度」と「重量」で決まります。ただし、8面トリプルは6面ダブルより重量が重い傾向があるため、結果的に高額になることが多いです。",
            },
            {
              q: "金メッキのネックレスは売れますか？",
              a: "金メッキ（GP: Gold Plated）のネックレスは金の含有量が非常に少ないため、ほとんどの業者で買取不可です。刻印に「GP」「GF」と書かれている場合はメッキ製品です。判断がつかない場合は、業者に持ち込めばX線分析で判定してもらえます。",
            },
            {
              q: "ネックレスの純度がわからない場合はどうすればいい？",
              a: "刻印を確認してください。チェーンの留め具付近に「K18」「K14」「750」「585」などの刻印があります。刻印がない・読めない場合は、買取業者でX線分析により正確な純度を測定してもらえます。",
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
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
          </Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">金の指輪買取相場ガイド</p>
          </Link>
          <Link href="/articles/kin-bracelet-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">金ブレスレット買取相場ガイド</p>
          </Link>
          <Link href="/articles/kowareta-kin-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">壊れた金・刻印なしの買取ガイド</p>
          </Link>
          <Link href="/articles/cartier-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">カルティエ買取相場ガイド</p>
          </Link>
          <Link href="/articles/tiffany-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">ティファニー買取相場ガイド</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>金のネックレスは、最も身近で最も多く買取に出される金製品です。チェーンが切れていても、デザインが古くても、刻印が消えていても——<strong>金の素材としての価値は変わりません</strong>。</p>

        <p>2026年4月現在、K18の金ネックレスは1gあたり約11,400円。<strong>10gのネックレスなら約11万円</strong>、<strong>50gの喜平ネックレスなら約57万円</strong>の買取が期待できます。</p>

        <p>金ネックレスを少しでも高く売るために、以下のポイントを実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（一括査定で効率的に比較）</li>
          <li><strong>ブランド品は金買取とブランド買取の両方に見積もりを取る</strong></li>
          <li><strong>付属品（保証書・箱）を揃える</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金ネックレスの価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
