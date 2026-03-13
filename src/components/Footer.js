import Image from "next/image";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Annadanam", href: "#annadanam" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const DONATION_LINKS = [
  { label: "₹500 — Feed a Devotee", href: "#donate" },
  { label: "₹1100 — Annadanam Seva", href: "#donate" },
  { label: "₹5000 — Sponsor Meals", href: "#donate" },
  { label: "Volunteer With Us", href: "#contact" },
];

const SOCIAL = [
  { icon: "𝕏", label: "Twitter" },
  { icon: "f", label: "Facebook" },
  { icon: "▶", label: "YouTube" },
  { icon: "📷", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-earth-700 text-white/70 pt-20">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Col 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-[42px] h-[42px] rounded-full overflow-hidden border-2 border-saffron-500/40 shrink-0">
                <Image src="/logo.jpg" alt="Ravi Swamy Foundation" width={42} height={42} className="object-cover w-full h-full" />
              </div>
              <div>
                <span className="font-display text-white text-[18px] font-bold block leading-tight">
                  Ravi Swamy
                </span>
                <span className="font-sans text-saffron-400 text-[10px] tracking-[2px] uppercase font-bold">
                  Foundation
                </span>
              </div>
            </div>
            <p className="font-body text-[15px] leading-[1.8] text-white/50 max-w-[280px] mb-5">
              Serving humanity through Annadanam, spiritual guidance, and
              humanitarian service. Manava Seva is Madhava Seva.
            </p>
            {/* Social */}
            <div className="flex gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-[38px] h-[38px] rounded-[10px] bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 text-sm font-sans font-bold no-underline hover:bg-saffron-500 hover:text-white hover:border-saffron-500 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm tracking-[1px] uppercase mb-5">
              Quick Links
            </h4>
            {QUICK_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-white/50 text-[15px] font-sans no-underline mb-2.5 hover:text-saffron-400 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 3 - Donations */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm tracking-[1px] uppercase mb-5">
              Donate / Seva
            </h4>
            {DONATION_LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block text-white/50 text-[15px] font-sans no-underline mb-2.5 hover:text-saffron-400 transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm tracking-[1px] uppercase mb-5">
              Contact
            </h4>
            <p className="text-[15px] text-white/50 font-sans mb-2.5">
              📍 Kalaburagi, Karnataka, India
            </p>
            <p className="text-[15px] text-white/50 font-sans mb-2.5">
              📧 info@raviswamyfoundation.org
            </p>
            <p className="text-[15px] text-white/50 font-sans mb-5">
              📞 8747802991
            </p>
            <a
              href="#donate"
              className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[13px] no-underline shadow-[0_3px_14px_rgba(212,119,44,0.3)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Donate Now 🙏
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/35 font-sans">
            © 2026 Ravi Swamy Foundation. All rights reserved.
          </p>
          <p className="text-[13px] text-white/35 font-sans">
            Made with 🙏 and devotion · Kalaburagi
          </p>
        </div>
      </div>
    </footer>
  );
}
