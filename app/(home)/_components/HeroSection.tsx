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
    titlePlain: "Wear the Pride of",
    titleAccent: "Nepal's Culture",
    subtitle:
      "Rent authentic Magar, Tharu, Rai, Gurung and many more dresses for events, ceremonies, and stage performances.",
    cta: { label: "Browse Rentals", href: "/rentals" },
    ctaSecondary: { label: "Learn More", href: "/about" },
  },
  {
    image: "/hero2.jpg",
    tag: "Professional Dance Classes",
    titlePlain: "Learn the Art of",
    titleAccent: "Traditional Dance",
    subtitle:
      "Join our professional dance classes and master Nepali cultural performances with expert instructors.",
    cta: { label: "Explore Classes", href: "/classes" },
    ctaSecondary: { label: "About Us", href: "/about" },
  },
  {
    image: "/hero3.jpg",
    tag: "Authentic · Premium · Affordable",
    titlePlain: "Celebrate Every Occasion",
    titleAccent: "in Style",
    subtitle:
      "From weddings to school performances, we have the perfect traditional costume for every moment.",
    cta: { label: "Book Now", href: "/rentals" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
  },
];

export default function HeroSection() {
  return (
    <div className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
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
              alt={slide.titlePlain}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 flex items-center justify-center text-center">
              <Container>
                <div className="mx-auto max-w-2xl flex flex-col items-center gap-5 px-4">
                  <span className="inline-block rounded-full bg-white/15 border border-white/50 px-5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                    {slide.tag}
                  </span>

                  <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    <span className=" font-bold">{slide.titlePlain} </span>

                    <span className=" font-bold  ">{slide.titleAccent}</span>
                  </h1>

                  <p className="max-w-lg text-base font-normal leading-relaxed text-white/90 md:text-lg">
                    {slide.subtitle}
                  </p>

                  <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href={slide.cta.href}
                      className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 active:scale-95"
                    >
                      {slide.cta.label}
                    </Link>

                    <Link
                      href={slide.ctaSecondary.href}
                      className="rounded-full bg-white/15 border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/25 active:scale-95"
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
