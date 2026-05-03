import type { Page } from "@/App";
import { Clock, MapPin, Phone } from "lucide-react";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const links: { page: Page; label: string }[] = [
    { page: "home", label: "Home" },
    { page: "menu", label: "Menu" },
    { page: "support", label: "Support" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-xl text-foreground mb-1">
              Padma Home Food
            </div>
            <p className="text-muted-foreground text-sm">
              Fresh Veg &amp; Non-Veg Specials
            </p>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Authentic home-cooked Andhra flavours, made with love in
              Hyderabad.
            </p>
          </div>

          {/* Hours & Contact */}
          <div>
            <h3 className="font-display font-semibold text-base text-foreground mb-3">
              Visit Us
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  Open daily:{" "}
                  <span className="font-semibold text-foreground">
                    8:00 AM – 10:00 PM
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0 text-primary" />
                <a
                  href="tel:9666817773"
                  className="hover:text-primary transition-smooth"
                >
                  9666817773
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-base text-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {links.map(({ page, label }) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => onNavigate(page)}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {year} Padma Home Food. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
