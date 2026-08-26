import { ShopPageLayout } from "../components/ShopPageLayout";
import { ALL_CATEGORY_PRODUCTS } from "../data";

export default function ShopPage() {
  return (
    <ShopPageLayout
      title="ALL"
      subtitle="ACCESSORIES."
      eyebrow="SHOP HAIRDAZE"
      heroGradient="bg-[#FF5B9A]"
      heroTextAccent="#F6327B"
      products={ALL_CATEGORY_PRODUCTS}
    />
  );
}
