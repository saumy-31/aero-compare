import React from 'react';
import { ArrowRight, Clock, LucideIcon } from 'lucide-react';

export interface EsimDestinationItem {
  name: string;
  url: string;
}

export interface EsimConnectivityFeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EsimBlogArticleItem {
  slug: string;
  title: string;
  readTime: string;
  image: string;
}

interface EsimSectionsProps {
  popularDestinations: EsimDestinationItem[];
  connectivityFeatures: EsimConnectivityFeatureItem[];
  articles: EsimBlogArticleItem[];
  onEsimPopularClick: (url: string) => void;
  onNavigate: (path: string) => void;
}

export const EsimSections: React.FC<EsimSectionsProps> = ({
  popularDestinations,
  connectivityFeatures,
  articles,
  onEsimPopularClick,
  onNavigate,
}) => {
  return (
    <>
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-4">
        <div className="border-b border-slate-200/60 pb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Quick Select</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Popular eSIM Destinations</h2>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-2.5 pt-1 sm:flex-wrap pb-2 sm:pb-0">
          {popularDestinations.map((dest) => (
            <button
              key={dest.name}
              type="button"
              onClick={() => onEsimPopularClick(dest.url)}
              className="shrink-0 sm:shrink inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 border cursor-pointer select-none bg-white border-slate-200/80 hover:border-blue-600 hover:bg-blue-50/50 text-slate-800 shadow-2xs"
            >
              <span>{dest.name}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
        <div className="border-b border-slate-200/60 pb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
            TRAVEL CONNECTIVITY
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
            Stay connected wherever you go
          </h2>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
          {connectivityFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink p-6 rounded-3xl bg-white border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base font-black text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
        <div className="border-b border-slate-200/60 pb-3 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">CONNECTIVITY GUIDES</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Mobile data tips & guides</h2>
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