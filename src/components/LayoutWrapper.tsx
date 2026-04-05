"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

// 1. IMPORT YOUR PUBLIC COMPONENTS
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const isInternalPage = pathname.startsWith('/admin') || pathname.startsWith('/manager');
  const isLoginPage = pathname === '/admin/login';

  useEffect(() => {
    const savedSession = localStorage.getItem('wanst_admin_session');

    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      setSession(parsed); 
      
      // If logged in but trying to hit login page, send them to dashboard
      if (isLoginPage) {
        router.push(parsed.role === 'manager' ? '/manager/dashboard' : '/admin/dashboard');
      }
    } else {
      setSession(null);
      // If NOT logged in and trying to hit internal pages, redirect
      if (isInternalPage && !isLoginPage) {
        router.push('/admin/login');
      }
    }
    
    setLoading(false);
  }, [pathname, router, isInternalPage, isLoginPage]);

  // 1. If we are still checking localStorage, show a clean loader
  if (loading) {
    return <div className="min-h-screen bg-stone-950 flex items-center justify-center font-mono text-xs text-stone-500 uppercase tracking-widest">Initialising System...</div>;
  }

  // 2. THE LOGIN PAGE: Completely blank wrapper (No Navbar, No Sidebar)
  if (isLoginPage) {
    return <>{children}</>;
  }

  // 3. THE PUBLIC STOREFRONT: Show Navbar, Content, and Footer
  if (!isInternalPage) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    );
  }

  // 4. THE INTERNAL PORTAL: Admin/Manager Sidebar Layout
  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', roles: ['admin', 'manager'] },
    { name: 'Order Logistics', path: '/admin/orders', roles: ['admin', 'manager'] },
    { name: 'Inventory & Content', path: '/admin/inventory', roles: ['admin', 'manager'] },
    { name: 'Discount Products', path: '/admin/discounts', roles: ['admin', 'manager'] },
    { name: 'Pricing Policy', path: '/manager/pricing', roles: ['manager'] },
    { name: 'User Management', path: '/manager/users', roles: ['manager'] },
  ];

  return (
    <div className="flex min-h-screen bg-stone-950 text-stone-300">
      <aside className="w-72 border-r border-stone-800 p-8 flex flex-col sticky top-0 h-screen bg-stone-900/50">
        <div className="mb-12">
          <h1 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest">
            Wanst <span className="text-amber-600">Portal</span>
          </h1>
          <div className="mt-2 flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${session ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
            <span className="text-[9px] uppercase tracking-tighter text-stone-500 font-bold">
              {session?.role ? `${session.role} Mode` : 'Unauthorized'}
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          {menuItems
            .filter(item => item.roles.includes(session?.role))
            .map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-5 py-3.5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${
                  pathname === item.path 
                    ? 'bg-amber-900/20 text-amber-500 border border-amber-900/50' 
                    : 'text-stone-500 hover:bg-stone-800 hover:text-stone-100 border border-transparent'
                }`}
              >
                {item.name}
              </Link>
            ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-stone-800">
          <div className="mb-4">
            <p className="text-white font-bold text-xs truncate">{session?.name || 'Guest Staff'}</p>
            <p className="text-[10px] text-stone-500 font-mono lowercase truncate">{session?.email}</p>
          </div>
          <button 
            onClick={() => {
              localStorage.removeItem('wanst_admin_session');
              window.location.href = '/admin/login';
            }}
            className="w-full bg-red-950/20 border border-red-900/30 text-red-500 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-red-900/40 transition-all"
          >
            End Session
          </button>
        </div>
      </aside>

      <main className="flex-1 p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}