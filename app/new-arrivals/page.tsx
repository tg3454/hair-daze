"use client";

import { useState } from "react";
import {
  ArrowRight,
  Heart,
  Plus,
  Sparkles,
  Star,
} from "lucide-react";
import { NEW_ARRIVALS_PRODUCTS, NEW_ARRIVALS_HERO_IMAGE } from "../data";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CartPopup } from "../components/CartPopup";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

const FILTERS = [
  "All",
  "Clips",
  "Scrunchies",
  "Headbands",
  "Hair Pins",
  "Bows",
] as const;

const SORT_OPTIONS = [
  "Sort by Newest",
  "Price: Low to High",
  "Price: High to Low",
] as const;

function NewArrivalsProductCard({ product }: { product: Product }) {
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

function NewArrivalsContent() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeSort, setActiveSort] = useState<string>(SORT_OPTIONS[0]);

  const filteredProducts = NEW_ARRIVALS_PRODUCTS.filter((p) => {
    if (activeFilter === "All") return true;
    const filterMap: Record<string, string[]> = {
      Clips: ["Hair Clips", "Claw Clips"],
      Scrunchies: ["Scrunchies"],
      Headbands: ["Headbands"],
      "Hair Pins": ["Hair Pins"],
      Bows: ["Bows"],
    };
    return filterMap[activeFilter]?.includes(p.category);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
    if (activeSort === "Price: Low to High") return priceA - priceB;
    if (activeSort === "Price: High to Low") return priceB - priceA;
    return 0;
  });

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
            JUST DROPPED ✦
          </div>

          <h1 className="max-w-[700px] text-[58px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[75px] lg:text-[76px] xl:text-[94px]">
            NEW
            <br />
            <span className="relative mx-2 inline-block font-serif italic text-[#F6327B]">
              ARRIVALS
              <span className="absolute -bottom-1 left-0 h-[5px] w-full -rotate-2 rounded-full bg-[#FFD84D]" />
            </span>
          </h1>

          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Fresh accessories. New moods. Your next hair obsession.
          </p>

          <button className="group mt-7 flex items-center gap-5 rounded-full bg-[#F6327B] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)]">
            SHOP THE COLLECTION
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
              src={NEW_ARRIVALS_HERO_IMAGE}
              alt="New arrivals collection"
              className="hero-zoom h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/10 to-transparent" />
          </div>
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
          <div className="float-clip absolute right-[4%] top-[29%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
          <div className="float-clip absolute bottom-[19%] left-[3%] z-30 h-8 w-20 rounded-full bg-[#FFD84D] shadow-lg" />
          <div className="float-slow absolute right-[3%] top-[2%] z-30 flex h-24 w-24 items-center justify-center rounded-full border-[20px] border-[#FF4E94] shadow-xl">
            <div className="h-5 w-5 rounded-full bg-[#FFF9F3]" />
          </div>
          <div className="badge-float absolute right-[-1%] top-[40%] z-40 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#FFB6D1] bg-[#FFF9F3] text-center shadow-[0_15px_35px_rgba(42,17,47,0.12)] sm:h-36 sm:w-36">
            <span className="text-[11px] font-bold tracking-wide text-[#F6327B]">
              JUST IN
            </span>
            <span className="text-[11px] font-bold text-[#66576A]">
              NEW STYLES
            </span>
            <Sparkles size={15} className="mt-1 text-[#F6327B]" />
          </div>
        </div>
      </section>

      {/* ═══════════ FILTER / SORT BAR ═══════════ */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-col items-start justify-between gap-5 border-b border-[#29152F]/10 py-6 sm:flex-row sm:items-center">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-[11px] font-bold tracking-[1px] transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#F6327B] text-white shadow-[0_8px_20px_rgba(246,50,123,0.25)]"
                    : "bg-white text-[#29152F] hover:bg-[#FFE0EB]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            {SORT_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setActiveSort(option)}
                className={`whitespace-nowrap text-[10px] font-bold tracking-[0.5px] transition-colors ${
                  activeSort === option
                    ? "text-[#F6327B]"
                    : "text-[#9A8E9D] hover:text-[#29152F]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT GRID ═══════════ */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {sortedProducts.map((product) => (
            <NewArrivalsProductCard
              key={product.name}
              product={product}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-[#29152F]">
              No products in this category yet.
            </p>
            <p className="mt-2 text-sm text-[#66576A]">
              Check back soon for new drops!
            </p>
          </div>
        )}
      </section>

      {/* ═══════════ EDITORIAL BANNER ═══════════ */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative mx-auto min-h-[400px] max-w-[1400px] overflow-hidden rounded-[42px] bg-[#F6327B]">
          {/* Background shapes */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#FF8FBA] opacity-50" />
          <div className="absolute -bottom-32 right-[10%] h-96 w-96 rounded-full bg-[#D92C70] opacity-50" />
          <Sparkles
            className="drop-spin absolute left-[6%] top-[15%] text-white/70"
            size={45}
            strokeWidth={1.2}
          />
          <Sparkles
            className="drop-spin absolute bottom-[15%] right-[8%] text-[#FFD84D]"
            size={35}
            strokeWidth={1.2}
          />

          <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-8 py-20 text-center">
            <h2 className="text-[52px] font-black leading-[0.88] tracking-[-4px] text-white sm:text-[72px] lg:text-[96px]">
              NEW SEASON.
              <br />
              <span className="font-serif italic text-[#FFD84D]">
                NEW HAIR ENERGY.
              </span>
            </h2>
            <button className="group mt-9 flex items-center gap-5 rounded-full bg-white px-8 py-4 text-xs font-black tracking-[1.5px] text-[#F6327B] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F]">
              SHOP THE DROP
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6327B] text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-[#29152F] group-hover:text-white">
                <ArrowRight size={15} />
              </span>
            </button>
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
              YOUR HAIR DESERVES
              <br />
              <span className="font-serif italic text-[#F6327B]">
                SOMETHING NEW.
              </span>
            </h2>
            <p className="mt-6 max-w-[480px] text-base leading-7 text-white/60">
              Explore our full collection of accessories designed to make every
              hair day a good one.
            </p>
            <button className="group mt-8 flex items-center gap-5 rounded-full bg-[#F6327B] px-8 py-4 text-xs font-black tracking-[1.5px] text-white shadow-[0_20px_50px_rgba(246,50,123,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D] hover:text-[#29152F] hover:shadow-[0_25px_60px_rgba(255,216,77,0.2)]">
              EXPLORE ALL ACCESSORIES
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#F6327B] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#29152F]">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <CartPopup />
    </main>
  );
}

export default function NewArrivalsPage() {
  return (
    <AuthProvider>
      <CartProvider>
        <NewArrivalsContent />
      </CartProvider>
    </AuthProvider>
  );
}
