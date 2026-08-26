import { ArrowUpRight } from "lucide-react";
import type { ProductColor, ProductIcon } from "../types";

const categoryStyles = {
  pink: {
    card: "bg-[#FF7EAD]",
    accent: "bg-[#FFD3E3]",
    text: "text-[#54152F]",
    button: "bg-[#FFF1F6]",
  },
  purple: {
    card: "bg-[#B49AFF]",
    accent: "bg-[#E5DEFF]",
    text: "text-[#30204C]",
    button: "bg-[#F4F0FF]",
  },
  yellow: {
    card: "bg-[#FFD84D]",
    accent: "bg-[#FFF1B5]",
    text: "text-[#493C08]",
    button: "bg-[#FFF9DD]",
  },
  mint: {
    card: "bg-[#75DFC4]",
    accent: "bg-[#C9F5E8]",
    text: "text-[#17483D]",
    button: "bg-[#EDFFF9]",
  },
};

function CategoryIcon({
  type,
  accent,
}: {
  type: ProductIcon;
  accent: string;
}) {
  if (type === "scrunchie") {
    return (
      <div className="category-float relative">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border-[34px] border-[#F6327B] shadow-[0_20px_35px_rgba(246,50,123,0.25)]">
          <div className="h-14 w-14 rounded-full bg-[#FF7EAD]" />
        </div>
        <div className="absolute -right-5 top-2 h-8 w-8 rounded-full bg-white/50 blur-sm" />
      </div>
    );
  }

  if (type === "clip") {
    return (
      <div className="category-float-reverse relative">
        <div className="relative h-28 w-52 rotate-[-18deg] rounded-full bg-[#7B5BE7] shadow-[0_20px_35px_rgba(60,35,130,0.25)]">
          <div className="absolute left-4 top-3 h-4 w-[80%] rounded-full bg-white/20" />
          <div className="absolute bottom-3 left-6 h-2 w-[70%] rounded-full bg-black/10" />
        </div>
        <div className="absolute -bottom-8 right-0 h-20 w-20 rotate-12 rounded-[50%] border-[14px] border-[#8E75F2]" />
      </div>
    );
  }

  if (type === "bow") {
    return (
      <div className="category-float relative">
        <div className="flex items-center">
          <div className="h-28 w-36 rotate-[-18deg] rounded-[70%_25%_70%_25%] bg-[#F8B900] shadow-[0_20px_30px_rgba(130,90,0,0.2)]" />
          <div className="relative z-10 -mx-7 h-14 w-14 rounded-full bg-[#E3A900] shadow-lg" />
          <div className="h-28 w-36 rotate-[18deg] rounded-[25%_70%_25%_70%] bg-[#F8B900] shadow-[0_20px_30px_rgba(130,90,0,0.2)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="category-float-reverse relative">
      <div className="h-24 w-64 rounded-full border-[20px] border-[#249D85] shadow-[0_20px_35px_rgba(20,100,80,0.2)]" />
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#75DFC4]" />
    </div>
  );
}

const CATEGORY_ROUTES: Record<string, string> = {
  SCRUNCHIES: "/shop/scrunchies",
  "HAIR CLIPS": "/shop/hair-clips",
  BOWS: "/shop/bows",
  HEADBANDS: "/shop/headbands",
};

export function CategoryCard({
  title,
  subtitle,
  color,
  icon,
  number,
}: {
  title: string;
  subtitle: string;
  color: ProductColor;
  icon: ProductIcon;
  number: string;
}) {
  const current = categoryStyles[color];

  return (
    <a
      href={CATEGORY_ROUTES[title] || "/shop"}
      className={`group relative h-[390px] overflow-hidden rounded-[34px] ${current.card} p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(42,17,47,0.15)] sm:h-[430px]`}
    >
      {/* Number */}
      <span
        className={`absolute right-7 top-6 text-xs font-bold opacity-50 ${current.text}`}
      >
        {number}
      </span>

      {/* Decorative circles */}
      <div
        className={`absolute -right-20 -top-20 h-52 w-52 rounded-full ${current.accent} opacity-60 transition-transform duration-700 group-hover:scale-125`}
      />
      <div
        className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full ${current.accent} opacity-40`}
      />

      {/* Category icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CategoryIcon type={icon} accent={current.accent} />
      </div>

      {/* Text */}
      <div className="absolute bottom-7 left-7 right-7 z-10">
        <p
          className={`mb-1 text-[10px] font-bold tracking-[2px] opacity-60 ${current.text}`}
        >
          SHOP
        </p>
        <h3
          className={`text-[29px] font-black tracking-[-1.5px] ${current.text}`}
        >
          {title}
        </h3>
        <p className={`mt-1 text-xs font-medium opacity-70 ${current.text}`}>
          {subtitle}
        </p>

        {/* CTA */}
        <div className="mt-5 flex items-center justify-between">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-full ${current.button} ${current.text} transition-all duration-300 group-hover:translate-x-2 group-hover:rotate-12`}
          >
            <ArrowUpRight size={18} />
          </span>
          <span
            className={`text-[10px] font-bold tracking-[2px] opacity-50 ${current.text}`}
          >
            EXPLORE
          </span>
        </div>
      </div>
    </a>
  );
}
