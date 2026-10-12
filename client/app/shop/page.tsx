import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopClient from "@/components/shop/ShopClient";
import ShopEditorialCTA from "@/components/shop/ShopEditorialCTA";
import { getCategories, getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Shop Men's Collection — FORMEN",
  description:
    "Browse our complete collection of contemporary menswear. Shirts, T-Shirts, Jeans, Trousers, Casual & Formal Wear, Jackets.",
};

// Only include active products. In production, replace with an API/DB query.
export default async function ShopPage() {
  const [activeProducts, categories] = await Promise.all([getProducts(), getCategories()]);
  return (
    <>
      <Navbar />

      <main className="mt-16 bg-[#F7F5F1] min-h-screen">
        {/* Page header */}
        <ShopHeader productCount={activeProducts.length} />

        {/* All interactive shop logic (client component) */}
        <ShopClient products={activeProducts} categories={categories} />

        {/* Editorial CTA before footer */}
        <ShopEditorialCTA />
      </main>

      <Footer />
    </>
  );
}
