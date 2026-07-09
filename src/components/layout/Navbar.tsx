import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // 1. Updated the "Flights" path to point to the new dedicated SEO route
  const navLinks = [
    { name: 'Flights', path: '/flights' },
    { name: 'Status', path: '/status' },
    { name: 'Explore', path: '/destinations' },
    { name: 'Travel Guides', path: '/blog' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo - Always points to Root Homepage */}
          <a
            href="/"
            className="flex items-center space-x-2.5 flex-shrink-0 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-lg"
          >
            <Plane className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="text-xl font-bold text-white tracking-tight">
              FlySava
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              // 2. Updated active state logic to highlight the Flights tab on multiple related routes
              const isActive =
                link.name === 'Flights'
                  ? location.pathname === '/' || location.pathname === '/flights' || location.pathname === '/results'
                  : location.pathname.startsWith(link.path);

              return link.name === 'Flights' ? (
                // Hard reload anchor tag specifically for the Flights search widget consistency
                <a
                  key={link.name}
                  href="/flights"
                  className={`relative flex items-center h-16 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-bottom-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-t-full"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative flex items-center h-16 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-blue-500'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-bottom-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-t-full"
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white transition-colors outline-none rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto', display: 'block' },
          closed: {
            opacity: 0,
            height: 0,
            transitionEnd: { display: 'none' },
          },
        }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => {
            // 3. Apply the same active state logic to mobile
            const isActive =
              link.name === 'Flights'
                ? location.pathname === '/' || location.pathname === '/flights' || location.pathname === '/results'
                : location.pathname.startsWith(link.path);

            return link.name === 'Flights' ? (
              <a
                key={link.name}
                href="/flights"
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'text-blue-500 bg-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'text-blue-500 bg-blue-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
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