import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "金買取びよりの利用規約です。当サイトのご利用にあたっての注意事項をご案内します。",
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">利用規約</span></li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">利用規約</h1>

      <div className="space-y-8 text-sm leading-relaxed">
        <p>
          この利用規約（以下「本規約」）は、金買取びより（以下「当サイト」）の利用条件を定めるものです。当サイトをご利用いただく際は、本規約に同意したものとみなします。
        </p>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第1条（適用）</h2>
          <p>
            本規約は、当サイトを利用するすべての方（以下「利用者」）に適用されます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第2条（コンテンツについて）</h2>
          <p className="mb-3">
            当サイトに掲載されている記事・画像・データなどのコンテンツ（以下「コンテンツ」）の著作権は、当サイトまたは正当な権利を有する第三者に帰属します。
          </p>
          <p>
            利用者は、私的利用の範囲を超えて、コンテンツを複製・転載・改変・再配布することはできません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第3条（免責事項）</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>当サイトの情報は、各買取業者の公式情報や編集部の調査に基づいていますが、正確性・完全性・最新性を保証するものではありません。</li>
            <li>当サイトの情報を参考にしたことで発生した損害について、当サイトは一切の責任を負いません。</li>
            <li>金の買取価格は日々変動するため、当サイトに掲載された相場は参考値です。実際の買取価格は各業者にお問い合わせください。</li>
            <li>当サイトからリンクしている外部サイトの内容について、当サイトは一切の責任を負いません。</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第4条（広告・アフィリエイト）</h2>
          <p>
            当サイトは、アフィリエイトプログラムに参加しており、記事内のリンクを通じてサービスにお申し込みいただいた場合、紹介報酬が発生することがあります。これは利用者に追加の費用が発生するものではありません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第5条（禁止事項）</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>当サイトのコンテンツの無断転載・複製</li>
            <li>当サイトの運営を妨害する行為</li>
            <li>その他、当サイトが不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">第6条（規約の変更）</h2>
          <p>
            当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <p className="text-warm-gray text-xs pt-4 border-t border-warm-border">
          制定日：2026年4月13日
        </p>
      </div>
    </div>
  );
}
