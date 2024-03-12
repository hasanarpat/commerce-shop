'use client';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/lib/ThemeContext';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return <div>Homepage</div>;
}
