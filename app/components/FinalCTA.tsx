import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
      <div className="relative mx-auto min-h-[620px] max-w-[1400px] overflow-hidden rounded-[42px] bg-[#29152F]">
        {/* Background glow */}
        <div className="absolute left-[-15%] top-[-25%] h-[500px] w-[500px] rounded-full bg-[#F6327B]/30 blur-3xl" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#A98BFF]/20 blur-3xl" />
        <div className="absolute left-[35%] top-[35%] h-[300px] w-[300px] rounded-full bg-[#FFD84D]/10 blur-3xl" />

        {/* Sparkles */}
        <Sparkles
          className="cta-spin absolute left-[8%] top-[12%] text-[#FFD84D]"
          size={45}
          strokeWidth={1.2}
        />
        <Sparkles
          className="cta-spin absolute right-[10%] top-[18%] text-[#F6327B]"
          size={35}
          strokeWidth={1.2}
        />
        <Sparkles
          className="cta-spin absolute bottom-[14%] left-[18%] text-[#A98BFF]"
          size={30}
          strokeWidth={1.2}
        />

        {/* Floating bow */}
        <div className="cta-float absolute left-[4%] top-[30%] z-20 hidden items-center lg:flex">
          <div className="h-24 w-32 rotate-[-18deg] rounded-[70%_25%_70%_25%] bg-[#F6327B] shadow-[0_25px_45px_rgba(246,50,123,0.25)]" />
          <div className="relative z-10 -mx-7 h-14 w-14 rounded-full bg-[#D92667] shadow-lg" />
          <div className="h-24 w-32 rotate-[18deg] rounded-[25%_70%_25%_70%] bg-[#F6327B] shadow-[0_25px_45px_rgba(246,50,123,0.25)]" />
        </div>

        {/* Floating scrunchie */}
        <div className="cta-float-reverse absolute bottom-[15%] right-[5%] z-20 hidden h-40 w-40 items-center justify-center rounded-full border-[28px] border-[#FFD84D] lg:flex">
          <div className="h-10 w-10 rounded-full bg-[#29152F]" />
        </div>

        {/* Main content */}
        <div className="relative z-30 flex min-h-[620px] flex-col items-center justify-center px-6 py-20 text-center">
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-3 text-[10px] font-bold tracking-[3px] text-[#FFD84D] sm:text-xs">
            <span>✦</span>
            ONE MORE THING
            <span>✦</span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[950px] text-[58px] font-black leading-[0.86] tracking-[-4px] text-white sm:text-[78px] lg:text-[110px]">
            YOUR HAIR
            <span className="block font-serif italic text-[#F6327B]">
              CALLED.
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-7 max-w-[540px] text-base leading-7 text-white/60 sm:text-lg">
            It wants something cute.
            <br />
            Who are we to say no?
          </p>

          {/* CTA */}
          <a
            href="/shop"
            className="group mt-9 flex items-center gap-5 rounded-full bg-[#F6327B] px-8 py-4 text-xs font-black tracking-[1.5px] text-white shadow-[0_20px_50px_rgba(246,50,123,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F] hover:shadow-[0_25px_60px_rgba(255,216,77,0.2)]"
          >
            SHOP ALL ACCESSORIES
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F6327B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#29152F]">
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Bottom decorative line */}
          <div className="mt-12 flex items-center gap-4 text-white/30">
            <div className="h-px w-10 bg-white/20 sm:w-20" />
            <span className="font-serif text-sm italic">
              made for your main character moments ✦
            </span>
            <div className="h-px w-10 bg-white/20 sm:w-20" />
          </div>
        </div>
      </div>
    </section>
  );
}
