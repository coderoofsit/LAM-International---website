import { Link } from "@tanstack/react-router";
import logo from "../../assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className="group inline-flex max-w-[55vw] items-center sm:max-w-none" aria-label="LAM International">
      <img
        src={logo}
        alt="LAM International"
        className={`h-11 w-auto max-h-full object-contain transition-opacity duration-300 group-hover:opacity-90 sm:h-14 lg:h-16 ${className}`}
      />
    </Link>
  );
}
