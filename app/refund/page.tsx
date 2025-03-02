import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>返金ポリシー | サービス名</title>
        <meta name="description" content="kyoutuuの返金ポリシー" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:py-12">
          <main className="prose prose-sm sm:prose max-w-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              返金ポリシー
            </h1>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                1. 返金の申込
              </h2>
              <p className="text-gray-700 mb-4">
                アプリ購入から14日以内であれば返金を受け付けます。以下のフォームにお客様の情報を入力して送信してください。
                PayPayの残高からの購入の場合は即日返金できますが、それ以外では時間がかかる場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                2. 返金ができない場合
              </h2>
              <ul className="text-gray-700 mb-4 list-none pl-0">
                <li className="mb-2">⚪︎ ２度目の返金処理</li>
                <li className="mb-2">⚪︎ 購入後１５日以上経過しているもの</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
