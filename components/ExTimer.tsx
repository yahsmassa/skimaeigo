"use client";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/util";

export function ExTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const timeRef = useRef(0); // レンダリングを避けるためrefで管理

  // タイマーを開始/停止する関数
  const startTimer = useCallback(() => {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        timeRef.current += 1;
        // 1秒ごとにレンダリング（パフォーマンス向上）
        if (timeRef.current % 1 === 0) {
          setTime(timeRef.current);
        }
      }, 1000);
      setIsRunning(true);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setIsRunning(false);
    }
  }, [isRunning]);

  // タイマーをリセットする関数
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timeRef.current = 0;
    setTime(0);
    setIsRunning(false);
  }, []);

  // コンポーネントのアンマウント時にタイマーをクリア
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, []);

  return (
    <div className="flex items-center ">
      <button
        onClick={startTimer}
        className={cn(
          "px-2 py-1  text-white rounded  w-[60px]",
          isRunning
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        )}
      >
        {isRunning ? "Stop" : "Time"}
      </button>
      <button
        onClick={resetTimer}
        className="ml-2 px-2 py-1 bg-gray-500  text-white rounded hover:bg-gray-600 w-[60px]"
      >
        Reset
      </button>
      <span
        className={cn(
          "ml-3 text-gray-600 font-bold w-[50px] font-sans",
          isRunning && "text-red-600"
        )}
      >
        {formatTime(time)}
      </span>
    </div>
  );
}
