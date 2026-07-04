import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Twitter, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border pt-16 pb-8 mt-auto transition-colors duration-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-brand-600 dark:text-brand-500 mb-4">
              <Plane className="w-8 h-8" />
              <span className="text-xl font-black">AeroCompare</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Compare prices from hundreds of airlines and travel agencies to find the perfect flight for your next adventure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-500 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links: Explore */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/destinations" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Destinations</Link></li>
              <li><Link to="/results" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Flight Search</Link></li>
              <li><Link to="/status" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Flight Tracker</Link></li>
              <li><Link to="/alerts" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Price Alerts</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Partnerships</a></li>
            </ul>
          </div>

          {/* Links: Support */}
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">FAQ</a></li>
              <li className="flex items-center text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:support@aerocompare.com" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">support@aerocompare</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 dark:border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} AeroCompare. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};