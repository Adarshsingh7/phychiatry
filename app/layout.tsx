import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FloatingContactButtons } from "./components/site-chrome";
import RevealObserver from "./components/reveal-observer";
import "./globals.css";
import { globalData } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${globalData.brandName} | Dr. Nilesh Kumar Kanaujiya & Dr. Preeti Chaudhary`,
  description: "Comprehensive psychiatric care, de-addiction therapy, and general medicine services by Dr. Nilesh Kumar Kanaujiya (MBBS, MD Neuro-psychiatry, MIPS) and Dr. Preeti Chaudhary (BAMS, General Physician) in Gomti Nagar, Lucknow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-white text-[#102f42]">
        <RevealObserver />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
