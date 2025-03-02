import { getFunctions, httpsCallable } from "firebase/functions";

// PayPayの支払い処理を開始する関数
export const initiatePayment = async (
  userId: string
): Promise<{ url: string }> => {
  const functions = getFunctions();
  const createPaymentSession = httpsCallable(functions, "createPaymentSession");

  const result = await createPaymentSession({ userId });
  const data = result.data as { url: string };

  // 支払いURLに遷移
  window.location.href = data.url;

  return data;
};

// 支払い成功後の処理
export const handlePaymentSuccess = async (
  sessionId: string
): Promise<void> => {
  const functions = getFunctions();
  const confirmPayment = httpsCallable(functions, "confirmPayment");

  await confirmPayment({ sessionId });
};
