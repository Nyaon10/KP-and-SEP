import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { CartProvider } from "../context/CartContext";
import { useCart } from '../context/CartContext';
import Footer from "../components/Footer";

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
      {/* 3. Add oswald.variable to the body class list */}
      <body className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}>
        
        {/* Wrap Navbar and children in the Provider */}
        <CartProvider>
          <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
        </CartProvider>

      </body>
    </html>
  );
}

