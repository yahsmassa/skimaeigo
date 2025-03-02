import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const TermsOfService: NextPage = () => {
  return (
    <>
      <Head>
        <title>利用規約 | サービス名</title>
        <meta name="description" content="サービス名の利用規約" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:py-12">
          <main className="prose prose-sm sm:prose max-w-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              利用規約
            </h1>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                1. はじめに
              </h2>
              <p className="text-gray-700 mb-4">
                本アプリケーション（以下「本サービス」といいます）をご利用いただきありがとうございます。本利用規約（以下「本規約」といいます）は、本サービスの利用に関する条件を定めるものです。本サービスをご利用になる前に、本規約をよくお読みください。本サービスを利用することにより、ユーザーは本規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                2. サービス内容
              </h2>
              <p className="text-gray-700 mb-4">
                本サービスは、ユーザーに対してオンラインコンテンツおよび関連機能を提供します。サービス内容は予告なく変更される場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                3. アカウント登録
              </h2>
              <p className="text-gray-700 mb-2">
                3.1
                本サービスの一部機能を利用するためには、アカウント登録が必要です。
              </p>
              <p className="text-gray-700 mb-2">
                3.2
                アカウント登録の際には、正確かつ最新の情報を提供する必要があります。
              </p>
              <p className="text-gray-700 mb-2">
                3.3
                ユーザーは自身のアカウント情報の機密性を保持する責任があり、アカウントの不正使用に関する全ての責任を負います。
              </p>
              <p className="text-gray-700 mb-2">
                3.4 13歳未満のお子様は本サービスを利用できません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                4. 料金プラン
              </h2>
              <p className="text-gray-700 mb-2">
                4.1
                本サービスは、無料プランと有料プラン（プレミアム）を提供しています。
              </p>
              <p className="text-gray-700 mb-2">
                4.2
                有料プランの料金、支払い方法、更新条件については、本サービス内で明示されます。
              </p>
              <p className="text-gray-700 mb-2">
                4.3 Apple App StoreまたはGoogle
                Play経由で購入した場合は、それぞれのプラットフォームの支払い条件が適用されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                5. 支払いと返金
              </h2>
              <p className="text-gray-700 mb-2">
                5.1 有料プランの支払いは、PayPay、Apple App Store、Google
                Playなどの指定された支払い方法で行われます。
              </p>
              <p className="text-gray-700 mb-2">
                5.2
                返金ポリシーは、各支払いプラットフォームの規定に従います。原則として、サービス提供開始後のキャンセルによる返金はできません。
              </p>
              <p className="text-gray-700 mb-2">
                5.3
                技術的な問題により本サービスが利用できなかった場合は、個別に対応いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                6. 禁止事項
              </h2>
              <p className="text-gray-700 mb-2">
                ユーザーは以下の行為を行ってはなりません：
              </p>
              <p className="text-gray-700 mb-2">6.1 本サービスの不正利用</p>
              <p className="text-gray-700 mb-2">
                6.2 他のユーザーへの嫌がらせや迷惑行為
              </p>
              <p className="text-gray-700 mb-2">
                6.3 違法または有害なコンテンツの投稿・共有
              </p>
              <p className="text-gray-700 mb-2">
                6.4 本サービスのセキュリティを侵害する行為
              </p>
              <p className="text-gray-700 mb-2">
                6.5 本サービスの運営を妨害する行為
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                7. 知的財産権
              </h2>
              <p className="text-gray-700 mb-2">
                7.1
                本サービス内のコンテンツ（テキスト、画像、ロゴ、デザインなど）は、当社または正当なライセンス所有者に帰属します。
              </p>
              <p className="text-gray-700 mb-2">
                7.2
                ユーザーは、個人的な非商業的利用を超えて本サービスのコンテンツを複製、配布、修正することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                8. プライバシー
              </h2>
              <p className="text-gray-700 mb-2">
                8.1
                当社のプライバシーポリシーは、ユーザー情報の収集、使用、保護に関する方針を定めています。
              </p>
              <p className="text-gray-700 mb-2">
                8.2
                本サービスを利用することにより、ユーザーはプライバシーポリシーに同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                9. サービスの変更・中断・終了
              </h2>
              <p className="text-gray-700 mb-2">
                9.1
                当社は、予告なく本サービスの内容を変更、または一時的に中断することがあります。
              </p>
              <p className="text-gray-700 mb-2">
                9.2
                当社は、30日前の通知をもって本サービスを終了する権利を有します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                10. 免責事項
              </h2>
              <p className="text-gray-700 mb-2">
                10.1
                本サービスは「現状有姿」で提供され、特定の目的への適合性や商品性を含む明示的または黙示的な保証はありません。
              </p>
              <p className="text-gray-700 mb-2">
                10.2
                当社は、本サービスの利用によって生じた直接的、間接的、偶発的、特別、結果的損害について責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                11. 準拠法と管轄
              </h2>
              <p className="text-gray-700 mb-4">
                本規約は日本法に準拠し、本サービスに関連する紛争は日本国内の裁判所を専属的合意管轄とします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                12. 規約の変更
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本規約を随時変更する権利を有します。重要な変更がある場合は、本サービス内で通知します。変更後も本サービスを継続して利用することにより、ユーザーは変更後の規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                13. お問い合わせ
              </h2>
              <p className="text-gray-700 mb-2">
                本規約に関するご質問やお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <p className="text-gray-700 mb-2">
                メール：kyoutuu-support@kuotore.com
              </p>
            </section>

            <p className="text-sm text-gray-500 border-t pt-4 mt-8">
              最終更新日：2023年12月1日
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
