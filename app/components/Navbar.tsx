"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Menu, Search, ShoppingBag, Sparkles, UserRound } from "lucide-react";
import { NAV_LINKS } from "../data";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { ShopDropdown } from "./ShopDropdown";
import { CollectionsDropdown } from "./CollectionsDropdown";
import { SearchOverlay } from "./SearchOverlay";
import { AuthModal } from "./AuthModal";
import { AccountDropdown } from "./AccountDropdown";

const PAGE_LINKS: Record<string, string> = {
  "New Arrivals": "/new-arrivals",
  "Best Sellers": "/best-sellers",
  About: "/about",
};

export function Navbar() {
  const { openCart, getItemCount } = useCart();
  const { isAuthenticated } = useAuth();
  const count = getItemCount();

  // ── Dropdown state ──
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Search state ──
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // ── Auth state ──
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState<"signin" | "signup" | "forgot">(
    "signin"
  );

  // ── Account dropdown state ──
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const clearDropdownTimeout = useCallback(() => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleDropdownEnter = useCallback(
    (name: string) => {
      clearDropdownTimeout();
      setActiveDropdown(name);
    },
    [clearDropdownTimeout]
  );

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // Close everything when search opens
  const handleSearchOpen = useCallback(() => {
    setActiveDropdown(null);
    setIsAccountOpen(false);
    setIsSearchOpen(true);
  }, []);

  const handleSearchClose = useCallback(() => {
    setIsSearchOpen(false);
  }, []);

  // Account icon click handler
  const handleAccountClick = useCallback(() => {
    if (isAuthenticated) {
      setIsSearchOpen(false);
      setActiveDropdown(null);
      setIsAccountOpen((prev) => !prev);
    } else {
      setIsSearchOpen(false);
      setIsAccountOpen(false);
      setAuthView("signin");
      setIsAuthOpen(true);
    }
  }, [isAuthenticated]);

  const handleAuthClose = useCallback(() => {
    setIsAuthOpen(false);
  }, []);

  const handleAccountClose = useCallback(() => {
    setIsAccountOpen(false);
  }, []);

  const isShopOpen = activeDropdown === "Shop";
  const isCollectionsOpen = activeDropdown === "Collections";

  return (
    <>
      <nav className="relative z-50 flex h-[82px] items-center justify-between border-b border-[#29152F]/5 px-5 sm:px-8 lg:px-16">
        {/* Logo */}
        <a href="/" className="relative shrink-0">
          <div className="text-[25px] font-black tracking-[-1.5px]">
            <span className="text-[#F6327B]">HAIR</span>DAZE
          </div>
          <div className="text-[7px] font-bold tracking-[3px] text-[#F6327B]">
            HAIR ACCESSORIES
          </div>
          <Sparkles
            size={12}
            className="absolute -right-3 -top-2 text-[#F6327B]"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((item) => {
            const hasDropdown = item === "Shop" || item === "Collections";
            const isDropdownOpen =
              (item === "Shop" && isShopOpen) ||
              (item === "Collections" && isCollectionsOpen);
            const pageLink = PAGE_LINKS[item];

            return (
              <div
                key={item}
                className="relative"
                onMouseEnter={() =>
                  hasDropdown ? handleDropdownEnter(item) : undefined
                }
                onMouseLeave={() =>
                  hasDropdown ? handleDropdownLeave() : undefined
                }
              >
                {pageLink ? (
                  <a
                    href={pageLink}
                    className="group flex items-center gap-1 text-[13px] font-semibold text-[#29152F] transition-colors hover:text-[#F6327B]"
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    onClick={() =>
                      isDropdownOpen ? closeDropdown() : setActiveDropdown(item)
                    }
                    className={`group flex items-center gap-1 text-[13px] font-semibold transition-colors hover:text-[#F6327B] ${
                      isDropdownOpen ? "text-[#F6327B]" : "text-[#29152F]"
                    }`}
                  >
                    {item}
                    {hasDropdown && (
                      <span
                        className={`text-[#F6327B] transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      >
                        ⌄
                      </span>
                    )}
                  </button>
                )}

                {/* Shop Dropdown */}
                {item === "Shop" && (
                  <ShopDropdown isOpen={isShopOpen} onClose={closeDropdown} />
                )}

                {/* Collections Dropdown */}
                {item === "Collections" && (
                  <CollectionsDropdown
                    isOpen={isCollectionsOpen}
                    onClose={closeDropdown}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-1 sm:flex">
          {/* Search button */}
          <button
            onClick={handleSearchOpen}
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isSearchOpen
                ? "bg-[#FFE1EC] text-[#F6327B]"
                : "hover:bg-[#FFE1EC]"
            }`}
          >
            <Search size={19} />
          </button>

          {/* Account button */}
          <button
            onClick={handleAccountClick}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              isAccountOpen || isAuthOpen
                ? "bg-[#FFE1EC] text-[#F6327B]"
                : "hover:bg-[#FFE1EC]"
            }`}
          >
            <UserRound size={19} />
            {isAuthenticated && (
              <span className="absolute right-0 top-0 h-[7px] w-[7px] rounded-full bg-[#249D85] ring-2 ring-[#FFF9F3]" />
            )}
          </button>

          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]"
          >
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute right-0 top-0 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#F6327B] text-[9px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full sm:hidden">
          <Menu size={23} />
        </button>
      </nav>

      {/* ── Search Overlay ── */}
      <SearchOverlay isOpen={isSearchOpen} onClose={handleSearchClose} />

      {/* ── Auth Modal ── */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={handleAuthClose}
        initialView={authView}
      />

      {/* ── Account Dropdown (logged-in) ── */}
      {isAuthenticated && (
        <div className="fixed right-24 top-[68px] z-50 hidden lg:block">
          <AccountDropdown
            isOpen={isAccountOpen}
            onClose={handleAccountClose}
          />
        </div>
      )}
    </>
  );
}
