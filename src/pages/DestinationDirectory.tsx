import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Compass, ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import { ALL_DESTINATION_CLUSTERS, MIN_ARTICLES_FOR_DESTINATION_HUB } from '../data/mockDestinationClusters';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { SEO } from '../components/seo/SEO';

export const DestinationDirectory: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 1. Calculate live article counts dynamically for every configured destination
  const destinationsWithCounts = useMemo(() => {
    const countsByNormalizedName: Record<string, number> = {};

    MOCK_BLOG_POSTS.forEach((post) => {
      const destList: string[] = Array.isArray(post.destinations) && post.destinations.length > 0
        ? post.destinations
        : (post.destination ? [post.destination] : []);

      destList.forEach((rawDest) => {
        const norm = rawDest.toLowerCase().trim();
        countsByNormalizedName[norm] = (countsByNormalizedName[norm] || 0) + 1;
      });
    });

    return Object.values(ALL_DESTINATION_CLUSTERS)
      .map((cluster) => {
        const normName = cluster.name.toLowerCase().trim();
        const articleCount = countsByNormalizedName[normName] || 0;
        const isFeaturedHub = articleCount >= MIN_ARTICLES_FOR_DESTINATION_HUB || ['japan', 'thailand', 'uae'].includes(cluster.slug);
        return {
          ...cluster,
          articleCount,
          isFeaturedHub,
        };
      })
      .sort((a, b) => b.articleCount - a.articleCount);
  }, []);

  // 2. Filter destinations live based on search query
  const filteredDestinations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return destinationsWithCounts;

    return destinationsWithCounts.filter((dest) => {
      return (
        dest.name.toLowerCase().includes(query) ||
        dest.country.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query)
      );
    });
  }, [destinationsWithCounts, searchQuery]);

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
        "name": "Destinations",
        "item": "https://flysava.com/blog/destinations"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Travel Destinations & Guides | FlySava"
        description="Explore FlySava travel guides covering destinations, cities, food, culture, itineraries and practical travel inspiration around the world."
        canonicalUrl="/blog/destinations"
        jsonLd={breadcrumbJsonLd}
      />

      <div className="min-h-screen bg-[#F4F6F9] text-slate-900 font-sans pb-24 selection:bg-blue-600 selection:text-white">
        {/* BREADCRUMB */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/blog" className="hover:text-blue-600 transition-colors">Travel Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-black">Destinations</span>
          </nav>
        </div>

        {/* HERO */}
        <section className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="bg-white rounded-3xl sm:rounded-[36px] border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-2xs space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-black uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Editorial Library</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Explore Destinations
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
              Discover travel guides, city guides, food, culture, itineraries and practical travel inspiration from around the world.
            </p>

            {/* SEARCH INPUT */}
            <div className="pt-2 max-w-md">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search destinations by country or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10 transition-all placeholder:text-slate-400 shadow-2xs"
                />
              </div>
            </div>
          </div>
        </section>

        {/* DESTINATIONS GRID */}
        <main className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
              ALL DESTINATIONS
            </span>
            <span className="text-xs font-bold text-slate-400">
              Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Destination' : 'Destinations'}
            </span>
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900">No destinations found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We couldn't find any destination matching "{searchQuery}". Try searching for another country or region.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDestinations.map((dest) => (
                <article
                  key={dest.slug}
                  onClick={() => navigate(`/blog/destinations/${dest.slug}`)}
                  className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[9px] font-black uppercase tracking-wider text-slate-800 shadow-2xs border border-white/40">
                        {dest.articleCount} {dest.articleCount === 1 ? 'Travel Guide' : 'Travel Guides'}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                        {dest.country}
                      </span>
                      <h2 className="text-xl font-black text-white leading-tight">
                        {dest.name}
                      </h2>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                      {dest.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                      <span>View Guides</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="pt-8 border-t border-slate-200/80 flex items-center justify-between">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-600 hover:text-blue-600 transition-colors"
            >
              &larr; Back to Travel Guides
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default DestinationDirectory;