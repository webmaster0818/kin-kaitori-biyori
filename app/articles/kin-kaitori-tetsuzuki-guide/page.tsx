import type { Metadata } from "next";
import goldData from "@/data/gold-spot-prices.json";
import Link from "next/link";
import DealerComparisonTable from "@/components/DealerComparisonTable";
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
      { "@type": "ListItem", position: 3, name: "金買取の手続き（未成年・予約・当日の流れ）", item: "https://gold-biyori.com/articles/kin-kaitori-tetsuzuki-guide/" },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />;
}

const [, _pm, _pd] = goldData.date.split("-").map(Number);
const priceDateJa = `2026年${_pm}月${_pd}日`;

function ArticleSchema() {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "金・貴金属の買取は何歳から？未成年・18歳19歳の扱いと主要10社の年齢規定｜当日の流れ",
    description: "金買取は未成年でも売れるのか、予約は必要か、当日は受付から現金受け取りまでどのくらいかかるのか——手続きまわりの疑問に絞って解説します。持ち物や本人確認書類の詳細は「金買取に必要なもの」ページをご覧ください。",
    datePublished: "2026-07-03",
    dateModified: "2026-10-17",
    author: { "@type": "Organization", name: "金買取びより編集部" },
    publisher: { "@type": "Organization", name: "金買取びより" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />;
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "何歳から金を売れますか？", acceptedAnswer: { "@type": "Answer", text: "民法上の成年年齢は18歳のため、18歳以上であれば法律上は単独で売却できます。ただし店の規定は分かれており、買取大吉・おたからやは18歳以上なら可、大黒屋・ティファナは18歳以上でも高校生は不可、なんぼや・ウリエルは18歳・19歳に同意書等を求め、コメ兵は20歳未満を不可としています（各社公式・2026年10月17日確認）。" } },
      { "@type": "Question", name: "18歳・19歳は親の同意書が必要ですか？", acceptedAnswer: { "@type": "Answer", text: "法律上は不要です（民法4条で18歳から成年）。ただし、なんぼや・ウリエルは18歳・19歳に同意書または委任状を求めると公式に記載しています。同意書が要らない店（買取大吉・おたからや・大黒屋〔高校生除く〕など）もあるため、店の規定をご確認ください。" } },
      { "@type": "Question", name: "年齢を偽って売ったらどうなりますか？", acceptedAnswer: { "@type": "Answer", text: "民法21条により、成年だと信じさせるために詐術を用いた場合、未成年者でもその契約を取り消せなくなります。古物商は古物営業法15条で年齢を確認する義務があり、大阪府の条例は身分証などで青少年でないことを確認する義務も定めています。" } },
      { "@type": "Question", name: "金買取に身分証は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "必須です。古物営業法15条により、古物商は買取時に住所・氏名・職業・年齢を確認する義務があります（対価1万円未満は法律上不要ですが、店の方針で求められることがあります）。運転免許証・マイナンバーカード・パスポートなどが使えます。従来の健康保険証は、買取大吉が「令和7年12月2日（2025年12月2日）より身分証明書として認められなくなった」と公式に告知しています。" } },
      { "@type": "Question", name: "マイナンバーの提出が必要になるのはどんなときですか？", acceptedAnswer: { "@type": "Answer", text: "金地金・金貨などで1回200万円を超える取引では、業者が税務署に支払調書を提出するため、マイナンバーの提示が必要になる場合があります。" } },
      { "@type": "Question", name: "未成年でも金を売れますか？", acceptedAnswer: { "@type": "Answer", text: "18歳未満は、買取大吉・おたからや・なんぼや・ウリエル・ティファナ・大黒屋などの公式規定で買取不可です。民法5条で未成年者の契約は親権者の同意がなければ取り消せること、東京都・大阪府などの条例が古物商に18歳未満からの買受けを禁じていることが理由です。ブランドリバリューは親権者の同意書または同伴で対応すると公式に記載しています。" } },
      { "@type": "Question", name: "金買取に予約は必要ですか？", acceptedAnswer: { "@type": "Answer", text: "予約不要の店舗も多いですが、混雑時は予約すると待ち時間を減らせます。出張買取は日程調整が必要です。" } },
      { "@type": "Question", name: "査定にどれくらい時間がかかりますか？", acceptedAnswer: { "@type": "Answer", text: "点数にもよりますが、数点なら15〜30分程度が目安です。受付→本人確認→査定→金額提示→同意で現金受け取り、という流れが一般的です。" } },
      { "@type": "Question", name: "保証書や箱がなくても売れますか？", acceptedAnswer: { "@type": "Answer", text: "売れます。金は素材価値で査定されるため付属品なしでも問題ありません。ただし保証書・箱・鑑定書があると、特にブランド品で査定額が上がる場合があります。" } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />;
}


export const metadata: Metadata = {
  title: "金・貴金属の買取は何歳から？未成年・18歳19歳の扱いと主要10社の年齢規定｜当日の流れ",
  description: "金・貴金属は18歳未満は単独で売れず、18・19歳も店により同意書や高校生不可の規定があります。大吉・なんぼや・おたからや等10社の公式の年齢規定、民法5条の取消権、古物営業法の本人確認、予約と当日の流れを解説。",
  alternates: { canonical: "https://gold-biyori.com/articles/kin-kaitori-tetsuzuki-guide/" },
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8 not-prose">
      <h3 className="font-bold text-base mb-3 text-center">金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">手続きはどの業者もシンプルです。複数社の査定額を比較することをおすすめします。査定はいずれも無料です。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KinKaitoriTetsuzukiGuidePage() {
  return (
    <>
      <FaqSchema />
      <BreadcrumbSchema />
      <ArticleSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">金買取の手続き（未成年・予約・当日の流れ）</span></li>
          </ol>
        </nav>

        <div className="article-hero mb-8">
          <Image src="/images/article-hero-area.png" alt="金買取の手続きイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">金・貴金属の買取は何歳から？未成年・18歳19歳の扱いと主要10社の年齢規定｜当日の流れ</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新: {priceDateJa}（相場は毎朝自動更新）</p>

          <p>金買取の手続きで実際に迷いやすいのは、「<strong>何歳から売れるのか（未成年でも売れるのか）</strong>」「予約は必要か」「当日どのくらい時間がかかるのか」の3点です。この記事はその3点に絞って答えます。</p>

          <p>この記事では、以下の内容をご説明します。</p>
          <ul>
            <li><a href="#nenrei" className="text-accent hover:underline">何歳から売れるか</a>（主要10社の公式の年齢規定・18歳19歳の扱い・<a href="#houritsu" className="text-accent hover:underline">法律の根拠</a>）</li>
            <li>予約の要否と、予約したほうがよいケース</li>
            <li>受付から現金受け取りまでの所要時間</li>
          </ul>

          {/* necessary-items-split: 「必要なもの/本人確認書類」は kin-kaitori-hajimete が受け皿。
              同じクエリで両ページが競合していたため、こちらから明示的に送る（2026-08-05 GSC実測で分離） */}
          <div className="bg-gold-bg border border-accent/30 rounded-xl p-4 my-6 text-sm">
            🔀 <strong>持ち物・本人確認書類</strong>を詳しく知りたい方は 
            <Link href="/articles/kin-kaitori-hajimete/" className="text-accent underline font-bold">金買取に必要なもの（初めてガイド）</Link>
             をご覧ください。このページは<strong>未成年の可否・予約の要否・当日の所要時間</strong>を扱います。
          </div>

          <h2 id="nenrei">金・貴金属は何歳から売れる？ — 法律は18歳、店の規定は「18歳」「高校生不可」「20歳」の3通り</h2>

          <p><strong>結論：18歳未満は単独では売れません。18歳・19歳は法律上は成年ですが、店によっては同意書が要る・高校生は不可・20歳以上のみ、という独自の規定があります。</strong>宝石・ブランド品など貴金属以外でも同じ扱いです。</p>

          <h3>主要買取店の公式の年齢規定（2026年10月17日確認）</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>買取店</th><th>公式の記載（要旨）</th><th>出典</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>買取大吉</strong></td><td>18歳未満は買取不可</td><td><a href="https://www.kaitori-daikichi.jp/shop-kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">店頭買取ページ</a></td></tr>
                <tr><td><strong>おたからや</strong></td><td>未成年（18歳未満）は買取不可。「保護者の方と一緒に来店をしてください」</td><td><a href="https://www.otakaraya.jp/first/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">初めての方へ</a></td></tr>
                <tr><td><strong>なんぼや</strong></td><td>18歳未満は買取不可（結婚している未成年者も不可）。18歳・19歳は本人の物なら親権者の同意書、父母の物なら委任状が必要</td><td><a href="https://nanboya.com/tentou-kaitori/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">店頭買取ページ</a>・<a href="https://nanboya.com/wp-content/themes/nanboya/pdf/douisho-nanboya.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">同意書PDF</a></td></tr>
                <tr><td><strong>ウリエル</strong></td><td>18歳未満は買取不可。18歳・19歳は同意書または委任状が必要</td><td><a href="https://www.uriel-cuore.co.jp/event/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">催事・買取案内</a></td></tr>
                <tr><td><strong>ティファナ</strong></td><td>18歳未満、および高校生・高専学校生は買取不可</td><td><a href="https://www.tifana.net/visitlp/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">出張買取ページ</a></td></tr>
                <tr><td><strong>大黒屋</strong></td><td>高校生を除く18歳以上から申込可</td><td><a href="https://kaitori.e-daikoku.com/faq.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">よくある質問</a></td></tr>
                <tr><td><strong>ブランドリバリュー</strong></td><td>18歳未満・高校生は原則不可だが、親権者同意書＋続柄のわかる書類の持参、または親権者の同伴で対応（宅配は不可）。18〜19歳（高校生除く）は同意書不要、ただし取引金額に上限あり</td><td><a href="https://brandrevalue.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">公式サイト</a></td></tr>
                <tr><td><strong>バイセル</strong></td><td>未成年者からの買取は不可（店舗ページ。年齢の定義は記載なし）</td><td><a href="https://www.buysell-kaitori.com/store/kinshicho-parco/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">店舗ページ（例）</a></td></tr>
                <tr><td><strong>福ちゃん</strong></td><td>利用は成年に限る（利用規約 第7条）</td><td><a href="https://fuku-chan.info/terms.php" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">利用規約</a></td></tr>
                <tr><td><strong>コメ兵</strong></td><td>20歳未満は買取不可</td><td><a href="https://komehyo.jp/kaitori/faq/" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">よくある質問</a></td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warm-gray">※各社公式ページの記載を2026年10月17日に確認したものです。規定は変わることがあるため、来店前に各社へご確認ください。ヒカカク！（一括査定）は申込先の各業者の規定に従います。</p>

          <h3>年齢別の早見表</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr><th>年齢</th><th>法律上</th><th>主要店の対応（上の表より）</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>20歳以上</strong></td><td>成年。単独で契約可</td><td>上の表のどの店でも年齢による制限なし</td></tr>
                <tr><td><strong>18歳・19歳</strong></td><td>成年（民法4条）。単独で契約可</td><td>大吉・おたからや・大黒屋（高校生除く）は可／なんぼや・ウリエルは同意書等が必要／ティファナ・大黒屋は高校生不可／コメ兵は不可</td></tr>
                <tr><td><strong>18歳未満</strong></td><td>未成年。親権者の同意なしの契約は取り消せる（民法5条）</td><td>ほぼすべて不可。ブランドリバリューのみ同意書または同伴で対応と明記</td></tr>
              </tbody>
            </table>
          </div>

          <h3 id="houritsu">法律の根拠 — 民法・古物営業法・青少年条例</h3>

          <ul>
            <li><strong>成年年齢は18歳</strong>（<a href="https://laws.e-gov.go.jp/law/129AC0000000089" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">民法4条</a>）。2022年4月1日に20歳から引き下げられました（<a href="https://www.moj.go.jp/MINJI/minji07_00218.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">法務省</a>）。</li>
            <li><strong>未成年者の取消権</strong>（民法5条）。未成年者が法定代理人（親権者）の同意なく結んだ契約は、あとから取り消せます（2項）。ただし親が処分を許した財産（小遣いなど）は自由に処分できます（3項）。買取店が未成年との取引を断る主な理由はこの取消権です。</li>
            <li><strong>年齢を偽った場合</strong>（民法21条）。成年だと信じさせるために「詐術を用いたとき」は取り消せません。年齢を偽って売ると、あとで取り消すこともできなくなります。</li>
            <li><strong>営業を許された未成年者</strong>（民法6条）は、その営業に関しては成年者と同じ扱いです。個人が手持ちの金製品を売る場面には通常あてはまりません。</li>
            <li><strong>古物営業法の本人確認</strong>（<a href="https://laws.e-gov.go.jp/law/324AC0000000108" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">古物営業法15条1項</a>）。古物商は買い受ける際、相手の住所・氏名・職業・年齢を確認する義務があります。対価の総額が1万円未満なら確認は不要ですが（同条2項・<a href="https://laws.e-gov.go.jp/law/407M50400000010" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">施行規則16条</a>）、店の方針で少額でも身分証の提示を求めることがあるため、持参をおすすめします。</li>
            <li><strong>18歳未満からの買受けを禁じる条例</strong>。<a href="https://www.seikatubunka.metro.tokyo.lg.jp/documents/d/seikatubunka/30kennzennjyourei" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">東京都青少年の健全な育成に関する条例15条</a>は古物商が18歳未満から古物を買い受けることを禁じ、保護者の同行・同意・委託がある場合は除外しています。<a href="https://www.pref.osaka.lg.jp/houbun/reiki/reiki_honbun/k201RG00000487.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">大阪府青少年健全育成条例23条</a>は、身分証の提示などで青少年でないことを確認する義務まで定めています。<a href="https://www.pref.aichi.jp/police_reiki/reiki_honbun/u393RG00000398.html" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">愛知県青少年保護育成条例18条2項</a>は、保護者の委託・同意等がない場合に青少年から古物を受け取らないよう求めています。</li>
          </ul>

          <p>相続・贈与で受け取った金製品でも、売る人が18歳未満であれば同じ制限がかかります。確実なのは、親権者が自分の名義で売却するか、親権者が同伴して対応してもらえる店を選ぶことです。</p>

          <h3>親権者の同意書に書いてもらう内容</h3>

          <p>なんぼやが公開している<a href="https://nanboya.com/wp-content/themes/nanboya/pdf/douisho-nanboya.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">同意書PDF</a>の記載事項は次のとおりです。他店でも概ね同じ項目が求められます。</p>

          <ul>
            <li>売却する人の氏名・生年月日・年齢</li>
            <li>売却する品物と点数</li>
            <li>親権者による直筆の同意文言・記載日</li>
            <li>親権者の署名・押印・住所・連絡先・続柄</li>
          </ul>

          <p>書式は店舗ごとに指定があるため、<strong>先に電話して用紙の有無を聞く</strong>のが確実です。親権者の本人確認書類の写しや、続柄のわかる書類（住民票など）を求められることもあります。</p>

          <h2>当日の流れ — 受付から現金受け取りまで</h2>

          <p>金買取の手続きはどの業者もシンプルで、店頭なら<strong>数点で15〜30分程度</strong>が目安です。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>ステップ</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>1. 受付</strong></td><td>売りたい品物を渡す（予約不要の店舗も多い）</td></tr>
                <tr><td><strong>2. 本人確認</strong></td><td>本人確認書類を提示（古物営業法15条。年齢もここで確認されます）</td></tr>
                <tr><td><strong>3. 査定</strong></td><td>刻印確認・計量・純度測定（X線分析など）</td></tr>
                <tr><td><strong>4. 金額提示</strong></td><td>純度×重量×当日相場を基に買取額を提示。根拠の説明を求めることをおすすめします</td></tr>
                <tr><td><strong>5. 同意・現金受け取り</strong></td><td>金額に同意すればその場で現金化（宅配買取は振込）</td></tr>
              </tbody>
            </table>
          </div>

          <p>提示額に納得できなければ、<strong>その場で売らずに持ち帰って他社と比較して問題ありません</strong>。査定・キャンセルは無料の業者がほとんどです。</p>

          <h2 id="mochimono">持ち物は本人確認書類だけ（詳しくは別ページ）</h2>

          <p>当日<strong>必須の持ち物は、有効期限内の本人確認書類1点と売りたい金製品だけ</strong>です。本人確認は古物営業法15条による義務です（法律上は対価1万円未満なら不要ですが、店の方針で少額でも求められることがあります）。保証書・箱・購入明細があれば査定に有利ですが、無くても売却できます。</p>

          <div className="bg-gold-bg border border-accent/30 rounded-xl p-4 my-6 text-sm">
            使える書類の一覧・宅配買取のときの扱い・200万円超でマイナンバーが要るケースは
            <Link href="/articles/kin-kaitori-hajimete/" className="text-accent underline font-bold">金買取に必要なもの（本人確認書類と当日の流れ）</Link>
            にまとめています。
          </div>

          <CtaBox />

          <h2>予約は必要？ — 不要が多いが、予約にはメリットも</h2>

          <p>店頭買取は<strong>予約不要の店舗が多い</strong>ですが、以下の場合は予約がおすすめです。</p>

          <ul>
            <li><strong>混雑しやすい週末・大型連休：</strong>予約で待ち時間を短縮できる</li>
            <li><strong>点数が多い・高額品がある：</strong>査定担当者を確保してもらえてスムーズ</li>
            <li><strong>出張買取：</strong>日程調整（予約）が必須</li>
            <li><strong>宅配買取：</strong>宅配キットの取り寄せが必要な場合が多い</li>
          </ul>

          <p>店頭・出張・宅配それぞれの特徴は<Link href="/articles/kaitori-houhou-hikaku/" className="text-accent hover:underline">買取方法4つの比較</Link>で解説しています。</p>

          <CtaBox />

          <h2>手続きに関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "何歳から金を売れますか？",
                a: "民法上の成年年齢は18歳のため、18歳以上であれば法律上は単独で売却できます。ただし店の規定は分かれており、買取大吉・おたからやは18歳以上なら可、大黒屋・ティファナは18歳以上でも高校生は不可、なんぼや・ウリエルは18歳・19歳に同意書等を求め、コメ兵は20歳未満を不可としています（各社公式・2026年10月17日確認）。",
              },
              {
                q: "18歳・19歳は親の同意書が必要ですか？",
                a: "法律上は不要です（民法4条で18歳から成年）。ただし、なんぼや・ウリエルは18歳・19歳に同意書または委任状を求めると公式に記載しています。同意書が要らない店（買取大吉・おたからや・大黒屋〔高校生除く〕など）もあるため、店の規定をご確認ください。",
              },
              {
                q: "年齢を偽って売ったらどうなりますか？",
                a: "民法21条により、成年だと信じさせるために詐術を用いた場合、未成年者でもその契約を取り消せなくなります。古物商は古物営業法15条で年齢を確認する義務があり、大阪府の条例は身分証などで青少年でないことを確認する義務も定めています。",
              },
              {
                q: "金買取に身分証は必要ですか？",
                a: "必須です。古物営業法15条により、古物商は買取時に住所・氏名・職業・年齢を確認する義務があります（対価1万円未満は法律上不要ですが、店の方針で求められることがあります）。運転免許証・マイナンバーカード・パスポートなどが使えます。従来の健康保険証は、買取大吉が「令和7年12月2日（2025年12月2日）より身分証明書として認められなくなった」と公式に告知しています。",
              },
              {
                q: "マイナンバーの提出が必要になるのはどんなときですか？",
                a: "金地金・金貨などで1回200万円を超える取引では、業者が税務署に支払調書を提出するため、マイナンバーの提示が必要になる場合があります。これは正常な取引の一部です。",
              },
              {
                q: "未成年でも金を売れますか？",
                a: "18歳未満は、買取大吉・おたからや・なんぼや・ウリエル・ティファナ・大黒屋などの公式規定で買取不可です。民法5条で未成年者の契約は親権者の同意がなければ取り消せること、東京都・大阪府などの条例が古物商に18歳未満からの買受けを禁じていることが理由です。ブランドリバリューは親権者の同意書または同伴で対応すると公式に記載しています。",
              },
              {
                q: "金買取に予約は必要ですか？",
                a: "予約不要の店舗も多いですが、混雑時は予約すると待ち時間を減らせます。出張買取は日程調整が、宅配買取はキットの取り寄せが必要です。",
              },
              {
                q: "査定にどれくらい時間がかかりますか？",
                a: "点数にもよりますが、数点なら15〜30分程度が目安です。受付→本人確認→査定→金額提示→同意で現金受け取り、という流れが一般的です。",
              },
              {
                q: "保証書や箱がなくても売れますか？",
                a: "売れます。金は素材価値で査定されるため付属品なしでも問題ありません。ただし保証書・箱・鑑定書があると、特にブランド品で査定額が上がる場合があります。",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white border border-warm-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 font-medium text-sm">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>

          <GoldPriceTrend />
          <ExpertQA category="howto" />
          {/* p0-winner-cluster */}
          <div className="not-prose my-8">
            <GoldSimulator />
            <h2 className="text-lg md:text-xl font-bold text-foreground mb-3 mt-8">金種・品目別の買取相場を見る</h2>
            <div className="flex flex-wrap gap-2">
            <Link href="/articles/kin-nobebo-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の延べ棒・インゴット</Link>
            <Link href="/articles/kin-bracelet-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金ブレスレット（喜平・テニス）</Link>
            <Link href="/articles/k24-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K24（純金）</Link>
            <Link href="/articles/k22-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K22（22金）</Link>
            <Link href="/articles/k14-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">K14（14金）</Link>
            <Link href="/articles/kin-yubiwa-kaitori/" className="text-sm bg-cream border border-amber/40 text-amber-dark rounded-lg px-3 py-2 hover:bg-amber/10">金の指輪・リング</Link>
            <Link href="/souba-dashboard/" className="text-sm bg-amber/15 border border-amber/50 text-amber-dark font-bold rounded-lg px-3 py-2 hover:bg-amber/25">相場ダッシュボードで見る</Link>
            </div>
          </div>
        {/* d3-kisei-202607 */}
        <div className="bg-cream border border-accent/40 rounded-lg p-4 my-6 text-sm">
          <strong>関連:</strong> 「2026年に金の買取が規制される？」という疑問には、
          <Link href="/articles/kin-nobebo-kaitori/#kisei-2026" className="text-accent hover:underline">金インゴットの買取規制【2026年の最新動向】</Link>
          で一次情報ベースの整理を公開しています（変わること・変わらないこと）。
        </div>
          <RelatedArticles
            currentSlug="kin-kaitori-tetsuzuki-guide"
            relatedSlugs={["kin-kaitori-hajimete", "kin-kaitori-sokujitsu", "kin-baikyaku-mynumber", "kin-200man-mynumber", "kin-kaitori-zeikin", "kin-kaitori-sagi", "kin-fuzokuhin-nashi", "kin-takaku-uru", "kaitori-houhou-hikaku", "kin-kaitori-souba"]}
          />

          <DealerComparisonTable
            heading="金買取の主要サービス比較"
            intro="公式情報をもとに金買取サービスを比較しました。"
          />

          <h2>まとめ</h2>

          <p>金買取の手続きで押さえるべきは3点です。<strong>18歳未満は単独では売れない</strong>（主要店のほとんどが不可／18・19歳も店により同意書・高校生不可・20歳以上の規定がある）、<strong>店頭は予約不要が多い</strong>（出張・宅配は日程調整や集荷キットが必要）、<strong>数点なら15〜30分で現金化できる</strong>。持ち物は本人確認書類1点だけです。</p>

          <ol>
            <li><strong>未成年なら、来店前に「親権者の同伴・同意書で対応できるか」を電話で確認する</strong></li>
            <li><strong>本人確認書類（免許証・マイナンバーカード等）を持参する</strong></li>
            <li><strong>提示額に納得できなければ持ち帰り、複数業者を比較する</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で買取価格を確認してみてください。査定は完全無料です。</p>
        </article>
      </div>
    </>
  );
}
