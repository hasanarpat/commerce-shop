'use client';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Theme from './theme';
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '@/context/cart-context';

const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <CartProvider>
          <Theme>{props.children}</Theme>
        </CartProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Provider;
