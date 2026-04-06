import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}

export default function Section({
  children,
  className,
  id,
  bordered = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24",
        bordered && "border-t border-white/[0.04]",
        className
      )}
    >
      {children}
    </section>
  );
}
