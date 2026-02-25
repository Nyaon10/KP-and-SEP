"use client"; 

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'; // 1. Import useState

export default function SignupPage() {
  const router = useRouter();

  // 2. Create state variables to hold the form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // State for handling inline error messages
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setErrorMessage(''); // Clear any previous errors
    
    // 1. Password Complexity Validation 
    const passwordComplexityRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])/;
    
    if (!passwordComplexityRegex.test(password)) {
      setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one symbol.");
      setPassword(''); // Clear password input
      setConfirmPassword(''); // Clear confirm password input
      return; 
    }

    // 2. Passwords Match Validation 
    if (password !== confirmPassword) {
      // Replaced alert with inline error, and clear the password fields
      setErrorMessage("Passwords do not match. Please try again.");
      setPassword(''); 
      setConfirmPassword(''); 
      return;
    }

    // Mock saving to a database by using localStorage
    const mockUser = { name, email, password };
    localStorage.setItem('wanst_mock_user', JSON.stringify(mockUser));
    
    // Instantly redirect to login
    router.push('/login'); 
  };

  return (
    <main className="min-h-screen bg-stone-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight">Create an Account</h2>
        <p className="mt-2 text-sm text-stone-600">Join Wanst to track orders and save your favorite roasts</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm sm:rounded-xl sm:px-10 border border-stone-200">
          
          {/* 3. Display inline error message if it exists */}
          {errorMessage && (
            <div className="mb-6 p-3 rounded-md bg-red-50 text-sm text-red-600 border border-red-200">
              {errorMessage}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSignup}>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
              <div className="mt-1">
                {/* 4. Bind value and onChange to state */}
                <input 
                  id="name" 
                  name="name" 
                  type="text" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full bg-white text-stone-900 appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm transition-colors" 
                  placeholder="John Doe" 
                />
              </div>
            </div>

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
                  minLength={8} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full bg-white text-stone-900 appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-stone-700">Confirm Password</label>
              <div className="mt-1">
                <input 
                  id="confirm-password" 
                  name="confirm-password" 
                  type="password" 
                  required 
                  minLength={8} 
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full bg-white text-stone-900 appearance-none rounded-md border border-stone-300 px-3 py-2 placeholder-stone-400 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-lg bg-stone-900 py-2.5 px-4 text-sm font-semibold text-white shadow-sm hover:bg-amber-800 focus-visible:outline-amber-700 transition-colors">
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative"><div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-200" /></div><div className="relative flex justify-center text-sm"><span className="bg-white px-2 text-stone-500">Already have an account?</span></div></div>
            <div className="mt-6"><Link href="/login" className="flex w-full justify-center rounded-lg bg-white border border-stone-300 py-2.5 px-4 text-sm font-semibold text-stone-700 shadow-sm hover:bg-stone-50 transition-colors">Log in instead</Link></div>
          </div>

        </div>
      </div>
    </main>
  );
}