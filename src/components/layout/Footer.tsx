import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Instagram, Linkedin, Send, Check } from 'lucide-react';

const MANAGE_BOOKING_URL = 'https://flysava.nuitee.link/manage-bookings?language=en&currency=INR&from=Lz9sYW5ndWFnZT1lbiZjdXJyZW5jeT1JTlI=';

// Custom Modern X Logo SVG Component
const XLogo = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleServiceClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    if (path === '/flights') {
      window.location.href = '/flights';
      return;
    }

    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    const mailtoUrl = `mailto:carrers@flysava.com?subject=Newsletter Subscription&body=Please add ${encodeURIComponent(email)} to the newsletter list.`;
    window.location.href = mailtoUrl;

    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-gradient-to-b from-white via-slate-50/40 to-[#F8FAFC] border-t border-slate-200/80 text-slate-900 font-sans pt-12 sm:pt-16 pb-10 selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 items-start">
          
          {/* BRAND COLUMN (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })} 
              className="inline-flex items-center gap-2.5 group outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Fly<span className="text-[#2563EB]">Sava</span>
              </span>
            </Link>

            <p className="text-[13px] text-slate-500 font-normal leading-relaxed pr-2">
              Compare flights, hotels, rental cars, and eSIMs worldwide with transparent pricing.
            </p>

            {/* CIRCULAR SOCIAL BUTTONS */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/getflysava?igsh=cGhrc2RrcWY3MTlj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-500 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-300 transition-all duration-200"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/getflysava?s=21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-500 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-300 transition-all duration-200"
              >
                <XLogo />
              </a>
              <a
                href="https://www.linkedin.com/company/getflysava/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-500 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-300 transition-all duration-200"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 4 LINK COLUMNS (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            
            {/* Services */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Services</h4>
              <ul className="space-y-2.5 text-[13px] text-slate-500 font-normal leading-relaxed">
                <li>
                  <a href="/flights" onClick={(e) => handleServiceClick(e, '/flights')} className="inline-block hover:text-[#2563EB] transition-colors cursor-pointer">
                    Flights
                  </a>
                </li>
                <li>
                  <a href="/hotels" onClick={(e) => handleServiceClick(e, '/hotels')} className="inline-block hover:text-[#2563EB] transition-colors cursor-pointer">
                    Hotels
                  </a>
                </li>
                <li>
                  <a href="/cars" onClick={(e) => handleServiceClick(e, '/cars')} className="inline-block hover:text-[#2563EB] transition-colors cursor-pointer">
                    Car Rental
                  </a>
                </li>
                <li>
                  <a href="/esim" onClick={(e) => handleServiceClick(e, '/esim')} className="inline-block hover:text-[#2563EB] transition-colors cursor-pointer">
                    eSIM
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Explore</h4>
              <ul className="space-y-2.5 text-[13px] text-slate-500 font-normal leading-relaxed">
                <li>
                  <Link to="/destinations" className="inline-block hover:text-[#2563EB] transition-colors">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="inline-block hover:text-[#2563EB] transition-colors">
                    Flight Status
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="inline-block hover:text-[#2563EB] transition-colors">
                    Travel Guides
                  </Link>
                </li>
                <li>
                  <a 
                    href={MANAGE_BOOKING_URL} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-[#2563EB] transition-colors"
                  >
                    Manage Booking
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Company</h4>
              <ul className="space-y-2.5 text-[13px] text-slate-500 font-normal leading-relaxed">
                <li>
                  <Link to="/about" className="inline-block hover:text-[#2563EB] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="inline-block hover:text-[#2563EB] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="inline-block hover:text-[#2563EB] transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="inline-block hover:text-[#2563EB] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Legal</h4>
              <ul className="space-y-2.5 text-[13px] text-slate-500 font-normal leading-relaxed">
                <li>
                  <Link to="/privacy" className="inline-block hover:text-[#2563EB] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="inline-block hover:text-[#2563EB] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="inline-block hover:text-[#2563EB] transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* NEWSLETTER COLUMN (3 Cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">
              Newsletter
            </h4>
            
            <p className="text-[13px] text-slate-500 font-normal leading-relaxed">
              Get cheap flight alerts and destination deals straight to your inbox.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-200">
                <Check className="w-4 h-4 shrink-0" />
                <span>Connecting to carrers@flysava.com...</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-0.5">
                <div className="relative flex items-center bg-white border border-slate-200/90 rounded-2xl p-1 shadow-2xs focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/15 transition-all">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent px-3 text-[13px] font-normal text-slate-900 outline-none placeholder:text-slate-400 min-w-0"
                  />
                  <button
                    type="submit"
                    className="h-8 px-3.5 bg-[#2563EB] hover:bg-blue-700 text-white rounded-xl font-extrabold text-[11px] flex items-center gap-1.5 transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
                  >
                    <span>Join</span>
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* ================= ELEGANT DIVIDER ================= */}
        <div className="border-t border-slate-200/80" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-slate-500 font-normal leading-relaxed">
          <p>© {new Date().getFullYear()} FlySava. All rights reserved.</p>
          <p>Made for travellers worldwide 💙</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;