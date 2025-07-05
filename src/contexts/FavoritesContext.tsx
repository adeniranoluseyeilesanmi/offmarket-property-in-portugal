
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Property } from "@/utils/mockData";

interface FavoritesContextType {
  favorites: Property[];
  addToFavorites: (property: Property) => void;
  removeFromFavorites: (propertyId: string) => void;
  isFavorite: (propertyId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Property[]>([]);

  const addToFavorites = (property: Property) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.id === property.id)) {
        return prev;
      }
      return [...prev, property];
    });
  };

  const removeFromFavorites = (propertyId: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== propertyId));
  };

  const isFavorite = (propertyId: string) => {
    return favorites.some(fav => fav.id === propertyId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
