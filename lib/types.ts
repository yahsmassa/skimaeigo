// 24-1A

// 共通
export type SubQuestion = {
  number: string;
  prompt: string;
  options: string[];
  answer: number;
};

export type Answers = {
  [key: string]: number;
};

// 問題１の問１＝＞ 1-1
export type QandA = {
  questionId: string;
  qa: {
    questionNumber: string;
    answer: number;
  }[];
  rightAnswerString: string;
  answerString: string;
  points: number;
  explanation?: string[];
  isCorrect?: boolean;
  isOrderFree?: boolean;
  isSeparate?: boolean;
  isTwoOne?: boolean;
  specificPatern?: string;
};
