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

  // Use only the primary featured article to match the clean, single-banner design
  const featuredArticle = articles[0];

  return (
    <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
      
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-slate-200/60 pb-3 gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Travel smarter with FlySava
          </h2>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block mt-1">
            Practical guides, destination ideas and travel tips for your next trip.
          </span>
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
        className="relative w-full rounded-[20px] sm:rounded-[24px] overflow-hidden group cursor-pointer flex flex-col justify-center h-[280px] sm:h-[340px] lg:h-[380px]"
      >
        <img 
          src={featuredArticle.image} 
          alt={featuredArticle.title} 
          loading="lazy" 
          decoding="async" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
        />
        
        {/* Improved Overlay: Base darkening for overall readability + strong left gradient */}
        <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent sm:w-3/4 lg:w-2/3" />

        {/* Content Container */}
        <div className="relative z-10 p-6 sm:p-12 lg:p-16 max-w-2xl flex flex-col items-start space-y-3.5 text-white">
          
          {/* Subtle Category & Read Time */}
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/90">
            <span>{featuredArticle.category || 'Destination Guide'}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{featuredArticle.readTime}</span>
          </div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] drop-shadow-sm">
            {featuredArticle.title}
          </h3>

          <p className="text-sm sm:text-base font-medium text-white/90 line-clamp-2 sm:line-clamp-none max-w-xl drop-shadow-sm">
            {featuredArticle.excerpt || 'Discover the best tips, strategies, and hidden gems to make your next journey unforgettable.'}
          </p>

          <div className="pt-3">
            <button
              type="button"
              className="px-6 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-sm transition-all shadow-sm hover:bg-slate-100 active:scale-95 flex items-center gap-2"
            >
              <span>Read guide</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};