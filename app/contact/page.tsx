import ContactHero from "./_components/ContactHero";
import ContactFormSection from "./_components/ContactFormSection";
import ContactMapSection from "./_components/ContactMapSection";

export const metadata = {
  title: "Contact Us | Pokhara Kala Kendra",
  description:
    "Get in touch with Pokhara Kala Kendra for costume rentals, dance classes, or general inquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactFormSection />
      <ContactMapSection />
    </main>
  );
}
