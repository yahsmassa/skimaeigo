import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { EB_Garamond } from 'next/font/google';

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
      </head>
      <body
        suppressHydrationWarning={true} //サーバ、クライアント間のHTMLレンダリングチェック警告を非表示に
        // className="font-serif antialiased max-w-[1150px] mx-auto"
        className={`${ebGaramond.variable} ${geistSans.variable} ${geistMono.variable} antialiased max-w-[1150px] mx-auto`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
