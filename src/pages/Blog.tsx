import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom';
import { Search, Clock, TrendingUp, MapPin, ArrowRight, Zap, Star, ChevronLeft, ChevronRight, Mail, Sparkles } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/seo/SEO';
import { EditorialHero } from '../components/blog/EditorialHero';

export const Blog: React.FC = () => {
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
    { id: 'seoul-kr', name: 'Seoul', image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=400&q=75&auto=format&fit=crop' },
    { id: 'tokyo-jp', name: 'Tokyo', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=75&auto=format&fit=crop' },
    { id: 'paris-fr', name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=75&auto=format&fit=crop' },
    { id: 'dubai-uae', name: 'Dubai', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=75&auto=format&fit=crop' },
    { id: 'bali-id', name: 'Bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=75&auto=format&fit=crop' },
    { id: 'london-uk', name: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=75&auto=format&fit=crop' },
    { id: 'new-york-us', name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=75&auto=format&fit=crop' }
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

  const isDefaultView = filter === 'All' && searchQuery === '';

  const latestPosts = filteredPosts.slice(0, 3);
  const trendingPosts = filteredPosts.slice(3, 5);
  const spotlightPost = filteredPosts.slice(5, 6)[0];
  const remainingPosts = isDefaultView ? filteredPosts.slice(6) : filteredPosts;

  // BreadcrumbList JSON-LD Schema
  const blogIndexJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://flysava.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://flysava.com/blog"
      }
    ]
  };

  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const destScrollRef = useRef<HTMLDivElement>(null);
  const resultsHeaderRef = useRef<HTMLDivElement>(null);

  const scrollToResults = () => {
    setTimeout(() => {
      resultsHeaderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 400);
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
        title="Travel Guides, Tips & Flight Insights | FlySava Blog"
        description="Explore travel guides, flight booking tips, hotel advice, and eSIM guides to help plan your next trip."
        canonicalUrl="/blog"
        type="website"
        jsonLd={blogIndexJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] pt-3 sm:pt-4 pb-16 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* --- PREMIUM EDITORIAL HERO SLIDER --- */}
        <EditorialHero posts={sliderPosts} />

        {/* --- INTEGRATED SEARCH & CATEGORIES --- */}
        <div className="pt-6 md:pt-8 relative z-20">
          <div className="container mx-auto px-4 max-w-6xl mb-10 md:mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-3 rounded-3xl border border-slate-200/80 shadow-lg flex flex-col md:flex-row items-center justify-between gap-3"
            >
              <div className="relative w-full md:w-5/12 shrink-0 flex items-center">
                <Search className="absolute left-4.5 text-slate-400 w-5 h-5 pointer-events-none z-10" />
                <input 
                  type="text" 
                  placeholder="Search articles, guides..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-50 text-slate-900 py-3.5 pr-4 pl-12 rounded-2xl border border-slate-200/80 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all text-sm font-medium placeholder:text-slate-400"
                />
              </div>
              
              <div className="relative w-full md:w-7/12 flex items-center">
                <button 
                  onClick={() => scrollCarousel(categoryScrollRef, 'left')}
                  className="absolute left-0 z-10 p-2 bg-gradient-to-r from-white via-white/90 to-transparent text-slate-600 hidden md:block rounded-l-2xl"
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
                      className={`whitespace-nowrap px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider transition-all select-none ${filter === cat && !searchQuery ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' : 'bg-slate-100/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80 border border-slate-200/60'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => scrollCarousel(categoryScrollRef, 'right')}
                  className="absolute right-0 z-10 p-2 bg-gradient-to-l from-white via-white/90 to-transparent text-slate-600 hidden md:block rounded-r-2xl"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- MAIN EDITORIAL CONTENT --- */}
        <div className="container mx-auto px-4 max-w-7xl">
          
          <AnimatePresence mode="wait">
            {isDefaultView && (
              <motion.div key="top-editorial" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {latestPosts.length > 0 && (
                  <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-200/80 pb-4">
                      <Clock className="text-blue-600 w-5 h-5" />
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Latest Stories</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {latestPosts.map((post) => (
                        <article 
                          key={post.id}
                          onClick={() => navigate(`/blog/${post.slug}`)}
                          className="group cursor-pointer bg-white rounded-3xl border border-slate-200/80 overflow-hidden transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1"
                        >
                          <div className="h-56 overflow-hidden relative">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                          </div>
                          <div className="p-7 flex flex-col flex-grow">
                            <span className="text-blue-600 font-bold uppercase tracking-wider text-[11px] mb-2.5">{post.category}</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{post.title}</h3>
                            <p className="text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{post.publishedDate}</span>
                              <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                )}

                {/* TRENDING NOW SECTION */}
                {trendingPosts.length > 0 && (
                  <section className="mb-20">
                    <div className="flex items-center gap-3 mb-8 border-b border-slate-200/80 pb-4">
                      <Zap className="text-blue-600 w-5 h-5" />
                      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Trending Now</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {trendingPosts.map((post) => (
                        <article 
                          key={post.id}
                          onClick={() => navigate(`/blog/${post.slug}`)}
                          className="group relative cursor-pointer rounded-3xl overflow-hidden h-[420px] md:h-[500px] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-slate-200/80"
                        >
                          <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 w-full p-8 sm:p-10 z-10 flex flex-col justify-end h-full">
                            <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 w-fit shadow-md">{post.category}</span>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 leading-snug group-hover:text-blue-200 transition-colors drop-shadow-sm">{post.title}</h3>
                            <p className="text-slate-100 text-sm sm:text-base line-clamp-2 mb-6 font-medium leading-relaxed drop-shadow-xs">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between text-xs font-semibold text-slate-200 border-t border-white/20 pt-4">
                              <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-400" /> {post.readTime}</span>
                              <div className="flex items-center text-white font-bold">
                                Read Article <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
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

          <AnimatePresence mode="wait">
            {isDefaultView && (
              <motion.section 
                key="destinations"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mb-20 relative scroll-mt-32"
              >
                <div className="flex items-center justify-between mb-8 border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600 w-5 h-5" />
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Explore by Destination</h2>
                  </div>
                  <div className="hidden md:flex gap-2">
                    <button onClick={() => scrollCarousel(destScrollRef, 'left')} className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"><ChevronLeft className="w-4 h-4" /></button>
                    <button onClick={() => scrollCarousel(destScrollRef, 'right')} className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"><ChevronRight className="w-4 h-4" /></button>
                  </div>
                </div>
                
                <div 
                  ref={destScrollRef}
                  className="flex overflow-x-auto gap-5 pb-4 -mx-4 px-4 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing"
                  {...setupDragToScroll(destScrollRef)}
                >
                  {destinationCollections.map((dest) => (
                    <button 
                      key={dest.id}
                      onClick={() => navigate(`/destinations/${dest.id}`)}
                      className="relative flex-shrink-0 w-40 md:w-52 h-56 md:h-64 rounded-2xl overflow-hidden group transition-all duration-300 select-none shadow-sm border border-slate-200/80 hover:-translate-y-1"
                    >
                      <img src={dest.image} alt={dest.name} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent group-hover:from-slate-950/90 transition-colors duration-500 pointer-events-none" />
                      <div className="absolute bottom-5 left-5 text-left pointer-events-none">
                        <span className="block font-bold text-xl text-white mb-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">{dest.name}</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-300 block">
                          Explore Guide
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isDefaultView && spotlightPost && (
              <motion.section 
                key="spotlight"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mb-20"
              >
                <div className="flex items-center gap-3 mb-8 border-b border-slate-200/80 pb-4">
                  <Star className="text-blue-600 w-5 h-5" />
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Editor's Spotlight</h2>
                </div>
                <article 
                  onClick={() => navigate(`/blog/${spotlightPost.slug}`)}
                  className="group cursor-pointer bg-white rounded-3xl border border-slate-200/80 overflow-hidden transition-all duration-500 flex flex-col lg:flex-row shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-full lg:w-3/5 h-[320px] lg:h-[460px] overflow-hidden relative">
                    <img src={spotlightPost.image} alt={spotlightPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
                  </div>
                  <div className="w-full lg:w-2/5 p-8 sm:p-12 flex flex-col justify-center bg-white">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-3 block">{spotlightPost.category}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">{spotlightPost.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base mb-8 leading-relaxed line-clamp-3">{spotlightPost.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                             {spotlightPost.author.charAt(0)}
                          </div>
                          <div>
                            <span className="block text-sm font-bold text-slate-900">{spotlightPost.author}</span>
                            <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{spotlightPost.publishedDate}</span>
                          </div>
                        </div>
                    </div>
                  </div>
                </article>
              </motion.section>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {!isDefaultView && (
              <motion.div 
                key="search-header"
                ref={resultsHeaderRef}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="mb-10 border-b border-slate-200/80 pb-6 mt-6 scroll-mt-32"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  {searchQuery ? `Results for "${searchQuery}"` : `${filter} Articles`}
                  <span className="text-slate-500 ml-3 text-lg font-normal">({filteredPosts.length})</span>
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          <section className="mb-20">
            {isDefaultView && (
              <div className="flex items-center gap-3 mb-8 border-b border-slate-200/80 pb-4">
                <TrendingUp className="text-blue-600 w-5 h-5" />
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">More Stories</h2>
              </div>
            )}
            
            {remainingPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {remainingPosts.map((post) => (
                    <motion.article 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={post.id}
                      onClick={() => navigate(`/blog/${post.slug}`)}
                      className="group cursor-pointer bg-white rounded-3xl border border-slate-200/80 overflow-hidden transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="h-60 overflow-hidden relative">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-[11px] mb-2.5">{post.category}</span>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{post.title}</h3>
                        <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                           <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{post.publishedDate}</span>
                           <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-20 text-center bg-white rounded-3xl border border-slate-200/80 shadow-sm">
                <Search className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No articles found</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">We couldn't find anything matching your search. Try adjusting your terms or exploring a different category.</p>
                <button 
                  onClick={() => { 
                    setSearchQuery(''); 
                    setFilter('All');
                    window.scrollTo({ top: 0, behavior: 'smooth' }); 
                  }}
                  className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md shadow-blue-600/20"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          {isDefaultView && (
            <section className="mb-12">
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl text-white">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Mail className="w-56 h-56 text-white transform rotate-12" />
                </div>
                <div className="relative z-10 max-w-2xl">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-blue-100 border border-white/20 mb-4 backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" /> Join the Club
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Travel smarter. <br/>Fly further.</h2>
                  <p className="text-blue-100 text-sm sm:text-base mb-8 font-normal leading-relaxed">Get our best destination guides, flight booking hacks, and exclusive travel inspiration delivered straight to your inbox once a week.</p>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="bg-white/15 text-white placeholder-blue-200 px-5 py-3.5 rounded-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-2/3 text-sm transition-all shadow-sm"
                    />
                    <button className="bg-white text-blue-600 hover:bg-blue-50 px-7 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] w-full sm:w-1/3 whitespace-nowrap cursor-pointer">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[11px] text-blue-200/80 mt-3">No spam. Unsubscribe at any time.</p>
                </div>
              </div>
            </section>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Blog;