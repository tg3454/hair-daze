import { VibePageLayout } from "../../components/VibePageLayout";
import { COQUETTE_PRODUCTS } from "../../data";

export default function CoquettePage() {
  return (
    <VibePageLayout
      vibeTitle="COQUETTE"
      heroTitle="YOUR COQUETTE"
      subtitle="DAZE ✦"
      eyebrow="YOUR COQUETTE DAZE ✦"
      ctaText="SHOP THE COQUETTE EDIT →"
      ctaLink="/shop/bows"
      heroBg="bg-[#FFB8D2]"
      heroText="white"
      heroAccent="#F6327B"
      cardBg="bg-[#FFE0EB]"
      products={COQUETTE_PRODUCTS}
    />
  );
}
