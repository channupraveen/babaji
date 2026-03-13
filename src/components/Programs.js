"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const SERVICES = [
  {
    icon: "🍛",
    title: "Annadanam",
    desc: "Providing nutritious meals to the hungry with devotion and compassion. Every meal is an act of worship.",
    highlights: ["Daily food distribution", "Festival Annadanam", "Mass feeding programs"],
    color: "from-saffron-500/10 to-gold-500/5",
    accent: "border-saffron-500/20",
  },
  {
    icon: "🪷",
    title: "Spiritual Programs",
    desc: "Guidance, discourses, and cultural programs to promote spiritual awareness and inner growth.",
    highlights: ["Spiritual discourses", "Cultural programs", "Meditation sessions"],
    color: "from-earth-400/10 to-earth-500/5",
    accent: "border-earth-400/20",
  },
  {
    icon: "🤲",
    title: "Social Service",
    desc: "Helping communities through charitable initiatives, supporting poor families and spreading harmony.",
    highlights: ["Community welfare", "Supporting poor families", "Volunteer programs"],
    color: "from-gold-500/10 to-saffron-400/5",
    accent: "border-gold-500/20",
  },
];

export default function Programs() {
  const [ref, vis] = useInView();

  return (
    <section id="services" className="bg-cream-100 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                What We Do
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Our Services
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[600px] mx-auto mt-5 leading-[1.8]">
                Three pillars of service through which Ravi Swamy Foundation touches lives
                and spreads the spirit of compassion and devotion.
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SERVICES.map((s, i) => (
                <div
                  key={s.title}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-8 relative overflow-hidden border ${s.accent} shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(212,119,44,0.12)] transition-all duration-400 cursor-default`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color}`} />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron-500 to-gold-500" />

                  <div className="relative z-10">
                    <div className="w-[68px] h-[68px] rounded-2xl mb-5 flex items-center justify-center text-[32px] bg-white shadow-[0_4px_16px_rgba(61,43,31,0.08)]">
                      {s.icon}
                    </div>
                    <h3 className="font-display text-[22px] font-semibold text-earth-700 mb-3">
                      {s.title}
                    </h3>
                    <p className="font-body text-[15px] leading-[1.7] text-earth-400 mb-5">
                      {s.desc}
                    </p>
                    <div className="space-y-2">
                      {s.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 shrink-0" />
                          <span className="font-sans text-[13px] text-earth-500 font-semibold">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a
                href="#donate"
                className="inline-block px-10 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[15px] no-underline shadow-[0_4px_20px_rgba(212,119,44,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,119,44,0.45)] transition-all duration-300"
              >
                Support Our Services
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
