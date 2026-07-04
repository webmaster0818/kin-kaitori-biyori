import { getLocalStores, type LocalStore } from "@/data/local-stores";

// 実在店舗セクション（P2: 地域の選別再生）。
// 全て公式店舗情報で確認した実在店舗のみを掲載（架空ゼロ）。sourceUrl＝実在の一次ソース。
// LocalBusiness/ItemList構造化データで、薄い地域テンプレから脱却＝ローカルSEOの武器にする。
export function LocalStores({
  citySlug,
  cityLabel,
  pref,
}: {
  citySlug: string;
  cityLabel: string;
  pref: string;
}) {
  const data = getLocalStores(citySlug);
  if (!data || data.stores.length === 0) return null;
  const { stores, updated } = data;

  const ld = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${cityLabel}の金・貴金属買取店`,
    itemListElement: stores.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": ["Store", "LocalBusiness"],
        name: s.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: s.address,
          ...(s.postalCode ? { postalCode: s.postalCode } : {}),
          addressRegion: pref,
          addressCountry: "JP",
        },
        ...(s.tel ? { telephone: s.tel } : {}),
        ...(s.hours && s.hours !== "公式で確認" ? { openingHours: s.hours } : {}),
        ...(s.sourceUrl ? { url: s.sourceUrl } : {}),
      },
    })),
  };

  return (
    <section className="my-10 not-prose" aria-label={`${cityLabel}の金買取店`}>
      <h2 className="text-xl md:text-2xl font-bold mb-1">{cityLabel}にある金・貴金属の買取店</h2>
      <p className="text-sm text-warm-gray mb-5">
        {cityLabel}に店舗を構える主な買取店を、各社の公式店舗情報をもとにまとめました（{updated}時点）。
        営業時間・買取条件・在庫は変わることがあるため、来店前に各公式ページで最新をご確認ください。
      </p>
      <div className="grid grid-cols-1 gap-4">
        {stores.map((s) => (
          <div key={s.name} className="bg-white border border-warm-border rounded-xl p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-base text-foreground !m-0 !border-none">{s.name}</h3>
              {s.chain && (
                <span className="flex-shrink-0 text-xs text-accent bg-gold-bg border border-accent/30 rounded-full px-2.5 py-0.5">
                  {s.chain}
                </span>
              )}
            </div>
            <dl className="text-sm text-warm-gray space-y-1.5">
              <div className="flex gap-2">
                <dt className="flex-shrink-0 w-16 text-foreground font-medium">住所</dt>
                <dd className="m-0">{s.postalCode ? `〒${s.postalCode} ` : ""}{s.address}</dd>
              </div>
              {s.access && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 w-16 text-foreground font-medium">アクセス</dt>
                  <dd className="m-0">{s.access}</dd>
                </div>
              )}
              {s.hours && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 w-16 text-foreground font-medium">営業時間</dt>
                  <dd className="m-0">{s.hours}</dd>
                </div>
              )}
              {s.closed && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 w-16 text-foreground font-medium">定休日</dt>
                  <dd className="m-0">{s.closed}</dd>
                </div>
              )}
              {s.tel && (
                <div className="flex gap-2">
                  <dt className="flex-shrink-0 w-16 text-foreground font-medium">電話</dt>
                  <dd className="m-0">{s.tel}</dd>
                </div>
              )}
            </dl>
            {s.sourceUrl && (
              <p className="mt-3 mb-0">
                <a
                  href={s.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-xs text-accent hover:underline"
                >
                  公式店舗情報を見る →
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs text-warm-gray mt-4">
        ※上記は各社公式の店舗情報で実在を確認した店舗です（{updated}時点）。当サイトは特定店舗の買取価格を保証するものではありません。
        実際の買取価格は純度・重量・相場・キャンペーンにより異なるため、複数社の比較をおすすめします。
      </p>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </section>
  );
}

export type { LocalStore };
