import { Heart, Plus, Star } from "lucide-react";
import type { Product, ProductIcon } from "../types";
import { useCart } from "../context/CartContext";

const productStyles = {
  pink: {
    background: "bg-[#FFE0EB]",
    icon: "#F6327B",
  },
  purple: {
    background: "bg-[#E8E1FF]",
    icon: "#7454D9",
  },
  yellow: {
    background: "bg-[#FFF0B0]",
    icon: "#E4B800",
  },
  mint: {
    background: "bg-[#D7F7EE]",
    icon: "#249D85",
  },
};

function ProductArtwork({
  type,
  color,
}: {
  type: ProductIcon;
  color: string;
}) {
  if (type === "scrunchie") {
    return (
      <div className="relative">
        <div
          className="flex h-40 w-40 items-center justify-center rounded-full border-[28px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-48 sm:w-48"
          style={{ borderColor: color }}
        >
          <div
            className="h-12 w-12 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
        <div
          className="absolute -right-3 top-2 h-6 w-6 rounded-full border-4 border-white/60"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }

  if (type === "clip") {
    return (
      <div className="relative">
        <div
          className="h-24 w-48 rotate-[-18deg] rounded-full shadow-[0_25px_40px_rgba(42,17,47,0.15)] sm:h-28 sm:w-56"
          style={{ backgroundColor: color }}
        >
          <div className="ml-5 pt-3">
            <div className="h-3 w-[80%] rounded-full bg-white/20" />
          </div>
        </div>
        <div
          className="absolute -bottom-8 right-0 h-16 w-16 rotate-12 rounded-full border-[12px]"
          style={{ borderColor: color }}
        />
      </div>
    );
  }

  if (type === "bow") {
    return (
      <div className="flex items-center">
        <div
          className="h-24 w-28 rotate-[-18deg] rounded-[70%_25%_70%_25%] shadow-[0_20px_30px_rgba(42,17,47,0.12)] sm:h-28 sm:w-36"
          style={{ backgroundColor: color }}
        />
        <div
          className="relative z-10 -mx-6 h-12 w-12 rounded-full shadow-lg sm:h-14 sm:w-14"
          style={{ backgroundColor: color }}
        />
        <div
          className="h-24 w-28 rotate-[18deg] rounded-[25%_70%_25%_70%] shadow-[0_20px_30px_rgba(42,17,47,0.12)] sm:h-28 sm:w-36"
          style={{ backgroundColor: color }}
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div
        className="h-20 w-56 rounded-full border-[17px] shadow-[0_25px_40px_rgba(42,17,47,0.12)] sm:h-24 sm:w-64"
        style={{ borderColor: color }}
      />
      <div
        className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const current = productStyles[product.color];
  const { addItem, openCart } = useCart();

  const handleAddToBag = () => {
    addItem(product);
    openCart();
  };

  return (
    <div className="group relative">
      {/* Product Image Area */}
      <div
        className={`relative aspect-[0.88] overflow-hidden rounded-[28px] ${current.background}`}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-white px-3 py-1.5 text-[9px] font-black tracking-[1px] text-[#29152F] shadow-sm">
            {product.badge}
          </div>
        )}

        {/* Wishlist */}
        <button
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#29152F] shadow-sm backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-[#F6327B] hover:text-white"
        >
          <Heart size={16} />
        </button>

        {/* Decorative circles */}
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/30 transition-transform duration-700 group-hover:scale-125" />
        <div className="absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-white/20" />

        {/* Product content: image or artwork */}
        <div className="absolute inset-0 flex items-center justify-center">
          {product.image ? (
            <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          ) : (
            <div className="transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
              <ProductArtwork type={product.icon} color={current.icon} />
            </div>
          )}
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

      {/* Product information */}
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
