import { VibePageLayout } from "../../components/VibePageLayout";
import { COLOR_POP_PRODUCTS } from "../../data";

export default function ColorPopPage() {
  return (
    <VibePageLayout
      vibeTitle="COLOR POP"
      heroTitle="COLOUR YOUR"
      subtitle="DAZE ✦"
      eyebrow="COLOUR YOUR DAZE ✦"
      ctaText="SHOP THE COLOR POP EDIT →"
      ctaLink="/shop"
      heroBg="bg-[#FFD84D]"
      heroText="white"
      heroAccent="#E4B800"
      cardBg="bg-[#FFF0B0]"
      products={COLOR_POP_PRODUCTS}
    />
  );
}
