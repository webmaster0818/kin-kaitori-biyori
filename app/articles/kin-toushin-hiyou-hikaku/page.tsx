import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261114: 「金 投資信託 おすすめしない」。投資判断（勧める・勧めない）は書かない。仕組み・費用・税を発表元の数字で並べるだけ。
   出典: 三菱UFJアセットマネジメント 交付目論見書（2026.4.18）、三菱UFJ信託銀行「金の果実」公式、田中貴金属（総合口座の手数料一覧・売買別途手数料）、
   国税庁 No.3161・No.1463・東京国税局 文書回答（いずれも 2026-11-14 確認）。地金の価格は日次の gold-spot-prices.json から毎朝再計算する */
const TITLE = "金の投資信託の費用と税金｜純金ファンド・金ETF・純金積立・地金を公式資料で比較";
const URL = "https://gold-biyori.com/articles/kin-toushin-hiyou-hikaku/";
const DESC = "金の投資信託・金ETF・純金積立・金地金の費用と税金を、運用会社の目論見書、田中貴金属の手数料一覧、国税庁の資料の数字で並べました。購入の可否は判断せず、仕組みと数字だけを掲載しています。";

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
const SPREAD = RETAIL - BUY;
const SPREAD_PCT = (SPREAD / RETAIL) * 100;
/* 1540 の1口あたりの金の量：上場時 1g → 2026年11月13日 0.9327298g（三菱UFJ信託銀行「金の果実」トップページ） */
const ETF_G_NOW = 0.9327298;
const ETF_G_DROP = (1 - ETF_G_NOW) * 100;

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金の投資信託の費用と税金", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-14", dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "金の投資信託の保有中の費用はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "三菱UFJ 純金ファンド（愛称：ファインゴールド）の交付目論見書（2026年4月18日）では、運用管理費用（信託報酬）は年率0.55％、投資対象ETFの費用を合わせた実質的な負担は年率0.99％程度（2026年1月末現在）です。購入時手数料は上限1.1％で販売会社が定めます。" } },
    { "@type": "Question", name: "金の投資信託と金地金では税金が違いますか？", acceptedAnswer: { "@type": "Answer", text: "公募投資信託やETFの譲渡益は、上場株式等に係る譲渡所得等として申告分離課税（所得税15％・住民税5％、別途復興特別所得税）です（国税庁 No.1463）。金地金を売ったときの所得は、原則として譲渡所得として総合課税です（国税庁 No.3161）。" } },
    { "@type": "Question", name: "純金積立で積み立てた金を売ったときの税金は？", acceptedAnswer: { "@type": "Answer", text: "東京国税局の文書回答（平成18年10月23日）では、田中貴金属工業など6社の金定額購入システム（純金積立）で取得した金地金を譲渡した場合、所有期間は先入先出法で判定し、取得費は総平均法に準ずる方法で算出することで差し支えないとされています。" } },
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
  { q: "金の投資信託はNISAで買えますか？", a: "三菱UFJ 純金ファンドの交付目論見書（2026年4月18日）には、NISAの「成長投資枠（特定非課税管理勘定）」の対象と記載されています。販売会社により取扱いが異なる場合があります。商品ごとに目論見書や販売会社でご確認ください。" },
  { q: "金ETFの価格は金価格と一致しますか？", a: "一致するとは限りません。三菱UFJ信託銀行は、純金上場信託（1540）の取引所価格は市場の需給により基準価額（1口あたりの純資産額）より高い価格・低い価格で取引されることがあると案内しています。2026年11月13日の取引所価格（東証終値）は基準価額に対して+0.19%でした。" },
  { q: "金ETFを現物の金に換えることはできますか？", a: "純金上場信託（1540）は、小口転換取扱証券会社を通じて1kg以上5kgまで1kg単位で金地金に転換（交換）できます。事務取扱手数料5,500円（申込み1回）、改鋳費用相当額22,000円（1kgあたり）、送料相当額21,590円（1kg）などがかかり、別途、転換価格の10％に相当する消費税等相当額の支払いが必要です。" },
  { q: "当サイトは金の投資信託をすすめていますか？", a: "当サイトは、特定の商品の購入をすすめる、またはすすめない立場をとっていません。このページは各社・国税庁が公表している仕組み・費用・税金の数字を並べたものです。投資の判断は目論見書等をご確認のうえ、ご自身で行ってください。" },
];

export default function KinToushinHiyouHikakuPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-zeikin.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-zeikin-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の投資信託の費用と税金</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金の投資商品の費用比較のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金の投資信託の費用と税金 — 純金ファンド・金ETF・純金積立・地金の比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月14日／地金の価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>金の投資信託について「おすすめしない」という評価を見かけることがあります。このページでは、その判断の材料になる<strong>仕組み・費用・税金を、運用会社・発行元・国税庁が公表している数字で並べます</strong>。当サイトは、特定の商品の購入をすすめる、またはすすめない立場をとっていません。</p>
        <ul>
          <li>投資信託（例: 三菱UFJ 純金ファンド）：実質的な信託報酬は年率0.99％程度、購入時手数料は上限1.1％</li>
          <li>金ETF（例: 純金上場信託 1540）：信託報酬は年率0.440％、売買は証券会社の手数料</li>
          <li>純金積立（例: 田中貴金属）：積立手数料1.6〜2.8％、保有中は年会費1,100円（ネットサービス利用時は無料）</li>
          <li>金地金（田中貴金属）：最新の小売価格と買取価格の差は1gあたり{yen(SPREAD)}円（{SPREAD_PCT.toFixed(2)}％）、500g未満は別途手数料</li>
        </ul>

        <h2>4つの持ち方の仕組みと費用</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>投資信託<br />三菱UFJ 純金ファンド</th><th>金ETF<br />純金上場信託（1540）</th><th>純金積立<br />田中貴金属</th><th>金地金<br />田中貴金属</th></tr></thead>
            <tbody>
              <tr><td>運用・発行</td><td>三菱UFJアセットマネジメント</td><td>三菱UFJ信託銀行</td><td>田中貴金属工業</td><td>田中貴金属工業</td></tr>
              <tr><td>仕組み</td><td>主要投資対象は「純金上場信託（現物国内保管型）」。外貨建資産には投資しない</td><td>金地金を信託財産とする上場商品。発行元は「本商品は投資信託ではありません」と記載</td><td>毎月定額で金を購入し、預り口座で重量を管理</td><td>金地金（純度99.99%）を購入して保有</td></tr>
              <tr><td>購入時</td><td>購入価額に対して上限1.1％（販売会社が定める）</td><td>証券会社の売買委託手数料</td><td>積立手数料：月の積立額3,000〜29,000円 2.8％／30,000〜49,000円 2.2％／50,000円以上 1.6％（スポット購入は無料）</td><td>店頭小売価格。500g未満は1本ごとに別途手数料（5〜20g 8,800円〜300g 16,500円）</td></tr>
              <tr><td>保有中</td><td>信託報酬 年率0.55％、投資対象ETFを合わせた実質負担 年率0.99％程度（2026年1月末）</td><td>信託報酬 年率0.440％（2026年9月30日現在）。総経費率0.46％（2025年1月21日〜2026年1月20日）</td><td>年会費1,100円（ネットサービス利用時は無料）。積立休止中に残高がある場合は口座管理料1,320円</td><td>保管は自身で行う</td></tr>
              <tr><td>売却・換金時</td><td>信託財産留保額なし</td><td>証券会社の売買委託手数料</td><td>現金化の手数料は無料（振込手数料は自己負担）。現物の引出しは1回2,200円＋バー指定手数料</td><td>店頭買取価格。500g未満は1件あたりの合計重量で別途手数料（2,200〜16,500円）</td></tr>
              <tr><td>税金</td><td>申告分離課税（上場株式等）。NISA成長投資枠の対象</td><td>申告分離課税（上場株式等）</td><td>金地金の譲渡（文書回答あり・下記）</td><td>譲渡所得として総合課税（No.3161）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 三菱UFJ 純金ファンド 投資信託説明書（交付目論見書）使用開始日2026年4月18日、三菱UFJ信託銀行「純金上場信託（金の果実）」商品概要・「投資家の皆様にご負担いただく費用について」、田中貴金属「田中貴金属 総合口座 手数料一覧」「売買価格と別途手数料」（いずれも2026年11月14日確認）。費用は変更される場合があります。</p>

        <h2>100万円分を1年間保有した場合の費用（当サイトの計算）</h2>
        <p>上の表の料率を100万円に当てはめた単純計算です。金価格の変動は含めていません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>持ち方</th><th>購入時</th><th>1年間の保有費用</th></tr></thead>
            <tbody>
              <tr><td>投資信託（三菱UFJ 純金ファンド）</td><td>0〜11,000円（販売会社による）</td><td>約9,900円（実質0.99％程度）</td></tr>
              <tr><td>金ETF（1540）</td><td>証券会社の売買手数料</td><td>約4,400円（0.440％）</td></tr>
              <tr><td>純金積立（田中貴金属）※積立で合計100万円を購入した場合</td><td>16,000〜28,000円（積立手数料1.6〜2.8％。月の積立額による）</td><td>0円（ネットサービス利用時。年会費1,100円）</td></tr>
              <tr><td>金地金（田中貴金属）</td><td>小売価格と買取価格の差 約{yen(1000000 * SPREAD / RETAIL)}円（最新の価格差 {SPREAD_PCT.toFixed(2)}％）＋500g未満の別途手数料</td><td>0円（保管費用は別）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">金地金の行は、最新の店頭小売価格 1g {yen(RETAIL)}円と店頭買取価格 1g {yen(BUY)}円（{pubLabel}）の差を、購入時の費用に相当するものとして表示しています。投資信託・ETFは売買時に基準価額・市場価格で取引されるため、地金のような小売・買取の価格差は別の形で生じます。</p>

        <h3>信託報酬は保有している金の量から差し引かれる</h3>
        <p>純金上場信託（1540）の1口あたりの金の量は、2010年の上場時は1gでした。三菱UFJ信託銀行は、信託報酬や信託費用に充てるため金地金を一部売却しており、1口あたりの質量は日々減少すると案内しています。2026年11月13日現在は<strong>1口＝0.9327298g</strong>で、上場時から約{ETF_G_DROP.toFixed(1)}％減っています（当サイトの計算）。保有中の費用は、このように保有している金の量の減少として表れます。</p>

        <h2>税金の違い（国税庁の資料）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>対象</th><th>課税の方法</th><th>出典</th></tr></thead>
            <tbody>
              <tr><td>公募投資信託・ETFの譲渡益</td><td>上場株式等に係る譲渡所得等として申告分離課税。税率20％（所得税15％・住民税5％）に、令和29年までは復興特別所得税（基準所得税額の2.1％）</td><td>国税庁 No.1463</td></tr>
              <tr><td>金地金の譲渡益</td><td>原則として譲渡所得で総合課税。特別控除50万円、所有期間5年超は控除後の1/2が課税対象</td><td>国税庁 No.3161</td></tr>
              <tr><td>純金積立（金定額購入システム）で取得した金地金の譲渡</td><td>所有期間は先入先出法で判定し、取得費は総平均法に準ずる方法で算出して差し支えない</td><td>東京国税局 文書回答（平成18年10月23日）</td></tr>
              <tr><td>金投資口座・金貯蓄口座などからの利益</td><td>金融類似商品の収益として一律20.315％の源泉分離課税。確定申告で他の所得と合算できない</td><td>国税庁 No.3161</td></tr>
            </tbody>
          </table>
        </div>
        <p>国税庁 No.3161 は、令和9年1月1日以後に生ずる所得については復興特別所得税の税率が1.1％に引き下げられ、防衛特別所得税が併せて源泉徴収されると記載しています。金地金を売ったときの計算例は<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>でご説明しています。</p>

        <h2>最新の金地金の価格</h2>
        <p>田中貴金属の金の店頭小売価格は1g {yen(RETAIL)}円、店頭買取価格は1g {yen(BUY)}円です（税込・{pubLabel}）。サイズ別の購入額・売却額は<Link href="/articles/ingot-toha/">インゴットとは</Link>、日々の推移は<Link href="/souba-dashboard/">最新の金買取相場</Link>でご覧いただけます。</p>

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
          <li>三菱UFJアセットマネジメント「三菱UFJ 純金ファンド〈愛称：ファインゴールド〉投資信託説明書（交付目論見書）」使用開始日2026年4月18日 <a href="https://www.am.mufg.jp/pdf/koumokuromi/251065/251065_20260418.pdf" target="_blank" rel="noopener noreferrer">am.mufg.jp</a>・ファンドページ <a href="https://www.am.mufg.jp/fund/251065.html" target="_blank" rel="noopener noreferrer">am.mufg.jp</a></li>
          <li>三菱UFJ信託銀行「純金上場信託（金の果実）」<a href="https://kikinzoku.tr.mufg.jp/ja/lineup/gold.html" target="_blank" rel="noopener noreferrer">kikinzoku.tr.mufg.jp</a>・「投資家の皆様にご負担いただく費用について」<a href="https://kikinzoku.tr.mufg.jp/ja/procedures/investor.html" target="_blank" rel="noopener noreferrer">kikinzoku.tr.mufg.jp</a></li>
          <li>田中貴金属工業「田中貴金属 総合口座 手数料一覧」<a href="https://tt.tanaka.jp/guide/fee/" target="_blank" rel="noopener noreferrer">tt.tanaka.jp/guide/fee/</a></li>
          <li>田中貴金属工業「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>国税庁 タックスアンサー No.3161「金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>国税庁 タックスアンサー No.1463「株式等を譲渡したときの課税（申告分離課税）」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1463.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>東京国税局 文書回答事例「金定額購入システムで取得した金地金を譲渡した場合の課税上の取扱いについて」<a href="https://www.nta.go.jp/about/organization/tokyo/bunshokaito/shotoku/19/01.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月14日。金・投資信託・ETFは元本保証の商品ではありません。手数料・税制は変更される場合があります。ご利用前に、目論見書・公式サイトにて最新情報をご確認ください。個別の税務判断は税務署・税理士にご確認ください。</p>

        <RelatedArticles currentSlug="kin-toushin-hiyou-hikaku" relatedSlugs={["kin-kaitori-zeikin", "ingot-toha", "kin-uridoki-2026", "kin-zouyo-zeikin", "kin-kaitori-souba"]} />
      </article>
    </div>
  </>);
}
