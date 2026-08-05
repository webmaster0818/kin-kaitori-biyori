import type { Metadata } from "next";
import { GoldSpotPriceCard } from "@/components/GoldSpotPriceCard";
import { WeightPriceTable } from "@/components/WeightPriceTable";
import { TodayPriceAnswer } from "@/components/TodayPriceAnswer";
import Link from "next/link";
import RelatedArticles from "@/components/RelatedArticles";
import { GoldSimulator } from "@/components/GoldSimulator";
import { GoldPriceTrend } from "@/components/GoldPriceTrend";
import { ExpertQA } from "@/components/ExpertQA";
import Image from "next/image";

function BreadcrumbSchema() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://gold-biyori.com/" },
      { "@type": "ListItem", position: 2, name: "記事一覧", item: "https://gold-biyori.com/articles/" },
      { "@type": "ListItem", position: 3, name: "金の延べ棒・インゴット買取ガイド", item: "https://gold-biyori.com/articles/kin-nobebo-kaitori/" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

function FaqSchema() {
  const faqData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "2026年に金インゴットの買取・売却は規制されますか？", acceptedAnswer: { "@type": "Answer", text: "個人の金売却を新たに規制する制度は2026年時点で確認されていません（令和8年度税制改正大綱に該当項目なし）。200万円超売却時の支払調書・マイナンバー告知など従来の制度は継続します。なお2026年3月公布の犯収法施行規則改正により、2027年4月から買取店での本人確認がICチップ読み取り原則に厳格化されます。" } },
    { "@type": "Question", name: "金の延べ棒（インゴット）はどこで売れますか？", acceptedAnswer: { "@type": "Answer", text: "田中貴金属、三菱マテリアルなどの地金商のほか、買取大吉、おたからや、なんぼやなどの買取専門店でも売却可能です。買取専門店は手数料無料の場合が多く、複数社の比較がしやすいためおすすめです。" } },
    { "@type": "Question", name: "インゴットの買取に手数料はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "業者によります。田中貴金属などの地金商では、500g未満のインゴットに対してバーチャージ（小口手数料）として数千円〜1万円程度かかる場合があります。当サイト掲載の4社は査定料・手数料無料です。" } },
    { "@type": "Question", name: "インゴットを売ったら税金はかかりますか？", acceptedAnswer: { "@type": "Answer", text: "はい、売却益は譲渡所得として課税対象です。年間50万円の特別控除があり、5年超保有なら課税額が半減します。また、1回200万円を超える取引では支払調書が税務署に提出されます。" } },
    { "@type": "Question", name: "刻印がないインゴットでも売れますか？", acceptedAnswer: { "@type": "Answer", text: "刻印がないインゴットでも買取可能です。X線蛍光分析装置（XRF）で純度を判定できます。ただし、公認ブランド（LBMA認定）の刻印がある方が信頼性が高く、スムーズに高値で買い取ってもらえます。" } },
    { "@type": "Question", name: "金の延べ棒を分割して売却できますか？", acceptedAnswer: { "@type": "Answer", text: "物理的に切断することは可能ですが、一般的には推奨されません。インゴットは公認ブランドの刻印・シリアルナンバーが価値の一部なので、切断するとその価値が失われます。税金対策のための分割売却は、年をまたいで複数回に分けて売る方法が一般的です。" } },
  ]};
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}

function ArticleSchema() {
  const d = { "@context": "https://schema.org", "@type": "Article", headline: "【2026年7月最新】金の延べ棒・インゴット買取ガイド — 相場・税金・2026年の買取規制まで徹底解説", datePublished: "2026-04-24", dateModified: "2026-07-29", author: { "@type": "Organization", name: "金買取びより" }, publisher: { "@type": "Organization", name: "金買取びより", url: "https://gold-biyori.com" } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />;
}

export const metadata: Metadata = { title: "【2026年7月最新】金の延べ棒・インゴット買取ガイド — 相場・税金・2026年の買取規制まで徹底解説", description: "金の延べ棒（インゴット・ゴールドバー）の最新買取相場、重量別の買取価格目安、売却時の税金、そして2026年の買取規制の最新動向（変わること・変わらないこと）を一次情報ベースで徹底解説。", alternates: { canonical: "https://gold-biyori.com/articles/kin-nobebo-kaitori/" } };

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">インゴットの無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">インゴットの買取価格は業者によって差があります。複数社の比較で最高値を狙いましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinNobeboKaitoriPage() {
  return (<><FaqSchema />
      <BreadcrumbSchema /><ArticleSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6"><ol className="flex items-center gap-1"><li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li><li className="breadcrumb-sep" /><li><span className="text-foreground">金の延べ棒・インゴット買取ガイド</span></li></ol></nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-souba.png" alt="金の相場・買取イメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年7月最新】金の延べ棒・インゴット買取ガイド</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年7月29日</p>

        <TodayPriceAnswer purity="k24" />

        <p>金の延べ棒（インゴット・ゴールドバー）は、金を投資・資産保全目的で保有する最も一般的な形態です。2026年現在、金相場が歴史的な高値を更新し続けており、<strong>インゴットの売却を検討する方が急増</strong>しています。</p>

        <p>「金の延べ棒はどこで売れる？」「インゴットの買取価格はいくら？」「売却時の税金はどうなる？」——この記事では、金インゴットの売却に関する<strong>相場・税金・おすすめ売却先</strong>をすべて解説します。</p>

        <p>この記事を読めば以下のことがわかります。</p>
        <ul>
          <li>金インゴットの最新買取相場（重量別の価格目安）</li>
          <li>インゴットを売る方法と売却先の選び方</li>
          <li>売却時の税金（譲渡所得・支払調書・マイナンバー）</li>
          <li>インゴットのブランドと刻印の見方</li>
          <li>高く売るためのコツと注意点</li>
        </ul>

        <GoldSpotPriceCard purity="k24" />

        <WeightPriceTable purities={["k24"]} />


        <h2>金インゴットとは</h2>

        <p>金インゴットは、溶かした金を鋳型に流し込んで成形した金塊のことです。<strong>延べ棒、ゴールドバー</strong>とも呼ばれます。純度は99.99%（K24/フォーナイン）が標準で、投資用・資産保全用として世界中で流通しています。</p>

        <h3>主な金インゴットのブランド</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>ブランド（精錬業者）</th><th>特徴</th></tr>
            </thead>
            <tbody>
              <tr><td>田中貴金属工業</td><td>国内最大手。LBMA公認ブランドで流通性が高い</td></tr>
              <tr><td>三菱マテリアル</td><td>大手非鉄金属メーカー。LBMA公認</td></tr>
              <tr><td>日本マテリアル</td><td>貴金属専門商社。LBMA公認</td></tr>
              <tr><td>徳力本店</td><td>老舗貴金属メーカー。LBMA公認</td></tr>
              <tr><td>石福金属興業</td><td>老舗貴金属メーカー。LBMA公認</td></tr>
            </tbody>
          </table>
        </div>

        <p>金の買取相場は毎日変動します。最新の目安は本ページ冒頭の「本日の買取相場」カードと重量別早見表（毎日自動更新）でご確認ください。100gのインゴットで約152万円、1kgのインゴットで約1,520万円という<strong>歴史的な高額</strong>になっています。</p>

        <CtaBox />

        <h2>金インゴットを売る方法</h2>

        <h3>売却先の比較</h3>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>売却先</th><th>メリット</th><th>デメリット</th><th>手数料</th></tr></thead>
            <tbody>
              <tr><td><strong>地金商（田中貴金属等）</strong></td><td>信頼性が高い、買取価格を公開</td><td>500g未満はバーチャージ、店舗が限られる</td><td>バーチャージ：数千円〜1.6万円</td></tr>
              <tr><td><strong>買取専門店（買取大吉等）</strong></td><td>手数料無料、全国に店舗多数</td><td>地金商より若干低い場合あり</td><td>無料</td></tr>
              <tr><td><strong>一括査定（ヒカカク！）</strong></td><td>複数業者を比較して最高値が探せる</td><td>実物査定までに時間がかかる</td><td>無料</td></tr>
            </tbody>
          </table>
        </div>

        <h3>バーチャージ（小口手数料）に注意</h3>

        <p>田中貴金属や三菱マテリアルなどの地金商では、500g未満のインゴットを売却する際に<strong>バーチャージ（小口手数料）</strong>が発生します。金額は5gバーで約4,400円、100gバーで約16,500円程度です。</p>

        <p>一方、買取大吉やおたからやなどの<strong>買取専門店はバーチャージが不要</strong>です。特に小型のインゴット（5g〜100g）を売る場合は、手数料無料の買取専門店の方がトータルで有利になることがあります。</p>

        <h2>インゴット売却時の税金</h2>

        <h3>譲渡所得の計算</h3>

        <p>金インゴットの売却益は<strong>譲渡所得</strong>として課税されます。</p>

        <div className="table-wrapper">
          <table>
            <thead><tr><th>保有期間</th><th>計算式</th></tr></thead>
            <tbody>
              <tr><td><strong>5年以内（短期）</strong></td><td>売却額 - 取得費 - 売却費用 - 50万円（特別控除）= 課税対象額</td></tr>
              <tr><td><strong>5年超（長期）</strong></td><td>（売却額 - 取得費 - 売却費用 - 50万円）x 1/2 = 課税対象額</td></tr>
            </tbody>
          </table>
        </div>

        <p>年間50万円の特別控除があるため、売却益が50万円以内であれば実質非課税です。</p>

        <h3>200万円超の支払調書</h3>

        <p>1回の取引で売却額が<strong>200万円を超える</strong>場合、業者は税務署に<strong>支払調書</strong>を提出する義務があります。マイナンバーの提示も必要です。</p>

        <blockquote>
          <p><strong>税金対策のヒント：</strong>年間50万円の控除を活用するため、<strong>年をまたいで分割売却</strong>する方法があります。例えば100gのインゴットを一括で売ると控除は50万円のみですが、2年に分けて50gずつ売れば各年に50万円の控除が使えます。ただし、分割売却の可否や最適な方法は税理士に相談することをおすすめします。</p>
        </blockquote>

        <h3>取得費の証明</h3>

        <p>インゴットを売却する際には、<strong>購入時の領収書・契約書</strong>が重要です。取得費を証明できない場合、売却額の5%が取得費として計算され、<strong>税金が大幅に高くなる</strong>可能性があります。</p>

        <h2 id="kisei-2026">金インゴットの買取規制【2026年の最新動向】— 変わること・変わらないこと</h2>

        <p><strong>結論: 2026年に「個人の金売却」を新たに規制する制度は、政府の一次情報では確認されていません。</strong>令和8年度(2026年度)税制改正の大綱(2025年12月26日閣議決定)で金地金に関わる項目は、買取事業者側の本人確認書類の範囲に特定在留カード等を加えるという事務的な変更のみです。売却時の支払調書の基準額(200万円)や譲渡所得の課税ルールに変更はありません。</p>

        <p>一方で、金価格の高騰を背景に周辺の制度は動いています。売る人に関係する順に整理します。</p>

        <h3>2026年前後で変わること</h3>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr><th>時期</th><th>変わること</th><th>売る人への影響</th></tr>
            </thead>
            <tbody>
              <tr><td>2025年11月〜</td><td>税関が金密輸の「更なる取締強化」を開始（臨時税関長会議での財務大臣指示による総合対策）</td><td>正規の売却には影響なし。密輸品と知りながらの買取・運搬は重罪</td></tr>
              <tr><td>2026年8月</td><td>「金地金等の譲渡の対価の支払調書」の書面様式が変更</td><td>買取店側の事務変更のみ。売る人の手続きは変わらず</td></tr>
              <tr><td>2026年11月1日</td><td>訪日客向け免税制度がリファンド方式（出国時返金）へ移行</td><td>免税品の国内不正転売対策。国内での通常の売却には影響なし</td></tr>
              <tr><td>2027年4月1日</td><td>犯罪収益移転防止法の施行規則改正が全面施行（2026年3月公布）。本人確認がICチップ読み取り原則に厳格化</td><td>買取店での本人確認がより厳格に（マイナンバーカード等のIC読み取りが原則化）</td></tr>
            </tbody>
          </table>
        </div>

        <h3>変わらないこと（現行規制の要点）</h3>

        <ul>
          <li><strong>200万円超の売却</strong>: 買取店へのマイナンバー告知と、税務署への支払調書提出（所得税法224条の6・2012年から継続）</li>
          <li><strong>現金200万円超の取引</strong>: 犯収法に基づく取引時確認（氏名・住居・生年月日・取引目的など。取引を分割しても一の取引とみなされます）</li>
          <li><strong>古物営業法の本人確認</strong>: 買取店は1万円以上の買い受け時に相手方の確認義務</li>
          <li><strong>売却益の課税</strong>: 総合課税の譲渡所得・特別控除50万円・5年超保有で課税対象が1/2（<Link href="/articles/kin-kaitori-zeikin/" className="text-accent hover:underline">税金の詳細</Link>）</li>
        </ul>

        <p>実務上のポイント: 規制強化の狙いは密輸・不正転売への対策であり、<strong>正規の売却は本人確認書類（200万円超の場合はマイナンバーも）を用意すれば従来どおりスムーズ</strong>です。買取店側の確認が厳格になるほど、書類を揃えて行くことが高額取引を早く済ませるコツになります。</p>

        <p className="text-xs text-warm-gray">出典: <a href="https://www.mof.go.jp/tax_policy/tax_reform/outline/fy2026/08taikou_04.html" target="_blank" rel="noopener noreferrer">財務省「令和8年度税制改正の大綱」</a> / <a href="https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/hotei/1251.htm" target="_blank" rel="noopener noreferrer">国税庁「金地金等の譲渡の対価の支払調書」</a> / <a href="https://www.npa.go.jp/sosikihanzai/jafic/hourei/data/hougaiyou20251202.pdf" target="_blank" rel="noopener noreferrer">警察庁JAFIC「犯収法の概要」</a> / <a href="https://www.customs.go.jp/mizugiwa/gold/reinforce2.html" target="_blank" rel="noopener noreferrer">税関「金密輸の更なる取締強化について」</a>（いずれも2026年7月29日確認）</p>

        <h3>規制・税金・手続きの関連ガイド</h3>

        <div className="flex flex-wrap gap-2 not-prose">
          <Link href="/articles/kin-kaitori-zeikin/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">金買取の税金ガイド</Link>
          <Link href="/articles/kin-baikyaku-mynumber/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">マイナンバーと200万円の境界</Link>
          <Link href="/articles/kin-kaitori-tetsuzuki-guide/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">買取手続き完全ガイド</Link>
          <Link href="/articles/kin-souzoku-baikyaku/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">相続した金の売却</Link>
          <Link href="/articles/ingot-100g-kaitori/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">インゴット100gの買取</Link>
          <Link href="/articles/kinka-ingot-kaitori/" className="text-sm bg-cream border border-accent/40 rounded-lg px-3 py-2 hover:bg-accent/10">金貨・インゴット買取ガイド</Link>
        </div>

        <h2>インゴットを高く売る5つのコツ</h2>

        <ol>
          <li><strong>複数業者に見積もりを取る：</strong>インゴットは高額なので、1gあたり数十円の差が数万円〜数十万円の差になります。</li>
          <li><strong>手数料を比較する：</strong>地金商のバーチャージと買取専門店の無料査定、トータルでどちらが有利か計算しましょう。</li>
          <li><strong>出張買取を活用する：</strong>高額なインゴットを持ち歩くのはリスクがあります。出張買取なら自宅で安全に売却できます。</li>
          <li><strong>税金を考慮して売却タイミングを決める：</strong>年をまたいだ分割売却で特別控除を最大限活用しましょう。</li>
          <li><strong>付属品を保管しておく：</strong>保証書、品質保証カード、購入時の箱を保管しておくと、スムーズに売却できます。</li>
        </ol>

        <CtaBox />

        <h2>インゴット買取に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            { q: "2026年に金インゴットの買取は規制されますか？", a: "個人の売却を新たに規制する制度は確認されていません。200万円超の支払調書・マイナンバー告知など従来ルールは継続。2027年4月からは犯収法改正で買取店の本人確認がIC読み取り原則になります（詳細は本文の規制セクション参照）。" },
            { q: "金の延べ棒はどこで売れますか？", a: "田中貴金属などの地金商、買取大吉やおたからやなどの買取専門店、ヒカカク！の一括査定など、複数の売却先があります。手数料の有無を比較して選びましょう。" },
            { q: "インゴットの買取に手数料はかかりますか？", a: "地金商では500g未満のインゴットにバーチャージがかかる場合があります。買取専門店は基本的に手数料無料です。" },
            { q: "インゴットを売ったら税金はかかりますか？", a: "売却益は譲渡所得として課税対象です。年間50万円の特別控除があり、5年超保有なら課税額が半減します。" },
            { q: "刻印がないインゴットでも売れますか？", a: "X線分析で純度を判定できるため売却可能です。ただしLBMA認定ブランドの刻印がある方がスムーズです。" },
            { q: "インゴットを持ち歩くのが怖いのですが？", a: "出張買取を利用すれば自宅で安全に売却できます。ウリエルやティファナの出張買取は無料です。" },
          ].map((faq) => (
            <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-5 font-medium text-sm"><span>{faq.q}</span><svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
              <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>

        <GoldPriceTrend />
        <ExpertQA category="product" />
        {/* p0-winner-cluster */}
        <div className="not-prose my-8">
          <GoldSimulator />
          <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
          <div className="flex flex-wrap gap-2">
          <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット買取（喜平・テニス）</Link>
          <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
          <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
          <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
          <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
          <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
          </div>
        </div>
        <RelatedArticles
          currentSlug="kin-nobebo-kaitori"
          relatedSlugs={["k24-kaitori", "kinseido-kaitori-guide", "k22-kaitori", "kinka-ingot-kaitori", "kin-spot-vs-kaitori", "kin-takaku-uru", "kin-kaitori-souba", "kaitori-houhou-hikaku", "tokyo-kin-kaitori", "osaka-kin-kaitori", "cartier-kaitori", "kin-necklace-kaitori", "kin-bracelet-kaitori"]}
        />

        <h2>まとめ</h2>
        <p>2026年現在、金インゴットの買取価格は歴史的な高値を記録しています。100gのインゴットで約152万円、1kgで約1,520万円です。</p>
        <p>インゴットは高額取引になるため、<strong>業者選び・手数料の比較・税金対策</strong>が特に重要です。</p>
        <ol>
          <li><strong>複数業者に見積もりを取る（1gあたりの差が大きな金額差になる）</strong></li>
          <li><strong>バーチャージの有無を比較する</strong></li>
          <li><strong>税金を考慮して売却計画を立てる（必要に応じて税理士に相談）</strong></li>
        </ol>
        <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>でインゴットの最新買取価格を確認してみてください。査定は無料です。</p>
      </article>
    </div>
  </>);
}
