"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ShopByCategory } from "./components/ShopByCategory";
import { BestSellers } from "./components/BestSellers";
import { NewDrop } from "./components/NewDrop";
import { ShopByMood } from "./components/ShopByMood";
import { CustomerLove } from "./components/CustomerLove";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { CartPopup } from "./components/CartPopup";

export default function Home() {
  return (
    <AuthProvider>
      <CartProvider>
        <main className="min-h-screen overflow-hidden bg-[#FFF9F3] text-[#29152F]">
          <Navbar />
          <Hero />
          <Features />
          <ShopByCategory />
          <BestSellers />
          <NewDrop />
          <ShopByMood />
          <CustomerLove />
          <FinalCTA />
          <Footer />
          <CartPopup />
        </main>
      </CartProvider>
    </AuthProvider>
  );
}
