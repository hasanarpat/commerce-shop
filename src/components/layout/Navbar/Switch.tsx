import { useTheme } from '@/lib/ThemeContext';
import { cn } from '@/lib/utils';
import React from 'react';

const Switch = (props: { className?: String; classNameBall?: String }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        'bg-slate-600 rounded-lg w-8 h-4 cursor-pointer',
        props.className
      )}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div
        className={cn(
          'w-4 h-4 rounded-full ',
          theme === 'light' ? 'ml-0 bg-amber-400' : 'ml-[50%] bg-emerald-400',
          props.classNameBall
        )}
      />
    </div>
  );
};

export default Switch;
