import type { Metadata } from "next";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261118: 「訪問買取 違法」。出典: 消費者庁「特定商取引法ガイド 訪問購入」、特定商取引に関する法律（e-Gov 法令API・第58条の5〜第58条の13、第70条・第71条・第74条）、
   消費者庁「特定商取引法ガイド 執行状況」（2021年度〜本年度の処分一覧CSV・2026-11-25 処分分まで）、田中貴金属 RE:TANAKA「リサイクル価格」ページの注意書き、
   消費者庁「消費者ホットライン」。確認日 2026-11-27（初回 2026-11-18）。
   処分一覧は当サイトが取引類型「訪問購入」の行を抜き出して集計（事業者名は掲載しない） */
const TITLE = "訪問買取は違法？特定商取引法で禁止される行為・罰則と、2021〜2026年度の行政処分9件の集計";
const URL = "https://gold-biyori.com/articles/houmon-kaitori-ihou/";
const DESC = "出張買取（訪問購入）そのものは違法ではありませんが、特定商取引法は飛び込み勧誘・再勧誘・書面の不備・うその説明などを禁じています。条文ごとの罰則と、消費者庁の処分一覧から集計した2021〜2026年度の訪問購入の行政処分9件の違反内容をまとめました。";

/* 消費者庁「特定商取引法ガイド 執行状況」の処分一覧CSV（2021年度〜本年度）から、取引類型「訪問購入」の行を抜き出したもの。
   1行＝処分日×処分行政庁。業務停止・指示・業務禁止の件数はCSVの行数（法人・個人・役員等の別の命令を含む） */
const CASES = [
  { date: "2022年12月20日", gov: "神奈川県", items: "貴金属、古物の売買など", stop: "業務停止9か月", n: "停止1・指示1・禁止1", arts: "58条の5、58条の6第1項・第2項、58条の8第2項、58条の9、58条の12第1項4号" },
  { date: "2023年12月21日", gov: "東京都", items: "貴金属等の物品の買取り", stop: "業務停止9か月", n: "停止3・指示3・禁止1", arts: "58条の5、58条の6第1項〜第3項、58条の8第2項、58条の9、58条の12第1項4号" },
  { date: "2024年2月5日", gov: "埼玉県", items: "貴金属等の物品の買取り", stop: "指示のみ", n: "指示1", arts: "58条の5、58条の6第3項、58条の9" },
  { date: "2024年12月23日", gov: "九州経済産業局（国）", items: "宝石、貴金属、時計等", stop: "業務停止6か月", n: "停止1・指示1・禁止1", arts: "58条の6第1項〜第3項、58条の8第2項、58条の9" },
  { date: "2025年8月27日", gov: "東北経済産業局（国）", items: "貴金属、アクセサリー、服、食器等", stop: "業務停止6か月", n: "停止3・指示3・禁止1", arts: "58条の6第1項・第2項、58条の8第2項、58条の9" },
  { date: "2025年11月26日", gov: "消費者庁（国）", items: "宝石、貴金属、時計、ブランドバッグ、衣類等", stop: "業務停止9か月", n: "停止1・指示1・禁止1", arts: "58条の6第1項・第3項、58条の8第2項、58条の9" },
  { date: "2026年2月17日", gov: "東北経済産業局（国）", items: "貴金属、アクセサリー、宝石、食器、植木鉢等", stop: "業務停止6か月", n: "停止1・指示1・禁止1", arts: "58条の6第1項〜第3項、58条の8第2項" },
  { date: "2026年2月17日", gov: "宮城県", items: "貴金属、アクセサリー、宝石、食器、植木鉢等", stop: "業務停止6か月", n: "停止1・指示1・禁止1", arts: "58条の6第1項〜第3項、58条の8第2項" },
  { date: "2026年8月4日", gov: "九州経済産業局（国）", items: "宝石、貴金属、時計等の中古品", stop: "業務停止9か月", n: "停止3・指示3・禁止2", arts: "58条の5、58条の6第1項〜第3項、58条の8第2項、58条の9" },
];

const FAQS = [
  { q: "出張買取（訪問買取）は違法ですか？", a: "出張買取そのものは違法ではありません。特定商取引法では、事業者が自宅などで物品を買い取る取引を「訪問購入」として規制しており、勧誘の方法や書面の交付などのルールに反した場合に違法となります。" },
  { q: "査定だけを頼んだのに、他の品物も売るよう勧められました。違法ですか？", a: "消費者庁の特定商取引法ガイドは、飛び込み勧誘や、単に査定の依頼があった場合に査定を超えて勧誘を行うことは、不招請勧誘の禁止（法第58条の6第1項）に抵触すると説明しています。" },
  { q: "違反した業者にはどんな罰則がありますか？", a: "うその説明・故意に事実を告げない・威迫して困惑させる行為（法第58条の10）は3年以下の拘禁刑または300万円以下の罰金（併科あり、法人は1億円以下の罰金）、書面を交付しない・記載が不十分な書面の交付（法第58条の7・第58条の8）は6か月以下の拘禁刑または100万円以下の罰金です（法第70条・第71条・第74条）。このほか業務改善の指示や2年以内の業務停止命令などの行政処分の対象になります。" },
  { q: "自分で呼んだ出張買取でもクーリング・オフはできますか？", a: "できます。特定商取引法の適用除外は、営業のための取引や、住居からの退去に際して相手方から取引を誘引した場合などに限られます。法律で決められた書面を受け取った日から数えて8日以内であれば、書面または電磁的記録でクーリング・オフができます。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "訪問買取で違法になる行為", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-18", dateModified: "2026-11-27",
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

export default function HoumonKaitoriIhouPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-sagi.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-sagi-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">訪問買取で違法になる行為</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="訪問買取の法律の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">訪問買取で違法になる行為 — 特定商取引法の禁止事項・罰則と行政処分の集計</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月18日／法令・処分一覧は2026年11月27日に消費者庁・e-Govで確認</p>

        <p>自宅などに来てもらって品物を売る出張買取（訪問買取）は、<strong>それ自体は違法ではありません</strong>。特定商取引法では「訪問購入」として規制されており、<strong>頼まれていない勧誘（飛び込み勧誘）、断った後の再勧誘、決められた書面を渡さないこと、うその説明や威迫</strong>などが禁じられています。消費者庁の処分一覧から当サイトが集計したところ、2021年度から2026年11月25日処分分までの訪問購入の行政処分は9件で、<strong>9件すべてが貴金属を含む品物の買取</strong>でした。</p>

        <h2>特定商取引法で禁止・義務づけられていること</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>規制</th><th>内容</th><th>違反した場合</th></tr></thead>
            <tbody>
              <tr><td>氏名等の明示（第58条の5）</td><td>勧誘の前に、事業者名・勧誘目的であること・買い取ろうとする物品の種類を告げる</td><td>行政処分（指示・業務停止命令等）</td></tr>
              <tr><td>不招請勧誘の禁止（第58条の6第1項）</td><td>勧誘を頼んでいない人に、自宅等で勧誘したり、勧誘を受ける意思を確かめたりしてはならない。飛び込み勧誘や、査定の依頼を超えた勧誘が該当</td><td>行政処分</td></tr>
              <tr><td>再勧誘の禁止等（第58条の6第2項・第3項）</td><td>勧誘の前に勧誘を受ける意思を確認する。契約しないと示した人への勧誘の継続・再勧誘の禁止</td><td>行政処分</td></tr>
              <tr><td>書面の交付（第58条の7・第58条の8）</td><td>申込み・契約の際に、物品名・購入価格・クーリング・オフなどを記載した書面を渡す（注意事項は赤枠・赤字、8ポイント以上）</td><td>行政処分＋6か月以下の拘禁刑または100万円以下の罰金（第71条）</td></tr>
              <tr><td>引渡し拒絶の告知（第58条の9）</td><td>クーリング・オフ期間内に物品を受け取るときは、引渡しを拒めることを告げる</td><td>行政処分</td></tr>
              <tr><td>禁止行為（第58条の10）</td><td>事実と違うことを告げる、故意に事実を告げない、威迫して困惑させる（勧誘時・解除を妨げるとき・物品の引渡しを受けるとき）</td><td>行政処分＋3年以下の拘禁刑または300万円以下の罰金・併科あり（第70条）、法人は1億円以下の罰金（第74条）</td></tr>
              <tr><td>第三者への引渡しの通知（第58条の11・第58条の11の2）</td><td>クーリング・オフ期間内に物品を第三者に渡したときは、売った人と第三者の双方に通知する</td><td>行政処分</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 消費者庁「特定商取引法ガイド 訪問購入」、特定商取引に関する法律 第58条の5〜第58条の13・第70条・第71条・第74条（e-Gov 法令検索、2026年11月27日確認）。行政処分は、業務改善の指示（第58条の12）、2年以内の業務停止命令（第58条の13）、役員等の業務禁止命令（第58条の13の2）などです。指示に違反すると6か月以下の拘禁刑または100万円以下の罰金（第71条）、業務停止命令に違反すると3年以下の拘禁刑または300万円以下の罰金（第70条）の対象になります。「行政処分」とだけ記載した規制は、第70条〜第72条の罰則の対象として挙げられていないものです。</p>

        <h2>訪問購入の行政処分9件（当サイトの集計）</h2>
        <p>消費者庁の「特定商取引法ガイド 執行状況」に掲載されている国・都道府県の処分一覧（2021年度〜本年度）から、取引類型が「訪問購入」の記録を抜き出しました。全540行のうち訪問購入は38行で、処分日と処分行政庁の組み合わせで数えると9件です（2021年度の該当は0件）。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>処分日</th><th>処分行政庁</th><th>取扱品目（一覧の記載）</th><th>処分</th><th>違反とされた条項</th></tr></thead>
            <tbody>
              {CASES.map((c) => (
                <tr key={c.date + c.gov}><td>{c.date}</td><td>{c.gov}</td><td>{c.items}</td><td>{c.stop}（{c.n}）</td><td>{c.arts}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 消費者庁「特定商取引法ガイド 執行状況」の処分一覧（CSV出力・2026年11月27日取得、本年度は2026年11月25日処分分まで）。「停止」は業務停止命令、「指示」は指示、「禁止」は業務禁止命令の件数で、法人・個人・役員等それぞれへの命令を1件と数えています。2026年2月17日は東北経済産業局と宮城県が同じ日に処分しています。事業者名は掲載していません。</p>

        <h3>違反とされた条項の多さ（9件中）</h3>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>条項</th><th>内容</th><th>件数</th></tr></thead>
            <tbody>
              <tr><td>第58条の6第1項</td><td>不招請勧誘</td><td>8件</td></tr>
              <tr><td>第58条の8第2項</td><td>契約書面の交付義務違反（記載不備）</td><td>8件</td></tr>
              <tr><td>第58条の6第2項</td><td>勧誘意思の事前確認義務違反</td><td>7件</td></tr>
              <tr><td>第58条の6第3項</td><td>再勧誘</td><td>7件</td></tr>
              <tr><td>第58条の9</td><td>引渡し拒絶の告知義務違反</td><td>7件</td></tr>
              <tr><td>第58条の5</td><td>氏名等の明示義務違反</td><td>4件</td></tr>
              <tr><td>第58条の10</td><td>不実告知・事実不告知・威迫</td><td>0件</td></tr>
            </tbody>
          </table>
        </div>
        <p>処分の理由として最も多かったのは、<strong>頼まれていない勧誘と、契約書面の記載不備</strong>でした。ほとんどの件で「物品の引渡しを拒める」と告げていなかったことも違反とされています。うその説明や威迫（第58条の10）を理由とした訪問購入の処分は、この期間の一覧にはありませんでした。処分の多くは業務停止6〜9か月で、同時に指示と、代表者等への業務禁止命令が出ています。</p>

        <h2>違法な勧誘を受けたときの対応</h2>
        <ul>
          <li><strong>品物を渡さない</strong>: クーリング・オフ期間内（書面を受け取った日から8日以内）は、物品の引渡しを拒めます（第58条の15）。</li>
          <li><strong>クーリング・オフ</strong>: 書面（特定記録郵便・書留・内容証明郵便等）または電子メール等で通知します。手順は<Link href="/articles/kin-kaitori-sagi/">金買取の詐欺・トラブル対策</Link>でご説明しています。事業者がクーリング・オフについてうその説明をしたり威迫したりしたためにクーリング・オフしなかった場合は、8日を過ぎても可能です。</li>
          <li><strong>相談</strong>: 消費者ホットライン「188」で、最寄りの消費生活センター等につながります。消費者庁は特定商取引法違反の疑いの情報提供も受け付けています。</li>
          <li><strong>名前をかたる勧誘</strong>: 田中貴金属は、RE:TANAKA の価格ページで「電話や訪問による買取を行っていません。当社名を騙った勧誘にご注意ください」と案内しています（2026年11月27日確認）。</li>
        </ul>
        <p>出張買取・店頭買取・宅配買取の違いは<Link href="/articles/kaitori-houhou-hikaku/">買取方法の比較</Link>、売却時の本人確認は<Link href="/articles/kin-baikyaku-mynumber/">金の売却とマイナンバー</Link>をご覧ください。</p>

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
          <li>消費者庁「特定商取引法ガイド 訪問購入」<a href="https://www.no-trouble.caa.go.jp/what/doortodoorpurchases/" target="_blank" rel="noopener noreferrer">no-trouble.caa.go.jp</a></li>
          <li>消費者庁「特定商取引法ガイド 執行状況」（処分一覧）<a href="https://www.no-trouble.caa.go.jp/action/" target="_blank" rel="noopener noreferrer">no-trouble.caa.go.jp</a></li>
          <li>e-Gov 法令検索「特定商取引に関する法律」（昭和51年法律第57号）<a href="https://laws.e-gov.go.jp/law/351AC0000000057" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>消費者庁「消費者ホットライン」<a href="https://www.caa.go.jp/policies/policy/local_cooperation/local_consumer_administration/hotline/" target="_blank" rel="noopener noreferrer">caa.go.jp</a></li>
          <li>田中貴金属工業 RE:TANAKA「リサイクル価格」<a href="https://gold.tanaka.co.jp/retanaka/price/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月27日。本ページは法令と公表資料の内容をご説明するもので、個別の事案についての法的な判断ではありません。具体的なトラブルは消費生活センター等にご相談ください。</p>

        <RelatedArticles currentSlug="houmon-kaitori-ihou" relatedSlugs={["kin-kaitori-sagi", "kaitori-houhou-hikaku", "kin-baikyaku-mynumber", "kin-kaitori-tetsuzuki-guide"]} />
      </article>
    </div>
  </>);
}
