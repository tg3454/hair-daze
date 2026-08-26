"use client";

import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "../data";

type CollectionsDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CollectionsDropdown({
  isOpen,
  onClose,
}: CollectionsDropdownProps) {
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
        className={`absolute left-1/2 top-full z-50 mt-2 w-[820px] max-w-[95vw] -translate-x-1/2 rounded-[28px] border border-[#29152F]/5 bg-[#FFF9F3] shadow-[0_30px_80px_rgba(42,17,47,0.15)] transition-all duration-400 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-[22px] font-black tracking-[-1px] text-[#29152F]">
              EXPLORE{" "}
              <span className="font-serif italic text-[#F6327B]">
                COLLECTIONS
              </span>
            </h3>
            <p className="mt-1 text-xs text-[#66576A]">
              Find the mood that matches your daze.
            </p>
          </div>

          {/* Collection cards */}
          <div className="grid grid-cols-5 gap-3">
            {COLLECTIONS.map((collection) => (
              <a
                key={collection.title}
                href="/shop"
                onClick={onClose}
                className="group relative overflow-hidden rounded-[18px] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(42,17,47,0.12)]"
              >
                {/* Image */}
                <div className="relative aspect-[0.85] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h4 className="text-[9px] font-black tracking-[1px] text-white">
                    {collection.title}
                  </h4>
                  <p className="mt-1 text-[8px] leading-4 text-white/70">
                    {collection.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[8px] font-bold text-[#FFD84D] transition-all duration-300 group-hover:translate-x-1">
                    SHOP <ArrowRight size={8} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
