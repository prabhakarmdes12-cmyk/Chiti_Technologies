import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

export default function Container({
  children,
  className,
  size = "default",
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 lg:px-10",
        size === "default" && "max-w-[1200px]",
        size === "narrow" && "max-w-[960px]",
        size === "wide" && "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
}
