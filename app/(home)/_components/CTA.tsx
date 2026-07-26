import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function CTA() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-14 md:py-12"
          style={{ background: "linear-gradient(135deg, #1a0408 0%, #2d060c 100%)" }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 110% 50%, rgba(200,16,46,0.4) 0%, transparent 65%)",
            }}
          />

          {/* Devanagari ghost watermark */}
          <span
            aria-hidden
            className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-extrabold font-serif text-white/[0.04] select-none leading-none pointer-events-none"
          >
            कलाकेन्द्र
          </span>

          {/* Content row — stacks on mobile, side by side on desktop */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left: Text */}
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
                Ready to Begin?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif leading-tight">
                Dress the Part. <span className="text-primary">Dance the Tradition.</span>
              </h2>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <Link
                href="/rentals"
                className="group inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 hover:gap-3"
              >
                Browse Costumes
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={siteConfig.contact.phone.link}
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
