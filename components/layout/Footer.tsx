"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, MapPin, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#fdf8f2] text-foreground relative border-t border-foreground/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              {/* Incorporating Logo as requested */}
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.jpeg"
                  alt="Pokhara Kala Kendra Logo"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-base font-extrabold text-primary transition-colors duration-300">
                    पोखरा कला केन्द्र
                  </span>
                  <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest hidden sm:block mt-0.5">
                    Pokhara Kala Kendra
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-foreground/70 leading-relaxed max-w-sm mb-8 text-sm md:text-base">
              Preserving and celebrating the vibrant cultural heritage of Nepal through authentic
              traditional attire and highly curated classical dance classes.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {siteConfig.socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <Icon size={18} stroke="currentColor" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-foreground/70 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="hover:text-primary transition-colors">
                  Costume Rentals
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-primary transition-colors">
                  Dance Classes
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Cultural Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6">
              Visit or Contact
            </h4>
            <ul className="space-y-5 text-foreground/70 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href={siteConfig.contact.phone.link}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-foreground/50 text-xs text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} Pokhara Kala Kendra. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-foreground/50 text-xs font-medium">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center justify-center gap-1.5"
            aria-label="Scroll back to top"
          >
            <span className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </span>
            <span className="text-[9px] tracking-widest uppercase text-foreground/50 font-bold group-hover:text-primary transition-colors">
              Top
            </span>
          </button>
        </div>
      </Container>
    </footer>
  );
}
