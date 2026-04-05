"use client";

import { useState, useEffect } from 'react';

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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'PENDING_PROCESSING' | 'SHIPPED' | 'CANCELLED'>('ALL');
  
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [trackingInput, setTrackingInput] = useState('');

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [cancelReasonPreset, setCancelReasonPreset] = useState('Out of Stock');
  const [cancelReasonCustom, setCancelReasonCustom] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/orders');
      const data = await res.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Order sync failed", err);
    } finally {
      setLoading(false);
    }
  };

  const submitTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder || !trackingInput.trim()) return;
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedOrder.id, status: 'SHIPPED', trackingNumber: trackingInput })
      });
      if (res.ok) {
        setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status: 'SHIPPED', trackingNumber: trackingInput } : o));
        setIsProcessModalOpen(false);
      }
    } catch (err) { alert("Update failed"); }
  };

  const submitCancellation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder) return;
    const finalReason = cancelReasonPreset === 'Other (Provide Details)' ? cancelReasonCustom : cancelReasonPreset;
    try {
      const res = await fetch('/api/admin/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedOrder.id, status: 'CANCELLED', cancelReason: finalReason })
      });
      if (res.ok) {
        setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status: 'CANCELLED', cancelReason: finalReason } : o));
        setIsCancelModalOpen(false);
      }
    } catch (err) { alert("Cancellation failed"); }
  };

  const filteredOrders = orders.filter(order => {
    if (activeFilter === 'ALL') return true;
    return order.status === activeFilter;
  });

  if (loading) return <div className="p-20 text-stone-500 font-mono text-center animate-pulse uppercase tracking-widest text-xs">Syncing Fulfillment Center...</div>;

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* 1. PROCESS MODAL */}
      {isProcessModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-stone-900 border border-stone-700 p-8 rounded-2xl w-full max-w-lg shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">Process Order</h3>
            <form onSubmit={submitTracking} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Tracking Number</label>
                <input 
                  type="text" required value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 font-mono text-sm uppercase"
                />
              </div>
              <div className="flex gap-3 justify-end">
                <button type="button" onClick={() => setIsProcessModalOpen(false)} className="text-xs font-bold text-stone-400 uppercase tracking-widest px-4">Cancel</button>
                <button type="submit" className="bg-amber-700 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest shadow-md">Dispatch</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. CANCEL MODAL */}
      {isCancelModalOpen && selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-stone-900 border border-red-900/50 p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-4">Cancel Order</h3>
            <form onSubmit={submitCancellation} className="space-y-4">
              <select 
                value={cancelReasonPreset} onChange={(e) => setCancelReasonPreset(e.target.value)}
                className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 text-sm"
              >
                <option value="Out of Stock">Out of Stock</option>
                <option value="Customer Request">Customer Requested</option>
                <option value="Other (Provide Details)">Other</option>
              </select>
              {cancelReasonPreset === 'Other (Provide Details)' && (
                <textarea 
                  required value={cancelReasonCustom} onChange={(e) => setCancelReasonCustom(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg p-3 text-stone-200 text-sm h-24"
                />
              )}
              <div className="flex gap-3 justify-end pt-4">
                <button type="button" onClick={() => setIsCancelModalOpen(false)} className="text-xs font-bold text-stone-400 uppercase tracking-widest px-4">Keep</button>
                <button type="submit" className="bg-red-900 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest">Confirm Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Fulfillment & Logistics</h2>
        <p className="text-stone-400 text-sm">Monitor incoming transactions and integrate tracking numbers.</p>
      </div>

      {/* FILTER TABS */}
      <div className="flex gap-6 mb-8 border-b border-stone-800">
        {(['ALL', 'PENDING_PROCESSING', 'SHIPPED', 'CANCELLED'] as const).map(f => (
          <button 
            key={f} onClick={() => setActiveFilter(f)}
            className={`pb-3 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all ${activeFilter === f ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500'}`}
          >
            {f.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-stone-950">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold">Order Details</th>
              <th className="p-6 font-bold">Customer</th>
              <th className="p-6 font-bold">Items</th>
              <th className="p-6 font-bold">Total</th>
              <th className="p-6 font-bold text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {filteredOrders.length === 0 ? (
              <tr><td colSpan={5} className="p-12 text-center text-stone-500 italic">No orders found.</td></tr>
            ) : filteredOrders.map((order) => (
              <tr key={order.id} className="hover:bg-stone-800/20 transition-colors">
                <td className="p-6">
                  <p className="font-mono font-bold text-amber-500">{order.id}</p>
                  <p className="text-[10px] text-stone-400">{order.date}</p>
                </td>
                <td className="p-6">
                  <p className="font-bold text-stone-100">{order.customer.name}</p>
                  <p className="text-[10px] text-stone-500 uppercase">{order.customer.address}</p>
                </td>
                <td className="p-6">
                  {order.items.map((item, idx) => (
                    <p key={idx} className="text-xs text-stone-400"><span className="text-stone-600">{item.qty}x</span> {item.name}</p>
                  ))}
                </td>
                <td className="p-6">
                  <p className="font-mono font-bold text-stone-200">Rp {order.total.toLocaleString('id-ID')}</p>
                </td>
                <td className="p-6 text-right">
                  {order.status === 'PENDING_PROCESSING' ? (
                    <div className="flex flex-col items-end gap-2">
                      <button 
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsProcessModalOpen(true);
                        }} 
                        className="bg-stone-200 text-stone-900 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md hover:bg-white transition-all"
                      >
                        Process
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedOrder(order);
                          setIsCancelModalOpen(true);
                        }} 
                        className="text-[10px] text-stone-500 hover:text-red-500 font-bold uppercase tracking-widest transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${order.status === 'SHIPPED' ? 'text-green-500' : 'text-stone-500'}`}>
                        {order.status.replace('_', ' ')}
                      </span>
                      {order.trackingNumber && (
                        <p className="font-mono text-[10px] text-stone-400 mt-1">{order.trackingNumber}</p>
                      )}
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