'use client';

import { Mail, Twitter, Linkedin } from 'lucide-react';

const productLinks = [
  { label: 'QuickScan', href: 'https://vanyshr.vercel.app/quick-scan/' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Manifesto', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: 'mailto:hello@vanyshr.com' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'CCPA Rights', href: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#011628] border-t border-[#2A4A68]">
      {/* Final CTA strip */}
      <div className="bg-gradient-to-r from-[#022136] via-[#0d2a3d] to-[#022136] border-b border-[#2A4A68]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
          <p className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-4">
            Take Back Your Privacy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
            Your data is out there.{' '}
            <br className="hidden sm:block" />
            <span className="text-[#00BFFF]">Let's take it back.</span>
          </h2>
          <p className="text-[#B8C4CC] text-lg mb-8 max-w-lg mx-auto">
            Run a free QuickScan and see exactly what personal data is exposed about you right now.
          </p>
          <a
            href="https://vanyshr.vercel.app/quick-scan/"
            className="inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_40px_rgba(0,191,255,0.3)]"
          >
            Run My Free QuickScan
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-[#7A92A8] text-sm mt-4">
            No credit card required &nbsp;·&nbsp; No sign-up to scan &nbsp;·&nbsp; Your first removal is free
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-5">
              <img
                src="/assets/LogoFiles/PrimaryLogo-DarkMode.png"
                alt="Vanyshr"
                className="h-8 w-auto"
              />
            </a>
            <p className="text-[#7A92A8] text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered data removal and privacy protection. We find your personal data on 100+ brokers and make it vanish.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@vanyshr.com"
                className="w-9 h-9 rounded-lg bg-[#2D3847] border border-[#2A4A68] flex items-center justify-center text-[#7A92A8] hover:text-[#00BFFF] hover:border-[#00BFFF]/40 transition-colors duration-150"
                aria-label="Email Vanyshr"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#2D3847] border border-[#2A4A68] flex items-center justify-center text-[#7A92A8] hover:text-[#00BFFF] hover:border-[#00BFFF]/40 transition-colors duration-150"
                aria-label="Vanyshr on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-[#2D3847] border border-[#2A4A68] flex items-center justify-center text-[#7A92A8] hover:text-[#00BFFF] hover:border-[#00BFFF]/40 transition-colors duration-150"
                aria-label="Vanyshr on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#7A92A8] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#7A92A8] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#7A92A8] hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2A4A68] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#7A92A8] text-xs">
            &copy; {currentYear} Vanyshr. All rights reserved.
          </p>
          <p className="text-[#7A92A8] text-xs">
            Built with intention. No VC funding. No data selling. Ever.
          </p>
        </div>
      </div>
    </footer>
  );
}
