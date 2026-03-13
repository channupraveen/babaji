"use client";
import Image from "next/image";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const MISSION_POINTS_KN = [
  { icon: "🪷", text: "ಆಧ್ಯಾತ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸುವುದು" },
  { icon: "🍛", text: "ಬಡವರಿಗೆ ಮತ್ತು ಅಗತ್ಯವಿರುವವರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು" },
  { icon: "☮️", text: "ಸಮಾಜದಲ್ಲಿ ಕರುಣೆ, ಶಾಂತಿ ಮತ್ತು ನಂಬಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು" },
  { icon: "🤝", text: "ಸಮಾಜದ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಸಾಮಾಜಿಕ ಸೇವೆಯನ್ನು ಉತ್ತೇಜಿಸುವುದು" },
];

const MISSION_POINTS_EN = [
  { icon: "🪷", text: "Organizing spiritual programs and events" },
  { icon: "🍛", text: "Helping poor and needy people through Annadanam" },
  { icon: "☮️", text: "Promoting compassion, peace, and faith in society" },
  { icon: "🤝", text: "Supporting devotees and communities through charitable activities" },
];

const VISION_POINTS_KN = [
  { icon: "💛", text: "ಭಕ್ತರನ್ನು ಬೆಂಬಲಿಸುವುದು" },
  { icon: "🙏", text: "ನಿರ್ಗತಿಕರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು" },
  { icon: "🪷", text: "ಭವಿಷ್ಯದ ಪೀಳಿಗೆಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಯನ್ನು ಹರಡುವುದು" },
  { icon: "👥", text: "ದಯೆಯಿಂದ ಬದುಕುವ ಮತ್ತು ಪರಸ್ಪರ ಸಹಾಯ ಮಾಡುವ ಸಮಾಜ ನಿರ್ಮಾಣ" },
];

const VISION_POINTS_EN = [
  { icon: "💛", text: "Supporting devotees on their spiritual journey" },
  { icon: "🙏", text: "Helping the needy and destitute through humanitarian service" },
  { icon: "🪷", text: "Spreading spiritual awareness for the welfare of future generations" },
  { icon: "👥", text: "Building a society rooted in kindness and mutual support" },
];

export default function Teachings() {
  const [ref, vis] = useInView();

  return (
    <section id="mission" className="bg-cream-50 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Section Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Our Purpose
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Mission &amp; Vision
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[720px] mx-auto mt-6 leading-[1.9]">
                ಗುರೂಜಿ ರವಿ ಸ್ವಾಮಿ ಅವರ ಆಶೀರ್ವಾದ ಮತ್ತು ಬೋಧನೆಗಳು ಮತ್ತು ಕುಮಾರ ಸ್ವಾಮಿ ಅವರ ಸೇವೆಯ ಮೂಲಕ, ಜನರು ಕಷ್ಟಗಳನ್ನು ನಿವಾರಿಸಲು ಮತ್ತು ಸಕಾರಾತ್ಮಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಜೀವನವನ್ನು ನಡೆಸಲು ಸಹಾಯ ಮಾಡುವ ಗುರಿಯನ್ನು ಪ್ರತಿಷ್ಠಾನ ಹೊಂದಿದೆ.
              </p>
              <p className="font-body text-[15px] text-earth-400/70 max-w-[700px] mx-auto mt-3 leading-[1.8] italic">
                Through the blessings and teachings of Guruji Ravi Swamy and the service of Kumara Swamy,
                the foundation aims to help people overcome difficulties and live a positive and spiritually meaningful life.
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch mb-16">

              {/* ──── Mission Card ──── */}
              <div className="animate-slide-left">
                <div className="bg-white rounded-2xl p-8 border border-saffron-500/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)] h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center shadow-[0_4px_16px_rgba(212,119,44,0.3)]">
                      <span className="text-white text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-display text-[24px] font-semibold text-earth-700">ನಮ್ಮ ಧ್ಯೇಯ</h3>
                      <p className="font-sans text-[11px] text-saffron-500 font-bold tracking-[2px] uppercase">
                        Our Mission
                      </p>
                    </div>
                  </div>

                  {/* Kannada Mission */}
                  <div className="mb-5 pb-5 border-b border-saffron-500/10">
                    <p className="font-body text-[15px] leading-[2] text-earth-600 mb-4">
                      ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ, ದಾನ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯ ಮೂಲಕ ಮಾನವೀಯತೆಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವುದು ರವಿ ಸ್ವಾಮಿ ಪ್ರತಿಷ್ಠಾನದ ಧ್ಯೇಯವಾಗಿದೆ. ಆಧ್ಯಾತ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸುವ ಮೂಲಕ, ಬಡವರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ ಮತ್ತು ಸಮಾಜದಲ್ಲಿ ಕರುಣೆ, ಶಾಂತಿ ಮತ್ತು ನಂಬಿಕೆಯನ್ನು ಉತ್ತೇಜಿಸುವ ಮೂಲಕ ಭಕ್ತರು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರನ್ನು ಬೆಂಬಲಿಸಲು ಪ್ರತಿಷ್ಠಾನವು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.
                    </p>
                    <div className="space-y-2">
                      {MISSION_POINTS_KN.map((p) => (
                        <div key={p.text} className="flex items-start gap-3 bg-saffron-500/[0.04] rounded-xl px-4 py-2.5">
                          <span className="text-lg shrink-0 mt-0.5">{p.icon}</span>
                          <p className="font-body text-[13px] leading-[1.7] text-earth-600">{p.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* English Mission */}
                  <p className="font-body text-[14px] leading-[1.9] text-earth-400 mb-4 italic">
                    The mission of Ravi Swamy Foundation is to serve humanity through spiritual
                    guidance, charity, and community service.
                  </p>
                  <div className="space-y-2">
                    {MISSION_POINTS_EN.map((p) => (
                      <div key={p.text} className="flex items-start gap-3 bg-saffron-500/[0.03] rounded-xl px-4 py-2.5">
                        <span className="text-lg shrink-0 mt-0.5">{p.icon}</span>
                        <p className="font-body text-[13px] leading-[1.7] text-earth-400">{p.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ──── Vision Card ──── */}
              <div className="animate-slide-right">
                <div className="bg-white rounded-2xl p-8 border border-earth-400/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)] h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-earth-500 to-earth-600 flex items-center justify-center shadow-[0_4px_16px_rgba(61,43,31,0.2)]">
                      <span className="text-white text-2xl">👁</span>
                    </div>
                    <div>
                      <h3 className="font-display text-[24px] font-semibold text-earth-700">ನಮ್ಮ ದೃಷ್ಟಿಕೋನ</h3>
                      <p className="font-sans text-[11px] text-saffron-500 font-bold tracking-[2px] uppercase">
                        Our Vision
                      </p>
                    </div>
                  </div>

                  {/* Kannada Vision */}
                  <div className="mb-5 pb-5 border-b border-earth-400/10">
                    <p className="font-body text-[15px] leading-[2] text-earth-600 mb-4">
                      ಜನರು ಪರಸ್ಪರ ಸಹಾಯ ಮಾಡುವ, ದಯೆಯಿಂದ ಬದುಕುವ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮೌಲ್ಯಗಳೊಂದಿಗೆ ಬೆಳೆಯುವ ಸಹಾನುಭೂತಿಯುಳ್ಳ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕವಾಗಿ ಬಲವಾದ ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುವುದು ರವಿ ಸ್ವಾಮಿ ಪ್ರತಿಷ್ಠಾನದ ದೃಷ್ಟಿಕೋನವಾಗಿದೆ. ಭಕ್ತರನ್ನು ಬೆಂಬಲಿಸುವ ಮೂಲಕ, ನಿರ್ಗತಿಕರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ ಮತ್ತು ಭವಿಷ್ಯದ ಪೀಳಿಗೆಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಆಧ್ಯಾತ್ಮಿಕ ಜಾಗೃತಿಯನ್ನು ಹರಡುವ ಮೂಲಕ ಪ್ರತಿಷ್ಠಾನವು ತನ್ನ ಸೇವೆಯನ್ನು ವಿಸ್ತರಿಸಲು ಶ್ರಮಿಸುತ್ತದೆ.
                    </p>
                    <div className="space-y-2">
                      {VISION_POINTS_KN.map((p) => (
                        <div key={p.text} className="flex items-start gap-3 bg-earth-400/[0.04] rounded-xl px-4 py-2.5">
                          <span className="text-lg shrink-0 mt-0.5">{p.icon}</span>
                          <p className="font-body text-[13px] leading-[1.7] text-earth-600">{p.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* English Vision */}
                  <p className="font-body text-[14px] leading-[1.9] text-earth-400 mb-4 italic">
                    The vision is to build a compassionate and spiritually strong society where
                    people help each other, live with kindness, and grow with spiritual values.
                  </p>
                  <div className="space-y-2">
                    {VISION_POINTS_EN.map((p) => (
                      <div key={p.text} className="flex items-start gap-3 bg-earth-400/[0.03] rounded-xl px-4 py-2.5">
                        <span className="text-lg shrink-0 mt-0.5">{p.icon}</span>
                        <p className="font-body text-[13px] leading-[1.7] text-earth-400">{p.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner with Image */}
            <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Temple/Foundation image */}
              <div className="rounded-2xl overflow-hidden relative shadow-[0_12px_40px_rgba(61,43,31,0.12)]"
                style={{ aspectRatio: "16/9" }}
              >
                <Image
                  src="/image-42.jpg"
                  alt="Spiritual Programs — Ravi Swamy Foundation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-700/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 font-display text-sm italic">
                    ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನ, ದಾನ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆ
                  </p>
                </div>
              </div>

              {/* Core values */}
              <div>
                <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                  ನಮ್ಮ ಮೂಲ ಮೌಲ್ಯಗಳು
                </p>
                <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold text-earth-700 mb-5 leading-[1.2]">
                  Spirituality, Charity &amp; Community Welfare
                </h3>
                <p className="font-body text-[16px] leading-[1.9] text-earth-500 mb-6">
                  Rooted in the timeless principle of <em>Manava Seva is Madhava Seva</em> —
                  Service to humanity is service to God — the foundation nurtures both body
                  and soul through its programs and initiatives.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Compassion", icon: "💛", kannada: "ಕರುಣೆ" },
                    { label: "Selfless Service", icon: "🙏", kannada: "ನಿಸ್ವಾರ್ಥ ಸೇವೆ" },
                    { label: "Devotion", icon: "🪷", kannada: "ಭಕ್ತಿ" },
                    { label: "Peace", icon: "☮️", kannada: "ಶಾಂತಿ" },
                  ].map((v) => (
                    <div key={v.label}
                      className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-saffron-500/10 shadow-[0_2px_12px_rgba(61,43,31,0.05)]"
                    >
                      <span className="text-xl">{v.icon}</span>
                      <div>
                        <span className="font-sans font-semibold text-[14px] text-earth-600 block">{v.label}</span>
                        <span className="font-body text-[11px] text-earth-400">{v.kannada}</span>
                      </div>
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
          </>
        )}
      </div>
    </section>
  );
}
