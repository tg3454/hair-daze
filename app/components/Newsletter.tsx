"use client";

import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="relative border-b border-white/10 px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#F6327B]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#A98BFF]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[900px] text-center">
        {/* Eyebrow */}
        <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[3px] text-[#FFD84D] sm:text-xs">
          <span>✦</span>
          THE HAIRDAZE CLUB
          <span>✦</span>
        </div>

        {/* Heading */}
        <h2 className="text-[44px] font-black leading-[0.9] tracking-[-3px] text-white sm:text-[60px] lg:text-[76px]">
          GOOD HAIR DAYS
          <span className="block font-serif italic text-[#F6327B]">
            START HERE.
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-[500px] text-sm leading-7 text-white/55 sm:text-base">
          Join the club for first dibs on new drops, exclusive offers and a
          little extra sparkle in your inbox.
        </p>

        {/* Newsletter form */}
        <form
          className="mx-auto mt-8 flex max-w-[560px] flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              className="h-14 w-full rounded-full border border-white/10 bg-white/[0.08] px-6 text-sm text-white outline-none placeholder:text-white/35 transition-all duration-300 focus:border-[#F6327B] focus:bg-white/[0.12]"
            />
          </div>
          <button
            type="submit"
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#F6327B] px-7 text-xs font-black tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F]"
          >
            JOIN THE CLUB
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>

        <p className="mt-4 text-[9px] tracking-[0.5px] text-white/30">
          No spam. Just cute things. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
