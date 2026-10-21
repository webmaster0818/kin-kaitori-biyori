/**
 * 各社を紹介する見出しの直下に置く、公式サイトのファーストビューのキャプチャ（2026-10-21 MediaXAI・gakki と同じ部品）。
 * 画像は public/images/services/{id}.webp（1280×800・2026-10-21 に公式ドメインのトップを撮影。ASP の計測リンクは開いていない）。
 * リンクは付けない（記事のリンク構成を変えないため）。
 */
export const SERVICE_CAPTURES = {
  hikakaku: { name: "ヒカカク！", domain: "hikakaku.com" },
  daikichi: { name: "買取大吉", domain: "kaitori-daikichi.jp" },
  uriel: { name: "ウリエル", domain: "uriel-cuore.co.jp" },
  tifana: { name: "ティファナ", domain: "tifana.net" },
} as const;

export type ServiceCaptureId = keyof typeof SERVICE_CAPTURES;

/** 撮影日（撮り直したらここを更新） */
const CAPTURED_ON = "2026年10月21日";

export default function ServiceCapture({
  id,
  className = "my-4 max-w-xl",
}: {
  id: ServiceCaptureId;
  className?: string;
}) {
  const c = SERVICE_CAPTURES[id];
  return (
    <figure className={`service-capture not-prose ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/services/${id}.webp`}
        alt={`${c.name} 公式サイトのトップページ`}
        width={1280}
        height={800}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
      <figcaption className="mt-1.5 text-[11px] leading-relaxed text-warm-gray">
        画像：{c.name} 公式サイト（{c.domain}）{CAPTURED_ON}時点
      </figcaption>
    </figure>
  );
}
