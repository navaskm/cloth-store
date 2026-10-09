import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CategoryDirectoryCard from "@/components/categories/CategoryDirectoryCard";
import { CATEGORIES } from "@/lib/catalogData";
import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Men's Clothing Categories | FORMEN",
  description:
    "Explore our collection of men's shirts, t-shirts, jeans, trousers, casual wear, formal wear and jackets.",
};

export default async function CategoriesPage() {
  const products = await getProducts();
  const [featuredCategory, ...directoryCategories] = CATEGORIES;
  const getActiveProductCount = (categorySlug: string) =>
    products.filter((product) => product.categorySlug === categorySlug).length;

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="mt-24 min-h-screen overflow-x-hidden bg-[#F7F5F1]">

        <section className="max-w-screen-xl mx-auto px-5 pt-10 pb-16 lg:px-10 md:pt-14 md:pb-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
            <div>
              <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-[#9A7653]">
                THE COLLECTION
              </p>
              <h1 className="max-w-4xl font-editorial text-5xl leading-[0.94] tracking-[-0.05em] text-[#171717] md:text-6xl lg:text-[5rem]">
                EXPLORE OUR
                <br />
                COLLECTION.
              </h1>
            </div>
            <div className="max-w-md lg:pb-1">
              <p className="text-base leading-relaxed text-[#6B6862] md:text-lg">
                Discover carefully selected menswear designed for everyday
                confidence, effortless style and modern living.
              </p>
              <Link
                href="/shop"
                className="mt-7 inline-block border-b border-[#171717]/40 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] transition-colors duration-200 hover:border-[#9A7653] hover:text-[#9A7653]"
              >
                Shop all products →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D9D5CE] bg-[#EFECE6]">
          <div className="max-w-screen-xl mx-auto px-5 py-16 lg:px-10 md:py-24">
            <div className="mb-10 max-w-2xl md:mb-14">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                FEATURED CATEGORY
              </p>
              <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl lg:text-6xl">
                ESSENTIALS, REFINED.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#6B6862] md:text-lg">
                From everyday staples to polished occasion wear, explore pieces
                designed to become part of your everyday wardrobe.
              </p>
            </div>

            <CategoryDirectoryCard
              category={featuredCategory}
              productCount={getActiveProductCount(featuredCategory.slug)}
              featured
            />
          </div>
        </section>

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
            {directoryCategories.map((category) => (
              <CategoryDirectoryCard
                key={category.id}
                category={category}
                productCount={getActiveProductCount(category.slug)}
              />
            ))}
          </div>
        </section>

        <section className="border-y border-[#D9D5CE]">
          <div className="max-w-screen-xl mx-auto grid gap-8 px-5 py-16 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 md:py-24">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#EFECE6] lg:aspect-[5/4]">
              <Image
                src={featuredCategory.editorialImageUrl}
                alt={featuredCategory.editorialImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="max-w-xl">
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#6B6862]">
                BUILT AROUND YOUR STYLE
              </p>
              <h2 className="font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#171717] md:text-5xl lg:text-6xl">
                EVERYDAY PIECES.
                <br />
                CONSIDERED DETAILS.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#6B6862] md:text-lg">
                Explore versatile menswear designed to move effortlessly between
                work, weekends, evenings and everything in between.
              </p>
              <Link
                href="/shop"
                className="mt-8 inline-block bg-[#171717] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F5F1] transition-all duration-300 hover:bg-[#9A7653]"
              >
                View the collection →
              </Link>
            </div>
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
