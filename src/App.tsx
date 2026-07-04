import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes/AppRoutes';

export default function App() {
  useEffect(() => {
    if (document.getElementById('tpwl-script')) return;

    const script = document.createElement('script');
    script.id = 'tpwl-script';
    script.async = true;
    script.type = 'module';
    script.src = 'https://tpwgts.com/wl_web/main.js?wl_id=209';

    document.head.appendChild(script);
  }, []);

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