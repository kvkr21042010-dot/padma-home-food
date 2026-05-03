import { menuItems } from "@/data/menuItems";
import type { MenuCategory } from "@/types/menu";
import { useState } from "react";

type FilterValue = "all" | MenuCategory;

const FILTERS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "🟢 Veg" },
  { value: "nonveg", label: "🔴 Non-Veg" },
  { value: "egg", label: "🟡 Egg" },
];

export function MenuPage() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered =
    filter === "all"
      ? menuItems
      : menuItems.filter((m) => m.category === filter);

  return (
    <div className="bg-background min-h-screen">
      {/* Page header */}
      <section
        className="bg-card border-b border-border py-10"
        data-ocid="menu.header_section"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
            Our Menu
          </p>
          <h1 className="font-display text-4xl font-bold text-foreground mb-2">
            Fresh Every Day
          </h1>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Authentic Andhra home cooking — vegetarian and non-vegetarian dishes
            made with love.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-muted/30 border-b border-border sticky top-[108px] z-30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              data-ocid={`menu.filter.${f.value}_tab`}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition-smooth border ${
                filter === f.value
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Menu grid */}
      <section
        className="max-w-6xl mx-auto px-4 py-10"
        data-ocid="menu.grid_section"
      >
        {filtered.length === 0 ? (
          <div className="text-center py-20" data-ocid="menu.empty_state">
            <p className="text-muted-foreground text-lg">
              No items found for this filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-smooth group flex flex-col"
                data-ocid={`menu.item.${i + 1}`}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                    loading="lazy"
                  />
                  {/* Veg/Nonveg badge overlay */}
                  <span
                    className="absolute top-2 right-2 w-6 h-6 rounded-sm flex items-center justify-center text-xs border-2 bg-card"
                    style={{
                      borderColor:
                        item.category === "nonveg"
                          ? "oklch(var(--primary))"
                          : item.category === "egg"
                            ? "#f59e0b"
                            : "oklch(var(--accent))",
                    }}
                    title={
                      item.category === "nonveg"
                        ? "Non-Veg"
                        : item.category === "egg"
                          ? "Egg"
                          : "Veg"
                    }
                  >
                    {item.category === "nonveg"
                      ? "🔴"
                      : item.category === "egg"
                        ? "🟡"
                        : "🟢"}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3.5 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-sm text-foreground leading-snug mb-1 min-w-0">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 flex-1 mb-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="font-bold text-primary text-base">
                      ₹{item.price}
                    </span>
                    <span
                      className={
                        item.category === "nonveg"
                          ? "badge-nonveg"
                          : item.category === "egg"
                            ? ""
                            : "badge-veg"
                      }
                      style={
                        item.category === "egg"
                          ? {
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              borderRadius: "9999px",
                              padding: "2px 10px",
                              fontSize: "11px",
                              fontWeight: 600,
                              background: "oklch(0.95 0.05 80 / 0.15)",
                              color: "oklch(0.55 0.12 80)",
                              border: "1px solid oklch(0.7 0.1 80 / 0.3)",
                            }
                          : {}
                      }
                    >
                      {item.category === "nonveg"
                        ? "Non-Veg"
                        : item.category === "egg"
                          ? "Egg"
                          : "Veg"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
