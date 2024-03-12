'use client';
import { useTheme } from './ThemeContext';
import React from 'react';
import { cn } from './utils';

const Theme = (props: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return <div className={cn(theme, 'container')}>{props.children}</div>;
};

export default Theme;
