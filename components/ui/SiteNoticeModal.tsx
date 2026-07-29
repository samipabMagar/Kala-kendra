"use client";

import { useEffect, useState } from "react";
import { X, AlertCircle } from "lucide-react";

export default function SiteNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the notice in this session.
    // We use sessionStorage so it only shows once per tab/visit, minimizing annoyance.
    const hasSeenNotice = sessionStorage.getItem("site-notice-dismissed");

    if (!hasSeenNotice) {
      // Show the modal after a short delay so the page loads first
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("site-notice-dismissed", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="bg-white rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative animate-in slide-in-from-bottom-10 fade-in duration-500 flex flex-col items-center text-center"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-foreground/40 hover:text-foreground transition-colors p-1"
          aria-label="Close notice"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-full bg-secondary/15 text-secondary flex items-center justify-center mb-5 shrink-0">
          <AlertCircle size={28} />
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
          Site Under Construction 🚧
        </h3>

        <p className="text-sm text-foreground/70 leading-relaxed max-w-sm mx-auto mb-8">
          Welcome to Pokhara Kala Kendra! Our website is currently in the active development phase.
          Some features, imagery, or booking capabilities might not be fully operational yet.
        </p>

        <button
          onClick={handleDismiss}
          className="w-full bg-primary text-white font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors py-4 px-6 rounded-full"
        >
          Continue Browsing
        </button>
      </div>
    </div>
  );
}
