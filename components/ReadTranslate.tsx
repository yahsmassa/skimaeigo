"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/util";
import { translateSentence, readSentence } from "@/lib/util";
type props = {
  isSelected: boolean;
};

export function ReadTranslate({ isSelected }: props) {
  return (
    <div className="flex items-center ">
      <button
        onClick={readSentence}
        disabled={!isSelected}
        className={cn(
          "ml-2 px-2 py-1  text-white rounded  w-[60px]",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        Read
      </button>
      <button
        onClick={translateSentence}
        disabled={!isSelected}
        className={cn(
          "ml-2 px-2 py-1  text-white rounded  w-[60px]",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        翻訳
      </button>
    </div>
  );
}
