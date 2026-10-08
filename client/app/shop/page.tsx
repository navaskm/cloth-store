import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopClient from "@/components/shop/ShopClient";
import ShopEditorialCTA from "@/components/shop/ShopEditorialCTA";
import { ALL_PRODUCTS } from "@/lib/mockData";

export const metadata: Metadata = {
  title: "Shop Men's Collection — FORMEN",
  description:
    "Browse our complete collection of contemporary menswear. Shirts, T-Shirts, Jeans, Trousers, Casual & Formal Wear, Jackets.",
};

// Only include active products. In production, replace with an API/DB query.
const activeProducts = ALL_PRODUCTS.filter((p) => p.isActive !== false);

export default function ShopPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 bg-[#F7F5F1] min-h-screen">
        {/* Page header */}
        <ShopHeader productCount={activeProducts.length} />

        {/* All interactive shop logic (client component) */}
        <ShopClient products={activeProducts} />

        {/* Editorial CTA before footer */}
        <ShopEditorialCTA />
      </main>

      <Footer />
    </>
  );
}