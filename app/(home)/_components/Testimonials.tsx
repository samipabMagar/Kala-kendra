"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ReviewCard, ReviewProps } from "@/components/ui/ReviewCard";

const testimonials: ReviewProps[] = [
  {
    quote:
      "The attention to detail in their traditional Gurung attire is unmatched! My daughter looked absolutely stunning for her cultural dance competition.",
    author: "Sita Gurung",
    time: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
  },
  {
    quote:
      "Highly professional dance instructors. The folk dance choreography was top-notch. Highly recommend to everyone in Pokhara.",
    author: "Ramesh Thapa",
    time: "1 month ago",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
  },
  {
    quote:
      "We rented 20 costumes for our school's annual function. Spotless, authentic, and delivered exactly on time.",
    author: "Priya Sharma",
    time: "3 months ago",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
  },
  {
    quote:
      "Not just a rental shop — it is a true cultural hub. The staff helped me understand the significance of the Newari dress pieces before I wore them.",
    author: "Anil Shrestha",
    time: "2 months ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "The best place in town for traditional dresses. I found an authentic Tharu outfit that fit perfectly for my college farewell.",
    author: "Bikash Chaudhary",
    time: "1 week ago",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&q=80",
  },
  {
    quote:
      "Amazing cultural dance classes! The trainers are very patient and focus a lot on the traditional expressions.",
    author: "Manisha Pun",
    time: "4 months ago",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80",
  },
  {
    quote:
      "Excellent customer service and very clean costumes. They have a massive variety for almost every ethnic group in Nepal.",
    author: "Kiran G.C.",
    time: "6 months ago",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  },
  {
    quote:
      "I've rented from other places before, but Pokhara Kala Kendra preserves the true essence and authenticity of the clothing. Outstanding.",
    author: "Sabina Bhattarai",
    time: "2 weeks ago",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=100&q=80",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      // Math.ceil deals with fractional pixel scroll values on some devices
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#fdf8f2] overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          width: max-content;
        }
        .marquee-container:hover .animate-scroll-left {
          animation-play-state: paused;
        }
      `,
        }}
      />

      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center justify-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
            <span className="w-8 h-[2px] bg-primary" />
            Wall of Love
            <span className="w-8 h-[2px] bg-primary" />
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground font-serif">
            100+ Happy Clients
          </h2>
          <p className="mt-6 text-foreground/60 text-lg leading-relaxed">
            From schools to cultural programs, see why Pokhara trusts us to preserve and celebrate
            our beautiful traditions.
          </p>
        </div>
      </Container>

      {/* Mobile: Custom Scroll Carousel with Buttons */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 items-stretch overflow-x-auto snap-x snap-mandatory px-4 pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((review, idx) => (
            <div
              key={`mob-${idx}`}
              className="snap-center shrink-0 h-auto flex flex-col items-stretch"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Arrows */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-colors ${
              canScrollLeft
                ? "text-primary bg-white hover:bg-primary hover:text-white"
                : "text-primary/30 bg-primary/5 cursor-not-allowed"
            }`}
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center transition-colors ${
              canScrollRight
                ? "text-primary bg-white hover:bg-primary hover:text-white"
                : "text-primary/30 bg-primary/5 cursor-not-allowed"
            }`}
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Desktop: Endless Marquee. Hidden on mobile */}
      <div className="hidden md:block marquee-container overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="animate-scroll-left flex items-stretch gap-6 md:gap-8 px-3 py-4">
          {[...testimonials, ...testimonials].map((review, idx) => (
            <div key={`desk-${idx}`} className="shrink-0 h-auto flex flex-col items-stretch py-2">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
