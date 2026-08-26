"use client";

import {
  User,
  Package,
  Heart,
  Bookmark,
  MapPin,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

type AccountDropdownProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MENU_ITEMS = [
  { icon: User, label: "My Account" },
  { icon: Package, label: "My Orders" },
  { icon: Heart, label: "Wishlist" },
  { icon: Bookmark, label: "Saved Items" },
  { icon: MapPin, label: "Addresses" },
];

export function AccountDropdown({
  isOpen,
  onClose,
}: AccountDropdownProps) {
  const { user, signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    onClose();
  };

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
        className={`absolute right-0 top-full z-50 mt-2 w-[260px] rounded-[22px] border border-[#29152F]/5 bg-[#FFF9F3] shadow-[0_30px_80px_rgba(42,17,47,0.15)] transition-all duration-400 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="border-b border-[#29152F]/5 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFE0EB]">
              <span className="text-lg font-bold text-[#F6327B]">
                {user?.name?.charAt(0)}
              </span>
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-sm font-bold text-[#29152F]">
                Hi, {user?.name} <Sparkles size={12} className="text-[#F6327B]" />
              </p>
              <p className="text-[10px] text-[#9A8E9D]">{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Menu items */}
        <div className="p-2.5">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={onClose}
              className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-[13px] font-medium text-[#29152F] transition-colors hover:bg-[#FFE0EB]/60"
            >
              <item.icon
                size={16}
                className="text-[#F6327B] transition-transform duration-200 group-hover:scale-110"
              />
              {item.label}
            </button>
          ))}
        </div>

        {/* Sign out */}
        <div className="border-t border-[#29152F]/5 p-2.5">
          <button
            onClick={handleSignOut}
            className="group flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-[13px] font-medium text-[#66576A] transition-colors hover:bg-red-50 hover:text-[#F6327B]"
          >
            <LogOut
              size={16}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
