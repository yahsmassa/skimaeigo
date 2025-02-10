"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY || "",
});

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

export async function translateTextGemini(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error in Gemini API:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to generate text"
    );
  }
}

export async function translateTextDeepseek(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error in DeepSeek API:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to generate text"
    );
  }
}
