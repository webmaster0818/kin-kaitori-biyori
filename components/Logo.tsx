/**
 * ロゴ B（2026-10-21 MediaXAI「②、B」）＝コインの縁と相場帳の罫。
 * 提案時の指摘「メニューのアイコンに見える」への対策:
 *   - 外周の細い輪の内側にもう1本ごく細い輪（コインの縁＝ミル目のない覆輪）を入れて「硬貨」に見せる
 *   - 罫は3本だが長さと始点をずらし（帳簿の記帳行）、中央の1本だけ真鍮。輪の中で小さく置き、ハンバーガー（等長3本）に見せない
 * ワードマーク「金買取びより」は Shippori Mincho、下に小さく GOLD BIYORI。
 */
export function LogoMark({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="20" cy="20" r="18.6" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="20" cy="20" r="15.9" stroke="#8a6d3b" strokeWidth="0.6" />
      <path d="M12.6 15.6H22.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15.4 20H27.4" stroke="#8a6d3b" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12.6 24.4H19.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function LogoWordmark({ name, light = false }: { name: string; light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className={light ? "text-[#f5f2ec]" : "text-[#1f1d1a]"} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.28rem] tracking-[0.08em] ${light ? "text-[#f5f2ec]" : "text-foreground"}`}>
          {name}
        </span>
        <span className="mt-1.5 text-[0.56rem] tracking-[0.34em] text-accent">GOLD BIYORI</span>
      </span>
    </span>
  );
}
