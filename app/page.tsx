"use client";

import {
  ArrowRight,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

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
          {[
            "Shop",
            "New Arrivals",
            "Best Sellers",
            "Collections",
            "About",
          ].map((item, index) => (
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

            <span className="block">
              STATEMENT.
            </span>
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

            <Heart
              size={15}
              fill="#F6327B"
              className="mt-1 text-[#F6327B]"
            />

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
        <h3 className="text-sm font-bold text-[#29152F]">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#766A7B]">
          {text}
        </p>
      </div>

    </div>
  );
}