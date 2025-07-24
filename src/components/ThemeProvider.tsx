// src/components/ThemeProvider.tsx
'use client';
import { useEffect, useState } from 'react';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'light';
    setTheme(localTheme);
    document.documentElement.classList.toggle('dark', localTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-full border shadow-md bg-background text-foreground hover:bg-muted transition-colors"
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
      {children}
    </>
  );
}
