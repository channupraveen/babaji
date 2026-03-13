"use client";
import { useState } from "react";
import Image from "next/image";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "te", label: "తెలుగు" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "hi", label: "हिंदी" },
];

const CONTENT = {
  en: {
    heading: "Serve with Compassion.",
    headingLine2: "Transform Lives.",
    sub: "At Ravi Swamy Foundation, we believe that service to humanity is service to the Divine. Through Annadanam, spiritual guidance, and humanitarian service, we uplift lives and spread compassion.",
    btn1: "Start Your Spiritual Journey",
    btn2: "Donate & Support Annadanam",
  },
  te: {
    heading: "మానవ సేవే మాధవ సేవ",
    headingLine2: "",
    sub: "కరుణతో సేవ చేయండి మరియు ఆధ్యాత్మిక జాగరణకు తోడ్పడండి. రవి స్వామి ఫౌండేషన్ అన్నదానం, ఆధ్యాత్మిక మార్గదర్శనం మరియు మానవ సేవ ద్వారా సమాజానికి సేవ చేయడానికి కట్టుబడి ఉంది.",
    btn1: "మీ ఆధ్యాత్మిక ప్రయాణాన్ని ఇప్పుడు ప్రారంభించండి",
    btn2: "అన్నదానానికి దానం చేయండి",
  },
  kn: {
    heading: "ಮಾನವ ಸೇವೆ ದೇವ ಸೇವೆ",
    headingLine2: "",
    sub: "ಕರುಣೆಯಿಂದ ಸೇವೆ ಮಾಡಿ ಮತ್ತು ಆತ್ಮಜಾಗೃತಿಯನ್ನು ಬೆಳೆಸಿರಿ. ರವಿ ಸ್ವಾಮಿ ಫೌಂಡೇಶನ್ ಅನ್ನದಾನ, ಆತ್ಮೀಯ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಮಾನವ ಸೇವೆಯ ಮೂಲಕ ಸಮಾಜಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ.",
    btn1: "ನಿಮ್ಮ ಆತ್ಮೀಯ ಪ್ರಯಾಣವನ್ನು ಈಗ ಪ್ರಾರಂಭಿಸಿ",
    btn2: "ಅನ್ನದಾನಕ್ಕೆ ದಾನ ಮಾಡಿ",
  },
  hi: {
    heading: "मानव सेवा ही माधव सेवा है",
    headingLine2: "",
    sub: "करुणा से सेवा करें और आध्यात्मिक जागरण का समर्थन करें। रवि स्वामी फाउंडेशन अन्नदान, आध्यात्मिक मार्गदर्शन और मानव सेवा के माध्यम से समाज की सेवा करने के लिए समर्पित है।",
    btn1: "अपनी आध्यात्मिक यात्रा अभी शुरू करें",
    btn2: "अन्नदान के लिए दान करें",
  },
};

export default function Hero() {
  const [lang, setLang] = useState("en");
  const c = CONTENT[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[72px]"
      style={{ background: "linear-gradient(135deg, #FDF8F0 0%, #F5EDE0 60%, #FEFCF9 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #D4772C 0%, transparent 70%)", transform: "translate(30%, -20%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="max-w-[1200px] mx-auto px-6 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — Content */}
          <div className="animate-fade-in-up">
            {/* Language Switcher */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-4 py-1.5 rounded-full text-sm font-sans font-semibold border transition-all duration-300 cursor-pointer ${
                    lang === l.code
                      ? "bg-saffron-500 text-white border-saffron-500 shadow-[0_2px_10px_rgba(212,119,44,0.3)]"
                      : "bg-white text-earth-500 border-saffron-500/20 hover:border-saffron-500/50"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* Tag */}
            <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-4">
              Ravi Swamy Foundation
            </p>

            {/* Heading */}
            <h1 className="font-display font-semibold text-earth-700 leading-[1.15] mb-6 text-[clamp(2rem,4.5vw,3.5rem)]">
              <span className="text-shimmer">{c.heading}</span>
              {c.headingLine2 && (
                <>
                  <br />
                  {c.headingLine2}
                </>
              )}
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6 max-w-[280px]">
              <div className="flex-1 h-[2px] bg-gradient-to-r from-saffron-500 to-transparent" />
              <span className="text-saffron-500 text-lg">🪷</span>
              <div className="flex-1 h-[2px] bg-gradient-to-l from-saffron-500 to-transparent" />
            </div>

            {/* Subtitle */}
            <p className="font-body text-[17px] leading-[1.9] text-earth-500 mb-10 max-w-[540px]">
              {c.sub}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[15px] tracking-wide no-underline shadow-[0_4px_20px_rgba(212,119,44,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(212,119,44,0.5)] transition-all duration-300"
              >
                {c.btn1}
              </a>
              <a
                href="#donate"
                className="px-8 py-4 rounded-full bg-white border-2 border-saffron-500/30 text-saffron-500 font-sans font-bold text-[15px] tracking-wide no-underline hover:bg-saffron-500/[0.06] hover:border-saffron-500 transition-all duration-300 shadow-[0_2px_12px_rgba(61,43,31,0.08)]"
              >
                {c.btn2}
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex gap-6 flex-wrap">
              {[
                { num: "25,000+", lbl: "Meals Served" },
                { num: "501+", lbl: "Devotees" },
                { num: "50+", lbl: "Events" },
              ].map((b) => (
                <div key={b.lbl} className="text-center">
                  <p className="font-display font-bold text-[22px] text-saffron-500">{b.num}</p>
                  <p className="font-sans text-[12px] text-earth-400 tracking-wide uppercase">{b.lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image */}
          <div className="animate-slide-right relative flex justify-center lg:justify-end">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[440px] h-[440px] rounded-full border-2 border-saffron-500/15 animate-breathe" />
            </div>

            <div className="relative w-full max-w-[420px]">
              {/* Image card */}
              <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(61,43,31,0.18)] relative"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="/babaji.jpeg"
                  alt="Ravi Swamy — Spiritual Leader & Humanitarian"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-earth-700/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                  <p className="text-white font-display text-lg italic">
                    Ravi Swamy — Serve Humanity, Nourish Souls
                  </p>
                </div>
              </div>

              {/* Floating donation card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-[0_8px_32px_rgba(61,43,31,0.12)] px-5 py-4 flex items-center gap-3 border border-saffron-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">🍛</span>
                </div>
                <div>
                  <p className="font-sans font-bold text-[13px] text-earth-700">Annadanam Seva</p>
                  <p className="font-sans text-[12px] text-earth-400">Feed a soul · ₹500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
