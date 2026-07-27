import GalleryHero from "./_components/GalleryHero";
import GalleryGrid from "./_components/GalleryGrid";
import InlineCTA from "@/components/ui/InlineCTA";
import { costumeRentalCTA } from "@/data/ctaContent";

export const metadata = {
  title: "Gallery | Pokhara Kala Kendra",
  description:
    "Explore our gallery of authentic Nepali traditional costumes, cultural performances, and events at Pokhara Kala Kendra.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <InlineCTA {...costumeRentalCTA} />
    </main>
  );
}
