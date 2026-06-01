"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import Script from 'next/script';

// --- Types ---
interface ShippingOption {
  courier_name: string;
  courier_service_name: string;
  courier_service_code: string;
  duration: string;
  price: number;
}

export default function CheckoutPage() {
  const router = useRouter();
  
  // Hook into live Context cart data state
  const { cart, totalPrice, clearCart } = useCart();

  // --- 1. Form & Customer State ---
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    postalCode: ''
  });

  // State to hold multiple saved options fetched from database
  const [savedAddresses, setSavedAddresses] = useState<any[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>('new');

  // --- 2. Shipping & Payment State ---
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<ShippingOption | null>(null);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // --- 3. Live Calculations Based on Real Cart ---
  const subtotal = totalPrice;
  const totalWeight = cart.reduce((sum, item) => {
    const numericWeight = typeof item.weight === 'string' 
      ? (parseInt(item.weight) || 250) 
      : (item.weight || 250);
    return sum + (numericWeight * item.quantity);
  }, 0);
  const finalTotal = subtotal + (selectedShipping?.price || 0);

  // --- 4. Auto-fill saved addresses from database ---
  useEffect(() => {
    const fetchSavedData = async () => {
      try {
        const res = await fetch('/api/storefront/addresses'); 
        
        if (res.ok) {
          const addresses = await res.json();
          
          if (addresses && addresses.length > 0) {
            setSavedAddresses(addresses); 
            
            const defaultAddress = addresses[0]; 
            setSelectedAddressId(defaultAddress.id); 
            
            setCustomerInfo(prev => ({
              ...prev,
              name: defaultAddress.full_name || '',
              phone: defaultAddress.phone || '',
              address: `${defaultAddress.street}, ${defaultAddress.city}`, 
              postalCode: defaultAddress.postal_code || '' 
            }));
          }
        }
      } catch (error) {
        console.error("Failed to load saved addresses", error);
      }
    };
    
    fetchSavedData();
  }, []);

  // Handle changing the address from the selector element dropdown options
  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedAddressId(val);
    
    setShippingOptions([]);
    setSelectedShipping(null);

    if (val === 'new') {
      setCustomerInfo(prev => ({ ...prev, name: '', phone: '', address: '', postalCode: '' }));
    } else {
      const addr = savedAddresses.find(a => a.id === val);
      if (addr) {
        setCustomerInfo(prev => ({
          ...prev,
          name: addr.full_name || '',
          phone: addr.phone || '',
          address: `${addr.street}, ${addr.city}`,
          postalCode: addr.postal_code || ''
        }));
      }
    }
  };

  // --- 5. Fetch Biteship Rates ---
  const fetchShippingRates = async () => {
    if (!customerInfo.postalCode || customerInfo.postalCode.length < 5) {
      alert("Please enter a valid 5-digit postal code.");
      return;
    }
    
    setIsCalculatingShipping(true);
    
    try {
      const res = await fetch('/api/storefront/shipping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          destinationPostalCode: customerInfo.postalCode,
          totalWeightInGrams: totalWeight
        })
      });
      
      const data = await res.json();
      
      if (res.ok && data.length > 0) {
        setShippingOptions(data);
        setSelectedShipping(data[0]); 
      } else {
        alert("No couriers found for this area. Please check the postal code.");
      }
    } catch (error) {
      console.error("Failed to fetch rates:", error);
      alert("Failed to connect to logistics server.");
    } finally {
      setIsCalculatingShipping(false);
    }
  };

  // --- 6. Handle Midtrans Payment ---
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedShipping) {
      alert("Please calculate and select a shipping method before proceeding.");
      return;
    }

    setIsProcessingPayment(true);

    try {
      const formattedItems = cart.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        weight: item.weight || '250g',
        quantity: item.qty || item.quantity || 1, 
        qty: item.qty || item.quantity || 1 
      }));

      const orderPayload = {
        items: formattedItems, 
        totalAmount: finalTotal,
        shippingAddress: `${customerInfo.address}, ${customerInfo.postalCode}`,
        shippingFee: selectedShipping.price,
        courier: `${selectedShipping.courier_name} - ${selectedShipping.courier_service_name}` 
      };

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });

      const data = await res.json();

      if (res.ok && data.token) {
        // Validation boundary to confirm runtime initialization completes
        // @ts-ignore
        if (typeof window.snap === 'undefined') {
          alert("Secure payment gateway is still loading. Please wait a second and try again!");
          setIsProcessingPayment(false);
          return;
        }

        // @ts-ignore
        window.snap.pay(data.token, {
          onSuccess: function () {
            clearCart(); // 👈 EMPTIES CART ON SUCCESS
            router.push('/orders');
          },
          onPending: function () {
            clearCart(); // 👈 EMPTIES CART ON PENDING (Bank transfers, GoPay, etc)
            router.push('/orders');
          },
          onError: function (err: any) {
            console.error("Midtrans Error:", err);
            alert("Payment failed!");
            setIsProcessingPayment(false);
          },
          onClose: function () {
            setIsProcessingPayment(false);
          }
        });
      } else {
        alert(`Server Error: ${data.message || data.error || 'Unknown Backend Crash'}`);
        setIsProcessingPayment(false);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Network error. Please try again.");
      setIsProcessingPayment(false);
    }
  };

  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
      />
      <main className="min-h-screen bg-stone-50 py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Form & Logistics */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h1 className="font-oswald text-4xl font-bold text-stone-900 uppercase tracking-tight mb-2">Secure Checkout</h1>
              <p className="text-stone-500 font-medium italic">Complete your roastery order.</p>
            </div>

            <form id="checkout-form" onSubmit={handleCheckout} className="space-y-8">
              
              {/* Address Selector Dropdown Element List */}
              {savedAddresses.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border-2 border-stone-200 shadow-sm animate-in fade-in duration-500">
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-3">Saved Addresses</label>
                  <select 
                    value={selectedAddressId}
                    onChange={handleAddressChange}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors font-medium cursor-pointer"
                  >
                    {savedAddresses.map((addr) => (
                      <option key={addr.id} value={addr.id}>
                        {addr.label} — {addr.street}, {addr.city} ({addr.postal_code})
                      </option>
                    ))}
                    <option value="new">+ Enter a new address manually</option>
                  </select>
                </div>
              )}

              {/* Customer Details Form */}
              <div className="bg-white p-8 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6">
                <h2 className="font-oswald text-xl font-bold text-stone-900 uppercase">1. Contact & Delivery</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" required value={customerInfo.name} onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Email Address</label>
                    <input type="email" required value={customerInfo.email} onChange={e => setCustomerInfo({...customerInfo, email: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Complete Address</label>
                  <textarea required value={customerInfo.address} onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors h-24" placeholder="Street name, building, house number..." />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="tel" required value={customerInfo.phone} onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Postal Code</label>
                    {/* Fixed wrap boundary alignments to prevent viewport component breaks */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-3">
                      <input type="text" required maxLength={5} value={customerInfo.postalCode} onChange={e => setCustomerInfo({...customerInfo, postalCode: e.target.value})} className="flex-1 min-w-[120px] bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 font-mono text-sm text-stone-900 outline-none focus:border-amber-700 transition-colors" placeholder="e.g. 61253" />
                      <button type="button" onClick={fetchShippingRates} disabled={isCalculatingShipping} className="w-full sm:w-auto bg-stone-900 text-white px-6 py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-amber-800 transition-colors disabled:opacity-50 whitespace-nowrap">
                        {isCalculatingShipping ? 'Calculating...' : 'Get Rates'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logistics / Courier Selection Display Block */}
              {shippingOptions.length > 0 && (
                <div className="bg-white p-8 rounded-3xl border-2 border-amber-700 shadow-sm shadow-amber-900/5 animate-in fade-in slide-in-from-top-4 duration-500">
                  <h2 className="font-oswald text-xl font-bold text-stone-900 uppercase mb-6 flex items-center gap-3">
                    <span className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Select Courier
                  </h2>
                  
                  <div className="space-y-4">
                    {shippingOptions.map((option, idx) => {
                      // 👇 FIXED: This makes sure the radio button matches BOTH the name and the service code
                      const isSelected = selectedShipping?.courier_name === option.courier_name && 
                                         selectedShipping?.courier_service_code === option.courier_service_code;

                      return (
                        <label key={idx} className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${isSelected ? 'border-amber-700 bg-amber-50' : 'border-stone-100 bg-stone-50 hover:border-stone-300'}`}>
                          <div className="flex items-center gap-5">
                            <input 
                              type="radio" 
                              name="courier"
                              checked={isSelected}
                              onChange={() => setSelectedShipping(option)}
                              className="w-5 h-5 text-amber-700 focus:ring-amber-700 border-stone-300"
                            />
                            <div>
                              <p className="font-bold text-stone-900 uppercase">{option.courier_name} <span className="text-amber-700">{option.courier_service_name}</span></p>
                              <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                                Est: {option.duration}
                              </p>
                            </div>
                          </div>
                          <p className="font-mono font-bold text-stone-900 text-lg">Rp {option.price.toLocaleString('id-ID')}</p>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* RIGHT COLUMN: Order Summary Visual Component Column */}
          <div className="lg:col-span-5">
            <div className="bg-stone-900 rounded-3xl p-8 border border-stone-800 text-white sticky top-8 shadow-2xl">
              <h2 className="font-oswald text-2xl font-bold uppercase tracking-widest mb-8 border-b border-stone-800 pb-4">Order Summary</h2>
              
              {/* Context Item Records */}
              <div className="space-y-6 mb-8">
                {cart.map((item: any, idx: number) => (
                  <div key={item.id || idx} className="flex justify-between items-start group">
                    <div>
                      <p className="font-bold uppercase text-sm group-hover:text-amber-500 transition-colors">{item.name}</p>
                      <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1">Qty: {item.quantity} • {item.weight || '250g'}</p>
                    </div>
                    <p className="font-mono font-bold text-stone-300">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                  </div>
                ))}
              </div>

              {/* Calculations Block Mapping Context Value State */}
              <div className="border-t border-stone-800 pt-6 space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Subtotal</span>
                  <span className="font-mono font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Shipping Weight</span>
                  <span className="font-mono font-bold">{totalWeight / 1000} kg</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-stone-400 font-bold uppercase tracking-widest text-[10px]">Logistics</span>
                  <span className="font-mono font-bold">
                    {selectedShipping ? `Rp ${selectedShipping.price.toLocaleString('id-ID')}` : '---'}
                  </span>
                </div>
              </div>

              <div className="border-t border-stone-800 pt-6 mb-8 flex justify-between items-end">
                <span className="font-oswald text-xl uppercase tracking-widest font-bold">Total</span>
                <span className="font-mono text-3xl font-bold text-amber-500">Rp {finalTotal.toLocaleString('id-ID')}</span>
              </div>

              {/* Submit Trigger Execution Button */}
              <button 
                form="checkout-form"
                type="submit" 
                disabled={isProcessingPayment || !selectedShipping}
                className="w-full bg-amber-700 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(180,83,9,0.3)] hover:shadow-[0_0_30px_rgba(180,83,9,0.5)]"
              >
                {isProcessingPayment ? 'Connecting to Payment...' : 'Proceed to Payment'}
              </button>
              
              {/* Midtrans Secure Badging Element Container */}
              <div className="mt-6 flex justify-center items-center gap-2 opacity-50">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" /></svg>
                 <span className="text-[10px] font-bold uppercase tracking-widest">Secured by Midtrans</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}