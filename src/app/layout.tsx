import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageProvider";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luiz Felipe Hidalgo — Data Analyst Jr & Full Stack",
  description:
    "Portfolio of Luiz Felipe Hidalgo De Lima. Junior data analyst, backoffice and full-stack developer based in São Paulo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#071018] font-sans text-zinc-100">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
