"use client";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const TIERS = [
  {
    amount: "₹100",
    label: "Small Seva",
    desc: "Every small contribution counts — offer a humble seva to the mission.",
    icon: "🙏",
    popular: false,
  },
  {
    amount: "₹500",
    label: "Feed a Devotee",
    desc: "Sponsor one meal for a devotee or pilgrim during Annadanam.",
    icon: "🍛",
    popular: false,
  },
  {
    amount: "₹1100",
    label: "Support Annadanam Seva",
    desc: "Support a full Annadanam session — feed multiple souls with love.",
    icon: "🪷",
    popular: true,
  },
  {
    amount: "₹5000",
    label: "Sponsor Mass Feeding",
    desc: "Sponsor meals for an entire community gathering or festival event.",
    icon: "🤲",
    popular: false,
  },
];

const PAYMENT_METHODS = [
  { label: "Google Pay", icon: "G Pay", color: "text-[#4285F4]" },
  { label: "PhonePe", icon: "PhonePe", color: "text-[#5f259f]" },
  { label: "Paytm", icon: "Paytm", color: "text-[#00BAF2]" },
  { label: "Bharatpe", icon: "Bharat", color: "text-[#F26522]" },
];

export default function Donations() {
  const [ref, vis] = useInView();
  const [selected, setSelected] = useState("₹1100");

  return (
    <section
      id="donate"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F5EDE0 0%, #FEFCF9 60%, #F5EDE0 100%)" }}
    >
      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg, #D4772C 0px, #D4772C 1px, transparent 1px, transparent 20px)" }}
      />

      <div ref={ref} className="max-w-[1100px] mx-auto relative z-10">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Support The Mission
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Your Contribution Becomes a Blessing
              </h2>
              <OmDivider />
              <p className="font-body text-[17px] text-earth-400 max-w-[580px] mx-auto mt-5 leading-[1.9]">
                Every donation helps us serve more people and spread compassion.
                Your support fuels Annadanam, spiritual programs, and community welfare.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Donation Cards */}
              <div className="animate-slide-left">
                <h3 className="font-display text-[20px] font-semibold text-earth-700 mb-6">
                  Choose Your Seva
                </h3>
                <div className="space-y-4 mb-8">
                  {TIERS.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => setSelected(tier.amount)}
                      className={`w-full text-left rounded-2xl p-5 border-2 transition-all duration-300 cursor-pointer relative overflow-hidden ${
                        selected === tier.amount
                          ? "border-saffron-500 bg-gradient-to-r from-saffron-500/10 to-gold-500/5 shadow-[0_4px_20px_rgba(212,119,44,0.2)]"
                          : "border-saffron-500/15 bg-white hover:border-saffron-500/40 shadow-[0_2px_12px_rgba(61,43,31,0.06)]"
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute top-3 right-3 bg-saffron-500 text-white text-[11px] font-sans font-bold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                          selected === tier.amount ? "bg-saffron-500/20" : "bg-saffron-500/8"
                        }`}>
                          {tier.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-display font-bold text-[22px] text-saffron-500">{tier.amount}</span>
                            <span className="font-sans font-bold text-[14px] text-earth-700">{tier.label}</span>
                          </div>
                          <p className="font-body text-[13px] text-earth-400 leading-[1.6]">{tier.desc}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center ${
                          selected === tier.amount ? "border-saffron-500 bg-saffron-500" : "border-earth-300"
                        }`}>
                          {selected === tier.amount && <span className="w-2 h-2 rounded-full bg-white block" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block w-full text-center py-4 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 text-white font-sans font-bold text-[16px] tracking-wide no-underline shadow-[0_6px_24px_rgba(212,119,44,0.35)] hover:-translate-y-0.5 hover:shadow-[0_10px_36px_rgba(212,119,44,0.45)] transition-all duration-300"
                >
                  Donate Now — {selected}
                </a>

                <p className="font-sans text-[12px] text-earth-400 text-center mt-3">
                  100% of your donation goes directly to serving the community
                </p>
              </div>

              {/* QR + Payment Methods */}
              <div className="animate-slide-right">
                <h3 className="font-display text-[20px] font-semibold text-earth-700 mb-6">
                  ನಮ ದೆKPP (Pay Directly)
                </h3>
                <div className="bg-white rounded-2xl p-8 border border-saffron-500/10 shadow-[0_8px_40px_rgba(61,43,31,0.08)]">
                  {/* Donation tiers quick buttons */}
                  <div className="flex gap-3 justify-center mb-6 flex-wrap">
                    {["₹500", "₹1100", "₹5000"].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setSelected(amt)}
                        className={`px-5 py-2.5 rounded-xl border-2 font-sans font-bold text-base cursor-pointer transition-all duration-300 ${
                          selected === amt
                            ? "bg-saffron-500 text-white border-saffron-500 shadow-[0_2px_12px_rgba(212,119,44,0.3)]"
                            : "bg-white text-saffron-500 border-saffron-500/20 hover:bg-saffron-500/5"
                        }`}
                      >
                        {amt}
                      </button>
                    ))}
                  </div>

                  {/* QR Code */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-[160px] h-[160px] rounded-xl overflow-hidden border-2 border-saffron-500/20 shadow-[0_4px_16px_rgba(61,43,31,0.1)] mb-3">
                      <Image
                        src="/qrscanner.jpeg"
                        alt="UPI QR Code — Ravi Swamy Foundation"
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="font-sans text-[13px] text-earth-400 font-semibold">Scan QR to Pay</p>
                    <p className="font-sans text-[12px] text-earth-300 mt-1">UPI · PhonePe · GPay · Paytm</p>
                  </div>

                  {/* Payment Methods */}
                  <div className="border-t border-saffron-500/10 pt-5">
                    <p className="font-sans text-[12px] text-earth-400 text-center mb-4 tracking-wide uppercase font-bold">
                      Accepted Payment Methods
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {PAYMENT_METHODS.map((pm) => (
                        <div
                          key={pm.label}
                          className="flex items-center justify-center gap-2 rounded-xl border border-earth-300/30 py-2.5 bg-cream-50"
                        >
                          <span className={`font-sans font-black text-[15px] ${pm.color}`}>{pm.icon}</span>
                          <span className="font-sans text-[12px] text-earth-500 font-semibold">{pm.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why donate */}
                <div className="mt-6 bg-gradient-to-br from-saffron-500/10 to-gold-500/5 rounded-2xl p-6 border border-saffron-500/15">
                  <h4 className="font-display text-[18px] font-semibold text-earth-700 mb-4">
                    Why Your Donation Matters
                  </h4>
                  <div className="space-y-2.5">
                    {[
                      "Feed the hungry & nourish souls",
                      "Support spiritual values & programs",
                      "Help poor families in need",
                      "Spread compassion in the community",
                    ].map((p) => (
                      <div key={p} className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-saffron-500 shrink-0" />
                        <span className="font-body text-[14px] text-earth-500">{p}</span>
                      </div>
                    ))}
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
