import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { PageLayout } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";

import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import project4 from "../assets/project-4.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import project1 from "../assets/project-1.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LAM International" },
      {
        name: "description",
        content:
          "Browse our complete gallery of premium architectural and decorative lighting products — track lights, downlights, wall washers, gimbal, bay, and LED solutions.",
      },
      { property: "og:title", content: "LAM International — Products" },
      {
        property: "og:description",
        content: "A unified gallery of premium lighting products.",
      },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  id: string;
  name: string;
  img: string;
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
};

const products: Product[] = [
  {
    id: "track",
    name: "Track Lights",
    img: product2,
    summary: "Flexible directional lighting for retail and gallery spaces.",
    description:
      "Flexible directional lighting systems designed for retail displays, galleries, and feature zones where precision aiming matters.",
    specs: [
      { label: "Application", value: "Retail · Gallery · Display" },
      { label: "Source", value: "LED Spot Modules" },
      { label: "Beam", value: "15° / 24° / 36°" },
      { label: "Finish", value: "Matte Black / White" },
    ],
  },
  {
    id: "down",
    name: "Down Lights",
    img: product1,
    summary: "Clean recessed illumination with precise beam control.",
    description:
      "Clean recessed downlights with controlled glare and consistent color, ideal for commercial interiors and refined residential spaces.",
    specs: [
      { label: "Application", value: "Offices · Residential · Retail" },
      { label: "Source", value: "Integrated LED" },
      { label: "Color", value: "2700K / 3000K / 4000K" },
      { label: "Optics", value: "Anti-glare" },
    ],
  },
  {
    id: "wall-washer",
    name: "Wall Washer Lights",
    img: product4,
    summary: "Even vertical light that highlights architecture and texture.",
    description:
      "Even vertical illumination that reveals texture, architecture, and branded surfaces with a soft, continuous wash of light.",
    specs: [
      { label: "Application", value: "Facades · Corridors · Feature Walls" },
      { label: "Distribution", value: "Asymmetric Wash" },
      { label: "Color", value: "3000K / 4000K" },
      { label: "Mounting", value: "Surface / Recessed" },
    ],
  },
  {
    id: "gimbal",
    name: "Gimbal Lights",
    img: product3,
    summary: "Adjustable fixtures for focused accent and display lighting.",
    description:
      "Adjustable gimbal fixtures for accent and task lighting, offering precise aiming for merchandise, art, and architectural details.",
    specs: [
      { label: "Application", value: "Retail · Hospitality · Museums" },
      { label: "Adjustability", value: "360° / Tilt" },
      { label: "Source", value: "LED COB" },
      { label: "CRI", value: "≥ 90" },
    ],
  },
  {
    id: "bay",
    name: "Bay Lights",
    img: project4,
    summary: "High-output solutions for warehouses and large interiors.",
    description:
      "High-output bay lighting engineered for large volumes — warehouses, showrooms, and industrial facilities requiring reliable brightness.",
    specs: [
      { label: "Application", value: "Warehouses · Showrooms" },
      { label: "Output", value: "High lumen packages" },
      { label: "Mounting", value: "Suspended / Surface" },
      { label: "Efficiency", value: "High lm/W" },
    ],
  },
  {
    id: "led-high-bay",
    name: "LED High Bay Lights",
    img: product2,
    summary: "Energy-efficient high bays for industrial-scale spaces.",
    description:
      "Energy-efficient LED high bays delivering strong illumination with lower operating costs for industrial and large commercial spaces.",
    specs: [
      { label: "Application", value: "Industrial · Logistics" },
      { label: "Source", value: "LED High Bay" },
      { label: "Controls", value: "Optional dimming / sensors" },
      { label: "Life", value: "Long-life LED modules" },
    ],
  },
  {
    id: "led",
    name: "LED Lights",
    img: product1,
    summary: "Versatile LED systems built for lasting performance.",
    description:
      "A versatile LED range built for efficiency, longevity, and consistent light quality across commercial and residential applications.",
    specs: [
      { label: "Application", value: "Multi-sector" },
      { label: "Efficiency", value: "Energy saving LED" },
      { label: "Color", value: "Warm to Cool White" },
      { label: "Benefit", value: "Low maintenance" },
    ],
  },
  {
    id: "smart",
    name: "Smart Lighting Solutions",
    img: product3,
    summary: "Intelligent controls for comfort and energy efficiency.",
    description:
      "Intelligent lighting systems with control options that optimize comfort, atmosphere, and energy use across modern buildings.",
    specs: [
      { label: "Application", value: "Smart buildings · Offices" },
      { label: "Controls", value: "Dimming · Scenes · Sensors" },
      { label: "Integration", value: "Building systems ready" },
      { label: "Benefit", value: "Efficiency + comfort" },
    ],
  },
  {
    id: "pendant",
    name: "Decorative Pendants",
    img: hero2,
    summary: "Statement fixtures that define luxury interiors.",
    description:
      "Decorative pendant collections crafted to create focal points in hospitality lobbies, dining spaces, and refined residences.",
    specs: [
      { label: "Application", value: "Hospitality · Residential" },
      { label: "Style", value: "Decorative / Feature" },
      { label: "Finish", value: "Brass · Black · Custom" },
      { label: "Source", value: "LED Compatible" },
    ],
  },
  {
    id: "linear",
    name: "Linear Profile Lights",
    img: hero3,
    summary: "Continuous lines of light for modern architecture.",
    description:
      "Sleek linear profiles for coves, ceilings, and architectural edges — delivering clean, continuous illumination.",
    specs: [
      { label: "Application", value: "Coves · Ceilings · Facades" },
      { label: "Mounting", value: "Recessed / Surface" },
      { label: "Color", value: "2700K – 4000K" },
      { label: "Diffuser", value: "Opal / Clear" },
    ],
  },
  {
    id: "accent",
    name: "Accent Spotlights",
    img: project1,
    summary: "Precision accents for art, displays, and details.",
    description:
      "Compact accent spotlights engineered for high-CRI highlighting of art, merchandising, and architectural features.",
    specs: [
      { label: "Application", value: "Galleries · Retail · Homes" },
      { label: "Beam", value: "Narrow / Medium" },
      { label: "CRI", value: "≥ 90" },
      { label: "Dimming", value: "Compatible" },
    ],
  },
  {
    id: "outdoor",
    name: "Outdoor Architectural Lights",
    img: product4,
    summary: "Weather-ready lighting for façades and landscapes.",
    description:
      "Durable outdoor architectural luminaires designed to graze façades, pathways, and landscapes with refined nighttime presence.",
    specs: [
      { label: "Application", value: "Facades · Pathways · Gardens" },
      { label: "IP Rating", value: "IP65+" },
      { label: "Finish", value: "Powder coated" },
      { label: "Source", value: "LED" },
    ],
  },
];

const PAGE_SIZE = 8;

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [active, setActive] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    );
  }, [query]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <PageLayout>
      {/* Title */}
      <section className="bg-cream pt-36 pb-8 lg:pt-44 lg:pb-10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.32em] uppercase text-gold">
              Collection
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
              Products
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-subhead lg:text-lg">
              A unified gallery of premium lighting — browse every fixture in one
              refined collection.
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.1}>
            <div className="relative mt-10 max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-label"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisibleCount(PAGE_SIZE);
                }}
                placeholder="Search products by name…"
                className="luxury-input !pl-11"
                aria-label="Search products"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Unified gallery */}
      <section className="bg-cream pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {visible.length === 0 ? (
            <p className="py-20 text-center text-subhead">
              No products match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {visible.map((p, i) => (
                <Reveal key={p.id} delay={Math.min(i * 0.04, 0.28)}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-stone bg-card shadow-[0_14px_36px_-24px_rgba(0,0,0,0.65)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.8)]">
                    <button
                      type="button"
                      onClick={() => setActive(p)}
                      className="relative block w-full overflow-hidden text-left"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-beige">
                        <img
                          src={p.img}
                          alt={p.name}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />
                      </div>
                    </button>

                    <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <h2 className="font-display text-2xl leading-tight text-white">
                          {p.name}
                        </h2>
                        <button
                          type="button"
                          onClick={() => setActive(p)}
                          aria-label={`View details for ${p.name}`}
                          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone text-white transition duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                        >
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                      <p className="mt-2 line-clamp-1 text-sm text-subhead">{p.summary}</p>
                      <button
                        type="button"
                        onClick={() => setActive(p)}
                        className="mt-5 inline-flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.22em] uppercase text-gold transition duration-300 hover:text-gold-soft"
                      >
                        View Details <ArrowRight size={13} />
                      </button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-14 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="btn-outline-dark"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Detail lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-stone bg-card shadow-2xl md:grid-cols-2"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-beige text-white transition hover:border-gold hover:bg-gold hover:text-ink"
              >
                <X size={16} />
              </button>
              <div className="aspect-square bg-beige md:aspect-auto">
                <img
                  src={active.img}
                  alt={active.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-y-auto p-8 lg:p-12">
                <h3 className="font-display text-3xl text-white lg:text-4xl">
                  {active.name}
                </h3>
                <p className="mt-6 leading-relaxed text-subhead">{active.description}</p>
                <div className="mt-8 border-t border-stone pt-6">
                  <p className="eyebrow mb-4">Specifications</p>
                  <dl className="space-y-3 text-sm">
                    {active.specs.map((s) => (
                      <div
                        key={s.label}
                        className="flex justify-between gap-4 border-b border-stone pb-3"
                      >
                        <dt className="text-label">{s.label}</dt>
                        <dd className="text-right text-white">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <Link to="/contact" className="btn-gold mt-8">
                  Enquire about this product
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
