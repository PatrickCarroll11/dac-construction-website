import { Building2, Briefcase, HardHat, Home, Wrench, ClipboardList, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";

const serviceDetails = [
  {
    title: "Residential Construction",
    seo: "Residential Construction Wexford",
    description:
      "DAC Construction provides custom home building services, ensuring every detail meets your expectations. From planning to completion, we deliver quality and satisfaction.",
    features: [
      "Custom Designs",
      "Quality Materials",
      "On-time Completion",
      "Skilled Team",
      "Energy-efficient Homes",
    ],
    icon: Home,
  },
  {
    title: "Commercial Construction",
    seo: "Commercial Construction Wexford",
    description:
      "We offer reliable construction services for commercial properties, ensuring projects are completed on time and on budget. Trust us to bring your business space to life.",
    features: [
      "Office Builds",
      "Retail Spaces",
      "Industrial Units",
      "Project Management",
      "Cost-effective Solutions",
    ],
    icon: Briefcase,
  },
  {
    title: "Roofing Services",
    seo: "Roofing Services Wexford",
    description:
      "Our expert team handles all roofing needs, from new installations to repairs. We use high-quality materials to ensure durability and safety.",
    features: [
      "New Roofs",
      "Repairs",
      "Inspections",
      "Gutter Installation",
      "Weatherproof Solutions",
    ],
    icon: HardHat,
  },
  {
    title: "Home Extensions",
    seo: "Home Extensions Wexford",
    description:
      "Expand your home's space with our expertly crafted extensions. We ensure seamless integration with your existing structure for a flawless finish.",
    features: [
      "Seamless Design",
      "Quality Construction",
      "Planning Assistance",
      "Energy Efficiency",
      "Space Maximization",
    ],
    icon: Building2,
  },
  {
    title: "Renovations",
    seo: "Home Renovations Wexford",
    description:
      "Revitalize your home with our renovation services. From kitchens to full home makeovers, we bring new life to your living spaces.",
    features: [
      "Kitchen Remodels",
      "Bathroom Upgrades",
      "Full Home Makeovers",
      "Modern Designs",
      "Cost-effective Solutions",
    ],
    icon: Wrench,
  },
  {
    title: "Project Management",
    seo: "Construction Project Management Wexford",
    description:
      "Our project management services ensure your construction projects are executed smoothly. We handle all aspects, from planning to execution, ensuring a stress-free experience.",
    features: [
      "Comprehensive Planning",
      "Budget Management",
      "Timeline Coordination",
      "Quality Assurance",
      "Client Communication",
    ],
    icon: ClipboardList,
  },
];

export default function Services() {
  return (
    <main>
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            DAC Construction offers a comprehensive range of construction and roofing services across Wexford and surrounding counties.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            {serviceDetails.map((service, index) => {
              const Icon = service.icon;
              const isAlt = index % 2 !== 0;
              return (
                <div
                  key={service.title}
                  className={`rounded-2xl border border-muted overflow-hidden shadow-sm ${isAlt ? "section-alt" : "bg-card"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left: Icon + Title + SEO badge + Description */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="bg-primary text-white rounded-xl p-3 shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground leading-tight">
                            {service.title}
                          </h2>
                          <Badge
                            variant="outline"
                            className="mt-1 text-xs border-accent text-accent-foreground bg-accent/10 font-medium"
                          >
                            {service.seo}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Right: What's Included */}
                    <div className="bg-primary/5 p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-muted">
                      <h3 className="text-base font-semibold text-primary uppercase tracking-wide mb-5">
                        What's Included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                            <span className="text-foreground font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}