"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const VALID_USERS = [
      { email: 'admin@wanst.com', password: 'Admin123!', role: 'admin', name: 'Super Admin' },
      { email: 'manager@wanst.com', password: 'Manager123!', role: 'manager', name: 'Store Manager' }
    ];

    const user = VALID_USERS.find(u => u.email === email && u.password === password);

    if (user) {
      const sessionData = {
        isLoggedIn: true,
        role: user.role,
        name: user.name,
        email: user.email
      };
      
      localStorage.setItem('wanst_admin_session', JSON.stringify(sessionData));
      if (user.role === 'manager') {
        router.push('/manager/dashboard');
      } else {
        router.push('/admin/dashboard');
      }
    } else {
      setError('Invalid system credentials. Unauthorized access is logged.');
      setPassword('');
    }
  };

  return (
    // Added items-center to strictly enforce centering
    <main className="min-h-screen bg-stone-950 flex flex-col items-center justify-center py-12 px-6 sm:px-8 font-sans">
      
      {/* THE FIX: Changed to max-w-md (28rem / 448px) for a strict, compact width */}
      <div className="max-w-md w-full">
        
        <div className="text-center mb-8">
          <h1 className="font-oswald text-4xl font-bold text-white uppercase tracking-widest mb-3">
            Wanst <span className="text-amber-600">Portal</span>
          </h1>
          <p className="text-stone-400 text-xs tracking-widest uppercase font-semibold">
            Authorized Personnel Only
          </p>
        </div>

        {/* Adjusted padding to perfectly match the new narrower width */}
        <div className="bg-stone-900 p-8 sm:p-10 rounded-3xl border border-stone-800 shadow-2xl">
          {error && (
            <div className="mb-6 p-4 bg-red-950/50 border border-red-900/50 text-red-500 text-xs font-mono rounded-xl animate-in fade-in">
              &gt; ERROR: {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                Staff Email
              </label>
              <input 
                required 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 bg-stone-950 border border-stone-800 rounded-xl focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none text-stone-200 transition-all font-mono text-sm shadow-[inset_0_0_0px_1000px_rgb(12,10,9)] [-webkit-text-fill-color:white]"
                placeholder="system@wanst.com"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                Passcode
              </label>
              <input 
                required 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-4 bg-stone-950 border border-stone-800 rounded-xl focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none text-stone-200 transition-all font-mono text-sm shadow-[inset_0_0_0px_1000px_rgb(12,10,9)] [-webkit-text-fill-color:white]"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-amber-700 text-white py-4 mt-2 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all shadow-lg active:scale-[0.98]"
            >
              Authenticate
            </button>
          </form>
        </div>

        <div className="mt-8 p-5 border border-dashed border-stone-800 rounded-2xl bg-stone-900/50">
          <h3 className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" /></svg>
            QA Testing Credentials
          </h3>
          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-stone-400">
              <span>Admin:</span>
              <span className="text-stone-300 bg-stone-950 px-2 py-1.5 rounded-lg border border-stone-800">admin@wanst.com</span>
            </div>
            <div className="flex justify-between items-center text-stone-400">
              <span>Manager:</span>
              <span className="text-stone-300 bg-stone-950 px-2 py-1.5 rounded-lg border border-stone-800">manager@wanst.com</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-stone-500 hover:text-stone-300 text-[10px] font-bold uppercase tracking-widest transition-colors">
            ← Return to Storefront
          </Link>
        </div>

      </div>
    </main>
  );
}