import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Mail, ChevronRight, ChevronLeft, Sparkles, ArrowUpRight } from 'lucide-react';
import { MOCK_BLOG_POSTS } from '../data/mockBlogPosts';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/seo/SEO';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Newsletter State
  const [newsletterStatus, setNewsletterStatus] = useState<'success' | 'error' | null>(null);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Use the all-inclusive MOCK_BLOG_POSTS array
  const allPosts = MOCK_BLOG_POSTS;

  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const post = allPosts[currentIndex];
  
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [slug]);

  // INVALID SLUG: Return noindex, nofollow and skip JSON-LD schema generation
  if (!post) {
    return (
      <>
        <SEO 
          title="Article Not Found | FlySava Blog" 
          description="The requested article could not be found." 
          preventIndex={true} 
        />
        <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-slate-900 font-sans p-4">
          <div className="text-center p-8 bg-white rounded-3xl border border-[#E5E7EB] shadow-xl max-w-md">
            <h1 className="text-2xl font-black mb-4">Article not found.</h1>
            <button 
              type="button"
              onClick={() => navigate('/blog')}
              className="px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-blue-600/20 cursor-pointer"
            >
              Return to Blog
            </button>
          </div>
        </div>
      </>
    );
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    setNewsletterStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
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

  // Dynamic Date and Canonical Resolution
  const publishedDate = post.publishedDate;
  const modifiedDate = post.lastUpdated || post.publishedDate;
  const canonicalUrl = `https://flysava.com/blog/${post.slug}`;
  const authorName = post.author || "FlySava Editorial Team";

  // Dynamic Article Schema combining BlogPosting and BreadcrumbList via @graph
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        },
        "headline": post.title,
        "description": post.seoDescription || post.excerpt,
        "url": canonicalUrl,
        "image": post.image,
        "author": {
          "@type": "Organization",
          "name": authorName,
          "url": "https://flysava.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "FlySava",
          "url": "https://flysava.com"
        },
        ...(publishedDate && { "datePublished": publishedDate }),
        ...(modifiedDate && { "dateModified": modifiedDate })
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
            "name": "Blog",
            "item": "https://flysava.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title={`${post.title} | FlySava Blog`}
        description={post.seoDescription || post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        jsonLd={articleJsonLd}
      />
      
      <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans pb-24 relative selection:bg-blue-100 selection:text-blue-900">
        
        {/* Sticky Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1.5 bg-[#2563EB] origin-left z-50 shadow-xs" 
          style={{ scaleX }} 
        />

        {/* Hero Cover Header */}
        <div className="h-[55vh] md:h-[65vh] w-full relative bg-slate-950 overflow-hidden">
          <img 
            src={`${post.image}${post.image.includes('?') ? '&' : '?'}w=1200&q=80&auto=format&fit=crop`} 
            alt={post.title} 
            fetchPriority="high"
            loading="eager"
            decoding="async" 
            width="1200"
            height="650"
            className="w-full h-full object-cover brightness-[0.88] contrast-[1.05]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-slate-950/40 to-slate-950/20 z-10" />
          
          <button 
            type="button"
            onClick={() => navigate(-1)} 
            className="absolute top-24 left-4 md:left-8 z-30 flex items-center px-4 py-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full text-slate-900 font-extrabold text-xs transition-all shadow-md hover:scale-105 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2 text-slate-900" /> All Guides
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36 md:-mt-52 relative z-20 flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* Left Column: Article Body */}
          <main className="lg:w-[68%] max-w-[840px] mx-auto lg:mx-0">
            
            <div className="bg-white rounded-[24px] border border-[#E5E7EB] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12">
              
              {/* Header Details */}
              <header className="mb-10 border-b border-[#E5E7EB] pb-8">
                <span className="inline-block bg-blue-50 text-[#2563EB] px-3.5 py-1 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 border border-blue-200/60 shadow-2xs">
                  {post.category}
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-[1.12] tracking-tight text-slate-900">
                  {post.title}
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 border-l-4 border-[#2563EB] pl-4 italic">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium text-xs pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-black text-sm shadow-md shadow-blue-600/20">
                      {authorName.charAt(0)}
                    </div>
                    <div>
                      <span className="block text-slate-900 font-extrabold text-xs">By {authorName}</span>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest">Editorial Team</span>
                    </div>
                  </div>
                  <span className="flex items-center text-xs text-slate-500 font-semibold"><Calendar className="w-4 h-4 mr-1.5 text-[#2563EB]" /> {publishedDate}</span>
                  <span className="flex items-center text-xs text-slate-500 font-semibold"><Clock className="w-4 h-4 mr-1.5 text-[#2563EB]" /> {post.readTime}</span>
                </div>
              </header>

              {/* Prose Article HTML Content */}
              <article 
                className="prose prose-slate prose-lg max-w-none text-slate-700
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
                prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:mt-10 [&_h2]:mb-5 [&_h2]:text-slate-900
                [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-slate-900
                prose-a:text-[#2563EB] prose-a:font-bold prose-a:no-underline hover:prose-a:underline transition-colors
                prose-strong:text-slate-900 prose-strong:font-black
                prose-ul:text-slate-600 prose-ul:my-6 prose-li:my-2 prose-li:leading-relaxed

                [&_span]:!text-slate-800 [&_strong]:!text-slate-900 [&_b]:!text-slate-900 [&_p]:!text-slate-600 [&_li]:!text-slate-600

                [&_.in-article-img]:w-full [&_.in-article-img]:h-[280px] md:[&_.in-article-img]:h-[420px] [&_.in-article-img]:object-cover [&_.in-article-img]:rounded-2xl [&_.in-article-img]:my-8 [&_.in-article-img]:shadow-xs [&_.in-article-img]:border [&_.in-article-img]:border-[#E5E7EB]

                [&_.editorial-quote]:border-l-4 [&_.editorial-quote]:border-[#2563EB] [&_.editorial-quote]:pl-6 [&_.editorial-quote]:my-8 [&_.editorial-quote]:italic [&_.editorial-quote]:text-xl [&_.editorial-quote]:!text-slate-800 [&_.editorial-quote]:font-serif

                [&_.flight-tips-card]:!bg-blue-50/90 [&_.flight-tips-card]:!border [&_.flight-tips-card]:!border-blue-200 [&_.flight-tips-card]:!p-6 [&_.flight-tips-card]:!rounded-2xl [&_.flight-tips-card]:!my-8 [&_.flight-tips-card_*]:!text-slate-800 [&_.flight-tips-card_h3]:!text-slate-900 [&_.flight-tips-card_p]:!text-slate-600
                
                [&_.destination-card]:!bg-slate-50 [&_.destination-card]:!border [&_.destination-card]:!border-[#E5E7EB] [&_.destination-card]:!p-6 [&_.destination-card]:!rounded-2xl [&_.destination-card]:!my-8 [&_.destination-card_*]:!text-slate-800 [&_.destination-card_h3]:!text-slate-900
                
                [&_.budget-card]:!bg-emerald-50/80 [&_.budget-card]:!border [&_.budget-card]:!border-emerald-200 [&_.budget-card]:!p-6 [&_.budget-card]:!rounded-2xl [&_.budget-card]:!my-8 [&_.budget-card_*]:!text-emerald-950 [&_.budget-card_h3]:!text-emerald-950

                [&_details]:!bg-slate-50 [&_details]:!p-4 [&_details]:!rounded-xl [&_details]:!mb-3 [&_details]:!border [&_details]:!border-[#E5E7EB] hover:[&_details]:!border-blue-300
                [&_summary]:!font-extrabold [&_summary]:!text-base [&_summary]:!text-slate-900 [&_summary]:!outline-none [&_summary]:!cursor-pointer"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Profile Banner */}
              <div className="mt-12 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] flex flex-col md:flex-row items-center md:items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-md shadow-blue-600/20">
                  {authorName.charAt(0)}
                </div>
                <div className="text-center md:text-left space-y-1">
                  <span className="text-[#2563EB] font-extrabold uppercase tracking-widest text-[10px] block">Written By</span>
                  <h3 className="text-lg font-black text-slate-900">{authorName}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-lg">
                    Travel expert, flight hacker, and global nomad. Exploring the world to bring you the best strategies for affordable luxury and seamless adventures.
                  </p>
                  <button 
                    type="button"
                    onClick={() => navigate(-1)} 
                    className="text-[#2563EB] font-bold hover:text-blue-700 text-xs border-b border-blue-600/40 pb-0.5 inline-flex items-center gap-1 cursor-pointer pt-2"
                  >
                    View all articles <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Prev/Next Navigation */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <div 
                  onClick={() => navigate(`/blog/${prevPost.slug}`)}
                  className="group cursor-pointer p-5 bg-white rounded-2xl border border-[#E5E7EB] hover:border-blue-500/80 transition-all text-left shadow-2xs hover:shadow-md"
                >
                  <span className="flex items-center text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1"><ChevronLeft className="w-4 h-4 mr-1 text-slate-400" /> Previous Article</span>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-[#2563EB] line-clamp-1 leading-snug">{prevPost.title}</h4>
                </div>
              ) : <div />}
              
              {nextPost ? (
                <div 
                  onClick={() => navigate(`/blog/${nextPost.slug}`)}
                  className="group cursor-pointer p-5 bg-white rounded-2xl border border-[#E5E7EB] hover:border-blue-500/80 transition-all text-right shadow-2xs hover:shadow-md"
                >
                  <span className="flex items-center justify-end text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">Next Article <ChevronRight className="w-4 h-4 ml-1 text-slate-400" /></span>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-[#2563EB] line-clamp-1 leading-snug">{nextPost.title}</h4>
                </div>
              ) : <div />}
            </div>

          </main>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:w-[32%]">
            <div className="sticky top-24 space-y-6">
              
              {/* Newsletter Subscription Card */}
              <div className="bg-gradient-to-br from-[#2563EB] via-blue-600 to-indigo-700 p-7 rounded-[24px] text-white text-center shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
                <Mail className="w-9 h-9 text-blue-100 mx-auto mb-3 relative z-10" />
                <h3 className="text-xl font-black text-white mb-1 relative z-10">Fly Smarter</h3>
                <p className="text-blue-100 text-xs leading-relaxed mb-5 relative z-10 opacity-90">
                  Join 50,000+ travelers receiving weekly flight hacks, mistake airfares, and secret destination guides.
                </p>
                
                <form onSubmit={handleSubscribe} className="space-y-2.5 relative z-10">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Newsletter Subscription" />
                  <input type="hidden" name="_template" value="table" />
                  
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Your email address" 
                    disabled={isSubmittingNewsletter}
                    className="w-full bg-white/15 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder-blue-100 text-xs focus:outline-none focus:ring-2 focus:ring-white/50 transition-all disabled:opacity-50" 
                  />
                  <button 
                    type="submit" 
                    disabled={isSubmittingNewsletter}
                    className="w-full flex items-center justify-center bg-white text-[#2563EB] hover:bg-blue-50 font-black py-2.5 rounded-xl transition-all shadow-md uppercase tracking-wider text-xs disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmittingNewsletter ? 'Joining...' : 'Join the Club'}
                  </button>

                  <AnimatePresence>
                    {newsletterStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="text-emerald-200 text-xs font-bold mt-2"
                      >
                        Welcome to the club!
                      </motion.div>
                    )}
                    {newsletterStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, height: 0 }} 
                        className="text-rose-200 text-xs font-bold mt-2"
                      >
                        Oops! Something went wrong.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>

              {/* Table of Contents */}
              <div className="bg-white p-6 rounded-[24px] border border-[#E5E7EB] shadow-2xs hidden lg:block">
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" /> In This Article
                </span>
                <ul className="space-y-2.5 text-slate-600 font-semibold text-xs">
                  <li className="hover:text-[#2563EB] cursor-pointer transition-colors border-l-2 border-transparent hover:border-[#2563EB] pl-3 py-0.5">Destination Insights</li>
                  <li className="hover:text-[#2563EB] cursor-pointer transition-colors border-l-2 border-transparent hover:border-[#2563EB] pl-3 py-0.5">Where to Stay</li>
                  <li className="hover:text-[#2563EB] cursor-pointer transition-colors border-l-2 border-transparent hover:border-[#2563EB] pl-3 py-0.5">Budget Expectations</li>
                  <li className="hover:text-[#2563EB] cursor-pointer transition-colors border-l-2 border-transparent hover:border-[#2563EB] pl-3 py-0.5">Flight Booking Strategies</li>
                  <li className="hover:text-[#2563EB] cursor-pointer transition-colors border-l-2 border-transparent hover:border-[#2563EB] pl-3 py-0.5">Frequently Asked Questions</li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </>
  );
};

export default BlogPost;