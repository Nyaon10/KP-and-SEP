"use client";

import { useState, useEffect } from 'react';

export default function ProcurementPage() {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // The initial state for creating a NEW procurement
  const [formData, setFormData] = useState({
    supplier: '',
    items_description: '',
    total_cost: '',
    logistics: 'SELF_PICKUP',
    courier_service: '',
    ordered_date: new Date().toISOString().split('T')[0] // Default to today
  });

  const fetchHistory = async () => {
    try {
      const res = await fetch('/api/manager/procurement');
      const data = await res.json();
      setHistory(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // 1. Manual Validation Check
  if (formData.logistics === 'DELIVERY' && !formData.courier_service) {
    alert("Please select a Courier Service for the delivery.");
    return;
  }

  if (!formData.supplier || !formData.items_description || !formData.total_cost) {
    alert("Please fill in all required fields (Supplier, Description, Cost).");
    return;
  }

  try {
    const res = await fetch('/api/manager/procurement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      fetchHistory(); // Refresh the table
      setFormData({ 
        ...formData, 
        supplier: '', 
        items_description: '', 
        total_cost: '', 
        courier_service: '' // Reset the courier service
      });
      alert("Procurement logged & Expense tracked!");
    } else {
      // 2. Catch API errors
      const errorData = await res.json();
      alert(`Server Error: ${errorData.error || 'Failed to save to database'}`);
    }
  } catch (err) {
    console.error("Submission failed:", err);
    alert("Network error. Check console for details.");
  }
};

  // The function to update the timeline (Sent/Received)
  const updateStatus = async (id: string, newStatus: string) => {
    const today = new Date().toISOString().split('T')[0];
    const res = await fetch('/api/manager/procurement', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: newStatus, date: today })
    });
    
    if (res.ok) {
      fetchHistory(); // Refresh the table to show the new date/status
    } else {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="p-10 text-stone-500 font-mono text-center">Loading Ledger...</div>;

  return (
    <div className="animate-in fade-in duration-500 space-y-10">
      <header>
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white">Procurement Hub</h2>
        <p className="text-stone-500 text-sm mt-2">Manage raw material logistics and financial commitments.</p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* NEW PROCUREMENT FORM */}
        <section className="xl:col-span-1 bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-xl h-fit">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Ordered Date</label>
              <input 
                type="date" 
                required 
                value={formData.ordered_date} 
                onChange={e => setFormData({...formData, ordered_date: e.target.value})} 
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-amber-600 font-mono" 
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Logistics Type</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  type="button" 
                  onClick={() => setFormData({...formData, logistics: 'SELF_PICKUP', courier_service: ''})} 
                  className={`py-2 text-[10px] font-bold rounded-lg border uppercase ${formData.logistics === 'SELF_PICKUP' ? 'bg-amber-900/20 border-amber-600 text-amber-500' : 'bg-stone-950 border-stone-800 text-stone-500'}`}
                >
                  Self Pickup
                </button>
                <button 
                  type="button" 
                  onClick={() => setFormData({...formData, logistics: 'DELIVERY'})} 
                  className={`py-2 text-[10px] font-bold rounded-lg border uppercase ${formData.logistics === 'DELIVERY' ? 'bg-amber-900/20 border-amber-600 text-amber-500' : 'bg-stone-950 border-stone-800 text-stone-500'}`}
                >
                  Delivery
                </button>
              </div>
            </div>

            {formData.logistics === 'DELIVERY' && (
              <select 
                required 
                value={formData.courier_service} 
                onChange={e => setFormData({...formData, courier_service: e.target.value})} 
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white"
              >
                <option value="">-- Choose Courier --</option>
                <option value="JNE">JNE Cargo</option>
                <option value="SICEPAT">SiCepat Gokil</option>
                <option value="INTERNAL">Internal Fleet</option>
              </select>
            )}

            <input type="text" placeholder="Supplier Name" required value={formData.supplier} onChange={e => setFormData({...formData, supplier: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white outline-none focus:border-amber-600" />
            <textarea placeholder="Items description (e.g. 50kg Beans)" required value={formData.items_description} onChange={e => setFormData({...formData, items_description: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white h-20 resize-none" />
            <input type="number" placeholder="Total Cost (IDR)" required value={formData.total_cost} onChange={e => setFormData({...formData, total_cost: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-amber-500 font-mono" />
            
            <button type="submit" className="w-full bg-amber-700 text-white py-3 mt-4 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-amber-600 transition-all">Authorize Order</button>
          </form>
        </section>

        {/* LOGISTICS TIMELINE TABLE */}
        <section className="xl:col-span-2 bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-950 text-stone-500 uppercase tracking-widest border-b border-stone-800">
              <tr>
                <th className="p-5 w-1/3">Timeline</th>
                <th className="p-5">Order Details</th>
                <th className="p-5 text-right">Action / Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800">
              {history.length === 0 ? (
                <tr><td colSpan={3} className="p-10 text-center text-stone-500 italic">No procurement records found.</td></tr>
              ) : (
                history.map((h) => (
                  <tr key={h.id} className="hover:bg-stone-800/20 transition-colors">
                    
                    {/* TIMELINE COLUMN */}
                    <td className="p-5 space-y-1.5 align-top">
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-stone-500 uppercase font-bold">Ordered:</span>
                        <span className="font-mono text-stone-300">{h.ordered_date ? new Date(h.ordered_date).toLocaleDateString() : 'N/A'}</span>
                      </div>
                      
                      {h.logistics === 'DELIVERY' && (
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-blue-500/70 uppercase font-bold">Sent:</span>
                          <span className="font-mono text-blue-400">{h.sent_date ? new Date(h.sent_date).toLocaleDateString() : 'Pending'}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="text-green-500/70 uppercase font-bold">{h.logistics === 'SELF_PICKUP' ? 'Picked Up:' : 'Arrived:'}</span>
                        <span className="font-mono text-green-400">{h.arrival_date ? new Date(h.arrival_date).toLocaleDateString() : 'Pending'}</span>
                      </div>
                    </td>

                    {/* DETAILS COLUMN */}
                    <td className="p-5 align-top">
                      <p className="font-bold text-white uppercase tracking-tight">{h.supplier}</p>
                      <p className="text-stone-400 italic mb-2">"{h.items_description}"</p>
                      <div className="flex gap-2 items-center">
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-950 border border-stone-800 text-stone-500 uppercase tracking-widest">
                          {h.logistics === 'DELIVERY' ? `🚚 ${h.courier_service}` : '🏪 Pickup'}
                        </span>
                        <span className="text-amber-500 font-mono font-bold">Rp {h.total_cost.toLocaleString()}</span>
                      </div>
                    </td>

                    {/* ACTIONS COLUMN */}
                    <td className="p-5 text-right align-top">
                      {h.status === 'ORDERED' && (
                        <button 
                          onClick={() => updateStatus(h.id, h.logistics === 'DELIVERY' ? 'SENT' : 'RECEIVED')} 
                          className="bg-stone-200 hover:bg-white text-stone-900 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
                        >
                          {h.logistics === 'DELIVERY' ? 'Mark as Sent' : 'Confirm Pickup'}
                        </button>
                      )}
                      
                      {h.status === 'SENT' && (
                        <button 
                          onClick={() => updateStatus(h.id, 'RECEIVED')} 
                          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all shadow-md"
                        >
                          Confirm Arrival
                        </button>
                      )}
                      
                      {h.status === 'RECEIVED' && (
                        <span className="inline-flex items-center gap-1 text-[10px] text-green-500 font-bold uppercase tracking-widest border border-green-500/20 bg-green-500/10 px-2 py-1 rounded">
                          ✓ Completed
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}