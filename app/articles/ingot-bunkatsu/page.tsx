import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261120: 「インゴット 分割」。出典: 日本マテリアル「精錬加工」（ig100_sk.php：金 当社バー1gあたり209円・GDバー231円、プラチナ253円・264円、
   通常は100gに加工、50g 1枚3,520円・20g 1枚5,500円のオプション、店頭持込のみ・納期約1か月〜）、
   同「精錬分割時のオプション手数料及び地金の販売手数料（バーチャージ）価格改定のお知らせ」（2026年4月・4月6日から）、同「金地金20gの精錬加工再開のお知らせ」（2026年4月・4月20日から・当社製インゴットのみ）、
   田中貴金属の販売手数料（100g 16,500円・50g 13,200円＝kin-ingot-kounyusaki 11/17 確認値）、国税庁 No.3105・No.3152・「金地金等に係る譲渡所得の調査状況」（200万円超の支払調書）。確認日 2026-11-20。
   精錬加工と「売って買い直す」の費用比較・200万円の判定は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "金インゴットの分割（精錬加工）の費用 — 1kgを100g・50gにする料金と、売って買い直す場合との比較【毎朝更新】";
const URL = "https://gold-biyori.com/articles/ingot-bunkatsu/";
const DESC = "金の1kgインゴットを100g・50gのバーに分割する精錬加工の料金を、日本マテリアルの公式ページで確認しました。いったん売却して小さいバーを買い直す場合の費用と、田中貴金属の価格で毎朝比較しています。";

const T = goldData.tanaka_official;
const AU_R = T.au_retail_per_g as number;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 日本マテリアル 精錬加工（税込・2026-11-20 確認） */
const NM_OWN = 209; // 金 当社バー 1gあたり
const NM_GD = 231; // 金 GDバー 1gあたり
const OPT50 = 3520; // 50g 1枚
const OPT20 = 5500; // 20g 1枚（当社製インゴットのみ）
/* 田中貴金属の金地金の販売手数料（税込・1本あたり・11/17 確認） */
const TNK_FEE = { 100: 16500, 50: 13200, 20: 8800 } as Record<number, number>;

const PLANS = [
  { label: "1kg → 100g×10本", size: 100, n: 10, opt: 0 },
  { label: "1kg → 50g×20本", size: 50, n: 20, opt: OPT50 },
  { label: "1kg → 20g×50本", size: 20, n: 50, opt: OPT20 },
].map((p) => {
  const own = NM_OWN * 1000 + p.opt * p.n;
  const gd = NM_GD * 1000 + p.opt * p.n;
  const rebuy = (AU_R - AU_B) * 1000 + TNK_FEE[p.size] * p.n;
  return { ...p, own, gd, rebuy };
});
const value1k = AU_B * 1000;
const sell100 = AU_B * 100;
const sell50 = AU_B * 50;
const g200 = 2_000_000 / AU_B;

const FAQS = [
  { q: "金のインゴットは分割できますか？", a: "日本マテリアルは、インゴットを溶かして小さいバーに作り直す「精錬加工」を受け付けています。金は1gあたり209円（当社バー）・231円（GDバー）で、通常は100gのバーに加工し、50gは1枚3,520円、20gは1枚5,500円（当社製インゴットのみ）の追加料金です（税込・2026年11月20日確認）。店頭への持込みのみで、納期は約1か月からと案内されています。" },
  { q: "インゴットを自分で切って分けてもよいですか？", a: "日本マテリアルは、1kgのインゴットをご自身で切断した場合は売却ができなくなると案内しています。分割は精錬加工のサービスを利用する方法が案内されています。" },
  { q: "分割すると税金は少なくなりますか？", a: "国税庁によると、金地金の譲渡益は原則として総合課税の譲渡所得で、1年間の譲渡益から特別控除（年50万円）を差し引いて計算します。分割しても、同じ年に売却した分は合計して計算されます。支払調書は1回の支払が200万円を超える場合に提出されますが、支払調書の有無と納税義務は別です。" },
  { q: "分割した100gのバーを売ると支払調書は出ますか？", a: `最新の田中貴金属の金の店頭買取価格（${pubLabel}）では、100gの売却額は約${yen(sell100)}円で、${sell100 > 2_000_000 ? "200万円を超えます" : "200万円以下です"}。200万円を超えない重さの目安は約${Math.floor(g200)}g以下です（当サイトの計算・毎朝更新）。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "インゴットの分割", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-20", dateModified: "2026-11-20",
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

export default function IngotBunkatsuPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-nobebo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-nobebo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">インゴットの分割</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金インゴットの分割（精錬加工）の費用のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金インゴットの分割（精錬加工）の費用 — 1kgを100g・50gにする料金</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月20日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／精錬加工の料金は2026年11月20日に日本マテリアルの公式ページで確認</p>

        <p><strong>金のインゴットは、地金商の「精錬加工」で小さいバーに作り直すことができます。</strong>日本マテリアルの料金は、金1gあたり<strong>209円（同社製のバー）・231円（GDバー）</strong>で、1kgを100g×10本にする場合は209,000円・231,000円です（税込・2026年11月20日確認）。通常は100gに加工し、50gは1枚3,520円、20gは1枚5,500円（同社製インゴットのみ）が加算されます。店頭への持込みのみで、納期は約1か月からと案内されています。いったん売却して小さいバーを買い直す方法と比べると、最新の価格では{PLANS[0].own < PLANS[0].rebuy ? "100gへの分割は精錬加工のほうが費用が少なくなります" : "100gへの分割は売却・買い直しのほうが費用が少なくなります"}（下の表・当サイトの計算）。</p>

        <h2>1kgを分割する費用の比較（毎朝更新）</h2>
        <p>1kgの金インゴットを小さいバーに分ける場合の費用を、精錬加工と、売却して買い直す方法で計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>分け方</th><th>精錬加工（日本マテリアル製のバー）</th><th>精錬加工（GDバー）</th><th>売却して買い直す（田中貴金属の価格・手数料）</th></tr></thead>
            <tbody>
              {PLANS.map((p) => (
                <tr key={p.label}><td>{p.label}</td><td>{yen(p.own)}円（{((p.own / value1k) * 100).toFixed(1)}%）</td><td>{p.size === 20 ? "対象外" : `${yen(p.gd)}円（${((p.gd / value1k) * 100).toFixed(1)}%）`}</td><td>{yen(p.rebuy)}円（{((p.rebuy / value1k) * 100).toFixed(1)}%）</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 精錬加工＝1gあたりの料金×1,000g＋50g・20gのオプション料金×本数（日本マテリアル・税込）。20gへの加工は日本マテリアル製のインゴットのみが対象です。売却して買い直す＝（田中貴金属の金の店頭小売価格−店頭買取価格）×1,000g＋田中貴金属の販売手数料×本数（100g 16,500円・50g 13,200円・20g 8,800円、2026年11月17日確認。1kgの売却に手数料はかかりません）。（ ）内は1kgの売却額（{yen(value1k)}円・{pubLabel}）に対する割合です。税金・交通費は含めていません。</p>
        <ul>
          <li>日本マテリアルの公式ページは、1kgを50g×20本にする場合の料金を当社バー279,400円・GDバー301,400円と例示しています（上の表の計算と同じ額です）。</li>
          <li>「GDバー」は日本マテリアルの表記です。海外製のインゴットは受付不可となる場合があり、現物を確認したうえで案内するとされています。</li>
          <li>売却して買い直す方法は、売却日と購入日が同じ日の価格で計算しています。日がずれると、その間の価格の変動の影響を受けます。</li>
        </ul>

        <h2>精錬加工の手順と条件（日本マテリアル）</h2>
        <ol>
          <li><strong>持込み</strong>: 最寄りの店舗に持ち込みます。宅配・郵送での申込みは受け付けていません。購入や加工の証明となるものを持参するよう案内されています。</li>
          <li><strong>預り証の発行</strong>: 店頭で現物を確認してから預かり、精錬加工預り証が発行されます。原則としてインゴット以外のものには対応していません。</li>
          <li><strong>加工・完成</strong>: 自社工場で加工し、受付時に案内された完成日に仕上がります。納期は約1か月からで、工場の状況により延びる場合があります。完成したインゴットは郵送での受け渡しも可能です。</li>
          <li><strong>精算</strong>: 精錬加工費を精算します。精算の際に、仕上がったインゴットの一部を売却して充てることもできます（本人確認書類が必要）。</li>
        </ol>
        <p className="text-sm text-warm-gray">20gの精錬加工は、2026年4月20日から受付を再開したとされ、同社製インゴットのみ・本人からの預かりのみ（委任状は不可）・加工終了後2週間以内の引取りが条件です。プラチナは1gあたり253円（当社バー）・264円（GDバー）です。</p>
        <p>日本マテリアルは、1kgのインゴットを自分で切断した場合は売却ができなくなると案内しています。インゴットの刻印（ブランド・品位・重量・番号）の意味は<Link href="/articles/ingot-toha/">インゴットとは</Link>にまとめています。</p>

        <h2>分割と税金・支払調書</h2>
        <ul>
          <li><strong>譲渡所得</strong>: 国税庁によると、金地金の譲渡益は原則として総合課税の譲渡所得です。1年間の譲渡益から特別控除（年50万円）を差し引き、所有期間5年超は控除後の2分の1が課税の対象です（No.3105・No.3152）。<strong>分割しても、同じ年に売却した分は合計して計算されます。</strong></li>
          <li><strong>支払調書</strong>: 金地金等の売買を業として行う者は、1回の支払が200万円を超える場合に税務署に支払調書を提出します。最新の田中貴金属の金の店頭買取価格では、100gの売却額は約{yen(sell100)}円（{sell100 > 2_000_000 ? "200万円超" : "200万円以下"}）、50gは約{yen(sell50)}円（{sell50 > 2_000_000 ? "200万円超" : "200万円以下"}）です（当サイトの計算・毎朝更新）。</li>
          <li><strong>贈与</strong>: 分割したインゴットを家族に渡す場合は贈与税の対象になることがあります。年110万円の基礎控除などは<Link href="/articles/kin-zouyo-zeikin/">金の贈与税</Link>をご覧ください。</li>
        </ul>
        <p>支払調書とマイナンバーの仕組みは<Link href="/articles/kin-baikyaku-mynumber/">金の売却とマイナンバー</Link>、売却時の税金の計算は<Link href="/articles/kin-kaitori-zeikin/">金の買取と税金</Link>、各社の販売手数料は<Link href="/articles/kin-ingot-kounyusaki/">金のインゴットはどこで買うか</Link>に掲載しています。</p>

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
          <li>日本マテリアル「精錬加工」<a href="https://www.material.co.jp/ig100_sk.php" target="_blank" rel="noopener noreferrer">material.co.jp</a></li>
          <li>日本マテリアル「精錬分割時のオプション手数料及び地金の販売手数料（バーチャージ）価格改定のお知らせ」（2026年4月）<a href="https://www.material.co.jp/pdf/news20260401.pdf" target="_blank" rel="noopener noreferrer">material.co.jp</a>・「金地金20gの精錬加工再開のお知らせ」（2026年4月）<a href="https://www.material.co.jp/pdf/news20260417.pdf" target="_blank" rel="noopener noreferrer">material.co.jp</a></li>
          <li>田中貴金属工業「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>国税庁「金地金等に係る譲渡所得の調査状況」<a href="https://www.nta.go.jp/information/release/kokuzeicho/2015/shotoku_shohi/sanko04_05.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・タックスアンサー No.3105 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3152 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月20日。料金・受付条件は変更される場合があります。ご利用の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="ingot-bunkatsu" relatedSlugs={["ingot-toha", "kin-ingot-kounyusaki", "kin-nobebo-kaitori", "kin-baikyaku-mynumber", "kin-zouyo-zeikin", "kin-kaitori-zeikin"]} />
      </article>
    </div>
  </>);
}
