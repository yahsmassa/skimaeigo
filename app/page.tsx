import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import AuthRedirect from "@/app/components/AuthRedirect";
import Image from "next/image";
export const metadata: Metadata = {
  title: "共通テスト英語対策アプリ | どこでも学べる過去問トレーニング",
  description:
    "共通テスト英語の過去問をスマホ・タブレット・PCで学習。読み上げ・翻訳・採点・解説で効率学習。無料で2025年の最新問題を体験できます。",
  alternates: { canonical: "/" },
};
import {
  Computer,
  BookOpenCheck,
  GraduationCap,
  BookOpenText,
  Check,
  Calculator,
  Languages,
  Tablet,
  Smartphone,
  Database,
  ArrowRight,
} from "lucide-react";
import {
  DeviceLaptopIcon,
  DeviceTabletIcon,
  DevicePhoneIcon,
} from "@/components/DeviceIcons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <Suspense fallback={null}>
        <AuthRedirect />
      </Suspense>
      <Navigation />

      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          {/* FAQ JSON-LD for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "無料で何ができますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "無料版では2025年の最新問題を体験できます。読み上げ・翻訳・採点など主要機能を試せます。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "有料版の価格と内容は？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "有料版は買い切り500円で、過去10年分の全問題にアクセスできます。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "ログイン方法は？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "GoogleまたはAppleアカウントでログインできます。メールアドレスでも登録可能です。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "対応デバイスは？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "スマートフォン、タブレット、PCに対応しています。学習体験は各デバイスに最適化されています。",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "決済後いつからプレミアム機能が使えますか？",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "決済確認後ただちにプレミアムが有効化されます。反映まで数秒かかる場合があります。",
                    },
                  },
                ],
              }),
            }}
          />
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              このアプリで得点力は<span className="text-orange-400 ">最低１０点以上</span>向上！！
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              共通テストには、独特のくせがあります、英語力以外のテクニックを身につけることで、得点力がグンとアップします！このアプリで、テクニックを習得しましょう。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/dashboard"
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
                aria-label="ダッシュボードへ移動して学習を開始"
              >
                今すぐ始める
              </Link>
              {/* <button
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white hover:text-blue-600 transition-colors"
                onClick={test}
              >
                TEST
              </button> */}
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-2 max-w-xs">
              <Image
                src="/images/smaho.webp"
                alt="アプリ画面イメージ（スマホ1）"
                className="rounded"
                width={300}
                height={600}
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 300px, 45vw"
              />
            </div>
            <div className="bg-white rounded-lg shadow-xl p-2 max-w-xs ml-2">
              <Image
                src="/images/smaho2.webp"
                alt="アプリ画面イメージ（スマホ2）"
                className="rounded"
                width={300}
                height={600}
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 300px, 45vw"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            アプリの特徴
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="mb-4 w-8">
                <img
                  src="/images/tiktok.webp"
                  alt="TikTok解説動画 by クオトレ"
                  className="rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">
                TikTok解説動画
              </h3>
              <p>
              その問題に対応した、時短テクニックや問題を解くときの順番など、クオトレ作成のショート動画で解説しています。アプリの問題とリンクしていて便利です </p>
            </div>
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4 w-10 h-10">
                {/* <Clock size={32} /> */}
                <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                選択部分の読み上げ
              </h3>
              <p>
                「文章を選択＋読み上げボタン」で英語で読み上げします。長文問題は文章構造を理解するための音読学習が効果的です。リスニング力もアップ
              </p>
            </div>


            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <GraduationCap size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">単語・文章解説</h3>
              <p>
                「単語・文章を選択＋解説アイコンをクリック」でAIが解説します。関係代名詞、分子構文など、意味がわからないところはピンポイントで学習できます。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4 flex gap-2">
              <div className="text-blue-600 w-8 h-8">
              <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
              </svg>
              </div>
                <Calculator size={32} />
                <Languages size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">タイマー・採点・翻訳機能</h3>
              <p>
                解答するまでの時間計測・採点と正解、わからなかった単語・イディオムの確認も、ボタンで即座に確認。反復学習には最適な機能です。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4 flex gap-2">
                <Computer size={32} />
                <Tablet size={32} />
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">マルチデバイス対応</h3>
              <p>
                スマホ、タブレット、PCの順番でアプリの機能が生きてきます。試験に近い書式はタブレットとPCです。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <BookOpenText size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">過去問にランダムアクセス</h3>
              <p>
                最後の長文問題を年代ごとに解いたり、第３問だけ選んで解くことが可能です。時系列に問題を解くと、パターンが実感できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            いままでと比べて・・・
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">いままで</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>家や自習室での学習するための、まとまった時間、<span className="text-orange-400 font-bold">時間・場所の制約</span>があります。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>具体的な解法テクニックを学ぶには、塾や予備校、<span className="text-orange-400 font-bold">それなりのお金が必要</span>という悲しい問題！</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>試験には、音読しようとしても、発音がわからない単語が多くでて、調べるのもかなり手間。<span className="text-orange-400 font-bold">音読が地味に手間</span>です。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>参考書だけでも<span className="text-orange-400 font-bold">コストは数千円</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>過去問で毎年同じパターンが出てると言われても、紙ベースだと<span className="text-orange-400 font-bold">過去問どうしを比べるのが大変</span>、どんだけページめくるの？</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">
                  アプリを使うと
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>スタバに公園のベンチ、もちろん自宅でも！スマホがあれば<span className="text-blue-600 font-bold">いつでもどこでも学習できます！</span></span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span><span className="text-blue-600 font-bold">いいね！数千件のTikTokのショート解説動画（クオトレオリジナル）</span>で何度でもテクニックが確認できます</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>「選択＋アイコンタップ」<span className="text-blue-600 font-bold">スマホの英語音読機能</span>で、発音を確認できます。シャドーイングにも最適</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>今なら試験直前キャンペーンで<span className="text-blue-600 font-bold">５００円！</span></span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>２０２１年の第３問というように、自由に問題が選択できるので<span className="text-blue-600 font-bold">過去問比較も簡単!</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            状況ごとにデバイスを選ぶ！
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
              <DeviceLaptopIcon className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold mb-2">パソコン</h3>
              <p className="text-center max-w-xs">
                マウスで簡単に文書選択できるので、部分音読や、AIによる部分文章解説機能をフル活用できます。
              </p>
            </div>
            <div className="flex flex-col items-center">
              <DeviceTabletIcon className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold mb-2">タブレット</h3>
              <p className="text-center max-w-xs">
                実際の試験と似た表示になり、本番の雰囲気が味わえます。文字も大きくなりストレスなく学習できます。
              </p>
            </div>
            <div className="flex flex-col items-center">
              <DevicePhoneIcon className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold mb-2">スマートフォン</h3>
              <p className="text-center max-w-xs">
                いつでもどこでも学習できるので、２回目以降の復習に最適です。常に英語に触れる環境が体験できます。
              </p>
            </div>


          </div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            まずは無料で体験！
          </h2>

          <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="flex-1 bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center">
                無料版
              </h3>
              <p className="text-center text-gray-600 mb-6">
                ２０２５年の最新問題にアクセスできます
              </p>
              {/* <p className="text-center text-red-500 mb-6 text-bold text-2xl">
                緊急キャンペーン！
              </p>
              <p className="text-center text-red-500 mb-6 text-bold text-xl">
                ７月末まで有料機能を無料開放！
              </p> */}

              <div className="text-center mb-8">
                <span className="text-4xl font-bold">¥0</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>AppleかGoogleでログインできます。メールでも登録できます。</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>アプリが自分にあってるか、試してみませんか？</span>
                </li>
              </ul>

              <Link
                href="/dashboard"
                className="block w-[90%] mx-auto text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="ダッシュボードへ移動して学習を開始"
              >
                今すぐ始める
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="flex-1 bg-blue-600 text-white rounded-lg p-8 shadow-xl relative">
              <div className="absolute -top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold text-sm">
                おすすめ
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                有料版
              </h3>
              <p className="text-center text-blue-100 mb-6">
                過去問題でガチに対策したい学生様向け
              </p>

              <div className="text-center mb-8">
                <span className="text-4xl font-bold">¥500</span>
                <span className="text-blue-200 ml-2">/ 買い切り</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>10年分の全過去問題にアクセスできます</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                    試験直前キャンペーン価格（通常は千円）
                </li>
              </ul>

              <Link
                href="/dashboard"
                className="block w-[90%] mx-auto text-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                aria-label="ダッシュボードへ移動して学習を開始"
              >
                今すぐ始める
              </Link>
            </div>
          </div>

          {/* <div className="text-center mt-8 text-gray-600">
            <p>※有料プランの解約は１４日以内なら全額返金可能です</p>
          </div> */}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="ml-3">
              <h3 className="text-xl font-bold mb-4 text-orange-500">共通テスト英語対策アプリ</h3>
              <p className="text-gray-400">
                共通テスト英語に関する英語力をつけ、試験に臨むテクニックまで習得できるアプリ
              </p>
              <div className="flex gap-4 mt-3">
                <div className="ml-2">
                  <a
                    href="https://apps.apple.com/jp/app/%E5%85%B1%E9%80%9A%E3%83%86%E3%82%B9%E3%83%88%E8%8B%B1%E8%AA%9E%E5%AF%BE%E7%AD%96%E3%82%A2%E3%83%97%E3%83%AA/id6744387725"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/appstore.webp"
                      alt="TicTok"
                      className="mt-1 w-16"
                    />
                    <p className="text-xs mt-1 ml-2">iOS版</p>
                  </a>
                </div>
                <div className="ml-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.kyoutuu&hl=ja"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/google-play.png"
                      alt="google-play"
                      className="mt-0 w-20"
                    />
                    <p className="text-xs ml-2">Android版</p>
                  </a>
                </div>
                <div className="ml-2">
                  <a
                    href="https://www.tiktok.com/@kuotore/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/tiktok.png"
                      alt="TicTok"
                      className="w-8 h-8"
                    />
                    <p className="text-xs -ml-1">TicTok</p>
                  </a>
                </div>
                <div className="ml-2">
                  <a
                    href="https://www.kuotore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/KUOTOE_LOGO.png"
                      alt="kuotore"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                    <p className="text-xs -ml-2">クオトレ</p>
                  </a>
                </div>

              </div>
              <div className="flex gap-4 mt-3">
                <div className="ml-2">
                  <a
                    href="https://apps.apple.com/jp/app/atango/id6748890454"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/atango-192x192.png"
                      alt="Atango"
                      className="mt-1 w-10"
                    />
                    <p className="text-xs mt-1">Atango</p>
                  </a>
                </div>

              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    特徴
                  </a>
                </li>
                <li>
                  <a
                    href="#comparison"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    アプリの利点
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    お客様の声
                  </a>
                </li> */}
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    料金
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    アプリについて
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">サポート</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/kiyaku"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    利用規約
                  </a>
                </li>
                <li>
                  <a
                    href="/refund"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    返金ポリシー
                  </a>
                </li>
                <li>
                  <a
                    href="/policy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a
                    href="/tokushoho"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    特定商取引法に基づく表記
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 共通テスト英語対策アプリ. presented by             <Link
              href="https://kuotore.com"
              className="hover:text-white"
            >
              クオトレ
            </Link>
</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
