import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261117: 「金先物取引」。出典: 日本取引所グループ（大阪取引所）金標準先物・金ミニ先物・ポケットゴールド100先物・金限日先物の制度概要
   （2026/04/13 更新）、「限日先物取引の休止と新商品の上場」、国税庁 タックスアンサー No.1522。確認日 2026-11-17。
   勧める・勧めないは書かない（仕組み・費用・税の事実のみ）。1枚あたりの金額は田中貴金属の小売価格から当サイトが計算した目安 */
const TITLE = "金先物取引とは？大阪取引所の4商品の取引単位・決済方法・税金と、2026年12月の金限日先物の休止";
const URL = "https://gold-biyori.com/articles/kin-sakimono-torihiki/";
const DESC = "金先物取引の仕組みを、大阪取引所の制度概要と国税庁のタックスアンサーで整理しました。金標準先物・金ミニ・ポケットゴールド100・金限日の取引単位と決済方法、1枚あたりの金額の目安（毎朝更新）、税金、金限日先物の2026年12月の休止を掲載しています。";

const AU_RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
/* 先物の価格は消費税を含まないため、田中の店頭小売価格（税込）を1.1で割った値を「1gの目安」とする（当サイトの計算・実際の先物価格とは異なる） */
const P_EST = AU_RETAIL / 1.1;

const PRODUCTS = [
  { name: "金標準先物", type: "現物先物取引", unit: "1kg", g: 1000, tick: "1gにつき1円（1枚1,000円）", tickYen: 1000, month: "偶数月の直近6限月", settle: "転売・買戻し、または最終決済（現物の受渡し）", start: "1982年3月23日" },
  { name: "金ミニ先物", type: "限月現金決済先物取引", unit: "100g", g: 100, tick: "1gにつき50銭（1枚50円）", tickYen: 50, month: "偶数月の直近6限月", settle: "転売・買戻し、または最終決済（最終清算数値による差金決済）", start: "2007年7月17日" },
  { name: "ポケットゴールド100先物", type: "限月現金決済先物取引", unit: "100g", g: 100, tick: "1gにつき1円（1枚100円）", tickYen: 100, month: "翌年12月限の1限月（10〜12月は2限月）", settle: "転売・買戻し、または最終決済（最終清算数値による差金決済）", start: "2026年4月13日" },
  { name: "金限日先物", type: "限日現金決済先物取引", unit: "100g", g: 100, tick: "1gにつき1円（1枚100円）", tickYen: 100, month: "限月なし（毎日ロールオーバー）", settle: "転売・買戻し。2026年12月22日を取引最終日として休止", start: "2015年5月7日" },
];

const FAQS = [
  { q: "金先物取引とは何ですか？", a: "将来の決められた期日（限月）に、金を今決めた価格で売買することを約束する取引です。日本では大阪取引所に金の先物が上場しており、期日までに反対売買（転売・買戻し）をして差額を受け払いするか、金標準先物では期日に現物の受渡しで決済します。" },
  { q: "金先物の1枚はいくらですか？", a: "金標準先物は1枚1kg、金ミニ先物・ポケットゴールド100先物・金限日先物は1枚100gです。田中貴金属の最新の店頭小売価格を消費税抜きに換算した目安では、1kgは約" + yen(P_EST * 1000) + "円、100gは約" + yen(P_EST * 100) + "円です（当サイトの計算）。取引には全額ではなく証拠金を預けます。証拠金は日本証券クリアリング機構（JSCC）がVaR方式で計算します。" },
  { q: "金先物の利益にかかる税金は？", a: "国税庁によると、一定の先物取引の差金等決済による所得は「先物取引に係る雑所得等」として、所得税15%（ほかに地方税5%）の申告分離課税です。平成25年から令和29年までは復興特別所得税（基準所得税額の2.1%）も納めます（令和9年分以後は1.1%となり、防衛特別所得税1%が加わります）。商品の受渡しが行われるものは、この特例の対象から除かれます。" },
  { q: "金限日先物はなくなるのですか？", a: "大阪取引所は、金限日先物（限日現金決済先物取引）を2026年12月22日を取引最終日として休止すると公表しています。最後まで保有している建玉は新商品へ移行せず、12月23日に算出する理論現物価格で最終決済されます。代わりの商品として、2026年4月13日にポケットゴールド100先物が上場しています。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金先物取引とは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-17", dateModified: "2026-11-17",
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

export default function KinSakimonoTorihikiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-spot-vs.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-spot-vs-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金先物取引とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金先物取引の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金先物取引とは — 大阪取引所の4商品の仕組み・費用・税金</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月17日／制度は2026年11月17日に大阪取引所の公式サイトで確認／金額の目安: {pubLabel}の田中貴金属の公表値から計算（毎朝自動更新）</p>

        <p>金先物取引は、<strong>将来の期日（限月）に、金を今決めた価格で売買することを約束する取引</strong>です。日本では大阪取引所（日本取引所グループ）に、<strong>金標準先物（1kg）・金ミニ先物（100g）・ポケットゴールド100先物（100g）・金限日先物（100g）</strong>の4つが上場しています。取引には代金の全額ではなく証拠金を預け、利益は「先物取引に係る雑所得等」として申告分離課税（所得税15%・地方税5%ほか）の対象です。なお、<strong>金限日先物は2026年12月22日を取引最終日として休止</strong>されます。当サイトは先物取引を勧める・勧めない立場ではなく、制度と数字を公式情報にもとづいて掲載しています。</p>

        <h2>大阪取引所の金先物4商品</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>商品</th><th>取引の種類</th><th>取引単位</th><th>呼値の単位</th><th>限月</th><th>決済方法</th><th>取引開始日</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.name}><td>{p.name}</td><td>{p.type}</td><td>{p.unit}</td><td>{p.tick}</td><td>{p.month}</td><td>{p.settle}</td><td>{p.start}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本取引所グループ「金標準先物」「金ミニ先物」「ポケットゴールド100先物」「金限日先物」の制度概要（2026年4月13日更新）。金標準先物・金ミニ先物・金限日先物は2020年7月27日に東京商品取引所から大阪取引所へ移管されました。金ミニ先物とポケットゴールド100先物の取引対象は「金標準先物の価格」です。</p>

        <h2>共通のルール</h2>
        <ul>
          <li><strong>取引時間</strong>: 日中 8:45〜15:45（オープニング8:45・クロージング15:45）、夜間 17:00〜翌6:00（クロージング翌6:00）。祝日取引もあります。</li>
          <li><strong>値幅制限</strong>: 基準値段に対して通常5%、第一次拡大10%、第二次拡大15%。サーキット・ブレーカーの発動に応じて二段階まで拡大します。</li>
          <li><strong>証拠金</strong>: 日本証券クリアリング機構（JSCC）がVaR方式で計算します。</li>
          <li><strong>金標準先物の標準品</strong>: 純度99.99%以上の金地金。受渡しに使えるのは、取引所が指定する商標等の刻印のある地金です。</li>
        </ul>

        <h2>1枚あたりの金額と、価格が動いたときの損益の目安（毎朝更新）</h2>
        <p>先物の価格は取引所で決まり、消費税を含みません。ここでは目安として、最新の田中貴金属の金の店頭小売価格（1g {yen(AU_RETAIL)}円・税込・{pubLabel}）を1.1で割った約{yen(P_EST)}円を1gの価格とみなして計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>商品</th><th>1枚の金額の目安</th><th>1g 1円動いたとき（1枚）</th><th>価格が1%動いたとき（1枚）</th><th>通常の値幅制限（5%）まで動いたとき</th></tr></thead>
            <tbody>
              {PRODUCTS.map((p) => (
                <tr key={p.name}><td>{p.name}</td><td>約{yen(P_EST * p.g)}円</td><td>{yen(p.g)}円</td><td>約{yen(P_EST * p.g * 0.01)}円</td><td>約{yen(P_EST * p.g * 0.05)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">当サイトの計算。田中貴金属の小売価格は店頭で金地金を買う価格で、先物の価格とは異なります。実際の先物価格は大阪取引所の相場情報をご確認ください。手数料・証拠金は含めていません。</p>
        <p>買いでも売りでも、価格が反対に動けば同じ大きさの損失になります。損失が証拠金を上回る場合もあるため、取引を行う証券会社・商品先物取引業者の説明書面で、証拠金の額と追加の差し入れの条件を確認する必要があります。</p>

        <h2>金限日先物の休止（2026年12月22日）</h2>
        <p>大阪取引所は、金限日先物と白金限日先物で市場価格と理論現物価格の大きな乖離が続き、流動性も減少していることから、限日現金決済先物取引を休止すると公表しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>日付</th></tr></thead>
            <tbody>
              <tr><td>新商品（ポケットゴールド100先物など）の上場日</td><td>2026年4月13日（月）</td></tr>
              <tr><td>限日現金決済先物取引の取引最終日</td><td>2026年12月22日（火）</td></tr>
              <tr><td>最終清算数値の算出日</td><td>2026年12月23日（水）</td></tr>
              <tr><td>最終決済期日</td><td>2026年12月24日（木）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本取引所グループ「限日先物取引の休止と新商品の上場」。取引最終日までに決済されなかった建玉は、新商品へは移行せず、取引最終日の翌日に算出する理論現物価格（最終清算数値）で最終決済されます。</p>

        <h2>税金（国税庁 タックスアンサー No.1522）</h2>
        <ul>
          <li>一定の先物取引の差金等決済による所得は「先物取引に係る雑所得等」として、他の所得と区分して<strong>所得税15%（ほかに地方税5%）の申告分離課税</strong>です。</li>
          <li>平成25年から令和29年までは、復興特別所得税（基準所得税額の2.1%）を併せて申告・納付します。令和9年分以後は復興特別所得税が1.1%となり、防衛特別所得税（1%）が加わります。</li>
          <li>商品の受渡しが行われることとなるものは、この特例の対象から除かれます。</li>
          <li>損失は他の「先物取引に係る雑所得等」とだけ通算でき、一定の要件のもとで翌年以後3年間繰り越せます。</li>
        </ul>
        <p>金地金そのものを売ったときの所得は、原則として総合課税の譲渡所得で扱いが異なります（<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>）。金に連動する投資信託の費用は<Link href="/articles/kin-toushin-hiyou-hikaku/">金の投資信託の費用比較</Link>、純金積立は<Link href="/articles/junkin-tsumitate-hikaku/">純金積立の手数料比較</Link>にまとめています。</p>

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
          <li>日本取引所グループ「金標準先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/gold-standard-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「金ミニ先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/gold-mini-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「ポケットゴールド100先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/gold-cash-settled-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「金限日先物 制度概要」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/gold-rolling-spot-futures/01.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a>・「限日先物取引の休止と新商品の上場」<a href="https://www.jpx.co.jp/derivatives/products/precious-metals/gold-rolling-spot-futures/02.html" target="_blank" rel="noopener noreferrer">jpx.co.jp</a></li>
          <li>国税庁 タックスアンサー No.1522「先物取引に係る雑所得等の課税の特例」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1522.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月17日。制度・税制は変更される場合があります。取引の前に、取引所・取扱業者の最新の説明書面をご確認ください。</p>

        <RelatedArticles currentSlug="kin-sakimono-torihiki" relatedSlugs={["kin-toushin-hiyou-hikaku", "junkin-tsumitate-hikaku", "kin-kakaku-boraku-kako", "kin-spot-vs-kaitori", "kin-kaitori-zeikin"]} />
      </article>
    </div>
  </>);
}
