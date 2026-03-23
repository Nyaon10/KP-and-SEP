"use client";

import { useState } from 'react';

// Simulated database of incoming orders from Midtrans
type Order = {
  id: string;
  date: string;
  customer: { name: string; phone: string; email: string; address: string };
  items: { name: string; qty: number; price: number }[];
  shippingFee: number;
  total: number;
  status: string;
  courier: string;
  trackingNumber: string;
  cancelReason?: string;
};

const INITIAL_ORDERS: Order[] = [
  {
    id: 'ORD-20260320-001',
    date: '2026-03-20 09:15:00',
    customer: { name: 'Budi Santoso', phone: '081234567890', email: 'budi@example.com', address: 'Jl. Sudirman No. 12, Jakarta Selatan, 12190' },
    items: [
      { name: 'Nothing But Love', qty: 2, price: 185000 },
      { name: "G'Day Mate", qty: 1, price: 100000 }
    ],
    shippingFee: 25000,
    total: 495000,
    status: 'PENDING_PROCESSING',
    courier: 'Biteship - JNE Reguler',
    trackingNumber: ''
  },
  {
    id: 'ORD-20260319-042',
    date: '2026-03-19 14:30:00',
    customer: { name: 'Siti Rahmawati', phone: '089876543210', email: 'siti.r@example.com', address: 'Perumahan Indah Blok C/4, Bandung, 40111' },
    items: [
      { name: 'When It\'s Love', qty: 1, price: 235000 }
    ],
    shippingFee: 15000,
    total: 250000,
    status: 'SHIPPED',
    courier: 'Biteship - Sicepat BEST',
    trackingNumber: '00392817465'
  },
  {
    id: 'ORD-20260320-005',
    date: '2026-03-20 11:45:00',
    customer: { name: 'Andi Hermawan', phone: '081122334455', email: 'andi.h@example.com', address: 'Jl. Pahlawan No. 88, Surabaya, 60234' },
    items: [
      { name: 'Here Comes The Vibes', qty: 3, price: 90000 }
    ],
    shippingFee: 35000,
    total: 305000,
    status: 'PENDING_PROCESSING',
    courier: 'Biteship - J&T EZ',
    trackingNumber: ''
  }
];

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'PENDING_PROCESSING' | 'SHIPPED' | 'CANCELLED'>('ALL');
  
  // Modal State for PROCESSING Order
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [trackingInput, setTrackingInput] = useState('');

  // Modal State for CANCELLING Order
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelReasonPreset, setCancelReasonPreset] = useState('Out of Stock');
  const [cancelReasonCustom, setCancelReasonCustom] = useState('');

  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'ALL') return true;
    return order.status === activeFilter;
  });

  const openProcessModal = (order: Order) => {
    setSelectedOrder(order);
    setTrackingInput('');
    setIsProcessModalOpen(true);
  };

  const submitTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    if (!trackingInput.trim()) {
      alert("Tracking number cannot be empty.");
      return;
    }

    setOrders(orders.map(o => {
      if (o.id === selectedOrder.id) {
        return { ...o, status: 'SHIPPED', trackingNumber: trackingInput };
      }
      return o;
    }));

    setIsProcessModalOpen(false);
    setSelectedOrder(null);
  };

  const openCancelModal = (order: Order) => {
    setSelectedOrder(order);
    setCancelReasonPreset('Out of Stock');
    setCancelReasonCustom('');
    setIsCancelModalOpen(true);
  };

  const submitCancellation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;

    const finalReason = cancelReasonPreset === 'Other (Provide Details)' 
      ? cancelReasonCustom 
      : cancelReasonPreset;

    if (cancelReasonPreset === 'Other (Provide Details)' && !cancelReasonCustom.trim()) {
      alert("Please provide a custom cancellation reason.");
      return;
    }

    setOrders(orders.map(o => {
      if (o.id === selectedOrder.id) {
        return { ...o, status: 'CANCELLED', cancelReason: finalReason };
      }
      return o;
    }));

    setIsCancelModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* 1. MODAL OVERLAY: PROCESS ORDER */}
      {isProcessModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 border border-stone-700 p-8 rounded-2xl w-full max-w-lg shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">Process Order</h3>
            <p className="text-stone-400 text-xs mb-6">Enter tracking information to dispatch <span className="font-mono text-amber-500">{selectedOrder.id}</span>.</p>

            <div className="bg-stone-950 border border-stone-800 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center border-b border-stone-800 pb-3 mb-3">
                <span className="text-[10px] text-stone-500 uppercase tracking-widest">Courier Service</span>
                <span className="text-xs font-bold text-stone-200">{selectedOrder.courier}</span>
              </div>
              <div>
                <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1">Shipping To:</span>
                <span className="text-xs font-mono text-stone-400 leading-relaxed block">{selectedOrder.customer.name} - {selectedOrder.customer.phone}</span>
                <span className="text-xs font-mono text-stone-400 leading-relaxed block">{selectedOrder.customer.address}</span>
              </div>
            </div>

            <form onSubmit={submitTracking}>
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">AWB / Tracking Number <span className="text-red-500">*</span></label>
              <input 
                type="text" 
                autoFocus
                required
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                placeholder="e.g. JB00392817465"
                className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono mb-8 uppercase"
              />

              <div className="flex gap-3 justify-end">
                <button 
                  type="button"
                  onClick={() => setIsProcessModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" /><path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" /><path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" /></svg>
                  Dispatch Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. MODAL OVERLAY: CANCEL ORDER */}
      {isCancelModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 border border-red-900/50 p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-red-500">⚠</span> Cancel Order
            </h3>
            <p className="text-stone-400 text-xs mb-6">
              You are about to cancel <span className="font-mono text-white">{selectedOrder.id}</span>. Please select a reason to notify the customer.
            </p>

            <form onSubmit={submitCancellation}>
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Reason for Cancellation</label>
                  <select 
                    value={cancelReasonPreset}
                    onChange={(e) => setCancelReasonPreset(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm cursor-pointer shadow-inner"
                  >
                    {/* THE FIX: Added dark background and light text to all options */}
                    <option value="Out of Stock" className="bg-stone-900 text-stone-100">Product Out of Stock</option>
                    <option value="Customer Requested Cancellation" className="bg-stone-900 text-stone-100">Customer Requested Cancellation</option>
                    <option value="Invalid Shipping Address" className="bg-stone-900 text-stone-100">Invalid Shipping Address</option>
                    <option value="Suspected Fraud / Unverified Payment" className="bg-stone-900 text-stone-100">Suspected Fraud / Unverified Payment</option>
                    <option value="Other (Provide Details)" className="bg-stone-900 text-stone-100">Other (Provide Details)</option>
                  </select>
                </div>

                {cancelReasonPreset === 'Other (Provide Details)' && (
                  <div className="animate-in fade-in slide-in-from-top-2">
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Detailed Reason <span className="text-red-500">*</span></label>
                    <textarea 
                      autoFocus
                      required
                      value={cancelReasonCustom}
                      onChange={(e) => setCancelReasonCustom(e.target.value)}
                      placeholder="Type specific reason for the customer..."
                      className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-stone-200 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm resize-none h-24 shadow-inner"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-3 justify-end">
                <button 
                  type="button"
                  onClick={() => setIsCancelModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-white transition-colors"
                >
                  Keep Order
                </button>
                <button 
                  type="submit"
                  className="bg-red-900/80 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md"
                >
                  Confirm Cancellation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Fulfillment & Logistics</h2>
          <p className="text-stone-400 text-sm">Monitor incoming transactions, pack items, and integrate tracking numbers.</p>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-8 border-b border-stone-800 pb-px overflow-x-auto">
        <button 
          onClick={() => setActiveFilter('ALL')}
          className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeFilter === 'ALL' ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}
        >
          All Orders ({orders.length})
        </button>
        <button 
          onClick={() => setActiveFilter('PENDING_PROCESSING')}
          className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 flex items-center gap-2 whitespace-nowrap ${activeFilter === 'PENDING_PROCESSING' ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}
        >
          Action Required
          {orders.filter(o => o.status === 'PENDING_PROCESSING').length > 0 && (
            <span className="bg-red-500 text-white w-4 h-4 rounded-full flex items-center justify-center text-[8px] leading-none">
              {orders.filter(o => o.status === 'PENDING_PROCESSING').length}
            </span>
          )}
        </button>
        <button 
          onClick={() => setActiveFilter('SHIPPED')}
          className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeFilter === 'SHIPPED' ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}
        >
          Dispatched ({orders.filter(o => o.status === 'SHIPPED').length})
        </button>
        <button 
          onClick={() => setActiveFilter('CANCELLED')}
          className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeFilter === 'CANCELLED' ? 'border-stone-400 text-stone-300' : 'border-transparent text-stone-600 hover:text-stone-400'}`}
        >
          Cancelled ({orders.filter(o => o.status === 'CANCELLED').length})
        </button>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead className="bg-stone-950 outline outline-1 outline-stone-800">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold w-[20%]">Order ID & Date</th>
              <th className="p-6 font-bold w-[25%]">Customer Details</th>
              <th className="p-6 font-bold w-[25%]">Purchased Items</th>
              <th className="p-6 font-bold w-[15%]">Total Amount</th>
              <th className="p-6 font-bold w-[15%] text-right">Logistics Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-12 text-center text-stone-500 italic">No orders found for this filter.</td>
              </tr>
            ) : filteredOrders.map((order) => (
              <tr key={order.id} className={`hover:bg-stone-800/20 transition-colors ${order.status === 'CANCELLED' ? 'opacity-50 grayscale' : ''}`}>
                
                {/* COL 1: ID & DATE */}
                <td className="p-6 align-top">
                  <p className="font-mono font-bold text-amber-500 mb-1">{order.id}</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">{order.date}</p>
                </td>

                {/* COL 2: CUSTOMER */}
                <td className="p-6 align-top">
                  <p className="font-bold text-stone-100 mb-1">{order.customer.name}</p>
                  <p className="text-xs text-stone-400 mb-2">{order.customer.phone} | {order.customer.email}</p>
                  <p className="text-[10px] leading-relaxed text-stone-500 uppercase tracking-wider">{order.customer.address}</p>
                </td>

                {/* COL 3: ITEMS */}
                <td className="p-6 align-top">
                  <ul className="space-y-2">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between text-xs text-stone-300">
                        <span><span className="text-stone-500 mr-2">{item.qty}x</span> {item.name}</span>
                      </li>
                    ))}
                  </ul>
                </td>

                {/* COL 4: TOTAL */}
                <td className="p-6 align-top">
                  <p className="font-mono font-bold text-stone-200 mb-1">Rp {order.total.toLocaleString('id-ID')}</p>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest">Inc. Rp {order.shippingFee.toLocaleString('id-ID')} Shipping</p>
                </td>

                {/* COL 5: ACTIONS & STATUS */}
                <td className="p-6 align-top text-right">
                  {order.status === 'PENDING_PROCESSING' ? (
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-500 border border-red-500/20 uppercase tracking-widest animate-pulse mb-1">
                        Awaiting Pack
                      </span>
                      <button 
                        onClick={() => openProcessModal(order)}
                        className="bg-stone-200 hover:bg-white text-stone-900 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md w-full"
                      >
                        Process Order
                      </button>
                      <button 
                        onClick={() => openCancelModal(order)}
                        className="text-[10px] text-stone-500 hover:text-red-500 font-bold uppercase tracking-widest transition-colors py-1 mt-1 w-full text-right"
                      >
                        Cancel Order
                      </button>
                    </div>
                  ) : order.status === 'CANCELLED' ? (
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-800 text-stone-400 border border-stone-700 uppercase tracking-widest">
                        Cancelled
                      </span>
                      <p className="text-[10px] text-red-400 mt-1 max-w-[180px] leading-tight bg-red-950/30 p-1.5 rounded border border-red-900/30">
                        Reason: {order.cancelReason}
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-widest">
                        Shipped
                      </span>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">{order.courier}</p>
                      <p className="font-mono text-xs text-stone-200 font-bold bg-stone-950 px-2 py-1 rounded border border-stone-800">{order.trackingNumber}</p>
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}