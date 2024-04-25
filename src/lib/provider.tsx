'use client';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Theme from './theme';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '@/context/cart-context';
import { FavoriteProvider } from '@/context/favorites';

const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <CartProvider>
          <FavoriteProvider>
            <Theme>{props.children}</Theme>
          </FavoriteProvider>
        </CartProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Provider;
