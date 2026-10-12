import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CategoryDirectoryCard from "@/components/categories/CategoryDirectoryCard";
import { getCategories, getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Men's Clothing Categories | FORMEN",
  description:
    "Explore our collection of men's shirts, t-shirts, jeans, trousers, casual wear, formal wear and jackets.",
};

export default async function CategoriesPage() {

  const [products, categories] = await Promise.all([getProducts(), getCategories()]);
  const getActiveProductCount = (categorySlug: string) =>
    products.filter((product) => product.categorySlug === categorySlug).length;

  return (
    <>
      <Navbar />

      <main className=" min-h-screen overflow-x-hidden bg-[#F7F5F1]">
        <section className="max-w-screen-xl mx-auto px-5 py-16 lg:px-10 md:py-24">
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                THE WARDROBE
              </p>
              <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl lg:text-6xl">
                SHOP BY CATEGORY.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#6B6862] md:text-right">
              Find the right pieces for every part of your wardrobe.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryDirectoryCard
                key={category.id}
                category={category}
                productCount={getActiveProductCount(category.slug)}
              />
            ))}
          </div>
        </section>

        <section className="bg-[#181818] text-[#F7F5F1]">
          <div className="max-w-screen-xl mx-auto px-5 py-20 text-center lg:px-10 md:py-28">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#D9D5CE]">
              THE COMPLETE COLLECTION
            </p>
            <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              FIND YOUR NEXT
              <br />
              EVERYDAY ESSENTIAL.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-[#D9D5CE] md:text-lg">
              Explore the full collection and discover pieces made for your
              wardrobe.
            </p>
            <Link
              href="/shop"
              className="mt-9 inline-block bg-[#F7F5F1] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] transition-all duration-300 hover:bg-[#9A7653] hover:text-[#F7F5F1]"
            >
              Shop all products →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
