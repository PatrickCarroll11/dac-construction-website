import { CheckCircle2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const badges = [
  "Qualified Builders",
  "Fully Insured",
  "Safety Certified",
];

export default function TAMSSection() {
  return (
    <section className="bg-primary/[0.04] border-y border-primary/10 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Icon circle */}
        <div className="flex justify-center mb-6">
          <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center shadow-md">
            <HardHat className="w-8 h-8" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-3xl font-bold text-primary mb-4">
          Trusted Construction &amp; Roofing Experts
        </h2>

        {/* Body */}
        <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          Our team is fully qualified and insured, offering peace of mind for
          your construction projects. We adhere to the highest industry
          standards to ensure safety and quality.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="mb-12 px-8 py-6 h-auto font-semibold shadow-lg bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link to="/contact">Ask About Our Services</Link>
        </Button>

        {/* Badge columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex flex-col items-center gap-3 bg-card rounded-xl border border-primary/10 px-6 py-6 shadow-sm"
            >
              <CheckCircle2 className="w-8 h-8 text-accent shrink-0" />
              <span className="text-primary font-semibold text-base text-center">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}