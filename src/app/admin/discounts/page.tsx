"use client";

import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { 
    id: 'b1', name: "Nothing But Love", price: 225000, 
    discountPrice: 185000, discountStart: "2026-03-01", discountEnd: "2026-03-31", 
    categorySlug: "exotic-arabica-blends-series" 
  },
  { id: 'b2', name: "My Sweet Miracle", price: 225000, discountPrice: 0, discountStart: "", discountEnd: "", categorySlug: "exotic-arabica-blends-series" },
  { id: 's1', name: "When It's Love", price: 235000, discountPrice: 0, discountStart: "", discountEnd: "", categorySlug: "exotic-single-origin-series" },
  { id: 's2', name: "Berry Fields Forever", price: 235000, discountPrice: 0, discountStart: "", discountEnd: "", categorySlug: "exotic-single-origin-series" },
  { id: 'c1', name: "G'Day Mate", price: 100000, discountPrice: 0, discountStart: "", discountEnd: "", categorySlug: "commercial-bean-series" },
  { id: 'c2', name: "Here Comes The Vibes", price: 90000, discountPrice: 0, discountStart: "", discountEnd: "", categorySlug: "commercial-bean-series" }
];

export default function DiscountsPage() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  
  const [drafts, setDrafts] = useState<Record<string, { percent: string, start: string, end: string }>>({});

  const handleDraftChange = (id: string, field: 'percent' | 'start' | 'end', value: string) => {
    setDrafts(prev => ({
      ...prev,
      [id]: { ...(prev[id] || { percent: '', start: '', end: '' }), [field]: value }
    }));
  };

  const applySchedule = (id: string) => {
    const product = products.find(p => p.id === id);
    const draft = drafts[id];
    
    if (!product || !draft) return;

    const percentage = parseFloat(draft.percent);
    
    if (isNaN(percentage) || percentage <= 0 || percentage >= 100) {
      alert("Please enter a valid percentage between 1 and 99.");
      return;
    }
    if (!draft.start || !draft.end) {
      alert("Please select both a Start Date and an End Date.");
      return;
    }
    if (new Date(draft.start) > new Date(draft.end)) {
      alert("The End Date cannot be earlier than the Start Date.");
      return;
    }

    const discountAmount = product.price * (percentage / 100);
    const newDiscountPrice = product.price - discountAmount;

    setProducts(products.map(p => p.id === id ? { 
      ...p, 
      discountPrice: newDiscountPrice,
      discountStart: draft.start,
      discountEnd: draft.end
    } : p));

    // Clear the draft after successfully applying
    setDrafts(prev => {
      const newDrafts = { ...prev };
      delete newDrafts[id];
      return newDrafts;
    });

    setLastUpdated(new Date().toLocaleString('id-ID'));
  };

  const cancelSchedule = (id: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, discountPrice: 0, discountStart: "", discountEnd: "" } : p));
    setDrafts(prev => ({ ...prev, [id]: { percent: '', start: '', end: '' } })); 
    setLastUpdated(new Date().toLocaleString('id-ID'));
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Discount Assignments</h2>
          <p className="text-stone-400 text-sm">Schedule promotional percentage discounts to automatically run on specific dates.</p>
        </div>
      </div>

      {lastUpdated && (
        <div className="mb-6 p-4 bg-green-950/30 border border-green-900/50 text-green-500 text-xs font-mono rounded-lg flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Pricing Log: Last configured at {lastUpdated}
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
              const hasConfiguredDiscount = product.discountPrice > 0 && product.discountEnd !== "";
              const activePercentage = hasConfiguredDiscount ? Math.round((1 - product.discountPrice / product.price) * 100) : 0;
              
              let status = "NORMAL";
              if (hasConfiguredDiscount) {
                if (todayStr >= product.discountStart && todayStr <= product.discountEnd) {
                  status = "ACTIVE";
                } else if (todayStr < product.discountStart) {
                  status = "SCHEDULED";
                } else {
                  status = "EXPIRED";
                }
              }

              const draft = drafts[product.id] || { percent: '', start: '', end: '' };
              // Check if ANY of the three inputs have text in them
              const isDrafting = draft.percent.trim() !== '' || draft.start.trim() !== '' || draft.end.trim() !== '';

              return (
                <tr key={product.id} className="hover:bg-stone-800/20 transition-colors">
                  
                  {/* COLUMN 1: Product Name */}
                  <td className="p-6 align-top">
                    <p className="font-bold text-stone-100 mb-1">{product.name}</p>
                    <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">{product.categorySlug.replace(/-/g, ' ')}</p>
                  </td>

                  {/* COLUMN 2: Base Price */}
                  <td className="p-6 align-top">
                    <span className="text-stone-300 font-mono font-medium">Rp {product.price.toLocaleString('id-ID')}</span>
                  </td>

                  {/* COLUMN 3: Configuration */}
                  <td className="p-6 align-top">
                    {!hasConfiguredDiscount || status === "EXPIRED" ? (
                      <div className="flex flex-wrap items-end gap-3">
                        <div className="w-20">
                          <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">Discount</label>
                          <div className="relative">
                            <input 
                              type="number" min="1" max="99"
                              value={draft.percent}
                              onChange={(e) => handleDraftChange(product.id, 'percent', e.target.value)}
                              className="w-full bg-stone-950 border border-stone-700/50 rounded-lg pl-3 pr-6 py-2 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-xs shadow-inner text-stone-200"
                              placeholder="e.g. 15"
                            />
                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-500 font-bold text-xs">%</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-[120px]">
                          <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">Start Date</label>
                          <input 
                            type="date"
                            value={draft.start}
                            onChange={(e) => handleDraftChange(product.id, 'start', e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-xs shadow-inner text-stone-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.5]"
                          />
                        </div>
                        <div className="flex-1 min-w-[120px]">
                          <label className="block text-[9px] text-stone-500 uppercase tracking-widest mb-1.5">End Date</label>
                          <input 
                            type="date"
                            value={draft.end}
                            onChange={(e) => handleDraftChange(product.id, 'end', e.target.value)}
                            className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-xs shadow-inner text-stone-300 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert-[0.5]"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between bg-stone-950 border border-amber-900/30 p-3 rounded-xl shadow-inner">
                        <div className="flex items-center gap-6">
                          <div>
                            <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1">Configured</span>
                            <span className="text-xl font-oswald text-amber-500 leading-none">{activePercentage}% OFF</span>
                          </div>
                          <div className="h-8 w-px bg-stone-800"></div>
                          <div>
                            <span className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1">Valid Period</span>
                            <span className="text-xs font-mono text-stone-300">
                              {product.discountStart} <span className="text-stone-600 mx-1">to</span> {product.discountEnd}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </td>

                  {/* COLUMN 4: Status and Final Price */}
                  <td className="p-6 text-right align-top">
                    {status === "ACTIVE" && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 uppercase tracking-widest mb-1">
                          ● Sale Active
                        </span>
                        <span className="text-stone-100 font-mono font-bold text-lg">Rp {product.discountPrice.toLocaleString('id-ID')}</span>
                        <span className="text-xs text-stone-500 font-mono line-through">Rp {product.price.toLocaleString('id-ID')}</span>
                      </div>
                    )}
                    {status === "SCHEDULED" && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-widest mb-1">
                          Scheduled
                        </span>
                        <span className="text-stone-400 font-mono font-medium text-sm">Rp {product.price.toLocaleString('id-ID')}</span>
                        <span className="text-[9px] text-stone-500 mt-1 italic">Drops {product.discountStart}</span>
                      </div>
                    )}
                    {(status === "NORMAL" || status === "EXPIRED") && (
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-stone-800 text-stone-400 border border-stone-700 uppercase tracking-widest mb-1">
                          Normal Price
                        </span>
                        <span className="text-stone-300 font-mono font-medium text-sm">Rp {product.price.toLocaleString('id-ID')}</span>
                      </div>
                    )}
                  </td>

                  {/* COLUMN 5: Actions (Dynamic Button) */}
                  <td className="p-6 text-right align-top">
                    {/* Show Cancel if configured, otherwise show Add if drafting */}
                    {hasConfiguredDiscount ? (
                      <button 
                        onClick={() => cancelSchedule(product.id)}
                        className="text-[10px] text-red-500 hover:text-red-400 font-bold uppercase tracking-widest transition-colors mt-2"
                      >
                        Cancel Schedule
                      </button>
                    ) : isDrafting ? (
                      <button 
                        onClick={() => applySchedule(product.id)}
                        className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 mt-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md whitespace-nowrap"
                      >
                        Add Discount
                      </button>
                    ) : (
                      <div className="h-full flex items-center justify-end text-[10px] text-stone-600 italic">
                        --
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