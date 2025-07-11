"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/util";
import { translateSentence, readSentence,  explainGrammer } from "@/lib/util";
import { Volume2, BookA, BookOpenCheck, Languages, BookMarked, GraduationCap } from "lucide-react";

type props = {
  isSelected: boolean;
  selectedText: string;
  onButtonClick?: () => void;
};

export function ReadTranslate({ isSelected, selectedText, onButtonClick }: props) {
  const handleButtonClick = () => {
    onButtonClick?.();
  };

  return (
    <div className="ml-2 md:ml-5 flex items-center ">
      <button
        onMouseDown={(e) => e.preventDefault()}
        onTouchStart={(e) => e.preventDefault()}
        onClick={(e) => {
          e.preventDefault();
          handleButtonClick();
          readSentence(selectedText);
        }}
        disabled={!isSelected}
        className={cn(
          "ml-1 px-2 py-1 text-white text-sm cursor-pointer rounded-md",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        <Volume2 className="w-6 h-6" />
      </button>
      <button
        onTouchStart={(e) => e.preventDefault()}
        onClick={(e) => {
          e.preventDefault();
          handleButtonClick();
          explainGrammer(selectedText);
        }}
        disabled={!isSelected}
        className={cn(
          "ml-3 px-2 py-1 text-white text-sm cursor-pointer rounded-md",
          isSelected ? " bg-blue-500 hover:bg-blue-600" : "bg-gray-500"
        )}
      >
        <GraduationCap className="w-6 h-6" />
      </button>
    </div>
  );
}
