'use client';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Theme from './theme';
import { ClerkProvider } from '@clerk/nextjs';

const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <Theme>{props.children}</Theme>
      </ThemeProvider>
    </ClerkProvider>
  );
};

export default Provider;
