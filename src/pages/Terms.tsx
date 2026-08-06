import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, ArrowRight, Sparkles, Mail, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

// Explicit ambient declarations for VS Code editor stability
declare const window: any;
declare const document: any;

export const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
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
      
      <div className="min-h-screen bg-[#EEF2F6] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
        
        {/* ================= HERO HEADER ================= */}
        <section className="pt-16 sm:pt-20 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-200/70 shadow-2xs">
                <Scale className="w-3.5 h-3.5" /> Legal Framework
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Terms of Use
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                Legal terms and guidelines governing your access to and use of FlySava.
              </p>

              <div className="pt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Last Updated: August 2026
              </div>

            </div>

          </div>
        </section>

        {/* ================= MAIN LAYOUT GRID ================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-200/90 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">
                    Page Contents
                  </h3>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>

                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-xs">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 font-semibold transition-all duration-200"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

              </div>
            </aside>

            {/* Legal Terms Document Body */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-10 text-slate-600 text-sm leading-relaxed">
                
                <section id="intro" className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">1. Introduction</h2>
                  <p>Welcome to Flysava. These Terms of Use govern your access to and use of the Flysava website, including any pages, tools, widgets, content, and services available through flysava.com.</p>
                  <p>By accessing or using Flysava, you agree to these Terms of Use. If you do not agree with these terms, please do not use the website.</p>
                  <p>In these Terms, "Flysava," "we," "us," and "our" refer to Flysava. "User," "you," and "your" refer to any person who accesses or uses the website.</p>
                </section>

                <section id="service" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">2. Service Overview</h2>
                  <p>Flysava is a travel comparison and information platform. We help users search and compare flight options and may also display hotel, map, destination, route, or other travel-related tools through third-party providers.</p>
                  
                  <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-3">
                    Flysava does not sell flight tickets, hotel bookings, travel insurance, visas, or travel services directly. We are not an airline, hotel, travel agency, or booking provider. When you click on a travel offer, widget, advertisement, or booking link, you may be redirected to a third-party website where the booking is completed.
                  </div>
                  
                  <p>All bookings, payments, cancellations, refunds, schedule changes, baggage rules, seat assignments, and customer service matters are handled by the third-party provider, airline, hotel, or travel company with whom you complete your booking.</p>
                </section>

                <section id="third-party" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">3. Third-Party Providers and Links</h2>
                  <p>Flysava may display search results, widgets, links, prices, offers, advertisements, maps, or travel tools provided by third-party services. These third parties operate independently from Flysava.</p>
                  <p>We do not control third-party websites and are not responsible for their prices, availability, booking terms, payment processing, or customer support.</p>
                </section>

                <section id="affiliate" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">4. Affiliate Disclosure</h2>
                  <p>Flysava may participate in affiliate programs. This means we may earn a commission when users click links, use widgets, or complete bookings through third-party travel providers at no additional cost to you.</p>
                  <p>Affiliate relationships help support Flysava and allow us to keep the website free to use.</p>
                </section>

                <section id="price" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">5. Price and Availability Disclaimer</h2>
                  <p>Flight and hotel prices are dynamic and may change at any time based on availability, provider rules, taxes, fees, currency, and demand.</p>
                  
                  <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-3 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Flysava does not guarantee that a listed fare is the lowest available price, that a specific offer will remain available, or that pricing displayed on our website will match the final price shown by a third-party provider.</span>
                  </div>
                </section>

                <section id="use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">6. Use of the Website</h2>
                  <p>You agree to use Flysava only for lawful, personal, and non-commercial purposes unless given written permission otherwise.</p>
                  <p>Automated bots, web scrapers, crawlers, or unauthorized data extraction tools are strictly prohibited on this platform.</p>
                </section>

                <section id="ip" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">7. Intellectual Property</h2>
                  <p>All Flysava branding, design, text, graphics, layout, logos, page structure, and original content are owned by Flysava or used with permission. You may not reproduce, publish, or sell any part of the website without written consent.</p>
                </section>

                <section id="travel-info" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">8. Travel Information Disclaimer</h2>
                  <p>Travel content, guides, and tips published on Flysava are provided for informational purposes only. Travelers are responsible for verifying visa, health, and entry requirements through official government channels prior to departure.</p>
                </section>

                <section id="warranty" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">9. No Warranty</h2>
                  <p>Flysava is provided on an "as is" and "as available" basis without warranties of any kind. We do not guarantee uninterrupted site access or error-free flight data feeds.</p>
                </section>

                <section id="liability" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">10. Limitation of Liability</h2>
                  <p>To the fullest extent permitted by law, Flysava disclaims all liability for booking errors, schedule disruptions, missed flights, dynamic price alterations, or technical downtime arising from your use of third-party flight engines.</p>
                </section>

                <section id="indemnification" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">11. Indemnification</h2>
                  <p>You agree to defend and hold harmless Flysava and its affiliates from any claims, damages, or legal expenses arising from your violation of these Terms of Use.</p>
                </section>

                <section id="privacy" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">12. Privacy</h2>
                  <p>Your use of Flysava is also governed by our Privacy Policy and Cookie Policy, which detail our data collection and protection standards.</p>
                </section>

                <section id="changes" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">13. Changes to These Terms</h2>
                  <p>We may modify these Terms of Use at any time. Continued usage of flysava.com after revisions are published constitutes acceptance of updated terms.</p>
                </section>

                <section id="governing-law" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">14. Governing Law</h2>
                  <p>These Terms are governed by applicable legal principles without regard to conflict of law rules.</p>
                </section>

                <section id="contact" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">15. Contact Information</h2>
                  <p>If you have questions regarding these Terms of Use, reach out to:</p>
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/60 font-bold text-slate-900 text-xs">
                    Flysava Legal Desk <br />
                    Email: <a href="mailto:contact@flysava.com" className="text-blue-600 hover:underline">contact@flysava.com</a>
                  </div>
                </section>

              </div>

              {/* Bottom Support CTA Box */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Need Legal Support or Clarification?</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">Our team is happy to assist with any questions regarding these terms.</p>
                <button 
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95"
                >
                  Contact Support <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

            </div>

          </div>
        </main>

      </div>
    </>
  );
};