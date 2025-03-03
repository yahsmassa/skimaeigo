## インストール

// To install the client library using npm, execute the following
```bash
  npm i @paypayopa/paypayopa-sdk-node
```

## クライアントをビルドする

以下に定義するようにapikeyとsecretを追加してクライアントを構築します。 APIでは、認証方式としてHMAC採用していますが、SDKで認証を処理することが可能です。 認証について詳しく知りたい場合は [こちら](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#tag/Api-Authentication) を参照ください 。 Production_modeは、サンドボックス/本番環境の宛先を設定します。デフォルトのfalse設定は、サンドボックス環境に接続します。 Ture設定は、本番環境に接続します。
```bash
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

// 環境変数または定数として定義
const API_KEY: string = process.env.API_KEY;
const API_SECRET: string = process.env.API_SECRET;
const MERCHANT_ID: string = process.env.MERCHANT_ID;

PAYPAY.Configure({
  clientId: API_KEY,
  clientSecret: API_SECRET,
  merchantId: MERCHANT_ID,
  /* production_mode : サンドボックス環境/本番環境の接続先を設定します。
   * デフォルトのfalse設定ではサンドボックス環境に接続します。
   * True設定では本番環境に接続します。
   */
  productionMode: false,
});
```

## Create a QR Code

このフローを使用して支払いを受け取るには、まずコードを作成する必要があります。以下のパラメーターを使用してリクエストしてください。

| Field             | Required | Type                     | Description                                                                                                                                                 |
| ----------------- | -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| merchantPaymentId | Yes      | string <= 64 characters  | 加盟店から提供された一意の支払い取引ID                                                                                                                      |
| amount            | Yes      | integer <= 11 characters | 支払金額                                                                                                                                                    |
| codeType          | Yes      | string <= 64 characters  | 固定値: 'ORDER_QR'                                                                                                                                          |
| orderDescription  | No       | string <= 255 characters | 注文内容の説明。表示の見え方を確認する場合は, [こちら](https://www.paypay.ne.jp/opa/doc/jp/v1.0/files/OPA PayPayアプリでの表示.pdf#page=4) をご確認ください |
| isAuthorization   | No       | boolean                  | デフォルトではfalseとなります。売上を後で確定する場合はtrueに設定してください（事前認証および取得支払い）                                                   |
| redirectUrl       | No       | string                   | 支払い完了後に開くページ/アプリのURL。これは、Web URLまたはアプリへのディープリンクを設定することができます                                                 |
| redirectType      | No       | string                   | 支払いがウェブブラウザで発生している場合は「WEB_LINK」、アプリで支払いが発生している場合は「APP_DEEP_LINK」のいずれかになります。                           |
| userAgent         | No       | string                   | トランザクションの発生元であるWebブラウザーのUser Agent                                                                                                     |

userAgentパラメータが指定されている場合、モバイルデバイスでの支払い後、PayPayは購入者が使用しているブラウザへリダイレクトします。これは、javascript関数navigator.userAgentを活用することで取得することができます。 自動リダイレクトでは、以下のWebブラウザがサポートされています。

- Android - Chrome, Firefox, UC Browser, Yahoo Browser
- iOS - Chrome, Firefox, UC Browser, Yahoo Browser

他のwebブラウザの場合、ユーザーのデフォルト設定のブラウザがトランザクション後に開かれます。

// Creating the payload to create a QR Code, additional parameters can be added basis the API Documentation
```typescript
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

interface Amount {
  amount: number;
  currency: string;
}

interface PaymentPayload {
  merchantPaymentId: string;
  amount: Amount;
  codeType: string;
  orderDescription: string;
  isAuthorization: boolean;
  redirectUrl: string;
  redirectType: string;
  userAgent: string;
}

interface ResponseBody {
  BODY: {
    resultInfo: {
      code: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

// ペイロードの定義
const payload: PaymentPayload = {
  merchantPaymentId: "my_payment_id",
  amount: {
    amount: 1,
    currency: "JPY"
  },
  codeType: "ORDER_QR",
  orderDescription: "Mune's Favourite Cake",
  isAuthorization: false,
  redirectUrl: "https://paypay.ne.jp/",
  redirectType: "WEB_LINK",
  userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1"
};

// QRコード作成メソッドの呼び出し
PAYPAY.QRCodeCreate(payload, (response: ResponseBody) => {
  // メソッド呼び出しが成功した場合に結果コードを出力
  console.log(response.BODY.resultInfo.code);
});
```

SUCCESS が返却された場合APIは正しく実行されています。支払いが完了すると、response.data.statusのステータスが CREATED から COMPLETED に変わります。支払いの事前認証の場合、response.data.statusのステータスは CREATED から AUTHORIZED に変わります

レスポンス項目について詳細に知りたい 場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/createQRCode)をご確認ください。

応答で受け取ったURLを開いてPayPayアプリを開く必要があります。PayPayアプリがインストールされていない場合は、ブラウザー/Webview内でWebキャッシャーページを開きます。 最初にこれをテストし、Webview設定がアプリの起動をブロックしていないことを確認してください。

## Delete a QR Code

生成したコードを削除したい場合こちらを利用ください。 このAPIを使用する理由として、次のことが考えられます。

- ユーザーが注文をキャンセルした場合
- ユーザーがPayPayアプリを開いて支払いを行わず、競合状態が発生しない目的でコードを削除する場合

処理を実施する場合には、以下のパラメーターを使用してリクエストしてください。

| Field  | Required | Type   | Description                                               |
| :----- | :------- | :----- | :-------------------------------------------------------- |
| codeId | Yes      | string | これは、Create a Codeメソッドのレスポンス値に含まれます。 |
```typescript
// Calling the method to delete a QR Code
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

interface ResponseBody {
  BODY: {
    resultInfo: {
      code: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

// codeIdは事前に定義されている変数と想定
const codeId: string = 'YOUR_CODE_ID';

// QRコード削除メソッドの呼び出し
PAYPAY.QRCodeDelete([codeId], (response: ResponseBody) => {
  // メソッド呼び出しが成功した場合に結果コードを出力
  console.log(response.BODY.resultInfo.code);
});
```

レスポンス項目で SUCCESS が返却されていれば決済は成功しています。

レスポンス項目について詳細に知りたい 場合には、[[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/deleteQRCode)をご確認ください。

## Get Payment Details

決済情報について参照をすることができます。このAPIを利用し決済が完了しているか確認してください。create a codeの支払いプロセスは非同期で行われるため、このAPIをポーリング実装する必要があります。以下のパラメーターを設定することで、決済情報を参照することができます。

| Field             | Required | Type                    | Description                            |
| :---------------- | :------- | :---------------------- | :------------------------------------- |
| merchantPaymentId | Yes      | string <= 64 characters | 加盟店から提供された一意の支払い取引ID |

SUCCESS が返却された場合APIは正しく実行されています。支払いが完了すると、response.data.statusのステータスが CREATED から COMPLETED に変わります。 支払いの事前認証の場合、response.data.statusのステータスは CREATED から AUTHORIZED に変わります

レスポンス項目について詳細に知りたい 場合には、[[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/getPaymentDetails)をご確認ください。

## Cancel a payment

決済をキャンセルしたい場合にこちらを利用ください。通常の決済フローでは基本的には、Cancel a paymentを使いませんが以下の場合に利用ください。

- Capture a payment authorizationがタイムアウトし、キャンセルを実施したい場合
- Get Payment Detailsを実行したが状態がわからない場合

注：Cancel a paymentは、支払いが行われた翌日の00:14:59まで使用できます。 00:15 AM以降の場合、Refund a paymentを呼び出して支払いを払い戻します。

処理を実施する場合には、以下のパラメーターを使用してリクエストしてください。

| Field             | Required | Type                    | Description                            |
| :---------------- | :------- | :---------------------- | :------------------------------------- |
| merchantPaymentId | Yes      | string <= 64 characters | 加盟店から提供された一意の支払い取引ID |
```typescript
// Calling the method to cancel a Payment
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

interface ResponseBody {
  BODY: {
    resultInfo: {
      code: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  [key: string]: any;
}

// merchantPaymentIdは事前に定義されている変数と想定
const merchantPaymentId: string = 'YOUR_MERCHANT_PAYMENT_ID';

// 支払いキャンセルメソッドの呼び出し
PAYPAY.PaymentCancel([merchantPaymentId], (response: ResponseBody) => {
  // 注意: result変数が未定義です。元のコードにエラーがある可能性があります
  // console.log(result);

  // メソッド呼び出しが成功した場合に結果コードを出力
  console.log(response.BODY.resultInfo.code);
});
```

SUCCESS が返却された場合APIは正しく実行されています。

レスポンス項目について詳細に知りたい 場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/cancelPayment)をご確認ください。

## Refund payment

決済が正常に完了しユーザーへの商品の提供後に、返品する場合にRefund a paymentを使用ください。タイムアウトやシステム的なエラーが出て、決済処理を中止する場合には、Cancel a paymentを活用ください。主要な項目を以下に記載しますので、以下のパラメーターを使用してリクエストしてください。

| Field            | Required | Type                     | Description                              |
| :--------------- | :------- | :----------------------- | :--------------------------------------- |
| merchantRefundId | Yes      | string <= 64 characters  | 加盟店から提供された一意の払い戻し取引ID |
| paymentId        | Yes      | string <= 64 characters  | PayPayが決済後に発番する取引ID           |
| amount           | Yes      | integer <= 11 characters | 返金金額                                 |
| reason           | No       | string <= 255 characters | 返金理由                                 |

SUCCESS が返却された場合APIは正しく実行されています。

レスポンス項目について詳細に知りたい場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/refundPayment) を確認ください。

## Fetch refund status and details

返金処理(`Refund a payment`)がタイムアウトをした場合には、このAPIを利用ください。処理を実施する場合には、以下のパラメーターを使用してリクエストしてください。

| Field            | Required | Type                    | Description                          |
| :--------------- | :------- | :---------------------- | :----------------------------------- |
| merchantRefundId | Yes      | string <= 64 characters | 加盟店から提供された一意の返品取引ID |

SUCCESS が返却された場合APIは正しく実行されています。

レスポンス項目について詳細に知りたい 場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/getRefundDetails)をご確認ください。

## Capture a payment authorization

与信と売上を実装する場合、こちらをご利用ください。Create a CodeAPIでisAuthorizationをtrueとしてパラメータを設定していることを確認してください。主要な項目を以下に記載しますので、以下のパラメーターを使用してリクエストしてください。

| Field             | Required | Type                     | Description                                            |
| :---------------- | :------- | :----------------------- | :----------------------------------------------------- |
| merchantPaymentId | Yes      | string <= 64 characters  | 加盟店から提供された一意の返品取引ID                   |
| merchantCaptureId | Yes      | string <= 64 characters  | 加盟店から提供された一意のキャプチャトランザクションID |
| requestedAt       | Yes      | integer                  | エポックタイムスタンプ（秒単位）                       |
| amount            | Yes      | integer <= 11 characters | 売上金額                                               |
| orderDescription  | Yes      | string <= 255 characters | 売上の説明                                             |
```bash
// Creating the payload to capture a Payment Authorization, additional parameters can be added basis the API Documentation
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

interface Amount {
  amount: number;
  currency: string;
}

interface CapturePayload {
  merchantPaymentId: string;
  amount: Amount;
  merchantCaptureId: string;
  requestedAt: number;
  orderDescription: string;
}

interface ResponseBody {
  BODY: {
    resultInfo: {
      code: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
}

// ペイロードの定義
const payload: CapturePayload = {
  merchantPaymentId: 'merchant_payment_id',
  amount: {
    amount: 1,
    currency: 'JPY',
  },
  merchantCaptureId: 'merchant_capture_id',
  requestedAt: 1587460334340,
  orderDescription: 'Order Shipped, Cake with toppings',
};

// 支払い承認をキャプチャするメソッドの呼び出し
PAYPAY.PaymentAuthCapture(payload, (response: ResponseBody) => {
  // メソッド呼び出しが成功した場合に結果コードを出力
  console.log(response.BODY.resultInfo.code);
});
```

SUCCESS が返却された場合APIは正しく実行されています。

レスポンス項目について詳細に知りたい 場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/capturePaymentAuth)をご確認ください。

## Revert a payment authorization

与信中の支払いに対し注文のキャンセルが発生した場合、こちらを利用ください。与信を取り消し、ユーザーに払い戻します。主要な項目を以下に記載しますので、以下のパラメーターを使用してリクエストしてください。

| Field            | Required | Type                     | Description                                      |
| :--------------- | :------- | :----------------------- | :----------------------------------------------- |
| merchantRevertId | Yes      | string <= 64 characters  | 加盟店から提供された一意の取消トランザクションID |
| paymentId        | Yes      | string <= 64 characters  | PayPayが決済後に発番する取引ID                   |
| requestedAt      | Yes      | integer                  | エポックタイムスタンプ（秒単位）                 |
| reason           | No       | string <= 255 characters | 支払い承認を取り消す理由                         |

```bash
// Creating the payload to revert a Payment Authorization, additional parameters can be added basis the API Documentation
'use strict';

import * as PAYPAY from '@paypayopa/paypayopa-sdk-node';

interface RevertPayload {
  merchantRevertId: string;
  paymentId: string;
  reason: string;
}

interface ResponseBody {
  BODY: {
    resultInfo: {
      code: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
}

// ペイロードの定義
const payload: RevertPayload = {
  merchantRevertId: 'merchant_revert_id',
  paymentId: 'paypay_payment_id',
  reason: 'reason for revert',
};

// 支払い承認を取り消すメソッドの呼び出し
PAYPAY.PaymentAuthRevert(payload, (response: ResponseBody) => {
  // メソッド呼び出しが成功した場合に結果コードを出力
  console.log(response.BODY.resultInfo.code);
});
```

SUCCESS が返却された場合APIは正しく実行されています。

レスポンス項目について詳細に知りたい 場合には、 [[APIドキュメントガイド\]](https://www.paypay.ne.jp/opa/doc/jp/v1.0/webcashier#operation/revertAuth)をご確認ください。

## 突合ファイル

PayPayでは取引明細ファイル（突合ファイル）を日次の処理で生成し、Webhookで通知します。

#### 突合ファイル連携仕様

#### 残高ブロックありの場合

| Category                 | Description                                             | Note                                                        |
| :----------------------- | :------------------------------------------------------ | :---------------------------------------------------------- |
| ファイル連携方法         | Webhook                                                 |                                                             |
| ファイル名               | preauth_transaction_＜merchant_id＞_＜from＞_＜to＞.csv |                                                             |
| ファイル作成単位         | 加盟店（merchant_id）単位                               |                                                             |
| 実行サイクル             | 日次処理                                                | PayPay側の取引日時が作成対象日の 00:00:00 – 23:59:59 の範囲 |
| 通知時間                 | 毎日4:00 AM 以降                                        |                                                             |
| フォーマット             | CSV                                                     |                                                             |
| ファイル保持期間         | 2週間                                                   |                                                             |
| Character Code(content)  | SHIFT-JIS                                               |                                                             |
| Character Code(filename) | UTF-8                                                   |                                                             |
| newline code             | CRLF                                                    |                                                             |

#### 残高ブロックなしの場合

| Category                 | Description                                     | Note                                                        |
| :----------------------- | :---------------------------------------------- | :---------------------------------------------------------- |
| ファイル連携方法         | Webhook                                         |                                                             |
| ファイル名               | transaction_＜merchant_id＞_＜from＞_＜to＞.csv |                                                             |
| ファイル作成単位         | 加盟店（merchant_id）単位                       |                                                             |
| 実行サイクル             | Daily                                           | PayPay側の取引日時が作成対象日の 00:00:00 – 23:59:59 の範囲 |
| 通知時間                 | 毎日4:00 AM 以降                                |                                                             |
| フォーマット             | CSV                                             |                                                             |
| ファイル保持期間         | 2週間                                           |                                                             |
| Character Code(content)  | SHIFT-JIS                                       |                                                             |
| Character Code(filename) | UTF-8                                           |                                                             |
| newline code             | CRLF                                            |                                                             |

#### ファイルレイアウト

#### 残高ブロックありの場合

| Key                | Value from                                                                | Note                                 |
| :----------------- | :------------------------------------------------------------------------ | :----------------------------------- |
| orderId            | paymentId                                                                 | PayPayで採番された決済番号           |
| merchantId         | merchant_id                                                               | PayPayで採番された加盟店識別子       |
| brandName          | brandName                                                                 | PayPayで管理しているブランド名       |
| storeId            | storeId                                                                   | リクエスト時にセットされたstoreId    |
| storeName          | storeName                                                                 | PayPayで管理している店舗名           |
| terminalId         | terminalId                                                                | リクエスト時にセットされたterminalId |
| transactionStatus  | "AUTHORIZED" , "CANCELED" , "COMPLETED" , "EXPIRED", "FAILED", "REFUNDED" |                                      |
| acceptedAt         | 下の別表に記載                                                            |                                      |
| amount             | amount                                                                    | 絶対値表記のみ                       |
| orderReceiptNumber | 当機能では設定不可                                                        |                                      |
| methodOfPayment    | "wallet"                                                                  |                                      |
| merchantPaymentId  | 下の別表に記載                                                            | 当機能では設定不可                   |

merchantPaymentId、acceptedAtは、transactionStatus毎に値の取得元が変わるため、下記に記載します。

| transactionStatus | merchantPaymentId | acceptedAt                                                                                                      |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| AUTHORIZED        | merchantPaymentId | Create a payment authorization request: requestedAt  Get payment details response: requestedAt                  |
| CANCELED          | merchantRevertId  | Revert a payment authorization request: requestedAt  Get payment details response: revert.data.[].requestedAt   |
| COMPLETED         | merchantCaptureId | Capture a payment authorization response: acceptedAt  Get payment details response: captures.data.[].acceptedAt |
| EXPIRED           | merchantPaymentId | Get payment details response: expiresAt                                                                         |
| FAILED            | merchantPaymentId | Get payment details response: canceledAt                                                                        |
| REFUNDED          | merchantRefundId  | Refund a payment response: requestedAt  Get payment details response: refunds.data.[].requestedAt               |

#### 残高ブロックなしの場合

| Key                | Value from                                        | Note                                 |
| :----------------- | :------------------------------------------------ | :----------------------------------- |
| 決済番号           | paymentId                                         | PayPayで採番された決済番号           |
| 加盟店ID           | merchant_id                                       | PayPayで採番された加盟店識別子       |
| 屋号               | brandName                                         | PayPayで管理しているブランド名       |
| 店舗ID             | storeId                                           | リクエスト時にセットされたstoreId    |
| 店舗名             | storeName                                         | PayPayで管理している店舗名           |
| 端末番号/PosID     | terminalId                                        | リクエスト時にセットされたterminalId |
| 取引ステータス     | "取引完了" , "取引失敗" , "返金完了" , "返金失敗" |                                      |
| 取引日時           | acceptedAt                                        |                                      |
| 取引金額           | amount                                            | 返金の場合はマイナス記号あり         |
| レシート番号       | ""                                                | 当機能では設定不可                   |
| 支払い方法         | "PayPay残高" , "PayPayカード"                     |                                      |
| マーチャント決済ID | merchantPaymentId                                 | 加盟店で採番された決済番号           |

## Webhooks

#### Webhookの設定

PayPayは、アカウントでイベントが発生したときにアプリケーションに通知するWebhookを送信します。 通知を受信するためには、POSTメソッドを使用してクライアントにデータを送信するWebhook URLを設定する必要があります。 すべての通知データには、どのイベントが発生したかを判断するためにクライアントサービスで使用できるnotification_typeフィールドがあります。 Webhook処理が正常に終了した場合、200 OK のHTTPステータスコードを返してください。 レスポンスボディは必須ではないですが、"OK"など、簡単な文字列を返していただくことを推奨します。

#### Webhookでの通知

Webhookで通知されたpathからファイルを取得してください。

```json
{
  "notification_type":"file.created",
  "notification_id":"<UUID>",
  "fileType":"transaction_recon",
  "path":"https://<server_path>/<filename>?parameters",
  "requestedAt":"<epoch time>"
}
```

| Invalid request params |                        |                                              |
| ---------------------- | ---------------------- | -------------------------------------------- |
| 401                    | OP_OUT_OF_SCOPE        | The operation is not permitted               |
| 400                    | MISSING_REQUEST_PARAMS |                                              |
| 401                    | UNAUTHORIZED           | Unauthorized request                         |
| 404                    | OPA_CLIENT_NOT_FOUND   | OPA Client not found                         |
| 429                    | RATE_LIMIT             | Too many requests                            |
| 500                    | SERVICE_ERROR          |                                              |
| 500                    | INTERNAL_SERVER_ERROR  | Something went wrong on PayPay service side  |
| 503                    | MAINTENANCE_MODE       | Sorry, we are down for scheduled maintenance |

#### Create a QR Code

| Status | Code                                  | Message                                                                    |
| :----- | :------------------------------------ | :------------------------------------------------------------------------- |
| 400    | DUPLICATE_DYNAMIC_QR_REQUEST          | Duplicate Dynamic QR request error                                         |
| 400    | PRE_AUTH_CAPTURE_UNSUPPORTED_MERCHANT | Merchant do not support                                                    |
| 400    | PRE_AUTH_CAPTURE_INVALID_EXPIRY_DATE  | Provided Expiry Date is above the allowed limit of Max allowed expiry days |
| 400    | DYNAMIC_QR_BAD_REQUEST                | Dynamic QR bad request error                                               |

#### Get payment details

| Status | Code                         | Message                      |
| :----- | :--------------------------- | :--------------------------- |
| 400    | DYNAMIC_QR_PAYMENT_NOT_FOUND | Dynamic QR payment not found |
| 400    | DYNAMIC_QR_BAD_REQUEST       | Dynamic QR bad request error |

#### Delete a QRCode

| Status | Code                    | Message                      |
| :----- | :---------------------- | :--------------------------- |
| 400    | DYNAMIC_QR_ALREADY_PAID | Dynamic QR already paid      |
| 400    | DYNAMIC_QR_BAD_REQUEST  | Dynamic QR bad request error |
| 404    | DYNAMIC_QR_NOT_FOUND    | Dynamic qr code not found    |

#### Cancel a Payment

| Status | Code                  | Message                  |
| :----- | :-------------------- | :----------------------- |
| 400    | ORDER_NOT_REVERSIBLE  | Order cannot be reversed |
| 500    | INTERNAL_SERVER_ERROR | Request timed out        |

#### Refund a Payment

| Status | Code                  | Message                     |
| :----- | :-------------------- | :-------------------------- |
| 400    | INVALID_PARAMS        | Invalid parameters received |
| 400    | UNACCEPTABLE_OP       | Order cannot be refunded    |
| 400    | UNACCEPTABLE_OP       | Multiple refund not allowed |
| 400    | INVALID_PARAMS        | Invalid refund amount       |
| 400    | CANCELED_USER         | Canceled user               |
| 404    | RESOURCE_NOT_FOUND    | Order not found             |
| 500    | TRANSACTION_FAILED    | Transaction failed          |
| 500    | TRANSACTION_FAILED    | Transaction failed          |
| 500    | TRANSACTION_FAILED    | Balance exceeded            |
| 500    | INTERNAL_SERVER_ERROR | Request timed out           |

#### Fetch refund status and details

| Status | Code                  | Message           |
| :----- | :-------------------- | :---------------- |
| 404    | NO_SUCH_REFUND_ORDER  | Refund not found  |
| 500    | INTERNAL_SERVER_ERROR | Request timed out |

#### Capture a payment authorization

| Status | Code                                | Message                                                               |
| :----- | :---------------------------------- | :-------------------------------------------------------------------- |
| 202    | USER_CONFIRMATION_REQUIRED          | User confirmation required as requested amount is above allowed limit |
| 400    | UNACCEPTABLE_OP                     | Total transaction limit exceeds merchant limit                        |
| 400    | LIMIT_EXCEEDED                      | The payment amount exceeded upper limit. *1                           |
| 400    | USER_DEFINED_DAILY_LIMIT_EXCEEDED   | The payment amount exceeded user 24 hours defined limit. *1           |
| 400    | USER_DEFINED_MONTHLY_LIMIT_EXCEEDED | The payment amount exceeded user 30 days defined limit. *1            |
| 400    | ALREADY_CAPTURED                    | Cannot capture already captured acquiring order                       |
| 400    | CANCELED_USER                       | Canceled user                                                         |
| 400    | ORDER_EXPIRED                       | Order cannot be captured or updated as it has already expired         |
| 400    | ORDER_NOT_CAPTURABLE                | Order is not capturable                                               |
| 400    | REAUTHORIZATION_IN_PROGRESS         | Order is being reauthorized                                           |
| 400    | TOO_CLOSE_TO_EXPIRY                 | Order cannot be reauthorized as request is too close to expiry time   |

*1 : 2021年9月1日より本番環境に追加される予定です

#### Revert a payment authorization

| Status | Code                 | Message                 |
| :----- | :------------------- | :---------------------- |
| 400    | ORDER_NOT_CANCELABLE | Order is not cancelable |