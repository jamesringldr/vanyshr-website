'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const dataPoints = [
  'Phone Numbers',
  'Home Addresses',
  'Emails',
  'Dates of Birth',
  'Relatives',
  'Court Records',
  'Financial Records',
];


export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dataPoints.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#022136]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,191,255,0.13) 0%, transparent 70%)',
        }}
      />
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00BFFF 1px, transparent 1px), linear-gradient(90deg, #00BFFF 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#00BFFF]" />
            <span className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase">
              AI Powered Data Privacy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[2.75rem] sm:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tighter mb-3 text-left"
          >
            {/* Row 1: left-justified so "Your" stays anchored as carousel changes width */}
            <span className="flex items-baseline gap-3 flex-wrap">
              <span>Your</span>
              <span className="relative overflow-hidden pr-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="inline-block text-[#FF8A00] italic"
                  >
                    {dataPoints[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
            {/* Row 2 */}
            <span className="block">are exposed online.</span>
            {/* Row 3 */}
            <span className="block italic text-[#00BFFF]">We Make It Vanysh.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[#B8C4CC] text-lg sm:text-xl leading-relaxed max-w-2xl mt-6 mb-10"
          >
            <span className="text-white font-semibold italic">Scammers, Spammers & Identity Thieves</span>{' '}
            use data brokers to find and exploit your personal information.
            Vanyshr uses AI to hunt it down, demand removal, and monitor compliance —{' '}
            <span className="text-[#00BFFF] font-semibold">automatically</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-start justify-start gap-4 mb-5"
          >
            <a
              href="https://vanyshr.vercel.app/quick-scan/"
              className="inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_30px_rgba(0,191,255,0.35)]"
            >
              Run a Free QuickScan
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('how-it-works');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border-2 border-[#2A4A68] hover:border-[#00BFFF] text-[#B8C4CC] hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              See How It Works
            </button>
          </motion.div>

          {/* Reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[#7A92A8] text-sm text-left"
          >
            No credit card required &nbsp;·&nbsp; No sign-up to scan &nbsp;·&nbsp; Your first removal is free
          </motion.p>
        </div>

      </div>
    </section>
  );
}
