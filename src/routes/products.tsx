import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { PageLayout, PageHero } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";

import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import project4 from "../assets/project-4.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LAM International" },
      {
        name: "description",
        content:
          "Browse our focused range of premium lighting — track lights, down lights, wall washers, gimbal lights, bay lights, and LED lights.",
      },
      { property: "og:title", content: "LAM International — Products" },
      {
        property: "og:description",
        content: "Track, down, wall washer, gimbal, bay, and LED lighting solutions.",
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
      <PageHero
        compact
        eyebrow="Collection"
        title={
          <>
            Lighting <span className="text-gold">Products</span>
          </>
        }
        intro="Our focused range of premium lighting — track, down, wall washer, gimbal, bay, and LED lights for every project."
      >
        <div className="relative w-full max-w-md">
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
      </PageHero>

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
