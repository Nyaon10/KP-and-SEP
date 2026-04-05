"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext'; 

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-stone-50 py-20 px-8 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-stone-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 16.835a2.25 2.25 0 0 1-2.244 2.398H5.033a2.25 2.25 0 0 1-2.244-2.398L3.901 8.507a2.25 2.25 0 0 1 2.244-2.398h12.71a2.25 2.25 0 0 1 2.244 2.398ZM9.172 11.73a.75.75 0 0 0 1.06 0l1.768-1.767a.75.75 0 0 0-1.06-1.06l-1.768 1.767a.75.75 0 0 0 0 1.061Z" />
            </svg>
          </div>
          <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase mb-4 tracking-tight">Your cart is empty</h1>
          <p className="text-stone-500 mb-8 font-medium italic">"A morning without coffee is like sleep." — Let's find you a roast.</p>
          <Link href="/shop" className="inline-block bg-stone-900 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-amber-800 transition-all shadow-md">
            Browse the Roastery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        
        <header className="mb-10 border-b border-stone-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-stone-500 mt-2 font-medium italic">You have {totalItems} items ready for brewing.</p>
          </div>
          <Link href="/shop" className="text-sm font-bold text-amber-700 hover:text-stone-900 transition-colors uppercase tracking-widest border-b-2 border-amber-700 pb-1">
            ← Continue Shopping
          </Link>
        </header>

        {/* 4-Column Grid: Left (3 cols) for items, Right (1 col) for Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* LEFT: Items Ordered */}
          <div className="lg:col-span-3 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-200 p-6 flex gap-8 shadow-sm group hover:border-stone-300 transition-colors">
                
                {/* Product Thumbnail */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Info Container */}
                <div className="flex flex-col flex-1 py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-oswald text-2xl font-bold text-stone-900 uppercase leading-tight group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-stone-400 text-sm font-bold uppercase tracking-widest mt-1">
                        {item.roast} • {item.weight}
                      </p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-300 hover:text-rose-500 transition-colors p-1"
                      title="Remove Item"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Quantity & Price Row */}
                  <div className="mt-auto flex justify-between items-center pt-4">
                    <div className="flex items-center bg-stone-50 border border-stone-200 rounded-lg overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      >
                        —
                      </button>
                      <span className="w-12 text-center font-mono font-bold text-stone-900 text-lg">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Total</p>
                      <div className="flex items-baseline gap-1 text-stone-900">
                        <span className="text-lg font-bold">Rp</span>
                        <span className="font-mono font-bold text-2xl">
                          {(item.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-stone-200 p-8 sticky top-32 shadow-sm border-t-4 border-t-amber-800">
              <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase mb-6 tracking-tight">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-stone-600">
                  <span className="font-medium text-sm">Subtotal ({totalItems} items)</span>
                  <div className="flex items-baseline gap-1 font-bold text-stone-900">
                    <span className="text-xs">Rp</span>
                    <span className="font-mono"> {totalPrice.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span className="font-medium text-sm">Shipping Fee</span>
                  <span className="text-green-600 font-bold uppercase text-[9px] tracking-widest bg-green-50 px-2 py-1 rounded">Calculated at Checkout</span>
                </div>
                <div className="flex justify-between text-stone-600 border-t border-stone-100 pt-4">
                  <span className="font-medium text-sm">Tax (Included)</span>
                  <div className="flex items-baseline gap-1 text-stone-400">
                    <span className="text-xs">Rp</span>
                    <span className="font-mono">0</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-2">Estimated Total</p>
                <div className="flex items-baseline gap-2 text-amber-800">
                  <span className="font-oswald text-2xl font-bold">Rp</span>
                  <span className="text-4xl font-mono font-bold">
                    {totalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <Link 
                href="/checkout"
                className="block w-full bg-stone-900 text-white text-center py-5 rounded-xl font-bold uppercase tracking-widest hover:bg-amber-800 transition-all shadow-xl active:scale-[0.98] mb-4"
              >
                Proceed to Checkout
              </Link>
              
              <div className="flex items-center justify-center gap-2 text-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-widest uppercase">Encrypted & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}