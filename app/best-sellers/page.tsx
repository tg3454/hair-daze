"use client";

import { useState } from "react";
import {
  ArrowRight,
  Heart,
  Plus,
  Sparkles,
  Star,
} from "lucide-react";
import {
  ALL_BESTSELLERS,
  BESTSELLER_HIGHLIGHTS,
  SOCIAL_PROOF_REVIEWS,
  BEST_SELLERS_HERO_IMAGE,
} from "../data";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPopup } from "../components/CartPopup";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

function BestsellerCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToBag = () => {
    addItem(product);
    openCart();
  };

  return (
    <div className="group relative">
      <div className="relative aspect-[0.88] overflow-hidden rounded-[28px] bg-[#FFE0EB]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-[#F6327B] px-3 py-1.5 text-[9px] font-black tracking-[1px] text-white shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#29152F] shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-[#F6327B] hover:text-white"
        >
          <Heart
            size={16}
            fill={isWishlisted ? "#F6327B" : "none"}
            className={isWishlisted ? "text-[#F6327B]" : ""}
          />
        </button>

        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/30 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-white/20" />

        {/* Product image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Quick add */}
        <button
          onClick={handleAddToBag}
          className="absolute bottom-4 left-4 right-4 z-20 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-[#29152F] py-3 text-[10px] font-bold tracking-[1.5px] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#F6327B]"
        >
          <Plus size={15} />
          ADD TO BAG
        </button>
      </div>

      {/* Product info */}
      <div className="px-1 pt-4">
        <p className="text-[9px] font-bold tracking-[1.5px] text-[#9A8E9D]">
          {product.category.toUpperCase()}
        </p>
        <h3 className="mt-1.5 text-sm font-bold text-[#29152F] sm:text-[15px]">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm font-black text-[#29152F]">{product.price}</p>
          <div className="flex items-center gap-1">
            <Star size={12} fill="#FFD84D" className="text-[#FFD84D]" />
            <span className="text-[10px] font-bold text-[#66576A]">
              {product.rating}
            </span>
            <span className="hidden text-[9px] text-[#9A8E9D] sm:inline">
              ({product.reviews})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialProofCard({
  review,
  index,
}: {
  review: (typeof SOCIAL_PROOF_REVIEWS)[number];
  index: number;
}) {
  return (
    <article
      className={`${review.rotation} ${
        index % 2 === 0 ? "testimonial-float" : "testimonial-float-reverse"
      }`}
    >
      <div className="group rounded-[24px] border border-[#29152F]/5 bg-white p-6 shadow-[0_10px_30px_rgba(42,17,47,0.06)] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_20px_50px_rgba(42,17,47,0.12)]">
        {/* Stars */}
        <div className="mb-3 flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              fill="#FFD84D"
              className="text-[#FFD84D]"
            />
          ))}
        </div>

        {/* Review text */}
        <p className="text-sm leading-6 text-[#29152F]">
          &ldquo;{review.text}&rdquo;
        </p>

        {/* Customer */}
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFE0EB] text-sm font-bold text-[#F6327B]">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="text-xs font-bold text-[#29152F]">
              {review.name}
            </p>
            <p className="text-[10px] text-[#9A8E9D]">{review.handle}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function BestSellersContent() {
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
            THE HAIRDAZE ICONS ✦
          </div>

          <h1 className="max-w-[700px] text-[58px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[75px] lg:text-[76px] xl:text-[94px]">
            BEST
            <br />
            <span className="relative mx-2 inline-block font-serif italic text-[#F6327B]">
              SELLERS
              <span className="absolute -bottom-1 left-0 h-[5px] w-full -rotate-2 rounded-full bg-[#FFD84D]" />
            </span>
          </h1>

          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            The pieces everyone is obsessed with.
          </p>

          <button className="group mt-7 flex items-center gap-5 rounded-full bg-[#F6327B] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)]">
            SHOP BEST SELLERS
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* Right visual */}
        <div className="relative mt-12 h-[540px] w-full sm:h-[650px] lg:mt-0 lg:h-[680px]">
          <div className="absolute right-[5%] top-[7%] h-[82%] w-[78%] rotate-[4deg] rounded-[48%_48%_32%_32%] bg-[#FF5B9A]" />
          <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />
          <div className="absolute right-[10%] top-0 z-10 h-full w-[74%] overflow-hidden rounded-[45%_45%_0_0]">
            <img
              src={BEST_SELLERS_HERO_IMAGE}
              alt="Best sellers collection"
              className="hero-zoom h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/10 to-transparent" />
          </div>
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
          <div className="float-clip absolute right-[4%] top-[29%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
          <div className="float-clip absolute bottom-[19%] left-[3%] z-30 h-8 w-20 rounded-full bg-[#FFD84D] shadow-lg" />
          <div className="badge-float absolute right-[-1%] top-[40%] z-40 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#FFB6D1] bg-[#FFF9F3] text-center shadow-[0_15px_35px_rgba(42,17,47,0.12)] sm:h-36 sm:w-36">
            <span className="text-[11px] font-bold tracking-wide text-[#F6327B]">
              #1 RATED
            </span>
            <span className="text-[11px] font-bold text-[#66576A]">
              FAVORITES
            </span>
            <Star size={15} fill="#FFD84D" className="mt-1 text-[#FFD84D]" />
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT GRID ═══════════ */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {ALL_BESTSELLERS.map((product) => (
            <BestsellerCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      {/* ═══════════ BESTSELLER HIGHLIGHTS ═══════════ */}
      <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#FFD2E3]/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#DDD3FF]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
              <span>✦</span>
              FEATURED
              <span>✦</span>
            </div>
            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              LOVED. WORN.
              <span className="block font-serif italic text-[#F6327B]">
                REORDERED.
              </span>
            </h2>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BESTSELLER_HIGHLIGHTS.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-[32px] bg-white shadow-[0_15px_40px_rgba(42,17,47,0.08)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(42,17,47,0.14)]"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-lg font-black text-[#29152F]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#66576A]">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-lg font-black text-[#29152F]">
                      {item.price}
                    </p>
                    <a
                      href="#"
                      className="group/btn flex items-center gap-2 rounded-full bg-[#F6327B] px-5 py-2.5 text-[10px] font-bold tracking-[1px] text-white transition-all duration-300 hover:bg-[#29152F]"
                    >
                      SHOP NOW
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SOCIAL PROOF ═══════════ */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#FFD9E7]/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#E7DEFF]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-xs">
              <span>✦</span>
              REAL CUSTOMERS
              <span>✦</span>
            </div>
            <h2 className="text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              WHY EVERYONE
              <span className="block font-serif italic text-[#F6327B]">
                LOVES HAIRDAZE
              </span>
            </h2>
            <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
              Don&apos;t take our word for it.
              <br className="hidden sm:block" />
              Here&apos;s what our community has to say.
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_PROOF_REVIEWS.map((review, index) => (
              <SocialProofCard
                key={review.handle}
                review={review}
                index={index}
              />
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
              READY TO JOIN
              <br />
              <span className="font-serif italic text-[#F6327B]">
                THE OBSESSION?
              </span>
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-7 text-white/60">
              Thousands of girls already have. Now it&apos;s your turn.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button className="group flex items-center gap-5 rounded-full bg-[#F6327B] px-8 py-4 text-xs font-black tracking-[1.5px] text-white shadow-[0_20px_50px_rgba(246,50,123,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F] hover:shadow-[0_25px_60px_rgba(255,216,77,0.2)]">
                SHOP BEST SELLERS
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F6327B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#29152F]">
                  <ArrowRight size={16} />
                </span>
              </button>
              <a
                href="/new-arrivals"
                className="flex items-center gap-3 rounded-full border-2 border-white/20 px-7 py-4 text-xs font-bold tracking-[1.5px] text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CartPopup />
    </main>
  );
}

export default function BestSellersPage() {
  return (
    <AuthProvider>
      <CartProvider>
        <BestSellersContent />
      </CartProvider>
    </AuthProvider>
  );
}
