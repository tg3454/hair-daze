"use client";

import { ArrowRight, Heart, Sparkles } from "lucide-react";
import {
  ABOUT_HERO_IMAGE,
  ABOUT_IMAGES,
  BRAND_VALUES,
} from "../data";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPopup } from "../components/CartPopup";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

function AboutContent() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F3] text-[#29152F]">
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1500px] grid-cols-1 items-center px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:pb-10 lg:pt-4 xl:px-20">
        {/* Decorations */}
        <div className="blob-move pointer-events-none absolute -left-32 top-[30%] h-72 w-72 rounded-full bg-[#FFB5D0]/60 blur-[2px]" />
        <div className="blob-move pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FFE47A]/60 blur-[2px]" />
        <Sparkles
          className="sparkle-animation absolute left-[4%] top-[12%] rotate-12 text-[#FF6C9E]"
          size={48}
          strokeWidth={1.5}
        />
        <Sparkles
          className="sparkle-animation absolute bottom-[15%] left-[42%] text-[#A98BFF]"
          size={30}
          strokeWidth={1.5}
        />

        {/* Left content */}
        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#F6327B] sm:text-[13px]">
            <span>✦</span>
            MORE THAN JUST ACCESSORIES ✦
          </div>

          <h1 className="max-w-[700px] text-[52px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[68px] lg:text-[72px] xl:text-[88px]">
            WE MAKE
            <br />
            <span className="font-serif italic text-[#F6327B]">HAIR</span>
            <br />
            THE
            <span className="block">STATEMENT.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            We believe every hair day deserves a little extra magic.
            <br className="hidden sm:block" />
            Welcome to the world of HAIRDAZE.
          </p>
        </div>

        {/* Right visual */}
        <div className="relative mt-12 h-[540px] w-full sm:h-[650px] lg:mt-0 lg:h-[680px]">
          <div className="absolute right-[5%] top-[7%] h-[82%] w-[78%] rotate-[4deg] rounded-[48%_48%_32%_32%] bg-[#FF5B9A]" />
          <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />
          <div className="absolute right-[10%] top-0 z-10 h-full w-[74%] overflow-hidden rounded-[45%_45%_0_0]">
            <img
              src={ABOUT_HERO_IMAGE}
              alt="HAIRDAZE brand story"
              className="hero-zoom h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/10 to-transparent" />
          </div>
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
          <div className="float-clip absolute right-[4%] top-[29%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
          <div className="float-clip absolute bottom-[19%] left-[3%] z-30 h-8 w-20 rounded-full bg-[#FFD84D] shadow-lg" />
          <div className="badge-float absolute right-[-1%] top-[40%] z-40 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#FFB6D1] bg-[#FFF9F3] text-center shadow-[0_15px_35px_rgba(42,17,47,0.12)] sm:h-36 sm:w-36">
            <span className="text-[11px] font-bold tracking-wide text-[#F6327B]">
              EST. 2024
            </span>
            <span className="text-[11px] font-bold text-[#66576A]">
              MADE WITH
            </span>
            <Heart size={15} fill="#F6327B" className="mt-1 text-[#F6327B]" />
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND STORY ═══════════ */}
      <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#FFD2E3]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#DDD3FF]/60 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
              <span>✦</span>
              OUR STORY
              <span>✦</span>
            </div>
            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[72px]">
              THE{" "}
              <span className="font-serif italic text-[#F6327B]">
                HAIRDAZE
              </span>{" "}
              STORY
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#66576A] sm:text-base">
              <p>
                HAIRDAZE was born from a simple idea: everyday hairstyles should
                be expressive, fun and fashionable. We started with a small
                collection of scrunchies and clips, and quickly discovered that
                girls everywhere were looking for accessories that matched their
                personality.
              </p>
              <p>
                Today, HAIRDAZE is more than a brand — it&apos;s a community of
                creative, confident girls who believe that a great hair accessory
                can change your entire mood. From coquette bows to Y2K claws,
                from pearl headbands to crystal pins, every piece is designed to
                help you express who you are.
              </p>
              <p>
                We source the finest materials, work with passionate designers,
                and obsess over every detail — because you deserve accessories
                that are as unique and beautiful as you are.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[36px] shadow-[0_25px_60px_rgba(42,17,47,0.12)]">
              <img
                src={
                  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=90"
                }
                alt="HAIRDAZE brand story"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* Floating decoration */}
            <div className="absolute -bottom-6 -left-6 flex h-24 w-24 items-center justify-center rounded-full border-[16px] border-[#FFD84D] shadow-lg">
              <div className="h-6 w-6 rounded-full bg-[#FFF9F3]" />
            </div>
            <div className="absolute -right-4 top-8 rotate-12 font-serif text-sm italic text-[#F6327B]">
              with love ✦
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BRAND VALUES ═══════════ */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFD4E4]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E2D7FF]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
              <span>✦</span>
              WHAT WE STAND FOR
              <span>✦</span>
            </div>
            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              OUR{" "}
              <span className="font-serif italic text-[#F6327B]">VALUES</span>
            </h2>
          </div>

          {/* Value cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BRAND_VALUES.map((value) => (
              <div
                key={value.title}
                className={`group relative overflow-hidden rounded-[32px] ${value.bg} p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(42,17,47,0.12)]`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/30 transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/20" />

                <div className="relative z-10">
                  <span className="text-6xl font-black opacity-20">
                    {value.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-black tracking-[-1px]">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 opacity-80">
                    {value.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PHILOSOPHY ═══════════ */}
      <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative z-10 mx-auto max-w-[1400px] text-center">
          <div className="mb-4 flex items-center justify-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
            <span>✦</span>
            OUR PHILOSOPHY
            <span>✦</span>
          </div>

          <h2 className="mt-8 text-[60px] font-black leading-[0.85] tracking-[-4px] text-[#29152F] sm:text-[80px] lg:text-[100px] xl:text-[120px]">
            YOUR
            <br />
            HAIR.
            <br />
            YOUR
            <br />
            <span className="font-serif italic text-[#F6327B]">MOOD.</span>
            <br />
            YOUR
            <br />
            <span className="font-serif italic text-[#F6327B]">DAZE.</span>
          </h2>

          {/* Decorative sparkles */}
          <Sparkles
            className="sparkle-animation absolute left-[15%] top-[20%] text-[#FF6C9E]"
            size={40}
          />
          <Sparkles
            className="sparkle-animation absolute right-[15%] bottom-[25%] text-[#A98BFF]"
            size={35}
          />
          <Sparkles
            className="sparkle-animation absolute bottom-[15%] left-[40%] text-[#FFD84D]"
            size={30}
          />
        </div>
      </section>

      {/* ═══════════ BEHIND THE BRAND ═══════════ */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFD4E4]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E2D7FF]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
              <span>✦</span>
              BEHIND THE BRAND
              <span>✦</span>
            </div>
            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              THE{" "}
              <span className="font-serif italic text-[#F6327B]">
                DETAILS
              </span>{" "}
              MATTER.
            </h2>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {ABOUT_IMAGES.map((img, index) => (
              <div
                key={img.caption}
                className={`group relative overflow-hidden rounded-[28px] shadow-[0_15px_40px_rgba(42,17,47,0.1)] ${
                  index === 1 ? "sm:-mt-8" : ""
                }`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-black tracking-[2px] text-white">
                    {img.caption}
                  </p>
                  <div className="mt-2 h-[2px] w-10 rounded-full bg-[#F6327B]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative mx-auto min-h-[400px] max-w-[1400px] overflow-hidden rounded-[42px] bg-[#29152F]">
          <div className="absolute left-[-15%] top-[-25%] h-[500px] w-[500px] rounded-full bg-[#F6327B]/30 blur-3xl" />
          <div className="absolute bottom-[-30%] right-[-10%] h-[550px] w-[550px] rounded-full bg-[#A98BFF]/20 blur-3xl" />

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

          <div className="relative z-30 flex min-h-[400px] flex-col items-center justify-center px-6 py-20 text-center">
            <h2 className="max-w-[800px] text-[48px] font-black leading-[0.88] tracking-[-4px] text-white sm:text-[68px] lg:text-[90px]">
              READY TO FIND YOUR
              <br />
              <span className="font-serif italic text-[#F6327B]">
                HAIR OBSESSION?
              </span>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/new-arrivals"
                className="group flex items-center gap-5 rounded-full bg-[#F6327B] px-8 py-4 text-xs font-black tracking-[1.5px] text-white shadow-[0_20px_50px_rgba(246,50,123,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F] hover:shadow-[0_25px_60px_rgba(255,216,77,0.2)]"
              >
                SHOP NEW ARRIVALS
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F6327B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#29152F]">
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="/"
                className="flex items-center gap-3 rounded-full border-2 border-white/20 px-7 py-4 text-xs font-bold tracking-[1.5px] text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                EXPLORE COLLECTIONS
              </a>
            </div>

            <div className="mt-12 flex items-center gap-4 text-white/30">
              <div className="h-px w-10 bg-white/20 sm:w-20" />
              <span className="font-serif text-sm italic">
                made for your everyday daze ✦
              </span>
              <div className="h-px w-10 bg-white/20 sm:w-20" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartPopup />
    </main>
  );
}

export default function AboutPage() {
  return (
    <AuthProvider>
      <CartProvider>
        <AboutContent />
      </CartProvider>
    </AuthProvider>
  );
}
