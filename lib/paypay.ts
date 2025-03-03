import * as PAYPAY from "@paypayopa/paypayopa-sdk-node";

// 環境変数または定数として定義
const API_KEY: string = process.env.PAYPAY_API_KEY || "";
const API_SECRET: string = process.env.PAYPAY_API_SECRET || "";
const MERCHANT_ID: string = process.env.PAYPAY_MERCHANT_ID || "";

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

interface RevertPayload {
  merchantRevertId: string;
  paymentId: string;
  reason: string;
}

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

const qrCodeCreate = async (merchantPaymentId: string) => {
  // ペイロードの定義
  const payload: PaymentPayload = {
    merchantPaymentId: merchantPaymentId,
    amount: {
      amount: 1000,
      currency: "JPY",
    },
    codeType: "ORDER_QR",
    orderDescription: "有料会員購入",
    isAuthorization: false,
    redirectUrl: "https://paypay.ne.jp/",
    redirectType: "WEB_LINK",
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1",
  };
  // QRコード作成メソッドの呼び出し
  PAYPAY.QRCodeCreate(payload, (response: any) => {
    // メソッド呼び出しが成功した場合に結果コードを出力
    if ("BODY" in response && response.BODY && response.BODY.resultInfo) {
      // メソッド呼び出しが成功した場合に結果コードを出力
      console.log(response.BODY.resultInfo.code);
    } else {
      console.error("PayPay QRコード作成エラー:", response);
    }
  });
};

const qrCodeDelete = async (codeId: string) => {
  // QRコード削除メソッドの呼び出し
  PAYPAY.QRCodeDelete([codeId], (response: any) => {
    // メソッド呼び出しが成功した場合に結果コードを出力
    if ("BODY" in response && response.BODY && response.BODY.resultInfo) {
      // メソッド呼び出しが成功した場合に結果コードを出力
      console.log(response.BODY.resultInfo.code);
    } else {
      console.error("PayPay QRコード削除エラー:", response);
    }
  });
};

const paymentCancel = async (merchantPaymentId: string) => {
  // 支払いキャンセルメソッドの呼び出し
  PAYPAY.PaymentCancel([merchantPaymentId], (response: any) => {
    // メソッド呼び出しが成功した場合に結果コードを出力
    if ("BODY" in response && response.BODY && response.BODY.resultInfo) {
      // メソッド呼び出しが成功した場合に結果コードを出力
      console.log(response.BODY.resultInfo.code);
    } else {
      console.error("PayPay 支払いキャンセルエラー:", response);
    }
  });
};
// merchantPaymentIdは事前に定義されている変数と想定

const paymentAuthCapture = async (
  merchantPaymentId: string,
  merchantCaptureId: string
) => {
  // ペイロードの定義
  const payload: CapturePayload = {
    merchantPaymentId: merchantPaymentId,
    amount: {
      amount: 1,
      currency: "JPY",
    },
    merchantCaptureId: merchantCaptureId,
    requestedAt: 1587460334340,
    orderDescription: "Order Shipped, Cake with toppings",
  };

  // 支払い承認をキャプチャするメソッドの呼び出し
  PAYPAY.PaymentAuthCapture(payload, (response: any) => {
    // メソッド呼び出しが成功した場合に結果コードを出力
    if ("BODY" in response && response.BODY && response.BODY.resultInfo) {
      // メソッド呼び出しが成功した場合に結果コードを出力
      console.log(response.BODY.resultInfo.code);
    } else {
      console.error("PayPay 支払い承認キャプチャエラー:", response);
    }
  });
};

const paymentAuthRevert = async (
  merchantRevertId: string,
  paymentId: string
) => {
  // ペイロードの定義
  const payload: RevertPayload = {
    merchantRevertId: merchantRevertId,
    paymentId: paymentId,
    reason: "reason for revert",
  };

  // 支払い承認を取り消すメソッドの呼び出し
  PAYPAY.PaymentAuthRevert(payload, (response: any) => {
    // メソッド呼び出しが成功した場合に結果コードを出力
    if ("BODY" in response && response.BODY && response.BODY.resultInfo) {
      // メソッド呼び出しが成功した場合に結果コードを出力
      console.log(response.BODY.resultInfo.code);
    } else {
      console.error("PayPay 支払い承認取り消しエラー:", response);
    }
  });
};

const webhoolJson = {
  notification_type: "file.created",
  notification_id: "<UUID>",
  fileType: "transaction_recon",
  path: "https://<server_path>/<filename>?parameters",
  requestedAt: "<epoch time>",
};
