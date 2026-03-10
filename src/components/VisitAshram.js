"use client";
import { useInView } from "./useInView";

export default function VisitAshram() {
  const [ref, vis] = useInView();

  return (
    <section
      id="visit"
      className="relative overflow-hidden"
      style={{
        minHeight: "500px",
        background: "linear-gradient(135deg, #2d5016 0%, #1a3a0a 40%, #0d2106 100%)",
      }}
    >
      {/* Overlay glow */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(212,119,44,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(122,139,111,0.15) 0%, transparent 50%)",
        }}
      />

      <div ref={ref} className="max-w-[1100px] mx-auto px-6 py-24 relative z-10">
        {vis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left Text */}
            <div className="animate-slide-left">
              <p className="font-sans font-bold text-[13px] text-saffron-400 tracking-[3px] uppercase mb-3">
                Sacred Space
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-white mb-5 leading-[1.2]">
                Visit the Ashram
              </h2>

              {/* Mini divider */}
              <div className="flex items-center gap-4 mb-6 max-w-[260px]">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-saffron-400" />
                <span className="text-saffron-400 text-lg">☸</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-saffron-400" />
              </div>

              <p className="font-body text-[17px] leading-[1.9] text-white/80 mb-4">
                Nestled in a serene natural setting, the ashram offers a sanctuary
                for spiritual seekers. Visit to receive divine blessings and
                experience a deeper connection with your spiritual path.
              </p>
              <p className="font-body text-[17px] leading-[1.9] text-white/70 mb-9">
                Immerse yourself in daily meditation, satsang, and the peaceful
                rhythms of ashram life. Every moment here is an invitation to turn
                inward and discover the infinite.
              </p>

              <a
                href="#"
                className="inline-block px-10 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 text-white font-sans font-bold text-[15px] no-underline shadow-[0_4px_20px_rgba(212,119,44,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,119,44,0.4)] transition-all duration-300"
              >
                Plan Your Visit
              </a>
            </div>

            {/* Right Image Placeholder */}
            <div className="animate-slide-right relative">
              <div
                className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative"
                style={{
                  aspectRatio: "4/3",
                  background: "linear-gradient(135deg, #4a7c3a, #2d5016, #1a3a0a)",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(212,119,44,0.1), transparent 70%)",
                  }}
                >
                  <div className="text-center">
                    <span className="text-[80px] text-white/15 block">🙏</span>
                    <p className="text-white/25 font-display text-base mt-2 italic">
                      A Sanctuary of Peace
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating circle */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full animate-float border-2 border-saffron-500/20"
                style={{
                  background: "linear-gradient(135deg, rgba(212,119,44,0.2), rgba(201,168,76,0.2))",
                  backdropFilter: "blur(8px)",
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
