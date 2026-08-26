"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { ALL_PRODUCTS, POPULAR_SEARCHES } from "../data";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

type SearchOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
};

const colorBg: Record<string, string> = {
  pink: "#FFE0EB",
  purple: "#E8E1FF",
  yellow: "#FFF0B0",
  mint: "#D7F7EE",
};

function SearchResultCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className="group flex items-center gap-4 rounded-2xl px-4 py-3 transition-colors hover:bg-[#FFE0EB]/50"
    >
      {/* Thumbnail */}
      <div
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl overflow-hidden"
        style={{ backgroundColor: colorBg[product.color] || "#FFE0EB" }}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="h-6 w-6 rounded-full"
            style={{ backgroundColor: product.color === "pink" ? "#F6327B" : product.color === "purple" ? "#7454D9" : product.color === "yellow" ? "#E4B800" : "#249D85" }}
          />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-bold text-[#29152F] truncate">
            {product.name}
          </h4>
          {product.badge && (
            <span className="shrink-0 rounded-full bg-[#F6327B] px-2 py-0.5 text-[8px] font-black tracking-[0.5px] text-white">
              {product.badge}
            </span>
          )}
        </div>
        <p className="text-[10px] font-bold tracking-[1px] text-[#9A8E9D] mt-0.5">
          {product.category.toUpperCase()}
        </p>
      </div>

      {/* Price + Add to Cart */}
      <div className="flex items-center gap-3 shrink-0">
        <p className="text-sm font-black text-[#29152F]">{product.price}</p>
        <button
          onClick={handleAdd}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[10px] font-bold tracking-[1px] transition-all duration-300 ${
            added
              ? "bg-[#249D85] text-white"
              : "bg-[#F6327B] text-white hover:bg-[#E92870]"
          }`}
        >
          {added ? (
            <>ADDED ✦</>
          ) : (
            <>ADD TO CART +</>
          )}
        </button>
      </div>
    </div>
  );
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on escape, navigate on enter
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Enter" && query.trim()) {
        window.location.href = `/shop`;
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, query]);

  // Close on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, onClose]);

  // Search results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return ALL_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.badge.toLowerCase().includes(q)
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;
  const showResults = hasQuery && results.length > 0;
  const showNoResults = hasQuery && results.length === 0;

  // Deduplicate by name
  const uniqueResults = useMemo(() => {
    const seen = new Set<string>();
    return results.filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });
  }, [results]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed left-0 right-0 top-[82px] z-[91] mx-auto max-w-[820px] rounded-b-[28px] border border-[#29152F]/5 bg-[#FFF9F3] shadow-[0_30px_80px_rgba(42,17,47,0.18)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="max-h-[75vh] overflow-y-auto p-6 sm:p-8">
          {/* Header */}
          <div className="mb-5 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#F6327B]">
            <Sparkles size={14} />
            WHAT ARE YOU LOOKING FOR?
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-[#9A8E9D]"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search clips, bows, scrunchies..."
              className="h-14 w-full rounded-full border-2 border-[#29152F]/8 bg-white pl-14 pr-14 text-sm font-medium text-[#29152F] outline-none placeholder:text-[#9A8E9D] transition-all duration-300 focus:border-[#F6327B] focus:shadow-[0_0_0_4px_rgba(246,50,123,0.08)]"
            />
            {hasQuery && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[#9A8E9D] transition-colors hover:bg-[#FFE1EC] hover:text-[#F6327B]"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Popular searches (shown when no query) */}
          {!hasQuery && (
            <div className="mt-6">
              <p className="mb-3 text-[9px] font-bold tracking-[2px] text-[#9A8E9D]">
                POPULAR SEARCHES
              </p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-full border border-[#29152F]/8 bg-white px-4 py-2.5 text-[11px] font-bold text-[#29152F] transition-all duration-300 hover:border-[#F6327B] hover:bg-[#FFE0EB] hover:text-[#F6327B]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search results */}
          {showResults && (
            <div className="mt-6">
              <p className="mb-3 text-[9px] font-bold tracking-[2px] text-[#9A8E9D]">
                RESULTS ({uniqueResults.length})
              </p>
              <div className="space-y-1">
                {uniqueResults.map((product) => (
                  <SearchResultCard
                    key={`${product.name}-${product.color}`}
                    product={product}
                  />
                ))}
              </div>

              {/* View all results */}
              <div className="mt-4 border-t border-[#29152F]/5 pt-4">
                <a
                  href={`/shop`}
                  onClick={onClose}
                  className="group flex items-center gap-2 text-[11px] font-bold tracking-[1px] text-[#F6327B] transition-colors hover:text-[#E92870]"
                >
                  VIEW ALL RESULTS
                  <ArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          )}

          {/* No results */}
          {showNoResults && (
            <div className="mt-10 flex flex-col items-center text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFE1EC]">
                <Search size={30} className="text-[#F6327B]" />
              </div>
              <p className="text-lg font-bold text-[#29152F]">
                NO DAZE FOUND{" "}
                <span className="text-[#F6327B]">✦</span>
              </p>
              <p className="mt-2 text-sm text-[#66576A]">
                Try searching for another accessory.
              </p>
              <a
                href="/best-sellers"
                onClick={onClose}
                className="mt-6 rounded-full bg-[#F6327B] px-6 py-3 text-[10px] font-bold tracking-[1.5px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_12px_30px_rgba(246,50,123,0.25)]"
              >
                EXPLORE BEST SELLERS
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
