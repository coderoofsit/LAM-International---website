import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  Headphones,
  Leaf,
  PenTool,
  Sparkles,
  Truck,
} from "lucide-react";

import { PageLayout } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";
import { Counter } from "../components/site/Counter";

import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import heroBg1 from "../assets/hero_1.png";
import heroBg2 from "../assets/hero_2.png";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";
import project5 from "../assets/project-5.jpg";
import project6 from "../assets/project-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LAM International — Illuminating Spaces with Precision & Elegance" },
      {
        name: "description",
        content:
          "Premium architectural and commercial lighting solutions designed to enhance every environment with innovation, efficiency, and timeless design.",
      },
      { property: "og:title", content: "LAM International — Premium Lighting Solutions" },
      {
        property: "og:description",
        content: "Illuminating Spaces with Precision & Elegance.",
      },
    ],
  }),
  component: HomePage,
});

const heroSlides = [heroBg1, heroBg2];

const services = [
  {
    img: project3,
    title: "Retail Lighting",
    body: "Lighting solutions designed to enhance customer experiences, improve product visibility, and create inviting retail environments.",
  },
  {
    img: project4,
    title: "Commercial Lighting",
    body: "High-performance lighting systems for offices, business facilities, and corporate environments that maximize productivity while maintaining elegant aesthetics.",
  },
  {
    img: project2,
    title: "Hospitality",
    body: "Elegant lighting solutions that create warm, memorable experiences for hotels, restaurants, cafés, resorts, and luxury hospitality spaces.",
  },
  {
    img: project1,
    title: "Residential",
    body: "Modern decorative lighting designed to complement contemporary homes with comfort, sophistication, and timeless elegance.",
  },
  {
    img: hero3,
    title: "Lighting Design",
    body: "Professional lighting planning and consultation tailored to maximize aesthetics, functionality, visual comfort, and energy efficiency for every project.",
  },
];

const featuredProducts = [
  {
    img: product2,
    name: "Track Lights",
    description: "Flexible directional lighting for retail and gallery spaces.",
  },
  {
    img: product1,
    name: "Down Lights",
    description: "Clean recessed illumination with precise beam control.",
  },
  {
    img: product4,
    name: "Wall Washer Lights",
    description: "Even vertical light that highlights architecture and texture.",
  },
  {
    img: product3,
    name: "Gimbal Lights",
    description: "Adjustable fixtures for focused accent and display lighting.",
  },
  {
    img: project4,
    name: "Bay Lights",
    description: "High-output solutions for warehouses and large interiors.",
  },
  {
    img: product2,
    name: "LED Lights",
    description: "Energy-efficient LED systems built for lasting performance.",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Premium Quality Products",
    body: "We supply carefully selected lighting products that meet the highest international standards for performance and durability.",
  },
  {
    icon: Sparkles,
    title: "Innovative Lighting Solutions",
    body: "Creative and modern lighting concepts designed to transform architectural spaces.",
  },
  {
    icon: Headphones,
    title: "Expert Technical Support",
    body: "Professional guidance from experienced lighting specialists throughout every stage of your project.",
  },
  {
    icon: PenTool,
    title: "Customized Lighting Design",
    body: "Tailor-made lighting solutions developed specifically for your project requirements and architectural vision.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Project Execution",
    body: "Efficient coordination from planning to installation, ensuring smooth project delivery.",
  },
  {
    icon: Truck,
    title: "On-Time Delivery",
    body: "Reliable logistics and project management that keep every project on schedule.",
  },
  {
    icon: Leaf,
    title: "Energy-Efficient Solutions",
    body: "Sustainable lighting systems designed to reduce energy consumption while maximizing performance.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Industry Experience",
    body: "Years of expertise delivering successful lighting solutions across retail, hospitality, commercial, and residential sectors.",
  },
];

const projects = [
  { img: project3, title: "Retail Flagship", category: "Retail" },
  { img: project4, title: "Corporate Workspace", category: "Commercial" },
  { img: project2, title: "Grand Ballroom", category: "Hospitality" },
  { img: project1, title: "Private Residence", category: "Residential" },
  { img: project5, title: "Villa Staircase", category: "Residential" },
  { img: project6, title: "Spa Retreat", category: "Hospitality" },
];

const process = [
  { title: "Consultation", body: "Understanding project goals." },
  { title: "Lighting Design", body: "Planning and selecting the ideal lighting solution." },
  { title: "Product Selection", body: "Choosing premium products tailored to the project." },
  { title: "Supply & Delivery", body: "Reliable delivery on schedule." },
  { title: "Project Support", body: "Technical guidance and after-sales assistance." },
];

function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  return (
    <PageLayout>
      {/* HERO — reference left-aligned luxury layout */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#121212]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1800}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="absolute inset-0 h-full w-full"
        >
          {heroSlides.map((img, i) => (
            <SwiperSlide key={i} className="relative h-full">
              <motion.div style={{ y }} className="absolute -top-[8%] inset-x-0 h-[116%] w-full">
                <img
                  src={img}
                  alt="LAM International architectural lighting"
                  className="h-full w-full object-cover object-[center_35%] ken-burns"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] items-center px-6 pt-24 pb-16 lg:px-10">
          {/* Left content — ~40–45% width, left aligned */}
          <div className="w-full max-w-[42%] min-w-0 max-lg:max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#D4AF37] sm:text-xs"
            >
              Architectural Lighting Solutions
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display font-semibold text-white leading-[1.05] tracking-[-0.02em] text-[clamp(2.75rem,8vw,6.5rem)]"
            >
              Illuminate
              <br />
              <span className="text-[#D4AF37]">Extraordinary</span>
              <br />
              Spaces.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-[550px] text-[20px] leading-[1.65] text-[#B8B8B8] sm:text-[21px] lg:text-[22px]"
            >
              Delivering premium architectural and decorative lighting solutions that
              combine innovation, elegance, and performance for luxury residential,
              hospitality, retail, and commercial projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-11 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-8 py-3.5 text-[12px] font-semibold tracking-[0.18em] uppercase text-[#121212] shadow-[0_10px_28px_-12px_rgba(212,175,55,0.55)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#C89B2A] hover:shadow-[0_14px_32px_-12px_rgba(212,175,55,0.65)]"
              >
                Explore Projects
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full border border-[#D4AF37] bg-transparent px-8 py-3.5 text-[12px] font-medium tracking-[0.18em] uppercase text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#C89B2A] hover:bg-[#D4AF37] hover:text-[#121212]"
              >
                View Products
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-label lg:flex"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="relative overflow-hidden bg-cream py-28 lg:py-40">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(ellipse_at_top_right,rgba(200,164,107,0.12),transparent_60%)]" />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <span className="gold-divider">Who We Are</span>
            <h2 className="mt-6 font-display text-4xl leading-tight text-charcoal lg:text-5xl">
              Lighting Spaces. Empowering Brands. Creating Lasting Impressions.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              LAM International General Trading LLC delivers premium lighting solutions
              that combine innovation, performance, and design excellence. We collaborate
              with architects, consultants, contractors, and developers to create lighting
              environments that elevate commercial, retail, hospitality, and residential
              spaces.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.28em] uppercase text-white transition hover:text-gold gold-underline"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES — Lighting for Every Environment */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="gold-divider justify-center before:hidden">Our Services</span>
            <h2 className="mt-5 font-display text-4xl text-white lg:text-5xl xl:text-[3.25rem]">
              Lighting for Every Environment
            </h2>
            <p className="mt-5 text-base leading-relaxed text-subhead lg:text-lg">
              Delivering innovative architectural lighting solutions tailored to elevate
              every space with performance, elegance, and efficiency.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7">
            {services.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 0.07}
                className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-stone bg-card shadow-[0_18px_44px_-28px_rgba(0,0,0,0.75)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_28px_56px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(212,175,55,0.15)]">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <h3 className="font-display text-2xl text-white lg:text-[1.65rem]">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-subhead">
                      {s.body}
                    </p>
                    <Link
                      to="/about"
                      className="mt-6 inline-flex items-center gap-2 self-start text-[11px] font-medium tracking-[0.22em] uppercase text-[#D4AF37] transition duration-300 group-hover:gap-3 hover:text-[#C89B2A]"
                    >
                      Learn More <ArrowRight size={13} className="transition duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="gold-divider">Featured Lighting Products</span>
              <h2 className="mt-5 font-display text-4xl text-charcoal lg:text-5xl">
                Precision. Performance. Presence.
              </h2>
            </Reveal>
            <Link
              to="/products"
              className="text-sm tracking-[0.28em] uppercase text-white transition hover:text-gold gold-underline"
            >
              View all products
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <Link to="/products" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-stone bg-card shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)]">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 rounded-[10px] bg-gold px-4 py-2 text-[10px] tracking-[0.28em] uppercase text-ink shadow-sm">
                        View details <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-charcoal">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE — Partner for Lighting Excellence */}
      <section className="relative overflow-hidden bg-beige py-28 text-white lg:py-40">
        <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="gold-divider justify-center before:hidden">Why Choose Us</span>
            <h2 className="mt-5 font-display text-4xl leading-tight text-white lg:text-5xl xl:text-[3.25rem]">
              A Partner for Lighting Excellence
            </h2>
            <p className="mt-5 text-base leading-relaxed text-subhead lg:text-lg">
              From concept to completion, we deliver innovative lighting solutions backed
              by technical expertise, premium products, and exceptional customer service.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/55 hover:bg-white/[0.07] hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,0.75),0_0_32px_-8px_rgba(212,175,55,0.25)]">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition duration-500 group-hover:bg-gold/15" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#D4AF37]/35 bg-[#D4AF37]/5 text-[#D4AF37] transition duration-500 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 group-hover:shadow-[0_0_20px_-4px_rgba(212,175,55,0.45)]">
                    <r.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="relative mt-6 font-display text-xl leading-snug text-white">
                    {r.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-subhead">
                    {r.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-beige py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="gold-divider">Featured Projects</span>
              <h2 className="mt-5 font-display text-4xl text-charcoal lg:text-5xl">
                Spaces brought to life
              </h2>
            </Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm tracking-[0.28em] uppercase text-white transition hover:text-gold gold-underline"
            >
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Link
                  to="/projects"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-stone shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)]"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-gold">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-white lg:text-3xl">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="text-center">
            <span className="gold-divider justify-center before:hidden">Our Process</span>
            <h2 className="mt-5 font-display text-4xl text-charcoal lg:text-5xl">
              From brief to brilliance
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-0 md:grid-cols-5">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="relative flex flex-col items-center px-4 text-center md:px-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-gold bg-card text-gold font-display text-xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-charcoal">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                  {i < process.length - 1 && (
                    <div className="mt-6 hidden text-gold/50 md:absolute md:right-0 md:top-6 md:mt-0 md:block md:translate-x-1/2">
                      <ArrowDown className="rotate-[-90deg]" size={18} />
                    </div>
                  )}
                  {i < process.length - 1 && (
                    <div className="mt-6 text-gold/50 md:hidden">
                      <ArrowDown size={18} />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-stone bg-beige py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {[
            { n: 100, s: "+", l: "Projects Completed" },
            { n: 50, s: "+", l: "Business Partners" },
            { n: 500, s: "+", l: "Premium Products" },
            { n: 100, s: "%", l: "Client Commitment" },
          ].map((stat, i) => (
            <Reveal key={stat.l} delay={i * 0.08}>
              <div className="text-center lg:text-left">
                <div className="font-display text-5xl text-charcoal lg:text-6xl">
                  <Counter to={stat.n} suffix={stat.s} />
                </div>
                <p className="mt-3 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
                  {stat.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-beige py-28 text-white lg:py-36">
        <div
          className="absolute inset-0 scale-105 opacity-40"
          style={{
            backgroundImage: `url(${hero2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="gold-divider">Call To Action</span>
              <h2 className="mt-6 font-display text-4xl leading-[1.05] text-white lg:text-6xl">
                Let's Light Your Next Project
              </h2>
              <p className="mt-6 text-subhead leading-relaxed">
                Whether you're developing a retail space, commercial building,
                hospitality venue, or residential project, our team is ready to help
                bring your vision to life.
              </p>
              <div className="mt-10">
                <Link to="/contact" className="btn-gold">
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
