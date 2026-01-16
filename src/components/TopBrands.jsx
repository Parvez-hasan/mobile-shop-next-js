'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
  { name: 'Apple', logo: '/brands/apple_270781.png' },
  { name: 'Samsung', logo: '/brands/google_5968863.png' },
  { name: 'Google', logo: '/brands/samsung_882747.png' },
  { name: 'Xiaomi', logo: '/brands/xiaomi_882618.png' },
  { name: 'OnePlus', logo: '/brands/one-plus_882743.png' },
];

export default function TopBrands() {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Top <span className="text-[#CE8946]">Brands</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We partner with the world’s most trusted smartphone brands.
        </p>
      </motion.div>

      {/* Brand Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
