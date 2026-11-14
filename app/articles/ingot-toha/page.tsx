import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

/* kwexp-20261114: 「インゴットとは」。事実は田中貴金属の公式ページ（金地金・売買別途手数料・ご売却）と LBMA、税は国税庁 No.3161（いずれも 2026-11-14 確認）。
   価格は日次の gold-spot-prices.json（田中貴金属の店頭小売・買取価格）から毎朝再計算する */
const TITLE = "インゴットとは？金地金のサイズ9種・手数料・刻印と1本あたりの価格";
const URL = "https://gold-biyori.com/articles/ingot-toha/";
const DESC = "インゴット（金地金）の意味、田中貴金属の9サイズと寸法、500g未満にかかる売買手数料、刻印と買取時の確認点を公式情報で整理。今日の公表価格で1本あたりの購入額と売却額も計算しています。";

const RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `${priceDateJa}取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 田中貴金属「売買価格と別途手数料」（https://gold.tanaka.co.jp/inquire/buying/charge02.html・2026-11-14 確認）
   購入は地金1本ごと、売却は1件あたりの合計重量で手数料がかかる */
const SIZES: { g: number; dim: string; buyFee: number }[] = [
  { g: 1000, dim: "113×52×10mm", buyFee: 0 },
  { g: 500, dim: "87×44×9mm", buyFee: 0 },
  { g: 300, dim: "77×33×7mm", buyFee: 16500 },
  { g: 200, dim: "48×28×8mm", buyFee: 16500 },
  { g: 100, dim: "40×24×6mm", buyFee: 16500 },
  { g: 50, dim: "40×25×3.5mm", buyFee: 13200 },
  { g: 20, dim: "33×20×2.1mm", buyFee: 8800 },
  { g: 10, dim: "27×17×1.6mm", buyFee: 8800 },
  { g: 5, dim: "20×12.5×1.5mm", buyFee: 8800 },
];
const sellFee = (g: number) => (g >= 500 ? 0 : g >= 100 ? 16500 : g >= 50 ? 8800 : g >= 20 ? 4400 : 2200);
const ROWS = SIZES.map((s) => {
  const pay = RETAIL * s.g + s.buyFee;
  const get = BUY * s.g - sellFee(s.g);
  return { ...s, pay, perG: pay / s.g, get, gap: pay - get, gapPct: ((pay - get) / pay) * 100 };
});
const R100 = ROWS.find((r) => r.g === 100)!;
const R5 = ROWS.find((r) => r.g === 5)!;
const R1K = ROWS.find((r) => r.g === 1000)!;

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インゴットとは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-14", dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "インゴットとは何ですか？", acceptedAnswer: { "@type": "Answer", text: "金を一定の重さと形に鋳造した地金（延べ棒）です。田中貴金属の金地金は純度99.99%で、5gから1kgまでの9種類が販売されています。" } },
    { "@type": "Question", name: "小さいインゴットは割高ですか？", acceptedAnswer: { "@type": "Answer", text: "田中貴金属では500g未満の地金に別途手数料がかかります（購入時は5g・10g・20gで1本8,800円、50gで13,200円、100g〜300gで16,500円）。重量が小さいほど1gあたりの負担は大きくなります。" } },
    { "@type": "Question", name: "インゴットを売ったときの税金は？", acceptedAnswer: { "@type": "Answer", text: "国税庁タックスアンサーNo.3161では、金地金を売ったときの所得は原則として譲渡所得として総合課税の対象とされています。特別控除50万円があり、所有期間が5年を超える場合は控除後の金額の2分の1が課税対象です。" } },
  ] };
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

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">お手元のインゴットの査定額を確認する</h3>
      <p className="text-sm text-warm-gray text-center mb-4">業者ごとに買取価格と手数料が異なるため、複数社の比較をおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で比較する（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
      </div>
    </div>
  );
}

const FAQS = [
  { q: "インゴットと延べ棒は違うものですか？", a: "同じものを指します。金を一定の重さ・形に鋳造した地金をインゴット、または延べ棒と呼びます。田中貴金属の商品名は「金地金」です。" },
  { q: "他社製のインゴットも売れますか？", a: "田中貴金属は、持ち込まれた地金の製造ブランドや重量等を確認して買取価格を確定するとしており、製造ブランドがないなど当社の基準に満たない地金は買取を断る場合があると案内しています。他社製バーの扱いは店舗に事前にご確認ください。" },
  { q: "売却代金は現金で受け取れますか？", a: "田中貴金属の直営店では、2022年10月3日から資産用貴金属商品の現金決済の上限が100万円（税込）となり、これを超える売却代金は指定口座への振込です（同社「地金・コインのご売却」）。" },
  { q: "インゴットの価格はいつ更新されますか？", a: "田中貴金属は営業日の9:30と14:00に地金価格を公表し、相場が大きく動いた場合は同日内の他の時間にも変更すると案内しています。当ページの金額は毎朝の取得時点の公表値で計算しています。" },
];

export default function IngotTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-nobebo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-nobebo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">インゴットとは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="インゴット（金地金）のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">インゴットとは — 金地金のサイズ・手数料・刻印と1本あたりの価格</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月14日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p><strong>インゴットとは、金を一定の重さと形に鋳造した地金（延べ棒）です。</strong>国内最大手の田中貴金属の金地金は純度99.99%、サイズは5gから1kgまでの9種類で、同社はLBMA（ロンドン地金市場協会）公認の溶解業者であると案内しています。</p>
        <p>田中貴金属の最新の公表値では、金の店頭小売価格（購入時）が<strong>1g {yen(RETAIL)}円</strong>、店頭買取価格（売却時）が<strong>1g {yen(BUY)}円</strong>です（いずれも税込・{pubLabel}）。この価格で計算すると、100gのインゴット1本は購入時 約{yen(R100.pay)}円（手数料込み）、売却時 約{yen(R100.get)}円（手数料差引後）です。</p>

        <h2>インゴットのサイズ9種類と1本あたりの価格</h2>
        <p>田中貴金属の金地金の寸法と、最新の公表価格で当サイトが計算した1本あたりの金額です。500g未満の地金には、地金代金とは別に手数料がかかります。同社はその理由を「お客様からお買取りした地金をそのまま再販するのではなく、溶解・検査を行って地金に製造し直しており、小型の地金はその費用が割高になるため」と説明しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重量</th><th>寸法（目安）</th><th>購入時の別途手数料</th><th>購入額（手数料込み）</th><th>1gあたりの購入額</th><th>売却額（手数料差引後）</th><th>購入額と売却額の差</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.g}>
                  <td><strong>{r.g >= 1000 ? "1kg" : `${r.g}g`}</strong></td>
                  <td>{r.dim}</td>
                  <td>{r.buyFee ? `${r.buyFee.toLocaleString()}円` : "不要"}</td>
                  <td>{yen(r.pay)}円</td>
                  <td>{yen(r.perG)}円</td>
                  <td>{yen(r.get)}円</td>
                  <td>{yen(r.gap)}円（{r.gapPct.toFixed(1)}%）</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法: 購入額＝店頭小売価格×重量＋購入時の別途手数料（地金1本ごと）。売却額＝店頭買取価格×重量−売却時の別途手数料（1件あたりの合計重量で決まり、500g以上は不要、100g以上500g未満 16,500円、50g以上100g未満 8,800円、20g以上50g未満 4,400円、20g未満 2,200円）。同じ日に1本だけ購入して売却した場合の差額であり、実際の取引額は取引時点の価格によります。寸法・手数料の出典は田中貴金属「金地金」「売買価格と別途手数料」（2026年11月14日確認）です。</p>
        <p>最新の価格では、1kgバーの購入額と売却額の差は{R1K.gapPct.toFixed(1)}%、5gバーでは{R5.gapPct.toFixed(1)}%です。小型のバーほど手数料が重量に対して大きくなるため、差が広がります。</p>

        <h2>インゴットの刻印と買取時の確認点</h2>
        <p>インゴットには、製造したブランド（溶解業者）、品位（純度）、重量、製造番号などが刻印されています。田中貴金属は売却時に「製造ブランドや重量等を確認の上、買取価格を確定」するとしており、<strong>製造ブランドがないなど同社の基準に満たない地金は買取を断る場合がある</strong>と案内しています。</p>
        <ul>
          <li>LBMAは、一定の基準を満たす溶解業者が製造したバーを「グッド・デリバリー」として認定しています。金の標準的なグッド・デリバリー・バーは約400トロイオンス（1トロイオンス＝31.1035gで換算すると約12.4kg）で、個人向けの5g〜1kgのバーとは別の大きさです。</li>
          <li>製造過程で表面に凹みや曇りが生じる場合があると田中貴金属は案内しています。</li>
          <li>計算書（購入時の書類）は、売却時の取得費の確認に使います。田中貴金属は「御計算書は再発行できません」としています。</li>
        </ul>

        <CtaBox />

        <h2>インゴットを売却したときの税金</h2>
        <p>国税庁タックスアンサー No.3161 では、金地金を売ったときの所得は、原則として<strong>譲渡所得として給与所得など他の所得と合わせて総合課税の対象</strong>とされています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>所有期間</th><th>課税される譲渡所得の金額</th></tr></thead>
            <tbody>
              <tr><td>5年以内（短期譲渡所得）</td><td>譲渡益（売却額−取得費−譲渡費用）の合計−特別控除50万円</td></tr>
              <tr><td>5年超（長期譲渡所得）</td><td>（譲渡益の合計−特別控除50万円）×1/2</td></tr>
            </tbody>
          </table>
        </div>
        <p>特別控除50万円は、その年の金地金とそれ以外の総合課税の譲渡益の合計に対して適用されます。営利目的で継続的に売買している場合は、事業所得または雑所得になります。計算例と申告の流れは<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>でご説明しています。</p>

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

        <h2>関連ページ</h2>
        <ul>
          <li><Link href="/articles/kin-nobebo-kaitori/">金の延べ棒・インゴット買取ガイド</Link>（ブランド別の扱い・2026年の買取規制）</li>
          <li><Link href="/articles/ingot-100g-kaitori/">金インゴット100gの買取相場</Link></li>
          <li><Link href="/articles/kinka-ingot-kaitori/">金貨・インゴットの買取相場</Link></li>
        </ul>

        <h2>出典</h2>
        <ul className="text-sm">
          <li>田中貴金属工業「金地金」（純度・サイズ・寸法・価格の公表時刻）<a href="https://gold.tanaka.co.jp/commodity/gold_bar.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/commodity/gold_bar.html</a></li>
          <li>田中貴金属工業「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/inquire/buying/charge02.html</a></li>
          <li>田中貴金属工業「地金・コインのご売却」<a href="https://gold.tanaka.co.jp/inquire/selling.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/inquire/selling.html</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/commodity/souba/</a></li>
          <li>LBMA「About Good Delivery」<a href="https://www.lbma.org.uk/good-delivery/about-good-delivery" target="_blank" rel="noopener noreferrer">lbma.org.uk</a></li>
          <li>国税庁 タックスアンサー No.3161「金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月14日。手数料・取扱条件は変更される場合があります。ご利用前に、公式サイトにて最新情報をご確認ください。</p>

        <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
        <RelatedArticles currentSlug="ingot-toha" relatedSlugs={["kin-nobebo-kaitori", "ingot-100g-kaitori", "kinka-ingot-kaitori", "k24-kaitori", "kin-kaitori-zeikin", "kin-toushin-hiyou-hikaku"]} />
      </article>
    </div>
  </>);
}
