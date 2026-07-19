import Image from "next/image";
import Container from "@/components/ui/Container";

const stats = [
  { label: "Happy Students", value: "10k+" },
  { label: "Cultural Dresses", value: "500+" },
  { label: "Expert Instructors", value: "50+" },
  { label: "Years Experience", value: "15+" },
];

export default function StatsSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-background py-24 lg:py-36">
      <div className="pointer-events-none absolute bottom-0 right-[-10%] top-0 w-full lg:w-[65%] opacity-40">
        <div className="relative h-full w-full overflow-hidden rounded-l-[4rem] lg:rounded-bl-[12rem] lg:rounded-tl-none">
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
            alt="Nepalese Cultural Architecture"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
      </div>

      <Container className="relative z-20">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-24">
          <div className="flex flex-col gap-6 lg:w-[45%]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-secondary" />
              <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                Our Legacy
              </span>
            </div>
            <h2 className="text-3xl font-light leading-snug text-foreground md:text-4xl lg:text-5xl lg:leading-tight">
              Celebrating <span className="font-semibold text-primary">Nepal&apos;s</span> rich
              culture through art and attire.
            </h2>
          </div>

          {/* Right: Massive Typographic Stats */}
          <div className="lg:w-[55%]">
            <div className="grid grid-cols-2 gap-x-8 gap-y-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col border-l-2 border-primary/10 pl-6 transition-colors duration-500 hover:border-secondary"
                >
                  <span className="text-4xl font-extralight tracking-tighter text-primary md:text-6xl drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-foreground/60 leading-relaxed md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
