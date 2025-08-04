import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { LenisProvider } from "@/components/lenis-provider";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IdleFinance",
  description:
    "Unlock the Power of Your Idle Assets with AI-Driven Efficiency.",
  openGraph: {
    title: "IdleFinance",
    description:
      "Unlock the Power of Your Idle Assets with AI-Driven Efficiency.",
    url: "https://www.idlefinances.com/",
    siteName: "IdleFinance",
    images: [
      {
        url: "https://www.idlefinances.com/banner2.webp",
        width: 1280,
        height: 900,
        alt: "IdleFinance",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#070708]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <LenisProvider> */}
          {/* <SmoothCursor /> */}
          <Toaster />
          <Navbar />
          {children}
          {/* </LenisProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
