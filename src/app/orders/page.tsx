"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- 1. INTERFACES ---
interface OrderItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  roast: string;
  weight: string;
}

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
  items: OrderItem[];
  shippingDetails: any;
}

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);

  // --- 2. DATA LOADING ---
  useEffect(() => {
    const savedOrders = localStorage.getItem('wanst_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
    setIsLoaded(true);
  }, []);

  // --- 3. INVOICE GENERATION LOGIC ---
  const downloadInvoice = (order: Order) => {
    const invoiceHeader = `
=========================================
        WANST COFFEE & ROASTERY
=========================================
Order ID: ${order.id}
Date:     ${order.date}
Status:   ${order.status}
-----------------------------------------
ITEMS ORDERED:
`;

    const itemsList = order.items.map(item => 
      `${item.name} (${item.roast})
       Qty: ${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}
       Subtotal: Rp ${(item.price * item.quantity).toLocaleString('id-ID')}
      `
    ).join('\n');

    const footer = `
-----------------------------------------
TOTAL AMOUNT: Rp ${order.total.toLocaleString('id-ID')}
=========================================
Thank you for brewing with Wanst!
    `;

    const fullInvoice = invoiceHeader + itemsList + footer;
    const blob = new Blob([fullInvoice], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Invoice_${order.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isLoaded) return null;

  if (orders.length === 0) {
    return (
      <main className="min-h-screen bg-stone-50 py-20 px-8 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase mb-4 tracking-tight">No Orders Found</h1>
          <p className="text-stone-700 mb-8 font-medium italic">Your coffee journey starts with your first roast.</p>
          <Link href="/shop" className="inline-block bg-stone-900 text-white px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-all shadow-md">
            Explore the Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 border-b border-stone-300 pb-8">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight">Order History</h1>
          <p className="text-stone-700 mt-2 font-medium italic">Welcome back! Review and track your previous roastery selections.</p>
        </header>

        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-3xl border-2 border-stone-200 overflow-hidden shadow-sm hover:border-stone-400 transition-colors">
              
              {/* Order Header Summary */}
              <div className="bg-stone-50 border-b border-stone-200 p-6 flex flex-wrap justify-between items-center gap-6">
                <div className="flex gap-8">
                  <div>
                    <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Date</p>
                    <p className="text-sm font-bold text-stone-900">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Total</p>
                    <p className="text-sm font-bold text-stone-900">Rp {order.total.toLocaleString('id-ID')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Status</p>
                    <span className="text-[9px] bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold uppercase border border-amber-300">
                      {order.status}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1 text-right">Order ID</p>
                  <p className="text-sm font-mono font-bold text-stone-900">{order.id}</p>
                </div>
              </div>

              <div className="p-8">
                {/* --- 4. TRACKING TIMELINE SECTION --- */}
                {trackingId === order.id && (
                  <div className="mb-12 p-8 bg-stone-50 rounded-2xl border-2 border-stone-900 animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <h3 className="font-oswald text-xl font-bold text-stone-900 uppercase">Live Tracking</h3>
                        <p className="text-xs text-stone-600 font-medium">Your Kerinci Natural Anaerob is currently being roasted.</p>
                      </div>
                      <span className="text-[10px] font-bold text-amber-800 uppercase tracking-widest bg-white px-3 py-1 rounded-lg border border-stone-200">ETA: 2 Days</span>
                    </div>
                    
                    <div className="relative py-4">
                      <div className="absolute top-1/2 left-0 w-full h-1.5 bg-stone-200 -translate-y-1/2 rounded-full"></div>
                      <div className="absolute top-1/2 left-0 w-1/3 h-1.5 bg-amber-700 -translate-y-1/2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(180,83,9,0.5)]"></div>
                      
                      <div className="relative flex justify-between">
                        {[
                          { label: 'Confirmed', done: true },
                          { label: 'Roasting', done: true },
                          { label: 'Shipped', done: false },
                          { label: 'Arrived', done: false }
                        ].map((step, i) => (
                          <div key={i} className="flex flex-col items-center">
                            <div className={`w-6 h-6 rounded-full border-4 border-white ring-2 shadow-sm transition-colors ${step.done ? 'bg-amber-700 ring-amber-700' : 'bg-stone-300 ring-stone-300'}`}></div>
                            <span className={`text-[10px] font-bold uppercase mt-3 tracking-widest ${step.done ? 'text-stone-900' : 'text-stone-400'}`}>{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Order Items List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex gap-6 items-center group">
                      <div className="relative w-20 h-20 bg-stone-100 rounded-xl overflow-hidden flex-shrink-0 border border-stone-200">
                        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-stone-900 text-base uppercase leading-tight group-hover:text-amber-800 transition-colors">{item.name}</h4>
                        <p className="text-[10px] text-stone-700 font-bold uppercase tracking-widest mt-1">Qty: {item.quantity} • {item.weight}</p>
                      </div>
                      <p className="font-mono font-bold text-stone-900 text-base">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                    </div>
                  ))}
                </div>
                
                {/* Actions Footer */}
                <div className="mt-10 pt-8 border-t border-stone-200 flex justify-end gap-8">
                  <button 
                    onClick={() => setTrackingId(trackingId === order.id ? null : order.id)}
                    className="text-[10px] font-bold text-stone-900 hover:text-amber-800 uppercase tracking-widest transition-colors flex items-center gap-2 border-2 border-stone-900 px-4 py-2 rounded-lg hover:bg-stone-900 hover:text-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {trackingId === order.id ? 'Hide Map' : 'Track Order'}
                  </button>
                  
                  <button 
                    onClick={() => downloadInvoice(order)}
                    className="text-[10px] font-bold text-amber-800 hover:text-stone-900 uppercase tracking-widest transition-colors flex items-center gap-2 border-2 border-amber-800 px-4 py-2 rounded-lg hover:bg-amber-800 hover:text-white transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3" />
                    </svg>
                    Download Invoice
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}