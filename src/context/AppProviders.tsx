import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  const theme = useAppStore(state => state.theme);

  // Global Theme Initialization
  // This syncs the Zustand store theme state with the Tailwind 'dark' class on the HTML document root
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <BrowserRouter>
      {/* 
        Future architecture note: 
        If you add React Query, Clerk Auth, or a Toast Notification system, 
        their Provider wrappers will go right here, keeping App.tsx perfectly clean. 
      */}
      {children}
    </BrowserRouter>
  );
};