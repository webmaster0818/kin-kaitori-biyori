import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261119: 「金本位制」。出典: 日本銀行「日本銀行の歴史年表」1850〜・1900〜・1950〜（新貨条例・貨幣法施行・金輸出禁止/解禁/再禁止・
   金貨兌換停止の緊急勅令・360円・ニクソンショック・スミソニアン合意・貨幣法廃止）、山口県文書館「新しい貨幣」解説（新貨条例 純金二分＝1.5グラムを円の定量）、
   Federal Reserve History「Nixon Ends Convertibility of U.S. Dollars to Gold」（1944 Bretton Woods・$35/oz・1971-08-15・1960-10-20 $40）、
   USGS MCS 2026 Gold（年平均価格・公定価格$42.22）、計量単位令 別表第六（トロイオンス）。確認日 2026-11-19。円・グラム換算は当サイトの計算 */
const TITLE = "金本位制とは？日本の金本位制の年表（1871〜1988年）と、1円・1ドルが金何グラムだったかを今の金価格で換算【毎朝更新】";
const URL = "https://gold-biyori.com/articles/kin-honisei/";
const DESC = "金本位制の仕組みと、日本の新貨条例（1871年）から貨幣法廃止（1988年）までの年表を日本銀行の資料で整理しました。新貨条例の1円＝純金1.5g、ブレトンウッズ体制の1トロイオンス35ドル・1ドル360円を、今日の田中貴金属の金価格で換算しています。";

const T = goldData.tanaka_official;
const AU_R = T.au_retail_per_g as number;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const TROY = 31.1035;
const YEN_1871_G = 1.5; // 新貨条例 純金二分（1.5g）＝1円
const usdPerG = 35 / TROY;
const yenPerG1949 = usdPerG * 360;

const TIMELINE = [
  { d: "1871年6月", e: "「新貨条例」布告。単位を円・銭・厘とする。1円＝純金1.5g（純金二分）を円の定量とした（山口県文書館の解説）" },
  { d: "1873年8月", e: "国立銀行が金兌換の国立銀行紙幣を発行（1876年8月に金兌換を停止）" },
  { d: "1885年5月", e: "日本銀行券（銀貨兌換券）の発行を開始" },
  { d: "1897年10月", e: "「貨幣法」施行。金本位制が確立し、兌換銀行券条例の改正で銀兌換が金兌換になる" },
  { d: "1917年9月", e: "金輸出禁止" },
  { d: "1930年1月", e: "金輸出解禁" },
  { d: "1931年12月", e: "金輸出再禁止" },
  { d: "1932年1月", e: "「金貨兌換停止に関する緊急勅令」の施行で、事実上の管理通貨制に移行" },
  { d: "1942年", e: "「日本銀行法」施行に伴い「兌換銀行券条例」などを廃止" },
  { d: "1949年4月", e: "GHQが1米ドル＝360円の単一為替レートを設定" },
  { d: "1971年8月", e: "米国が金・ドルの交換を停止（いわゆるニクソン・ショック）" },
  { d: "1971年12月", e: "G10「スミソニアン合意」。基準相場を1米ドル＝360円から308円に変更" },
  { d: "1988年4月", e: "「通貨の単位及び貨幣の発行等に関する法律」施行に伴い「貨幣法」を廃止" },
];

const FAQS = [
  { q: "金本位制とは何ですか？", a: "通貨の単位を一定量の金で定め、紙幣を金と交換（兌換）できるようにする制度です。日本では1897年10月の貨幣法の施行で金本位制が確立し、日本銀行券は金と交換できる兌換券になりました（日本銀行の年表）。" },
  { q: "日本はいつ金本位制をやめましたか？", a: "日本銀行の年表では、1931年12月に金輸出を再禁止し、1932年1月の「金貨兌換停止に関する緊急勅令」の施行で事実上の管理通貨制に移行したとしています。根拠法だった貨幣法は1988年4月に廃止されました。" },
  { q: "明治の1円は金何グラムでしたか？", a: "1871年の新貨条例では、純金1.5g（純金二分）を1円の定量としました（山口県文書館の解説）。最新の田中貴金属の店頭買取価格で換算すると、純金1.5gは約" + yen(AU_B * YEN_1871_G) + "円です（当サイトの計算・毎朝更新）。" },
  { q: "金本位制の時代、金1gは何円でしたか？", a: "ブレトンウッズ体制の1トロイオンス35ドルと1ドル360円（1949〜1971年）から計算すると、金1gは約" + yenPerG1949.toFixed(0) + "円です（当サイトの計算）。最新の田中貴金属の店頭小売価格は1g " + yen(AU_R) + "円で、約" + (AU_R / yenPerG1949).toFixed(0) + "倍にあたります。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金本位制とは", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-19", dateModified: "2026-11-19",
    author: { "@type": "Organization", name: "金買取びより編集部" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bc) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(art) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
  </>);
}

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
};

export default function KinHoniseiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-souba.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-souba-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金本位制とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="金本位制の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金本位制とは — 日本の年表と、当時のお金を今の金価格で換算</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月19日／金価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／年表は2026年11月19日に日本銀行の資料で確認</p>

        <p><strong>金本位制は、通貨の単位を一定量の金で定め、紙幣を金と交換（兌換）できるようにする制度</strong>です。日本では1897年10月の貨幣法の施行で金本位制が確立し、1931年12月の金輸出再禁止と1932年1月の金貨兌換停止で事実上の管理通貨制に移りました（日本銀行の年表）。1871年の新貨条例は1円を純金1.5gと定めており、これを最新の田中貴金属の店頭買取価格で換算すると<strong>約{yen(AU_B * YEN_1871_G)}円</strong>です（当サイトの計算）。</p>

        <h2>日本の金本位制の年表</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>年月</th><th>出来事</th></tr></thead>
            <tbody>
              {TIMELINE.map((t) => (
                <tr key={t.d}><td>{t.d}</td><td>{t.e}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 日本銀行「日本銀行の歴史年表」（1850年〜・1900年〜・1950年〜）、1871年の1円の定量のみ山口県文書館「新しい貨幣」解説。新貨条例は1875年に「貨幣条例」と改称されています。山口県文書館の解説は、当時のアジア諸国の多くが銀貨で取引していたため、貿易用の1円銀貨も併用されたとしています。</p>

        <h2>新貨条例の「1円＝純金1.5g」を今の価格で換算</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>金額（1871年）</th><th>純金の量</th><th>今日の店頭買取価格で換算</th><th>今日の店頭小売価格で換算</th></tr></thead>
            <tbody>
              {[1, 5, 10, 20].map((n) => (
                <tr key={n}><td>{n}円</td><td>{(n * YEN_1871_G).toFixed(1)}g</td><td>約{yen(n * YEN_1871_G * AU_B)}円</td><td>約{yen(n * YEN_1871_G * AU_R)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 純金の量×田中貴金属の1gあたりの税込の店頭価格（{pubLabel}）。金の量で比べた値で、当時の物価や賃金で比べた価値とは異なります。江戸時代の小判の金の量は<Link href="/articles/koban-kachi/">小判の価値</Link>で換算しています。</p>

        <h2>ブレトンウッズ体制の「1オンス35ドル」</h2>
        <p>Federal Reserve History によると、1944年のブレトンウッズ会議（44か国）で始まった体制では、米ドルが<strong>1オンス35ドル</strong>の固定レートで金と交換できました。1960年10月20日にはロンドンの金市場で買いが集中し、価格が1オンス40ドルまで上がっています。1971年8月15日、ニクソン大統領は金の交換窓口を閉じると発表しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>項目</th><th>値</th></tr></thead>
            <tbody>
              <tr><td>公定の金価格</td><td>1トロイオンス35ドル</td></tr>
              <tr><td>1gあたり（当サイトの計算）</td><td>約{usdPerG.toFixed(3)}ドル（35÷31.1035）</td></tr>
              <tr><td>1ドル＝360円（1949〜1971年）で円にすると</td><td>1gあたり約{yenPerG1949.toFixed(0)}円</td></tr>
              <tr><td>最新の田中貴金属の店頭小売価格</td><td>1g {yen(AU_R)}円（約{(AU_R / yenPerG1949).toFixed(0)}倍）</td></tr>
              <tr><td>USGS の2025年の年平均価格（推定）</td><td>1トロイオンス3,300ドル（35ドルの約{(3300 / 35).toFixed(0)}倍）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: Federal Reserve History「Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls」、日本銀行の年表（1ドル＝360円・スミソニアン合意）、USGS「Mineral Commodity Summaries 2026: Gold」。1トロイオンス＝31.1035gは計量単位令の定義です（<Link href="/articles/ounce-gram/">1オンスは何グラム</Link>）。USGS の資料は、米財務省の保有金を公定価格1トロイオンス42.22ドルで評価した値で示しています。</p>
        <p>田中貴金属の年次データ（1973年〜）で見た価格の上げ下げは<Link href="/articles/kin-kakaku-boraku-kako/">金価格の暴落の記録</Link>にまとめています。</p>

        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {FAQS.map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <h2>出典</h2>
        <ul className="text-sm">
          <li>日本銀行「日本銀行の歴史年表」1850年〜 <a href="https://www.boj.or.jp/about/outline/history/his_1850.htm" target="_blank" rel="noopener noreferrer">boj.or.jp</a>・1900年〜 <a href="https://www.boj.or.jp/about/outline/history/his_1900.htm" target="_blank" rel="noopener noreferrer">boj.or.jp</a>・1950年〜 <a href="https://www.boj.or.jp/about/outline/history/his_1950.htm" target="_blank" rel="noopener noreferrer">boj.or.jp</a></li>
          <li>山口県文書館「4-2-3 世界とつながる日本と文明開化」解説（新しい貨幣）<a href="https://archives.pref.yamaguchi.lg.jp/cms/wp-content/uploads/2025/08/4-2-3-000.pdf" target="_blank" rel="noopener noreferrer">archives.pref.yamaguchi.lg.jp</a></li>
          <li>Federal Reserve History「Nixon Ends Convertibility of U.S. Dollars to Gold and Announces Wage/Price Controls」<a href="https://www.federalreservehistory.org/essays/gold-convertibility-ends" target="_blank" rel="noopener noreferrer">federalreservehistory.org</a></li>
          <li>U.S. Geological Survey「Mineral Commodity Summaries 2026: Gold」<a href="https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-gold.pdf" target="_blank" rel="noopener noreferrer">pubs.usgs.gov</a></li>
          <li>計量単位令 別表第六 <a href="https://laws.e-gov.go.jp/law/404CO0000000357" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月19日。換算値は金の量だけで比べた参考値です。</p>

        <RelatedArticles currentSlug="kin-honisei" relatedSlugs={["kin-kakaku-boraku-kako", "koban-kachi", "ounce-gram", "kin-toha", "kinka-kaitori-guide", "kin-maizoryo"]} />
      </article>
    </div>
  </>);
}
