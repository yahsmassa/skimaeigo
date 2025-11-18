import React from "react";
import Head from "next/head";
import BackHeader from "@/app/components/BackHeader";

export default function TransactionLawPage() {
  return (
    <>
    <BackHeader />
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Head>
        <title>特定商取引法に基づく表記 | KUOTORE</title>
        <meta
          name="description"
          content="株式会社KUOTOREの特定商取引法に基づく表記"
        />
      </Head>

      <main>
        <h1 className="text-2xl font-bold mb-6">特定商取引法に基づく表記</h1>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">1. 事業者情報</h2>
          <div className="space-y-2">
            <p>
              <span className="font-medium">事業者名：</span>株式会社KUOTORE
            </p>
            <p>
              <span className="font-medium">代表者名：</span>薮井康正
            </p>
            <p>
              <span className="font-medium">所在地：</span>
              東京都中央区日本橋3丁目2番14号　新槇町ビル別館第一 2階
            </p>
            <p>
              <span className="font-medium">連絡先：</span>contact@kuotore.com
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">2. 販売価格</h2>
          <ul className="list-disc pl-6">
            <li>有料プラン：1,000円（税込）</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            3. 代金の支払い方法と支払時期
          </h2>
          <ul className="list-disc pl-6">
            <li>支払い方法：PayPay決済</li>
            <li>支払時期：購入時に即時決済</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            4. 商品の引き渡し時期・提供時期
          </h2>
          <p>決済完了後、即時ご利用いただけます。</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            5. 返品・キャンセルについて
          </h2>
          <p>購入後２週間以内キャンセル可、一度のみ</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">6. その他の条件</h2>
          <ul className="list-disc pl-6">
            <li>本サービスの利用にはインターネット環境が必要です。</li>
            <li>推奨ブラウザ：Google Chrome、Safari最新版</li>
          </ul>
        </section>
      </main>
    </div>
    </>
  );
}
