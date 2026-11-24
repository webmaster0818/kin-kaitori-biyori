import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（深夜04時の回）: 「金 どうやってできた」。
   出典: 名古屋大学 宇宙地球環境研究所（ISEE）2017-10-17 プレスリリース「名古屋大学の望遠鏡による重力波対応天体の観測」（GW170817・rプロセス・キロノヴァ・J-GEM）、
   産総研 地質調査総合センター「GSJ 地質ニュース」Vol.6 No.2（2017年2月）実松健造「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」、
   米国地質調査所（USGS）Mineral Commodity Summaries 2026 Gold、田中貴金属 店頭買取価格（gold-spot-prices.json・毎朝更新）。確認日 2026-11-25。
   独自: 菱刈鉱山の平均金品位から、金1g・1オンスに必要な鉱石の量と、鉱石1トンに含まれる金の値（毎朝更新）、温泉水の金濃度から金1gに必要な水の量を計算 */
const TITLE = "金はどうやってできた？宇宙での誕生（中性子星の合体）から、日本の金鉱床ができるまでを公的資料で解説";
const URL = "https://gold-biyori.com/articles/kin-dekikata/";
const DESC = "金がどうやってできたのかを、宇宙での誕生（中性子星の合体で起きるrプロセス・2017年の重力波観測）と、地球で金鉱床ができる仕組み（熱水が割れ目に入り石英とともに沈殿）に分けて説明します。菱刈鉱山の公表値から、金1gに必要な鉱石の量や鉱石1トンの金の値（毎朝更新）も計算しました。";

const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* GSJ 地質ニュース（2017）による菱刈鉱山の値 */
const GRADE_2015 = 37; /* g/t（2015年の平均金品位） */
const GRADE_FIND = 290; /* g/t（1981年の発見時のボーリング） */
const ORE_2015 = 204000; /* t */
const AU_2015 = 7.5; /* t */
const SPRING_PPT = 0.6; /* 温泉水の金濃度 0.6±0.4 ppt */
const OZ = 31.1035;
const oreFor1g = 1_000_000 / GRADE_2015; /* g → 1t=1,000,000g なので 1g に必要な鉱石(g) */
const oreFor1oz = (OZ * 1_000_000) / GRADE_2015;
/* 0.6 ppt（質量比）＝水1kg（≒1L）に 0.6×10^-12 kg＝0.6×10^-9 g。金1gに必要な水（L） */
const waterL = 1 / (SPRING_PPT * 1e-9);

const FAQS = [
  { q: "金は宇宙でどうやってできたのですか？", a: "金のような重い元素は、恒星の中の通常の核融合反応では説明できず、中性子が非常に多い環境で一気に進む「rプロセス」という反応でできると考えられています。中性子星どうしの合体はその現場の候補で、2017年8月17日に観測された重力波GW170817では、合体の後に光る「キロノヴァ」が日本の望遠鏡でも観測されました。" },
  { q: "金鉱床はどうやってできるのですか？", a: "日本の菱刈鉱山の場合、地下のマグマなどで熱せられた水（熱水）が岩石の割れ目に入り込み、溶けていた二酸化ケイ素（石英）が沈殿するときに、金や銀も一緒に沈殿して金を含む石英脈ができました。産総研の資料では、鉱床ができた当時の熱水は210℃前後だったとされています。" },
  { q: "日本の金鉱床はいつできたのですか？", a: "産総研 地質調査総合センターの資料によると、菱刈鉱山の石英脈の年代は、一緒に産出する氷長石の年代測定で約120万〜64万年前とされています。地質学的には新しい鉱床で、鉱山内からは今も65〜80℃ほどの温泉水が湧き出ています。" },
  { q: "世界では1年にどれくらい金が採れていますか？", a: "米国地質調査所（USGS）によると、2025年の世界の金鉱山生産は推定3,300トン、埋蔵量は66,000トンです。生産量が多いのは中国（380トン）、ロシア（310トン）、オーストラリア（280トン）などです。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金はどうやってできた", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-25", dateModified: "2026-11-25",
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

export default function KinDekikataPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-hakusho.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-hakusho-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金はどうやってできた</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金ができる仕組みのイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金はどうやってできた？ — 宇宙での誕生と、金鉱床ができる仕組み</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／出典の確認日: 2026年11月25日／金の値: {pubLabel}の田中貴金属の店頭買取価格（毎朝自動更新）</p>

        <p>金ができるまでには2つの段階があります。1つ目は<strong>宇宙で金という元素が生まれる段階</strong>で、中性子星の合体などで起きる「rプロセス」と呼ばれる反応が有力とされ、2017年の重力波の観測で裏づけが得られました。2つ目は<strong>地球で金が集まって鉱床になる段階</strong>で、日本の菱刈鉱山では、熱水が岩石の割れ目に入り、石英とともに金が沈殿して約120万〜64万年前に鉱脈ができました。菱刈鉱山の2015年の平均金品位（鉱石1トンあたり37g）で計算すると、<strong>金1gを得るには約{(oreFor1g / 1000).toFixed(0)}kgの鉱石</strong>が必要です（当サイトの計算）。</p>

        <h2>宇宙で金が生まれる — 中性子星の合体とrプロセス</h2>
        <p>名古屋大学のプレスリリース（2017年10月17日）は、金やウランなどの重元素は通常の核融合反応では説明できず、起源が不明だったとしています。中性子星を含む天体の合体では、高密度の中性子によって<strong>rプロセス（急速な中性子捕獲による重元素合成）</strong>が進むと考えられ、重元素の起源として注目されてきました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>日付</th><th>出来事</th></tr></thead>
            <tbody>
              <tr><td>2017年8月17日</td><td>米国のLIGOと欧州のVIRGOが、中性子星を含む天体の合体による初めての重力波 GW170817 を検出</td></tr>
              <tr><td>2017年8月18日〜9月6日</td><td>名古屋大学が南アフリカのIRSF望遠鏡で、赤外線3波長での観測を継続。国立天文台のすばる望遠鏡なども対応天体を観測（日本の観測グループ J-GEM）</td></tr>
              <tr><td>観測の結果</td><td>赤外線の色の変化が、rプロセスで生じた放射性の元素の熱で光る「キロノヴァ」の予測に近く、今回の爆発がキロノヴァであることを強く示唆</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 名古屋大学 宇宙地球環境研究所「名古屋大学の望遠鏡による重力波対応天体の観測」（2017年10月17日）。同リリースは、今後こうした天体を数多く観測することで重元素の起源の解明が期待されるとしています。</p>

        <h2>地球で金が集まる — 菱刈鉱山の例</h2>
        <p>地球の岩石に含まれる金はわずかで、採掘できるほど集まった場所が金鉱床です。国内で現在操業している金属鉱山は鹿児島県伊佐市の菱刈鉱山（住友金属鉱山）のみと言えるとされ、産総研 地質調査総合センターの資料は、その成り立ちを次のように説明しています。</p>
        <ol>
          <li><strong>割れ目ができる</strong>: 堆積岩（頁岩・砂岩）や安山岩に割れ目が生じる。</li>
          <li><strong>熱水が入る</strong>: 210℃前後の熱水が割れ目に入り込む。</li>
          <li><strong>石英と金が沈殿する</strong>: 溶けていた二酸化ケイ素（SiO2）が溶けにくくなって沈殿し、金や銀も一緒に沈殿する。こうしてできた鉱脈の90%以上は石英で、「含金銀石英脈」と呼ばれます。</li>
        </ol>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>菱刈鉱山の値</th></tr></thead>
            <tbody>
              <tr><td>鉱床の種類</td><td>浅熱水性鉱脈型金銀鉱床</td></tr>
              <tr><td>石英脈ができた年代</td><td>約120万〜64万年前（氷長石の年代測定）</td></tr>
              <tr><td>発見</td><td>1981年2月のボーリング（金品位 {GRADE_FIND}g/t・銀品位 167g/t の石英脈を確認）</td></tr>
              <tr><td>2015年の生産</td><td>出鉱量 {(ORE_2015 / 10000).toFixed(1)}万t・平均金品位 {GRADE_2015}g/t・金 {AU_2015}t</td></tr>
              <tr><td>累計の産金量</td><td>224t（2016年3月時点）。2015年末の可採金量は約170t</td></tr>
              <tr><td>現在の温泉水</td><td>65〜80℃・金濃度 0.6±0.4ppt（鉱床を作るほどの熱水ではない）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 実松健造「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」GSJ 地質ニュース Vol.6 No.2（2017年2月、産総研 地質調査総合センター）。生産の値は同資料が引用する住友金属鉱山（2016）の公表値です。</p>

        <h2>金1gに必要な鉱石と水の量（当サイトの計算）</h2>
        <ul>
          <li><strong>鉱石</strong>: 2015年の平均金品位37g/tで、金1gには約{(oreFor1g / 1000).toFixed(1)}kg、1オンス金貨1枚分（31.1035g）には約{(oreFor1oz / 1_000_000).toFixed(2)}トンの鉱石が必要です。発見時の290g/tの鉱石なら、金1gに約{(1_000_000 / GRADE_FIND / 1000).toFixed(1)}kgです。</li>
          <li><strong>鉱石1トンの金の値</strong>: 37gの金を最新の田中貴金属の店頭買取価格（1g {yen(AU_B)}円）で計算すると約{yen(GRADE_2015 * AU_B)}円です（{pubLabel}・毎朝更新）。実際には採掘・選鉱・製錬の費用がかかります。</li>
          <li><strong>温泉水</strong>: 現在の温泉水の金濃度0.6pptでは、金1gを含む水は約{(waterL / 1e8).toFixed(0)}億リットル（約{yen(waterL / 1000 / 10000)}万m³）になります。鉱床ができた当時の熱水は、これよりはるかに多くの金を含んでいたとされています。</li>
        </ul>
        <p>世界全体では、米国地質調査所（USGS）によると2025年の金鉱山生産は推定3,300トン、埋蔵量は66,000トンです。国別の生産量と埋蔵量は<Link href="/articles/kin-maizoryo/">金の埋蔵量</Link>に、1年分の金の体積は<Link href="/articles/kin-mitsudo/">金の密度</Link>にまとめています。</p>

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
          <li>名古屋大学 宇宙地球環境研究所「名古屋大学の望遠鏡による重力波対応天体の観測」（2017年10月17日）<a href="https://www.isee.nagoya-u.ac.jp/2017/10/20171017.pdf" target="_blank" rel="noopener noreferrer">isee.nagoya-u.ac.jp（PDF）</a></li>
          <li>実松健造「鹿児島県菱刈金鉱床の氷長石—石英脈とその年代」GSJ 地質ニュース Vol.6 No.2（2017年2月）<a href="https://www.gsj.jp/data/gcn/gsj_cn_vol6.no2_p48-52.pdf" target="_blank" rel="noopener noreferrer">gsj.jp（PDF）</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov（PDF）</a></li>
          <li>田中貴金属「本日の地金価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。鉱石・水の量と金の値は公表値をもとにした当サイトの計算で、目安です。</p>

        <RelatedArticles currentSlug="kin-dekikata" relatedSlugs={["kin-maizoryo", "kin-mitsudo", "kin-toha", "kikinzoku-toha", "kinpaku-toha", "ousui-toha"]} />
      </article>
    </div>
  </>);
}
