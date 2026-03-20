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
                    <div className="w-full aspect-square rounded-xl mb-5 overflow-hidden relative"
                      style={{ background: "linear-gradient(135deg, #F5EDE0, #E8D5B7)" }}
                    >
                      <Image
                        src={i === 0 ? "/image-42.jpg" : i === 1 ? "/image-48.jpg" : "/babaji.jpeg"}
                        alt={card.title}
                        fill
                        className="object-contain object-center"
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

            {/* ═══════════════════════════════════════════════════════ */}
            {/* Spiritual Leaders Section */}
            {/* ═══════════════════════════════════════════════════════ */}
            <div className="mb-20">
              <div className="animate-fade-in-up text-center mb-12">
                <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                  ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಕರು
                </p>
                <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-semibold text-earth-700 mb-5">
                  Our Spiritual Leaders
                </h2>
                <OmDivider />
              </div>

              {/* ──── Guruji Ravi Swamy ──── */}
              <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-16">
                {/* Photo */}
                <div className="lg:col-span-2">
                  <div className="rounded-2xl overflow-hidden relative shadow-[0_20px_60px_rgba(61,43,31,0.15)] border-2 border-saffron-500/20"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src="/babaji.jpeg"
                      alt="Guruji Ravi Swamy — ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಿ"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-700/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-10 bg-gradient-to-t from-earth-700/80 to-transparent">
                      <p className="text-white font-display text-xl font-semibold">ಗುರೂಜಿ ರವಿ ಸ್ವಾಮಿ</p>
                      <p className="text-white/70 font-sans text-sm mt-1">ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶಿ</p>
                    </div>
                    <div className="absolute top-4 left-4 w-[50px] h-[50px] border-t-[3px] border-l-[3px] border-saffron-500/40 rounded-tl z-10" />
                    <div className="absolute bottom-4 right-4 w-[50px] h-[50px] border-b-[3px] border-r-[3px] border-saffron-500/40 rounded-br z-10" />
                  </div>
                </div>

                {/* Bio — Kannada + English */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-2xl p-8 border border-saffron-500/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-gold-500 flex items-center justify-center">
                        <span className="text-white text-lg">🙏</span>
                      </div>
                      <div>
                        <h3 className="font-display text-[22px] font-semibold text-earth-700">
                          ಗುರೂಜಿ ರವಿ ಸ್ವಾಮಿ
                        </h3>
                        <p className="font-sans text-[12px] text-saffron-500 font-bold tracking-wide uppercase">
                          Spiritual Guide &amp; Founder
                        </p>
                      </div>
                    </div>

                    {/* Kannada Content */}
                    <div className="space-y-4 mb-6 pb-6 border-b border-saffron-500/10">
                      <p className="font-body text-[15px] leading-[2] text-earth-600">
                        ಗುರೂಜಿ ರವಿ ಸ್ವಾಮಿ ಅವರು ಭಕ್ತಿ, ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು ಮಾನವಕುಲಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಬದ್ಧತೆಗೆ ಹೆಸರುವಾಸಿಯಾದ ಗೌರವಾನ್ವಿತ ಆಧ್ಯಾತ್ಮಿಕ ನಾಯಕ. ತಮ್ಮ ಬೋಧನೆಗಳು ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ, ಗುರೂಜಿ ಭಕ್ತರು ನಂಬಿಕೆ, ಕರುಣೆ ಮತ್ತು ನೀತಿವಂತ ಜೀವನದ ಮಾರ್ಗವನ್ನು ಅನುಸರಿಸಲು ಪ್ರೇರೇಪಿಸುತ್ತಾರೆ.
                      </p>
                      <p className="font-body text-[15px] leading-[2] text-earth-600">
                        ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕೆ ಆಳವಾದ ಸಮರ್ಪಣೆಯೊಂದಿಗೆ, ಗುರೂಜಿ ಅನೇಕ ಭಕ್ತರನ್ನು ಆಂತರಿಕ ಶಾಂತಿ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಬೆಳವಣಿಗೆಯ ಕಡೆಗೆ ಮಾರ್ಗದರ್ಶನ ಮಾಡಿದ್ದಾರೆ. ಸಕಾರಾತ್ಮಕ ಮೌಲ್ಯಗಳನ್ನು ಹರಡುವುದು, ಅಗತ್ಯವಿರುವವರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು ಮತ್ತು ಜನರು ಶಿಸ್ತು ಮತ್ತು ಭಕ್ತಿಯ ಜೀವನವನ್ನು ನಡೆಸಲು ಪ್ರೋತ್ಸಾಹಿಸುವುದು ಅವರ ಧ್ಯೇಯವಾಗಿದೆ.
                      </p>
                      <p className="font-body text-[15px] leading-[2] text-earth-600">
                        ರವಿ ಸ್ವಾಮಿ ಪ್ರತಿಷ್ಠಾನದ ಮೂಲಕ, ಗುರೂಜಿ ಬಡವರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು, ಆಧ್ಯಾತ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸುವುದು ಮತ್ತು ಸಮಾಜದ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಸಾಮಾಜಿಕ ಸೇವೆಯನ್ನು ಉತ್ತೇಜಿಸುವಂತಹ ವಿವಿಧ ದತ್ತಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತಾರೆ.
                      </p>
                    </div>

                    {/* English Content */}
                    <div className="space-y-4">
                      <p className="font-body text-[15px] leading-[1.9] text-earth-500">
                        Guruji Ravi Swamy is a revered spiritual leader known for his devotion, wisdom,
                        and unwavering commitment to serving humanity. Through his teachings and
                        spiritual guidance, Guruji inspires devotees to follow the path of faith,
                        compassion, and righteous living.
                      </p>
                      <p className="font-body text-[15px] leading-[1.9] text-earth-500">
                        With a deep dedication to spiritual practice and community welfare, Guruji has
                        guided countless devotees towards inner peace and spiritual growth. His mission
                        is to spread positive values, help those in need, and encourage people to lead
                        a life of discipline and devotion.
                      </p>
                      <p className="font-body text-[15px] leading-[1.9] text-earth-500">
                        Through the Ravi Swamy Foundation, Guruji supports various charitable
                        activities such as helping the poor, organizing spiritual programs, and
                        promoting social service for the welfare of society.
                      </p>
                    </div>

                    {/* Highlight tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["ಭಕ್ತಿ", "ಬುದ್ಧಿವಂತಿಕೆ", "ಕರುಣೆ", "ಸೇವೆ", "ಮಾರ್ಗದರ್ಶನ"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-saffron-500/[0.08] text-saffron-600 font-sans text-[12px] font-bold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* ──── Kumara Swamy — Disciple ──── */}
              <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                {/* Bio (left on desktop) — Kannada + English */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="bg-white rounded-2xl p-8 border border-earth-400/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)]">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-earth-500 to-earth-600 flex items-center justify-center">
                        <span className="text-white text-lg">🙏</span>
                      </div>
                      <div>
                        <h3 className="font-display text-[22px] font-semibold text-earth-700">
                          ಕುಮಾರ ಸ್ವಾಮಿ
                        </h3>
                        <p className="font-sans text-[12px] text-saffron-500 font-bold tracking-wide uppercase">
                          ಶಿಷ್ಯ (ಶೇಷ) — Devoted Disciple
                        </p>
                      </div>
                    </div>

                    {/* Kannada Content */}
                    <div className="space-y-4 mb-6 pb-6 border-b border-earth-400/10">
                      <p className="font-body text-[15px] leading-[2] text-earth-600">
                        ಗುರೂಜಿ ರವಿ ಸ್ವಾಮಿ ಅವರ ನಿಷ್ಠಾವಂತ ಶಿಷ್ಯರಾದ ಕುಮಾರ ಸ್ವಾಮಿ ಅವರು ತಮ್ಮ ಜೀವನವನ್ನು ಆಧ್ಯಾತ್ಮಿಕ ಅಭ್ಯಾಸ ಮತ್ತು ಭಕ್ತರ ಸೇವೆಗೆ ಮುಡಿಪಾಗಿಟ್ಟಿದ್ದಾರೆ. ಆಳವಾದ ತಪಸ್ಸಿನ ಮೂಲಕ (ಆಧ್ಯಾತ್ಮಿಕ ಧ್ಯಾನ ಮತ್ತು ಶಿಸ್ತು), ಕುಮಾರ ಸ್ವಾಮಿ ಅನೇಕ ಭಕ್ತರು ತಮ್ಮ ಜೀವನದಲ್ಲಿನ ತೊಂದರೆಗಳನ್ನು ನಿವಾರಿಸಲು ಸಹಾಯ ಮಾಡಿದ್ದಾರೆ.
                      </p>
                      <p className="font-body text-[15px] leading-[2] text-earth-600">
                        ಅವರ ಆಶೀರ್ವಾದಗಳು ಸಮಸ್ಯೆಗಳಿಂದ ಪರಿಹಾರವನ್ನು ತರುತ್ತವೆ ಮತ್ತು ಅಡೆತಡೆಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತವೆ ಎಂದು ಅನೇಕ ಭಕ್ತರು ನಂಬುತ್ತಾರೆ. ವಿನಮ್ರತೆ ಮತ್ತು ಭಕ್ತಿಯಿಂದ ಕುಮಾರ ಸ್ವಾಮಿಯವರು ಭಕ್ತರಿಗೆ ಮಾರ್ಗದರ್ಶನ, ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಆಶೀರ್ವಾದಗಳನ್ನು ನೀಡುವ ಮೂಲಕ ಬೆಂಬಲ ನೀಡುತ್ತಲೇ ಇದ್ದಾರೆ.
                      </p>
                    </div>

                    {/* English Content */}
                    <div className="space-y-4">
                      <p className="font-body text-[15px] leading-[1.9] text-earth-500">
                        Kumara Swamy, the devoted disciple of Guruji Ravi Swamy, has dedicated his
                        life to spiritual practice and the service of devotees. Through deep
                        <em> tapas</em> (spiritual meditation and discipline), Kumara Swamy has helped
                        many devotees overcome difficulties in their lives.
                      </p>
                      <p className="font-body text-[15px] leading-[1.9] text-earth-500">
                        Many devotees believe that his blessings bring relief from problems and
                        remove obstacles. With humility and devotion, Kumara Swamy continues to
                        support devotees by offering guidance, prayers, and blessings.
                      </p>
                    </div>

                    {/* Highlight tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {["ವಿನಮ್ರತೆ", "ತಪಸ್ಸು", "ಭಕ್ತಿ", "ಆಶೀರ್ವಾದ", "ಮಾರ್ಗದರ್ಶನ"].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-earth-400/[0.08] text-earth-500 font-sans text-[12px] font-bold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Photo (right on desktop) */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <div className="rounded-2xl overflow-hidden relative shadow-[0_20px_60px_rgba(61,43,31,0.15)] border-2 border-earth-400/20"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src="/image-48.jpg"
                      alt="ಕುಮಾರ ಸ್ವಾಮಿ — ಶಿಷ್ಯ"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-700/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 pt-10 bg-gradient-to-t from-earth-700/80 to-transparent">
                      <p className="text-white font-display text-xl font-semibold">ಕುಮಾರ ಸ್ವಾಮಿ</p>
                      <p className="text-white/70 font-sans text-sm mt-1">ಶಿಷ್ಯ (ಶೇಷ)</p>
                    </div>
                    <div className="absolute top-4 left-4 w-[50px] h-[50px] border-t-[3px] border-l-[3px] border-earth-400/40 rounded-tl z-10" />
                    <div className="absolute bottom-4 right-4 w-[50px] h-[50px] border-b-[3px] border-r-[3px] border-earth-400/40 rounded-br z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* About Foundation Section (original) */}
            {/* ═══════════════════════════════════════════════════════ */}
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
