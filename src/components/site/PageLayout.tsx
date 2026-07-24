import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-cream">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-40 pb-20 lg:pt-52 lg:pb-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="gold-divider">{eyebrow}</span>
          <h1 className="mt-6 font-display text-5xl leading-[1.08] text-white text-balance lg:text-7xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-subhead text-pretty">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
