import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "ブルガリのジュエリーはどのくらいで買取されますか？", acceptedAnswer: { "@type": "Answer", text: "ブルガリのK18ジュエリーは素材価値+ブランド価値で評価されます。ビー・ゼロワンリング（K18WG）で約8万〜15万円、セルペンティネックレス（K18PG）で約15万〜35万円、ブルガリ・ブルガリリングで約6万〜12万円が2026年4月時点の買取相場の目安です。" } },
      { "@type": "Question", name: "ブルガリの買取価格は定価の何割くらいですか？", acceptedAnswer: { "@type": "Answer", text: "モデルや素材によりますが、ブルガリのジュエリーの買取率は定価の3〜6割が目安です。セルペンティなどの人気モデルは定価の4〜6割、ビー・ゼロワンなどの定番モデルは3〜5割程度です。" } },
      { "@type": "Question", name: "ブルガリの箱や保証書がなくても買取できますか？", acceptedAnswer: { "@type": "Answer", text: "買取は可能です。ただし、ブルガリの専用ケース・保証書・購入レシートがあると5〜15%程度の査定額アップが期待できます。特にセルペンティなどの高額モデルでは付属品の影響が大きくなります。" } },
      { "@type": "Question", name: "ブルガリの腕時計は買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ブルガリの腕時計も高額買取の対象です。ブルガリ・ブルガリ、オクト、セルペンティなどの人気モデルは10万〜40万円以上の買取が期待できます。保証書や箱があると査定額がアップします。" } },
      { "@type": "Question", name: "ブルガリのバッグや財布も買取できますか？", acceptedAnswer: { "@type": "Answer", text: "買取可能です。セルペンティフォーエバーなどの人気バッグは数万円〜十数万円の買取が期待できます。財布は使用感があると数千円程度になることが多いです。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "【2026年最新】ブルガリ（BVLGARI）買取相場ガイド — 人気モデル別の価格と高く売るコツ",
    datePublished: "2026-04-26",
    dateModified: "2026-04-26",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
    description: "ブルガリ（BVLGARI）の最新買取相場をモデル別に掲載。ビー・ゼロワン・セルペンティ・ブルガリブルガリの買取価格、高く売るコツ、おすすめ買取業者4社を徹底解説。",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

export const metadata: Metadata = {
  title: "【2026年最新】ブルガリ（BVLGARI）買取相場ガイド — 人気モデル別の価格と高く売るコツ",
  description:
    "ブルガリ（BVLGARI）の最新買取相場をモデル別に掲載。ビー・ゼロワン・セルペンティ・ブルガリブルガリの買取価格目安、高く売るコツ、おすすめ買取業者4社を徹底解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">ブルガリの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ブルガリの買取価格は業者によって大きな差が出ます。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function BvlgariKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">ブルガリ買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-brand.png" alt="ブランドジュエリーの買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】ブルガリ（BVLGARI）買取相場と高く売る方法</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月26日</p>

        <p>ブルガリ（BVLGARI）は1884年にローマで創業したイタリアを代表するハイジュエリーブランドです。ビー・ゼロワン、セルペンティ、ブルガリ・ブルガリなどの人気コレクションは中古市場でも高い需要があり、<strong>素材価値とブランド価値の両方が評価</strong>された高額買取が期待できます。</p>

        <p>「ブルガリの指輪を売りたい」「BVLGARIの買取相場はいくら？」「セルペンティはどのくらいで売れる？」——この記事では、ブルガリの買取相場をモデル別に徹底解説し、<strong>最高値で売却するための実践ガイド</strong>をお届けします。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>ブルガリの人気コレクション別の最新買取相場</li>
          <li>ジュエリー・腕時計・バッグの買取価格の傾向</li>
          <li>ブルガリを高く売るための5つのポイント</li>
          <li>おすすめ買取業者4社の比較</li>
        </ul>

        <h2>ブルガリが高額買取される理由</h2>

        <h3>イタリアンハイジュエリーの最高峰</h3>

        <p>ブルガリは<strong>大胆なデザインとカラーストーン（色石）の使い方</strong>で世界的に知られています。古代ローマの建築や芸術からインスピレーションを受けた独自のデザインは、他のジュエリーブランドとは一線を画す存在感があります。</p>

        <h3>中古市場での需要拡大</h3>

        <p>2026年現在、ブルガリの中古品は<strong>需要に対して供給が不足</strong>している状況です。特にアジア市場での人気が高く、セルペンティやビー・ゼロワンの中古品は即売れる傾向にあります。この需給バランスが買取相場を押し上げています。</p>

        <h3>金相場高騰による底上げ</h3>

        <p>ブルガリのジュエリーはK18（18金）が主要素材です。2026年4月現在、K18の買取相場は1gあたり約11,200〜11,600円と歴史的高値にあるため、素材価値だけでも高額になります。</p>

        <h2>ブルガリ人気コレクション別の買取相場（2026年4月）</h2>

        <h3>ビー・ゼロワン（B.zero1）</h3>

        <p>ブルガリの代表的コレクション。古代ローマのコロッセオからインスピレーションを得たスパイラルデザインが特徴です。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ビー・ゼロワン リング 1バンド</strong></td><td>K18WG</td><td>約6万〜10万円</td></tr>
              <tr><td><strong>ビー・ゼロワン リング 3バンド</strong></td><td>K18YG</td><td>約8万〜15万円</td></tr>
              <tr><td><strong>ビー・ゼロワン リング 4バンド</strong></td><td>K18PG</td><td>約10万〜18万円</td></tr>
              <tr><td><strong>ビー・ゼロワン ネックレス</strong></td><td>K18WG</td><td>約10万〜18万円</td></tr>
              <tr><td><strong>ビー・ゼロワン ブレスレット</strong></td><td>K18YG</td><td>約12万〜22万円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>セルペンティ（Serpenti）</h3>

        <p>蛇をモチーフにしたブルガリのアイコン的コレクション。ジュエリー・腕時計・バッグまで幅広く展開しています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>セルペンティ ヴァイパー リング</strong></td><td>K18PG</td><td>約10万〜18万円</td></tr>
              <tr><td><strong>セルペンティ ヴァイパー ネックレス</strong></td><td>K18PG + ダイヤ</td><td>約15万〜35万円</td></tr>
              <tr><td><strong>セルペンティ ヴァイパー ブレスレット</strong></td><td>K18PG + ダイヤ</td><td>約25万〜50万円</td></tr>
              <tr><td><strong>セルペンティ トゥボガス ウォッチ</strong></td><td>SS</td><td>約20万〜35万円</td></tr>
              <tr><td><strong>セルペンティ フォーエバー バッグ</strong></td><td>レザー</td><td>約5万〜15万円</td></tr>
            </tbody>
          </table>
        </div>

        <p>セルペンティはブルガリで最も人気が高く、<strong>パヴェダイヤをあしらったハイジュエリーモデルは100万円〜250万円以上</strong>の買取価格になることもあります。</p>

        <h3>ブルガリ・ブルガリ（BVLGARI BVLGARI）</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ブルガリ・ブルガリ リング</strong></td><td>K18PG</td><td>約6万〜12万円</td></tr>
              <tr><td><strong>ブルガリ・ブルガリ ネックレス</strong></td><td>K18YG</td><td>約8万〜15万円</td></tr>
              <tr><td><strong>ブルガリ・ブルガリ ウォッチ</strong></td><td>SS/K18コンビ</td><td>約20万〜40万円</td></tr>
            </tbody>
          </table>
        </div>

        <h3>その他の人気モデル</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>モデル</th>
                <th>素材</th>
                <th>買取相場の目安</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ディーヴァ ドリーム ネックレス</strong></td><td>K18PG + ダイヤ + マザーオブパール</td><td>約12万〜25万円</td></tr>
              <tr><td><strong>フィオレヴァー リング</strong></td><td>K18WG + ダイヤ</td><td>約10万〜20万円</td></tr>
              <tr><td><strong>オクト フィニッシモ ウォッチ</strong></td><td>チタン/SS</td><td>約30万〜60万円</td></tr>
              <tr><td><strong>アルミニウム ウォッチ</strong></td><td>アルミニウム/ラバー</td><td>約5万〜10万円</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote>
          <p><strong>注意：</strong>上記はあくまで目安です。買取価格はモデルの状態、製造年、付属品の有無、サイズにより変動します。</p>
        </blockquote>

        <CtaBox />

        <h2>ブルガリを高く売るための5つのポイント</h2>

        <ol>
          <li>
            <strong>ブランド買取に強い業者に見積もりを取る</strong>
            <p>ブルガリはブランド価値が大きいジュエリーです。金の素材買取専門店だけでなく、<strong>ブルガリの査定経験が豊富なブランド買取店</strong>にも見積もりを依頼しましょう。一括査定で複数業者を比較するのが効率的です。</p>
          </li>
          <li>
            <strong>付属品を揃える</strong>
            <p>ブルガリの専用ケース（赤い箱）、保証書、購入レシート、鑑定書（宝石付きの場合）を揃えることで<strong>5〜15%の査定額アップ</strong>が期待できます。</p>
          </li>
          <li>
            <strong>状態を整える</strong>
            <p>目に見える汚れは柔らかい布で拭いておきましょう。ただし、セラミックやマザーオブパールなどのデリケートな素材は無理に磨かず、そのまま持ち込んでください。</p>
          </li>
          <li>
            <strong>金相場が高い時に売る</strong>
            <p>K18素材のブルガリは金相場に連動します。2026年4月現在、金相場は歴史的高値にあり、売却には好条件です。</p>
          </li>
          <li>
            <strong>複数のジュエリーをまとめて売る</strong>
            <p>複数点まとめて査定に出すと、業者側も取引効率が上がるため、1点あたりの査定額を上乗せしてくれることがあります。</p>
          </li>
        </ol>

        <h2>4社比較 — ブルガリ買取におすすめの業者</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>方式</th>
                <th>ブルガリ買取の特徴</th>
                <th>こんな人に</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>ヒカカク！</strong></td>
                <td>一括査定</td>
                <td>複数業者のブルガリ買取価格を一括比較。最高値が見つかりやすい</td>
                <td>最高値で売りたい</td>
              </tr>
              <tr>
                <td><strong>買取大吉</strong></td>
                <td>店頭買取</td>
                <td>全国600店舗以上で即日対応。ブルガリの査定実績多数</td>
                <td>即現金化したい</td>
              </tr>
              <tr>
                <td><strong>ウリエル</strong></td>
                <td>出張買取</td>
                <td>自宅完結。出張費・査定料無料でブルガリの査定OK</td>
                <td>自宅で完結したい</td>
              </tr>
              <tr>
                <td><strong>ティファナ</strong></td>
                <td>出張/店頭/宅配</td>
                <td>3つの方法から選択。ブランドジュエリー・腕時計・バッグまで幅広く対応</td>
                <td>方法を選びたい</td>
              </tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>ブルガリ買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "ブルガリのジュエリーはどのくらいで買取されますか？",
              a: "ブルガリのK18ジュエリーは素材価値+ブランド価値で評価されます。ビー・ゼロワンリング（K18WG）で約8万〜15万円、セルペンティネックレス（K18PG）で約15万〜35万円、ブルガリ・ブルガリリングで約6万〜12万円が2026年4月時点の買取相場の目安です。",
            },
            {
              q: "ブルガリの買取価格は定価の何割くらいですか？",
              a: "モデルや素材によりますが、ブルガリのジュエリーの買取率は定価の3〜6割が目安です。セルペンティなどの人気モデルは定価の4〜6割、ビー・ゼロワンなどの定番モデルは3〜5割程度です。金相場の高騰により素材価値が底上げされ、買取率は上昇傾向にあります。",
            },
            {
              q: "ブルガリの腕時計は買取できますか？",
              a: "はい、ブルガリの腕時計も高額買取の対象です。ブルガリ・ブルガリ（SS/K18コンビ）で約20万〜40万円、オクトフィニッシモで約30万〜60万円、セルペンティトゥボガスで約20万〜35万円が目安です。保証書・箱・コマの有無が査定額に影響します。",
            },
            {
              q: "ブルガリの箱や保証書がなくても買取できますか？",
              a: "買取は可能です。ただし、ブルガリの専用ケース・保証書・購入レシートがあると5〜15%程度の査定額アップが期待できます。特にセルペンティなどの高額モデルでは付属品の有無が大きな差になります。",
            },
            {
              q: "ブルガリとカルティエ、買取価格が高いのはどちらですか？",
              a: "一般的にカルティエの方がリセールバリュー（定価に対する買取率）が高い傾向にあります。ただし、ブルガリのセルペンティやビー・ゼロワンは人気が非常に高く、モデルによってはカルティエと同等またはそれ以上の買取率になることもあります。",
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
          <Link href="/articles/cartier-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">カルティエ買取相場ガイド</p>
          </Link>
          <Link href="/articles/vancleef-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">ブランドガイド</span>
            <p className="text-sm font-bold mt-1">ヴァンクリーフ買取相場ガイド</p>
          </Link>
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">K18（18金）買取相場ガイド</p>
          </Link>
          <Link href="/articles/diamond-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
            <span className="text-xs text-accent font-bold">品目ガイド</span>
            <p className="text-sm font-bold mt-1">ダイヤモンド・宝石買取ガイド</p>
          </Link>
        </div>

        <h2>まとめ</h2>

        <p>ブルガリ（BVLGARI）はイタリアを代表するハイジュエリーブランドであり、セルペンティ・ビー・ゼロワン・ブルガリブルガリなどの人気コレクションは<strong>中古市場でも高い需要と買取相場</strong>を維持しています。</p>

        <p>2026年4月現在、金相場の高騰により素材価値が底上げされ、ブルガリのK18ジュエリーの買取相場は上昇傾向です。セルペンティのパヴェダイヤモデルは100万円以上、ビー・ゼロワンリングは約8万〜18万円の買取が期待できます。</p>

        <p>ブルガリを最高値で売るために、以下の3つを実践してください。</p>

        <ol>
          <li><strong>ブランド買取店と金買取店の両方に見積もりを取る</strong>（一括査定が効率的）</li>
          <li><strong>付属品（専用ケース・保証書等）を揃える</strong></li>
          <li><strong>金相場が高い今のうちに売却を検討する</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でお手持ちのブルガリの買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
