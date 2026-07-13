import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SomtoScript | Freelance Full-Stack Web Development",
  description:
    "Premium web development for startups and small businesses, including custom websites, SaaS apps, dashboards, e-commerce, AI integrations, and automation tools.",
  keywords: [
    "full-stack developer",
    "Next.js development",
    "SaaS development",
    "AI web apps",
    "freelance web developer",
  ],
  openGraph: {
    title: "SomtoScript | Freelance Full-Stack Web Development",
    description:
      "Premium web development for startups and small businesses, including custom websites, SaaS apps, dashboards, e-commerce, AI integrations, and automation tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
