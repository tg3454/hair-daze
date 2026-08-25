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
