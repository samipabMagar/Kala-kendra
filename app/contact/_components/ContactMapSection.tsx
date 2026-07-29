import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function ContactMapSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F5]">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Find Us in the Heart of Pokhara
          </h2>
          <p className="text-foreground/70 text-sm md:text-base">
            {siteConfig.contact.address.line1}, {siteConfig.contact.address.line2}
          </p>
        </div>

        {/* Map Only */}
        <div className="relative group border border-black/5 bg-white max-w-6xl mx-auto">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 flex relative z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.428765197366!2d83.9847961!3d28.224663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959522813c7909%3A0x308f0edc97d5e383!2sPokhara%20Kala%20Kendra%20%26%20Cultural%20Dress%20Hire%20Centre!5e0!3m2!1sen!2snp!4v1785341709729!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
