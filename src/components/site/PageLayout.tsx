import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { BackToTop } from "./BackToTop";
import { WhatsAppButton } from "./WhatsAppButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen bg-cream">{children}</main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

type PageHeroProps = {
  eyebrow: string;
  /** Main heading — use ReactNode to wrap gold accent words in <span className="text-gold"> */
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  /** Optional compact height for gallery pages */
  compact?: boolean;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  align = "center",
  compact = false,
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={`relative overflow-hidden bg-[#0D0D0D] ${
        compact
          ? "pt-28 pb-8 sm:pt-32 sm:pb-10 lg:pt-40 lg:pb-12"
          : "pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20"
      }`}
    >
      {/* Ambient gold atmosphere */}
      <div
        className="pointer-events-none absolute -right-24 -top-16 h-[420px] w-[420px] rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.05) 42%, transparent 70%)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[20%] h-36 w-36 rounded-full blur-3xl"
        style={{ background: "rgba(212,175,55,0.12)" }}
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.18, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-28 bottom-0 h-[280px] w-[280px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-10">
        <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className={`flex items-center gap-2 sm:gap-3 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-px w-6 bg-gold/80 sm:w-8" aria-hidden />
            <p className="text-[10px] font-medium tracking-[0.32em] uppercase text-gold sm:text-[11px] sm:tracking-[0.4em]">
              {eyebrow}
            </p>
            <span className="h-px w-6 bg-gold/80 sm:w-8" aria-hidden />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.1, ease }}
            className="mt-5 font-display text-[clamp(2.25rem,8vw,5.25rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white text-balance sm:mt-6"
          >
            {title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className={`mt-7 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${
              centered ? "mx-auto" : ""
            }`}
            aria-hidden
          />

          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease }}
              className={`mt-7 text-base leading-relaxed text-subhead sm:text-lg text-pretty ${
                centered ? "mx-auto max-w-2xl" : "max-w-2xl"
              }`}
            >
              {intro}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease }}
              className={`mt-10 ${centered ? "flex justify-center" : ""}`}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
