"use client";

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function ManagerLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [session, setSession] = useState<{ role: string; name: string; email: string } | null>(null);

  useEffect(() => {
    const sessionStr = localStorage.getItem('wanst_admin_session');
    if (sessionStr) {
      const parsedSession = JSON.parse(sessionStr);
      if (parsedSession.role !== 'manager') {
        router.push('/admin/dashboard');
      } else {
        setSession(parsedSession);
      }
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('wanst_admin_session');
    router.push('/admin/login');
  };

  if (!session) return <div className="min-h-screen bg-stone-950 flex items-center justify-center text-amber-600 font-mono">Authenticating Manager...</div>;

  const currentModule = pathname.split('/').pop()?.replace(/-/g, ' ') || 'dashboard';

  return (
    <div className="flex fixed inset-0 z-[100] bg-stone-950 text-stone-200 font-sans overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] flex flex-col shrink-0 bg-stone-900 border-r border-stone-800 z-40">
        <div className="h-20 flex items-center px-8 border-b border-stone-800 shrink-0">
          <h1 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest">
            Wanst <span className="text-amber-600">Portal</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          <p className="px-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4">Managerial Menu</p>
          
          <Link href="/manager/dashboard" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${pathname.includes('/dashboard') ? 'bg-amber-700/20 text-amber-500 border border-amber-900/50' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent'}`}>
            Dashboard Overview
          </Link>
          <Link href="/manager/pricing" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${pathname.includes('/pricing') ? 'bg-amber-700/20 text-amber-500 border border-amber-900/50' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent'}`}>
            Pricing Policy
          </Link>
          <Link href="/manager/finance" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${pathname.includes('/finance') ? 'bg-amber-700/20 text-amber-500 border border-amber-900/50' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent'}`}>
            Financial Hub
          </Link>

          {/* THE FIX: Added the Procurement Link here! */}
          <Link href="/manager/procurement" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${pathname.includes('/procurement') ? 'bg-amber-700/20 text-amber-500 border border-amber-900/50' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent'}`}>
            Procurement
          </Link>

          <Link href="/manager/users" className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${pathname.includes('/users') ? 'bg-amber-700/20 text-amber-500 border border-amber-900/50' : 'text-stone-400 hover:bg-stone-800 hover:text-stone-200 border border-transparent'}`}>
            User Management
          </Link>
        </nav>

        <div className="p-4 border-t border-stone-800 mt-auto">
          <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
            <p className="text-sm font-bold text-stone-200 truncate">{session.name}</p>
            <p className="text-[10px] text-stone-500 font-mono truncate mb-4">{session.email}</p>
            <button onClick={handleLogout} className="w-full bg-red-950/40 text-red-500 hover:bg-red-900/60 py-2.5 rounded text-[10px] font-bold uppercase tracking-widest transition-colors border border-red-900/30">
              End Session
            </button>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT SIDE CONTAINER ================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-stone-950">
        <header className="h-20 shrink-0 bg-stone-900 border-b border-stone-800 px-8 flex justify-between items-center z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="bg-stone-950 text-stone-300 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-stone-800">
              Module: {currentModule}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border bg-purple-950/30 text-purple-500 border-purple-900/30">
              Role: MANAGER
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto relative">
          <div className="p-8 pb-20 max-w-[1400px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}