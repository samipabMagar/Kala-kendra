import { siteConfig } from "@/data/site";
import type { InlineCTAProps } from "@/components/ui/InlineCTA";

export const costumeRentalCTA: InlineCTAProps = {
  label: "Looking for something specific?",
  title: "We have hundreds more traditional outfits and jewelry ",
  highlight: "in our physical store.",
  buttons: [
    {
      label: "Call Us",
      href: siteConfig.contact.phone.link,
      variant: "primary",
      icon: "phone",
    },
    {
      label: "Visit Store",
      href: siteConfig.contact.address.mapLink,
      variant: "outline",
      icon: "map",
      external: true,
    },
  ],
};

export const homepageCTA: InlineCTAProps = {
  label: "Ready to Begin?",
  title: "Dress the Part.",
  highlight: "Dance the Tradition.",
  buttons: [
    {
      label: "Browse Costumes",
      href: "/costume-rental",
      variant: "primary",
      icon: "arrow",
    },
    {
      label: "Call Us",
      href: siteConfig.contact.phone.link,
      variant: "outline",
      icon: "phone",
    },
  ],
};

export const aboutCTA: InlineCTAProps = {
  label: "Join Our Legacy",
  title: "Experience the rhythm.",
  highlight: "Wear the tradition.",
  buttons: [
    {
      label: "Contact Us",
      href: "/contact",
      variant: "primary",
      icon: "arrow",
    },
    {
      label: "View Gallery",
      href: "/gallery",
      variant: "outline",
      icon: "arrow",
    },
  ],
};
