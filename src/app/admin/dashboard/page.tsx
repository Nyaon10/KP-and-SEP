"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardOverviewPage() {
  const [session, setSession] = useState<{ role: string; name: string; email: string } | null>(null);
  
  // NEW: State to hold the live database numbers
  const [stats, setStats] = useState({
    products: 0,
    discounts: 0,
    orders: 0
  });

  useEffect(() => {
    // 1. Get Session
    const sessionStr = localStorage.getItem('wanst_admin_session');
    if (sessionStr) {
      setSession(JSON.parse(sessionStr));
    }

    // 2. Fetch Live Dashboard Stats
    const fetchStats = async () => {
      try {
        const res = await fetch('/api/admin/dashboard-stats');
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      }
    };

    fetchStats();
  }, []);

  if (!session) return null; 

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* HEADER OVERVIEW */}
      <div className="mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">
          Welcome back, {session.name}
        </h2>
        <p className="text-stone-400 text-sm">
          Here is your operational overview for Wanst Coffee & Roastery.
        </p>
      </div>

      {/* QUICK STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-stone-800/30 rounded-full blur-xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Total Products</h3>
          <p className="text-4xl font-oswald text-stone-100 relative z-10">{stats.products}</p>
        </div>
        
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-amber-900/10 rounded-full blur-xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Active Discounts</h3>
          <p className="text-4xl font-oswald text-amber-500 relative z-10">{stats.discounts}</p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-900/10 rounded-full blur-xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2 relative z-10">Pending Orders</h3>
          <p className="text-4xl font-oswald text-red-500 relative z-10">{stats.orders}</p>
        </div>
        
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col justify-center">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">System Status</h3>
          <div className="flex items-center gap-2 bg-green-500/10 w-fit px-3 py-1.5 rounded-lg border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-green-500">Online</span>
          </div>
        </div>

      </div>

      {/* QUICK LINKS SECTION */}
      <h3 className="text-sm font-bold text-stone-300 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">
        Quick Access Modules
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* ACTION CARDS FOR ADMIN */}
        {session.role === 'admin' && (
          <>
            <Link href="/admin/orders" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all relative overflow-hidden">
              {stats.orders > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md">
                  {stats.orders}
                </div>
              )}
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">🚚 Order Logistics</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Process incoming orders, manage shipments, and update tracking numbers.</p>
            </Link>

            <Link href="/admin/inventory" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">📦 Inventory & Content</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Manage product stock, update catalog descriptions, and write roasting logs.</p>
            </Link>
            
            <Link href="/admin/discounts" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">🏷️ Discount Products</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Assign promotional pricing to specific beans to boost sales.</p>
            </Link>

            {/* NEW: Customer Accounts Card */}
            <Link href="/admin/customers" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">🤝 Customer Accounts</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Manage registered customers, suspend access, or remove accounts.</p>
            </Link>
          </>
        )}

        {/* ACTION CARDS FOR MANAGER */}
        {session.role === 'manager' && (
          <>
            <Link href="/manager/pricing" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">💰 Pricing Policy</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Configure global pricing strategies and base prices.</p>
            </Link>
            
            <Link href="/manager/finance" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">📊 Financial Hub</h4>
              <p className="text-xs text-stone-500 leading-relaxed">View debit/credit reports, export analytics, and track revenue.</p>
            </Link>
            
            <Link href="/admin/users" className="group bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-900/50 p-6 rounded-xl transition-all">
              <h4 className="font-bold text-stone-200 group-hover:text-amber-500 mb-2 transition-colors">👥 User Management</h4>
              <p className="text-xs text-stone-500 leading-relaxed">Control admin access, create accounts, and manage permissions.</p>
            </Link>
          </>
        )}
      </div>

    </div>
  );
}