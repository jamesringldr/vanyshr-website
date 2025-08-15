'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "One Time",
      price: "$20",
      period: "One Time",
      features: [
        "Scan 100+ Brokers",
        "Remove Exposed Data",
        "Status Reporting",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Family",
      price: isYearly ? "$15" : "$20",
      period: "per month",
      features: [
        "Up to 5 family members",
        "Priority removal",
        "Priority Email Support",
        "Advanced reporting",
        "Custom alerts"
      ],
      popular: true
    },
    {
      name: "Basic",
      price: isYearly ? "$10" : "$15",
      period: "per month",
      features: [
        "Monthly Broker Scan",
        "Priority Removal",
        "Advanced Reporting",
        "Custom Alerts"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className="section-padding bg-brand-text">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your privacy protection needs
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 ${
                isYearly ? 'bg-brand-accent' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="bg-brand-accent2 text-white px-2 py-1 rounded text-xs font-semibold">
                Save 25%
              </span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                plan.popular ? 'border-brand-accent2' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-accent2 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-brand-text mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-brand-text">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular 
                  ? 'bg-brand-accent hover:bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-brand-text'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 font-medium">
            30 Day Money Back Guarantee - No Questions Asked
          </p>
        </motion.div>
      </div>
    </section>
  );
}
