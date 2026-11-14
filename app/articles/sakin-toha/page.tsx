import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

/* kwexp-20261114: 「砂金」。法令は e-Gov の鉱業法・河川法、歴史と採り方は産総研 地質調査総合センターの「地質ニュース」「GSJ 地質ニュース」、
   分析は造幣局、買取の扱いは田中貴金属 RE:TANAKA（いずれも 2026-11-14 確認）。価格は日次の gold-spot-prices.json から毎朝再計算する。
   砂金の品位（純度）は産地・粒ごとに異なり公的な代表値が無いため、品位を仮定した計算表は「仮定」と明記して出す */
const TITLE = "砂金とは？鉱業法・河川法での扱い、分析と売却時の確認点【公的資料で整理】";
const URL = "https://gold-biyori.com/articles/sakin-toha/";
const DESC = "砂金は川の砂礫に含まれる金の粒で、鉱業法では「砂鉱」として鉱物に含まれます。鉱業法・河川法の条文、北海道の枝幸砂金の記録、造幣局の分析、買取での扱いを公的資料で整理しました。";

const BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `${priceDateJa}取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const ASSUMED = [0.7, 0.8, 0.9];
const WEIGHTS = [0.1, 1, 10];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "砂金とは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-14", dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "砂金とは何ですか？", acceptedAnswer: { "@type": "Answer", text: "川の砂や礫の中に含まれる金の粒です。鉱業法第3条は、砂金・砂鉄・砂すずなど沖積鉱床をなす金属鉱を「砂鉱」として、同法の対象となる鉱物に含めています。" } },
    { "@type": "Question", name: "川で砂金を採るのに許可は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "鉱業法第7条は、まだ掘採されない鉱物は鉱業権によるのでなければ掘採してはならないと定めています。また河川法第25条は、河川区域内で土石（砂を含む）を採取する場合に河川管理者の許可を求めています。個別の場所での可否は、河川管理者や経済産業局にご確認ください。" } },
    { "@type": "Question", name: "砂金の純度は調べられますか？", acceptedAnswer: { "@type": "Answer", text: "造幣局は一般からの依頼で地金・鉱物の分析を受け付けており、鉱物については金と銀の含有量を分析できると案内しています。有料・破壊分析で、事前の問い合わせが必要です。" } },
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

const FAQS = [
  { q: "砂金は田中貴金属で買い取ってもらえますか？", a: "田中貴金属の貴金属製品買取（RE:TANAKA）は、鉱石を「産業用製品等」、粉末状・粒状の品を「品位が特定しづらいもの」として、買取できないものに挙げています（2026年11月14日確認）。他の業者の扱いは各社にご確認ください。" },
  { q: "砂金はどのように採るのですか？", a: "お椀状の皿と水を使い、砂や礫を流して重い粒子を皿の底に集める「パンニング」（日本語では椀掛け）が知られています。産総研 地質調査総合センターの報告では、流れが弱くなると重い粒子（金や磁鉄鉱等）と大きな粒子ほどすぐに沈むため、皿の下にたまると説明されています。" },
  { q: "鉱区の外で拾った鉱物は誰のものですか？", a: "鉱業法第8条第2項は「鉱区外において、土地から分離された鉱物は、無主の動産とする」と定めています。ただし掘採そのものについては第7条の定めがあり、河川では河川法の許可も関係します。" },
  { q: "砂金の価格はどう決まりますか？", a: "金の価値は含まれる金の重量で決まり、重量×品位（純度）×金価格で目安を計算できます。砂金の品位は産地や粒によって異なるため、正確な金の量は分析で確かめる必要があります。" },
];

export default function SakinTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">砂金とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="砂金のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">砂金とは — 法令上の扱い・採り方・分析と売却時の確認点</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月14日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p><strong>砂金とは、川の砂や礫（れき）の中に含まれる金の粒です。</strong>鉱業法第3条は「砂鉱（砂金、砂鉄、砂すずその他沖積鉱床をなす金属鉱をいう。）」を同法の対象となる鉱物に含めており、砂金は法令上「鉱物」として扱われます。</p>
        <ul>
          <li>鉱業法第7条：まだ掘採されない鉱物は、鉱業権によるのでなければ掘採してはならない</li>
          <li>河川法第25条：河川区域内で土石（砂を含む）を採取する場合は、河川管理者の許可が必要</li>
          <li>品位（純度）は分析で確かめる。造幣局は一般からの鉱物分析の依頼を受け付けている（金・銀の含有量）</li>
        </ul>

        <h2>砂金に関係する法令の条文</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>法令</th><th>条文の内容（要旨）</th></tr></thead>
            <tbody>
              <tr><td><strong>鉱業法 第3条</strong></td><td>同法の「鉱物」に、金鉱・銀鉱などとともに「砂鉱（砂金、砂鉄、砂すずその他沖積鉱床をなす金属鉱）」を含める</td></tr>
              <tr><td><strong>鉱業法 第5条</strong></td><td>「鉱業権」は、登録を受けた区域（鉱区）で登録を受けた鉱物等を掘採し、取得する権利</td></tr>
              <tr><td><strong>鉱業法 第7条</strong></td><td>まだ掘採されない鉱物は、鉱業権によるのでなければ掘採してはならない（例外は可燃性天然ガス・一部の石灰石等を営利目的でなく一家の自用に供する場合）</td></tr>
              <tr><td><strong>鉱業法 第8条第2項</strong></td><td>鉱区外において土地から分離された鉱物は、無主の動産とする</td></tr>
              <tr><td><strong>鉱業法 第11条</strong></td><td>鉱業権は、試掘権及び採掘権とする</td></tr>
              <tr><td><strong>河川法 第25条</strong></td><td>河川区域内の土地で土石（砂を含む）を採取しようとする者は、河川管理者の許可を受けなければならない</td></tr>
            </tbody>
          </table>
        </div>
        <p>当サイトは、特定の場所での砂金採りが許されるかどうかを判断していません。体験施設以外の川で採取を考える場合は、その河川の管理者（都道府県・国土交通省の河川事務所）や、鉱業権を所管する経済産業局にご確認ください。</p>

        <h2>日本の砂金の記録（北海道・枝幸砂金）</h2>
        <p>産総研 地質調査総合センターの「地質ニュース」に掲載された記事「“枝幸砂金”地帯の点描」は、次のような記録を紹介しています。</p>
        <ul>
          <li>元久2年（1205年）、松前の知内川で塊金が見つかり、その後この地域で砂金の採取が行われたとの記述</li>
          <li>明治29年、枝幸海岸に注ぐ渓流で金粒が発見され、砂金業者がウソタン川などに集まったこと</li>
          <li>枝幸郡の中頓別町・枝幸町・歌登村（当時）の境界にあるポロヌプリ山の一帯が「枝幸砂金」の出所として知られること</li>
        </ul>
        <p>同センターの「GSJ 地質ニュース」（2019年8月）では、茨城県北部の久慈川上流で採取した砂金入りの川砂を使った砂金採り体験の報告があり、実際に採取された砂金粒子の写真が掲載されています。</p>

        <h2>砂金の採り方（パンニング）</h2>
        <p>砂金採りでは、お椀状の皿（パンニング皿）と水を使って砂や礫を取り除き、砂金などの重い鉱物を集めます。この作業を日本語では「椀掛け」と呼びます。地質調査総合センターの報告は、水の流れが弱くなると重い粒子（金や磁鉄鉱等）と大きな粒子ほどすぐに沈むため、皿の下にたまると説明しています。同報告の写真では、集めた粒子の多くは磁鉄鉱で、その中に砂金が含まれていました。</p>

        <h2>砂金の純度を調べる方法（造幣局の分析）</h2>
        <p>砂金には刻印がなく、品位（純度）は産地や粒によって異なります。金の量を正確に知るには分析が必要です。造幣局は一般からの依頼で地金・鉱物の分析を受け付けており、次のように案内しています（2026年11月14日確認）。</p>
        <ul>
          <li>鉱物の分析の受付は大阪本局（技術開発部技術総括課）。宅配便等での依頼も可能（送料は依頼者負担）</li>
          <li>鉱物は金と銀の含有量を分析できる（定性分析・定量分析）</li>
          <li>手数料は有料・前納制で、試料数と成分数により異なる（依頼ごとに見積もり）</li>
          <li>分析は破壊分析。試料の状態等によっては引き受けられない場合があるため、事前の問い合わせが必要</li>
        </ul>

        <h2>重量と品位から金の価値を計算する</h2>
        <p>金の価値は「重量×品位×金価格」で計算できます。下表は田中貴金属の最新の金の店頭買取価格 1g {yen(BUY)}円（{pubLabel}）を使い、<strong>品位を70%・80%・90%と仮定した場合</strong>の金の価値です。品位の値は計算のための仮定で、実際の砂金の品位を示すものではありません。また、買取価格ではありません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>砂金の重量</th>{ASSUMED.map((a) => <th key={a}>品位{Math.round(a * 100)}%と仮定</th>)}</tr></thead>
            <tbody>
              {WEIGHTS.map((w) => (
                <tr key={w}>
                  <td><strong>{w}g</strong></td>
                  {ASSUMED.map((a) => <td key={a}>約{yen(w * a * BUY)}円</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>製品の金の価値の目安は<Link href="/kin-kaitori-keisanki/">金買取 グラム計算機</Link>でも計算できます。</p>

        <h2>砂金を売るときの確認点</h2>
        <ul>
          <li>田中貴金属の貴金属製品買取（RE:TANAKA）は、<strong>鉱石</strong>（産業用製品等）と<strong>粉末状・粒状</strong>の品（品位が特定しづらいもの）を買取できないものに挙げています</li>
          <li>買取の可否と手数料は業者ごとに異なります。持ち込む前に、砂金（粒状の自然金）を扱うかを各社にご確認ください</li>
          <li>売却して利益が出た場合の課税は、金地金と同様に所得の区分によって異なります。金を売ったときの税金は<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>でご説明しています</li>
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
          <li>e-Gov 法令検索「鉱業法」（昭和25年法律第289号）第3条・第5条・第7条・第8条・第11条 <a href="https://laws.e-gov.go.jp/law/325AC0000000289" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>e-Gov 法令検索「河川法」（昭和39年法律第167号）第25条 <a href="https://laws.e-gov.go.jp/law/339AC0000000167" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>産業技術総合研究所 地質調査総合センター「地質ニュース」“枝幸砂金”地帯の点描 <a href="https://www.gsj.jp/data/chishitsunews/62_06_06.pdf" target="_blank" rel="noopener noreferrer">gsj.jp</a></li>
          <li>同「GSJ 地質ニュース」Vol.8 No.8（2019年8月）砂金・鉱物探し体験実施報告 <a href="https://www.gsj.jp/data/gcn/gsj_cn_vol8.no8_p220-222.pdf" target="_blank" rel="noopener noreferrer">gsj.jp</a></li>
          <li>独立行政法人造幣局「地金・鉱物の分析」<a href="https://www.mint.go.jp/operations/exam/analysis/operations_analysis-01.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>田中貴金属工業 RE:TANAKA「お買取りができるもの／できないもの」<a href="https://gold.tanaka.co.jp/retanaka/service/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/retanaka/service/</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/commodity/souba/</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月14日。法令の適用は個別の事情により異なります。具体的な判断は所管の行政機関にご確認ください。</p>

        <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
        <RelatedArticles currentSlug="sakin-toha" relatedSlugs={["kin-jundo-mikata", "k24-kaitori", "ingot-toha", "kin-kaitori-zeikin", "kin-gram-keisan"]} />
      </article>
    </div>
  </>);
}
