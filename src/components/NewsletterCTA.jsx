
'use client';

import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  return (
    <section className="py-24 px-4 md:px-10 bg-black text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#CE8946]/20 via-transparent to-[#CE8946]/20 blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Stay Updated with the Latest <br />
          <span className="text-[#CE894]">Smartphones & Offers</span>
        </h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Subscribe to our newsletter and be the first to know about new arrivals,
          exclusive deals, and special discounts.
        </p>

        {/* Input Card */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl max-w-xl mx-auto border border-white/20">
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CE8946]"
              required
            />

            <button
              type="submit"
              className="px-8 py-3 rounded-lg font-semibold bg-[#e537f8] text-white hover:opacity-90 transition whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        </div>

        <p className="text-xs text-gray-400 mt-5">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}
