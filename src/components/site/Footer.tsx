import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="gold" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-subhead">
              Lighting Spaces. Empowering Brands. Creating Lasting Impressions. LAM
              International delivers premium architectural and commercial lighting
              solutions with innovation, efficiency, and timeless design.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-stone text-subhead transition hover:border-gold hover:text-gold"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-stone text-subhead transition hover:border-gold hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Products", "/products"],
                ["Projects", "/projects"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-subhead transition hover:text-gold">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Services</h4>
            <ul className="space-y-3 text-sm text-subhead">
              <li>Retail Lighting</li>
              <li>Commercial Lighting</li>
              <li>Hospitality Lighting</li>
              <li>Residential Lighting</li>
              <li>Lighting Design</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-5 text-sm font-medium tracking-wide text-white">Contact</h4>
            <address className="not-italic text-sm leading-relaxed text-subhead">
              Business Bay
              <br />
              Dubai, United Arab Emirates
            </address>
            <a
              href="mailto:hello@laminternational.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-soft"
            >
              hello@laminternational.com
              <ArrowUpRight size={14} />
            </a>
            <a
              href="tel:+97145550123"
              className="mt-2 block text-sm text-subhead transition hover:text-gold"
            >
              +971 4 555 0123
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[#242424] pt-8 text-[11px] tracking-[0.25em] uppercase text-label md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} LAM International. All rights reserved.</span>
          <span>Premium Lighting Solutions</span>
        </div>
      </div>
    </footer>
  );
}
