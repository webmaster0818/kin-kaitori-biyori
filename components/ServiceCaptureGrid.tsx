import ServiceCapture, { type ServiceCaptureId } from "@/components/ServiceCapture";

/**
 * 送客先4社の紹介（見出しの無い箇条書き）の直後に置く、4社の公式サイトのキャプチャ（2×2）。
 * 地域記事 207 本・おすすめ記事で使用（scripts/add-service-captures-202610.py が挿入）。リンクは付けない。
 * label: 4社紹介の見出しが無い記事（末尾の関連記事の直前に置く）で、何の画像かを示す一文。
 */
const ORDER: ServiceCaptureId[] = ["hikakaku", "daikichi", "uriel", "tifana"];

export default function ServiceCaptureGrid({ label }: { label?: string }) {
  const grid = (
    <div className="not-prose grid grid-cols-2 gap-x-3 gap-y-4 md:gap-x-5 my-5">
      {ORDER.map((id) => (
        <ServiceCapture key={id} id={id} className="m-0" />
      ))}
    </div>
  );
  if (!label) return grid;
  return (
    <section className="not-prose my-10 border-t border-rule pt-6">
      <p className="text-sm text-foreground tracking-[0.04em]">{label}</p>
      {grid}
    </section>
  );
}
