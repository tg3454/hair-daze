import type { Product, Review, Collection, BrandValue, BestsellerHighlight } from "./types";

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90";

export const NEW_DROP_IMAGE =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=90";

export const NEW_ARRIVALS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=90";

export const BEST_SELLERS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=90";

export const ABOUT_HERO_IMAGE =
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=90";

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

// ── New Arrivals Products ──────────────────────────────────────

export const NEW_ARRIVALS_PRODUCTS: Product[] = [
  {
    name: "Pearl Bow Clip",
    category: "Hair Clips",
    price: "₹349",
    rating: "4.9",
    reviews: "42",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Pink Satin Scrunchie",
    category: "Scrunchies",
    price: "₹249",
    rating: "4.8",
    reviews: "35",
    badge: "NEW",
    color: "pink",
    icon: "scrunchie",
    image:
      "https://images.unsplash.com/photo-1620218965498-c7871d1c4d8e?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Crystal Hair Pin",
    category: "Hair Pins",
    price: "₹199",
    rating: "4.7",
    reviews: "28",
    badge: "NEW",
    color: "purple",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Butterfly Claw Clip",
    category: "Claw Clips",
    price: "₹329",
    rating: "5.0",
    reviews: "56",
    badge: "NEW",
    color: "purple",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Velvet Bow Barrette",
    category: "Bows",
    price: "₹449",
    rating: "4.9",
    reviews: "33",
    badge: "",
    color: "pink",
    icon: "bow",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Rhinestone Headband",
    category: "Headbands",
    price: "₹549",
    rating: "4.8",
    reviews: "21",
    badge: "NEW",
    color: "mint",
    icon: "headband",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Mini Pearl Clips",
    category: "Hair Clips",
    price: "₹179",
    rating: "4.6",
    reviews: "67",
    badge: "",
    color: "yellow",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Flower Hair Claw",
    category: "Claw Clips",
    price: "₹299",
    rating: "4.7",
    reviews: "44",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=85",
  },
];

// ── Best Sellers Products ──────────────────────────────────────

export const ALL_BESTSELLERS: Product[] = [
  {
    name: "Signature Pink Bow",
    category: "Bows",
    price: "₹399",
    rating: "5.0",
    reviews: "214",
    badge: "BEST SELLER",
    color: "pink",
    icon: "bow",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Pearl Butterfly Clip",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.9",
    reviews: "189",
    badge: "BEST SELLER",
    color: "purple",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Luxe Velvet Scrunchie",
    category: "Scrunchies",
    price: "₹349",
    rating: "4.8",
    reviews: "167",
    badge: "BEST SELLER",
    color: "pink",
    icon: "scrunchie",
    image:
      "https://images.unsplash.com/photo-1620218965498-c7871d1c4d8e?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Crystal Claw Clip",
    category: "Claw Clips",
    price: "₹449",
    rating: "4.9",
    reviews: "143",
    badge: "BEST SELLER",
    color: "yellow",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Satin Ribbon Bow",
    category: "Bows",
    price: "₹279",
    rating: "4.7",
    reviews: "132",
    badge: "",
    color: "pink",
    icon: "bow",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Pearl Headband",
    category: "Headbands",
    price: "₹499",
    rating: "4.9",
    reviews: "156",
    badge: "BEST SELLER",
    color: "mint",
    icon: "headband",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Rhinestone Hair Pin",
    category: "Hair Pins",
    price: "₹199",
    rating: "4.8",
    reviews: "98",
    badge: "",
    color: "purple",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=85",
  },
  {
    name: "Heart Claw Clip",
    category: "Claw Clips",
    price: "₹329",
    rating: "5.0",
    reviews: "187",
    badge: "BEST SELLER",
    color: "pink",
    icon: "clip",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=85",
  },
];

// ── Bestseller Highlights ──────────────────────────────────────

export const BESTSELLER_HIGHLIGHTS: BestsellerHighlight[] = [
  {
    name: "Signature Pink Bow",
    description:
      "Our iconic oversized bow in the softest blush pink. The piece that started it all.",
    price: "₹399",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Pearl Butterfly Clip",
    description:
      "Delicate pearl detailing meets a butterfly silhouette. Pure elegance for any occasion.",
    price: "₹299",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Pearl Headband",
    description:
      "A statement headband lined with hand-placed pearls. Instant main character energy.",
    price: "₹499",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=85",
  },
];

// ── Shop Categories ────────────────────────────────────────────

export const SHOP_CATEGORIES = [
  "Hair Clips",
  "Claw Clips",
  "Scrunchies",
  "Bows & Ribbons",
  "Headbands",
  "Hair Pins",
  "All Accessories",
];

// ── Collections ────────────────────────────────────────────────

export const COLLECTIONS: Collection[] = [
  {
    title: "THE PINK EDIT",
    description: "Pink, feminine and playful accessories.",
    color: "bg-[#FFB8D2]",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "PEARL DREAMS",
    description: "Elegant pearl-inspired pieces for timeless beauty.",
    color: "bg-[#E8E1FF]",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "Y2K GLOW",
    description: "Bold, nostalgic pieces straight from the 2000s.",
    color: "bg-[#A98BFF]",
    image:
      "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "GARDEN PARTY",
    description: "Floral and nature-inspired accessories.",
    color: "bg-[#75DFC4]",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=85",
  },
  {
    title: "SPARKLE STUDIO",
    description: "Crystal and rhinestone accessories that catch every light.",
    color: "bg-[#FFD84D]",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=85",
  },
];

// ── About Page Data ────────────────────────────────────────────

export const BRAND_VALUES: BrandValue[] = [
  {
    number: "01",
    title: "STYLE",
    text: "Accessories that turn simple hair days into statement moments.",
    bg: "bg-[#FFB8D2]",
  },
  {
    number: "02",
    title: "QUALITY",
    text: "Thoughtfully designed pieces made to look beautiful and last.",
    bg: "bg-[#E8E1FF]",
  },
  {
    number: "03",
    title: "SELF EXPRESSION",
    text: "Because your hairstyle should feel as unique as you.",
    bg: "bg-[#FFD84D]",
  },
  {
    number: "04",
    title: "FUN",
    text: "More colour. More sparkle. More reasons to play with your look.",
    bg: "bg-[#FFD0E0]",
  },
];

export const ABOUT_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=85",
    caption: "DESIGNED WITH LOVE",
  },
  {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=85",
    caption: "MADE TO BE NOTICED",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=85",
    caption: "CREATED FOR YOUR EVERYDAY DAZE",
  },
];

// ── Social Proof (Best Sellers page) ───────────────────────────

export const SOCIAL_PROOF_REVIEWS: Review[] = [
  {
    name: "Priya",
    handle: "@priya.luv",
    text: "I've bought 5 pieces already. Every single one is amazing quality and so cute!",
    likes: "312",
    rotation: "-rotate-1",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Sara",
    handle: "@sarawearsthis",
    text: "The pearl headband is EVERYTHING. I get compliments every single time I wear it.",
    likes: "287",
    rotation: "rotate-1",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Nisha",
    handle: "@nishastyle",
    text: "Best hair accessories brand, period. The packaging alone is chef's kiss ✨",
    likes: "198",
    rotation: "-rotate-2",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Aisha",
    handle: "@aisha.styles",
    text: "I'm literally obsessed. My friends keep asking where I got my clips from!",
    likes: "256",
    rotation: "rotate-2",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  },
];

export const POPULAR_SEARCHES = [
  "Claw Clips",
  "Bows",
  "Scrunchies",
  "Pearl",
  "Headbands",
  "Best Sellers",
];

// ── Category Products ─────────────────────────────────────────

export const SCRUNCHIES_PRODUCTS: Product[] = [
  {
    name: "Cherry Pop Scrunchie",
    category: "Scrunchies",
    price: "₹299",
    rating: "4.9",
    reviews: "128",
    badge: "BESTSELLER",
    color: "pink",
    icon: "scrunchie",
    isBestSeller: true,
  },
  {
    name: "Bubblegum Scrunchie",
    category: "Scrunchies",
    price: "₹249",
    rating: "4.7",
    reviews: "89",
    badge: "NEW",
    color: "pink",
    icon: "scrunchie",
    isNew: true,
  },
  {
    name: "Velvet Pink Scrunchie",
    category: "Scrunchies",
    price: "₹349",
    rating: "4.8",
    reviews: "76",
    badge: "",
    color: "pink",
    icon: "scrunchie",
  },
  {
    name: "Lavender Cloud Scrunchie",
    category: "Scrunchies",
    price: "₹299",
    rating: "4.9",
    reviews: "92",
    badge: "",
    color: "purple",
    icon: "scrunchie",
  },
  {
    name: "Satin Bow Scrunchie",
    category: "Scrunchies",
    price: "₹399",
    rating: "5.0",
    reviews: "64",
    badge: "NEW",
    color: "yellow",
    icon: "scrunchie",
    isNew: true,
  },
  {
    name: "Pearl Scrunchie",
    category: "Scrunchies",
    price: "₹449",
    rating: "4.8",
    reviews: "55",
    badge: "",
    color: "mint",
    icon: "scrunchie",
  },
];

export const HAIR_CLIPS_PRODUCTS: Product[] = [
  {
    name: "Lavender Crush Clip",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.8",
    reviews: "96",
    badge: "TRENDING",
    color: "purple",
    icon: "clip",
    isBestSeller: true,
  },
  {
    name: "Pearl Butterfly Clip",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.9",
    reviews: "112",
    badge: "BEST SELLER",
    color: "purple",
    icon: "clip",
    isBestSeller: true,
  },
  {
    name: "Crystal Claw Clip",
    category: "Hair Clips",
    price: "₹349",
    rating: "4.9",
    reviews: "84",
    badge: "",
    color: "yellow",
    icon: "clip",
  },
  {
    name: "Pink Daisy Clip",
    category: "Hair Clips",
    price: "₹199",
    rating: "4.7",
    reviews: "67",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    isNew: true,
  },
  {
    name: "Mini Pearl Clips",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.6",
    reviews: "58",
    badge: "",
    color: "mint",
    icon: "clip",
  },
  {
    name: "Cherry Claw Clip",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.8",
    reviews: "72",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    isNew: true,
  },
];

export const BOWS_PRODUCTS: Product[] = [
  {
    name: "Sunshine Bow",
    category: "Bows",
    price: "₹399",
    rating: "5.0",
    reviews: "74",
    badge: "NEW",
    color: "yellow",
    icon: "bow",
    isNew: true,
  },
  {
    name: "Pink Satin Bow",
    category: "Bows",
    price: "₹349",
    rating: "4.9",
    reviews: "98",
    badge: "BESTSELLER",
    color: "pink",
    icon: "bow",
    isBestSeller: true,
  },
  {
    name: "Coquette Ribbon Bow",
    category: "Bows",
    price: "₹449",
    rating: "4.8",
    reviews: "63",
    badge: "",
    color: "pink",
    icon: "bow",
  },
  {
    name: "Pearl Bow",
    category: "Bows",
    price: "₹499",
    rating: "5.0",
    reviews: "45",
    badge: "",
    color: "purple",
    icon: "bow",
  },
  {
    name: "Mini Bow Set",
    category: "Bows",
    price: "₹299",
    rating: "4.7",
    reviews: "106",
    badge: "BESTSELLER",
    color: "yellow",
    icon: "bow",
    isBestSeller: true,
  },
  {
    name: "Velvet Statement Bow",
    category: "Bows",
    price: "₹549",
    rating: "4.9",
    reviews: "38",
    badge: "NEW",
    color: "pink",
    icon: "bow",
    isNew: true,
  },
];

export const HEADBANDS_PRODUCTS: Product[] = [
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
  {
    name: "Rhinestone Headband",
    category: "Headbands",
    price: "₹549",
    rating: "4.8",
    reviews: "48",
    badge: "NEW",
    color: "purple",
    icon: "headband",
    isNew: true,
  },
  {
    name: "Pearl Headband",
    category: "Headbands",
    price: "₹499",
    rating: "4.9",
    reviews: "156",
    badge: "BEST SELLER",
    color: "pink",
    icon: "headband",
    isBestSeller: true,
  },
  {
    name: "Satin Knot Headband",
    category: "Headbands",
    price: "₹399",
    rating: "4.7",
    reviews: "67",
    badge: "",
    color: "yellow",
    icon: "headband",
  },
  {
    name: "Crystal Party Headband",
    category: "Headbands",
    price: "₹599",
    rating: "5.0",
    reviews: "29",
    badge: "NEW",
    color: "mint",
    icon: "headband",
    isNew: true,
  },
  {
    name: "Soft Pink Headband",
    category: "Headbands",
    price: "₹299",
    rating: "4.8",
    reviews: "82",
    badge: "",
    color: "pink",
    icon: "headband",
  },
];

export const ALL_CATEGORY_PRODUCTS: Product[] = [
  ...SCRUNCHIES_PRODUCTS,
  ...HAIR_CLIPS_PRODUCTS,
  ...BOWS_PRODUCTS,
  ...HEADBANDS_PRODUCTS,
];

// ── Vibe Products ─────────────────────────────────────────────

export const COQUETTE_PRODUCTS: Product[] = [
  {
    name: "Pink Satin Bows",
    category: "Bows",
    price: "₹349",
    rating: "4.9",
    reviews: "98",
    badge: "BESTSELLER",
    color: "pink",
    icon: "bow",
    isBestSeller: true,
  },
  {
    name: "Pearl Clips",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.8",
    reviews: "112",
    badge: "",
    color: "pink",
    icon: "clip",
  },
  {
    name: "Ribbon Scrunchies",
    category: "Scrunchies",
    price: "₹249",
    rating: "4.7",
    reviews: "76",
    badge: "NEW",
    color: "pink",
    icon: "scrunchie",
    isNew: true,
  },
  {
    name: "Bow Headbands",
    category: "Headbands",
    price: "₹399",
    rating: "4.9",
    reviews: "54",
    badge: "",
    color: "pink",
    icon: "headband",
  },
  {
    name: "Pearl Hair Pins",
    category: "Hair Pins",
    price: "₹199",
    rating: "4.6",
    reviews: "89",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    isNew: true,
  },
  {
    name: "Romantic Hair Set",
    category: "Bows",
    price: "₹599",
    rating: "5.0",
    reviews: "43",
    badge: "BESTSELLER",
    color: "pink",
    icon: "bow",
    isBestSeller: true,
  },
];

export const Y2K_PRODUCTS: Product[] = [
  {
    name: "Butterfly Clips",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.9",
    reviews: "134",
    badge: "BESTSELLER",
    color: "purple",
    icon: "clip",
    isBestSeller: true,
  },
  {
    name: "Glossy Claw Clips",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.8",
    reviews: "87",
    badge: "NEW",
    color: "purple",
    icon: "clip",
    isNew: true,
  },
  {
    name: "Colourful Mini Clips",
    category: "Hair Clips",
    price: "₹199",
    rating: "4.7",
    reviews: "96",
    badge: "",
    color: "yellow",
    icon: "clip",
  },
  {
    name: "Rhinestone Accessories",
    category: "Hair Pins",
    price: "₹349",
    rating: "4.9",
    reviews: "58",
    badge: "NEW",
    color: "purple",
    icon: "clip",
    isNew: true,
  },
  {
    name: "Chunky Hair Clips",
    category: "Hair Clips",
    price: "₹279",
    rating: "4.8",
    reviews: "72",
    badge: "",
    color: "purple",
    icon: "clip",
  },
  {
    name: "Statement Headbands",
    category: "Headbands",
    price: "₹449",
    rating: "5.0",
    reviews: "41",
    badge: "BESTSELLER",
    color: "mint",
    icon: "headband",
    isBestSeller: true,
  },
];

export const CLEAN_GIRL_PRODUCTS: Product[] = [
  {
    name: "Minimal Pearl Clips",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.9",
    reviews: "95",
    badge: "BESTSELLER",
    color: "mint",
    icon: "clip",
    isBestSeller: true,
  },
  {
    name: "Neutral Headbands",
    category: "Headbands",
    price: "₹349",
    rating: "4.8",
    reviews: "68",
    badge: "",
    color: "mint",
    icon: "headband",
  },
  {
    name: "Cream Scrunchies",
    category: "Scrunchies",
    price: "₹229",
    rating: "4.7",
    reviews: "112",
    badge: "NEW",
    color: "yellow",
    icon: "scrunchie",
    isNew: true,
  },
  {
    name: "Simple Claw Clips",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.8",
    reviews: "54",
    badge: "",
    color: "mint",
    icon: "clip",
  },
  {
    name: "Satin Hair Ties",
    category: "Scrunchies",
    price: "₹199",
    rating: "4.6",
    reviews: "87",
    badge: "NEW",
    color: "mint",
    icon: "scrunchie",
    isNew: true,
  },
  {
    name: "Minimal Hair Pins",
    category: "Hair Pins",
    price: "₹179",
    rating: "4.7",
    reviews: "64",
    badge: "",
    color: "mint",
    icon: "clip",
  },
];

export const COLOR_POP_PRODUCTS: Product[] = [
  {
    name: "Rainbow Clips",
    category: "Hair Clips",
    price: "₹249",
    rating: "4.9",
    reviews: "118",
    badge: "BESTSELLER",
    color: "yellow",
    icon: "clip",
    isBestSeller: true,
  },
  {
    name: "Bright Claw Clips",
    category: "Hair Clips",
    price: "₹299",
    rating: "4.8",
    reviews: "76",
    badge: "NEW",
    color: "pink",
    icon: "clip",
    isNew: true,
  },
  {
    name: "Colour Pop Scrunchies",
    category: "Scrunchies",
    price: "₹249",
    rating: "4.7",
    reviews: "93",
    badge: "",
    color: "yellow",
    icon: "scrunchie",
  },
  {
    name: "Neon Bows",
    category: "Bows",
    price: "₹349",
    rating: "4.9",
    reviews: "52",
    badge: "NEW",
    color: "yellow",
    icon: "bow",
    isNew: true,
  },
  {
    name: "Colourful Headbands",
    category: "Headbands",
    price: "₹399",
    rating: "4.8",
    reviews: "47",
    badge: "",
    color: "mint",
    icon: "headband",
  },
  {
    name: "Multi-colour Pin Sets",
    category: "Hair Pins",
    price: "₹299",
    rating: "5.0",
    reviews: "61",
    badge: "BESTSELLER",
    color: "purple",
    icon: "clip",
    isBestSeller: true,
  },
];

// ── Updated ALL_PRODUCTS ──────────────────────────────────────
export const ALL_PRODUCTS: Product[] = [
  ...BEST_SELLERS,
  ...NEW_ARRIVALS_PRODUCTS,
  ...ALL_BESTSELLERS,
  ...SCRUNCHIES_PRODUCTS,
  ...HAIR_CLIPS_PRODUCTS,
  ...BOWS_PRODUCTS,
  ...HEADBANDS_PRODUCTS,
  ...COQUETTE_PRODUCTS,
  ...Y2K_PRODUCTS,
  ...CLEAN_GIRL_PRODUCTS,
  ...COLOR_POP_PRODUCTS,
];
