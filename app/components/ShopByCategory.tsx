import { Sparkles } from "lucide-react";
import { CATEGORIES } from "../data";
import { CategoryCard } from "./CategoryCard";

export function ShopByCategory() {
  return (
    <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFD4E4]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E2D7FF]/60 blur-3xl" />
      <Sparkles
        className="category-spin absolute right-[8%] top-[12%] text-[#FF6C9E]"
        size={45}
        strokeWidth={1.2}
      />
      <Sparkles
        className="category-spin absolute bottom-[8%] left-[7%] text-[#A98BFF]"
        size={32}
        strokeWidth={1.2}
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-[12px]">
            <span>✦</span>
            FIND YOUR FAVORITE
            <span>✦</span>
          </div>
          <h2 className="text-[48px] font-black leading-none tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
            SHOP BY{" "}
            <span className="font-serif italic text-[#F6327B]">CATEGORY.</span>
          </h2>
          <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#66576A] sm:text-base">
            From everyday essentials to statement pieces,
            <br className="hidden sm:block" />
            find the little things that make your look yours.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-[#29152F]/10 sm:w-28" />
          <p className="font-serif text-sm italic text-[#66576A] sm:text-base">
            Mix it. Match it. Make it yours.
          </p>
          <div className="h-px w-16 bg-[#29152F]/10 sm:w-28" />
        </div>
      </div>
    </section>
  );
}
