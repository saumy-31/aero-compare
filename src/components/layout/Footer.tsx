import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F8FAFC] border-t border-[#E5E7EB] text-[#111827] font-sans pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-5 max-w-[320px]">
            <Link to="/" className="inline-flex items-center gap-2.5 group outline-none">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform duration-200">
                <Plane className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Fly<span className="text-[#2563EB]">Sava</span>
              </span>
            </Link>

            <p className="text-[15px] text-slate-500 font-normal leading-relaxed">
              Compare prices from hundreds of airlines with transparent pricing and zero hidden fees.
            </p>

            {/* CIRCULAR SOCIAL BUTTONS */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white border border-[#E5E7EB] text-slate-600 hover:text-[#2563EB] flex items-center justify-center shadow-2xs hover:-translate-y-0.5 hover:scale-105 hover:border-blue-200 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Explore Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Explore</h4>
              <ul className="space-y-3 text-[15px] text-slate-600 font-normal">
                <li>
                  <Link to="/flights" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Flights
                  </Link>
                </li>
                <li>
                  <Link to="/destinations" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/status" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Flight Status
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Travel Guides
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Company</h4>
              <ul className="space-y-3 text-[15px] text-slate-600 font-normal">
                <li>
                  <Link to="/about" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900">Legal</h4>
              <ul className="space-y-3 text-[15px] text-slate-600 font-normal">
                <li>
                  <Link to="/privacy" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="inline-block hover:translate-x-[3px] hover:text-[#2563EB] transition-all duration-200">
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
          <p>© 2026 FlySava. All rights reserved.</p>
          <p>Made with precision for travellers worldwide.</p>
        </div>

      </div>
    </footer>
  );
};