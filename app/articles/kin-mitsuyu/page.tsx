import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261128: 「金 密輸」。出典: 財務省・税関「金密輸の取締強化について」（令和6年11月：消費税脱税スキーム・平成29年1,347件/約6.3トン・
   令和6年1-6月 前年同期比81%増/押収量約8.1倍・11月28日臨時税関長会議・罰則＝5年以下の懲役若しくは最高で金の価格の5倍の罰金等）、
   税関「令和6年の全国の税関における関税法違反事件の取締り状況」Ⅲ 金地金の密輸動向（H27〜R6 摘発件数・押収量、R6 密輸形態別・仕出地別、1,400万円/kg×5kg の例）、
   財務省「令和6事務年度の関税等脱税事件に係る犯則調査の結果」（令和7年11月12日：金地金186件・前年比82%増・脱税額約6億2千万円）、
   財務省・税関「金の輸出入時における通関関係書類の提出について」（令和8年4月1日 統計細分新設・8月1日 輸出時の書類提出）、
   税関「支払手段等の携帯輸出・輸入申告書」（金の地金〈純度90%以上〉1kg超）、国税庁「消費税法改正のお知らせ」（平成31年4月 密輸品と知りながらの仕入れ）・No.6499。
   確認日 2026-11-28。1kg あたりの消費税相当額・1件あたりの押収量は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "金の密輸はなぜ起きる？消費税10%を抜く仕組みと、税関の摘発件数10年分（令和6年 493件・約1.2トン）";
const URL = "https://gold-biyori.com/articles/kin-mitsuyu/";
const DESC = "金の密輸が増える理由（輸入時の消費税を納めずに国内で税込価格で売る仕組み）を、財務省・税関の公表資料で解説。摘発件数・押収量の10年推移、密輸の形態と仕出地、罰則、2026年の取締強化、金を売る側への影響をまとめました。";

const T = goldData.tanaka_official;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 1kg を税込の買取価格で売ったときの、価格に含まれる消費税相当額（当サイトの計算） */
const KG_PRICE = AU_B * 1000;
const KG_TAX = (KG_PRICE * 10) / 110;

/* 税関「令和6年の関税法違反事件の取締り状況」【金地金の過去10年間の摘発状況】（令和6年は速報値） */
const HISTORY = [
  { y: "平成27年", n: 465, kg: 2032 },
  { y: "平成28年", n: 811, kg: 2802 },
  { y: "平成29年", n: 1347, kg: 6277 },
  { y: "平成30年", n: 1086, kg: 2054 },
  { y: "令和元年", n: 61, kg: 319 },
  { y: "令和2年", n: 51, kg: 150 },
  { y: "令和3年", n: 5, kg: 27 },
  { y: "令和4年", n: 9, kg: 135 },
  { y: "令和5年", n: 219, kg: 302 },
  { y: "令和6年", n: 493, kg: 1218 },
];
const MAX_N = Math.max(...HISTORY.map((h) => h.n));

/* 同資料 R6 の密輸形態別（件数・押収量kg） */
const FORMS = [
  { f: "航空機旅客（乗組員を含む）", n: 429, kg: 480 },
  { f: "航空貨物（別送品を含む）", n: 28, kg: 656 },
  { f: "船員等（洋上取引・船舶旅客等）", n: 21, kg: 73 },
  { f: "国際郵便物", n: 15, kg: 9 },
];
/* 同資料 R6 の密輸仕出地別の摘発件数（アジア 492件） */
const ORIGINS = [
  { o: "香港", n: 281 }, { o: "中国", n: 105 }, { o: "韓国", n: 34 }, { o: "台湾", n: 23 },
  { o: "ベトナム", n: 16 }, { o: "シンガポール", n: 14 }, { o: "タイ", n: 12 }, { o: "北米（米国）", n: 1 },
];

const FAQS = [
  { q: "なぜ金の密輸が起きるのですか？", a: "財務省・税関によると、金を隠して日本に持ち込むことで輸入時の消費税を納めず、国内の買取事業者に消費税込みの価格で売ることで、消費税相当分を利益にすることが目的とされています。利益の源は消費税（10%）相当分です。" },
  { q: "金の密輸はどれくらい摘発されていますか？", a: "税関の公表では、令和6年（2024年）の金地金の密輸事件の摘発件数は493件（前年比約2.3倍）、押収量は約1,218kg（同約4倍）でした（速報値）。過去最多は平成29年（2017年）の1,347件・約6.3トンです。" },
  { q: "金の密輸の罰則は？", a: "財務省・税関は、金密輸に係る関税法上の罰則として、5年以下の懲役若しくは最高で金の価格の5倍の罰金等が科され、またはその両方が科されると説明しています（令和6年11月の掲載）。" },
  { q: "海外で買った金を日本に持ち込むときは？", a: "税関の案内では、純度90%以上の金の地金の重量が1kgを超える場合は「支払手段等の携帯輸出・輸入申告書」の提出が必要です。金地金を輸入するときは消費税の納付が必要で、税関の資料では本体価格7,000万円の金地金に700万円（10%）の例が示されています。" },
  { q: "密輸対策の強化で、手持ちの金を売るときに何か変わりますか？", a: "正規に持っている金を売る手続きそのものは変わっていません。買取業者は売却者の本人確認書類を保存しないと仕入れの消費税を控除できないため、売却時には本人確認書類の提示と写しの保存を求められます。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金の密輸", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-28", dateModified: "2026-11-28",
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

export default function KinMitsuyuPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-zeikin.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-zeikin-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金の密輸</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金の密輸の仕組みと摘発状況の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金の密輸はなぜ起きる？ — 消費税の仕組みと税関の摘発状況</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月28日／統計: 財務省・税関の公表資料（2026年11月28日確認）／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>財務省・税関によると、金の密輸は<strong>金を隠して日本に持ち込み、輸入時の消費税を納めずに、国内の買取事業者へ消費税込みの価格で売る</strong>ことで、消費税相当分を利益にする目的で行われています。最新の田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）では、金1kgの買取額は約{yen(KG_PRICE)}円で、そのうち消費税相当額は<strong>約{yen(KG_TAX)}円</strong>です（当サイトの計算）。税関の公表では、令和6年（2024年）の金地金の密輸事件の摘発は<strong>493件・押収量約1,218kg</strong>でした。</p>

        <h2>密輸で利益が出る仕組み（税関の説明）</h2>
        <p>税関は、本体価格1,400万円/kgの金地金5kg（7,000万円）を例に説明しています。正規に輸入すれば税関で700万円（7,000万円×10%）の消費税を納める必要がありますが、密輸ではこれを納めずに持ち込み、国内の買取業者が消費税込みの価格で買い取ることで、700万円が利益になります。税関は、この利益が国外に持ち出されて新たな金の購入資金に充てられ、多くの場合は組織的に行われていると考えられること、また犯罪組織の資金源になっている可能性があることを示しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>重さ</th><th>税込の買取額（最新の田中の買取価格）</th><th>うち消費税相当額（10/110）</th></tr></thead>
            <tbody>
              {[1, 5, 10].map((kg) => (
                <tr key={kg}><td>{kg}kg</td><td>{yen(KG_PRICE * kg)}円</td><td>{yen(KG_TAX * kg)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 税込の買取額＝重さ×田中貴金属の金の店頭買取価格（税込・{pubLabel}）。消費税相当額＝税込の買取額×10/110。税関の例（本体価格×10%）とは計算の起点が異なります。金価格が上がるほど1kgあたりの消費税相当額も大きくなり、財務省・税関も金価格の上昇で不正な利益が上昇していることを摘発増加の背景に挙げています。</p>

        <h2>摘発件数と押収量の10年推移</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年</th><th>摘発件数</th><th>押収量</th><th>1件あたり</th></tr></thead>
            <tbody>
              {HISTORY.map((h) => (
                <tr key={h.y}>
                  <td>{h.y}</td>
                  <td>
                    <span className="inline-block align-middle bg-amber-600/70 h-2 rounded mr-2" style={{ width: `${Math.max(2, (h.n / MAX_N) * 80)}px` }} aria-hidden="true" />
                    {h.n.toLocaleString()}件
                  </td>
                  <td>{h.kg.toLocaleString()}kg</td>
                  <td>約{(h.kg / h.n).toFixed(1)}kg</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 税関「令和6年の全国の税関における関税法違反事件の取締り状況」Ⅲ 金地金の密輸動向（令和6年は速報値・金地金には一部加工された金製品を含む）。1件あたりの押収量は当サイトの計算です。</p>
        <p>平成26年4月に消費税率が8%に上がると金の密輸は急増し、平成29年には1,347件・約6.3トンが摘発されました。財務省は平成29年11月に「ストップ金密輸」緊急対策を策定し、平成30年4月の罰金上限額の引き上げ後は大きく減少しました。その後、訪日外国人旅行者数の回復と金価格の上昇を受けて再び増加し、令和6年は1件あたりの押収量が約2.5kgと、令和5年の約1.4kgから大きくなっています（当サイトの計算）。</p>

        <h2>どこから、どうやって持ち込まれるか（令和6年）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>密輸の形態</th><th>摘発件数</th><th>押収量</th></tr></thead>
            <tbody>
              {FORMS.map((f) => (
                <tr key={f.f}><td>{f.f}</td><td>{f.n}件</td><td>{f.kg}kg</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>件数では航空機旅客が429件で約9割を占める一方、押収量では航空貨物が約656kgで全体の約半数です。旅客は1件あたり約1.1kg、航空貨物は約23kg（当サイトの計算）で、少量を身につけて運ぶ形と、貨物に隠して大量に運ぶ形に分かれています。税関は、身辺に隠した粉末状の金、ICチップに偽装した金、コンプレッサーに隠した金などの摘発事例を公表しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>仕出地</th><th>摘発件数</th></tr></thead>
            <tbody>
              {ORIGINS.map((o) => (
                <tr key={o.o}><td>{o.o}</td><td>{o.n}件</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 同資料の「密輸形態別の摘発状況（R6）」「密輸仕出地別の摘発件数（R6）」。表にない「その他」8件があります。アジアからが492件、香港からが281件で全体の約6割です。</p>

        <h2>犯則調査で処分された件数と脱税額</h2>
        <p>財務省が令和7年11月12日に公表した令和6事務年度（令和6年7月〜令和7年6月）の犯則調査の結果では、関税等の脱税事件として処分した300件のうち、金地金の密輸入に係るものが<strong>186件（前事務年度比82%増）</strong>、脱税額は<strong>約6億2千万円（同73%増）</strong>で、全体の脱税額の約9割を占めました。告発事例として、シンガポールから到着した航空貨物による金地金約15kg（脱税額約1,470万円）が挙げられています。上の摘発件数（暦年）とは集計の期間と定義が異なります。</p>

        <h2>罰則と、2024〜2026年の取締強化</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>時期</th><th>内容</th></tr></thead>
            <tbody>
              <tr><td>平成29年11月</td><td>財務省関税局が「ストップ金密輸」緊急対策を策定（検査・処罰の強化、情報収集と分析）</td></tr>
              <tr><td>令和6年11月28日</td><td>臨時税関長会議で、関税局長が各税関長に金密輸の水際取締りの一層の強化を指示。検査機器の整備と、犯則調査を通じた厳正な処分を進めるとした</td></tr>
              <tr><td>令和8年4月1日</td><td>シリアル番号等（製錬者のマーク・製造番号・純度・重量の刻印）のある金の輸入統計細分を新設</td></tr>
              <tr><td>令和8年8月1日</td><td>シリアル番号等のある金の輸出時に、番号が記載された通関関係書類の提出を求める（消費税の不正な還付を目的とした輸出の取締り）</td></tr>
            </tbody>
          </table>
        </div>
        <p>財務省・税関は、金密輸に係る関税法上の罰則として「5年以下の懲役若しくは最高で金の価格の5倍の罰金等が科せられ、またはその両方が科せられます」と説明しています（令和6年11月の掲載）。</p>

        <h2>海外から金を持ち込むときの申告</h2>
        <ul>
          <li><strong>1kgを超える金の地金</strong>: 税関の案内では、金の地金（純度90%以上）の重量が1kgを超える場合、入国（出国）時に「支払手段等の携帯輸出・輸入申告書」の提出が必要です。</li>
          <li><strong>消費税</strong>: 国税庁によると、保税地域から引き取る外国貨物は、事業者でない一般の消費者も消費税の納税義務者になります。輸入時に消費税を納めずに持ち込み、国内で売ることが密輸の問題です。</li>
        </ul>

        <h2>金を売る側への影響</h2>
        <p>正規に持っている金を売る手続きは変わっていません。ただし、密輸品が国内の買取事業者に流れることへの対策として、国税庁は次のルールを設けています。</p>
        <ul>
          <li>買取事業者が金・白金の地金を仕入れたとき、売却者の本人確認書類を保存しないと仕入れの消費税を控除できない（令和元年10月1日以後）</li>
          <li>密輸品と知りながら仕入れた場合は、仕入税額控除を受けられない（平成31年4月1日以後）</li>
        </ul>
        <p>このため、金を売るときは本人確認書類の提示と写しの保存を求められます。詳しくは<Link href="/articles/kin-kaitori-shohizei/">金買取と消費税</Link>、1回の売却額が200万円を超える場合は<Link href="/articles/kin-200man-mynumber/">金200万円超の売却とマイナンバー</Link>、地金の売却全般は<Link href="/articles/kin-nobebo-kaitori/">金の延べ棒（インゴット）の買取</Link>をご覧ください。</p>

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
          <li>財務省・税関「金密輸の取締強化について」（令和6年11月）<a href="https://www.customs.go.jp/mizugiwa/gold/reinforce.htm" target="_blank" rel="noopener noreferrer">customs.go.jp</a></li>
          <li>税関「令和6年の全国の税関における関税法違反事件の取締り状況」Ⅲ 金地金の密輸動向<a href="https://www.customs.go.jp/mizugiwa/mitsuyu/report2025/2025haku04.pdf" target="_blank" rel="noopener noreferrer">customs.go.jp（PDF）</a></li>
          <li>財務省「令和6事務年度の関税等脱税事件に係る犯則調査の結果」（令和7年11月12日）<a href="https://www.mof.go.jp/policy/customs_tariff/trade/collection/ka20251112a.html" target="_blank" rel="noopener noreferrer">mof.go.jp</a></li>
          <li>財務省・税関「金の輸出入時における通関関係書類の提出について」<a href="https://www.customs.go.jp/mizugiwa/gold/20260313.html" target="_blank" rel="noopener noreferrer">customs.go.jp</a>・税関「支払手段等の携帯輸出・輸入申告書」<a href="https://www.customs.go.jp/kaigairyoko/shiharaishudan.htm" target="_blank" rel="noopener noreferrer">customs.go.jp</a></li>
          <li>国税庁 タックスアンサー No.6105<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6105.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.6499<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shohi/6499.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・「消費税法改正のお知らせ」<a href="https://www.nta.go.jp/publication/pamph/shohi/kaisei/201904.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月28日。統計は公表時点の値で、速報値は改定される場合があります。本ページは制度と統計のご説明で、個別の取引の判断は税関・税務署にご確認ください。</p>

        <RelatedArticles currentSlug="kin-mitsuyu" relatedSlugs={["kin-kaitori-shohizei", "kin-200man-mynumber", "kin-nobebo-kaitori", "kin-baikyaku-mynumber", "kin-kaitori-sagi"]} />
      </article>
    </div>
  </>);
}
