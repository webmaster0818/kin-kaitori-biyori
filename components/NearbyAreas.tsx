import Link from "next/link";

type Area = { slug: string; label: string };

export function NearbyAreas({ areas, pref }: { areas: Area[]; pref?: string }) {
  if (!areas || areas.length === 0) return null;
  return (
    <nav
      className="my-8 not-prose bg-white border border-amber/25 rounded-2xl p-5 md:p-6"
      aria-label="近隣エリアの金買取"
    >
      <h2 className="font-display text-xl md:text-2xl font-bold text-amber-dark !mt-0 mb-1 !border-none">
        近隣エリアの金買取を探す
      </h2>
      <p className="text-xs text-warm-gray mb-4">
        {pref ? `${pref}を中心に、` : ""}お近くのエリアでも相場・業者を比較できます。
      </p>
      <ul className="flex flex-wrap gap-2">
        {areas.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/articles/${a.slug}/`}
              className="inline-block text-sm text-amber-dark bg-cream/60 border border-amber/20 rounded-full px-3 py-1.5 hover:bg-amber/10 transition-colors"
            >
              {a.label}の金買取
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
