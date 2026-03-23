"use client"; // 1. Add this to make it a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 2. Import the hook

export default function Footer() {
  const pathname = usePathname(); // 3. Get the current URL path

  // 4. THE FIX: Hide the footer if we are in the admin or manager portals
  if (pathname.startsWith('/admin') || pathname.startsWith('/manager')) {
    return null;
  }

  return (
    <footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase tracking-tighter mb-4 italic">WANST</h2>
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              Premium coffee roastery dedicated to bringing the finest Indonesian beans to your doorstep. Every bean is roasted with heart and precision.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><Link href="/shop" className="hover:text-amber-700 transition-colors">Shop All</Link></li>
              <li><Link href="/profile" className="hover:text-amber-700 transition-colors">Account</Link></li>
              <li><Link href="/cart" className="hover:text-amber-700 transition-colors">Your Cart</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><span className="cursor-default">Shipping Policy</span></li>
              <li><span className="cursor-default">Terms of Service</span></li>
              <li><span className="cursor-default">Contact Us</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
            © 2026 Wanst Coffee & Roastery. All Rights Reserved.
          </p>
          <div className="flex gap-6">
             <span className="text-[10px] text-stone-300 font-mono">Next.js + Tailwind + TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}