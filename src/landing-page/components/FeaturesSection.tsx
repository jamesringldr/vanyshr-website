'use client';

import { motion } from 'framer-motion';
import { Search, RotateCcw, Calendar, PieChart, Trash2, Lock } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "AI Powered Discovery",
      description: "Scan and remove from 100+ data broker websites"
    },
    {
      icon: RotateCcw,
      title: "Automated Process",
      description: "Set it and forget it - we handle everything automatically"
    },
    {
      icon: Calendar,
      title: "Ongoing Protection",
      description: "Monthly scans ensure new data is caught and removed"
    },
    {
      icon: PieChart,
      title: "Detailed Reports",
      description: "Get comprehensive reports on your data removal progress"
    },
    {
      icon: Trash2,
      title: "Fast Removal",
      description: "Most removals completed within 30-90 days"
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description: "We never sell or share your data. You can remove it permanently at any time."
    }
  ];

  return (
    <section className="section-padding bg-brand-bg">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            A comprehensive solution to privacy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-brand-text mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
