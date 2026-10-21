import type { Metadata, Viewport } from "next";
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import Link from "next/link";
import { LogoWordmark } from "@/components/Logo";
import "./globals.css";

// 2026-10-21 デザイン②（Ivory）: 見出し＝明朝、本文・UI＝ゴシック（brandwatchbank と同じ組み合わせ）
const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const SITE_NAME = "金買取びより";
const SITE_URL = "https://gold-biyori.com";
// 全ページ共通のOG画像（scripts/make-og.py で生成。価格などの数字は入れない）
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "金買取びより" };
const SITE_DESCRIPTION =
  "金買取びよりは、金・貴金属の買取相場と売却方法を解説する情報サイトです。K18・K24・プラチナの相場を毎日更新し、ヒカカク！・買取大吉・ティファナ・ウリエルなどの買取サービスを公式情報にもとづいて比較しています。";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 金・貴金属買取の比較ガイド`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | 金・貴金属買取の比較ガイド`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | 金・貴金属買取の比較ガイド`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
};

function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

const navLinks = [
  { href: "/articles/kin-kaitori-osusume/", label: "おすすめ業者" },
  { href: "/souba-dashboard/", label: "本日の相場" },
  { href: "/kin-kaitori-keisanki/", label: "グラム計算機" },
  { href: "/kin-kaitori-hakusho/", label: "相場白書" },
  { href: "/articles/kin-kaitori-souba/", label: "金買取相場" },
  { href: "/articles/kin-takaku-uru/", label: "高く売る方法" },
  { href: "/articles/k18-kaitori/", label: "K18買取" },
  { href: "/articles/kaitori-houhou-hikaku/", label: "買取方法比較" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f5f2ec]/95 backdrop-blur-sm border-b border-rule">
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-[68px] flex items-center justify-between gap-6">
        <Link href="/" className="flex-shrink-0" aria-label={SITE_NAME}>
          <LogoWordmark name={SITE_NAME} />
        </Link>
        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6 text-[0.8125rem] tracking-[0.04em] text-foreground">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="py-2 border-b border-transparent hover:border-accent hover:text-accent-dark transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile menu（ロゴの輪と見分けがつくよう、枠なしの2本線） */}
        <details className="lg:hidden relative">
          <summary className="flex items-center justify-center w-11 h-11 -mr-2">
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="メニューを開く"
            >
              <path strokeLinecap="square" strokeWidth={1.2} d="M3 9h18M3 15h18" />
            </svg>
          </summary>
          <div className="absolute right-0 mt-2 w-60 bg-card border border-rule py-2 z-50">
            <Link
              href="/"
              className="block px-5 py-2.5 text-sm text-foreground hover:text-accent-dark hover:bg-paper transition-colors"
            >
              ホーム
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-5 py-2.5 text-sm text-foreground border-t border-rule/60 hover:text-accent-dark hover:bg-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}

function Footer() {
  const linkCls = "text-foreground/75 hover:text-accent-dark transition-colors";
  return (
    <footer className="bg-[#ece6db] border-t border-rule mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <p className="mb-4">
              <LogoWordmark name={SITE_NAME} />
            </p>
            <p className="text-sm text-warm-gray leading-relaxed">
              金・貴金属の買取相場と買取サービスを、
              <br />
              公式情報にもとづいて掲載しています。
            </p>
          </div>
          <div>
            <p className="text-xs tracking-[0.12em] mb-4 text-accent-dark border-b border-rule pb-2">記事カテゴリ</p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs tracking-[0.12em] mb-4 text-accent-dark border-b border-rule pb-2">サイト情報</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className={linkCls}>
                  運営者情報
                </Link>
              </li>
              <li>
                <Link href="/author/" className={linkCls}>
                  運営方針・データの確認手順
                </Link>
              </li>
              <li>
                <Link href="/faq/" className={linkCls}>
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy/" className={linkCls}>
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service/" className={linkCls}>
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-rule mt-12 pt-6 text-center text-xs text-warm-gray">
          <p>&copy; 2026 {SITE_NAME} All rights reserved.</p>
          <p className="mt-1">
            ※当サイトはプロモーション（PR）を含みます。
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${shipporiMincho.variable} ${zenKakuGothic.variable} h-full antialiased`}
    >
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      </body>
    </html>
  );
}
