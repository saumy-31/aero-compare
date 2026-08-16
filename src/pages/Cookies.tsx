import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cookie, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Mail, 
  CheckCircle2, 
  Settings2, 
  Lock, 
  Globe2, 
  Plane, 
  Building2, 
  Car, 
  Smartphone, 
  Layers
} from 'lucide-react';
import { SEO } from '../components/seo/SEO';

declare const window: any;
declare const document: any;

export const Cookies: React.FC = () => {
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
    { id: 'intro', title: '1. Introduction & Scope' },
    { id: 'what-are', title: '2. What Are Cookies & Local Storage' },
    { id: 'types', title: '3. Categories of Cookies We Use' },
    { id: 'ecosystem-cookies', title: '4. Service-Specific Tracking' },
    { id: 'why-use', title: '5. Purpose of Cookie Deployment' },
    { id: 'third-party', title: '6. Third-Party Partner Cookies' },
    { id: 'managing', title: '7. How to Control & Disable Cookies' },
    { id: 'consent', title: '8. Cookie Consent Management' },
    { id: 'updates', title: '9. Revisions & Updates' },
    { id: 'contact', title: '10. Contact & Privacy Desk' }
  ];

  const cookiesJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy | FlySava",
    "description": "Learn about the cookies, tracking pixels, and storage technologies used across FlySava's flight, hotel, car rental, and eSIM comparison services.",
    "url": "https://flysava.com/cookies",
    "publisher": {
      "@type": "Organization",
      "name": "FlySava",
      "url": "https://flysava.com"
    }
  };

  return (
    <>
      <SEO 
        title="Cookie Policy | FlySava"
        description="Learn about the cookies, analytics, and tracking technologies used on FlySava and how you can manage your preferences for a transparent browsing experience."
        canonicalUrl="/cookies"
        jsonLd={cookiesJsonLd}
      />

      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-600 selection:text-white pb-20">
        
        {/* ========================================================================= */}
        {/* 1. HERO HEADER                                                            */}
        {/* ========================================================================= */}
        <section className="pt-12 sm:pt-16 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 text-center border border-slate-200/90 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            
            {/* Subtle Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/70 shadow-2xs">
                <Cookie className="w-3.5 h-3.5 text-amber-600" />
                <span>Tracking & Technology Disclosures</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Cookie Policy
              </h1>

              <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed max-w-xl mx-auto">
                How FlySava uses cookies, pixels, and web storage technologies across our flight search, lodging, mobility, and travel tools.
              </p>

              <div className="pt-2 text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                Last Updated: August 2026
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MAIN DOCUMENT LAYOUT                                                   */}
        {/* ========================================================================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sticky Navigation Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-white p-6 rounded-[2rem] border border-slate-200/90 shadow-sm space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">
                    Document Index
                  </h3>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>

                <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-xs">
                  {sections.map((sec) => (
                    <a 
                      key={sec.id} 
                      href={`#${sec.id}`}
                      onClick={(e) => scrollToSection(e, sec.id)}
                      className="block px-3 py-2 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 font-bold transition-all duration-200"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

              </div>
            </aside>

            {/* Policy Content Body */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-10 text-slate-600 text-sm leading-relaxed">
                
                {/* 1. INTRODUCTION */}
                <section id="intro" className="scroll-mt-28 space-y-3">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">1. Introduction & Scope</h2>
                  <p>
                    This Cookie Policy explains how FlySava ("we," "us," or "our") deploys cookies, tracking pixels, scripts, and local storage technologies when you access flysava.com. This includes our flight comparison tools, hotel discovery engines, rental car integrations, travel eSIM delivery widgets, destination guides, and live flight tracking services.
                  </p>
                  <p>
                    By browsing and using FlySava, you consent to our use of cookies in accordance with this policy and your selected cookie banner preferences.
                  </p>
                </section>

                {/* 2. WHAT ARE COOKIES */}
                <section id="what-are" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">2. What Are Cookies & Local Storage</h2>
                  <p>
                    Cookies are small text data files deposited onto your computer, tablet, or smartphone when you visit a website. They allow web servers to recognize your browser, persist user state (such as selected currency or departure city), maintain security parameters, and monitor aggregated traffic.
                  </p>
                  <p>
                    In addition to HTTP cookies, we may utilize related web storage technologies, including <code>localStorage</code>, <code>sessionStorage</code>, tracking pixels, and software development scripts to facilitate real-time travel search.
                  </p>
                </section>

                {/* 3. CATEGORIES OF COOKIES */}
                <section id="types" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">3. Categories of Cookies We Use</h2>
                  <p>We classify cookies deployed on FlySava into five operational categories:</p>

                  <div className="space-y-3 pt-1">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                        <Lock className="w-4 h-4 text-blue-600" /> Strictly Necessary Cookies
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Essential for basic platform navigation, routing, load balancing, security tokens, and form validation. The platform cannot function correctly without these cookies.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                        <Settings2 className="w-4 h-4 text-indigo-600" /> Functional & Preference Cookies
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Enable FlySava to remember user choices (e.g., active category filters on travel guides, recent search queries, and dismissed notifications) to provide an individualized experience.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" /> Analytics & Performance Cookies
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Collect anonymous telemetry on user navigation patterns, page render durations, interaction rates, and technical errors to help us optimize site stability and search speeds.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                        <Globe2 className="w-4 h-4 text-amber-600" /> Affiliate & Referral Attribution Cookies
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        When you click an outbound link to view flight deals, hotel rooms, Auto Europe car rentals, or Airalo eSIMs, attribution cookies verify that the referral originated from FlySava so partner commissions can be tracked without adding costs to your purchase.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1">
                      <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-wider">
                        <Layers className="w-4 h-4 text-purple-600" /> Third-Party Embedded Widget Cookies
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        Third-party widgets embedded within FlySava (e.g., flight status feeds, hotel pricing matrices, and maps) may place their own cookies subject to their independent policies.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. SERVICE-SPECIFIC TRACKING */}
                <section id="ecosystem-data" className="scroll-mt-28 space-y-4 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">4. Service-Specific Tracking Practices</h2>
                  <p>How cookies interface with different FlySava services:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs font-medium">
                    <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-blue-700 font-black">
                        <Plane className="w-4 h-4" /> Flight & Hotel Engines
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Caches recent origin-destination airport pairs and dates in session storage to speed up re-querying and avoid re-typing parameters.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-amber-800 font-black">
                        <Car className="w-4 h-4" /> Car Rentals (Auto Europe)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Manages partner affiliate tracking parameters when redirecting to Auto Europe fleet search results.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-emerald-800 font-black">
                        <Smartphone className="w-4 h-4" /> Travel eSIMs (Airalo)
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Tracks outbound destination data tokens to ensure you arrive on the correct country data bundle on Airalo checkouts.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-indigo-800 font-black">
                        <Layers className="w-4 h-4" /> Blog & Destination Catalog
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Remembers active category filters (e.g., "Culture," "Adventure") across page transitions without reloading the master dataset.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. WHY WE USE COOKIES */}
                <section id="why-use" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">5. Purpose of Cookie Deployment</h2>
                  <p>FlySava deploys cookies to achieve the following operational goals:</p>
                  <ul className="grid grid-cols-1 gap-2 text-xs font-semibold text-slate-700 pt-1">
                    <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Guarantee sub-second page transitions and secure state management</span>
                    </li>
                    <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Prevent repetitive search input by remembering recent route selections</span>
                    </li>
                    <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Attribute partner bookings seamlessly so our travel services remain free to use</span>
                    </li>
                    <li className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Diagnose cross-browser rendering bugs and maintain responsive performance</span>
                    </li>
                  </ul>
                </section>

                {/* 6. THIRD-PARTY COOKIES */}
                <section id="third-party" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">6. Third-Party Partner Cookies</h2>
                  <p>
                    When interacting with third-party components embedded on FlySava (or after clicking through to external providers), third parties may drop their own tracking cookies on your device.
                  </p>
                  <div className="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-2xl text-xs font-semibold text-slate-800 my-2 leading-relaxed">
                    FlySava does not govern the storage, retention, or processing rules of third-party cookies. We encourage users to inspect the individual privacy and cookie notices of airlines, hotel providers, Auto Europe, and Airalo.
                  </div>
                </section>

                {/* 7. MANAGING COOKIES */}
                <section id="managing" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">7. How to Control & Disable Cookies</h2>
                  <p>
                    You maintain complete autonomy over cookie storage and can adjust or block cookies at any time via your browser settings:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 font-medium">
                    <li><strong>Google Chrome:</strong> Settings &rarr; Privacy & Security &rarr; Third-Party Cookies</li>
                    <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy & Security &rarr; Enhanced Tracking Protection</li>
                    <li><strong>Apple Safari:</strong> Settings &rarr; Privacy &rarr; Prevent Cross-Site Tracking</li>
                    <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and Site Permissions</li>
                  </ul>
                  <p className="text-xs text-slate-500 pt-1">
                    Note: Completely blocking strictly necessary cookies may impair platform search speed and navigation features.
                  </p>
                </section>

                {/* 8. CONSENT MANAGEMENT */}
                <section id="consent" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">8. Cookie Consent Management</h2>
                  <p>
                    Upon your initial visit to FlySava, our Cookie Consent banner allows you to accept or manage non-essential analytical and affiliate tracking cookies. You may revisit your consent status anytime by clearing local browser cookies or interacting with the footer consent controls.
                  </p>
                </section>

                {/* 9. REVISIONS */}
                <section id="updates" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">9. Revisions & Updates</h2>
                  <p>
                    We may update this Cookie Policy periodically to accommodate new platform integrations, regulatory shifts, or upgraded tracking protocols. Any amendments become effective immediately upon posting.
                  </p>
                </section>

                {/* 10. CONTACT */}
                <section id="contact" className="scroll-mt-28 space-y-3 pt-6 border-t border-slate-100">
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">10. Contact & Privacy Desk</h2>
                  <p>For questions or clarifications regarding our cookie practices, please contact our data team:</p>
                  <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/60 font-bold text-slate-900 text-xs space-y-1">
                    <p className="text-blue-600 font-black uppercase tracking-wider text-[10px]">FlySava Privacy Operations</p>
                    <p>Support & Privacy: <a href="mailto:contact@flysava.com" className="text-blue-600 hover:underline">contact@flysava.com</a></p>
                    <p>Business Desk: <a href="mailto:business@flysava.com" className="text-blue-600 hover:underline">business@flysava.com</a></p>
                  </div>
                </section>

              </div>

              {/* Bottom Support CTA Box */}
              <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 text-center border border-blue-200/80 shadow-xl shadow-blue-600/5 space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto border border-blue-100">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Questions Regarding Our Tracking Technologies?</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our privacy team is available to answer any questions regarding data telemetry and tracking preferences.
                </p>
                <button 
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl transition-all shadow-md shadow-blue-600/25 cursor-pointer active:scale-95"
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

export default Cookies;