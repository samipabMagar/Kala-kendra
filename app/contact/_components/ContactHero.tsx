import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative h-[30vh] min-h-[200px] max-h-[300px] w-full overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80"
        alt="Contact Pokhara Kala Kendra"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 font-medium mb-3">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Contact</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight">
            Contact
          </h1>
          <p className="mt-2 text-white/60 text-sm md:text-base max-w-xs">
            We&apos;d love to hear from you. Reach out for consultations, inquiries, and bookings.
          </p>
        </Container>
      </div>
    </section>
  );
}
