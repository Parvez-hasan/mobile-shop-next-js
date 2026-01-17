'use client';

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Our Mobile Shop
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-600">Smart Mobile Shop</span>, 
            your trusted destination for the latest smartphones, accessories, and smart gadgets.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to make technology accessible and affordable for everyone.
            From flagship smartphones to essential accessories, we ensure quality,
            authenticity, and excellent customer service.
          </p>

          <div className="flex gap-6 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">10K+</h3>
              <p className="text-gray-500 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/HT4hP8V1/nsys-group-Zvh-ZBzwm-Lic-unsplash.jpg"
            alt="Mobile Shop"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}
