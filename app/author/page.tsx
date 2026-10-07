import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "運営方針とデータの確認手順";
const PAGE_DESC =
  "金買取びよりの運営方針と、掲載している相場・業者・店舗データをどこから取得し、いつ・どのように更新しているかをご説明します。";
const PAGE_URL = "https://gold-biyori.com/author/";
const SITE_NAME = "金買取びより";
const SITE_URL = "https://gold-biyori.com";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }],
  },
};

const h2Style = {
  fontSize: "1.375rem",
  borderLeft: "4px solid var(--accent)",
  borderBottom: "2px solid var(--accent)",
} as const;

export default function AuthorPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${SITE_NAME}編集部`,
    url: PAGE_URL,
    parentOrganization: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    description: PAGE_DESC,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: PAGE_TITLE, item: PAGE_URL },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
          </li>
          <li className="breadcrumb-sep" />
          <li>
            <span className="text-foreground">{PAGE_TITLE}</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        {SITE_NAME} {PAGE_TITLE}
      </h1>
      <p className="text-warm-gray text-sm mb-8">最終更新: 2026年10月7日</p>

      <section className="space-y-4 text-sm leading-relaxed mb-10">
        <p>
          「{SITE_NAME}」は、金・貴金属の売却を検討している方に向けて、買取相場の目安と買取業者の比較情報を提供するWebメディアです。
          運営者は<Link href="/about/" className="text-accent-dark underline hover:text-accent">運営者情報</Link>に記載のとおりです。
        </p>
        <p>
          このページでは、個人の執筆者や経歴ではなく、
          <strong className="text-accent-dark">当サイトが実際に行っている運営方針と、掲載データの取得・更新の手順</strong>
          を公開しています。記事は編集部名義で作成し、個人名・肩書・経歴は掲載していません。
        </p>
      </section>

      <h2 className="font-bold mb-4 pb-2 pl-4" style={h2Style}>
        運営方針
      </h2>

      <section className="space-y-4 text-sm leading-relaxed mb-10">
        <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold mb-2">1. 相場は公表値をもとに算出し、取得日を明記する</h3>
          <p className="text-foreground/85">
            金・プラチナ・銀の相場は、田中貴金属が公表している店頭買取価格を取得し、純度別（K24 / K22 / K18 / K14 / K10 など）の1gあたり買取目安を算出しています。
            相場を表示している箇所には取得日（「○月○日時点」「取得日」）を併記します。
            算出した目安は「公表値 × 純度の比率」による理論値で、業者ごとの手数料・買取係数・製品の状態は加味していません。実際の査定額とは異なります。
          </p>
        </div>

        <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold mb-2">2. 業者情報は各社の公式サイトの公開情報のみを使う</h3>
          <p className="text-foreground/85">
            買取業者の店舗数・買取方法・対応エリア・手数料などは、各社の公式サイトで確認できる情報だけを掲載し、取得元のURLを出典として保持しています。
            推測で埋めることはせず、公式に明記がない項目は「不明（要問合せ）」と表記します。
          </p>
        </div>

        <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold mb-2">3. 店舗情報は公式の店舗ページで実在を確認したものだけを載せる</h3>
          <p className="text-foreground/85">
            地域ページの店舗一覧は、各社公式の店舗ページで実在を確認できた店舗のみを掲載し、出典URLと確認日を記録しています。
            住所が公開されていない店舗や、確認できない店舗は掲載しません。営業時間などは変動するため、来店前に各公式ページをご確認ください。
          </p>
        </div>

        <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold mb-2">4. 税制・法令は一般的な説明にとどめ、公式情報の確認を案内する</h3>
          <p className="text-foreground/85">
            譲渡所得・支払調書・本人確認などの税制・法令に関する記述は、一般的な制度の説明です。個別の申告・手続きの判断には用いず、
            国税庁などの公式情報をご確認ください。制度は変わることがあるため、記事の最終更新日もあわせてご覧ください。
          </p>
        </div>

        <div className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold mb-2">5. 広告と評価を分ける</h3>
          <p className="text-foreground/85">
            当サイトはアフィリエイトプログラムに参加しており、記事内のリンク経由でお申し込みがあった場合に紹介報酬が発生することがあります。
            広告報酬の有無で比較表の内容や評価を変えることはありません。詳細は
            <Link href="/about/" className="text-accent-dark underline hover:text-accent">運営者情報</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      <h2 className="font-bold mb-4 pb-2 pl-4" style={h2Style}>
        データの更新手順
      </h2>

      <section className="space-y-4 text-sm leading-relaxed mb-10">
        <p>相場データは、以下の手順で毎日自動更新しています。</p>
        <div className="bg-gold-bg rounded-lg p-4 border border-accent/20">
          <p className="text-xs font-bold text-warm-gray mb-2">毎日 11:05 に実行する処理</p>
          <ol className="list-decimal pl-6 space-y-2 text-foreground/85">
            <li>田中貴金属の公表ページから、金・プラチナ・銀の店頭買取価格を取得する</li>
            <li>純度別の1gあたり買取目安を算出し、本日分として保存する（月別の履歴にも追記）</li>
            <li>サイト全体を再生成し、相場カード・純度別早見表・重量別早見表・トップページの価格表示を本日分に更新する</li>
            <li>
              <Link href="/kin-kaitori-hakusho/" className="text-accent-dark underline hover:text-accent">金買取白書</Link>
              で配布している公開データ（JSON / CSV / 推移指数）と相場ウィジェットを同じ数値で再生成する
            </li>
            <li>サイトマップを実際のページ構成から再生成し、公開する</li>
          </ol>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-foreground/85">
          <li>
            取得に失敗した日は前回取得分の表示が残ります。表示されている取得日が当日でない場合は、その日付時点の値です。
          </li>
          <li>
            店舗情報は自動更新の対象外です。確認日を記録し、追加・修正のたびに手動で更新しています。
          </li>
          <li>
            各記事には「最終更新日」を表示しています。相場以外の本文（業者情報・税制など）はこの日付を基準に見直しています。
          </li>
        </ul>
      </section>

      <h2 className="font-bold mb-4 pb-2 pl-4" style={h2Style}>
        掲載していないもの
      </h2>

      <section className="space-y-2 text-sm leading-relaxed mb-10">
        <ul className="list-disc pl-6 space-y-2 text-foreground/85">
          <li>執筆者・監修者の個人名、肩書、経歴、顔写真</li>
          <li>公式サイトで確認できない買取条件や店舗</li>
          <li>当サイトが独自に推定した相場（表示している相場はすべて公表値からの算出）</li>
        </ul>
      </section>

      <h2 className="font-bold mb-4 pb-2 pl-4" style={h2Style}>
        関連ページ
      </h2>

      <ul className="space-y-2 text-sm mb-10">
        <li>
          <Link href="/about/" className="text-accent-dark hover:text-accent underline">
            運営者情報・サイト概要
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy/" className="text-accent-dark hover:text-accent underline">
            プライバシーポリシー
          </Link>
        </li>
        <li>
          <Link href="/terms-of-service/" className="text-accent-dark hover:text-accent underline">
            利用規約
          </Link>
        </li>
        <li>
          <Link href="/kin-kaitori-hakusho/" className="text-accent-dark hover:text-accent underline">
            金買取白書 — 算出方法と公開データ
          </Link>
        </li>
        <li>
          <Link href="/articles/kin-kaitori-souba/" className="text-accent-dark hover:text-accent underline">
            金買取相場一覧 — K24/K18/K14の1gあたり価格
          </Link>
        </li>
      </ul>
    </div>
  );
}
