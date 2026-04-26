import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "出張買取で押し買い（強引な買取）はありませんか？",
        acceptedAnswer: { "@type": "Answer", text: "当サイトで紹介している業者では押し買いはありません。法律上もクーリングオフ（8日間）が適用されるため、万が一納得できない場合は取引を取り消せます。" },
      },
      {
        "@type": "Question",
        name: "出張買取のクーリングオフは何日ですか？",
        acceptedAnswer: { "@type": "Answer", text: "出張買取はクーリングオフの対象であり、契約書面を受け取った日から8日以内であれば無条件で契約を解除できます。" },
      },
      {
        "@type": "Question",
        name: "女性の査定員を指名できますか？",
        acceptedAnswer: { "@type": "Answer", text: "買取大吉やウリエルなどの大手業者では、女性査定員の指名が可能な場合があります。予約時に相談してみてください。" },
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />
  );
}

export const metadata: Metadata = {
  title: "【2026年最新】金の買取方法4つを徹底比較 — 店頭・出張・宅配・一括査定のメリデメ",
  description:
    "金・貴金属の買取方法を4つ（店頭買取・出張買取・宅配買取・一括査定）に分けて徹底比較。メリット・デメリット、品目別おすすめ方法、各業者の対応一覧まで解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">あなたに合った方法で無料査定</h3>
      <p className="text-sm text-warm-gray text-center mb-4">どの方法でも査定料は無料。気軽に試してみましょう。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block gold-cta text-center text-sm font-medium py-3 rounded-lg transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy border border-accent/50 text-accent text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

export default function KaitoriHouhouHikakuPage() {
  return (
    <>
      <FaqSchema />
    <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
      <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
        <ol className="flex items-center gap-1">
          <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
          <li className="breadcrumb-sep" />
          <li><span className="text-foreground">買取方法比較</span></li>
        </ol>
      </nav>

      <div className="article-hero mb-8">
          <Image src="/images/article-hero-howto.png" alt="金買取ガイドイメージ" width={1200} height={400} className="w-full h-[200px] object-cover rounded-xl" priority />
          <div className="article-hero-overlay rounded-xl" />
        </div>

        <article className="prose">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【2026年最新】金の買取方法4つを徹底比較 — 店頭・出張・宅配・一括査定のメリデメ</h1>
        <p className="text-warm-gray text-sm mb-8">最終更新: 2026年4月15日</p>

        <p>金・貴金属を売りたいと思ったとき、「どの方法で売ればいいの？」と迷う方は多いはずです。金の買取方法は大きく分けて<strong>4つ</strong>あり、それぞれにメリット・デメリットがあります。</p>

        <p>この記事では、4つの買取方法を詳しく解説し、<strong>あなたの状況に最も合った売却方法</strong>を見つけるお手伝いをします。</p>

        <ul>
          <li><strong>一括査定</strong> — 複数業者を一度に比較して最高値を狙う</li>
          <li><strong>店頭買取</strong> — 店舗に持ち込んで即日現金化</li>
          <li><strong>出張買取</strong> — 自宅に査定員が来てくれる</li>
          <li><strong>宅配買取</strong> — 郵送で完結、対面不要</li>
        </ul>

        <h2>方法1：一括査定 — 最高値を効率的に見つける</h2>

        <p>一括査定とは、<strong>1回の申し込みで複数の買取業者に同時に査定依頼を出せるサービス</strong>です。代表的なサービスに「ヒカカク！」があります。</p>

        <h3>一括査定の仕組み</h3>

        <ol>
          <li>一括査定サイトに売りたい品物の情報（品目・純度・重量・状態など）を入力</li>
          <li>提携する複数の買取業者に情報が送信される</li>
          <li>各業者から査定額の回答が届く</li>
          <li>最も高い業者を選んで、実際の買取に進む</li>
        </ol>

        <h3>メリット</h3>
        <ul>
          <li><strong>最高値が簡単に見つかる：</strong>自分で1社ずつ見積もりを取る手間が不要</li>
          <li><strong>業者同士が競争する：</strong>他社の存在を意識するため、各業者が高めの価格を提示する傾向</li>
          <li><strong>相場感がわかる：</strong>複数の見積もりを比較することで、適正価格が把握できる</li>
          <li><strong>無料・簡単：</strong>利用料は無料。数分の入力で完了</li>
        </ul>

        <h3>デメリット</h3>
        <ul>
          <li><strong>概算見積もりの場合がある：</strong>実物を見ていないため、実際の買取額と差が出ることも</li>
          <li><strong>業者から複数の連絡が来る：</strong>電話やメールが複数届く場合がある</li>
          <li><strong>即日現金化はできない：</strong>見積もり比較の後、実際の買取手続きが必要</li>
        </ul>

        <blockquote>
          <p><strong>こんな人におすすめ：</strong>「時間に余裕がある」「とにかく最高値で売りたい」「相場感を掴みたい」という方。特に高額品（10万円以上）の場合は、業者間の差額が大きくなるため一括査定が効果的です。</p>
        </blockquote>

        <h2>方法2：店頭買取 — その場で査定、即現金化</h2>

        <p>店頭買取は、買取店舗に金製品を持ち込んで、<strong>対面で査定してもらい、その場で現金を受け取る</strong>方法です。「買取大吉」は全国600店舗以上を展開しており、店頭買取の代表的な業者です。</p>

        <h3>店頭買取の流れ</h3>

        <ol>
          <li>最寄りの買取店舗を探す（予約不要の店が多い）</li>
          <li>金製品と本人確認書類（運転免許証等）を持参</li>
          <li>店頭で査定（通常10〜30分）</li>
          <li>査定額に納得すれば、その場で現金受取</li>
          <li>納得できなければ、キャンセルして持ち帰りOK</li>
        </ol>

        <h3>メリット</h3>
        <ul>
          <li><strong>即日現金化：</strong>査定に納得すれば、その場で現金を受け取れる（最短30分）</li>
          <li><strong>対面で安心：</strong>査定の様子を目の前で確認できる。質問もその場でできる</li>
          <li><strong>予約不要の店が多い：</strong>思い立ったらすぐ行ける</li>
          <li><strong>郵送リスクがない：</strong>紛失や破損の心配不要</li>
        </ul>

        <h3>デメリット</h3>
        <ul>
          <li><strong>店舗まで出向く必要がある：</strong>近くに店舗がない場合は不便</li>
          <li><strong>1社の査定で決めがち：</strong>店頭だと他社比較がしにくく、その場の雰囲気で決めてしまいがち</li>
          <li><strong>営業時間の制約：</strong>店舗の営業時間内に行く必要がある</li>
          <li><strong>対面が苦手な人には不向き：</strong>「断りにくい」と感じる人もいる</li>
        </ul>

        <blockquote>
          <p><strong>こんな人におすすめ：</strong>「今日中に現金が欲しい」「目の前で査定してもらいたい」「近くに買取店舗がある」という方。急ぎの場合は店頭買取が最適です。</p>
        </blockquote>

        <h2>方法3：出張買取 — 自宅にいながら完結</h2>

        <p>出張買取は、<strong>買取業者の査定員が自宅まで来てくれる</strong>サービスです。「ウリエル」は出張買取を得意とする業者で、出張費・査定料・キャンセル料がすべて無料です。</p>

        <h3>出張買取の流れ</h3>

        <ol>
          <li>電話またはWebで出張買取を申し込む</li>
          <li>日時を調整（早ければ翌日対応も可能）</li>
          <li>査定員が自宅に訪問</li>
          <li>目の前で査定（通常20〜40分）</li>
          <li>査定額に納得すれば、その場で現金受取</li>
          <li>納得できなければ、キャンセルOK（無料）</li>
        </ol>

        <h3>メリット</h3>
        <ul>
          <li><strong>外出不要：</strong>自宅で完結するため、高齢者や子育て中の方に便利</li>
          <li><strong>大量・高額品も安心：</strong>金製品を外に持ち出すリスクがない</li>
          <li><strong>その場で現金化：</strong>店頭と同様、即現金受取が可能</li>
          <li><strong>ついでに他のものも査定可能：</strong>金以外の不用品もまとめて査定してもらえることが多い</li>
        </ul>

        <h3>デメリット</h3>
        <ul>
          <li><strong>自宅に他人を入れる必要がある：</strong>プライバシーの懸念がある方には不向き</li>
          <li><strong>日程調整が必要：</strong>即日対応できない場合もある</li>
          <li><strong>対面のプレッシャー：</strong>「わざわざ来てくれたから断りにくい」と感じる人もいる</li>
          <li><strong>対応エリアが限定的：</strong>都市部は対応可能でも、地方は対象外の場合がある</li>
        </ul>

        <blockquote>
          <p><strong>こんな人におすすめ：</strong>「外出が難しい」「大量の金製品がある」「自宅でゆっくり査定してほしい」という方。特に高齢者や体調に不安がある方に人気です。</p>
        </blockquote>

        <h2>方法4：宅配買取 — 郵送で完結、対面不要</h2>

        <p>宅配買取は、<strong>金製品を郵送して査定してもらう</strong>方法です。「ティファナ」は出張・店頭に加えて宅配買取にも対応しており、好きな方法を選べます。</p>

        <h3>宅配買取の流れ</h3>

        <ol>
          <li>Webまたは電話で宅配買取を申し込む</li>
          <li>宅配キット（梱包資材＋着払い伝票）が届く</li>
          <li>金製品を梱包して発送</li>
          <li>業者が受け取り後、査定（通常1〜3営業日）</li>
          <li>メールまたは電話で査定結果の連絡</li>
          <li>承諾すれば指定口座に入金。不承諾なら返送（無料）</li>
        </ol>

        <h3>メリット</h3>
        <ul>
          <li><strong>完全非対面：</strong>対面が苦手な方に最適。自分のペースで進められる</li>
          <li><strong>全国対応：</strong>地方在住で近くに買取店がなくても利用可能</li>
          <li><strong>時間を選ばない：</strong>好きなタイミングで梱包・発送できる</li>
          <li><strong>梱包資材無料：</strong>大手業者は宅配キットを無料で提供</li>
        </ul>

        <h3>デメリット</h3>
        <ul>
          <li><strong>現金化に時間がかかる：</strong>発送〜入金まで3〜7日程度</li>
          <li><strong>配送中の紛失リスク：</strong>保険付きとはいえ、高額品の郵送には不安も</li>
          <li><strong>査定の様子が見えない：</strong>どのように査定されたか確認できない</li>
          <li><strong>返送に時間がかかる：</strong>キャンセルの場合、返送までに数日かかる</li>
        </ul>

        <blockquote>
          <p><strong>こんな人におすすめ：</strong>「対面が苦手」「近くに買取店がない」「急いでいない」「自分のペースで進めたい」という方。</p>
        </blockquote>

        <h2>4つの方法をメリデメ比較表で一覧</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>比較項目</th>
                <th>一括査定</th>
                <th>店頭買取</th>
                <th>出張買取</th>
                <th>宅配買取</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>買取価格の高さ</strong></td><td>◎ 最高値</td><td>○ 交渉次第</td><td>○ 標準的</td><td>△ やや低め</td></tr>
              <tr><td><strong>現金化の速さ</strong></td><td>△ 数日</td><td>◎ 即日</td><td>◎ 即日</td><td>△ 3〜7日</td></tr>
              <tr><td><strong>手間の少なさ</strong></td><td>◎ Web完結</td><td>△ 来店必要</td><td>○ 予約のみ</td><td>○ 梱包・発送</td></tr>
              <tr><td><strong>対面不要</strong></td><td>◎</td><td>✕</td><td>✕</td><td>◎</td></tr>
              <tr><td><strong>全国対応</strong></td><td>◎</td><td>△ 店舗限定</td><td>△ エリア限定</td><td>◎</td></tr>
              <tr><td><strong>安心感</strong></td><td>○</td><td>◎ 目の前で査定</td><td>◎ 目の前で査定</td><td>△ 見えない</td></tr>
              <tr><td><strong>代表業者</strong></td><td>ヒカカク！</td><td>買取大吉</td><td>ウリエル</td><td>ティファナ</td></tr>
            </tbody>
          </table>
        </div>

        <h2>品目別おすすめ買取方法</h2>

        <p>売りたい品物の種類によっても、最適な買取方法は変わります。以下を参考にしてください。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>品目</th>
                <th>おすすめ方法</th>
                <th>理由</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>金インゴット（100g以上）</td><td>一括査定 → 店頭</td><td>高額なので複数比較が重要。持ち運びリスクを避けるなら出張も</td></tr>
              <tr><td>K18ネックレス・指輪</td><td>一括査定 or 店頭</td><td>一般的な品目なので、どの方法でもOK。高く売りたいなら一括査定</td></tr>
              <tr><td>金歯・歯科用金属</td><td>店頭 or 宅配</td><td>見た目で判断しにくいため、分析設備のある業者が安心</td></tr>
              <tr><td>ブランドジュエリー</td><td>一括査定 → 店頭</td><td>ブランド価値が加味されるため、専門性の高い業者に複数見積もり</td></tr>
              <tr><td>大量の金製品</td><td>出張買取</td><td>持ち運びの手間とリスクを回避。まとめて査定してもらえる</td></tr>
              <tr><td>遺品の貴金属</td><td>出張買取</td><td>整理が必要な場合、自宅で一括査定してもらえて便利</td></tr>
              <tr><td>少量（1〜2点）</td><td>店頭 or 宅配</td><td>手軽に済ませたい場合。金額が小さいため方法による差も小さい</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4社の対応方法一覧</h2>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>業者名</th>
                <th>一括査定</th>
                <th>店頭買取</th>
                <th>出張買取</th>
                <th>宅配買取</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>ヒカカク！</strong></td><td>◎（メイン）</td><td>—</td><td>—</td><td>—</td></tr>
              <tr><td><strong>買取大吉</strong></td><td>—</td><td>◎（メイン）</td><td>○</td><td>○</td></tr>
              <tr><td><strong>ウリエル</strong></td><td>—</td><td>○</td><td>◎（メイン）</td><td>○</td></tr>
              <tr><td><strong>ティファナ</strong></td><td>—</td><td>○</td><td>○</td><td>○</td></tr>
            </tbody>
          </table>
        </div>

        <CtaBox />

        <h2>出張買取のトラブル事例と対策</h2>

        <p>出張買取は便利なサービスですが、一部の悪質業者によるトラブルも報告されています。事前に知っておくことで、安全に利用できます。</p>

        <h3>トラブル事例1：「ついでに他のものも見せて」と言われる</h3>
        <p>金の査定を依頼したはずが、「ついでに他の貴金属やブランド品も見せてください」と言われ、安値で買い叩かれるケース。<strong>対策：</strong>事前に「金製品のみ査定希望」と伝えておく。依頼していないものは見せない。</p>

        <h3>トラブル事例2：「今日決めないと価格が下がる」と急かされる</h3>
        <p>その場で即決を迫られるケース。金相場は1日で大きく変わることはほぼありません。<strong>対策：</strong>「他社にも見積もりを取りたい」と伝え、持ち帰る。まともな業者は快く応じてくれます。</p>

        <h3>トラブル事例3：査定後に「やっぱり売りたくない」と言いにくい</h3>
        <p>わざわざ来てもらった手前、断りにくいと感じる方が多いです。<strong>対策：</strong>キャンセル無料を事前に確認。「検討します」と言えば問題ありません。当サイト掲載の4社はキャンセル無料です。</p>

        <h2>クーリングオフ制度 — 8日間なら無条件で取り消し可能</h2>

        <p>出張買取は<strong>特定商取引法の「訪問購入」</strong>に該当し、クーリングオフの対象です。以下のルールを覚えておきましょう。</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><strong>対象取引</strong></td><td>出張買取（訪問購入）</td></tr>
              <tr><td><strong>クーリングオフ期間</strong></td><td>契約書面を受け取った日から<strong>8日以内</strong></td></tr>
              <tr><td><strong>手続き方法</strong></td><td>書面（はがき・内容証明郵便）で通知</td></tr>
              <tr><td><strong>費用負担</strong></td><td>返金・返品の送料等は業者負担</td></tr>
              <tr><td><strong>注意点</strong></td><td>店頭買取・宅配買取にはクーリングオフは適用されない</td></tr>
            </tbody>
          </table>
        </div>

        <p><strong>重要：</strong>クーリングオフ期間中は、業者は買い取った品物を第三者に転売してはいけません。つまり、8日以内であれば確実に品物を取り戻せます。契約書面（クーリングオフについて記載された書面）を受け取っていない場合は、8日を過ぎてもクーリングオフが可能です。</p>

        <h2>女性査定員への対応について</h2>

        <p>「男性の査定員が自宅に来るのは不安」という女性の方は少なくありません。以下の対応が可能です。</p>

        <ul>
          <li><strong>買取大吉：</strong>店頭であれば女性スタッフが対応する店舗あり。出張買取でも女性査定員を相談可能</li>
          <li><strong>ウリエル：</strong>出張買取時に女性査定員の希望を伝えられる。対応可能エリアは事前確認が必要</li>
          <li><strong>ティファナ：</strong>宅配買取なら完全非対面で安心。対面不要で売却が完結</li>
        </ul>

        <p>いずれの場合も、<strong>予約時に「女性の査定員を希望」と伝える</strong>ことが重要です。対応できない場合もありますが、まずは相談してみましょう。</p>

        <h2>査定に納得できないときの「断り方」</h2>

        <p>「査定額に納得できないけど、断りにくい…」という方のために、スムーズな断り方をご紹介します。</p>

        <ul>
          <li>「他社にも見積もりを取りたいので、今日は持ち帰ります」</li>
          <li>「家族に相談してから決めます」</li>
          <li>「想定より低かったので、今回は見送ります」</li>
          <li>「検討させてください」</li>
        </ul>

        <p>いずれも問題なく断れるフレーズです。まともな買取業者であれば、断られることは日常的であり、嫌な顔をされることはありません。<strong>当サイト掲載の4社はキャンセル料無料</strong>なので、安心して査定を依頼できます。</p>

        <blockquote>
          <p><strong>ポイント：</strong>「断るのが苦手」という方は、宅配買取（ティファナ）を利用するのも手です。メールで査定結果が届くので、断る場合も「お見送りします」と返信するだけでOKです。</p>
        </blockquote>

        <h2>買取方法に関するFAQ</h2>

        <div className="space-y-3 not-prose">
          {[
            {
              q: "初めて金を売るのですが、どの方法が安心ですか？",
              a: "初めての方には「店頭買取」がおすすめです。目の前で査定の様子を確認でき、わからないことはその場で質問できます。買取大吉のような大手チェーンなら、接客品質も安定しています。まず店頭で査定額を聞き、その金額を基準に他社（一括査定など）でも比較すると、納得感のある売却ができます。",
            },
            {
              q: "出張買取で押し買い（強引な買取）はありませんか？",
              a: "当サイトで紹介している業者では押し買いはありません。特にウリエルは出張買取専門で実績豊富な大手企業であり、コンプライアンスが徹底されています。法律上もクーリングオフ（8日間）が適用されるため、万が一納得できない場合は取引を取り消せます。ただし、知らない業者の訪問買取（飛び込み営業）には注意が必要です。",
            },
            {
              q: "複数の方法を組み合わせて使えますか？",
              a: "はい、最も効果的な方法です。おすすめの組み合わせは、まずヒカカク！の一括査定で相場感と最高値を把握し、その金額を交渉材料にして買取大吉の店頭で即現金化する流れです。このように複数の方法を組み合わせることで、高値かつスピーディーな売却が実現できます。",
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

        <h2>まとめ</h2>

        <p>金の買取方法は4つあり、それぞれ特徴が異なります。</p>

        <ul>
          <li><strong>最高値で売りたい</strong> → 一括査定（ヒカカク！）で複数業者を比較</li>
          <li><strong>即日現金化したい</strong> → 店頭買取（買取大吉）で即査定・即入金</li>
          <li><strong>自宅で完結したい</strong> → 出張買取（ウリエル）で外出不要</li>
          <li><strong>対面不要で自分のペースで</strong> → 宅配買取（ティファナ）で郵送完結</li>
        </ul>

        <p>最もおすすめなのは、<strong>一括査定で最高値を把握してから、店頭または出張で売却</strong>する組み合わせです。この方法なら、高値と利便性の両方を実現できます。</p>
      </article>
    </div>
    </>
  );
}
