import { ShopPageLayout } from "../../components/ShopPageLayout";
import { SCRUNCHIES_PRODUCTS } from "../../data";

export default function ScrunchiesPage() {
  return (
    <ShopPageLayout
      title="SCRUNCHIES"
      subtitle="Soft. Fun. Everyday."
      eyebrow="FIND YOUR FAVORITE"
      heroGradient="bg-[#FF7EAD]"
      heroTextAccent="#F6327B"
      products={SCRUNCHIES_PRODUCTS}
      decorColor="#FFB5D0"
    />
  );
}
