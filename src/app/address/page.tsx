"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Address {
  id: string;
  label: string; 
  fullName: string;
  phone: string;
  street: string;
  city: string;
  postalCode: string;
  isDefault: boolean;
}

export default function AddressBookPage() {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    label: '',
    fullName: '',
    phone: '',
    street: '',
    city: '',
    postalCode: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('wanst_addresses');
    if (saved) setAddresses(JSON.parse(saved));
  }, []);

  const saveToLocal = (updated: Address[]) => {
    setAddresses(updated);
    localStorage.setItem('wanst_addresses', JSON.stringify(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = addresses.map(addr => 
        addr.id === editingId ? { ...formData, id: addr.id, isDefault: addr.isDefault } : addr
      );
      saveToLocal(updated);
    } else {
      const newAddress: Address = {
        ...formData,
        id: Date.now().toString(),
        isDefault: addresses.length === 0 
      };
      saveToLocal([...addresses, newAddress]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ label: '', fullName: '', phone: '', street: '', city: '', postalCode: '' });
    setEditingId(null);
    setIsFormOpen(false);
  };

  const handleEdit = (addr: Address) => {
    setFormData({ ...addr });
    setEditingId(addr.id);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    const updated = addresses.filter(a => a.id !== id);
    saveToLocal(updated);
  };

  const setAsDefault = (id: string) => {
    const updated = addresses.map(a => ({ ...a, isDefault: a.id === id }));
    saveToLocal(updated);
  };

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 flex justify-between items-center border-b border-stone-300 pb-8">
          <div>
            <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight">Address Book</h1>
            <p className="text-stone-700 mt-2 font-medium">Manage your shipping destinations for faster checkout.</p>
          </div>
          {!isFormOpen && (
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-all shadow-xl active:scale-95"
            >
              + Add New Address
            </button>
          )}
        </header>

        {isFormOpen && (
          <div className="animate-in fade-in slide-in-from-top-6 duration-500 mb-12">
            <form onSubmit={handleSubmit} className="bg-white border-2 border-stone-900 rounded-3xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase mb-8 border-b border-stone-100 pb-4">
                  {editingId ? 'Modify Address' : 'Create New Address'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">Location Label</label>
                    <input required value={formData.label} onChange={e => setFormData({...formData, label: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium placeholder-stone-400" placeholder="e.g. Home, Office, Parents House" />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">Recipient Name</label>
                    <input required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium" />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">Phone Number</label>
                    <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">Street Details</label>
                    <input required value={formData.street} onChange={e => setFormData({...formData, street: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium" />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">City</label>
                    <input required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium" />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-bold text-stone-900 uppercase tracking-widest mb-2">Postal Code</label>
                    <input required value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})} className="w-full p-4 bg-stone-50 border-2 border-stone-200 rounded-xl focus:outline-none focus:border-stone-900 text-stone-900 font-medium" />
                  </div>
                </div>
              </div>

              {/* STICKY-STYLE FOOTER FOR THE SAVE BUTTON */}
              <div className="bg-stone-900 p-6 flex gap-4 justify-end items-center">
                <button 
                  type="button" 
                  onClick={resetForm} 
                  className="px-6 py-3 font-bold text-stone-400 uppercase text-xs tracking-widest hover:text-white transition-colors"
                >
                  Discard Changes
                </button>
                <button 
                  type="submit" 
                  className="bg-amber-700 text-white px-12 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-600 transition-all shadow-lg active:scale-95"
                >
                  {editingId ? 'Update & Save' : 'Confirm & Save Address'}
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map(addr => (
            <div key={addr.id} className={`bg-white border-2 rounded-3xl p-6 transition-all group ${addr.isDefault ? 'border-amber-800 shadow-lg' : 'border-stone-200 shadow-sm hover:border-stone-400'}`}>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-oswald font-bold text-stone-900 uppercase tracking-wider text-xl">{addr.label}</span>
                  {addr.isDefault && <span className="bg-amber-100 text-amber-900 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-amber-300">Default</span>}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit(addr)} className="text-stone-400 hover:text-stone-900 transition-colors" title="Edit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>
                  </button>
                  <button onClick={() => handleDelete(addr.id)} className="text-stone-400 hover:text-red-600 transition-colors" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                  </button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-stone-900 font-bold text-base">{addr.fullName}</p>
                <p className="text-stone-800 font-semibold text-sm">{addr.phone}</p>
                <p className="text-stone-700 text-sm leading-relaxed pt-2">
                  {addr.street}<br/>
                  {addr.city}, {addr.postalCode}
                </p>
              </div>
              {!addr.isDefault && (
                <button 
                  onClick={() => setAsDefault(addr.id)}
                  className="mt-6 text-xs font-bold text-amber-800 hover:text-stone-900 uppercase tracking-widest transition-colors underline decoration-2 underline-offset-4"
                >
                  Set as Primary Address
                </button>
              )}
            </div>
          ))}
          {addresses.length === 0 && !isFormOpen && (
            <div className="md:col-span-2 border-4 border-dashed border-stone-200 rounded-3xl p-16 text-center">
              <p className="text-stone-600 font-bold text-xl italic uppercase tracking-widest mb-2">No Destinations Saved</p>
              <p className="text-stone-500">Add an address to enable one-click checkout on your next roast.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}