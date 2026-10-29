import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import { TodayPriceAnswer } from "@/components/TodayPriceAnswer";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";
import ServiceCapture from "@/components/ServiceCapture";

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;
const _BP = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const K18_10G = Math.round(_BP.k18 * 10).toLocaleString();
const K18_30G = Math.round(_BP.k18 * 30).toLocaleString();

/* kihei-10g-table (2026-10-21) */
// 地金換算＝田中貴金属の本日の店頭買取価格（K24・Pt1000、税込1g）× 品位。毎朝11:05の日次ビルドで更新。
const _TK = goldData.tanaka_official as Record<string, number>;
const KIHEI_METALS = [
  { key: "k24", label: "K24（純金）", ratio: 1, base: _TK.au_buyback_per_g, ratioLabel: "24/24", nanboya: 22583 },
  { key: "k22", label: "K22", ratio: 22 / 24, base: _TK.au_buyback_per_g, ratioLabel: "22/24", nanboya: 20720 },
  { key: "k18", label: "K18（750）", ratio: 18 / 24, base: _TK.au_buyback_per_g, ratioLabel: "18/24", nanboya: 17110 },
  { key: "k14", label: "K14", ratio: 14 / 24, base: _TK.au_buyback_per_g, ratioLabel: "14/24", nanboya: 12964 },
  { key: "k10", label: "K10", ratio: 10 / 24, base: _TK.au_buyback_per_g, ratioLabel: "10/24", nanboya: 9086 },
  { key: "pt900", label: "Pt900", ratio: 0.9, base: _TK.pt_buyback_per_g, ratioLabel: "0.90", nanboya: 8219 },
  { key: "pt850", label: "Pt850", ratio: 0.85, base: _TK.pt_buyback_per_g, ratioLabel: "0.85", nanboya: 7722 },
];
// なんぼや「今日の金相場」公表の1g買取相場（2026年10月21日分・この列は日次更新しない）
const NANBOYA_DATE = "2026年10月21日";
const KIHEI_WEIGHTS = [5, 10, 20, 30, 50];
const KIHEI_MATRIX = ["k24", "k18", "k14", "pt900", "pt850"];
const metalPerG = (m: { ratio: number; base: number }) => m.base * m.ratio;
const yen = (n: number) => `${Math.round(n).toLocaleString()}円`;
const K18_PER_G_RAW = metalPerG(KIHEI_METALS[2]);
const K18_10G_RAW = Math.round(K18_PER_G_RAW * 10).toLocaleString();
const K18_HALF_G = Math.round(K18_PER_G_RAW * 0.5).toLocaleString();

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金ブレスレット買取ガイド", item: "https://gold-biyori.com/articles/kin-bracelet-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "喜平ブレスレット10gの買取価格はいくら？", acceptedAnswer: { "@type": "Answer", text: `K18の喜平ブレスレット10gは、${priceDateJa}の田中貴金属 金店頭買取価格（${_TK.au_buyback_per_g.toLocaleString()}円/g）× 18/24 × 10gで地金換算 約${K18_10G_RAW}円、業者の平均的な掛け率0.96を入れた目安で約${K18_10G}円です。Pt850なら地金換算 約${Math.round(metalPerG(KIHEI_METALS[6]) * 10).toLocaleString()}円、K14なら約${Math.round(metalPerG(KIHEI_METALS[3]) * 10).toLocaleString()}円。品位別の表はページ内「喜平ブレスレット10gの買取価格」をご覧ください。` } },
      { "@type": "Question", name: "18金喜平ブレスレット20gの買取相場は？", acceptedAnswer: { "@type": "Answer", text: "「本日のK18 1gあたり買取目安 × 20g」で計算できます。金の買取相場は毎日変動するため、本ページ冒頭の「本日のK18 1g買取相場」カードと重量別早見表（毎日自動更新）で最新の目安をご確認ください。ページ内の買取シミュレーターに純度と重量を入力すれば即座に概算できます。" } },
      { "@type": "Question", name: "金のブレスレットの買取相場はいくらですか？", acceptedAnswer: { "@type": "Answer", text: "金ブレスレットの買取価格は「純度（K18・K24など）× 重量 × 本日の金相場」でほぼ決まります。相場は毎日変動するため、本ページ冒頭の「本日の買取相場」カードと重量別早見表（毎日自動更新）で最新の目安をご確認ください。" } },
      { "@type": "Question", name: "喜平ブレスレットは高く売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい。喜平は装飾が少なく地金価値がほぼそのまま評価される定番の製品で、重量もあるため高額買取が期待できます。目安は「本日の1gあたり買取価格 × 重量」で計算できます。地金として量る店では面数（2面・6面・8面）で1g単価は分かれませんが、中古品として評価する店では面数・状態で上乗せが付くこともあります。" } },
      { "@type": "Question", name: "切れた・片方だけ・刻印なしのブレスレットでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "はい、売れます。金の買取は地金としての「重量 × 純度」で評価されるため、チェーン切れ・留め具の破損・変形・部品の欠けがあっても買取可能です。刻印がない場合も、買取店が比重検査や試金石検査で純度を判定して買い取ります。" } },
      { "@type": "Question", name: "金メッキ（GP・GF）のブレスレットは売れますか？", acceptedAnswer: { "@type": "Answer", text: "GP（金メッキ）は表面のごく薄い金膜のみで地金価値がほぼないため、金としての買取は基本的にできません。GF（金張り）も金の含有量がわずかで、買取対象外か少額になるのが一般的です。刻印が「K18GP」「K18GF」「1/20 K18」などの場合は本物のK18とは評価が異なる点にご注意ください。" } },
      { "@type": "Question", name: "工賃・デザイン料は買取額に含まれますか？", acceptedAnswer: { "@type": "Answer", text: "地金としての金買取では、購入時に支払った工賃・デザイン料・加工賃は買取額に含まれず、評価されるのは金の重量と純度のみです。例外はカルティエなどのブランド品や有名デザイナーズジュエリーで、ブランド買取店ならデザイン・ブランド価値が上乗せされることがあります。" } },
      { "@type": "Question", name: "テニスブレスレットのダイヤも評価されますか？", acceptedAnswer: { "@type": "Answer", text: "はい、テニスブレスレットは金の地金部分とダイヤモンド部分が別々に評価されます。金部分は「重量 × 本日の相場」で概算できますが、ダイヤ部分は4C（カラット・カラー・クラリティ・カット）と鑑定書の有無で大きく変わるため、実際の査定が必須です。" } },
      { "@type": "Question", name: "バングルとブレスレットで買取価格は違いますか？", acceptedAnswer: { "@type": "Answer", text: "買取価格は純度と重量で決まるため、バングルかブレスレットかは関係ありません。ただしバングルは構造上、チェーンブレスレットより重い傾向があるため、結果として買取額も高くなる傾向があります。" } },
      { "@type": "Question", name: "金のブレスレットの重さの目安は？", acceptedAnswer: { "@type": "Answer", text: "細いチェーンブレスレットで3〜5g、テニスブレスレットで5〜10g、喜平ブレスレットで10〜50g、バングルで15〜40gが一般的な重量です。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `金ブレスレット買取相場｜喜平10gの買取価格は約${K18_10G}円・30gは約${K18_30G}円【${priceDateJa}更新】`,
    datePublished: "2026-04-13",
    dateModified: "2026-10-27",
    author: { "@type": "Organization", name: "金買取びより" },
    publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}



export const metadata: Metadata = {
  title: `金ブレスレット買取相場｜喜平10gの買取価格は約${K18_10G}円・30gは約${K18_30G}円【${priceDateJa}更新】`,
  description:
    "喜平ブレスレット10gの買取価格をK24・K18・K14・Pt850の品位別に毎日計算。重さ別の早見表、計算式と基準価格の出典（田中貴金属・なんぼや公表値）、重さの確かめ方、2面・6面などカットで価格が変わるかまで解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-bracelet-kaitori/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">金ブレスレットの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">ブレスレットの買取価格は業者によって差があります。複数社の査定額を比較することをおすすめします。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinBraceletKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-bracelet.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-bracelet-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金ブレスレット買取ガイド</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-brand.png" alt="金ブレスレットの買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金ブレスレット買取相場｜喜平10gの買取価格は約{K18_10G}円・30gは約{K18_30G}円</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

        <div className="bg-white border-2 border-accent/30 rounded-xl p-5 md:p-6 mb-6 not-prose">
          <p className="font-bold text-navy text-lg mb-3">結論：喜平ブレスレット10gの買取価格の目安（{priceDateJa}の公表価格で計算）</p>
          <ul className="space-y-2 text-sm md:text-base">
            {KIHEI_METALS.filter((m) => ["k18", "k24", "k14", "pt850"].includes(m.key)).map((m) => (
              <li key={m.key}><strong>{m.label} 10g</strong> → 地金換算 <strong>{yen(metalPerG(m) * 10)}</strong>（1g {yen(metalPerG(m))} × 10g）</li>
            ))}
          </ul>
          <p className="text-sm mt-3">計算式：田中貴金属工業の店頭買取価格（税込・1g。{priceDateJa}は金 {_TK.au_buyback_per_g.toLocaleString()}円・プラチナ {_TK.pt_buyback_per_g.toLocaleString()}円）× 品位（K18＝18/24、Pt850＝0.85）× 重さ。店の査定は手数料の分だけこれより下がるのがふつうで、当サイトの目安（掛け率0.96）ではK18 10gで約{K18_10G}円です。</p>
          <p className="text-xs text-warm-gray mt-2">出典：<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer nofollow" className="underline">田中貴金属 貴金属価格情報</a>（{priceDateJa}公表分。公表ページが開けない日は最後に取得できた日の値のまま）。K22・K10・Pt900と、なんぼや公表値との比較は<a href="#kihei-10g" className="text-accent-dark underline">品位別10gの表</a>へ。</p>
        </div>

        <TodayPriceAnswer purity="k18" />

        <p>金のブレスレットやバングルは、<strong>ネックレスに次いで買取に持ち込まれることの多い金製品</strong>です。特に喜平ブレスレットやバングルは重量があるため、金価格が高騰している現在、<strong>驚くほどの高額買取</strong>が期待できます。</p>

        <p>「金のブレスレットっていくらで売れる？」「喜平ブレスの相場は？」「壊れたバングルでも売れる？」——この記事では、金ブレスレット・バングルの<strong>種類別・純度別の買取相場、高く売るコツ</strong>を解説します。</p>

        <p>この記事では、以下の内容をご説明します。</p>
        <ul>
          <li>金ブレスレット・バングルの純度別・重量別の最新買取相場（毎日自動更新）</li>
          <li>喜平ブレスレット10g・20g・30g・50gの重量帯別の目安の計算方法</li>
          <li>テニスブレスレットの「金＋ダイヤ」二重評価の仕組み</li>
          <li>切れた・片方だけ・刻印なしでも売れる理由</li>
          <li>カルティエなどブランドブレスレットの査定ポイント</li>
          <li>金ブレスレットを高く売るコツとおすすめ業者</li>
        </ul>

        <CtaBox />

        <GoldSpotPriceCard purity="k18" />

        <div id="weight-table">
          <WeightPriceTable purities={["k24", "k22", "k18", "k14"]} />
        </div>

        <h2>金ブレスレットの買取相場一覧（目安・毎日変動）</h2>

        <p>金ブレスレットの買取価格は<strong>「純度 × 重量 × 本日の1gあたり買取価格」</strong>でほぼ決まります。最新の重量別目安は上の<a href="#weight-table" className="text-accent hover:underline">早見表（毎日自動更新）</a>を、お手持ちの重量での概算は<Link href="/kin-kaitori-keisanki/" className="text-accent hover:underline">金買取グラム計算機</Link>をご利用ください。</p>

        <p>喜平ブレスレットやバングルは<strong>金製品の中でも特に重量がある</strong>ため、買取額も高額になります。特に6面ダブルや8面トリプルの喜平は50g以上のものもあり、本日のK18単価で計算すると1本で数十万円規模になることも珍しくありません。</p>

        <h2 id="kihei">喜平ブレスレットの買取相場 — 重量帯別の目安</h2>

        <p>喜平ブレスレットは<strong>金ブレスレットの中で最も高額買取が期待できる製品</strong>です。装飾がほとんどなくシンプルなチェーン構造のため、<strong>地金（金そのもの）の価値がほぼそのまま買取額に反映される定番アイテム</strong>で、査定額のブレが小さいのが特徴です。</p>

        <h3>喜平の種類と特徴</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>種類</th><th>特徴</th><th>ブレスレットの重量目安</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>2面シングル</strong></td><td>最も基本的な形状。細めで軽い</td><td>約5〜15g</td></tr>
              <tr><td><strong>6面ダブル</strong></td><td>流通量が多い定番。面が多く輝きが強い</td><td>約10〜30g</td></tr>
              <tr><td><strong>8面トリプル</strong></td><td>重厚な高級タイプ。太く重い</td><td>約30〜50g以上</td></tr>
            </tbody>
          </table>
        </div>

        <p>地金として評価する場合、買取額を左右するのは<strong>面数ではなく重量と品位</strong>です。ただし中古品として再販できる喜平は、面数・状態で上乗せが付く店もあります（<a href="#kihei-cut" className="text-accent hover:underline">カットの種類で価格は変わる？</a>）。</p>

        <h3>10g・20g・30g・50g — 重量帯別の計算方法</h3>

        <p>K18喜平ブレスレットの買取目安は、ページ冒頭の<strong>「本日のK18 1g買取相場」カードの金額 × 重量</strong>で計算できます。</p>

        <ul>
          <li><strong>10gの場合</strong>: 本日のK18 1g買取目安 × 10</li>
          <li><strong>20gの場合</strong>: 本日のK18 1g買取目安 × 20（検索の多い「18金 喜平ブレスレット 20g」の相場はこの式で今日の価格がわかります）</li>
          <li><strong>30gの場合</strong>: 本日のK18 1g買取目安 × 30（6面ダブルの20cm前後に多い重量帯）</li>
          <li><strong>50gの場合</strong>: 本日のK18 1g買取目安 × 50（8面トリプルなど重厚タイプ）</li>
        </ul>

        <p>具体的な金額は<a href="#weight-table" className="text-accent hover:underline">重量別早見表（毎日自動更新）</a>に10g・20g・30g・50gの行があるのでそのまま読み取れます。中間の重量（15g、23gなど）は<Link href="/kin-kaitori-keisanki/" className="text-accent hover:underline">グラム計算機</Link>に入力すれば即座に概算できます。K24喜平なら同じ表のK24列をご覧ください。</p>

        <p>なお、実際の買取額は業者の手数料や査定基準により理論値を下回るのが一般的です。だからこそ、重量のある喜平ほど<strong>複数業者での比較</strong>で差額が大きくなります。</p>

        <h2 id="kihei-10g">喜平ブレスレット10gの買取価格 — 品位別（K24・K18・K14・Pt850など）</h2>

        <p>「喜平ブレスレット 10g」の買取価格は、<strong>品位（K18・Pt850など）で大きく変わります</strong>。下の表は、基準価格（1g）× 10g で計算した品位別の目安です。基準価格と計算式は表の下に記載しています。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>品位</th>
                <th>地金換算の1g（{priceDateJa}）</th>
                <th>10gの地金換算</th>
                <th>なんぼや公表の1g相場×10g（{NANBOYA_DATE}）</th>
              </tr>
            </thead>
            <tbody>
              {KIHEI_METALS.map((m) => (
                <tr key={m.key}>
                  <td><strong>{m.label}</strong></td>
                  <td>{yen(metalPerG(m))}</td>
                  <td><strong>{yen(metalPerG(m) * 10)}</strong></td>
                  <td>{yen(m.nanboya * 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>計算式と基準価格の出典</h3>
        <ul>
          <li><strong>地金換算（金）</strong> = 田中貴金属工業の本日の金 店頭買取価格（税込・1g）× 品位（K18なら18/24＝75%）× 重さ。{priceDateJa}の基準価格は<strong>金 {_TK.au_buyback_per_g.toLocaleString()}円/g</strong>（<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">田中貴金属 貴金属価格情報</a>・9:30公表）。例：K18 10g＝{_TK.au_buyback_per_g.toLocaleString()}円 × 18/24 × 10g ＝ 約{K18_10G_RAW}円</li>
          <li><strong>地金換算（プラチナ）</strong> = 同じく田中貴金属のプラチナ 店頭買取価格（{priceDateJa}は<strong>{_TK.pt_buyback_per_g.toLocaleString()}円/g</strong>）× 品位（Pt850なら0.85）× 重さ</li>
          <li><strong>なんぼや公表の1g相場</strong> = 買取店なんぼやが<a href="https://nanboya.com/gold-kaitori/souba/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">「今日の金相場」ページ</a>で公表している品位別の1g買取相場（{NANBOYA_DATE}分：K24 22,583円・K22 20,720円・K18 17,110円・K14 12,964円・K10 9,086円・Pt900 8,219円・Pt850 7,722円）× 10g。なんぼやは「買取相場価格に手数料は含まれておりません。手数料に関しては実物拝見時にご案内」と注記しています。この列は{NANBOYA_DATE}時点の値で、毎日の自動更新はしていません</li>
          <li>ページ冒頭のカードと早見表の「目安」は、地金換算に業者の平均的な掛け率（0.96）をかけた値です（K18 10gで約{K18_10G}円）。実際の査定額は店の手数料・状態で変わるため、地金換算は<strong>「これより大きく下回る査定なら他店も見る」ための上限の目安</strong>としてお使いください</li>
        </ul>

        <h3>重さ別 × 品位別の地金換算（10gの行を強調）</h3>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>重さ</th>
                {KIHEI_MATRIX.map((k) => (
                  <th key={k}>{KIHEI_METALS.find((m) => m.key === k)!.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {KIHEI_WEIGHTS.map((w) => (
                <tr key={w} className={w === 10 ? "bg-amber/15 font-bold" : undefined}>
                  <td>{w}g{w === 10 ? "（今回の基準）" : ""}</td>
                  {KIHEI_MATRIX.map((k) => (
                    <td key={k}>{yen(metalPerG(KIHEI_METALS.find((m) => m.key === k)!) * w)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-warm-gray">※{priceDateJa}の田中貴金属 店頭買取価格（金・プラチナ）× 品位 × 重さで計算（毎朝自動更新）。手数料・宝石・ブランド価値は含みません。</p>

        <h3 id="kihei-omosa">喜平ブレスレットの重さの確かめ方</h3>
        <ul>
          <li><strong>0.1g単位のはかりで量る</strong>: 10gと9.5gの差（0.5g）でも、K18の地金換算では約{K18_HALF_G}円の差になります（{priceDateJa}の基準価格で計算）。見た目の太さ・長さでは重さは決まらず、中空（ホロー）の喜平は見た目より軽くなります</li>
          <li><strong>刻印は「品位」の表示で、重さではない</strong>: 「K18」「750」「Pt850」は品位（純度）の表示です。造幣局の公式説明では、造幣局が品位を証明した製品には<strong>日の丸と、ひし形の中に1000分率の数字（K18相当なら750）</strong>のホールマークが打たれ、「K18、Pt900などの記号は造幣局の証明記号ではありません」とされています。ホールマークは任意の制度のため、無い製品もあります（<a href="https://www.mint.go.jp/operations/exam/operations_certification-01.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">造幣局「貴金属製品の品位証明」</a>・{NANBOYA_DATE}確認）</li>
          <li><strong>査定では店の計量と品位判定が使われる</strong>: 事前に量った重さを控えておくと、店が示した重さと照らし合わせられます</li>
        </ul>

        <h3 id="kihei-cut">2面・6面などカットの種類で価格は変わる？</h3>
        <p><strong>地金として量り売りする場合、1g単価は品位で決まり、カットの種類では分かれません</strong>。なんぼやの「今日の金相場」も、1g相場は品位別（K18・K14など）で、形状別の単価はありません。一方、<strong>中古品として再販できる喜平は、カットや状態で上乗せが付く店もあります</strong>。おたからや公式の参考買取価格では、K18喜平ブレスレットの<strong>2面シングル49.6g＝1,296,100円（1gあたり約26,131円）</strong>、<strong>6面ダブル50.2g＝1,367,400円（1gあたり約27,239円）</strong>で、6面ダブルのほうが1gあたり約4%高くなっています（どちらも「2026年1月29日時点の過去最高買取実績であり、現在の買取価格ではありません」と注記。<a href="https://www.otakaraya.jp/gold/result/gold/kihei/kihei-bracelet/23746/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">2面シングル</a>・<a href="https://www.otakaraya.jp/gold/result/gold/kihei/kihei-bracelet/32924/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">6面ダブル</a>・{NANBOYA_DATE}確認）。カット付きの喜平は、地金だけで計算する店と、製品として評価する店の両方で見積もりを取ると差がわかります。</p>

        <h2>テニスブレスレットの買取 — 金とダイヤは別評価</h2>

        <p>ダイヤモンドを一列に並べたテニスブレスレットは、<strong>「金の地金部分」と「ダイヤモンド部分」が別々に評価される</strong>点が喜平と大きく異なります。</p>

        <ul>
          <li><strong>金部分</strong>: 「重量 × 本日の1gあたり買取価格」で今日の概算が可能。ただしダイヤの重さは含めず、地金部分のみの重量で計算されます</li>
          <li><strong>ダイヤ部分</strong>: 総カラット数と品質（4C = カラット・カラー・クラリティ・カット）で査定額が大きく変わり、<strong>鑑定書（グレーディングレポート）の有無</strong>でも評価が変わります。事前の自己計算は困難で、実際の査定が必須です</li>
        </ul>

        <p>テニスブレスレットは「金部分は今日の相場で読める・ダイヤ部分は査定してみないとわからない」というのが実態です。メレダイヤ（小粒ダイヤ）中心の場合はダイヤの評価が控えめになることも多い一方、1粒が大きい場合は金の価値を上回ることもあります。ダイヤの査定基準は<Link href="/articles/diamond-kaitori/" className="text-accent hover:underline">ダイヤモンド買取ガイド</Link>で詳しく解説しています。</p>

        <h2>切れた・片方だけ・刻印なしでも売れる？</h2>

        <p><strong>すべて売れます</strong>。金の買取は地金としての「重量 × 純度」で評価されるため、製品としての完成度は査定額にほぼ影響しません。</p>

        <ul>
          <li><strong>チェーンが切れた・留め具が壊れた</strong>: 問題なく買取可能。修理せずそのまま売る方が、修理代の分だけ手元に残る額が多くなるのが普通です</li>
          <li><strong>片方だけ・パーツの一部だけ</strong>: ペアの片方や切れ端でも、金であれば重量分がそのまま評価されます</li>
          <li><strong>刻印（K18等）がない</strong>: 買取店が比重検査や試金石検査、蛍光X線分析などで純度を判定して買い取ります。刻印なし＝売れない、ではありません</li>
        </ul>

        <p>壊れた金製品の査定の流れや注意点は<Link href="/articles/kowareta-kin-kaitori/" className="text-accent hover:underline">壊れた金の買取ガイド</Link>で詳しくまとめています。</p>

        <h2>ブランドブレスレットの買取（カルティエ・ティファニーなど）</h2>

        <p>カルティエやティファニーなどのブランドブレスレットは、<strong>「地金価値」＋「ブランド価値」の二重評価</strong>になります。金買取専門店に持ち込むと地金価値（重量 × 純度）だけで査定されがちですが、人気モデルはそれを大きく上回る価格で取引されます。</p>

        <p>カルティエのラブブレスレットなどは、<strong>金の素材価値の3〜5倍以上</strong>で取引されることもあります。ブランドブレスレットを売る場合は、金買取専門店だけでなく、<strong>ブランド買取専門店にも必ず見積もり</strong>を取ることをおすすめします。カルティエ製品の相場感は<Link href="/articles/cartier-kaitori/" className="text-accent hover:underline">カルティエ買取ガイド</Link>もご参照ください。</p>

        <h2>金ブレスレットを高く売る5つのコツ</h2>

        <h3>1. 複数の買取業者に見積もりを取る</h3>
        <p>喜平ブレスレットのような高額品は、業者間の差が数万円になることも。<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>の一括査定で効率的に比較することをおすすめします。</p>

        <h3>2. ブランド品は専門店にも見積もりを</h3>
        <p>カルティエやティファニーのブレスレットは、ブランド買取店の方が高値となる傾向があります。金買取店とブランド買取店の両方に見積もりを取ることをおすすめします。</p>

        <h3>3. 付属品を揃える</h3>
        <p>保証書、箱、ケース、ドライバー（カルティエのラブブレスレットの場合）があると査定額が大幅にアップします。</p>

        <h3>4. 事前に重量を確認する</h3>
        <p>デジタルスケール（0.1g単位）で重量を測っておくと、査定額の目安がわかり、<strong>不当に安い査定を出す業者を見抜けます</strong>。</p>

        <h3>5. 金相場が高いタイミングを狙う</h3>
        <p>金の買取価格は毎日変動します。<Link href="/articles/kin-kaitori-souba/" className="text-accent hover:underline">金買取相場ページ</Link>で最新価格をチェックし、高いタイミングで売却することをおすすめします。</p>

        <CtaBox />

        <h2>金ブレスレットの買取におすすめの業者4社</h2>

        <h3>ヒカカク！ — 一括査定で最高値を比較</h3>

        <ServiceCapture id="hikakaku" />
        <p><a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！</a>は複数業者に一括査定。喜平ブレスレットのような高額品こそ、複数社を比較するメリットが大きくなります。</p>

        <h3>買取大吉 — 全国2,500店舗以上で即現金化</h3>

        <ServiceCapture id="daikichi" />
        <p><a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">買取大吉</a>は全国2,500店舗以上（公式表記・2026年10月確認）。ブレスレットをその場で計量・査定し即現金化。公式の金・貴金属ページには「K18 喜平ブレスレット」などの買取参考価格が掲載されています（2026年10月11日確認）。</p>

        <h3>ウリエル — 自宅で完結する出張買取</h3>

        <ServiceCapture id="uriel" />
        <p><a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ウリエル</a>は出張買取が中心の買取専門店です（店頭買取は川崎店のみ・宅配買取の案内は公式サイトになし。出張買取は沖縄県など一部対象外の地域あり）。高額な喜平ブレスレットを持ち歩くのが不安な方におすすめです。</p>

        <h3>ティファナ — 店頭・出張に対応（宅配は一時停止中）</h3>

        <ServiceCapture id="tifana" />
        <p><a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ティファナ</a>は店頭・出張に対応しています（出張買取は東京・埼玉・神奈川・千葉の一部地域）。宅配買取は公式サイトで「システムリニューアルのため一時停止」と案内されています（2026年10月29日確認）。</p>

        <h2>よくある質問（FAQ）</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "喜平ブレスレット10gの買取価格はいくら？",
              a: `K18の喜平ブレスレット10gは、${priceDateJa}の田中貴金属 金店頭買取価格（${_TK.au_buyback_per_g.toLocaleString()}円/g）× 18/24 × 10gで地金換算 約${K18_10G_RAW}円、業者の平均的な掛け率0.96を入れた目安で約${K18_10G}円です。Pt850なら地金換算 約${Math.round(metalPerG(KIHEI_METALS[6]) * 10).toLocaleString()}円、K14なら約${Math.round(metalPerG(KIHEI_METALS[3]) * 10).toLocaleString()}円。品位別の表はページ内「喜平ブレスレット10gの買取価格」をご覧ください。`,
            },
            {
              q: "18金喜平ブレスレット20gの買取相場は？",
              a: "「本日のK18 1gあたり買取目安 × 20g」で計算できます。相場は毎日変動するため、ページ冒頭の「本日のK18 1g買取相場」カードと重量別早見表（毎日自動更新）で最新の目安をご確認ください。買取シミュレーターに純度と重量を入力すれば即座に概算できます。",
            },
            {
              q: "喜平ブレスレットの買取相場はいくらですか？",
              a: "喜平は装飾が少なく地金価値がほぼそのまま評価される定番製品で、目安は「本日の1gあたり買取価格 × 重量」で計算できます。地金として量る店では面数（2面・6面・8面）で1g単価は分かれませんが、中古品として評価する店では面数・状態で上乗せが付くこともあります。最新の1g単価はページ冒頭のカードでご確認ください。",
            },
            {
              q: "切れた・片方だけ・刻印なしのブレスレットでも売れますか？",
              a: "はい、売れます。金の買取は地金としての「重量 × 純度」で評価されるため、チェーン切れ・留め具の破損・変形・部品の欠けがあっても買取可能です。刻印がない場合も、比重検査や試金石検査で純度を判定して買い取ってもらえます。",
            },
            {
              q: "金メッキ（GP・GF）のブレスレットは売れますか？",
              a: "GP（金メッキ）は表面のごく薄い金膜のみで地金価値がほぼないため、金としての買取は基本的にできません。GF（金張り）も金の含有量がわずかで、買取対象外か少額になるのが一般的です。「K18GP」「K18GF」「1/20 K18」などの刻印は本物のK18とは評価が異なります。",
            },
            {
              q: "工賃・デザイン料は買取額に含まれますか？",
              a: "地金としての金買取では、購入時に支払った工賃・デザイン料・加工賃は買取額に含まれません。評価されるのは金の重量と純度のみです。例外はブランド品や有名デザイナーズジュエリーで、ブランド買取店ならデザイン・ブランド価値が上乗せされることがあります。",
            },
            {
              q: "バングルの中が空洞でも売れますか？",
              a: "はい、中空（ホロー）バングルも買取可能です。ただし、見た目のサイズに対して重量が軽いため、無垢バングルと比べると買取額は低くなります。査定時に正確な重量が計測されます。",
            },
            {
              q: "テニスブレスレットのダイヤも評価されますか？",
              a: "はい、テニスブレスレットのダイヤモンドは金属部分とは別に評価されます。総カラット数と品質（4C）で査定されるため、鑑定書があると正確な評価が可能です。金部分は「重量 × 本日の相場」で概算できますが、ダイヤ部分は実際の査定が必須です。",
            },
            {
              q: "金のブレスレットの重さを自宅で測る方法は？",
              a: "0.1g単位のデジタルスケール（キッチンスケールでも可）で測定できます。Amazonなどで1,000〜2,000円で購入可能です。詳しくは「金の重さの測り方ガイド」をご覧ください。",
            },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <GoldPriceTrend />
        <ExpertQA category="product" />
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="kin-bracelet-kaitori"
          relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kin-necklace-kaitori", "kin-chain-kaitori", "kin-yubiwa-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori"]}
        />

        <h2>まとめ</h2>

        <p>金のブレスレット・バングルは、ネックレスと並んで<strong>高額買取が期待できる金製品</strong>です。特に喜平ブレスレットやバングルは重量があるため、1本で数十万円の買取額になることも珍しくありません。</p>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日の買取相場」カードと<a href="#weight-table" className="text-accent hover:underline">重量別早見表（毎日自動更新）</a>でご確認ください。目安の計算式は<strong>「本日の1gあたり買取価格 × 重量」</strong>——20gの喜平でも50gの8面トリプルでも、この式で今日の概算がわかります。切れていても、変形していても、刻印がなくても、金の素材価値は変わりません。</p>

        <p>金ブレスレットを少しでも高く売るために、以下のポイントを実践してください。</p>

        <ol>
          <li><strong>複数業者に見積もりを取る</strong>（高額品ほど比較のメリット大）</li>
          <li><strong>ブランド品は金買取とブランド買取の両方に見積もりを取る</strong></li>
          <li><strong>事前にデジタルスケールで重量を確認しておく</strong></li>
        </ol>

        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちのブレスレットの価値を確認してみてください。査定は無料です。</p>
      </article>
    </div>
    </>
  );
}
