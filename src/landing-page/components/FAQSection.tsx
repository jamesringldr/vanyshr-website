'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useMobileHandoff } from '../../context/MobileHandoffContext';

const faqData = [
  {
    question: 'What is Vanyshr and how does it work?',
    answer:
      'Vanyshr is an AI-powered privacy protection service that finds and removes your personal information from data broker websites. We scan 100+ brokers, identify every record tied to your identity, and automatically submit legally-required removal requests on your behalf. Monthly scans ensure your data stays off the web long-term.',
  },
  {
    question: 'How long does data removal take?',
    answer:
      "Most removals complete within 30\u201390 days, depending on the broker. Some respond quickly; others require legal follow-up. We handle all of it and flag any non-compliant brokers so you're always in the loop.",
  },
  {
    question: 'Is my information safe with Vanyshr?',
    answer:
      'Absolutely. We use the minimum amount of personal information needed to do the job, store it with bank-level encryption, and never share or sell it. If you close your account, all your data is permanently deleted — no backups, no transfers.',
  },
  {
    question: 'How often do you scan for new data?',
    answer:
      'Subscribers receive monthly scans. Data brokers constantly re-acquire and re-list information, so ongoing monitoring is essential. When new records appear, we immediately submit fresh removal requests.',
  },
  {
    question: 'What is a QuickScan?',
    answer:
      'A QuickScan is a free, no-account-required scan that shows you exactly what personal data is currently exposed about you across major data broker sites. It takes under 2 minutes and requires only your name and general location to run.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      "Yes. Cancel anytime with no penalty. You'll retain access until the end of your billing period, and if you're within your first 30 days, you're eligible for a full refund — no questions asked.",
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer:
      "Yes — 30 days, no questions asked. If you're unsatisfied for any reason within your first month, we'll refund your payment in full.",
  },
  {
    question: 'Will my data come back after removal?',
    answer:
      "Without ongoing monitoring — yes, often within months. That's exactly why we offer subscription plans. Our monthly scans catch re-listings immediately and re-submit removals before your data becomes accessible again.",
  },
];

export default function FAQSection() {
  const { handleQuickScanCTA } = useMobileHandoff();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="section-padding bg-[#0a1d2e]">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">

          {/* Left: Header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-[#00BFFF] text-xs font-medium tracking-widest uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight mb-5">
              Questions we get a lot
            </h2>
            <p className="text-[#B8C4CC] text-base leading-relaxed mb-8">
              Can't find what you're looking for? Email us at{' '}
              <a
                href="mailto:hello@vanyshr.com"
                className="text-[#00BFFF] hover:underline"
              >
                hello@vanyshr.com
              </a>
            </p>
            <a
              href="https://app.vanyshr.com/quick-scan"
              onClick={handleQuickScanCTA}
              className="inline-flex items-center gap-2 bg-[#00BFFF] hover:bg-[#00D4FF] text-[#022136] font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
            >
              Run a Free QuickScan
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right: Accordion */}
          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  openIndex === index
                    ? 'border-[#00BFFF]/50 bg-[#00BFFF]/5'
                    : 'border-[#2A4A68] bg-[#2D3847] hover:border-[#00BFFF]/30'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-white font-semibold text-sm leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 text-[#00BFFF]">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-[#B8C4CC] text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
