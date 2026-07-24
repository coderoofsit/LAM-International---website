import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageLayout, PageHero } from "../components/site/PageLayout";
import { Reveal } from "../components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — LAM International" },
      {
        name: "description",
        content:
          "Contact LAM International — office address, phone, email, and business hours.",
      },
      { property: "og:title", content: "Contact LAM International" },
      {
        property: "og:description",
        content: "Reach our team for your next lighting project.",
      },
    ],
  }),
  component: ContactPage,
});

const cards = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["LAM International", "Business Bay", "Dubai, United Arab Emirates"],
  },
  {
    icon: Phone,
    title: "Phone Number",
    lines: ["+971 4 555 0123", "+971 50 555 0123"],
    hrefs: ["tel:+97145550123", "tel:+971505550123"],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["hello@laminternational.com", "projects@laminternational.com"],
    hrefs: [
      "mailto:hello@laminternational.com",
      "mailto:projects@laminternational.com",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Sunday – Thursday · 09:00 – 18:00", "Saturday · 10:00 – 16:00", "Friday · Closed"],
  },
];

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        intro="Reach LAM International directly using the details below."
      />

      <section className="bg-cream pb-32 pt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="luxury-card group h-full p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/40 text-gold transition duration-500 group-hover:bg-gold group-hover:text-ink">
                    <c.icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-white">{c.title}</h3>
                  <div className="mt-3 space-y-1 text-sm leading-relaxed text-subhead">
                    {c.lines.map((l, idx) =>
                      c.hrefs?.[idx] ? (
                        <a
                          key={l}
                          href={c.hrefs[idx]}
                          className="block transition hover:text-gold"
                        >
                          {l}
                        </a>
                      ) : (
                        <p key={l}>{l}</p>
                      ),
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
