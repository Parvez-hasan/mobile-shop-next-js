'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Link from 'next/link';

export default function Hero() {
  const images = [
    '/images/istockphoto-1329384615-1024x1024.jpg',
    '/images/portrait-happy-woman-shopping-online.jpg',
    '/images/prakash-mobile-shop-handia-allahabad-mobile-phone-dealers-fMazroVwX2.webp',
    
  ];

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
              aria-label="Mobile shop banner image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="max-w-3xl text-center text-white animate-fade-up">
          <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide rounded-full bg-white/10 border border-white/20">
            Trusted Mobile Store
          </span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Discover the Latest <br />
            <span className="text-[#CE8946]">Smartphones</span> Today
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Shop premium smartphones from top brands with guaranteed quality,
            competitive pricing, and fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/items"
              className="px-8 py-3 rounded-lg text-base font-semibold bg-[#CE8946] text-white hover:opacity-90 transition"
            >
              Explore Mobiles
            </Link>

            <Link
              href="/login"
              className="px-8 py-3 rounded-lg text-base font-semibold border border-white/60 text-white hover:bg-white hover:text-black transition"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}