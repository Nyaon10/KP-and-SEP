"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // THE FIX: Fetch from the REAL API instead of a hardcoded array
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        // Store the real user data from MySQL
        const sessionData = {
          isLoggedIn: true,
          role: data.role,
          name: data.name,
          email: data.email
        };
        
        localStorage.setItem('wanst_admin_session', JSON.stringify(sessionData));
        
        // Redirect based on the role stored in the database
        if (data.role === 'manager') {
          router.push('/manager/dashboard');
        } else {
          router.push('/admin/dashboard');
        }
      } else {
        // Show the error from the backend (e.g., "Invalid credentials" or "Account suspended")
        setError(data.error || 'Authentication failed');
        setPassword('');
      }
    } catch (err) {
      setError('System connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-950 flex flex-col items-center justify-center py-12 px-6 sm:px-8 font-sans">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="font-oswald text-4xl font-bold text-white uppercase tracking-widest mb-3">
            Wanst <span className="text-amber-600">Portal</span>
          </h1>
          <p className="text-stone-400 text-xs tracking-widest uppercase font-semibold">
            Authorized Personnel Only
          </p>
        </div>

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
                className="w-full px-5 py-4 bg-stone-950 border border-stone-800 rounded-xl focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none text-stone-200 transition-all font-mono text-sm"
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
                className="w-full px-5 py-4 bg-stone-950 border border-stone-800 rounded-xl focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none text-stone-200 transition-all font-mono text-sm"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-amber-700 text-white py-4 mt-2 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Authenticate'}
            </button>
          </form>
        </div>

        {/* Note: You can keep the QA section for reference, but updated users will now work! */}
      </div>
    </main>
  );
}