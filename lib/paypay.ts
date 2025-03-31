"use client";
import * as PAYPAY from "@paypayopa/paypayopa-sdk-node";
import { formatDate, cmpOrderId } from "./util";
// 環境変数または定数として定義
const API_KEY = String(process.env.NEXT_PUBLIC_PAYPAY_API_KEY);
const API_SECRET = String(process.env.NEXT_PUBLIC_PAYPAY_API_SECRET);
const MERCHANT_ID = String(process.env.NEXT_PUBLIC_PAYPAY_MERCHANT_ID);
const CLIENT_ID = String(process.env.NEXT_PUBLIC_PAYPAY_CLIENT_ID);


const timeStamp = () => new Date().getTime() / 1000; // 秒単位

PAYPAY.Configure({
  // clientId: CLIENT_ID,

  clientId: API_KEY,
  clientSecret: API_SECRET,
  merchantId: MERCHANT_ID,
  /* production_mode : サンドボックス環境/本番環境の接続先を設定します。
   * デフォルトのfalse設定ではサンドボックス環境に接続します。
   * True設定では本番環境に接続します。
   */
  // productionMode: true,
  productionMode: process.env.NEXT_PUBLIC_DEBUG === "true" ? false : true,
});

// エラーハンドリングのためのヘルパー関数
const handlePayPayResponse = (
  response: any,
  operation: string,
  resolve: (value: any) => void,
  reject: (reason?: any) => void,
  successCodes: number[] = [200]
) => {
  //   const serializedResponse = response.BODY;
  const serializedResponse = JSON.parse(JSON.stringify(response.BODY));
  if (successCodes.includes(response.STATUS)) {
    resolve(serializedResponse);
  } else {
    // エラーコードに応じたメッセージをログ出力
    if (response.STATUS === 400)
      console.log(`${operation}:入力パラメータエラー`);
    if (response.STATUS === 401) console.log(`${operation}:認証エラー`);
    if (response.STATUS === 404)
      console.log(`${operation}:要求されたリソースがありません`);
    if (response.STATUS === 500)
      console.log(`${operation}:PayPayサーバーエラー`);
    if (
      Math.floor(response.STATUS / 100) === 4 &&
      response.STATUS !== 400 &&
      response.STATUS !== 401 &&
      response.STATUS !== 404
    )
      console.log(`${operation}:クライアントエラー`);
    if (Math.floor(response.STATUS / 100) === 5 && response.STATUS !== 500)
      console.log(`${operation}:PayPayサーバーエラー`);
    reject(serializedResponse);
  }
};

// QRコード作成
export const qrCodeCreate = async (
  merchantPaymentId: string
): Promise<CreateResponse> => {
  // ペイロードの定義
  const payload: CreatePayload = {
    merchantPaymentId: merchantPaymentId,
    amount: {
      amount: 100,
      currency: "JPY",
    },
    codeType: "ORDER_QR",
    orderDescription:
      "お支払い後に、有料会員となり、１０年分の試験データを利用できます",
    requestedAt: timeStamp(),
    isAuthorization: false,
    // redirectUrl: "https://e21c-133-205-204-86.ngrok-free.app/dashboard",
    // redirectUrl: "http://localhost:3000/dashboard",
    redirectUrl: "https://kyoutuu.com/dashboard",
    redirectType: "WEB_LINK",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
  };

  return new Promise((resolve, reject) => {
    PAYPAY.QRCodeCreate(payload, (response: any) => {
      handlePayPayResponse(response, "QRCodeCreate", resolve, reject, [201]);
    });
  });
};

// QRコード削除
export const qrCodeDelete = async (codeId: string): Promise<DeleteResponse> => {
  return new Promise((resolve, reject) => {
    PAYPAY.QRCodeDelete([codeId], (response: any) => {
      handlePayPayResponse(response, "QRCodeDelete", resolve, reject);
    });
  });
};

// 決済の詳細を取得
export const getPaymentDetail = async (
  MerchantPaymentId: string
): Promise<DetailResponse> => {
  return new Promise((resolve, reject) => {
    PAYPAY.GetPaymentDetails([MerchantPaymentId], (response: any) => {
      handlePayPayResponse(response, "GetPaymentDetails", resolve, reject);
    });
  });
};

export const paymentCancel = async (
  merchantPaymentId: string
): Promise<CancelResponse> => {
  // 支払いキャンセルメソッドの呼び出し
  return new Promise((resolve, reject) => {
    PAYPAY.PaymentCancel([merchantPaymentId], (response: any) => {
      handlePayPayResponse(response, "QRCodeCancel", resolve, reject, [202]);
    });
  });
};

// 事前にユーザーの残高からブロックしていた決済金額を同じ決済手段で変更
export const paymentUpdate = async (
  requestId: string,
  paymentId: string,
  updatedAmount: number
): Promise<UpdateResponse> => {
  // ペイロードの定義
  const payload: UpdatePayload = {
    requestId: requestId,
    paymentId: paymentId,
    updatedAmount: {
      amount: updatedAmount,
      currency: "JPY",
    },
    requestedAt: timeStamp(),
    redirectUrl: "https://paypay.ne.jp/",
    redirectType: "WEB_LINK",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
  };
  // QRコード作成メソッドの呼び出し
  return new Promise((resolve, reject) => {
    PAYPAY.PaymentPreauthorize(payload, (response: any) => {
      handlePayPayResponse(
        response,
        "QRCodeUpdate",
        resolve,
        reject,
        [200, 201]
      );
    });
  });
};

// 事前にユーザーの残高からブロックしていた決済金額をキャプチャ(決済)
export const paymentCapture = async (
  merchantPaymentId: string,
  merchantCaptureId: string
): Promise<CaptureResponse> => {
  // ペイロードの定義
  const payload: CapturePayload = {
    merchantPaymentId: merchantPaymentId,
    amount: {
      amount: 1000,
      currency: "JPY",
    },
    merchantCaptureId: merchantCaptureId,
    requestedAt: timeStamp(),
    orderDescription: "Order Shipped, Cake with toppings",
  };
  return new Promise((resolve, reject) => {
    // 支払い承認をキャプチャするメソッドの呼び出し
    PAYPAY.PaymentAuthCapture(payload, (response: any) => {
      handlePayPayResponse(
        response,
        "QRCodeCapture",
        resolve,
        reject,
        [200, 202]
      );
    });
  });
};

// ユーザーの残高から決済金額をブロックしている状態をキャンセル
export const paymentRevert = async (
  merchantRevertId: string,
  paymentId: string
): Promise<RevertResponse> => {
  // ペイロードの定義
  const payload: RevertPayload = {
    merchantRefundId: merchantRevertId,
    paymentId: paymentId,
    requestedAt: timeStamp(),
  };
  return new Promise((resolve, reject) => {
    // 支払い承認を取り消すメソッドの呼び出し
    PAYPAY.PaymentAuthRevert(payload, (response: any) => {
      handlePayPayResponse(response, "QRCodeRevert", resolve, reject);
    });
  });
};

// ユーザーへ返金
export const paymentRefund = async (
  merchantPaymentId: string,
  OrderId: string
): Promise<RefundResponse> => {
  // ペイロードの定義
  const payload: RefundPayload = {
    merchantRefundId: merchantPaymentId,
    paymentId: OrderId,
    amount: {
      amount: 1000,
      currency: "JPY",
    },
    requestedAt: timeStamp(),
  };
  // QRコード作成メソッドの呼び出し
  return new Promise((resolve, reject) => {
    PAYPAY.PaymentRefund(payload, (response: any) => {
      handlePayPayResponse(response, "QRCodeRefund", resolve, reject);
    });
  });
};

// pymentIdを指定しなければ、最新の返金トランザクションを返す
export const getRefundDetail = async (
  merchantPaymentId: string,
  paymentId?: string
): Promise<RefundResponse> => {
  let payload = [merchantPaymentId];
  if (paymentId) payload = [...payload, paymentId];
  return new Promise((resolve, reject) => {
    PAYPAY.GetRefundDetails(payload, (response: any) => {
      handlePayPayResponse(
        response,
        "GetRefundDetails",
        resolve,
        reject,
        [200, 201]
      );
    });
  });
};

const webhoolJson = {
  notification_type: "file.created",
  notification_id: "<UUID>",
  fileType: "transaction_recon",
  path: "https://<server_path>/<filename>?parameters",
  requestedAt: "<epoch time>",
};

// TypeScriptで型を定義
// 基本的な金額の型
type Amount = {
  amount: number;
  currency: string;
};

// ポイントの型
type Point = {
  amount: number;
  type: string; // "REGULAR"
};

// 支払い方法の型
type PaymentMethod = {
  amount: Amount;
  type: string; //"WALLET" "PAY_LATER_CC" "CREDIT_CARD" "POINT" "HIVEX"
  breakdown?: { points?: Point[] };
};

// 注文アイテムの型
type OrderItem = {
  name: string; //商品名
  category?: string; //カテゴリ
  quantity: number; //現在のオーダーにおける商品数
  productId?: string; //加盟店システムの商品ID
  unitPrice?: Amount;
};

// リバートの型
type Revert = {
  acceptedAt: number;
  merchantRevertId: string;
  requestedAt: number;
  reason: string;
};

// 結果情報の型
type ResultInfo = {
  code: string;
  message: string;
  codeId: string; //より具体的なエラー検査のためのコード
};

// CreateCode型定義
type CreatePayload = {
  merchantPaymentId: string;
  amount: Amount;
  orderDescription?: string;
  orderItems?: OrderItem[];
  codeType: string; //固定文字列「ORDER_QR」をセット
  storeInfo?: string; //加盟店の店舗情報
  storeId?: string; //加盟店に紐づく店舗ID
  productType?: string; //PayPayシステムのプロダクトタイプ
  terminalId?: string; //端末ID
  requestedAt?: number; //リクエスト日時
  redirectUrl?: string; //支払い完了後に開くページ/アプリのURL
  redirectType?: string; // "WEB_LINK" など
  userAgent?: string; //PayPayアプリが起動し決済完了した後に起動するWEBブラウザを指定
  isAuthorization?: boolean; //デフォルトではFalse、先にユーザーの残高から決済金額をブロックして、後からキャプチャ(決済)する場合はtrue
  authorizationExpiry?: number; //有効期限。加盟店ごとに許可されている有効期間の範囲内で設定
};

type UpdatePayload = {
  requestId: string;
  paymentId: string;
  updatedAmount: Amount;
  requestedAt?: number;
  merchantComment?: string;
  redirectUrl?: string;
  redirectType?: string;
  userAgent?: string;
};

type CapturePayload = {
  merchantPaymentId: string; //一意に特定できるトランザクションID
  amount: Amount;
  merchantCaptureId: string; //Captureを一意に特定できるトランザクションID
  requestedAt: number;
  orderDescription: string; //キャプチャの説明
};

type RevertPayload = {
  merchantRefundId: string; //加盟店発番のトランザクション毎に返金を一意に特定できるトランザクションID
  paymentId: string; //PayPay発番の決済取引ID
  requestedAt: number;
  reason?: string;
};

type RefundPayload = {
  merchantRefundId: string; //加盟店発番のトランザクション毎に返金を一意に特定できるトランザクションID
  paymentId: string; //PayPay発番の決済取引ID
  amount: Amount;
  requestedAt: number;
  reason?: string;
};
// データ部分の型

// レスポンス全体の型
type CreateResponse = {
  resultInfo: ResultInfo;
  data: CreateData | null;
};

type DeleteResponse = {
  resultInfo: ResultInfo;
  data: {
    grStatus: string; //"DELETED"
  } | null;
};

type DetailResponse = {
  resultInfo: ResultInfo;
  data: DetailData | null;
};

type CancelResponse = {
  resultInfo: ResultInfo;
  data: null;
};

type UpdateResponse = {
  resultInfo: ResultInfo;
  data: UpdateData | null;
};

type CaptureResponse = {
  resultInfo: ResultInfo;
  data: CaptureData | null;
};

type RevertResponse = {
  resultInfo: ResultInfo;
  data: RevertData | null;
};

type RefundResponse = {
  resultInfo: ResultInfo;
  data: RefundData | null;
};

type Capture = {
  acceptedAt: number;
  merchantCaptureId: string; //加盟店発番のトランザクション毎にCaptureを一意に特定できるトランザクションID
  amount: Amount;
  orderDescription?: string;
  requestedAt: number;
  expiresAt?: number;
  status: string; // "COMPLETED" など
};

type CreateData = {
  codeId: string;
  url: string; //PayPayを呼びすためのURL（インストールされている場合、アプリが起動します）
  deeplink: string; //PayPayアプリを呼び出すディープリンク(このフローでは使用しない)
  expiryDate: number; //QRコードの有効期限のエポックタイムスタンプ（秒単位）
  merchantPaymentId: string; //加盟店発番のトランザクション毎に一意に特定できるトランザクションID
  amount: Amount;
  orderDescription: string; //注文内容の説明 （アプリでの表示を確認）
  orderItems?: OrderItem[];
  codeType: string; //固定文字列「ORDER_QR」をセット
  storeInfo: string; //加盟店の店舗情報
  storeId: string; //加盟店に紐づく店舗ID
  productType: string; //PayPayシステムのプロダクトタイプ
  terminalId: string; //端末ID
  requestedAt: number; //リクエスト日時
  redirectUrl: string; //支払い完了後に開くページ/アプリのURL
  redirectType: string; //固定文字列「WEB_LINK」をセット
  isAuthorization: boolean; //デフォルトではFalse、先にユーザーの残高から決済金額をブロックして、後からキャプチャ(決済)する場合はtrue
  authorizationExpiry: number; //有効期限。加盟店ごとに許可されている有効期間の範囲内で設定
};

type CaptureData = {
  paymentId: string;
  status: string; // "COMPLETED"
  acceptedAt: number;
  refunds: RefundData[] | null;
  captures: {
    data: Capture[];
  };
  merchantPaymentId: string; //一意に特定できるトランザクションID
  userAuthorizationId: string; //ユーザー認可フローによって返却されたPayPayユーザー認可ID
  amount: Amount;
  requestedAt: number;
  expiresAt: number;
  storeId: string; //加盟店に紐付く店舗ID
  terminalId: string; //店舗に紐付く端末ID
  orderReceiptNumber: string; //加盟店発番の注文番号
  orderDescription: string; //注文内容の説明
  orderItems: OrderItem[];
  assumeMerchant?: string; //加盟店識別子（Agentクライアントの場合のみ設定される）
  paymentMethods: PaymentMethod[]; //支払い方法のリスト
};

type RevertData = {
  status: string; //CREATED:受付済み, REFUNDED:返金完了, REFUND_FAILED:返金失敗
  acceptedAt: number;
  merchantRefundId: string;
  paymentId: string;
  amount: Amount;
  requestedAt: number;
  reason?: string;
  assumeMerchant?: string;
};

type DetailData = {
  paymentId: string; //PayPay発番の決済取引ID
  status: string; // "CREATED" など
  acceptedAt: number; //エポックタイムスタンプ（秒単位）
  refunds?: {
    data: RefundData[];
  };
  captures?: {
    data: Capture[];
  };

  revert?: Revert;
  merchantPaymentId: string;
  amount: Amount;
  requestedAt: number;
  expiresAt: number;
  canceledAt: number;
  storeId: string;
  terminalId: string;
  orderReceiptNumber: string;
  orderDescription: string;
  orderItems?: OrderItem[];
  metadata: Record<string, any>;
  paymentMethods?: PaymentMethod[];
};

// リファンドデータの型
type RefundData = {
  status: string; //CREATED:受付済み, REFUNDED:返金完了, REFUND_FAILED:返金失敗
  acceptedAt: number;
  merchantRefundId: string; //加盟店発番のトランザクション毎に返金を一意に特定できるトランザクションID
  paymentId: string; //PayPay発番の決済取引ID
  amount: Amount;
  requestedAt: number;
  reason?: string;
  assumeMerchant?: string; //加盟店識別子（エージェントクライアントの場合のみ設定される）
};

type UpdateData = {
  requestId: string;
  paymentId: string;
  updatedAmount: Amount;
  requestedAt: number;
  merchantComment: string;
  acceptedAt: number;
  expiresAt: number;
  paymentMethods: PaymentMethod[];
};

export type WebhookResponse = {
  notification_type: string; //Transaction
  store_id: string | null;
  paid_at: string | null;
  expires_at: string | null;
  merchant_order_id: string; // 加盟店発番の注文番号
  pos_id: string; // Order Id
  order_amount: string;
  merchant_id: string; //
  state: string; //FAILED, COMP
  order_id: string; // Order Id
  authorized_at: string | null;
};

export const getPaymentUrl = async (uid: string) => {
  if (uid.length === 0) return;
  try {
    const orderId = cmpOrderId(uid);
    const result = await qrCodeCreate(orderId);
    const url = result?.data?.url;
    return url;
  } catch (error) {
    console.error("QRコード作成エラー", error);
    // より詳細なエラー情報を記録
    if (error instanceof Error) {
      console.error("エラーメッセージ:", error.message);
      console.error("エラースタック:", error.stack);
    }
    return null;
  }
};
