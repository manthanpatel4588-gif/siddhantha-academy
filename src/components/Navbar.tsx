import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Award, MapPin } from 'lucide-react';
import { ACADEMY_DATA } from '../data/academyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-md border-b border-blue-100/50'
          : 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      {/* Top micro bar for location and contact info */}
      <div className="hidden md:block bg-blue-900 text-white text-xs py-1.5 px-4 mb-2 -mt-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Keshav Aaradhyam, Kudasan, Gandhinagar
            </span>
            <span className="text-blue-300">|</span>
            <span className="flex items-center gap-1 text-blue-100">
              <Award className="w-3.5 h-3.5 text-rose-400" />
              Women-Owned Coaching Institute
            </span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a href={`tel:${ACADEMY_DATA.phone}`} className="hover:text-blue-200 transition-colors">
              Call: {ACADEMY_DATA.phone}
            </a>
            <span>|</span>
            <a
              href={ACADEMY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-300 hover:text-emerald-200 flex items-center gap-1 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-blue-500 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                Siddhantha <span className="text-blue-600">Academy</span>
              </span>
              <p className="text-[10px] font-medium text-slate-500 tracking-wider uppercase -mt-1 hidden sm:block">
                Kudasan • Gandhinagar
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call & WhatsApp Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${ACADEMY_DATA.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Now</span>
            </a>

            <a
              href={ACADEMY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 shadow-sm shadow-emerald-600/30 transition-all hover:shadow-emerald-600/40 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={ACADEMY_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-bold bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact on WhatsApp</span>
            </a>
            <a
              href={`tel:${ACADEMY_DATA.phone}`}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-blue-700 font-bold bg-blue-50 hover:bg-blue-100 border border-blue-200"
            >
              <Phone className="w-5 h-5 text-blue-600" />
              <span>Call Now: {ACADEMY_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
