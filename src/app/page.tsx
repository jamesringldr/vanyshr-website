'use client';

import Navigation from '../components/Navigation';
import HeroSection from '../landing-page/components/HeroSection';
import AwarenessSection from '../landing-page/components/AwarenessSection';
import HowItWorksSection from '../landing-page/components/HowItWorksSection';
import FeaturesSection from '../landing-page/components/FeaturesSection';
import PricingSection from '../landing-page/components/PricingSection';
import FAQSection from '../landing-page/components/FAQSection';
import Footer from '../landing-page/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <Navigation />
      <main>
        <HeroSection />
        <AwarenessSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
