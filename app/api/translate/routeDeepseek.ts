import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const { text } = await req.json();

  try {
    const openai = new OpenAI({
      baseURL: "https://api.deepseek.com",
      apiKey: process.env.DEEPSEEK_API_KEY || "",
    });
    const response = await openai.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: text,
        },
      ],
    });
    return NextResponse.json({
      translatedText: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Translation error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "翻訳に失敗しました", details: errorMessage },
      { status: 500 }
    );
  }
}
