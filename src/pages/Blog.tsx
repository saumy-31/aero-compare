import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import { Search, Clock, TrendingUp, MapPin, ArrowRight, Zap, Star, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { EditorialHero } from '../components/blog/EditorialHero';

export const Blog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navType = useNavigationType();

  const isReturning = navType === 'POP' || location.state?.fromPost === true;

  const [filter, setFilter] = useState(() => 
    isReturning ? sessionStorage.getItem('flysava_blog_filter') || 'All' : 'All'
  );
  const [searchQuery, setSearchQuery] = useState(() => 
    isReturning ? sessionStorage.getItem('flysava_blog_search') || '' : ''
  );

  useEffect(() => {
    sessionStorage.setItem('flysava_blog_filter', filter);
    sessionStorage.setItem('flysava_blog_search', searchQuery);
  }, [filter, searchQuery]);

  useEffect(() => {
    if (isReturning) {
      const savedScroll = sessionStorage.getItem('flysava_blog_scroll');
      if (savedScroll) {
        requestAnimationFrame(() => {
          setTimeout(() => {
            window.scrollTo({ top: parseInt(savedScroll, 10), behavior: 'instant' });
          }, 50);
        });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem('flysava_blog_scroll', window.scrollY.toString());
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isReturning]);

  const categories = ['All', 'Destinations', 'City Guides', 'Travel Tips', 'Airline Reviews', 'Itineraries'];
  
  const destinationCollections = [
    { name: 'Japan', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop' },
    { name: 'Italy', image: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop' },
    { name: 'Thailand', image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop' },
    { name: 'Switzerland', image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop' },
    { name: 'Maldives', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop' },
    { name: 'Norway', image: 'https://images.unsplash.com/photo-1504233529578-6d46baba6d34?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=crop' },
    { name: 'Canada', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop' }
  ];

  const filteredPosts = MOCK_BLOG_POSTS.filter(post => {
    const matchesCategory = filter === 'All' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sliderPosts = [
    MOCK_BLOG_POSTS.find(p => p.slug === 'best-time-to-book-flights-by-destination') || MOCK_BLOG_POSTS[0],
    MOCK_BLOG_POSTS.find(p => p.slug === 'tokyo-neon-metropolis-first-timer-guide') || MOCK_BLOG_POSTS[1],
    MOCK_BLOG_POSTS.find(p => p.slug === 'paris-beyond-the-eiffel-tower') || MOCK_BLOG_POSTS[3]
  ].filter(Boolean);

  // Layout View States
  const isDefaultView = filter === 'All' && searchQuery === '';
  const isDestinationSearch = destinationCollections.some(d => d.name.toLowerCase() === searchQuery.toLowerCase());

  const latestPosts = filteredPosts.slice(0, 3);
  const trendingPosts = filteredPosts.slice(3, 5);
  const spotlightPost = filteredPosts.slice(5, 6)[0];
  const remainingPosts = isDefaultView ? filteredPosts.slice(6) : filteredPosts;

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Travel Guides & Tips | FlySava",
    "description": "Expert insights, destination guides, and strategies to fly further for less.",
    "url": "https://flysava.com/blog"
  };

  // Carousel & Scroll Refs
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const destScrollRef = useRef<HTMLDivElement>(null);
  const destSectionRef = useRef<HTMLElement>(null);
  const resultsHeaderRef = useRef<HTMLDivElement>(null);

  // --- SCROLL LOGIC FIX ---
  const scrollToResults = () => {
    // Framer Motion exit animations take ~300ms. 
    // Waiting 400ms ensures all unmounted elements are completely removed from the DOM,
    // preventing massive layout shifts from calculating the wrong scroll position.
    setTimeout(() => {
      resultsHeaderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
  };

  const handleDestinationClick = (destName: string) => {
    if (searchQuery.toLowerCase() === destName.toLowerCase()) {
      clearDestinationFilter();
      return;
    }
    setSearchQuery(destName);
    setFilter('All');
    scrollToResults();
  };

  const clearDestinationFilter = () => {
    setSearchQuery('');
    setTimeout(() => {
      destSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const scrollCarousel = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const setupDragToScroll = (ref: React.RefObject<HTMLDivElement>) => {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    return {
      onMouseDown: (e: React.MouseEvent) => {
        isDown = true;
        if (ref.current) {
          ref.current.classList.add('cursor-grabbing');
          startX = e.pageX - ref.current.offsetLeft;
          scrollLeft = ref.current.scrollLeft;
        }
      },
      onMouseLeave: () => {
        isDown = false;
        if (ref.current) ref.current.classList.remove('cursor-grabbing');
      },
      onMouseUp: () => {
        isDown = false;
        if (ref.current) ref.current.classList.remove('cursor-grabbing');
      },
      onMouseMove: (e: React.MouseEvent) => {
        if (!isDown || !ref.current) return;
        e.preventDefault();
        const x = e.pageX - ref.current.offsetLeft;
        const walk = (x - startX) * 2;
        ref.current.scrollLeft = scrollLeft - walk;
      }
    };
  };

  return (
    <>
      <SEO 
        title="Travel Guides & Tips | FlySava"
        description="Expert insights, destination guides, and strategies to fly further for less. Discover hidden gems and ultimate travel hacks."
        canonicalUrl="/blog"
        jsonLd={blogJsonLd}
      />
      
      <div className="min-h-screen bg-[#071226] pt-16 pb-12 text-white font-sans selection:bg-blue-500/30">
        
        {/* --- PREMIUM EDITORIAL HERO SLIDER --- */}
        <EditorialHero posts={sliderPosts} />

        {/* --- INTEGRATED SEARCH & CATEGORIES --- */}
        <div className="pt-6 md:pt-8 relative z-20">
          <div className="container mx-auto px-4 max-w-6xl mb-10 md:mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0c1a33]/90 backdrop-blur-xl p-3 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-3"
            >
              <div className="relative w-full md:w-5/12 shrink-0">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search destinations, guides..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#071226]/50 text-white py-4 pr-6 pl-14 rounded-full border border-white/5 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-base placeholder-gray-500"
                />
              </div>
              
              <div className="relative w-full md:w-7/12 flex items-center">
                <button 
                  onClick={() => scrollCarousel(categoryScrollRef, 'left')}
                  className="absolute left-0 z-10 p-2 bg-gradient-to-r from-[#0c1a33] via-[#0c1a33]/90 to-transparent text-white hidden md:block rounded-l-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div 
                  ref={categoryScrollRef}
                  className="flex overflow-x-auto gap-2 w-full px-2 md:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
                  {...setupDragToScroll(categoryScrollRef)}
                >
                  {categories.map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => {
                        setFilter(cat);
                        setSearchQuery('');
                        if (cat !== 'All') {
                          scrollToResults();
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }} 
                      className={`whitespace-nowrap px-6 py-3.5 rounded-full font-bold text-xs tracking-wider transition-all select-none ${filter === cat && !searchQuery ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'bg-[#071226]/50 text-gray-400 hover:text-white border border-white/5 hover:border-white/20'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => scrollCarousel(categoryScrollRef, 'right')}
                  className="absolute right-0 z-10 p-2 bg-gradient-to-l from-[#0c1a33] via-[#0c1a33]/90 to-transparent text-white hidden md:block rounded-r-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- MAIN EDITORIAL CONTENT --- */}
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* 1 & 2. LATEST STORIES & TRENDING (Hides during filters) */}
          <AnimatePresence mode="wait">
            {isDefaultView && (
              <motion.div key="top-editorial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {latestPosts.length > 0 && (
                  <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                      <Clock className="text-blue-500 w-6 h-6" />
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight">Latest Stories</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                      {latestPosts.map((post) => (
                        <article 
                          key={post.id}
                          onClick={() => navigate(`/blog/${post.slug}`)}
                          className="group cursor-pointer bg-[#0c1a33] rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                        >
                          <div className="h-56 overflow-hidden relative">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                          </div>
                          <div className="p-8 flex flex-col flex-grow">
                            <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-3">{post.category}</span>
                            <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">{post.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between mt-auto">
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{post.publishedDate}</span>
                              <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {trendingPosts.length > 0 && (
                  <section className="mb-24">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                      <Zap className="text-blue-500 w-6 h-6" />
                      <h2 className="text-2xl md:text-3xl font-black tracking-tight">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {trendingPosts.map((post) => (
                        <article 
                          key={post.id}
                          onClick={() => navigate(`/blog/${post.slug}`)}
                          className="group relative cursor-pointer rounded-[2rem] overflow-hidden h-[450px] md:h-[550px] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 border border-white/10"
                        >
                          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-[#071226]/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10 flex flex-col justify-end h-full">
                            <span className="inline-block px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 w-fit shadow-lg">{post.category}</span>
                            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">{post.title}</h3>
                            <p className="text-gray-300 text-base md:text-lg line-clamp-2 mb-6 font-medium">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between text-sm font-bold text-gray-300 border-t border-white/20 pt-4">
                              <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {post.readTime}</span>
                              <div className="flex items-center text-blue-400">
                                Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 3. DESTINATION COLLECTIONS (Stays visible during destination search for context) */}
          <AnimatePresence mode="wait">
            {(isDefaultView || isDestinationSearch) && (
              <motion.section 
                key="destinations"
                ref={destSectionRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mb-24 relative scroll-mt-32"
              >
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-500 w-6 h-6" />
                    <h2 className="text-2xl md:text-3xl font-black tracking-tight">Explore by Destination</h2>
                  </div>
                  <div className="hidden md:flex gap-2">
                    <button onClick={() => scrollCarousel(destScrollRef, 'left')} className="p-2 rounded-full bg-[#0c1a33] border border-white/10 hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                    <button onClick={() => scrollCarousel(destScrollRef, 'right')} className="p-2 rounded-full bg-[#0c1a33] border border-white/10 hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                  </div>
                </div>
                
                <div 
                  ref={destScrollRef}
                  className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
                  {...setupDragToScroll(destScrollRef)}
                >
                  {destinationCollections.map((dest) => {
                    const isSelected = searchQuery.toLowerCase() === dest.name.toLowerCase();
                    return (
                      <button 
                        key={dest.name}
                        onClick={() => handleDestinationClick(dest.name)}
                        className={`relative flex-shrink-0 w-40 md:w-52 h-56 md:h-72 rounded-2xl md:rounded-[2rem] overflow-hidden group transition-all duration-300 select-none ${
                          isSelected 
                            ? 'ring-2 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] scale-[1.02]' 
                            : 'shadow-lg border border-white/5 hover:-translate-y-1'
                        }`}
                      >
                        <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out pointer-events-none" />
                        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-500 pointer-events-none ${isSelected ? 'from-[#071226] via-[#071226]/40 to-transparent' : 'from-[#071226]/90 via-[#071226]/30 to-transparent group-hover:from-[#071226]'}`} />
                        <div className="absolute bottom-6 left-6 text-left pointer-events-none">
                          <span className="block font-black text-xl md:text-2xl text-white mb-1 group-hover:-translate-y-1 transition-transform duration-300">{dest.name}</span>
                          <span className={`text-xs font-bold uppercase tracking-wider transition-all duration-300 block ${isSelected ? 'text-blue-400 opacity-100' : 'text-blue-400 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1'}`}>
                            {isSelected ? 'Selected' : 'Explore'}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* 4. EDITOR'S SPOTLIGHT (Hides during filters) */}
          <AnimatePresence mode="wait">
            {isDefaultView && spotlightPost && (
              <motion.section 
                key="spotlight"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mb-24"
              >
                <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                  <Star className="text-blue-500 w-6 h-6" />
                  <h2 className="text-2xl md:text-3xl font-black tracking-tight">Editor's Spotlight</h2>
                </div>
                <article 
                  onClick={() => navigate(`/blog/${spotlightPost.slug}`)}
                  className="group cursor-pointer bg-[#0c1a33] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col lg:flex-row shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="w-full lg:w-3/5 h-[350px] lg:h-[500px] overflow-hidden relative">
                    <img src={spotlightPost.image} alt={spotlightPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                  </div>
                  <div className="w-full lg:w-2/5 p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br from-[#0c1a33] to-[#071226]">
                    <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-xs mb-4 block">{spotlightPost.category}</span>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors leading-[1.1]">{spotlightPost.title}</h3>
                    <p className="text-gray-400 text-lg mb-10 leading-relaxed line-clamp-4">{spotlightPost.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-base">
                            {spotlightPost.author.charAt(0)}
                         </div>
                         <div>
                           <span className="block text-sm font-bold text-white">{spotlightPost.author}</span>
                           <span className="block text-xs text-gray-500 uppercase tracking-wider">{spotlightPost.publishedDate}</span>
                         </div>
                       </div>
                    </div>
                  </div>
                </article>
              </motion.section>
            )}
          </AnimatePresence>

          {/* 5. SEARCH / DESTINATION RESULTS HEADER */}
          <AnimatePresence mode="wait">
            {!isDefaultView && (
              <motion.div 
                key="search-header"
                ref={resultsHeaderRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                // scroll-mt-32 ensures the heading completely clears the fixed navbar when scrolled into view
                className="mb-12 border-b border-white/10 pb-8 mt-8 scroll-mt-32"
              >
                {isDestinationSearch ? (
                  <div className="flex flex-col items-start">
                    <button 
                      onClick={clearDestinationFilter}
                      className="flex items-center text-blue-400 hover:text-blue-300 font-bold mb-6 transition-colors group bg-blue-500/10 hover:bg-blue-500/20 px-5 py-2.5 rounded-full text-sm"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
                      Back to All Destinations
                    </button>
                    <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">{searchQuery}</h2>
                      <span className="text-gray-400 text-lg md:text-xl font-medium mb-1 md:mb-2">
                        {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                      </span>
                    </div>
                  </div>
                ) : (
                  <h2 className="text-3xl font-black text-white">
                    {searchQuery ? `Results for "${searchQuery}"` : `${filter} Guides`}
                    <span className="text-gray-500 ml-3 text-xl font-medium">({filteredPosts.length})</span>
                  </h2>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* 6. MORE STORIES GRID */}
          <section className="mb-24">
            {isDefaultView && (
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <TrendingUp className="text-blue-500 w-6 h-6" />
                <h2 className="text-2xl md:text-3xl font-black tracking-tight">More Stories</h2>
              </div>
            )}
            
            {remainingPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                <AnimatePresence>
                  {remainingPosts.map((post) => (
                    <motion.article 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={post.id}
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="group cursor-pointer bg-[#0c1a33] rounded-[2rem] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1"
                    >
                      <div className="h-64 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-3">{post.category}</span>
                        <h3 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2">{post.title}</h3>
                        <p className="text-gray-400 text-sm md:text-base mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                           <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{post.publishedDate}</span>
                           <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-24 text-center bg-[#0c1a33] rounded-[3rem] border border-white/5 shadow-xl">
                <Search className="w-12 h-12 text-gray-600 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-3">No articles found</h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto">We couldn't find anything matching your search. Try adjusting your terms or exploring a different category.</p>
                <button 
                  onClick={() => { 
                    setSearchQuery(''); 
                    setFilter('All');
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                  className="mt-8 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/30"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          {/* 7. NEWSLETTER CTA (Ending Section) */}
          {isDefaultView && (
            <section className="mb-12">
              <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-[#071226] rounded-[3rem] p-10 md:p-20 overflow-hidden border border-blue-500/30 shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                  <Mail className="w-64 h-64 text-white transform rotate-12" />
                </div>
                <div className="relative z-10 max-w-2xl">
                  <span className="text-blue-300 font-black uppercase tracking-[0.2em] text-sm mb-4 block">Join the Club</span>
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">Travel smarter. <br/>Fly further.</h2>
                  <p className="text-blue-100/80 text-lg md:text-xl mb-10 font-medium">Get our best destination guides, flight booking hacks, and exclusive travel inspiration delivered straight to your inbox once a week.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="bg-white/10 text-white placeholder-blue-200/50 px-6 py-4 rounded-xl md:rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-2/3 transition-all"
                    />
                    <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl md:rounded-full font-black uppercase tracking-wider text-sm transition-all shadow-xl hover:shadow-white/20 w-full sm:w-1/3 whitespace-nowrap">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-blue-300/50 mt-4">No spam. Unsubscribe at any time.</p>
                </div>
              </div>
            </section>
          )}
          
        </div>
      </div>
    </>
  );
};