
'use client';

import { motion } from 'framer-motion';
import { Search, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    title: 'Browse Mobiles',
    description: 'Explore a wide range of smartphones from top brands.',
    icon: Search,
  },
  {
    title: 'Place Your Order',
    description: 'Choose your device and place an order in just a few clicks.',
    icon: ShoppingCart,
  },
  {
    title: 'Fast Delivery',
    description: 'Get your mobile delivered safely and quickly to your doorstep.',
    icon: Truck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          How It <span className="text-[#CE8946]">Works</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Buying your next smartphone is simple and hassle-free.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#CE8946]/10">
              <step.icon size={36} className="text-[#CE8946]" />
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {step.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed px-6">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
