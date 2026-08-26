"use client";

import { useEffect, useRef } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";

const colorMap: Record<string, string> = {
  pink: "#F6327B",
  purple: "#7454D9",
  yellow: "#E4B800",
  mint: "#249D85",
};

const bgMap: Record<string, string> = {
  pink: "#FFE0EB",
  purple: "#E8E1FF",
  yellow: "#FFF0B0",
  mint: "#D7F7EE",
};

export function CartPopup() {
  const {
    items,
    removeItem,
    updateQuantity,
    getTotal,
    getItemCount,
    isOpen,
    closeCart,
  } = useCart();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed bottom-0 right-0 top-0 z-[101] flex w-full max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#29152F]/5 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6327B]">
              <ShoppingBag size={18} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#29152F]">Your Bag</h2>
              <p className="text-xs text-[#9A8E9D]">
                {getItemCount()} {getItemCount() === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]"
          >
            <X size={20} className="text-[#29152F]" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFE1EC]">
                <ShoppingBag size={32} className="text-[#F6327B]" />
              </div>
              <h3 className="text-lg font-bold text-[#29152F]">
                Your bag is empty
              </h3>
              <p className="mt-2 max-w-[240px] text-sm text-[#9A8E9D]">
                Time to fill it with something adorable! ✨
              </p>
              <button
                onClick={closeCart}
                className="mt-6 rounded-full bg-[#29152F] px-6 py-3 text-xs font-bold tracking-[1.5px] text-white transition hover:bg-[#F6327B]"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-4 rounded-2xl border border-[#29152F]/5 bg-[#FFF9F3] p-4 transition hover:shadow-md"
                >
                  {/* Product thumbnail */}
                  <div
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: bgMap[item.color] }}
                  >
                    <div
                      className="h-8 w-8 rounded-full shadow-sm"
                      style={{ backgroundColor: colorMap[item.color] }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-[8px] font-bold tracking-[1.5px] text-[#9A8E9D]">
                        {item.category.toUpperCase()}
                      </p>
                      <h4 className="mt-0.5 text-sm font-bold text-[#29152F]">
                        {item.name}
                      </h4>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 rounded-full border border-[#29152F]/10 bg-white">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]"
                        >
                          <Minus size={14} className="text-[#29152F]" />
                        </button>
                        <span className="min-w-[20px] text-center text-sm font-bold text-[#29152F]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]"
                        >
                          <Plus size={14} className="text-[#29152F]" />
                        </button>
                      </div>

                      {/* Price + Delete */}
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-black text-[#29152F]">
                          ₹
                          {parseInt(item.price.replace(/[^\d]/g, ""), 10) *
                            item.quantity}
                        </p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex h-8 w-8 items-center justify-center rounded-full text-[#9A8E9D] transition hover:bg-red-50 hover:text-[#F6327B]"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <div className="border-t border-[#29152F]/5 px-6 py-5">
            {/* Summary */}
            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm text-[#66576A]">
                <span>Subtotal</span>
                <span className="font-semibold">₹{getTotal()}</span>
              </div>
              <div className="flex justify-between text-sm text-[#66576A]">
                <span>Shipping</span>
                <span className="font-semibold text-[#249D85]">FREE</span>
              </div>
              <div className="my-2 h-px bg-[#29152F]/10" />
              <div className="flex justify-between">
                <span className="text-base font-bold text-[#29152F]">
                  Total
                </span>
                <span className="text-lg font-black text-[#29152F]">
                  ₹{getTotal()}
                </span>
              </div>
            </div>

            {/* Checkout button */}
            <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#F6327B] py-4 text-sm font-bold tracking-[1px] text-white shadow-lg shadow-[#F6327B]/25 transition-all duration-300 hover:bg-[#29152F] hover:shadow-[#29152F]/25">
              CHECKOUT
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {/* Free shipping note */}
            <p className="mt-3 text-center text-[10px] font-semibold tracking-[0.5px] text-[#9A8E9D]">
              🚚 FREE SHIPPING ON ALL ORDERS • SECURE CHECKOUT
            </p>
          </div>
        )}
      </div>
    </>
  );
}
