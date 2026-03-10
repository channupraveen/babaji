"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

export default function About() {
  const [ref, vis] = useInView();

  return (
    <section id="about" className="bg-cream-100 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Image Placeholder */}
            <div className="animate-slide-left rounded-2xl overflow-hidden relative max-h-[520px] shadow-[0_20px_60px_rgba(61,43,31,0.15)]"
              style={{ aspectRatio: "4/5", background: "linear-gradient(135deg, #e8d5b7, #d4a574, #c89b6e)" }}
            >
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.15) 100%)" }}
              >
                <span className="text-[120px] text-white/20 font-display">ॐ</span>
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-8 bg-gradient-to-t from-earth-700/70 to-transparent">
                <p className="text-white/90 font-display text-lg italic">
                  Shree Babaji — Light of Divine Wisdom
                </p>
              </div>
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-[60px] h-[60px] border-t-[3px] border-l-[3px] border-white/30 rounded-tl" />
              <div className="absolute bottom-4 right-4 w-[60px] h-[60px] border-b-[3px] border-r-[3px] border-white/30 rounded-br" />
            </div>

            {/* Text */}
            <div className="animate-slide-right">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                About Shree Babaji
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-6 leading-[1.2]">
                A Beacon of Timeless
                <br />
                Spiritual Wisdom
              </h2>
              <OmDivider />
              <div className="mt-6">
                <p className="font-body text-[17px] leading-[1.9] text-earth-500 mb-4">
                  Shree Babaji represents timeless spiritual wisdom, guiding seekers
                  toward inner peace, self-realization, and universal love. His
                  teachings illuminate the path of dharma and compassion for all of
                  humanity.
                </p>
                <p className="font-body text-[17px] leading-[1.9] text-earth-500 mb-8">
                  Through decades of devoted spiritual practice and selfless service,
                  Babaji has touched countless lives, offering solace to the weary,
                  clarity to the confused, and love to all who seek the divine within.
                </p>
                <a
                  href="#teachings"
                  className="inline-flex items-center gap-2 text-saffron-500 font-sans font-bold text-[15px] no-underline hover:gap-3.5 transition-all duration-300"
                >
                  Explore Teachings →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
