import React from "react";
import { groupedComponents, Year, Problem } from "@/lib/utilExam";
import { cn } from "@/lib/util";

type Props = {
  componentName: string;
  className?: string;
};

function findProblemById(id: string): Problem | undefined {
  const years = Object.keys(groupedComponents) as Year[];
  for (const year of years) {
    const found = groupedComponents[year].find(p => p.id === id);
    if (found) return found;
  }
  return undefined;
}

export const TikTokLink: React.FC<Props> = ({ componentName, className }) => {
  const problem = findProblemById(componentName);
  let tiktokUrl =  problem?.tiktok;
//   console.log("name",componentName);
  const baseImg = (
    <img
      src="/images/tiktok.webp"
      alt="TikTok"
      className={cn("w-8 h-8 ml-4", className, !tiktokUrl && "grayscale opacity-40 cursor-not-allowed")}
      style={{ display: "inline-block" }}
      aria-disabled={!tiktokUrl}
      title={!tiktokUrl ? "TikTok は未設定です" : "TikTok で見る"}
    />
  );

  if (!tiktokUrl) {
    return <>{baseImg}</>;
  }
  tiktokUrl = "https://www.tiktok.com/@kuotore/video/" + problem?.tiktok;
  return (
    <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
      {baseImg}
    </a>
  );
};

export default TikTokLink;

