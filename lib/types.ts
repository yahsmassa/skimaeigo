// 24-1A

// 共通
export type SubQuestion = {
  number: string;
  prompt: string;
  options: string[];
  answer: number;
};

export type Answers = {
  [key: string]: string;
};
