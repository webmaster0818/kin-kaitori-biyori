import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261115: 「純金積立 やめとけ」。勧める・勧めないは書かない。7社の公式ページの手数料・年会費・保管方法と国税庁の資料を並べ、
   月1万円・3万円の場合の年間の手数料を当サイトで計算するだけ。確認日はすべて 2026-11-15（各社公式・国税庁）。 */
const TITLE = "純金積立の手数料・年会費・保管方法を7社の公式表記で比較｜「やめとけ」と言われる費用の中身";
const URL = "https://gold-biyori.com/articles/junkin-tsumitate-hikaku/";
const DESC = "純金積立の積立手数料・年会費・売却や引出しの手数料・保管方法を、田中貴金属・三菱マテリアル・石福・徳力・SBI証券・楽天証券・マネックス証券の公式ページで比較し、月1万円・3万円の年間手数料を計算しました。購入の可否は判断していません。";

const RETAIL = goldData.tanaka_official.au_retail_per_g as number;
const BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();
const SPREAD_PCT = ((RETAIL - BUY) / RETAIL) * 100;

/* 年間の手数料（積立手数料×12＋年会費）。年会費はペーパーレス・ネット利用の割引がない場合の金額 */
type Calc = { name: string; m1: number; m3: number; fee: string; annual: number; note: string };
const CALC: Calc[] = [
  { name: "田中貴金属", m1: 10000 * 0.028 * 12, m3: 30000 * 0.022 * 12, fee: "2.8%（月3,000〜29,000円）／2.2%（30,000〜49,000円）／1.6%（50,000円以上）", annual: 1100, note: "ネットサービス利用時は年会費無料" },
  { name: "三菱マテリアル", m1: 10 * 26 * 12, m3: 30 * 26 * 12, fee: "1,000円につき31円（月1万円未満）／26円（1万円以上）", annual: 880, note: "オンライントレード利用・郵送物停止で年会費無料" },
  { name: "石福金属興業", m1: 0, m3: 0, fee: "積立の買付手数料の記載なし", annual: 2200 + 330 * 12, note: "年会費2,200円（ペーパーレス割引で550円）＋口座維持費 月330円" },
  { name: "徳力本店", m1: 10 * 25 * 12, m3: 30 * 25 * 12, fee: "1,000円につき25円", annual: 1100, note: "コースのページに1,080円の表記も混在" },
  { name: "SBI証券", m1: 10000 * 0.0165 * 12, m3: 30000 * 0.0165 * 12, fee: "約定代金の1.65%（税込）", annual: 0, note: "年会費・保管料 無料" },
  { name: "楽天証券", m1: 10000 * 0.0165 * 12, m3: 30000 * 0.0165 * 12, fee: "買付代金の1.65%（税込）", annual: 0, note: "年会費・保管料 無料" },
  { name: "マネックス証券", m1: 10000 * 0.0165 * 12, m3: 30000 * 0.0165 * 12, fee: "約定代金の1.65%（税込）", annual: 0, note: "口座の管理・維持・解約の手数料なし" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "純金積立の費用比較", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-15", dateModified: "2026-11-15",
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

const FAQS = [
  { q: "純金積立で「やめとけ」と言われるのはなぜですか？", a: "当サイトは特定の商品をすすめる、またはすすめない立場をとっていません。費用の面では、積立のたびにかかる手数料（各社1.6〜3.1%程度）、年会費・口座維持費、購入は小売価格・売却は買取価格という価格差、現物で受け取る場合の手数料があります。いずれも各社の公式ページに金額が掲載されています。" },
  { q: "積立手数料のほかに価格差はありますか？", a: "あります。田中貴金属・三菱マテリアル・石福金属興業は積立の購入に店頭小売価格（石福は小売価格）を使い、売却は買取価格です。楽天証券・SBI証券・マネックス証券も、購入価格と売却価格に価格差（スプレッド）があると案内しています。" },
  { q: "積立会社が破綻したら金はどうなりますか？", a: "保管方法によります。三菱マテリアルのFAQは、混蔵寄託では預かった金地金を全て返却、消費寄託では全量を返せない可能性があると説明しています。マネックス証券は消費寄託で全量を返せない可能性があると説明し、楽天証券は預り残高相当分の金銭を他の資産と区分して管理すると説明しています。" },
  { q: "純金積立で買った金を売ったときの税金は？", a: "国税庁 No.1520 は、金定額購入システム（純金積立）で取得した金地金を譲渡した場合は総合課税の所得（事業所得・雑所得・譲渡所得）になると説明しています。金投資口座など売戻し条件付売買の利益は20.315%の源泉分離課税で、扱いが異なります。" },
];

export default function JunkinTsumitateHikakuPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-tesuryo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-tesuryo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">純金積立の費用比較</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="純金積立の費用比較のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">純金積立の手数料・年会費・保管方法 — 7社の公式表記で比較</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月15日／各社の手数料: 2026年11月15日に公式ページで確認</p>

        <p>純金積立について「やめとけ」という意見を見かけることがあります。このページでは、判断の材料になる<strong>手数料・年会費・価格差・保管方法・税金</strong>を、積立を扱う7社の公式ページと国税庁の資料の記載どおりに並べます。当サイトは、特定の商品の購入をすすめる、またはすすめない立場をとっていません。</p>
        <ul>
          <li>積立のたびにかかる手数料: 地金商は1.6〜3.1%程度（会社・月額で異なる）、ネット証券3社は1.65%</li>
          <li>年会費・口座維持費: 0円〜年6,160円（石福の割引なしの場合）</li>
          <li>地金商は「店頭小売価格で買い、買取価格で売る」。田中貴金属の最新の価格差は{SPREAD_PCT.toFixed(2)}%（{pubLabel}）</li>
          <li>保管方法は会社により特定保管・混蔵寄託・消費寄託があり、破綻時の扱いが異なる</li>
        </ul>

        <h2>7社の積立条件（公式ページの記載）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>会社</th><th>最低額（月）</th><th>積立の手数料</th><th>年会費など</th><th>売却時</th><th>保管方法</th></tr></thead>
            <tbody>
              <tr><td>田中貴金属</td><td>3,000円（1,000円単位）</td><td>2.8%／2.2%／1.6%（月の積立額で変わる）</td><td>1,100円（ネットサービス利用時は無料）</td><td>手数料無料（振込手数料は自己負担）。店頭買取価格</td><td>金・プラチナは特定保管（混合寄託）</td></tr>
              <tr><td>三菱マテリアル</td><td>3,000円（1,000円単位）</td><td>1,000円につき31円（1万円未満）／26円（1万円以上）</td><td>880円（条件により無料）</td><td>別建ての手数料なし（価格に織り込み）。振込手数料は会社負担</td><td>消費寄託または混蔵寄託（金のみ・保管料あり）を選択</td></tr>
              <tr><td>石福金属興業</td><td>1,000円（1,000円単位）</td><td>記載なし</td><td>年会費2,200円（ペーパーレス割引で550円）＋口座維持費 月330円</td><td>金銭返還の手数料なし（振込手数料は自己負担）</td><td>混蔵寄託（所有権は購入と同時に会員へ）</td></tr>
              <tr><td>徳力本店</td><td>3,000円（金＋プラチナは5,000円）</td><td>1,000円につき25円</td><td>1,100円（1,080円の表記も混在）</td><td>1gから売却可（手数料の記載なし）</td><td>特定保管</td></tr>
              <tr><td>SBI証券</td><td>1,000円（1,000円単位）</td><td>1.65%（税込）</td><td>無料</td><td>無料（売買スプレッドあり）</td><td>特定保管（米国の保管会社）</td></tr>
              <tr><td>楽天証券</td><td>1,000円（1,000円単位）</td><td>1.65%（税込）</td><td>無料</td><td>0円（売買スプレッドあり）</td><td>消費寄託（所有権は楽天証券）</td></tr>
              <tr><td>マネックス証券</td><td>1,000円（1,000円単位）</td><td>1.65%（税込）</td><td>無料</td><td>0円（購入時と売却時の価格が異なる）</td><td>消費寄託（所有権は受託者）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典は本文末に記載。各社とも2026年11月15日確認。石福金属興業の引出手数料はWeb 2,200円・郵送1,650円と同じページで2通りの記載があります。</p>

        <h2>月1万円・3万円を1年間積み立てた場合の手数料（当サイトの計算）</h2>
        <p>上の表の積立手数料を12か月分合計し、年会費・口座維持費（割引のない場合）を足した金額です。価格差（スプレッド）と金価格の変動は含めていません。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>会社</th><th>月1万円</th><th>月3万円</th><th>年会費など（割引なし）</th><th>備考</th></tr></thead>
            <tbody>
              {CALC.map((c) => (
                <tr key={c.name}><td>{c.name}</td><td>{yen(c.m1 + c.annual)}円</td><td>{yen(c.m3 + c.annual)}円</td><td>{yen(c.annual)}円</td><td>{c.note}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">積立手数料の計算: 田中貴金属は月1万円で2.8%・月3万円で2.2%、三菱マテリアルは1,000円につき26円、徳力本店は1,000円につき25円、ネット証券3社は1.65%。石福金属興業は積立の手数料の記載がないため0円としています。年会費は割引条件（ネット利用・ペーパーレス等）を満たすと下がります。</p>

        <h3>価格差（購入は小売価格・売却は買取価格）</h3>
        <p>田中貴金属の積立は毎営業日の店頭小売価格（税込）で購入し、現金化は店頭買取価格（ネット取引はネット取引買取価格）です。最新の田中貴金属の金は、小売価格 1g {yen(RETAIL)}円・買取価格 1g {yen(BUY)}円で、差は{yen(RETAIL - BUY)}円（小売価格の{SPREAD_PCT.toFixed(2)}%）です（{pubLabel}）。積立手数料とは別に、この差が往復の費用になります。三菱マテリアル・石福金属興業も購入は小売価格で、楽天証券・SBI証券・マネックス証券も購入価格と売却価格に差があると案内しています。</p>

        <h2>現物（地金）で受け取る場合の手数料</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>会社</th><th>金のバー1本あたり</th><th>そのほか</th></tr></thead>
            <tbody>
              <tr><td>田中貴金属</td><td>1kg・500g 無料／100〜300g 16,500円／50g 13,200円／5〜20g 8,800円</td><td>引出し手数料 2,200円/回（店頭受取は無料）</td></tr>
              <tr><td>三菱マテリアル</td><td>1kg・500g 無料／100g 16,500円／5〜20g 8,800円</td><td>配送手数料 2,200円/回</td></tr>
              <tr><td>石福金属興業</td><td>1kg・500g 0円／100・200g 11,000円／50g 8,800円／5〜20g 6,600円</td><td>引出手数料 2,200円（郵送1,650円の記載もあり）</td></tr>
              <tr><td>徳力本店</td><td>バーの組み合わせを指定しない場合は無料。指定時は5〜20g 3,850円／30・50g 5,500円／100〜300g 6,600円／500g・1kg 無料</td><td>5gから受取可</td></tr>
              <tr><td>SBI証券</td><td>金1kg以上で現物転換。送料・保険料・消費税は申込時に問い合わせ</td><td>消費税は輸送会社に支払い</td></tr>
              <tr><td>楽天証券</td><td>100g 5,500円／500g 22,000円／1,000g 27,500円</td><td>本体の消費税相当額＋発送料 2,200円/回</td></tr>
              <tr><td>マネックス証券</td><td>100g 6,600円／1,000g 27,500円</td><td>消費税相当額＋送料 2,200円/回。2026年8月31日から電話受付のみ</td></tr>
            </tbody>
          </table>
        </div>

        <h2>保管方法と破綻時の扱い</h2>
        <ul>
          <li><strong>特定保管・混蔵（混合）寄託</strong>: 会社の財産と区別して保管する方法です（田中貴金属・石福・徳力・SBI証券）。田中貴金属と石福金属興業は、所有権が購入と同時に会員に移ると約款に記載しています。三菱マテリアルのFAQは、混蔵寄託では破綻時も預かった金地金を全て返却すると説明しています。</li>
          <li><strong>消費寄託</strong>: 所有権は会社に移ります（三菱マテリアルの選択肢の一つ・楽天証券・マネックス証券）。三菱マテリアル・マネックス証券は、破綻時に全量を返せない可能性があると説明しています。楽天証券は、預り残高相当分の金銭を他の資産と区分して管理すると説明しています。</li>
        </ul>

        <h2>税金（国税庁の資料）</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>対象</th><th>課税の方法</th><th>出典</th></tr></thead>
            <tbody>
              <tr><td>純金積立（金定額購入システム）で取得した金地金の譲渡</td><td>総合課税の所得（事業所得・雑所得・譲渡所得）</td><td>国税庁 No.1520 注記</td></tr>
              <tr><td>同上の所有期間・取得費</td><td>所有期間は先入先出法、取得費は総平均法に準ずる方法で差し支えない</td><td>東京国税局 文書回答（平成18年10月23日）</td></tr>
              <tr><td>金地金の譲渡所得</td><td>特別控除50万円。所有期間5年超は控除後の1/2が課税対象</td><td>国税庁 No.3161・No.3152</td></tr>
              <tr><td>金投資口座など売戻し条件付売買の利益</td><td>20.315%の源泉分離課税</td><td>国税庁 No.1520</td></tr>
            </tbody>
          </table>
        </div>
        <p>1回の売却が200万円を超えると、業者は支払調書を税務署に提出し、マイナンバーの告知が必要です（<Link href="/articles/kin-200man-mynumber/">200万円超の売却とマイナンバー</Link>）。投資信託・ETF・地金との比較は<Link href="/articles/kin-toushin-hiyou-hikaku/">金の投資信託の費用と税金</Link>でご説明しています。</p>

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
          <li>田中貴金属工業「田中貴金属 総合口座」積立・手数料一覧・売却・引出し・保管 <a href="https://tt.tanaka.jp/guide/fee/" target="_blank" rel="noopener noreferrer">tt.tanaka.jp/guide/fee/</a>・<a href="https://tt.tanaka.jp/guide/tsumitate/" target="_blank" rel="noopener noreferrer">/guide/tsumitate/</a>・<a href="https://tt.tanaka.jp/guide/storage/" target="_blank" rel="noopener noreferrer">/guide/storage/</a></li>
          <li>三菱マテリアル「マイ・ゴールドパートナー」<a href="https://gold.mmc.co.jp/howto/mgp/" target="_blank" rel="noopener noreferrer">gold.mmc.co.jp/howto/mgp/</a>・<a href="https://gold.mmc.co.jp/howto/mgp/keep.html" target="_blank" rel="noopener noreferrer">保管方法</a>・<a href="https://gold.mmc.co.jp/faq/mgp.html" target="_blank" rel="noopener noreferrer">FAQ</a></li>
          <li>石福金属興業「石福プラチナ＆純金積立」<a href="https://retail.ishifuku-kinzoku.co.jp/savings/purchase.html" target="_blank" rel="noopener noreferrer">retail.ishifuku-kinzoku.co.jp</a>・<a href="https://retail.ishifuku-kinzoku.co.jp/savings/receipt/ingot.html" target="_blank" rel="noopener noreferrer">地金での受取</a></li>
          <li>徳力本店「定額購入制度」<a href="https://www.tokuriki-kanda.co.jp/goldetc/fixed/" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a>・<a href="https://www.tokuriki-kanda.co.jp/data/upload/pdf/tesuryo.pdf" target="_blank" rel="noopener noreferrer">手数料改定のお知らせ（PDF）</a></li>
          <li>SBI証券「金・銀・プラチナ 取引の注意事項」<a href="https://search.sbisec.co.jp/v2/popwin/help/gold/attention_01.html" target="_blank" rel="noopener noreferrer">sbisec.co.jp</a></li>
          <li>楽天証券「金・銀・プラチナ 手数料」<a href="https://www.rakuten-sec.co.jp/web/gold/commission/" target="_blank" rel="noopener noreferrer">rakuten-sec.co.jp</a>・<a href="https://www.rakuten-sec.co.jp/web/gold/rule/" target="_blank" rel="noopener noreferrer">取引ルール</a></li>
          <li>マネックス証券「マネックス・ゴールド 手数料」<a href="https://info.monex.co.jp/gold/fee.html" target="_blank" rel="noopener noreferrer">info.monex.co.jp</a>・<a href="https://faq.monex.co.jp/faq/show/836?site_domain=default" target="_blank" rel="noopener noreferrer">FAQ（保管方法）</a></li>
          <li>国税庁 タックスアンサー No.1520「金融類似商品と税金」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1520.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3161「金地金の譲渡による所得」<a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3161.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a>・No.3152 <a href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3152.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
          <li>東京国税局 文書回答事例「金定額購入システムで取得した金地金を譲渡した場合の課税上の取扱いについて」<a href="https://www.nta.go.jp/about/organization/tokyo/bunshokaito/shotoku/19/01.htm" target="_blank" rel="noopener noreferrer">nta.go.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月15日。手数料・条件は変更される場合があります。ご利用前に、各社の公式サイトにて最新情報をご確認ください。金は元本保証の商品ではありません。個別の税務判断は税務署・税理士にご確認ください。</p>

        <RelatedArticles currentSlug="junkin-tsumitate-hikaku" relatedSlugs={["kin-toushin-hiyou-hikaku", "kin-kaitori-zeikin", "kin-200man-mynumber", "ingot-toha", "kin-kakaku-boraku-kako"]} />
      </article>
    </div>
  </>);
}
