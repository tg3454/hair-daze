import { Menu, Search, ShoppingBag, Sparkles, UserRound } from "lucide-react";
import { NAV_LINKS, NAV_DROPDOWN_INDICES } from "../data";

export function Navbar() {
  return (
    <nav className="relative z-50 flex h-[82px] items-center justify-between border-b border-[#29152F]/5 px-5 sm:px-8 lg:px-16">
      {/* Logo */}
      <a href="#" className="relative shrink-0">
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
        {NAV_LINKS.map((item, index) => (
          <a
            key={item}
            href="#"
            className="group flex items-center gap-1 text-[13px] font-semibold text-[#29152F] transition-colors hover:text-[#F6327B]"
          >
            {item}
            {NAV_DROPDOWN_INDICES.includes(index) && (
              <span className="text-[#F6327B]">⌄</span>
            )}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="hidden items-center gap-1 sm:flex">
        <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]">
          <Search size={19} />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]">
          <UserRound size={19} />
        </button>
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FFE1EC]">
          <ShoppingBag size={20} />
          <span className="absolute right-0 top-0 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#F6327B] text-[9px] font-bold text-white">
            2
          </span>
        </button>
      </div>

      {/* Mobile */}
      <button className="flex h-10 w-10 items-center justify-center rounded-full sm:hidden">
        <Menu size={23} />
      </button>
    </nav>
  );
}
