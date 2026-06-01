"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// --- 1. INTERFACES (Updated to match Prisma Database) ---
interface OrderItem {
  id: string;
  product_name: string;
  quantity: number;
  price_at_time: number;
}

interface Order {
  id: string;
  created_at: string; // Database timestamp
  total_amount: number;
  status: string;
  shipping_address: string;
  order_items: OrderItem[];
}

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);
  const router = useRouter();

  // --- 2. REAL DATA AUTOMATIC FETCHING ---
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');

        // Security check: if no token, kick them to login
        if (response.status === 401) {
          router.push('/login');
          return;
        }

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoaded(true);
      }
    };

    fetchOrders();
  }, [router]);

  // --- 3. INVOICE GENERATION LOGIC (Updated variables) ---
  const downloadInvoice = (order: Order) => {
    const formattedDate = new Date(order.created_at).toLocaleDateString('id-ID', {
      year: 'numeric', month: 'long', day: 'numeric'
    });

    const invoiceHeader = `
=========================================
        WANST COFFEE & ROASTERY
=========================================
Order ID: ${order.id}
Date:     ${formattedDate}
Status:   ${order.status}
-----------------------------------------
SHIPPING TO:
${order.shipping_address}
-----------------------------------------
ITEMS ORDERED:
`;

    const itemsList = order.order_items.map(item => 
      `${item.product_name}
       Qty: ${item.quantity} x Rp ${item.price_at_time.toLocaleString('id-ID')}
       Subtotal: Rp ${(item.price_at_time * item.quantity).toLocaleString('id-ID')}
      `
    ).join('\n');

    const footer = `
-----------------------------------------
TOTAL AMOUNT: Rp ${order.total_amount.toLocaleString('id-ID')}
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

  // Helper to color-code the status badge
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'PAID': return 'bg-green-100 text-green-800 border-green-300';
      case 'SHIPPED': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'CANCELLED': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-amber-100 text-amber-800 border-amber-300'; // PENDING_PROCESSING
    }
  };

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-stone-50 py-20 flex items-center justify-center">
        <p className="text-stone-500 font-bold uppercase tracking-widest animate-pulse">Fetching your orders...</p>
      </main>
    );
  }

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
          {orders.map((order) => {
            const formattedDate = new Date(order.created_at).toLocaleDateString('id-ID', {
              year: 'numeric', month: 'long', day: 'numeric'
            });

            return (
              <div key={order.id} className="bg-white rounded-3xl border-2 border-stone-200 overflow-hidden shadow-sm hover:border-stone-400 transition-colors">
                
                {/* Order Header Summary */}
                <div className="bg-stone-50 border-b border-stone-200 p-6 flex flex-wrap justify-between items-center gap-6">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Date</p>
                      <p className="text-sm font-bold text-stone-900">{formattedDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Total</p>
                      <p className="text-sm font-bold text-stone-900">Rp {order.total_amount.toLocaleString('id-ID')}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-stone-900 font-bold uppercase tracking-widest mb-1">Status</p>
                      <span className={`text-[9px] px-3 py-1 rounded-full font-bold uppercase border ${getStatusColor(order.status)}`}>
                        {order.status.replace('_', ' ')}
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
                          <p className="text-xs text-stone-600 font-medium">Tracking status for your order.</p>
                        </div>
                      </div>
                      
                      <div className="relative py-4">
                        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-stone-200 -translate-y-1/2 rounded-full"></div>
                        
                        {/* Dynamic Progress Bar based on status */}
                        <div className={`absolute top-1/2 left-0 h-1.5 bg-amber-700 -translate-y-1/2 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(180,83,9,0.5)] ${
                          order.status === 'SHIPPED' ? 'w-full' : order.status === 'PAID' ? 'w-1/2' : 'w-1/4'
                        }`}></div>
                        
                        <div className="relative flex justify-between">
                          {[
                            { label: 'Confirmed', done: true },
                            { label: 'Paid', done: order.status === 'PAID' || order.status === 'SHIPPED' },
                            { label: 'Shipped', done: order.status === 'SHIPPED' }
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
                    {order.order_items.map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-center group bg-stone-50 p-4 rounded-xl border border-stone-100">
                        {/* Note: I removed the image tag because the DB order_items table doesn't store the image URL. Replaced with a clean typography block! */}
                        <div className="w-12 h-12 bg-stone-200 rounded-lg flex items-center justify-center flex-shrink-0">
                           <span className="font-oswald text-xl text-stone-500 font-bold">{item.quantity}x</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-stone-900 text-sm uppercase leading-tight group-hover:text-amber-800 transition-colors">{item.product_name}</h4>
                          <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1">Rp {item.price_at_time.toLocaleString('id-ID')} each</p>
                        </div>
                        <p className="font-mono font-bold text-stone-900 text-sm">Rp {(item.price_at_time * item.quantity).toLocaleString('id-ID')}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Actions Footer */}
                  <div className="mt-10 pt-8 border-t border-stone-200 flex justify-between items-center gap-8">
                    
                    <div className="max-w-xs">
                      <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-1">Delivery Address</p>
                      <p className="text-xs font-medium text-stone-800 truncate">{order.shipping_address}</p>
                    </div>

                    <div className="flex gap-4">
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}