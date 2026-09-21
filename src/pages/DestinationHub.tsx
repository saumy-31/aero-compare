import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, ArrowLeft, BookOpen, Compass, ChevronRight } from 'lucide-react';
import { ALL_DESTINATION_CLUSTERS, DestinationCluster } from '../data/mockDestinationClusters';
import { MOCK_BLOG_POSTS, BlogPostType } from '../data/mockBlogPosts';
import { SEO } from '../components/seo/SEO';

export const DestinationHub: React.FC = () => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  const navigate = useNavigate();

  // 1. Dynamic destination lookup from central cluster registry
  const destination: DestinationCluster | undefined = useMemo(() => {
    if (!destinationSlug) return undefined;
    const clean = destinationSlug.toLowerCase().trim();
    return ALL_DESTINATION_CLUSTERS[clean];
  }, [destinationSlug]);

  // 2. Fetch all articles for this destination (strictly deduplicated by slug)
  const destinationArticles = useMemo(() => {
    if (!destination) return [];
    const target = destination.name.toLowerCase().trim();
    const seenSlugs = new Set<string>();
    const matched: BlogPostType[] = [];

    MOCK_BLOG_POSTS.forEach((post) => {
      if (!post.slug || seenSlugs.has(post.slug)) return;

      const destList: string[] = Array.isArray(post.destinations) && post.destinations.length > 0
        ? post.destinations
        : (post.destination ? [post.destination] : []);

      const matches = destList.some(d => d.toLowerCase().trim() === target);
      if (matches) {
        seenSlugs.add(post.slug);
        matched.push(post);
      }
    });

    return matched;
  }, [destination]);

  // 3. Featured Selection (Top 4 most relevant articles)
  const featuredArticles = useMemo(() => {
    if (destinationArticles.length <= 4) {
      return destinationArticles;
    }

    const priorityScore = (post: BlogPostType) => {
      let score = 0;
      const title = (post.title || '').toLowerCase();
      const cat = (post.category || '').toLowerCase();

      if (cat.includes('itineraries') || title.includes('itinerary')) score += 10;
      if (cat.includes('city guides') || title.includes('guide')) score += 8;
      if (title.includes('first time') || title.includes('before visiting')) score += 6;
      if (cat.includes('destination guides')) score += 4;
      return score;
    };

    const sorted = [...destinationArticles].sort((a, b) => priorityScore(b) - priorityScore(a));
    return sorted.slice(0, 4);
  }, [destinationArticles]);

  // 4. Normalized Category Grouping with internal slug-deduplication
  const { categoryList, categoryMap } = useMemo(() => {
    const map: Record<string, { label: string; articles: BlogPostType[]; seenSlugs: Set<string> }> = {};

    destinationArticles.forEach((article) => {
      const rawCat = (article.category || 'Travel Guides').trim();
      const normKey = rawCat.toLowerCase().replace(/\s+/g, ' ');

      if (!map[normKey]) {
        const cleanLabel = rawCat
          .split(' ')
          .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(' ');

        map[normKey] = {
          label: cleanLabel,
          articles: [],
          seenSlugs: new Set()
        };
      }

      if (!map[normKey].seenSlugs.has(article.slug)) {
        map[normKey].seenSlugs.add(article.slug);
        map[normKey].articles.push(article);
      }
    });

    const list = Object.keys(map).sort((a, b) => map[b].articles.length - map[a].articles.length);
    return { categoryList: list, categoryMap: map };
  }, [destinationArticles]);

  // Active Category Tab State
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('');

  useEffect(() => {
    if (categoryList.length > 0 && (!activeCategoryKey || !categoryMap[activeCategoryKey])) {
      setActiveCategoryKey(categoryList[0]);
    }
  }, [categoryList, activeCategoryKey, categoryMap]);

  // Active category articles
  const currentTabArticles = useMemo(() => {
    if (!activeCategoryKey || !categoryMap[activeCategoryKey]) return [];
    return categoryMap[activeCategoryKey].articles;
  }, [activeCategoryKey, categoryMap]);

  // 404 Guard
  if (!destination) {
    return (
      <>
        <SEO 
          title="Destination Not Found | FlySava Travel Guides" 
          description="The requested destination hub could not be found." 
          preventIndex={true} 
        />
        <div className="min-h-[70vh] bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-900 font-sans p-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100 shadow-2xs">
            <Compass className="w-7 h-7 text-blue-600" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Destination Not Found</h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mb-6 font-medium">
            We haven't built an editorial content cluster for this destination yet.
          </p>
          <Link
            to="/blog"
            className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20"
          >
            Explore All Travel Guides
          </Link>
        </div>
      </>
    );
  }

  const canonicalUrl = `https://flysava.com/blog/destinations/${destination.slug}`;

  const breadcrumbJsonLd = {
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
        "name": "Travel Guides",
        "item": "https://flysava.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": destination.name,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <>
      <SEO
        title={destination.seoTitle}
        description={destination.seoDescription}
        canonicalUrl={`/blog/destinations/${destination.slug}`}
        image={destination.image}
        jsonLd={breadcrumbJsonLd}
      />

      <div className="min-h-screen bg-[#F4F6F9] text-slate-900 font-sans pb-24 selection:bg-blue-600 selection:text-white">
        
        {/* 1. BREADCRUMBS */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Travel Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-black">{destination.name}</span>
          </nav>
        </div>

        {/* 2. DESTINATION HERO */}
        <section className="pt-4 sm:pt-6 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-950 shadow-2xl h-[340px] sm:h-[400px] lg:h-[440px] flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <img 
              src={destination.image} 
              alt={`${destination.name} Travel Guides`}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.75] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

            <div className="relative z-20 max-w-2xl space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                <BookOpen className="w-3.5 h-3.5" />
                <span>FlySava Editorial Guide</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                {destination.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed drop-shadow-sm max-w-xl">
                {destination.description}
              </p>
            </div>
          </div>
        </section>

        {/* MAIN EDITORIAL BODY */}
        <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 space-y-12 sm:space-y-14">
          
          {/* 3. FEATURED GUIDES */}
          {featuredArticles.length > 0 && (
            <section className="space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                    ESSENTIAL READING
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Featured {destination.name} Guides
                  </h2>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  Curated Highlights
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredArticles.map((article) => (
                  <article
                    key={article.slug}
                    onClick={() => navigate(`/blog/${article.slug}`)}
                    className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                  >
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-slate-800 shadow-2xs border border-white/40">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-blue-600" />
                          {article.readTime}
                        </span>
                        <span className="text-blue-600 font-black text-xs inline-flex items-center gap-1">
                          Read &rarr;
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* 4. EXACTLY ONE "EXPLORE [DESTINATION]" SECTION */}
          {categoryList.length > 0 && (
            <section className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 block">
                    EDITORIAL TOPICS
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Explore {destination.name}
                  </h2>
                </div>
                <span className="text-xs font-bold text-slate-400">
                  {currentTabArticles.length} Stories
                </span>
              </div>

              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {categoryList.map((catKey) => {
                  const cat = categoryMap[catKey];
                  const isActive = activeCategoryKey === catKey;

                  return (
                    <button
                      key={catKey}
                      type="button"
                      onClick={() => setActiveCategoryKey(catKey)}
                      className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 flex items-center gap-2 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 ring-2 ring-blue-600/20 scale-[1.02]'
                          : 'bg-white border border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`px-1.5 py-0.5 rounded-full text-[9px] ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {cat.articles.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Category Articles Grid */}
              <div className={`grid gap-4 ${
                currentTabArticles.length === 1 
                  ? 'grid-cols-1 max-w-md' 
                  : currentTabArticles.length === 2 
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl' 
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {currentTabArticles.map((article) => (
                  <article
                    key={article.slug}
                    onClick={() => navigate(`/blog/${article.slug}`)}
                    className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-4 sm:p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer flex gap-4 items-center group select-none"
                  >
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        loading="lazy" 
                        decoding="async" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-lg bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 text-slate-400" /> {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>

                      <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {/* 5. BACK TO GUIDES */}
          <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to All Travel Guides
            </Link>
          </div>

        </main>
      </div>
    </>
  );
};

export default DestinationHub;