// 支払い成功ページ
import { Suspense } from "react";
import PaymentContent from "./PaymentContent";

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>ローディング中...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
