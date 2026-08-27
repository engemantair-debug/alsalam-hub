import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wifi } from "lucide-react";
import Logo from "./Logo.jsx";
import SITE_CONFIG from "../config/siteConfig.js";

const NAV_LINKS = [
  { label: "الرئيسية", href: "/#home" },
  { label: "خدماتنا", href: "/#services" },
  { label: "الاشتراكات", href: "/#subscriptions" },
  { label: "عن المساحة", href: "/#about" },
  { label: "تواصل معنا", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md shadow-card" : "bg-paper/70 backdrop-blur-sm"
      } border-b border-paper-line`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Logo />

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-ink/80 hover:text-primary transition-colors relative py-2 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.wifiLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-white text-sm font-bold px-5 py-2.5 shadow-soft hover:bg-primary-light hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Wifi size={17} strokeWidth={2.5} />
              دخول الإنترنت
            </a>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl border border-paper-line bg-white/60 text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-paper-line ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4 bg-paper">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-semibold text-ink py-3 px-2 rounded-lg hover:bg-paper-alt transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.wifiLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white text-sm font-bold px-5 py-3.5 shadow-soft"
          >
            <Wifi size={17} strokeWidth={2.5} />
            دخول الإنترنت
          </a>
        </nav>
      </div>
    </header>
  );
}
