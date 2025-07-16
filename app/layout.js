"use client";

import { useEffect } from "react";
import userStore from "@/stores/userStore";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarsCanvas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const { loadUser } = userStore();

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
