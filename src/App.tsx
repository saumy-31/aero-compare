import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#071226]">
        <Navbar />

        <main className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}