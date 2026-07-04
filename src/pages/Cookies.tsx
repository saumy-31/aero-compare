import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cookie, ArrowRight } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-20 transition-colors">
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <div className="w-16 h-16 bg-orange-50 dark:bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Cookie className="w-8 h-8" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
        >
          Cookie Policy
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-500 dark:text-gray-400 mb-6"
        >
          Information about cookies and tracking technologies used on FlySava.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-bold text-gray-400 uppercase tracking-wider"
        >
          Last Updated: July 2026
        </motion.p>
      </div>

      {/* Main Layout Grid */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 bg-white dark:bg-dark-card p-6 rounded-3xl border border-gray-100 dark:border-dark-border shadow-sm">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-wider text-sm">Contents</h3>
              <nav className="space-y-2">
                {sections.map((sec) => (
                  <a 
                    key={sec.id} 
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 font-medium transition-colors py-1"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white dark:bg-dark-card rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-dark-border shadow-sm space-y-12 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              
              <section id="intro" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                <p className="mb-4">This Cookie Policy explains how Flysava uses cookies and similar tracking technologies on flysava.com.</p>
                <p>By continuing to use the website, you agree that cookies may be used as described in this policy, unless you disable them through your browser or available consent settings.</p>
              </section>

              <section id="what-are" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. What Are Cookies</h2>
                <p className="mb-4">Cookies are small text files stored on your device when you visit a website. They help websites remember information, improve performance, understand visitor behavior, and support certain features.</p>
                <p>Similar technologies may include pixels, tags, local storage, scripts, and device identifiers.</p>
              </section>

              <section id="types" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Types of Cookies We May Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                    <p>These cookies are needed for the website to work properly. They may support security, page loading, basic navigation, forms, and technical performance.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Analytics Cookies</h3>
                    <p>Analytics cookies help us understand how visitors use Flysava, including which pages are visited, how users arrive at the site, and how the website performs. This helps us improve the website experience.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Cookies</h3>
                    <p>Performance cookies may help us measure speed, errors, page behavior, and technical issues so we can keep the website smooth and reliable.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Affiliate and Tracking Cookies</h3>
                    <p>Affiliate cookies may be used when users click travel links, widgets, advertisements, or partner offers. These cookies help partners identify referrals and may allow Flysava to earn a commission if a user completes a booking.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Advertising and Personalization Cookies</h3>
                    <p>If advertising or remarketing tools are used, cookies may help show relevant content, measure ad performance, or understand user interests.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Third-Party Widget Cookies</h3>
                    <p>Travel search widgets, maps, booking tools, videos, or embedded content from third-party providers may place their own cookies. These cookies are controlled by the third-party provider, not Flysava.</p>
                  </div>
                </div>
              </section>

              <section id="why-use" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Why We Use Cookies</h2>
                <p className="mb-4">Flysava may use cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Keep the website functional and secure</li>
                  <li>Improve website speed and performance</li>
                  <li>Understand visitor behavior</li>
                  <li>Measure content and page performance</li>
                  <li>Support travel comparison widgets and affiliate links</li>
                  <li>Improve user experience across devices</li>
                  <li>Analyze marketing and referral performance</li>
                </ul>
              </section>

              <section id="third-party" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Cookies</h2>
                <p className="mb-4">Some cookies may be placed by third-party services used on Flysava, such as analytics providers, affiliate partners, travel search widgets, advertising platforms, hosting services, or embedded content providers.</p>
                <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-2xl mb-4">
                  <p className="font-medium text-orange-900 dark:text-orange-100">These third parties may collect and use information according to their own privacy and cookie policies. Flysava does not control third-party cookie practices.</p>
                </div>
              </section>

              <section id="managing" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Managing Cookies</h2>
                <p className="mb-4">You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>View cookies stored on your device</li>
                  <li>Delete existing cookies</li>
                  <li>Block all cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p>If you disable cookies, some features of Flysava or third-party travel widgets may not work correctly.</p>
              </section>

              <section id="consent" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Consent Tools</h2>
                <p className="mb-4">If Flysava adds a cookie consent banner or preference center, you may be able to manage certain cookie categories directly through that tool.</p>
                <p>Some cookies that are strictly necessary for website operation may remain active even if optional cookies are disabled.</p>
              </section>

              <section id="updates" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Updates to This Cookie Policy</h2>
                <p>We may update this Cookie Policy from time to time. Updates will be posted on this page with a revised "Last updated" date.</p>
              </section>

              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact</h2>
                <p>For questions about this Cookie Policy, contact:</p>
                <p className="mt-4 font-bold text-gray-900 dark:text-white">Flysava<br/>Email: <a href="mailto:contact@flysava.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@flysava.com</a></p>
              </section>
              
            </div>

            {/* Bottom Contact CTA */}
            <div className="mt-12 bg-orange-600 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-orange-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions about this policy?</h2>
              <p className="text-orange-100 mb-8 text-lg">Contact us at: <a href="mailto:contact@flysava.com" className="font-bold underline hover:text-white">contact@flysava.com</a></p>
              <button 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Contact Support <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};