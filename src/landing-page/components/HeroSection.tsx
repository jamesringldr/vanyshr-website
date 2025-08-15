'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const dataPoints = [
    "Phone Number",
    "Email", 
    "Home Address",
    "Birthdate",
    "Relatives",
    "Government Records"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataPoints.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [dataPoints.length]);

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works-section');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-brand-text">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <div className="mb-2">
              It's easy to find your
            </div>
            <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="block font-bold"
                  style={{ color: '#FF8400' }}
                >
                  {dataPoints[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <div className="mt-2">
              We make it <span className="text-brand-accent italic">Vanysh</span>.
            </div>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            <span className="font-bold italic" style={{ color: '#FF8400' }}>Spammers, Scammers, and Internet Sleuths</span> use data brokers to access your exposed private data. We use AI to hunt down which brokers have your data, demand removal, and monitor their compliance.
          </p>
          <p className="text-lg font-bold italic text-white mb-2">
            Test us out! Your first removal is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <button className="bg-brand-accent hover:bg-brand-accent2 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
            <button 
              onClick={scrollToHowItWorks}
              className="btn-secondary"
            >
              How it works
            </button>
          </div>
          <p className="text-base font-bold text-brand-accent">
            No Credit Card Required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
