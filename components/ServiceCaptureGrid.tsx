import ServiceCapture, { type ServiceCaptureId } from "@/components/ServiceCapture";

/**
 * 送客先4社の紹介（見出しの無い箇条書き）の直後に置く、4社の公式サイトのキャプチャ（2×2）。
 * 地域記事 207 本・おすすめ記事で使用（scripts/add-service-captures-202610.py が挿入）。リンクは付けない。
 */
const ORDER: ServiceCaptureId[] = ["hikakaku", "daikichi", "uriel", "tifana"];

export default function ServiceCaptureGrid() {
  return (
    <div className="not-prose grid grid-cols-2 gap-x-3 gap-y-4 md:gap-x-5 my-5">
      {ORDER.map((id) => (
        <ServiceCapture key={id} id={id} className="m-0" />
      ))}
    </div>
  );
}
