import { Home, Building2, Hammer, ArrowRightSquare, PenTool, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom home building services in Wexford.",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Reliable construction solutions for businesses.",
  },
  {
    icon: Hammer,
    title: "Roofing Services",
    description: "Expert roofing installation and repair.",
  },
  {
    icon: ArrowRightSquare,
    title: "Home Extensions",
    description: "Expand your living space with expert craftsmanship.",
  },
  {
    icon: PenTool,
    title: "Renovations",
    description: "Transform your home with our renovation services.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Comprehensive management for your construction projects.",
  },
];

const ServicesGrid = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">Our Services</h2>
        <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
          From new builds and roofing to extensions and renovations — we handle every stage of your construction project in Wexford.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group p-8 rounded-lg border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
              <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;