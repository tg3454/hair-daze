import { ArrowRight, Sparkles } from "lucide-react";
import { NEW_DROP_IMAGE } from "../data";

export function NewDrop() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
      <div className="relative mx-auto min-h-[620px] max-w-[1400px] overflow-hidden rounded-[42px] bg-[#F6327B] sm:min-h-[680px] lg:min-h-[620px]">
        {/* Background shapes */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF8FBA] opacity-50" />
        <div className="absolute -bottom-32 left-[35%] h-96 w-96 rounded-full bg-[#D92C70] opacity-50" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#FF76AC] opacity-40" />

        {/* Decorative sparkles */}
        <Sparkles
          className="drop-spin absolute left-[4%] top-[12%] text-white/70"
          size={48}
          strokeWidth={1.2}
        />
        <Sparkles
          className="drop-spin absolute bottom-[15%] left-[45%] text-[#FFD84D]"
          size={35}
          strokeWidth={1.2}
        />

        {/* Main layout */}
        <div className="relative z-10 grid min-h-[620px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-8 pb-10 pt-16 sm:px-14 lg:px-16 lg:py-16">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-white sm:text-xs">
              <span>✦</span>
              JUST DROPPED
              <span>✦</span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[620px] text-[55px] font-black leading-[0.86] tracking-[-4px] text-white sm:text-[72px] lg:text-[78px] xl:text-[94px]">
              YOUR NEW
              <span className="block font-serif italic text-[#FFD84D]">
                HAIR
              </span>
              OBSESSION.
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-[440px] text-sm leading-7 text-white/80 sm:text-base">
              Meet the latest pieces made to turn heads, complete outfits and
              make ordinary hair days a little more fun.
            </p>

            {/* CTA */}
            <a
              href="/new-arrivals"
              className="group mt-8 flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-xs font-black tracking-[1.5px] text-[#F6327B] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F]"
            >
              SHOP THE DROP
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6327B] text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </a>

            {/* Tiny note */}
            <p className="mt-6 font-serif text-sm italic text-white/60">
              limited pieces · big energy ✦
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative min-h-[400px] lg:min-h-0">
            {/* Yellow circle */}
            <div className="absolute right-[8%] top-[8%] h-[320px] w-[320px] rounded-full bg-[#FFD84D] sm:h-[420px] sm:w-[420px] lg:h-[470px] lg:w-[470px]" />

            {/* Image */}
            <div className="absolute bottom-0 right-[7%] z-10 h-[88%] w-[68%] overflow-hidden rounded-t-[48%] sm:right-[12%] sm:w-[58%] lg:right-[8%] lg:w-[62%]">
              <img
                src={NEW_DROP_IMAGE}
                alt="New hair accessory collection"
                className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/20 to-transparent" />
            </div>

            {/* Floating bow */}
            <div className="drop-float absolute left-[2%] top-[15%] z-30 flex items-center">
              <div className="h-20 w-28 rotate-[-18deg] rounded-[70%_25%_70%_25%] bg-[#A98BFF] shadow-[0_20px_30px_rgba(42,17,47,0.18)] sm:h-24 sm:w-36" />
              <div className="relative z-10 -mx-6 h-12 w-12 rounded-full bg-[#8063E8] shadow-lg" />
              <div className="h-20 w-28 rotate-[18deg] rounded-[25%_70%_25%_70%] bg-[#A98BFF] shadow-[0_20px_30px_rgba(42,17,47,0.18)] sm:h-24 sm:w-36" />
            </div>

            {/* Floating scrunchie */}
            <div className="drop-float-reverse absolute bottom-[10%] left-[3%] z-30 flex h-28 w-28 items-center justify-center rounded-full border-[22px] border-[#FFB5D0] bg-transparent shadow-xl sm:h-36 sm:w-36 sm:border-[28px]">
              <div className="h-8 w-8 rounded-full bg-[#F6327B]" />
            </div>

            {/* Limited drop badge */}
            <div className="absolute right-[1%] top-[15%] z-40 flex h-28 w-28 items-center justify-center sm:right-[2%] sm:h-36 sm:w-36">
              <div className="drop-spin absolute inset-0 rounded-full border border-dashed border-white/70" />
              <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full bg-[#29152F] text-center text-white shadow-xl sm:h-24 sm:w-24">
                <Sparkles size={14} className="mb-1 text-[#FFD84D]" />
                <span className="text-[8px] font-black tracking-[1.5px]">
                  LIMITED
                </span>
                <span className="text-[8px] font-black tracking-[1.5px]">
                  DROP
                </span>
              </div>
            </div>

            {/* Tiny stars */}
            <div className="absolute bottom-[18%] right-[6%] z-30 text-[#FFD84D]">
              <Sparkles size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
