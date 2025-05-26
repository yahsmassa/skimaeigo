"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/atoms/userAtom";
import { store } from "@/lib/store";
import Link from "next/link";

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
  };

  useEffect(() => {
    // ログインしている場合はダッシュボードにリダイレクト
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-2xl">
              英語共通テスト対策アプリ
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
              共通テストは、最高の英語教材です！
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              共通テストは総合的な英語力を試すために作られた問題です。高得点をとることは至難の業ですが、過去問を完全理解し、繰り返し学習することで、最高の英語教材になり、高得点を狙う実力がつきます。
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
                選択部分の読み上げ
              </h3>
              <p>
                英語に自信がなくても、何度も読み上げを聞いて、真似をすることで、英語力はつきます。選択したところだけ読み上げ、途中で止めることもできます。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">ランダムにアクセス</h3>
              <p>
                ２０２１年から２０２５年までの「問題５」だけを解くようなことができます。過去問を自分なりに分析することで高い応用力がつきます。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">タイマー機能</h3>
              <p>
                共通テストは、時間との戦いです。最も長い長文問題でも１５分以内に解く！を意識して、学習できます。
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Headphones size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">採点・翻訳機能</h3>
              <p>
                採点と正解、わからなかった単語・イディオムの確認も、ボタンで即座に確認。反復学習には最適な機能です。何度も復習することで知識が完璧になります。
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <Smartphone size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">マルチデバイス対応</h3>
              <p>
                最も心地よく学習できるのはPCですが、タブレットで十分です。じっくりやるのはタブレット、スキマ時間の反復学習はスマホというように、使い分けるのが最適です。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <CreditCard size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">過去問を英語教材にする</h3>
              <p>
                ２０２５年の試験は無料でお試しいただけます。有料会員（１,０００円）になると１０年分の過去問題学習ができます。過去問題を使って英語学習したい学生様には強くオススメします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            アプリを使った学習が最強な５つの理由
          </h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-8 bg-blue-600 text-white">
                <h3 className="text-2xl font-bold mb-6">従来の学習方法</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>参考書での学習や講義、模擬試験を経て、本番試験前になって実力確認のために過去問題を解きます。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>家や図書館で紙ベースの勉強、時間・場所・物理的な制約が多い</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>ノートにはさまざまな詳細メモ、網羅的な内容になるのでボリュームが増えます、量をこなすとさらに肥大化します</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>発音の確認やリスニングの練習は別に時間をとることに</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>参考書や教科書を段階的に学習して、その後、模擬試験を受けるなど、実戦までの過程が長くなります、モチベーションの維持も大変です。</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">
                  アプリを使った学習方法
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>最初にアプリで過去問題に接します。講義・参考書・模擬試験はおのずと相互補完になります。<span className="text-blue-600 font-bold">最も実践的！</span></span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>アプリのランダムアクセス性や採点・翻訳機能を使い、<span className="text-blue-600 font-bold">時間と場所を問わない学習が可能に！</span></span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>ノートには、24-6-1の表現復讐！（2024年の問題６の設問１）みたいな記述が多くなり、<span className="text-blue-600 font-bold">従来のノートより機能的でコンパクト</span>になります</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>読み上げ機能があるから、<span className="text-blue-600 font-bold">長文リスニングもピンポイント確認も簡単！</span>シャドーイングの練習にも最適です！</span>
                  </li>
                  <li className="flex items-start">
                    <Check
                      size={20}
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    />
                    <span>全く英語力がない生徒でも、音読から始め、問題１だけを１０年分学習するなど、<span className="text-blue-600 font-bold">最初から実戦学習</span>ができます</span>
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
            ３つのデバイスを最大活用
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
              <Laptop size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">パソコン</h3>
              <p className="text-center max-w-xs">
                画面が大きく、文書の選択もマウスで簡単、集中学習に最適です
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Tablet size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">タブレット</h3>
              <p className="text-center max-w-xs">
                実際の試験と似た表示になり、ストレスなく学習できます。リビングやカフェでも。
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Smartphone size={64} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">スマートフォン</h3>
              <p className="text-center max-w-xs">
                いつでもどこでも学習できるので、スキマ時間の反復学習に向いてます。
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
                "段落ごとに翻訳・解説、発音もピンポイントで読み上げできる、ホント、アプリなんですね。"
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
                "お風呂につかって、スマホで１問解いてます。毎日続けられるから、英語への抵抗感が薄れた。"
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
                "１０年分の問題をランダムに取り出せるので、課題に応じて授業で使ったりします。タブレットを使うと便利。"
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
                  <span>2025年度の最新問題にアクセスできます</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>基本的な機能、全て利用可能</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>タイマー・読み上げ・採点・翻訳・解説機能</span>
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
                  <span>
                    メール以外に、Google・Appleアカウントでログインできます
                  </span>
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
                  <span>
                    全ての問題をアプリの機能を使って理解することで、かなり英語力がつきます。
                  </span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>１０年分の問題を備えた参考書アプリになります</span>
                </li>
                {/* <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>14日間の返金保証</span>
                </li> */}
              </ul>

              <Link
                href="/signin"
                className="block w-[90%] mx-auto text-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                無料登録したのち有料プランに入る
              </Link>
            </div>
          </div>

          {/* <div className="text-center mt-8 text-gray-600">
            <p>※有料プランの解約は１４日以内なら全額返金可能です</p>
          </div> */}
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
                時間内に解く力・英語の基礎体力を身につけるための最適なアプリ
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
