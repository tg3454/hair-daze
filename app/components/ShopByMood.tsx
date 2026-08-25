import { Sparkles } from "lucide-react";
import { MOODS } from "../data";
import { MoodCard } from "./MoodCard";

export function ShopByMood() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-[30%] h-72 w-72 rounded-full bg-[#FFD9E7]/50 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[10%] h-80 w-80 rounded-full bg-[#DCD2FF]/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
            <span>✦</span>
            FIND YOUR MOOD
            <span>✦</span>
          </div>
          <h2 className="text-[50px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[65px] lg:text-[82px]">
            YOUR HAIR.
            <span className="block font-serif italic text-[#F6327B]">
              YOUR VIBE.
            </span>
          </h2>
          <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Pick a mood. Pick a look.
            <br className="hidden sm:block" />
            We'll handle the cute part.
          </p>
        </div>

        {/* Mood Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {MOODS.map((m) => (
            <MoodCard key={m.mood} {...m} />
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px w-14 bg-[#29152F]/10 sm:w-24" />
          <p className="font-serif text-sm italic text-[#66576A] sm:text-base">
            Wear your mood ✦
          </p>
          <div className="h-px w-14 bg-[#29152F]/10 sm:w-24" />
        </div>
      </div>
    </section>
  );
}
