import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function GalleryHero() {
  return (
    <section className="relative h-[40vh] min-h-[240px] max-h-[380px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1600&q=80"
        alt="Pokhara Kala Kendra cultural gallery"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <Container>
          <nav className="flex items-center gap-1.5 text-xs text-white/50 font-medium mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Gallery</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight">
            Gallery
          </h1>
          <p className="mt-2 text-white/60 text-sm md:text-base max-w-sm">
            Moments from our cultural celebrations, performances, and costume showcases.
          </p>
        </Container>
      </div>
    </section>
  );
}
