import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost to build a home extension in Wexford?",
    a: "The cost of a home extension in Wexford varies depending on the size, design, and materials chosen. As a general guide, single-storey extensions typically start from around €1,500–€2,000 per square metre. At DAC Construction, we provide free, no-obligation quotes tailored to your specific project so you know exactly what to expect before any work begins."
  },
  {
    q: "How quickly can DAC Construction respond to a roofing emergency in Wexford?",
    a: "We understand that roofing emergencies can't wait. DAC Construction aims to respond to urgent roofing calls in Wexford and surrounding counties within 24 hours. For non-emergency enquiries, we typically get back to you the same day or the following morning. Call us on 087 1144460 and we'll do our best to get to you as quickly as possible."
  },
  {
    q: "What areas do DAC Construction cover?",
    a: "While we are based in Wexford, DAC Construction serves a wide range of counties across Leinster and beyond, including Waterford, Kilkenny, Carlow, Wicklow, Kildare, Dublin, Laois, Offaly, Tipperary, Cork, and Kerry. If you're unsure whether we cover your area, give us a call and we'll be happy to discuss your project."
  },
  {
    q: "Do I need planning permission for a home extension or renovation in Wexford?",
    a: "Whether planning permission is required depends on the size and nature of the work. Many smaller extensions and renovations fall under exempted development and do not require planning permission. At DAC Construction, we can advise you on what's needed for your specific project and assist with the planning process where required, making the entire experience as straightforward as possible."
  },
  {
    q: "Is DAC Construction fully insured and certified to work in Wexford?",
    a: "Yes, absolutely. DAC Construction is fully insured and our team holds all relevant qualifications and certifications for construction and roofing work in Ireland. We adhere to the highest industry safety standards, giving you complete peace of mind throughout your project. We're happy to provide documentation upon request."
  },
  {
    q: "How long does a typical roofing or construction project take to complete?",
    a: "Project timelines vary depending on the scope of work. A straightforward roof repair may take just one to two days, while a new roof installation typically takes one to two weeks. Home extensions and new builds can range from a few weeks to several months. At DAC Construction, we provide a clear timeline before work begins and keep you updated throughout, ensuring your project is completed on schedule."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Common questions from homeowners and businesses across Wexford and beyond.
          </p>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-primary transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-muted-foreground leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;