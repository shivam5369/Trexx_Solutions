import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = ['home', 'services', 'solutions', 'about', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: TREXX Solutions Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3.5 focus:outline-none"
          aria-label="TREXX Solutions Home"
        >
          <div className="relative w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.16] flex items-center justify-center overflow-hidden group-hover:border-[#0066FF] transition-colors duration-300 shadow-[0_0_20px_rgba(0,102,255,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <path
                d="M4 5H20L16.2 9.5H14.2V19L10.2 16.8V9.5H4V5Z"
                fill="white"
              />
              <path
                d="M15.4 12.5L19.8 18H15.4V12.5Z"
                fill="#0066FF"
              />
            </svg>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-[22px] md:text-[24px] tracking-[-0.03em] text-white">
              TREXX
            </span>
            <span className="text-[16px] md:text-[17px] font-medium text-white/60 tracking-[-0.01em]">
              Solutions
            </span>
          </div>
        </a>

        {/* Center Navigation (Framer minimal style) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/[0.06] rounded-full px-2 py-1 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 text-[13.5px] font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-white'
                    : 'text-[#8A8F98] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.08]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: Prominent White CTA Button (No fake Login link) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#ai-receptionist"
            className="text-[13px] font-medium text-[#8A8F98] hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse" />
            AI Receptionist
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-[#050505] font-semibold text-[13.5px] tracking-[-0.01em] hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_0_25px_rgba(255,255,255,0.18)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#08090C]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 pt-4 pb-7 mt-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/[0.04] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </a>
              ))}
              <a
                href="#ai-receptionist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-[15px] font-medium text-[#38BDF8] hover:bg-[#0066FF]/10 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#0066FF]" />
                  Flagship: AI Receptionist
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center py-3 px-5 rounded-lg bg-white text-[#050505] font-semibold text-[14px] hover:bg-white/90 transition-all"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

