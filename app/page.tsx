import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import AuthRedirect from "@/app/components/AuthRedirect";
import {
  Computer,
  BookOpenCheck,
  GraduationCap,
  BookOpenText,
  Check,
  Calculator,
  Languages,
  Smartphone,
  Tablet,
  Laptop,
  Database,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 font-sans">
      <AuthRedirect />
      <Navigation />

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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-orange-400">
              緊急キャンペーン！７月末まで
            </h1>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-orange-400">
              有料機能が無料で使える！
            </h1>
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
                記憶への定着や、文章構成の理解に、読み上げにかぶせるように発音すること（シャドーイング）は最高の学習方法です。選択した部分だけを読み上げ、選択を解除すると止めることができるのが嬉しい機能です。
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <BookOpenCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">単語の詳細（Web版限定）</h3>
              <p>
                選択した単語に関する詳細な説明をAIを使って表示します。動詞や形容詞などの他の品詞や、同じ意味の類義語などが確認できます。共通テストのように類似表現が多い問題に最適な機能です。
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <GraduationCap size={32} className="text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">文法解説（Web版限定）</h3>
              <p>
                選択した文章に関する文法をAIを使って解説します。文法書を探すことなく、ピンポイントで文法が理解できます。選択できる文章は３００文字までです。
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
                最も心地よく学習できるのはPCですが、タブレットで十分です。じっくりやるのはタブレット、スキマ時間の反復学習はスマホというように、使い分けるのが最適です。
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md">
              <div className="text-blue-600 mb-4">
                <BookOpenText size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">過去問を英語教材にする</h3>
              <p>
                ２０２５年の試験は無料でお試しいただけます。有料会員（１,０００円）になると１０年分の過去問題で学習できます。過去問題を教材に英語学習したい学生様には強くオススメします。
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
                    <span>手書きノートにはさまざまな詳細メモ、網羅的な内容になるのでボリュームが増えます、量をこなすたび肥大化します</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>発音の確認やリスニングの練習は別に対応する必要があります</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1">•</span>
                    <span>参考書や教科書での学習は順番に進み、その後には模擬試験を受けるなど、必然的に過程が長くなります、モチベーションの維持も大変です。</span>
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
                    <span>最初から過去問題に接します。講義・参考書・模擬試験はおのずと相互補完になります。<span className="text-blue-600 font-bold">最も実践的！</span></span>
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
                    <span>手書きノートには、24-6-1の表現復讐！（2024年の問題６の設問１）みたいな記述が多くなり、<span className="text-blue-600 font-bold">従来のノートより機能的でコンパクト</span>になります</span>
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
                    <span>全く英語力がない生徒でも、音読から始め、問題１だけを１０年分学習するなど、<span className="text-blue-600 font-bold">最初から本試験に近い学習</span>ができます</span>
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
            まずは無料で体験！
          </h2>

          <div className="flex flex-col lg:flex-row justify-center gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="flex-1 bg-white rounded-lg p-8 shadow-md border-2 border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-center">
                無料プラン
              </h3>
              <p className="text-center text-gray-600 mb-6">
                まずは共通テストを体験
              </p>
              <p className="text-center text-red-500 mb-6 text-bold text-2xl">
                緊急キャンペーン！
              </p>
              <p className="text-center text-red-500 mb-6 text-bold text-xl">
                ７月末まで有料機能を無料開放！
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
                  <span>タイマー・読み上げ・採点・翻訳機能、全て利用可能</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>自分の今の実力を試したい・共通テストの難しさを確認したい学生様</span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>アプリでどう学習できるのか試したい学生様</span>
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
                過去問題を本格教材として活用したい学生様向け
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
                    環境・技術・友情・セミナーなど設問のテーマを意識して解くと、繰り返しでてくるテーマなどが確認できます。５年分とくだけで実感できます。
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>
                    単語にもパターンがあることがわかります。同じ意味なのに、フォーマル・カジュアルで違った表現になり、読解が難しくなっていることも確認できます。
                  </span>
                </li>
                <li className="flex items-start">
                  <Check
                    size={20}
                    className="text-yellow-400 mr-2 flex-shrink-0 mt-1"
                  />
                  <span>グラフ解釈型・プレゼン資料型の設問形式に慣れると問題を回答するスピードが早くなります</span>
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

          {/* <div className="text-center mt-8 text-gray-600">
            <p>※有料プランの解約は１４日以内なら全額返金可能です</p>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            共通テスト英語対策は早く始めるほど有利
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            早い段階で過去問に多く接して、他の教材とも相互補完しながら
            <br />
            時間をかけて完璧にマスターするのって実戦的ですよね
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
              <h3 className="text-xl font-bold mb-4 text-orange-500">共通テスト英語対策アプリ</h3>
              <p className="text-gray-400">
                共通テスト英語の過去問題を最高の英語教材にするアプリ
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
                    href="https://www.instagram.com/kuotore/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/instagram_glyph_white.png"
                      alt="Instagram"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                    <p className="text-xs -ml-3">Instagram</p>
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
                    アプリが最強な理由
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
