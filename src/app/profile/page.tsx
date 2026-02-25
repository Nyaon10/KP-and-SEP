// src/app/profile/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfilePage() {
  const router = useRouter();
  
  const [userData, setUserData] = useState({ name: '', email: '', password: '', profileImage: '' });
  const [isLoading, setIsLoading] = useState(true);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({ name: '', email: '', profileImage: '' });

  useEffect(() => {
    const sessionActive = localStorage.getItem('wanst_active_session');
    
    if (sessionActive !== 'true') {
      router.push('/login');
    } else {
      const storedUserStr = localStorage.getItem('wanst_mock_user');
      if (storedUserStr) {
        const parsedUser = JSON.parse(storedUserStr);
        setUserData(parsedUser);
        setEditFormData({ 
          name: parsedUser.name, 
          email: parsedUser.email, 
          profileImage: parsedUser.profileImage || '' 
        });
      }
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('wanst_active_session');
    window.location.href = "/login";
  };

  // UPDATED: Strict Image Validation Added Here
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // 1. Check if the file type is allowed
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert("Invalid file format. Please upload a JPG, PNG, or WebP image.");
        // Clear the input so they can try again
        e.target.value = ''; 
        return;
      }

      // 2. Check if the file is too large (e.g., limit to 2MB)
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSizeInBytes) {
        alert("File is too large. Please upload an image smaller than 2MB.");
        e.target.value = ''; 
        return;
      }

      // If it passes both checks, preview it
      const imageUrl = URL.createObjectURL(file);
      setEditFormData({ ...editFormData, profileImage: imageUrl });
    }
  };

  const handleSaveChanges = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedUser = {
      ...userData,
      name: editFormData.name,
      email: editFormData.email,
      profileImage: editFormData.profileImage,
    };

    localStorage.setItem('wanst_mock_user', JSON.stringify(updatedUser));
    setUserData(updatedUser);
    setIsEditing(false);

    // Tell the Navbar to update instantly
    window.dispatchEvent(new Event('profileUpdated')); 
  };

  const cancelEdit = () => {
    setEditFormData({ name: userData.name, email: userData.email, profileImage: userData.profileImage || '' });
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center">
        <p className="text-stone-500 font-medium animate-pulse">Loading profile...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-10">
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight">
            My Account
          </h1>
          <p className="text-stone-500 mt-2 font-medium">
            Welcome back, {userData.name}!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden">
              <nav className="flex flex-col">
                <Link href="/profile" className="px-6 py-4 bg-stone-50 border-l-4 border-amber-700 font-semibold text-amber-800">
                  Account Details
                </Link>
                <Link href="/favourites" className="px-6 py-4 border-t border-stone-100 font-medium text-stone-600 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                  Favourites
                </Link>
                <Link href="/address" className="px-6 py-4 border-t border-stone-100 font-medium text-stone-600 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                  Address
                </Link>
                <Link href="/orders" className="px-6 py-4 border-t border-stone-100 font-medium text-stone-600 hover:bg-stone-50 hover:text-amber-700 transition-colors">
                  Order History
                </Link>
                <button onClick={handleLogout} className="text-left px-6 py-4 border-t border-stone-100 font-medium text-red-600 hover:bg-red-50 transition-colors">
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-bold text-stone-900">Personal Information</h2>
                
                {!isEditing && (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors px-3 py-1 rounded-md hover:bg-amber-50"
                  >
                    Edit
                  </button>
                )}
              </div>
              
              {isEditing ? (
                <form onSubmit={handleSaveChanges} className="space-y-6">
                  
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center border border-stone-300 relative">
                      {editFormData.profileImage ? (
                        <Image src={editFormData.profileImage} alt="Profile Preview" fill className="object-cover" />
                      ) : (
                        <span className="text-stone-400 text-2xl font-bold">
                          {editFormData.name.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div>
                      <label htmlFor="profile-upload" className="cursor-pointer bg-white px-4 py-2 border border-stone-300 rounded-md text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
                        Change Picture
                      </label>
                      {/* UPDATED: accept attribute restricted to specific formats */}
                      <input 
                        id="profile-upload" 
                        type="file" 
                        accept="image/png, image/jpeg, image/webp" 
                        className="hidden" 
                        onChange={handleImageUpload}
                      />
                      {/* UPDATED: Helper text changed */}
                      <p className="mt-2 text-xs text-stone-500">JPG, PNG or WebP. Max size 2MB.</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={editFormData.name}
                      onChange={(e) => setEditFormData({...editFormData, name: e.target.value})}
                      className="block w-full bg-white text-stone-900 rounded-md border border-stone-300 px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm" 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={editFormData.email}
                      onChange={(e) => setEditFormData({...editFormData, email: e.target.value})}
                      className="block w-full bg-white text-stone-900 rounded-md border border-stone-300 px-3 py-2 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-1 focus:ring-amber-700 sm:text-sm" 
                    />
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-stone-100">
                    <button type="submit" className="px-4 py-2 bg-stone-900 text-white rounded-md text-sm font-semibold hover:bg-amber-800 transition-colors">
                      Save Changes
                    </button>
                    <button type="button" onClick={cancelEdit} className="px-4 py-2 bg-white border border-stone-300 text-stone-700 rounded-md text-sm font-medium hover:bg-stone-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>

              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-stone-100 pb-6">
                    <div className="w-20 h-20 rounded-full bg-stone-200 overflow-hidden flex items-center justify-center border border-stone-300 relative shadow-sm">
                      {userData.profileImage ? (
                        <Image src={userData.profileImage} alt="Profile" fill className="object-cover" />
                      ) : (
                        <span className="text-stone-500 text-3xl font-oswald uppercase">
                          {userData.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900">{userData.name}</h3>
                      <p className="text-sm text-stone-500">Member since today</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-stone-500 font-medium">Full Name</p>
                      <p className="text-stone-900 font-semibold mt-1">{userData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 font-medium">Email Address</p>
                      <p className="text-stone-900 font-semibold mt-1">{userData.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-stone-900">Security</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-stone-500 font-medium">Password</p>
                  <p className="text-stone-900 font-semibold mt-1">••••••••</p>
                </div>
                <button className="mt-4 px-4 py-2 border border-stone-300 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
                  Change Password
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}