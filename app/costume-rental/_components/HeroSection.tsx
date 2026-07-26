"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function HeroSection() {
  return (
    <section className="relative h-[40vh] min-h-[240px] max-h-[380px] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=1600&q=80"
        alt="Nepali traditional cultural festival"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient: left opaque → right transparent, blending text into the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,5,5,0.88) 0%, rgba(20,5,5,0.70) 40%, rgba(20,5,5,0.30) 65%, transparent 85%)",
        }}
      />

      {/* Text content — left-aligned, vertically centered */}
      <div className="absolute inset-0 flex items-center">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 font-medium mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Costume Rental</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight">
            Costume Rental
          </h1>
          <p className="mt-2 text-white/60 text-sm md:text-base max-w-xs">
            500+ authentic Nepali ethnic costumes for every occasion.
          </p>
        </Container>
      </div>
    </section>
  );
}
