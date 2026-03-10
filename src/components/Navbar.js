"use client";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About Babaji", href: "#about" },
  { label: "Ashram", href: "#visit" },
  { label: "Programs", href: "#programs" },
  { label: "Visit", href: "#visit" },
  { label: "Donations", href: "#donate" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
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
          : "bg-black/[0.15] border-b border-white/10"
      }`}
      style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline">
          <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center shadow-[0_2px_12px_rgba(212,119,44,0.3)]">
            <span className="text-white text-[22px] font-display font-bold">ॐ</span>
          </div>
          <span
            className={`font-display font-bold text-[22px] tracking-wide transition-colors duration-400 ${
              scrolled ? "text-earth-700" : "text-white"
            }`}
          >
            Shree Babaji
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-2 rounded-lg text-sm font-sans font-semibold tracking-wide transition-all duration-300 no-underline
                ${scrolled
                  ? "text-earth-500 hover:text-saffron-500 hover:bg-saffron-500/[0.08]"
                  : "text-white/90 hover:text-white hover:bg-white/[0.12]"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden bg-transparent border-none cursor-pointer p-2 text-[28px] transition-colors ${
            scrolled ? "text-earth-700" : "text-white"
          }`}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-cream-100/[0.98] px-6 pb-6 pt-2 border-t border-saffron-500/10 animate-fade-in"
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
        </div>
      )}
    </nav>
  );
}
