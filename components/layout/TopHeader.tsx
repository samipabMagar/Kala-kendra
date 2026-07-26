import { Fragment } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin } from "lucide-react";

const Divider = () => (
  <span className="inline-block w-px h-3 bg-foreground/20" aria-hidden="true" />
);

export default function TopHeader() {
  return (
    <div className="bg-white/95 backdrop-blur-xl text-foreground text-xs border-b border-secondary/20 shadow-xs relative z-[60]">
      <Container>
        <div className="flex lg:hidden items-center justify-between py-1.5">
          <a
            href={siteConfig.contact.phone.link}
            className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
          >
            <Phone size={13} color="#c8102e" strokeWidth={2.5} />
            <span>{siteConfig.contact.phone.display}</span>
          </a>

          <div className="flex items-center gap-1">
            {siteConfig.socialLinks.map(({ href, label, Icon }, i) => (
              <Fragment key={label}>
                {i > 0 && <Divider key={`div-${label}`} />}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-primary/70 hover:text-primary transition-colors p-1"
                >
                  <Icon size={14} stroke="currentColor" />
                </a>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between py-1.5">
          <div className="flex items-center gap-1">
            <a
              href={siteConfig.contact.phone.link}
              className="flex items-center gap-1.5 hover:text-primary transition-colors pr-3"
            >
              <Phone size={13} color="#c8102e" strokeWidth={2.5} />
              <span className="font-medium tracking-wide">{siteConfig.contact.phone.display}</span>
            </a>

            <Divider />

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-primary transition-colors px-3"
            >
              <Mail size={13} color="#c8102e" strokeWidth={2.5} />
              <span className="font-medium tracking-wide">{siteConfig.contact.email}</span>
            </a>

            <Divider />

            <div className="flex items-center gap-1.5 text-foreground/60 pl-3">
              <MapPin size={13} color="#c8102e" strokeWidth={2.5} />
              <span className="font-medium tracking-wide">{siteConfig.contact.address.short}</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="font-medium text-foreground/50 pr-2">Follow Us:</span>
            <Divider />

            {siteConfig.socialLinks.map(({ href, label, Icon }, i) => (
              <Fragment key={label}>
                {i > 0 && <Divider key={`div-${label}`} />}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-primary/70 hover:text-primary transition-colors px-2.5"
                >
                  <Icon size={14} stroke="currentColor" />
                </a>
              </Fragment>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
