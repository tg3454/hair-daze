import type { Product, Review } from "./types";

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90";

export const NEW_DROP_IMAGE =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90";

export const NAV_LINKS = [
  "Shop",
  "New Arrivals",
  "Best Sellers",
  "Collections",
  "About",
] as const;

export const NAV_DROPDOWN_INDICES = [0, 3];

export const FEATURES = [
  {
    icon: "✦",
    title: "Trendy Designs",
    text: "Stay ahead with the latest trends.",
  },
  {
    icon: "♡",
    title: "Premium Quality",
    text: "Made to last, made for you.",
  },
  {
    icon: "♧",
    title: "Fast Delivery",
    text: "Quick, reliable & hassle-free.",
  },
  {
    icon: "♥",
    title: "Loved by 10K+",
    text: "Thousands of happy customers.",
  },
] as const;

export const CATEGORIES = [
  {
    title: "SCRUNCHIES",
    subtitle: "Soft • Fun • Everyday",
    color: "pink" as const,
    icon: "scrunchie" as const,
    number: "01",
  },
  {
    title: "HAIR CLIPS",
    subtitle: "Cute • Bold • Effortless",
    color: "purple" as const,
    icon: "clip" as const,
    number: "02",
  },
  {
    title: "BOWS",
    subtitle: "Pretty • Playful • Chic",
    color: "yellow" as const,
    icon: "bow" as const,
    number: "03",
  },
  {
    title: "HEADBANDS",
    subtitle: "Classic • Cool • Comfy",
    color: "mint" as const,
    icon: "headband" as const,
    number: "04",
  },
];

export const BEST_SELLERS: Product[] = [
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

export const MOODS = [
  {
    title: "COQUETTE",
    subtitle: "Bows, ribbons & all things pretty.",
    number: "01",
    mood: "coquette" as const,
  },
  {
    title: "Y2K",
    subtitle: "Bold colors. Big energy. Zero chill.",
    number: "02",
    mood: "y2k" as const,
  },
  {
    title: "CLEAN GIRL",
    subtitle: "Simple, polished & effortlessly cool.",
    number: "03",
    mood: "clean" as const,
  },
  {
    title: "COLOR POP",
    subtitle: "Because boring was never the plan.",
    number: "04",
    mood: "color" as const,
  },
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    name: "Ananya",
    handle: "@ananyasays",
    text: "The scrunchie is SO cute. It actually stays in my hair all day 😭💕",
    likes: "248",
    rotation: "-rotate-2",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Riya",
    handle: "@riyaaa",
    text: "Okay the bow??? Literally obsessed. Already ordering another color.",
    likes: "391",
    rotation: "rotate-1",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Mehak",
    handle: "@mehak.jpg",
    text: "Everything arrived SO pretty. Packaging deserves its own five stars ✨",
    likes: "176",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=85",
  },
];

export const FOOTER_SHOP_LINKS = [
  "All Accessories",
  "Scrunchies",
  "Hair Clips",
  "Bows",
  "Headbands",
];

export const FOOTER_HELP_LINKS = [
  "Contact Us",
  "Shipping & Delivery",
  "Returns & Exchanges",
  "FAQ",
  "Track Order",
];

export const FOOTER_ABOUT_LINKS = [
  "Our Story",
  "Journal",
  "Careers",
  "Wholesale",
  "Become a Creator",
];
