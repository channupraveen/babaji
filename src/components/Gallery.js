"use client";
import { useInView } from "./useInView";
import OmDivider from "./OmDivider";

const GALLERY_ITEMS = [
  { label: "Ashram at Dawn", gradient: "from-[#e8d5b7] via-[#d4a574] to-[#c89b6e]", wide: true },
  { label: "Meditation Hall", gradient: "from-[#7a8b6f] via-[#5a6b4f] to-[#4a5b3f]", wide: false },
  { label: "Sacred Grounds", gradient: "from-[#a8c4d4] via-[#88a4b4] to-[#6884a4]", wide: false },
  { label: "Spiritual Gathering", gradient: "from-[#c4917b] via-[#b4816b] to-[#a4715b]", wide: false },
  { label: "Nature & Serenity", gradient: "from-[#8bc48a] via-[#6ba46a] to-[#5b945a]", wide: true },
];

export default function Gallery() {
  const [ref, vis] = useInView();

  return (
    <section id="gallery" className="bg-cream-50 py-24 px-6">
      <div ref={ref} className="max-w-[1100px] mx-auto">
        {vis && (
          <>
            {/* Header */}
            <div className="animate-fade-in-up text-center mb-14">
              <p className="font-sans font-bold text-[13px] text-saffron-500 tracking-[3px] uppercase mb-3">
                Sacred Moments
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,2.8rem)] font-semibold text-earth-700 mb-5">
                Gallery
              </h2>
              <OmDivider />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  className={`animate-scale-in delay-${(i + 1) * 100} group rounded-2xl overflow-hidden relative cursor-pointer transition-transform duration-400 hover:scale-[1.03] ${
                    item.wide ? "col-span-2" : "col-span-1"
                  }`}
                  style={{ aspectRatio: item.wide ? "2/1" : "1/1" }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[48px] text-white/[0.12]">☸</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-700/70 to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <p className="text-white font-display text-lg font-semibold">
                      {item.label}
                    </p>
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
