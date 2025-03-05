import { twMerge } from "tailwind-merge";
import { qrCodeCreate } from "@/lib/paypay";
import { type ClassValue, clsx } from "clsx";
import React from "react";
import Swal from "sweetalert2";
import {
  translateTextGemini,
  translateTextDeepseek,
  translateTextCohere,
} from "@/lib/serverAction";
import { type QandA, type Answers } from "./types";
import { User } from "@/lib/auth";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const exPageFormat = "w-full md:w-3/4 lg:w-2/3 mx-auto p-4";
export const exPageFormat = "w-full  p-4";
export const exQuestionFormat = "space-y-4 mt-6";

export const exPageHeader = "sticky top-0 bg-white z-10 pt-4 mb-4 min-h-[50px]";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={
      "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm " +
      (className || "")
    }
    {...props}
  >
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => (
  <div className={"p-6 pt-0 " + (className || "")} {...props}>
    {children}
  </div>
);

export const qaFormat = (qa: QandA[], questionId: string) => {
  return qa.find((q) => q.questionId === questionId)?.isCorrect
    ? "bg-green-100 p-2 rounded-lg"
    : "bg-red-100 p-2 rounded-lg";
};

export const handleChange = (
  questionNumber: string,
  value: number,
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
) => {
  setAnswers((prev) => ({
    ...prev,
    [questionNumber]: value,
  }));
};

export const renderSelect = (
  number: string,
  count: number,
  answers: Answers,
  setAnswers: React.Dispatch<React.SetStateAction<Answers>>
) => (
  <div className="mx-2 flex flex-row items-center whitespace-nowrap">
    <div className={cn("font-medium mb-0.5 mr-2")}>[{number}]</div>
    <select
      value={answers[number] || ""}
      onChange={(e) => handleChange(number, Number(e.target.value), setAnswers)}
      className="w-20 h-8 border border-gray-300 rounded-md text-base text-center"
    >
      <option value="">選択</option>
      {Array.from({ length: count }, (_, index) => (
        <option key={index + 1} value={index + 1}>
          {index + 1}
        </option>
      ))}
    </select>
  </div>
);

export const translateSentence = async (selectedText: string) => {
  if (!selectedText) {
    Swal.fire({
      title: "エラー",
      text: "英文が選択されていません",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

  // ローディング表示
  Swal.fire({
    title: "翻訳中...",
    text: "Requesting...",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    const prompt =
      "あなたは優秀な英語教師です、以下の英文を日本語に翻訳し、原文、１行あけて、翻訳文、その後、改行して熟語・慣用句が含まれていたら、箇条書きで指摘してください、箇条書きは 英語：日本語 の形式で指摘してください、文字は**で囲まないでください  " +
      selectedText;
    const result = await translateTextGemini(prompt);
    // const prompt =
    //   "あなたは優秀な英語教師です、以下の英文を日本語に翻訳し、センテンスごとに、原文、翻訳文と表示し、その後熟語・慣用句が含まれていたら、箇条書きで指摘してください、箇条書きは 英語：日本語 の形式で指摘してください" +
    //   selectedText;
    // const result = await translateTextCohere(prompt);
    // const result = (await translateTextDeepseek(prompt)) || "";
    // console.log("formattedResult", formattedResult);
    const formattedResult = result.replace(/\n/g, "<br/>"); // 改行を<br/>に変換
    Swal.fire({
      title: "解説",
      html: formattedResult,
      confirmButtonText: "OK",
      width: "500px",
    });
  } catch (error) {
    Swal.fire({
      title: "エラー",
      text: "翻訳に失敗しました",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
};

export const readSentence = (selectedText: string) => {
  if (!selectedText) return;

  // 音声リストが利用可能になるのを待つ
  const waitForVoices = () => {
    return new Promise<void>((resolve) => {
      const voices = speechSynthesis.getVoices();
      if (voices.length > 0) {
        resolve();
      } else {
        speechSynthesis.onvoiceschanged = () => {
          resolve();
        };
      }
    });
  };

  waitForVoices().then(() => {
    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = "en-US";

    // Safari用に音声を明示的に選択
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find(
      (voice) => voice.lang === "en-US" && voice.name.includes("Samantha") // Safariのデフォルト音声
    );

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    // 速度やピッチを調整（必要に応じて）
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    speechSynthesis.speak(utterance);
  });
};

export function formatDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}${month}${day}${hours}${minutes}${seconds}`;
}

export const cmpOrderId = (uid: string) => {
  return uid + "_" + formatDate();
};

export const getPaymentUrl = async (uid: string) => {
  if (uid.length === 0) return;
  try {
    const orderId = cmpOrderId(uid);
    const result = await qrCodeCreate(orderId);
    const url = result.data?.url;
    return url;
  } catch (error) {
    console.error("支払い処理中にエラーが発生しました", error);
    return null;
  }
};
