import { ShopPageLayout } from "../../components/ShopPageLayout";
import { BOWS_PRODUCTS } from "../../data";

export default function BowsPage() {
  return (
    <ShopPageLayout
      title="BOWS"
      subtitle="Pretty. Playful. Chic."
      eyebrow="SHOP BY CATEGORY"
      heroGradient="bg-[#FFD84D]"
      heroTextAccent="#E4B800"
      products={BOWS_PRODUCTS}
      decorColor="#FFF0B0"
    />
  );
}
