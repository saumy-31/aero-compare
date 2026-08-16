import React, { useMemo, useRef, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Search, Clock, ArrowRight, ArrowUpRight,
  Sparkles, BookOpen, CheckCircle2,
  MapPin, Mail, ChevronLeft, ChevronRight, Pause, Play
} from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { SEO } from '../components/seo/SEO';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read state strictly from URL query parameters (single source of truth)
  const selectedCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('q') || '';
  const visibleArchiveCount = parseInt(searchParams.get('limit') || '6', 10);

  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  // Hero Carousel State for "All" view
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
  const [isHeroPaused, setIsHeroPaused] = useState<boolean>(false);

  // Category horizontal scroll controls
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  // Extract unique categories dynamically from immutable master data
  const categories = useMemo(() => {
    return [
      'All',
      ...Array.from(
        new Set(
          MOCK_BLOG_POSTS.map((post) => post.category?.trim()).filter(Boolean)
        )
      )
    ];
  }, []);

  // 4 Featured articles for hero slider in "All" view
  const heroFeaturedPosts = useMemo(() => MOCK_BLOG_POSTS.slice(0, 4), []);

  useEffect(() => {
    if (isHeroPaused || heroFeaturedPosts.length === 0) return;

    const timer = setInterval(() => {
      setActiveHeroIndex((prev) => (prev + 1) % heroFeaturedPosts.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHeroPaused, heroFeaturedPosts.length]);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);
    return () => window.removeEventListener('resize', updateScrollButtons);
  }, [categories]);

  const scrollByAmount = (distance: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', category);
    }
    nextParams.delete('limit');
    setSearchParams(nextParams);
  };

  const handleSearchChange = (query: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (!query) {
      nextParams.delete('q');
    } else {
      nextParams.set('q', query);
    }
    nextParams.delete('limit');
    setSearchParams(nextParams);
  };

  const handleLoadMore = () => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('limit', String(visibleArchiveCount + 6));
    setSearchParams(nextParams);
  };

  // STRICT IMMUTABLE DERIVATION: Evaluated purely from MOCK_BLOG_POSTS
  const isFiltering = selectedCategory !== 'All' || searchQuery.trim().length > 0;

  const filteredPosts = useMemo(() => {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    const targetCategory = selectedCategory.trim().toLowerCase();

    return MOCK_BLOG_POSTS.filter((post) => {
      const postCategory = (post.category || '').trim().toLowerCase();
      const matchesCategory = targetCategory === 'all' || postCategory === targetCategory;

      const matchesSearch =
        trimmedQuery === '' ||
        (post.title && post.title.toLowerCase().includes(trimmedQuery)) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(trimmedQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // "All" view editorial slices (evaluated purely from master data)
  const activeHeroPost = heroFeaturedPosts[activeHeroIndex] || MOCK_BLOG_POSTS[0];
  const picksPosts = MOCK_BLOG_POSTS.slice(4, 8);
  const destinationSpotlightPost = 
    MOCK_BLOG_POSTS.find(p => p.category === 'Destination Guides' && !heroFeaturedPosts.some(h => h.id === p.id)) || 
    MOCK_BLOG_POSTS[8] || MOCK_BLOG_POSTS[0];
  const playbookLeadPosts = MOCK_BLOG_POSTS.slice(8, 10);
  const playbookCompactPosts = MOCK_BLOG_POSTS.slice(10, 13);
  const defaultArchivePosts = MOCK_BLOG_POSTS.slice(13);

  const handleArticleClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterStatus('success');
  };

  return (
    <>
      <SEO
        title="Travel Guides, Flight Tips & Smart Booking Advice | FlySava"
        description="Explore FlySava's curated travel guides, airline hacks, destination inspiration, and flight booking tips to travel smarter for less."
        canonicalUrl="/blog"
      />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none !important;
        }
        .no-scrollbar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      <div className="min-h-screen bg-[#F4F6F9] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* HEADER BAR */}
        <section className="bg-white border-b border-slate-200/80 pt-6 pb-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1360px] mx-auto space-y-5">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>The FlySava Journal</span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Travel smarter, fly cheaper.
                </h1>
              </div>

              {/* Search Bar */}
              <div className="w-full md:w-80 relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles, guides, tips..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Slider */}
            <div className="relative flex items-center">
              {showLeftArrow && (
                <button
                  type="button"
                  aria-label="Scroll categories left"
                  onClick={() => scrollByAmount(-240)}
                  className="absolute -left-2 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              )}

              <div
                ref={scrollContainerRef}
                onScroll={updateScrollButtons}
                className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full px-1 py-1"
              >
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => handleCategorySelect(category)}
                      className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 cursor-pointer select-none shrink-0 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 ring-2 ring-blue-600/20 scale-[1.02]'
                          : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 border border-slate-200/60'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              {showRightArrow && (
                <button
                  type="button"
                  aria-label="Scroll categories right"
                  onClick={() => scrollByAmount(240)}
                  className="absolute -right-2 z-10 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200 shadow-md flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </section>

        {/* MAIN BODY */}
        <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 space-y-12 sm:space-y-16">
          
          {isFiltering ? (
            /* ========================================================================= */
            /* PURE FILTERED VIEW: key forces React to completely discard old DOM tree   */
            /* ========================================================================= */
            <section key={`filtered-section-${selectedCategory}-${searchQuery}`} className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">
                  Showing results for {selectedCategory !== 'All' ? `"${selectedCategory}"` : ''} {searchQuery ? `"${searchQuery}"` : ''} ({filteredPosts.length})
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    const nextParams = new URLSearchParams(searchParams);
                    nextParams.delete('category');
                    nextParams.delete('q');
                    nextParams.delete('limit');
                    setSearchParams(nextParams);
                  }}
                  className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  Clear filters
                </button>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900">No stories found</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Try selecting another category above.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id || post.slug}
                      onClick={() => handleArticleClick(post.slug)}
                      className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer group"
                    >
                      <div className="relative h-48 overflow-hidden bg-slate-100">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          loading="lazy" 
                          decoding="async" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                        <div className="absolute top-3.5 left-3.5">
                          <span className="px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-xs border border-white/40">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {post.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium line-clamp-2 mt-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            {post.readTime}
                          </span>
                          <span className="text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-black text-[11px] uppercase">
                            Read <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ) : (
            /* ========================================================================= */
            /* "ALL" VIEW: Preserves all 5 editorial layout tiers                        */
            /* ========================================================================= */
            <>
              {/* SECTION 1: HERO AUTO-SCROLL SLIDER */}
              {activeHeroPost && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                        FEATURED STORIES
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsHeroPaused(!isHeroPaused)}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors cursor-pointer bg-slate-100 px-2 py-0.5 rounded-md"
                        title={isHeroPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
                      >
                        {isHeroPaused ? <Play className="w-2.5 h-2.5 text-blue-600" /> : <Pause className="w-2.5 h-2.5" />}
                        <span>{isHeroPaused ? 'Paused' : 'Auto'}</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      {heroFeaturedPosts.map((_, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveHeroIndex(i)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            activeHeroIndex === i ? 'w-6 bg-blue-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                    onMouseEnter={() => setIsHeroPaused(true)}
                    onMouseLeave={() => setIsHeroPaused(false)}
                  >
                    <div 
                      onClick={() => handleArticleClick(activeHeroPost.slug)}
                      className="lg:col-span-7 relative bg-slate-900 rounded-[32px] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 min-h-[390px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-10 border border-slate-200/80"
                    >
                      <img 
                        key={activeHeroPost.id}
                        src={activeHeroPost.image} 
                        alt={activeHeroPost.title} 
                        fetchPriority="high"
                        decoding="async" 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out opacity-90" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="relative z-10 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>{activeHeroPost.category}</span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-[1.15] group-hover:text-blue-200 transition-colors">
                          {activeHeroPost.title}
                        </h2>

                        <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-2 max-w-xl leading-relaxed">
                          {activeHeroPost.excerpt}
                        </p>

                        <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-extrabold text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-400" />
                            {activeHeroPost.readTime}
                          </span>
                          <span className="inline-flex items-center gap-1 text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 transition-colors">
                            <span>Read Deep Dive</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-4">
                      {heroFeaturedPosts.map((post, idx) => {
                        const isActive = activeHeroIndex === idx;
                        return (
                          <div
                            key={post.id || idx}
                            onClick={() => {
                              setActiveHeroIndex(idx);
                              handleArticleClick(post.slug);
                            }}
                            onMouseEnter={() => setActiveHeroIndex(idx)}
                            className={`rounded-2xl sm:rounded-[24px] border p-3.5 sm:p-4 transition-all duration-300 cursor-pointer flex gap-4 items-center group select-none flex-1 ${
                              isActive 
                                ? 'bg-blue-50/60 border-blue-500 shadow-md ring-2 ring-blue-500/10'
                                : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-sm opacity-85 hover:opacity-100'
                            }`}
                          >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                              <img 
                                src={post.image} 
                                alt={post.title} 
                                loading="lazy" 
                                decoding="async" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
                              />
                              {isActive && (
                                <div className="absolute inset-0 bg-blue-600/15 border-2 border-blue-600 rounded-2xl" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0 space-y-1">
                              <span className={`text-[10px] font-black uppercase tracking-wider block ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
                                {post.category}
                              </span>
                              <h3 className={`text-xs sm:text-sm font-black transition-colors line-clamp-2 leading-snug ${isActive ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>
                                {post.title}
                              </h3>
                              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 pt-0.5">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 2: FLYSAVA PICKS */}
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      CURATED SELECTION
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      FlySava Picks
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Essential Reading</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {picksPosts.map((post, idx) => (
                    <div
                      key={post.id || post.slug}
                      onClick={() => handleArticleClick(post.slug)}
                      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group select-none relative overflow-hidden"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors">
                            0{idx + 1}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-3">
                          {post.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 3: DESTINATION SPOTLIGHT */}
              {destinationSpotlightPost && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      DESTINATION SPOTLIGHT
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">Visual Essay</span>
                  </div>

                  <div 
                    onClick={() => handleArticleClick(destinationSpotlightPost.slug)}
                    className="relative bg-slate-950 rounded-[32px] sm:rounded-[40px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[300px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-12 border border-slate-200/80"
                  >
                    <img 
                      src={destinationSpotlightPost.image} 
                      alt={destinationSpotlightPost.title} 
                      loading="lazy" 
                      decoding="async" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />

                    <div className="relative z-10 max-w-2xl space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-wider">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        <span>Iconic Destination Guide</span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-blue-300 transition-colors">
                        {destinationSpotlightPost.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-300 font-medium line-clamp-2 leading-relaxed">
                        {destinationSpotlightPost.excerpt}
                      </p>

                      <div className="pt-2 flex items-center gap-3">
                        <button
                          type="button"
                          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-md shadow-blue-600/30 transition-all cursor-pointer group-hover:scale-102"
                        >
                          <span>Explore Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION 4: TRAVEL PLAYBOOK */}
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      STRATEGIES & TACTICS
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Travel Playbook
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Practical Wisdom</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {playbookLeadPosts.map((post) => (
                      <article
                        key={post.id || post.slug}
                        onClick={() => handleArticleClick(post.slug)}
                        className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                      >
                        <div className="relative h-44 overflow-hidden bg-slate-100">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            loading="lazy" 
                            decoding="async" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-slate-800 shadow-xs border border-white/40">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                          <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-blue-600" />
                              {post.readTime}
                            </span>
                            <span className="text-blue-600 font-black text-xs inline-flex items-center gap-1">
                              Read &rarr;
                            </span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between gap-3">
                    {playbookCompactPosts.map((post) => (
                      <div
                        key={post.id || post.slug}
                        onClick={() => handleArticleClick(post.slug)}
                        className="bg-white rounded-2xl border border-slate-200/80 p-3.5 sm:p-4 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer flex gap-3.5 items-center group select-none flex-1"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            loading="lazy" 
                            decoding="async" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out" 
                          />
                        </div>
                        <div className="flex-1 min-w-0 space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-wider text-blue-600 block">
                            {post.category}
                          </span>
                          <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          <span className="text-[10px] font-bold text-slate-400 block">
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* SECTION 5: LATEST STORIES / ARCHIVE */}
              <section className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                      THE ARCHIVE
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                      Latest Stories
                    </h2>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">All Travel Dispatches</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {defaultArchivePosts.slice(0, visibleArchiveCount).map((post) => (
                    <article
                      key={post.id || post.slug}
                      onClick={() => handleArticleClick(post.slug)}
                      className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer flex gap-4 items-center group select-none"
                    >
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          loading="lazy" 
                          decoding="async" 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-wider">
                            {post.category}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400">
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {visibleArchiveCount < defaultArchivePosts.length && (
                  <div className="pt-4 text-center">
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      className="px-8 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-600 text-slate-800 hover:text-blue-600 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-xs cursor-pointer active:scale-95"
                    >
                      View More Stories ({defaultArchivePosts.length - visibleArchiveCount} Remaining)
                    </button>
                  </div>
                )}
              </section>
            </>
          )}

          {/* SECTION 6: NEWSLETTER */}
          <section className="relative rounded-[32px] sm:rounded-[40px] bg-slate-900 border border-slate-800 p-8 sm:p-12 overflow-hidden text-white shadow-xl">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Never miss a fare drop or insider travel hack.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Join 50,000+ savvy travelers receiving our weekly breakdown of flight deals, airline tricks, and secret guides.
              </p>

              {newsletterStatus === 'success' ? (
                <div className="p-4 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-bold inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>You're on the list! Watch your inbox for secret travel hacks.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3.5 bg-slate-800/80 border border-slate-700 rounded-2xl text-xs sm:text-sm text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition-all font-medium"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer active:scale-95 shrink-0"
                  >
                    Join Free
                  </button>
                </form>
              )}

              <p className="text-[10px] text-slate-500 font-semibold">
                Zero spam. Only actionable travel advice. Unsubscribe anytime.
              </p>
            </div>
          </section>

        </main>
      </div>
    </>
  );
};

export default Blog;