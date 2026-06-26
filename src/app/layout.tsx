import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A. Harshan | AI & Data Science Engineer",
  description: "Official digital portfolio of A. Harshan. Building intelligent systems through Artificial Intelligence, Computer Vision, Machine Learning, and Scalable Backend Development.",
};

import SmoothScrolling from "@/components/SmoothScrolling";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased bg-[#060606] text-white`}
    >
      <body className="min-h-full flex flex-col">
        <PageLoader>
          <CustomCursor />
          <Navbar />
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
        </PageLoader>
      </body>
    </html>
  );
}
