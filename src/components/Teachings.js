"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const TEACHINGS = [
  {
    icon: "🧘",
    title: "Meditation",
    desc: "Discover the profound stillness within through guided meditation practices that connect you to the divine source of inner peace.",
  },
  {
    icon: "✨",
    title: "Self-Realization",
    desc: "Awaken to your true nature and experience the boundless consciousness that resides within every soul.",
  },
  {
    icon: "💛",
    title: "Compassion",
    desc: "Cultivate unconditional love and compassion as the foundation of spiritual growth and service to all beings.",
  },
  {
    icon: "🙏",
    title: "Service to Humanity",
    desc: "Embody the spirit of seva — selfless service — as the highest expression of devotion and spiritual practice.",
  },
];

export default function Teachings() {
  const [ref, vis] = useInView();

  return (
    <section id="teachings" className="bg-cream-50 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                The Spiritual Path
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Teachings of Shree Babaji
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[600px] mx-auto mt-5 leading-[1.8]">
                Four sacred pillars guide the spiritual journey — each a gateway to
                transformation and divine union.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEACHINGS.map((t, i) => (
                <div
                  key={t.title}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-10 sm:p-8 text-center relative overflow-hidden border border-saffron-500/[0.06] shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(212,119,44,0.12)] transition-all duration-400 cursor-default`}
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron-500 to-gold-500" />

                  <div className="w-[68px] h-[68px] rounded-full mx-auto mb-5 flex items-center justify-center text-[32px] bg-gradient-to-br from-saffron-500/[0.08] to-gold-500/[0.08]">
                    {t.icon}
                  </div>
                  <h3 className="font-display text-[22px] font-semibold text-earth-700 mb-3">
                    {t.title}
                  </h3>
                  <p className="font-body text-[15px] leading-[1.7] text-earth-400">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
