"use client";
import Image from "next/image";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const FEATURE_CARDS = [
  {
    icon: "🍛",
    title: "Annadanam",
    subtitle: "Feeding the Hungry",
    desc: "Providing nutritious meals to devotees, pilgrims, and poor families with love and devotion.",
    color: "from-saffron-500/10 to-gold-500/10",
    border: "border-saffron-500/20",
  },
  {
    icon: "🤝",
    title: "Transforming Lives",
    subtitle: "Through Service",
    desc: "Uplifting communities through charitable initiatives, spiritual guidance, and humanitarian programs.",
    color: "from-earth-400/10 to-earth-500/10",
    border: "border-earth-400/20",
  },
  {
    icon: "🪷",
    title: "Services",
    subtitle: "Spiritual Awareness",
    desc: "Cultural programs, discourses, and events promoting spiritual growth and social harmony.",
    color: "from-gold-500/10 to-saffron-400/10",
    border: "border-gold-500/20",
  },
];

export default function About() {
  const [ref, vis] = useInView();

  return (
    <section id="about" className="bg-cream-100 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-saffron-500/30">
                  <Image src="/logo.jpg" alt="logo" width={32} height={32} className="object-cover w-full h-full" />
                </div>
                <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase">
                  Who We Are
                </p>
              </div>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Ravi Swamy Foundation
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[680px] mx-auto mt-6 leading-[1.9]">
                A spiritual and humanitarian organization dedicated to serving society with compassion and devotion.
                Inspired by the timeless principle of <em>Seva</em> (selfless service), the foundation works to uplift
                communities through spiritual guidance and humanitarian initiatives.
              </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {FEATURE_CARDS.map((card, i) => (
                <div
                  key={card.title}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-8 text-center border ${card.border} shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(212,119,44,0.12)] transition-all duration-400 cursor-default relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-50`} />
                  <div className="relative z-10">
                    {/* Image placeholder with gradient */}
                    <div className="w-full h-[140px] rounded-xl mb-5 overflow-hidden relative"
                      style={{ background: "linear-gradient(135deg, #F5EDE0, #E8D5B7)" }}
                    >
                      <Image
                        src={i === 0 ? "/image-42.jpg" : i === 1 ? "/image-48.jpg" : "/babaji.jpeg"}
                        alt={card.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-earth-700/30 to-transparent" />
                    </div>
                    <div className="text-3xl mb-3">{card.icon}</div>
                    <h3 className="font-display text-[20px] font-semibold text-earth-700 mb-1">
                      {card.title}
                    </h3>
                    <p className="font-sans text-[12px] text-saffron-500 font-bold tracking-wide uppercase mb-3">
                      {card.subtitle}
                    </p>
                    <p className="font-body text-[14px] leading-[1.7] text-earth-400">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* About Section with Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Image */}
              <div className="animate-slide-left rounded-2xl overflow-hidden relative max-h-[480px] shadow-[0_20px_60px_rgba(61,43,31,0.15)]"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src="/babaji.jpeg"
                  alt="Ravi Swamy Foundation — Serving Humanity"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-8 bg-gradient-to-t from-earth-700/70 to-transparent">
                  <p className="text-white/90 font-display text-lg italic">
                    Ravi Swamy — Light of Compassion
                  </p>
                </div>
                <div className="absolute top-4 left-4 w-[50px] h-[50px] border-t-[3px] border-l-[3px] border-white/30 rounded-tl z-10" />
                <div className="absolute bottom-4 right-4 w-[50px] h-[50px] border-b-[3px] border-r-[3px] border-white/30 rounded-br z-10" />
              </div>

              {/* Text */}
              <div className="animate-slide-right">
                <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                  About The Foundation
                </p>
                <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-earth-700 mb-5 leading-[1.2]">
                  About Ravi Swamy Foundation
                </h2>
                <OmDivider />
                <div className="mt-6 space-y-4">
                  <p className="font-body text-[17px] leading-[1.9] text-earth-500">
                    Ravi Swamy Foundation is committed to the sacred tradition of <strong>Annadanam</strong> —
                    feeding the hungry as an act of divine service. Every meal served is offered with
                    love, compassion, and devotion.
                  </p>
                  <p className="font-body text-[17px] leading-[1.9] text-earth-500">
                    Through decades of selfless service, the foundation has touched thousands of lives,
                    helping poor families, devotees, and pilgrims while spreading spiritual awareness
                    across the community.
                  </p>
                  {[
                    "Annadanam (Food distribution to the needy)",
                    "Spiritual awareness programs and discourses",
                    "Social welfare initiatives for communities",
                    "Support for poor families and individuals",
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <span className="text-saffron-500 mt-1 shrink-0">✦</span>
                      <p className="font-body text-[15px] leading-[1.7] text-earth-400">{point}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#annadanam"
                  className="inline-flex items-center gap-2 text-saffron-500 font-sans font-bold text-[15px] no-underline hover:gap-3.5 transition-all duration-300 mt-8"
                >
                  Learn More About Annadanam →
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
