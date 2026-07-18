"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Container from "@/components/ui/Container";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./hero.css";

const slides = [
  {
    image: "/hero1.jpg",
    tag: "Cultural Dress Rental",
    title: "Wear the Pride of Nepal's Culture",
    subtitle:
      "Rent authentic Magar, Tharu, Rai, Gurung and many more dresses for events, ceremonies, and stage performances.",
    cta: { label: "Browse Rentals", href: "/rentals" },
    ctaSecondary: { label: "Learn More", href: "/about" },
  },
  {
    image: "/hero2.jpg",
    tag: "Professional Dance Classes",
    title: "Learn the Art of Traditional Dance",
    subtitle:
      "Join our professional dance classes and master Nepali cultural performances with expert instructors.",
    cta: { label: "Explore Classes", href: "/classes" },
    ctaSecondary: { label: "About Us", href: "/about" },
  },
  {
    image: "/hero3.jpg",
    tag: "Authentic · Premium · Affordable",
    title: "Celebrate Every Occasion in Style",
    subtitle:
      "From weddings to school performances, we have the perfect traditional costume for every moment.",
    cta: { label: "Book Now", href: "/rentals" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-5rem)] min-h-[560px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".hero-pagination" }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />

            {/* Neutral gradient — preserves photo colors, darkens bottom for text clarity */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/60" />

            <div className="absolute inset-0 flex items-center justify-center text-center">
              <Container>
                <div className="mx-auto max-w-2xl flex flex-col items-center gap-5 px-4">
                  {/* Tag pill */}
                  <span className="inline-block rounded-full bg-white/15 backdrop-blur-sm border border-white/50 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                    {slide.tag}
                  </span>

                  <h1 className="text-4xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="max-w-lg text-base leading-relaxed text-white/95 drop-shadow md:text-lg">
                    {slide.subtitle}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href={slide.cta.href}
                      className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg  transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
                    >
                      {slide.cta.label}
                    </Link>

                    <Link
                      href={slide.ctaSecondary.href}
                      className="rounded-full bg-white/20 border border-white/60 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/30 active:scale-95 shadow-sm"
                    >
                      {slide.ctaSecondary.label}
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-pagination absolute bottom-8 left-0 right-0 z-10 flex justify-center" />
    </div>
  );
}
