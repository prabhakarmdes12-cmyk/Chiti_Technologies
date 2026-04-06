"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  accent?: "primary" | "secondary" | "tertiary";
  hover?: boolean;
}

export default function Card({
  children,
  className,
  accent,
  hover = true,
}: CardProps) {
  const accentGlow = {
    primary: "hover:shadow-[inset_0_0_60px_rgba(186,158,255,0.03)]",
    secondary: "hover:shadow-[inset_0_0_60px_rgba(83,221,252,0.03)]",
    tertiary: "hover:shadow-[inset_0_0_60px_rgba(255,109,175,0.03)]",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "relative rounded-2xl glass p-8",
        "before:absolute before:inset-x-0 before:top-0 before:h-[0.5px] before:rounded-t-2xl",
        "before:bg-gradient-to-r before:from-transparent before:via-white/[0.08] before:to-transparent",
        hover && "transition-all duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        accent && accentGlow[accent],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
