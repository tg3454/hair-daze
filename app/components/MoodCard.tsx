import { Sparkles } from "lucide-react";
import type { Mood } from "../types";

function MoodArtwork({ mood }: { mood: Mood }) {
  if (mood === "coquette") {
    return (
      <div className="mood-float absolute right-[10%] top-[12%] transition-transform duration-700 group-hover:scale-110">
        <div className="flex items-center">
          <div className="h-28 w-36 rotate-[-18deg] rounded-[70%_25%_70%_25%] bg-[#F6327B] shadow-[0_20px_35px_rgba(120,20,70,0.2)] sm:h-36 sm:w-44" />
          <div className="relative z-10 -mx-8 h-16 w-16 rounded-full bg-[#D92667] shadow-lg" />
          <div className="h-28 w-36 rotate-[18deg] rounded-[25%_70%_25%_70%] bg-[#F6327B] shadow-[0_20px_35px_rgba(120,20,70,0.2)] sm:h-36 sm:w-44" />
        </div>
        <div className="absolute -right-5 -top-7 font-serif text-4xl text-white">
          ♡
        </div>
      </div>
    );
  }

  if (mood === "y2k") {
    return (
      <div className="absolute right-[8%] top-[10%]">
        <div className="mood-spin flex h-40 w-40 items-center justify-center rounded-full border-[12px] border-[#D8CCFF] shadow-[0_20px_40px_rgba(42,17,47,0.2)] sm:h-52 sm:w-52">
          <div className="h-20 w-20 rounded-full bg-[#7B5BE7] shadow-[inset_0_0_30px_rgba(255,255,255,0.3)] sm:h-28 sm:w-28" />
        </div>
        <Sparkles
          className="absolute -right-7 top-2 text-[#FFD84D]"
          size={38}
        />
        <Sparkles className="absolute -bottom-5 -left-8 text-white" size={28} />
      </div>
    );
  }

  if (mood === "clean") {
    return (
      <div className="mood-float-reverse absolute right-[8%] top-[13%]">
        <div className="relative">
          <div className="h-48 w-48 rounded-full border-[22px] border-[#249D85] bg-[#EDFDF7] shadow-[0_25px_40px_rgba(20,100,80,0.18)] sm:h-56 sm:w-56 sm:border-[26px]" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#75DFC4]" />
          <div className="absolute -right-8 top-5 h-10 w-10 rounded-full bg-white/60" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute right-[7%] top-[10%]">
      <div className="mood-float relative h-56 w-56 sm:h-64 sm:w-64">
        <div className="absolute left-5 top-2 h-28 w-28 rounded-full bg-[#F6327B] shadow-lg" />
        <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
        <div className="absolute bottom-0 left-16 h-32 w-32 rounded-full bg-[#55D8BB] shadow-lg" />
        <div className="absolute bottom-7 right-7 h-16 w-16 rounded-full bg-[#FF8B3D] shadow-lg" />
        <div className="absolute left-[45%] top-[40%] h-12 w-12 rounded-full bg-[#FFD84D] shadow-lg" />
      </div>
      <Sparkles className="absolute -right-5 -top-4 text-[#F6327B]" size={34} />
    </div>
  );
}

const moodStyles = {
  coquette: {
    background: "bg-[#FFB8D2]",
    text: "text-[#54152F]",
    button: "bg-[#FFF0F6]",
  },
  y2k: {
    background: "bg-[#9D82F7]",
    text: "text-white",
    button: "bg-white/90",
  },
  clean: {
    background: "bg-[#CBEBDD]",
    text: "text-[#17483D]",
    button: "bg-[#F4FFF9]",
  },
  color: {
    background: "bg-[#FFD84D]",
    text: "text-[#493C08]",
    button: "bg-[#FFF8D7]",
  },
};

const moodRoutes: Record<string, string> = {
  coquette: "/vibe/coquette",
  y2k: "/vibe/y2k",
  clean: "/vibe/clean-girl",
  color: "/vibe/color-pop",
};

export function MoodCard({
  title,
  subtitle,
  number,
  mood,
}: {
  title: string;
  subtitle: string;
  number: string;
  mood: Mood;
}) {
  const current = moodStyles[mood];

  return (
    <a
      href={moodRoutes[mood] || "/shop"}
      className={`group relative min-h-[390px] overflow-hidden rounded-[38px] ${current.background} p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(42,17,47,0.15)] sm:min-h-[450px] sm:p-10`}
    >
      {/* Number */}
      <span
        className={`absolute right-8 top-7 text-[11px] font-black tracking-[2px] opacity-40 ${current.text}`}
      >
        {number}
      </span>

      {/* Shine effect */}
      {mood === "clean" && (
        <div className="pointer-events-none absolute inset-y-[-50%] left-[-30%] w-20 rotate-[15deg] bg-white/30 blur-md transition-transform duration-1000 group-hover:translate-x-[600px]" />
      )}

      {/* Artwork */}
      <MoodArtwork mood={mood} />

      {/* Content */}
      <div className="absolute bottom-7 left-7 right-7 z-20 sm:bottom-9 sm:left-10 sm:right-10">
        <p
          className={`mb-2 text-[10px] font-bold tracking-[2px] opacity-60 ${current.text}`}
        >
          MOOD {number}
        </p>
        <h3
          className={`text-[34px] font-black leading-none tracking-[-2px] sm:text-[42px] ${current.text}`}
        >
          {title}
        </h3>
        <div className="mt-3 flex items-end justify-between gap-5">
          <p
            className={`max-w-[260px] text-xs leading-5 opacity-70 ${current.text}`}
          >
            {subtitle}
          </p>
          <span
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${current.button} ${current.text} transition-all duration-300 group-hover:translate-x-2 group-hover:-rotate-12`}
          >
            ↑
          </span>
        </div>
      </div>
    </a>
  );
}
