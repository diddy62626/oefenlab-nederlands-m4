import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oefenlab Nederlands M4 – Periode 2 (SE612 & SE613)",
  description:
    "Oefenwebsite voor Nederlands MAVO 4, periode 2: tekstbegrip, kritisch kijken en luisteren, fictie, spreken & discussie en taalgebruik. Met slimme herhaling, meteen feedback en toetsmodus.",
  keywords: ["Nederlands", "MAVO 4", "oefenen", "SE612", "SE613", "kijk- en luistertoets", "discussie", "KLT"],
  authors: [{ name: "Oefenlab" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
