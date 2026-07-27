import { Phone, MapPin, ArrowRight } from "lucide-react";

export type CTAButton = {
  label: string;
  href: string;
  variant: "primary" | "outline";
  icon?: "phone" | "map" | "arrow";
  external?: boolean;
};

export type InlineCTAProps = {
  label: string;
  title: string;
  highlight?: string;
  buttons: CTAButton[];
};

const iconMap = {
  phone: Phone,
  map: MapPin,
  arrow: ArrowRight,
};

export default function InlineCTA({ label, title, highlight, buttons }: InlineCTAProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl overflow-hidden px-8 py-10 md:px-14 md:py-12"
          style={{ background: "linear-gradient(135deg, #1a0408 0%, #2d060c 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 110% 50%, rgba(200,16,46,0.4) 0%, transparent 65%)",
            }}
          />

          <span
            aria-hidden
            className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-extrabold font-serif text-white/[0.04] select-none leading-none pointer-events-none"
          >
            कलाकेन्द्र
          </span>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3">
                {label}
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif leading-tight">
                {title} {highlight && <span className="text-primary">{highlight}</span>}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              {buttons.map((btn) => {
                const Icon = btn.icon ? iconMap[btn.icon] : null;
                const isPrimary = btn.variant === "primary";

                return (
                  <a
                    key={btn.label}
                    href={btn.href}
                    {...(btn.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group inline-flex items-center gap-2 font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                      isPrimary
                        ? "bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                        : "border border-white/20 text-white hover:bg-white/10 hover:border-white/40"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    )}
                    {btn.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
