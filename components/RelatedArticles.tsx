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

// 全記事共通: 一次データ資産への内部リンク（白書/ダッシュボード/計算機のインデックス・評価促進）
const DATA_TOOLS = [
  { href: "/articles/kin-kaitori-osusume/", label: "金買取 おすすめ業者比較", note: "どこがいい？4社を目的別に比較" },
  { href: "/kin-kaitori-hakusho/", label: "金買取 相場白書", note: "日次データの統計・引用歓迎" },
  { href: "/souba-dashboard/", label: "本日の金買取相場", note: "毎日自動更新のダッシュボード" },
  { href: "/kin-kaitori-keisanki/", label: "金買取 グラム計算機", note: "純度×重量で今日の目安を計算" },
];

function DataToolLinks() {
  return (
    <section className="mt-8">
      <h3 className="text-sm font-bold text-accent-dark mb-3 pb-2 border-b border-warm-border">
        相場データ・ツール（毎日更新）
      </h3>
      <div className="flex flex-wrap gap-3">
        {DATA_TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="block bg-gold-bg border border-warm-border rounded-xl px-4 py-3 hover:border-accent/40 hover:shadow-md transition-all"
          >
            <span className="font-bold text-sm text-foreground">{t.label}</span>
            <span className="block text-xs text-warm-gray mt-0.5">{t.note}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

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
  if (items.length === 0)
    return (
      <aside className="mt-12 pt-8 border-t border-warm-border not-prose">
        <DataToolLinks />
      </aside>
    );

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
      <DataToolLinks />
    </aside>
  );
}
