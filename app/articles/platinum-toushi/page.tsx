import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261119: 「プラチナ 投資」。出典: 田中貴金属「本日の貴金属価格」、徳力本店「取扱品目・手数料」・「純金・プラチナ積立」（月3,000円〜・年会費1,100円・1,000円ごとに25円）、
   三菱マテリアル「積立購入」（1,000円につき26円/31円）・「引出手数料…の改定について」（2026-04-01）、JPX「純プラチナ上場信託（1541）」銘柄概要（2026-02-27現在）、
   JPX 白金標準先物・白金ミニ先物・ポケットプラチナ100先物・白金限日先物 制度概要（2026/04/13 更新）・限日先物取引休止（2026-12-22）、
   国税庁「金地金等に係る譲渡所得の調査状況」・No.3105・No.3152・No.1463・No.1522。確認日 2026-11-19。
   勧める・勧めないは書かない（仕組み・費用・税の事実のみ）。費用の試算は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "プラチナ投資の方法と費用 — 地金・積立・ETF・先物の手数料と税金を公式資料で比較【毎朝更新】";
const URL = "https://gold-biyori.com/articles/platinum-toushi/";
const DESC = "プラチナに投資する4つの方法（プラチナ地金・積立・ETF・先物）の手数料と税金を、徳力本店・三菱マテリアル・JPX・国税庁の公式資料で整理しました。月1万円を1年積み立てた場合の手数料、先物1枚の金額を毎朝更新の価格で計算しています。";

const T = goldData.tanaka_official;
const PT_R = T.pt_retail_per_g as number;
const PT_B = T.pt_buyback_per_g as number;
const AU_R = T.au_retail_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const ptSpread = ((PT_R - PT_B) / PT_B) * 100;
const auPtRatio = AU_R / PT_R;

/* 月1万円×12か月の積立（当サイトの試算） */
const YEAR = 120000;
const tokurikiFee = (YEAR / 1000) * 25 + 1100; // 買付手数料 1,000円ごと25円＋年会費1,100円
const mmcFee = (YEAR / 1000) * 26; // 月額合計1万円以上は1,000円につき26円（年会費は含めない）
const etfFee = YEAR * 0.0055; // 信託報酬 年0.55%を12万円の残高に1年かけた場合

const FUTURES = [
  { name: "白金標準先物", unit: 500, kind: "現物先物（受渡あり。純度99.95%以上の白金地金）", note: "偶数月の直近6限月" },
  { name: "白金ミニ先物", unit: 100, kind: "現金決済先物（白金標準先物の価格が対象）", note: "偶数月の直近6限月" },
  { name: "ポケットプラチナ100先物", unit: 100, kind: "現金決済先物（白金標準先物の価格が対象）", note: "2026年4月13日上場。翌年12月限の1限月制" },
  { name: "白金限日先物", unit: 100, kind: "限日現金決済先物", note: "2026年12月22日を取引最終日として休止" },
];

const FAQS = [
  { q: "プラチナに投資する方法には何がありますか？", a: "主に、プラチナ地金（現物）を買う方法、地金商の積立で少しずつ買う方法、プラチナに連動するETF（例: 純プラチナ上場信託・銘柄コード1541）を証券会社で買う方法、大阪取引所の白金先物を取引する方法があります。費用と税金の扱いはそれぞれ異なります。" },
  { q: "プラチナの積立は月いくらからできますか？", a: "2026年11月19日の確認では、徳力本店のプラチナのコースは月3,000円から（別に年会費1,100円・購入金額1,000円ごとに25円の買付手数料）、三菱マテリアルの月額積立購入は3,000円以上1,000円単位（積立購入手数料は月額合計1万円以上で1,000円につき26円、1万円未満で31円）です。" },
  { q: "プラチナのETFの費用と税金は？", a: "JPXの銘柄概要では、純プラチナ上場信託（1541）の信託報酬は年0.55%（税込）で、NISA制度の成長投資枠の対象です（2026年2月27日現在）。ETFの譲渡益は上場株式等に係る譲渡所得等として申告分離課税です（国税庁 No.1463）。" },
  { q: "プラチナ地金を売ったときの税金は？", a: "国税庁は、金地金等（金・白金地金、金貨・白金貨）の譲渡益は原則として総合課税の譲渡所得として課税されるとしています。年50万円の特別控除があり、所有期間が5年を超える場合は控除後の金額の2分の1が課税の対象です（No.3105・No.3152）。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "プラチナ投資の方法と費用", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-19", dateModified: "2026-11-19",
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(art) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
  </>);
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

export default function PlatinumToushiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-platinum.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-platinum-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">プラチナ投資の方法と費用</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="プラチナ投資の方法と費用の比較のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">プラチナ投資の方法と費用 — 地金・積立・ETF・先物の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月19日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／手数料・制度は2026年11月19日に各社公式で確認</p>

        <p>プラチナに投資する方法には、<strong>プラチナ地金・積立・ETF・先物</strong>があります。最新の田中貴金属のプラチナの店頭小売価格は1g {yen(PT_R)}円、店頭買取価格は1g {yen(PT_B)}円で、小売価格は買取価格より約{ptSpread.toFixed(1)}%高くなっています。同じ時点の金の小売価格はプラチナの約{auPtRatio.toFixed(1)}倍です（税込・{pubLabel}・当サイトの計算）。当サイトはプラチナへの投資を勧める・勧めない立場ではなく、仕組み・費用・税を公式資料の数字で並べています。</p>

        <h2>4つの方法の比較</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>方法</th><th>主な費用</th><th>税金（売却益）</th><th>確認した例</th></tr></thead>
            <tbody>
              <tr><td>プラチナ地金（現物）</td><td>小売価格と買取価格の差＋500g未満はバー1本ごとの手数料</td><td>総合課税の譲渡所得（国税庁・No.3105・No.3152）</td><td>徳力本店: 5g〜500gの6サイズ。100gバーの購入手数料6,600円</td></tr>
              <tr><td>積立</td><td>買付（積立購入）手数料・年会費、地金で受け取る場合は引出手数料</td><td>契約の形態で扱いが異なるため、取扱会社の説明書面で確認</td><td>徳力本店: 月3,000円〜・年会費1,100円・1,000円ごとに25円／三菱マテリアル: 1,000円につき26円（月額合計1万円以上）</td></tr>
              <tr><td>ETF</td><td>信託報酬（年率）、証券会社の売買手数料</td><td>上場株式等の譲渡所得等・申告分離課税（No.1463）</td><td>純プラチナ上場信託（1541）: 信託報酬 年0.55%（税込）</td></tr>
              <tr><td>先物</td><td>取引手数料、証拠金</td><td>先物取引に係る雑所得等・申告分離課税（No.1522）</td><td>大阪取引所 白金標準先物: 取引単位500g</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">各社・各商品の条件は2026年11月19日時点（1541は JPX 銘柄概要の2026年2月27日現在の値）。三菱マテリアルは、会員の寄託残高からプラチナ地金500g・1kgを引き出す場合の引出手数料を無料としています（2026年4月1日のお知らせ）。</p>

        <h2>月1万円を1年積み立てた場合の手数料（当サイトの試算）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>方法</th><th>1年間の手数料の目安</th><th>12万円に対する割合</th></tr></thead>
            <tbody>
              <tr><td>徳力本店 プラチナ積立（買付手数料＋年会費）</td><td>{yen(tokurikiFee)}円</td><td>{((tokurikiFee / YEAR) * 100).toFixed(1)}%</td></tr>
              <tr><td>三菱マテリアル 月額積立（積立購入手数料のみ）</td><td>{yen(mmcFee)}円</td><td>{((mmcFee / YEAR) * 100).toFixed(1)}%</td></tr>
              <tr><td>ETF 1541（信託報酬のみ・12万円を1年保有した場合）</td><td>約{yen(etfFee)}円</td><td>0.55%</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 徳力本店＝12万円÷1,000円×25円＋年会費1,100円。三菱マテリアル＝12万円÷1,000円×26円（年会費などの条件は同社の案内をご確認ください）。ETF＝毎月買い足す場合は平均残高が小さくなるため、実際の信託報酬はこの値より少なくなります。証券会社の売買手数料、売却時の小売・買取の価格差、税金は含めていません。</p>
        <p>積立は購入時の手数料、ETF は保有している間の信託報酬が中心で、費用のかかり方が異なります。売るときにかかる費用（地金の価格差・手数料）は、<Link href="/articles/platinum-ingot/">プラチナインゴットのサイズと手数料</Link>でサイズ別に計算しています。</p>

        <h2>大阪取引所の白金先物（1枚の金額は毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>商品</th><th>取引単位</th><th>種類</th><th>1枚の金額の目安（当サイトの計算）</th><th>備考</th></tr></thead>
            <tbody>
              {FUTURES.map((f) => (
                <tr key={f.name}><td>{f.name}</td><td>{f.unit}g</td><td>{f.kind}</td><td>約{yen(PT_R * f.unit)}円</td><td>{f.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本取引所グループ 各商品の制度概要（2026/04/13 更新）、「限日先物取引の休止と新商品の上場」。1枚の金額は田中貴金属のプラチナの店頭小売価格×取引単位で計算した参考値で、先物の価格とは一致しません。先物は証拠金で取引でき、価格の変動による損益は1枚の金額全体に対して生じます。金の先物は<Link href="/articles/kin-sakimono-torihiki/">金先物取引とは</Link>で解説しています。</p>

        <h2>ETF「純プラチナ上場信託（1541）」の仕組み</h2>
        <ul>
          <li>三菱UFJ信託銀行が管理する ETF で、大阪取引所のプラチナの先物価格から評価したプラチナ地金1gあたりの理論価格（円）との連動を目指します。</li>
          <li>一定の受益権口数を持っていれば、受益権と引き換えにプラチナ地金の現物を受け取ることも可能とされています。</li>
          <li>JPX の銘柄概要は、元本は保証されず、価格の変動で損失が生じることがあると記載しています。</li>
        </ul>
        <p>プラチナの価格の推移と需給は<Link href="/articles/platinum-kachi-suii/">プラチナの価値と価格推移</Link>、金・銀の同じ比較は<Link href="/articles/kin-toushin-hiyou-hikaku/">金の投資信託の費用比較</Link>と<Link href="/articles/gin-toushi/">銀投資の方法と費用</Link>にまとめています。</p>

        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {FAQS.map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>出典</h2>
        <ul className="text-sm">
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>徳力本店「取扱品目・手数料」<a href="https://www.tokuriki-kanda.co.jp/goldetc/item/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a>・「徳力の純金・プラチナ積立のご紹介」<a href="https://www.tokuriki-kanda.co.jp/goldetc/fixed/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>三菱マテリアル「積立購入」<a href="https://gold.mmc.co.jp/howto/mgp/trans/deposit.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「金地金・プラチナ地金・銀地金引出手数料および金地金販売手数料の改定について」（2026年4月1日）<a href="https://gold.mmc.co.jp/info/20260401_5.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a></li>
          <li>日本取引所グループ「純プラチナ上場信託（現物国内保管型）1541」銘柄概要 <a href="https://www.jpx.co.jp/equities/products/etfs/issues/files/1541-j.pdf" target="_blank" rel="noopener noreferrer">jpx.co.jp</a></li>
          <li>日本取引所グループ「白金標準先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/platinum-standard-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「白金ミニ先物」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/platinum-mini-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「ポケットプラチナ100先物」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/platinum-cash-settled-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「白金限日先物」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/platinum-rolling-spot-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「限日先物取引の休止と新商品の上場」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/platinum-rolling-spot-futures/02.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a></li>
          <li>国税庁「金地金等に係る譲渡所得の調査状況」<a href="https://www.nta.go.jp/information/release/kokuzeicho/2015/shotoku_shohi/sanko04_05.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・タックスアンサー No.3105 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3152 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.1463 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1463.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.1522 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月19日。手数料・制度・税制は変更される場合があります。お取引の前に、各社の最新情報と説明書面をご確認ください。</p>

        <RelatedArticles currentSlug="platinum-toushi" relatedSlugs={["platinum-ingot", "platinum-kachi-suii", "platinum-kaitori", "gin-toushi", "kin-toushin-hiyou-hikaku", "kin-sakimono-torihiki"]} />
      </article>
    </div>
  </>);
}
