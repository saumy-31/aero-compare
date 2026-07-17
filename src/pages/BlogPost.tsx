import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Mail, ChevronRight, ChevronLeft } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/seo/SEO';

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Newsletter State
  const [newsletterStatus, setNewsletterStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const currentIndex = MOCK_BLOG_POSTS.findIndex(p => p.slug === slug);
  const post = MOCK_BLOG_POSTS[currentIndex];
  
  const prevPost = currentIndex > 0 ? MOCK_BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < MOCK_BLOG_POSTS.length - 1 ? MOCK_BLOG_POSTS[currentIndex + 1] : null;

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [slug]);

  if (!post) return (
    <div className="min-h-screen bg-[#071226] flex items-center justify-center text-white">
      <h1 className="text-2xl font-bold">Article not found.</h1>
    </div>
  );

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    setNewsletterStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Convert form data to a plain JSON object
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      // Pointing directly to the requested email with JSON headers
      const response = await fetch("https://formsubmit.co/ajax/carrers@flysava.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json,
      });

      if (response.ok) {
        setNewsletterStatus('success');
        form.reset();
      } else {
        setNewsletterStatus('error');
      }
    } catch (error) {
      console.error(error);
      setNewsletterStatus('error');
    } finally {
      setIsSubmittingNewsletter(false);
      setTimeout(() => setNewsletterStatus(null), 5000);
    }
  };

  // Enhanced JSON-LD with Graph and BreadcrumbList for Sitelink generation
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://flysava.com/blog/${post.slug}`
        },
        "headline": post.title,
        "image": post.image,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "FlySava",
          "logo": {
            "@type": "ImageObject",
            "url": "https://flysava.com/logo.png"
          }
        },
        "datePublished": post.publishedDate,
        "dateModified": post.publishedDate, // Fallback if no specific updated date exists
        "description": post.excerpt
      },
      {
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
            "name": post.title,
            "item": `https://flysava.com/blog/${post.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${post.title} | FlySava`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        image={post.image}
        jsonLd={articleJsonLd}
        type="article"
      />
      <div className="min-h-screen bg-[#071226] text-white font-sans pb-24 relative selection:bg-blue-500/30">
        {/* Sticky Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1.5 bg-blue-500 origin-left z-50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
          style={{ scaleX }} 
        />

        {/* Hero Image Section */}
        <div className="h-[70vh] md:h-[85vh] w-full relative">
          <div className="absolute inset-0 bg-gray-900/20 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071226] via-[#071226]/80 to-transparent z-10" />
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          
          <button 
            onClick={() => navigate('/blog', { state: { fromPost: true } })} 
            className="absolute top-24 left-4 md:left-8 z-30 flex items-center px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white font-bold transition-all border border-white/10 hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> All Guides
          </button>
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-7xl -mt-64 md:-mt-80 relative z-20 flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Article Body */}
          <main className="lg:w-[70%] max-w-[850px] mx-auto lg:mx-0">
            
            {/* Article Header */}
            <header className="mb-16">
              <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-blue-500/30">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight text-white">
                {post.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed mb-10 border-l-4 border-blue-500 pl-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-8 text-gray-400 font-medium border-y border-white/10 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0c1a33] border border-white/10 flex items-center justify-center text-xl font-black text-blue-400 shadow-inner">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-white font-bold text-sm">By {post.author}</span>
                    <span className="block text-xs uppercase tracking-wider">Editorial Team</span>
                  </div>
                </div>
                <span className="flex items-center text-sm"><Calendar className="w-4 h-4 mr-2 text-blue-500" /> {post.publishedDate}</span>
                <span className="flex items-center text-sm"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {post.readTime}</span>
              </div>
            </header>

            <article 
              className="prose prose-invert prose-lg md:prose-xl max-w-none
              prose-p:text-gray-300 prose-p:leading-[1.8] prose-p:mb-8 prose-p:text-[1.1rem] md:prose-p:text-[1.15rem]
              prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
              [&_h2]:text-3xl md:[&_h2]:text-4xl [&_h2]:mt-16 [&_h2]:mb-8
              [&_h3]:text-2xl [&_h3]:mt-10 [&_h3]:mb-6
              prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline hover:prose-a:text-blue-300 transition-colors
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-gray-300 prose-ul:my-8 prose-li:my-3 prose-li:leading-[1.8]
              [&_.in-article-img]:w-full [&_.in-article-img]:h-[300px] md:[&_.in-article-img]:h-[450px] [&_.in-article-img]:object-cover [&_.in-article-img]:rounded-[2rem] [&_.in-article-img]:my-16 [&_.in-article-img]:shadow-2xl [&_.in-article-img]:border [&_.in-article-img]:border-white/5
              [&_.editorial-quote]:border-l-4 [&_.editorial-quote]:border-blue-500 [&_.editorial-quote]:pl-8 md:[&_.editorial-quote]:pl-12 [&_.editorial-quote]:my-16 [&_.editorial-quote]:italic [&_.editorial-quote]:text-2xl md:[&_.editorial-quote]:text-3xl [&_.editorial-quote]:text-white [&_.editorial-quote]:font-serif [&_.editorial-quote]:leading-relaxed
              [&_.destination-card]:bg-[#0c1a33] [&_.destination-card]:p-8 md:[&_.destination-card]:p-10 [&_.destination-card]:rounded-[2rem] [&_.destination-card]:border [&_.destination-card]:border-white/10 [&_.destination-card]:my-12 [&_.destination-card]:shadow-xl
              [&_.destination-card_h3]:text-2xl [&_.destination-card_h3]:mt-0 [&_.destination-card_h3]:mb-6 [&_.destination-card_h3]:text-white
              [&_.budget-card]:bg-gradient-to-br [&_.budget-card]:from-[#0c1a33] [&_.budget-card]:to-[#071226] [&_.budget-card]:p-8 md:[&_.budget-card]:p-10 [&_.budget-card]:rounded-[2rem] [&_.budget-card]:border [&_.budget-card]:border-green-500/20 [&_.budget-card]:my-12 [&_.budget-card]:shadow-2xl
              [&_.budget-card_h3]:text-2xl [&_.budget-card_h3]:mt-0 [&_.budget-card_h3]:mb-6 [&_.budget-card_h3]:text-green-400
              [&_.flight-tips-card]:bg-blue-900/20 [&_.flight-tips-card]:p-8 md:[&_.flight-tips-card]:p-10 [&_.flight-tips-card]:rounded-[2rem] [&_.flight-tips-card]:border [&_.flight-tips-card]:border-blue-500/30 [&_.flight-tips-card]:my-12
              [&_.flight-tips-card_h3]:text-2xl [&_.flight-tips-card_h3]:mt-0 [&_.flight-tips-card_h3]:mb-4 [&_.flight-tips-card_h3]:text-blue-400
              [&_details]:bg-[#0c1a33] [&_details]:p-6 [&_details]:rounded-2xl [&_details]:mb-4 [&_details]:cursor-pointer [&_details]:border [&_details]:border-white/5 [&_details]:transition-all hover:[&_details]:border-blue-500/30
              [&_summary]:font-bold [&_summary]:text-lg md:[&_summary]:text-xl [&_summary]:text-white [&_summary]:outline-none [&_summary]:list-none [&_summary]:flex [&_summary]:justify-between [&_summary::-webkit-details-marker]:hidden
              [&_details_p]:mt-4 [&_details_p]:mb-0 [&_details_p]:text-gray-400 [&_details_p]:text-base"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Profile Card */}
            <div className="mt-16 bg-[#0c1a33] p-10 md:p-12 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-center md:items-start gap-10 shadow-2xl">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-[#071226] border-2 border-blue-500/30 flex items-center justify-center text-5xl font-black text-blue-400 flex-shrink-0 shadow-inner">
                {post.author.charAt(0)}
              </div>
              <div className="text-center md:text-left">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2 block">Written By</span>
                <h3 className="text-3xl font-black text-white mb-4">{post.author}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">Travel expert, flight hacker, and global nomad. Exploring the world to bring you the best strategies for affordable luxury and seamless adventures.</p>
                <button className="text-blue-400 font-bold hover:text-white transition-colors border-b-2 border-blue-500/30 hover:border-white pb-1">View all articles &rarr;</button>
              </div>
            </div>

            {/* Prev/Next Navigation */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost ? (
                <div 
                  onClick={() => navigate(`/blog/${prevPost.slug}`)}
                  className="group cursor-pointer p-8 bg-[#0c1a33] rounded-[2rem] border border-white/5 hover:border-blue-500/50 transition-all text-left shadow-lg"
                >
                  <span className="flex items-center text-xs font-black uppercase tracking-widest text-gray-500 mb-4"><ChevronLeft className="w-4 h-4 mr-2" /> Previous</span>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 line-clamp-2 leading-tight">{prevPost.title}</h4>
                </div>
              ) : <div />}
              
              {nextPost ? (
                <div 
                  onClick={() => navigate(`/blog/${nextPost.slug}`)}
                  className="group cursor-pointer p-8 bg-[#0c1a33] rounded-[2rem] border border-white/5 hover:border-blue-500/50 transition-all text-right shadow-lg"
                >
                  <span className="flex items-center justify-end text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Next <ChevronRight className="w-4 h-4 ml-2" /></span>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 line-clamp-2 leading-tight">{nextPost.title}</h4>
                </div>
              ) : <div />}
            </div>
          </main>

          {/* Right Column: Sidebar */}
          <aside className="lg:w-[30%]">
            <div className="sticky top-32 space-y-12">
              
              {/* Newsletter Subscription Widget */}
              <div className="bg-gradient-to-b from-[#0c1a33] to-[#071226] p-8 md:p-10 rounded-[2rem] border border-blue-500/20 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10" />
                <Mail className="w-12 h-12 text-blue-400 mx-auto mb-6 relative z-10" />
                <h3 className="text-3xl font-black text-white mb-4 relative z-10">Fly Smarter.</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 relative z-10">Join 50,000+ travelers receiving our weekly flight hacks, mistake fares, and secret destination guides.</p>
                
                <form onSubmit={handleSubscribe} className="space-y-4 relative z-10">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Newsletter Subscription" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Your email address" 
                    disabled={isSubmittingNewsletter}
                    className="w-full bg-[#071226] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50" 
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmittingNewsletter}
                    className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-xl transition-colors shadow-lg shadow-blue-900/50 uppercase tracking-wide text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmittingNewsletter ? 'Joining...' : 'Join the Club'}
                  </button>

                  <AnimatePresence>
                    {newsletterStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="text-green-400 text-sm font-bold mt-2"
                      >
                        Welcome to the club!
                      </motion.div>
                    )}
                    {newsletterStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="text-red-400 text-sm font-bold mt-2"
                      >
                        Oops! Something went wrong.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Quick Actions (Table of Contents proxy) */}
              <div className="bg-[#0c1a33] p-8 rounded-[2rem] border border-white/5 hidden lg:block">
                <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6">In This Article</h3>
                <ul className="space-y-4 text-gray-300 font-medium text-sm">
                  <li className="hover:text-blue-400 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500 pl-3">Destination Insights</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500 pl-3">Where to Stay</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500 pl-3">Budget Expectations</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500 pl-3">Flight Booking Strategies</li>
                  <li className="hover:text-blue-400 cursor-pointer transition-colors border-l-2 border-transparent hover:border-blue-500 pl-3">Frequently Asked Questions</li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </>
  );
};