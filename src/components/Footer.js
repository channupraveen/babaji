const QUICK_LINKS = ["About Babaji", "Teachings", "Programs", "Gallery"];
const VISIT_LINKS = ["Visit Ashram", "Meditation", "Retreats", "Donations"];
const SOCIAL = [
  { icon: "𝕏", label: "Twitter" },
  { icon: "f", label: "Facebook" },
  { icon: "in", label: "LinkedIn" },
  { icon: "▶", label: "YouTube" },
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center">
                <span className="text-white text-xl font-display">ॐ</span>
              </div>
              <span className="font-display text-white text-[22px] font-bold">
                Shree Babaji
              </span>
            </div>
            <p className="font-body text-[15px] leading-[1.8] text-white/50 max-w-[320px] mb-5">
              Guiding humanity toward inner peace, self-realization, and universal
              love through timeless spiritual wisdom and compassionate service.
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
                key={l}
                href="#"
                className="block text-white/50 text-[15px] font-sans no-underline mb-2.5 hover:text-saffron-400 transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Col 3 - Visit */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm tracking-[1px] uppercase mb-5">
              Visit Us
            </h4>
            {VISIT_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="block text-white/50 text-[15px] font-sans no-underline mb-2.5 hover:text-saffron-400 transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="text-white font-sans font-bold text-sm tracking-[1px] uppercase mb-5">
              Contact
            </h4>
            <p className="text-[15px] text-white/50 font-sans mb-2.5">
              📍 Sacred Valley, Himalayas, Uttarakhand, India
            </p>
            <p className="text-[15px] text-white/50 font-sans mb-2.5">
              📧 blessings@shreebabaji.org
            </p>
            <p className="text-[15px] text-white/50 font-sans">
              📞 +91 98765 43210
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-white/35 font-sans">
            © 2026 Shree Babaji Ashram. All rights reserved.
          </p>
          <p className="text-[13px] text-white/35 font-sans">
            Made with 🙏 and devotion
          </p>
        </div>
      </div>
    </footer>
  );
}
