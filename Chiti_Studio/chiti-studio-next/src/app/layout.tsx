import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiti Studio — Digital Design Collective",
  description:
    "A premium creative agency specializing in UI/UX design, web development, and brand identity. We design and build digital experiences that feel like the future.",
  keywords: [
    "design studio",
    "UI/UX",
    "web development",
    "brand identity",
    "digital agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${epilogue.variable} ${manrope.variable} font-body antialiased selection:bg-primary selection:text-on-primary overflow-x-hidden`}
      >
        <ThemeProvider>
          <AuroraBackground />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
