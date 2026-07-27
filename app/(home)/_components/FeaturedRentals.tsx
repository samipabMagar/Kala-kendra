import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";

const rentals = [
  {
    id: "magar",
    title: "Magar Traditional",
    category: "Costume Rental",
    image: "/hero1.jpg",
    href: "/costume-rental/magar",
  },
  {
    id: "gurung",
    title: "Gurung Attire",
    category: "Costume Rental",
    image: "/hero2.jpg",
    href: "/costume-rental/gurung",
  },
  {
    id: "tharu",
    title: "Tharu Cultural Dress",
    category: "Costume Rental",
    image: "/hero3.jpg",
    href: "/costume-rental/tharu",
  },
  {
    id: "bridal",
    title: "Bridal Collection",
    category: "Occasion Wear",
    image: "/hero1.jpg",
    href: "/costume-rental/bridal",
  },
];

export default function FeaturedRentals() {
  return (
    <section className="py-14 md:py-24 bg-[#fdf8f2] relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-3 block">
              The Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground pb-2">
              Heritage Showcase
            </h2>
            <p className="text-foreground/70 mt-4 text-lg">
              Discover authentic, beautifully preserved cultural outfits ready for your next
              celebration.
            </p>
          </div>
          <Link
            href="/costume-rental"
            className="group flex items-center gap-3 px-6 py-3.5 rounded-full border-2 border-foreground/10 hover:border-primary hover:bg-primary text-foreground hover:text-white transition-all duration-300 font-semibold shrink-0"
          >
            Explore Collection
            <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-4 lg:gap-4 h-[450px] lg:h-[500px] scrollbar-hide pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
          {rentals.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="relative flex-shrink-0 w-[85vw] md:w-[60vw] snap-center lg:w-auto lg:flex-1 rounded-2xl overflow-hidden transition-[flex] duration-700 ease-out lg:hover:flex-[3] group block bg-black isolate"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 lg:opacity-60 lg:group-hover:opacity-100"
                sizes="(max-width: 1024px) 85vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent lg:from-black/20 lg:via-transparent lg:to-transparent lg:group-hover:from-black/90 lg:group-hover:via-black/30 transition-all duration-500 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 md:p-8 pointer-events-none h-1/2 lg:h-full">
                <div className="transform translate-y-0 lg:translate-y-6 lg:group-hover:translate-y-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="text-secondary font-medium tracking-wider text-xs uppercase mb-2 block whitespace-nowrap">
                    {item.category}
                  </span>

                  <h3 className="text-white text-2xl md:text-3xl font-bold font-serif leading-tight mb-4 lg:whitespace-nowrap flex items-center gap-4">
                    {item.title}
                    <span className="hidden lg:block w-12 h-px bg-white/50 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300 scale-x-0 group-hover:scale-x-100 origin-left" />
                  </h3>

                  <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                    <span className="border-b border-white/50 pb-0.5">Discover the look</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
