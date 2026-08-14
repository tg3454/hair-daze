"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Menu,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";
const bestSellers = [
  {
    name: "Cherry Pop Scrunchie",
    category: "Scrunchies",
    price: "₹299",
    rating: "4.9",
    reviews: "128",
    badge: "BESTSELLER",
    color: "pink",
    icon: "scrunchie",
  },
  {
    name: "Lavender Crush Clip",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.8",
    reviews: "96",
    badge: "TRENDING",
    color: "purple",
    icon: "clip",
  },
  {
    name: "Sunshine Bow",
    category: "Bows",
    price: "₹399",
    rating: "5.0",
    reviews: "74",
    badge: "NEW",
    color: "yellow",
    icon: "bow",
  },
  {
    name: "Mint Cloud Headband",
    category: "Headbands",
    price: "₹349",
    rating: "4.9",
    reviews: "112",
    badge: "",
    color: "mint",
    icon: "headband",
  },
];
const heroImage =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#FFF9F3] text-[#29152F]">
      {/* ================= NAVBAR ================= */}

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
          {["Shop", "New Arrivals", "Best Sellers", "Collections", "About"].map(
            (item, index) => (
              <a
                key={item}
                href="#"
                className="group flex items-center gap-1 text-[13px] font-semibold text-[#29152F] transition-colors hover:text-[#F6327B]"
              >
                {item}

                {(index === 0 || index === 3) && (
                  <span className="text-[#F6327B]">⌄</span>
                )}
              </a>
            ),
          )}
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

      {/* ================= HERO ================= */}

      <section className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-[1500px] grid-cols-1 items-center px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:pb-10 lg:pt-4 xl:px-20">
        {/* ================= BACKGROUND DECORATIONS ================= */}

        <div className="blob-move pointer-events-none absolute -left-32 top-[30%] h-72 w-72 rounded-full bg-[#FFB5D0]/60 blur-[2px]" />

        <div className="blob-move pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FFE47A]/60 blur-[2px]" />

        {/* Animated sparkle */}

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

        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:pl-8 lg:text-left">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2 text-[11px] font-bold tracking-[2px] text-[#F6327B] sm:text-[13px]">
            <span>✦</span>
            NEW SEASON, NEW YOU.
            <span>✦</span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-[700px] text-[58px] font-black leading-[0.88] tracking-[-4px] text-[#29152F] sm:text-[75px] lg:text-[76px] xl:text-[94px]">
            MAKE YOUR
            <span className="relative mx-2 inline-block font-serif italic text-[#F6327B]">
              HAIR
              <span className="absolute -bottom-1 left-0 h-[5px] w-full -rotate-2 rounded-full bg-[#FFD84D]" />
            </span>
            <br />
            THE
            <span className="block">STATEMENT.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
            Fun, stylish & high-quality hair accessories
            <br className="hidden sm:block" />
            to match every mood, every outfit, every you.
          </p>

          {/* CTA */}
          <button className="group mt-7 flex items-center gap-5 rounded-full bg-[#F6327B] px-7 py-4 text-sm font-bold tracking-wide text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)]">
            SHOP NOW
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </button>

          {/* Handwritten note */}
          <div className="mt-6 ml-40 rotate-[-6deg] font-serif text-sm italic text-[#F6327B]">
            good hair days
            <br />
            start here ♡
          </div>

          {/* Social proof */}
          <div className="mt-7 hidden items-center gap-3 lg:flex">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-8 w-8 rounded-full border-2 border-[#FFF9F3] bg-[#FFD0E0]"
                />
              ))}
            </div>

            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={11}
                    fill="#FFD84D"
                    className="text-[#FFD84D]"
                  />
                ))}
              </div>

              <p className="mt-0.5 text-[10px] font-semibold text-[#66576A]">
                Loved by 10,000+ girls
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL ================= */}

        <div className="relative mt-12 h-[540px] w-full sm:h-[650px] lg:mt-0 lg:h-[680px]">
          {/* Pink background */}
          <div className="absolute right-[5%] top-[7%] h-[82%] w-[78%] rotate-[4deg] rounded-[48%_48%_32%_32%] bg-[#FF5B9A]" />

          {/* Yellow background blob */}
          <div className="blob-move absolute bottom-[5%] right-0 h-44 w-44 rounded-full bg-[#FFD84D] sm:h-52 sm:w-52" />

          {/* Main image */}
          <div className="absolute right-[10%] top-0 z-10 h-full w-[74%] overflow-hidden rounded-[45%_45%_0_0]">
            <img
              src={heroImage}
              alt="Fashion accessories"
              className="hero-zoom h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#29152F]/10 to-transparent" />
          </div>

          {/* Purple floating clip */}
          <div className="float-clip absolute left-[5%] top-[12%] z-20 h-9 w-24 rounded-full bg-[#A98BFF] shadow-lg" />

          {/* Pink floating clip */}
          <div className="float-clip absolute right-[4%] top-[29%] z-30 h-8 w-20 rounded-full bg-[#FF76AC] shadow-lg" />

          {/* Yellow floating clip */}
          <div className="float-clip absolute bottom-[19%] left-[3%] z-30 h-8 w-20 rounded-full bg-[#FFD84D] shadow-lg" />

          {/* Floating scrunchie */}
          <div className="float-slow absolute right-[3%] top-[2%] z-30 flex h-24 w-24 items-center justify-center rounded-full border-[20px] border-[#FF4E94] shadow-xl">
            <div className="h-5 w-5 rounded-full bg-[#FFF9F3]" />
          </div>

          {/* Floating badge */}
          <div className="badge-float absolute right-[-1%] top-[40%] z-40 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-[#FFB6D1] bg-[#FFF9F3] text-center shadow-[0_15px_35px_rgba(42,17,47,0.12)] sm:h-36 sm:w-36">
            <span className="text-[11px] font-bold tracking-wide text-[#F6327B]">
              BRIGHTER DAYS
            </span>

            <span className="text-[11px] font-bold text-[#66576A]">
              BETTER HAIR
            </span>

            <Heart size={15} fill="#F6327B" className="mt-1 text-[#F6327B]" />
          </div>

          {/* Purple sparkle badge */}
          <div className="sparkle-animation absolute bottom-[13%] right-[14%] z-30 flex h-14 w-14 rotate-12 items-center justify-center rounded-full bg-[#A98BFF] text-white shadow-lg">
            <Sparkles size={25} />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="relative z-40 mx-auto mb-8 grid w-[92%] max-w-[1300px] grid-cols-1 gap-5 rounded-[28px] bg-white/90 p-6 shadow-[0_20px_60px_rgba(42,17,47,0.08)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-8">
        <Feature
          icon="✦"
          title="Trendy Designs"
          text="Stay ahead with the latest trends."
        />

        <Feature
          icon="♡"
          title="Premium Quality"
          text="Made to last, made for you."
        />

        <Feature
          icon="♧"
          title="Fast Delivery"
          text="Quick, reliable & hassle-free."
        />

        <Feature
          icon="♥"
          title="Loved by 10K+"
          text="Thousands of happy customers."
        />
      </section>
      {/* ================= SHOP BY CATEGORY ================= */}

      <section className="relative overflow-hidden bg-[#FFF1F6] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        {/* Decorative background elements */}

        <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#FFD4E4]/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E2D7FF]/60 blur-3xl" />

        <Sparkles
          className="category-spin absolute right-[8%] top-[12%] text-[#FF6C9E]"
          size={45}
          strokeWidth={1.2}
        />

        <Sparkles
          className="category-spin absolute bottom-[8%] left-[7%] text-[#A98BFF]"
          size={32}
          strokeWidth={1.2}
        />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Section heading */}

          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-[12px]">
              <span>✦</span>
              FIND YOUR FAVORITE
              <span>✦</span>
            </div>

            <h2 className="text-[48px] font-black leading-none tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              SHOP BY{" "}
              <span className="font-serif italic text-[#F6327B]">
                CATEGORY.
              </span>
            </h2>

            <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#66576A] sm:text-base">
              From everyday essentials to statement pieces,
              <br className="hidden sm:block" />
              find the little things that make your look yours.
            </p>
          </div>

          {/* Category Grid */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <CategoryCard
              title="SCRUNCHIES"
              subtitle="Soft • Fun • Everyday"
              color="pink"
              icon="scrunchie"
              number="01"
            />

            <CategoryCard
              title="HAIR CLIPS"
              subtitle="Cute • Bold • Effortless"
              color="purple"
              icon="clip"
              number="02"
            />

            <CategoryCard
              title="BOWS"
              subtitle="Pretty • Playful • Chic"
              color="yellow"
              icon="bow"
              number="03"
            />

            <CategoryCard
              title="HEADBANDS"
              subtitle="Classic • Cool • Comfy"
              color="mint"
              icon="headband"
              number="04"
            />
          </div>

          {/* Bottom line */}

          <div className="mt-14 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-[#29152F]/10 sm:w-28" />

            <p className="font-serif text-sm italic text-[#66576A] sm:text-base">
              Mix it. Match it. Make it yours.
            </p>

            <div className="h-px w-16 bg-[#29152F]/10 sm:w-28" />
          </div>
        </div>
      </section>

      {/* ================= BEST SELLERS ================= */}

      <section className="relative overflow-hidden bg-[#FFF9F3] px-5 py-24 sm:px-8 lg:px-14 xl:px-20">
        {/* Decorative blobs */}

        <div className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-[#FFD9E7]/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-[#E7DEFF]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          {/* Heading */}

          <div className="mb-14 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[3px] text-[#F6327B] sm:text-[12px]">
              <span>✦</span>
              OUR FAVORITES
              <span>✦</span>
            </div>

            <h2 className="max-w-[800px] text-[48px] font-black leading-[0.9] tracking-[-3px] text-[#29152F] sm:text-[64px] lg:text-[78px]">
              EVERYONE'S{" "}
              <span className="font-serif italic text-[#F6327B]">
                OBSESSED.
              </span>
            </h2>

            <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#66576A] sm:text-base">
              The pieces you keep coming back for.
              <br className="hidden sm:block" />
              Consider these your new hair besties.
            </p>
          </div>

          {/* Product Grid */}

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>

          {/* View all */}

          <div className="mt-14 flex justify-center">
            <button className="group flex items-center gap-4 rounded-full border-2 border-[#29152F] px-7 py-3.5 text-xs font-bold tracking-[1.5px] text-[#29152F] transition-all duration-300 hover:bg-[#29152F] hover:text-white">
              VIEW ALL PRODUCTS
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= FEATURE COMPONENT ================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-[#EDE4E9] px-3 lg:border-r lg:px-7 lg:last:border-r-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFE0EB] text-xl text-[#F6327B]">
        {icon}
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#29152F]">{title}</h3>

        <p className="mt-1 text-xs leading-5 text-[#766A7B]">{text}</p>
      </div>
    </div>
  );
}

function CategoryCard({
  title,
  subtitle,
  color,
  icon,
  number,
}: {
  title: string;
  subtitle: string;
  color: "pink" | "purple" | "yellow" | "mint";
  icon: "scrunchie" | "clip" | "bow" | "headband";
  number: string;
}) {
  const styles = {
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

  const current = styles[color];

  return (
    <a
      href="#"
      className={`group relative h-[390px] overflow-hidden rounded-[34px] ${current.card} p-7 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(42,17,47,0.15)] sm:h-[430px]`}
    >
      {/* Number */}

      <span
        className={`absolute right-7 top-6 text-xs font-bold opacity-50 ${current.text}`}
      >
        {number}
      </span>

      {/* Decorative circle */}

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
function CategoryIcon({
  type,
  accent,
}: {
  type: "scrunchie" | "clip" | "bow" | "headband";
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

function ProductCard({
  product,
}: {
  product: {
    name: string;
    category: string;
    price: string;
    rating: string;
    reviews: string;
    badge: string;
    color: "pink" | "purple" | "yellow" | "mint";
    icon: "scrunchie" | "clip" | "bow" | "headband";
  };
}) {
  const styles = {
    pink: {
      background: "bg-[#FFE0EB]",
      accent: "#F6327B",
      icon: "#F6327B",
    },

    purple: {
      background: "bg-[#E8E1FF]",
      accent: "#7454D9",
      icon: "#7454D9",
    },

    yellow: {
      background: "bg-[#FFF0B0]",
      accent: "#C69A00",
      icon: "#E4B800",
    },

    mint: {
      background: "bg-[#D7F7EE]",
      accent: "#249D85",
      icon: "#249D85",
    },
  };

  const current = styles[product.color];

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


        {/* Product artwork */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
            <ProductArtwork
              type={product.icon}
              color={current.icon}
            />
          </div>

        </div>


        {/* Quick add */}

        <button className="absolute bottom-4 left-4 right-4 z-20 flex translate-y-3 items-center justify-center gap-2 rounded-full bg-[#29152F] py-3 text-[10px] font-bold tracking-[1.5px] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#F6327B]">

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

          <p className="text-sm font-black text-[#29152F]">
            {product.price}
          </p>

          <div className="flex items-center gap-1">

            <Star
              size={12}
              fill="#FFD84D"
              className="text-[#FFD84D]"
            />

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
function ProductArtwork({
  type,
  color,
}: {
  type: "scrunchie" | "clip" | "bow" | "headband";
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