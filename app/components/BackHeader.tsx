"use client";

import { useRouter } from "next/navigation";

export default function BackHeader() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-orange-500 font-bold text-2xl">
            共通テスト英語対策アプリ
          </span>
          <img
            src="/icons/icon-192x192.png"
            alt="アプリアイコン"
            className="h-8 w-8 ml-2"
          />
        </div>
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-800 font-bold transition-colors mr-10"
          aria-label="戻る"
        >
          戻る
        </button>
      </div>
    </nav>
  );
}


