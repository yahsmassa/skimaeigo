import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { EB_Garamond } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-ebgaramond', // Tailwindで使えるようにする
  display: 'swap',
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "共通テスト英語対策アプリ",
  description:
    "共通テスト英語対策アプリ、ふだんタブレット、スキマ時間はスマホで学習！ 採点・翻訳ボタンで完全理解、読み上げ機能で音読学習、繰り返し学習で最強英語教材！、１０年分で完璧！",
  metadataBase: new URL("https://kyoutuu.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "共通テスト",
    "英語",
    "過去問",
    "勉強アプリ",
    "リスニング",
    "シャドーイング",
    "学習",
  ],
  openGraph: {
    title: '共通テスト英語対策アプリ どこでもテスト、いつでも復習！',
    description:
    "共通テスト英語対策アプリ、ふだんタブレット、スキマ時間はスマホで学習！ 採点・翻訳ボタンで完全理解、読み上げ機能で音読学習、繰り返し学習で最強英語教材！、１０年分で完璧！",
    url: 'https://kyoutuu.com',
    siteName: '共通テスト英語対策アプリ',
    images: [{
      url: 'https://kyoutuu.com/og-image.webp',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "共通テスト英語対策アプリ",
    description:
      "共通テスト英語対策アプリ、ふだんタブレット、スキマ時間はスマホで学習！ 採点・翻訳ボタンで完全理解、読み上げ機能で音読学習。",
    images: ["https://kyoutuu.com/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="manifest" href="/manifest.json" />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "共通テスト英語対策アプリ",
              url: "https://kyoutuu.com",
              logo: "https://kyoutuu.com/icons/icon-512x512.png",
              sameAs: [
                "https://www.tiktok.com/@kuotore/",
                "https://www.kuotore.com/",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true} //サーバ、クライアント間のHTMLレンダリングチェック警告を非表示に
        // className="font-serif antialiased max-w-[1150px] mx-auto"
        className={`${ebGaramond.variable} ${geistSans.variable} ${geistMono.variable} antialiased max-w-[1150px] mx-auto`}
      >
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
