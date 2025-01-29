"use client";

import { useState } from "react";
import { cn } from "@/lib/util";
import Ex24_1A from "@/components/Ex24_1A";
import Ex24_1B from "@/components/Ex24_1B";
import Ex24_2A from "@/components/Ex24_2A";
import Ex24_2B from "@/components/Ex24_2B";
import Ex24_3A from "@/components/Ex24_3A";
import Ex24_3B from "@/components/Ex24_3B";
import Ex24_4 from "@/components/Ex24_4";
import Ex24_5 from "@/components/Ex24_5";
import Ex24_6A from "@/components/Ex24_6A";
import Ex24_6B from "@/components/Ex24_6B";

const components = [
  { id: "Ex24_1A", label: "2024年 問1 A", component: <Ex24_1A /> },
  { id: "Ex24_1B", label: "2024年 問1 B", component: <Ex24_1B /> },
  { id: "Ex24_2A", label: "2024年 問2 A", component: <Ex24_2A /> },
  { id: "Ex24_2B", label: "2024年 問2 B", component: <Ex24_2B /> },
  { id: "Ex24_3A", label: "2024年 問3 A", component: <Ex24_3A /> },
  { id: "Ex24_3B", label: "2024年 問3 B", component: <Ex24_3B /> },
  { id: "Ex24_4", label: "2024年 問4", component: <Ex24_4 /> },
  { id: "Ex24_5", label: "2024年 問5", component: <Ex24_5 /> },
  { id: "Ex24_6A", label: "2024年 問6 A", component: <Ex24_6A /> },
  { id: "Ex24_6B", label: "2024年 問6 B", component: <Ex24_6B /> },
];

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState(components[0].id);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(e.target.value);
  };

  const selected = components.find((comp) => comp.id === selectedComponent);

  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0  pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
    <div className="mt-10 items-center justify-items-center min-h-screen p-0  pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="gap-8 row-start-2 items-center sm:items-start">
        <select
          value={selectedComponent}
          onChange={handleChange}
          className="ml-5 p-2 border rounded"
        >
          {components.map((comp) => (
            <option key={comp.id} value={comp.id}>
              {comp.label}
            </option>
          ))}
        </select>

        {selected && selected.component}
      </main>
    </div>
  );
}
