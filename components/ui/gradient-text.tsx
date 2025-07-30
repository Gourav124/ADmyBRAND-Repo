import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span className={cn(
      "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent",
      className
    )}>
      {children}
    </span>
  );
}