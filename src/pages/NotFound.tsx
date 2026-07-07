import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, ArrowLeft, Plane } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* SEO FIX: Adds a custom title and strictly prevents search engines 
        from indexing this error page, protecting your overall SEO score.
      */}
      <SEO 
        title="Page Not Found | FlySava"
        description="The page or flight route you are looking for doesn't exist."
        preventIndex={true} 
      />

      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex flex-col items-center justify-center px-4 transition-colors duration-200">
        <div className="max-w-md w-full text-center relative">
          
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-500/10 dark:bg-brand-900/20 rounded-full blur-3xl -z-10" />

          {/* Floating Icon */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative z-10 bg-white dark:bg-dark-card p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-dark-border inline-flex">
              <Map className="w-16 h-16 text-brand-500" />
              <Plane className="w-8 h-8 text-gray-400 absolute -top-4 -right-4 animate-bounce" />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-7xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Looks like you're off the radar
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
            The page or flight route you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>

          {/* Call to Action */}
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-500/30"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Homepage
          </button>

        </div>
      </div>
    </>
  );
};