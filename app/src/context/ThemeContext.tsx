import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

type Theme = 'pixel' | 'kawaii' | 'steampunk' | 'futuristic';

type ThemeContextType = {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('kawaii');

  useEffect(() => {
    AsyncStorage.getItem('theme').then(stored => {
      if (stored) setCurrentTheme(stored as Theme);
    });
  }, []);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    AsyncStorage.setItem('theme', theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
