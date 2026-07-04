import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CompareFloatingBar } from '../flight/CompareFloatingBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    // This wrapper establishes the minimum height and flex column layout
    // to ensure the footer always pushes to the bottom of the screen.
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 transition-colors duration-200 font-sans flex flex-col">
      <Navbar />
      
      {/* The main content area grows to fill available space */}
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      <Footer />
      
      {/* Global floating UI elements */}
      <CompareFloatingBar />
    </div>
  );
};