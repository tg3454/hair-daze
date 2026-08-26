"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { SHOP_CATEGORIES } from "../data";

type ShopDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ShopDropdown({ isOpen, onClose }: ShopDropdownProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 top-full z-50 mt-2 w-[700px] max-w-[95vw] -translate-x-1/2 rounded-[28px] border border-[#29152F]/5 bg-[#FFF9F3] shadow-[0_30px_80px_rgba(42,17,47,0.15)] transition-all duration-400 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid grid-cols-[1.1fr_0.9fr] gap-0 p-8">
          {/* Left side */}
          <div className="pr-8">
            <div className="mb-6">
              <h3 className="text-[22px] font-black tracking-[-1px] text-[#29152F]">
                SHOP{" "}
                <span className="font-serif italic text-[#F6327B]">
                  HAIRDAZE
                </span>
              </h3>
              <p className="mt-1 text-xs text-[#66576A]">
                Find your next hair obsession.
              </p>
            </div>

            <p className="mb-3 text-[9px] font-bold tracking-[2px] text-[#F6327B]">
              SHOP BY CATEGORY
            </p>
            <ul className="space-y-1">
              {SHOP_CATEGORIES.map((category) => {
                const routeMap: Record<string, string> = {
                  "Hair Clips": "/shop/hair-clips",
                  "Claw Clips": "/shop/hair-clips",
                  "Scrunchies": "/shop/scrunchies",
                  "Bows & Ribbons": "/shop/bows",
                  "Headbands": "/shop/headbands",
                  "Hair Pins": "/shop",
                  "All Accessories": "/shop",
                };
                return (
                <li key={category}>
                  <a
                    href={routeMap[category] || "/shop"}
                    onClick={onClose}
                    className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-[#29152F] transition-colors hover:bg-[#FFE0EB]"
                  >
                    {category}
                    <ArrowRight
                      size={14}
                      className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              );
              })}
            </ul>
          </div>

          {/* Right side — promo card */}
          <div className="relative overflow-hidden rounded-[22px] bg-[#F6327B] p-6">
            {/* Decorative shapes */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF8FBA]/50" />
            <div className="absolute -bottom-8 left-0 h-24 w-24 rounded-full bg-[#D92C70]/40" />

            <Sparkles
              className="sparkle-animation absolute right-4 top-4 text-white/60"
              size={20}
            />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="mb-3 text-[9px] font-bold tracking-[2.5px] text-white/80">
                  NEW SEASON
                </p>
                <h4 className="text-[28px] font-black leading-[0.9] tracking-[-1.5px] text-white">
                  NEW HAIR
                  <br />
                  <span className="font-serif italic text-[#FFD84D]">
                    ENERGY.
                  </span>
                </h4>
              </div>

              <div className="mt-8">
                <a
                  href="/new-arrivals"
                  onClick={onClose}
                  className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[10px] font-black tracking-[1.5px] text-[#F6327B] transition-all duration-300 hover:bg-[#FFD84D] hover:text-[#29152F]"
                >
                  SHOP NEW ARRIVALS
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="/best-sellers"
                  onClick={onClose}
                  className="mt-4 inline-block text-[10px] font-bold tracking-[1px] text-white/80 transition-colors hover:text-white"
                >
                  BEST SELLERS →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
