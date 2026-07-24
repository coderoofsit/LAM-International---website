import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { PageLayout } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";
import { projects, type Project } from "../data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — LAM International" },
      {
        name: "description",
        content:
          "A unified gallery of premium architectural lighting projects — retail, hospitality, residential, and commercial spaces illuminated by LAM International.",
      },
      { property: "og:title", content: "LAM International — Projects" },
      {
        property: "og:description",
        content: "Explore our portfolio of high-end lighting projects.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setActive(project);
    setImageIndex(0);
  };

  const close = () => setActive(null);

  const stepProject = (dir: 1 | -1) => {
    if (!active) return;
    const idx = projects.findIndex((p) => p.id === active.id);
    const next = projects[(idx + dir + projects.length) % projects.length];
    setActive(next);
    setImageIndex(0);
  };

  const stepImage = (dir: 1 | -1) => {
    if (!active) return;
    setImageIndex((i) => (i + dir + active.images.length) % active.images.length);
  };

  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") {
        setImageIndex((i) => (i + 1) % active.images.length);
      }
      if (e.key === "ArrowLeft") {
        setImageIndex((i) => (i - 1 + active.images.length) % active.images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <PageLayout>
      {/* TITLE */}
      <section className="bg-cream pt-36 pb-10 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <p className="text-[11px] font-medium tracking-[0.35em] uppercase text-gold">
              Portfolio
            </p>
            <h1 className="mt-4 font-display text-6xl leading-none text-white sm:text-7xl lg:text-[6.5rem]">
              Projects
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-subhead lg:text-lg">
              A curated collection of spaces elevated through precision lighting —
              photographed to celebrate atmosphere, architecture, and craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* UNIFIED GALLERY */}
      <section className="bg-cream pb-28 lg:pb-36">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i * 0.03, 0.24)}>
                <article
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-stone bg-card shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition duration-500 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.85)] ${
                    project.tall ? "sm:row-span-1" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    className="relative block w-full overflow-hidden text-left"
                  >
                    <div
                      className={`relative overflow-hidden bg-beige ${
                        project.tall ? "aspect-[3/4]" : "aspect-[4/5]"
                      }`}
                    >
                      <img
                        src={project.cover}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />
                      <div className="absolute inset-0 flex items-end justify-between p-5 opacity-0 transition duration-500 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-4 py-2 text-[10px] font-medium tracking-[0.22em] uppercase text-ink shadow-sm">
                          View Project
                          <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>
                  </button>

                  <div className="flex flex-1 flex-col px-5 pb-5 pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="font-display text-2xl leading-tight text-charcoal">
                        {project.title}
                      </h2>
                      <button
                        type="button"
                        onClick={() => openProject(project)}
                        aria-label={`View ${project.title}`}
                        className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone text-white transition hover:border-gold hover:bg-gold hover:text-ink"
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                    <p className="mt-2 flex items-center gap-1.5 text-xs tracking-wide text-gold">
                      <MapPin size={12} strokeWidth={1.75} />
                      {project.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX / DETAIL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-3 backdrop-blur-md sm:p-6"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-stone bg-card shadow-2xl lg:grid-cols-[1.35fr_1fr]"
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-stone bg-beige text-white shadow-md transition hover:border-gold hover:bg-gold hover:text-ink"
              >
                <X size={16} />
              </button>

              <div className="relative bg-ink">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`${active.id}-${imageIndex}`}
                      src={active.images[imageIndex]}
                      alt={`${active.title} — image ${imageIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {active.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => stepImage(-1)}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur transition hover:border-gold hover:text-gold"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => stepImage(1)}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-ink/40 text-white backdrop-blur transition hover:border-gold hover:text-gold"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}

                <div className="absolute inset-x-0 bottom-0 flex gap-2 overflow-x-auto p-4">
                  {active.images.map((img, idx) => (
                    <button
                      key={`${active.id}-thumb-${idx}`}
                      type="button"
                      onClick={() => setImageIndex(idx)}
                      className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                        idx === imageIndex
                          ? "border-gold"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex max-h-[92vh] flex-col overflow-y-auto p-7 sm:p-10">
                <p className="flex items-center gap-1.5 text-[11px] tracking-[0.28em] uppercase text-gold">
                  <MapPin size={12} />
                  {active.location}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                  {active.title}
                </h2>
                <p className="mt-3 text-sm font-medium text-subhead">
                  {active.description}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-label">
                  {active.detail}
                </p>

                <div className="mt-8 border-t border-stone pt-6">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-label">
                    Gallery
                  </p>
                  <p className="mt-2 text-sm text-white">
                    {imageIndex + 1} / {active.images.length} images
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-10">
                  <button
                    type="button"
                    onClick={() => stepProject(-1)}
                    className="inline-flex items-center gap-2 rounded-[10px] border border-stone px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-white transition hover:border-gold hover:text-gold"
                  >
                    <ChevronLeft size={14} /> Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => stepProject(1)}
                    className="inline-flex items-center gap-2 rounded-[10px] border border-stone px-5 py-2.5 text-[11px] tracking-[0.2em] uppercase text-white transition hover:border-gold hover:text-gold"
                  >
                    Next <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
