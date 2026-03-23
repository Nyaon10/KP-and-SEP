// src/components/LayoutWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Check if the current URL path starts with "/admin"
  const isAdminRoute = pathname?.startsWith('/admin');

  // If it's an admin page, ONLY render the page content (no Navbar/Footer)
  if (isAdminRoute) {
    return <main className="flex-grow">{children}</main>;
  }

  // If it's a normal customer page, render everything
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}