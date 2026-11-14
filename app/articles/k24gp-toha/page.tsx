import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";
import ServiceCaptureGrid from "@/components/ServiceCaptureGrid";

/* kwexp-20261114: 「24kgp」。表示記号は日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定 2026年度改訂版」、
   ホールマークは造幣局、買取の扱いは田中貴金属 RE:TANAKA、金の密度は徳力本店の物性表（いずれも 2026-11-14 確認）。
   めっきの金の量は当サイトの計算（面積×厚み×密度）。価格は日次の gold-spot-prices.json から毎朝再計算する */
const TITLE = "24KGP（K24GP）とは？金めっきの表示記号と含まれる金の量・買取の扱い";
const URL = "https://gold-biyori.com/articles/k24gp-toha/";
const DESC = "24KGP（K24GP）は24金の金めっきを示す表示です。GP・GF・RGの違いを日本ジュエリー協会の表示規定で整理し、めっきに含まれる金の量を厚み別に計算。買取での扱いも公式情報で確認しています。";

const BUY = goldData.tanaka_official.au_buyback_per_g as number;
const K24 = (goldData.purity_buyback_estimate_per_g as Record<string, number>).k24;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `${priceDateJa}取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 金の密度 19.32 g/cm³（徳力本店「金系の物理特性（参考値）」）。めっき層の金の質量＝面積(cm²)×厚み(μm)×1e-4×19.32 */
const DENSITY = 19.32;
const AREAS = [5, 10, 20];
const THICK = [0.1, 0.5, 1, 3];
const goldG = (cm2: number, um: number) => cm2 * um * 1e-4 * DENSITY;

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "24KGP（K24GP）とは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-14", dateModified: goldData.date,
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "24KGPとはどういう意味ですか？", acceptedAnswer: { "@type": "Answer", text: "GPは金めっき（Gold Plated）の表示記号です（日本ジュエリー協会の表示規定）。24KGP・K24GPは、24金の金めっきを施した製品を示す表示として使われ、本体は金以外の金属です。" } },
    { "@type": "Question", name: "24KGPの製品は金として買い取ってもらえますか？", acceptedAnswer: { "@type": "Answer", text: "田中貴金属の貴金属製品買取（RE:TANAKA）は、メッキ品を「品位が特定しづらいもの」として買取できないものに挙げています。取扱いは業者により異なります。" } },
    { "@type": "Question", name: "24KGPと24K（K24）の違いは？", acceptedAnswer: { "@type": "Answer", text: "K24は製品そのものが純金（品位999）であることを示します。24KGPは表面だけが金めっきで、含まれる金はめっき層の分だけです。" } },
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
  { q: "24KGPの刻印がある製品は本物の金ですか？", a: "表面は金めっきですが、製品の本体は金以外の金属です。「K24」の文字があっても、続けて「GP」とあれば純金製品ではありません。" },
  { q: "めっきの厚みは分かりますか？", a: "日本ジュエリー協会の表示規定では、めっきの厚みを示す場合は最小の厚みをμmで記号の後に付すとしています（例: GP 3μm）。厚みの表示がない製品は、刻印から厚みは分かりません。" },
  { q: "GPとGFはどちらが金を多く含みますか？", a: "GF（金張り）は、張り合わせた金合金の質量比が20分の1以上の素材と定められています。GP（めっき）は厚みがμm単位の皮膜で、質量比の定めはありません。同じ大きさの製品であれば、一般にGFのほうが金の量は多くなります。" },
  { q: "造幣局のホールマークが付いていれば純金ですか？", a: "造幣局のホールマークは、日の丸とひし形の中の千分率の数字（金なら999・750など）で品位を示します。造幣局は「K18、Pt900などの記号は造幣局の証明記号ではありません」としています。ホールマークは任意の制度のため、付いていない純金製品もあります。" },
];

export default function K24gpTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-mekki.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-mekki-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">24KGP（K24GP）とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金めっき製品の刻印のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">24KGP（K24GP）とは — 金めっきの表示記号と含まれる金の量</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月14日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p><strong>24KGP（K24GP）は、24金の金めっきを施した製品を示す表示です。</strong>日本ジュエリー協会の表示規定では「GP」を金めっきの表示記号としており、製品の本体は真鍮・銀・ステンレスなど金以外の素材です。純金（K24）の製品とは、含まれる金の量が大きく異なります。</p>
        <ul>
          <li>GP＝金めっき。表面の皮膜の厚みはμm（1000分の1mm）単位です</li>
          <li>めっきに含まれる金は、10cm²・厚み1μmで約{goldG(10, 1).toFixed(3)}g（当サイトの計算・下表）</li>
          <li>田中貴金属の貴金属製品買取（RE:TANAKA）は、メッキ品を買取できないものに挙げています</li>
        </ul>

        <h2>GP・GF・RG・K24の表示の違い</h2>
        <p>日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定（2026年度改訂版）」による表示記号の定義です。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>表示</th><th>意味（表示規定の定義）</th><th>金の量</th></tr></thead>
            <tbody>
              <tr><td><strong>K24（Au999）</strong></td><td>品位999の金。JIS H6309 の区分で K24＝999</td><td>製品の重量のほぼすべて</td></tr>
              <tr><td><strong>GP</strong></td><td>金めっき。最表面の皮膜金属を表示する</td><td>めっき層のみ（厚みはμm単位）</td></tr>
              <tr><td><strong>GF（Gold Filled）</strong></td><td>台地金に金合金の薄板を張り合わせた素材で、張り合わせた金合金の質量比が20分の1以上</td><td>金合金が質量の1/20以上</td></tr>
              <tr><td><strong>RG（Rolled Gold）</strong></td><td>同上で、質量比が20分の1未満</td><td>金合金が質量の1/20未満</td></tr>
              <tr><td><strong>GIP</strong></td><td>金イオンプレーティング（イオン化した金属を蒸着させる表面処理）</td><td>表面処理の層のみ</td></tr>
            </tbody>
          </table>
        </div>
        <p>めっきの厚みを表示する場合は、最小の厚みを記号の後に付けると定められています（例: 「GP 3μm」）。金張りの数値は厚みではなく材料の質量比を表します（例: 「1/10K18GF」）。</p>

        <h2>めっきに含まれる金の量（厚み別の計算）</h2>
        <p>金めっき層に含まれる金の質量は「めっきした面積×厚み×金の密度」で求められます。金の密度19.32g/cm³（徳力本店の物性表）を使い、24金のめっきと仮定して当サイトが計算した値です。金額は田中貴金属の最新の金の店頭買取価格 1g {yen(BUY)}円（{pubLabel}）を掛けた<strong>金そのものの価値の目安</strong>で、買取価格ではありません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>めっきの面積</th>{THICK.map((t) => <th key={t}>厚み {t}μm</th>)}</tr></thead>
            <tbody>
              {AREAS.map((a) => (
                <tr key={a}>
                  <td><strong>{a}cm²</strong></td>
                  {THICK.map((t) => <td key={t}>{goldG(a, t).toFixed(4)}g（約{yen(goldG(a, t) * BUY)}円）</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">面積は計算のための例です（10cm²は一辺約3.2cmの正方形の面積）。実際の製品の表面積・めっきの厚みは製品ごとに異なり、刻印からは分かりません。</p>
        <p>比べると、同じ10gの製品でもK24（純金）であれば金は約10g、当サイトの参考買取価格（1g {yen(K24)}円）で約{yen(K24 * 10)}円です。GF（質量比1/20以上）であれば金合金が0.5g以上含まれます。</p>

        <h2>24KGPの製品は買い取ってもらえるか</h2>
        <p>田中貴金属の貴金属製品買取サービス「RE:TANAKA」は、買取できないものの「品位が特定しづらいもの」に<strong>メッキ品</strong>を挙げています（時計・ベルト・メガネ枠・金歯・粉末状・粒状の品と同じ区分）。</p>
        <p>買取店によっては、金としてではなくアクセサリー・ブランド品として査定する場合があります。扱いは業者ごとに異なるため、持ち込む前に各社へご確認ください。刻印の読み方と自宅での見分け方は<Link href="/articles/kin-mekki-mikata/">金メッキと本物の金の見分け方</Link>でご説明しています。</p>

        <h2>K24の刻印と造幣局のホールマーク</h2>
        <p>造幣局は、製造・販売事業者の依頼で貴金属製品の品位を試験し、合格品に証明記号（ホールマーク）を打刻しています。ホールマークは日の丸と、ひし形の中の千分率の数字で品位を示します（金はK24＝999、K18＝750など）。</p>
        <ul>
          <li>造幣局は「K18、Pt900などの記号は造幣局の証明記号ではありません」と案内しています。K24の刻印は製造者・販売者による表示です</li>
          <li>ホールマークは任意の制度のため、付いていない製品も市販されています</li>
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
          <li>一般社団法人日本ジュエリー協会「ジュエリーおよび貴金属製品の素材等の表示規定 2026年度改訂版」（12. めっきの表示・13. 張りの表示・3. 貴金属品位）<a href="https://jja.ne.jp/lib/rules/pdf/metalguide.pdf" target="_blank" rel="noopener noreferrer">jja.ne.jp</a></li>
          <li>独立行政法人造幣局「貴金属製品の品位証明」<a href="https://www.mint.go.jp/operations/exam/operations_certification-01.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a>・「貴金属製品の品位区分と証明記号」<a href="https://www.mint.go.jp/operations/exam/operations_certification-02.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>田中貴金属工業 RE:TANAKA「お買取りができるもの／できないもの」<a href="https://gold.tanaka.co.jp/retanaka/service/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/retanaka/service/</a></li>
          <li>株式会社徳力本店「金系の物理特性（参考値）」<a href="https://tokuriki-kanda.co.jp/industrial/pdf/industrial-material-001.pdf" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp/commodity/souba/</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月14日。めっきの金の量は上記の式による計算値で、製品ごとの実測値ではありません。</p>

        <ServiceCaptureGrid label="当サイトで比較している買取サービス4社の公式サイト" />
        <RelatedArticles currentSlug="k24gp-toha" relatedSlugs={["kin-mekki-mikata", "kin-nisemono-mikata", "kin-jundo-mikata", "k24-kaitori", "white-gold-toha"]} />
      </article>
    </div>
  </>);
}
