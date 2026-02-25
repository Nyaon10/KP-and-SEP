"use client";

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-stone-50 py-20 px-8 flex items-center justify-center">
      <div className="max-w-xl w-full text-center bg-white p-12 rounded-3xl border border-stone-200 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight mb-4">
          Order Confirmed!
        </h1>
        
        <p className="text-stone-500 mb-2 font-medium">
          Thank you for choosing Wanst Coffee. Your beans are being prepared for roasting.
        </p>
        
        <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 mb-10 inline-block">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">Order Number</span>
          <span className="font-mono font-bold text-amber-800 text-lg">{orderId || "WNST-XXXXXX"}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/orders" 
            className="bg-stone-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-800 transition-all shadow-md text-xs"
          >
            Track My Order
          </Link>
          <Link 
            href="/shop" 
            className="bg-white border border-stone-200 text-stone-600 py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-stone-50 transition-all text-xs"
          >
            Back to Shop
          </Link>
        </div>

        <p className="mt-12 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
          A confirmation email has been sent.
        </p>
      </div>
    </main>
  );
}