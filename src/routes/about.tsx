import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageLayout, PageHero } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";
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

const values = [
  { t: "Quality", d: "Every product and project meets the highest standards of performance and craftsmanship." },
  { t: "Innovation", d: "We embrace new technologies and design approaches that elevate lighting outcomes." },
  { t: "Reliability", d: "Dependable service, consistent delivery, and solutions you can count on." },
  { t: "Sustainability", d: "Energy-efficient lighting that reduces impact without compromising beauty." },
  { t: "Professionalism", d: "Clear communication and disciplined execution at every project stage." },
  { t: "Customer Commitment", d: "Lasting partnerships built on trust, expertise, and exceptional service." },
];

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="Lighting Spaces. Empowering Brands. Creating Lasting Impressions."
        intro="At LAM International, we specialize in delivering innovative lighting solutions that combine performance, efficiency, and design excellence."
      />

      {/* STORY */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_14px_40px_-22px_rgba(0,0,0,0.18)]">
              <img
                src={hero3}
                alt="Architectural lighting interior"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7 space-y-5 lg:pt-6">
            <span className="gold-divider">Our Story</span>
            <p className="text-muted-foreground leading-relaxed">
              We believe that lighting is more than illumination—it shapes experiences,
              enhances architecture, and transforms commercial spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With extensive industry knowledge and a commitment to quality, we provide
              complete lighting solutions for retail, hospitality, commercial,
              residential, and architectural projects. From concept development and
              lighting design support to product supply and project execution, we work
              closely with architects, consultants, contractors, and developers to ensure
              every project achieves the perfect balance of functionality, aesthetics, and
              energy efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our portfolio includes a carefully selected range of architectural,
              decorative, and technical lighting products, designed to meet the highest
              standards of performance and reliability. Every solution is tailored to the
              unique requirements of each project, ensuring long-lasting value and
              exceptional visual impact.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At the heart of our business is a commitment to building lasting partnerships
              through professionalism, technical expertise, dependable service, and
              on-time delivery. We strive to help our clients create inspiring environments
              where people can work, shop, live, and connect.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether supporting a single retail boutique or a large-scale commercial
              development, our goal remains the same: to deliver lighting solutions that
              bring every space to life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="bg-beige py-28">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:px-10">
          {[
            {
              tag: "Our Mission",
              body: "To provide innovative, reliable, and energy-efficient lighting solutions that elevate spaces while delivering exceptional quality and service.",
            },
            {
              tag: "Our Vision",
              body: "To become one of the region's most trusted lighting solution providers by combining innovation, technical expertise, and outstanding customer experience.",
            },
          ].map((v) => (
            <Reveal key={v.tag}>
              <div className="luxury-card h-full p-10 lg:p-14">
                <span className="gold-divider">{v.tag}</span>
                <p className="mt-6 font-display text-2xl leading-snug text-charcoal lg:text-3xl">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-cream py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="gold-divider">Our Values</span>
            <h2 className="mt-5 font-display text-4xl text-charcoal lg:text-5xl">
              What guides every project
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="rounded-2xl border border-stone bg-card p-6 pt-6 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)] transition hover:border-gold">
                  <span className="font-display text-4xl text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-white">{v.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-beige py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="gold-divider">In Focus</span>
            <h2 className="mt-5 font-display text-4xl text-charcoal lg:text-5xl">
              Environments shaped by light
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[project1, project5, project6].map((img, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-[0_14px_40px_-22px_rgba(0,0,0,0.18)] ${i === 1 ? "aspect-[3/4] md:mt-12" : "aspect-[3/4]"}`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-14 text-center">
              <Link to="/contact" className="btn-outline-dark">
                Work With Us <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
