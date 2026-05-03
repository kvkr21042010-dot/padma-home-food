import type { Page } from "@/App";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menuItems";
import { ChevronRight, Clock, Flame, Leaf, MapPin, Phone } from "lucide-react";

const highlights = menuItems.slice(0, 4);

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section
        className="relative min-h-[520px] flex items-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        <img
          src="/assets/generated/hero-banana-leaf.dim_1200x700.jpg"
          alt="Padma Home Food banana leaf spread"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-1.5 text-primary-foreground/80 text-sm font-semibold uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-primary-foreground/50" /> Hyderabad,
              India
            </p>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-primary-foreground leading-tight mb-3">
              Padma
              <br />
              Home Food
            </h1>
            <p className="text-primary-foreground/90 text-lg mb-2 font-body">
              Fresh Veg &amp; Non-Veg Specials
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-8">
              <Clock size={15} />
              <span className="font-semibold">8:00 AM – 10:00 PM</span>
              <span className="text-primary-foreground/50">·</span>
              <span>Open Every Day</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="font-semibold"
                onClick={() => onNavigate("menu")}
                data-ocid="home.view_menu_button"
              >
                Explore Menu <ChevronRight size={16} />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10"
                data-ocid="home.call_button"
              >
                <a href="tel:9666817773">Call Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <section
        className="bg-primary text-primary-foreground"
        data-ocid="home.info_strip"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
          <div className="flex items-center justify-center gap-2">
            <Clock size={16} />
            <span className="font-semibold">8:00 AM – 10:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone size={16} />
            <a href="tel:9666817773" className="font-semibold hover:underline">
              9666817773
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin size={16} />
            <span className="font-semibold">Hyderabad, India</span>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-muted/30 py-14" data-ocid="home.features_section">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center text-foreground mb-10">
            Why Padma Home Food?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Leaf size={28} className="text-accent" />,
                title: "Pure Veg Options",
                desc: "Fresh ingredients, zero compromise on quality and taste.",
              },
              {
                icon: <Flame size={28} className="text-primary" />,
                title: "Non-Veg Specials",
                desc: "Andhra-style chicken dishes packed with bold, authentic spice.",
              },
              {
                icon: <Clock size={28} className="text-primary" />,
                title: "Open Till 10 PM",
                desc: "Serving hot food from 8 AM to 10 PM every single day.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-card rounded-2xl p-6 flex flex-col items-start gap-3 border border-border shadow-sm"
              >
                {f.icon}
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular dishes preview */}
      <section className="bg-background py-14" data-ocid="home.popular_section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Popular Dishes
            </h2>
            <button
              type="button"
              onClick={() => onNavigate("menu")}
              className="text-primary text-sm font-semibold flex items-center gap-1 hover:underline"
              data-ocid="home.see_all_link"
            >
              View Full Menu <ChevronRight size={15} />
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-smooth group"
                data-ocid={`home.popular_item.${i + 1}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-3">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <span className="font-display font-semibold text-sm text-foreground leading-snug line-clamp-2">
                      {item.name}
                    </span>
                    <span
                      className={
                        item.category === "nonveg"
                          ? "badge-nonveg"
                          : "badge-veg"
                      }
                      style={{ fontSize: "10px", padding: "2px 6px" }}
                    >
                      {item.category === "nonveg" ? "🔴" : "🟢"}
                    </span>
                  </div>
                  <p className="text-primary font-bold text-sm">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="bg-primary text-primary-foreground py-12"
        data-ocid="home.cta_section"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-2">
            Hungry? Give Us a Call!
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            We're open 8 AM to 10 PM every day. Call ahead for fresh hot food.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
            data-ocid="home.cta_call_button"
          >
            <a href="tel:9666817773">📞 Call 9666817773</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
