import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Moon, Sun } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

export const Navbar = () => {
  const { theme, setTheme } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // IMPORTANT: Put this AFTER all hooks
  if (location.pathname === '/login') {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-card/90 backdrop-blur shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center space-x-2 text-brand-600 dark:text-brand-500"
        >
          <Plane className="w-8 h-8" />
          <span className="text-xl font-black">AeroCompare</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-brand-500 transition">
  Flights
</Link>

          <Link to="/status" className="hover:text-brand-500 transition">
            Status
          </Link>

          <Link to="/destinations" className="hover:text-brand-500 transition">
            Explore
          </Link>

          <div className="flex items-center space-x-4 border-l pl-4 dark:border-dark-border">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Link
              to="/login"
              className="bg-brand-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-brand-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};