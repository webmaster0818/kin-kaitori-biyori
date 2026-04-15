import Link from "next/link";

const services = [
  {
    name: "ヒカカク！",
    method: "一括査定",
    description: "複数業者に一括で査定依頼。最高値を簡単に比較できる",
    target: "最高値で売りたい人",
    url: "https://hikakaku.com",
    color: "bg-amber-50 border-amber-300",
    icon: "&#x1F50D;",
  },
  {
    name: "買取大吉",
    method: "店頭買取",
    description: "全国600店舗以上。その場で査定、即現金化",
    target: "店頭で即現金化したい人",
    url: "https://kaitori-daikichi.jp",
    color: "bg-red-50 border-red-300",
    icon: "&#x1F3EA;",
  },
  {
    name: "ティファナ",
    method: "出張/店頭/宅配",
    description: "3つの方法から選べる。ライフスタイルに合わせた柔軟対応",
    target: "選択肢が欲しい人",
    url: "https://tifana.net",
    color: "bg-blue-50 border-blue-300",
    icon: "&#x1F4E6;",
  },
  {
    name: "ウリエル",
    method: "出張買取専門",
    description: "自宅にいながら完結。出張費・査定料すべて無料",
    target: "自宅で完結したい人",
    url: "https://uriel-cuore.co.jp",
    color: "bg-green-50 border-green-300",
    icon: "&#x1F3E0;",
  },
];

const articles = [
  {
    href: "/articles/kin-kaitori-souba/",
    tag: "相場情報",
    title: "【2026年最新】金買取相場一覧 — K24/K18/K14の1gあたり価格",
    description:
      "純度別の金買取相場を毎日更新。K24・K18・K14・K10・プラチナの1gあたり価格と、金価格の推移・今後の見通しを解説。",
    tags: ["金相場", "K24", "K18", "プラチナ"],
  },
  {
    href: "/articles/kin-takaku-uru/",
    tag: "売却ガイド",
    title: "金を高く売る5つのコツ — 相見積もり・タイミング・業者選び",
    description:
      "金・貴金属を少しでも高く売るための実践テクニック。相見積もり、売却タイミング、付属品の有無、避けるべきNG行動まで徹底解説。",
    tags: ["高く売る", "コツ", "相見積もり", "タイミング"],
  },
  {
    href: "/articles/kaitori-houhou-hikaku/",
    tag: "方法比較",
    title: "金の買取方法4つを徹底比較 — 店頭・出張・宅配・一括査定",
    description:
      "店頭買取・出張買取・宅配買取・一括査定のメリット・デメリットを表で比較。あなたに合った売却方法がわかります。",
    tags: ["店頭買取", "出張買取", "宅配買取", "一括査定"],
  },
  {
    href: "/articles/k18-kaitori/",
    tag: "品目ガイド",
    title: "【完全ガイド】K18（18金）買取相場と高く売る方法",
    description:
      "K18の1gあたりの買取相場、ネックレス・指輪・ブレスレットの製品別価格、刻印の見方、おすすめ買取業者を徹底解説。",
    tags: ["K18", "18金", "ネックレス", "指輪"],
  },
];

const faqs = [
  {
    q: "金の買取価格は毎日変わりますか？",
    a: "はい、金の買取価格は国際相場（ロンドン金価格）と為替レートに連動して毎日変動します。相場をチェックして、高いタイミングで売却するのがおすすめです。",
  },
  {
    q: "壊れたアクセサリーや片方だけのピアスも買い取ってもらえますか？",
    a: "買い取ってもらえます。金・貴金属の買取は「素材としての価値」がベースなので、壊れていても、片方だけでも、刻印が消えていても査定対象になります。",
  },
  {
    q: "買取に手数料はかかりますか？",
    a: "当サイトで紹介している4社（ヒカカク！・買取大吉・ティファナ・ウリエル）はいずれも査定料・出張費・キャンセル料が無料です。安心して査定を依頼できます。",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gold-bg via-cream to-background">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
          <div className="text-center">
            <p className="text-accent font-medium text-sm mb-3 tracking-wider">
              金・貴金属買取の比較ガイド
            </p>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              金・貴金属を
              <br className="md:hidden" />
              <span className="text-accent">最高価格</span>で売るなら
            </h1>
            <p className="text-warm-gray text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              K24（純金）・K18・プラチナの最新買取相場をチェック。
              <br className="hidden md:block" />
              4つの人気買取サービスを比較して、あなたに最適な売却方法が見つかります。
            </p>
            <div className="bg-white border border-warm-border rounded-xl inline-block px-6 py-3 mb-8 shadow-sm">
              <p className="text-xs text-warm-gray mb-1">本日の金買取参考相場（K24/1g）</p>
              <p className="text-2xl md:text-3xl font-bold text-accent">
                &#165;15,200<span className="text-sm text-warm-gray font-normal ml-1">前後</span>
              </p>
              <p className="text-xs text-warm-gray mt-1">※2026年4月時点の目安。実際の買取価格は業者・純度により異なります。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/articles/kin-kaitori-souba/"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
              >
                最新の金買取相場を見る
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/articles/kin-takaku-uru/"
                className="inline-flex items-center justify-center gap-2 bg-navy text-white font-medium px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors shadow-md hover:shadow-lg"
              >
                高く売るコツを読む
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-light/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      </section>

      {/* Trust Badges */}
      <section className="border-y border-warm-border bg-white">
        <div className="max-w-5xl mx-auto px-4 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-xs md:text-sm text-warm-gray">
            {["査定料・出張費すべて無料", "4社の買取業者を徹底比較", "2026年最新相場対応", "利用者の声500件以上"].map((text) => (
              <span key={text} className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4社比較サマリー */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
          買取方法で選ぶ おすすめ4社
        </h2>
        <p className="text-warm-gray text-sm text-center mb-8">
          あなたの希望する売却スタイルに合わせて、最適な買取業者を選べます
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((svc) => (
            <a
              key={svc.name}
              href={svc.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className={`${svc.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all group block`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl" dangerouslySetInnerHTML={{ __html: svc.icon }} />
                <div>
                  <h3 className="font-bold text-base group-hover:text-accent transition-colors">
                    {svc.name}
                  </h3>
                  <span className="inline-block bg-white/80 text-accent text-xs font-bold px-2 py-0.5 rounded mt-1">
                    {svc.method}
                  </span>
                </div>
              </div>
              <p className="text-warm-gray text-sm leading-relaxed mb-2">
                {svc.description}
              </p>
              <p className="text-xs text-navy font-medium">
                &#x25B6; {svc.target}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* 品目別リンク */}
      <section className="bg-cream py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-3 text-center">
            品目から探す
          </h2>
          <p className="text-warm-gray text-sm text-center mb-8">
            お持ちの金製品に合った買取情報をご覧ください
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { label: "K24（純金）", href: "/articles/kin-kaitori-souba/#k24" },
              { label: "K18（18金）", href: "/articles/k18-kaitori/" },
              { label: "K14（14金）", href: "/articles/kin-kaitori-souba/#k14" },
              { label: "プラチナ", href: "/articles/kin-kaitori-souba/#platinum" },
              { label: "金歯・金冠", href: "/articles/kin-kaitori-souba/#dental" },
              { label: "ネックレス", href: "/articles/k18-kaitori/#necklace" },
              { label: "指輪・リング", href: "/articles/k18-kaitori/#ring" },
              { label: "ブレスレット", href: "/articles/k18-kaitori/#bracelet" },
              { label: "金貨・インゴット", href: "/articles/kin-kaitori-souba/#ingot" },
              { label: "壊れたアクセサリー", href: "/articles/kin-takaku-uru/#broken" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="bg-white rounded-lg border border-warm-border p-3 text-center text-sm font-medium hover:border-accent/50 hover:shadow-sm transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
          人気の記事
        </h2>
        <div className="space-y-5">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="block bg-white border border-warm-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group p-6"
            >
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                {article.tag}
              </span>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-3">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-cream text-warm-gray text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gold-bg py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-8 text-center">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white border border-warm-border rounded-xl overflow-hidden group"
              >
                <summary className="flex items-center justify-between p-5 font-medium text-sm">
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-warm-gray flex-shrink-0 ml-4 faq-arrow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-warm-gray leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-cream to-background py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            まずは無料査定から始めましょう
          </h2>
          <p className="text-warm-gray mb-8 text-sm md:text-base leading-relaxed">
            金・貴金属の買取価格は業者によって大きく異なります。
            <br className="md:hidden" />
            複数社を比較して、最高値での売却を目指しましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://hikakaku.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-medium px-7 py-3.5 rounded-full hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg"
            >
              一括査定で最高値を調べる
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://uriel-cuore.co.jp"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white font-medium px-7 py-3.5 rounded-full hover:bg-navy-light transition-colors shadow-md hover:shadow-lg"
            >
              出張買取を申し込む
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
