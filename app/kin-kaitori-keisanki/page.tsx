import type { Metadata } from "next";
import Link from "next/link";
import { GoldSimulator } from "@/components/GoldSimulator";
import goldData from "@/data/gold-spot-prices.json";

export const metadata: Metadata = {
  title: "金買取相場グラム計算機｜純度×重量で本日の買取目安を即計算【日次更新】",
  description:
    "金の買取価格をグラムから計算。K24/K22/K18/K14など純度×重量を入れると、本日の田中貴金属公表値ベースで買取目安を即算出します。喜平・テニスブレスレットの30g・50gなどグラム別の早見表も掲載（毎日自動更新）。",
  alternates: { canonical: "https://gold-biyori.com/kin-kaitori-keisanki/" },
};

const per = goldData.purity_buyback_estimate_per_g as Record<string, number>;
const PURITIES: { key: string; label: string }[] = [
  { key: "k24", label: "K24（純金）" },
  { key: "k22", label: "K22" },
  { key: "k18", label: "K18" },
  { key: "k14", label: "K14" },
];
const WEIGHTS = [1, 5, 10, 20, 30, 50, 100];
const yen = (n: number) => Math.round(n).toLocaleString();

const PRODUCT_LINKS: { href: string; label: string }[] = [
  { href: "/articles/kin-bracelet-kaitori/", label: "金ブレスレット（喜平・テニス）" },
  { href: "/articles/kin-necklace-kaitori/", label: "金ネックレス・チェーン" },
  { href: "/articles/kin-yubiwa-kaitori/", label: "金の指輪・リング" },
  { href: "/articles/k24-kaitori/", label: "K24（純金）" },
  { href: "/articles/k18-kaitori/", label: "K18（18金）" },
  { href: "/articles/ingot-100g-kaitori/", label: "金インゴット100g" },
];

const faqs = [
  {
    q: "喜平ブレスレット30gの買取価格はいくらですか？",
    a: `純度によって変わります。本日（${goldData.date}）の公表値ベースの理論目安では、K18の30gで約${yen(per.k18 * 30)}円、K24の30gで約${yen(per.k24 * 30)}円が目安です。実際の額は手数料・状態で目安を下回ることが一般的なため、無料査定でご確認ください。`,
  },
  {
    q: "金1gの買取価格は本日いくらですか？",
    a: `${goldData.date}時点の純度別の1gあたり買取目安は、K24 約${yen(per.k24)}円／K22 約${yen(per.k22)}円／K18 約${yen(per.k18)}円／K14 約${yen(per.k14)}円です（田中貴金属公表値から純度換算した理論値・毎日自動更新）。`,
  },
  {
    q: "計算機の金額は実際の買取額と同じですか？",
    a: "いいえ。本計算機は公表値から純度換算した理論上の目安です。実際の買取額は各業者の手数料・査定基準・製品の状態（留め具・刻印・キズ等）により目安を下回ることが一般的で、金額を保証するものではありません。",
  },
];

function Schemas() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "金買取相場グラム計算機", item: "https://gold-biyori.com/kin-kaitori-keisanki/" },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const app = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "金買取相場グラム計算機",
    url: "https://gold-biyori.com/kin-kaitori-keisanki/",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
    description: "純度×重量から金の買取目安を本日の相場で計算するツール。",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }} />
    </>
  );
}

export default function KeisankiPage() {
  return (
    <>
      <Schemas />
      <main className="max-w-4xl mx-auto px-4 py-10 md:py-14">
        {/* Breadcrumb */}
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent-dark transition-colors">ホーム</Link></li>
            <li aria-hidden className="px-1">/</li>
            <li className="text-foreground font-medium">金買取相場グラム計算機</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-8">
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4">
            金買取相場グラム計算機｜純度×重量で本日の買取目安を計算
          </h1>
          <p className="text-warm-gray leading-relaxed">
            <span className="font-bold text-accent-dark">{goldData.date}時点</span>の田中貴金属公表値ベースで、K24・K22・K18・K14などの純度と重さ（グラム）から金の買取目安を即計算できます。
            数値は<strong>毎日自動更新</strong>。下の計算機に純度と重量を入れるか、グラム別早見表からも確認できます。
          </p>
        </header>

        {/* 結論ファースト：本日の1g単価 */}
        <section className="bg-cream/50 border border-accent/30 rounded-2xl p-5 mb-8">
          <p className="text-sm font-bold text-accent-dark mb-3">本日の純度別 1gあたり買取目安（{goldData.date}）</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {PURITIES.map((p) => (
              <div key={p.key} className="bg-white rounded-xl border border-accent/20 px-3 py-3 text-center">
                <p className="text-xs text-warm-gray">{p.label}</p>
                <p className="font-display text-lg md:text-xl font-bold text-accent-dark">{yen(per[p.key])}<span className="text-xs font-normal">円/g</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* 計算機本体 */}
        <GoldSimulator />

        {/* グラム別早見表 */}
        <section className="my-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">純度×グラム別 買取目安早見表</h2>
          <p className="text-sm text-warm-gray mb-4">
            喜平ブレスレットやテニスブレスレット、金ネックレスなど、重さがわかっている場合の目安です（{goldData.date}・理論値）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-accent/10">
                  <th className="px-3 py-2.5 text-left font-bold border border-accent/20">重さ</th>
                  {PURITIES.map((p) => (
                    <th key={p.key} className="px-3 py-2.5 text-right font-bold border border-accent/20">{p.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WEIGHTS.map((w, i) => (
                  <tr key={w} className={i % 2 ? "bg-cream/30" : "bg-white"}>
                    <td className="px-3 py-2.5 font-medium border border-accent/20">{w}g</td>
                    {PURITIES.map((p) => (
                      <td key={p.key} className="px-3 py-2.5 text-right text-accent-dark font-bold border border-accent/20">
                        {yen(per[p.key] * w)}円
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray leading-relaxed mt-3">
            ※公表値から純度換算した理論上の目安です。実際の買取額は業者の手数料・査定基準・製品の状態により目安を下回ることが一般的で、金額を保証するものではありません。正確な額は無料査定でご確認ください。
          </p>
        </section>

        {/* 製品別の送客 */}
        <section className="my-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">製品ごとの詳しい買取相場を見る</h2>
          <p className="text-sm text-warm-gray mb-4">計算した金額の背景や、製品別の高く売るコツはこちらで詳しく解説しています。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRODUCT_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center justify-between bg-white border border-accent/20 rounded-xl px-4 py-3 hover:border-accent/50 hover:shadow-sm transition">
                <span className="font-medium text-foreground">{l.label}の買取相場</span>
                <span className="text-accent-dark text-sm">→</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-warm-gray mt-4">
            日々の相場推移は<Link href="/souba-dashboard/" className="text-accent-dark font-medium underline">金相場ダッシュボード</Link>、計算の仕組みは<Link href="/articles/kin-gram-keisan/" className="text-accent-dark font-medium underline">金買取の価格はこう決まる</Link>で確認できます。
          </p>
        </section>

        {/* 計算式の説明 */}
        <section className="my-10 bg-cream/40 border border-accent/20 rounded-2xl p-6">
          <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-3">金の買取価格の計算式</h2>
          <p className="text-warm-gray leading-relaxed mb-3">
            金の買取価格は、<strong>純度に応じた1gあたりの買取単価 × 重量（g）</strong>で概算できます。たとえばK18が1g{yen(per.k18)}円なら、10gで約{yen(per.k18 * 10)}円が目安です。
          </p>
          <p className="text-warm-gray leading-relaxed text-sm">
            純度は刻印（K24・K18など）で確認でき、重さは0.1g単位のはかりがあれば自分でも概算できます。本ツールの単価は田中貴金属の公表値から純度換算したもので、毎日自動で更新しています。
          </p>
        </section>

        {/* FAQ（可視） */}
        <section className="my-10">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-accent/20 rounded-xl p-4">
                <summary className="font-bold text-foreground cursor-pointer">{f.q}</summary>
                <p className="text-sm text-warm-gray leading-relaxed mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 引用歓迎（被リンク資産） */}
        <section className="my-10 border-t border-accent/20 pt-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-2">この計算機・相場データの引用について</h2>
          <p className="text-sm text-warm-gray leading-relaxed">
            本ページの相場目安は出典を明記いただければ引用歓迎です（出典：金買取びより / gold-biyori.com）。
            本日の相場を自サイトに表示したい方は、コピペ1行で設置できる<Link href="/widget/" className="text-accent-dark font-medium underline">金価格ウィジェット（無料配布）</Link>もご利用ください。
          </p>
        </section>
      </main>
    </>
  );
}
