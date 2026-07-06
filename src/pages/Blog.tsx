import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Clock, User, TrendingUp, Sparkles } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion, AnimatePresence } from 'framer-motion';

export const Blog = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Destinations', 'City Guides', 'Travel Tips'];

  const filteredPosts = MOCK_BLOG_POSTS.filter(post => {
    const matchesCategory = filter === 'All' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = MOCK_BLOG_POSTS[0];
  const gridPosts = filteredPosts;

  return (
    <div className="min-h-screen bg-[#071226] pt-24 pb-24 text-white font-sans selection:bg-blue-500/30">
      
      {/* Header & Search */}
      <div className="container mx-auto px-4 max-w-7xl pt-16 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 tracking-tight drop-shadow-lg"
        >
          FlySava <span className="text-blue-500">Journal</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium"
        >
          Expert insights, destination guides, and strategies to fly further for less.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto mb-12"
        >
          {/* Fixed Search Icon Positioning */}
          <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          
          {/* Fixed Input Padding */}
          <input 
            type="text" 
            placeholder="Search articles, destinations, or tips..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0c1a33] text-white py-5 md:py-6 pr-6 pl-14 md:pl-16 rounded-full border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg shadow-2xl placeholder-gray-600"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              className={`px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-[#0c1a33] text-gray-400 hover:text-white border border-white/5 hover:border-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Featured Article (Only show if no search/filter) */}
        {filter === 'All' && searchQuery === '' && (
          <div className="mb-24">
            <motion.article 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => navigate(`/blog/${featuredPost.slug}`)}
              className="group cursor-pointer bg-[#0c1a33] rounded-[2rem] md:rounded-[3rem] border border-white/10 overflow-hidden relative shadow-2xl block"
            >
              <div className="absolute top-8 left-8 z-20 flex items-center bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                <Sparkles className="w-3 h-3 mr-2" /> Editor's Pick
              </div>
              <div className="h-[500px] lg:h-[600px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-[#071226]/50 to-transparent z-10" />
                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-20 max-w-4xl">
                <span className="text-blue-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block drop-shadow-md">{featuredPost.category}</span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] group-hover:text-blue-400 transition-colors drop-shadow-lg">{featuredPost.title}</h2>
                <p className="text-gray-300 text-lg md:text-xl mb-8 line-clamp-2 md:line-clamp-3 leading-relaxed font-medium">{featuredPost.excerpt}</p>
                <div className="flex items-center text-gray-300 gap-6 text-sm font-bold uppercase tracking-wider">
                  <span className="flex items-center"><User className="w-4 h-4 mr-2 text-blue-500" /> {featuredPost.author}</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {featuredPost.readTime}</span>
                </div>
              </div>
            </motion.article>
          </div>
        )}

        {/* Main Grid */}
        <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <h2 className="text-3xl font-black flex items-center"><TrendingUp className="text-blue-500 mr-4 w-8 h-8"/> Latest Intelligence</h2>
          <span className="text-gray-500 font-black tracking-widest uppercase text-sm">{filteredPosts.length} Articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {gridPosts.map((post) => (
              <motion.article 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={post.id}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="group cursor-pointer bg-[#0c1a33] rounded-[2rem] border border-white/5 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col shadow-xl hover:-translate-y-2"
              >
                <div className="h-72 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className="absolute top-5 right-5 bg-[#071226]/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold flex items-center text-white border border-white/10">
                    <Clock className="w-3 h-3 mr-2 text-blue-400" /> {post.readTime}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <span className="text-blue-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4">{post.category}</span>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors leading-tight">{post.title}</h2>
                  <p className="text-gray-400 text-base mb-8 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-gray-300">{post.author}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};