import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// Declare global ambient types for VS Code TS compiler
declare const document: any;
declare const window: any;

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Flights', path: '/flights' },
    { name: 'Status', path: '/status' },
    { name: 'Explore', path: '/destinations' },
    { name: 'Travel Guides', path: '/blog' },
  ];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }
    return () => { 
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'; 
      }
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleFlightsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.location.href = '/flights';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-header-light transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Brand Logo */}
          <Link
  to="/"
  className="flex items-center gap-2.5 flex-shrink-0 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-lg"
>
  <div className="w-9 h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200">
    <Plane className="w-5 h-5" />
  </div>

  <span className="text-xl font-bold tracking-tight text-slate-900">
    Fly<span className="text-[#2563EB]">Sava</span>
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive =
                link.name === 'Flights'
                  ? location.pathname === '/' || location.pathname === '/flights' || location.pathname === '/results'
                  : location.pathname.startsWith(link.path);

              return link.name === 'Flights' ? (
                <a
                  key={link.name}
                  href="/flights"
                  onClick={handleFlightsClick}
                  className={`relative flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-blue-600 bg-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 bg-white shadow-sm font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors outline-none rounded-xl hover:bg-slate-100 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', display: 'block' },
          closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } },
        }}
        className="md:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl"
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5">
          {navLinks.map((link) => {
            const isActive =
              link.name === 'Flights'
                ? location.pathname === '/' || location.pathname === '/flights' || location.pathname === '/results'
                : location.pathname.startsWith(link.path);

            return link.name === 'Flights' ? (
              <a
                key={link.name}
                href="/flights"
                onClick={handleFlightsClick}
                className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-100 font-black'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? 'text-blue-600 bg-blue-50 border border-blue-100 font-black'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </nav>
  );
};