"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// --- 1. PRODUCT DATA ---
// We need the data here so the page knows what to display when it finds a saved ID
const PRODUCTS = [
  { 
    id: 'b1', name: "Nothing But Love", roast: "Kerinci Natural Anaerob", price: 225000, 
    categorySlug: "exotic-arabica-blends-series", image: "/images/SAB01-1.jpeg"
  },
  { 
    id: 'b2', name: "My Sweet Miracle", roast: "Kerinci Natural Anaerob", price: 225000, 
    categorySlug: "exotic-arabica-blends-series", image: "/images/SAB02-1.jpeg"
  },
  { 
    id: 's1', name: "When It's Love", roast: "Karo Natural Anaerob", price: 235000, 
    categorySlug: "exotic-single-origin-series", image: "/images/ESO01-1.jpeg"
  },
  { 
    id: 's2', name: "Berry Fields Forever", roast: "Kerinci Natural Anaerob", price: 235000, 
    categorySlug: "exotic-single-origin-series", image: "/images/ESO02-1.jpeg"
  },
  { 
    id: 'c1', name: "G'Day Mate", roast: "Arabica Classic", price: 100000, 
    categorySlug: "commercial-bean-series", image: "/images/CB01-1.jpeg"
  },
  { 
    id: 'c2', name: "Here Comes The Vibes", roast: "60 : 40 Houseblend", price: 90000, 
    categorySlug: "commercial-bean-series", image: "/images/CB02-1.jpeg"
  }
];

// --- 2. COMPONENTS ---

// Trash Icon for removing items
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

export default function FavouritesPage() {
  // We explicitly define the type of our state to be an array of our product objects
  const [favouriteProducts, setFavouriteProducts] = useState<typeof PRODUCTS>([]);
  
  // This helps prevent Next.js hydration errors by waiting for the client to mount before showing data
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. Scan localStorage for saved favorites
    const loadFavourites = () => {
      const foundFavourites = [];
      
      // Loop through all items saved in the browser
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        // Check if the key belongs to our specific app's favorites
        if (key && key.startsWith('wanst-favorite-')) {
          const isFavorited = JSON.parse(localStorage.getItem(key) || "false");
          
          if (isFavorited) {
            // Extract the product ID from the key string
            const productId = key.replace('wanst-favorite-', '');
            // Find the full product details from our static data
            const product = PRODUCTS.find(p => p.id === productId);
            if (product) {
              foundFavourites.push(product);
            }
          }
        }
      }
      setFavouriteProducts(foundFavourites);
      setIsLoaded(true);
    };

    loadFavourites();
  }, []);

  // Handle removing an item directly from this page
  const removeFavourite = (id: string) => {
    // Update local storage so it stays un-favorited if they go back to the product page
    localStorage.setItem(`wanst-favorite-${id}`, JSON.stringify(false));
    // Remove it from the current screen without needing to refresh
    setFavouriteProducts((prev) => prev.filter((product) => product.id !== id));
  };

  // Prevent flashing empty state before checking local storage
  if (!isLoaded) {
    return <div className="min-h-screen bg-stone-50 flex items-center justify-center"><p className="text-stone-500 font-bold uppercase tracking-widest animate-pulse">Loading Favourites...</p></div>;
  }

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm font-medium text-stone-500 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-stone-900">Favourites</span>
        </nav>

        <div className="mb-12 border-b border-stone-200 pb-6 flex justify-between items-end">
          <div>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight mb-2">
              Your Favourites
            </h1>
            <p className="text-stone-500 font-medium">
              You have {favouriteProducts.length} saved roast{favouriteProducts.length !== 1 ? 's' : ''}.
            </p>
          </div>
        </div>

        {/* Empty State */}
        {favouriteProducts.length === 0 ? (
          <div className="bg-white border border-stone-200 rounded-2xl p-16 flex flex-col items-center justify-center text-center shadow-sm">
            <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
               </svg>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-2">No favourites yet</h2>
            <p className="text-stone-500 mb-8 max-w-md">Looks like you haven't saved any of our roasts yet. Explore our shop to find your perfect cup.</p>
            <Link 
              href="/shop" 
              className="px-8 py-3 bg-stone-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-800 transition-colors rounded-lg shadow-sm"
            >
              Back to Shop
            </Link>
          </div>
        ) : (
          /* Favourites Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favouriteProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col group">
                {/* Image Container */}
                <Link href={`/shop/${product.id}`} className="relative aspect-square overflow-hidden bg-stone-100 block">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">
                    {product.categorySlug.replace(/-/g, ' ')}
                  </div>
                  
                  <Link href={`/shop/${product.id}`} className="hover:text-amber-700 transition-colors">
                    <h3 className="font-oswald text-2xl font-bold text-stone-900 uppercase tracking-tight mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  
                  <p className="text-stone-500 text-sm mb-4 italic">{product.roast}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                    <p className="font-mono font-bold text-stone-900 text-lg">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => removeFavourite(product.id)}
                        className="p-2 text-stone-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors border border-transparent hover:border-rose-200"
                        title="Remove from Favourites"
                      >
                        <TrashIcon />
                      </button>
                      <Link 
                        href={`/shop/${product.id}`}
                        className="px-4 py-2 bg-stone-100 text-stone-900 text-xs font-bold uppercase tracking-wider hover:bg-stone-900 hover:text-white rounded-lg transition-colors"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}