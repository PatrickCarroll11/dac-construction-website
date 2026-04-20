import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top bar */}
      <div className="bg-accent text-accent-foreground py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium tracking-wide">
          <span>Your Trusted Wexford Builders</span>
          <a
            href="tel:0871144460"
            className="flex items-center gap-1.5 font-semibold hover:underline"
          >
            <Phone className="h-3 w-3" />
            087 1144460
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="DAC Construction" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    isActive
                      ? "text-accent border-b-2 border-accent pb-0.5 font-semibold text-sm tracking-wide transition-colors"
                      : "text-primary-foreground/80 hover:text-accent text-sm font-medium tracking-wide transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            <a
              href="tel:0871144460"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" />
              087 1144460
            </a>
            <Button
              asChild
              className="bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-primary-foreground hover:text-accent transition-colors ml-auto"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 pt-4 pb-6">
            <nav className="flex flex-col gap-0.5 mb-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={
                      isActive
                        ? "text-accent font-semibold py-2.5 border-l-4 border-accent pl-4 text-sm tracking-wide"
                        : "text-primary-foreground/80 hover:text-accent py-2.5 pl-4 text-sm font-medium tracking-wide transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-3 pt-1 border-t border-primary-foreground/10">
              <a
                href="tel:0871144460"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent text-sm font-medium transition-colors pt-3"
              >
                <Phone className="h-4 w-4" />
                087 1144460
              </a>
              <Button
                asChild
                className="bg-accent text-accent-foreground font-semibold text-sm rounded-md hover:opacity-90 transition-opacity w-full"
              >
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}