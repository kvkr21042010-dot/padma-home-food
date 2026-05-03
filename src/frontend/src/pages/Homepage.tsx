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

        {/* ✅ FIXED OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <div className="max-w-xl">
            
            {/* ✅ FIXED SMALL TEXT */}
            <p className="inline-flex items-center gap-1.5 text-white/80 text-sm font-semibold uppercase tracking-widest mb-3">
              <span className="w-6 h-px bg-white/50" /> Hyderabad, India
            </p>

            {/* ✅ FIXED TITLE */}
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white drop-shadow-lg leading-tight mb-3">
              Padma
              <br />
              Home Food
            </h1>

            {/* ✅ FIXED SUBTITLE */}
            <p className="text-white/90 text-lg mb-2 font-body">
              Fresh Veg &amp; Non-Veg Specials
            </p>

            {/* ✅ FIXED TIMING TEXT */}
            <div className="flex items-center gap-2 text-white/80 text-sm mb-8">
              <Clock size={15} />
              <span className="font-semibold">8:00 AM – 10:00 PM</span>
              <span className="text-white/50">·</span>
              <span>Open Every Day</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="font-semibold"
                onClick={() => onNavigate("menu")}
              >
                Explore Menu <ChevronRight size={16} />
              </Button>

              {/* ✅ FIXED BUTTON TEXT */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/40 hover:bg-white/10"
              >
                <a href="tel:9666817773">Call Us</a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* باقي code unchanged */}
      
    </div>
  );
}
