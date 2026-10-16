import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "金買取びよりの運営者情報・サイト概要をご案内します。",
  alternates: { canonical: "https://gold-biyori.com/about/" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">運営者情報</span></li>
        </ol>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">運営者情報</h1>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">サイト概要</h2>
          <table className="w-full">
            <tbody className="divide-y divide-warm-border">
              <tr>
                <th className="py-3 pr-4 text-left font-medium w-32 align-top">サイト名</th>
                <td className="py-3">金買取びより</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 text-left font-medium align-top">URL</th>
                <td className="py-3">https://gold-biyori.com</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 text-left font-medium align-top">運営者</th>
                <td className="py-3">金買取・貴金属編集部</td>
              </tr>
              <tr>
                <th className="py-3 pr-4 text-left font-medium align-top">設立</th>
                <td className="py-3">2026年4月</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">サイトの目的</h2>
          <p className="mb-3">
            「金買取びより」は、金・貴金属の売却を検討している方に向けて、買取相場と買取業者の比較情報を提供する情報サイトです。
          </p>
          <p className="mb-3">
            当サイト編集部では、公表されている相場データと各社公式サイトの情報にもとづき、買取業者の特徴や売却時の注意点を掲載しています。情報の取得・更新の手順は<Link href="/author/" className="text-accent-dark underline hover:text-accent">運営方針・データの確認手順</Link>にてご説明しています。
          </p>
          <p>
            利用者の状況に沿った売却方法の検討を支援するため、中立的な立場で記事を作成しています。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">広告・アフィリエイトについて</h2>
          <p className="mb-3">
            当サイトは、アフィリエイトプログラムに参加しています。記事内のリンクを通じてサービスにお申し込みいただいた場合、当サイトに紹介報酬が発生することがあります。
          </p>
          <p>
            広告報酬の有無が、比較表の内容や評価に影響することはありません。すべての記事は、当サイト編集部の基準にもとづいて作成しています。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-3 border-b border-warm-border pb-2">編集方針</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>公式情報にもとづく正確な情報提供に努めます</li>
            <li>メリットとあわせて、デメリットや注意点も記載します</li>
            <li>相場は毎日更新し、その他の情報も定期的に見直します</li>
            <li>利用者の利益を優先して記事を作成します</li>
            <li>金融商品取引法・景品表示法を遵守します</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
