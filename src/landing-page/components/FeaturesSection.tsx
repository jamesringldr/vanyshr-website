'use client';

import { motion } from 'framer-motion';
import { Bot, RotateCcw, CalendarCheck, BarChart3, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Discovery',
    description:
      'Our AI engine maps the entire data broker landscape and cross-references hundreds of sites to find every record tied to your identity.',
  },
  {
    icon: RotateCcw,
    title: 'Fully Automated Removal',
    description:
      'Vanyshr handles every removal request automatically — no forms to fill, no brokers to call, no follow-up needed from you.',
  },
  {
    icon: CalendarCheck,
    title: 'Ongoing Monthly Monitoring',
    description:
      'Data brokers re-list your information constantly. We run fresh scans every month and re-submit removals before they take hold.',
  },
  {
    icon: BarChart3,
    title: 'Clear Progress Reports',
    description:
      'A live dashboard shows exactly which brokers were found, which have been removed, and which are still being processed — in plain English.',
  },
  {
    icon: Zap,
    title: 'Fast Results',
    description:
      'Most data brokers complete removal within 30–90 days. High-risk brokers are prioritised first so your most sensitive exposure is addressed immediately.',
  },
  {
    icon: Lock,
    title: 'Zero Data Sharing — Ever',
    description:
      'We use the minimum data needed to do the job. We have no investors, no ad partners, and we will never sell your information. You can delete everything instantly.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding bg-[#022136]">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Everything you need.{' '}
            <span className="text-[#B8C4CC] font-normal">Nothing you don't.</span>
          </h2>
        </motion.div>

        {/* Features grid — asymmetric: 2 large top + 4 smaller below */}
        <div className="space-y-5">
          {/* Row 1: 2 wide cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#2D3847] border border-[#2A4A68] rounded-2xl p-8 flex gap-5 hover:border-[#00BFFF]/40 transition-colors duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00BFFF]/20 transition-colors duration-200">
                  <feature.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-[#B8C4CC] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 4 compact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.slice(2).map((feature, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 2) * 0.08 }}
                viewport={{ once: true }}
                className="bg-[#2D3847] border border-[#2A4A68] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00BFFF]/40 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center group-hover:bg-[#00BFFF]/20 transition-colors duration-200">
                  <feature.icon className="w-5 h-5 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1.5">{feature.title}</h3>
                  <p className="text-[#B8C4CC] text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
