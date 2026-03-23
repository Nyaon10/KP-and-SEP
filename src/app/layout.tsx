import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
// 1. Import the new wrapper
import LayoutWrapper from "../components/LayoutWrapper";
import { CartProvider } from "../context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wanst Coffee & Roastery",
  description: "Freshly Roasted, Delivered to You.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased flex flex-col min-h-screen`}>
        
        <CartProvider>
          {/* 2. Wrap children inside the LayoutWrapper */}
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </CartProvider>

      </body>
    </html>
  );
}