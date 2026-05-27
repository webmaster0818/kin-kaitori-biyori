import type { Metadata } from "next";
import Link from "next/link";

const PAGE_TITLE = "編集部メンバー紹介";
const PAGE_DESC =
  "金買取びより編集部の体制と専門領域をご紹介します。貴金属相場・買取業界・金市場分析に精通したスタッフが、相場データの監修・記事のファクトチェック・業者比較を担当しています。";
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
  },
};

const AUTHORS = [
  {
    role: "編集長 / 監修統括",
    title: "貴金属相場アナリスト",
    bio: "金・プラチナ・銀の国際相場と国内買取相場の動向を日次で追跡。田中貴金属・三菱マテリアル・徳力本店など大手地金商の小売・買取価格を継続観測し、各記事の価格データと市場分析を最終監修。",
    credentials: [
      "貴金属市場分析 10年以上",
      "国内主要地金商の小売・買取価格を継続観測",
      "国際金価格（COMEX / LBMA）と為替動向の連動分析",
    ],
  },
  {
    role: "買取業者リサーチ担当",
    title: "シニアリサーチャー",
    bio: "ヒカカク！・買取大吉・なんぼや・ティファナ・ウリエルなど、国内主要買取業者の店舗網・買取方法・キャンペーン情報・買取実績を継続的に調査。業者比較データを編集部に提供。",
    credentials: [
      "国内買取業者 30社以上の継続調査",
      "店頭・出張・宅配・LINE査定など全買取方式の検証",
      "口コミ・評判データの収集と精査",
    ],
  },
  {
    role: "品目・純度ガイド担当",
    title: "ジュエリー・地金エディター",
    bio: "K24・K22・K18・K14・K10、プラチナ、銀、ホワイトゴールド、ピンクゴールドなど純度別の特性と買取価格差を解説。インゴット・金貨・ジュエリー・時計などの製品別ガイドを担当。",
    credentials: [
      "金製品の刻印・純度判定の実務経験",
      "ハイブランドジュエリー（カルティエ・ティファニー・ハリーウィンストン等）の市場分析",
      "金貨・インゴット（メイプルリーフ・ウィーン金貨・田中貴金属バー等）の流通データ精査",
    ],
  },
  {
    role: "ファクトチェック責任者",
    title: "シニアエディター",
    bio: "全記事の数値情報（買取相場・税制・法律情報）を二重チェック。国税庁・財務省・金融庁・大手地金商の公式情報を参照し、誤情報の混入を防止。譲渡所得・支払調書・マイナンバー提出義務等の税務情報を継続フォロー。",
    credentials: [
      "編集・校正経験 15年以上",
      "貴金属関連の税制・法令の継続フォロー",
      "公式一次情報（国税庁・地金商）の参照徹底",
    ],
  },
];

export default function AuthorPage() {
  const personSchemas = AUTHORS.map((author) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${SITE_NAME}編集部 ${author.role}`,
    jobTitle: author.title,
    description: author.bio,
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  }));

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
    member: personSchemas.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.jobTitle,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "編集部メンバー紹介", item: PAGE_URL },
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
      {personSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              ホーム
            </Link>
          </li>
          <li className="breadcrumb-sep" />
          <li>
            <span className="text-foreground">編集部メンバー紹介</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        金買取びより 編集部メンバー紹介
      </h1>
      <p className="text-warm-gray text-sm mb-8">最終更新: 2026年5月27日</p>

      <section className="space-y-6 text-sm leading-relaxed mb-10">
        <p>
          「金買取びより」は、金・貴金属の売却を検討している方に向けて、
          公正で分かりやすい買取相場情報と業者比較を提供するWebメディアです。
          編集部は、貴金属市場・買取業界・税制・ブランドジュエリーなどの
          各専門領域を担当する複数のスタッフで構成されています。
        </p>
        <p>
          記事は<strong className="text-accent-dark">編集部全体の合議制</strong>で作成・公開しています。
          貴金属相場は国際情勢・為替・需給バランスで日々変動するため、個人の判断より複数視点での相互レビューを重視しています。
        </p>
      </section>

      <h2
        className="font-bold mb-6 pb-2 pl-4"
        style={{
          fontSize: "1.375rem",
          borderLeft: "4px solid var(--accent)",
          borderBottom: "2px solid var(--accent)",
        }}
      >
        編集部メンバー
      </h2>

      <div className="space-y-5 mb-10">
        {AUTHORS.map((author, idx) => (
          <article
            key={author.role}
            className="bg-white border border-warm-border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #8B6914 100%)",
                  color: "#FFFEF7",
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold mb-1">{author.role}</h3>
                <p className="text-xs text-accent-dark font-medium">{author.title}</p>
              </div>
            </div>
            <p className="text-sm text-foreground/85 leading-relaxed mb-4">{author.bio}</p>
            <div className="bg-gold-bg rounded-lg p-4 border border-accent/20">
              <p className="text-xs font-bold text-warm-gray mb-2">担当領域・実績</p>
              <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-foreground/80">
                {author.credentials.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h2
        className="font-bold mb-4 pb-2 pl-4"
        style={{
          fontSize: "1.375rem",
          borderLeft: "4px solid var(--accent)",
          borderBottom: "2px solid var(--accent)",
        }}
      >
        編集体制と品質管理
      </h2>

      <section className="space-y-4 text-sm leading-relaxed mb-10">
        <p>
          各記事は以下の3段階チェックを経て公開しています。
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>リサーチ担当</strong>が買取業者の最新情報・相場データを収集
          </li>
          <li>
            <strong>編集長</strong>が市場分析・価格データの妥当性を監修
          </li>
          <li>
            <strong>ファクトチェック責任者</strong>が数値情報・税制情報を最終確認
          </li>
        </ol>
        <p>
          価格・税制情報は時間とともに変動するため、各記事末尾の「最終更新日」と公式情報（田中貴金属サイト・国税庁・買取業者公式ページ等）を併せてご参照ください。
        </p>
      </section>

      <h2
        className="font-bold mb-4 pb-2 pl-4"
        style={{
          fontSize: "1.375rem",
          borderLeft: "4px solid var(--accent)",
          borderBottom: "2px solid var(--accent)",
        }}
      >
        関連ページ
      </h2>

      <ul className="space-y-2 text-sm mb-10">
        <li>
          <Link
            href="/about/"
            className="text-accent-dark hover:text-accent underline"
          >
            運営者情報・サイト概要
          </Link>
        </li>
        <li>
          <Link
            href="/privacy-policy/"
            className="text-accent-dark hover:text-accent underline"
          >
            プライバシーポリシー
          </Link>
        </li>
        <li>
          <Link
            href="/terms-of-service/"
            className="text-accent-dark hover:text-accent underline"
          >
            利用規約
          </Link>
        </li>
        <li>
          <Link
            href="/articles/kin-kaitori-souba/"
            className="text-accent-dark hover:text-accent underline"
          >
            金買取相場一覧 — K24/K18/K14の1gあたり価格
          </Link>
        </li>
        <li>
          <Link
            href="/articles/kin-takaku-uru/"
            className="text-accent-dark hover:text-accent underline"
          >
            金を高く売る5つのコツ
          </Link>
        </li>
      </ul>
    </div>
  );
}
