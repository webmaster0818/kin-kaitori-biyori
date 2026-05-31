import { DEALERS, pickDealers, type Dealer } from "@/data/dealers";

type Props = {
  /** 表示する業者IDリスト。省略時は全7社 */
  dealerIds?: string[];
  /** テーブル見出し */
  heading?: string;
  /** 短い説明文 */
  intro?: string;
};

export default function DealerComparisonTable({
  dealerIds,
  heading = "金買取業者 7社 徹底比較",
  intro = "店舗数・対応エリア・査定スピード・手数料の公式公開情報をまとめました。出典は各社公式サイト（最終確認：2026年5月）。",
}: Props) {
  const dealers: Dealer[] = dealerIds ? pickDealers(dealerIds) : DEALERS;

  if (dealers.length === 0) return null;

  return (
    <section className="my-10 not-prose">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
        {heading}
      </h2>
      <p className="text-sm text-warm-gray mb-5 leading-relaxed">{intro}</p>

      {/* デスクトップ：横スクロールテーブル */}
      <div className="hidden md:block table-wrapper overflow-x-auto border border-warm-border rounded-xl bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-accent">
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">業者名</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">店舗数</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">出張エリア</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">査定スピード</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">送料・手数料</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">専門性</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">特徴・強み</th>
              <th className="px-4 py-3 text-left font-bold whitespace-nowrap">公式</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((d) => (
              <tr key={d.id} className="border-t border-warm-border hover:bg-gold-bg/40">
                <td className="px-4 py-3 font-bold text-foreground">{d.name}</td>
                <td className="px-4 py-3 text-warm-gray">{d.shops}</td>
                <td className="px-4 py-3 text-warm-gray">{d.visitArea}</td>
                <td className="px-4 py-3 text-warm-gray">{d.speed}</td>
                <td className="px-4 py-3 text-warm-gray">{d.fees}</td>
                <td className="px-4 py-3 text-warm-gray">{d.expertise}</td>
                <td className="px-4 py-3 text-warm-gray">{d.strengths}</td>
                <td className="px-4 py-3">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-block bg-accent text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap"
                  >
                    公式サイト
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* モバイル：カード型 */}
      <div className="md:hidden space-y-4">
        {dealers.map((d) => (
          <div
            key={d.id}
            className="bg-white border border-warm-border rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-bold text-base text-foreground">{d.name}</h3>
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-block bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-accent-dark transition-colors whitespace-nowrap"
              >
                公式
              </a>
            </div>
            <dl className="grid grid-cols-[6.5rem_1fr] gap-y-2 gap-x-3 text-xs leading-relaxed">
              <dt className="text-accent-dark font-bold">店舗数</dt>
              <dd className="text-warm-gray">{d.shops}</dd>
              <dt className="text-accent-dark font-bold">出張エリア</dt>
              <dd className="text-warm-gray">{d.visitArea}</dd>
              <dt className="text-accent-dark font-bold">査定スピード</dt>
              <dd className="text-warm-gray">{d.speed}</dd>
              <dt className="text-accent-dark font-bold">手数料</dt>
              <dd className="text-warm-gray">{d.fees}</dd>
              <dt className="text-accent-dark font-bold">専門性</dt>
              <dd className="text-warm-gray">{d.expertise}</dd>
              <dt className="text-accent-dark font-bold">強み</dt>
              <dd className="text-warm-gray">{d.strengths}</dd>
            </dl>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-warm-gray mt-3 leading-relaxed">
        ※ 上記情報は各業者の公式サイトに記載の内容を 2026年5月時点で確認したものです。最新情報は必ず公式サイト（
        {dealers.map((d, i) => (
          <span key={d.id}>
            <a
              href={d.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {d.name}
            </a>
            {i < dealers.length - 1 ? "、" : ""}
          </span>
        ))}
        ）でご確認ください。
      </p>
    </section>
  );
}
