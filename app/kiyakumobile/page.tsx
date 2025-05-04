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
                本モバイルアプリケーション（以下「本アプリ」といいます）をご利用いただきありがとうございます。本利用規約（以下「本規約」といいます）は、本アプリの利用に関する条件を定めるものです。本アプリをご利用になる前に、本規約をよくお読みください。本アプリをダウンロードまたは利用することにより、ユーザーは本規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                2. サービス内容
              </h2>
              <p className="text-gray-700 mb-4">
              本アプリは、共通テスト（英語）試験を各問題単位で、スマホやタブレットを使うことによって、スキマ時間にどこでも学習できる事を意図して制作したアプリです。時間計測・採点・英文読み上げ・翻訳機能を有しています。用紙試験を、スマホやタブレットなどのデバイス用にプログラムで再構成している都合上、フォント・その他の書式、イラストの配置が原本と異なっている部分があります。サービス内容は予告なく変更される場合があります。アプリのアップデートにより機能が追加または変更されることがあります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                3. アカウント登録
              </h2>
              <p className="text-gray-700 mb-2">
                3.1
                本アプリの一部機能を利用するためには、App Store、Play Storeのアカウントが必要となります。
              </p>
              <p className="text-gray-700 mb-2">
                3.2
                アカウント登録の際には、正確かつ最新の情報を提供する必要があります。
              </p>
              <p className="text-gray-700 mb-2">
                3.3
                ユーザーは自身のアカウント情報の機密性を保持する責任があり、アカウントの不正使用に関する全ての責任を負います。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                4. 料金プラン
              </h2>
              <p className="text-gray-700 mb-2">
                4.1
                本アプリは、無料プランと有料プラン（プレミアム）を提供しています。
              </p>
              <p className="text-gray-700 mb-2">
                4.2
                有料プランの料金、支払い方法、更新条件については、本アプリ内で明示されます。
              </p>
              <p className="text-gray-700 mb-2">
                4.3 Apple App Storeで購入した場合は、Apple Inc.の定める「App Storeの利用規約」が適用されます。Google Playで購入した場合は、Google LLCの定める「Google Playの利用規約」が適用されます。
              </p>
              {/* <p className="text-gray-700 mb-2">
                4.4 サブスクリプションは、自動更新されます。自動更新を停止したい場合は、更新日の少なくとも24時間前までに、お使いのデバイスのアカウント設定から自動更新をオフにしてください。
              </p> */}
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                5. 支払いと返金
              </h2>
              <p className="text-gray-700 mb-2">
                5.1 有料プランの支払いは、Apple App StoreまたはGoogle
                Playの決済システムを通じて行われます。支払い処理の管理はRevenueCatを通じて行われます。
              </p>
              <p className="text-gray-700 mb-2">
                5.2
                返金ポリシーは、Apple App StoreまたはGoogle Playの規定に従います。原則として、サービス提供開始後のキャンセルによる返金はできません。返金をご希望の場合は、Apple App StoreまたはGoogle Playのサポートに直接お問い合わせください。
              </p>
              {/* <p className="text-gray-700 mb-2">
                5.3
                技術的な問題により本アプリが利用できなかった場合は、個別に対応いたします。
              </p> */}
              {/* <p className="text-gray-700 mb-2">
                5.4 無料トライアル期間が終了すると、自動的に有料サブスクリプションに移行します。無料トライアルを開始する際は、この点にご注意ください。
              </p> */}
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                6. 禁止事項
              </h2>
              <p className="text-gray-700 mb-2">
                ユーザーは以下の行為を行ってはなりません：
              </p>
              <p className="text-gray-700 mb-2">6.1 本アプリの不正利用</p>
              <p className="text-gray-700 mb-2">
                6.2 他のユーザーへの嫌がらせや迷惑行為
              </p>
              <p className="text-gray-700 mb-2">
                6.3 違法または有害なコンテンツの投稿・共有
              </p>
              <p className="text-gray-700 mb-2">
                6.4 本アプリのセキュリティを侵害する行為
              </p>
              <p className="text-gray-700 mb-2">
                6.5 本アプリの運営を妨害する行為
              </p>
              <p className="text-gray-700 mb-2">
                6.6 本アプリの逆コンパイル、リバースエンジニアリング、またはソースコードの抽出を試みる行為
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                7. 知的財産権
              </h2>
              <p className="text-gray-700 mb-2">
                7.1
                本アプリ内のコンテンツ（テキスト、画像、ロゴ、デザインなど）は、当社または正当なライセンス所有者に帰属します。
              </p>
              <p className="text-gray-700 mb-2">
                7.2
                ユーザーは、個人的な非商業的利用を超えて本アプリのコンテンツを複製、配布、修正することはできません。
              </p>
              <p className="text-gray-700 mb-2">
                7.3 本アプリのいかなる部分も、当社の書面による明示的な許可なく複製、再販売、または搾取することはできません。
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
                本アプリを利用することにより、ユーザーはプライバシーポリシーに同意したものとみなされます。
              </p>
              <p className="text-gray-700 mb-2">
                8.3 本アプリの利用に関連して収集されるデータは、Apple App StoreまたはGoogle Playのプライバシーガイドラインに従って処理されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                9. サービスの変更・中断・終了
              </h2>
              <p className="text-gray-700 mb-2">
                9.1
                当社は、予告なく本アプリの内容を変更、または一時的に中断することがあります。
              </p>
              <p className="text-gray-700 mb-2">
                9.2
                当社は、30日前の通知をもって本アプリを終了する権利を有します。
              </p>
              <p className="text-gray-700 mb-2">
                9.3 アプリのアップデートが提供された場合、継続して本アプリを利用するためには、最新バージョンへの更新が必要になる場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                10. 免責事項
              </h2>
              <p className="text-gray-700 mb-2">
                10.1
                本アプリは「現状有姿」で提供され、特定の目的への適合性や商品性を含む明示的または黙示的な保証はありません。
              </p>
              <p className="text-gray-700 mb-2">
                10.2
                当社は、本アプリの利用によって生じた直接的、間接的、偶発的、特別、結果的損害について責任を負いません。
              </p>
              <p className="text-gray-700 mb-2">
                10.3 当社は、Apple App StoreまたはGoogle Playにおけるアプリの配信に関連する問題について責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                11. 第三者サービス
              </h2>
              <p className="text-gray-700 mb-2">
                11.1 本アプリは、第三者が提供するサービスやコンテンツにアクセスするためのリンクを含む場合があります。
              </p>
              <p className="text-gray-700 mb-2">
                11.2 当社は、そのようなサービスやコンテンツについて責任を負わず、第三者のプライバシーポリシーやサービス条件に従うことをユーザーに推奨します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                12. 準拠法と管轄
              </h2>
              <p className="text-gray-700 mb-4">
                本規約は日本法に準拠し、本アプリに関連する紛争は日本国内の裁判所を専属的合意管轄とします。Apple App StoreまたはGoogle Playを通じてアプリを取得したユーザーには、各プラットフォームの利用規約の準拠法も適用される場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                13. プラットフォーム固有の条件
              </h2>
              <p className="text-gray-700 mb-2">
                13.1 Apple製デバイスユーザー向け：本アプリをApp Storeから取得した場合、Apple Inc.が提供する「App Storeサービス利用規約」も適用されます。Appleは本アプリのライセンサーではなく、本アプリに関するいかなる保守サポート義務も負いません。
              </p>
              <p className="text-gray-700 mb-2">
                13.2 Android製デバイスユーザー向け：本アプリをGoogle Playから取得した場合、Google LLCが提供する「Google Playサービス利用規約」も適用されます。Googleは本アプリのライセンサーではなく、本アプリに関するいかなる保守サポート義務も負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                14. 規約の変更
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本規約を随時変更する権利を有します。重要な変更がある場合は、本アプリ内で通知します。変更後も本アプリを継続して利用することにより、ユーザーは変更後の規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                15. お問い合わせ
              </h2>
              <p className="text-gray-700 mb-2">
                本規約に関するご質問やお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <p className="text-gray-700 mb-2">
                メール：kyoutuu-support@kuotore.com
              </p>
            </section>

            <p className="text-sm text-gray-500 border-t pt-4 mt-8">
              最終更新日：2025年5月5日
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;