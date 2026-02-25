"use client";

import { useState } from 'react';
import { useCart } from '../context/CartContext'; // Adjust path if needed

interface Product {
  id: string;
  name: string;
  roast: string;
  price: number;
  image: string;
}

export default function QuickAdd({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [showSelector, setShowSelector] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleConfirmAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      roast: product.roast,
      weight: "200g" 
    });
    
    // Reset state
    setShowSelector(false);
    setQuantity(1);
  };

  if (!showSelector) {
    return (
      <button 
        onClick={() => setShowSelector(true)}
        className="w-full bg-stone-900 text-white py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-amber-800 transition-all active:scale-95 shadow-sm"
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-2 animate-in fade-in zoom-in duration-200">
      {/* Quantity Selector Area */}
      <div className="flex items-center justify-between bg-stone-100 rounded-lg p-1 border border-stone-200">
        <button 
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-900 text-xl font-bold transition-colors"
        >
          —
        </button>
        
        <div className="flex flex-col items-center justify-center h-10 w-12">
           <span className="font-mono font-bold text-stone-900 text-lg">
             {quantity}
           </span>
        </div>

        <button 
          onClick={() => setQuantity(q => q + 1)}
          className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-900 text-xl font-bold transition-colors"
        >
          +
        </button>
      </div>

      {/* Confirmation Actions */}
      <div className="flex gap-2">
        <button 
          onClick={() => setShowSelector(false)}
          className="flex-1 bg-white border border-stone-300 text-stone-600 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-stone-50 transition-colors"
        >
          Cancel
        </button>
        <button 
          onClick={handleConfirmAdd}
          className="flex-[2] bg-amber-700 text-white py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider hover:bg-amber-800 transition-colors shadow-sm"
        >
          Confirm ({quantity})
        </button>
      </div>
    </div>
  );
}