import { Link } from "@tanstack/react-router";

export function Logo({ tone = "gold" }: { tone?: "dark" | "light" | "gold" }) {
  const color =
    tone === "light" ? "text-white" : tone === "dark" ? "text-white" : "text-gold";

  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 rotate-45 rounded-[4px] border border-gold transition-transform duration-500 group-hover:rotate-90" />
        <span className="font-display text-lg font-semibold text-gold">L</span>
      </span>
      <span className={`flex flex-col leading-none ${color}`}>
        <span className="font-display text-lg tracking-wide">LAM</span>
        <span
          className={`mt-0.5 text-[9px] font-medium tracking-[0.35em] uppercase ${
            tone === "gold" ? "text-gold/70" : "text-label"
          }`}
        >
          International
        </span>
      </span>
    </Link>
  );
}
