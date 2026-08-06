import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const Cookies = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'what-are', title: '2. What Are Cookies' },
    { id: 'types', title: '3. Cookie Types' },
    { id: 'why-use', title: '4. Why We Use Cookies' },
    { id: 'third-party', title: '5. Third-Party Cookies' },
    { id: 'managing', title: '6. Managing Cookies' },
    { id: 'consent', title: '7. Consent Tools' },
    { id: 'updates', title: '8. Updates' },
    { id: 'contact', title: '9. Contact' }
  ];

  const cookiesJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy | FlySava",
    "description": "Learn about the cookies and tracking technologies used on FlySava and how to manage your preferences.",
    "url": "https://flysava.com/cookies"
  };

  return (
    <>
      <SEO 
        title="Cookie Policy | FlySava"
        description="Learn about the cookies and tracking technologies used on FlySava and how you can manage your preferences for a better browsing experience."
        canonicalUrl="/cookies"
        jsonLd={cookiesJsonLd}
      />
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
        
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 w-full bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/80 mb-6 shadow-sm"
            >
              <Cookie className="w-3.5 h-3.5 text-amber-600" /> Tracking & Transparency
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Cookie <span className="text-blue-600">Policy</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
            >
              Information about cookies, tracking pixels, and performance technologies used across FlySava.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4"
            >
              Last Updated: August 2026
            </motion.p>
          </div>
        </section>

        {/* MAIN LAYOUT GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Sticky TOC Sidebar */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Table of Contents
                </span>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl px-3 py-2 transition-all"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Body */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-12 text-slate-600 leading-relaxed text-base sm:text-lg font-normal">
                
                <section id="intro" className="scroll-mt-28">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">1. Introduction</h2>
                  <p className="mb-4">This Cookie Policy explains how FlySava uses cookies and similar tracking technologies on flysava.com.</p>
                  <p>By continuing to use the website, you agree that cookies may be used as described in this policy, unless you disable them through your browser or available consent settings.</p>
                </section>

                <section id="what-are" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">2. What Are Cookies</h2>
                  <p className="mb-4">Cookies are small text files stored on your device when you visit a website. They help websites remember information, improve performance, understand visitor behavior, and support certain features.</p>
                  <p>Similar technologies may include pixels, tags, local storage, scripts, and device identifiers.</p>
                </section>

                <section id="types" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6 tracking-tight">3. Types of Cookies We May Use</h2>
                  
                  <div className="space-y-6 text-base">
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Essential Cookies</h3>
                      <p className="text-slate-600 text-sm">These cookies are needed for the website to work properly. They may support security, page loading, basic navigation, forms, and technical performance.</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Analytics Cookies</h3>
                      <p className="text-slate-600 text-sm">Analytics cookies help us understand how visitors use FlySava, including which pages are visited, how users arrive at the site, and how the website performs. This helps us improve the website experience.</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Performance Cookies</h3>
                      <p className="text-slate-600 text-sm">Performance cookies may help us measure speed, errors, page behavior, and technical issues so we can keep the website smooth and reliable.</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Affiliate and Tracking Cookies</h3>
                      <p className="text-slate-600 text-sm">Affiliate cookies may be used when users click travel links, widgets, advertisements, or partner offers. These cookies help partners identify referrals and may allow FlySava to earn a commission if a user completes a booking.</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Advertising and Personalization Cookies</h3>
                      <p className="text-slate-600 text-sm">If advertising or remarketing tools are used, cookies may help show relevant content, measure ad performance, or understand user interests.</p>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/60">
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Third-Party Widget Cookies</h3>
                      <p className="text-slate-600 text-sm">Travel search widgets, maps, booking tools, videos, or embedded content from third-party providers may place their own cookies. These cookies are controlled by the third-party provider, not FlySava.</p>
                    </div>
                  </div>
                </section>

                <section id="why-use" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">4. Why We Use Cookies</h2>
                  <p className="mb-4">FlySava may use cookies to:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-4 text-sm sm:text-base">
                    <li>Keep the website functional and secure</li>
                    <li>Improve website speed and performance</li>
                    <li>Understand visitor behavior and search trends</li>
                    <li>Measure content and page performance</li>
                    <li>Support travel comparison widgets and affiliate links</li>
                    <li>Improve user experience across mobile and desktop devices</li>
                    <li>Analyze marketing and referral performance</li>
                  </ul>
                </section>

                <section id="third-party" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">5. Third-Party Cookies</h2>
                  <p className="mb-4">Some cookies may be placed by third-party services used on FlySava, such as analytics providers, affiliate partners, travel search widgets, advertising platforms, hosting services, or embedded content providers.</p>
                  <div className="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-2xl">
                    <p className="font-medium text-amber-950 text-sm">These third parties may collect and use information according to their own privacy and cookie policies. FlySava does not control third-party cookie practices.</p>
                  </div>
                </section>

                <section id="managing" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">6. Managing Cookies</h2>
                  <p className="mb-4">You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
                  <ul className="list-disc pl-5 space-y-2 mb-6 text-sm sm:text-base">
                    <li>View cookies stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block all cookies</li>
                    <li>Block third-party cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                  <p className="text-sm text-slate-500">If you disable cookies, some features of FlySava or third-party travel widgets may not work correctly.</p>
                </section>

                <section id="consent" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">7. Consent Tools</h2>
                  <p className="mb-4">If FlySava adds a cookie consent banner or preference center, you may be able to manage certain cookie categories directly through that tool.</p>
                  <p className="text-sm text-slate-500">Some cookies that are strictly necessary for website operation may remain active even if optional cookies are disabled.</p>
                </section>

                <section id="updates" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">8. Updates to This Cookie Policy</h2>
                  <p className="text-sm sm:text-base">We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised "Last updated" date.</p>
                </section>

                <section id="contact" className="scroll-mt-28 pt-8 border-t border-slate-100">
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">9. Contact</h2>
                  <p className="text-sm sm:text-base mb-2">For questions about this Cookie Policy, contact:</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 inline-block">
                    <p className="font-bold text-slate-900 text-sm">FlySava Support</p>
                    <p className="text-xs text-slate-500">Email: <a href="mailto:contact@flysava.com" className="text-blue-600 font-bold hover:underline">contact@flysava.com</a></p>
                  </div>
                </section>
                
              </div>

              {/* Bottom Contact CTA */}
              <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-center shadow-xl text-white">
                <ShieldCheck className="w-10 h-10 text-blue-100 mx-auto mb-4" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">Questions About This Policy?</h2>
                <p className="text-blue-100 mb-8 text-sm sm:text-base font-normal">Our privacy and support team is ready to answer any questions.</p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-3.5 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-2xl transition-all shadow-md text-sm"
                >
                  Contact Support <ArrowRight className="w-4 h-4 ml-2 text-blue-600" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};