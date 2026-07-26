import { Phone, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function MoreOptionsCTA() {
  return (
    <section className="bg-white border-t border-foreground/8 py-10 mt-10">
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#fdf8f2] border border-foreground/10 rounded-2xl p-6 sm:p-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-foreground font-serif leading-tight">
              Looking for something specific?
            </h3>
            <p className="text-foreground/60 text-sm mt-1 max-w-lg">
              We have hundreds more traditional outfits and jewelry sets in our physical store.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={siteConfig.contact.phone.link}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone size={14} />
              Call Us
            </a>
            <a
              href={siteConfig.contact.address.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-foreground/15 text-foreground text-sm font-bold rounded-lg hover:border-foreground/30 transition-colors"
            >
              <MapPin size={14} className="text-foreground/50" />
              Visit Store
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
