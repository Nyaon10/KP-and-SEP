"use client";

import { useState } from 'react';

// Simulated database with financial data
type PricingItem = {
  id: string;
  name: string;
  categorySlug: string;
  cogs: number; // Cost of Goods Sold (Harga Pokok Penjualan)
  price: number; // Retail Base Price
};

const INITIAL_PRICING: PricingItem[] = [
  { id: 'b1', name: "Nothing But Love", categorySlug: "exotic-arabica-blends-series", cogs: 110000, price: 225000 },
  { id: 'b2', name: "My Sweet Miracle", categorySlug: "exotic-arabica-blends-series", cogs: 125000, price: 225000 },
  { id: 's1', name: "When It's Love", categorySlug: "exotic-single-origin-series", cogs: 130000, price: 235000 },
  { id: 's2', name: "Berry Fields Forever", categorySlug: "exotic-single-origin-series", cogs: 115000, price: 235000 },
  { id: 'c1', name: "G'Day Mate", categorySlug: "commercial-bean-series", cogs: 45000, price: 100000 },
  { id: 'c2', name: "Here Comes The Vibes", categorySlug: "commercial-bean-series", cogs: 42000, price: 90000 }
];

export default function PricingPolicyPage() {
  const [products, setProducts] = useState<PricingItem[]>(INITIAL_PRICING);
  const [modifiedRows, setModifiedRows] = useState<Set<string>>(new Set());
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  const handleChange = (id: string, field: 'cogs' | 'price', value: string) => {
    const numValue = parseInt(value) || 0;
    setProducts(products.map(p => p.id === id ? { ...p, [field]: numValue } : p));
    setModifiedRows(prev => new Set(prev).add(id));
  };

  const handleUpdateRow = (id: string) => {
    setModifiedRows(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    setLastUpdated(new Date().toLocaleString('id-ID'));
  };

  const handleSyncAll = () => {
    setModifiedRows(new Set());
    setLastUpdated(new Date().toLocaleString('id-ID'));
    alert("All pricing policies have been synchronized with the live storefront.");
  };

  // --- KPI CALCULATIONS ---
  const totalProducts = products.length;
  const avgMargin = products.reduce((acc, curr) => {
    const margin = curr.price > 0 ? ((curr.price - curr.cogs) / curr.price) * 100 : 0;
    return acc + margin;
  }, 0) / totalProducts;

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Pricing Policy</h2>
          <p className="text-stone-400 text-sm">Control production costs, retail prices, and monitor profit margins.</p>
        </div>
        <button 
          onClick={handleSyncAll}
          disabled={modifiedRows.size === 0}
          className={`px-8 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center gap-2 ${
            modifiedRows.size > 0 
              ? 'bg-amber-700 hover:bg-amber-600 text-white active:scale-95' 
              : 'bg-stone-800 text-stone-500 cursor-not-allowed'
          }`}
        >
          {modifiedRows.size > 0 ? `Sync ${modifiedRows.size} Changes` : 'Prices Synced'}
        </button>
      </div>

      {lastUpdated && (
        <div className="mb-6 p-4 bg-green-950/30 border border-green-900/50 text-green-500 text-xs font-mono rounded-lg flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Global Pricing Log: Last updated at {lastUpdated}
        </div>
      )}

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Average Catalog Margin</h3>
          <p className={`text-3xl font-oswald ${avgMargin >= 40 ? 'text-green-500' : avgMargin >= 20 ? 'text-amber-500' : 'text-red-500'}`}>
            {avgMargin.toFixed(1)}%
          </p>
          {/* FIXED LINE BELOW */}
          <p className="text-[9px] text-stone-500 uppercase tracking-widest mt-2">Target: {'>'} 40.0%</p>
        </div>
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Total Active SKUs</h3>
          <p className="text-3xl font-oswald text-stone-100">{totalProducts}</p>
          <p className="text-[9px] text-stone-500 uppercase tracking-widest mt-2">Across 3 Categories</p>
        </div>
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-sm">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Pricing Engine</h3>
          <p className="text-sm font-bold text-blue-400 mt-2 flex items-center gap-2 bg-blue-500/10 w-fit px-3 py-1.5 rounded-lg border border-blue-500/20 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> Live
          </p>
          <p className="text-[9px] text-stone-500 uppercase tracking-widest mt-3">Connected to Storefront</p>
        </div>
      </div>

      {/* PRICING TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-stone-950 outline outline-1 outline-stone-800">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold w-[30%]">Product Identity</th>
              <th className="p-6 font-bold w-[20%]">Production Cost (COGS)</th>
              <th className="p-6 font-bold w-[20%]">Retail Base Price</th>
              <th className="p-6 font-bold w-[15%]">Profit Margin</th>
              <th className="p-6 font-bold w-[15%] text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {products.map((product) => {
              const profit = product.price - product.cogs;
              const marginPercentage = product.price > 0 ? (profit / product.price) * 100 : 0;
              
              let marginColor = "text-green-500";
              let marginBg = "bg-green-500/10 border-green-500/20";
              if (marginPercentage < 20) {
                marginColor = "text-red-500";
                marginBg = "bg-red-500/10 border-red-500/20";
              } else if (marginPercentage < 40) {
                marginColor = "text-amber-500";
                marginBg = "bg-amber-500/10 border-amber-500/20";
              }

              return (
                <tr key={product.id} className="hover:bg-stone-800/20 transition-colors">
                  <td className="p-6 align-middle">
                    <p className="font-bold text-stone-100 mb-1">{product.name}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-stone-500">
                      {product.categorySlug.replace(/-/g, ' ')}
                    </p>
                  </td>
                  <td className="p-6 align-middle">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500 font-mono text-xs">Rp</span>
                      <input 
                        type="number" 
                        min="0"
                        value={product.cogs}
                        onChange={(e) => handleChange(product.id, 'cogs', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-700/50 rounded-lg pl-9 pr-4 py-2.5 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner transition-all"
                      />
                    </div>
                  </td>
                  <td className="p-6 align-middle">
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600 font-mono text-xs font-bold">Rp</span>
                      <input 
                        type="number" 
                        min="0"
                        value={product.price}
                        onChange={(e) => handleChange(product.id, 'price', e.target.value)}
                        className="w-full bg-stone-950 border border-amber-900/50 rounded-lg pl-9 pr-4 py-2.5 text-amber-500 font-bold outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner transition-all"
                      />
                    </div>
                  </td>
                  <td className="p-6 align-middle">
                    <div className="flex flex-col items-start gap-1">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded border text-xs font-bold font-mono tracking-widest ${marginColor} ${marginBg}`}>
                        {marginPercentage.toFixed(1)}%
                      </span>
                      <span className="text-[10px] text-stone-500 font-mono">
                        Profit: Rp {profit.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 align-middle text-right">
                    {modifiedRows.has(product.id) ? (
                      <button 
                        onClick={() => handleUpdateRow(product.id)}
                        className="bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 animate-in fade-in"
                      >
                        Save Policy
                      </button>
                    ) : (
                      <div className="inline-flex items-center justify-center px-5 py-2.5 bg-stone-950/50 rounded-lg border border-stone-800 text-[10px] text-stone-600 font-bold uppercase tracking-widest">
                        Synced
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