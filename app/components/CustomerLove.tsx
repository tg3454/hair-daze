import { Heart } from "lucide-react";
import { CUSTOMER_REVIEWS } from "../data";
import { CustomerCard } from "./CustomerCard";

export function CustomerLove() {
  return (
    <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#FFD2E3]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#DDD3FF]/60 blur-3xl" />

      {/* Floating hearts */}
      <Heart
        className="heart-pop absolute left-[7%] top-[17%] text-[#F6327B]/30"
        size={34}
        fill="currentColor"
      />
      <Heart
        className="heart-pop absolute right-[8%] top-[25%] text-[#F6327B]/20"
        size={25}
        fill="currentColor"
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
            <span>✦</span>
            CUSTOMER LOVE
            <span>✦</span>
          </div>
          <h2 className="text-[50px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[65px] lg:text-[82px]">
            HAIRDAZE{" "}
            <span className="font-serif italic text-[#F6327B]">IRL.</span>
          </h2>
          <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Cute hair. Happy customers.
            <br className="hidden sm:block" />
            We love to see it.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {CUSTOMER_REVIEWS.map((review, index) => (
            <CustomerCard key={review.handle} review={review} index={index} />
          ))}
        </div>

        {/* Hashtag */}
        <div className="mt-20 flex flex-col items-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-[#29152F]/10 sm:w-20" />
            <span className="text-[10px] font-bold tracking-[3px] text-[#9A8E9D]">
              SEEN IT. LOVED IT. TAGGED IT.
            </span>
            <div className="h-px w-12 bg-[#29152F]/10 sm:w-20" />
          </div>
          <p className="mt-5 text-[38px] font-black tracking-[-2px] text-[#F6327B] sm:text-[48px]">
            #HAIRDAZE
          </p>
        </div>
      </div>
    </section>
  );
}
