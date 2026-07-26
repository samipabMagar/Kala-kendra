import CostumeListingPage from "./_components/CostumeListingPage";
import HeroSection from "./_components/HeroSection";
import MoreOptionsCTA from "./_components/MoreOptionsCTA";

export const metadata = {
  title: "Costume Rental | Pokhara Kala Kendra",
  description:
    "Browse 500+ authentic Nepali ethnic costumes for rent. Gurung, Newari, Tharu, Magar, and many more traditional attires available at Pokhara Kala Kendra.",
};

export default function CostumeRentalPage() {
  return (
    <main>
      <HeroSection />
      <CostumeListingPage />
      <MoreOptionsCTA />
    </main>
  );
}
