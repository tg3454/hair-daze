import { Heart, Star } from "lucide-react";
import type { Review } from "../types";

export function CustomerCard({
  review,
  index,
}: {
  review: Review;
  index: number;
}) {
  return (
    <article
      className={`group ${review.rotation} ${
        index === 1 ? "testimonial-float-reverse" : "testimonial-float"
      }`}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_20px_50px_rgba(42,17,47,0.08)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:shadow-[0_30px_70px_rgba(42,17,47,0.15)]">
        {/* Image */}
        <div className="relative aspect-[4/4.4] overflow-hidden rounded-[22px]">
          <img
            src={review.image}
            alt={`${review.name} wearing HairDaze accessories`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          {/* Instagram-like overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold backdrop-blur">
                {review.name.charAt(0)}
              </div>
              <span className="text-xs font-bold">{review.handle}</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Heart size={15} fill="white" />
              {review.likes}
            </div>
          </div>
        </div>

        {/* Review */}
        <div className="px-3 pb-4 pt-5">
          {/* Stars */}
          <div className="mb-3 flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={13}
                fill="#FFD84D"
                className="text-[#FFD84D]"
              />
            ))}
            <span className="ml-2 flex items-center gap-1 text-[9px] font-bold tracking-[0.5px] text-[#7D707F]">
              VERIFIED
              <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#3B82F6] text-[7px] text-white">
                ✓
              </span>
            </span>
          </div>
          {/* Quote */}
          <p className="text-sm font-medium leading-6 text-[#29152F]">
            &ldquo;{review.text}&rdquo;
          </p>
          {/* Name */}
          <p className="mt-4 text-[10px] font-bold tracking-[1.5px] text-[#9A8E9D]">
            — {review.name.toUpperCase()}
          </p>
        </div>
      </div>
    </article>
  );
}
