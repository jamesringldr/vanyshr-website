'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#022136]/95 backdrop-blur-md border-b border-[#2A4A68] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center flex-shrink-0">
              <img
                src="/assets/LogoFiles/PrimaryLogo-DarkMode.png"
                alt="Vanyshr"
                className="h-9 w-auto"
              />
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-[#B8C4CC] hover:text-white font-medium text-sm transition-colors duration-150"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="https://vanyshr.vercel.app/sign-in/"
                className="bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
              >
                Login
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#022136]/98 backdrop-blur-md flex flex-col pt-20 px-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-left text-white font-medium text-xl py-4 border-b border-[#2A4A68] hover:text-[#00BFFF] transition-colors duration-150"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://vanyshr.vercel.app/sign-in/"
              className="block text-center bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold py-3.5 rounded-xl transition-colors duration-150"
              onClick={() => setMobileOpen(false)}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </>
  );
}
