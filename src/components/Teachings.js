"use client";
import Image from "next/image";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const MISSION_POINTS = [
  { icon: "🍛", text: "Provide nutritious meals to the hungry through Annadanam" },
  { icon: "🪷", text: "Promote spiritual growth and cultural awareness in communities" },
  { icon: "🤝", text: "Serve communities with compassion through humanitarian initiatives" },
  { icon: "☮️", text: "Spread harmony, love, and humanitarian values across society" },
];

export default function Teachings() {
  const [ref, vis] = useInView();

  return (
    <section id="mission" className="bg-cream-50 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Vision Card */}
            <div className="animate-slide-left">
              {/* Vision box */}
              <div className="bg-white rounded-2xl p-8 border border-saffron-500/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)] mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center">
                    <span className="text-white text-lg">👁</span>
                  </div>
                  <h3 className="font-display text-[22px] font-semibold text-earth-700">Vision</h3>
                </div>
                <p className="font-body text-[16px] leading-[1.9] text-earth-500 mb-6">
                  To create a compassionate society where no one goes hungry and every soul
                  receives love, dignity, and spiritual nourishment.
                </p>
                <div className="space-y-3">
                  {MISSION_POINTS.map((p) => (
                    <div key={p.text} className="flex items-start gap-3">
                      <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
                      <p className="font-body text-[14px] leading-[1.7] text-earth-400">{p.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Temple image */}
              <div className="rounded-2xl overflow-hidden relative shadow-[0_12px_40px_rgba(61,43,31,0.12)]"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/image-42.jpg"
                  alt="Spiritual Temple — Ravi Swamy Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-700/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 font-display text-sm italic">Serving with devotion and compassion</p>
                </div>
              </div>
            </div>

            {/* Right: Mission Text */}
            <div className="animate-slide-right">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Our Purpose
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5 leading-[1.2]">
                Our Mission
              </h2>
              <OmDivider />

              <div className="mt-6 space-y-5">
                <p className="font-body text-[17px] leading-[1.9] text-earth-500">
                  Our mission is to create a compassionate society by serving those in need
                  and spreading timeless spiritual values rooted in the principle of
                  <em> Manava Seva is Madhava Seva</em> — Service to humanity is service to God.
                </p>
                <p className="font-body text-[17px] leading-[1.9] text-earth-500">
                  We reach out to devotees, pilgrims, poor families, and communities through
                  regular Annadanam programs and spiritual events, nurturing both body and soul.
                </p>
              </div>

              {/* Key values */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Compassion", icon: "💛" },
                  { label: "Selfless Service", icon: "🙏" },
                  { label: "Devotion", icon: "🪷" },
                  { label: "Community", icon: "👥" },
                ].map((v) => (
                  <div key={v.label}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-saffron-500/10 shadow-[0_2px_12px_rgba(61,43,31,0.05)]"
                  >
                    <span className="text-xl">{v.icon}</span>
                    <span className="font-sans font-semibold text-[14px] text-earth-600">{v.label}</span>
                  </div>
                ))}
              </div>

              <a
                href="#donate"
                className="inline-block mt-8 px-8 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[15px] no-underline shadow-[0_4px_20px_rgba(212,119,44,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,119,44,0.45)] transition-all duration-300"
              >
                Support Our Mission
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
