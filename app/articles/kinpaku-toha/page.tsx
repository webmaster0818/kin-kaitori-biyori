import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261120: 「金箔とは」。出典: 金沢市立安江金箔工芸館「金箔の性質」（石川県箔商工業協同組合で規定した合金の割合・縁付箔の厚さ平均0.1μm程度・縁付と断切）・「金箔の歴史」、
   金沢市 文化財保護課「縁付金箔製造」・石川県「選定保存技術 縁付金箔製造」（厚さ1万分の1mm・澄1000分の1mm・澄工程/箔工程/紙仕込み工程）、
   石川県「金沢の金箔製作用具」（延金→澄打ち×4回→仕上澄）、金沢市「伝統工芸」資料（金箔99%以上が金沢産）・創造都市申請書（1987年 金閣寺修復に約20万枚・日光東照宮 約2万枚）、
   文化遺産オンライン（選定保存技術 2014-10-23）、文化庁 報道発表（2020年12月 ユネスコ無形文化遺産「伝統建築工匠の技」）・リーフレット、
   日本食品化学研究振興財団「既存添加物名簿収載品目リスト」（令和7年8月25日現在・86 金）、徳力本店 物性表（金 19.32g/cm³）。確認日 2026-11-20。
   色別の金の値・1gで覆える面積は当サイトの計算（価格は gold-spot-prices.json・毎朝更新） */
const TITLE = "金箔とは — 厚さ1万分の1mm・金の割合（1号色〜4号色）・作り方と、金箔に含まれる金の値【毎朝更新】";
const URL = "https://gold-biyori.com/articles/kinpaku-toha/";
const DESC = "金箔とは何かを、金沢市・石川県・文化庁の公式資料で整理しました。厚さ1万分の1mm、純金1号色〜4号色の金・銀・銅の割合、縁付と断切の違い、作り方と、色ごとの金の値（田中貴金属の価格で毎朝更新）をまとめています。";

const T = goldData.tanaka_official;
const AU_B = T.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 安江金箔工芸館「金箔の性質」: 石川県箔商工業協同組合で規定した合金の割合（%） */
const COLORS = [
  { name: "純金5毛色", au: 98.912, ag: 0.495, cu: 0.593 },
  { name: "純金1号色", au: 97.666, ag: 1.357, cu: 0.977 },
  { name: "純金2号色", au: 96.721, ag: 2.602, cu: 0.677 },
  { name: "純金3号色", au: 95.795, ag: 3.535, cu: 0.670 },
  { name: "純金4号色", au: 94.438, ag: 4.901, cu: 0.661 },
  { name: "三歩色", au: 75.534, ag: 24.466, cu: 0 },
  { name: "定色", au: 58.824, ag: 41.176, cu: 0 },
];
const D_AU = 19.32; // g/cm³（徳力本店 物性表・純金）
const THICK_CM = 0.1e-4; // 0.1μm＝1万分の1mm
const areaPer1g = 1 / D_AU / THICK_CM / 10000; // m²（純金で計算）

const FAQS = [
  { q: "金箔の厚さはどれくらいですか？", a: "金沢市・石川県の資料では、金箔の厚さは1万分の1mm（0.1μm）、途中の段階の「澄（ずみ）」は1000分の1mmとされています。安江金箔工芸館は、縁付箔の厚さは平均で0.1μm程度で、断切箔は縁付箔よりわずかに厚いと言われているとしています。" },
  { q: "金箔は純金ですか？", a: "純金そのものではありません。安江金箔工芸館によると、純金のままでは延びにくいため銀・銅を加えており、石川県箔商工業協同組合の規定では、純金1号色は金97.666%、純金4号色は金94.438%です。金の割合が75.534%の三歩色、58.824%の定色もあります。" },
  { q: "金箔はどこで作られていますか？", a: "金沢市の資料によると、全国生産高のうち金箔の99%以上が金沢産です（資料により98%以上・100%近くとする記載もあります）。" },
  { q: "金箔は食べられますか？", a: "日本食品化学研究振興財団の既存添加物名簿収載品目リスト（令和7年8月25日現在）に「金」（別名 金箔）が収載されており、用途は着色料・製造用剤とされています。食品用として販売されている製品をご利用ください。" },
  { q: "金箔を使った製品は買い取ってもらえますか？", a: `金箔は非常に薄く、1gの純金で約${areaPer1g.toFixed(2)}m²を覆える計算になります（当サイトの計算）。工芸品の表面に貼られた金箔に含まれる金はごくわずかで、地金としての価値は小さくなります。地金の価値は重さと品位で決まるため、買取店に確認してください。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "金箔とは", item: URL },
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

export default function KinpakuTohaPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-jundo.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-jundo-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">金箔とは</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="金箔とは何かの解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金箔とは — 厚さ・金の割合・作り方と、含まれる金の値</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月20日／価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）／出典の確認日: 2026年11月20日</p>

        <p><strong>金箔は、金に少量の銀・銅を加えた合金を、厚さ1万分の1mm（0.1μm）まで打ち延ばしたもの</strong>です（金沢市・石川県の資料）。純金のままでは延びにくいため銀・銅を加えるとされ、石川県箔商工業協同組合の規定では、よく使われる純金1号色〜4号色の金の割合は<strong>94.438%〜97.666%</strong>です。金沢市の資料によると、全国生産高のうち金箔の99%以上が金沢産で、金沢の縁付金箔製造は文化庁の選定保存技術（2014年選定）に選ばれ、2020年にはユネスコ無形文化遺産「伝統建築工匠の技」の構成技術の一つとして記載されました。</p>

        <h2>金箔の種類と金の割合（色ごとの金の値・毎朝更新）</h2>
        <p>金箔は、金・銀・銅の割合によって色の名前が分かれています。石川県箔商工業協同組合が規定した割合と、各合金1gに含まれる金の値を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>種類</th><th>金</th><th>銀</th><th>銅</th><th>合金1gに含まれる金の値</th></tr></thead>
            <tbody>
              {COLORS.map((c) => (
                <tr key={c.name}><td>{c.name}</td><td>{c.au.toFixed(3)}%</td><td>{c.ag.toFixed(3)}%</td><td>{c.cu ? `${c.cu.toFixed(3)}%` : "—"}</td><td>{yen((AU_B * c.au) / 100)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">出典: 金沢市立安江金箔工芸館「金箔の性質」（石川県箔商工業協同組合で規定した合金の割合）。右列は、田中貴金属の金の店頭買取価格（1g {yen(AU_B)}円・{pubLabel}）×金の割合で求めた当サイトの計算で、銀・銅の値は含めていません。実際の買取価格ではありません。</p>
        <p>工芸館は、銀が多いと赤みが消え、銅を加えると赤みを帯びると説明しています。純金4号色（金94.438%）は、宝飾品の表示でいえばK22（品位916）より金の割合が高く、K24（品位999）には届きません。品位の区分は<Link href="/articles/kin-jundo-mikata/">金の純度の見方</Link>にまとめています。</p>

        <h2>厚さと、1gの金で覆える面積</h2>
        <ul>
          <li><strong>厚さ</strong>: 金箔は1万分の1mm、途中の段階の「澄（ずみ）」は1000分の1mmです（金沢市・石川県）。安江金箔工芸館は、縁付箔の厚さを平均0.1μm程度とし、断切箔は縁付箔よりわずかに厚いと言われているとしています。</li>
          <li><strong>1gで覆える面積</strong>: 純金の密度19.32g/cm³（徳力本店の物性表）と厚さ0.1μmから計算すると、<strong>1gの純金で約{areaPer1g.toFixed(2)}m²</strong>を覆えます（当サイトの計算。実際の金箔は銀・銅を含み、厚さも一定ではないため目安です）。</li>
        </ul>
        <p>このため、工芸品・仏具・食品などに貼られた金箔に含まれる金は、ごくわずかです。金の重さと体積の関係は<Link href="/articles/kin-mitsudo/">金の密度</Link>をご覧ください。</p>

        <h2>金箔の作り方（縁付金箔）</h2>
        <p>金沢市・石川県の資料によると、縁付金箔の製造は大きく<strong>澄工程・箔工程・紙仕込み工程</strong>の3つに分かれます。</p>
        <ol>
          <li><strong>延金（のべきん）</strong>: 銀・銅を加えた金の合金を延槌で帯状に延ばし、2寸角に切ります。</li>
          <li><strong>澄打ち</strong>: 4寸2分角の澄打紙に約200枚を重ねて打ち、これを4回繰り返して「打上澄」にします。6寸3分角に切りそろえたものが「仕上澄」（厚さ1000分の1mm）です。</li>
          <li><strong>箔工程</strong>: 特殊な手漉きの和紙に澄を挟んでさらに打ち延ばし、厚さ1万分の1mmの金箔にします（文化庁のリーフレット）。</li>
          <li><strong>抜き仕事</strong>: 打ち上がった箔を、一時保管用の冊子へ挟み替えます。</li>
        </ol>
        <p className="text-sm text-warm-gray">縁付と断切の違い（安江金箔工芸館・文化遺産オンライン）: 縁付は、泥土を混ぜた手漉きの雁皮紙を灰汁で処理した打紙を使い、台紙が箔より一回り大きく縁取るように見えることが名前の由来です。断切は、グラシン紙を打紙に使い、打ち上がった箔を合紙と重ねたまま正方形に裁断します。</p>

        <h2>金沢の金箔の公的な位置づけ</h2>
        <ul>
          <li><strong>生産</strong>: 金沢市の資料では、全国生産高のうち金箔は99%以上、銀箔・洋箔は100%が金沢産です（同市の別の資料では金箔98%以上と記載）。</li>
          <li><strong>選定保存技術</strong>: 縁付金箔製造は2014年10月23日に文化財保護法の選定保存技術に選定され、保存団体は金沢金箔伝統技術保存会です（文化遺産オンライン）。</li>
          <li><strong>ユネスコ無形文化遺産</strong>: 2020年12月、選定保存技術17件で構成する「伝統建築工匠の技：木造建造物を受け継ぐための伝統技術」が代表一覧表に記載され、縁付金箔製造はその構成技術の一つです（文化庁）。</li>
          <li><strong>文化財の修復</strong>: 金沢市の資料によると、1987年に修復された京都の金閣寺では金沢箔が約20万枚、日光東照宮では補修のたびに約2万枚が使われています。</li>
        </ul>

        <p>金箔のほかに、金で表面を覆う方法には金めっき・金張りがあります。表示の違いは<Link href="/articles/kin-mekki-mikata/">金メッキの見分け方</Link>と<Link href="/articles/k24gp-toha/">24KGPとは</Link>、金そのものの性質は<Link href="/articles/kin-toha/">金とは</Link>に掲載しています。</p>

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
          <li>金沢市立安江金箔工芸館「金箔の性質」<a href="https://www.kanazawa-museum.jp/kinpaku/property/index.htm" target="_blank" rel="noopener noreferrer">kanazawa-museum.jp</a></li>
          <li>金沢市「縁付金箔製造」<a href="https://www4.city.kanazawa.lg.jp/soshikikarasagasu/bunkazaihogoka/gyomuannai/3/1/1/siteibunkazai/6/5855.html" target="_blank" rel="noopener noreferrer">city.kanazawa.lg.jp</a>・石川県「縁付金箔製造」<a href="https://www.pref.ishikawa.lg.jp/kyoiku/bunkazai/senteihozongijutsu/entsukekinpaku.html" target="_blank" rel="noopener noreferrer">pref.ishikawa.lg.jp</a>・石川県「金沢の金箔製作用具」<a href="https://www.pref.ishikawa.lg.jp/kyoiku/bunkazai/minzoku/1-2.html" target="_blank" rel="noopener noreferrer">pref.ishikawa.lg.jp</a></li>
          <li>金沢市「伝統工芸」資料 <a href="https://www4.city.kanazawa.lg.jp/material/files/group/30/100324dentou-jpn.pdf" target="_blank" rel="noopener noreferrer">city.kanazawa.lg.jp</a>・ユネスコ創造都市ネットワーク申請書 <a href="https://www4.city.kanazawa.lg.jp/material/files/group/30/2-Application-Jpn.pdf" target="_blank" rel="noopener noreferrer">city.kanazawa.lg.jp</a></li>
          <li>文化遺産オンライン「縁付金箔製造」<a href="https://online.bunka.go.jp/heritages/detail/293130" target="_blank" rel="noopener noreferrer">online.bunka.go.jp</a>・文化庁 報道発表（2020年12月）<a href="https://www.bunka.go.jp/koho_hodo_oshirase/hodohappyo/pdf/92709001_01.pdf" target="_blank" rel="noopener noreferrer">bunka.go.jp</a></li>
          <li>日本食品化学研究振興財団「既存添加物名簿収載品目リスト」（令和7年8月25日現在）<a href="https://www.ffcr.or.jp/webupload/kizontenkameibo_2025_0825.pdf" target="_blank" rel="noopener noreferrer">ffcr.or.jp</a></li>
          <li>徳力本店「貴金属材料（線・板・クラッド）物理特性（参考値）」<a href="https://www.tokuriki-kanda.co.jp/industrial/pdf/industrial-material-001.pdf" target="_blank" rel="noopener noreferrer">tokuriki-kanda.co.jp</a>・田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月20日。</p>

        <RelatedArticles currentSlug="kinpaku-toha" relatedSlugs={["kin-toha", "kin-mitsudo", "kin-jundo-mikata", "kin-mekki-mikata", "k24gp-toha", "koban-kachi"]} />
      </article>
    </div>
  </>);
}
