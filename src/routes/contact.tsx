import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, type LucideIcon } from "lucide-react";
import { PageLayout, PageHero } from "../components/site/PageLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LAM International" },
      {
        name: "description",
        content:
          "Contact LAM International General Trading LLC — office address, phone, email, and business hours in Dubai.",
      },
      { property: "og:title", content: "Contact LAM International" },
      {
        property: "og:description",
        content:
          "Reach LAM International General Trading LLC using our Dubai office contact details.",
      },
    ],
  }),
  component: ContactPage,
});

type ContactCard = {
  icon: LucideIcon;
  title: string;
  lines: string[];
  href?: string;
};

const cards: ContactCard[] = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      "LAM International General Trading LLC",
      "316, European Business Centre",
      "DIP-1",
      "P.O. Box: 451903",
      "Dubai – UAE",
    ],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+971 4 236 3350"],
    href: "tel:+97142363350",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@lam-international.com"],
    href: "mailto:info@lam-international.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      "Sunday – Thursday",
      "09:00 AM – 06:00 PM",
      "Saturday",
      "10:00 AM – 04:00 PM",
      "Friday",
      "Closed",
    ],
  },
];

const services = [
  "Retail Lighting",
  "Commercial Lighting",
  "Hospitality",
  "Residential",
  "Lighting Design",
];

const ease = [0.22, 1, 0.36, 1] as const;

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: `${4 + ((i * 17) % 92)}%`,
        top: `${8 + ((i * 23) % 80)}%`,
        size: 1.5 + (i % 4) * 0.6,
        delay: (i % 7) * 0.45,
        duration: 5.5 + (i % 5) * 1.2,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[#C8A46B]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(200,164,107,0.55)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function ContactPage() {
  return (
    <PageLayout>
      <div className="relative">
        <PageHero
          compact
          eyebrow="Contact"
          title={
            <>
              Get in <span className="text-gold">Touch</span>
            </>
          }
          intro="We're here to assist you with premium lighting solutions. Feel free to reach us using the contact information below."
        />
        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
          <FloatingParticles />
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#0D0D0D]">
        {/* CONTACT CARDS */}
        <section className="relative pb-20 pt-4 lg:pb-24 lg:pt-6">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {cards.map((card, i) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.85, delay: i * 0.1, ease }}
                  whileHover={{ y: -8 }}
                  className="group relative h-full overflow-hidden rounded-[22px] border border-[#C8A46B]/25 bg-[#181818]/80 p-8 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-[border-color,box-shadow] duration-500 hover:border-[#E0BC74]/55 hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.9),0_0_40px_-10px_rgba(200,164,107,0.35)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(200,164,107,0.12), transparent 65%)",
                    }}
                  />

                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#C8A46B]/55 text-[#C8A46B] shadow-[0_0_20px_-6px_rgba(200,164,107,0.35)] transition-colors duration-500 group-hover:border-[#E0BC74] group-hover:text-[#E0BC74] group-hover:shadow-[0_0_28px_-4px_rgba(224,188,116,0.55)]"
                    whileHover={{ rotate: 8 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <card.icon size={20} strokeWidth={1.4} />
                  </motion.div>

                  <h2 className="relative mt-7 font-display text-2xl text-[#FFFFFF]">
                    {card.title}
                  </h2>

                  <div className="relative mt-4 space-y-1.5 text-sm leading-relaxed text-[#B8B8B8]">
                    {card.href ? (
                      <a
                        href={card.href}
                        className="block transition-colors duration-300 hover:text-[#E0BC74]"
                      >
                        {card.lines[0]}
                      </a>
                    ) : card.title === "Business Hours" ? (
                      <div className="space-y-3">
                        <div>
                          <p className="text-[#FFFFFF]">{card.lines[0]}</p>
                          <p>{card.lines[1]}</p>
                        </div>
                        <div>
                          <p className="text-[#FFFFFF]">{card.lines[2]}</p>
                          <p>{card.lines[3]}</p>
                        </div>
                        <div>
                          <p className="text-[#FFFFFF]">{card.lines[4]}</p>
                          <p>{card.lines[5]}</p>
                        </div>
                      </div>
                    ) : (
                      card.lines.map((line) => <p key={line}>{line}</p>)
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* COMPANY INFO */}
        <section className="relative pb-28 pt-6 lg:pb-36 lg:pt-10">
          <div className="mx-auto max-w-[820px] px-6 text-center lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease }}
              className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#C8A46B]"
            >
              LAM International
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="mt-5 font-display text-4xl leading-tight text-[#FFFFFF] sm:text-5xl"
            >
              Premium Lighting Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.16, ease }}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#B8B8B8] sm:text-lg"
            >
              Providing high-quality lighting solutions for retail, commercial,
              hospitality, residential, and architectural projects with a commitment to
              quality, innovation, and exceptional service.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: 0.24, ease }}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              {services.map((service) => (
                <li key={service}>
                  <span className="inline-flex rounded-full border border-[#C8A46B]/45 bg-transparent px-5 py-2.5 text-[11px] font-medium tracking-[0.18em] uppercase text-[#C8A46B] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#E0BC74] hover:text-[#E0BC74] hover:shadow-[0_0_24px_-6px_rgba(200,164,107,0.55)]">
                    {service}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
