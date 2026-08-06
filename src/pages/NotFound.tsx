import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, ArrowLeft, Plane, Sparkles } from 'lucide-react';
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

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col items-center justify-center px-4 pt-20 pb-16 transition-colors duration-200">
        <div className="max-w-md w-full text-center relative">
          
          {/* Background Decorative Ambient Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Floating Icon Card */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative z-10 bg-white p-6 rounded-3xl shadow-lg border border-slate-200/80 inline-flex">
              <Map className="w-14 h-14 text-blue-600" />
              <Plane className="w-7 h-7 text-slate-400 absolute -top-3 -right-3 animate-bounce transform -rotate-45" />
            </div>
          </div>

          {/* Error Pill Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-200/80 mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> 404 Destination Error
          </div>

          {/* Text Content */}
          <h1 className="text-6xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-3">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Looks like you're off the radar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed font-normal max-w-sm mx-auto">
            The page or flight route you are looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>

          {/* Call to Action Button */}
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-2xl transition-all shadow-md shadow-blue-600/20 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Homepage
          </button>

        </div>
      </div>
    </>
  );
};