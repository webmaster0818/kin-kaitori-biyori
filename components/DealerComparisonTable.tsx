import { DEALERS, pickDealers, type Dealer } from "@/data/dealers";

type Props = {
  /** 表示する業者IDリスト。省略時は全7社 */
  dealerIds?: string[];
  /** テーブル見出し */
  heading?: string;
  /** 短い説明文 */
  intro?: string;
};

/*
  2026-10-21 MediaXAI「比較表が縦に長い」（223ページで使用・旧版は PC 1,839px／スマホ 3,291px）
  - PC・スマホとも同じ1枚の横スクロール表。1列目（業者名）は固定（sticky）。
  - 各セルは列幅を広めに取り、折り返しを2〜4行に収める。公式サイトへのボタンは固定列（業者名の下）に置き、横に送っても常に押せるようにした。長い「特徴・強み」は表の下の <details> にまとめた。
  - 掲載する事実・リンク先（公式 url／出典 source）は旧版と同一。文言は削っていない。
*/
const COLS: { key: keyof Dealer; label: string; width: string }[] = [
  { key: "shops", label: "店舗数", width: "13em" },
  { key: "visitArea", label: "出張エリア", width: "17em" },
  { key: "speed", label: "査定スピード", width: "16em" },
  { key: "fees", label: "送料・手数料", width: "20.5em" },
  { key: "expertise", label: "専門性", width: "12.5em" },
];

export default function DealerComparisonTable({
  dealerIds,
  heading = "金買取業者7社の比較",
  intro = "店舗数・対応エリア・査定スピード・手数料について、各社の公式情報をまとめています。出典は各社公式サイト（2026年10月19日に7社とも再確認）。",
}: Props) {
  const dealers: Dealer[] = dealerIds ? pickDealers(dealerIds) : DEALERS;

  if (dealers.length === 0) return null;

  return (
    <section className="dealer-cmp my-10 not-prose">
      <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
        {heading}
      </h2>
      <p className="text-sm text-warm-gray mb-4 leading-relaxed">{intro}</p>

      <div className="dealer-cmp__scroll overflow-x-auto border border-rule bg-card" tabIndex={0} aria-label={heading}>
        <table className="dealer-cmp__table text-[12px] leading-[1.55]">
          <thead>
            <tr>
              <th scope="col" className="dealer-cmp__name">業者名</th>
              {COLS.map((c) => (
                <th key={c.key} scope="col" style={{ minWidth: c.width, width: c.width }}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dealers.map((d) => (
              <tr key={d.id}>
                <td className="dealer-cmp__name">
                  <h3>{d.name}</h3>
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="dealer-cmp__btn"
                  >
                    公式サイト
                  </a>
                </td>
                {COLS.map((c) => (
                  <td key={c.key}>{d[c.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <details className="dealer-cmp__more border border-t-0 border-rule bg-card">
        <summary className="flex items-center justify-between px-4 py-2.5 text-[13px] font-bold text-foreground">
          <span>特徴・強み</span>
          <svg className="w-3.5 h-3.5 text-accent faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="square" strokeWidth={1.4} d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <dl className="px-4 pb-3 text-[12.5px] leading-relaxed">
          {dealers.map((d) => (
            <div key={d.id} className="grid grid-cols-[8.5em_1fr] gap-x-3 py-2 border-t border-rule">
              <dt className="font-bold text-foreground">{d.name}</dt>
              <dd className="text-warm-gray">{d.strengths}</dd>
            </div>
          ))}
        </dl>
      </details>

      <p className="text-[11px] text-warm-gray mt-3 leading-relaxed">
        ※ 上記情報は各業者の公式サイトに記載の内容を 2026年10月19日に確認したものです。最新情報は、各社の公式サイト（
        {dealers.map((d, i) => (
          <span key={d.id}>
            <a
              href={d.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-dark hover:underline"
            >
              {d.name}
            </a>
            {i < dealers.length - 1 ? "、" : ""}
          </span>
        ))}
        ）にてご確認ください。
      </p>
    </section>
  );
}
