import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Experienced Professionals",
  "Quality Craftsmanship",
  "Customer-focused Approach",
  "Comprehensive Services",
  "Reliable Project Management",
  "Attention to Detail",
  "Competitive Pricing",
  "Local Expertise"
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose DAC Construction?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a focus on quality and customer satisfaction, DAC Construction brings years of experience to every project, ensuring we meet and exceed your expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Get Your Free Quote Today</h3>
              <p className="opacity-90 mb-6">
                Tell us what you need and we'll provide a competitive quote with no obligation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>No hidden costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Free site assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>All jobs catered for</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
