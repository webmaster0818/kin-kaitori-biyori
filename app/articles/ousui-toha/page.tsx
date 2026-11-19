import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261119: 「王水」。出典: LBMA「Wonders of Gold: Aqua Regia Refining」（塩酸・硝酸3:1、単独の酸では溶けない、塩化金酸、塩化ニトロシル・塩素、銀は塩化銀で溶けない、還元剤）、
   今野進「東京工場における金精製」Journal of MMIJ Vol.123 p.741-743（2007・中外鉱業 東京工場）、平山勝義「貴金属のリサイクル」資源と素材 Vol.113 p.978-981（1997）、
   大阪大学 理学研究科・理学部 Q&A「金メッキを剥がす方法」、毒物及び劇物指定令 第2条 第16号・第63号（e-Gov）。確認日 2026-11-19。
   金の量・価値の換算は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "王水とは？金を溶かす仕組みと、買い取った金の精製での使われ方（論文・公的資料で確認）";
const URL = "https://gold-biyori.com/articles/ousui-toha/";
const DESC = "王水（濃塩酸と濃硝酸を3:1で混ぜた液）が金を溶かす仕組み、溶ける金属・溶けない金属、買い取った18金を王水で溶かして純金に戻す精製工程を、LBMAの解説と国内の精製工場の論文で整理しました。家庭で扱えない理由（劇物指定）も記載しています。";

const AU_B = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 中外鉱業 東京工場の溶媒抽出法による金の生産能力 520kg/月（今野 2007） */
const CAP_KG = 520;
const PURITIES = [
  { label: "K24（999）", r: 0.999 },
  { label: "K18（750）", r: 0.75 },
  { label: "K14（585）", r: 0.585 },
  { label: "K10（417）", r: 0.417 },
];

const FAQS = [
  { q: "王水とは何ですか？", a: "濃塩酸と濃硝酸を、体積比でおよそ3対1に混ぜた液です。LBMA（ロンドン貴金属市場協会）の解説では、塩酸と硝酸はどちらも単独では金を溶かさず、混ぜた王水で金が溶けるとされています。大阪大学 理学部の Q&A も「王水（硝酸1:塩酸3）」と記載しています。" },
  { q: "王水で溶けない金属はありますか？", a: "銀は王水の中で塩化銀になり、溶け残ります（LBMA、中外鉱業 東京工場の論文）。白金族のうち、プラチナとパラジウムは王水に溶け、その他の白金族金属は残渣になると、中外鉱業 持越工場の論文（1997年）に記載されています。" },
  { q: "家で王水を作って金を確かめられますか？", a: "できません。王水の材料の塩酸（塩化水素10%超）と硝酸（10%超）は毒物及び劇物取締法の劇物で、反応では有毒な気体が出ます。大阪大学 理学部の Q&A は、王水の調製や取り扱い、廃液の処理は自宅でできる作業ではないとしています。金かどうかの確認は、買取店の査定や造幣局の分析をご利用ください。" },
  { q: "王水で金メッキだけをはがせますか？", a: "大阪大学 理学部の Q&A は、下地の金属（例: 亜鉛）のほうが王水に溶けやすく、金の膜だけを溶かすことはできないと回答しています。金メッキの見分け方は「金メッキの見分け方」のページをご覧ください。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "王水とは", item: URL },
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

export default function OusuiTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">王水とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="王水と金の精製の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">王水とは — 金を溶かす酸と、金の精製での使われ方</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月19日／金価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／資料は2026年11月19日に確認</p>

        <p><strong>王水（おうすい）は、濃塩酸と濃硝酸を体積比でおよそ3対1に混ぜた液</strong>です。塩酸と硝酸はどちらも単独では金を溶かしませんが、混ぜると金が溶けます（LBMA）。国内の金の精製工場では、買い取った18金などの宝飾品を王水で溶かし、銀などを取り除いて純金に戻す工程に使われています（中外鉱業 東京工場の論文・2007年）。材料の塩酸・硝酸は劇物に指定されており、家庭で扱えるものではありません。</p>

        <h2>王水が金を溶かす仕組み</h2>
        <ul>
          <li><strong>配合</strong>: 濃塩酸と濃硝酸を3対1。LBMAの解説では、時間がたつと溶かす力が落ちるため、使う直前に混ぜるのが一般的とされています。</li>
          <li><strong>反応</strong>: 硝酸が金を3価のイオンに酸化し、塩酸の塩化物イオンと結びついてテトラクロロ金酸イオンになります。できた液は塩化金酸の溶液です。</li>
          <li><strong>出る気体</strong>: 揮発性の塩化ニトロシルや塩素ガスが発生します（LBMA）。</li>
          <li><strong>金の取り出し</strong>: 溶けた金は、二酸化硫黄や硫酸鉄（II）などの還元剤で金属の金として沈殿させます（LBMA）。</li>
        </ul>
        <p>LBMAによると、王水は1,000年以上前から知られ、名前は金を溶かすことに由来します。</p>

        <h2>王水に溶ける金属・溶けない金属</h2>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>金属</th><th>王水での挙動</th><th>出典</th></tr></thead>
            <tbody>
              <tr><td>金（Au）</td><td>溶ける（塩化金酸の溶液になる）</td><td>LBMA、今野（2007）</td></tr>
              <tr><td>プラチナ（Pt）・パラジウム（Pd）</td><td>溶ける</td><td>平山（1997）</td></tr>
              <tr><td>その他の白金族</td><td>残渣として残る</td><td>平山（1997）</td></tr>
              <tr><td>銀（Ag）</td><td>塩化銀になり溶け残る。銀が多いと金の一部が包まれて溶け切らないことがある</td><td>LBMA、今野（2007）</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">平山（1997）は、白金族の原料を王水で処理して金・プラチナ・パラジウムを溶かし、その他の白金族金属を残渣とする工程を記載しています。</p>

        <h2>買い取った18金が純金に戻るまで（国内の精製工場の例）</h2>
        <p>中外鉱業 東京工場（東京都大田区京浜島・2005年8月稼働）の論文（今野 2007）は、王水を使った金の精製工程を次のように記載しています。主な原料は、同社が東京（御徒町・新宿）・大阪・名古屋・甲府の各支店で買い取った18金などの高品位の宝飾品です。</p>
        <ol>
          <li>原料をるつぼに入れて電気炉で溶かし、水に落として細かい粒にする</li>
          <li>粒を王水で溶かし、塩化銀をろ過して分ける</li>
          <li>溶媒抽出で金を有機相に移し、希塩酸で洗って不純物を除く</li>
          <li>還元剤を加えて金を取り出し、乾燥させる（抽出から洗浄まで約3時間）</li>
          <li>溶かして鋳造し、1kgの金インゴットにする</li>
        </ol>
        <p>同論文によると、全工程は3日で終わり、溶媒抽出法での金の生産能力は月520kgです。廃液は中和・ろ過してから下水道に流し、排ガスはアルカリで洗ってから大気に出しています。プリント基板やコネクタのような金を含む部品も、粉砕などの前処理の後に王水で溶かし、硫酸ヒドラジンで還元して粗金として回収されます（平山 1997）。</p>

        <h2>品位別に含まれる金の量と、精製で取り出せる金の価値</h2>
        <p>王水による精製で取り出すのは、製品に含まれる金そのものです。品位ごとの金の量を、最新の田中貴金属の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）で換算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>品位</th><th>製品10gに含まれる金</th><th>その金の値（当サイトの計算）</th><th>製品1kgに含まれる金</th></tr></thead>
            <tbody>
              {PURITIES.map((p) => (
                <tr key={p.label}><td>{p.label}</td><td>{(10 * p.r).toFixed(2)}g</td><td>約{yen(10 * p.r * AU_B)}円</td><td>{yen(1000 * p.r)}g</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">計算方法（当サイト）: 製品の重さ×品位（千分率）×田中貴金属の金の店頭買取価格。買取店の査定額は、精製の費用や各社の条件が差し引かれるため、この値より低くなります。品位の表示は<Link href="/articles/kin-jundo-mikata/">金の純度の見方</Link>をご覧ください。</p>
        <p>東京工場の月520kgの金を最新の店頭買取価格で換算すると、約{(CAP_KG * 1000 * AU_B / 1e8).toFixed(0)}億円分にあたります（当サイトの計算・毎朝更新）。</p>

        <h2>家庭で扱えない理由</h2>
        <ul>
          <li><strong>材料が劇物</strong>: 毒物及び劇物指定令は、塩化水素を含有する製剤（10%以下を除く）と、硝酸を含有する製剤（10%以下を除く）を劇物に指定しています（第2条 第16号・第63号）。</li>
          <li><strong>有毒な気体が出る</strong>: 王水からは塩化ニトロシルや塩素が出ます（LBMA）。大阪大学 理学部の Q&A は、金属と激しく反応すると液の温度が上がり、二酸化窒素などの有害な気体の発生も激しくなると説明しています。</li>
          <li><strong>金メッキだけを溶かすことはできない</strong>: 同 Q&A は、下地の亜鉛のほうが金より王水に溶けやすく、金の膜だけを溶かし出すことはできないと回答しています。</li>
        </ul>
        <p>金かどうか・品位がいくつかを確かめたい場合は、買取店の査定（分析機器）を利用するか、造幣局の品位証明・分析の制度があります。見分け方の目安は<Link href="/articles/kin-nisemono-mikata/">金の偽物の見分け方</Link>、メッキ製品については<Link href="/articles/kin-mekki-mikata/">金メッキの見分け方</Link>と<Link href="/articles/k24gp-toha/">24KGPとは</Link>でご説明しています。</p>

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
          <li>LBMA「Wonders of Gold: Aqua Regia Refining」<a href="https://www.lbma.org.uk/wonders-of-gold/items/aqua-regia-refining" target="_blank" rel="noopener noreferrer">lbma.org.uk</a></li>
          <li>今野進「東京工場における金精製」Journal of MMIJ Vol.123 p.741-743（2007）<a href="https://www.jstage.jst.go.jp/article/journalofmmij/123/12/123_12_741/_article/-char/ja" target="_blank" rel="noopener noreferrer">jstage.jst.go.jp</a></li>
          <li>平山勝義「貴金属のリサイクル」資源と素材 Vol.113 p.978-981（1997）<a href="https://www.jstage.jst.go.jp/article/shigentosozai1989/113/12/113_12_978/_article/-char/ja" target="_blank" rel="noopener noreferrer">jstage.jst.go.jp</a></li>
          <li>大阪大学 理学研究科・理学部 Q&amp;A「金メッキを剥がす方法」<a href="https://www.sci.osaka-u.ac.jp/ja/wp-content/themes/rigaku_r/qa-pdf/qa18.pdf" target="_blank" rel="noopener noreferrer">sci.osaka-u.ac.jp</a></li>
          <li>毒物及び劇物指定令（昭和40年政令第2号）第2条 <a href="https://laws.e-gov.go.jp/law/340CO0000000002" target="_blank" rel="noopener noreferrer">laws.e-gov.go.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月19日。精製工程は各論文の発表時点の記載です。</p>

        <RelatedArticles currentSlug="ousui-toha" relatedSlugs={["kin-toha", "kin-jundo-mikata", "kin-nisemono-mikata", "kin-mekki-mikata", "k24gp-toha", "platinum-toha"]} />
      </article>
    </div>
  </>);
}
