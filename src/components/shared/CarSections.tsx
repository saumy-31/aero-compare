import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Clock, LucideIcon } from 'lucide-react';

export interface VehicleCategoryItem {
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  highlight: string;
  image: string;
}

export interface CarDestinationItem {
  id: string;
  city: string;
  country: string;
  description: string;
  image: string;
}

export interface RoadTripArticleItem {
  title: string;
  slug: string;
  readTime: string;
  image: string;
}

interface CarSectionsProps {
  categories: VehicleCategoryItem[];
  destinations: CarDestinationItem[];
  articles: RoadTripArticleItem[];
  onScrollToWidget: () => void;
  onNavigate: (path: string) => void;
}

export const CarSections: React.FC<CarSectionsProps> = ({
  categories,
  destinations,
  articles,
  onScrollToWidget,
  onNavigate,
}) => {
  return (
    <>
      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-10 sm:mt-14 space-y-6">
        <div className="border-b border-slate-200/60 pb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">FLEET CATEGORIES</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Explore Car Rental Options</h2>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              onClick={onScrollToWidget}
              className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink relative rounded-3xl bg-white border border-slate-200/80 shadow-2xs overflow-hidden flex flex-col hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer select-none group"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100 shrink-0">
                <img src={cat.image} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" alt={cat.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-sm">
                    {cat.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-sm">
                    <cat.icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 leading-relaxed">{cat.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{cat.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1360px] mx-auto px-2.5 sm:px-6 mt-12 sm:mt-16 space-y-6">
        <div className="flex items-end justify-between border-b border-slate-200/60 pb-3">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
              POPULAR DESTINATIONS
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">
              Where will you drive next?
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/destinations')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer shrink-0"
          >
            <span>View all destinations</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex overflow-x-auto scrollbar-hide gap-5 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible pb-2 sm:pb-0">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onNavigate(`/destinations/${dest.id}`)}
              className="w-[82vw] shrink-0 snap-start sm:w-auto sm:shrink group relative h-80 rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-end p-5"
            >
              <img
                src={dest.image}
                alt={dest.city}
                loading="lazy"
                decoding="async"
                width="600"
                height="320"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="relative z-10 space-y-1.5">
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight leading-none group-hover:text-blue-300 transition-colors">
                    {dest.city}
                  </h3>
                  <p className="text-xs font-semibold text-slate-200 mt-1 drop-shadow-xs">
                    {dest.country}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-200 truncate pr-2">
                    {dest.description}
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
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">ROAD TRIP INSPIRATION</span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-0.5">Make the journey part of the adventure</h2>
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