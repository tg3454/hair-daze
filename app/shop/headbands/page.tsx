import { ShopPageLayout } from "../../components/ShopPageLayout";
import { HEADBANDS_PRODUCTS } from "../../data";

export default function HeadbandsPage() {
  return (
    <ShopPageLayout
      title="HEADBANDS"
      subtitle="Classic. Cool. Comfy."
      eyebrow="SHOP BY CATEGORY"
      heroGradient="bg-[#75DFC4]"
      heroTextAccent="#249D85"
      products={HEADBANDS_PRODUCTS}
      decorColor="#D7F7EE"
    />
  );
}
