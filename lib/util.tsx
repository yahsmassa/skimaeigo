import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const exPageFormat = "w-full md:w-3/4 lg:w-2/3 mx-auto p-4";
export const exQuestionFormat = "space-y-4 mt-6";
export const exPageHeader = "mb-4 sticky top-0 bg-white z-10 pt-4";
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
