import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import {
    SquarePlus
  } from "lucide-react";

const ShareIcon = () => {
  return (
    <div className="w-6 h-6 inline-block pt-1">
     <svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
       <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"></path>
     </svg>
    </div>
  );
};
const HomeAddIcon = () => {
  return (
    <div className="w-5 h-5 inline-block pt-1">
      <svg viewBox="0 0 1020 1020" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink">
          <path id="path1" fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="200" stroke-linecap="round" stroke-linejoin="round" d="M 258 130 L 856 130"/>
          <path id="-" fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="200" stroke-linecap="round" stroke-linejoin="round" d="M 257 909 L 855 909"/>
          <path id="path2" fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="100" stroke-linecap="round" stroke-linejoin="round" d="M 905.999756 135 L 906.002747 898.999939"/>
          <path id="path3" fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="97" stroke-linecap="round" stroke-linejoin="round" d="M 1517.999878 60 L 1262 -195.999878"/>
          <path id="path4" fill="#000000" fill-rule="evenodd" stroke="#000000" stroke-width="35" stroke-linecap="round" stroke-linejoin="round" d="M 503.098267 271.65509 L 551.375427 480.38678 L 449.941132 411.53302 L 198.453705 782.020508 L 141.234329 743.179932 L 392.721741 372.692444 L 291.287415 303.838684 Z"/>
      </svg>

    </div>
  );
};

const SquarePlusIcon = () => {
  return (
    <div className="w-6 h-6 inline-block pt-1">
      <SquarePlus />
    </div>
  );
};

const HowToUse: NextPage = () => {
  return (
    <>
      <Head>
        <title>使い方</title>
        <meta name="description" content="使い方" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:py-12">
          <main className="prose prose-sm sm:prose max-w-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              アプリについて
            </h1>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                このアプリはWEB版です
              </h2>
              <p className="text-gray-700 mb-4">
              Web版はブラウザ上で動くので、もっとも汎用性が高く機能的です。ただネットには接続されている必要があります。AppleやGoogleによる審査が必要ないので、もっとも早く新しい機能を反映させることができます。プレミアム会員への課金方法はApple・Googleなどでなく、PayPayとなります。
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                タブレットやスマホへのインストール
              </h3>
              <p className="text-gray-700 mb-4">
              AppStoreやPlayストアとは違った形でスマホやタブレットにインストールすることができます。ホーム画面のアイコンから起動できて便利です。
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-700">
                  まずChrome,Safariなどのブラウザで kyoutuu.com にアクセスします。
                </li>
                <li className="text-gray-700 ">
                  iPhone、iPadでは、SafariかChromeブラウザで <ShareIcon />「共有アイコン」をタップ、でてきたメニューから「ホーム画面に追加 <SquarePlusIcon />」を選んでください
                </li>
                <li className="text-gray-700">
                  Androidでは、Chromeブラウザの「ホーム画面に追加<HomeAddIcon />」をタップすると。インストールボタンが出てきます。
                </li>
                <li className="text-gray-700">
                  ホーム画面にアイコンが追加されます
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                iOS版とAndroid版について
              </h2>
              <p className="text-gray-700 mb-4">
              他にも、iOS版、Android版があり、それぞれのアプリストアからダウンロードできます。それぞれのアプリストアでダウンロードしたものは、それぞれのOSに依存するので、それぞれ少し異なる動きになります。こちらはインストール後はネットにつながっていなくても稼働します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                ショートカット
              </h2>
              <p className="text-gray-700 mb-2">
                キーボードが使えるPCでは、ショートカットを使うと便利です
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-gray-700">
                  Ctrl＋ r：読み上げを行います
                </li>
                <li className="text-gray-700 ">
                Ctrl＋ w：単語について同義語を含めて詳細解説（AI）、単語を選択しないとエラーになります
                </li>
                <li className="text-gray-700">
                Ctrl＋ t：選択部分の翻訳（AI）
                </li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                課金について
              </h2>
              <p className="text-gray-700 mb-2">
                申し訳ございませんが、Web版、iOS版、Android版、でユーザー管理・課金が別々となります。
                なのでどれか一つを選択するようお願いします。いろいろなデバイスで同じように動く、このWeb版がおすすめです。
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                株式会社KUOTORE（クオトレ）が作成したアプリです
              </h2>
              <p className="text-gray-700 mb-2">
                このアプリは株式会社クオトレによって作成されています。
                株式会社クオトレは、主に専門的な金融アプリの開発を行ってきました。今回、AIネーティブな開発に舵をきる流れのなかで、AIと教育の親和性が高いと判断したことから、このアプリを作成することとなりました。アプリ開発にはAIを多く活用しています。
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default HowToUse;
