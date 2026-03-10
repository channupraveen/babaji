"use client";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient sky */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] via-60% to-[#0f3460]" />

      {/* Stars */}
      <div
        className="absolute inset-0 z-[1] animate-breathe"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 60% 20%, rgba(255,255,255,0.6) 0%, transparent 100%),
            radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 85%, rgba(255,255,255,0.5) 0%, transparent 100%),
            radial-gradient(1px 1px at 50% 45%, rgba(255,255,255,0.3) 0%, transparent 100%),
            radial-gradient(1px 1px at 90% 15%, rgba(255,255,255,0.4) 0%, transparent 100%)
          `,
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full z-[1]"
        style={{ background: "radial-gradient(circle, rgba(212,119,44,0.12) 0%, transparent 70%)" }}
      />

      {/* Mountain SVG */}
      <svg className="absolute bottom-0 left-0 right-0 z-[2] w-full h-[35%]" viewBox="0 0 1440 400" preserveAspectRatio="none">
        <path d="M0,400 L0,280 Q120,180 240,220 Q360,130 480,200 Q550,100 640,160 Q720,60 800,140 Q900,50 1000,120 Q1100,70 1200,150 Q1300,100 1360,180 Q1400,140 1440,200 L1440,400 Z" fill="rgba(15,52,96,0.4)" />
        <path d="M0,400 L0,320 Q180,240 360,280 Q480,200 600,260 Q720,180 840,240 Q960,170 1080,220 Q1200,180 1320,250 L1440,300 L1440,400 Z" fill="rgba(10,35,65,0.5)" />
      </svg>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] z-[1] bg-gradient-to-t from-[rgba(15,52,96,0.6)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-[120px] pb-20 max-w-[900px]">
        {/* Om Circle */}
        <div className="animate-fade-in mb-6">
          <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-saffron-500/40 shadow-[0_0_40px_rgba(212,119,44,0.2)]"
            style={{ background: "linear-gradient(135deg, rgba(212,119,44,0.3), rgba(201,168,76,0.3))" }}
          >
            <span className="text-[40px] text-gold-300 font-display">ॐ</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up font-display font-light text-white leading-[1.2] mb-6 text-[clamp(2.2rem,5vw,4rem)]">
          Transform Your Life with the
          <br />
          <span className="font-semibold text-shimmer">Divine Blessings</span> of Shree Babaji
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 font-body text-white/75 max-w-[680px] mx-auto mb-10 leading-[1.8] text-[clamp(1rem,2vw,1.2rem)]">
          Experience inner peace, spiritual wisdom, and divine guidance through
          the teachings and presence of Shree Babaji.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-400 flex gap-4 justify-center flex-wrap">
          <a
            href="#visit"
            className="px-9 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[15px] tracking-wide no-underline shadow-[0_4px_20px_rgba(212,119,44,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,119,44,0.5)] transition-all duration-300"
          >
            Visit Ashram
          </a>
          <a
            href="#donate"
            className="px-9 py-4 rounded-full bg-transparent border-2 border-white/35 text-white font-sans font-bold text-[15px] tracking-wide no-underline hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            Support the Mission
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in delay-600 mt-16">
          <div className="w-6 h-10 border-2 border-white/30 rounded-xl mx-auto relative">
            <div className="w-1 h-2 rounded-sm bg-white/50 absolute top-2 left-1/2 -translate-x-1/2 animate-fade-in-up"
              style={{ animationIterationCount: "infinite", animationDuration: "1.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
