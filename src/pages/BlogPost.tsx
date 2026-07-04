import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = MOCK_BLOG_POSTS.find(p => p.slug === slug);
  const relatedPosts = MOCK_BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center dark:bg-dark-bg">
        <h2 className="text-2xl font-bold dark:text-white mb-4">Article not found</h2>
        <button onClick={() => navigate('/blog')} className="text-blue-500 hover:underline">
          &larr; Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg transition-colors pb-24">
      
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <div className="absolute inset-0 bg-gray-900/40 z-10" />
        <img 
          src={post.image.replace('w=800&h=600', 'w=1600&h=800')} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/blog')}
          className="absolute top-24 left-4 md:left-8 z-20 flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white font-medium transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Blog
        </button>
      </div>

      {/* Article Content Wrapper */}
      <div className="container mx-auto px-4 max-w-3xl -mt-24 relative z-20">
        
        {/* Article Header Card */}
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border p-8 md:p-12 mb-10">
          <div className="flex items-center space-x-4 mb-6 text-sm font-medium">
            <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 gap-4">
            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.publishedDate}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</span>
          </div>
        </div>

        {/* HTML Content Render */}
        <article 
          className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:dark:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>p]:mb-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </div>

      {/* Related Articles Section */}
      <div className="container mx-auto px-4 max-w-7xl mt-24 pt-12 border-t border-gray-100 dark:border-dark-border">
        <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-8">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map(related => (
            <div 
              key={related.id}
              onClick={() => navigate(`/blog/${related.slug}`)}
              className="group cursor-pointer"
            >
              <div className="h-48 overflow-hidden rounded-2xl mb-4 bg-gray-100 dark:bg-gray-800">
                <img 
                  src={related.image} 
                  alt={related.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors line-clamp-2 mb-2">
                {related.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                {related.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};