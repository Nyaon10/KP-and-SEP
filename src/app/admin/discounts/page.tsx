"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  price: number;
  discountPrice: number;
  discountStart: string;
  discountEnd: string;
  categorySlug: string;
};

export default function DiscountsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [drafts, setDrafts] = useState<Record<string, { percent: string, start: string, end: string }>>({});
  // NEW: State to track inline UI errors per product row
  const [errors, setErrors] = useState<Record<string, string>>({});

  const todayStr = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/admin/products');
        const data = await res.json();
        
        const mappedProducts = data.products.map((p: any) => ({
          id: p.id,
          name: p.name,
          price: p.base_price,
          discountPrice: p.discount_price || 0,
          discountStart: p.discount_start || "",
          discountEnd: p.discount_end || "",
          categorySlug: p.category_slug
        }));

        setProducts(mappedProducts);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load products", err);
      }
    };
    fetchData();
  }, []);

  const handleDraftChange = (id: string, field: 'percent' | 'start' | 'end', value: string) => {
    setDrafts(prev => ({
      ...prev,
      [id]: { ...(prev[id] || { percent: '', start: '', end: '' }), [field]: value }
    }));
    
    // NEW: Automatically clear the error message as soon as the user starts typing again
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const applySchedule = async (id: string) => {
    const product = products.find(p => p.id === id);
    const draft = drafts[id];
    if (!product || !draft) return;

    // --- NEW: Inline UI Validation ---
    const percentage = parseFloat(draft.percent);
    if (isNaN(percentage) || percentage <= 0 || percentage >= 100) {
      setErrors(prev => ({ ...prev, [id]: "Invalid % (Must be 1-99)" }));
      return;
    }
    if (!draft.start || !draft.end) {
      setErrors(prev => ({ ...prev, [id]: "Select both dates" }));
      return;
    }
    if (draft.start > draft.end) {
      setErrors(prev => ({ ...prev, [id]: "Start date must be before end" }));
      return;
    }
    // ----------------------------------

    const newDiscountPrice = product.price - (product.price * (percentage / 100));

    try {
      const response = await fetch('/api/admin/discounts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: id,
          discountPrice: newDiscountPrice,
          discountStart: draft.start,
          discountEnd: draft.end,
          isOnSale: true
        })
      });

      if (!response.ok) throw new Error("Database failed to save");

      setProducts(products.map(p => p.id === id ? { 
        ...p, 
        discountPrice: newDiscountPrice,
        discountStart: draft.start,
        discountEnd: draft.end
      } : p));

      setDrafts(prev => {
        const newDrafts = { ...prev };
        delete newDrafts[id];
        return newDrafts;
      });

      setLastUpdated(new Date().toLocaleString('id-ID'));
    } catch (err: any) {
      setErrors(prev => ({ ...prev, [id]: err.message || "Failed to sync" }));
    }
  };

  const cancelSchedule = async (id: string) => {
    try {
      await fetch('/api/admin/discounts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: id,
          discountPrice: 0,
          discountStart: "",
          discountEnd: "",
          isOnSale: false
        })
      });

      setProducts(products.map(p => p.id === id ? { ...p, discountPrice: 0, discountStart: "", discountEnd: "" } : p));
      setDrafts(prev => ({ ...prev, [id]: { percent: '', start: '', end: '' } })); 
      setLastUpdated(new Date().toLocaleString('id-ID'));
      
      // Clear any lingering errors just in case
      if (errors[id]) {
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[id];
          return newErrors;
        });
      }
    } catch (err: any) {
      setErrors(prev => ({ ...prev, [id]: "Failed to cancel schedule" }));
    }
  };

  if (loading) return <div className="p-10 text-stone-500 font-mono">Syncing Price Catalog...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Discount Assignments</h2>
        <p className="text-stone-400 text-sm">Schedule promotional percentage discounts to automatically run on specific dates.</p>
      </div>

      {lastUpdated && (
        <div className="mb-6 p-4 bg-green-950/30 border border-green-900/50 text-green-500 text-xs font-mono rounded-lg flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Pricing Log: System updated at {lastUpdated}
        </div>
      )}

      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-stone-950 outline outline-1 outline-stone-800">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold w-[20%]">Product Name</th>
              <th className="p-6 font-bold w-[15%]">Base Price</th>
              <th className="p-6 font-bold w-[35%]">Discount Configuration</th>
              <th className="p-6 font-bold w-[15%] text-right">Final Status</th>
              <th className="p-6 font-bold w-[15%] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {products.map((product) => {
              let status = "NORMAL";
              const hasConfiguredData = product.discountPrice > 0 && product.discountEnd !== "";
              
              if (hasConfiguredData) {
                if (todayStr >= product.discountStart && todayStr <= product.discountEnd) {
                  status = "ACTIVE";
                } else if (todayStr < product.discountStart) {
                  status = "SCHEDULED";
                } else {
                  status = "EXPIRED";
                }
              }

              const isCurrentlyLiveOrPending = (status === "ACTIVE" || status === "SCHEDULED");
              const draft = drafts[product.id] || { percent: '', start: '', end: '' };
              const isDrafting = draft.percent.trim() !== '' || draft.start.trim() !== '' || draft.end.trim() !== '';
              // Grab any specific error for this row
              const rowError = errors[product.id];

              return (
                <tr key={product.id} className="hover:bg-stone-800/20 transition-colors">
                  <td className="p-6 align-top">
                    <p className="font-bold text-stone-100 mb-1">{product.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">{product.categorySlug?.replace(/-/g, ' ')}</p>
                  </td>

                  <td className="p-6 align-top">
                    <span className="text-stone-300 font-mono font-medium">Rp {product.price.toLocaleString('id-ID')}</span>
                  </td>

                  <td className="p-6 align-top">
                    {!isCurrentlyLiveOrPending ? (
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap items-end gap-3">
                          <div className="w-20">
                            <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">Discount</label>
                            <div className="relative">
                              <input 
                                type="number" value={draft.percent}
                                onChange={(e) => handleDraftChange(product.id, 'percent', e.target.value)}
                                className={`w-full bg-stone-950 border rounded-lg pl-3 pr-6 py-2 outline-none focus:border-amber-600 text-xs text-stone-200 font-mono transition-colors ${rowError && draft.percent === '' ? 'border-red-500/50' : 'border-stone-700/50'}`}
                                placeholder="15"
                              />
                              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-500 font-bold text-xs">%</span>
                            </div>
                          </div>
                          <div className="flex-1 min-w-[120px]">
                            <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">Start Date</label>
                            <input type="date" value={draft.start} onChange={(e) => handleDraftChange(product.id, 'start', e.target.value)} className={`w-full bg-stone-950 border rounded-lg px-3 py-2 outline-none focus:border-amber-600 text-xs text-stone-300 font-mono transition-colors ${rowError && draft.start === '' ? 'border-red-500/50' : 'border-stone-700/50'}`} />
                          </div>
                          <div className="flex-1 min-w-[120px]">
                            <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">End Date</label>
                            <input type="date" value={draft.end} onChange={(e) => handleDraftChange(product.id, 'end', e.target.value)} className={`w-full bg-stone-950 border rounded-lg px-3 py-2 outline-none focus:border-amber-600 text-xs text-stone-300 font-mono transition-colors ${rowError && draft.end === '' ? 'border-red-500/50' : 'border-stone-700/50'}`} />
                          </div>
                        </div>
                        {/* NEW: Inline Error Display beneath the inputs */}
                        {rowError && (
                          <div className="flex items-center gap-1.5 animate-in slide-in-from-top-1 fade-in duration-200">
                            <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest">⚠ {rowError}</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-stone-950 border border-amber-900/30 p-3 rounded-xl shadow-inner">
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1">Configured</span>
                            <span className="text-xl font-oswald text-amber-500 leading-none">
                              {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                            </span>
                          </div>
                          <div className="h-8 w-px bg-stone-800"></div>
                          <div>
                            <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1">Valid Period</span>
                            <span className="text-xs font-mono text-stone-300">{product.discountStart} <span className="text-stone-600">to</span> {product.discountEnd}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>

                  <td className="p-6 text-right align-top">
                    {status === "ACTIVE" && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase">● Sale Active</span>
                        <span className="text-stone-100 font-mono font-bold text-lg">Rp {product.discountPrice.toLocaleString('id-ID')}</span>
                        <span className="text-xs text-stone-500 font-mono line-through">Rp {product.price.toLocaleString('id-ID')}</span>
                      </div>
                    )}
                    {status === "SCHEDULED" && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase">Scheduled</span>
                        <span className="text-stone-400 font-mono font-medium text-sm">Rp {product.price.toLocaleString('id-ID')}</span>
                        <span className="text-[9px] text-stone-500 mt-1 italic">Drops {product.discountStart}</span>
                      </div>
                    )}
                    {(status === "NORMAL" || status === "EXPIRED") && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-800 text-stone-400 border border-stone-700 uppercase">Normal Price</span>
                        <span className="text-stone-300 font-mono font-medium text-sm">Rp {product.price.toLocaleString('id-ID')}</span>
                      </div>
                    )}
                  </td>

                  <td className="p-6 text-right align-top">
                    {isCurrentlyLiveOrPending ? (
                      <button onClick={() => cancelSchedule(product.id)} className="text-[10px] text-red-500 hover:text-red-400 font-bold uppercase tracking-widest mt-2">
                        Cancel Schedule
                      </button>
                    ) : isDrafting ? (
                      <button onClick={() => applySchedule(product.id)} className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 mt-2 rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-md active:scale-95">
                        Add Discount
                      </button>
                    ) : (
                      <div className="h-full flex flex-col items-end justify-start gap-2">
                        <div className="text-[10px] text-stone-600 italic mt-3">--</div>
                        {/* Fallback for cancel/delete errors to show here if they aren't drafting */}
                        {rowError && !isDrafting && (
                           <span className="text-[10px] text-red-500 font-bold uppercase tracking-widest animate-in fade-in">⚠ {rowError}</span>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}