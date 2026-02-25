"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // 1. Complexity Validation (Match your Signup logic)
    const complexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;
    if (!complexityRegex.test(newPassword)) {
      setError("Password must contain uppercase, lowercase, number, and symbol.");
      return;
    }

    // 2. Matching Validation
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const storedUserStr = localStorage.getItem('wanst_mock_user');
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      
      // 3. Update the mock "Database"
      const updatedUser = { ...storedUser, password: newPassword };
      localStorage.setItem('wanst_mock_user', JSON.stringify(updatedUser));
      
      setIsSuccess(true);
      
      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 px-8">
      <div className="max-w-md w-full mx-auto bg-white p-10 rounded-3xl border border-stone-200 shadow-xl">
        {isSuccess ? (
          <div className="text-center animate-in fade-in zoom-in duration-500">
             <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" /></svg>
            </div>
            <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase mb-2">Success!</h2>
            <p className="text-stone-600 text-sm">Your password has been updated. Redirecting to login...</p>
          </div>
        ) : (
          <>
            <h2 className="font-oswald text-3xl font-bold text-stone-900 uppercase mb-4">New Password</h2>
            <p className="text-stone-600 mb-8 text-sm">Set a new, strong password for your Wanst account.</p>

            {error && <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs rounded-lg border border-red-100">{error}</div>}

            <form onSubmit={handleReset} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">New Password</label>
                <input 
                  required 
                  type="password" 
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Confirm New Password</label>
                <input 
                  required 
                  type="password" 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900"
                  placeholder="••••••••"
                />
              </div>
              <button type="submit" className="w-full bg-stone-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-all active:scale-95 shadow-lg">
                Update Password
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}