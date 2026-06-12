import type { Metadata } from "next";
import Link from "next/link";
import goldData from "@/data/gold-spot-prices.json";

export const metadata: Metadata = {
  title: "金価格ウィジェット無料配布｜ブログ・サイトに本日の金買取相場を表示",
  description:
    "本日の金買取相場（K24/K18/K14の1gあたり目安・毎日自動更新）をあなたのブログやサイトに無料で埋め込めるウィジェットを配布しています。コピペ1行で設置完了。",
};

const SCRIPT_CODE = `<script src="https://gold-biyori.com/widget.js" async></script>`;
const IFRAME_CODE = `<iframe src="https://gold-biyori.com/widget.html" width="340" height="180" style="border:none;" loading="lazy" title="本日の金買取相場（金買取日和）"></iframe>`;

export default function WidgetPage() {
  const p = goldData.purity_buyback_estimate_per_g as Record<string, number>;
  const fmt = (k: string) => Math.round(p[k]).toLocaleString();
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金価格ウィジェット</span></li>
        </ol>
      </nav>

      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金価格ウィジェット（無料配布）</h1>
        <p>
          本日の金買取相場の目安（K24/K18/K14・1gあたり）を、あなたのブログやWebサイトに表示できる無料ウィジェットです。
          価格は当サイトが毎日取得している田中貴金属公表値ベースで<strong>毎日自動更新</strong>されます。設置はコードを1行貼るだけです。
        </p>

        <h2>表示イメージ</h2>
        <div className="not-prose my-4" style={{ maxWidth: 320 }}>
          <div style={{ border: "1px solid #d9c58a", borderRadius: 12, padding: "14px 16px", background: "linear-gradient(135deg,#fffdf5,#faf3df)", color: "#3a3326", lineHeight: 1.5 }}>
            <div style={{ fontSize: 11, color: "#8a7a55", marginBottom: 4 }}>本日の金買取相場の目安（{goldData.date}・田中貴金属公表値より純度換算）</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#9a7b2d" }}>K24 {fmt("k24")}円<span style={{ fontSize: 12, fontWeight: 400 }}>/g</span></div>
            <div style={{ fontSize: 13, marginTop: 2 }}>K18 {fmt("k18")}円/g ・ K14 {fmt("k14")}円/g</div>
            <div style={{ fontSize: 11, marginTop: 8 }}>
              <a href="https://gold-biyori.com/souba-dashboard/" style={{ color: "#9a7b2d", textDecoration: "underline" }}>金買取日和｜金価格ダッシュボード</a>（毎日自動更新）
            </div>
            <div style={{ fontSize: 10, color: "#9b8e6e", marginTop: 4 }}>※理論上の目安。実際の買取額は業者・状態により異なります。</div>
          </div>
        </div>

        <h2>設置方法①: スクリプト版（推奨）</h2>
        <p>表示したい場所に以下を貼り付けてください。ページに直接なじむ形で表示されます。</p>
        <pre className="not-prose bg-navy text-cream text-xs p-4 rounded-lg overflow-x-auto"><code>{SCRIPT_CODE}</code></pre>

        <h2>設置方法②: iframe版</h2>
        <p>scriptタグが使えないサービス（一部ブログ等）はこちらをお使いください。</p>
        <pre className="not-prose bg-navy text-cream text-xs p-4 rounded-lg overflow-x-auto"><code>{IFRAME_CODE}</code></pre>

        <h2>利用条件</h2>
        <ul>
          <li>個人・法人問わず無料でご利用いただけます（事前連絡不要）</li>
          <li>ウィジェット内の「金買取日和」へのリンクの削除・改変はご遠慮ください（リンク掲載が利用条件です）</li>
          <li>表示価格は公表値からの理論上の目安であり、買取額を保証するものではありません</li>
          <li>仕様は予告なく変更される場合があります</li>
        </ul>

        <h2>よくある質問</h2>
        <h3>Q. 価格はいつ更新されますか？</h3>
        <p>毎日午前に自動更新されます。設置側での作業は不要です。</p>
        <h3>Q. サイズや色は変えられますか？</h3>
        <p>現在は1サイズ・1デザインのみです。ご要望があれば<Link href="/about/">運営情報</Link>のページからお知らせください。</p>

        <p className="text-sm">
          より詳しい相場情報は<Link href="/souba-dashboard/">金価格・買取相場ダッシュボード</Link>をご覧ください。
        </p>
      </article>
    </div>
  );
}
