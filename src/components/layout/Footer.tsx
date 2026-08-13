import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Instagram, Linkedin } from 'lucide-react';

const MANAGE_BOOKING_URL = 'https://flysava.nuitee.link/manage-bookings?language=en&currency=INR&from=Lz9sYW5ndWFnZT1lbiZjdXJyZW5jeT1JTlI=';

// Custom Modern X Logo SVG Component
const XLogo = () => (
  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  // Helper function to handle service page clicks from footer
  const handleServiceClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();

    // If navigating to flights, force page reload so widget loads cleanly
    if (path === '/flights') {
      window.location.href = '/flights';
      return;
    }

    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-gradient-to-b from-white to-[#F8FAFC] border-t border-[#E5E7EB] text-[#111827] font-sans pt-16 sm:pt-20 pb-10 selection:bg-blue-600 selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-4 max-w-[320px]">
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

            <p className="text-[14px] text-slate-500 font-normal leading-relaxed">
              Compare flights, discover top hotels, book rental cars, and stay connected with eSIMs worldwide, all in one place with transparent pricing and zero hidden fees.
            </p>

            {/* CIRCULAR SOCIAL BUTTONS */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://www.instagram.com/getflysava?igsh=cGhrc2RrcWY3MTlj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/getflysava?s=21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <XLogo />
              </a>
              <a
                href="https://www.linkedin.com/company/getflysava/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 4 BALANCED COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Services Column */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Services</h4>
              <ul className="space-y-2.5 text-[14px] text-slate-600 font-normal">
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

            {/* Explore Column */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Explore</h4>
              <ul className="space-y-2.5 text-[14px] text-slate-600 font-normal">
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

            {/* Company Column */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Company</h4>
              <ul className="space-y-2.5 text-[14px] text-slate-600 font-normal">
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

            {/* Legal Column */}
            <div className="space-y-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Legal</h4>
              <ul className="space-y-2.5 text-[14px] text-slate-600 font-normal">
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

        </div>

        {/* ================= ELEGANT DIVIDER ================= */}
        <div className="border-t border-[#E5E7EB]" />

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} FlySava. All rights reserved.</p>
          <p>Made for travellers worldwide 💙</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;