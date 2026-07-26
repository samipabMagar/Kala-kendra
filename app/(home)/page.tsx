import HeroSection from "./_components/HeroSection";
import StatsSection from "./_components/StatsSection";
import FeaturedRentals from "./_components/FeaturedRentals";
import OurHeritage from "./_components/OurHeritage";
import ServicesOverview from "./_components/ServicesOverview";
import Testimonials from "./_components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturedRentals />
      <ServicesOverview />
      <OurHeritage />
      <Testimonials />
    </main>
  );
}
