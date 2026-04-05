"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const storedUserStr = localStorage.getItem('wanst_mock_user');
    
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      
      if (storedUser.email === email) {
        setIsSubmitted(true);
      } else {
        setError("We couldn't find an account with that email address.");
      }
    } else {
      setError("No accounts found. Please sign up first.");
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 px-8">
      {/* Updated: max-w-lg for a wider box and px-12 for better internal spacing */}
      <div className="max-w-lg w-full mx-auto bg-white p-10 px-12 rounded-3xl border border-stone-200 shadow-xl">
        {!isSubmitted ? (
          <>
            <h2 className="font-oswald text-3xl font-bold text-stone-900 uppercase mb-4 tracking-tight">
              Reset Password
            </h2>
            <p className="text-stone-600 mb-10 text-sm leading-relaxed">
              Enter the email associated with your account and we'll send a simulation link to reset your password.
            </p>
            
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100 animate-in fade-in duration-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">
                  Email Address
                </label>
                <input 
                  required 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:border-amber-700 outline-none transition-all text-stone-900 font-medium"
                  placeholder="name@example.com"
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-all active:scale-[0.98] shadow-md"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center animate-in fade-in zoom-in duration-500 py-4">
            <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-oswald text-3xl font-bold text-stone-900 uppercase mb-4">Check Your Email</h2>
            <p className="text-stone-600 mb-10 text-sm leading-relaxed">
              We've sent a password reset link to <br/>
              <span className="font-bold text-stone-900 text-base">{email}</span>
            </p>
            
            <Link 
              href="/reset-password" 
              data-testid="dev-only-link"
              className="inline-block text-amber-800 font-bold text-[10px] uppercase tracking-widest hover:bg-amber-100 bg-amber-50 px-6 py-3 rounded-xl border border-amber-200 transition-colors"
            >
              [Simulate Clicking Email Link]
            </Link>
          </div>
        )}
        <div className="mt-12 pt-8 border-t border-stone-100 text-center">
          <Link 
            href="/login" 
            className="text-stone-400 hover:text-stone-900 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Login
          </Link>
        </div>
      </div>
    </main>
  );
}