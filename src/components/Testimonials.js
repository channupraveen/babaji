"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";
import { useState, useEffect, useRef } from "react";

const STATS = [
  { target: 25000, suffix: "+", label: "Meals Served", icon: "🍛" },
  { target: 501, suffix: "+", label: "Devotees Served", icon: "🙏" },
  { target: 1100, prefix: "₹", suffix: "", label: "Min. Annadanam Support", icon: "💛" },
  { target: 50, suffix: "+", label: "Events Conducted", icon: "🪷" },
];

function CountUp({ target, prefix = "", suffix = "", active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [active, target]);
  return (
    <span>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>
  );
}

export default function Testimonials() {
  const [ref, vis] = useInView();

  return (
    <section
      id="impact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 100%)" }}
    >
      {/* Background decorative text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[200px] font-display font-bold text-saffron-500/[0.03] select-none">
          सेवा
        </span>
      </div>

      <div ref={ref} className="max-w-[1100px] mx-auto relative z-10">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Our Impact
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Numbers That Reflect Seva
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[560px] mx-auto mt-5 leading-[1.8]">
                Every number represents a life touched, a soul nourished, and compassion in action.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-8 text-center border border-saffron-500/10 shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(212,119,44,0.1)] transition-all duration-400 relative overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron-500 to-gold-500" />
                  <div className="text-[36px] mb-3">{stat.icon}</div>
                  <p className="font-display font-bold text-[clamp(1.8rem,3vw,2.5rem)] text-saffron-500 mb-2">
                    <CountUp target={stat.target} prefix={stat.prefix || ""} suffix={stat.suffix} active={vis} />
                  </p>
                  <p className="font-sans text-[13px] text-earth-400 tracking-wide leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-white rounded-2xl px-8 py-6 border border-saffron-500/10 shadow-[0_4px_24px_rgba(61,43,31,0.06)] max-w-[600px]">
                <span className="font-display text-[48px] text-saffron-500/20 leading-none block -mb-4">&ldquo;</span>
                <p className="font-display text-[20px] italic text-earth-600 leading-[1.6]">
                  Manava Seva is Madhava Seva — Service to humanity is service to God.
                </p>
                <p className="font-sans text-[13px] text-saffron-500 font-bold tracking-wide mt-3 uppercase">
                  — Ravi Swamy Foundation
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
