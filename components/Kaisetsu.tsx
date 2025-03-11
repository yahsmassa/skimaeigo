"use client";
// 解説ボタン
import Swal from "sweetalert2";
import { cn } from "@/lib/util";
import translate from "@/public/data/translate.json";

export const Kaisetsu = (isShow: boolean, id: string) => {
  const html = translate.find((t) => t.id === id)?.html;
  if (!html) return null;
  return (
    <button
      onClick={() => {
        Swal.fire({
          title: "翻訳",
          html: html,
          confirmButtonText: "閉じる",
        });
      }}
      className={cn(
        "px-2 py-1 text-sm   bg-blue-500 text-white rounded hover:bg-blue-600",
        isShow ? "block" : "hidden"
      )}
    >
      翻訳
    </button>
  );
};
