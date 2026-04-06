"use client";

import Image from "next/image";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <div className="@container">
      <div className="flex flex-col gap-16 px-4 py-24 @[864px]:flex-row @[864px]:items-center @[864px]:gap-20">
        {/* Text Content */}
        <div className="flex flex-col gap-10 flex-1">
          <FadeIn direction="none" delay={0.15}>
            <div className="flex flex-col gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="neon-dot" />
                <span className="text-secondary/80 font-label text-[11px] tracking-[0.25em] uppercase font-medium">
                  The Digital Collective
                </span>
              </div>
              <h1 className="text-on-surface text-[2.75rem] font-extrabold leading-[1.08] tracking-[-0.035em] @[480px]:text-[4rem] font-headline">
                We design and build{" "}
                <span className="text-primary-fixed-dim italic opacity-90">
                  digital experiences
                </span>{" "}
                that feel like the future.
              </h1>
              <p className="text-on-surface-variant/80 text-[17px] max-w-[440px] leading-[1.65]">
                A small studio with big creative energy.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="none" delay={0.35}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="md" href="/contact">
                Get Started
              </Button>
              <Button variant="secondary" size="md" href="/work">
                View Showcase
              </Button>
            </div>
          </FadeIn>
        </div>

        {/* Hero Image */}
        <FadeIn direction="right" delay={0.25} duration={1.2}>
          <div className="relative w-full aspect-square @[864px]:w-[460px]">
            <div
              className="absolute -inset-16 bg-gradient-to-tr from-primary/20 to-secondary/15 blur-[100px] rounded-full"
              style={{ animation: "drift 20s ease-in-out infinite alternate" }}
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/[0.06] glass">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb2Fmw1Er-xF3tAniaBlO3A0dB7Sx9DFP0r1JSRPlyRZ2wKnfHdHVSV0yRbHQbBnB6VHdJYkHgQqQkJ9_IYyiYzAvc2tDFpR6wt2EUKKIfpbe4uLXGo7ZVDe8OcMW8t6fdnCfkCEU14fBxBKM16Spq58L71hTqgK0VlVI4JuiemAhEP6kJU9rHSzxSf8xCzWO2dCe4XR8QIV8ZVaMz0fviF5Ekc-tMcUg1sPgI7RGbuGiYRaMPJodoL0uW4OaP1jrk5X5zZVeyDlk"
                alt="Abstract 3D digital sculpture"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)] scale-[1.03] hover:scale-100"
                sizes="(max-width: 864px) 100vw, 460px"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
