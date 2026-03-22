"use client";
import { useState } from "react";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

export default function Contact() {
  const [ref, vis] = useInView();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-24 px-6"
      style={{ background: "linear-gradient(180deg, #FEFCF9 0%, #FDF8F0 100%)" }}
    >
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Reach Out
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Contact Us
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[520px] mx-auto mt-5 leading-[1.8]">
                Have questions, want to volunteer, or need more information about our programs?
                We&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="animate-slide-left space-y-5">
                {[
                  {
                    icon: "📞",
                    title: "Phone",
                    content: "8747802991",
                    sub: "Call us for inquiries and support",
                  },
                  {
                    icon: "📍",
                    title: "Location",
                    content: "Sri Kshetra Ganagapur",
                    sub: "Ganagapur Dattatreya Temple, Karnataka",
                  },
                  {
                    icon: "📧",
                    title: "Email",
                    content: "info@raviswamyfoundation.org",
                    sub: "We respond within 24 hours",
                  },
                ].map((info) => (
                  <div key={info.title}
                    className="bg-white rounded-2xl p-6 flex items-start gap-5 border border-saffron-500/10 shadow-[0_4px_24px_rgba(61,43,31,0.06)]"
                  >
                    <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-saffron-500/10 to-gold-500/10 flex items-center justify-center text-[24px] shrink-0 border border-saffron-500/10">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-sans font-bold text-[12px] text-saffron-500 tracking-wide uppercase mb-1">
                        {info.title}
                      </p>
                      <p className="font-display text-[18px] font-semibold text-earth-700 mb-0.5">
                        {info.content}
                      </p>
                      <p className="font-body text-[13px] text-earth-400">{info.sub}</p>
                    </div>
                  </div>
                ))}

                {/* Join us card */}
                <div className="bg-gradient-to-br from-saffron-500 to-saffron-600 rounded-2xl p-7 text-white">
                  <h3 className="font-display text-[22px] font-semibold mb-3">Join Hands in Service</h3>
                  <p className="font-body text-[15px] leading-[1.8] text-white/85 mb-5">
                    Volunteer with us, donate, or simply spread the word.
                    Together we can serve more souls and spread more compassion.
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    <a href="#donate"
                      className="px-6 py-2.5 rounded-full bg-white text-saffron-500 font-sans font-bold text-[13px] no-underline hover:bg-cream-100 transition-colors"
                    >
                      Donate Today
                    </a>
                    <a href="#events"
                      className="px-6 py-2.5 rounded-full bg-transparent border-2 border-white/40 text-white font-sans font-bold text-[13px] no-underline hover:bg-white/10 transition-colors"
                    >
                      Volunteer
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-right">
                <div className="bg-white rounded-2xl p-8 border border-saffron-500/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)]">
                  <h3 className="font-display text-[22px] font-semibold text-earth-700 mb-6">
                    Send a Message
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="block font-sans font-bold text-[12px] text-earth-500 tracking-wide uppercase mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-saffron-500/15 bg-cream-50 font-body text-[15px] text-earth-700 outline-none focus:border-saffron-500/50 transition-colors placeholder:text-earth-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans font-bold text-[12px] text-earth-500 tracking-wide uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-saffron-500/15 bg-cream-50 font-body text-[15px] text-earth-700 outline-none focus:border-saffron-500/50 transition-colors placeholder:text-earth-300"
                      />
                    </div>
                    <div>
                      <label className="block font-sans font-bold text-[12px] text-earth-500 tracking-wide uppercase mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="How can we help you? Share your message..."
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-saffron-500/15 bg-cream-50 font-body text-[15px] text-earth-700 outline-none focus:border-saffron-500/50 transition-colors resize-none placeholder:text-earth-300"
                      />
                    </div>

                    <button
                      type="button"
                      className="w-full py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[15px] tracking-wide cursor-pointer border-none shadow-[0_4px_20px_rgba(212,119,44,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(212,119,44,0.45)] transition-all duration-300"
                    >
                      Send Message
                    </button>

                    <p className="font-sans text-[12px] text-earth-400 text-center">
                      🙏 We will respond to your message within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
