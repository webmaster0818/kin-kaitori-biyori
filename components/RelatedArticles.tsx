import Link from "next/link";
import articlesMetadata from "@/data/articles-metadata.json";

type ArticleCategory =
  | "purity"
  | "product"
  | "brand"
  | "region"
  | "howto"
  | "compare";

type ArticleMeta = {
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  category: ArticleCategory;
};

type Props = {
  currentSlug: string;
  relatedSlugs: string[];
};

const metadataMap: Record<string, ArticleMeta> = (() => {
  const map: Record<string, ArticleMeta> = {};
  for (const m of articlesMetadata as ArticleMeta[]) {
    map[m.slug] = m;
  }
  return map;
})();

const GROUP_ORDER: ArticleCategory[] = [
  "purity",
  "product",
  "brand",
  "region",
  "howto",
  "compare",
];
const GROUP_LABEL: Record<ArticleCategory, string> = {
  purity: "金の純度別ガイド",
  product: "金製品別ガイド",
  brand: "ブランド別ガイド",
  region: "地域別ガイド",
  howto: "高く売るための知識",
  compare: "比較・解説",
};

export default function RelatedArticles({ currentSlug, relatedSlugs }: Props) {
  const seen = new Set<string>();
  const items: ArticleMeta[] = [];
  for (const slug of relatedSlugs) {
    if (slug === currentSlug) continue;
    if (seen.has(slug)) continue;
    const meta = metadataMap[slug];
    if (!meta) continue;
    seen.add(slug);
    items.push(meta);
  }
  if (items.length === 0) return null;

  const grouped: Record<ArticleCategory, ArticleMeta[]> = {
    purity: [],
    product: [],
    brand: [],
    region: [],
    howto: [],
    compare: [],
  };
  for (const item of items) {
    grouped[item.category].push(item);
  }

  return (
    <aside className="mt-12 pt-8 border-t border-warm-border not-prose">
      <h2 className="text-xl font-bold mb-6 text-foreground">関連記事</h2>
      <div className="space-y-8">
        {GROUP_ORDER.map((category) => {
          const list = grouped[category];
          if (list.length === 0) return null;
          return (
            <section key={category}>
              <h3 className="text-sm font-bold text-accent-dark mb-3 pb-2 border-b border-warm-border">
                {GROUP_LABEL[category]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {list.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/articles/${item.slug}/`}
                    className="block bg-white border border-warm-border rounded-xl p-4 hover:border-accent/40 hover:shadow-md transition-all group"
                  >
                    <span className="inline-block bg-gold-bg text-accent-dark text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <h4 className="font-bold text-sm mt-2 group-hover:text-accent transition-colors">
                      {item.shortTitle}
                    </h4>
                    <p className="text-xs text-warm-gray mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </aside>
  );
}
