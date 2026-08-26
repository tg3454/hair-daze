import { ShopPageLayout } from "../../components/ShopPageLayout";
import { HAIR_CLIPS_PRODUCTS } from "../../data";

export default function HairClipsPage() {
  return (
    <ShopPageLayout
      title="HAIR CLIPS"
      subtitle="Cute. Bold. Effortless."
      eyebrow="SHOP BY CATEGORY"
      heroGradient="bg-[#B49AFF]"
      heroTextAccent="#7454D9"
      products={HAIR_CLIPS_PRODUCTS}
      decorColor="#E8E1FF"
    />
  );
}
