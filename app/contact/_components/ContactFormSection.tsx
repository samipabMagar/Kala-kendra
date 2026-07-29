import { ShoppingBag, Music } from "lucide-react";
import Container from "@/components/ui/Container";

export default function ContactFormSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FCFBF8]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
            We are here to help you connect with Nepalese culture. Send us a message regarding
            costume rentals, dance classes, or any other inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-serif mb-2">How We Can Help</h3>

            <div className="border border-black/5 bg-white p-6 md:p-8 flex flex-col relative group">
              <ShoppingBag className="text-secondary w-6 h-6 mb-4" />
              <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                Costume & Ornament Rental
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Choose from over 500 authentic cultural dresses and traditional ornaments for your
                special events and performances.
              </p>
            </div>
            <div className="border border-black/5 bg-white p-6 md:p-8 flex flex-col relative group">
              <Music className="text-secondary w-6 h-6 mb-4" />
              <h4 className="text-lg font-serif font-semibold text-foreground mb-2">
                Classical & Folk Dance Classes
              </h4>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Learn the rhythms of Nepal. We offer professional training for various cultural and
                classical dance forms.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 bg-[#EBE9E4] p-6 sm:p-10 lg:p-12 border border-black/5">
            <form className="flex flex-col gap-8 h-full justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                    Full Name
                  </span>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+977"
                    className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                    Service Required
                  </span>
                  <select className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer">
                    <option>Select a service</option>
                    <option>Costume Rental</option>
                    <option>Ornament Rental</option>
                    <option>Dance Class</option>
                    <option>Others</option>
                  </select>
                </label>
              </div>

              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                  Desired Date & Time
                </span>
                <input
                  type="datetime-local"
                  className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors opacity-70"
                />
              </label>

              <label className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-widest pl-1">
                  Message
                </span>
                <textarea
                  rows={2}
                  placeholder="How can we assist you?"
                  className="bg-transparent border-b border-black/10 pb-3 text-sm focus:outline-none focus:border-secondary transition-colors resize-none"
                />
              </label>

              <button
                type="button"
                className="mt-4 bg-primary text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8C1515] transition-colors py-5 px-6 w-full text-center"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
