"use client";

import { useState } from "react";
import { ArrowRight, Heart, Plus, Sparkles, Star, Check } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartPopup } from "./CartPopup";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

type VibePageLayoutProps = {
  vibeTitle: string;
  heroTitle: string;
  subtitle: string;
  eyebrow: string;
  ctaText: string;
  ctaLink: string;
  heroBg: string;
  heroText: string;
  heroAccent: string;
  cardBg: string;
  products: Product[];
};

function ProductCard({ product, heroAccent }: { product: Product; heroAccent: string }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="group relative">
      <div className="relative aspect-[0.88] overflow-hidden rounded-[28px]" style={{ backgroundColor: `${heroAccent}22` }}>
        {product.badge && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-white px-3 py-1.5 text-[9px] font-black tracking-[1px] text-[#29152F] shadow-sm">
            {product.badge}
          </div>
        )}

        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#29152F] shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-[#F6327B] hover:text-white"
        >
          <Heart size={16} fill={isWishlisted ? "#F6327B" : "none"} className={isWishlisted ? "text-[#F6327B]" : ""} />
        </button>

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/30 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-white/20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="transition-transform duration-700 group-hover:scale-110">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border-[22px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-40 sm:w-40" style={{ borderColor: heroAccent }}>
              <div className="h-10 w-10 rounded-full" style={{ backgroundColor: heroAccent }} />
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`absolute bottom-4 left-4 right-4 z-20 flex translate-y-3 items-center justify-center gap-2 rounded-full py-3 text-[10px] font-bold tracking-[1.5px] text-white shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
            added
              ? "bg-[#249D85] opacity-100 translate-y-0"
              : "bg-[#29152F] opacity-0 hover:bg-[#F6327B]"
          }`}
        >
          {added ? (
            <>
              <Check size={15} />
              ADDED TO YOUR DAZE ✦
            </>
          ) : (
            <>
              <Plus size={15} />
              ADD TO CART
            </>
          )}
        </button>
      </div>

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
            <span className="text-[10px] font-bold text-[#66576A]">{product.rating}</span>
            <span className="hidden text-[9px] text-[#9A8E9D] sm:inline">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function VibePageContent({ vibeTitle, heroTitle, subtitle, eyebrow, ctaText, ctaLink, heroBg, heroText, heroAccent, cardBg, products }: VibePageLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F3] text-[#29152F]">
      <Navbar />

      {/* HERO */}
      <section className="relative mx-auto grid min-h-[70vh] max-w-[1500px] grid-cols-1 items-center px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-14 lg:pb-10 lg:pt-4 xl:px-20">
        <div className="blob-move pointer-events-none absolute -left-32 top-[30%] h-72 w-72 rounded-full blur-[2px]" style={{ backgroundColor: `${heroAccent}60` }} />
        <div className="blob-move pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FFE47A]/60 blur-[2px]" />
        <Sparkles className="sparkle-animation absolute left-[4%] top-[12%] rotate-12 text-[#FF6C9E]" size={48} strokeWidth={1.5} />
        <Sparkles className="sparkle-animation absolute bottom-[15%] left-[42%] text-[#A98BFF]" size={30} strokeWidth={1.5} />

        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] sm:text-[13px]" style={{ color: heroAccent }}>
            <span>✦</span>
            {eyebrow}
            <span>✦</span>
          </div>
          <h1 className="text-[52px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[68px] lg:text-[72px] xl:text-[88px]">
            {heroTitle.split(" ").map((word, i) => (
              <span key={i}>
                {word}{" "}
              </span>
            ))}
            <span className="block font-serif italic" style={{ color: heroAccent }}>
              {subtitle}
            </span>
          </h1>
          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Curated {vibeTitle} vibes for your best hair moments.
          </p>
          <a
            href={ctaLink}
            className="group mt-7 flex items-center gap-5 rounded-full px-7 py-4 text-sm font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor: heroAccent }}
          >
            {ctaText}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        <div className="relative mt-12 flex h-[400px] w-full items-center justify-center sm:h-[500px] lg:mt-0 lg:h-[550px]">
          <div className={`absolute right-[10%] top-[7%] h-[80%] w-[80%] rotate-[4deg] rounded-[48%_48%_32%_32%] ${heroBg}`} />
          <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />
          <div className="absolute right-[15%] top-[10%] z-10 flex h-48 w-48 items-center justify-center rounded-full border-[30px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-56 sm:w-56" style={{ borderColor: heroAccent }}>
            <div className="h-16 w-16 rounded-full" style={{ backgroundColor: heroAccent }} />
          </div>
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
          <div className="float-clip absolute right-[4%] top-[45%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
          <Sparkles className="sparkle-animation absolute bottom-[15%] left-[20%] text-[#FFD84D]" size={40} />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
        <div className="mb-10 text-center">
          <h2 className="text-[40px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[56px]">
            THE <span className="font-serif italic" style={{ color: heroAccent }}>{vibeTitle}</span> EDIT
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={`${product.name}-${product.color}`} product={product} heroAccent={heroAccent} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-14 xl:px-20">
        <div className="relative mx-auto min-h-[400px] max-w-[1400px] overflow-hidden rounded-[42px]" style={{ backgroundColor: heroAccent }}>
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/20" />
          <div className="absolute -bottom-32 right-[10%] h-96 w-96 rounded-full bg-black/10" />
          <Sparkles className="drop-spin absolute left-[6%] top-[15%] text-white/70" size={45} strokeWidth={1.2} />

          <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center px-8 py-20 text-center">
            <h2 className="text-[48px] font-black leading-[0.88] tracking-[-4px] text-white sm:text-[68px] lg:text-[88px]">
              EXPLORE MORE
              <br />
              <span className="font-serif italic text-[#FFD84D]">{vibeTitle} VIBES.</span>
            </h2>
            <a
              href="/shop"
              className="group mt-9 flex items-center gap-5 rounded-full bg-white px-8 py-4 text-xs font-black tracking-[1.5px] shadow-[0_15px_35px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFD84D]"
              style={{ color: heroAccent }}
            >
              SHOP ALL ACCESSORIES
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-current text-white transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CartPopup />
    </main>
  );
}

export function VibePageLayout(props: VibePageLayoutProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <VibePageContent {...props} />
      </CartProvider>
    </AuthProvider>
  );
}
