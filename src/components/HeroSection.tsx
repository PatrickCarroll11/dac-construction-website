import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shed.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Primary-tinted gradient for depth — avoids flat black overlay */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative container py-32 md:py-40">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-5 opacity-90">
            Construction & Roofing · Wexford
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Building Dreams,<br />in Wexford
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-10 leading-relaxed max-w-lg">
            Quality construction services tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:opacity-90 font-bold shadow-lg px-10 py-6 text-base">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/60 text-white hover:bg-white/10 font-semibold px-10 py-6 text-base">
              <a href="tel:0871144460" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 087 1144460
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;