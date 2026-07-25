import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Costume Rentals",
    description:
      "Authentic Magar, Gurung, Tharu, and Newari attire for cultural programs, school events, and dance competitions.",
    image: "/hero1.jpg",
    href: "/rentals",
  },
  {
    number: "02",
    title: "Dance Classes",
    description:
      "Structured classes for all ages in traditional Nepali folk dances — from beginners to stage performers.",
    image: "/hero2.jpg",
    href: "/dance-classes",
  },
  {
    number: "03",
    title: "Event Costuming",
    description:
      "Full costume planning for schools, colleges, and cultural organizations. We handle the wardrobe, you own the stage.",
    image: "/hero3.jpg",
    href: "/rentals",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-14 md:py-24 bg-[#fdf8f2]">
      <Container>
        <div className="mb-10">
          <span className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-sm mb-3">
            <span className="w-8 h-[2px] bg-primary" />
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground font-serif">
            Our Services
          </h2>
        </div>

        <div className="flex flex-col gap-0 md:hidden border-t border-foreground/10">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="flex items-start gap-4 py-6 border-b border-foreground/10 group"
            >
              <div className="shrink-0 pt-1">
                <span className="text-xs font-black text-primary">{service.number}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-extrabold text-foreground font-serif mb-2 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-foreground/55 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-primary font-bold text-xs">
                  Explore
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden md:block border-t border-foreground/10">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group flex items-start gap-6 border-b border-foreground/10 py-6 overflow-hidden transition-all duration-500 hover:py-10 hover:bg-white hover:px-6 hover:rounded-2xl hover:-mx-6"
            >
              <span className="text-sm font-bold text-foreground/30 pt-1 shrink-0 w-8 transition-colors duration-300 group-hover:text-primary">
                {service.number}
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="text-4xl font-extrabold text-foreground font-serif leading-tight transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>

                {/* Description — slides down on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500">
                  <p className="text-foreground/60 text-base mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="max-h-0 overflow-hidden group-hover:max-h-12 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 mt-4 text-primary font-bold text-sm">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right: Image — slides in from right on hover */}
              <div className="shrink-0 w-0 overflow-hidden rounded-2xl opacity-0 group-hover:w-52 group-hover:opacity-100 transition-all duration-500">
                <div className="relative w-52 h-36 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
