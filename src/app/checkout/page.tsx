"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

interface Address {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  street: string;
  city: string;
  postalCode: string;
  isDefault?: boolean;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(true);

  // 👇 Removed paymentMethod from state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [shippingFee, setShippingFee] = useState(0);

  useEffect(() => {
    const fetchAddresses = async () => {
      const userStr = localStorage.getItem('wanst_mock_user');
      
      if (!userStr) {
        setIsLoadingAddresses(false);
        return;
      }

      try {
        const user = JSON.parse(userStr);
        setFormData(prev => ({ ...prev, email: user.email || '' }));

        const res = await fetch(`/api/storefront/addresses?customer_id=${user.id}`);
        
        if (res.ok) {
          const dbAddresses = await res.json();
          
          const formatted = dbAddresses.map((db: any) => ({
            id: db.id,
            label: db.label,
            fullName: db.full_name,
            phone: db.phone,
            street: db.street,
            city: db.city,
            postalCode: db.postal_code,
            isDefault: db.is_default
          }));

          setSavedAddresses(formatted);

          if (formatted.length > 0) {
            const defaultAddr = formatted.find((a: any) => a.isDefault) || formatted[0];
            setSelectedAddressId(defaultAddr.id);
            fillForm(defaultAddr);
          }
        }
      } catch (error) {
        console.error("Failed to fetch addresses:", error);
      } finally {
        setIsLoadingAddresses(false);
      }
    };

    fetchAddresses();
  }, []);

  useEffect(() => {
    const destinationCity = formData.city.toLowerCase();
    
    if (!destinationCity) {
      setShippingFee(0);
    } else if (destinationCity.includes('surabaya')) {
      setShippingFee(10000);
    } else if (destinationCity.includes('sidoarjo')) {
      setShippingFee(15000);
    } else {
      setShippingFee(25000); 
    }
  }, [formData.city]);

  const fillForm = (addr: Address) => {
    setFormData(prev => ({
      ...prev,
      fullName: addr.fullName,
      phone: addr.phone,
      address: addr.street,
      city: addr.city,
      postalCode: addr.postalCode
    }));
  };

  const handleAddressChange = (id: string) => {
    setSelectedAddressId(id);
    const addr = savedAddresses.find(a => a.id === id);
    if (addr) fillForm(addr);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const finalTotalAmount = totalPrice + shippingFee;
      const fullShippingAddress = `${formData.address}, ${formData.city}, ${formData.postalCode}`;

      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cart,
          totalAmount: finalTotalAmount, 
          shippingAddress: fullShippingAddress,
          shippingFee: shippingFee
        }),
      });

      const data = await response.json();

      if (response.status === 401) {
        alert('Your session expired. Please log in to complete your purchase!');
        router.push('/login');
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong during checkout.');
      }

      if (data.paymentUrl) {
        clearCart(); 
        window.location.href = data.paymentUrl; 
      }

    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to initiate checkout. Please check your connection and try again.');
    } finally {
      setIsProcessing(false);
    }
  };
  
  if (cart.length === 0 && !isProcessing) return null;

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight mb-10">Checkout</h1>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            {/* --- SECTION 1: SHIPPING --- */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 uppercase tracking-wide mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">1</span>
                Shipping Information
              </h2>

              {isLoadingAddresses ? (
                <div className="p-8 text-center bg-stone-100 rounded-2xl border-2 border-stone-200">
                  <p className="text-stone-500 font-bold uppercase tracking-widest text-xs animate-pulse">Loading your addresses...</p>
                </div>
              ) : savedAddresses.length === 0 ? (
                <div className="bg-rose-50 border-2 border-rose-200 rounded-2xl p-8 text-center shadow-sm">
                  <div className="w-16 h-16 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-rose-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <h3 className="font-oswald text-2xl font-bold text-rose-900 uppercase mb-2">No Address Found</h3>
                  <p className="text-stone-600 mb-6 font-medium">You need to set up a delivery destination before checking out.</p>
                  <button
                    type="button"
                    onClick={() => router.push('/address')}
                    className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-all shadow-xl active:scale-95"
                  >
                    Go to Address Book
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
                    <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-widest mb-3">Select Delivery Address</label>
                    <select 
                      value={selectedAddressId}
                      onChange={(e) => handleAddressChange(e.target.value)}
                      className="w-full p-4 bg-white border border-amber-300 rounded-xl text-stone-900 font-bold focus:outline-none"
                    >
                      {savedAddresses.map(addr => (
                        <option key={addr.id} value={addr.id}>{addr.label} — {addr.fullName} ({addr.city})</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Email for Receipt</label>
                      <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" placeholder="your@email.com" />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input readOnly value={formData.fullName} className="w-full p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-500 font-medium cursor-not-allowed" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Phone</label>
                      <input readOnly value={formData.phone} className="w-full p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-500 font-medium cursor-not-allowed" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2">Address</label>
                      <input readOnly value={formData.address} className="w-full p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-500 font-medium cursor-not-allowed" />
                    </div>
                    <input readOnly value={formData.city} className="w-full p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-500 font-medium cursor-not-allowed" />
                    <input readOnly value={formData.postalCode} className="w-full p-4 bg-stone-100 border border-stone-200 rounded-xl text-stone-500 font-medium cursor-not-allowed" />
                  </div>
                </>
              )}
            </section>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white rounded-3xl border-2 border-stone-900 p-8 shadow-xl sticky top-32">
              <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase mb-8">Review Order</h2>
              
              <div className="max-h-[300px] overflow-y-auto mb-8 space-y-4 pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="relative w-16 h-16 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-stone-900 text-sm uppercase">{item.name}</h4>
                      <p className="text-[10px] text-stone-500 font-bold italic">{item.quantity}x {item.weight}</p>
                    </div>
                    <p className="font-mono font-bold text-stone-900 text-sm">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-200 pt-6 space-y-3">
                <div className="flex justify-between items-center text-stone-600">
                  <span className="font-bold text-sm uppercase">Subtotal</span>
                  <span className="font-mono font-bold">Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between items-center text-stone-600">
                  <span className="font-bold text-sm uppercase">Shipping</span>
                  <span className="font-mono font-bold">
                    {savedAddresses.length === 0 ? '-' : `Rp ${shippingFee.toLocaleString('id-ID')}`}
                  </span>
                </div>
              </div>

              <div className="border-t border-stone-900 mt-4 pt-4 mb-8 flex justify-between items-end">
                <span className="font-oswald font-bold text-stone-900 uppercase text-xl">Total</span>
                <div className="flex items-baseline gap-2 text-amber-800">
                  <span className="text-lg font-bold">Rp</span>
                  <span className="text-3xl font-mono font-bold">
                    {(totalPrice + shippingFee).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing || isLoadingAddresses || savedAddresses.length === 0} 
                className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-amber-800 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Connecting...' : `Proceed to Payment`}
              </button>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-stone-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <span className="text-[9px] font-bold uppercase tracking-widest">Payments secured by Midtrans</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}