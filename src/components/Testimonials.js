"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const TESTIMONIALS = [
  {
    quote:
      "Babaji's blessings transformed my life completely. I found a peace I never knew existed within me.",
    name: "Priya Sharma",
    loc: "Delhi",
  },
  {
    quote:
      "I found peace and clarity through Babaji's guidance. His words continue to illuminate my path every day.",
    name: "Rajesh Kumar",
    loc: "Mumbai",
  },
  {
    quote:
      "The ashram experience was life-changing. I left with a heart full of gratitude and a soul renewed.",
    name: "Anita Devi",
    loc: "Rishikesh",
  },
];

export default function Testimonials() {
  const [ref, vis] = useInView();

  return (
    <section
      id="testimonials"
      className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #FEFCF9 0%, #FDF8F0 100%)" }}
    >
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Devotee Experiences
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Voices of Transformation
              </h2>
              <OmDivider />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-9 relative border border-saffron-500/[0.06] shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(212,119,44,0.1)] transition-all duration-400`}
                >
                  {/* Quote mark */}
                  <span className="font-display text-[56px] text-saffron-500/15 absolute top-4 left-6 leading-none">
                    &ldquo;
                  </span>

                  <p className="font-body text-base leading-[1.8] text-earth-500 italic mb-6 pt-5">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center text-white font-sans font-bold text-base">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[15px] text-earth-700">
                        {t.name}
                      </p>
                      <p className="font-sans text-[13px] text-earth-400">
                        {t.loc}
                      </p>
                    </div>
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
