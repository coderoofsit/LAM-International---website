import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-[#2E2E2E] bg-[#0F0F0F]/95 backdrop-blur-xl transition-[box-shadow] duration-500 ${
          scrolled ? "shadow-[0_8px_32px_-12px_rgba(0,0,0,0.65)]" : "shadow-none"
        }`}
      >
        <div className="relative mx-auto flex h-[4.75rem] max-w-[1280px] items-center justify-between px-6 lg:h-[5.25rem] lg:px-10">
          <Logo tone="gold" />

          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-12 lg:flex">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`gold-underline text-[11px] font-medium tracking-[0.26em] uppercase transition-colors duration-300 ${
                    active ? "is-active text-gold" : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-outline-dark !px-6 !py-2.5">
              Enquire
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="text-white transition hover:text-gold lg:hidden"
            aria-label="Open menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-[#0F0F0F] pt-28 pb-10 px-8 lg:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-7">
              {nav.map((item, i) => {
                const active = pathname === item.to;
                return (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.08 }}
                  >
                    <Link
                      to={item.to}
                      className={`font-display text-4xl transition ${
                        active ? "text-gold" : "text-white hover:text-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            <Link to="/contact" className="btn-outline-dark w-full">
              Enquire
            </Link>
            <div className="mt-8 text-xs tracking-[0.3em] uppercase text-label">
              LAM International — Lighting Spaces
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
