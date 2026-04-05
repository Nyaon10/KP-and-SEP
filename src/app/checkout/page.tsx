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
}

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>('new');
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    paymentMethod: 'bank_transfer' // Default selection
  });

  useEffect(() => {
    const saved = localStorage.getItem('wanst_addresses');
    if (saved) {
      const parsedAddresses = JSON.parse(saved);
      setSavedAddresses(parsedAddresses);
      const defaultAddr = parsedAddresses.find((a: any) => a.isDefault);
      if (defaultAddr) {
        fillForm(defaultAddr);
        setSelectedAddressId(defaultAddr.id);
      }
    }
  }, []);

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
    if (id === 'new') {
      setFormData(prev => ({ ...prev, fullName: '', phone: '', address: '', city: '', postalCode: '' }));
    } else {
      const addr = savedAddresses.find(a => a.id === id);
      if (addr) fillForm(addr);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Function to handle payment method selection
  const handlePaymentChange = (method: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // MOCK MIDTRANS FLOW:
    // In production, the paymentMethod chosen here can be passed to the backend
    // to pre-select the screen in the Midtrans Snap popup.
    
    await new Promise(resolve => setTimeout(resolve, 1500));

    const orderId = `WNST-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder = {
      id: orderId,
      date: new Date().toLocaleDateString('en-CA'),
      items: cart,
      total: totalPrice,
      status: 'Pending Payment',
      shippingDetails: formData
    };

    const existingOrders = JSON.parse(localStorage.getItem('wanst_orders') || '[]');
    localStorage.setItem('wanst_orders', JSON.stringify([newOrder, ...existingOrders]));

    clearCart();
    
    alert(`Redirecting to Midtrans Secure Payment for ${formData.paymentMethod.replace('_', ' ')}...`);
    router.push(`/checkout/success?id=${orderId}`);
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

              {savedAddresses.length > 0 && (
                <div className="mb-8 p-6 bg-amber-50 rounded-2xl border-2 border-amber-200">
                  <label className="block text-[10px] font-bold text-amber-900 uppercase tracking-widest mb-3">Saved Addresses</label>
                  <select 
                    value={selectedAddressId}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    className="w-full p-4 bg-white border border-amber-300 rounded-xl text-stone-900 font-bold focus:outline-none"
                  >
                    <option value="new">Add New Address / Manual Entry</option>
                    {savedAddresses.map(addr => (
                      <option key={addr.id} value={addr.id}>{addr.label} — {addr.fullName}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Email</label>
                  <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={handleInputChange} className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Address</label>
                  <input required name="address" value={formData.address} onChange={handleInputChange} className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
                </div>
                <input required name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
                <input required name="postalCode" value={formData.postalCode} onChange={handleInputChange} placeholder="Postal Code" className="w-full p-4 bg-white border border-stone-200 rounded-xl focus:border-amber-700 outline-none text-stone-900 font-medium" />
              </div>
            </section>

            {/* --- SECTION 2: PAYMENT (MIDTRANS OPTIONS) --- */}
            <section>
              <h2 className="text-xl font-bold text-stone-900 uppercase tracking-wide mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm">2</span>
                Payment Method
              </h2>
              
              <div className="space-y-4">
                {/* Bank Transfer Option */}
                <div 
                  onClick={() => handlePaymentChange('bank_transfer')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.paymentMethod === 'bank_transfer' ? 'border-amber-800 bg-amber-50' : 'border-stone-200 bg-white hover:border-stone-300'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 uppercase text-xs tracking-wider">Bank Transfer</p>
                      <p className="text-[10px] text-stone-500 font-medium uppercase tracking-widest">BCA, Mandiri, BNI, BRI</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'bank_transfer' ? 'border-amber-800' : 'border-stone-300'}`}>
                    {formData.paymentMethod === 'bank_transfer' && <div className="w-2.5 h-2.5 bg-amber-800 rounded-full"></div>}
                  </div>
                </div>

                {/* QRIS / E-Wallet Option */}
                <div 
                  onClick={() => handlePaymentChange('qris')}
                  className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${formData.paymentMethod === 'qris' ? 'border-amber-800 bg-amber-50' : 'border-stone-200 bg-white hover:border-stone-300'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-stone-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 15.625a1.125 1.125 0 0 1 1.125-1.125H15m1.5 0h1.5m.75 0a1.125 1.125 0 0 1 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125M13.5 15.625V15m0 0v1.5m0 0h1.5m-1.5 0a1.125 1.125 0 0 0 1.125 1.125H15m1.5 0h1.5m.75 0v-1.5m0 1.5a1.125 1.125 0 0 0 1.125-1.125M18.75 15h.75m0 1.5v.75m0-6V8.25m0 0V7.5m0 0.75h.75m-3.75 0h.008v.008H15V8.25Zm3.75 0h.008v.008H18.75V8.25Zm-3.75 3.75h.008v.008H15V12Zm3.75 0h.008v.008H18.75V12Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-stone-900 uppercase text-xs tracking-wider">E-Wallet / QRIS</p>
                      <p className="text-[10px] text-stone-500 font-medium uppercase tracking-widest">GoPay, ShopeePay, Dana, LinkAja</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === 'qris' ? 'border-amber-800' : 'border-stone-300'}`}>
                    {formData.paymentMethod === 'qris' && <div className="w-2.5 h-2.5 bg-amber-800 rounded-full"></div>}
                  </div>
                </div>

                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest text-center mt-2">
                  Payments secured by Midtrans Snap
                </p>
              </div>
            </section>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white rounded-3xl border-2 border-stone-900 p-8 shadow-xl sticky top-32">
              <h2 className="font-oswald text-2xl font-bold text-stone-900 uppercase mb-8">Review Order</h2>
              {/* ... (Keep your cart mapping code here) ... */}
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

              <div className="border-t border-stone-200 pt-6 mb-8 flex justify-between items-end">
                <span className="font-oswald font-bold text-stone-900 uppercase text-xl">Total</span>
                <div className="flex items-baseline gap-2 text-amber-800">
                  <span className="text-lg font-bold">Rp</span>
                  <span className="text-3xl font-mono font-bold">{totalPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-amber-800 transition-all shadow-xl active:scale-[0.98] disabled:opacity-50"
              >
                {isProcessing ? 'Connecting...' : `Proceed to Payment`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}