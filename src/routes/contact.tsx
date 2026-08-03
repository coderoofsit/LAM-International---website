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
          "Contact LAM International in Dubai, UAE and Riyadh, KSA — office address, phone, email, and business hours.",
      },
      { property: "og:title", content: "Contact LAM International" },
      {
        property: "og:description",
        content: "Reach LAM International in Dubai, UAE and Riyadh, KSA.",
      },
    ],
  }),
  component: ContactPage,
});

type ContactLine = {
  text: string;
  href?: string;
  emphasis?: boolean;
};

type ContactCard = {
  icon: LucideIcon;
  title: string;
  lines: ContactLine[];
};

const cards: ContactCard[] = [
  {
    icon: MapPin,
    title: "Our Locations",
    lines: [
      { text: "Dubai – UAE", emphasis: true },
      { text: "LAM International" },
      { text: "316, European Business Centre, DIP-1" },
      { text: "P.O. Box: 451903" },
      { text: "Riyadh – KSA", emphasis: true },
      { text: "Now available in Riyadh" },
    ],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    lines: [
      { text: "UAE", emphasis: true },
      { text: "+971 4 236 3350", href: "tel:+97142363350" },
      { text: "KSA · Riyadh", emphasis: true },
      { text: "+966 58 290 0400", href: "tel:+966582900400" },
    ],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: [
      {
        text: "info@lam-international.com",
        href: "mailto:info@lam-international.com",
      },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: [
      { text: "Monday – Thursday", emphasis: true },
      { text: "8:30 AM – 6:00 PM" },
      { text: "Friday", emphasis: true },
      { text: "8:30 AM – 12:00 PM, 2:00 – 5:00 PM" },
      { text: "Saturday – Sunday", emphasis: true },
      { text: "Closed" },
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

function ContactLines({ lines, title }: { lines: ContactLine[]; title: string }) {
  if (title === "Business Hours") {
    return (
      <div className="space-y-3">
        {[0, 2, 4].map((start) => (
          <div key={lines[start]?.text ?? start}>
            <p className="text-[#FFFFFF]">{lines[start]?.text}</p>
            <p>{lines[start + 1]?.text}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      {lines.map((line, index) => {
        const className = line.emphasis
          ? `text-[#FFFFFF] ${index > 0 ? "pt-3" : ""}`
          : undefined;

        if (line.href) {
          return (
            <a
              key={`${line.text}-${index}`}
              href={line.href}
              className={`block transition-colors duration-300 hover:text-[#E0BC74] ${className ?? ""}`}
            >
              {line.text}
            </a>
          );
        }

        return (
          <p key={`${line.text}-${index}`} className={className}>
            {line.text}
          </p>
        );
      })}
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
          intro="We're here to assist you with premium lighting solutions across Dubai, UAE and Riyadh, KSA. Reach us using the contact details below."
        />
        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
          <FloatingParticles />
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#0D0D0D]">
        <section className="relative pb-14 pt-4 sm:pb-20 lg:pb-24 lg:pt-6">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
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

                  <div className="relative mt-4 text-sm leading-relaxed text-[#B8B8B8]">
                    <ContactLines lines={card.lines} title={card.title} />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

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
              Providing high-quality lighting solutions across the UAE and KSA for retail,
              commercial, hospitality, residential, and architectural projects — with a
              commitment to quality, innovation, and exceptional service.
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
