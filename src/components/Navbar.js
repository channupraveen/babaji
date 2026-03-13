"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Annadanam", href: "#annadanam" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-cream-100/[0.97] shadow-[0_2px_20px_rgba(61,43,31,0.08)] border-b border-saffron-500/10"
          : "bg-white/[0.95] border-b border-saffron-500/10"
      }`}
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div className="w-[44px] h-[44px] rounded-full overflow-hidden border-2 border-saffron-500/30 shadow-[0_2px_12px_rgba(212,119,44,0.2)] shrink-0">
            <Image src="/logo.jpg" alt="Ravi Swamy Foundation" width={44} height={44} className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-[17px] text-earth-700 tracking-wide">
              Ravi Swamy
            </span>
            <span className="font-sans text-[10px] text-saffron-500 tracking-[2px] uppercase font-bold">
              Foundation
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-sans font-semibold tracking-wide transition-all duration-300 no-underline text-earth-500 hover:text-saffron-500 hover:bg-saffron-500/[0.08]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Donate Button + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#donate"
            className="hidden sm:inline-block px-5 py-2.5 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[13px] tracking-wide no-underline shadow-[0_3px_14px_rgba(212,119,44,0.35)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,119,44,0.45)] transition-all duration-300"
          >
            Donate Now
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden bg-transparent border-none cursor-pointer p-2 text-[28px] text-earth-700 transition-colors"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-cream-100/[0.98] px-6 pb-6 pt-2 border-t border-saffron-500/10"
          style={{ backdropFilter: "blur(20px)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-earth-500 text-base font-sans font-semibold no-underline border-b border-saffron-500/[0.06] hover:text-saffron-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            className="block mt-4 text-center py-3 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-base no-underline"
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
}
