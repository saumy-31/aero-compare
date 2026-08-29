import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface BlogArticleItem {
  title: string;
  slug: string;
  readTime: string;
  image: string;
  category?: string;
  excerpt?: string;
}

interface FlightBlogSectionProps {
  articles: BlogArticleItem[];
  onNavigate: (path: string) => void;
}

export const FlightBlogSection: React.FC<FlightBlogSectionProps> = ({
  articles,
  onNavigate,
}) => {
  if (!articles || articles.length === 0) return null;

  const featuredArticle = articles[0];

  return (
    <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200/60 pb-3 gap-4">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Travel smarter with FlySava
          </h2>
          <p className="text-[11px] sm:text-xs font-medium text-slate-500 max-w-sm">
            Practical guides, destination ideas and travel tips for your next trip.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/blog')}
          className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
        >
          <span>View all travel guides</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* CINEMATIC FEATURED BANNER */}
      <div 
        onClick={() => onNavigate(`/blog/${featuredArticle.slug}`)}
        className="relative w-full rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer flex flex-col justify-end min-h-[340px] sm:h-[380px] lg:h-[420px]"
      >
        <img 
          src={featuredArticle.image} 
          alt={featuredArticle.title} 
          loading="lazy" 
          decoding="async" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        
        {/* Cleaner, smoother gradient: Much darker at the bottom for text contrast, completely transparent at the top */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/50 sm:to-transparent" />

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl flex flex-col items-start space-y-3 sm:space-y-4 text-white">
          
          {/* Subtle Category & Read Time */}
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-300 drop-shadow-sm">
            <span>{featuredArticle.category || 'Destination Guide'}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{featuredArticle.readTime}</span>
          </div>
          
          {/* Title with slightly looser line height for readability */}
          <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight leading-snug drop-shadow-md">
            {featuredArticle.title}
          </h3>

          {/* Hidden on mobile to keep the design ultra-clean, visible on desktop */}
          <p className="hidden sm:block text-sm font-medium text-slate-200 line-clamp-2 max-w-xl drop-shadow-md">
            {featuredArticle.excerpt || 'Discover the best tips, strategies, and hidden gems to make your next journey unforgettable.'}
          </p>

          <div className="pt-2 sm:pt-3">
            {/* Pill-shaped button like the reference image */}
            <button
              type="button"
              className="px-5 sm:px-6 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm transition-all shadow-sm hover:bg-slate-100 active:scale-95 flex items-center gap-2"
            >
              <span>Read guide</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};