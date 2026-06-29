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
    { name: "Rentals", href: "/rentals" },
    { name: "Dance Classes", href: "/classes" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/90 backdrop-blur-xl shadow-sm">
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
                <span className="text-[0.65rem] font-bold text-secondary/80 uppercase tracking-widest hidden sm:block mt-0.5">
                  Pokhara Kala Kendra
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav — only shows at lg+ (1024px) to prevent squishing */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-md whitespace-nowrap transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pl-3 ml-1 border-l border-slate-200">
              <Link
                href="/rentals"
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
              className="text-slate-600 hover:text-primary focus:outline-none p-2 bg-slate-50 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Nav — slides down below lg */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[400px] border-b border-slate-200" : "max-h-0"
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
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-primary"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/rentals"
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
