import { CheckCircle2 } from "lucide-react";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <>
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            DAC Construction — quality Construction & Roofing service you can trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At DAC Construction, we are passionate about building and renovating homes and commercial spaces in Wexford. Our team of skilled professionals is dedicated to delivering exceptional craftsmanship and unmatched customer service.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We believe in creating lasting relationships with our clients through trust, transparency, and quality work..
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="space-y-4 mb-10">
            {[{"title":"Quality Materials","desc":"We use only the best materials to ensure longevity and durability."},{"title":"Competitive Pricing","desc":"Our services are priced to offer great value for your investment."},{"title":"Professional Team","desc":"Our skilled team is dedicated to delivering top-quality workmanship."},{"title":"Wide Coverage","desc":"Serving Wexford and surrounding counties with pride."},{"title":"Customer Satisfaction","desc":"We strive to exceed expectations and build lasting relationships."}].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
