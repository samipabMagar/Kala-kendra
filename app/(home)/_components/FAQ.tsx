"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "What types of traditional costumes do you offer for rent?",
    answer:
      "We offer over 500+ authentic Nepali traditional costumes including Gurung, Newari, Tharu, Magar, Rai, Limbu, and many more ethnic attires. From bridal wear to cultural dance costumes, we have something for every occasion.",
  },
  {
    question: "How far in advance should I book a costume?",
    answer:
      "We recommend booking at least 3–7 days in advance for regular costumes. For weddings or large group bookings (10+ costumes), please book 2–4 weeks ahead to ensure availability and allow time for fitting adjustments.",
  },
  {
    question: "Do you offer dance classes for beginners?",
    answer:
      "Absolutely! We offer classes for all skill levels — from complete beginners to advanced performers. Our instructors teach classical folk dances including Maruni, Dhan Nach, Lakhe, and Jhyaure in a warm, encouraging environment.",
  },
  {
    question: "Can I get the costume delivered to my location in Pokhara?",
    answer:
      "Yes, we offer home delivery within Pokhara city for an additional charge. We can also arrange pick-ups from our studio. For outstation requests, please contact us directly so we can discuss the best arrangement.",
  },
  {
    question: "What is your return and damage policy?",
    answer:
      "Costumes must be returned within the agreed rental period in the same condition. Minor wear is acceptable, but significant damage or stains will incur a repair fee. Dry-cleaning costs are included in the rental price.",
  },
  {
    question: "Do you rent costumes for film or photography projects?",
    answer:
      "Yes! We frequently collaborate with photographers, filmmakers, and content creators. We offer extended rental packages and styling consultations. Reach out to us directly for professional project inquiries.",
  },
  {
    question: "Can I try the costume before confirming my booking?",
    answer:
      "Yes, we encourage customers to visit our studio for a fitting session before their event. Our team will help you choose the right size and style and ensure everything looks perfect before your special day.",
  },
  {
    question: "Are the costumes cleaned and sanitized before each rental?",
    answer:
      "Absolutely. Every costume is professionally dry-cleaned, sanitized, and inspected after each return. We take hygiene very seriously and ensure every item is in pristine condition when handed over to you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, eSewa, Khalti, and bank transfers. A deposit of 50% is required to confirm your booking, with the remaining balance due on the day of collection.",
  },
  {
    question: "Can you tailor or alter a costume to fit me better?",
    answer:
      "We offer basic fitting adjustments for most costumes at no extra charge. For complex alterations, a small fee may apply. Please let us know your measurements when booking so we can prepare the costume in advance.",
  },
  {
    question: "Do you offer group discounts for schools or cultural events?",
    answer:
      "Yes! We offer attractive group pricing for schools, colleges, cultural organizations, and event teams renting 5 or more costumes. Contact us for a custom quote tailored to your event.",
  },
  {
    question: "What happens if I return the costume late?",
    answer:
      "Late returns are charged at our standard daily rental rate pro-rated per day. If you need extra time, please let us know before your due date and we will do our best to accommodate you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-[38%] shrink-0">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.2em] uppercase text-sm mb-6">
                <span className="w-8 h-[2px] bg-primary" />
                Need Help
              </span>

              {/* Giant decorative serif "?" */}
              <div className="relative mb-8 leading-none">
                <span className="absolute -top-4 -left-2 text-[10rem] font-extrabold font-serif text-primary/5 select-none leading-none">
                  ?
                </span>
                <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground font-serif leading-tight">
                  Frequently
                  <br />
                  Asked
                  <br />
                  <span className="text-primary">Questions</span>
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT: Single-column accordion */}
          <div className="flex-1 divide-y divide-foreground/8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index}>
                  {/* Clickable question row */}
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-semibold text-base md:text-lg leading-snug transition-colors duration-300 ${
                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Icon */}
                    <span
                      className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-foreground/5 text-foreground/50 group-hover:bg-primary/10 group-hover:text-primary"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {/* Smooth expand/collapse */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-6 text-foreground/60 leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
