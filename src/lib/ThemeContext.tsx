'use client';
import { createContext, useContext, useState } from 'react';
// define the props
type Themes = 'dark' | 'light';
type ThemeState = {
  theme: Themes;
  setTheme(theme: Themes): void;
};

const ThemeContext = createContext<ThemeState | null>({
  theme: 'light',
  setTheme(theme) {},
});

export const ThemeProvider = (props: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Themes>('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeState => {
  // 2. use the useContext hook
  const context = useContext(ThemeContext);

  // 3. Make sure it's not null!
  if (!context) {
    throw new Error('Please use ThemeProvider in parent component');
  }

  return context;
};
