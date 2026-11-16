import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261116: 「金購入 注意点」。出典: 田中貴金属「売買価格と別途手数料」「地金・コインのご購入」「地金・コインのご売却」「金地金」、
   国税庁 タックスアンサー No.3161、警察庁 JAFIC「犯罪収益移転防止法の概要」、東京都消費生活総合センター 消費者注意情報（2019-01-09）、
   山口県警察本部 防犯情報（2025-12-19）。確認日 2026-11-16。価格は gold-spot-prices.json（毎朝更新）から計算。
   買う・買わないの判断は書かない（費用と手続きの事実のみ） */
const TITLE = "金を購入するときの注意点 — 価格差・手数料・本人確認・税金・勧誘の手口を公式情報で整理";
const URL = "https://gold-biyori.com/articles/kin-kounyu-chuiten/";
const DESC = "金地金を購入する前に確認しておきたい点を、田中貴金属・国税庁・警察庁などの公式情報で整理しました。購入価格と買取価格の差、500g未満の手数料、買った価格に戻るまでに必要な値上がり幅を毎朝更新で計算しています。";

const AU_RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const AU_BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 田中貴金属「売買価格と別途手数料」（税込・2026-11-16 確認）: 購入は地金1本ごと、売却は1件あたりの合計重量 */
const SIZES = [
  { g: 5, buyFee: 8800 }, { g: 10, buyFee: 8800 }, { g: 20, buyFee: 8800 }, { g: 50, buyFee: 13200 },
  { g: 100, buyFee: 16500 }, { g: 300, buyFee: 16500 }, { g: 500, buyFee: 0 }, { g: 1000, buyFee: 0 },
];
const sellFee = (g: number) => (g >= 500 ? 0 : g >= 100 ? 16500 : g >= 50 ? 8800 : g >= 20 ? 4400 : 2200);
const rows = SIZES.map((s) => {
  const cost = AU_RETAIL * s.g + s.buyFee;
  const need = (cost + sellFee(s.g)) / s.g; // 売却額が購入額と同じになる買取価格（1g）
  return { ...s, cost, sell: AU_BUY * s.g - sellFee(s.g), need, rise: (need / AU_BUY - 1) * 100 };
});
const spreadPct = ((AU_RETAIL - AU_BUY) / AU_BUY) * 100;

const FAQS = [
  { q: "金の購入価格と売却価格はなぜ違うのですか？", a: "田中貴金属は、購入するときに適用される「小売価格」と、売却するときに適用される「買取価格」の2つを公表しています。同じ日でも小売価格のほうが高いため、買ってすぐに売ると差額の分だけ受取額が少なくなります。" },
  { q: "小さい地金は割高ですか？", a: "田中貴金属では、500g未満の地金の売買に地金代金とは別の手数料がかかります。購入時は5g・10g・20gで1本8,800円、50gで13,200円、100g・200g・300gで16,500円（税込）です。同社は、溶解・検査を行って地金に製造し直しており、小型の地金はその費用が割高になるためと説明しています。" },
  { q: "金を買うときに本人確認はありますか？", a: "犯罪収益移転防止法は、代金の支払が現金で200万円を超える宝石・貴金属等の売買契約を、事業者が取引時確認を行う取引としています（警察庁 JAFIC の概要）。購入・売却のどちらにも当たります。" },
  { q: "「金を買うよう指示された」電話は詐欺ですか？", a: "山口県警察は、警察官や検事などをかたる電話で「資金調査」などの名目で金地金を購入させ、玄関先などに置かせてだまし取る事件が全国で発生しているとして注意を呼びかけています。電話などで金の購入を指示された場合は、警察にご相談ください。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金を購入するときの注意点", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-16", dateModified: "2026-11-16",
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

export default function KinKounyuChuitenPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-nobebo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-nobebo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金を購入するときの注意点</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金の購入の注意点の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金を購入するときの注意点 — 費用・手続き・勧誘の手口</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月16日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>金地金の購入では、<strong>購入価格と買取価格の差</strong>、<strong>500g未満の地金にかかる別途手数料</strong>、<strong>売却時の税金</strong>を事前に確認しておく必要があります。最新の田中貴金属の金の店頭小売価格は1g {yen(AU_RETAIL)}円、店頭買取価格は1g {yen(AU_BUY)}円で、その差は1gあたり{yen(AU_RETAIL - AU_BUY)}円（買取価格の{spreadPct.toFixed(1)}%）です（税込・{pubLabel}）。当サイトは購入をおすすめする立場ではなく、費用と手続きの事実を公式情報にもとづいて掲載しています。</p>

        <h2>購入額に戻るまでに必要な値上がり幅（重さ別）</h2>
        <p>田中貴金属で地金を1本購入し、同じ重さを売却する場合に、売却額が購入額と同じになるには買取価格がどれだけ上がる必要があるかを計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さ</th><th>購入額（手数料込み）</th><th>今日売却した場合の受取額</th><th>購入額に戻る買取価格（1g）</th><th>必要な値上がり幅</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.g}><td>{r.g >= 1000 ? "1kg" : `${r.g}g`}</td><td>{yen(r.cost)}円</td><td>{yen(r.sell)}円</td><td>{yen(r.need)}円</td><td>+{r.rise.toFixed(1)}%</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 購入額＝店頭小売価格×重さ＋購入時の別途手数料（地金1本ごと）。受取額＝店頭買取価格×重さ−売却時の別途手数料（1件あたりの合計重量で500g以上は不要、100g以上500g未満16,500円、50g以上100g未満8,800円、20g以上50g未満4,400円、20g未満2,200円）。必要な値上がり幅＝（購入額＋売却時の手数料）÷重さ÷今日の買取価格−1。税金・振込手数料は含めていません。手数料は田中貴金属「売買価格と別途手数料」（2026年11月16日確認）によります。</p>
        <p>5gの地金では、購入時と売却時の手数料の合計（{yen(8800 + 2200)}円）が重さに対して大きいため、必要な値上がり幅が大きくなります。500g以上は別途手数料がかからず、差は小売価格と買取価格の差だけです。各サイズの寸法と1本あたりの価格は<Link href="/articles/ingot-toha/">インゴットとは</Link>に掲載しています。</p>

        <h2>購入前に確認しておきたい点</h2>
        <h3>1. 購入価格と買取価格は別の価格です</h3>
        <p>田中貴金属は、消費税を含んだ1gあたりの「店頭小売価格（税込）」と、消費税相当分を含んだ「店頭買取価格（税込）」を公表しています。ニュースなどで報じられる金価格がどちらの値かを確認したうえで比較してください。</p>
        <h3>2. 500g未満の地金には別途手数料がかかります</h3>
        <p>購入時は地金1本ごと、売却時は1件あたりの合計重量で手数料が決まります（上の表の計算方法を参照）。同じ100gでも、100gを1本買う場合と10gを10本買う場合では、購入時の手数料が16,500円と88,000円になります（当サイトの計算）。</p>
        <h3>3. 製造ブランドと書類を確認します</h3>
        <p>田中貴金属は、売却時に製造ブランドや重量等を確認して買取価格を確定し、「当社の基準に満たない（製造ブランドが無い等）地金・コインは、お買取りをお断りさせていただく場合がございます」と案内しています。購入時の計算書・保証書などは、売却時の確認や税金の計算（取得費）に使うため保管しておくことをおすすめします。</p>
        <h3>4. 現金での受け渡しには上限・本人確認があります</h3>
        <p>犯罪収益移転防止法では、代金の支払が現金で200万円を超える宝石・貴金属等の売買契約で、事業者が取引時確認（本人確認など）を行います。また、田中貴金属の直営店では、2022年10月3日から資産用貴金属商品の現金決済の上限が100万円（税込）となり、100万円を超える売却代金は金融機関口座への振込です。</p>
        <h3>5. 元本は保証されません</h3>
        <p>田中貴金属は「純金・プラチナ・銀は元本保証の商品ではありません。相場の変動によりご購入された価格を下回ることもございます」と明記しています。過去の下落の記録は<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>にまとめています。</p>
        <h3>6. 売却時の利益には税金がかかります</h3>
        <p>国税庁によると、金地金を売ったときの所得は原則として譲渡所得で、給与所得など他の所得と合わせて総合課税の対象です。譲渡益＝譲渡価額−（取得費＋譲渡費用）で、特別控除は年50万円、所有期間が5年を超える場合は控除後の金額の2分の1が課税対象です。詳しくは<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>をご覧ください。</p>
        <h3>7. 勧誘・電話による購入の指示に注意します</h3>
        <ul>
          <li><strong>長期の分割前払い契約</strong>: 東京都消費生活総合センターは、「以前お世話になった」などと訪問し「必ず儲かる」と勧誘して、30年間の分割前払いで金地金を購入する契約を結ばせる事例を公表しています。同センターは、代金全額を支払った後に現物が引き渡される契約で、途中で事業者が倒産する危険もあると注意しています。</li>
          <li><strong>警察官などをかたる電話</strong>: 山口県警察は、警察官や検事などをかたり「資金調査」などの名目で金地金を購入させ、指定した場所に置かせてだまし取る事件が全国で発生しているとしています。田中貴金属も、警察官や行政機関、金融機関をかたった詐欺・なりすましへの注意を呼びかけています。</li>
        </ul>

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
          <li>田中貴金属工業「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「地金・コインのご購入」<a href="https://gold.tanaka.co.jp/inquire/buying/index.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「地金・コインのご売却」<a href="https://gold.tanaka.co.jp/inquire/selling.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>国税庁 タックスアンサー No.3161「金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>警察庁 犯罪収益移転防止対策室（JAFIC）「犯罪収益移転防止法の概要」<a href="https://www.npa.go.jp/sosikihanzai/jafic/hourei/data/hougaiyou20240401.pdf" target="_blank" rel="noopener noreferrer">npa.go.jp</a></li>
          <li>東京都消費生活総合センター 消費者注意情報「必ず儲かると勧誘され、30年間分割払いする金地金購入契約を結んでしまった！」（2019年1月9日）<a href="https://www.shouhiseikatu.metro.tokyo.lg.jp/sodan/kinkyu/documents/kinnjigane190109.pdf" target="_blank" rel="noopener noreferrer">shouhiseikatu.metro.tokyo.lg.jp</a></li>
          <li>山口県警察本部 生活安全企画課 防犯情報「金地金を狙った詐欺に注意！」（2025年12月19日）<a href="https://www.pref.yamaguchi.lg.jp/uploaded/attachment/228213.pdf" target="_blank" rel="noopener noreferrer">pref.yamaguchi.lg.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月16日。価格・手数料は変更される場合があります。ご購入・ご売却の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="kin-kounyu-chuiten" relatedSlugs={["ingot-toha", "kin-nobebo-kaitori", "kin-kaitori-zeikin", "junkin-tsumitate-hikaku", "kin-toushin-hiyou-hikaku"]} />
      </article>
    </div>
  </>);
}
