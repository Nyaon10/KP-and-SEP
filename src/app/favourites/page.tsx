"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFavourites } from '../../context/FavouritesContext';

// Trash Icon for removing items
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);

export default function FavouritesPage() {
  const { favourites, toggleFavourite } = useFavourites();
  const [favouriteProducts, setFavouriteProducts] = useState<any[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // 1. Fetch live products from DB for IDs saved in favourites
  useEffect(() => {
    let isMounted = true;
    const fetchFavourites = async () => {
      // Just to verify if localStorage was empty from the start
      if (!favourites || favourites.length === 0) {
        setIsDataLoaded(true);
        return;
      }

      try {
        const fetchedProducts = [];
        for (const id of favourites) {
          const res = await fetch(`/api/storefront/products/${id}`);
          if (res.ok) {
            const dbData = await res.json();
            
            const now = new Date();
            let activeDiscount = undefined;

            if (dbData.is_on_sale && dbData.discount_price) {
              let isDiscountActive = true;
              if (dbData.discount_start) {
                const startDate = new Date(dbData.discount_start);
                if (now < startDate) isDiscountActive = false;
              }
              if (dbData.discount_end) {
                const endDate = new Date(dbData.discount_end);
                endDate.setHours(23, 59, 59, 999);
                if (now > endDate) isDiscountActive = false;
              }
              if (isDiscountActive) {
                activeDiscount = Number(dbData.discount_price);
              }
            }

            fetchedProducts.push({
              id: dbData.id,
              name: dbData.name,
              roast: dbData.roast_profile || "Signature Roast",
              price: Number(dbData.base_price || 0),
              discountPrice: activeDiscount,
              categorySlug: dbData.category_slug || "uncategorized",
              image: dbData.main_image || "/images/CB01-1.jpeg"
            });
          }
        }
        
        if (isMounted) {
          setFavouriteProducts(fetchedProducts);
          setIsDataLoaded(true);
        }
      } catch (err) {
        console.error("Error fetching favourites", err);
        if (isMounted) setIsDataLoaded(true);
      }
    };

    fetchFavourites();
    
    return () => { isMounted = false; };
  // We only run this on initial load. Subsequent updates are handled via filters.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 2. Sync UI state silently when favourites change (removing items)
  useEffect(() => {
    if (isDataLoaded) {
      setFavouriteProducts(prev => prev.filter(p => favourites.includes(p.id)));
    }
  }, [favourites, isDataLoaded]);

  // Prevent flashing empty state before checking local storage
  if (!isDataLoaded) {
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
                  {product.discountPrice && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10 shadow-sm">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </div>
                  )}
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
                  
                  <div className="mt-auto pt-4 border-t border-stone-100">
                    <div className="flex items-center justify-between mb-4">
                      {product.discountPrice ? (
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-red-600 line-through">
                            Rp {product.price.toLocaleString('id-ID')}
                          </span>
                          <span className="font-mono font-bold text-stone-900 text-lg">
                            Rp {product.discountPrice.toLocaleString('id-ID')}
                          </span>
                        </div>
                      ) : (
                        <span className="font-mono font-bold text-stone-900 text-lg">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button 
                          onClick={() => toggleFavourite(product.id)}
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
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}