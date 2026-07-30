import Container from "@/components/ui/Container";
import { GraduationCap, Film, Trophy, Tent } from "lucide-react";

const offerings = [
  {
    title: "School Programs",
    desc: "Costumes for educational performances and cultural days.",
    icon: GraduationCap,
  },
  {
    title: "Period Rentals",
    desc: "Period garments and ornaments for professional cinema.",
    icon: Film,
  },
  {
    title: "Dance Training",
    desc: "Professional coaching designed for authentic traditional performances.",
    icon: Trophy,
  },
  {
    title: "Cultural Events",
    desc: "Exclusive choreographies for local festivals & ceremonies.",
    icon: Tent,
  },
];

export default function AboutValues() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F5]">
      <Container>
        {/* Top Header Section */}
        <div className="flex flex-col mb-12 lg:mb-16">
          <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
            Core Services
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-black text-foreground">
            Cultivating <br className="hidden md:block" />
            the Arts
          </h2>
        </div>

        {/* Level Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col bg-white p-8 md:p-10 shadow-sm border border-black/5 hover:shadow-md hover:border-black/10 transition-all duration-300 h-full"
              >
                <Icon className="w-6 h-6 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
