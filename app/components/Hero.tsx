import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";
import { HERO_IMAGE } from "../data";

export function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1500px] grid-cols-1 items-center px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:pb-10 lg:pt-4 xl:px-20">
      {/* Background Decorations */}
      <div className="blob-move pointer-events-none absolute -left-32 top-[30%] h-72 w-72 rounded-full bg-[#FFB5D0]/60 blur-[2px]" />
      <div className="blob-move pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FFE47A]/60 blur-[2px]" />
      <Sparkles
        className="sparkle-animation absolute left-[4%] top-[12%] rotate-12 text-[#FF6C9E]"
        size={48}
        strokeWidth={1.5}
      />
      <Sparkles
        className="sparkle-animation absolute bottom-[15%] left-[42%] text-[#A98BFF]"
        size={30}
        strokeWidth={1.5}
      />

      {/* Left Content */}
      <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#F6327B] sm:text-[13px]">
          <span>✦</span>
          NEW SEASON, NEW YOU.
          <span>✦</span>
        </div>

        {/* Main heading */}
        <h1 className="max-w-[700px] text-[58px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[75px] lg:text-[76px] xl:text-[94px]">
          MAKE YOUR
          <span className="relative mx-2 inline-block font-serif italic text-[#F6327B]">
            HAIR
            <span className="absolute -bottom-1 left-0 h-[5px] w-full -rotate-2 rounded-full bg-[#FFD84D]" />
          </span>
          <br />
          THE
          <span className="block">STATEMENT.</span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
          Fun, stylish & high-quality hair accessories
          <br className="hidden sm:block" />
          to match every mood, every outfit, every you.
        </p>

        {/* CTA */}
        <a
          href="/shop"
          className="group mt-7 flex items-center gap-5 rounded-full bg-[#F6327B] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)]"
        >
          SHOP NOW
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight size={16} />
          </span>
        </a>

        {/* Handwritten note */}
        <div className="mt-6 ml-40 rotate-[-6deg] font-serif text-sm italic text-[#F6327B]">
          good hair days
          <br />
          start here ♡
        </div>

        {/* Social proof */}
        <div className="mt-7 hidden items-center gap-3 lg:flex">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-8 w-8 rounded-full border-2 border-[#FFF9F3] bg-[#FFD0E0]"
              />
            ))}
          </div>
          <div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star
                  key={item}
                  size={11}
                  fill="#FFD84D"
                  className="text-[#FFD84D]"
                />
              ))}
            </div>
            <p className="mt-0.5 text-[10px] font-semibold text-[#66576A]">
              Loved by 10,000+ girls
            </p>
          </div>
        </div>
      </div>

      {/* Right Visual */}
      <div className="relative mt-12 h-[540px] w-full sm:h-[650px] lg:mt-0 lg:h-[680px]">
        {/* Pink background */}
        <div className="absolute right-[5%] top-[7%] h-[82%] w-[78%] rotate-[4deg] rounded-[48%_48%_32%_32%] bg-[#FF5B9A]" />
        {/* Yellow background blob */}
        <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />
        {/* Main image */}
        <div className="absolute right-[10%] top-0 z-10 h-full w-[74%] overflow-hidden rounded-[45%_45%_0_0]">
          <img
            src={HERO_IMAGE}
            alt="Fashion accessories"
            className="hero-zoom h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/10 to-transparent" />
        </div>
        {/* Floating clips */}
        <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
        <div className="float-clip absolute right-[4%] top-[29%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
        <div className="float-clip absolute bottom-[19%] left-[3%] z-30 h-8 w-20 rounded-full bg-[#FFD84D] shadow-lg" />
        {/* Floating scrunchie */}
        <div className="float-slow absolute right-[3%] top-[2%] z-30 flex h-24 w-24 items-center justify-center rounded-full border-[20px] border-[#FF4E94] shadow-xl">
          <div className="h-5 w-5 rounded-full bg-[#FFF9F3]" />
        </div>
        {/* Floating badge */}
        <div className="badge-float absolute right-[-1%] top-[40%] z-40 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#FFB6D1] bg-[#FFF9F3] text-center shadow-[0_15px_35px_rgba(42,17,47,0.12)] sm:h-36 sm:w-36">
          <span className="text-[11px] font-bold tracking-wide text-[#F6327B]">
            BRIGHTER DAYS
          </span>
          <span className="text-[11px] font-bold text-[#66576A]">
            BETTER HAIR
          </span>
          <Heart size={15} fill="#F6327B" className="mt-1 text-[#F6327B]" />
        </div>
        {/* Purple sparkle badge */}
        <div className="sparkle-animation absolute bottom-[13%] right-[14%] z-30 flex h-14 w-14 rotate-12 items-center justify-center rounded-full bg-[#A98BFF] text-white shadow-lg">
          <Sparkles size={25} />
        </div>
      </div>
    </section>
  );
}
