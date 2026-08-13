import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Clock, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  publishedDate: string;
  readTime: string;
}

interface EditorialHeroProps {
  posts: BlogPost[];
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ posts }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!posts || posts.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [posts]);

  if (!posts || posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  return (
    // REMOVED pt-2 sm:pt-4 PADDING FOR A TIGHT, SEAMLESS LAYOUT
    <section className="w-full max-w-[1360px] mx-auto px-1.5 sm:px-6">
      {/* CONTAINED EDITORIAL HERO CANVAS */}
      <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.15)] min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex flex-col justify-end p-6 sm:p-12 lg:p-16">
        
        {/* Brightened Background Image */}
        <img
          key={currentPost.id}
          src={currentPost.image || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop"}
          alt={currentPost.title}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.88] contrast-[1.05] transition-all duration-700 ease-out"
        />
        
        {/* Lightened, Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent z-10" />

        {/* Carousel Navigation Arrows */}
        {posts.length > 1 && (
          <div className="absolute inset-x-4 sm:inset-x-8 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900/50 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 transition-all cursor-pointer pointer-events-auto shadow-md active:scale-95"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 sm:p-3 rounded-full bg-slate-900/50 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 transition-all cursor-pointer pointer-events-auto shadow-md active:scale-95"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-20 max-w-3xl space-y-3.5 text-white">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#2563EB] text-white shadow-md shadow-blue-600/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Featured Story
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/20">
              {currentPost.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] drop-shadow-sm">
            {currentPost.title}
          </h1>

          <p className="text-slate-100 text-xs sm:text-base font-semibold leading-relaxed max-w-2xl line-clamp-2 opacity-95 drop-shadow-xs">
            {currentPost.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-200 pt-1">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-400" /> {currentPost.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-blue-400" /> {currentPost.readTime}
            </span>
          </div>

          {/* Action CTA */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => navigate(`/blog/${currentPost.slug}`)}
              className="px-6 py-3 rounded-2xl bg-white hover:bg-[#2563EB] text-slate-900 hover:text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg flex items-center gap-2 cursor-pointer active:scale-95 group"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Carousel Slide Indicators */}
          {posts.length > 1 && (
            <div className="flex items-center gap-1.5 pt-4">
              {posts.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default EditorialHero;