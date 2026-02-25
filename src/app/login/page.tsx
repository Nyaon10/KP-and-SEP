"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; 

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(''); 
    
    const storedUserStr = localStorage.getItem('wanst_mock_user');
    
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      
      if (storedUser.email === email && storedUser.password === password) {
        localStorage.setItem('wanst_active_session', 'true');
        // Use router.push for a smoother internal transition
        router.push('/'); 
      } else {
        setErrorMessage("Invalid email or password!");
        setPassword('');
      }
    } else {
      setErrorMessage("No account found! Please sign up first.");
      setPassword('');
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight">Welcome Back</h2>
        <p className="mt-2 text-sm text-stone-600">Sign in to your account to continue</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-stone-200">
          
          {errorMessage && (
            <div className="mb-6 p-3 rounded-md bg-red-50 text-sm text-red-600 border border-red-200">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email address</label>
              <div className="mt-1">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full bg-white text-stone-900 appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm transition-colors" 
                  placeholder="you@example.com" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-stone-700">Password</label>
              <div className="mt-1">
                <input 
                  id="password" 
                  name="password" 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full bg-white text-stone-900 appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-stone-300 text-amber-700 focus:ring-amber-700 accent-amber-700" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-stone-900">Remember me</label>
              </div>
              
              {/* --- FUNCTIONAL FORGOT PASSWORD LINK --- */}
              <div className="text-sm">
                <Link 
                  href="/forgot-password" 
                  className="font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-lg bg-stone-900 py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline-amber-700 transition-colors">
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-stone-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-stone-500">New to Wanst?</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/signup" className="flex w-full justify-center rounded-lg bg-white border border-stone-300 py-2.5 px-4 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 transition-colors">
                Create an account
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}