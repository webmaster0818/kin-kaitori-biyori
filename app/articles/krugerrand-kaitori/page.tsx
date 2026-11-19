import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261120: 「クルーガーランド金貨 買取」。出典: South African Mint「Bullion coins」（1oz・1/2・1/4・1/10oz、純金をちょうどその量含む、24金11/12＋銅1/12＝22金）・「About bullion」（1967年〜・累計5,200万oz超）、
   Rand Refinery「Products」（22金＝純金9167・銅833、銅は傷・変形に強くするため、1967年 Chamber of Mines の発案）、
   三菱マテリアル「金貨」（取扱はカンガルー・メイプルリーフ・ウィーンの3種、取扱のない金貨は買い取りできないことがある）・「相場」（2026-11-19 13:30 世界の金貨の店頭買取価格）、
   徳力本店「相場」（2026-11-19 13:00 ウィーン・メイプルの買取価格〈プレミアム無〉・金地金買取 20,777円/g、他社で購入したコインはプレミアム無の価格）、
   e-Gov 所得税法 224条の6・225条1項14号、施行令 350条の7（200万円）、施行規則 90条の6。確認日 2026-11-20。
   総重量・含有金の値は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "クルーガーランド金貨の買取 — 22金・1オンスに含まれる金の値と、国内の地金商の取扱【毎朝更新】";
const URL = "https://gold-biyori.com/articles/krugerrand-kaitori/";
const DESC = "南アフリカのクルーガーランド金貨（22金）の規格を南アフリカ造幣局・Rand Refineryの公式で確認し、1oz〜1/10ozに含まれる金の値を田中貴金属の価格で毎朝計算しています。国内の地金商の取扱状況と、200万円超の支払調書もまとめました。";

const T = goldData.tanaka_official;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const OZ = 31.1035; // g（三菱マテリアル「純金1oz＝約31.1035g」・計量単位令のトロイオンス）
const FINE = 0.9167; // Rand Refinery「純金 9167・銅 833」
const SIZES = [
  { label: "1oz", oz: 1 },
  { label: "1/2oz", oz: 0.5 },
  { label: "1/4oz", oz: 0.25 },
  { label: "1/10oz", oz: 0.1 },
].map((s) => {
  const pure = OZ * s.oz;
  return { ...s, pure, total: pure / FINE, value: pure * AU_B };
});
/* 2026-11-19 の国内公表値（静的） */
const MMC_WORLD_1OZ = 634337; // 三菱マテリアル 世界の金貨 1oz 店頭買取（税込・13:30）
const TOKURIKI_1OZ = 608170; // 徳力本店 ウィーン・メイプル 1oz 買取（プレミアム無・税込・13:00）
const TOKURIKI_AU = 20777; // 徳力本店 金地金 買取 1g（同時刻）
const tokurikiRatio = (TOKURIKI_1OZ / (TOKURIKI_AU * OZ)) * 100;
const n200 = Math.floor(2_000_000 / SIZES[0].value);

const FAQS = [
  { q: "クルーガーランド金貨の純度はどれくらいですか？", a: "22金です。南アフリカ造幣局は24金11/12と銅1/12、Rand Refineryは純金9167・銅833の割合としています。純金をちょうど1oz・1/2oz・1/4oz・1/10oz含むように作られています。" },
  { q: "クルーガーランド金貨1オンスの重さは何グラムですか？", a: `含まれる純金は1トロイオンス（約31.1035g）です。銅を含む全体の重さは、純金の量を品位0.9167で割ると約${SIZES[0].total.toFixed(2)}gになります（当サイトの計算。南アフリカ造幣局・Rand Refineryの公式ページには総重量の数値の掲載がありませんでした）。` },
  { q: "クルーガーランド金貨は国内のどこで買い取ってもらえますか？", a: "2026年11月20日の確認では、三菱マテリアル・徳力本店・石福金属興業の公式の金貨の一覧にクルーガーランドはありませんでした。三菱マテリアルは、取り扱いのない金貨は買い取りできないことがあるため事前に問い合わせるよう案内しています。売却前に、買取店に取扱と価格の基準を確認してください。" },
  { q: "クルーガーランド金貨を売ると支払調書は出ますか？", a: `所得税法では金貨は「金地金等」に含まれ、1回の売却額が200万円を超えると、買い取った事業者が支払調書を税務署に提出します。最新の田中貴金属の金の買取価格で、1ozに含まれる金の値は約${yen(SIZES[0].value)}円です（当サイトの計算）。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "クルーガーランド金貨の買取", item: URL },
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

export default function KrugerrandKaitoriPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinka.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinka-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">クルーガーランド金貨の買取</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="クルーガーランド金貨の買取の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">クルーガーランド金貨の買取 — 含まれる金の値と国内の取扱</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月20日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／規格・取扱は2026年11月20日に各社公式で確認</p>

        <p><strong>クルーガーランド金貨は、南アフリカで1967年から作られている22金の地金型金貨</strong>で、1oz・1/2oz・1/4oz・1/10ozの4種類があり、それぞれ純金をちょうどその量含みます（南アフリカ造幣局）。最新の田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）で計算すると、<strong>1ozに含まれる金の値は約{yen(SIZES[0].value)}円</strong>です。ただし、国内の大手地金商3社（三菱マテリアル・徳力本店・石福金属興業）の公式の金貨の一覧にはクルーガーランドがなく（2026年11月20日確認）、買取の可否と価格の基準は店ごとに確認が必要です。</p>

        <h2>サイズ別に含まれる金の値（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>含まれる純金</th><th>全体の重さ（計算値）</th><th>含まれる金の値</th></tr></thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.label}><td>{s.label}</td><td>{s.pure.toFixed(2)}g</td><td>約{s.total.toFixed(2)}g</td><td>{yen(s.value)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 含まれる純金＝1トロイオンス31.1035g×サイズ。全体の重さ＝純金の量÷品位0.9167（Rand Refineryの「純金9167・銅833」）。南アフリカ造幣局・Rand Refineryの公式ページには総重量の掲載がないため計算値です。含まれる金の値＝純金の量×田中貴金属の金の店頭買取価格（{pubLabel}）。金貨の買取価格そのものではありません。</p>

        <h2>規格（南アフリカ造幣局・Rand Refinery）</h2>
        <ul>
          <li><strong>品位</strong>: 22金。南アフリカ造幣局は「24金11/12と銅1/12」、Rand Refineryは「純金9167・銅833」と表記しています。Rand Refineryは、銅を加えるのは傷や変形に強くするためと説明しています。</li>
          <li><strong>発行の経緯</strong>: Rand Refineryによると、1967年に南アフリカ鉱業会議所（Chamber of Mines）の発案で、Rand Refineryと南アフリカ造幣局が製造を始めました。</li>
          <li><strong>流通量</strong>: 累計の販売量は、南アフリカ造幣局が5,200万oz超、Rand Refineryが過去50年で6,000万oz超と記載しており、両社の数字は一致していません。</li>
          <li><strong>額面</strong>: 南アフリカ造幣局は純金のオンス建ての額面を持つ法定通貨と説明し、Rand Refineryが案内するクルーガーランドの公式サイトは、金貨に数字の額面はなく、価値は含まれる金の量で決まるとしています。</li>
        </ul>
        <p>同じ22金の金貨には、イギリスのソブリン金貨やアメリカのイーグル金貨があります。22金の品位と製品は<Link href="/articles/k22-kaitori/">22金（K22）の買取相場</Link>、トロイオンスとグラムの換算は<Link href="/articles/ounce-gram/">1オンスは何グラム</Link>をご覧ください。</p>

        <h2>国内の地金商の取扱と、金貨の買取価格の例</h2>
        <ul>
          <li><strong>三菱マテリアル</strong>: 取扱の金貨はカンガルー・メイプルリーフ・ウィーン金貨ハーモニーの3種類で、取り扱いのない金貨は買い取りできないことがあるため事前に問い合わせるよう案内しています。2026年11月19日13:30の「世界の金貨」の店頭買取価格（税込）は1oz {MMC_WORLD_1OZ.toLocaleString()}円でした。</li>
          <li><strong>徳力本店</strong>: 価格を公表している金貨はウィーン金貨・メイプルリーフ金貨で、同社以外で購入したコインはプレミアムなしの買取価格としています。2026年11月19日13:00の1ozの買取価格（プレミアムなし・税込）は{TOKURIKI_1OZ.toLocaleString()}円で、同時刻の同社の金地金の買取価格（1g {TOKURIKI_AU.toLocaleString()}円）×31.1035gの<strong>約{tokurikiRatio.toFixed(1)}%</strong>でした（当サイトの計算）。</li>
          <li><strong>石福金属興業</strong>: 地金型コインの一覧はメイプルリーフ・ウィーン金貨ハーモニーで、クルーガーランドの掲載はありませんでした。</li>
        </ul>
        <p className="text-sm text-warm-gray">上の価格はクルーガーランドの価格ではなく、各社が公表している他の1oz金貨の買取価格です。金貨は、含まれる金の値から一定の差を引いて買い取られる例があることを示すために掲載しています。</p>
        <p>主な金貨の種類と純度は<Link href="/articles/kinka-kaitori-guide/">金貨買取ガイド</Link>、金貨とインゴットの違いは<Link href="/articles/kinka-ingot-kaitori/">金貨・インゴットの買取</Link>にまとめています。</p>

        <h2>売却時の支払調書と税金</h2>
        <ul>
          <li><strong>支払調書</strong>: 所得税法は、金貨を金地金・白金地金・白金貨とともに「金地金等」と定めています（224条の6）。1回の売却額が200万円を超えると、買い取った事業者が税務署に支払調書を提出し、売却する人は個人番号の告知が必要です（施行令350条の7）。最新の価格では、1ozの金の値で計算して<strong>{n200}枚までは200万円以下</strong>です（当サイトの計算）。</li>
          <li><strong>税金</strong>: 金貨の売却益は、原則として総合課税の譲渡所得です。計算方法は<Link href="/articles/kin-kaitori-zeikin/">金の買取と税金</Link>、200万円超の手続きは<Link href="/articles/kin-baikyaku-mynumber/">金の売却とマイナンバー</Link>をご覧ください。</li>
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
          <li>South African Mint「Bullion coins」<a href="https://www.samint.co.za/bullion-coins/" target="_blank" rel="noopener noreferrer">samint.co.za</a>・「About bullion」<a href="https://www.samint.co.za/about-bullion/" target="_blank" rel="noopener noreferrer">samint.co.za</a></li>
          <li>Rand Refinery「Products」<a href="https://www.randrefinery.com/products/" target="_blank" rel="noopener noreferrer">randrefinery.com</a></li>
          <li>三菱マテリアル「金貨」<a href="https://gold.mmc.co.jp/howto/products/coin.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・「相場」<a href="https://gold.mmc.co.jp/market/" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a></li>
          <li>徳力本店「相場」<a href="https://www.tokuriki-kanda.co.jp/goldetc/market/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a>・石福金属興業「コイン」<a href="https://retail.ishifuku-kinzoku.co.jp/product/coin.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a></li>
          <li>e-Gov法令検索「所得税法」<a href="https://laws.e-gov.go.jp/law/340AC0000000033" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a>・「所得税法施行令」<a href="https://laws.e-gov.go.jp/law/340CO0000000096" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月20日。取扱・価格は変更される場合があります。お取引の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="krugerrand-kaitori" relatedSlugs={["kinka-kaitori-guide", "k22-kaitori", "kinka-ingot-kaitori", "ounce-gram", "vienna-kinka-kaitori", "kin-baikyaku-mynumber"]} />
      </article>
    </div>
  </>);
}
