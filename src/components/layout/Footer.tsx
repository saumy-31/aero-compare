import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Twitter, Instagram, Facebook, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border mt-auto transition-colors">
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Socials */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 group outline-none mb-4 inline-flex">
              <Plane className="w-6 h-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
              <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">FlySava</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              Your premium travel companion. Find the best flights, track statuses in real-time, and discover the world's most beautiful destinations.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="Github"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Flight Search
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Flight Tracker
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links - UPDATED ROUTING */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Careers</Link></li>
              <li><Link to="/press" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Press & Media</Link></li>
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/cookies" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">Cookie Policy</Link></li>
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