import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking to Build in Wexford?</h2>
        <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
          Contact DAC Construction today for a free consultation and quote. Let us bring your construction dreams to life!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button variant="heroOutline" asChild>
            <a href="tel:0871144460">
              <Phone className="h-5 w-5" />
              Call 087 1144460
            </a>
          </Button>
          <Button variant="heroOutline" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
          <a href="tel:0871144460" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
            <Phone className="h-4 w-4" /> 087 1144460
          </a>
          <a href="mailto:dacconstructionandroofing@gmail.com" className="flex items-center gap-2 justify-center hover:opacity-100 transition-opacity">
            <Mail className="h-4 w-4" /> dacconstructionandroofing@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
