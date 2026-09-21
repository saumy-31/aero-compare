import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Search, Clock, ArrowRight,
  Sparkles, BookOpen, CheckCircle2,
  Mail, ChevronLeft, ChevronRight
} from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { ALL_DESTINATION_CLUSTERS } from '../data/mockDestinationClusters';
import { SEO } from '../components/seo/SEO';

export const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Read state strictly from URL query parameters
  const selectedCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('q') || '';
  const visibleArchiveCount = parseInt(searchParams.get('limit') || '8', 10);

  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success'>('idle');

  // Top Editorial Hero Carousel State
  const [heroIndex, setHeroIndex] = useState<number>(0);

  // Category horizontal scroll controls
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const archiveSectionRef = useRef<HTMLElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false);

  // 5 Featured articles for top hero carousel
  const heroSlides = useMemo(() => {
    const featured = MOCK_BLOG_POSTS.filter(post => (post as any).featured);
    return featured.length >= 3 ? featured.slice(0, 5) : MOCK_BLOG_POSTS.slice(0, 5);
  }, []);

  const totalHeroSlides = heroSlides.length;

  // Uninterrupted 3-Second Automatic Slider
  const nextHeroSlide = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % totalHeroSlides);
  }, [totalHeroSlides]);

  const prevHeroSlide = useCallback(() => {
    setHeroIndex((prev) => (prev - 1 + totalHeroSlides) % totalHeroSlides);
  }, [totalHeroSlides]);

  useEffect(() => {
    if (totalHeroSlides <= 1) return;
    const interval = setInterval(nextHeroSlide, 3000);
    return () => clearInterval(interval);
  }, [nextHeroSlide, totalHeroSlides]);

  // Extract unique categories dynamically from master data
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

  // Show the 3 curated featured hubs manually defined
  const featuredHubs = useMemo(() => {
    return [
      ALL_DESTINATION_CLUSTERS.japan,
      ALL_DESTINATION_CLUSTERS.thailand,
      ALL_DESTINATION_CLUSTERS.uae,
    ].filter(Boolean);
  }, []);

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

    // Smoothly scroll down to the archive section where the filtered articles reside
    if (archiveSectionRef.current && category !== 'All') {
      archiveSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  const isFiltering = selectedCategory !== 'All' || searchQuery.trim().length > 0;

  // Filter ONLY applied to Latest Stories section
  const archiveFilteredPosts = useMemo(() => {
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

  // Static Editorial Sections (Always visible)
  const currentHeroPost = heroSlides[heroIndex] || MOCK_BLOG_POSTS[0];
  const picksPosts = useMemo(() => MOCK_BLOG_POSTS.slice(0, 4), []);
  const featuredEditorialPost = useMemo(() => {
    return MOCK_BLOG_POSTS.find(p => p.category === 'Destination Guides' && p.slug !== currentHeroPost.slug) || 
      MOCK_BLOG_POSTS[4] || 
      MOCK_BLOG_POSTS[0];
  }, [currentHeroPost]);
  const playbookArticles = useMemo(() => MOCK_BLOG_POSTS.slice(5, 9), []);

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
        title="Travel Guides, Flight Tips & Editorial Journal | FlySava"
        description="Explore FlySava's curated travel guides, airline hacks, travel wisdom, and deep editorial stories to travel smarter for less."
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
        @keyframes heroProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-hero-progress {
          animation: heroProgress 3000ms linear infinite;
        }
      `}</style>

      <div className="min-h-screen bg-[#F4F6F9] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO / FEATURED STORY CAROUSEL (ALWAYS VISIBLE)                        */}
        {/* ========================================================================= */}
        <section className="pt-4 sm:pt-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-950 shadow-2xl h-[500px] sm:h-[560px] lg:h-[600px] select-none group">
            
            {/* Background Slides */}
            {heroSlides.map((slide, idx) => (
              <div 
                key={slide.id || idx}
                onClick={() => handleArticleClick(slide.slug)}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out cursor-pointer ${
                  idx === heroIndex ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  fetchPriority={idx === 0 ? "high" : "auto"}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover brightness-[0.85] contrast-[1.05] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent hidden sm:block" />
              </div>
            ))}

            {/* Editorial Floating Card */}
            <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-10 lg:left-14 right-4 sm:right-auto z-20 max-w-xl">
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/40 shadow-2xl space-y-4">
                
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                    {currentHeroPost?.category || 'Featured Story'}
                  </span>
                  {currentHeroPost?.readTime && (
                    <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 text-slate-400" />
                      {currentHeroPost.readTime}
                    </span>
                  )}
                </div>

                <h1 
                  onClick={() => handleArticleClick(currentHeroPost?.slug)}
                  className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight leading-tight hover:text-blue-600 transition-colors cursor-pointer line-clamp-2"
                >
                  {currentHeroPost?.title}
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {currentHeroPost?.excerpt}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleArticleClick(currentHeroPost?.slug)}
                    className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/25 flex items-center gap-2 cursor-pointer active:scale-95"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

            {/* Manual Controls */}
            <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
              <button
                type="button"
                onClick={prevHeroSlide}
                aria-label="Previous featured story"
                className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-white hover:text-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextHeroSlide}
                aria-label="Next featured story"
                className="w-10 h-10 rounded-full bg-slate-900/60 hover:bg-white hover:text-slate-900 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Progress Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center gap-2 px-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setHeroIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    idx === heroIndex ? 'w-12 bg-white/40' : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                >
                  {idx === heroIndex && (
                    <div 
                      key={heroIndex} 
                      className="h-full bg-blue-500 rounded-full animate-hero-progress"
                    />
                  )}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* MAIN BODY */}
        <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-14 space-y-12 sm:space-y-14">
          
          {/* ========================================================================= */}
          {/* 2. FLYSAVA PICKS (ALWAYS VISIBLE)                                         */}
          {/* ========================================================================= */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
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

          {/* ========================================================================= */}
         {/* ========================================================================= */}
          {/* 3. FEATURED STORY (RESPONSIVE COMPACT MOBILE + CINEMATIC DESKTOP)        */}
          {/* ========================================================================= */}
          {featuredEditorialPost && (
            <section className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                  FEATURED ESSAY
                </span>
                <span className="text-[11px] font-bold text-slate-400">In-Depth Dispatch</span>
              </div>

              <div 
                onClick={() => handleArticleClick(featuredEditorialPost.slug)}
                className="relative bg-slate-950 rounded-[24px] sm:rounded-[36px] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 min-h-[260px] sm:min-h-[340px] flex flex-col justify-end p-4 sm:p-8 lg:p-10 border border-slate-200/80 select-none"
              >
                {/* Background Image */}
                <img 
                  src={featuredEditorialPost.image} 
                  alt={featuredEditorialPost.title} 
                  loading="lazy" 
                  decoding="async" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 brightness-90" 
                />
                
                {/* Combined Gradients: Bottom-up for mobile, left-to-right for desktop */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent sm:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent hidden sm:block" />

                {/* Content Container */}
                <div className="relative z-10 max-w-2xl space-y-2 sm:space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
                    <span>{featuredEditorialPost.category}</span>
                  </div>

                  <h2 className="text-base sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug sm:leading-tight group-hover:text-blue-300 transition-colors line-clamp-3">
                    {featuredEditorialPost.title}
                  </h2>

                  <div className="pt-1 sm:pt-2">
                    <button
                      type="button"
                      className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[11px] sm:text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 sm:gap-2 shadow-md shadow-blue-600/30 transition-all cursor-pointer group-hover:scale-102 active:scale-95"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          

          {/* ========================================================================= */}
          {/* 4.5 EXPLORE DESTINATIONS (RESPONSIVE COMPACT MOBILE + CINEMATIC DESKTOP) */}
          {/* ========================================================================= */}
          {featuredHubs.length > 0 && (
            <section className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-black uppercase tracking-wider mb-1">
                    <span>Curated Hubs</span>
                  </div>
                  <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
                    Explore Destinations
                  </h2>
                </div>

                <Link
                  to="/blog/destinations"
                  className="inline-flex items-center gap-1 text-xs font-black text-blue-600 hover:text-blue-700 uppercase tracking-wider transition-all group shrink-0"
                >
                  <span className="hidden xs:inline">Browse All</span>
                  <span className="xs:hidden">All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Grid: Compact Landscape on Mobile (h-56), Tall Cinematic on Desktop (md:h-[400px]) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
                {featuredHubs.map((dest) => (
                  <div
                    key={dest.slug}
                    onClick={() => navigate(`/blog/destinations/${dest.slug}`)}
                    className="relative h-56 sm:h-64 md:h-[400px] rounded-2xl sm:rounded-[28px] overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-slate-950 flex flex-col justify-between p-4 sm:p-6 select-none border border-slate-200/60"
                  >
                    {/* Background Imagery */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.78] contrast-[1.05]"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-transparent z-10" />

                    {/* Top Pill Tag */}
                    <div className="relative z-20 flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-white border border-white/20">
                        {dest.country}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all">
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="relative z-20 space-y-1 sm:space-y-2">
                      <div>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-400 drop-shadow-sm block">
                          Editorial Cluster
                        </span>
                        <h3 className="text-lg sm:text-2xl font-black text-white leading-tight drop-shadow-sm group-hover:text-blue-200 transition-colors">
                          {dest.name}
                        </h3>
                      </div>

                      <p className="text-[11px] sm:text-xs text-slate-200/90 font-medium line-clamp-1 sm:line-clamp-2 leading-relaxed drop-shadow-sm">
                        {dest.tagline || dest.description}
                      </p>

                      <div className="pt-0.5 flex items-center gap-1 text-[11px] sm:text-xs font-black text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span>Enter Hub</span>
                        <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* 5. LATEST STORIES & GUIDES (FILTER TARGET SECTION)                         */}
          {/* ========================================================================= */}
          <section ref={archiveSectionRef} className="space-y-6 scroll-mt-6">
            
            {/* Unified Search & Category Toolbar */}
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-6 space-y-4 shadow-2xs">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>The FlySava Journal</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Latest Stories & Guides
                  </h2>
                </div>

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

              {/* Horizontal Category Scroll */}
              <div className="relative flex items-center pt-2 border-t border-slate-100">
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

            {/* Active Filter Indicator */}
            {isFiltering && (
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 pt-1">
                <span className="text-sm font-black text-slate-900 tracking-tight">
                  Showing {archiveFilteredPosts.length} stories for {selectedCategory !== 'All' ? `"${selectedCategory}"` : ''} {searchQuery ? `"${searchQuery}"` : ''}
                </span>
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
            )}

            {/* Compact 2-Column Horizontal Cards */}
            {archiveFilteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900">No stories found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try selecting another category or searching for different keywords.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {archiveFilteredPosts.slice(0, visibleArchiveCount).map((post) => (
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
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 text-slate-400" /> {post.readTime}
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
            )}

            {/* Load More Button */}
            {visibleArchiveCount < archiveFilteredPosts.length && (
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-600 text-slate-800 hover:text-blue-600 font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-xs cursor-pointer active:scale-95"
                >
                  View More Stories ({archiveFilteredPosts.length - visibleArchiveCount} Remaining)
                </button>
              </div>
            )}
          </section>

          {/* ========================================================================= */}
          {/* 6. NEWSLETTER (ALWAYS VISIBLE)                                            */}
          {/* ========================================================================= */}
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
                  <CheckCircle2 className="w-4 text-blue-400" />
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