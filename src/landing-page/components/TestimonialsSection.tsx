'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-brand-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-brand-text rounded-xl p-8 mx-auto"
          style={{ maxWidth: '80%', minWidth: '300px' }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-left">
            Vanyshr Manifesto
          </h3>
          <div className="text-gray-300 text-left space-y-4 leading-relaxed">
            <p>
              It started when I began getting hundreds of spam and scam calls — Medicare offers, fake real estate deals — 20 to 30 calls a day. It was annoying, but I could ignore it.
            </p>
            <p>
              Then it got personal. My mother was targeted by a phishing scam. The attackers had nothing but her phone number, but that was enough. They sent her a fake bank alert, tricking her into entering her credentials on a look‑alike login page. Within hours, her account was emptied.
            </p>
            <p>
              That was the moment I decided to understand exactly how our information gets out there — and how to take it back. I researched, investigated, and traced the sources of our exposure. I learned that data brokers and public records make it easy for scammers to find and target us.
            </p>
            <p>
              I started removing my own data. Then I did it for my friends and family. Then decided from pure hatred of these scammers that I wanted to build something for the masses.
            </p>
            <p>
              That when I put a small team together and we built Vanyshr — a tool to fight back against hackers, spammers, and scammers in the only way I could: by making their job harder.
            </p>
            <p>
              As such, we take the security of your data personally. We have no investors or affiliations to answer to. We dont partner with any other companies and we will NEVER sell your data or send spammy emails. We use the absolute minimum amount of your data needed and its securely stored. Its also 100% yours, we are just borrowing it, so the secod you ask to have it removed, its fully removed. No backups, not transferred to a different database, 100% Deleted.
            </p>
            <p>
              This isn't just software or just another GPT wrapper. It's my way of protecting the people I care about — and now, hopefully, you too.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
