import AboutHero from "./_components/AboutHero";
import AboutStory from "./_components/AboutStory";
import AboutValues from "./_components/AboutValues";
import InlineCTA from "@/components/ui/InlineCTA";
import { aboutCTA } from "@/data/ctaContent";

export const metadata = {
  title: "About Us | Pokhara Kala Kendra",
  description:
    "Learn about the origins, values, and mission of Pokhara Kala Kendra in preserving Nepali heritage.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <InlineCTA {...aboutCTA} />
    </main>
  );
}
