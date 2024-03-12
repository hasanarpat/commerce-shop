import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import React from 'react';

const Switch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className='bg-slate-600 rounded-lg w-8 h-4 cursor-pointer'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div
        className={cn(
          'w-4 h-4 rounded-full bg-amber-400',
          theme === 'light' ? 'ml-0' : 'ml-4'
        )}
      />
    </div>
  );
};

export default Switch;
