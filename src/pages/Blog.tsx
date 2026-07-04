import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion } from 'framer-motion';

export const Blog = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-20 transition-colors">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header (SEO H1) */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            FlySava Travel Blog
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Travel guides, flight tips, destination insights, and money-saving advice for modern travelers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_BLOG_POSTS.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(`/blog/${post.slug}`)}
              className="group cursor-pointer bg-white dark:bg-dark-card rounded-2xl border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/95 dark:bg-gray-900/95 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 dark:text-white shadow-sm flex items-center">
                    <BookOpen className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                {/* Footer Info */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center text-xs text-gray-400 font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    {post.readTime}
                  </div>
                  <span className="text-blue-500 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};