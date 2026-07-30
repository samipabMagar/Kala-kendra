import Image from "next/image";
import Container from "@/components/ui/Container";
import { Quote } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="py-20 md:py-32 bg-[#FAF9F5] border-b border-black/5 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Creative Overlapping Images (from previous design) */}
          <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mx-auto xl:mx-0 max-w-lg xl:max-w-none">
            {/* Background block behind images to anchor them */}
            <div className="absolute top-10 left-10 w-[70%] h-[70%] bg-[#EBE9E4] rounded-sm -z-10" />

            {/* Main large image */}
            <div className="absolute top-0 right-0 w-[75%] h-[75%] shadow-xl border-4 border-white z-10 group">
              <Image
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80"
                alt="Traditional Dance Arts"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Secondary overlapping image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] shadow-xl border-[6px] border-[#FAF9F5] z-20 group">
              <Image
                src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&w=800&q=80"
                alt="Cultural Heritage Preparation"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Message / Quote Box (Screenshot 2 design) */}
          <div className="flex flex-col relative z-10 xl:pl-8">
            <span className="text-primary font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
              A Message From Our Founders
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-[1.1] mb-8">
              Rahul Thapa Magar <br />
              <span className="font-normal italic text-foreground/80">& Rakhi Thapa</span>
            </h2>

            {/* The offset quote box */}
            <div className="relative border border-black/5 bg-white p-8 md:p-10 shadow-sm mt-4">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10 rotate-180" />

              <p className="text-foreground/80 italic leading-relaxed md:text-lg mb-6 relative z-10 pt-4">
                &quot;For over three decades, our vision has guided Pokhara Kala Kendra from a
                passionate local studio to a beloved institution for Nepalese arts.&quot;
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm md:text-base relative z-10">
                Our commitment to cultural preservation is rooted in a deep respect for tradition.
                Together, we have built an establishment where the authentic heritage of our culture
                is vibrantly lived and celebrated every single day.
              </p>

              <div className="flex items-center gap-4 pt-6 mt-8 border-t border-black/10">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em]">
                  Pokhara Kala Kendra
                </span>
                <div className="w-12 h-[1px] bg-secondary/30" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
