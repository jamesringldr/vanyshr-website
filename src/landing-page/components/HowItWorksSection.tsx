'use client';

import { motion } from 'framer-motion';
import { ScanSearch, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useBetaModal } from '../../context/BetaModalContext';

const steps = [
  {
    number: '01',
    icon: ScanSearch,
    title: 'Scan & Discover',
    description:
      'We scan 100+ data broker websites using AI to find every instance of your personal information — name, address, phone, relatives, and more.',
    detail: 'Takes under 2 minutes',
  },
  {
    number: '02',
    icon: Trash2,
    title: 'Remove & Clean',
    description:
      'Vanyshr automatically files legally-required removal requests with each broker on your behalf — no forms to fill out, no calls to make.',
    detail: 'Most removals complete in 30–90 days',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Monitor & Protect',
    description:
      'Data brokers re-add information constantly. We run monthly scans and re-submit removal requests so your data stays off the web — permanently.',
    detail: 'Ongoing monthly protection',
  },
];

export default function HowItWorksSection() {
  const { openBetaModal } = useBetaModal();
  return (
    <section id="how-it-works" className="section-padding bg-[#0a1d2e]">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Set it once.{' '}
            <span className="text-[#00BFFF]">We handle the rest.</span>
          </h2>
          <p className="text-[#B8C4CC] text-lg mt-4 leading-relaxed">
            No paperwork. No phone calls. No expertise needed. Vanyshr automates the entire data removal process from start to finish.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-10 -right-4 z-10 items-center">
                  <ArrowRight className="w-5 h-5 text-[#2A4A68]" />
                </div>
              )}

              <div className="bg-[#2D3847] border border-[#2A4A68] rounded-2xl p-7 h-full flex flex-col gap-5 hover:border-[#00BFFF]/40 transition-colors duration-200">
                {/* Step number + icon */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-[#00BFFF]" />
                  </div>
                  <span className="text-4xl font-bold text-[#2A4A68] tracking-tighter">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-[#B8C4CC] text-sm leading-relaxed">{step.description}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#2A4A68]">
                  <span className="inline-flex items-center gap-1.5 text-[#00BFFF] text-xs font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] inline-block" />
                    {step.detail}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-[#B8C4CC] text-lg mb-6">
            <span className="text-white font-semibold">Start with a free scan.</span>{' '}
            Create an account, give us the basics, and we'll show you exactly what's exposed — right now.
          </p>
          <button
            onClick={openBetaModal}
            className="inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-[0_0_30px_rgba(0,191,255,0.25)] cursor-pointer"
          >
            Run My Free QuickScan
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-[#7A92A8] text-sm mt-3">No credit card required</p>
        </motion.div>
      </div>
    </section>
  );
}
