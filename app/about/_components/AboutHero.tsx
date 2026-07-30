import Image from "next/image";
import Container from "@/components/ui/Container";

export default function AboutHero() {
  return (
    <section className="relative pt-8 pb-12 md:pt-16 md:pb-16 bg-[#FCFBF8] border-b border-black/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Typography Focus */}
          <div className="flex flex-col relative z-10 lg:pl-4 xl:pl-8">
            {/* Small top label */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.25em]">
                EST. 1994 • POKHARA, NEPAL
              </span>
              <div className="w-12 h-[1px] bg-secondary/50 hidden sm:block" />
            </div>

            {/* Massive Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-serif font-black text-foreground leading-[1] md:leading-[0.9] tracking-tight mb-6 md:mb-8">
              Legacy <br />
              <span className="text-primary italic font-medium">Defined.</span>
            </h1>

            {/* Context paragraph */}
            <p className="text-foreground/70 text-base md:text-lg max-w-sm leading-relaxed mb-8 md:mb-10 pl-4 border-l-2 border-primary/20">
              Preserving our vibrant Nepalese culture, one stitch, one rhythm, and one student at a
              time.
            </p>

            {/* Bottom journey label */}
            <div className="flex items-center gap-4">
              <div className="w-12 md:w-16 h-[2px] bg-secondary" />
              <span className="text-secondary font-bold text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] italic">
                A 30 Year Journey
              </span>
            </div>

            {/* Vertical text decor (desktop only) */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 xl:translate-x-12 rotate-90 items-center gap-4 text-[10px] text-foreground/30 font-bold uppercase tracking-[0.3em]">
              <span>Pokhara Valley</span>
              <span>•</span>
              <span>Cultural Integrity</span>
            </div>
          </div>

          {/* Right: Master Image */}
          <div className="relative w-full h-[300px] sm:h-[320px] lg:h-[400px] xl:h-[450px] max-w-lg mx-auto lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?auto=format&fit=crop&w=1200&q=80"
              alt="Traditional Classical Dancer"
              fill
              priority
              className="object-cover object-center rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
