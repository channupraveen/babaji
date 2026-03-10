"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const TIERS = ["₹501", "₹1,001", "₹5,001", "₹11,001"];

export default function Donations() {
  const [ref, vis] = useInView();

  return (
    <section
      id="donate"
      className="py-24 px-6 relative"
      style={{
        background: "linear-gradient(135deg, #F5EDE0 0%, #FEFCF9 100%)",
      }}
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, #D4772C 0px, #D4772C 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div ref={ref} className="max-w-[750px] mx-auto text-center relative z-10">
        {vis && (
          <div className="animate-fade-in-up">
            <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
              Support the Mission
            </p>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
              Help Spread Divine Light
            </h2>
            <OmDivider />
            <p className="font-body text-[17px] leading-[1.9] text-earth-500 mt-6 mb-4">
              Support Shree Babaji&apos;s mission of spreading spiritual wisdom,
              service, and compassion to humanity. Your contribution helps continue
              this sacred journey of awakening and love.
            </p>
            <p className="font-body text-[17px] leading-[1.9] text-earth-400 mb-10">
              Every offering, no matter how small, creates ripples of positive
              change in the world.
            </p>

            {/* Donation tiers */}
            <div className="flex gap-3 justify-center flex-wrap mb-8">
              {TIERS.map((amt) => (
                <button
                  key={amt}
                  className="px-7 py-3 rounded-xl border-2 border-saffron-500/20 bg-white font-sans font-bold text-base text-saffron-500 cursor-pointer transition-all duration-300 hover:bg-saffron-500 hover:text-white hover:border-saffron-500"
                >
                  {amt}
                </button>
              ))}
            </div>

            <a
              href="#"
              className="inline-block px-14 py-[18px] rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-base tracking-wide no-underline shadow-[0_6px_24px_rgba(212,119,44,0.35)] hover:-translate-y-1 hover:shadow-[0_10px_36px_rgba(212,119,44,0.45)] transition-all duration-300"
            >
              Donate Now 🙏
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
