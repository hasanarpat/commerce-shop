import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface Item {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  seller: string;
  predictedDeliveryTime: string;
}

interface FavoriteContextType {
  favoriteItems: Item[];
  addToFavorites: (item: Item) => void;
  removeFromFavorites: (item: Item) => void;
  clearFavorites: () => void;
  getFavoritesTotal: () => void;
  removeItemFromFavorites: (item: Item) => void;
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favoriteItems: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  getFavoritesTotal: () => {},
  clearFavorites: () => {},
  removeItemFromFavorites: () => {},
});

export const FavoriteProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoriteItems, setFavoriteItems] = useState<Item[]>(
    JSON.parse(localStorage.getItem('favoriteItems')) || []
  );

  const addToFavorites = (item: Item) => {
    console.log('favorites starts working');

    const isItemInCart = favoriteItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) return;
    else {
      setFavoriteItems([...favoriteItems, { ...item }]);
    }

    console.log(item, 'item from favorites index');
  };

  const removeFromFavorites = (item: Item) => {
    const isItemInCart = favoriteItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (isItemInCart) {
      setFavoriteItems(
        favoriteItems.filter((cartItem) => cartItem.id !== item.id)
      );
    } else return;
  };

  const clearFavorites = () => {
    setFavoriteItems([]);
  };

  const getFavoritesTotal = () => {
    return favoriteItems.length;
  };

  const removeItemFromFavorites = (item: Item) => {
    const isItemInCart = favoriteItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (isItemInCart) {
      setFavoriteItems(
        favoriteItems.filter((cartItem) => cartItem.id !== item.id)
      );
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
    }
  }, [favoriteItems]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedfavoriteItems = localStorage.getItem('favoriteItems');
      if (storedfavoriteItems) {
        setFavoriteItems(JSON.parse(storedfavoriteItems));
      }
    }
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        clearFavorites,
        removeItemFromFavorites,
        getFavoritesTotal,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
