import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border mt-auto transition-colors">
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" onClick={handleScrollTop} className="flex items-center space-x-2 group outline-none mb-4 inline-flex">
              <Plane className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">FlySava</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Compare prices from hundreds of airlines and travel agencies to find the perfect flight for your next adventure.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="https://www.instagram.com/flysavaofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a
  href="https://x.com/flysavaofficial"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-500 transition-colors"
  aria-label="X"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.69L5.24 22H2l7.61-8.7L1.5 2h6.7l4.63 6.1L18.244 2z"/>
  </svg>
</a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Flight Search
                </Link>
              </li>
              <li>
                <Link to="/destinations" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/status" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Flight Tracker
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Travel Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/press" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Press & Media</Link></li>
              
              <li><Link to="/contact" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/cookies" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 border-t border-gray-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FlySava. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Made with precision for travelers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};