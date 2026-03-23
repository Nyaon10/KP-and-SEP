"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ManagerDashboardPage() {
  const [session, setSession] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const sessionStr = localStorage.getItem('wanst_admin_session');
    if (sessionStr) {
      setSession(JSON.parse(sessionStr));
    }
  }, []);

  if (!session) return null;

  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">
          Welcome back, {session.name}
        </h2>
        <p className="text-stone-400 text-sm">
          Here is your financial and managerial overview for this month.
        </p>
      </div>

      <div className="mb-12 space-y-6">
        {/* Top Finance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-900/10 rounded-full blur-xl"></div>
            <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Monthly Revenue</h3>
            <p className="text-3xl font-oswald text-green-500 relative z-10">Rp 12.450.000</p>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-900/10 rounded-full blur-xl"></div>
            <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Procurement (Debit)</h3>
            <p className="text-3xl font-oswald text-red-400 relative z-10">Rp 4.200.000</p>
          </div>

          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-900/10 rounded-full blur-xl"></div>
            <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Total Sales (Bags)</h3>
            <p className="text-3xl font-oswald text-stone-100 relative z-10">142</p>
          </div>
          
          <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
            <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Top Product</h3>
            <p className="text-xl font-oswald text-amber-500 relative z-10 leading-tight">Nothing But Love</p>
            <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">45 Units Sold</p>
          </div>
        </div>

        {/* Simple CSS Sales Trend Chart */}
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-6">7-Day Sales Trend (Simulated)</h3>
          <div className="flex items-end gap-2 h-40 w-full">
            {[30, 45, 20, 60, 80, 50, 90].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-amber-900/40 rounded-t-sm group-hover:bg-amber-600 transition-colors relative"
                  style={{ height: `${height}%` }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}
                  </span>
                </div>
                <span className="text-[9px] text-stone-600 font-bold uppercase tracking-widest">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-sm font-bold text-stone-300 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">
        Managerial Modules
      </h3>
      
      {/* THE FIX: Changed to lg:grid-cols-4 to fit our new 4th module nicely */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/manager/pricing" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
          <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">💰 Pricing Policy</h4>
          <p className="text-xs text-stone-500 leading-relaxed">Configure global pricing strategies and base prices.</p>
        </Link>
        
        <Link href="/manager/finance" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
          <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">📊 Financial Hub</h4>
          <p className="text-xs text-stone-500 leading-relaxed">View debit/credit reports, export analytics, and track revenue.</p>
        </Link>

        {/* NEW 4TH MODULE: PROCUREMENT */}
        <Link href="/manager/procurement" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all relative overflow-hidden">
          <div className="absolute top-4 right-4 w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
          <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">🛒 Procurement</h4>
          <p className="text-xs text-stone-500 leading-relaxed">Log supplier purchases (e.g. NIR Coffee) and select delivery/pickup logistics.</p>
        </Link>
        
        <Link href="/manager/users" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
          <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">👥 User Management</h4>
          <p className="text-xs text-stone-500 leading-relaxed">Control admin access, create accounts, and manage permissions.</p>
        </Link>
      </div>

    </div>
  );
}