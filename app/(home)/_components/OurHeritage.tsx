"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";

export default function OurHeritage() {
  const baseCardClass =
    "absolute w-[45%] max-w-[160px] md:max-w-[240px] rounded-xl md:rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom hover:!scale-110 hover:!z-50";

  return (
    <section className="relative py-10 md:py-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[120%] md:w-[70%] h-full bg-[#fdf8f2] -z-10 rounded-bl-[200px] skew-y-3 origin-top-right transform -translate-y-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="relative w-full h-[320px] md:h-[500px] flex items-center justify-center group mt-6 md:mt-0">
            <div className="absolute top-0 left-0 md:left-0 z-0 flex items-center justify-center w-20 h-20 md:w-32 md:h-32 bg-primary rounded-full shadow-lg text-white animate-[spin_12s_linear_infinite] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <svg viewBox="0 0 100 100" className="w-full h-full p-2" overflow="visible">
                <path
                  id="textPath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="transparent"
                />
                <text className="text-[10px] font-bold tracking-[0.16em] uppercase fill-white">
                  <textPath href="#textPath" startOffset="0%">
                    • POKHARA KALA KENDRA • POKHARA KALA KENDRA
                  </textPath>
                </text>
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border border-white/40 rounded-full" />
              </div>
            </div>

            <div
              className={`${baseCardClass} aspect-[3/4] shadow-2xl z-10 rotate-[-15deg] -translate-x-[40%] translate-y-[5%] md:rotate-[-4deg] md:-translate-x-2 md:translate-y-2 group-hover:rotate-[-24deg] group-hover:-translate-x-[60%] group-hover:translate-y-[-10%] group-hover:shadow-xl hover:!rotate-[-10deg]`}
            >
              <Image src="/hero1.jpg" alt="Nepalese Culture" fill className="object-cover" />
              <div className="absolute inset-0 border-4 md:border-8 border-white rounded-xl md:rounded-[2rem] pointer-events-none" />
            </div>

            <div
              className={`${baseCardClass} aspect-[4/5] shadow-2xl z-20 rotate-[-5deg] -translate-x-[15%] translate-y-[2%] md:rotate-[-1deg] md:translate-x-1 md:translate-y-1 group-hover:rotate-[-8deg] group-hover:-translate-x-[20%] group-hover:translate-y-[-15%] group-hover:shadow-xl hover:!rotate-0`}
            >
              <Image src="/hero2.jpg" alt="Cultural Dress" fill className="object-cover" />
              <div className="absolute inset-0 border-4 md:border-8 border-white rounded-xl md:rounded-[2rem] pointer-events-none" />
            </div>

            <div
              className={`${baseCardClass} aspect-[4/5] shadow-xl z-30 rotate-[5deg] translate-x-[15%] translate-y-[2%] md:rotate-[2deg] md:-translate-x-1 md:translate-y-0 group-hover:rotate-[8deg] group-hover:translate-x-[20%] group-hover:translate-y-[-15%] group-hover:shadow-xl hover:!rotate-0`}
            >
              <Image src="/hero3.jpg" alt="Traditional Attire" fill className="object-cover" />
              <div className="absolute inset-0 border-4 md:border-8 border-white rounded-xl md:rounded-[2rem] pointer-events-none" />
            </div>

            <div
              className={`${baseCardClass} aspect-[3/4] shadow-lg z-40 rotate-[15deg] translate-x-[40%] translate-y-[5%] md:rotate-[5deg] md:translate-x-2 md:translate-y-1 group-hover:rotate-[24deg] group-hover:translate-x-[60%] group-hover:translate-y-[-10%] group-hover:shadow-2xl hover:!rotate-[10deg]`}
            >
              <Image src="/hero1.jpg" alt="Heritage Showcase" fill className="object-cover" />
              <div className="absolute inset-0 border-4 md:border-8 border-white rounded-xl md:rounded-[2rem] pointer-events-none" />
            </div>

            <p className="hidden md:block absolute bottom-4 text-xs font-bold text-foreground/40 tracking-widest uppercase opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
              Hover to reveal
            </p>
          </div>

          <div className="relative z-20 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <span className="inline-flex items-center gap-2 md:gap-3 text-primary font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                <span className="w-6 md:w-8 h-[2px] bg-primary"></span>
                Our Story
              </span>
              <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-[10px] md:text-xs font-bold tracking-widest hidden md:inline-block">
                EST. 1990
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-foreground pb-4 md:pb-6 leading-[1.1] font-serif">
              Preserving <br />
              <span className="text-secondary italic font-light">Nepal&apos;s Soul</span>
            </h2>

            <p className="text-foreground/75 text-sm md:text-lg lg:text-xl font-medium mb-4 md:mb-6 leading-relaxed relative before:content-[''] before:absolute before:-left-4 md:before:-left-6 before:top-2 before:bottom-2 before:w-1 before:bg-secondary/30 before:rounded-full pl-2">
              For over three decades, Pokhara Kala Kendra has been deeply committed to safeguarding
              the rich tapestry of Nepalese culture.
            </p>
            <p className="text-foreground/60 text-xs md:text-base lg:text-lg mb-8 md:mb-8 leading-relaxed font-light">
              We proudly provide authentic, high-quality traditional attire for
              <strong className="font-semibold text-foreground">
                {" "}
                cultural programs, school events, dance competitions,{" "}
              </strong>
              and our intensive{" "}
              <strong className="font-semibold text-foreground">dance classes</strong>. Whether you
              need a Magar, Gurung, Tharu, or Newari dress, our mission is to ensure the beauty of
              our heritage continues to shine brilliantly across new generations.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 pt-6 md:pt-4 border-t border-secondary/10">
              <div className="group">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-1 md:mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                  30+
                </h4>
                <span className="text-[10px] md:text-xs lg:text-sm text-foreground/60 font-bold uppercase tracking-widest pl-1">
                  Years of Legacy
                </span>
              </div>
              <div className="group">
                <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-1 md:mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                  100%
                </h4>
                <span className="text-[10px] md:text-xs lg:text-sm text-foreground/60 font-bold uppercase tracking-widest pl-1">
                  Authentic Attire
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
