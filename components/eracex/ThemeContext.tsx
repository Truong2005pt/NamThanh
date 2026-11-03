'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [mounted, setMounted] = useState(false);

  const syncDOMTheme = useCallback((mode: ThemeMode) => {
    if (typeof document === 'undefined') return;
    try {
      localStorage.setItem('eracex_theme', mode);
    } catch (e) {}

    const root = document.documentElement;
    // Freeze every transition for the instant of the swap so nothing fades at its own speed and shows an edge.
    root.classList.add('theme-switching');
    root.setAttribute('data-theme', mode);
    document.body?.setAttribute('data-theme', mode);

    if (mode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body?.classList.add('dark');
      document.body?.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body?.classList.remove('dark');
      document.body?.classList.add('light');
    }

    window.requestAnimationFrame(() => window.requestAnimationFrame(() => root.classList.remove('theme-switching')));
  }, []);

  const applyTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
    syncDOMTheme(mode);
  }, [syncDOMTheme]);

  useEffect(() => {
    let initial: ThemeMode = 'dark';
    try {
      const queryTheme = new URLSearchParams(window.location.search).get('theme') as ThemeMode | null;
      const saved = localStorage.getItem('eracex_theme') as ThemeMode | null;
      if (queryTheme === 'dark' || queryTheme === 'light') initial = queryTheme;
      else if (saved === 'dark' || saved === 'light') initial = saved;
    } catch (e) {}
    applyTheme(initial);
    setMounted(true);
  }, [applyTheme]);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    applyTheme(newTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      syncDOMTheme(next);
      return next;
    });
  }, [syncDOMTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
