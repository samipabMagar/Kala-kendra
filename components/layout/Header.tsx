"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Costume Rental", href: "/costume-rental" },
    { name: "Dance Classes", href: "/classes" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-[60] w-full border-b border-primary/20 bg-white/95 backdrop-blur-xl shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-transparent shadow-sm transition-all duration-500">
                <Image
                  src="/logo.jpeg"
                  alt="Pokhara Kala Kendra Logo"
                  fill
                  className="object-cover  transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-extrabold text-primary transition-colors duration-300">
                  पोखरा कला केन्द्र
                </span>
                <span className="text-[0.65rem] font-bold text-secondary uppercase tracking-widest hidden sm:block mt-0.5">
                  Pokhara Kala Kendra
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav — only shows at lg+ (1024px) to prevent squishing */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative  text-sm font-semibold whitespace-nowrap transition-colors duration-200
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                    ${isActive ? "text-primary" : "text-foreground/65 hover:text-primary"}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pl-3 ml-1 border-l border-foreground/10">
              <Link
                href="/costume-rental"
                className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                Book Now
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button — visible below lg */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground/80 hover:text-primary focus:outline-none p-2 bg-foreground/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav — slides down below lg */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-background shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] border-b border-foreground/10" : "max-h-0"
        }`}
      >
        <Container>
          <div className="flex flex-col py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative block px-4 py-3 text-base font-semibold transition-colors duration-200
                    after:absolute after:bottom-1 after:left-4 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-8
                    ${isActive ? "text-primary" : "text-foreground/65 hover:text-primary"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/costume-rental"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 w-full text-center px-6 py-4 rounded-xl bg-primary text-white font-bold tracking-wide shadow-md shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Now</span>
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
