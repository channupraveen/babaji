"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const PROGRAMS = [
  {
    icon: "🧘‍♂️",
    title: "Meditation Sessions",
    desc: "Daily guided meditation for inner stillness, clarity of mind, and connection with the divine presence.",
    time: "Daily · 5:30 AM & 6:00 PM",
  },
  {
    icon: "🏔️",
    title: "Spiritual Retreats",
    desc: "Multi-day immersive retreats in the ashram for deep spiritual practice and transformation.",
    time: "Monthly · 3-7 Days",
  },
  {
    icon: "🧎",
    title: "Yoga Programs",
    desc: "Classical yoga practices to harmonize body, mind, and spirit through ancient techniques.",
    time: "Daily · 6:00 AM",
  },
  {
    icon: "🤝",
    title: "Community Service",
    desc: "Join seva programs to serve local communities, feed the hungry, and uplift those in need.",
    time: "Weekly · Saturdays",
  },
];

export default function Programs() {
  const [ref, vis] = useInView();

  return (
    <section id="programs" className="bg-cream-100 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Programs & Activities
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Begin Your Sacred Journey
              </h2>
              <OmDivider />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROGRAMS.map((p, i) => (
                <div
                  key={p.title}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-9 flex gap-5 items-start border border-saffron-500/[0.06] shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(212,119,44,0.1)] transition-all duration-400 cursor-default`}
                >
                  <div className="w-[60px] h-[60px] rounded-2xl shrink-0 flex items-center justify-center text-[28px] bg-gradient-to-br from-saffron-500/[0.08] to-gold-500/[0.08]">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-earth-700 mb-2">
                      {p.title}
                    </h3>
                    <p className="font-body text-[15px] leading-[1.7] text-earth-400 mb-3">
                      {p.desc}
                    </p>
                    <span className="text-[13px] font-sans font-bold text-saffron-500 tracking-wide">
                      {p.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
