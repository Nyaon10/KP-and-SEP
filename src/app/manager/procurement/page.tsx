"use client";

import { useState } from 'react';
import Link from 'next/link';

type ProcurementOrder = {
  id: string;
  date: string;
  supplier: string;
  items: string;
  totalCost: number;
  logistics: 'DELIVERY' | 'SELF-PICKUP';
  status: 'ARRIVED' | 'IN-TRANSIT' | 'ORDERED';
};

const INITIAL_LOGS: ProcurementOrder[] = [
  { id: 'PO-20260315-01', date: '2026-03-15', supplier: 'NIR Coffee', items: '20kg Kerinci Green Beans', totalCost: 1800000, logistics: 'DELIVERY', status: 'ARRIVED' },
  { id: 'PO-20260318-02', date: '2026-03-18', supplier: 'NIR Coffee', items: '10kg Karo Green Beans', totalCost: 950000, logistics: 'SELF-PICKUP', status: 'IN-TRANSIT' }
];

export default function ProcurementPage() {
  const [logs, setLogs] = useState<ProcurementOrder[]>(INITIAL_LOGS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    supplier: 'NIR Coffee',
    items: '',
    totalCost: 0,
    logistics: 'DELIVERY' as 'DELIVERY' | 'SELF-PICKUP',
    status: 'ORDERED' as 'ARRIVED' | 'IN-TRANSIT' | 'ORDERED'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrder: ProcurementOrder = {
      id: `PO-20260320-0${logs.length + 1}`,
      date: new Date().toISOString().split('T')[0],
      ...formData
    };
    setLogs([newOrder, ...logs]);
    setIsModalOpen(false);
    setFormData({ supplier: 'NIR Coffee', items: '', totalCost: 0, logistics: 'DELIVERY', status: 'ORDERED' });
  };

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 border border-stone-700 p-8 rounded-2xl w-full max-w-lg shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">Log New Procurement</h3>
            <p className="text-stone-400 text-xs mb-6">Record a purchase from an external supplier like NIR Coffee.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Supplier Source</label>
                  <select 
                    value={formData.supplier}
                    onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm cursor-pointer"
                  >
                    {/* THE FIX: Explicit black text for options */}
                    <option value="NIR Coffee" className="text-stone-950">NIR Coffee (Official)</option>
                    <option value="Otten Coffee" className="text-stone-950">Otten Coffee</option>
                    <option value="Direct Farmer" className="text-stone-950">Direct Farmer / Estate</option>
                    <option value="Other Supplier" className="text-stone-950">Other Supplier</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Logistics Method</label>
                  <select 
                    value={formData.logistics}
                    onChange={(e) => setFormData({...formData, logistics: e.target.value as any})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm cursor-pointer"
                  >
                    <option value="DELIVERY" className="text-stone-950">🚚 Delivery (Courier)</option>
                    <option value="SELF-PICKUP" className="text-stone-950">🏪 Self-Pickup (Ambil)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Items Purchased</label>
                <input 
                  type="text" 
                  required
                  value={formData.items}
                  onChange={(e) => setFormData({...formData, items: e.target.value})}
                  placeholder="e.g. 50kg Arabica Green Beans"
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Total Amount (Rp)</label>
                  <input 
                    type="number" 
                    required
                    value={formData.totalCost}
                    onChange={(e) => setFormData({...formData, totalCost: parseInt(e.target.value) || 0})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Initial Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm cursor-pointer"
                  >
                    <option value="ORDERED" className="text-stone-950">Ordered</option>
                    <option value="IN-TRANSIT" className="text-stone-950">In-Transit</option>
                    <option value="ARRIVED" className="text-stone-950">Arrived</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-6 border-t border-stone-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-white transition-colors">Cancel</button>
                <button type="submit" className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md">Save Procurement</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Procurement & Sourcing</h2>
          <p className="text-stone-400 text-sm">Log external purchases, manage supplier relationships, and track arrivals.</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-stone-900 border border-stone-700 hover:bg-stone-800 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2">+ Log Purchase Order</button>
      </div>

      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-stone-950 outline outline-1 outline-stone-800">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold w-[20%]">Order ID & Date</th>
              <th className="p-6 font-bold w-[20%]">Supplier Source</th>
              <th className="p-6 font-bold w-[25%]">Item Description</th>
              <th className="p-6 font-bold w-[15%]">Total Paid (Debit)</th>
              <th className="p-6 font-bold w-[10%]">Logistics</th>
              <th className="p-6 font-bold w-[10%] text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-stone-800/20 transition-colors">
                <td className="p-6 align-middle">
                  <p className="font-mono font-bold text-amber-500 mb-1">{log.id}</p>
                  <p className="text-[10px] uppercase tracking-widest text-stone-400">{log.date}</p>
                </td>
                <td className="p-6 align-middle">
                  <div className="flex flex-col">
                    <span className="font-bold text-stone-100">{log.supplier}</span>
                    <Link href="https://nircoffee.id/shop" target="_blank" className="text-[9px] text-stone-500 hover:text-amber-500 transition-colors uppercase tracking-widest underline mt-1">Visit Shop External</Link>
                  </div>
                </td>
                <td className="p-6 align-middle">
                  <p className="text-xs text-stone-300 leading-relaxed">{log.items}</p>
                </td>
                <td className="p-6 align-middle">
                  <p className="font-mono font-bold text-red-400">Rp {log.totalCost.toLocaleString('id-ID')}</p>
                </td>
                <td className="p-6 align-middle">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                    {log.logistics === 'DELIVERY' ? '🚚 Delivery' : '🏪 Pickup'}
                  </span>
                </td>
                <td className="p-6 align-middle text-right">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[9px] font-bold border uppercase tracking-widest ${
                    log.status === 'ARRIVED' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 
                    log.status === 'IN-TRANSIT' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' : 
                    'bg-amber-500/10 text-amber-500 border-amber-900/20'
                  }`}>
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}