import { VibePageLayout } from "../../components/VibePageLayout";
import { CLEAN_GIRL_PRODUCTS } from "../../data";

export default function CleanGirlPage() {
  return (
    <VibePageLayout
      vibeTitle="CLEAN GIRL"
      heroTitle="YOUR CLEAN GIRL"
      subtitle="DAZE ✦"
      eyebrow="YOUR CLEAN GIRL DAZE ✦"
      ctaText="SHOP THE CLEAN EDIT →"
      ctaLink="/shop/headbands"
      heroBg="bg-[#CBEBDD]"
      heroText="white"
      heroAccent="#249D85"
      cardBg="bg-[#D7F7EE]"
      products={CLEAN_GIRL_PRODUCTS}
    />
  );
}
