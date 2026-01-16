'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Headphones } from 'lucide-react';

const features = [
  {
    title: '100% Authentic Products',
    description:
      'All smartphones are officially verified and sourced from trusted brands.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast & Secure Delivery',
    description:
      'Quick doorstep delivery with secure packaging across the country.',
    icon: Truck,
  },
  {
    title: '24/7 Customer Support',
    description:
      'Our dedicated support team is always ready to help you.',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Why <span className="text-[#CE8946]">Choose Us</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We deliver quality, reliability, and exceptional customer experience.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition text-center"
          >
            <item.icon className="mx-auto mb-5 text-[#CE8946]" size={48} />

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
