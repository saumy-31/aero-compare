import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export interface BlogArticleItem {
  title: string;
  slug: string;
  readTime: string;
  image: string;
}

interface FlightBlogSectionProps {
  articles: BlogArticleItem[];
  onNavigate: (path: string) => void;
}

export const FlightBlogSection: React.FC<FlightBlogSectionProps> = ({
  articles,
  onNavigate,
}) => {
  return (
    <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
      <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">TRAVEL GUIDES</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Flight booking tips & inspiration</h2>
        </div>
        <button
          type="button"
          onClick={() => onNavigate('/blog')}
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
        >
          <span>View all articles</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="flex items-stretch overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 md:grid-cols-3 sm:overflow-visible pb-2 sm:pb-0">
        {articles.map((article, idx) => (
          <div 
            key={idx} 
            onClick={() => onNavigate(`/blog/${article.slug}`)} 
            className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group flex flex-col bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
              <img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 border border-white/20 shadow-sm">
                  <Clock className="w-3 h-3 text-blue-600" /> {article.readTime}
                </span>
              </div>
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{article.title}</h3>
              <div className="pt-4 mt-2 flex items-center justify-between border-t border-slate-100 text-xs font-extrabold text-blue-600">
                <span>Read article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}

        <div
          onClick={() => onNavigate('/blog')}
          className="w-[50vw] sm:hidden shrink-0 snap-start self-stretch rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
            <ArrowRight className="w-6 h-6" />
          </div>
          <span className="text-sm font-black text-slate-900 leading-tight">
            View All
          </span>
          <span className="text-[11px] font-bold text-blue-600 mt-0.5">
            Articles &rarr;
          </span>
        </div>
      </div>
    </section>
  );
};