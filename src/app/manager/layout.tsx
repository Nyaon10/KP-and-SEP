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
    
    if (!sessionStr) {
    // CHANGE THIS: redirect to the admin portal, not the customer login
    router.push('/admin/login'); 
    return;
  }

    try {
      const parsedSession = JSON.parse(sessionStr);
      if (parsedSession.role !== 'manager') {
        // Kick non-managers to the admin dashboard
        router.push('/admin/dashboard');
      } else {
        setSession(parsedSession);
      }
    } catch (e) {
      localStorage.removeItem('wanst_admin_session');
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('wanst_admin_session');
    window.location.href = '/admin/login'; // Use window.location for a clean state reset
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-stone-950 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-amber-600/20 border-t-amber-600 rounded-full animate-spin"></div>
        <p className="text-stone-500 font-mono text-xs uppercase tracking-widest">Verifying Manager Credentials...</p>
      </div>
    );
  }

  // Helper for active link styling
  const isActive = (path: string) => pathname.startsWith(path);
  const currentModule = pathname.split('/').pop()?.replace(/-/g, ' ') || 'dashboard';

  return (
    <div className="flex fixed inset-0 z-[100] bg-stone-950 text-stone-200 font-sans overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-[280px] flex flex-col shrink-0 bg-stone-900 border-r border-stone-800 z-40">
        <div className="h-20 flex items-center px-8 border-b border-stone-800 shrink-0">
          <h1 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest">
            Wanst <span className="text-amber-600">Portal</span>
          </h1>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4">Managerial Menu</p>
          
          {[
            { name: 'Dashboard Overview', path: '/manager/dashboard' },
            { name: 'Pricing Policy', path: '/manager/pricing' },
            { name: 'Financial Hub', path: '/manager/finance' },
            { name: 'Procurement', path: '/manager/procurement' },
            { name: 'User Management', path: '/manager/users' }
          ].map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${
                isActive(item.path) 
                  ? 'bg-amber-900/20 text-amber-500 border-amber-900/50 shadow-lg shadow-amber-950/50' 
                  : 'text-stone-500 hover:bg-stone-800 hover:text-stone-200 border-transparent'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* ================= USER PROFILE / LOGOUT ================= */}
        <div className="p-6 border-t border-stone-800 mt-auto bg-stone-900/50">
          <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 shadow-inner">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold text-xs">
                 {session.name.charAt(0)}
               </div>
               <div className="min-w-0">
                 <p className="text-xs font-bold text-stone-100 truncate">{session.name}</p>
                 <p className="text-[9px] text-stone-500 font-mono truncate">{session.email}</p>
               </div>
            </div>
            <button 
              onClick={handleLogout} 
              className="w-full bg-red-950/20 text-red-500 hover:bg-red-900/30 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border border-red-900/20 active:scale-95"
            >
              End Session
            </button>
          </div>
        </div>
      </aside>

      {/* ================= RIGHT SIDE CONTENT ================= */}
      <div className="flex-1 flex flex-col min-w-0 bg-stone-950">
        <header className="h-20 shrink-0 bg-stone-900/50 backdrop-blur-md border-b border-stone-800 px-8 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
              {currentModule}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest border bg-purple-950/30 text-purple-400 border-purple-500/20">
              Role: Master Manager
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto relative bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-900/20 via-transparent to-transparent">
          <div className="p-10 max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}