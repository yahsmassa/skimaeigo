"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/util";
import { translateSentence, readSentence } from "@/lib/util";
type props = {
  isSelected: boolean;
  selectedText: string;
};

export function ReadTranslate({ isSelected, selectedText }: props) {
  return (
    <div className="ml-2 md:ml-5 flex items-center ">
      <button
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => readSentence(selectedText)}
        disabled={!isSelected}
        className={cn(
          "ml-2 px-2 py-1 text-white rounded w-[160px]",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        選択部分の読み上げ
      </button>
      <button
        // onMouseDown={(e) => e.preventDefault()}
        onClick={() => translateSentence(selectedText)}
        disabled={!isSelected}
        className={cn(
          "ml-2 px-2 py-1 text-white rounded w-[60px]",
          process.env.NEXT_PUBLIC_DEBUG === "true" ? "hidden" : "hidden",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        翻訳
      </button>
    </div>
  );
}
