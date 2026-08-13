import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Plane, Menu, X, Building, 
  Car, Smartphone, Compass, BookOpen, ChevronRight, Tag, BookmarkCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare const document: any;
declare const window: any;

const MANAGE_BOOKING_URL = 'https://flysava.nuitee.link/manage-bookings?language=en&currency=INR&from=Lz9sYW5ndWFnZT1lbiZjdXJyZW5jeT1JTlI=';

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop Nav Links: HOME | EXPLORE | TRAVEL GUIDES | MANAGE BOOKING
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/destinations' },
    { name: 'Travel Guides', path: '/blog' },
    { name: 'Manage Booking', path: MANAGE_BOOKING_URL, isExternal: true },
  ];

  const menuServices = [
    { name: 'Flights', path: '/flights', icon: Plane, desc: 'Search 100+ airlines' },
    { name: 'Hotels', path: '/hotels', icon: Building, desc: 'Compare 2M+ stays' },
    { name: 'Car Rental', path: '/cars', icon: Car, desc: 'Worldwide vehicles' },
    { name: 'eSIM Data', path: '/esim', icon: Smartphone, desc: '200+ countries data' },
  ];

  const exploreLinks = [
    { name: 'Explore Destinations', path: '/destinations', icon: Compass },
    { name: 'Travel Guides', path: '/blog', icon: BookOpen },
    { name: 'Manage Booking', path: MANAGE_BOOKING_URL, icon: BookmarkCheck, isExternal: true },
    { name: 'Flight Status', path: '/status', icon: Tag },
  ];

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
    }
    return () => { 
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'; 
      }
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const handleServiceClick = (path: string) => {
    setIsSidebarOpen(false);
    if (path === '/flights') {
      sessionStorage.setItem('reload-flight-widget', '1');
      window.location.href = '/flights';
      return;
    }
    navigate(path);
  };

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
        <div className="mx-auto max-w-[1400px] px-3 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* LEFT GROUP: HAMBURGER + BRAND LOGO */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="hidden md:flex p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer select-none"
                aria-label="Open Navigation Drawer"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <a 
                href="/" 
                onClick={handleHomeClick} 
                className="inline-flex items-center gap-2 group outline-none cursor-pointer"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200">
                  <Plane className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
                  Fly<span className="text-[#2563EB]">Sava</span>
                </span>
              </a>
            </div>

            {/* CENTER: DESKTOP NAVIGATION PILL */}
            <div className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60">
              {navLinks.map((link) => {
                const isActive =
                  !link.isExternal &&
                  (link.name === 'Home'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(link.path));

                if (link.name === 'Home') {
                  return (
                    <a
                      key={link.name}
                      href="/"
                      onClick={handleHomeClick}
                      className={`relative flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'text-blue-600 bg-white shadow-xs font-black'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                }

                {/* DESKTOP NAV LINK - EXTERNAL */}
if (link.isExternal) {
  return (
    <a
      key={link.name}
      href={link.path}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 text-slate-600 hover:text-slate-900 hover:bg-white/60 cursor-pointer"
    >
      {link.name}
    </a>
  );
}

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative flex items-center px-5 py-2 text-xs font-semibold tracking-wide uppercase rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-blue-600 bg-white shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* RIGHT GROUP: FLIGHT STATUS */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/status"
                className="hidden sm:flex px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white font-black text-[11px] sm:text-xs transition-all duration-200 tracking-wide uppercase shadow-xs items-center gap-1.5"
              >
                <Plane className="w-3.5 h-3.5 transform -rotate-45" />
                <span>Flight Status</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer select-none"
                aria-label="Open Mobile Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* SIDEBAR DRAWER (MOBILE + DESKTOP HAMBURGER) */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-50 cursor-pointer"
            />

            <motion.aside
              initial={{ x: isMobile ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: isMobile ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${
                isMobile ? 'right-0' : 'left-0'
              } w-80 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col justify-between overflow-y-auto`}
            >
              <div className="p-5 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <Plane className="w-4 h-4" />
                    </div>
                    <span className="text-lg font-black text-slate-900">FlySava</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  <p className="px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Book & Search
                  </p>
                  {menuServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => handleServiceClick(service.path)}
                        className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200/80 transition-all group text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                              {service.name}
                            </p>
                            <p className="text-[10px] text-slate-400 font-medium">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-1.5 pt-4 border-t border-slate-100">
                  <p className="px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    Explore & Discover
                  </p>
                  {exploreLinks.map((item) => {
                    const Icon = item.icon;

                    {/* SIDEBAR DRAWER LINK - EXTERNAL */}
if (item.isExternal) {
  return (
    <a
      key={item.name}
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setIsSidebarOpen(false)}
      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
    >
      <Icon className="w-4 h-4 text-slate-400" />
      <span>{item.name}</span>
    </a>
  );
}

                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-slate-400" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;