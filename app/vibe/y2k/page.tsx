import { VibePageLayout } from "../../components/VibePageLayout";
import { Y2K_PRODUCTS } from "../../data";

export default function Y2KPage() {
  return (
    <VibePageLayout
      vibeTitle="Y2K"
      heroTitle="ENTER YOUR Y2K"
      subtitle="DAZE ✦"
      eyebrow="ENTER YOUR Y2K DAZE ✦"
      ctaText="SHOP THE Y2K EDIT →"
      ctaLink="/shop/hair-clips"
      heroBg="bg-[#9D82F7]"
      heroText="white"
      heroAccent="#7454D9"
      cardBg="bg-[#E8E1FF]"
      products={Y2K_PRODUCTS}
    />
  );
}
