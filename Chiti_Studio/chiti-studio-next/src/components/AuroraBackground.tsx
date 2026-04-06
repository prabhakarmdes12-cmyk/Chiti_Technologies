"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";

export default function AuroraBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const turb = turbRef.current;
    if (!turb) return;
    let seed = 0;
    const animate = () => {
      seed += 0.15;
      turb.setAttribute("seed", String(Math.floor(seed) % 1000));
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [mounted]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* SVG filter for organic morphing */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="aurora-morph" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbRef}
              type="fractalNoise"
              baseFrequency="0.012 0.008"
              numOctaves="3"
              seed="0"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="45"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Aurora blob 1 — Electric violet, large, left side */}
      <div
        className="aurora-blob aurora-blob-1"
        style={{
          width: "55vw",
          height: "35vw",
          maxWidth: "900px",
          maxHeight: "550px",
          top: "-8%",
          left: "-10%",
          background: isDark
            ? "radial-gradient(ellipse at 40% 50%, rgba(140, 50, 255, 0.45) 0%, rgba(100, 30, 220, 0.25) 30%, rgba(60, 20, 180, 0.1) 55%, transparent 75%)"
            : "radial-gradient(ellipse at 40% 50%, rgba(124, 58, 237, 0.1) 0%, rgba(109, 40, 217, 0.05) 30%, transparent 65%)",
        }}
      />

      {/* Aurora blob 2 — Vivid cyan, medium, right side */}
      <div
        className="aurora-blob aurora-blob-2"
        style={{
          width: "50vw",
          height: "30vw",
          maxWidth: "800px",
          maxHeight: "480px",
          top: "2%",
          right: "-8%",
          background: isDark
            ? "radial-gradient(ellipse at 60% 40%, rgba(0, 210, 255, 0.4) 0%, rgba(0, 160, 240, 0.2) 30%, rgba(0, 100, 200, 0.08) 55%, transparent 75%)"
            : "radial-gradient(ellipse at 60% 40%, rgba(14, 165, 233, 0.08) 0%, rgba(14, 140, 210, 0.04) 30%, transparent 65%)",
        }}
      />

      {/* Aurora blob 3 — Hot pink, center */}
      <div
        className="aurora-blob aurora-blob-3"
        style={{
          width: "45vw",
          height: "28vw",
          maxWidth: "700px",
          maxHeight: "420px",
          top: "-5%",
          left: "25%",
          background: isDark
            ? "radial-gradient(ellipse at 50% 50%, rgba(255, 60, 180, 0.35) 0%, rgba(220, 40, 160, 0.18) 30%, rgba(180, 20, 140, 0.06) 55%, transparent 75%)"
            : "radial-gradient(ellipse at 50% 50%, rgba(236, 72, 153, 0.07) 0%, rgba(210, 60, 140, 0.03) 30%, transparent 65%)",
        }}
      />

      {/* Aurora blob 4 — Deep blue, large, upper area */}
      <div
        className="aurora-blob aurora-blob-4"
        style={{
          width: "60vw",
          height: "32vw",
          maxWidth: "950px",
          maxHeight: "500px",
          top: "5%",
          left: "10%",
          background: isDark
            ? "radial-gradient(ellipse at 50% 60%, rgba(60, 80, 255, 0.38) 0%, rgba(40, 60, 220, 0.2) 30%, rgba(20, 40, 180, 0.08) 55%, transparent 75%)"
            : "radial-gradient(ellipse at 50% 60%, rgba(99, 102, 241, 0.07) 0%, rgba(79, 70, 229, 0.03) 30%, transparent 65%)",
        }}
      />

      {/* Aurora blob 5 — Emerald accent (dark only) */}
      {isDark && (
        <div
          className="aurora-blob aurora-blob-5"
          style={{
            width: "40vw",
            height: "25vw",
            maxWidth: "650px",
            maxHeight: "380px",
            top: "0%",
            right: "15%",
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(0, 255, 180, 0.25) 0%, rgba(0, 220, 160, 0.12) 30%, rgba(0, 180, 130, 0.04) 55%, transparent 75%)",
          }}
        />
      )}

      {/* Top fade — aurora dissolves into top edge */}
      <div
        className="absolute inset-x-0 top-0 h-[30%] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(12, 14, 18, 0.9) 0%, rgba(12, 14, 18, 0.4) 40%, transparent 100%)"
            : "linear-gradient(to bottom, rgba(250, 250, 250, 0.95) 0%, rgba(250, 250, 250, 0.5) 40%, transparent 100%)",
        }}
      />

      {/* Bottom fade — aurora dissolves into bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-[25%] pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to top, rgba(12, 14, 18, 0.95) 0%, rgba(12, 14, 18, 0.3) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(250, 250, 250, 0.95) 0%, rgba(250, 250, 250, 0.4) 50%, transparent 100%)",
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Vignette */}
      <div className="vignette" />
    </div>
  );
}
