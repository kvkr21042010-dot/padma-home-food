import type { Page } from "@/App";
import { Clock, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  page: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { page: Page; label: string }[] = [
  { page: "home", label: "Home" },
  { page: "menu", label: "Menu" },
  { page: "support", label: "Support" },
];

export function Header({ page, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top info bar */}
      <div className="bg-primary text-primary-foreground px-4 py-1.5 flex items-center justify-center gap-6 text-sm">
        <span className="flex items-center gap-1.5">
          <Clock size={13} />
          <span className="font-semibold">Open: 8:00 AM – 10:00 PM</span>
        </span>
        <span className="hidden sm:flex items-center gap-1.5">
          <Phone size={13} />
          <a href="tel:9666817773" className="hover:underline">
            9666817773
          </a>
        </span>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2.5"
          data-ocid="nav.home_link"
        >
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg font-display font-bold">
            P
          </div>
          <div className="leading-tight text-left">
            <div className="font-display font-bold text-lg text-foreground">
              Padma
            </div>
            <div className="font-display font-semibold text-sm text-primary -mt-1">
              Home Food
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => onNavigate(link.page)}
              data-ocid={`nav.${link.page}_link`}
              className={`px-4 py-2 rounded-lg font-body font-medium text-sm transition-smooth ${
                page === link.page
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-smooth"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          data-ocid="nav.mobile_toggle"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.page}
              type="button"
              onClick={() => {
                onNavigate(link.page);
                setIsOpen(false);
              }}
              data-ocid={`nav.mobile.${link.page}_link`}
              className={`flex w-full px-4 py-3 rounded-lg font-body font-medium text-base mt-1 transition-smooth ${
                page === link.page
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
