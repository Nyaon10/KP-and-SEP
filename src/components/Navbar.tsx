"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // IMPORT usePathname
import { useCart } from '../context/CartContext'; // Adjust path if necessary

export default function Navbar() {
  const pathname = usePathname(); // GET CURRENT PATH
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePic, setProfilePic] = useState<string | null>(null);

  const { totalItems } = useCart();
  
  // We wrap the data loading into a reusable function
  const loadUserData = () => {
    const sessionActive = localStorage.getItem('wanst_active_session');
    if (sessionActive === 'true') {
      setIsLoggedIn(true);
      const storedUserStr = localStorage.getItem('wanst_mock_user');
      if (storedUserStr) {
        const parsedUser = JSON.parse(storedUserStr);
        setProfilePic(parsedUser.profileImage || null);
      }
    } else {
      setIsLoggedIn(false);
      setProfilePic(null);
    }
  };

  useEffect(() => {
    // 1. Load data when the navbar first mounts
    loadUserData();

    // 2. Listen for a custom "profileUpdated" event
    window.addEventListener('profileUpdated', loadUserData);

    // 3. Clean up the listener when the component unmounts
    return () => window.removeEventListener('profileUpdated', loadUserData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('wanst_active_session');
    setIsLoggedIn(false);
    setProfilePic(null); 
    window.location.href = "/login"; 
  };

  // THE FIX: Hide the navbar completely if the user is in the /admin or /manager portals
  if (pathname.startsWith('/admin') || pathname.startsWith('/manager')) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-24"> 
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-oswald text-3xl md:text-4xl font-bold text-stone-900 uppercase tracking-tighter leading-none italic group-hover:text-amber-800 transition-colors">WANST</span>
            <span className="font-oswald text-[10px] md:text-xs font-bold text-stone-600 tracking-[0.2em] uppercase leading-none">Coffee & Roastery</span>
          </div>
        </Link>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-8 font-medium text-stone-700">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          
          <div className="relative group h-full flex items-center">
            <Link href="/shop" className="flex items-center gap-1 hover:text-amber-700 transition-colors py-4">
              Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 mt-0.5 group-hover:rotate-180 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white border border-stone-100 shadow-xl rounded-lg overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col py-2">
                <Link href="/shop?category=exotic-arabica-blends-series" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">Exotic Arabica Blends Series</Link>
                <Link href="/shop?category=exotic-single-origin-series" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">Exotic Single Origin Series</Link>
                <Link href="/shop?category=commercial-bean-series" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">Commercial Bean Series</Link>
                <div className="h-px bg-stone-200 my-1 mx-2" />
                <Link href="/shop" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm font-semibold text-stone-900">View All Products →</Link>
              </div>
            </div>
          </div>
          
          <Link href="/cart" className="flex items-center gap-2 hover:text-amber-700 transition-colors bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
            
            {/* NEW: Dynamic Number! */}
            <span>Cart ({totalItems})</span>
            
          </Link>

          {/* PROFILE DROPDOWN MENU */}
          <div className="relative group h-full flex items-center">
            
            <Link href={isLoggedIn ? "/profile" : "/login"} className="hover:text-amber-700 transition-colors p-2 rounded-full hover:bg-stone-50 py-4 flex items-center">
              {isLoggedIn && profilePic ? (
                <div className="w-8 h-8 rounded-full overflow-hidden border border-stone-300 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={profilePic} alt="User Profile" className="w-full h-full object-cover" />
                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
              )}
            </Link>

            <div className="absolute top-full right-0 w-48 bg-white border border-stone-100 shadow-xl rounded-lg overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col py-2">
                {isLoggedIn ? (
                  <>
                    <Link href="/profile" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">My Account</Link>
                    <Link href="/favourites" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">Favourites</Link>
                    <Link href="/orders" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm">Order History</Link>
                    <div className="h-px bg-stone-200 my-1 mx-2" />
                    <button onClick={handleLogout} className="text-left w-full px-4 py-2 hover:bg-stone-50 text-red-600 transition-colors text-sm font-semibold">Log Out</button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm font-semibold text-stone-900">Log In</Link>
                    <Link href="/signup" className="px-4 py-2 hover:bg-stone-50 hover:text-amber-700 transition-colors text-sm text-stone-500">Create Account</Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}