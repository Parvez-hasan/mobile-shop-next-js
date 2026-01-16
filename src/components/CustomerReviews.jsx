'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  {
    name: 'Rahim Ahmed',
    role: 'Verified Buyer',
    review:
      'Excellent service and fast delivery. The phone was perfectly packed and genuine.',
    image: '/users/Untitled design (1).png',
  },
  {
    name: 'Nusrat Jahan',
    role: 'Happy Customer',
    review:
      'Great prices compared to other stores. Customer support was very helpful.',
    image: '/users/images-euro.jpeg',
  },
  {
    name: 'Marissa',
    role: 'Tech Enthusiast',
    review:
      'Amazing experience! Smooth ordering process and authentic products.',
    image: '/users/427725259_361283546867809_4276318470941113782_n-removebg-preview.png',
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 md:px-10 bg-gray-50">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          What Our <span className="text-[#CE8946]">Customers Say</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Real feedback from our satisfied customers.
        </p>
      </motion.div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <div className="flex items-center gap-4 mb-5">
              <Image
                src={review.image}
                alt={review.name}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{review.review}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
