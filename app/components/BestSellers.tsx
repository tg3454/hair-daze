import { ArrowRight } from "lucide-react";
import { BEST_SELLERS } from "../data";
import { ProductCard } from "./ProductCard";

export function BestSellers() {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F3] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#FFD9E7]/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#E7DEFF]/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-[12px]">
            <span>✦</span>
            OUR FAVORITES
            <span>✦</span>
          </div>
          <h2 className="max-w-[800px] text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
            EVERYONE'S{" "}
            <span className="font-serif italic text-[#F6327B]">OBSESSED.</span>
          </h2>
          <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            The pieces you keep coming back for.
            <br className="hidden sm:block" />
            Consider these your new hair besties.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {BEST_SELLERS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-14 flex justify-center">
          <button className="group flex items-center gap-4 rounded-full border-2 border-[#29152F] px-7 py-3.5 text-xs font-bold tracking-[1.5px] text-[#29152F] transition-all duration-300 hover:bg-[#29152F] hover:text-white">
            VIEW ALL PRODUCTS
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
