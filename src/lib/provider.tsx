'use client';
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { cn } from './utils';
import Theme from './theme';

const Provider = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Theme>{props.children}</Theme>
    </ThemeProvider>
  );
};

export default Provider;
