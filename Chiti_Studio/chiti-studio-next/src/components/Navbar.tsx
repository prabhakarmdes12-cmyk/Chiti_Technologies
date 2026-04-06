"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1080px]",
          "transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "ambient-shadow" : ""
        )}
      >
        <div className="glass rounded-full px-7 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo size={22} showText />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-[13px] font-medium font-headline tracking-[-0.01em]",
                  "transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className={cn(
                "flex items-center justify-center rounded-full h-9 w-9",
                "text-on-surface-variant hover:text-on-surface",
                "hover:bg-white/[0.06]",
                "transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                "cursor-pointer"
              )}
              aria-label="Toggle theme"
            >
              {mounted && (resolvedTheme === "dark" ? (
                <Sun size={16} strokeWidth={1.5} />
              ) : (
                <Moon size={16} strokeWidth={1.5} />
              ))}
            </button>
            <Button variant="primary" size="sm" href="/contact">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden flex items-center justify-center rounded-full h-9 w-9",
              "bg-white/[0.04] text-on-surface cursor-pointer",
              "transition-all duration-[400ms]"
            )}
          >
            {isOpen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-surface/[0.97] backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-4xl font-headline font-bold tracking-[-0.03em]",
                    "transition-colors duration-[400ms]",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button variant="primary" size="md" href="/contact">
                Contact
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
