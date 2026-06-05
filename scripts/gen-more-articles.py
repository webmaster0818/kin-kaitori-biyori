#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""gold-biyori 追加記事ジェネレータ（ブランド / 金貨・インゴット / ハウツー）。
実在の一般情報のみ。架空の相場・店舗名は使わない。送客先4社は既存と共通。"""
import json, os
ROOT=os.path.expanduser("~/projects/kin-kaitori-biyori")
ART=os.path.join(ROOT,"app/articles"); META=os.path.join(ROOT,"data/articles-metadata.json")
SITE="https://gold-biyori.com"

def pascal(slug): return "".join(p.capitalize() for p in slug.split("-"))+"Page"

CTA='''function CtaBox() {{
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">{cta}</h3>
      <p className="text-sm text-warm-gray text-center mb-4">複数社を比較して最高値を狙いましょう。査定はすべて無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}}'''

def page(slug,title,desc,crumb,h1,lead,body_html,faqs,related,cta,dealer_heading,dealer_intro,date="2026-06-05"):
    rel_js=", ".join(f'"{r}"' for r in related)
    faq_schema=",\n      ".join('{ "@type": "Question", name: %s, acceptedAnswer: { "@type": "Answer", text: %s } }'%(json.dumps(q,ensure_ascii=False),json.dumps(a,ensure_ascii=False)) for q,a in faqs)
    faq_jsx="\n".join('            {\n              q: %s,\n              a: %s,\n            },'%(json.dumps(q,ensure_ascii=False),json.dumps(a,ensure_ascii=False)) for q,a in faqs)
    return f'''import type {{ Metadata }} from "next";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
import RelatedArticles from "@/components/RelatedArticles";
import Image from "next/image";

function BreadcrumbSchema() {{
  const d = {{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    {{ "@type": "ListItem", position: 1, name: "ホーム", item: "{SITE}/" }},
    {{ "@type": "ListItem", position: 2, name: "記事一覧", item: "{SITE}/articles/" }},
    {{ "@type": "ListItem", position: 3, name: "{crumb}", item: "{SITE}/articles/{slug}/" }},
  ] }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}
function ArticleSchema() {{
  const d = {{ "@context": "https://schema.org", "@type": "Article",
    headline: {json.dumps(title,ensure_ascii=False)}, description: {json.dumps(desc,ensure_ascii=False)},
    datePublished: "{date}", dateModified: "{date}",
    author: {{ "@type": "Organization", name: "金買取びより編集部" }},
    publisher: {{ "@type": "Organization", name: "金買取びより" }} }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}
function FaqSchema() {{
  const d = {{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      {faq_schema}
  ] }};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(d) }}}} />;
}}

export const metadata: Metadata = {{
  title: {json.dumps(title,ensure_ascii=False)},
  description: {json.dumps(desc,ensure_ascii=False)},
}};

{CTA.format(cta=cta)}

export default function {pascal(slug)}() {{
  return (
    <>
      <FaqSchema /><BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><Link href="/articles/" className="hover:text-accent transition-colors">記事一覧</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">{crumb}</span></li>
        </ol>
      </nav>
      <div className="article-hero mb-8">
        <Image src="/images/article-hero-area.png" alt="{h1}" width={{1200}} height={{400}} className="w-full h-[200px] object-cover rounded-xl" priority />
        <div className="article-hero-overlay rounded-xl" />
      </div>
      <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">{h1}</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年6月5日</p>
        <p>{lead}</p>
{body_html}
        <CtaBox />
        <h2>よくある質問</h2>
        <div className="space-y-3 not-prose">
          {{[
{faq_jsx}
          ].map((faq) => (
            <details key={{faq.q}} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm">
                <span>{{faq.q}}</span>
                <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={{2}} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{{faq.a}}</div>
            </details>
          ))}}
        </div>
        <RelatedArticles currentSlug="{slug}" relatedSlugs={{[{rel_js}]}} />
        <DealerComparisonTable heading="{dealer_heading}" intro="{dealer_intro}" />
        <h2>まとめ</h2>
        <p>金・貴金属を高く売る最大のコツは<strong>複数業者の比較</strong>です。金相場が歴史的高値にある今こそ、手元の品を見直す好機です。まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
      </article>
    </div>
    </>
  );
}}
'''

# ===== ブランド =====
BRANDS=[
 ("chanel-kaitori","シャネル","brand","シャネルのジュエリー・時計買取相場ガイド｜ココマーク・J12を高く売る",
  "シャネルのアクセサリー・時計を高く売るコツ。ココマークのジュエリー、J12などの時計の買取で評価されるポイントと、相場の調べ方を解説します。",
  "ココマークのネックレスやJ12時計など、シャネルのアイテムは素材価値に加えてブランド価値が評価されます。",
  ["ブランドの希少性とデザイン人気が査定額を左右する","付属の保証書・ギャランティカード・箱があると高評価","K18など貴金属素材のジュエリーは金相場の高騰も追い風"],
  [("シャネルのジュエリーは金として売る方が高いですか？","ブランドジュエリーは、素材としての金価値とブランド価値のうち高い方で評価されるのが一般的です。状態や人気によってはブランド買取の方が大きく上回るため、両方の査定を比較するのが確実です。"),
   ("付属品がなくても買取できますか？","可能です。ただし保証書・ギャランティカード・箱が揃っていると査定額が上がる傾向があります。"),
   ("シャネルの時計も買取対象ですか？","J12など人気モデルは買取対象です。動作状態や付属品の有無で評価が変わります。")],
  ["cartier-kaitori","tiffany-kaitori","vancleef-kaitori","kin-necklace-kaitori","kin-takaku-uru"]),
 ("hermes-kaitori","エルメス","brand","エルメスのジュエリー・アクセサリー買取相場ガイド",
  "エルメスのジュエリーやアクセサリーを高く売るコツ。シェーヌダンクルなど人気ラインの買取で評価される点と相場の調べ方を解説します。",
  "シェーヌダンクルをはじめ、エルメスのシルバー・ゴールドアクセサリーは安定した人気があります。",
  ["人気ラインは中古市場でも需要が高く査定に有利","シルバー製品も重量と人気で評価される","K18素材は金相場上昇の恩恵を受けやすい"],
  [("エルメスのシルバーアクセサリーも売れますか？","はい。シェーヌダンクルなど人気ラインはシルバーでも需要があり、買取対象です。"),
   ("刻印が薄れていても査定できますか？","可能ですが、真贋確認のため刻印・付属品があるとスムーズで評価も安定します。"),
   ("どこで売るのが高いですか？","ブランド価値を見られる業者と金買取業者の両方で見積もりを取り、高い方を選ぶのが確実です。")],
  ["cartier-kaitori","tiffany-kaitori","vancleef-kaitori","kin-bracelet-kaitori","kin-takaku-uru"]),
 ("gucci-kaitori","グッチ","brand","グッチのジュエリー・アクセサリー買取相場ガイド",
  "グッチのジュエリー・アクセサリーを高く売るコツ。シルバー・ゴールド製品の買取で評価されるポイントと相場の調べ方を解説します。",
  "インターロッキングGなど、グッチのシルバー・ゴールドアクセサリーは幅広い世代に人気です。",
  ["定番モチーフは中古需要が安定","シルバー製品は重量・状態で評価","K18製品は金相場高騰が追い風"],
  [("グッチのシルバーリングも買取できますか？","はい。定番デザインは需要があり買取対象です。状態が良いほど高評価です。"),
   ("箱や保証書は必要ですか？","なくても買取可能ですが、あると査定額が上がる場合があります。"),
   ("金製品として売った方が得ですか？","ブランド価値と素材価値の高い方で評価されます。両方比較しましょう。")],
  ["cartier-kaitori","bvlgari-kaitori","tiffany-kaitori","kin-necklace-kaitori","kin-takaku-uru"]),
 ("dior-kaitori","ディオール","brand","ディオールのジュエリー・アクセサリー買取ガイド",
  "ディオールのアクセサリーを高く売るコツ。人気ラインの買取で評価される点と相場の調べ方を公開情報ベースで解説します。",
  "ディオールのコスチュームジュエリーやゴールドアクセサリーは安定した人気があります。",
  ["人気コレクションは中古需要が高い","状態・付属品の有無が査定を左右","貴金属素材は金相場の恩恵を受ける"],
  [("コスチュームジュエリーでも売れますか？","人気ラインは買取対象です。状態が良いほど評価されます。"),
   ("付属品なしでも大丈夫ですか？","可能です。あると査定額が上がる傾向があります。"),
   ("複数まとめて売れますか？","はい。まとめ売りは総額が大きくなり交渉しやすくなります。")],
  ["cartier-kaitori","tiffany-kaitori","vancleef-kaitori","kin-pierce-kaitori","kin-takaku-uru"]),
 ("mikimoto-kaitori","ミキモト","brand","ミキモトの真珠・ジュエリー買取相場ガイド",
  "ミキモトの真珠・ジュエリーを高く売るコツ。パールの品質評価ポイントとK18枠の金価値、相場の調べ方を解説します。",
  "ミキモトは真珠の最高峰ブランドで、パールの品質に加えてK18・Pt枠の貴金属価値も評価されます。",
  ["真珠の照り・巻き・サイズが品質評価の鍵","枠のK18・プラチナは金・プラチナ相場で評価","保証書・ケースがあると安心で高評価"],
  [("真珠のネックレスも買取できますか？","はい。ミキモトの真珠は人気が高く買取対象です。照りやサイズで評価が変わります。"),
   ("枠の金は別に評価されますか？","真珠の価値に加え、K18・プラチナ枠の貴金属価値も加味されるのが一般的です。"),
   ("古い真珠でも売れますか？","状態によりますが、ミキモトは長く需要があるため査定を受ける価値があります。")],
  ["shinju-kaitori","tiffany-kaitori","platinum-kaitori","diamond-kaitori","kin-takaku-uru"]),
 ("chopard-kaitori","ショパール","brand","ショパールのジュエリー・時計買取ガイド",
  "ショパールのジュエリー・時計を高く売るコツ。ハッピーダイヤモンドなど人気ラインの評価点と相場の調べ方を解説します。",
  "ハッピーダイヤモンドで知られるショパールは、ダイヤとK18の素材価値も高く評価されます。",
  ["ダイヤモンドの4Cと地金のK18価値が評価対象","人気ラインは中古需要が高い","鑑定書・保証書があると高評価"],
  [("ハッピーダイヤモンドは高く売れますか？","人気ラインで需要が高く、ダイヤと地金の価値が評価されます。"),
   ("鑑定書は必要ですか？","ダイヤ付きは鑑定書があると評価が安定します。"),
   ("時計も買取対象ですか？","はい。動作状態と付属品で評価が変わります。")],
  ["cartier-kaitori","diamond-kaitori","harrywinston-kaitori","kin-takaku-uru","platinum-kaitori"]),
 ("agete-kaitori","アガット","brand","アガットのジュエリー買取ガイド｜K10・K18を高く売る",
  "アガットのジュエリーを高く売るコツ。K10・K18製品の素材価値とブランド価値、相場の調べ方を解説します。",
  "アガットはK10・K18を使った華奢なジュエリーが人気で、素材の金価値も評価されます。",
  ["K10・K18の地金価値が金相場で評価される","人気の定番デザインは中古需要も高い","小さくても複数まとめると総額が伸びる"],
  [("アガットのK10も買取対象ですか？","はい。K10も金として評価され買取対象です。"),
   ("華奢で軽いものでも売れますか？","可能です。複数まとめると総額が大きくなり有利です。"),
   ("金として売るのとどちらが得ですか？","ブランド価値と素材価値の高い方で評価されます。比較がおすすめです。")],
  ["k10-kaitori","k18-kaitori","4c-kaitori","kin-necklace-kaitori","kin-takaku-uru"]),
 ("4c-kaitori","4℃（ヨンドシー）","brand","4℃の金・ジュエリー買取ガイド",
  "4℃（ヨンドシー）のジュエリーを高く売るコツ。K10・K18・Ptの素材価値と相場の調べ方を解説します。",
  "4℃は定番のプレゼントジュエリーとして人気が高く、K10・K18・プラチナの素材価値が評価されます。",
  ["K10・K18・Pt素材は金・プラチナ相場で評価","人気の定番デザインは需要が安定","箱・保証書があると評価が上がる"],
  [("4℃のネックレスは売れますか？","はい。K10・K18・Pt製品は素材価値で評価され買取対象です。"),
   ("プレゼントで貰ったものでも売れますか？","可能です。付属品があると査定がスムーズです。"),
   ("まとめて売ると得ですか？","総額が大きくなり交渉しやすくなります。")],
  ["agete-kaitori","k10-kaitori","k18-kaitori","kin-necklace-kaitori","kin-takaku-uru"]),
 ("pontevecchio-kaitori","ポンテヴェキオ","brand","ポンテヴェキオのジュエリー買取ガイド",
  "ポンテヴェキオのカラーストーンジュエリーを高く売るコツ。K18の地金価値と宝石評価、相場の調べ方を解説します。",
  "色石を生かしたデザインで知られるポンテヴェキオは、K18の地金とカラーストーンが評価されます。",
  ["K18地金の価値が金相場で評価","カラーストーンの品質も加味","保証書・ケースがあると安心"],
  [("カラーストーンも評価されますか？","デザインと石の品質に応じて評価されます。地金のK18価値と合わせて査定されます。"),
   ("古いデザインでも売れますか？","状態によりますが買取対象です。"),
   ("どこで売るのが良いですか？","ブランド・宝石を評価できる業者と金買取の両方で比較しましょう。")],
  ["cartier-kaitori","diamond-kaitori","k18-kaitori","kin-takaku-uru","kin-necklace-kaitori"]),
 ("tasaki-kaitori","タサキ（田崎真珠）","brand","タサキの真珠・ジュエリー買取ガイド",
  "タサキ（TASAKI）の真珠・ジュエリーを高く売るコツ。パール品質とK18・Pt枠の価値、相場の調べ方を解説します。",
  "タサキは真珠の名門ブランドで、パール品質に加えK18・プラチナ枠の貴金属価値が評価されます。",
  ["真珠の照り・巻き・サイズが評価の鍵","枠のK18・プラチナは地金相場で評価","保証書・ケースがあると高評価"],
  [("タサキの真珠は高く売れますか？","品質の高い真珠は需要があり買取対象です。照りやサイズで評価が変わります。"),
   ("バランスデザインのジュエリーも対象ですか？","はい。人気ラインは中古需要があります。"),
   ("枠だけでも売れますか？","K18・プラチナ枠は地金として評価され売却可能です。")],
  ["shinju-kaitori","mikimoto-kaitori","platinum-kaitori","diamond-kaitori","kin-takaku-uru"]),
 ("omega-kaitori","オメガ","brand","オメガの時計買取相場ガイド｜スピードマスター・金無垢を高く売る",
  "オメガの時計を高く売るコツ。スピードマスター・シーマスターなど人気モデルと、金無垢ケースの素材価値を解説します。",
  "オメガはスピードマスターなど人気モデルが多く、金無垢ケースは時計価値に加えて金の素材価値も評価されます。",
  ["人気モデル・動作状態・付属品で時計価値が決まる","K18金無垢ケースは金相場の高騰が追い風","保証書・箱・コマがあると高評価"],
  [("金無垢のオメガは金として売れますか？","時計としての価値と金素材の価値の高い方で評価されます。人気モデルは時計価値が上回ることが多いです。"),
   ("動かない時計でも売れますか？","可能です。金無垢なら素材価値があり、人気モデルは修理前提でも需要があります。"),
   ("付属品がないと安くなりますか？","箱・保証書があると評価が上がりますが、なくても買取可能です。")],
  ["kintokei-rolex-kaitori","k18-kaitori","kin-takaku-uru","kinka-ingot-kaitori","kaitori-houhou-hikaku"]),
 ("grandseiko-kaitori","グランドセイコー","brand","グランドセイコーの時計買取ガイド",
  "グランドセイコーの時計を高く売るコツ。人気モデルの評価点と、金無垢・付属品の有無による査定差を解説します。",
  "グランドセイコーは国産高級時計の代表で、人気モデルや金無垢ケースは安定した買取需要があります。",
  ["人気モデル・状態・付属品で時計価値が決まる","金無垢ケースは金相場で素材評価","保証書・箱があると高評価"],
  [("グランドセイコーは高く売れますか？","人気モデルは中古需要が高く、状態が良ければ安定した査定が期待できます。"),
   ("金無垢モデルは金として評価されますか？","時計価値と金素材価値の高い方で評価されます。"),
   ("古いモデルでも売れますか？","モデルによっては需要があります。査定を受ける価値があります。")],
  ["kintokei-rolex-kaitori","omega-kaitori","k18-kaitori","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("starjewelry-kaitori","スタージュエリー","brand","スタージュエリーの金・ジュエリー買取ガイド",
  "スタージュエリーのジュエリーを高く売るコツ。K10・K18・Ptの素材価値とブランド価値、相場の調べ方を解説します。",
  "スタージュエリーは上質な定番ジュエリーが人気で、K10・K18・プラチナの素材価値が評価されます。",
  ["K10・K18・Pt素材は地金相場で評価","定番デザインは中古需要が安定","箱・保証書があると評価が上がる"],
  [("スタージュエリーのネックレスは売れますか？","はい。K10・K18・Pt製品は素材として評価され買取対象です。"),
   ("ペアリングでも売れますか？","可能です。状態が良いほど評価されます。"),
   ("まとめ売りは得ですか？","総額が大きくなり交渉しやすくなります。")],
  ["4c-kaitori","agete-kaitori","k18-kaitori","platinum-kaitori","kin-takaku-uru"]),
]

# ===== 金貨・インゴット =====
COINS=[
 ("maple-leaf-kinka-kaitori","メイプルリーフ金貨","product","メイプルリーフ金貨の買取相場ガイド｜純度99.99%を高く売る",
  "カナダのメイプルリーフ金貨を高く売るコツ。純度99.99%の純金としての評価ポイントと、地金型金貨の相場の調べ方を解説します。",
  "メイプルリーフ金貨はカナダ造幣局発行の地金型金貨で、純度99.99%（K24）の純金として高く評価されます。",
  ["純度99.99%・1オンス＝約31.1gが評価の基準","地金価格に連動するため金相場が高いほど高値","傷や変色を防ぐため素手で触らずケース保管が望ましい"],
  [("メイプルリーフ金貨はいくらで売れますか？","純度99.99%・重量（1オンス＝約31.1g）に金相場を掛けた地金価値が基準です。日々の金価格で変動します。"),
   ("ケースから出すと安くなりますか？","傷や指紋は減額要因になり得ます。できるだけ元のケースのまま査定に出しましょう。"),
   ("1/10オンスなど小さい金貨も売れますか？","はい。重量に応じて評価されます。")],
  ["kinka-ingot-kaitori","vienna-kinka-kaitori","k24-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("vienna-kinka-kaitori","ウィーン金貨","product","ウィーン金貨ハーモニーの買取相場ガイド",
  "オーストリアのウィーン金貨ハーモニーを高く売るコツ。純度99.99%の純金としての評価と相場の調べ方を解説します。",
  "ウィーン金貨ハーモニーはオーストリア造幣局発行の地金型金貨で、純度99.99%の純金として評価されます。",
  ["純度99.99%・重量が評価の基準","金相場に連動し高値が出やすい","ケース・カプセル保管で状態を保つ"],
  [("ウィーン金貨は高く売れますか？","純度99.99%の純金で、重量×金相場の地金価値が基準です。高値圏の今は有利です。"),
   ("複数枚まとめて売れますか？","はい。総量が多いほど交渉しやすくなります。"),
   ("カプセルは外すべきですか？","傷防止のためカプセルのまま査定に出すのがおすすめです。")],
  ["maple-leaf-kinka-kaitori","kinka-ingot-kaitori","k24-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("eagle-kinka-kaitori","イーグル金貨","product","イーグル金貨（アメリカ）の買取相場ガイド",
  "アメリカのイーグル金貨を高く売るコツ。22金（K22相当）の地金型金貨としての評価と相場の調べ方を解説します。",
  "イーグル金貨はアメリカ発行の地金型金貨で、金の含有量1オンスを基準に評価されます（22金合金で耐久性が高い）。",
  ["金の含有量（1オンス）が評価の基準","22金合金だが純金量で査定される","金相場連動で高値が出やすい"],
  [("イーグル金貨は22金ですが純金として売れますか？","金の含有量（1オンス＝約31.1gの純金分）を基準に評価されます。合金でも純金量で査定されます。"),
   ("傷があると安くなりますか？","地金型は素材価値が中心ですが、状態が良いほど安心です。"),
   ("どこで売るのが高いですか？","金貨を扱う業者で複数見積もりを取りましょう。")],
  ["maple-leaf-kinka-kaitori","vienna-kinka-kaitori","k22-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("kangaroo-kinka-kaitori","カンガルー金貨","product","カンガルー金貨（オーストラリア）の買取ガイド",
  "オーストラリアのカンガルー金貨を高く売るコツ。純度99.99%の純金としての評価と相場の調べ方を解説します。",
  "カンガルー金貨はパース造幣局発行の地金型金貨で、純度99.99%の純金として評価されます。",
  ["純度99.99%・重量が評価基準","毎年デザインが変わる点も特徴","金相場連動で高値が出やすい"],
  [("カンガルー金貨は高く売れますか？","純度99.99%の純金で、重量×金相場が基準です。"),
   ("デザイン違いで価値は変わりますか？","地金型は基本的に素材価値で評価されます。希少年号はプレミアが付くこともあります。"),
   ("ケース保管が必要ですか？","傷防止のためケース・カプセル保管が望ましいです。")],
  ["maple-leaf-kinka-kaitori","vienna-kinka-kaitori","k24-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("tenno-kinka-kaitori","天皇陛下御在位記念金貨","product","記念金貨（天皇陛下御在位など）の買取ガイド",
  "天皇陛下御在位記念金貨など日本の記念金貨を高く売るコツ。額面と地金価値、プレミアの考え方を解説します。",
  "天皇陛下御在位記念金貨などの記念金貨は、額面ではなく金の含有量（地金価値）を基準に評価されるのが一般的です。",
  ["金の含有量（純金量）が評価の基準","額面より地金価値が高いことが多い","状態・付属ケース・証明書があると安心"],
  [("記念金貨は額面で売るべきですか？","多くの場合、金の地金価値が額面を上回ります。地金価値での買取が有利なことが多いです。"),
   ("ケースや証明書は必要ですか？","あると真贋確認がスムーズで安心です。"),
   ("プレミアは付きますか？","発行枚数の少ないものは収集価値が加わる場合があります。")],
  ["kinka-ingot-kaitori","maple-leaf-kinka-kaitori","k24-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("ingot-100g-kaitori","インゴット100g","product","金インゴット100gの買取相場ガイド",
  "金インゴット（100g）を高く売るコツ。刻印・ブランド（田中貴金属など）の評価と地金相場の調べ方を解説します。",
  "100gの金インゴットは、純度99.99%の地金として金相場に連動して評価されます。刻印やブランドも信頼性に関わります。",
  ["純度99.99%・100gの地金価値が基準","ブランド刻印（公式メーカー）があると安心","刻印・状態を保つことが重要"],
  [("インゴット100gはいくらで売れますか？","金相場（1gあたり価格）×100gが基準です。高値圏の今は高額になります。"),
   ("刻印が消えていると売れますか？","真贋確認のため刻印は重要です。元のカード・証明書があると安心です。"),
   ("どこで売るのが高いですか？","地金を扱う業者で複数見積もりを取りましょう。")],
  ["kinka-ingot-kaitori","ingot-500g-kaitori","k24-kaitori","kin-takaku-uru","kin-kaitori-souba"]),
 ("ingot-500g-kaitori","インゴット500g","product","金インゴット500g・1kgの買取ガイド",
  "金インゴット（500g・1kg）を高く売るコツ。高額地金の安全な売却方法と相場の調べ方を解説します。",
  "500g・1kgの大型インゴットは高額になるため、信頼できる業者選びと安全な取引が特に重要です。",
  ["地金価値が数百万円規模になることも","本人確認（マイナンバー）が必要な場合がある","高額のため複数業者比較と安全な受け渡しが重要"],
  [("1kgのインゴットはいくらになりますか？","金相場×1000gで、相場により1,500万円規模になることもあります。"),
   ("高額売却で税金はかかりますか？","譲渡所得として申告が必要な場合があります。詳しくは金買取の税金に関する記事をご確認ください。"),
   ("安全に売るには？","店頭での対面取引や、実績のある業者の利用がおすすめです。")],
  ["ingot-100g-kaitori","kinka-ingot-kaitori","kin-kaitori-zeikin","kin-200man-mynumber","kin-takaku-uru"]),
]

# ===== ハウツー =====
HOWTOS=[
 ("kin-kaitori-sokujitsu","即日現金化","howto","金買取で即日現金化する方法｜当日にお金を受け取る手順",
  "金を即日現金化する方法を解説。当日に現金を受け取れる店頭買取の流れ、必要な持ち物、スムーズに進めるコツを紹介します。",
  "急な出費で今日中に現金が欲しい——そんなときは店頭買取を使えば、査定後その場で現金を受け取れます。",
  ["店頭買取なら査定後すぐ現金化できる","本人確認書類を忘れず持参する","事前に相場を把握しておくとスムーズ"],
  [("金は即日で現金化できますか？","はい。店頭買取なら査定後その場で現金を受け取れます。大手チェーンは予約不要の店舗も多くあります。"),
   ("即日でも高く売れますか？","事前に一括査定で相場を把握し、高値の店舗に持ち込めば即日でも高値が狙えます。"),
   ("何を持っていけばいいですか？","本人確認書類（免許証・マイナンバーカード等）と売りたい金製品、あれば付属品です。")],
  ["kin-kaitori-mochimono","kaitori-houhou-hikaku","tentou-vs-takuhai","kin-takaku-uru","kin-kaitori-souba"]),
 ("kin-kaitori-mochimono","持ち物","howto","金買取に必要な持ち物リスト｜本人確認書類と付属品",
  "金買取に必要な持ち物を解説。古物営業法で必須の本人確認書類、査定額アップにつながる付属品まで一覧で紹介します。",
  "金を売る際は、古物営業法により本人確認書類の提示が必須です。事前に準備しておけば査定がスムーズに進みます。",
  ["本人確認書類は必須（古物営業法）","保証書・箱などの付属品は査定額アップにつながる","購入時の明細があると真贋確認がスムーズ"],
  [("金買取に身分証は必要ですか？","必須です。古物営業法により、買取時の本人確認が義務付けられています。"),
   ("使える本人確認書類は？","運転免許証・マイナンバーカード・パスポート・健康保険証などが一般的です。"),
   ("付属品はあった方がいいですか？","保証書・箱・鑑定書があると査定額が上がる場合があります。")],
  ["kin-kaitori-sokujitsu","kin-honnin-kakunin","kin-kaitori-hajimete","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kin-kaitori-tesuryo","手数料","howto","金買取の手数料を徹底解説｜査定料・精錬費に注意",
  "金買取の手数料を解説。査定料・精錬費・送料など差し引かれる費用の種類と、手数料無料の業者を選ぶコツを紹介します。",
  "「高価買取」と謳いながら、査定料や精錬費の名目で差し引く業者もあります。手数料の仕組みを知って損を防ぎましょう。",
  ["査定料・精錬費・溶解費・送料などの名目に注意","手数料無料を明記する業者を選ぶ","提示額が手取りか確認する"],
  [("金買取で手数料はかかりますか？","業者によります。査定料・精錬費などを差し引く業者もあれば、完全無料の業者もあります。"),
   ("手数料無料の業者はどう探せばいい？","公式サイトで手数料無料を明記しているか確認しましょう。当サイト掲載の4社はすべて無料です。"),
   ("提示額から引かれることはありますか？","悪質な業者では後から差し引く例もあります。手取り額を必ず確認しましょう。")],
  ["kin-kaitori-sagi","kin-takaku-uru","kaitori-houhou-hikaku","kin-kaitori-souba","tentou-vs-takuhai"]),
 ("kin-gram-keisan","グラム計算","howto","金買取の価格はこう決まる｜グラム計算の仕組みと計算方法",
  "金買取価格のグラム計算を解説。1gあたりの相場×重量×純度で求める計算式と、自分で概算する方法を紹介します。",
  "金の買取価格は「1gあたりの買取単価 × 重量」で決まります。純度ごとの単価を知れば、自分でも概算できます。",
  ["買取額＝1gあたり単価×重量が基本","純度（K24/K18など）で単価が変わる","刻印で純度、はかりで重量を確認"],
  [("金の買取価格はどう計算しますか？","純度に応じた1gあたりの買取単価に、重量（g）を掛けて算出します。例: K18が1g11,400円なら10gで114,000円が目安です。"),
   ("自分で重さを量れますか？","0.1g単位のはかりがあれば概算できます。重さの量り方の記事も参考にしてください。"),
   ("純度はどう調べますか？","刻印（K24・K18など）で確認できます。刻印がない場合は業者の比重・成分検査で判定されます。")],
  ["kin-omosa-hakarikata","kin-kaitori-souba","kin-jundo-mikata","k18-kaitori","kin-takaku-uru"]),
 ("kin-yusou-anzen","郵送・宅配の安全性","howto","金の宅配買取は安全？｜リスクと安全に売るためのチェック点",
  "金の宅配買取の安全性を解説。郵送時のリスク、補償・本人確認・キャンセル条件など、安全に利用するための確認点を紹介します。",
  "宅配買取は便利な一方、現物を送るため不安もあります。補償や返送条件を確認すれば、安全に利用できます。",
  ["配送補償の有無と上限を確認する","本人確認・キャンセル時の返送条件をチェック","梱包キット・追跡ありの業者を選ぶ"],
  [("宅配買取は安全ですか？","配送補償・本人確認がしっかりした業者を選べば安全に利用できます。追跡可能な配送を使いましょう。"),
   ("査定に納得できない場合は？","キャンセル時に無料で返送してくれるか、事前に確認しましょう。"),
   ("高額品も宅配で売れますか？","可能ですが、補償上限を確認し、高額品は店頭も検討しましょう。")],
  ["tentou-vs-takuhai","kaitori-houhou-hikaku","kin-kaitori-sagi","kin-takaku-uru","kin-kaitori-souba"]),
 ("kin-kaitori-miseinen","未成年の売却","howto","未成年は金買取できる？｜年齢制限と親권者同意のルール",
  "未成年の金買取について解説。年齢制限の理由、親権者の同意や同伴が必要なケース、トラブルを避けるための注意点を紹介します。",
  "金買取には年齢制限があり、未成年は単独で売却できないのが一般的です。ルールを知ってトラブルを避けましょう。",
  ["多くの業者で未成年単独の買取は不可","親権者の同意書・同伴が必要なケースが多い","本人確認は厳格に行われる"],
  [("未成年でも金を売れますか？","多くの業者では未成年単独の買取はできません。親権者の同意や同伴が必要です。"),
   ("なぜ年齢制限があるのですか？","古物営業法やトラブル防止の観点から、未成年の取引は制限されています。"),
   ("親の同意があれば売れますか？","業者によりますが、同意書や同伴があれば対応可能な場合があります。事前に確認しましょう。")],
  ["kin-honnin-kakunin","kin-kaitori-mochimono","kin-kaitori-sagi","kin-kaitori-hajimete","kaitori-houhou-hikaku"]),
 ("kin-honnin-kakunin","本人確認","howto","金買取の本人確認はなぜ必要？｜古物営業法と使える身分証",
  "金買取の本人確認を解説。古物営業法で義務付けられる理由、使える本人確認書類、マイナンバーが必要なケースを紹介します。",
  "金買取では本人確認が法律で義務付けられています。理由と必要書類を知っておけば、当日スムーズに売却できます。",
  ["古物営業法で本人確認が義務","免許証・マイナンバーカード等が使える","高額取引はマイナンバー提出が必要な場合がある"],
  [("なぜ本人確認が必要ですか？","古物営業法により、盗品流通防止の観点から買取時の本人確認が義務付けられています。"),
   ("どの書類が使えますか？","運転免許証・マイナンバーカード・パスポート・保険証などが一般的です。"),
   ("マイナンバーは必要ですか？","200万円超の取引などでは支払調書のためマイナンバー提出が必要な場合があります。")],
  ["kin-200man-mynumber","kin-kaitori-mochimono","kin-kaitori-zeikin","kin-kaitori-hajimete","kaitori-houhou-hikaku"]),
 ("kin-fuzokuhin-nashi","付属品なしでも売れる？","howto","保証書・箱なしでも金買取できる？｜査定への影響",
  "付属品なしの金買取を解説。保証書・箱がなくても売れるのか、査定額への影響と、それでも高く売るコツを紹介します。",
  "「保証書や箱を捨ててしまった」——付属品がなくても金製品は売却できます。素材価値が評価の中心だからです。",
  ["金は素材価値が中心のため付属品なしでも売れる","ブランド品は付属品があると評価が上がる","刻印があれば純度確認はスムーズ"],
  [("箱や保証書がなくても売れますか？","はい。金は素材価値が中心のため、付属品がなくても買取可能です。"),
   ("付属品なしだと安くなりますか？","素材買取では大きな差は出ませんが、ブランドジュエリーは付属品があると有利です。"),
   ("刻印がない場合は？","業者が比重・成分検査で純度を判定するため売却可能です。")],
  ["kin-kaitori-mochimono","kin-jundo-mikata","kin-nisemono-mikata","kin-takaku-uru","kaitori-houhou-hikaku"]),
 ("kin-mekki-mikata","金メッキの見分け方","howto","金メッキと本物の金の見分け方｜刻印・重さ・磁石でチェック",
  "金メッキと純金の見分け方を解説。刻印（GP/GFと K)の違い、重さ・磁石・変色によるセルフチェック方法を紹介します。",
  "手元のアクセサリーが本物の金かメッキか不安なときは、刻印や簡単なチェックである程度見分けられます。",
  ["刻印 GP・GF はメッキ／張り、K は純度表示","本物の金は磁石に付かない","表面の剥がれ・変色はメッキの可能性"],
  [("金メッキはどう見分けますか？","刻印に GP（金メッキ）・GF（金張り）とあればメッキ系です。K18 などの刻印は純度を示します。"),
   ("磁石で分かりますか？","金は磁石に付きません。付く場合は金以外の素材が多く含まれます（簡易判定）。"),
   ("メッキでも売れますか？","純金量がごくわずかなため、基本的に素材買取の対象外となることが多いです。")],
  ["kin-jundo-mikata","kin-nisemono-mikata","kin-omosa-hakarikata","k18-kaitori","kin-takaku-uru"]),
 ("kin-kakaku-suii","金価格の推移","howto","金価格はなぜ上がっている？｜推移の要因と今後の見通し",
  "金価格の推移と高騰の要因を解説。インフレ・為替・地政学リスクなど価格を動かす要素と、売り時の考え方を紹介します。",
  "金価格は近年歴史的な高値圏で推移しています。価格を動かす要因を知れば、売却タイミングの判断に役立ちます。",
  ["インフレ・金利・為替・地政学リスクが価格を左右","円安は国内金価格を押し上げる要因","長期的に安全資産として需要が高い"],
  [("金価格はなぜ上がっているのですか？","インフレや地政学リスクで安全資産としての需要が高まり、円安も国内価格を押し上げています。"),
   ("今は売り時ですか？","高値圏が続いていますが、最終判断は相場推移を見て行いましょう。売り時の見極めに関する記事も参考にしてください。"),
   ("これからも上がりますか？","将来予測は困難です。相場は変動するため、納得できる水準で判断しましょう。")],
  ["kin-uru-timing","kin-uridoki-2026","kin-spot-vs-kaitori","kin-kaitori-souba","kin-takaku-uru"]),
 ("kin-kaitori-yoyaku","予約・来店の流れ","howto","金買取の予約は必要？｜来店から現金受け取りまでの流れ",
  "金買取の予約要否と来店の流れを解説。予約のメリット、当日の査定手順、現金受け取りまでをステップで紹介します。",
  "金買取は予約不要の店舗も多いですが、予約すれば待ち時間なくスムーズに査定を受けられます。",
  ["予約不要の店舗も多いが予約で待ち時間を短縮","当日は受付→査定→金額提示→現金受取の流れ","本人確認書類を忘れずに"],
  [("金買取に予約は必要ですか？","予約不要の店舗も多いですが、混雑時は予約すると待ち時間を減らせます。"),
   ("査定にどれくらい時間がかかりますか？","点数にもよりますが、数点なら15〜30分程度が目安です。"),
   ("当日の流れは？","受付→本人確認→査定→金額提示→同意で現金受け取り、という流れが一般的です。")],
  ["kin-kaitori-sokujitsu","kin-kaitori-mochimono","kin-kaitori-hajimete","kaitori-houhou-hikaku","kin-takaku-uru"]),
 ("kin-kaitori-soubadori","相場通りに売るには","howto","金を相場通りに売るには？｜手取りを相場に近づけるコツ",
  "金を相場通りに高く売るコツを解説。買取単価と地金相場の差（業者マージン）を理解し、手取りを最大化する方法を紹介します。",
  "「相場はこの値段なのに、なぜ買取額は低いの？」——業者のマージンの仕組みを知れば、手取りを相場に近づけられます。",
  ["買取単価＝地金相場−業者マージン","マージンの小さい業者・まとめ売りで手取りが伸びる","一括査定で最も高い単価を探す"],
  [("買取価格が相場より低いのはなぜ？","業者の利益（マージン）が差し引かれるためです。マージンの小さい業者を選べば手取りが増えます。"),
   ("手取りを増やすには？","一括査定で単価の高い業者を探し、まとめ売りで交渉するのが効果的です。"),
   ("どこが相場に近いですか？","御徒町など専門業者は相場に近い傾向があります。複数比較が確実です。")],
  ["kin-spot-vs-kaitori","kin-takaku-uru","kin-kaitori-souba","ikkatsu-satei-hikaku","kaitori-houhou-hikaku"]),
]

def render_body(blocks, lead2=None):
    h=[]
    h.append("        <h2>ポイント</h2>\n        <ul>")
    for b in blocks: h.append(f"          <li>{b}</li>")
    h.append("        </ul>")
    return "\n".join(h)

def build(items, category, dealer_default):
    meta=json.load(open(META,encoding="utf-8"))
    existing={m["slug"] for m in meta}
    home=[]; added=[]
    for it in items:
        slug,badge,cat,title,desc,lead,blocks,faqs,related=it
        if slug in existing: print("skip:",slug); continue
        crumb=title.split("｜")[0].split("—")[0].strip()
        h1=f"【2026年最新】{crumb}" if not crumb.startswith("【") else crumb
        body=render_body(blocks)
        cta=f"{badge}の無料査定はこちら"
        dh=f"{badge}の買取で使える主要サービス比較"; di="公式情報をもとに金買取サービスを比較しました。"
        d=os.path.join(ART,slug); os.makedirs(d,exist_ok=True)
        open(os.path.join(d,"page.tsx"),"w",encoding="utf-8").write(
            page(slug,title,desc,crumb,h1,lead,body,faqs,related,cta,dh,di))
        meta.append({"slug":slug,"title":title,"shortTitle":crumb,"badge":badge,
                     "category":cat,"description":desc})
        added.append(slug)
        home.append({"href":f"/articles/{slug}/","tag":{"brand":"ブランド","product":"品目ガイド","howto":"売却ガイド"}[cat],
                     "title":h1,"description":desc[:60],"tags":["金買取",badge]})
    json.dump(meta,open(META,"w",encoding="utf-8"),ensure_ascii=False,indent=2)
    print(f"{category}: +{len(added)} (meta total {len(meta)})")
    return home

if __name__=="__main__":
    home=[]
    home+=build(BRANDS,"brand","")
    home+=build(COINS,"coin","")
    home+=build(HOWTOS,"howto","")
    json.dump(home,open("/tmp/home-more-snippet.json","w",encoding="utf-8"),ensure_ascii=False,indent=2)
    print("done")
