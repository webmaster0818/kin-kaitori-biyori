import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261125（20時の回）: 「アルキメデス 金」。
   出典: ウィトルウィウス『建築について』第9書 序 9〜12節（LacusCurtius 掲載の英訳）、
   Museo Galileo（ガリレオ博物館）「Galileo Galilei, La bilancetta」展示解説・所蔵品「Small hydrostatic balance」（目録番号27）、
   NYU Courant「The Golden Crown」（La Bilancetta 1586年・22歳）、田中貴金属 貴金属元素データ（Au 19.32・Ag 10.5、293K）、田中貴金属の店頭買取価格（日次）。確認日 2026-11-25。
   独自: 1kgの王冠に銀を混ぜた割合ごとの体積・あふれる水の差・口径20cmの容器での水面差・水中での見かけの重さの差、抜き取られた金と銀の今日の価格差（いずれも当サイトの計算・仮定を明記） */
const TITLE = "アルキメデスと金の王冠 — 記録に残る方法と、銀を混ぜたときにあふれる水の差を計算";
const URL = "https://gold-biyori.com/articles/archimedes-kin/";
const DESC = "アルキメデスが金の王冠の混ぜ物を見抜いた話を、ウィトルウィウス『建築について』第9書の記述で確認しました。1kgの王冠に銀を1〜3割混ぜた場合にあふれる水の差、水面の高さの差、ガリレオが考えた水中で量る天秤での重さの差を計算しています。";

const AU_BUY = goldData.tanaka_official.au_buyback_per_g as number;
const AG_BUY = goldData.tanaka_official.ag_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

const D_AU = 19.32;
const D_AG = 10.5;
const CROWN = 1000; /* 王冠の重さ（仮定）。ウィトルウィウスの記述に重さの数字はない */
const SHARES = [0, 0.1, 0.2, 0.3];
const vol = (s: number) => (CROWN * (1 - s)) / D_AU + (CROWN * s) / D_AG;
const V0 = vol(0);
const AREA = Math.PI * 10 * 10; /* 口径20cmの円筒形の容器の水面（cm²） */
const ROWS = SHARES.map((s) => {
  const v = vol(s);
  return { s, v, diff: v - V0, mm: ((v - V0) / AREA) * 10, inWater: CROWN - v, density: CROWN / v };
});
const R20 = ROWS[2];
const STOLEN_AU = CROWN * 0.2 * AU_BUY;
const ADDED_AG = CROWN * 0.2 * AG_BUY;

const FAQS = [
  { q: "アルキメデスと金の王冠の話は、どこに書かれていますか？", a: "古代ローマの建築家ウィトルウィウスの『建築について』第9書の序文に書かれています。ヒエロン王が神殿に納める金の冠を作らせたところ、金の一部が抜き取られて銀が混ぜられたという噂が立ち、アルキメデスが調べることになったという内容です。" },
  { q: "アルキメデスはどうやって混ぜ物を見抜いたのですか？", a: "ウィトルウィウスの記述では、王冠と同じ重さの金の塊と銀の塊を用意し、水を縁まで満たした容器に順に沈めて、あふれる水の量を比べました。王冠は同じ重さの金の塊より多くの水をあふれさせたため、銀が混ぜられていることと、その量が分かったとされています。" },
  { q: "「ユリイカ」とはどういう意味ですか？", a: "ギリシャ語で「見つけた」という意味です。ウィトルウィウスは、アルキメデスが浴槽に入ったときに水があふれるのを見て方法を思いつき、「見つけた」と叫びながら家に帰ったと記しています。" },
  { q: "あふれた水の量の差はどれくらいですか？", a: `王冠の重さは記録にないため、1kgと仮定して計算しました。銀を2割混ぜた場合、純金の塊よりあふれる水は約${R20.diff.toFixed(1)}cm³（約${R20.diff.toFixed(1)}g）多くなります。口径20cmの容器では、水面の高さにすると約${R20.mm.toFixed(2)}mmの差です（当サイトの計算）。` },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "アルキメデスと金の王冠", item: URL },
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

export default function ArchimedesKinPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-omosa.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-omosa-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">アルキメデスと金の王冠</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-howto.png" alt="アルキメデスと金の王冠の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">アルキメデスと金の王冠 — 記録に残る方法と、あふれる水の差</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月25日／出典の確認日: 2026年11月25日／金・銀の価格: {pubLabel}の田中貴金属の店頭買取価格（毎朝自動更新）</p>

        <p>アルキメデスが金の王冠に銀が混ぜられていることを見抜いた話は、古代ローマの建築家<strong>ウィトルウィウスの『建築について』第9書の序文</strong>に記されています。方法は、王冠と<strong>同じ重さの金の塊・銀の塊</strong>を、水を縁まで満たした容器に沈め、<strong>あふれる水の量</strong>を比べるというものです。王冠の重さは記録にないため1kgと仮定して計算すると、銀を2割混ぜた王冠は純金の塊より約{R20.diff.toFixed(1)}cm³多く水をあふれさせます（当サイトの計算）。</p>

        <h2>ウィトルウィウスが記した王冠の話</h2>
        <p>『建築について』第9書の序文（9〜12節）の内容を、当サイトで要約すると次のとおりです。</p>
        <ol>
          <li><strong>依頼</strong>: シラクサの王ヒエロンが、神殿に納める金の冠を作らせ、職人に決まった重さの金を渡しました。納められた冠の重さは、渡した金の重さと合っていました。</li>
          <li><strong>疑い</strong>: その後、金の一部が抜き取られ、同じ重さの銀が混ぜられたという噂が立ちました。王は不正を確かめる方法が分からず、アルキメデスに調べるよう頼みました。</li>
          <li><strong>着想</strong>: アルキメデスは浴場で浴槽に入ったとき、体が沈むほど水があふれ出ることに気づきました。喜んで浴槽を飛び出し、ギリシャ語で「見つけた（ユリイカ）」と叫びながら家に帰ったとされています。</li>
          <li><strong>確かめ方</strong>: 王冠と同じ重さの金の塊と銀の塊を用意し、縁まで水を満たした容器に銀の塊を沈め、あふれた分を量って注ぎ足しました。次に金の塊で同じことをすると、あふれた水は少なくなりました。最後に王冠を沈めると、同じ重さの金の塊より多くの水があふれ、その差から混ぜられた銀の量を計算して、職人の不正を明らかにしました。</li>
        </ol>
        <p className="text-sm text-warm-gray">出典: Vitruvius, <em>De Architectura</em> Book IX, Introduction 9–12（LacusCurtius 掲載の英訳）。記述に王冠の重さや、あふれた水の具体的な量の数字はありません。</p>

        <h2>銀を混ぜた割合ごとにあふれる水の差（1kgの王冠と仮定）</h2>
        <p>金の密度19.32g/cm³・銀の密度10.5g/cm³（田中貴金属の貴金属元素データ）を使い、重さ1kgのまま金の一部を銀に置き換えた場合の体積を計算しました。体積がそのまま増えた分だけ、あふれる水が多くなります。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>銀の割合（重さ）</th><th>体積</th><th>純金の塊より多くあふれる水</th><th>口径20cmの容器での水面の差</th><th>全体の密度</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.s}>
                  <td>{r.s === 0 ? "0%（純金の塊）" : `${(r.s * 100).toFixed(0)}%`}</td>
                  <td>{r.v.toFixed(1)}cm³</td>
                  <td>{r.s === 0 ? "—" : <strong>約{r.diff.toFixed(1)}cm³</strong>}</td>
                  <td>{r.s === 0 ? "—" : `約${r.mm.toFixed(2)}mm`}</td>
                  <td>{r.density.toFixed(2)}g/cm³</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">すべて当サイトの計算です。王冠の重さ1kg・容器の口径20cmは説明のための仮定です。金と銀の体積をそのまま足し合わせて計算しており、実際の合金では値が少しずれることがあります。水の密度は1g/cm³としました。</p>
        <p>差は1kgの王冠で数cm³から十数cm³にとどまり、口径20cmの容器では水面の高さにして1mmに届きません。縁まで満たした水があふれる量を、この細かさで量り分けるのは簡単ではないことが分かります。</p>

        <h2>ガリレオが考えた「小さな天秤」</h2>
        <p>ガリレオ・ガリレイは若いころの著作『小さな天秤（La bilancetta）』で、ウィトルウィウスの説明を単純すぎるとして疑い、アルキメデスはより精密な方法を使ったのではないかと考えました。NYU（ニューヨーク大学）のアルキメデス資料によると、執筆は1586年、22歳のときで、ガリレオ博物館（Museo Galileo）は、この著作はガリレオの死後に出版されたとしています。</p>
        <p>ガリレオが示したのは、物を<strong>水の中で量る天秤</strong>です。同じ重さの金と銀は空気中では釣り合いますが、水の中では体積の大きい銀のほうが大きな浮力を受けて軽くなり、釣り合いが崩れます。ガリレオ博物館は、この考え方と浮力の原理を組み合わせた17世紀半ばのガラス製の小型比重天秤（目録番号27）を所蔵しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>沈めるもの（空気中で1kg）</th><th>水の中での見かけの重さ</th><th>純金の塊との差</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.s}>
                  <td>{r.s === 0 ? "純金の塊" : `銀${(r.s * 100).toFixed(0)}%の王冠`}</td>
                  <td>{r.inWater.toFixed(1)}g</td>
                  <td>{r.s === 0 ? "—" : `約${r.diff.toFixed(1)}g軽い`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">見かけの重さ＝空気中の重さ−押しのけた水の重さ（水の密度1g/cm³）。当サイトの計算です。</p>
        <p>差の大きさは、あふれる水の量と同じです。ただし、水面のわずかな高さの違いを読むのではなく、天秤の傾きとして数gの重さの差を量る形になります。</p>

        <h2>抜き取られた金と、混ぜられた銀の価格差（今日の価格で換算）</h2>
        <p>1kgの王冠から金200gを抜き取り、銀200gを混ぜた場合を、今日の田中貴金属の店頭買取価格で換算しました（当サイトの計算）。</p>
        <ul>
          <li>抜き取った金200g: 1g {yen(AU_BUY)}円 × 200g ＝ <strong>約{yen(STOLEN_AU)}円</strong></li>
          <li>代わりに混ぜた銀200g: 1g {AG_BUY.toLocaleString()}円 × 200g ＝ 約{yen(ADDED_AG)}円</li>
          <li>差額: <strong>約{yen(STOLEN_AU - ADDED_AG)}円</strong></li>
        </ul>
        <p className="text-sm text-warm-gray">価格: 田中貴金属 {pubLabel}（金・銀の店頭買取価格、税込）。古代の価値を表すものではなく、同じ量の金と銀の価格の差を今日の値で示したものです。</p>
        <p>同じ重さでも金と銀の価格には大きな開きがあるため、重さだけでは混ぜ物を見抜けません。現在の金製品の純度は刻印や買取店の分析機器で確認するのが一般的です。家庭で水を使って確かめる方法の精度は<Link href="/articles/kin-mitsudo/">金の密度</Link>、偽物の見分け方は<Link href="/articles/kin-nisemono-mikata/">金の偽物の見分け方</Link>、刻印の読み方は<Link href="/articles/kin-jundo-mikata/">金の純度の見方</Link>でご説明しています。</p>

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
          <li>Vitruvius, <em>De Architectura</em> Book IX, Introduction 9–12（LacusCurtius）<a href="https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Vitruvius/9*.html" target="_blank" rel="noopener noreferrer">penelope.uchicago.edu</a></li>
          <li>Museo Galileo「Galileo Galilei, La bilancetta, in Opere di Galileo Galilei (facsimile)」<a href="https://exhibits.museogalileo.it/archimedes/object/GalileoGalileiBilancettaOpereGalileoGalileiFacsimile.html" target="_blank" rel="noopener noreferrer">museogalileo.it</a></li>
          <li>Museo Galileo「Small hydrostatic balance」<a href="https://catalogue.museogalileo.it/object/SmallHydrostaticBalance.html" target="_blank" rel="noopener noreferrer">museogalileo.it</a></li>
          <li>NYU Courant Institute「The Golden Crown — La Bilancetta」<a href="https://math.nyu.edu/Archimedes/Crown/bilancetta.html" target="_blank" rel="noopener noreferrer">math.nyu.edu</a></li>
          <li>田中貴金属（TANAKA）「貴金属元素データ」Au <a href="https://tanaka-preciousmetals.com/jp/library/element/au" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a>・Ag <a href="https://tanaka-preciousmetals.com/jp/library/element/ag" target="_blank" rel="noopener noreferrer">tanaka-preciousmetals.com</a></li>
          <li>田中貴金属「本日の地金価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月25日。体積・水の量・重さの差・価格差は当サイトの計算で、王冠の重さと容器の大きさは仮定の値です。</p>

        <RelatedArticles currentSlug="archimedes-kin" relatedSlugs={["kin-mitsudo", "kin-nisemono-mikata", "kin-jundo-mikata", "kin-toha", "kikinzoku-toha", "gin-kaitori"]} />
      </article>
    </div>
  </>);
}
