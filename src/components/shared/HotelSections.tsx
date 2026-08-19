import React from 'react';
import { ArrowRight, ArrowUpRight, Clock, Heart } from 'lucide-react';

export interface HotelStayItem {
  id: string;
  city: string;
  country: string;
  description: string;
  image: string;
}

export interface HotelBlogItem {
  title: string;
  slug: string;
  readTime: string;
  image: string;
}

interface HotelSectionsProps {
  stays: HotelStayItem[];
  articles: HotelBlogItem[];
  onNavigate: (path: string) => void;
}

export const HotelSections: React.FC<HotelSectionsProps> = ({
  stays,
  articles,
  onNavigate,
}) => {
  return (
    <>
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              POPULAR HOTEL DESTINATIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Explore stays in top destinations
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/destinations')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
          >
            <span>Explore all destinations</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
          {stays.map((stay) => (
            <div
              key={stay.id}
              onClick={() => onNavigate(`/destinations/${stay.id}`)}
              className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between p-5"
            >
              <img
                src={stay.image}
                alt={stay.city}
                loading="lazy"
                decoding="async"
                width="600"
                height="320"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="relative z-10 flex items-center justify-end">
                <button 
                  type="button" 
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="w-9 h-9 rounded-full bg-slate-950/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-rose-500 transition-all duration-200 cursor-pointer"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <div className="relative z-10 space-y-1.5">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                    {stay.city}
                  </h3>
                  <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                    {stay.country}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-200 truncate pr-2">
                    {stay.description}
                  </span>
                  <div className="flex items-center gap-1 bg-white/15 backdrop-blur-md px-2 py-1 rounded-xl border border-white/20 shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            onClick={() => onNavigate('/destinations')}
            className="w-[50vw] sm:hidden shrink-0 snap-start h-80 rounded-3xl bg-blue-50 border-2 border-dashed border-blue-200 hover:border-blue-500 transition-all cursor-pointer flex flex-col items-center justify-center text-center p-5 group active:scale-95"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <ArrowRight className="w-6 h-6" />
            </div>
            <span className="text-sm font-black text-slate-900 leading-tight">
              View All
            </span>
            <span className="text-[11px] font-bold text-blue-600 mt-0.5">
              Destinations &rarr;
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
        <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">HOTEL GUIDES</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Where to stay & accommodation tips</h2>
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
    </>
  );
};