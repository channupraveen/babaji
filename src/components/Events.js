"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const EVENTS = [
  {
    date: "Every Sunday",
    title: "Weekly Annadanam Seva",
    desc: "Regular food distribution to the needy, devotees, and community members every Sunday morning.",
    tag: "Ongoing",
    icon: "🍛",
    tagColor: "bg-saffron-500",
  },
  {
    date: "Monthly Full Moon",
    title: "Spiritual Discourse & Satsang",
    desc: "Monthly spiritual gathering for discourses, bhajans, and community prayers on Purnima.",
    tag: "Monthly",
    icon: "🪷",
    tagColor: "bg-earth-500",
  },
  {
    date: "Upcoming Festival",
    title: "Mass Annadanam — Festival Season",
    desc: "Grand Annadanam program during festival season serving thousands of devotees and pilgrims.",
    tag: "Upcoming",
    icon: "🎉",
    tagColor: "bg-gold-500",
  },
  {
    date: "Community Program",
    title: "Social Welfare Drive",
    desc: "Distributing essential goods, clothing, and support to poor families and underprivileged communities.",
    tag: "Service",
    icon: "🤲",
    tagColor: "bg-sage-500",
  },
];

export default function Events() {
  const [ref, vis] = useInView();

  return (
    <section id="events" className="bg-cream-50 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Activities & Programs
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Upcoming Events
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[560px] mx-auto mt-5 leading-[1.8]">
                Join us in our mission to serve, uplift, and spread compassion through regular
                spiritual and humanitarian events.
              </p>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EVENTS.map((event, i) => (
                <div
                  key={event.title}
                  className={`animate-fade-in-up delay-${(i + 1) * 100} bg-white rounded-2xl p-7 border border-saffron-500/[0.06] shadow-[0_4px_24px_rgba(61,43,31,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(212,119,44,0.1)] transition-all duration-400 flex gap-5`}
                >
                  {/* Icon */}
                  <div className="w-[60px] h-[60px] rounded-2xl bg-gradient-to-br from-saffron-500/10 to-gold-500/10 flex items-center justify-center text-[28px] shrink-0 border border-saffron-500/10">
                    {event.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="font-sans text-[12px] font-bold text-earth-400 tracking-wide uppercase">
                        {event.date}
                      </span>
                      <span className={`${event.tagColor} text-white text-[11px] font-sans font-bold px-3 py-1 rounded-full shrink-0`}>
                        {event.tag}
                      </span>
                    </div>
                    <h3 className="font-display text-[19px] font-semibold text-earth-700 mb-2">
                      {event.title}
                    </h3>
                    <p className="font-body text-[14px] leading-[1.7] text-earth-400">
                      {event.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-5 border border-saffron-500/10 shadow-[0_4px_24px_rgba(61,43,31,0.06)]">
                <span className="text-2xl">📞</span>
                <div className="text-left">
                  <p className="font-sans font-bold text-[14px] text-earth-700">Want to participate or volunteer?</p>
                  <p className="font-sans text-[13px] text-earth-400">Contact us at <span className="text-saffron-500 font-bold">8747802991</span></p>
                </div>
                <a
                  href="#contact"
                  className="ml-4 px-6 py-2.5 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[13px] no-underline shadow-[0_3px_14px_rgba(212,119,44,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
