'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Vanyshr and how does it work?",
      answer: "Vanyshr is a comprehensive privacy protection service that automatically removes your personal information from data broker websites. We scan hundreds of data broker sites, identify your information, and submit removal requests on your behalf."
    },
    {
      question: "How long does it take to remove my data?",
      answer: "Data removal typically takes 30-90 days, depending on the data broker. We continuously monitor and follow up on removal requests to ensure your information is properly deleted."
    },
    {
      question: "Is my information safe with Vanyshr?",
      answer: "Absolutely. We use bank-level encryption and never store your sensitive personal information. Your privacy and security are our top priorities."
    },
    {
      question: "How often do you scan for new data?",
      answer: "We perform monthly scans to check for new instances of your personal information appearing on data broker sites, ensuring ongoing protection."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your data removal requests will continue to be processed, and you'll maintain access until the end of your billing period."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment in full."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our privacy protection service
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-brand-text">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
