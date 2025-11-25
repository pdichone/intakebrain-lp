import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IntakeBrain | AI-Powered Case Intake for PI Law Firms",
  description:
    "Turn messy intake notes into clean, attorney-ready case summaries instantly. Built for personal injury law firms.",
  keywords: [
    "legal intake",
    "PI law firm",
    "case management",
    "AI legal",
    "intake automation",
  ],
  openGraph: {
    title: "IntakeBrain | AI-Powered Case Intake for PI Law Firms",
    description:
      "Turn messy intake notes into clean, attorney-ready case summaries instantly.",
    type: "website",
    url: "https://intakebrain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
