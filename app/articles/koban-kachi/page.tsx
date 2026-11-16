import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

/* kwexp-20261116: 「小判 価値」。出典: 日本銀行金融研究所 貨幣博物館「江戸時代の1両は今のいくら？」「お金の歴史に関するFAQ」、
   田中貴金属 RE:TANAKA「お買取りができるもの／できないもの」・「本日の貴金属価格」。確認日 2026-11-16。
   地金としての値は gold-spot-prices.json（毎朝更新）から計算。古銭としての評価額は扱わない */
const TITLE = "小判の価値はいくら？慶長・元禄・天保・万延小判に含まれる金の量と地金としての値";
const URL = "https://gold-biyori.com/articles/koban-kachi/";
const DESC = "小判の価値を、貨幣博物館が示す重さと品位（慶長・元禄・天保・万延）から計算しました。小判1枚に含まれる金の量と、田中貴金属の最新の金価格で換算した地金としての値を毎朝更新で掲載しています。";

const AU_BUY = goldData.tanaka_official.au_buyback_per_g as number;
const _pub = (goldData as Record<string, unknown>).tanaka_published_at as string | null | undefined;
const [, _pm, _pd] = goldData.date.split("-").map(Number);
const pubLabel = (() => {
  const m = _pub ? /^(\d{4})-(\d{2})-(\d{2}) (\d{1,2}:\d{2})$/.exec(_pub) : null;
  return m ? `${Number(m[1])}年${Number(m[2])}月${Number(m[3])}日 ${m[4]}公表` : `2026年${_pm}月${_pd}日取得`;
})();
const yen = (n: number) => Math.round(n).toLocaleString();

/* 重さ・品位・含有量（約）は貨幣博物館「江戸時代の1両は今のいくら？」のコラムの値 */
const KOBAN = [
  { name: "慶長小判", w: 17.9, r: 0.86, museum: "約15g" },
  { name: "元禄小判", w: 17.9, r: 0.57, museum: "約10g" },
  { name: "天保小判", w: 11.3, r: 0.57, museum: "約6g" },
  { name: "万延小判", w: 3.3, r: 0.57, museum: "約2g" },
];
const keicho = KOBAN[0].w * KOBAN[0].r;
/* 大判: 重さ165g・金の含有率68%前後（元禄52%・万延37%）＝貨幣博物館 FAQ */
const OBAN = [
  { name: "慶長・享保・天保大判（68%前後）", r: 0.68 },
  { name: "元禄大判", r: 0.52 },
  { name: "万延大判", r: 0.37 },
];

const FAQS = [
  { q: "小判1枚は今のお金でいくらですか？", a: "貨幣博物館は、江戸時代の1両の現在価値は比べるモノによって大きく異なり、簡単には言えないと説明しています。目安として、18世紀の米価で換算すると約8万円、大工の賃金で換算すると約41万円という例が示されています。これとは別に、小判に含まれる金の量に現在の金価格を掛けた値は、このページの表のとおりです。" },
  { q: "小判は種類によって金の量が違いますか？", a: "違います。貨幣博物館によると、江戸時代の約260年の間に金の品位が異なる10種類の小判が発行されました。慶長小判（重さ17.9g・品位86%）は約15g、万延小判（重さ3.3g・品位57%）は約2gの金を含みます。" },
  { q: "小判は田中貴金属で売れますか？", a: "田中貴金属の貴金属製品買取（RE:TANAKA）は、「お買取りできるもの」の貴金属工芸品に小判・大判（レプリカ）を挙げています。ただし、デザイン・ブランド・歴史的価値など、貴金属以外の価値は評価しないと明記しています。" },
  { q: "大判の「拾両」は小判10枚分という意味ですか？", a: "貨幣博物館によると、大判の表面に墨書された「拾両」は重さ（165g）を示すもので、小判10枚分という意味ではありません。両替の際は金の含有量で換算され、近世前期は概ね7両2分に相当しました。" },
];

function Schemas() {
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
    { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
    { "@type": "ListItem", position: 3, name: "小判の価値", item: URL },
  ] };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: TITLE, description: DESC, datePublished: "2026-11-16", dateModified: "2026-11-16",
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

export default function KobanKachiPage() {
  return (<><Schemas />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16" style={{ ["--subhero" as string]: "url(/images/subhero/topic-kinka.webp)", ["--subhero-m" as string]: "url(/images/subhero/topic-kinka-m.webp)" }}>
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">小判の価値</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-souba.png" alt="小判の価値の解説のイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">小判の価値 — 含まれる金の量と地金としての値</h1>
        <p className="text-warm-gray text-sm mb-8">公開: 2026年11月16日／金価格: {pubLabel}の田中貴金属の公表値（毎朝自動更新）</p>

        <p>小判の価値は、<strong>含まれる金の量</strong>で大きく変わります。貨幣博物館（日本銀行金融研究所）によると、慶長小判は重さ17.9g・品位86%で約15gの金を含み、最新の田中貴金属の金の店頭買取価格（1g {yen(AU_BUY)}円・{pubLabel}）で計算すると、<strong>地金としての値は約{yen(keicho * AU_BUY)}円</strong>です。ただしこれは金の量だけで計算した値で、古銭としての評価額ではありません。</p>

        <h2>小判4種類の金の量と地金としての値</h2>
        <p>貨幣博物館は、江戸時代の約260年の間に、金の品位（含まれる金の割合）が異なる10種類の小判が発行されたと説明しています。同館が重さと品位を示している4種類について、金の量と地金としての値を計算しました。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>小判</th><th>重さ</th><th>品位</th><th>金の量（貨幣博物館）</th><th>金の量（重さ×品位・当サイトの計算）</th><th>地金としての値（当サイトの計算）</th></tr></thead>
            <tbody>
              {KOBAN.map((k) => (
                <tr key={k.name}><td>{k.name}</td><td>{k.w}g</td><td>{Math.round(k.r * 100)}%</td><td>{k.museum}</td><td>{(k.w * k.r).toFixed(2)}g</td><td>約{yen(k.w * k.r * AU_BUY)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">地金としての値＝金の量（重さ×品位）×田中貴金属の金の店頭買取価格（{pubLabel}・1g {yen(AU_BUY)}円）。品位は貨幣博物館が示す概数で、実物の重さ・品位は1枚ごとに異なります。業者の買取価格ではありません。</p>
        <p>同じ「1両」の小判でも、慶長小判と万延小判では金の量に約{(keicho / (KOBAN[3].w * KOBAN[3].r)).toFixed(0)}倍の差があります（当サイトの計算）。貨幣博物館は、江戸時代の改鋳の目的として、物価や貨幣量の調整、改鋳で得られる利益による幕府の財政赤字の補てんなどを挙げ、正徳・享保の改鋳を除いて、金の含有量や重量を落とす改鋳が行われたと説明しています。</p>

        <h2>大判に含まれる金の量</h2>
        <p>貨幣博物館によると、大判は軍用・賞賜・贈答などのためのもので、江戸時代には5種類（慶長・元禄・享保・天保・万延）が発行されました。重さは165gで、金の含有率は68%前後とほぼ一定でした（元禄大判は52%、万延大判は37%）。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>大判</th><th>金の量（165g×含有率・当サイトの計算）</th><th>地金としての値（当サイトの計算）</th></tr></thead>
            <tbody>
              {OBAN.map((o) => (
                <tr key={o.name}><td>{o.name}</td><td>約{(165 * o.r).toFixed(0)}g</td><td>約{yen(165 * o.r * AU_BUY)}円</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>大判の表面の「拾両」は重さを示す墨書で、小判10枚分という意味ではありません。両替の際は金の含有量で換算され、近世前期は概ね7両2分に相当したとされています。</p>

        <h2>江戸時代の1両は今のいくらか</h2>
        <p>貨幣博物館は、社会の仕組みや暮らしが現在とは大きく異なるため、1両の現在価値は簡単には言えないとしたうえで、目安となる換算例を示しています。</p>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>換算の方法（貨幣博物館の例）</th><th>1両の目安</th></tr></thead>
            <tbody>
              <tr><td>米価（18世紀・米1石＝1両、米5kg 約2,700円で計算）</td><td>約81,000円</td></tr>
              <tr><td>大工の賃金（18世紀後半・1両で大工23人分、日当 約18,000円で計算）</td><td>約414,000円</td></tr>
              <tr><td>参考: 慶長小判に含まれる金の地金としての値（当サイトの計算）</td><td>約{yen(keicho * AU_BUY)}円</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-warm-gray">米価・賃金の換算例は貨幣博物館「江戸時代の1両は今のいくら？」によるもので、同館は「比べるモノによって、1両が今いくらになるか大きく異なる」と説明しています。</p>

        <h2>小判を売るときに確認しておきたいこと</h2>
        <ul>
          <li><strong>地金として売る場合</strong>: 田中貴金属のRE:TANAKAは、貴金属工芸品として小判・大判（レプリカ）を買取対象に挙げています。ただし、デザイン・ブランド・歴史的価値など、貴金属以外の価値は評価しないと明記しています。</li>
          <li><strong>銀製の小判・大判</strong>: RE:TANAKAは2021年4月以降、銀製品の買取対象を、メダル・コイン、大判・小判、盃のうち銀の含有または品位の刻印があるもの（Ag800以上）としています。</li>
          <li><strong>古銭として売る場合</strong>: 本物かどうか、保存状態などで評価が変わります。当サイトでは古銭としての評価額を掲載しておりません。売却の前に、複数の業者で査定を受けることをおすすめします。</li>
        </ul>
        <p>金の重さから買取額を計算する方法は<Link href="/articles/kin-gram-keisan/">金のグラム計算</Link>、金貨の買取については<Link href="/articles/kinka-kaitori-guide/">金貨の買取ガイド</Link>でご説明しています。</p>

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
          <li>日本銀行金融研究所 貨幣博物館「江戸時代の1両は今のいくら？―昔のお金の現在価値―」<a href="https://www.imes.boj.or.jp/cm/history/edojidaino1ryowa/" target="_blank" rel="noopener noreferrer">imes.boj.or.jp</a></li>
          <li>日本銀行金融研究所 貨幣博物館「お金の歴史に関するFAQ」（大判・貨幣改鋳）<a href="https://www.imes.boj.or.jp/cm/history/historyfaq/" target="_blank" rel="noopener noreferrer">imes.boj.or.jp</a></li>
          <li>田中貴金属工業 RE:TANAKA「お買取りができるもの／できないもの」<a href="https://gold.tanaka.co.jp/retanaka/service/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a>・「RE:TANAKA銀製品の買取対象範囲の見直しについて」<a href="https://gold.tanaka.co.jp/retanaka/service/notice.html" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
          <li>田中貴金属工業「本日の貴金属価格」<a href="https://gold.tanaka.co.jp/commodity/souba/" target="_blank" rel="noopener noreferrer">gold.tanaka.co.jp</a></li>
        </ul>
        <p className="text-sm text-warm-gray">確認日: 2026年11月16日。金価格は変動します。ご売却の際は、各業者の最新の買取価格をご確認ください。</p>

        <RelatedArticles currentSlug="koban-kachi" relatedSlugs={["kinka-kaitori-guide", "kin-gram-keisan", "k22-kaitori", "kin-jundo-mikata", "sakin-toha"]} />
      </article>
    </div>
  </>);
}
