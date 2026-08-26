"use client";

import { useState, useCallback } from "react";
import { ArrowRight, Heart, Plus, Sparkles, Star, Check } from "lucide-react";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CartPopup } from "./CartPopup";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";

const FILTERS = ["All", "New Arrivals", "Best Sellers", "Price: Low to High", "Price: High to Low", "Rating"] as const;

type ShopPageLayoutProps = {
  title: string;
  subtitle: string;
  eyebrow: string;
  heroGradient?: string;
  heroTextAccent?: string;
  products: Product[];
  decorColor?: string;
};

function ProductCard({ product }: { product: Product }) {
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
      <div className="relative aspect-[0.88] overflow-hidden rounded-[28px] bg-[#FFE0EB]">
        {product.badge && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-[#F6327B] px-3 py-1.5 text-[9px] font-black tracking-[1px] text-white shadow-sm">
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
            <ProductArtwork type={product.icon} />
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

const colorMap: Record<string, string> = {
  pink: "#F6327B",
  purple: "#7454D9",
  yellow: "#E4B800",
  mint: "#249D85",
};

function ProductArtwork({ type }: { type: Product["icon"] }) {
  const color = "#F6327B";
  if (type === "scrunchie") {
    return (
      <div className="flex h-40 w-40 items-center justify-center rounded-full border-[28px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-48 sm:w-48" style={{ borderColor: color }}>
        <div className="h-12 w-12 rounded-full" style={{ backgroundColor: color }} />
      </div>
    );
  }
  if (type === "clip") {
    return (
      <div className="relative">
        <div className="h-24 w-48 rotate-[-18deg] rounded-full shadow-[0_25px_40px_rgba(42,17,47,0.15)] sm:h-28 sm:w-56" style={{ backgroundColor: color }}>
          <div className="ml-5 pt-3">
            <div className="h-3 w-[80%] rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    );
  }
  if (type === "bow") {
    return (
      <div className="flex items-center">
        <div className="h-24 w-28 rotate-[-18deg] rounded-[70%_25%_70%_25%] shadow-[0_20px_30px_rgba(42,17,47,0.12)] sm:h-28 sm:w-36" style={{ backgroundColor: color }} />
        <div className="relative z-10 -mx-6 h-12 w-12 rounded-full shadow-lg sm:h-14 sm:w-14" style={{ backgroundColor: color }} />
        <div className="h-24 w-28 rotate-[18deg] rounded-[25%_70%_25%_70%] shadow-[0_20px_30px_rgba(42,17,47,0.12)] sm:h-28 sm:w-36" style={{ backgroundColor: color }} />
      </div>
    );
  }
  return (
    <div className="relative">
      <div className="h-20 w-56 rounded-full border-[17px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-24 sm:w-64" style={{ borderColor: color }} />
      <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

function ShopPageContent({ title, subtitle, eyebrow, heroGradient = "bg-[#FF5B9A]", heroTextAccent = "#F6327B", products, decorColor = "#FFB5D0" }: ShopPageLayoutProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProducts = products.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "New Arrivals") return p.isNew || p.badge === "NEW";
    if (activeFilter === "Best Sellers") return p.isBestSeller || p.badge?.includes("BEST");
    if (activeFilter === "Rating") return parseFloat(p.rating) >= 4.8;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^\d]/g, ""));
    const priceB = parseInt(b.price.replace(/[^\d]/g, ""));
    if (activeFilter === "Price: Low to High") return priceA - priceB;
    if (activeFilter === "Price: High to Low") return priceB - priceA;
    if (activeFilter === "Rating") return parseFloat(b.rating) - parseFloat(a.rating);
    return 0;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F3] text-[#29152F]">
      <Navbar />

      {/* HERO */}
      <section className="relative mx-auto grid min-h-[60vh] max-w-[1500px] grid-cols-1 items-center px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1fr_1fr] lg:px-14 lg:pb-10 lg:pt-4 xl:px-20">
        <div className="blob-move pointer-events-none absolute -left-32 top-[30%] h-72 w-72 rounded-full blur-[2px]" style={{ backgroundColor: `${decorColor}99` }} />
        <div className="blob-move pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FFE47A]/60 blur-[2px]" />
        <Sparkles className="sparkle-animation absolute left-[4%] top-[12%] rotate-12 text-[#FF6C9E]" size={48} strokeWidth={1.5} />
        <Sparkles className="sparkle-animation absolute bottom-[15%] left-[42%] text-[#A98BFF]" size={30} strokeWidth={1.5} />

        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#F6327B] sm:text-[13px]">
            <span>✦</span>
            {eyebrow}
            <span>✦</span>
          </div>
          <h1 className="text-[58px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[75px] lg:text-[76px] xl:text-[94px]">
            {title}
            <span className="block font-serif italic" style={{ color: heroTextAccent }}>
              {subtitle}
            </span>
          </h1>
          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Explore our curated collection of {title.toLowerCase()} designed to make every hair day a good one.
          </p>
          <a href="/shop" className="group mt-7 flex items-center gap-5 rounded-full bg-[#F6327B] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)]">
            SHOP ALL ACCESSORIES
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        <div className="relative mt-12 flex h-[400px] w-full items-center justify-center sm:h-[500px] lg:mt-0 lg:h-[550px]">
          <div className={`absolute right-[10%] top-[7%] h-[80%] w-[80%] rotate-[4deg] rounded-[48%_48%_32%_32%] ${heroGradient}`} />
          <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />
          <div className="absolute right-[15%] top-[10%] z-10 flex h-48 w-48 items-center justify-center rounded-full border-[30px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-56 sm:w-56" style={{ borderColor: heroTextAccent }}>
            <div className="h-16 w-16 rounded-full" style={{ backgroundColor: heroTextAccent }} />
          </div>
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />
          <div className="float-clip absolute right-[4%] top-[45%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />
          <Sparkles className="sparkle-animation absolute bottom-[15%] left-[20%] text-[#FFD84D]" size={40} />
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-col items-start justify-between gap-5 border-b border-[#29152F]/10 py-6 sm:flex-row sm:items-center">
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
          <p className="text-[11px] font-bold tracking-[1px] text-[#9A8E9D]">
            {sortedProducts.length} PRODUCTS
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={`${product.name}-${product.color}`} product={product} />
          ))}
        </div>
        {sortedProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-[#29152F]">No products found.</p>
            <p className="mt-2 text-sm text-[#66576A]">Try a different filter!</p>
          </div>
        )}
      </section>

      <Footer />
      <CartPopup />
    </main>
  );
}

export function ShopPageLayout(props: ShopPageLayoutProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <ShopPageContent {...props} />
      </CartProvider>
    </AuthProvider>
  );
}
