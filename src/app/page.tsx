'use client';
import { useTheme } from '@/lib/ThemeContext';
import Image from 'next/image';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        change theme
      </button>
    </div>
  );
}
