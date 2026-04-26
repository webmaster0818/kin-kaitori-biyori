import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "真珠の買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "真珠の買取価格はサイズ・品質・種類によって大きく異なります。アコヤ真珠ネックレス（7mm）で2〜5万円、南洋白蝶真珠ネックレス（10mm以上）で10〜50万円、黒蝶真珠（タヒチパール）で5〜30万円が目安です。鑑別書の有無でも価格が変わります。" } },
    { "@type": "Question", name: "古い真珠のネックレスでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、古い真珠のネックレスでも売れます。ただし、真珠は経年により表面のテリ（光沢）が失われることがあり、状態が悪いと買取価格が下がります。母から受け継いだ真珠でも、状態が良ければ高値がつくこともあります。" } },
    { "@type": "Question", name: "真珠の種類によって価格は違いますか？", acceptedAnswer: { "@type": "Answer", text: "はい、種類によって大きく異なります。一般的に、南洋白蝶真珠（ゴールド・白）が最も高く、次いで黒蝶真珠（タヒチ）、アコヤ真珠の順です。淡水パールは最も安価です。" } },
    { "@type": "Question", name: "真珠の鑑別書がないと売れませんか？", acceptedAnswer: { "@type": "Answer", text: "鑑別書がなくても売れます。買取業者が独自に鑑定します。ただし鑑別書があると品質の証明になるため、スムーズに高値がつきやすくなります。" } },
    { "@type": "Question", name: "ミキモトの真珠は高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ミキモトの真珠はブランド価値が高く、ノーブランドの同品質品より高値がつきます。特にギャランティカードや箱が揃っている場合はさらに高額になります。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年最新】真珠（パール）買取相場ガイド — 種類別の価格と高く売る方法", datePublished: "2026-04-24", dateModified: "2026-04-24", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://kin-kaitori-biyori.pages.dev" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年最新】真珠（パール）買取相場ガイド — 種類別の価格と高く売る方法", description: "真珠（パール）の最新買取相場を種類別・サイズ別に掲載。アコヤ真珠・南洋真珠・タヒチ黒蝶真珠の価格目安、ミキモトなどブランド真珠の買取、高く売るコツを解説。" };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">真珠製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">真珠の買取価格は業者によって大きく異なります。宝石鑑定に強い業者への相談がおすすめです。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function ShinjuKaitoriPage() {
  return (<><FaqSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">真珠（パール）買取ガイド</span></li></ol></nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】真珠（パール）買取相場ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月24日</p>

        <p>真珠（パール）は、冠婚葬祭やフォーマルな場で身につける定番のジュエリーです。しかし「もう使わない真珠のネックレスがある」「母から譲り受けた真珠を売りたい」という方も多いでしょう。</p>

        <p>「真珠の買取相場はいくら？」「古い真珠でも売れる？」「ミキモトの真珠は高く売れる？」——この記事では、真珠の買取に関する<strong>種類別の相場・品質の見方・高く売るコツ</strong>を徹底解説します。</p>

        <h2>真珠の種類と買取相場</h2>

        <h3>真珠の4つの主要な種類</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>種類</th><th>産地</th><th>サイズ</th><th>買取価格の傾向</th></tr></thead>
            <tbody>
              <tr><td><strong>アコヤ真珠</strong></td><td>日本（三重・愛媛・長崎）</td><td>6〜9mm</td><td>最もスタンダード。品質による差が大きい</td></tr>
              <tr><td><strong>南洋白蝶真珠</strong></td><td>オーストラリア・インドネシア・フィリピン</td><td>10〜16mm</td><td>大粒で高価。ゴールドリップは特に高値</td></tr>
              <tr><td><strong>黒蝶真珠（タヒチパール）</strong></td><td>タヒチ（フランス領ポリネシア）</td><td>8〜14mm</td><td>独特の黒〜グリーンの色合いが人気</td></tr>
              <tr><td><strong>淡水パール</strong></td><td>中国（主要産地）</td><td>5〜12mm</td><td>最も安価。買取不可の業者もある</td></tr>
            </tbody>
          </table>
        </div>

        <h3>種類別・サイズ別の買取価格目安</h3>

        <h4>アコヤ真珠ネックレス</h4>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>買取価格の目安</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td>6.0〜6.5mm</td><td>約5,000〜20,000円</td><td>小粒。フォーマル用に人気</td></tr>
              <tr><td>7.0〜7.5mm</td><td>約20,000〜50,000円</td><td>最もスタンダードなサイズ</td></tr>
              <tr><td>8.0〜8.5mm</td><td>約40,000〜100,000円</td><td>大粒。高品質品は高値</td></tr>
              <tr><td>9.0mm以上</td><td>約80,000〜200,000円</td><td>希少サイズ。テリと巻きが良ければ高額</td></tr>
            </tbody>
          </table>
        </div>

        <h4>南洋白蝶真珠ネックレス</h4>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>買取価格の目安</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td>10〜11mm</td><td>約100,000〜200,000円</td><td>エントリーサイズ</td></tr>
              <tr><td>12〜13mm</td><td>約200,000〜500,000円</td><td>人気のサイズ帯</td></tr>
              <tr><td>14mm以上</td><td>約300,000〜1,000,000円以上</td><td>希少。ゴールドリップは特に高値</td></tr>
            </tbody>
          </table>
        </div>

        <h4>黒蝶真珠（タヒチパール）ネックレス</h4>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>買取価格の目安</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td>8〜9mm</td><td>約30,000〜80,000円</td><td></td></tr>
              <tr><td>10〜11mm</td><td>約80,000〜200,000円</td><td>ピーコックグリーンは人気色</td></tr>
              <tr><td>12mm以上</td><td>約150,000〜500,000円</td><td>希少サイズ</td></tr>
            </tbody>
          </table>
        </div>

        <blockquote><p><strong>注意：</strong>上記の価格はあくまで目安です。真珠の買取価格は<strong>テリ（光沢）・巻き（真珠層の厚さ）・キズ・形・色</strong>の5つの要素で大きく変わります。同じサイズでも品質によって数倍〜10倍以上の差が出ます。</p></blockquote>

        <CtaBox />

        <h2>真珠の品質を決める5つの要素</h2>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>要素</th><th>説明</th><th>買取への影響</th></tr></thead>
            <tbody>
              <tr><td><strong>テリ（光沢）</strong></td><td>表面の輝き。真珠の最も重要な品質指標</td><td>テリが強いほど高額。最重要ポイント</td></tr>
              <tr><td><strong>巻き（真珠層の厚さ）</strong></td><td>核の周りの真珠層の厚み</td><td>巻きが厚いほど品質が高く耐久性もある</td></tr>
              <tr><td><strong>キズ</strong></td><td>表面のキズ・突起・窪み</td><td>キズが少ないほど高額</td></tr>
              <tr><td><strong>形</strong></td><td>ラウンド（真円）が最も高評価</td><td>真円に近いほど高額。バロック（不定形）は安い</td></tr>
              <tr><td><strong>色</strong></td><td>ホワイト系・ピンク系・ゴールド系など</td><td>アコヤはピンク系が人気、南洋はゴールドが高値</td></tr>
            </tbody>
          </table>
        </div>

        <h2>ブランド真珠の買取</h2>

        <h3>ブランド別の買取傾向</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>ブランド</th><th>買取価格の傾向</th><th>備考</th></tr></thead>
            <tbody>
              <tr><td><strong>ミキモト（MIKIMOTO）</strong></td><td>ノーブランド品の1.5〜3倍</td><td>世界的ブランド。ギャランティカード必須</td></tr>
              <tr><td><strong>田崎真珠（TASAKI）</strong></td><td>ノーブランド品の1.2〜2倍</td><td>高品質で知られる国内ブランド</td></tr>
              <tr><td><strong>ティファニー</strong></td><td>ブランド価値で大幅プラス</td><td>箱・証明書で大きく変わる</td></tr>
              <tr><td><strong>ノーブランド</strong></td><td>真珠の品質のみで評価</td><td>品質が高ければ十分に高値</td></tr>
            </tbody>
          </table>
        </div>

        <h2>真珠を高く売る5つのコツ</h2>

        <ol>
          <li><strong>宝石鑑定に強い業者に査定を依頼する：</strong>真珠の評価は専門知識が必要です。金買取専門店よりも宝石買取に実績のある業者の方が正確に評価してくれます。</li>
          <li><strong>鑑別書・ギャランティカードを揃える：</strong>品質を証明する書類があると査定がスムーズで、高値がつきやすくなります。</li>
          <li><strong>ブランド品はブランド買取店にも見積もりを取る：</strong>ミキモトやタサキの真珠は、宝石買取専門店とブランド買取専門店の両方に見積もりを取りましょう。</li>
          <li><strong>状態を良好に保つ：</strong>真珠は有機物であるため、乾燥・高温・化学薬品に弱いです。保管状態が良いほど高値がつきます。使用後は柔らかい布で拭き、密閉せず通気性のある場所で保管しましょう。</li>
          <li><strong>糸替え・クリーニングは不要：</strong>売却前に糸替えやクリーニングをする必要はありません。費用をかけても買取価格に反映されないことが多いです。</li>
        </ol>

        <CtaBox />

        <h2>真珠買取の注意点</h2>

        <h3>イミテーション（模造真珠）は買取不可</h3>
        <p>プラスチックやガラスで作られたイミテーションパールは買取対象外です。本物の真珠かどうかわからない場合は、表面のザラつき（本物は微細な凸凹がある）を確認するか、業者に鑑定してもらいましょう。</p>

        <h3>淡水パールは買取不可の業者もある</h3>
        <p>淡水パールは生産量が多く希少性が低いため、買取不可または非常に安価（数百円〜数千円）になることが多いです。</p>

        <h3>経年劣化に注意</h3>
        <p>真珠は有機物（炭酸カルシウム）でできているため、<strong>時間とともにテリ（光沢）が失われます</strong>。数十年放置された真珠は光沢が完全に失われ、買取不可になることもあります。売却を検討しているなら、<strong>早めに査定を受ける</strong>ことをおすすめします。</p>

        <h2>4社比較 — 真珠買取におすすめの業者</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>業者名</th><th>方式</th><th>真珠買取の特徴</th><th>こんな人に</th></tr></thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>一括査定</td><td>複数の宝石買取業者を比較可能</td><td>最高値で売りたい</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>店頭買取</td><td>真珠を含む宝石全般に対応</td><td>即現金化したい</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>出張買取</td><td>自宅で完結。出張費無料</td><td>自宅で完結したい</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>出張/店頭/宅配</td><td>宝石を含む幅広い品目に対応</td><td>方法を選びたい</td></tr>
            </tbody>
          </table>
        </div>

        <h2>真珠買取に関するFAQ</h2>
        <div className="space-y-3 not-prose">
          {[
            { q: "真珠の買取相場はいくらですか？", a: "種類・サイズ・品質で大きく異なります。アコヤ真珠ネックレス（7mm）で2〜5万円、南洋白蝶真珠（12mm）で20〜50万円が目安です。" },
            { q: "古い真珠でも売れますか？", a: "はい、売れます。ただし経年でテリが失われると価格は下がります。状態が良ければ古い真珠でも高値がつきます。" },
            { q: "ミキモトの真珠は高く売れますか？", a: "はい、ミキモトはブランド価値が高く、ノーブランドの同品質品より1.5〜3倍の買取額が期待できます。ギャランティカードがあるとさらに有利です。" },
            { q: "鑑別書がなくても売れますか？", a: "はい、鑑別書なしでも売れます。ただし鑑別書があると品質の証明になり、高値がつきやすくなります。" },
            { q: "淡水パールは買取できますか？", a: "業者によります。淡水パールは希少性が低いため、買取不可または数百円〜数千円程度になることが多いです。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>関連記事</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link href="/articles/diamond-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">ダイヤモンド・宝石買取ガイド</p></Link>
          <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">品目ガイド</span><p className="text-sm font-bold mt-1">K18（18金）買取相場ガイド</p></Link>
          <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">売却ガイド</span><p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p></Link>
          <Link href="/articles/kin-kaitori-souba/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow"><span className="text-xs text-accent font-bold">相場情報</span><p className="text-sm font-bold mt-1">金買取相場一覧</p></Link>
        </div>

        <h2>まとめ</h2>
        <p>真珠の買取価格は種類・サイズ・品質によって数千円〜100万円以上と大きな幅があります。ミキモトやタサキなどのブランド真珠は、ブランド価値が上乗せされてさらに高額になります。</p>
        <p>真珠は有機物であるため<strong>経年劣化します</strong>。使わない真珠がある場合は、テリが失われる前に早めに査定を受けることをおすすめします。</p>
        <ol>
          <li><strong>宝石鑑定に強い業者に査定を依頼する</strong></li>
          <li><strong>鑑別書・ギャランティカードを揃える</strong></li>
          <li><strong>ブランド品はブランド買取店にも見積もりを取る</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で真珠の価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
