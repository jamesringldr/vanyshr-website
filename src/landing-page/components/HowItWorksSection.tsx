'use client';

import { motion } from 'framer-motion';
import { Search, Trash2, Shield } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "Scan & Discover",
      description: "We scan hundreds of data broker websites to find your personal information"
    },
    {
      icon: Trash2,
      title: "Remove & Clean",
      description: "Automatically submit removal requests to delete your data from these sites"
    },
    {
      icon: Shield,
      title: "Monitor & Protect",
      description: "Continuously monitor for new data and maintain your privacy protection"
    }
  ];

  return (
    <section id="how-it-works-section" className="section-padding bg-brand-text">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our three-step process makes protecting your privacy simple and effective
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-brand-bg"
            >
              <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            <span className="font-bold italic">Start with a scan!</span> Create a free account, give us some basic information and we will hunt down what personal information is exposed.
          </p>
          <button className="btn-primary mb-4">
            Scan Now
          </button>
          <p className="text-base" style={{ color: '#FF8400' }}>
            No Credit Card Required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
