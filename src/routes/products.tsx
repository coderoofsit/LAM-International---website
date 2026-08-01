import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { PageLayout, PageHero } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";

import {
  trackLights01,
  trackLights02,
  trackLights03,
  trackLights04,
  downlights01,
  downlights02,
  downlights03,
  downlights04,
  wallWashers01,
  wallWashers02,
  wallWashers03,
  wallWashers04,
  spotlights01,
  spotlights02,
  spotlights03,
  spotlights04,
  linearLights01,
  linearLights02,
  linearLights03,
  linearLights04,
  pendantLighting01,
  pendantLighting02,
  pendantLighting03,
  pendantLighting04,
} from "../assets/media";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — LAM International" },
      {
        name: "description",
        content:
          "Browse our focused range of premium lighting — track lights, downlights, wall washers, spotlights, linear lights, and pendant lighting.",
      },
      { property: "og:title", content: "LAM International — Products" },
      {
        property: "og:description",
        content:
          "Track, downlight, wall washer, spotlight, linear, and pendant lighting solutions.",
      },
    ],
  }),
  component: ProductsPage,
});

type Product = {
  id: string;
  name: string;
  images: string[];
  summary: string;
  description: string;
  specs: { label: string; value: string }[];
};

const products: Product[] = [
  {
    id: "track",
    name: "Track Lights",
    images: [trackLights01, trackLights02, trackLights03, trackLights04],
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
    name: "Downlights",
    images: [downlights01, downlights02, downlights03, downlights04],
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
    name: "Wall Washers",
    images: [wallWashers01, wallWashers02, wallWashers03, wallWashers04],
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
    id: "spotlights",
    name: "Spotlights & Accent",
    images: [spotlights01, spotlights02, spotlights03, spotlights04],
    summary: "Focused accent lighting for displays, art, and feature zones.",
    description:
      "High-CRI spotlights and accent fixtures for merchandise, artwork, and architectural details — precise aiming with controlled glare.",
    specs: [
      { label: "Application", value: "Retail · Museums · Feature Zones" },
      { label: "Adjustability", value: "360° / Tilt" },
      { label: "Source", value: "LED COB" },
      { label: "CRI", value: "≥ 90" },
    ],
  },
  {
    id: "linear",
    name: "Linear Lights",
    images: [linearLights01, linearLights02, linearLights03, linearLights04],
    summary: "Continuous lines of light for modern architectural interiors.",
    description:
      "Linear LED systems for offices, corridors, and open-plan spaces — clean geometry, even distribution, and refined ceiling aesthetics.",
    specs: [
      { label: "Application", value: "Offices · Corridors · Retail" },
      { label: "Mounting", value: "Recessed / Surface / Suspended" },
      { label: "Color", value: "3000K / 4000K" },
      { label: "Distribution", value: "Direct / Indirect" },
    ],
  },
  {
    id: "pendant",
    name: "Pendant Lighting",
    images: [pendantLighting01, pendantLighting02, pendantLighting03, pendantLighting04],
    summary: "Statement pendants that define lobbies, dining, and lounges.",
    description:
      "Decorative and architectural pendants that create focal moments in hospitality, residential, and commercial arrival spaces.",
    specs: [
      { label: "Application", value: "Hospitality · Residential · Lobbies" },
      { label: "Mounting", value: "Suspended" },
      { label: "Finish", value: "Black / Brass / Custom" },
      { label: "Style", value: "Decorative · Architectural" },
    ],
  },
];

const PAGE_SIZE = 8;

function ProductImageSlider({ images, name }: { images: string[]; name: string }) {
  return (
    <div className="relative h-full min-h-[280px] w-full bg-beige md:min-h-0">
      <Swiper
        key={name}
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        loop={images.length > 1}
        pagination={{ clickable: true }}
        className="product-detail-swiper h-full w-full"
      >
        {images.map((src, i) => (
          <SwiperSlide key={`${name}-${i}`} className="h-full">
            <img
              src={src}
              alt={`${name} — image ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [active, setActive] = useState<Product | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

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
      <section className="bg-cream pb-16 sm:pb-24 lg:pb-36">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
          {visible.length === 0 ? (
            <p className="py-20 text-center text-subhead">
              No products match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4 lg:gap-8">
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
                          src={p.images[0]}
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
            className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto overflow-x-hidden rounded-t-2xl border border-stone bg-card shadow-2xl sm:rounded-2xl md:grid-cols-2 md:overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-beige text-white transition hover:border-gold hover:bg-gold hover:text-ink sm:right-4 sm:top-4"
              >
                <X size={16} />
              </button>
              <div className="aspect-[4/3] shrink-0 overflow-hidden sm:aspect-square md:aspect-auto md:min-h-[420px]">
                <ProductImageSlider images={active.images} name={active.name} />
              </div>
              <div className="overflow-y-auto p-6 sm:p-8 lg:p-12">
                <h3 className="pr-10 font-display text-2xl text-white sm:text-3xl lg:text-4xl">
                  {active.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-subhead sm:mt-6 sm:text-base">{active.description}</p>
                <div className="mt-6 border-t border-stone pt-5 sm:mt-8 sm:pt-6">
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
                <Link to="/contact" className="btn-gold mt-6 w-full sm:mt-8 sm:w-auto">
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
