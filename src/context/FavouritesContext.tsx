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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Collect all favourite IDs from localStorage
    const loadFavourites = () => {
      const found: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('wanst-favorite-')) {
          const isFavorited = JSON.parse(localStorage.getItem(key) || "false");
          if (isFavorited) {
            const productId = key.replace('wanst-favorite-', '');
            found.push(productId);
          }
        }
      }
      setFavourites(found);
      setIsLoaded(true);
    };

    loadFavourites();
  }, []);

  const isFavourite = (id: string) => {
    return favourites.includes(id);
  };

  const toggleFavourite = (id: string) => {
    setFavourites((prev) => {
      let nextFavs;
      if (prev.includes(id)) {
        nextFavs = prev.filter(fId => fId !== id);
        localStorage.setItem(`wanst-favorite-${id}`, JSON.stringify(false));
      } else {
        nextFavs = [...prev, id];
        localStorage.setItem(`wanst-favorite-${id}`, JSON.stringify(true));
      }
      return nextFavs;
    });
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
