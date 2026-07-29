import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "../components/site/PageLayout";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import project1 from "../assets/project-1.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LAM International" },
      {
        name: "description",
        content:
          "Lighting Spaces. Empowering Brands. Creating Lasting Impressions. Discover LAM International's mission, vision, and values.",
      },
      { property: "og:title", content: "About LAM International" },
      {
        property: "og:description",
        content: "Innovative lighting solutions that elevate spaces.",
      },
    ],
  }),
  component: AboutPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    t: "Quality",
    d: "Every product and project meets the highest standards of performance and craftsmanship.",
  },
  {
    t: "Innovation",
    d: "We embrace new technologies and design approaches that elevate lighting outcomes.",
  },
  {
    t: "Reliability",
    d: "Dependable service, consistent delivery, and solutions you can count on.",
  },
  {
    t: "Sustainability",
    d: "Energy-efficient lighting that reduces impact without compromising beauty.",
  },
  {
    t: "Professionalism",
    d: "Clear communication and disciplined execution at every project stage.",
  },
  {
    t: "Customer Commitment",
    d: "Lasting partnerships built on trust, expertise, and exceptional service.",
  },
];

const gallery = [
  { img: project1, label: "Residential", alt: "Residential lighting interior" },
  { img: project5, label: "Architecture", alt: "Architectural staircase lighting" },
  { img: project6, label: "Hospitality", alt: "Hospitality spa lighting" },
];

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Lighting Spaces.
            <br />
            <span className="text-gold">Empowering Brands.</span>
            <br />
            Creating Lasting Impressions.
          </>
        }
        intro="At LAM International General Trading LLC, we specialize in delivering innovative lighting solutions that combine performance, efficiency, and design excellence."
      />

      <div className="relative overflow-hidden bg-[#0D0D0D]">
        {/* STORY */}
        <section className="relative pb-24 pt-10 lg:pb-32 lg:pt-14">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Image column */}
              <motion.div
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, ease }}
                className="relative lg:col-span-5"
              >
                <div className="relative overflow-hidden rounded-[22px] border border-stone/80 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.85)]">
                  <div className="aspect-[4/5]">
                    <img
                      src={hero3}
                      alt="Architectural lighting interior"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>

                {/* Accent image — desktop only for balance */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2, ease }}
                  className="absolute -bottom-8 -right-6 hidden w-[46%] overflow-hidden rounded-[18px] border border-gold/30 shadow-[0_20px_44px_-20px_rgba(0,0,0,0.9)] lg:block"
                >
                  <div className="aspect-[5/4]">
                    <img
                      src={hero2}
                      alt="Luxury lighting atmosphere"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Text column */}
              <motion.div
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.95, delay: 0.1, ease }}
                className="lg:col-span-7 lg:pl-4 xl:pl-8"
              >
                <p className="text-[11px] font-medium tracking-[0.36em] uppercase text-gold">
                  Our Story
                </p>
                <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
                  Lighting that shapes experience
                </h2>
                <div className="mt-3 h-px w-16 bg-gold/60" />

                <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-subhead sm:text-base">
                  <p>
                    We believe that lighting is more than illumination—it shapes
                    experiences, enhances architecture, and transforms commercial spaces.
                  </p>
                  <p>
                    With extensive industry knowledge and a commitment to quality, we
                    provide complete lighting solutions for retail, hospitality,
                    commercial, residential, and architectural projects. From concept
                    development and lighting design support to product supply and project
                    execution, we work closely with architects, consultants, contractors,
                    and developers to ensure every project achieves the perfect balance of
                    functionality, aesthetics, and energy efficiency.
                  </p>
                  <p>
                    Our portfolio includes a carefully selected range of architectural,
                    decorative, and technical lighting products, designed to meet the
                    highest standards of performance and reliability. Every solution is
                    tailored to the unique requirements of each project, ensuring
                    long-lasting value and exceptional visual impact.
                  </p>
                  <p>
                    At the heart of our business is a commitment to building lasting
                    partnerships through professionalism, technical expertise, dependable
                    service, and on-time delivery—whether supporting a single retail
                    boutique or a large-scale commercial development.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="relative border-y border-stone/60 bg-[#121212] py-24 lg:py-28">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }}
              className="mx-auto mb-12 max-w-2xl text-center lg:mb-14"
            >
              <p className="text-[11px] font-medium tracking-[0.36em] uppercase text-gold">
                Purpose
              </p>
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
                Mission & Vision
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-7">
              {[
                {
                  tag: "Our Mission",
                  body: "To provide innovative, reliable, and energy-efficient lighting solutions that elevate spaces while delivering exceptional quality and service.",
                },
                {
                  tag: "Our Vision",
                  body: "To become one of the region's most trusted lighting solution providers by combining innovation, technical expertise, and outstanding customer experience.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.tag}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.85, delay: i * 0.12, ease }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[22px] border border-gold/20 bg-[#181818] p-9 shadow-[0_20px_48px_-28px_rgba(0,0,0,0.8)] transition-[border-color,box-shadow] duration-500 hover:border-gold/45 hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.85),0_0_36px_-12px_rgba(212,175,55,0.28)] sm:p-11 lg:p-12"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 0%, rgba(212,175,55,0.1), transparent 60%)",
                    }}
                  />
                  <p className="relative text-[11px] font-medium tracking-[0.32em] uppercase text-gold">
                    {item.tag}
                  </p>
                  <p className="relative mt-6 font-display text-2xl leading-snug text-white lg:text-[1.75rem]">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="relative py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-[11px] font-medium tracking-[0.36em] uppercase text-gold">
                Our Values
              </p>
              <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                What guides every project
              </h2>
              <p className="mt-5 text-base leading-relaxed text-subhead">
                Principles that shape how we design, supply, and deliver lighting across
                every engagement.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
              {values.map((v, i) => (
                <motion.article
                  key={v.t}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease }}
                  whileHover={{ y: -6 }}
                  className="group relative h-full overflow-hidden rounded-[20px] border border-stone bg-[#181818] p-7 shadow-[0_16px_40px_-26px_rgba(0,0,0,0.75)] transition-[border-color,box-shadow] duration-500 hover:border-gold/50 hover:shadow-[0_24px_48px_-22px_rgba(0,0,0,0.85),0_0_28px_-10px_rgba(212,175,55,0.25)] sm:p-8"
                >
                  <span className="font-display text-3xl text-gold/80 transition-colors duration-500 group-hover:text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-white">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-subhead">{v.d}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="relative border-t border-stone/60 bg-[#121212] py-24 lg:py-32">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <div>
                <p className="text-[11px] font-medium tracking-[0.36em] uppercase text-gold">
                  In Focus
                </p>
                <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
                  Environments shaped by light
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-subhead md:text-right">
                A glimpse into the atmospheres we help create across residential,
                hospitality, and architectural spaces.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-3 md:gap-6">
              {gallery.map((item, i) => (
                <motion.figure
                  key={item.label}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: i * 0.1, ease }}
                  className={`group relative overflow-hidden rounded-[20px] border border-stone shadow-[0_18px_44px_-26px_rgba(0,0,0,0.8)] ${
                    i === 1 ? "md:mt-10" : ""
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-gold">
                      {item.label}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-14 flex justify-center lg:mt-16"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-gold/50 px-8 py-3.5 text-[11px] font-medium tracking-[0.22em] uppercase text-gold transition-all duration-500 hover:border-gold hover:bg-gold hover:text-ink hover:shadow-[0_0_28px_-6px_rgba(212,175,55,0.45)]"
              >
                Work With Us
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
