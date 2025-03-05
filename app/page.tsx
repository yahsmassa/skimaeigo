"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";
import Link from "next/link";
import { setPremiumStatus } from "@/lib/serverActionsFirebase";
import { getPaymentUrl } from "@/lib/util";
import {
  ChevronDown,
  Clock,
  Check,
  Smartphone,
  Tablet,
  Laptop,
  Headphones,
  CreditCard,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [user] = useAtom(userAtom, { store });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const test = async () => {
    // const result = await setPremiumStatus("QneWLYorhTQljQlwJf02amMAqub2");
    const result = await getPaymentUrl("yyabui@gmail.com");
    if (result) {
      console.log("result", result);
    }
  };

  // useEffect(() => {
  //   // ログインしている場合はダッシュボードにリダイレクト
  //   if (user) {
  //     router.push("/dashboard");
  //   }
  // }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-2xl">
              共通テスト対策アプリ
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="hover:text-blue-600 transition-colors"
            >
              特徴
            </a>
            <a
              href="#comparison"
              className="hover:text-blue-600 transition-colors"
            >
              従来との違い
            </a>
            <a
              href="#testimonials"
              className="hover:text-blue-600 transition-colors"
            >
              お客様の声
            </a>
            <a
              href="#pricing"
              className="hover:text-blue-600 transition-colors"
            >
              料金
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <ChevronDown
                size={24}
                className={`transform transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 py-2 shadow-inner">
            <div className="flex flex-col space-y-3">
              <a
                href="#features"
                className="hover:text-blue-600 transition-colors py-2"
              >
                特徴
              </a>
              <a
                href="#comparison"
                className="hover:text-blue-600 transition-colors py-2"
              >
                従来との違い
              </a>
              <a
                href="#testimonials"
                className="hover:text-blue-600 transition-colors py-2"
              >
                お客様の声
              </a>
              <a
                href="#pricing"
                className="hover:text-blue-600 transition-colors py-2"
              >
                料金
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              共通テストは、時間内に解くのが超難しい！
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              過去問に慣れて、時間内に解く練習をすることが大事です
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/signin"
                className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg text-center hover:bg-blue-50 transition-colors"
              >
                今すぐ始める
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white hover:text-blue-600 transition-colors"
              >
                詳細を見る
              </Link>
              <button
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg text-center hover:bg-white hover:text-blue-600 transition-colors"
                onClick={test}
              >
                TEST
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white rounded-lg shadow-xl p-2 max-w-xs">
              <img
                src="/images/smaho.webp"
                alt="アプリ画面イメージ"
                className="rounded"
              />
            </div>
            <div className="bg-white rounded-lg shadow-xl p-2 max-w-xs ml-2">
              <img
                src="/images/smaho2.webp"
                alt="アプリ画面イメージ"
                className="rounded"
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
            {/* Feature 1 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">
                スキマ時間で共通テスト対策
              </h3>
              <p>
                実戦では１問に費やせる時間は５分から１０分です。SNSをチェックする感覚で共通テストをピンポイントリアル体験。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">瞬時にアクセス・確認</h3>
              <p>
                問１、問２、という順番以外にも、各年の問５をまとめて解くなど、その都度、ランダムな選択で、瞬時に過去問題にアクセスできます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">タイマー機能</h3>
              <p>
                タイマーで時間を計測できるので、自分の解答スピードがわかります。時間内に解くことが重要なスキルです。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">読み上げ・翻訳機能</h3>
              <p>
                選択した文章の読み上げ、翻訳・イディオム解説機能で深掘り学習、問題がそのまま教材になります。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">マルチデバイス対応</h3>
              <p>
                電車ではスマホ、カフェではタブレット、家ではPCで学習など、全てのデバイスに対応しています。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">お得な料金プラン</h3>
              <p>
                会員登録で２０２５年の試験は無料で使えます。有料会員になると、２０１６年から１０年分の過去問題を全て使えます。有料会員は1000円、お支払いはPayPayで
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            従来のアプリとの違い
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-6">従来のアプリ</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>年度単位での学習が基本</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>まとまった時間が必要</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>問題集・ノートなど文房具が必要</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>問題単位で使える機能がない</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>発音や翻訳は別途確認が必要</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>一人での学習がベース</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">
                  私たちのアプリ
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>１問題単位で解く前提</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>スキマ時間を活用したSNS世代向け学習</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>スマホのみで完結、文房具不要</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>ボタンタップだけで全て完了</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>ピンポイント読み上げ・翻訳機能</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>画面共有でグループ学習が可能</span>
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
            あらゆるデバイスで利用可能
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <Smartphone size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">スマートフォン</h3>
              <p className="text-center max-w-xs">
                電車や待ち時間など、どこでも手軽に学習できます
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Tablet size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">タブレット</h3>
              <p className="text-center max-w-xs">
                カフェやリビングでじっくり学習できます
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Laptop size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">パソコン</h3>
              <p className="text-center max-w-xs">
                自宅で集中して長時間の学習に最適です
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            お客様の声
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/man1.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">高校2年生</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "友達と同じ画面みながら、一緒に勉強できるのが便利。お互いに解き方のコツを教え合えるのが良い！"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/man2.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">高校２年生</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "この問題を１０分で解かなきゃいけないの？と早い段階で知れてよかった。時間配分の大事さを実感できた！"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/man3.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">高校３年生</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "電車の中でも、しれっと目立たず勉強できるところが最高。毎日の通学時間が勉強時間に変わりました。"
              </p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/girl2.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">高校3年生</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "アプリで勉強できると思わなかったけど、タップで全部できて、とても便利。紙の問題集より使いやすい！"
              </p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/girl1.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">高校2年生</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "お風呂につかって、スマホで１問解いてます。毎日続けられるから、着実に力がついてきました。"
              </p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="/images/teacher1.webp"
                  alt="ユーザーアイコン"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">英語講師</p>
                  <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <p className="italic">
                "授業で使っています。私はPCで解説、生徒はタブレットで確認。授業の効率が格段に上がりました。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            料金プラン
          </h2>

          <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="flex-1 bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center">
                無料プラン
              </h3>
              <p className="text-center text-gray-600 mb-6">
                まずは試してみたい方向け
              </p>

              <div className="text-center mb-8">
                <span className="text-4xl font-bold">¥0</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>2025年の過去問題にアクセス</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>基本的な機能を全て利用可能</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>タイマー・採点・解説機能</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>マルチデバイス対応</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>Google・Appleアカウントでログインできます</span>
                </li>
              </ul>

              <Link
                href="/signin"
                className="block w-[90%] mx-auto text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                無料登録する
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="flex-1 bg-blue-600 text-white rounded-lg p-8 shadow-xl relative">
              <div className="absolute -top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-1 rounded-full font-bold text-sm">
                おすすめ
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                有料プラン
              </h3>
              <p className="text-center text-blue-100 mb-6">
                本格的に対策したい方向け
              </p>

              <div className="text-center mb-8">
                <span className="text-4xl font-bold">¥1,000</span>
                <span className="text-blue-200 ml-2">/ 年</span>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>10年分の全過去問題</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>無制限の問題アクセス</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>詳細な解説とヒント</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>選択範囲の読み上げ・翻訳機能</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>14日間の返金保証</span>
                </li>
              </ul>

              <Link
                href="/signin"
                className="block w-[90%] mx-auto text-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                無料登録したのち有料プランに入る
              </Link>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>※有料プランの解約は１４日以内なら全額返金可能です</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ始めて、共通テスト対策を効率化しよう
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            スキマ時間を活用して、毎日少しずつ。
            <br />
            時間内に解く力を身につけて、本番で実力を発揮しましょう。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signin"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              無料で始める <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              href="#features"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              詳細を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="ml-3">
              <h3 className="text-xl font-bold mb-4">英語共通テスト練習</h3>
              <p className="text-gray-400">
                時間内に解く力を身につけるための最適なアプリ
              </p>
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
                    従来との違い
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    お客様の声
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    料金
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
            <p>© 2025 英語共通テスト対策アプリ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
