import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-heading font-bold text-xl mb-5">DAC Construction</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              DAC Construction - Building quality homes and businesses across Wexford with dedication and expertise.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm opacity-80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:0871144460" className="hover:opacity-100 transition-opacity">087 1144460</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:dacconstructionandroofing@gmail.com" className="hover:opacity-100 transition-opacity">dacconstructionandroofing@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Wexford, Ireland</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-xs opacity-60">
          © {new Date().getFullYear()} DAC Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;