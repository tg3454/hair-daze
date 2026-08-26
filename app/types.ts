export type ProductColor = "pink" | "purple" | "yellow" | "mint";

export type ProductIcon = "scrunchie" | "clip" | "bow" | "headband";

export type Product = {
  name: string;
  category: string;
  price: string;
  rating: string;
  reviews: string;
  badge: string;
  color: ProductColor;
  icon: ProductIcon;
  image?: string;
  slug?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
};

export type Mood = "coquette" | "y2k" | "clean" | "color";

export type Review = {
  name: string;
  handle: string;
  text: string;
  likes: string;
  rotation: string;
  image: string;
};

export type Collection = {
  title: string;
  description: string;
  color: string;
  image: string;
};

export type BrandValue = {
  number: string;
  title: string;
  text: string;
  bg: string;
};

export type BestsellerHighlight = {
  name: string;
  description: string;
  price: string;
  image: string;
};
