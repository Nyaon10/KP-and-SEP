"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface FavouritesContextType {
  favourites: string[];
  isFavourite: (id: string) => boolean;
  toggleFavourite: (id: string) => void;
  favouriteCount: number;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export function FavouritesProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<string[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  // 1. Checks if user is logged in, then pulls from DB or LocalStorage
  const checkUserAndLoad = async () => {
    const sessionActive = localStorage.getItem('wanst_active_session');
    const userStr = localStorage.getItem('wanst_mock_user');
    
    if (sessionActive === 'true' && userStr) {
      const user = JSON.parse(userStr);
      setUserId(user.id);
      
      // Fetch from MySQL Database!
      try {
        const res = await fetch(`/api/storefront/favourites?customer_id=${user.id}`);
        if (res.ok) {
          const dbFavs = await res.json();
          setFavourites(dbFavs);
        }
      } catch (err) {
        console.error("Failed to load favourites from DB");
      }
    } else {
      // Guest User / Logged out
      setUserId(null);
      const saved = localStorage.getItem('wanst-guest-favourites');
      if (saved) {
        setFavourites(JSON.parse(saved));
      } else {
        setFavourites([]);
      }
    }
  };

  useEffect(() => {
    checkUserAndLoad(); // Check on load
    
    // Wake up and check again the exact second someone logs in!
    window.addEventListener('profileUpdated', checkUserAndLoad);
    return () => window.removeEventListener('profileUpdated', checkUserAndLoad);
  }, []);

  const isFavourite = (id: string) => {
    return favourites.includes(id);
  };

  // 2. Saves to MySQL if logged in, otherwise saves to LocalStorage
  const toggleFavourite = async (productId: string) => {
    // Optimistic UI Update (Changes the heart color instantly)
    let newFavs: string[];
    if (favourites.includes(productId)) {
      newFavs = favourites.filter(id => id !== productId);
    } else {
      newFavs = [...favourites, productId];
    }
    setFavourites(newFavs);

    if (userId) {
      // ✅ SAVE TO MYSQL DATABASE
      try {
        await fetch('/api/storefront/favourites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ customer_id: userId, product_id: productId })
        });
      } catch (err) {
        console.error("Failed to sync favourite with DB");
      }
    } else {
      // 💾 SAVE TO GUEST LOCAL STORAGE
      localStorage.setItem('wanst-guest-favourites', JSON.stringify(newFavs));
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, isFavourite, toggleFavourite, favouriteCount: favourites.length }}>
      {children}
    </FavouritesContext.Provider>
  );
}

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (context === undefined) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
}