import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【壊れた金・刻印なしでも売れる】金買取の条件と査定方法を徹底解説",
  description:
    "壊れた金製品や刻印なしの金でも買取可能。チェーン切れ・片方のピアス・変色したリング・刻印が消えた金製品の買取条件、X線分析による純度測定の仕組み、持ち込み前の準備、おすすめ買取業者4社を解説。",
};

function CtaBox() {
  return (
    <div className="bg-gold-bg border-2 border-accent/30 rounded-xl p-6 my-8">
      <h3 className="font-bold text-base mb-3 text-center">壊れた金製品の無料査定はこちら</h3>
      <p className="text-sm text-warm-gray text-center mb-4">壊れていても刻印がなくても、金であれば買取可能です。まずは無料査定を。</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="block bg-accent text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors">一括査定で最高値を調べる（ヒカカク！）</a>
        <a href="https://kaitori-daikichi.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-navy text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-navy-light transition-colors">近くの店舗で査定する（買取大吉）</a>
        <a href="https://uriel-cuore.co.jp" target="_blank" rel="noopener noreferrer nofollow" className="block bg-green-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-green-800 transition-colors">出張買取を申し込む（ウリエル）</a>
        <a href="https://tifana.net" target="_blank" rel="noopener noreferrer nofollow" className="block bg-blue-700 text-white text-center text-sm font-medium py-3 rounded-lg hover:bg-blue-800 transition-colors">好きな方法で査定する（ティファナ）</a>
      </div>
    </div>
  );
}

function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "壊れた金のネックレスでも買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、チェーンが切れたネックレスでも問題なく買取できます。金の買取は「素材としての価値」がベースなので、チェーンが切れていても、留め具が壊れていても、絡まっていても、金としての価値は同じです。そのままの状態で持ち込めばOKです。",
        },
      },
      {
        "@type": "Question",
        name: "刻印がない金製品は買取できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、刻印がなくても買取可能です。買取業者はX線蛍光分析装置（XRF）を使って、非破壊で金属の純度を正確に測定できます。刻印が消えたもの、元々刻印がないもの、海外製品なども問題なく査定できます。",
        },
      },
      {
        "@type": "Question",
        name: "変色した金製品は価値が下がりますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "いいえ、変色しても金としての価値は変わりません。K18やK14などの金合金は、合金に含まれる銀や銅が酸化して表面が変色することがありますが、金そのものの含有量は変わらないため、買取価格に影響しません。",
        },
      },
      {
        "@type": "Question",
        name: "片方だけのピアスや壊れた指輪も売れますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、売れます。片方だけのピアス、石が取れた指輪、変形したリング、サイズが合わなくなった指輪なども、金の素材価値で買取されます。ただし、ブランドジュエリーの場合は、ペアで揃っている方がブランド価値が評価されやすいです。",
        },
      },
      {
        "@type": "Question",
        name: "壊れた金製品を売る前に修理した方が高く売れますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "いいえ、修理する必要はありません。素材買取の場合、修理しても買取価格は変わりません（重量と純度が同じなので）。むしろ修理費用がかかる分、損をしてしまいます。壊れたままの状態で持ち込んでください。",
        },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

export default function KowaretaKinKaitoriPage() {
  return (
    <>
      <FaqSchema />
      <div className="max-w-3xl mx-auto px-4 py-10 md:py-16">
        <nav aria-label="パンくずリスト" className="text-xs text-warm-gray mb-6">
          <ol className="flex items-center gap-1">
            <li><Link href="/" className="hover:text-accent transition-colors">ホーム</Link></li>
            <li className="breadcrumb-sep" />
            <li><span className="text-foreground">壊れた金・刻印なしの買取</span></li>
          </ol>
        </nav>

        <article className="prose">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 !border-none !pb-0 !mt-0">【壊れた金・刻印なしでも売れる】金買取の条件と査定方法</h1>
          <p className="text-warm-gray text-sm mb-8">最終更新：2026年4月13日</p>

          <p>「チェーンが切れたネックレスは売れる？」「刻印がない金は買い取ってもらえる？」「変色した金は価値が下がる？」——こうした不安から、壊れた金製品を引き出しにしまったままの方は多いのではないでしょうか。</p>

          <p><strong>結論から言えば、壊れた金でも刻印がない金でも買取は可能です。</strong>金の買取は「素材としての価値」で評価されるため、見た目の状態は関係ありません。チェーンが切れていても、変形していても、変色していても、金の重量と純度が同じなら買取価格は同じです。</p>

          <p>この記事では以下の内容を解説します。</p>

          <ul>
            <li>壊れた金製品が売れる理由</li>
            <li>刻印がない金製品の買取方法（X線分析の仕組み）</li>
            <li>買取対象になる具体的な製品一覧</li>
            <li>おすすめ買取業者4社の比較</li>
            <li>持ち込み前の準備</li>
          </ul>

          <h2>壊れた金でも売れるのか？ — 金としての価値で買取可能</h2>

          <p>金製品の買取には大きく<strong>2つの評価基準</strong>があります。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>評価基準</th>
                  <th>内容</th>
                  <th>壊れた金の場合</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>素材価値（地金価値）</strong></td><td>金の重量 x 1gあたりの純度別相場</td><td>壊れていても同じ価格</td></tr>
                <tr><td><strong>製品価値（ブランド価値）</strong></td><td>ブランド名、デザイン、希少性</td><td>壊れていると減額の可能性あり</td></tr>
              </tbody>
            </table>
          </div>

          <p>壊れた金製品は「製品価値」は低下しますが、<strong>「素材価値」は一切変わりません</strong>。そして、多くの金買取業者は素材価値をベースに買取価格を算出するため、壊れていても問題なく買い取ってもらえます。</p>

          <p>買取業者は金製品を溶かして精錬し、純金として再利用します。溶かしてしまえば、元が壊れていたかどうかは関係ないのです。</p>

          <h3>壊れていても買取価格に影響しないもの</h3>

          <ul>
            <li>チェーンが切れたネックレス</li>
            <li>留め具（クラスプ）が壊れたネックレスやブレスレット</li>
            <li>変形した指輪・リング</li>
            <li>サイズが合わなくなった指輪</li>
            <li>片方だけのピアス・イヤリング</li>
            <li>石が取れたジュエリー（金の部分のみ評価）</li>
            <li>絡まって解けないネックレス</li>
            <li>変色・黒ずみのある金製品</li>
            <li>傷だらけの金製品</li>
            <li>古くて汚れた金製品</li>
            <li>金歯</li>
            <li>金のメガネフレーム</li>
            <li>金杯・トロフィー・仏具</li>
          </ul>

          <p>上記のいずれも、<strong>金としての素材価値で買取可能</strong>です。「こんな状態のものは売れないだろう」と思っていた製品でも、まずは査定に出してみることをおすすめします。</p>

          <CtaBox />

          <h2>刻印がない金製品の買取 — X線分析で純度測定可能</h2>

          <p>「刻印がないから金かどうかわからない」「刻印が消えてしまった」という理由で売却をためらっている方も多いですが、<strong>刻印がなくても買取は可能です</strong>。</p>

          <h3>刻印がない理由</h3>

          <p>金製品に刻印がないケースは意外と多くあります。</p>

          <ul>
            <li><strong>古い製品：</strong>刻印の義務化以前に製造された古いジュエリー</li>
            <li><strong>磨耗：</strong>長年の使用で刻印が薄くなった、消えた</li>
            <li><strong>海外製品：</strong>刻印規格が異なる国の製品</li>
            <li><strong>修理歴：</strong>サイズ直しや修理の際に刻印部分が削られた</li>
            <li><strong>手作り品：</strong>個人が製作した金製品</li>
          </ul>

          <h3>X線蛍光分析装置（XRF）とは</h3>

          <p>大手の買取業者は<strong>X線蛍光分析装置（XRF: X-ray Fluorescence）</strong>を導入しています。この装置を使えば、刻印がなくても<strong>非破壊で金属の組成と純度を正確に測定</strong>できます。</p>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>特徴</th>
                  <th>内容</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>測定原理</strong></td><td>X線を照射し、反射する蛍光X線の波長から元素を特定</td></tr>
                <tr><td><strong>測定時間</strong></td><td>数秒〜数十秒</td></tr>
                <tr><td><strong>精度</strong></td><td>非常に高い（純度0.1%単位まで測定可能）</td></tr>
                <tr><td><strong>破壊性</strong></td><td>非破壊（製品を傷つけない）</td></tr>
                <tr><td><strong>費用</strong></td><td>大手業者なら無料</td></tr>
              </tbody>
            </table>
          </div>

          <p>XRF分析により、「K18の刻印があるが実際はK14だった」「刻印がないが実はK18だった」ということが正確に判明します。刻印に頼らず、<strong>実際の金属組成で公正な査定</strong>が行われるため、売り手にとっても安心です。</p>

          <h3>比重測定も併用される</h3>

          <p>XRFに加えて、<strong>比重計</strong>を使った測定も行われることがあります。金は比重が大きい（K24で19.3）ため、水に沈めて体積と重量から比重を計算し、金の純度を推定できます。XRFとの併用で、より正確な査定が可能になります。</p>

          <h2>買取対象になるもの一覧</h2>

          <p>「こんなものも売れるの？」と驚かれることが多い金製品を含め、買取対象になるものを網羅的にリストアップします。</p>

          <h3>壊れたジュエリー</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>製品</th>
                  <th>壊れ方の例</th>
                  <th>買取可否</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ネックレス</td><td>チェーン切れ、留め具破損、絡まり</td><td>買取可</td></tr>
                <tr><td>指輪・リング</td><td>変形、サイズ不一致、石取れ</td><td>買取可</td></tr>
                <tr><td>ブレスレット</td><td>チェーン切れ、留め具破損</td><td>買取可</td></tr>
                <tr><td>ピアス</td><td>片方のみ、ポスト曲がり</td><td>買取可</td></tr>
                <tr><td>イヤリング</td><td>片方のみ、バネ破損</td><td>買取可</td></tr>
                <tr><td>ペンダントトップ</td><td>バチカン破損、チェーンなし</td><td>買取可</td></tr>
                <tr><td>ブローチ</td><td>ピン曲がり、留め具破損</td><td>買取可</td></tr>
              </tbody>
            </table>
          </div>

          <h3>ジュエリー以外の金製品</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>製品</th>
                  <th>状態の例</th>
                  <th>買取可否</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>金歯・金冠</td><td>セメント付着、変色</td><td>買取可</td></tr>
                <tr><td>金のメガネフレーム</td><td>レンズなし、テンプル折れ</td><td>買取可</td></tr>
                <tr><td>金杯・トロフィー</td><td>変色、刻印あり</td><td>買取可</td></tr>
                <tr><td>金の仏具</td><td>古い、汚れ</td><td>買取可</td></tr>
                <tr><td>金のライター</td><td>着火不良</td><td>買取可（金部分のみ）</td></tr>
                <tr><td>金の万年筆</td><td>インク切れ、ペン先破損</td><td>買取可（金部分のみ）</td></tr>
                <tr><td>金箔・金粉</td><td>量が少ない場合あり</td><td>量による</td></tr>
              </tbody>
            </table>
          </div>

          <blockquote>
            <p><strong>注意：</strong>金メッキ（GP: Gold Plated）や金張り（GF: Gold Filled）は金の含有量が非常に少ないため、ほとんどの業者では買取不可です。「K18GP」「K18GF」の刻印がある場合は、K18無垢とは異なるのでご注意ください。</p>
          </blockquote>

          <CtaBox />

          <h2>4社比較 — 壊れた金・刻印なしの買取におすすめの業者</h2>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>業者名</th>
                  <th>方式</th>
                  <th>壊れた金の買取に関する特徴</th>
                  <th>こんな人に</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>ヒカカク！</strong></td>
                  <td>一括査定</td>
                  <td>壊れた金も対象。複数業者の査定を一括比較できる</td>
                  <td>最高値で売りたい</td>
                </tr>
                <tr>
                  <td><strong>買取大吉</strong></td>
                  <td>店頭買取</td>
                  <td>XRF分析装置完備。刻印なし・壊れた金の査定実績多数</td>
                  <td>即現金化したい</td>
                </tr>
                <tr>
                  <td><strong>ウリエル</strong></td>
                  <td>出張買取</td>
                  <td>状態を問わず出張査定可能。重い金製品の持ち運び不要</td>
                  <td>自宅で完結したい</td>
                </tr>
                <tr>
                  <td><strong>ティファナ</strong></td>
                  <td>出張/店頭/宅配</td>
                  <td>壊れた金・刻印なしも積極的に買取。まとめ査定で効率的</td>
                  <td>方法を選びたい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>持ち込み前の準備</h2>

          <h3>1. 金製品をまとめる</h3>

          <p>家中に散らばっている金製品を一か所に集めましょう。以下のような場所に眠っていることが多いです。</p>

          <ul>
            <li>ジュエリーボックス・アクセサリーケース</li>
            <li>引き出しの奥（使わなくなったジュエリー）</li>
            <li>押し入れ・クローゼット（贈答品の金杯など）</li>
            <li>遺品整理で出てきた品物</li>
            <li>歯科医院で外した金歯</li>
          </ul>

          <h3>2. 重さを量ってみる（任意）</h3>

          <p>キッチンスケール（0.1g単位のデジタルはかり）があれば、大まかな重量を事前に把握できます。買取相場表と照らし合わせれば、おおよその買取価格が予想できます。</p>

          <p>ただし、正確な計量と純度判定は業者が行うため、<strong>自分で量れなくても問題ありません</strong>。</p>

          <h3>3. 身分証明書を用意する</h3>

          <p>古物営業法により、買取時には本人確認書類が必要です。運転免許証、マイナンバーカード、パスポートのいずれかを持参しましょう。</p>

          <h3>4. 修理はしなくてOK</h3>

          <p><strong>壊れた状態のまま持ち込んでください。</strong>修理しても素材買取の価格は変わりません。修理費用が無駄になるだけです。</p>

          <h2>壊れた金・刻印なしの買取に関するFAQ</h2>

          <div className="space-y-3 not-prose">
            {[
              {
                q: "壊れた金のネックレスでも買取できますか？",
                a: "はい、チェーンが切れたネックレスでも問題なく買取できます。金の買取は「素材としての価値」がベースなので、チェーンが切れていても、留め具が壊れていても、絡まっていても、金としての価値は同じです。そのままの状態で持ち込めばOKです。",
              },
              {
                q: "刻印がない金製品は買取できますか？",
                a: "はい、刻印がなくても買取可能です。買取業者はX線蛍光分析装置（XRF）を使って、非破壊で金属の純度を正確に測定できます。刻印が消えたもの、元々刻印がないもの、海外製品なども問題なく査定できます。分析は無料です。",
              },
              {
                q: "変色した金製品は価値が下がりますか？",
                a: "いいえ、変色しても金としての価値は変わりません。K18やK14などの金合金は、合金に含まれる銀や銅が酸化して表面が変色することがありますが、金そのものの含有量は変わらないため、買取価格に影響しません。変色したまま持ち込んで大丈夫です。",
              },
              {
                q: "片方だけのピアスや壊れた指輪も売れますか？",
                a: "はい、売れます。片方だけのピアス、石が取れた指輪、変形したリング、サイズが合わなくなった指輪なども、金の素材価値で買取されます。ただし、ブランドジュエリーの場合は、ペアで揃っている方がブランド価値が評価されやすいため、可能であれば揃えて売却する方が有利です。",
              },
              {
                q: "壊れた金製品を売る前に修理した方が高く売れますか？",
                a: "いいえ、修理する必要はありません。素材買取の場合、修理しても買取価格は変わりません（重量と純度が同じなので）。むしろ修理費用がかかる分、損をしてしまいます。壊れたままの状態で持ち込んでください。",
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

          <h2>関連記事</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
            <Link href="/articles/kinba-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">金歯の買取相場ガイド</p>
            </Link>
            <Link href="/articles/k18-kaitori/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">品目ガイド</span>
              <p className="text-sm font-bold mt-1">K18（18金）買取相場と高く売る方法</p>
            </Link>
            <Link href="/articles/kin-takaku-uru/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">売却ガイド</span>
              <p className="text-sm font-bold mt-1">金を高く売る5つのコツ</p>
            </Link>
            <Link href="/articles/kaitori-houhou-hikaku/" className="block bg-white border border-warm-border rounded-xl p-4 hover:shadow-md transition-shadow">
              <span className="text-xs text-accent font-bold">方法比較</span>
              <p className="text-sm font-bold mt-1">金の買取方法4つを徹底比較</p>
            </Link>
          </div>

          <h2>まとめ</h2>

          <p>壊れた金製品や刻印がない金製品でも、<strong>金としての素材価値で買取は可能</strong>です。チェーン切れ、変形、変色、片方だけのピアス、石が取れた指輪——いずれも金の重量と純度さえ確認できれば、新品と同じ価格で買い取ってもらえます。</p>

          <p>刻印がない場合でも、大手買取業者はX線蛍光分析装置で正確に純度を測定できるため心配ありません。</p>

          <p>2026年4月現在、金価格は歴史的な高値水準にあります。引き出しに眠っている壊れた金製品があれば、今が売り時です。</p>

          <ol>
            <li><strong>家中の金製品をまとめて集める</strong></li>
            <li><strong>修理は不要——壊れたまま持ち込む</strong></li>
            <li><strong>複数業者に見積もりを取る</strong></li>
          </ol>

          <p>まずは<a href="https://hikakaku.com" target="_blank" rel="noopener noreferrer nofollow" className="text-accent hover:underline">ヒカカク！の一括査定</a>で、お手持ちの金製品の価値を確認してみてください。査定は無料です。</p>
        </article>
      </div>
    </>
  );
}
