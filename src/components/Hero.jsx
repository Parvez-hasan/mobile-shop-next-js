"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function Hero() {
  const images = [
    "/images/istockphoto-1329384615-1024x1024.jpg",
    "/images/portrait-happy-woman-shopping-online.jpg",
    "/images/prakash-mobile-shop-handia-allahabad-mobile-phone-dealers-fMazroVwX2.webp",
    "/images/rows-of-new-smart-phones-on-display-in-ee-mobile-phone-shop-TRB3M2.jpg",
    "/images/smsgadget-2025-11-01-6905ccdb86608.webp",
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
            <span className="text-[#e53af8]">Smartphones</span> Today
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Shop premium smartphones from top brands with guaranteed quality,
            competitive pricing, and fast delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/mobiles">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cursor-pointer bg-[#e537f8] shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white text-base font-semibold group">
                  <div className="relative overflow-hidden ">
                    <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                       Explore Mobiles
                    </p>
                    <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                       Explore Mobiles
                    </p>
                  </div>
                </button>
              </div>
            </Link> */}

            <Link href="/mobiles" className="inline-flex justify-center">
              <span className="bg-[#e537f8] shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border border-slate-500 text-white text-base font-semibold group">
                <span className="relative overflow-hidden block">
                  <span className="group-hover:-translate-y-7 block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Explore Mobiles
                  </span>
                  <span className="absolute top-7 left-0 group-hover:top-0 block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Explore Mobiles
                  </span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
