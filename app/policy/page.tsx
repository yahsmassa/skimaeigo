import React from "react";
import Head from "next/head";
import { NextPage } from "next";

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | サービス名</title>
        <meta name="description" content="サービス名のプライバシーポリシー" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:py-12">
          <main className="prose prose-sm sm:prose max-w-none">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              プライバシーポリシー
            </h1>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                1. はじめに
              </h2>
              <p className="text-gray-700 mb-4">
                本プライバシーポリシーは、当社が提供するアプリケーション（以下「本サービス」といいます）における、ユーザーの個人情報の取り扱いについて定めるものです。当社は、ユーザーのプライバシーを尊重し、適用される法令に従って個人情報を保護することをお約束します。本サービスを利用することにより、ユーザーは本プライバシーポリシーに同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                2. 収集する情報
              </h2>
              <p className="text-gray-700 mb-3">
                当社は、以下の情報を収集することがあります：
              </p>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  2.1 ユーザーが提供する情報
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>アカウント情報（氏名、メールアドレス、パスワード）</li>
                  <li>プロフィール情報</li>
                  <li>
                    支払い情報（PayPay、Apple App Store、Google
                    Play経由での支払い）
                  </li>
                  <li>カスタマーサポートへのお問い合わせ内容</li>
                </ul>
              </div>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  2.2 自動的に収集される情報
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>デバイス情報（デバイスの種類、OS、ブラウザの種類）</li>
                  <li>IPアドレス</li>
                  <li>アプリケーションの使用状況とパフォーマンスデータ</li>
                  <li>クッキーおよび類似の技術を通じて収集される情報</li>
                </ul>
              </div>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  2.3 第三者から取得する情報
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>Google、Appleなどの認証サービスから提供される情報</li>
                  <li>支払い処理業者から提供される取引情報</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                3. 情報の利用目的
              </h2>
              <p className="text-gray-700 mb-2">
                当社は、収集した情報を以下の目的で利用します：
              </p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>アカウントの作成と管理</li>
                <li>本サービスの提供と改善</li>
                <li>カスタマーサポートの提供</li>
                <li>ユーザー認証と本人確認</li>
                <li>支払い処理と課金管理</li>
                <li>不正利用の防止とセキュリティの確保</li>
                <li>利用状況の分析と統計</li>
                <li>新機能や更新情報のお知らせ</li>
                <li>法的義務の遵守</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                4. 情報の共有と開示
              </h2>
              <p className="text-gray-700 mb-3">
                当社は、以下の場合を除き、ユーザーの個人情報を第三者と共有または開示することはありません：
              </p>

              <div className="ml-0 sm:ml-4 mb-3">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  4.1 ユーザーの同意がある場合
                </h3>
              </div>

              <div className="ml-0 sm:ml-4 mb-3">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  4.2 サービス提供のために必要な場合
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>支払い処理業者</li>
                  <li>クラウドサービスプロバイダー</li>
                  <li>分析サービスプロバイダー</li>
                </ul>
              </div>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  4.3 法的要請に応じる必要がある場合
                </h3>
                <ul className="list-disc ml-5 text-gray-700 space-y-1">
                  <li>法令に基づく要請</li>
                  <li>当社の権利や財産の保護</li>
                  <li>緊急事態における個人の安全確保</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                5. データの保管と保護
              </h2>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  5.1 データの保管期間
                </h3>
                <p className="text-gray-700 mb-2">
                  当社は、サービス提供に必要な期間、または法令で定められた期間、ユーザーの個人情報を保管します。不要となった個人情報は、安全な方法で削除または匿名化されます。
                </p>
              </div>

              <div className="ml-0 sm:ml-4 mb-4">
                <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-2">
                  5.2 データの保護措置
                </h3>
                <p className="text-gray-700 mb-2">
                  当社は、ユーザーの個人情報を不正アクセス、改ざん、漏洩から保護するために、適切な技術的・組織的措置を講じています。ただし、インターネット上での完全なセキュリティを保証することはできません。
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                6. ユーザーの権利
              </h2>
              <p className="text-gray-700 mb-3">
                ユーザーは、自身の個人情報に関して以下の権利を有します：
              </p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>個人情報へのアクセス権</li>
                <li>個人情報の訂正権</li>
                <li>個人情報の削除権（一定の条件下）</li>
                <li>個人情報の処理の制限を求める権利</li>
                <li>データポータビリティの権利</li>
                <li>異議申し立ての権利</li>
              </ul>
              <p className="text-gray-700 mt-2">
                これらの権利を行使するには、第10項に記載の連絡先までお問い合わせください。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                7. クッキーとトラッキング技術
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本サービスの機能向上と利用状況の分析のために、クッキーおよび類似の技術を使用しています。ユーザーは、ブラウザの設定を通じてクッキーの受け入れを管理することができますが、一部の機能が制限される場合があります。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                8. 子どものプライバシー
              </h2>
              <p className="text-gray-700 mb-4">
                本サービスは13歳未満の子どもを対象としていません。当社は、13歳未満の子どもから意図的に個人情報を収集することはありません。13歳未満の子どもの個人情報を収集したことが判明した場合、速やかに当該情報を削除します。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                9. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-700 mb-4">
                当社は、本プライバシーポリシーを随時更新することがあります。重要な変更がある場合は、本サービス内での通知または登録されたメールアドレスへの連絡により、ユーザーに通知します。最新のプライバシーポリシーは常に本サービス内で確認できます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                10. お問い合わせ
              </h2>
              <p className="text-gray-700 mb-3">
                本プライバシーポリシーに関するご質問やお問い合わせ、または個人情報に関する権利行使のご要望は、以下の連絡先までお願いいたします：
              </p>
              <p className="text-gray-700 mb-2">
                メール：kyoutuu-support@kuotore.com
              </p>
              <p className="text-gray-700 mb-2">郵送：</p>
              <address className="text-gray-700 not-italic ml-0 sm:ml-4">
                〒103-0027
                <br />
                東京都中央区日本橋3丁目2番14号　新槇町ビル別館第一 2階
                <br />
                株式会社KUOTORE
                <br />
                個人情報保護担当
              </address>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                11. データ管理者
              </h2>
              <p className="text-gray-700 mb-2">
                本サービスにおける個人情報の管理者は以下の通りです：
              </p>
              <address className="text-gray-700 not-italic ml-0 sm:ml-4">
                株式会社KUOTORE
                <br />
                〒103-0027
                <br />
                東京都中央区日本橋3丁目2番14号　新槇町ビル別館第一 2階
              </address>
            </section>

            <p className="text-sm text-gray-500 border-t pt-4 mt-8">
              最終更新日：2025年3月1日
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
