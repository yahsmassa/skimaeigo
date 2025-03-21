"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/util";

export function ExTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIsRunning(true);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

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
        {isRunning ? "Stop" : "Start"}
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
