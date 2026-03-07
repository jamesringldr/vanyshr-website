'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'One-Time',
    tagline: 'Clean up right now',
    priceMonthly: null,
    priceYearly: null,
    staticPrice: '$20',
    period: 'one-time payment',
    features: [
      'Scan 100+ data brokers',
      'One-time removal requests',
      'Results report',
      'Email support',
    ],
    cta: 'Get Started',
    popular: false,
    note: 'No subscription required',
  },
  {
    name: 'Basic',
    tagline: 'Continuous protection for you',
    priceMonthly: 15,
    priceYearly: 10,
    staticPrice: null,
    period: 'per month',
    features: [
      'Monthly broker scans',
      'Automated re-removal',
      'Priority processing',
      'Advanced reporting',
      'Custom alerts',
    ],
    cta: 'Start Basic',
    popular: false,
    note: null,
  },
  {
    name: 'Family',
    tagline: 'Protect everyone you care about',
    priceMonthly: 20,
    priceYearly: 15,
    staticPrice: null,
    period: 'per month',
    features: [
      'Up to 5 family members',
      'Monthly scans for all members',
      'Highest-priority removal',
      'Advanced reporting',
      'Dedicated email support',
      'Custom alerts',
    ],
    cta: 'Protect My Family',
    popular: true,
    note: null,
  },
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-[#0a1d2e]">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#B8C4CC] text-lg">
            No hidden fees. Cancel anytime. 30-day money-back guarantee.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-[#7A92A8]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                isYearly ? 'bg-[#00BFFF]' : 'bg-[#2A4A68]'
              }`}
              aria-label="Toggle billing period"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-[#7A92A8]'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-[#00BFFF]/20 text-[#00BFFF] border border-[#00BFFF]/30 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                Save 33%
              </span>
            )}
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                plan.popular
                  ? 'bg-[#00BFFF]/10 border-2 border-[#00BFFF] shadow-[0_0_40px_rgba(0,191,255,0.2)]'
                  : 'bg-[#2D3847] border border-[#2A4A68]'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00BFFF] text-[#022136] text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                <p className="text-[#7A92A8] text-sm mt-1">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-7">
                {plan.staticPrice ? (
                  <>
                    <span className="text-5xl font-bold text-white tracking-tight">
                      {plan.staticPrice}
                    </span>
                    <span className="text-[#7A92A8] text-sm ml-2">{plan.period}</span>
                  </>
                ) : (
                  <>
                    <span className="text-5xl font-bold text-white tracking-tight">
                      ${isYearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-[#7A92A8] text-sm ml-2">{plan.period}</span>
                    {isYearly && (
                      <p className="text-[#7A92A8] text-xs mt-1">
                        Billed ${(isYearly && plan.priceYearly ? plan.priceYearly * 12 : 0)} annually
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00BFFF] flex-shrink-0 mt-0.5" />
                    <span className="text-[#B8C4CC] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="https://vanyshr.vercel.app/quick-scan/"
                className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] shadow-[0_0_20px_rgba(0,191,255,0.3)] hover:scale-[1.02]'
                    : 'bg-[#2A4A68] hover:bg-[#344f6b] text-white'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              {plan.note && (
                <p className="text-[#7A92A8] text-xs text-center mt-3">{plan.note}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-[#7A92A8] text-sm mt-10"
        >
          30-day money-back guarantee &nbsp;·&nbsp; Cancel any time &nbsp;·&nbsp; No questions asked
        </motion.p>
      </div>
    </section>
  );
}
