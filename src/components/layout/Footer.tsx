import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);

    try {
      // Use FormSubmit AJAX endpoint to prevent page redirection
      const response = await fetch("https://formsubmit.co/ajax/contact@flysava.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
      // Auto-hide status message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <footer className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border mt-auto transition-colors">
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        
        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
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
              <a href=" https://www.instagram.com/getflysava/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.x.com/getflysava/"
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
              <a href="https://www.linkedin.com/company/getflysava/" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                {/* FIX: Updated href from "/" to "/flights" for SEO internal linking */}
                <a href="/flights" onClick={handleScrollTop} className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm">
                  Flight Search
                </a>
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

        {/* Newsletter Subscription Section - Premium Compact Design */}
        <div className="py-8 border-t border-gray-100 dark:border-dark-border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-md">
            <h3 className="text-base font-bold text-gray-900 dark:text-white tracking-tight mb-1">Stay Updated</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Get flight deals, travel tips, and destination guides delivered to your inbox.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex-grow max-w-md lg:ml-auto">
            <form onSubmit={handleSubscribe} className="relative flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Footer Newsletter Subscription" />
              <input type="hidden" name="_template" value="table" />
              
              <input 
                type="email" 
                name="email"
                required
                placeholder="Your email address" 
                disabled={isSubmitting}
                className="w-full bg-transparent border border-gray-200 dark:border-white/10 rounded-lg px-4 py-2.5 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50 text-sm" 
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap text-sm"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {/* Status Messages */}
            <div className="h-5 mt-1">
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-xs font-medium transition-opacity">
                  Thank you! You have successfully subscribed.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-xs font-medium transition-opacity">
                  Oops! Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 border-t border-gray-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FlySava. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <span>Made with precision for travelers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};