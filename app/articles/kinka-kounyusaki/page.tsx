import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（深夜04時の回）: 「金貨 どこで買う」。購入を勧める・勧めないは書かない。買える場所・価格の仕組み・費用・税を公式の数字で並べるだけ。
   出典: 田中貴金属「本日の地金価格」地金価格・コイン価格（2026年11月24日 17:00公表）・「売買価格と別途手数料」、
   徳力本店「相場情報」本日のコイン価格（2026年11月24日 09:30発表）、石福金属興業「地金型コイン」、
   造幣局「昭和100年記念貨幣の販売について」「同 抽選会について」、国税庁 No.3161。確認日 2026-11-25。
   独自: 金貨の小売価格と「含まれる金の量×地金の小売価格」の差（上乗せ率）、同じ日に買って売った場合の戻り率、小型地金との比較（いずれも当サイトの計算） */
const TITLE = "金貨はどこで買う？地金商2社の公表価格で比べる上乗せ率と、買ってすぐ売ったときの戻り率";
const URL = "https://gold-biyori.com/articles/kinka-kounyusaki/";
const DESC = "金貨（ウィーン金貨ハーモニー・メイプルリーフ金貨）を買える場所を、田中貴金属・徳力本店・石福金属興業・造幣局の公式情報で整理しました。2026年11月24日の公表価格から、金の地金価格に対する上乗せ率（1オンス約6%・1/10オンス約15%）と、買ってすぐ売った場合の戻り率を計算しています。";

const OZ = 31.1035;
/* 田中貴金属 2026年11月24日 17:00公表（税込） */
const T_BAR_R = 20688;
const T_BAR_B = 20139;
/* 徳力本店 2026年11月24日 09:30発表（税込） */
const K_BAR_R = 20721;
type C = { size: string; oz: number; tR: number; tB: number; kR: number; kBp: number; kBn: number };
const COINS: C[] = [
  { size: "1オンス", oz: 1, tR: 682635, tB: 612647, kR: 683722, kBp: 628085, kBn: 596110 },
  { size: "1/2オンス", oz: 0.5, tR: 347819, tB: 305722, kR: 348373, kBp: 313493, kBn: 291972 },
  { size: "1/4オンス", oz: 0.25, tR: 179942, tB: 151697, kR: 180229, kBp: 160482, kBn: 143728 },
  { size: "1/10オンス", oz: 0.1, tR: 73683, tB: 60815, kR: 73800, kBp: 65028, kBn: 58381 },
];
const pct = (n: number) => `${n > 0 ? "+" : ""}${n.toFixed(1)}%`;
const yen = (n: number) => Math.round(n).toLocaleString();
const ROWS = COINS.map((c) => {
  const g = OZ * c.oz;
  return { ...c, g, tPrem: (c.tR / (g * T_BAR_R) - 1) * 100, kPrem: (c.kR / (g * K_BAR_R) - 1) * 100, tBack: (c.tB / c.tR) * 100, kBackOwn: (c.kBp / c.kR) * 100, kBackOther: (c.kBn / c.kR) * 100 };
});
const ONE = ROWS[0];
const TENTH = ROWS[3];
/* 田中の金地金 5g・10g（1本あたり別途手数料 8,800円）、売却 20g未満 2,200円 */
const BAR5 = (5 * T_BAR_R + 8800) / 5;
const BAR5_PREM = (BAR5 / T_BAR_R - 1) * 100;
const BAR5_BACK = ((5 * T_BAR_B - 2200) / (5 * T_BAR_R + 8800)) * 100;
const BAR10 = (10 * T_BAR_R + 8800) / 10;
const BAR10_PREM = (BAR10 / T_BAR_R - 1) * 100;

const FAQS = [
  { q: "金貨はどこで買えますか？", a: "地金型金貨（ウィーン金貨ハーモニー・メイプルリーフ金貨など）は、田中貴金属・徳力本店・石福金属興業などの地金商の店頭や通信販売で購入できます。日本の記念金貨は、造幣局が発行時に申込みを受け付けて販売しており、申込みが販売数量を上回ると抽選になります。" },
  { q: "金貨は金の地金より割高ですか？", a: `2026年11月24日の田中貴金属の公表価格では、1オンス金貨の小売価格は、含まれる金の量（31.1035g）に金地金の小売価格を掛けた額より${ONE.tPrem.toFixed(1)}%高く、1/10オンスでは${TENTH.tPrem.toFixed(1)}%高い計算でした（当サイトの計算）。小さいサイズほど上乗せの割合が大きくなります。` },
  { q: "金貨を買うときに手数料はかかりますか？", a: "田中貴金属の公表では、500g未満の金地金には1本ごとの別途手数料（5g・10g・20gは8,800円）がかかりますが、コインの価格表には別途手数料の記載がなく、コイン価格そのものに製造などの費用が含まれています。消費税は小売価格に含まれています（税込表示）。" },
  { q: "金貨を売ったときの税金は？", a: "金地金と同じく、原則として譲渡所得として総合課税の対象です（国税庁 No.3161）。所有期間が5年を超えると、特別控除50万円を差し引いた後の金額の2分の1が課税対象になります。1回の売却代金が200万円を超えると、買取業者から税務署へ支払調書が提出されます。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金貨はどこで買う", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-25", dateModified: "2026-11-25",
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

export default function KinkaKounyusakiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinka.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinka-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金貨はどこで買う</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金貨の購入先のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金貨はどこで買う？ — 購入先と、公表価格から見た上乗せ率・戻り率</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／価格: 田中貴金属 2026年11月24日 17:00公表・徳力本店 同日 09:30発表／出典の確認日: 2026年11月25日</p>

        <p>地金型の金貨（ウィーン金貨ハーモニー・メイプルリーフ金貨など）は、<strong>田中貴金属・徳力本店・石福金属興業などの地金商</strong>の店頭や通信販売で購入できます。日本の記念貨幣は<strong>造幣局</strong>が発行時に申込みを受け付けて販売します。2026年11月24日の公表価格で計算すると、金貨の小売価格は含まれる金の地金価格より<strong>1オンスで約{ONE.tPrem.toFixed(0)}%、1/10オンスで約{TENTH.tPrem.toFixed(0)}%高く</strong>、同じ日に買って売った場合に戻る金額は1オンスで小売価格の約{ONE.tBack.toFixed(0)}%でした（田中貴金属の価格・当サイトの計算）。</p>

        <h2>金貨を買える場所</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>購入先</th><th>扱う金貨（公式の掲載）</th><th>買い方・備考</th></tr></thead>
            <tbody>
              <tr><td><strong>田中貴金属</strong></td><td>ウィーン金貨ハーモニー・メイプルリーフ金貨（1・1/2・1/4・1/10オンス）</td><td>直営店のほか、インターネットでの地金・コイン購入の案内あり。価格は営業日の9:30と14:00に公表。メイプルリーフ金貨1オンスは在庫がなく販売を中止中（11月24日公表時点）</td></tr>
              <tr><td><strong>徳力本店</strong></td><td>ウィーン金貨・メイプルリーフ金貨（1・1/2・1/4・1/10オンス）</td><td>店頭・WEB・電話での地金購入の案内あり。同社で買ったコインは「プレミアム有」の買取価格</td></tr>
              <tr><td><strong>石福金属興業</strong></td><td>メイプルリーフ金貨・ウィーン金貨ハーモニー（1・1/2・1/4・1/10オンス）</td><td>購入方法は同社サイトの「購入方法」で案内</td></tr>
              <tr><td><strong>造幣局</strong></td><td>日本の記念貨幣（発行のたびに販売）</td><td>はがき・オンラインショップで申込み。申込数が販売数を上回ると抽選</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属「本日の地金価格」（コイン価格）、徳力本店「相場情報」、石福金属興業「地金型コイン」、造幣局「昭和100年記念貨幣の販売について」。三菱マテリアルも金貨を取り扱っていますが、2026年11月25日の確認時は同社サイトがシステムメンテナンス中で、商品ページを確認できませんでした。</p>
        <p>造幣局の記念貨幣の例として、2026年8〜9月に申込みを受け付けた「昭和100年記念貨幣」（千円・純銀31.1g・34,800円）は、販売数40,000個に対して164,774個の申込みがあり、抽選の倍率は4.58倍でした。金貨ではありませんが、記念貨幣は発行時の申込み・抽選で買う仕組みであることが分かります。</p>

        <h2>金の地金価格に対する上乗せ率（2026年11月24日）</h2>
        <p>金貨の小売価格を「含まれる金の量 × 金地金の1gの小売価格」で割り、上乗せの割合を計算しました。ウィーン金貨ハーモニー・メイプルリーフ金貨はどちらも純金（1オンス＝31.1035g）で、両社とも2種類を同じ価格で公表しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>金の量</th><th>田中 小売価格</th><th>田中 上乗せ率</th><th>徳力 小売価格</th><th>徳力 上乗せ率</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td>{r.g.toFixed(2)}g</td>
                  <td>{yen(r.tR)}円</td>
                  <td><strong>{pct(r.tPrem)}</strong></td>
                  <td>{yen(r.kR)}円</td>
                  <td><strong>{pct(r.kPrem)}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">金地金の小売価格（税込・1g）: 田中貴金属 {yen(T_BAR_R)}円（11月24日 17:00公表）、徳力本店 {yen(K_BAR_R)}円（同日 09:30発表）。上乗せ率は当サイトの計算です。発表時刻が違うため、2社の価格の差は比較に使わず、各社の中での割合だけを示しています。</p>
        <p>参考に、田中貴金属の金地金5g（1本ごとの別途手数料8,800円）は1gあたり{yen(BAR5)}円で上乗せ率{pct(BAR5_PREM)}、10gは1gあたり{yen(BAR10)}円で{pct(BAR10_PREM)}の計算になります。少額で金を買う場合、1/10オンス金貨（約3.1g）の上乗せ率は5g・10gの地金より大きくなります。地金の購入先と手数料は<Link href="/articles/kin-ingot-kounyusaki/">金のインゴットはどこで買う？</Link>で比べています。</p>

        <h2>同じ日に買って売った場合の戻り率</h2>
        <p>購入価格と売却価格の差（スプレッド）を見るため、同じ日の小売価格に対する買取価格の割合を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>サイズ</th><th>田中 買取価格</th><th>田中 戻り率</th><th>徳力 同社購入分（プレミアム有）</th><th>徳力 他社購入分（プレミアム無）</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.size}>
                  <td>{r.size}</td>
                  <td>{yen(r.tB)}円</td>
                  <td><strong>{r.tBack.toFixed(1)}%</strong></td>
                  <td>{yen(r.kBp)}円（{r.kBackOwn.toFixed(1)}%）</td>
                  <td>{yen(r.kBn)}円（{r.kBackOther.toFixed(1)}%）</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 田中貴金属（11月24日 17:00公表・税込）、徳力本店（同日 09:30発表・税込）。徳力本店は「弊社以外でお求めのコインはプレミアム無の買取価格」としています。田中貴金属は2019年10月1日に金貨の買取プレミアムを廃止し、買取価格を一本化しています。戻り率は当サイトの計算です。</p>
        <p>同じ計算で、田中貴金属の金地金5gは{BAR5_BACK.toFixed(1)}%（購入時8,800円・売却時2,200円の別途手数料を含む）でした。金貨の売却先と相場は<Link href="/articles/kinka-kaitori-guide/">金貨の買取ガイド</Link>・<Link href="/articles/vienna-kinka-kaitori/">ウィーン金貨の買取</Link>にまとめています。</p>

        <h2>購入・売却にかかわる税金</h2>
        <ul>
          <li><strong>購入時</strong>: 地金商の小売価格は消費税込みで公表されています。</li>
          <li><strong>売却時</strong>: 金地金の売却益は原則として総合課税の譲渡所得です。所有期間5年超は特別控除50万円を差し引いた後の2分の1が課税対象になります（国税庁 No.3161）。詳しくは<Link href="/articles/kin-kaitori-zeikin/">金を売ったときの税金</Link>をご覧ください。</li>
          <li><strong>支払調書</strong>: 金貨は支払調書の対象（金地金・白金地金・金貨・白金貨）で、1回の売却代金が200万円を超えると提出されます。<Link href="/articles/kin-200man-mynumber/">200万円とマイナンバー</Link>をご覧ください。</li>
        </ul>

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
          <li>田中貴金属「本日の地金価格」（地金価格・コイン価格）<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>田中貴金属「売買価格と別途手数料」<a href="https://gold.tanaka.co.jp/inquire/buying/charge02.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>徳力本店「相場情報」<a href="https://www.tokuriki-kanda.co.jp/goldetc/market/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a></li>
          <li>石福金属興業「地金型コイン」<a href="https://retail.ishifuku-kinzoku.co.jp/product/coin.html" target="_blank" rel="noopener noreferrer">ishifuku-kinzoku.co.jp</a></li>
          <li>造幣局「昭和100年記念貨幣の販売について」<a href="https://www.mint.go.jp/shintyaku/sale/hanbai_r8_showa100.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a>・「昭和100年記念貨幣の抽選会について」<a href="https://www.mint.go.jp/shintyaku/sale/hanbai_r8_showa100_ck.html" target="_blank" rel="noopener noreferrer">mint.go.jp</a></li>
          <li>国税庁「No.3161 金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。価格は2026年11月24日の公表値で、毎日変わります。本ページは公表値をもとにした計算で、金貨の購入を勧めるものではありません。</p>

        <RelatedArticles currentSlug="kinka-kounyusaki" relatedSlugs={["kin-ingot-kounyusaki", "kinka-kaitori-guide", "kinka-ingot-kaitori", "vienna-kinka-kaitori", "ounce-gram", "kin-kaitori-zeikin"]} />
      </article>
    </div>
  </>);
}
