import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Calendar, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EditorialHeroProps {
  posts: any[];
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ posts }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Derived state perfectly controls the pause logic without conflicting events
  const isPaused = isHovered || isDragging;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  }, [posts.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  }, [posts.length]);

  // Refined Autoplay Logic
  useEffect(() => {
    // 1. Pause immediately if the user is hovering or dragging
    if (isPaused) return;

    // 2. Start a fresh 3-second timer
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);

    // 3. Cleanup function fires on unmount OR when dependencies change.
    // Because `currentIndex` is a dependency, manually clicking prev/next/pagination
    // perfectly clears the old timer and restarts a fresh 3-second interval.
    return () => clearInterval(timer);
  }, [isPaused, currentIndex, nextSlide]);

  // Keyboard Arrow Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Fluid Swipe Gesture Handling
  const handleDragEnd = (e: any, { offset }: any) => {
    setIsDragging(false);
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      nextSlide();
    } else if (offset.x > swipeThreshold) {
      prevSlide();
    }
  };

  if (!posts || posts.length === 0) return null;

  const currentPost = posts[currentIndex];

  return (
    <div 
      className="relative w-full min-h-[55vh] flex flex-col overflow-hidden border-b border-white/5 bg-[#071226]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 0.8 }, x: { type: "spring", stiffness: 300, damping: 30 } }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"
        >
          {/* Cinematic Background Image */}
          <motion.img 
            src={currentPost.image} 
            alt={currentPost.title} 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-[center_40%] md:object-center"
          />
          
          {/* Lighter Gradients to reveal more photography */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#071226]/70 via-[#071226]/30 md:via-[#071226]/10 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-transparent to-transparent z-10 pointer-events-none opacity-30" />
        </motion.div>
      </AnimatePresence>

      {/* Editorial Content Container */}
      <div className="relative z-20 container mx-auto px-4 max-w-7xl flex-grow flex flex-col justify-center pointer-events-none pt-12 pb-4">
        <div className="max-w-sm md:max-w-md text-left pointer-events-auto md:pl-16 lg:pl-0">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 md:mb-5 shadow-lg border border-blue-400/30">
                <Sparkles className="w-3 h-3 mr-1.5 text-white" />
                Featured Story
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-[1.15] tracking-tight drop-shadow-2xl hover:text-blue-400 transition-colors duration-300">
                {currentPost.title}
              </h2>

              <p className="text-base md:text-lg text-gray-200 mb-5 line-clamp-2 leading-relaxed font-medium drop-shadow-lg">
                {currentPost.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[10px] md:text-xs font-bold uppercase tracking-wider text-gray-300 mb-6 md:mb-8">
                <span className="text-blue-400">{currentPost.category}</span>
                <span className="flex items-center border-l border-white/20 pl-4 md:pl-6">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-2 text-blue-500" />
                  {currentPost.publishedDate}
                </span>
                <span className="flex items-center border-l border-white/20 pl-4 md:pl-6">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2 text-blue-500" />
                  {currentPost.readTime}
                </span>
              </div>

              <button 
                className="flex items-center bg-white hover:bg-gray-100 text-[#071226] px-6 py-3 rounded-xl font-black uppercase tracking-widest text-xs transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blog/${currentPost.slug}`);
                }}
              >
                Read Article <ChevronRight className="w-4 h-4 ml-1.5" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination */}
      <div className="relative z-30 w-full pb-6 md:pb-8 flex justify-start container mx-auto px-4 max-w-7xl pointer-events-none mt-auto">
        <div className="md:pl-16 lg:pl-0 flex gap-2">
          {posts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="h-1.5 w-10 md:w-12 bg-white/20 rounded-full overflow-hidden pointer-events-auto cursor-pointer transition-all hover:bg-white/40"
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isPaused ? "auto" : "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-white rounded-full"
                />
              )}
              {index < currentIndex && (
                <div className="h-full w-full bg-white/70 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Always Visible Glassmorphic Navigation Arrows (Desktop Only) */}
      <div className="absolute inset-y-0 right-4 md:right-8 z-30 flex items-center pointer-events-none hidden md:flex">
        <button 
          onClick={nextSlide}
          className="p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 text-white backdrop-blur-md pointer-events-auto transition-all hover:scale-110 shadow-2xl opacity-70 hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 left-4 md:left-8 z-30 flex items-center pointer-events-none hidden md:flex">
        <button 
          onClick={prevSlide}
          className="p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 text-white backdrop-blur-md pointer-events-auto transition-all hover:scale-110 shadow-2xl opacity-70 hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};