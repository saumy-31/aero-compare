import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scale, ArrowRight } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

export const Terms = () => {
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
    { id: 'service', title: '2. Service Overview' },
    { id: 'third-party', title: '3. Third-Party Providers' },
    { id: 'affiliate', title: '4. Affiliate Disclosure' },
    { id: 'price', title: '5. Price Disclaimer' },
    { id: 'use', title: '6. Website Use' },
    { id: 'ip', title: '7. Intellectual Property' },
    { id: 'travel-info', title: '8. Travel Information' },
    { id: 'warranty', title: '9. No Warranty' },
    { id: 'liability', title: '10. Limitation of Liability' },
    { id: 'indemnification', title: '11. Indemnification' },
    { id: 'privacy', title: '12. Privacy' },
    { id: 'changes', title: '13. Changes to Terms' },
    { id: 'governing-law', title: '14. Governing Law' },
    { id: 'contact', title: '15. Contact' }
  ];

  const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Use | FlySava",
    "description": "Read the legal terms of use for FlySava. Understanding your rights and responsibilities when using our flight comparison platform.",
    "url": "https://flysava.com/terms"
  };

  return (
    <>
      <SEO 
        title="Terms of Use | FlySava"
        description="Legal information governing the use of FlySava. Please read our Terms of Use to understand your rights and responsibilities when using our flight comparison services."
        canonicalUrl="/terms"
        jsonLd={termsJsonLd}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-20 transition-colors">
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 max-w-4xl text-center mb-16">
          <div className="w-16 h-16 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8" />
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight"
          >
            Terms of Use
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 dark:text-gray-400 mb-6"
          >
            Legal information governing the use of FlySava.
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
                      className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-1"
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
                  <p className="mb-4">Welcome to Flysava. These Terms of Use govern your access to and use of the Flysava website, including any pages, tools, widgets, content, and services available through flysava.com.</p>
                  <p className="mb-4">By accessing or using Flysava, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.</p>
                  <p>In these Terms, "Flysava," "we," "us," and "our" refer to Flysava. "User," "you," and "your" refer to any person who accesses or uses the website.</p>
                </section>

                <section id="service" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Service Overview</h2>
                  <p className="mb-6">Flysava is a travel comparison and information platform. We help users search and compare flight options and may also display hotel, map, destination, route, or other travel-related tools through third-party providers.</p>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-6">
                    <p className="font-medium text-blue-900 dark:text-blue-100">Flysava does not sell flight tickets, hotel bookings, travel insurance, visas, or travel services directly. We are not an airline, hotel, travel agency, or booking provider. When you click on a travel offer, widget, advertisement, or booking link, you may be redirected to a third-party website where the booking is completed.</p>
                  </div>
                  
                  <p>All bookings, payments, cancellations, refunds, schedule changes, baggage rules, seat assignments, and customer service matters are handled by the third-party provider, airline, hotel, or travel company with whom you complete your booking.</p>
                </section>

                <section id="third-party" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Third-Party Providers and Links</h2>
                  <p className="mb-4">Flysava may display search results, widgets, links, prices, offers, advertisements, maps, or travel tools provided by third-party services. These third parties operate independently from Flysava.</p>
                  <p className="mb-4">We do not control third-party websites and are not responsible for their:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                    <li>Prices, availability, or booking terms</li>
                    <li>Accuracy of flight, hotel, route, or travel information</li>
                    <li>Payment processing</li>
                    <li>Refunds, cancellations, or changes</li>
                    <li>Customer support</li>
                    <li>Privacy practices</li>
                    <li>Website performance or availability</li>
                  </ul>
                  <p>Before completing any booking, you should carefully review the provider's final price, baggage rules, cancellation policy, refund terms, travel requirements, and applicable fees.</p>
                </section>

                <section id="affiliate" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Affiliate Disclosure</h2>
                  <p className="mb-4">Flysava may participate in affiliate programs. This means we may earn a commission when users click links, use widgets, or complete bookings through third-party travel providers. This comes at no additional cost to you.</p>
                  <p>Affiliate relationships help support Flysava and allow us to keep the website free to use. We aim to present travel information in a useful and transparent way, but third-party providers may control how offers, prices, and availability are displayed through their tools or widgets.</p>
                </section>

                <section id="price" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Price and Availability Disclaimer</h2>
                  <p className="mb-4">Flight and hotel prices are dynamic and may change at any time. Prices may vary based on availability, provider rules, taxes, fees, currency, location, dates, demand, and other factors.</p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 rounded-r-2xl mb-6">
                    <p className="font-medium text-orange-900 dark:text-orange-100">Flysava does not guarantee that a listed fare is the lowest available price, that a specific offer will remain available, or that pricing displayed on our website will match the final price shown by a third-party provider.</p>
                  </div>
                  <p>Any phrases such as "cheap flights," "best deals," "save more," or similar marketing language are general promotional descriptions and should not be understood as a guarantee of the lowest possible price.</p>
                </section>

                <section id="use" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Use of the Website</h2>
                  <p className="mb-4">You agree to use Flysava only for lawful, personal, and non-commercial purposes unless we provide written permission otherwise.</p>
                  <p className="mb-4">You must not:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Use the website for unlawful, fraudulent, harmful, or abusive purposes</li>
                    <li>Attempt to interfere with website security or functionality</li>
                    <li>Use automated bots, scrapers, crawlers, or data extraction tools without permission</li>
                    <li>Copy, reproduce, or resell website content without authorization</li>
                    <li>Misrepresent your identity or impersonate another person</li>
                    <li>Attempt to gain unauthorized access to systems, accounts, or data</li>
                  </ul>
                  <p>We may restrict, suspend, or terminate access to the website if we believe a user has violated these Terms.</p>
                </section>

                <section id="ip" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Intellectual Property</h2>
                  <p className="mb-4">All Flysava branding, design, text, graphics, layout, logos, page structure, and original content are owned by Flysava or used with permission, unless otherwise stated.</p>
                  <p className="mb-4">You may view and use the website for personal travel research. You may not copy, modify, distribute, reproduce, publish, sell, or exploit any part of the website without prior written permission from Flysava.</p>
                  <p>Third-party logos, trademarks, widgets, and travel data remain the property of their respective owners.</p>
                </section>

                <section id="travel-info" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Travel Information Disclaimer</h2>
                  <p className="mb-4">Flysava may publish travel tips, guides, route information, destination content, blog posts, or general travel advice. This content is provided for informational purposes only.</p>
                  <p>Travel rules, visa requirements, health requirements, airline policies, baggage rules, airport procedures, and government restrictions may change. You are responsible for checking official sources and confirming all travel requirements before booking or traveling.</p>
                </section>

                <section id="warranty" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. No Warranty</h2>
                  <p className="mb-4">Flysava is provided on an "as is" and "as available" basis. We make reasonable efforts to provide a useful and reliable website, but we do not guarantee that:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>The website will always be available or error-free</li>
                    <li>Search results or third-party data will always be accurate or complete</li>
                    <li>Prices or availability will remain unchanged</li>
                    <li>Third-party links or widgets will work at all times</li>
                    <li>The website will be free from bugs, interruptions, or security issues</li>
                  </ul>
                  <p>To the fullest extent permitted by law, Flysava disclaims all warranties, express or implied.</p>
                </section>

                <section id="liability" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Limitation of Liability</h2>
                  <p className="mb-4">To the fullest extent permitted by law, Flysava and its owners, partners, affiliates, team members, and service providers will not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from your use of the website.</p>
                  <p className="mb-4">This includes, but is not limited to, damages related to:</p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Booking errors or failed bookings</li>
                    <li>Price changes or unavailable fares</li>
                    <li>Cancellations, delays, missed flights, or schedule changes</li>
                    <li>Issues with airlines, hotels, travel agencies, or third-party providers</li>
                    <li>Loss of data, revenue, profits, or business opportunity</li>
                    <li>Website downtime, interruptions, or technical problems</li>
                    <li>Unauthorized access to information</li>
                  </ul>
                </section>

                <section id="indemnification" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Indemnification</h2>
                  <p>You agree to defend, indemnify, and hold harmless Flysava, its owners, partners, affiliates, team members, and service providers from any claims, damages, losses, liabilities, costs, or expenses arising from your use of the website, your violation of these Terms, or your violation of any law or third-party right.</p>
                </section>

                <section id="privacy" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">12. Privacy</h2>
                  <p>Your use of Flysava is also governed by our Privacy Policy and Cookie Policy. These policies explain how information may be collected, used, shared, and protected when you visit or interact with the website.</p>
                </section>

                <section id="changes" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">13. Changes to These Terms</h2>
                  <p className="mb-4">We may update these Terms of Use from time to time. The updated version will be posted on this page with a revised "Last updated" date.</p>
                  <p>Your continued use of Flysava after changes are posted means you accept the updated Terms.</p>
                </section>

                <section id="governing-law" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">14. Governing Law</h2>
                  <p>These Terms will be interpreted in accordance with applicable laws, without regard to conflict of law principles. If Flysava later operates through a registered legal entity, the governing law and dispute resolution section may be updated to reflect the appropriate jurisdiction.</p>
                </section>

                <section id="contact" className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">15. Contact</h2>
                  <p>If you have questions about these Terms of Use, contact us at:</p>
                  <p className="mt-4 font-bold text-gray-900 dark:text-white">Email: <a href="mailto:contact@flysava.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@flysava.com</a></p>
                </section>
                
              </div>

              {/* Bottom Contact CTA */}
              <div className="mt-12 bg-blue-600 rounded-3xl p-8 md:p-12 text-center shadow-xl shadow-blue-500/20">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Questions about this policy?</h2>
                <p className="text-blue-100 mb-8 text-lg">Contact us at: <a href="mailto:contact@flysava.com" className="font-bold underline hover:text-white">contact@flysava.com</a></p>
                <button 
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Contact Support <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};