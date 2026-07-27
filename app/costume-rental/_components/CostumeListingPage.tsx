"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Search, X, ArrowRight, SlidersHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import { costumes, allDresses } from "@/data/mockCostumes";

function CostumeCard({ costume }: { costume: (typeof costumes)[0] }) {
  return (
    <Link
      href={`/costume-rental/${costume.id}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl cursor-pointer bg-white border border-foreground/8 md:border-0 md:bg-transparent hover:shadow-lg hover:shadow-black/8 md:hover:shadow-none hover:-translate-y-1 md:hover:translate-y-0 transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden md:rounded-2xl">
        <Image
          src={costume.image}
          alt={costume.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
          {costume.dress}
        </span>

        {/* Desktop: hover reveal tray slides up from bottom */}
        <div className="hidden md:block absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="h-14 bg-gradient-to-t from-black/85 to-transparent" />
          <div className="bg-black/85 backdrop-blur-sm px-4 pb-5 pt-2 flex items-center justify-between gap-3">
            <div>
              <p className="text-white font-bold text-sm leading-tight">{costume.name}</p>
              <p className="text-white/50 text-[10px] font-medium mt-0.5 uppercase tracking-widest">
                {costume.dress} · {costume.ethnicity}
              </p>
            </div>
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: always visible info strip */}
      <div className="p-3.5 flex items-center justify-between gap-2 md:hidden">
        <div className="min-w-0">
          <p className="font-bold text-foreground text-sm leading-tight truncate">{costume.name}</p>
          <p className="text-foreground/45 text-[11px] font-medium mt-0.5">{costume.ethnicity}</p>
        </div>
        <span className="shrink-0 w-7 h-7 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/40">
          <ArrowRight size={12} />
        </span>
      </div>
    </Link>
  );
}
export default function CostumeListingPage() {
  const [search, setSearch] = useState("");
  const [activeDress, setDress] = useState("All");
  const [extraFiltersOpen, setExtraOpen] = useState(false);

  const filtered = useMemo(() => {
    return costumes.filter((c) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.ethnicity.toLowerCase().includes(q) ||
        c.dress.toLowerCase().includes(q);
      const matchDress = activeDress === "All" || c.dress === activeDress;
      return matchSearch && matchDress;
    });
  }, [search, activeDress]);

  const hasFilters = activeDress !== "All" || search !== "";
  const clearAll = () => {
    setSearch("");
    setDress("All");
  };

  return (
    <div className="min-h-screen bg-[#fdf8f2]">
      <div className="bg-white border-b border-foreground/8 sticky top-[76px] z-30 shadow-sm shadow-black/5">
        <Container>
          <div className="py-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 max-w-sm">
                <Search
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 pointer-events-none"
                />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or ethnicity..."
                  className="w-full pl-10 pr-9 py-2.5 bg-foreground/5 rounded-full text-sm font-medium text-foreground placeholder:text-foreground/40 outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-primary"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <button
                onClick={() => setExtraOpen(!extraFiltersOpen)}
                className="lg:hidden flex items-center gap-1.5 border border-foreground/15 rounded-full px-4 py-2.5 text-xs font-bold text-foreground/70 hover:border-primary hover:text-primary transition-colors shrink-0"
              >
                <SlidersHorizontal size={13} />
                Filters
              </button>

              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1 shrink-0"
                >
                  <X size={11} /> Clear
                </button>
              )}
            </div>

            <div className="flex lg:flex-wrap items-center gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide">
              <span className="text-[10px] font-bold text-foreground/35 uppercase tracking-widest pr-1">
                Dress:
              </span>
              {allDresses.map((d) => (
                <button
                  key={d}
                  onClick={() => setDress(d)}
                  className={`shrink-0 cursor-pointer px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                    activeDress === d
                      ? "bg-primary text-white"
                      : "bg-foreground/5 text-foreground/65 hover:bg-foreground/10"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-10 md:py-12">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {filtered.map((costume) => (
              <CostumeCard key={costume.id} costume={costume} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <p className="text-4xl font-extrabold text-foreground/10 font-serif mb-3">No Results</p>
            <p className="text-sm text-foreground/50 mb-6">
              No costumes match your search or filters.
            </p>
            <button onClick={clearAll} className="text-sm font-bold text-primary hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </Container>
    </div>
  );
}
