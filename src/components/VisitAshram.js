"use client";
import Image from "next/image";
import { useInView } from "./useInView";

const ANNADANAM_POINTS = [
  "Devotees and pilgrims visiting spiritual events",
  "Poor families and individuals in need",
  "Communities during festivals and special occasions",
  "Students and elders who require support",
];

export default function VisitAshram() {
  const [ref, vis] = useInView();

  return (
    <section
      id="annadanam"
      className="relative overflow-hidden py-24 px-6"
      style={{ background: "linear-gradient(135deg, #3D2B1F 0%, #5C3D2E 50%, #3D2B1F 100%)" }}
    >
      {/* Warm glow overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(212,119,44,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(201,168,76,0.08) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="max-w-[1100px] mx-auto relative z-10">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-400 tracking-[3px] uppercase mb-3">
                Sacred Service
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-white mb-5">
                Annadanam — The Holy Act of Feeding
              </h2>
              <div className="flex items-center gap-4 justify-center mb-5 max-w-[260px] mx-auto">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-saffron-400" />
                <span className="text-saffron-400 text-lg">🪷</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-saffron-400" />
              </div>
              <p className="font-body text-[17px] text-white/70 max-w-[640px] mx-auto leading-[1.9]">
                Annadanam is one of the most sacred services in spiritual tradition.
                Feeding the hungry is considered equivalent to serving the Divine itself.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Left: Image */}
              <div className="animate-slide-left relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative"
                  style={{ aspectRatio: "3/4" }}
                >
                  <Image
                    src="/image-48.jpg"
                    alt="Annadanam — Ravi Swamy Foundation"
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-700/50 to-transparent" />
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl shadow-lg px-6 py-4 text-center">
                  <p className="font-display font-bold text-[28px] text-white">25,000+</p>
                  <p className="font-sans text-[12px] text-white/80 tracking-wide uppercase">Meals Served</p>
                </div>
              </div>

              {/* Right: Text */}
              <div className="animate-slide-right">
                <p className="font-body text-[17px] leading-[1.9] text-white/80 mb-5">
                  Ravi Swamy Foundation organizes regular Annadanam programs as a core expression
                  of its spiritual mission. Every meal is prepared and served with devotion,
                  treating every person as divine.
                </p>
                <p className="font-body text-[17px] leading-[1.9] text-white/70 mb-8">
                  We serve meals to:
                </p>
                <div className="space-y-3 mb-8">
                  {ANNADANAM_POINTS.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="text-saffron-400 mt-1 shrink-0 text-lg">✦</span>
                      <p className="font-body text-[15px] leading-[1.7] text-white/70">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href="#donate"
                    className="inline-block px-8 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 text-white font-sans font-bold text-[15px] no-underline shadow-[0_4px_20px_rgba(212,119,44,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,119,44,0.5)] transition-all duration-300"
                  >
                    Support Annadanam
                  </a>
                  <a
                    href="#contact"
                    className="inline-block px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-sans font-bold text-[15px] no-underline hover:bg-white/10 transition-all duration-300"
                  >
                    Volunteer With Us
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
