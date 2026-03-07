'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, CreditCard, Eye } from 'lucide-react';

const cards = [
  {
    icon: Mail,
    title: 'Reduce Phishing & Hacking Risk',
    description:
      'Hackers find your email and phone through data brokers to send convincing fake alerts — tricking you into handing over banking credentials or social media access.',
    stat: '91%',
    statLabel: 'of cyberattacks start with exposed personal data',
  },
  {
    icon: Phone,
    title: 'Stop Spam Calls & Texts',
    description:
      'Predatory lead-gen companies harvest and sell your phone number, age, and address to hundreds of businesses that bombard you with unwanted calls and texts.',
    stat: '50B+',
    statLabel: 'robocalls placed in the US each year',
  },
  {
    icon: CreditCard,
    title: 'Prevent Identity Theft',
    description:
      'Thieves combine your publicly available address, birthdate, and court records to open credit cards and take out loans in your name — often going undetected for months.',
    stat: '$10K',
    statLabel: 'average identity theft victim loss',
  },
  {
    icon: Eye,
    title: 'Shrink Your Digital Footprint',
    description:
      'Limiting publicly available personal data makes it exponentially harder for stalkers, harassers, and malicious actors to locate, track, or target you online.',
    stat: '4,000+',
    statLabel: 'data brokers currently operating in the US',
  },
];

export default function AwarenessSection() {
  return (
    <section className="section-padding bg-[#022136]">
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
            Why It Matters
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Your exposed data is a weapon.{' '}
            <span className="text-[#B8C4CC] font-normal">
              Anyone can buy it for pennies.
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#2D3847] border border-[#2A4A68] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#00BFFF]/40 transition-colors duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00BFFF]/10 flex items-center justify-center group-hover:bg-[#00BFFF]/20 transition-colors duration-200">
                <card.icon className="w-5 h-5 text-[#00BFFF]" />
              </div>
              <h3 className="text-white font-bold text-base leading-snug">
                {card.title}
              </h3>
              <p className="text-[#B8C4CC] text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <div className="pt-3 border-t border-[#2A4A68]">
                <div className="text-[#FF8A00] font-bold text-xl">{card.stat}</div>
                <div className="text-[#7A92A8] text-xs mt-0.5">{card.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
