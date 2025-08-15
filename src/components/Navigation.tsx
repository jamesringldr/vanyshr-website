'use client';



export default function Navigation() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-brand-text py-4 px-6 lg:px-8 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/Logo/Logo-white and blue.svg"
            alt="Vanyshr Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-white hover:text-brand-accent transition-colors duration-200 font-medium">
            DIY Removal
          </button>
          <button 
            onClick={scrollToPricing}
            className="text-white hover:text-brand-accent transition-colors duration-200 font-medium"
          >
            Pricing
          </button>
          <button className="text-white hover:text-brand-accent transition-colors duration-200 font-medium">
            Brokers we Target
          </button>
          <button className="text-white hover:text-brand-accent transition-colors duration-200 font-medium">
            Manifesto
          </button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-brand-accent2 hover:border-brand-accent2 transition-all duration-200">
            Sign In
          </button>
          <button className="px-6 py-2 bg-brand-accent text-white font-semibold rounded-lg hover:bg-brand-accent2 transition-all duration-200">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
