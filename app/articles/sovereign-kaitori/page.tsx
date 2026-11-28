import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261120: 「ソブリン金貨 買取」。出典: The Royal Mint「The 1978 Gold Bullion Sovereign」「The Sovereign 2022 Gold Proof Coin」（Alloy 22 Carat Gold・Weight 7.98 g・Diameter 22.05mm・Edge Milled）、
   同ページ掲載の Historic Sovereigns の販売価格（1825-1830 George IV £1,550・1907 Edward VII £925・1915 George V £1,100・1927 Perth £795・1957 £1,095 ほか）、
   三菱マテリアル「金貨」・徳力本店「相場」・石福金属興業「コイン」（金貨の一覧にソブリンの掲載なし）、e-Gov 所得税法 224条の6・施行令 350条の7。確認日 2026-11-20。
   含有金量（7.98×22/24）・金の値は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "ソブリン金貨の買取 — 22金・7.98gに含まれる金は約7.32g、今日の金の値と年号による違い【毎朝更新】";
const URL = "https://gold-biyori.com/articles/sovereign-kaitori/";
const DESC = "イギリスのソブリン金貨の規格（22金・7.98g・直径22.05mm）を英国王立造幣局の公式で確認し、含まれる金の値を田中貴金属の価格で毎朝計算しています。年号・状態で販売価格が異なる例と、国内の地金商の取扱もまとめました。";

const T = goldData.tanaka_official;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const WEIGHT = 7.98; // g（The Royal Mint）
const PURE = (WEIGHT * 22) / 24; // 22カラット＝22/24
const VALUE = PURE * AU_B;
const COUNTS = [1, 5, 10, 50, 100].map((n) => ({ n, g: PURE * n, v: VALUE * n }));
const n200 = Math.floor(2_000_000 / VALUE);

/* The Royal Mint の Historic Sovereigns（2026-11-20 掲載の販売価格・在庫切れを含む） */
const HISTORIC = [
  { name: "George IV Bare Head Second Type（1825-1830）Fine+", price: "£1,550" },
  { name: "1915 George V（Very Fine）", price: "£1,100" },
  { name: "1957 Queen Elizabeth II（Extremely Fine）", price: "£1,095" },
  { name: "1907 Edward VII（Very Fine+）", price: "£925" },
  { name: "1927 George V Perth Mint Mark（Extremely Fine）", price: "£795" },
  { name: "1932 George V South Africa Mint Mark（Extremely Fine）", price: "£660" },
];

const FAQS = [
  { q: "ソブリン金貨の金の含有量は何グラムですか？", a: `英国王立造幣局（The Royal Mint）の仕様では、ソブリン金貨は22カラットの金で重さ7.98gです。22/24で計算すると、含まれる金は約${PURE.toFixed(3)}gです（当サイトの計算）。` },
  { q: "ソブリン金貨1枚の買取価格はいくらですか？", a: `買取価格は店ごとに異なります。最新の田中貴金属の金の店頭買取価格（${pubLabel}）で、1枚に含まれる金の値は約${yen(VALUE)}円です（当サイトの計算）。古い年号や状態のよいものは、金の値とは別の評価がつく場合があります。` },
  { q: "古いソブリン金貨は金の値より高く売れますか？", a: "英国王立造幣局は年号・状態の異なる歴史的なソブリン金貨を個別の価格で販売しており、2026年11月20日の掲載では£660〜£1,550の幅がありました。同じ7.98g・22金でも価格が異なるのは、年号・発行地・状態による評価のためです。国内での買取の評価は、買取店にご確認ください。" },
  { q: "ソブリン金貨を売ると支払調書は出ますか？", a: `所得税法では金貨は「金地金等」に含まれ、1回の売却額が200万円を超えると、買い取った事業者が支払調書を提出します。金の値で計算すると、最新の価格では${n200}枚までは200万円以下です（当サイトの計算）。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "ソブリン金貨の買取", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-20", dateModified: "2026-11-20",
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

export default function SovereignKaitoriPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinka.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinka-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">ソブリン金貨の買取</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="ソブリン金貨の買取の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">ソブリン金貨の買取 — 含まれる金の値と年号による違い</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月20日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／規格・掲載価格は2026年11月20日に英国王立造幣局の公式で確認</p>

        <p>ソブリン金貨は、英国王立造幣局（The Royal Mint）が発行する金貨で、仕様は<strong>22カラットの金・重さ7.98g・直径22.05mm</strong>です（1978年の地金型、2022年のプルーフ版とも同じ）。含まれる金は計算で<strong>約{PURE.toFixed(3)}g</strong>、最新の田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）では<strong>1枚あたり約{yen(VALUE)}円</strong>です。一方、同造幣局は古い年号のソブリン金貨を年号・状態ごとに異なる価格で販売しており、金の値だけでは決まらない場合があります。</p>

        <h2>枚数別の金の量と値（毎朝更新）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>枚数</th><th>含まれる金</th><th>金の値</th></tr></thead>
            <tbody>
              {COUNTS.map((c) => (
                <tr key={c.n}><td>{c.n}枚</td><td>{c.g.toFixed(2)}g</td><td>{yen(c.v)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 含まれる金＝7.98g×22/24。金の値＝含まれる金×田中貴金属の金の店頭買取価格（{pubLabel}）。金貨の買取価格そのものではありません。</p>

        <h2>年号・状態で価格が異なる例（英国王立造幣局の販売価格）</h2>
        <p>英国王立造幣局は、過去の年号のソブリン金貨を「Historic Sovereigns」として個別に販売しています。重さと品位は同じでも、価格には大きな幅があります。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>ソブリン金貨（年号・状態）</th><th>販売価格</th></tr></thead>
            <tbody>
              {HISTORIC.map((h) => (
                <tr key={h.name}><td>{h.name}</td><td>{h.price}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: The Royal Mint「The Sovereign 2022 Gold Proof Coin」ページの Historic Sovereigns 欄（2026年11月20日確認・在庫切れの品を含む）。販売価格であり、買取価格ではありません。Perth・South Africa・Ottawa など、英国外の造幣所で作られたソブリン金貨（Mint Mark 付き）も掲載されています。</p>

        <h2>国内での売却</h2>
        <ul>
          <li><strong>大手地金商の取扱</strong>: 2026年11月20日の確認では、三菱マテリアル（カンガルー・メイプルリーフ・ウィーンの3種）、徳力本店・石福金属興業（メイプルリーフ・ウィーン）の公式の金貨の一覧にソブリン金貨はありませんでした。三菱マテリアルは、取り扱いのない金貨は買い取りできないことがあるため事前に問い合わせるよう案内しています。</li>
          <li><strong>確認しておくこと</strong>: 金の値だけで買い取るのか、年号・状態を評価するのかを、買取店に確認します。プルーフ版はケース・証明書の有無も伝えます。付属品の扱いは<Link href="/articles/kin-fuzokuhin-nashi/">付属品がない金の買取</Link>をご覧ください。</li>
          <li><strong>支払調書</strong>: 所得税法は金貨を「金地金等」に含めており（224条の6）、1回の売却額が200万円を超えると、買い取った事業者が支払調書を提出します。金の値で計算すると、最新の価格では<strong>{n200}枚まで</strong>が200万円以下です（当サイトの計算）。手続きは<Link href="/articles/kin-baikyaku-mynumber/">金の売却とマイナンバー</Link>にまとめています。</li>
        </ul>
        <p>同じ22金の地金型金貨である<Link href="/articles/krugerrand-kaitori/">クルーガーランド金貨</Link>、22金の品位と製品は<Link href="/articles/k22-kaitori/">22金（K22）の買取相場</Link>、金貨全体は<Link href="/articles/kinka-kaitori-guide/">金貨買取ガイド</Link>をご覧ください。</p>

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
          <li>The Royal Mint「The 1978 Gold Bullion Sovereign」<a href="https://www.royalmint.com/sovereign/all/The-1978-Gold-Bullion-Sovereign" target="_blank" rel="noopener noreferrer">royalmint.com</a>・「The Sovereign 2022 Gold Proof Coin」<a href="https://www.royalmint.com/collect/archive/2022/sovereign-2022-gold-coin/" target="_blank" rel="noopener noreferrer">royalmint.com</a></li>
          <li>三菱マテリアル「金貨」<a href="https://gold.mmc.co.jp/howto/products/coin.html" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp</a>・徳力本店「相場」<a href="https://www.tokuriki-kanda.co.jp/goldetc/market/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a>・石福金属興業「コイン」<a href="https://retail.ishifuku-kinzoku.co.jp/product/coin.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a></li>
          <li>e-Gov法令検索「所得税法」<a href="https://laws.e-gov.go.jp/law/340AC0000000033" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a>・「所得税法施行令」<a href="https://laws.e-gov.go.jp/law/340CO0000000096" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月20日。取扱・価格は変更される場合があります。お取引の前に、各社の最新情報をご確認ください。</p>

        <RelatedArticles currentSlug="sovereign-kaitori" relatedSlugs={["krugerrand-kaitori", "kinka-kaitori-guide", "k22-kaitori", "kinka-ingot-kaitori", "kin-baikyaku-mynumber", "britannia-kinka"]} />
      </article>
    </div>
  </>);
}
