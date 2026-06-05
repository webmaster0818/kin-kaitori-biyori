import type { Metadata } from "next";
import Link from "next/link";
import articlesMetadata from "@/data/articles-metadata.json";

const SITE_URL = "https://gold-biyori.com";

export const metadata: Metadata = {
  title: "金買取の記事一覧｜相場・純度・地域・ブランド別ガイド",
  description:
    "金・貴金属買取に関する記事一覧。金相場、純度別（K24/K18）、地域別の金買取おすすめ、ブランド・金貨買取、高く売るコツまで網羅。あなたの知りたい情報がきっと見つかります。",
};

type ArticleCategory = "purity" | "product" | "brand" | "region" | "howto" | "compare";
type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  category: ArticleCategory;
};

const GROUP_ORDER: ArticleCategory[] = ["howto", "purity", "product", "region", "brand", "compare"];
const GROUP_LABEL: Record<ArticleCategory, string> = {
  howto: "高く売るための知識・ガイド",
  purity: "金の純度別ガイド",
  product: "金製品・金貨・インゴット別ガイド",
  region: "地域別の金買取ガイド",
  brand: "ブランド別買取ガイド",
  compare: "比較・解説",
};

function BreadcrumbSchema() {
  const d = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: `${SITE_URL}/articles/` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export default function ArticlesIndexPage() {
  const all = articlesMetadata as ArticleMeta[];
  const grouped: Record<ArticleCategory, ArticleMeta[]> = {
    purity: [], product: [], brand: [], region: [], howto: [], compare: [],
  };
  for (const m of all) grouped[m.category]?.push(m);

  return (
    <>
      <BreadcrumbSchema />
      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">記事一覧</span></li>
          </ol>
        </nav>

        <h1 className="text-2xl md:text-3xl font-bold mb-3">金買取の記事一覧</h1>
        <p className="text-warm-gray text-sm mb-10">
          金・貴金属を高く売るための情報を、純度・製品・地域・ブランド別にまとめています。全{all.length}記事。
        </p>

        <div className="space-y-10">
          {GROUP_ORDER.map((category) => {
            const list = grouped[category];
            if (!list || list.length === 0) return null;
            return (
              <section key={category}>
                <h2 className="text-lg font-bold text-accent-dark mb-4 pb-2 border-b border-warm-border">
                  {GROUP_LABEL[category]}（{list.length}）
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {list.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/articles/${m.slug}/`}
                      className="block bg-white border border-warm-border rounded-xl p-4 hover:border-accent transition-colors"
                    >
                      <span className="inline-block text-xs bg-gold-bg text-accent-dark rounded px-2 py-0.5 mb-2">{m.badge}</span>
                      <p className="text-sm font-medium text-foreground leading-snug">{m.shortTitle || m.title}</p>
                      <p className="text-xs text-warm-gray mt-1 line-clamp-2">{m.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
